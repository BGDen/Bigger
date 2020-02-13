import { ModelShop } from "./ModelShop.js";
import { ViewShop } from "./ViewShop.js";

export class ControllerlShop {
  constructor (){
    this.model = new ModelShop();
    this.view = new ViewShop();
    this.model.getWatch().then(d=>this.view.render(d));
    console.log(this.model.getWatch());
  }

  // getDataCard(){
  //     const data = this.model.getData();
  //     this.view.render(data);
  // }
//}


   handlClickCard(ev){
    const data2 = this.model.getWatch();
    this.view.renderFullCard(data2);      
   } 
  }

    // this.getDataCard();//
    // this.handlClickCard();//
//this.getDataCard.bind(this)
// this.handlClickCard.bind(this) 