import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  // Test configuration settings
  test: {
    // Setup files to be run before each test suite
    setupFiles: './test.config.ts',
    // Testing environment to use (e.g., jsdom, node, etc.)
    environment: 'jsdom',
    // Reporters to use for reporting test results
    reporters: ['default', 'json', 'html', 'hanging-process'],
    // Output file paths for different types of reports
    outputFile: {
      junit: './test-report/junit-report.xml',
      json: './test-report/json-report.json',
    },
    // Patterns for including test files
    include: ['**/*.{test,spec}.?(c|m)[jt]s?(x)'],
    // Patterns for excluding test files
    exclude: [
      // Exclude default patterns
      ...configDefaults.exclude,
      // Exclude test files within src directory
      './src/**/*.{test}.{ts,tsx}'
    ],
    // Configuration for test coverage analysis
    coverage: {
      // Reporters to use for coverage reports
      reporter: ['text', 'json', 'html'],
      // Patterns for excluding files from coverage analysis
      exclude: [
        // Exclude default patterns
        ...(configDefaults.coverage.exclude || []) as string[],
        // Additional files to exclude from coverage analysis
        "*.config.js",
        "*.config.cjs",
        "**/html/*",
        "lib/main.ts",
        "src/main.tsx",
        "src/App.tsx",
      ],
      // Patterns for including files in coverage analysis
      include: [
        // Include default patterns
        ...(configDefaults.coverage.include || []) as string[],
      ]
    },
  },
})
