---
layout: post
title: Jekyll e Github Pages
description: "Como subir seu projeto Jekyll para o Github Pages e usar seu próprio domínio nele."
tags: [instalar jekyll windows, github pages, blog jekyll, dominio github pages, subir projeto]
cover-post: github-pages.jpg
categories:
  - blog
---

Além de suportar o conteúdo HTML regular, o Github Pages também suporta [Jekyll]({{ site.url }}/blog/entenda-o-que-eh-jekyll). Existem duas formas de subir seu projeto Jekyll para o Github Pages, e é tudo bem simples.

## Subindo para sua conta

Para subir seu projeto para sua conta Github é necessário que você crie um repositório com o nome **usuario.github.io** (substitua **usuario** por seu *username* do Github). Feito isso suba o projeto que você desenvolveu em jekyll para a branch master do repositório que você acabou de criar. Espere alguns minutos, vá até o endereço **usuario.github.io** e PAM, tá publicado seu projeto no Github Pages.

## Subindo para um projeto específico

Para publicar seu projeto Jekyll em um repositório específico é um pouco diferente. Suponhamos que você tem um repositório chamado **meusite** e quer subir seu projeto pra esse repositório. É simples. Dentro desse repositório crie uma branch chamada **gh-pages** e suba seu projeto para essa branch. O seu projeto será publicado no endereço **usuario.github.io/meusite**

## Usando seu domínio

Caso você queira usar um domínio próprio no seu projeto, basta criar um arquivo chamado `CNAME` e dentro dele colocar o nome do domínio que você vai utilizar no seu projeto. Agora vamos fazer as configurações de DNS no **registro.br**.

Na sua conta do **registro.br** clique no domínio que você vai utilizar para seu projeto.

1. Marque a opção **Utilizar os servidores do Registro.br**
2. Clique em **Salvar & Editar DNS**
3. Clique em **Modo Avançado**
4. Agora clique em **+Record** para setar o DNS do seu projeto no github.

### Edição de zona

1. Deixe o campo de **subdomínios** vazio
2. No campo **Tipo** selecione **A**
3. No campo **Dados** coloque o endereço: **204.232.175.78**
4. Clique em **+Record** para abrir um novo cadastro.

Agora vamos colocar o subdomínio **www** para funcionar

1. No campo subdomínio coloque **www**.
2. No campo **Tipo** escolha **CNAME**
3. No campo Dados coloque o endereço do repositório do seu projeto: **username.github.io** (substitua *username* pelo o nome de seu usuário no github).
4. Clique em Salvar.

Segundo o **registro.br**, o tempo que leva para as alterações de DNS surtirem efeito para toda a internet é de 24 horas.

