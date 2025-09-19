// Shared JS for static Figma-rendered screens
// Utilities to inspect tokens at runtime if needed

(function() {
  // Example: expose design tokens on window for debugging
  const tokens = {
    colors: {
      white: getComputedStyle(document.documentElement).getPropertyValue('--color-ffffff').trim(),
      dark: getComputedStyle(document.documentElement).getPropertyValue('--color-3c2f2f').trim(),
      gray: getComputedStyle(document.documentElement).getPropertyValue('--color-6a6a6a').trim(),
      accent: getComputedStyle(document.documentElement).getPropertyValue('--color-ef2a39').trim(),
    }
  };
  window.designTokens = tokens;

  // No interactive behavior specified by Figma; placeholder for future interactivity.
})();
