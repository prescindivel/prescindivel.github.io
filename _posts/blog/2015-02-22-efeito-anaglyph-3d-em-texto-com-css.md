---
layout: post
title: "Efeito anaglyph 3d em texto com CSS"
description: "Como criar o efeito anaglyph 3d em textos com CSS"
tags: [anglyph 3d, anglyph, css3, text-shadow, data atributtes]
cover-post: anaglyph.jpg
categories:
  - blog
---

[Anáglifo](https://pt.wikipedia.org/wiki/An%C3%A1glifo) é uma imagem (ou um vídeo) formatada de maneira especial para fornecer um efeito tridimensional estereoscópico quando visto com óculos de duas cores (cada lente com uma cor diferente).

## Como fazer isso com css

Existem duas formas de fezer o efeito com css. O primeiro é com `text-shadow`. Tudo bem simples, você só precisa aplicar duas sombras, uma com margem negativa e outra positiva, uma vermelho e outra ciano:

{% highlight html linenos %}
{% raw %}

<h2 class="anaglyph">my text anaglyph 3d</h2>

{% endraw %}
{% endhighlight %}

{% highlight css linenos %}
{% raw %}

.anaglyph {
  text-shadow: -0.08em 0 0 red, 0.08em 0 0 cyan;
}

{% endraw %}
{% endhighlight %}

A outra forma de fazer isso é com pseudo elementos css `:before` ou `:after` e `data-attributes`, bem simples também olha só:

{% highlight html linenos %}
{% raw %}

<h2 class="anaglyph-2" data-text="my text anaglyph 3d">my text anaglyph 3d</h2>

{% endraw %}
{% endhighlight %}


Primeiro declaramos o atributo `data-text` como o mesmo valor do texto. E no css definimos as cores e criamos o pseudo elemento:

{% highlight css linenos %}
{% raw %}

.anaglyph-2 {
  position: relative;
  color: red;
  mix-blend-mode: multiply;
}

.anaglyph-2:after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  color: cyan;
  content: attr(data-text);
  transform: translate(3px, 2px);
  mix-blend-mode: multiply;
}

{% endraw %}
{% endhighlight %}

No pseudo elemento `:after` pegamos o valor do `data-text` com o atributo css `content` e posicionamos como se fosse uma sombra. Depois é só aplicar um blend multiply com o atributo `mix-blend-mode`, simples né não?

Veja funcionando nesse [link]({{ site.url }}/css-anaglyph/)
