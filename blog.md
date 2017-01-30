---
layout: page
title: histórias. tutoriais. atualizações.
cover-page: articles.jpg
tags: [blog, post, postagens, artigos, historias, tutorias]
description: Todas as postagens do meu blog. Arquivo.
---

{% for post in site.categories.blog %}
<article class="article">
  <h3><a href="{{ site.url }}{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a></h3>
  <time class="date" datetime="{{ post.date | date_to_long_string }}">
    {{ post.date | date_to_string }}
  </time>
</article>
{% endfor %}
