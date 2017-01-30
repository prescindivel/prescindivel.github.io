---
layout: page

cover-page: home.jpg
---

# posts recentes
<ul class="article-list">
  {% for post in site.categories.blog limit:3 %}
  <li class="article">
    <h3><a href="{{ site.url }}{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a></h3>
    <time class="date" datetime="{{ post.date | date_to_long_string }}">
      {{ post.date | date_to_string }}
    </time>
  </li>
  {% endfor %}
</ul>

# últimos projetos
<ul class="article-list">
  {% for post in site.categories.projects limit:3 %}
  <li class="article">
    <h3><a href="{{ post.link }}" title="{{ post.title }}">{{ post.title }}</a></h3>
    <time class="date" datetime="{{ post.date | date_to_long_string }}">
      {{ post.date | date: '%Y' }}
    </time>
  </li>
  {% endfor %}
</ul>
