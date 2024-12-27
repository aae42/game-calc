# this list
default:
  just --list

# run tests
test: test-unit

# run unit tests
test-unit:
  bun test

# serve the page locally
serve:
  @echo "Serving on http://localhost:8080 ..."
  caddy run --config test/Caddyfile --watch

# download simple css
download-css:
  curl --output public/css/simple.min.css --create-dirs https://cdn.simplecss.org/simple.min.css
