export class ModelShop {
  constructor (data){
    this.arrCards = [];
    // this.link
    // console.log(link);
    // this.backFunc = backFunc;
    // this.getCards.bind(this);
    this.link = [
          {
            "id": "el1",
            "name": "Смарт-часы XIAOMI Amazfit Verge Blue",
            "img": "./App/img/TIME/watch/Amazfit/XIAOMI_Amazfit_Verge_Blue.jpeg",
            "price": "3 599 грн"
          },
          {
            "id": "el2",
            "name": "Смарт-часы APPLE Watch Series-4 Sport Band",
              "img": "./App/img/TIME/watch/Apple/smart-chasy-apple-watch-series-4-40mm-gold-aluminium-with-pink-sand-sport-band.jpg",
              "price": "12 999 грн"
            },
            {
              "id": "el3",
              "name": "Смарт-часы GARMIN Forerunner 235 GPS EU",
              "img": "./App/img/TIME/watch/Garmin/smart-chasy-garmin-forerunner.jpg",
              "price": "9 999 грн"
            },
            {
              "id": "el4",
              "name": "Смарт-часы HUAWEI Watch GT Classic",
              "img": "./App/img/TIME/watch/Huawei/smart-chasy-huawei-watch-gt-classic.jpg",
              "price": "5 999 грн"
            },
            {
              "id": "el5",
              "name": "Смарт-часы Samsung Galaxy Watch 46мм Silver",
              "img": "./App/img/TIME/watch/Samsung/Samsung_Galaxy_Watch_46mm_Silver.jpeg",
              "price": "9 499 грн"
            },
            {
              "id": "el6",
              "name": "Смарт-часы SAMSUNG Galaxy Watch Active-2 40mm Aluminium Pink Gold",
              "img": "./App/img/TIME/watch/Samsung/smart-chasy-samsung-galaxy-watch-active-2-40mm-aluminium-pink-gold.jpg",
              "price": "8 999 грн"
            },
            {
              "id": "el7",
              "name": "Детские Часы с gps Smart baby DS-05 Blue / Waterproof",
              "img": "./App/img/TIME/watch/Baby/Smart_Baby_DS-05.jpeg",
              "price": "999 грн"
            },
            {
              "id": "el8",
              "name": "Смарт-часы Apple Watch Edition GPS+LTE 44mm Space Black Titanium",
              "img": "./App/img/TIME/watch/Apple/Apple_Watch_Edition_GPS+LTE_44mm-Space-Black-Titanium-Medium.jpg",
              "price": "34 440 грн"
            }
          ];
  
  }
  getData(){
    return this.link;
  }
  
} 