---
layout: post
title: Instalando Jekyll no Windows
description: "Tutorial simples de como instalar jekyll no windows passo a passo."
tags: [instalar jekyll windows, o que é jekyll, blog jekyll, instalando ruby windows, instalando python windows]
cover-post: jekyll-windows.jpg
categories:
  - blog
---

Existe algumas dificuldades para instalar Jekyll no windows, pois para rodá-lo é preciso ter Ruby instalado, e Ruby não é instalado por padrão no Windows, ao contrário do Mac OS X.

## Instalando Ruby

Para instalar Ruby no Windows é bem simples. Faça o download da versão *2.0.0-p353* [aqui](http://rubyinstaller.org/downloads/archives). Se a configuração do seu computador for (x64) baixe a versão *2.0.0-p353 (x64)*. Durante a instalação aparecerá a seguinte tela:

<img class="image-post" alt="Instalando Ruby" src="{{ site.url }}/assets/images/posts/instalando-ruby-1.jpg">

Selecione as duas últimas opções e clique em Install. Agora faça o download do *Development Kit* [aqui](http://rubyinstaller.org/downloads/). Baixe a versão correspondente a arquitetura do Windows e a versão do Ruby que acabou de instalar, no meu caso foi para Windows(x64). Instale o Development Kit e extraia para o caminho **C:\devkit**. Depois de extraído, abra o cmd e vá até a pasta que você extraiu com o comando `cd C:\devkit`. Feito isso digite `ruby dk.rb init` e depois `ruby dk.rb install`, aparecerá a seguinte tela:

<img class="image-post" alt="Instalando Ruby" src="{{ site.url }}/assets/images/posts/instalando-ruby-2.jpg">

Pronto, agora Ruby está instalado.

## Instalando Python e Pygments

Vamos instalar o *pygments* agora. A instalação do Pygments serve para deixar os blocos de código coloridos (Highlight Syntax), e é necessário você instalar o Python. Baixe a versão *2.7.6* do Python [aqui](http://www.python.org/download/releases/2.7.6/). Tendo terminado a instalação, vamos adicionar as variáveis ao PATH do sistema. Para fazer isso é simples, basta ir até **Meu Computador > Configurações avançadas do sistema > Variáveis de Ambiente** e adicionar no **Path** o seguinte: **C:\Python27;C:\Python27\Scripts;**. Feito isso abra o cmd e digite `python`, se tiver instalado corretamente, aparecerá a seguinte mensagem:

<img class="image-post" alt="Instalando Python" src="{{ site.url }}/assets/images/posts/instalando-python-1.jpg">

Estando tudo ok devemos instalar agora o *easy_install*. Basta fazer o download do *distribute_setup.py* [aqui](https://pypi.python.org/pypi/distribute#distribute-setup-py), eu baixei o package *0.6.49*. Feito o download, descompacte o arquivo em uma pasta qualquer, aqui descompactei em **C:\Users\Victor\Desktop**. Depois de ter descompactado abra o cmd, vá até a pasta que voce descompactou, no meu caso: `cd C:\Users\Victor\Desktop\distribute-0.6.49`, agora digite o seguinte comando `python distribute_setup.py`. E para instalar o Pygments é so digitar `easy_install pygments`.

## Instalando Jekyll

Agora com tudo configurado corretamente vamos instalar o Jekyll. Abra o cmd e digite o comando `gem install jekyll --version "=1.4.2"`. A instalação levará um tempinho, dependendo da velocidade de sua internet.

### Criando seu primeiro projeto

Agora que temos o ambiente necessário para rodar Jekyll, vamos criar um projeto para testar.
Abra o cmd e digite `jekyll new nome-projeto`, depois vá até a pasta `cd nome-projeto`, e digite `jekyll serve`.

Pronto, o Jekyll sobe seu projeto na porta 4000, para acessá-lo é só ir até **http://localhost:4000**.
