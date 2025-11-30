module.exports = {
  // Ak používaš verziu Jest >= 27, nie je potrebné špecifikovať testRunner
  // Jest bude predvolene používať jest-circus ako test runner

  testRunner: "jest-circus/runner", // Tento riadok môžeš pridať, ak používaš staršiu verziu Jest

  // Definovanie cesty pre testovacie súbory
  testMatch: ["**/?(*.)+(spec|test).[tj]s?(x)"],

  // Ak používaš transformáciu pre JSX alebo TypeScript
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest", // Prispôsob pre tvoje nastavenia
  },

  // Ak používaš test coverage (meranie pokrytia testami)
  collectCoverage: true,
};
