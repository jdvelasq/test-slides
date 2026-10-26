#!/bin/sh
# Genera con Aider las slides que faltan o están vacías, a partir de prompts/NNN.txt.
# Hace un commit por slide solo si el archivo quedó con contenido.
# Uso: tools/generar_faltantes.sh [carpeta-de-prompts]
cd "$(dirname "$0")/.."
P=${1:-/Volumes/GitHub/agentic-playground/presentacion/prompts}
[ -d "$P" ] || { echo "No existe $P" >&2; exit 1; }

for p in "$P"/*.txt; do
  n=$(basename "$p" .txt)
  f=slides/$n.js
  [ -s "$f" ] && continue
  echo "== Slide $n"
  aider --yes-always --no-auto-test --edit-format whole --no-suggest-shell-commands \
    --file "$f" --message-file "$p"
  if grep -q 'diapositiva(`' "$f"; then
    git add "$f" && git commit -q -m "Generar slide $n con Aider"
  else
    echo "Slide $n: falló"
  fi
done
