---
layout: post
title: Developing a website in Wordpress in 2018, the icij.org case
date: 2018-10-18 8:00:00 +0100
author: blat
lang: en
category: technology
---

WordPress powers the 26% of the Internet webpages. It has been around for years, with a big company and community supporting the development of the core and the ecosystem.

At Populate we have designed and implemented the new website of the ICIJ. They wanted to migrate to a modern and simpler publication experience which allowed new ways of consuming the information.

<img src="{% asset_path '/assets/img/posts/181018-icij-01.png' %}" />

This project was a real challenge for us, including the technical aspects, as we are Ruby on Rails experts, and developing such an important project in an unknown technology was something unexpected, with lots of unkowns and, why don’t recognize it, many risks.

Thankfully Wordpress and PHP ecosystem has changed a lot, there are many modern new tools to develop and release Wordpress sites like a pro, with things like versioned dependencies, Laravel, Blade template language, MVC, partials or Ansible integration.

## Roots: the game changer
Roots is a web development studio that provides open-source tools to develop websites in Wordpress with a modern workflow. They also have very useful plugins, screencasts and books to learn how to use their tools. You should also signup to their monthly newsletter, with good curated information of the Wordpress ecosystem. The three tools that simplify your life as a Wordpress developer we are going to describe are: Bedrock, Trellis and Sage.

<img src="{% asset_path '/assets/img/posts/181018-icij-02.png' %}" />

### Bedrock
Bedrock is a boilerplate that organizes a Wordpress site in a modern way. Provides separation of the Wordpress vendorized code from your own application code in a set of well structured folders, introduces Composer, execution environments, environment variables, and many other good and modern patterns present in web frameworks such as Ruby on Rails.

Composer is a dependency manager for PHP. Apart from PHP packages, you can use it to manage Wordpress sourcode and Wordpress plugins via WordPress Packagist. It allows you to have total control of what packages and versions are installed in the server, and you don’t need to provide write access to the uploads folder (one of the main security concerns when using Wordpress).

### Trellis
Trellis is a set of Ansible playbooks and roles to provision Wordpress servers for development, stage and production phases. It integrates totally with Bedrock way of organizing things.

It also provides a complete role to deploy the website, which can be easily extended via hooks. In our case we had to do a few things like compile the assets using Webpack, and enabling this functionality was just adding a task to the corresponding hook.

### Sage
Sage is a modern theme developed by Roots (stable version is 9.0.5), it introduces Laravel PHP framework as the engine to your Wordpress theme, which implies:

- logic and presentation separation thanks to controllers, layouts, views and partials
- support Laravel Blade templating language, very similar to Liquid or Mustache
- support modern frontend development tools such as ES6, Webpack, Bootstrap and Foundation

## Choosing a stack
With this set of tools we could focus on choosing a modern stack and creating an agile workflow to release small and frequent iterations of the website code.

### Creating the theme
The site is basically a Wordpress theme based in Sage 9. We picked Laravel + Blade templates to build the controllers and the views and ES6 + Webpack + Vue.js to build the frontend components.

Sage comes with very good defaults, and the provided controllers and views are flexible enough to implement a basic theme and to be extended very easily. Controllers defined remember to the default pages in a common Wordpress theme: home, page, single, single article, single post…

For each controller class exists an associated template. Templates are divided also in layouts, views and partials:

- the layout of the application contains the common skeleton and structure of the pages. By default there’s just a single layout which just includes partials and calls the yield method, but new layouts can be defined to fit your application requirements
- the views are just blade templates that will be inserted in the layout. Each controller exposes instance variables that are available in the template.
- partials are snippets of templates that can be inserted and reused across the whole site. They accept local variables as arguments.


### functions.php
This file deserves special attention. Those who already known Wordpress will be familiar with this file. functions.php is a special file in Wordpress where themes can interact with Wordpress internals, such as the The Loop, filters or rendering callbacks.

Once we have finished the project we can see that this file contains a few customizations that can’t be added in other parts of the project, Wordpress is not yet designed to implement customizations in a different way than this.

Good thing is that any special behaviour can be located in that file. Bad thing is that the file is more than 600 lines, and despite well structured code and comments, things can be a bit confusing.

Introducing projects entity
Just to demonstrate how flexible Sage is, we are going to describe how we introduced the entity projects in the theme.

In the ICIJ, every article is writen as part of an investigation. We named the investigations projects. Projects are a custom post type with special attributes created with Advanced Custom Fields.

In functions.php we had to:

- rewrite the URLs to the new structure <code>/investigations/{investigation name}/(pages|articles)/{slug}</code>
- add a filter to fetch the investigation from the URL parameter and search the article inside that investigation pool
- implement a new project controller to implement the home of an investigation together with a Blad template
- amend posts controller to obtain more articles from the current investigation in a new method

### Project deployment
To start building the theme we had to setup a development environment. The idea behind Trellis and Ansible is to use the same roles for development, staging and production, so it comes with these three environments defined.

When you run development environment in your computer, you’ll be creating a Vagrant instance running Ubuntu. Internally it will install php, nginx, node.js, postgres or mysql and the rest of dependencies automatically. It won’t be any different with the staging or production environment except the domains, and the SSL certificates.

A good thing from Trellis is that roles will be part of the project code, and although they will work with the defaults you’ll be able to define and re-define small pieces, such as variables and settings.

We had also to define how the inventory of remote servers was obtained, due to the elastic nature of the production environment. Thankfully Ansible is very flexible and it can obtain the servers even from a remote JSON API.

Together with the provisioning roles there’s a deployment role implemented using Ansistrano that can be executed in any environment and will run dependencies and update the code. It also offers rollback capabilities.


<img src="{% asset_path '/assets/img/posts/181018-icij-03.png' %}" />

## Conclusion
This post is a quick overview of Roots tools to build Wordpress sites in a modern way. Many concepts and good practices from other frameworks have been applied to make the development experience nice and robust:

- Bedrock organizes Wordpress code in a way that developers deal with Wordpress as an external dependency that can be updated without affecting your themes.
- Sage changes Wordpress theme development process, and provides MVC code organization, with Laravel and Blade, and introduces a modern frontend stack with ES6 and Webpack.
- Trellis simplifies the creation, configuration and deployment of the different environments of the site, using Ansible and Ansistrano roles

Check out the resulting website at [icij.org](http://icij.org) — and be sure to think about donating to this real world-changing project.
