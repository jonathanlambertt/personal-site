import { createRouter } from "@tanstack/react-router";

import { routeTree } from "./routeTree.gen";

function NotFound() {
	return <p>Not Found</p>;
}

export const getRouter = () => {
	return createRouter({
		routeTree,
		scrollRestoration: true,
		defaultPreloadStaleTime: 0,
		defaultNotFoundComponent: NotFound,
	});
};
