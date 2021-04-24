import React from "react";
import Root from "./root";

export const wrapRootElement = ({ element }) => <Root>{element}</Root>;

export const shouldUpdateScroll = (
  { routerProps: { location }, getSavedScrollPosition },
  pluginOptions = {}
) => {
  const preventScrollIfIncludes = pluginOptions.preventScrollIfIncludes;
  if (
    preventScrollIfIncludes &&
    preventScrollIfIncludes.some((str) => location.search.includes(str))
  ) {
    return false;
  }
  const currentPosition = getSavedScrollPosition(location);
  return currentPosition || [0, 0];
};
