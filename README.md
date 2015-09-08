# recochoku-ranking-crawler

## how to

```
git clone https://github.com/y-matsuki/recochoku-ranking-crawler.git
cd recochoku-ranking-crawler
npm install
node sample_crawler.js
```

## Recochoku Ranking Page Structure
 - http://recochoku.jp/ranking/single/daily/

```html
<html>
<body>
  <div id="unit">
    <table>
      <tr>
        <td class="no">
          ...
        </td>
        <td class="info">
          ...
        </td>
        ...
      </tr>
    </tabl>
  </div>
  ...
</body>
</html>
```
