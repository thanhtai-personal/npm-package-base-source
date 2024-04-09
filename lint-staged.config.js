module.exports = {
    "**/*.{md,json, ts, tsx, cjs, js}": ["prettier --write"],
    "**/*.{ts,tsx,cjs,js}": (filenames) => `eslint --fix ${filenames.join(" ")}`,
  };
  