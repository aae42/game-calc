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

# update css dependencies
update-dependencies:
  mkdir -p public/css
  curl "https://github.com/picocss/pico/archive/refs/heads/main.zip" --location -o public/css/pico.zip
  unzip -j -o public/css/pico.zip pico-main/css/pico.min.css -d public/css/
  rm public/css/pico.zip
