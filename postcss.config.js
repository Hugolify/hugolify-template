/**
 * PostCSS config — fallback (project root)
 *
 * This config is used when no specific PostCSS config directory is set via
 * params.css.postcss in your styling module's hugo.yaml.
 *
 * Each styling module ships its own config in a dedicated directory:
 *   postcss/design-system/postcss.config.js  → hugolify-theme-design-system
 *   postcss/bootstrap/postcss.config.js      → hugolify-theme-bootstrap
 */
module.exports = {
  plugins: [
    require('autoprefixer')
  ]
};
