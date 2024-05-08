import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
	verbose: true,
	modulePaths: ["src", "node_modules"],
	moduleFileExtensions: ["tsx", "jsx", "ts", "js", "json"],
	moduleNameMapper: {
		"\\.svg": "<rootDir>/__mocks__/svgrMock.jsx",
		"\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js"
	},
	transform: {
		"^.+\\.(css|less|sass|scss|styl|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "jest-transform-stub",
		"^.+\\.(ts|tsx)?$": "ts-jest"
	},
	testRegex: "\\.test\\.(ts|js|tsx|jsx)$",
	setupFilesAfterEnv: ["<rootDir>/jest.setup.ts", "@testing-library/jest-dom/extend-expect", "@testing-library/jest-dom"],
	preset: "ts-jest",
	testEnvironment: "node",
	collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/icons/**"],
	coverageDirectory: "./coverage",
	coverageReporters: ["json", "lcov", "text", "html"],
	reporters: ["default"],
	globals: {
		"ts-jest": {
			tsconfig: {
				jsx: "preserve"
			},
			babelConfig: true,
			isolatedModules: true
		}
	}
};
export default config;
