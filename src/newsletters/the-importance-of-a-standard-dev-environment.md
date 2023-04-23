---
title: "The Importance of a Standard Development Environment"
description: "Standardized development environments are a good thing, all praise Docker."
seo:
    title: "The Importance of a Standard Development Environment"
    description: "Standardized development environments are a good thing, all praise Docker."
date: 2022-11-28
layout: "post"
permalink: "the-importance-of-a-standard-dev-environment/"
---

{% imagePlaceholder "./src/assets/images/newsletter/the-importance-of-a-standard-development-environment.jpg", "The Importance of a Standard Development Environment" %}

This week I've been trying to get setup to work on a project with a friend of mine.

We've faced a few challenges (to say the least!) but I believe today we've managed a breakthrough. I can finally start working!

I've taken some time out today to catch up on some personal life admin, give my brain a rest, etc, and thought I might as well write a quick blog about the experience.

I actually find these quite helpful to cement anything new I've learned, it feels a little therapeutic.

## Getting Setup with a New Environment

Most of the development work I've been doing lately has been JavaScript or [JAM](https://jamstack.org/) Stack related, which is pretty epic.

But, not necessarily the best tool for the job.

Static website builders are awesome, but clients like to be able to change things themselves and have a sense of autonomy with their site.

A lot of websites still use [WordPress](https://wordpress.com/), this seems to be the baseline of what clients expect, and with good reason - it's a powerful tool, with many free plugins to add functionality.

On the aforementioned project, I've been thrown back into a PHP environment using a MySQL database.

Luckily for me I have a fair amount of experience with PHP that I can fall back on (custom CMS/MVP, WordPress).

My go to was [XAMPP](https://www.apachefriends.org/index.html) to load up the site and see what happens. The problems came when we had to install some dependencies.

[ImageMagick](https://imagemagick.org/index.php) I'm looking at you (if you know, you know).

Also PHP versioning was a pain, it's not an easy/simple process to switch between them and others working on the project are using macOS.

## Docker and Containers

In comes the magic of [Docker](https://www.docker.com/).

I've used this a little bit when I was playing around with setting up an [Ethereum node](https://ethereum.org/en/developers/docs/nodes-and-clients/), and messing with [RocketPool](https://www.rocketpool.net/), so this gave me a little head start.

Shout out to the RocketPool staff and to all the crew on RocketPool's Discord.

Docker basically sets up a self contained environment within your PC.

Here you can run whatever system you like (Linux, Ubuntu, etc) add any extensions and dependencies and voilà, romeo done.

The great thing is, there are many of these docker files/containers shared on GitHub, [Docker Hub](https://hub.docker.com/) and found via a quick Google search.

Which means you can set up very quickly with most common environments.

Once you've set up your docker file, this can be saved with the site files and uploaded to the repo. Meaning, any device you're using will be running the exact same environment.

It can even be used for production systems - avoiding any issues when server hosts change/update their global settings.

Double cool is using [vscode with Docker](https://code.visualstudio.com/docs/remote/containers) to even load up extensions and settings.

This could be cool for agencies looking for their staff to have a uniformed coding experience, although everyone has there own preferences.

This is something I'll definitely be using moving forward with most of my sites.

## ProcessWire CMS

This PHP environment is set up so I can work with a CMS that I've not used before, and I'm very excited to finally be able to get my teeth into it.

[ProcessWire](https://processwire.com/) will be the CMS that this project will be powered by, using this we'll be able to avoid the nasty WordPress loop, mixed up difficult-to-understand code like this:

```php
$id = isset( $_REQUEST['id'] ) ? intval( $_REQUEST['id'] ) : 0;
<table class="form-table">
  <?php
  $blog_prefix = $wpdb->get_blog_prefix( $id );
  $sql         = "SELECT * FROM {$blog_prefix}options
      WHERE option_name NOT LIKE %s
      AND option_name NOT LIKE %s";
  $query       = $wpdb->prepare(
      $sql,
      $wpdb->esc_like( '_' ) . '%',
      '%' . $wpdb->esc_like( 'user_roles' )
  );
  $options     = $wpdb->get_results( $query );
  foreach ( $options as $option ) {
    if ( strpos( $option->option_value, "\n" ) === false ) {
      ?>
      <tr class="form-field">
        <th scope="row"><label for="<?php echo esc_attr( $option->option_name ); ?>"><?php echo esc_html( ucwords( str_replace( '_', ' ', $option->option_name ) ) ); ?></label></th>
        <?php if ( $is_main_site && in_array( $option->option_name, array( 'siteurl', 'home' ) ) ) { ?>
        <td><code><?php echo esc_html( $option->option_value ); ?></code></td>
        <?php } else { ?>
        <td><input class="<?php echo $class; ?>" name="option[<?php echo esc_attr( $option->option_name ); ?>]" type="text" id="<?php echo esc_attr( $option->option_name ); ?>" value="<?php echo esc_attr( $option->option_value ); ?>" size="40" <?php disabled( $disabled ); ?> /></td>
        <?php } ?>
      </tr>
      <?php
      }
  } // End foreach
</table>
```

Also to work in a more logical, sensible component based way. More [React](https://reactjs.org/) like I suppose.

Although I'm bashing WordPress a little here, I've got a simple site to build for a client which I'm going to be using WordPress for, along with the template engine [Twig](https://twig.symfony.com/). I'll let you know how that goes!

By the way, you can find the Docker starter projects I've created on my GitHub.

I created an environment using [Nginx](https://github.com/Geerodge/processwire-starter-nginx) and [Apache](https://github.com/Geerodge/processwire-starter-apache).

I'm only using these for my personal development environment, so feel free to take them and improve them but I wouldn't use these for a production environment without testing obviously.