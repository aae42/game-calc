# this list
default:
  just --list

# serve the page locally
serve:
  @echo "Serving on http://localhost:8080 ..."
  caddy file-server --root public/ --listen :8080

# download simple css
download-css:
  curl --output public/css/simple.min.css --create-dirs https://cdn.simplecss.org/simple.min.css
