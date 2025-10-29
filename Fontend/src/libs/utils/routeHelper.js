export const withBasePath = (basePath, routes, includeBase = true) => {
  const result = Object.fromEntries(
    Object.entries(routes).map(([key, value]) => [key, `${basePath}/${value}`])
  );

  if (includeBase) {
    result.index = basePath;
  }

  return result;
};
