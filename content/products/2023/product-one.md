---
isIndex: false
draft: false
date: 2022-11-17T10:34:08.410Z
title: Product One
description: Sed eros nisl, tempus eget tempor quis, laoreet ac odio. Aenean
  tristique metus vitae mollis imperdiet.
offer:
  price: 250000
  embed: >-
      <div id='product-component-1729788758060'></div>
      <script type="text/javascript">
      /*<![CDATA[*/
      (function () {
        var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
        if (window.ShopifyBuy) {
          if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
          } else {
            loadScript();
          }
        } else {
          loadScript();
        }
        function loadScript() {
          var script = document.createElement('script');
          script.async = true;
          script.src = scriptURL;
          (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
          script.onload = ShopifyBuyInit;
        }
        function ShopifyBuyInit() {
          var client = ShopifyBuy.buildClient({
            domain: 'sebousan-tech.myshopify.com',
            storefrontAccessToken: 'c32496c414213c0da0ad34ed1731ff78',
          });
          ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent('product', {
              id: '6796466257997',
              node: document.getElementById('product-component-1729788758060'),
              moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
              options: {
        "product": {
          "styles": {
            "product": {
              "@media (min-width: 601px)": {
                "max-width": "calc(25% - 20px)",
                "margin-left": "20px",
                "margin-bottom": "50px"
              },
              "text-align": "left"
            },
            "button": {
              "font-family": "Roboto, sans-serif",
              "font-size": "16px",
              "padding-top": "16px",
              "padding-bottom": "16px",
              ":hover": {
                "background-color": "#000000"
              },
              "background-color": "#000000",
              ":focus": {
                "background-color": "#000000"
              },
              "border-radius": "8px"
            },
            "quantityInput": {
              "font-size": "16px",
              "padding-top": "16px",
              "padding-bottom": "16px"
            }
          },
          "contents": {
            "img": false,
            "title": false,
            "price": false
          },
          "text": {
            "button": "Add to cart"
          },
          "googleFonts": [
            "Roboto"
          ]
        },
        "productSet": {
          "styles": {
            "products": {
              "@media (min-width: 601px)": {
                "margin-left": "-20px"
              }
            }
          }
        },
        "modalProduct": {
          "contents": {
            "img": false,
            "imgWithCarousel": true,
            "button": false,
            "buttonWithQuantity": true
          },
          "styles": {
            "product": {
              "@media (min-width: 601px)": {
                "max-width": "100%",
                "margin-left": "0px",
                "margin-bottom": "0px"
              }
            },
            "button": {
              "font-family": "Roboto, sans-serif",
              "font-size": "16px",
              "padding-top": "16px",
              "padding-bottom": "16px",
              ":hover": {
                "background-color": "#000000"
              },
              "background-color": "#000000",
              ":focus": {
                "background-color": "#000000"
              },
              "border-radius": "8px"
            },
            "quantityInput": {
              "font-size": "16px",
              "padding-top": "16px",
              "padding-bottom": "16px"
            }
          },
          "googleFonts": [
            "Roboto"
          ],
          "text": {
            "button": "Add to cart"
          }
        },
        "option": {},
        "cart": {
          "styles": {
            "button": {
              "font-family": "Roboto, sans-serif",
              "font-size": "16px",
              "padding-top": "16px",
              "padding-bottom": "16px",
              ":hover": {
                "background-color": "#000000"
              },
              "background-color": "#000000",
              ":focus": {
                "background-color": "#000000"
              },
              "border-radius": "8px"
            }
          },
          "text": {
            "total": "Subtotal",
            "button": "Checkout"
          },
          "popup": false,
          "googleFonts": [
            "Roboto"
          ]
        },
        "toggle": {
          "styles": {
            "toggle": {
              "font-family": "Roboto, sans-serif",
              "background-color": "#000000",
              ":hover": {
                "background-color": "#000000"
              },
              ":focus": {
                "background-color": "#000000"
              }
            },
            "count": {
              "font-size": "16px"
            }
          },
          "googleFonts": [
            "Roboto"
          ]
        }
      },
            });
          });
        }
      })();
      /*]]>*/
      </script>

products_tags:
  - Lorem
image:
  src: /images/uploads/tom-crew-NLcLjLNUJbY-unsplash.jpg
  credit: Photo by [Tom Crew](https://unsplash.com/fr/@tomcrewceramics) on
    [Unsplash](https://unsplash.com/)
images:
  - src: /images/uploads/tom-crew-oiZAQvxTcYQ-unsplash.jpg
  - src: /images/uploads/tom-crew-uDF1mW7EUwM-unsplash.jpg
    half: true
  - src: /images/uploads/tom-crew-vu0lyZYeseY-unsplash.jpg
    half: true
  - src: /images/uploads/tom-crew-NLcLjLNUJbY-unsplash.jpg
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis ipsum erat, sed interdum nunc sagittis sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam posuere hendrerit enim id aliquet. Donec eget urna fermentum, tristique odio sit amet, dapibus eros. Sed imperdiet fringilla commodo. Maecenas vehicula auctor pulvinar. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam vel tristique massa, at posuere nibh. Aenean a scelerisque est, vel eleifend justo. Mauris eleifend accumsan condimentum.

Duis egestas ullamcorper neque, a scelerisque risus convallis quis. Donec scelerisque elit facilisis, pharetra felis vel, ullamcorper ex. Sed lacinia elit eu quam fermentum, vel rutrum nisi aliquam. Aliquam eu interdum massa, vestibulum accumsan magna. Nunc maximus eros orci, vitae dictum velit varius in. Donec sed lectus a mi scelerisque varius. Fusce hendrerit, sapien eget iaculis placerat, tortor nulla pellentesque risus, vel accumsan turpis nisi id purus. Aliquam auctor arcu quis odio sollicitudin tincidunt. Phasellus porta fringilla massa, blandit porttitor quam. Donec at auctor dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In at neque sed erat accumsan consectetur sit amet eget erat.
