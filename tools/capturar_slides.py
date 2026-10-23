"""Captura la presentación local con Playwright, sin servidor ni compilación."""
import argparse
from pathlib import Path

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--slides", default="2", help="Números separados por comas; por defecto: 2")
    parser.add_argument("--all", action="store_true", help="Capturar todas las diapositivas")
    parser.add_argument("--output", type=Path, default=ROOT / ".artifacts" / "playwright")
    args = parser.parse_args()
    with sync_playwright() as pw:
        browser = pw.chromium.launch()
        try:
            page = browser.new_page(viewport={"width": 1920, "height": 1080}, device_scale_factor=1, reduced_motion="reduce")
            errors = []
            page.on("pageerror", lambda error: errors.append(str(error)))
            page.goto((ROOT / "index.html").as_uri(), wait_until="load")
            page.locator("#stage > section.activa").wait_for(state="visible")
            count = page.locator("#stage > section").count()
            numbers = list(range(1, count + 1)) if args.all else [int(n.strip()) for n in args.slides.split(",")]
            if any(n < 1 or n > count for n in numbers):
                parser.error(f"Los números deben estar entre 1 y {count}")
            args.output.mkdir(parents=True, exist_ok=True)
            for number in numbers:
                page.evaluate("n => { location.hash = '/' + n; }", number)
                page.locator(f"#stage > section:nth-child({number}).activa").wait_for(state="visible")
                page.screenshot(path=str(args.output / f"{number:03}.png"))
            if errors:
                raise RuntimeError("Errores JavaScript: " + "; ".join(errors))
            print(f"Cargadas {count} diapositivas; capturadas {len(numbers)} en {args.output}")
        finally:
            browser.close()


if __name__ == "__main__":
    main()
