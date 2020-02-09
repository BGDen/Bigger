export class ViewShop {
  constructor (getData){
    this.shopDomElements = {
      contNav: document.querySelector('#cont_nav'),
      contMain: document.querySelector('#cont_main'),
      footer: document.querySelector('.foot'),
      contBasket: document.querySelector('.cont_basket'),
      contPag: document.querySelector('.cont_pag'),
      contProd: document.querySelector('#products') //.addEventListener('click', getData)
    }
  }

  render(data){
    
    this.shopDomElements.contProd.innerHTML = '';
    data.forEach(({ id, name, price, img }) => {
      this.shopDomElements.contProd.innerHTML += `
      <div class="catalog_card amazfit_card" id="${id}">
        <div class="card_view">
          <a href="./App/Content/index_watch.html">
          <img src="${img}" width="240px" height="240px" alt="img">
          </a>
        </div>
        <div class="card_info">
          <div class="card_title">${name}</div>
          <div class="card_price">${price}</div>
        </div>
        <div class="btn_buy">
          <a href="#" class="button_buy button_glass">Купить</a>
        </div>
      </div>
      `
    });

  }
  // renderFullCard(data){

  // }
} 