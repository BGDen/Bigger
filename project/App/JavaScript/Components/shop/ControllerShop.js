import { ModelShop } from "./ModelShop.js";
import { ViewShop } from "./ViewShop.js";

export class ControllerlShop {
  constructor (){
    this.model = new ModelShop(this.getDataCard.bind(this));
    this.view = new ViewShop(this.handlClickCard.bind(this));
    // this.getDataCard();
    // this.handlClickCard();
    this.model.getWatch().then(d=>this.view.renderFullCard(d));
  }
  getDataCard(){
      const data = this.model.getData();
      this.view.render(data);
  }
  handlClickCard(){
    const data2 = this.model.getFullCard();
    this.view.renderFullCard(data2);      
  }
} 