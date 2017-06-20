---
layout: post
title: "deploy automatizado com git "
description: se você ainda usa ftp para subir arquivos pro servidor em pleno 2017 STOP!!!
tags: [git, github, gitlab, bitbucket, ssh, deploy]
cover-post: post-git-deploy.jpg
categories:
  - blog
---

se você ainda usa *ftp* para subir arquivos pro servidor em pleno 2017 STOP!!! saiba como configurar um deploy automatizado no seu servidor de hospedagem em 3 passos simples.


### 1. conecte-se ao seu servidor

acesse seu servidor remotamente via *ssh* e certifique-se que o *git* tá instalado nele. se não tiver instalado vai ser preciso instalar. use o comando *ssh* para conectar-se ao servidor:

{% highlight shell %}
{% raw %}
  $ ssh user@hostname
{% endraw %}
{% endhighlight %}

depois de ter se conectado ao servidor verifique se o *git* ta instalado:

{% highlight shell %}
{% raw %}
  $ git --version
{% endraw %}
{% endhighlight %}

estando instalado siga para o próximo passo.

### 2. inicie um repositório do tipo *bare*

esse repositório pode ser criado em qualquer pasta no seu servidor. geralmente eu crio ela dentro da pasta que se refere ao projeto com o nome, por exemplo:
se eu tenho um projeto no meu servidor dentro da pasta */var/www/html/projeto*, irei criar o repositorio bare dentro dela assim */var/www/html/projeto/.git*.

criando o repositório:
{% highlight shell %}
{% raw %}
  $ mkdir .git && cd .git
{% endraw %}
{% endhighlight %}

tendo entrado no diretório *.git* executamos o comando
{% highlight shell %}
{% raw %}
  $ git init --bare
{% endraw %}
{% endhighlight %}

esse comando inicia um repósitorio com apenas algumas funcionalidades do git, por exemplo, não será possível executar comandos como *push* e *pull* nele, a única funcionalidade desse repositório vai ser receber os *push* do seu ambiente de desenvolvimento e manter sua aplicação atualizada com segurança no servidor.

depois de ter iniciado o repositório *bare* vamos criar um *hook* para receber os *push* do ambiente de desenvolvimento.

criando o *hook*:
{% highlight shell %}
{% raw %}
  $ vim hooks/post-receive
{% endraw %}
{% endhighlight %}

o arquivo deve conter as seguintes linhas:
{% highlight shell linenos %}
{% raw %}
#!/bin/sh
GIT_WORK_TREE=/var/www/html/projeto git checkout -f
{% endraw %}
{% endhighlight %}

na linha 2 declaramos o local onde o projeto ficará armazenado, seguido do comando `git checkout -f`. na linha 1 deve ter o comentário *#!/bin/sh* para que seja executado corretamente.

tendo criado o arquivo, vamos deixa-lo executável com o comando:

{% highlight shell %}
{% raw %}
  $ chmod +x hooks/post-receive
{% endraw %}
{% endhighlight %}

o hook post-receive é uma espécie de observer e é sempre executado quando um novo post é recebido nesse diretório que criamos *.git*. então sempre que você excutar o comando `git push deploy` (iremos configurar isso no próximo passo) o post-receive vai pegar os arquivos modificados e enviar pro diretório indicado no `GIT_WORK_TREE` e checar como a versão atual.

lembre que um repositório do tipo *bare* não guarda as versões, por isso trabalhe com Github/Gitlab/Bitbucket/etc pra fazer o versionamento. esse repo que criamos no servidor só vai ser responsável para manter atualizada a ultima versão que é enviada pra ele.

### 3. configurando ambiente local

adicione a url remota apontando para o repo git criado em seu servidor no <a href="{{page.url}}/#inicie-um-repositrio-do-tipo-bare)">Passo 2</a>

{% highlight shell %}
{% raw %}
  $ git remote add deploy usuario@dominio:/var/www/html/projeto/.git
{% endraw %}
{% endhighlight %}

tendo feito isso só resta subir seus commits para o servidor da mesma forma que faz para o Github, basta substituir `origin` por `deploy` no push sempre indicando para a branch master. exemplo:

{% highlight shell %}
{% raw %}
  $ git push deploy master
{% endraw %}
{% endhighlight %}

se você trabalhar com outras branchs certifique-se de fazer o merge na master. geralmente uso a master para produção.

## recomendo:

  * [git-flow](https://danielkummer.github.io/git-flow-cheatsheet/index.pt_BR.html)

qualquer sugestão ou dúvida fique a vontade para comentaaaar
