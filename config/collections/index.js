/** Returns all blog posts as a collection. */
// const getAllPosts = collection => {
//   const projects = collection.getFilteredByGlob('./src/posts/*.md');
//   return projects.reverse();
// };

/** Returns all products as as a collection. */
const getAllProducts = collection => {
  const projects = collection.getFilteredByGlob('./src/products/*.md');
  return projects;
};

/** Returns all free guides as as a collection. */
const getAllGuides = collection => {
  const guides = collection.getFilteredByGlob('./src/guides/*.md');
  return guides;
};

/** Returns all newsletters as as a collection. */
const getAllNewsletters = collection => {
  const newsletters = collection.getFilteredByGlob('./src/newsletter/*.md');
  return newsletters;
};

/** Returns all testimonials as as a collection. */
const getAllTestimonials = collection => {
  const testimonials = collection.getFilteredByGlob('./src/testimonials/*.md');
  return testimonials;
};


module.exports = {
  // getAllPosts,
  getAllProducts,
  getAllGuides,
  getAllNewsletters,
  getAllTestimonials
};
