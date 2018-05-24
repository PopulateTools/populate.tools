---
layout: page
title: Blog
permalink: /blog/
---

<div class="container posts-index">

	<h2 class="section-title">News</h2>

  {% for post in site.posts %}
    <article class="article">
      <h2 class="article-headline"><a class="article-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h2>
      <time class="article-time">{{post.date | date: "%b %-d, %Y"}}</time>
    </article>
  {% endfor %}

</div>
