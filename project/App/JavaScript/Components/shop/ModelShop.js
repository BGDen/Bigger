export class ModelShop {
  constructor (data){
    this.arrCards = [];

  this.getWatch();
  }
  getWatch(){
    return fetch('./App/data/Catalog_card.json').then(response => response.json()).then(data => this.data = data);
  }

}
