/** Returns all blog posts as a collection. */
// const getAllPosts = collection => {
//   const projects = collection.getFilteredByGlob('./src/posts/*.md');
//   return projects.reverse();
// };

/** Returns all products as a collection. */
const getAllProducts = collection => {
  const products = collection.getFilteredByGlob('./src/products/*.md');
  return products;
};

/** Returns all free guides as a collection. */
const getAllGuides = collection => {
  const guides = collection.getFilteredByGlob('./src/guides/*.md');
  return guides;
};

/** Returns all newsletters as a collection. */
const getAllNewsletters = collection => {
  const newsletters = collection.getFilteredByGlob('./src/newsletters/*.md');
  return newsletters;
};

/** Returns all testimonials as a collection. */
const getAllTestimonials = collection => {
  const testimonials = collection.getFilteredByGlob('./src/testimonials/*.md');
  return testimonials;
};

/** Returns all Guides and testimonials as a collection. Needed for social preview auto generated images */
const getAllGuidesAndNewsletters = collection => {
  const guides = collection.getFilteredByGlob('./src/guides/*.md');
  const newsletters = collection.getFilteredByGlob('./src/newsletters/*.md');
  const guidesandnewsletters = [...guides, ...newsletters];
  return guidesandnewsletters;
};


module.exports = {
  // getAllPosts,
  getAllProducts,
  getAllGuides,
  getAllNewsletters,
  getAllTestimonials,
  getAllGuidesAndNewsletters
};
