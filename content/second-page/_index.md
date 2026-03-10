---
_schema: default
blocks:
  - heading:
      surtitle:
      text_markdown: ''
      title: Logos
    items:
      - src:
        title: Logo 1
        url:
      - src:
        title: Logo 2
        url:
    layout: grid
    type: logos
isPage: true
title: Second page
image:
  alt:
  credit: ''
  src:
draft: false
---
Alert

{{< alert text="This is a danger alert" state="danger" >}}

Badge

{{< badge text="badge primary" state="primary" >}}

Blank link

{{< blank_link text="blank link" link="/case-studies/case-study-example/" >}}

Blockquote

Button

{{< button text="text button" url="https://www.example.com" class="lorem" blank=false >}}

Span lang

{{< span_lang text="Bonjour" lang="fr" >}}

Details

{{< details summary="Summary of details" name="lorem" title="iprum" >}}Lorem{{< /details >}}

Map

{{< map markers=`{"coordinates":[44.8425666,-0.5737107]}` >}}