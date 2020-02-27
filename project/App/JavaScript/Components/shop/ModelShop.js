export class ModelShop {
  constructor (data){
    this.arrCards = [];
    // this.getCurrentList();
  }

  getWatch(){
    return fetch('./App/data/Catalog_card.json')
    .then((response) => response.json())
    .then((data) => {
      this.arrCards = data;
      return this.getCurrentList(1);
    });
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
    return this.arrCards.length;
  }

  // showList(num){
  //   const len = this.arrCards.length;
  //   const max = num * 2;
  //   for(let i = (num - 1) * 4; i < max && i < len; i++){
  //       this.arrCards[i].render();
  //   }
  // } 

  getCurrentList(num){
    let currentArrCards = [],
        fromCard = num * 1,
        toCard = (num * 1) + 1;
        for(let i = (fromCard - 1); i < toCard; i++){
          currentArrCards.push(this.arrCards[i]);
        }
        return currentArrCards;
      }
}