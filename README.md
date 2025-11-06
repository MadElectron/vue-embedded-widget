# embedded-widget

Встраиваемый виджет +7 Pay.

**[Demo](https://madelectron.github.io/vue-embedded-widget/demo/)**

## Установка

Для работы виджета необходимо разместить следующий код на странице (пример):

```html
<script>
  const script = document.createElement("script");
  script.src =
    "https://cdn.jsdelivr.net/gh/MadElectron/vue-embedded-widget@1.4.4/dist/vue-widget.iife.js?v=<?= time() ?>";

  const price = document.getElementById("price").textContent;
  script.setAttribute("data-price", price);
  script.setAttribute("data-width", 300);
  script.setAttribute("data-container", "sevenpay-widget");
  script.setAttribute("defer", "defer");
  document.body.appendChild(script);
</script>
```

Атрибуты скрипта:

- `data-price` - цена товара (может быть как форматированной строкой так и числом). В примере выше цена содержится в теге с `id="price"`.
- `data-width` - ширина виджета в пикселях, число (в примере 300). По умолчанию виджет расягивается на всю ширину контейнера.
- `data-container` - ID контейнера для встраивания виджета. В примере тег-контейнер имеет `id="price"`. Если атрибут не указан, виджет встраивается в body после всех остальных тегов.
