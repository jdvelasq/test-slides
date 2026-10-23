# Stack local para editar las diapositivas

Modelos locales en un Mac con Apple Silicon (M3 Max, 36 GB):

- **Ollama** ejecuta el modelo y lo expone en `http://127.0.0.1:11434`.
- **Qwen3-Coder 30B-A3B** escribe y edita las slides.
- **Aider** es el agente que edita los archivos del repo.
- **Chrome** muestra el resultado: refrescas la página tras cada cambio.

Todos los comandos se ejecutan desde la raíz del repo.

## Paso 1. Instala Ollama

Descarga la aplicación oficial y cópiala en Aplicaciones:

```sh
curl -L -o ~/Downloads/Ollama.dmg https://ollama.com/download/Ollama.dmg
hdiutil attach ~/Downloads/Ollama.dmg
cp -R /Volumes/Ollama/Ollama.app /Applications/
hdiutil detach /Volumes/Ollama
open -a Ollama
```

La primera vez que se abre, Ollama pide permiso para instalar el comando `ollama` en la terminal: acéptalo. Desde entonces queda en la barra de menús y arranca solo al iniciar sesión. Comprueba en una terminal nueva:

```sh
ollama --version
```

## Paso 2. Descarga el modelo

```sh
ollama pull qwen3-coder:30b   # unos 19 GB
```

## Paso 3. Crea una variante del modelo con 32k de contexto

Ollama usa por defecto un contexto corto. Con menos de 32k, el agente pierde las reglas de `AGENTS.md`. Crea una variante que siempre cargue con 32k:

```sh
cat > ~/qwen3-coder-32k.Modelfile <<'EOF'
FROM qwen3-coder:30b
PARAMETER num_ctx 32768
EOF
ollama create qwen3-coder-32k -f ~/qwen3-coder-32k.Modelfile
ollama list   # debe aparecer qwen3-coder-32k
```

Comprueba que responde:

```sh
ollama run qwen3-coder-32k "Responde solo: listo"
```

## Paso 4. Instala Aider

```sh
uv tool install --python 3.12 aider-chat
aider --version
```

## Paso 5. Configura Aider para este proyecto

Crea `.aider.conf.yml` en la raíz del repo:

```yaml
model: ollama_chat/qwen3-coder-32k
set-env:
  - OLLAMA_API_BASE=http://127.0.0.1:11434
edit-format: diff
read:
  - AGENTS.md
auto-commits: false
map-tokens: 1024
```

Crea `.aider.model.metadata.json` en la raíz del repo, para que Aider conozca el tamaño del contexto:

```json
{
  "ollama_chat/qwen3-coder-32k": {
    "max_input_tokens": 32768,
    "max_output_tokens": 8192,
    "max_tokens": 8192,
    "input_cost_per_token": 0,
    "output_cost_per_token": 0,
    "litellm_provider": "ollama_chat",
    "mode": "chat"
  }
}
```

Excluye de Git los archivos de Aider, para que no se publiquen en GitHub Pages:

```sh
echo ".aider*" >> .gitignore
```

## Paso 6. Comprueba el ciclo completo

1. Abre la presentación en Chrome (doble clic en `index.html`) y ve a la slide 7 con `#/7` en la URL.
2. Abre Aider con esa slide:

   ```sh
   aider slides/007.js
   ```

3. Pídele un cambio pequeño, por ejemplo: "Acorta el título de esta diapositiva sin cambiar su idea".
4. Refresca Chrome (`Cmd+R`) y revisa el resultado. Si la slide no aparece o la presentación se corta, abre la consola (`Cmd+Opt+J`): suele ser una comilla invertida o un `${` dentro del HTML. Pega el error en Aider para que lo corrija.
5. Revisa el cambio con `git diff`. Si no te sirve, deshazlo con `git checkout slides/007.js`.

Si los seis pasos funcionan, el stack queda listo.

## Opcional: revisar todas las slides de una vez

Después de cambiar el tema (`tokens.css`, `layouts.css`, `components.css`), conviene revisar todas las slides. El script de capturas genera un PNG por slide y falla si alguna tiene errores de JavaScript:

```sh
uv pip install --python .venv/bin/python -r requirements-dev.txt
.venv/bin/python -m playwright install chromium
.venv/bin/python tools/capturar_slides.py --all
```

Las imágenes quedan en `.artifacts/playwright/`.
