export class ViewShop {
  constructor (getFullCard){
    this.shopDomElements = {
      contNav: document.querySelector('#cont_nav'),
      contMain: document.querySelector('#cont_main'),
      footer: document.querySelector('.foot'),
      contBasket: document.querySelector('.cont_basket'),
      contPag: document.querySelector('.cont_pag'),
      contProd: document.querySelector('#products'),

      contAllInf: document.querySelector('.All_info_card'),
      bigInfoCard: document.querySelector('.big_info_card'),

      
      openModalCard: document.querySelectorAll('.open_modal_overall_card'),
      closeBtn: document.querySelector('.closeModal'),
      modal: document.querySelector('.big_info_card')

    }
    // this.getFullCard = getFullCard;
  } 
  
  
  render(data){
    
    this.shopDomElements.contProd.innerHTML = '';
    data.forEach(({ id, name, price, img }) => {
      this.shopDomElements.contProd.addEventListener('click', this.getFullCard);
      this.shopDomElements.contProd.innerHTML += `
      <div class="catalog_card amazfit_card" id="${id}">
        <div class="card_view">
          <a href="#" class="open_modal_overall_card">
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

  renderFullCard(data){
    this.shopDomElements.bigInfoCard.innerHTML = '';
    data.forEach(({ id, name, price, logo, img, brand, info, accessory, acc_name, acc_price }) => {
      this.shopDomElements.bigInfoCard.innerHTML += `
      <div class="modal_card">
        <div class="main_title_basket">
          <div class="top_title_basket">Modal</div>
          <div class="close_btn">
            <a href="#" class="closeModal">&#x2716;</a>
          </div>
        </div>
        <div class="block_info_card" id="${id}"> 
          <div class="info_card_watch">
            <div class="view_card_watch">
              <img src="${img}" width="385px" height="385px" alt="Samsung_watch" class="img_card_watch">
            </div>
            <img src="${logo}" width="60px" height="50px" alt="Samsung_logo" class="img_brand_logo">
            <div class="main_info_card">
              <div class="brand_title">${name}</div>
              <div class="brand_price_model">${price}</div>
              <div class="btn_buy">
                <a href="#" class="button_buy button_glass">Купить</a>
              </div>
              <div class="specification">
                <p class="title_sp">${brand}</p>
                <p>${info}</p>
              </div>
              <div class="accessory_block">
                <div class="accessory_view_card">
                  <img src="${accessory}" width="160px" height="160px" alt="blaze" class="img_accessory">
                </div>
                <div class="main_info_accessory">
                  <div class="brand_title_accessory">${acc_name}</div>
                  <div class="brand_price_accessory">${acc_price}</div>
                  <div class="btn_buy">
                    <a href="#" class="button_buy button_glass">Купить</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      `
    });

  }

} 
