---
isPage: true
draft: false
title: Datas
description: Add some datas in columns (with gauge or not)
hero:
  cta:
    blank: false
    text: See examples
    url: "#main"
  cta_second:
    blank: true
    text: Documentation
    url: https://github.com/sebousan/hugolify-template/wiki/block-datas
  title: Blocks datas
  text: Add some datas in columns (with gauge or not)
blocks:
  - type: datas
    column: 3
    background: false
    title: With gauge and automatic color
    text: Maecenas semper urna enim, viverra faucibus tellus bibendum sed
    items:
      - text: Maecenas semper urna enim, viverra faucibus tellus bibendum sed
        title: Faucibus
        value: 90
        prefix: ""
        suffix: "%"
        limit: 100
      - value: 45
        title: Quisque consectetur
        text: Mauris convallis ante eu nisl iaculis efficitur. Pellentesque vel
          fringilla nunc.
        suffix: "%"
        limit: 100
      - value: 66
        title: Morbi placerat erat
        text: Proin sagittis faucibus tortor, rutrum facilisis erat volutpat ut. Etiam
          porta sapien eu tellus ornare tincidunt.
        limit: 100
        suffix: "%"
    show_color: true
    show_gauge: true
  - type: datas
    column: 3
    background: false
    title: With gauge
    text: Maecenas semper urna enim, viverra faucibus tellus bibendum sed
    items:
      - text: Maecenas semper urna enim, viverra faucibus tellus bibendum sed
        title: Faucibus
        value: 900
        prefix: "+"
        suffix: "€"
        limit: 1000
      - value: 200000
        title: Quisque consectetur
        text: Mauris convallis ante eu nisl iaculis efficitur. Pellentesque vel
          fringilla nunc.
        limit: 250000
      - value: 3.5
        suffix: "K"
        prefix: "$"
        title: Morbi placerat erat
        text: Proin sagittis faucibus tortor, rutrum facilisis erat volutpat ut. Etiam
          porta sapien eu tellus ornare tincidunt.
        limit: 100
    show_color: false
    show_gauge: true
  - type: datas
    column: 3
    background: false
    title: Without gauges
    text: Maecenas semper urna enim, viverra faucibus tellus bibendum sed
    items:
      - text: Maecenas semper urna enim, viverra faucibus tellus bibendum sed
        title: Faucibus
        value: 900
        prefix: "+"
        suffix: "€"
        limit: 1000
      - value: 200000
        title: Quisque consectetur
        text: Mauris convallis ante eu nisl iaculis efficitur. Pellentesque vel
          fringilla nunc.
        limit: 250000
      - value: 3.5
        suffix: "K"
        prefix: "$"
        title: Morbi placerat erat
        text: Proin sagittis faucibus tortor, rutrum facilisis erat volutpat ut. Etiam
          porta sapien eu tellus ornare tincidunt.
        limit: 100
    show_color: false
    show_gauge: false
  - type: datas
    column: 4
    background: false
    title: Without gauges
    text: Maecenas semper urna enim, viverra faucibus tellus bibendum sed
    items:
      - text: Maecenas semper urna enim, viverra faucibus tellus bibendum sed
        title: Faucibus
        value: 900
        prefix: "+"
        suffix: "€"
        limit: 1000
      - value: 200000
        title: Quisque consectetur
        text: Mauris convallis ante eu nisl iaculis efficitur. Pellentesque vel
          fringilla nunc.
        limit: 250000
      - value: 3.5
        suffix: "K"
        prefix: "$"
        title: Morbi placerat erat
        text: Proin sagittis faucibus tortor, rutrum facilisis erat volutpat ut. Etiam
          porta sapien eu tellus ornare tincidunt.
        limit: 100
      - value: 390
        suffix: "K"
        prefix: "$"
        title: Morbi placerat erat
        text: Proin sagittis faucibus tortor, rutrum facilisis erat volutpat ut. Etiam
          porta sapien eu tellus ornare tincidunt.
        limit: 100
    show_color: false
    show_gauge: false
---
