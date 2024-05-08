/* eslint-disable no-console */
import { configure } from "@testing-library/dom";
import mediaQuery from "css-mediaquery";

configure({
	testIdAttribute: "data-qa"
});

function createMatchMedia(width: number) {
	return (query: string): MediaQueryList => ({
		media: "",
		matches: mediaQuery.match(query, { width }),
		addListener: () => null,
		removeListener: () => null,
		addEventListener: () => null,
		removeEventListener: () => null,
		onchange: () => null,
		dispatchEvent: () => true
	});
}
globalThis.innerWidth = globalThis.outerWidth = 1600;
globalThis.matchMedia = createMatchMedia(globalThis.innerWidth);
