---
layout: post
title: Entenda o que é Jekyll
description: "Saiba o que é jekyll, entenda como ele funciona e como ele pode lhe ajudar a criar sites estáticos sem banco de dados."
tags: [jekyll, o que é jekyll, blog jekyll, ruby, python, markdown]
cover-post: post-entenda-jekyll.jpg
categories:
  - blog
---

Jekyll é um fantástico gerador de código estático desenvolvido em [Ruby](). Nele você pode criar páginas e até um blog, usando HTML misturado com alguns truques que ajudam a converter seu site em arquivos estáticos pronto pra ser publicado. Ele é baseado em formatos como Markdown para formatar textos e postagens e também tem um padrão de template que se chama Liquid, junto com YAML para guardar os dados das variáveis. Não se preocupe se não estiver entendendo ainda, mais a frente no texto você vai entender.

## Estrutura dos diretórios

É tudo bem simples. Os aquivos que tiverem **_** (underline) antes do nome o Jekyll vai ignorar no produto final, quando converter seu projeto. Aqui uma estrutura básica:

<img class="image-post" src="{{ site.url }}/assets/images/posts/estrutura-de-diretorio.jpg" alt="Estrutura de diretórios">

No diretório **_includes** você vai guardar os aquivos que vão ser reutilizados nas páginas do projeto, tipo head, footer, navigation e qualquer outra coisa, dependendo da sua necessidade.

Na pasta **_layouts** você coloca os padrões de layouts páginas. Suponhamos que no seu projeto tenha várias páginas com estruturas diferentes. Aí é que você vai organizar essas coisas.

Para você poder ter uma ideia veja o código do arquivo **home.html**:

{% highlight html linenos %}
{% raw %}
<!doctype html>
<html lang="pt-BR">
<head>
	{% include _head.html %}
</head>
<body>
	{% include _navigation.html %}

	{{ content }}

	{% include _footer.html %}
</body>
</html>
{% endraw %}
{% endhighlight %}

Para quem não está familiarizado ainda, vai achar estranho. O `content` é a variável que exibe o conteúdo das páginas que você criar. Nesse caso será o código encontrado em **index.md, about e contact**.

O diretório **_site** é o build do seu projeto, onde o Jekyll vai colocar a versão final estática do site, prontinho pra ser publicado.

## Estrutura dos códigos

No começo pode ser estranha para alguns por não terem familiaridade com com YAML, mas a estrutura dos códigos é bem simples de se entender.

### YAML e LIQUID

O YAML é bem fácil de se ler, entender, escrever e manipular via programação.
Os arquivos que contém blocos YAML – no jekyll chamamos de **front-matter** – serão processados como um arquivo especial. O front-matter sempre será a primeira coisa do arquivo, exemplo:

{% highlight yaml linenos %}
{% raw %}
---
layout: home
title: Home
---
{% endraw %}
{% endhighlight %}

Simples não? O bloco YAML só será válido se for demarcado pelos três traços no começo e no fim, nem mais, nem menos, TRÊS traços!
No código acima, a variável **layout** está indicando que você está usando a estrutura do template **home.html**. Lembra da estrutura dos diretórios que mostrei no início? Os nomes que você colocar na variável **layout** será o nome dos arquivos que estão na pasta **_layouts**, sem a extensão **.html**.
A variável **title** será usada para ser o título da página. Chamamos o valor da variável usando o formato Liquid, veja:

{% highlight html linenos %}
{% raw %}
<!doctype html>
<html lang="pt-br">
<head>
	<meta charset="utf-8">
	<title> {{ page.title }} </title>
</head>
<body>
...
{% endraw %}
{% endhighlight %}

O **page.title** diz que no local, quando renderizar o site, o Jekyll irá colocar o título da página atual. O Liquid é um formato de template muito simples. Não tem segredo. Abra duas chaves, coloque o nome da variável, e agora é so fechar as chaves.

### Mais sobre as variáveis

O prefixo **page** serve para puxar os dados da página. O que estiver no front-matter vai ser puxado usando o **page** antes. Se for o nome do site, por exemplo, ou qualquer coisa que se referir ao site inteiro, você usa o prefixo **site**. Veja:

{% highlight html linenos %}
{% raw %}
<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="utf-8">
	<title> {{ site.name }} </title>
</head>
<body>
...
{% endraw %}
{% endhighlight %}

Nesse caso, as informações que se referir ao site não estarão no front-matter, mas no arquivo de configuração, que o Jekyll vai ler sempre que for iniciado. O arquivo se chama **_config,yml**. E você escreve ele no mesmo formato que o front-matter. Veja:

{% highlight yaml linenos %}
{% raw %}
name: Nome do Projeto
source:      .
destination: ./_site
plugins:     ./_plugins
layouts:     ./_layouts
css_folder:  'assets/css'
js_folder:  'assets/js'
img_folder:  'images'
include:     ['.htaccess']
exclude:     []
keep_files:  ['.git','.svn']
gems:        []
timezone:    nil
encoding:    nil

future:      true
show_drafts: nil
limit_posts: 0
pygments:    true

relative_permalinks: true

permalink:     date
paginate_path: 'page:num'

markdown:      maruku
markdown_ext:  markdown,mkd,mkdn,md
textile_ext:   textile

excerpt_separator: "\n\n"

safe:        false
host:        0.0.0.0
port:        4000
baseurl:     /
url:         http://localhost:4000
lsi:         false

maruku:
  use_tex:    false
  use_divs:   false
  png_engine: blahtex
  png_dir:    images/latex
  png_url:    /images/latex

rdiscount:
  extensions: []

redcarpet:
  extensions: []

kramdown:
  auto_ids: true
  footnote_nr: 1
  entity_output: as_char
  toc_levels: 1..6
  smart_quotes: lsquo,rsquo,ldquo,rdquo
  use_coderay: false

  coderay:
    coderay_wrap: div
    coderay_line_numbers: inline
    coderay_line_numbers_start: 1
    coderay_tab_width: 4
    coderay_bold_every: 10
    coderay_css: style
{% endraw %}
{% endhighlight %}

Você ainda pode adicionar opções personalizadas no _config.yml, o caminho do css e do javascript, por exemplo:

{% highlight yaml linenos %}
{% raw %}
css_folder:  'assets/stylesheets'
js_folder:  'assets/javascripts'
img_folder: 'assets/images'
{% endraw %}
{% endhighlight %}

Então chamamos os assets assim:

{% highlight html linenos %}
{% raw %}
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title> {{ page.title }}{{ site.name }} </title>
	<link rel="stylesheet" type="text/css" href="{{ site.css_folder }}/style.css">
</head>
<body>
...
{% endraw %}
{% endhighlight %}

Bem interessante, não acham?!
Nem é preciso entender todas as variáveis que eles colocam no **_config.yml**. Você só precisa entender que dá pra criar novas variáveis personalizadas e que você poderá modificar os valores já existentes.

## Start!

Para começar um projeto é bem simples.
Se você já tiver o Jekyll instalado basta ir no terminal e dar os seguintes comandos:

{% highlight bash %}
jekyll new nome-do-projeto
cd nome-do-projeto
jekyll serve
{% endhighlight %}

O jekyll sobe seu projeto na porta **:4000**, é só ir no endereço: **http://localhost:4000/**. Pronto, agora é só fuçar na pasta do projeto. Se você não tiver o Jekyll instalado ainda, no próximo post farei um tutorial de como instalar.

Se tiver alguma dúvida, não deixe de comentar, e se gostou compartilhe :)

Abraço!
