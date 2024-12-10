// Plugins
import utilPlugin from "./util";
import highlight from "./highlight";

export function registerPlugins(app) {
  app.use(utilPlugin);

  // Code highlight
  if (import.meta.env?.VITE_USE_SAMPLE === "true") {
    app.use(highlight);
  }
}
