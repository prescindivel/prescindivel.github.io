---
layout: page
title: trabalho. passatempo. estudos.
cover-page: projects.jpg
tags: [sobre mim, victor martins, victor, webdesign, desenvolvedor front-end, front end developer]
description: "Olá meu nome é victor, desenvolvedor front-end desde 2013"
---

{% for post in site.categories.projects %}
<article class="article">
  <h3><a href="{{ post.link }}" target="_blank" title="{{ post.title }}">{{ post.title }}</a></h3>
  <time class="date" datetime="{{ post.date | date_to_long_string }}">
    {{ post.date | date: '%Y' }}
  </time>
</article>
{% endfor %}
