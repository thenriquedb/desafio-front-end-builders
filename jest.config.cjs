module.exports = {
  roots: ["src/"],
  setupFilesAfterEnv: ["./jest.setup.ts"],
  moduleFileExtensions: ["js", "ts", "tsx"],
  testPathIgnorePatterns: ["node_modules/"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.ts?$": "ts-jest",
  },
  testMatch: ["**/src/**/*.(test|spec).(ts|tsx)"],
  moduleNameMapper: {
    "^@features(.*)": "<rootDir>/src/features/$1",
    "^@theme(.*)": "<rootDir>/src/theme/$1",
    // Mocks out all these file formats when tests are run.
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "identity-obj-proxy",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
};
