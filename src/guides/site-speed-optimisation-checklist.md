---
title: 'Site Speed Optimisation Checklist'
description: 'Improve your website speed and enhance user experience with this site speed optimisation checklist for all the key performance areas of your website.'
seo: 
    title: 'Site Speed Optimisation Checklist | George McEntegart'
    description: 'Improve your website speed and enhance user experience with this site speed optimisation checklist for all the key performance areas of your website.'
date: 2023-04-07
layout: "post"
---

{% imagePlaceholder "./src/assets/images/free-guides/site-speed-checklist.jpg", "Website speed optimisation checklist" %}

Website site speed and page load times are extremely important.

Slow loading times can lead to high bounce rates, low user engagement, and bad search engine rankings.

This checklist includes some essential steps that you can take to enhance your website's performance, such as optimizing images, minimizing HTTP requests, enabling caching, using a content delivery network (CDN), and more.

## Website Speed Improvement Checklist

- Use [GTMetrix](https://gtmetrix.com/) and [Pagespeed Insights](https://pagespeed.web.dev/) to test your website loading performance
- Make sure all requests are sent via HTTPS (not HTTP)
- Host your website on a dedicated server with a SSD (Solid State Drive)
- Use a CDN (Content Delivery Network). A few good options are:
    - [Google's Cloud CDN](https://cloud.google.com/cdn)
    - [BunnyCDN](https://bunny.net/)
    - [Amazon Cloudfront](https://aws.amazon.com/cloudfront/)
- Serve all static files either from a static subdomain or CDN
- Make sure your website is mobile-friendly
- Remove all unnecessary redirects
- Remove unused CSS, you can use the [Chrome Developer Tools](https://developer.chrome.com/docs/devtools/) to find unused CSS
- Minify HTML, CSS and JS. There are several open-source tools available for this:
    - Minify HTML with [HTMLMinifier](https://www.npmjs.com/package/html-minifier)
    - Minify CSS with [CSSNano](https://cssnano.co/) or [csso](https://github.com/css/csso)
    - Minify JavaScript with [UglifyJS](https://www.npmjs.com/package/uglify-js) or [Closure Compiler](https://developers.google.com/closure/compiler)
- Enable Gzip/Brotli file compression to reduce file sizes
- Properly size all images before uploading, instead of using HTML and CSS to resize them
- Don't overcomplicate your site architecture. Google crawlers should be able to find every single one of your web pages in a maximum of three clicks
- Don't overdo it with WordPress plugins, that might slow your site down. Deactivate any unused plugins

## WordPress Site Speed Plugins 

If you're using WordPress, most of the above can be achieved by using the following plugins:

- [WP Rocket](https://wp-rocket.me/) does 90% of the above checklist
- [Smush](https://wordpress.org/plugins/wp-smushit/) allows you to (losslessly) compress all images on your website in one click