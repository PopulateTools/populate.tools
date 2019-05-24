---
layout: post
title: "CKAN: Automating deploys"
date: 2018-10-18 8:00:00 +0100
author: blat
lang: en
category: technology
---

Recently we built a custom [CKAN](https://ckan.org/) installation for a client. CKAN is the most popular open source tool for building Open Data portals. Although it comes with lots of functionalities out of the box we needed to develop some custom features.

For this, we created several CKAN extensions for each of the functionalities: Single sign-on, a custom UI theme, an extended taxonomy for classifying the different datasets, etc.

CKAN already has [lots of open source extensions](http://extensions.ckan.org/), and the process for creating and installing them [is well documented](http://docs.ckan.org/en/ckan-2.7.3/extensions/). But it lacked something we needed: an automated way of deploying these extensions to our staging and production environments.

The fact that we were deploying these extensions at the same time we were building them raised some issues that made clear that we needed:

- An automated way of doing deploys to each of the environments.
- A mechanism to isolate the dependencies of each one of the releases.
- A way of doing a rollback of the last deploy, in case we broke something.
- Doing some minor changes in the CKAN core files, without forking CKAN.
- CKAN is written in Python, so we missed a tool like Capistrano for these tasks. After some research, and given that we were already familiar with Ansible and following the inspiration of Ansistrano, we decided to develop a set Ansible playbooks that allowed us to do these tasks.

## What the tool does

The playbooks make use of three main tasks:

1. first_deploy.yml — It’s meant to be run just the first time (although you won’t break anything if you run it again), and sets the fo older structure in the server to make it ready for the next deploys.
2. deploy.yml — Creates a new directory in the server to contain a new release, clones and installs all the extensions, updates the symlink that points to the current release and restarts the server service.
3. rollback.yml — Reverts the last deploy.

## How do we accomplish this

In a standard CKAN installation you create a virtualenv (a directory that encapsulates Python dependencies) in the /usr/lib/ckan/default directory. In our case default is not the virtualenv itself but a symlink to the virtualenv that represents the current release:

{% asset 'posts/180417-ckan-01.png' %}

In case you’re wondering, deploy_base_venv is a virtualenv that just contains the CKAN core files with all its dependencies installed. We use this as the starting point for each of the releases, so we don’t have to clone CKAN again and install all the dependencies (which would slow down the deploy considerably).

The releases directory contains a timestamped directory for each of the previous releases, just like it’s done in a typical Ruby on Rails application:

{% asset 'posts/180417-ckan-02.png' %}

Each time a new release is created, all the extensions are cloned inside the src directory of the release virtualenv:

{% asset 'posts/180417-ckan-03.png' %}

## The code

Because we found the tool very useful and we think we’re not the only ones who have been in this situation, we decided to publish the code in the following repository: [PopulateTools/ckanext-ansible-workflow](https://github.com/PopulateTools/ckanext-ansible-workflow)

We hope this helps you!

Populate provides commercial design and technology services around open data and civic engagement. Learn more and get in touch!
