/** Returns all blog posts as a collection. */
const getAllPosts = collection => {
  const projects = collection.getFilteredByGlob('./src/posts/*.md');
  return projects.reverse();
};

/** Returns all products as as a collection. */
const getAllProducts = collection => {
  const projects = collection.getFilteredByGlob('./src/products/*.md');
  return projects;
};

module.exports = {
  getAllPosts,
  getAllProducts
};
