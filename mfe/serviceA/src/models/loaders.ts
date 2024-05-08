export interface DefaultLoaderOption {
	key?: string;
	dataQa?: string;
	history?: string;
}

export interface IconLoaderOption extends DefaultLoaderOption {
	iconType: string;
}

export interface DefaultLoader<T extends DefaultLoaderOption> {
	mount: (el: HTMLElement | null, options: T) => void;
	unmount: (container: Element | DocumentFragment) => boolean;
}

export const IconType = {
	test1HomeMenu: "test1HomeMenu",
	test1HomeTile: "test1HomeTile"
};
