import { bootstrap } from "serviceB/ServiceBApp";
import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

function ServiceBApp() {
	const ref = useRef(null);
	const history = useHistory();

	useEffect(() => {
		const { onContainerNavigate } = bootstrap(ref.current, {
			initalPathname: history.location.pathname,
			onNavigate: ({ pathname: nextPathname }: { pathname: string }) => {
				// rename pathname to nextPathname
				const { pathname } = history.location;

				if (pathname !== nextPathname) {
					// notify the shell container to update the URL of the browser router
					history.push(nextPathname);
				}
			}
		});

		history.listen(onContainerNavigate);
	}, []);

	return <div ref={ref} />;
}

export default ServiceBApp;
