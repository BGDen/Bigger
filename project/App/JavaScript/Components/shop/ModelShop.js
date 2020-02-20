export class ModelShop {
  constructor (data){
    this.arrCards = [];
  }

  getWatch(){
    return fetch('./App/data/Catalog_card.json')
    .then((response) => response.json())
    .then((data) => (this.arrCards = data));
  }

  getFullCard(id){ // находим нужные часы по id
    return this.arrCards.find((el) => el.id == id);
  }

  getSearchedData(sValue){
    const regS = new RegExp(sValue, 'i');
    return this.arrCards.filter(el => regS.test(el.name)); // true / false
  }

///////////////////////////////////////////////////////////////////////////
  
  getFabric(){
    // this.data.forEach(d => this.arrCards.push(render(d, link)));
    return this.arrCards.length;
  }

  showList(num){
    const len = this.arrCards.length;
    const max = num * 10;
    for(let i = (num - 1) * 10; i < max && i < len; i++){
        this.arrCards[i].render();
    }
  }

} 
