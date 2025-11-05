# embedded-widget

Встраиваемый виджет +7 Pay.

## Установка

Для работы виджета необходимо разместить следующий код на странице:

```html
<script>
  const script = document.createElement("script");
  script.src =
    "https://cdn.jsdelivr.net/gh/MadElectron/vue-embedded-widget@1.4.0/dist/vue-widget.iife.js?v=<?= time() ?>";

  const price = document.getElementById("price").textContent;
  script.setAttribute("data-price", price);
  script.setAttribute("data-width", 300);
  script.setAttribute("data-container", "sevenpay-widget");
  document.body.appendChild(script);
</script>
```

Параметры скрипта:

- `data-price` - цена товара (может быть как форматированной строкой так и числом);
- `data-width` - ширина виджета в пикселях, по умолчанию виджет расягивается на всю ширину контейнера;
- `data-container` - ID контейнера для встраивания виджета.
