import { ModelShop } from "./ModelShop.js";
import { ViewShop } from "./ViewShop.js";

export class ControllerlShop {
  constructor (){
    this.model = new ModelShop();
    this.view = new ViewShop(this.handlClickCard.bind(this), this.handleCloseModal.bind(this));
    this.model.getWatch().then(d=>this.view.render(d));
    // this.handleCloseModal();
    // console.log(this.model.getWatch());
  }

  handlClickCard(ev) { // обработчик клика по карточке
    let elem = ev.target;

  while (elem.id == '') {	// находим id карточки
    elem = elem.parentElement;
  }
  
    const fullData = this.model.getFullCard(elem.id); // получаем от Model полную инфу по id часов
    
    this.view.renderFullCard(fullData); // отдаем View, чтоб отрендерить в модальном окне всю найденую инфу
  }
  
  handleCloseModal(){
    this.view.closeModalCard();
  }

}
