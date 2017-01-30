---
layout: post
title: "Instalando Node.js/NPM sem Sudo"
description: "Algumas instrucoes sobre como instalar o Node.js/NPM de modo que voce nao precise usar o comando sudo."
tags: [nodejs, npm, sudo, yeoman]
cover-post: nodejs-sem-sudo.jpg
categories:
  - blog
---

Semana passada eu comecei a dar uma cara nova pro meu blog e como eu uso [Jekyll](http://jekyllrb.com/), resovi testar com o [Yeoman](http://yeoman.io/) (link do generator [aqui](https://github.com/robwierzbowski/generator-jekyllrb), YO!). Devido a minha experiência eu decidi compartilhar algumas instruções sobre como instalar o Node.js/NPM de modo que você não precise usar o comando `sudo` (descobri que precisava dessa restrição ao usar o *generator-jekyllrb*).

## O Problema

> Nota: esse tutorial foi executado no Ubuntu 14.04

Passei um tempinho à procura de soluções para esse problema. Por um tempo parecia que eu teria de executar *npm* com *sudo*, mas eu sabia que só iria dar merda na frente.

Algumas soluções sugeriam modificar as permissões usando `sudo chown -R 'victor' [diretorio]` ou outros comando de permissão, a fim de dar o usuário as permissões para executar *npm* sem usar sudo. Infelizmente (ou felizmente), mesmo modificando as permissões não resolvia meu problema (eu consegui quebrar o sitema algumas vezes, até que quebrou o pacote sudo rsrsr).

## Antes de tudo

Antes de seguir para a instalação você deve verificar se existe versões anteriores do Node.js e NPM instaladas em seu sistema. No seu terminal execute os comandos:

{% highlight bash linenos %}
{% raw %}

$ which node
$ which npm

{% endraw %}
{% endhighlight %}

Se não mostrar nenhuma mensagem após qualquer um dos comandos acima é porquê não existe nenhum dos dois instalados no seu sistema.

No site do NPM tem um bom artigo de [como remover corretamente o NPM](https://docs.npmjs.com/misc/removing-npm). Porém o seguinte comando é suficiente para removê-lo:

{% highlight bash linenos %}
{% raw %}

$ sudo npm uninstall npm -g

{% endraw %}
{% endhighlight %}

Se não remover sugiro que dê uma olhada no artigo que citei acima.

Remover o Node é um pouco mais chato, pelo menos eu achei que fosse rsrsrs :smirk:. Eu segui os passos listados nessa [resposta](http://stackoverflow.com/a/11178106/1787262). Eu não vou reformular a resposta, pois é bastante breve.

> Nota: se você instalou o Node em outro diretório (que não seja o padrão) os arquivos provavelmente vão estar em locais diferente dos que estão listados na resposta.

Existem outras soluções para remover o Node por aí, então sinta-se se livre para deixar um comentário com qualquer outra solução.

## A solução 

FELIZMENTE, tropecei em uma solução que não necessita de permissões modificadas. Vamos usar o [Node Version Manager (NVM)](https://github.com/creationix/nvm) para instalar o Node e o NPM.

### Instalando o NVM

Primeiro, abra o teminal e execute um dos comandos a seguir:

usando curl:
{% highlight bash linenos %}
{% raw %}

$ curl https://raw.githubusercontent.com/creationix/nvm/v0.12.1/install.sh | bash 

{% endraw %}
{% endhighlight %}

ou usando wget:
{% highlight bash linenos %}
{% raw %}

$ wget https://raw.githubusercontent.com/creationix/nvm/v0.12.1/install.sh | bash 

{% endraw %}
{% endhighlight %}

Quando terminar o download execute o comando:

{% highlight bash linenos %}
{% raw %}

$ source ~/.profile 

{% endraw %}
{% endhighlight %}

Agora os comandos NVM devem estar funfando no seu terminal, execute `$ nvm` para confirmar se os comandos do NVM estão funcionando. Se não, reinicie o terminal.

Depois que o NVM estiver funcionando, você pode instalar uma versão do Node com o comando:

{% highlight bash linenos %}
{% raw %}

$ nvm install [version-node]

{% endraw %}
{% endhighlight %}

Para listar as versões disponiveis execute:

{% highlight bash linenos %}
{% raw %}

$ nvm ls-remote

{% endraw %}
{% endhighlight %}

Eu acho melhor instalar a versão atual do [NodeJS](http://nodejs.org/). A versão atual no momento que estou escrevendo esse artigo, é *v0.10.35*. Para instalar essa versão execute:

{% highlight bash linenos %}
{% raw %}

$ nvm install 0.10.35

{% endraw %}
{% endhighlight %}

Você pode verificar qual versão do Node tá sendo usada com o comando:

{% highlight bash linenos %}
{% raw %}

$ nvm current

{% endraw %}
{% endhighlight %}

Para verificar, no geral, qual versão do node tá sendo usada:

{% highlight bash linenos %}
{% raw %}

$ node -v

{% endraw %}
{% endhighlight %}

E para verificar, no geral, qual versão do NPM tá sendo usada:

{% highlight bash linenos %}
{% raw %}

$ npm -v

{% endraw %}
{% endhighlight %}

Agora você não tem que lidar com erros de permissão com o Node/NPM.

## O segundo problema

Depois que eu instalei o pacote [generator-jekyllrb](https://github.com/robwierzbowski/generator-jekyllrb) e executei `$ yo jekyllrb`, ele deu [erro de permissão](https://github.com/robwierzbowski/generator-jekyllrb/issues/75#issuecomment-36680150) ao instalar as dependências do Jekyll (`bundle install`).

### Solução

A solução é instalar o [Ruby Version Manager (RVM)](https://rvm.io/).
Sim, existe uma par de outras soluções, mas achei essa bem mais simples.
No próprio [site do RVM](https://rvm.io/rvm/install) você pode ver como instalar.


Se houver alguma dúvida ou recomendação sinta-se à vontade para deixar um comentário abaixo.
