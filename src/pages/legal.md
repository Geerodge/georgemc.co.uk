---
title: Legal notice
seo:
  title: Legal notice | George McEntegart
description: Legal stuff
layout: page
permalink: /legal/index.html
eleventyExcludeFromCollections: true
excludeFromSitemap: true
noindex: true
---

{{ meta.address.name }}
{{ meta.address.street }}
{{ meta.address.town }}, {{ meta.address.county }}
{{ meta.address.postcode }}

Tel: <a href="tel:{{ meta.address.mobileCall }}">{{ meta.address.mobileDisplay }}</a>
Mail: <a href="mailto:{{ meta.address.email }}">{{ meta.address.email }}</a>
