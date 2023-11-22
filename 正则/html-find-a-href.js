const url = "https://www.inthestyle.com/products/16060505072061970438433654";
let RegExpURL = /.*\/products\/[0-9]+\/?[A-Za-z0-9-\/%_.?=]+/g;


let result = url.match(RegExpURL);
console.log(result);



const html = `<ul id="suggest-menu-list">
                
<li>
  <a class="body2 fw-bold" href="main-menu" target="_self" xt-marked="ok">Main menu</a>
</li>
  
  <li>
    <a class="body3" href="https://xxx/products/16060505072061970438433654" target="_self" xt-marked="ok">Home</a>
  </li>
  
  <li>
    <a class="body3" href="/collections/best-sellers" target="_self" xt-marked="ok">Best Sellers</a>
  </li>
  
  <li>
    <a class="body3" href="/collections/cuban-link-chain" target="_self" xt-marked="ok">Cuban Link Chain</a>
  </li>
  
  <li>
    <a class="body3" href="/collections/mens-pendant-necklace" target="_self" xt-marked="ok">SHOP NOW</a>
  </li>
  
  <li>
    <a class="body3" href="/pages/about-us" target="_self" xt-marked="ok">Service</a>
  </li>
</ul>`;
let RegExpAHerf = /<a[^>]+.* href=['|"].*\/products\/[0-9]{4}\/?[A-Za-z0-9-\/%_.?=]+.*>/g;;

let results = html.match(RegExpAHerf);
console.log(results);