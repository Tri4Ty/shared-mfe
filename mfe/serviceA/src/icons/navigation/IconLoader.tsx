import React from "react";
import ReactDOM, { unmountComponentAtNode } from "react-dom";

import DesignerIcon from "./DesignerIcon";
import DesignerTileIcon from "./DesignerTileIcon";
import { DefaultLoader, IconLoaderOption, IconType } from "models/loaders";

// IconLoader is exposed to other MFEs and container application via getMfeConfig for mounting and unmounting of the exposed icons.
function IconLoader(): DefaultLoader<IconLoaderOption> {
	const mount = (el: HTMLElement | null, options: IconLoaderOption) => {
		const iconType = options.iconType;

		// These Icons are cloned svg from maas-ui, not pulled from maas-icons. These icons use className for fill, stroke attributes and the css classes
		// are defined in maas-ui container to control hover color, selected color and theme color so that these icons have the same look and feel as
		// other icons displayed in the left menu and home landing page.
		switch (iconType) {
			case IconType.test1HomeMenu:
				ReactDOM.render(<DesignerIcon key={options.key} data-qa={options.dataQa} />, el);
				break;
			case IconType.test1HomeTile:
				ReactDOM.render(<DesignerTileIcon key={options.key} data-qa={options.dataQa} />, el);
				break;
			default:
				break;
		}
	};

	return {
		mount,
		unmount: unmountComponentAtNode
	};
}

export default IconLoader;
