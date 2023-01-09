---
isPage: true
draft: false
title: Push
description: Add some cards push with image and button in column.
hero:
  title: Block pushes
  text: Add some cards push with image and button in column.
  cta:
    text: See examples
    url: "#main"
    blank: false
  cta_second:
    blank: true
    text: Documentation
    url: https://github.com/sebousan/hugolify-template/wiki/Block-pushes
blocks:
  - type: alert
    state: warning
    text: Be careful to always have sufficient contrast between the text and the image for it to be readable.
  - type: pushes
    column: 1
    background: false
    title: 1 column
    text: Nam eleifend nisl tellus, porta lacinia
    items:
      - cta:
          blank: false
          url: "#"
          text: Lorem ipsum
        align: start
        title: Lorem ipsum
        text: Nam eleifend nisl tellus, porta lacinia lectus sollicitudin non.
        image:
          src: /images/uploads/lea-maruani-um-shmjr_no-unsplash.jpg
          alt: ""
  - type: pushes
    column: 1
    background: false
    title: 1 column, align center
    text: Nam eleifend nisl tellus, porta lacinia
    items:
      - cta:
          blank: false
          url: "#"
          text: Lorem ipsum
        align: center
        title: Lorem ipsum
        text: Nam eleifend nisl tellus, porta lacinia lectus sollicitudin non.
        image:
          src: /images/uploads/sebastien-jermer-ty9wjiijyj0-unsplash.jpg
          alt: ""
  - type: pushes
    column: 1
    background: false
    title: 1 column, align end
    text: Nam eleifend nisl tellus, porta lacinia
    items:
      - cta:
          blank: false
          url: "#"
          text: Lorem ipsum
        align: end
        title: Lorem ipsum
        text: Nam eleifend nisl tellus, porta lacinia lectus sollicitudin non.
        image:
          src: /images/uploads/robin-goutard-couufh79uzq-unsplash.jpg
          alt: ""
  - type: pushes
    column: 2
    background: false
    title: 2 columns
    text: Curabitur in tortor et odio congue suscipit sit amet quis purus.
    items:
      - cta:
          blank: false
          url: "#"
          text: Lorem ipsum
        image:
          src: /images/uploads/bernd-dittrich-tfwcwynxibw-unsplash.jpg
        align: start
        title: Lorem ipsum
        text: Nam eleifend nisl tellus, porta lacinia lectus sollicitudin non.
      - cta:
          blank: false
        image:
          src: /images/uploads/balthazar-lelievre-zsozkbm7yy8-unsplash.jpg
          alt: ""
        align: start
        title: Faucibus maximus nunc
        text: Phasellus tellus purus, pellentesque eu velit vel, faucibus maximus nunc.
  - type: pushes
    column: 2
    background: false
    title: 2 columns without images
    text: Curabitur in tortor et odio congue suscipit sit amet quis purus.
    items:
      - cta:
          blank: false
          url: "#"
          text: Lorem ipsum
        align: start
        title: Lorem ipsum
        text: Nam eleifend nisl tellus, porta lacinia lectus sollicitudin non.
      - cta:
          blank: false
        align: center
        title: Faucibus maximus nunc
        text: Phasellus tellus purus, pellentesque eu velit vel, faucibus maximus nunc.
---
