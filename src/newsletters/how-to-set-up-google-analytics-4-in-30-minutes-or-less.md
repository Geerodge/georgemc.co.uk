---
title: "How to Set Up Google Analytics 4 in 30 Minutes or Less"
description: "Step-by-step instructions to get your website tracking up and running in just 30 minutes or less. Harness the power of data to understand your audience."
seo:
    title: "How to Set Up Google Analytics 4 in 30 Minutes or Less"
    description: "Step-by-step instructions to get your website tracking up and running in just 30 minutes or less. Harness the power of data to understand your audience."
date: 2023-06-11
layout: "post"
---

*This is an article from [The Business Boost & Build Newsletter](/newsletter)*. 

*It's once a week and includes one tip from me and three resources from others.*

{% imagePlaceholder "./src/assets/images/newsletter/website-analytics.jpg", "Google Analytics 4 (GA4)" %}

[Google Analytics 4](https://support.google.com/analytics/answer/10089681?hl=en) is ready to go and [Universal Analytics is being shutdown](https://support.google.com/analytics/answer/11583528?hl=en) on July 1, 2023.

So, I wanted to post a quick guide on installing GA4 so you can track how people are using your website.

### Creating a Google Analytics 4 Property

1. Go to the [Google Analytics website](analytics.google.com) and sign in with your Google account.
2. Click on the "Admin" option in the bottom left corner.
3. In the "Property" column, click on "Create Property."
4. Select "Web" as the platform and provide the necessary details (property name, reporting time zone, etc.).
5. Click on the "Show advanced options" link and enable the "Create a Universal Analytics property" option if you want to use both GA4 and Universal Analytics (UA).
6. Click on the "Create" button to create your GA4 property.

&nbsp;
### Creating a Google Tag Manager Container

1. Go to the [Google Tag Manager website](tagmanager.google.com) and sign in with your Google account.
2. Click on "Create Account" if you don't have a Google Tag Manager account already, or select an existing account to create a new container.
3. Provide the necessary details for your container (name, target platform, etc.).
4. Accept the Terms of Service and click on the "Create" button.
5. Install the Google Tag Manager container on your website

&nbsp;
### Installing Google Tag Manager on Your Website

Follow the instructions provided by Google Tag Manager to install the GTM container on your website.

This involves adding the GTM container snippet to all the pages of your website, just after the opening <body> tag.

#### Google Tag Manager for WordPress

If you have a WordPress website, I recommend using the [GTM4WP free plugin](https://wordpress.org/plugins/duracelltomi-google-tag-manager/).

&nbsp;
### Configure the Google Tag Manager Container for GA4

1. In your Google Tag Manager container, click on "Add a new tag."
2. Give your tag a descriptive name (e.g., "GA4 - Universal Analytics").
3. Click on the tag configuration section and select "Google Analytics: GA4 Configuration."
4. Configure the tag with your GA4 Measurement ID (e.g., "G-XXXXXXXXXX").
5. Select the desired triggering options. The most common option is to trigger the tag on "All Pages."
6. Click on the "Save" button to save the tag configuration.
7. Publish your changes in Google Tag Manager

Once you have configured the GA4 tag, click on the "Submit" button in the upper right corner of the GTM interface.

Provide a descriptive name for the version of your container.

Review the changes and click on the "Publish" button to make the container changes live on your website.

### Test and Validate the Implementation

After publishing your changes, visit your website and use the [Google Tag Assistant browser extension](https://get.google.com/tagassistant/) or the Real-Time reports in Google Analytics to verify that data is being collected correctly.

Congratulations! You have just successfully set up Google Analytics 4 with Google Tag Manager.

If you got stuck, have any questions, or would like me to do this for you - then please [feel free to contact me](/contact).

This is a very basic set-up of GA4 and there is plenty more you can do, which I'm also happy to help you with.

&nbsp;
### Three Resources From Others

1. [How to create a content flywheel with podcasts](https://twitter.com/nathanbarry/status/1666454820696276993?s=20)
2. [7-step formula copywriting formula](https://www.linkedin.com/posts/eshleyner_vgc-bob-stones-gem-activity-7072553578971746304-kXKh/)
3. [8 types of subject lines that get high open rates](https://twitter.com/thePhilRivers/status/1499054468654145544?s=20)
