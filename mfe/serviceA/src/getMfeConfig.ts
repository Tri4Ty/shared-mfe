import IconLoader from "icons/navigation/IconLoader";
import { DefaultLoader, IconLoaderOption, IconType } from "models/loaders";

export interface EntryPoint {
	id: string;
	title: string;
	route: string;
	navigation?: Navigation;
}

export interface Navigation {
	tooltip: string;
	description: string;
	display: boolean;
	disabled: boolean;
	menu?: NavigationMenu;
	card?: NavigationCard;
}

export interface NavigationMenu {
	menuItem: string;
	icon: string;
	iconType: string;
	iconLoader: () => DefaultLoader<IconLoaderOption>;
	mode?: string;
	dataQa?: string;
}

export interface NavigationCard {
	cardId: string;
	iconType: string;
	iconLoader: () => DefaultLoader<IconLoaderOption>;
	dataQa?: string;
}

export interface MfeConfig {
	title: string;
	baseRoute: string;
	leftMenuGroupId?: string;
	leftMenuGroupDataQa?: string;
	hasOwnLeftMenuGroup?: boolean;
	homeSectionId?: string;
	homeSectionDataQa?: string;
	hasOwnHomeSection?: boolean;
	entryPoints: EntryPoint[];
}

function GetMfeConfig(): MfeConfig {
	const entryPoints: EntryPoint[] = [
		{
			id: "test1Home",
			navigation: {
				card: {
					cardId: "test1Home",
					dataQa: "goToTest1HomeCardLink",
					iconLoader: IconLoader,
					iconType: IconType.test1HomeTile
				},
				description: "Home of your Test 1 Application",
				disabled: false,
				display: true,
				menu: {
					dataQa: "test1HomeMenu",
					icon: "test1Home-icon",
					iconLoader: IconLoader,
					iconType: IconType.test1HomeMenu,
					menuItem: "test1Home",
					mode: ""
				},
				tooltip: "Home"
			},
			route: "",
			title: "Home"
		}
	];

	return {
		entryPoints: entryPoints,
		hasOwnHomeSection: true,
		hasOwnLeftMenuGroup: true,
		homeSectionDataQa: "test1",
		homeSectionId: "test1",
		leftMenuGroupDataQa: "test1-menu",
		leftMenuGroupId: "test1-id",
		title: "Test 1 Application",
		baseRoute: "test1"
	};
}

export default GetMfeConfig;
