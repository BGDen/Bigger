export class ModelShop {
  constructor (data){
    this.arrCards = [];
    // this.link
    // console.log(link);
    // this.backFunc = backFunc;
    // this.getCards.bind(this);
    
    // this.link = [
    //       {
    //         "id": "el1",
    //         "name": "Смарт-часы XIAOMI Amazfit Verge Blue",
    //         "img": "./App/img/TIME/watch/Amazfit/XIAOMI_Amazfit_Verge_Blue.jpeg",
    //         "price": "3 599 грн"
    //       },
    //       {
    //         "id": "el2",
    //         "name": "Смарт-часы APPLE Watch Series-4 Sport Band",
    //         "img": "./App/img/TIME/watch/Apple/smart-chasy-apple-watch-series-4-40mm-gold-aluminium-with-pink-sand-sport-band.jpg",
    //         "price": "12 999 грн"
    //       },
    //       {
    //         "id": "el3",
    //         "name": "Смарт-часы GARMIN Forerunner 235 GPS EU",
    //         "img": "./App/img/TIME/watch/Garmin/smart-chasy-garmin-forerunner.jpg",
    //         "price": "9 999 грн"
    //       },
    //       {
    //         "id": "el4",
    //         "name": "Смарт-часы HUAWEI Watch GT Classic",
    //         "img": "./App/img/TIME/watch/Huawei/smart-chasy-huawei-watch-gt-classic.jpg",
    //         "price": "5 999 грн"
    //       },
    //       {
    //         "id": "el5",
    //         "name": "Смарт-часы Samsung Galaxy Watch 46мм Silver",
    //         "img": "./App/img/TIME/watch/Samsung/Samsung_Galaxy_Watch_46mm_Silver.jpeg",
    //         "price": "9 499 грн"
    //       },
    //       {
    //         "id": "el6",
    //         "name": "Смарт-часы SAMSUNG Galaxy Watch Active-2 40mm Aluminium Pink Gold",
    //         "img": "./App/img/TIME/watch/Samsung/smart-chasy-samsung-galaxy-watch-active-2-40mm-aluminium-pink-gold.jpg",
    //         "price": "8 999 грн"
    //       },
    //       {
    //         "id": "el7",
    //         "name": "Детские Часы с gps Smart Baby DS-05 Blue / Waterproof",
    //         "img": "./App/img/TIME/watch/Baby/Smart_Baby_DS-05.jpeg",
    //         "price": "999 грн"
    //       },
    //       {
    //         "id": "el8",
    //         "name": "Смарт-часы Apple Watch Edition GPS+LTE 44mm Space Black Titanium",
    //         "img": "./App/img/TIME/watch/Apple/Apple_Watch_Edition_GPS+LTE_44mm-Space-Black-Titanium-Medium.jpg",
    //         "price": "34 440 грн"
    //       }
    //       ];

    // this.link2 = [
    //         {
    //           "id": "elem1",
    //           "name": "Смарт-часы XIAOMI Amazfit Verge Blue",
    //           "img": "./App/img/TIME/watch/Amazfit/XIAOMI_Amazfit_Verge_Blue.jpeg",
    //           "price": "3 599 грн",
    //           "logo": "./App/img/TIME/watch/Brand_logo/amazfit_small.jpg",
    //           "brand": "XIAOMI Amazfit",
    //           "info": "Xiaomi Amazfit Verge – умные часы, которые получили 11 спортивных режимов. С ними вам не придется доставать телефон, чтобы посмотреть уведомления, воспользоваться картой или принять телефонный звонок.",
    //           "accessory": "./App/img/TIME/watch/Accessory/milanskiy-setchatyy-remeshok-dlya-chasov-fitbit-blaze-black.jpg",
    //           "acc_name": "Миланский сетчатый ремешок для часов Fitbit Blaze - Black",
    //           "acc_price": "499 грн"
    //         },
    //         {
    //           "id": "elem2",
    //           "name": "Смарт-часы APPLE Watch Series-4 Sport Band",
    //           "img": "./App/img/TIME/watch/Apple/smart-chasy-apple-watch-series-4-40mm-gold-aluminium-with-pink-sand-sport-band.jpg",
    //           "price": "12 999 грн",
    //           "logo": "./App/img/TIME/watch/Brand_logo/apple_small.jpg",
    //           "brand": "APPLE Watch",
    //           "info": "Поддерживать свою форму день ото дня стало еще проще с обновленным APPLE Watch Series 4. Смарт-часы приобрели еще более совершенную форму, чтобы максимально соответствовать вашему статусу и настроению.",
    //           "accessory": "./App/img/TIME/watch/Accessory/milanskiy-setchatyy-remeshok-dlya-chasov-fitbit-blaze-black.jpg",
    //           "acc_name": "Миланский сетчатый ремешок для часов Fitbit Blaze - Black",
    //           "acc_price": "499 грн"
    //         },
    //         {
    //           "id": "elem3",
    //           "name": "Смарт-часы GARMIN Forerunner 235 GPS EU",
    //           "img": "./App/img/TIME/watch/Garmin/smart-chasy-garmin-forerunner.jpg",
    //           "price": "9 999 грн",
    //           "logo": "./App/img/TIME/watch/Brand_logo/garmin_small.jpg",
    //           "brand": "GARMIN Forerunner",
    //           "info": "Фитнес-часы от компании GARMIN выполнены в стильной черно-красной расцветке, которая придает им привлекательный внешний вид. Корпус устройства позволяет свести к минимуму вероятность возникновения механических повреждений.",
    //           "accessory": "./App/img/TIME/watch/Accessory/milanskiy-setchatyy-remeshok-dlya-chasov-fitbit-blaze-black.jpg",
    //           "acc_name": "Миланский сетчатый ремешок для часов Fitbit Blaze - Black",
    //           "acc_price": "499 грн"
    //         },
    //         {
    //           "id": "elem4",
    //           "name": "Смарт-часы HUAWEI Watch GT Classic",
    //           "img": "./App/img/TIME/watch/Huawei/smart-chasy-huawei-watch-gt-classic.jpg",
    //           "price": "5 999 грн",
    //           "logo": "./App/img/TIME/watch/Brand_logo/huawei_small.jpg",
    //           "brand": "HUAWEI Watch",
    //           "info": "Дополните свой образ брендовыми смарт-часами HUAWEI Watch GT. Заключенные в сверхпрочном металлическом корпусе с алмазоподобным покрытием DLC и керамическим безелем, они выглядят стильно и статусно.",
    //           "accessory": "./App/img/TIME/watch/Accessory/milanskiy-setchatyy-remeshok-dlya-chasov-fitbit-blaze-black.jpg",
    //           "acc_name": "Миланский сетчатый ремешок для часов Fitbit Blaze - Black",
    //           "acc_price": "499 грн"
    //         },
    //         {
    //           "id": "elem5",
    //           "name": "Смарт-часы Samsung Galaxy Watch 46мм Silver",
    //           "img": "./App/img/TIME/watch/Samsung/Samsung_Galaxy_Watch_46mm_Silver.jpeg",
    //           "price": "9 499 грн",
    //           "logo": "./App/img/TIME/watch/Brand_logo/samsung_small.jpg",
    //           "brand": "Samsung Galaxy",
    //           "info": "Оставайтесь в ритме современной мобильной жизни. Объединяя ведущие смарт-технологии и уже привычный дизайн традиционных аналоговых часов, Galaxy Watch стал еще более совершенен. Будьте на связи с миром!",
    //           "accessory": "./App/img/TIME/watch/Accessory/milanskiy-setchatyy-remeshok-dlya-chasov-fitbit-blaze-black.jpg",
    //           "acc_name": "Миланский сетчатый ремешок для часов Fitbit Blaze - Black",
    //           "acc_price": "499 грн"
    //         },
    //         {
    //           "id": "elem6",
    //           "name": "Смарт-часы SAMSUNG Galaxy Watch Active-2 40mm Aluminium Pink Gold",
    //           "img": "./App/img/TIME/watch/Samsung/smart-chasy-samsung-galaxy-watch-active-2-40mm-aluminium-pink-gold.jpg",
    //           "price": "8 999 грн",
    //           "logo": "./App/img/TIME/watch/Brand_logo/samsung_small.jpg",
    //           "brand": "Galaxy Watch Active-2",
    //           "info": "Умные часы Watch Active 2 объединили наилучшие функциональные возможности и потрясающий дизайн. Цвет циферблата продублирует оттенок вашего наряда, для этого достаточно сфотографировать актуальный образ.",
    //           "accessory": "./App/img/TIME/watch/Accessory/milanskiy-setchatyy-remeshok-dlya-chasov-fitbit-blaze-black.jpg",
    //           "acc_name": "Миланский сетчатый ремешок для часов Fitbit Blaze - Black",
    //           "acc_price": "499 грн"
    //         },
    //         {
    //           "id": "elem7",
    //           "name": "Детские Часы с gps Smart Baby DS-05 Blue / Waterproof",
    //           "img": "./App/img/TIME/watch/Baby/Smart_Baby_DS-05.jpeg",
    //           "price": "999 грн",
    //           "logo": "./App/img/TIME/watch/Brand_logo/Smart_Baby_Watch.png",
    //           "brand": "Smart Baby DS-05",
    //           "info": "Вам больше не надо волноваться, что ребенок намочит часы, когда моет руки. Часы легко погружение на глубину до 1 метра. Новейшая модель детского разумного часов с GPS DS05.",
    //           "accessory": "./App/img/TIME/watch/Accessory/full_remeshok-dlya-detskikh-chasov.jpg",
    //           "acc_name": "Одноцветные силиконовые ремешки для детских умных часов Q60, Q80, Q90.",
    //           "acc_price": "250 грн"
    //         },
    //         {
    //           "id": "elem8",
    //           "name": "Смарт-часы Apple Watch Edition GPS+LTE 44mm Space Black Titanium",
    //           "img": "./App/img/TIME/watch/Apple/Apple_Watch_Edition_GPS+LTE_44mm-Space-Black-Titanium-Medium.jpg",
    //           "price": "34 440 грн",
    //           "logo": "./App/img/TIME/watch/Brand_logo/apple_small.jpg",
    //           "brand": "Apple Watch Edition",
    //           "info": "Идеально подойдет для тех, кто привык к дорогим и презентабельным аксессуарам. Стальные модели для активного отдыха. Они выдержат любую нагрузку и предотвратят повреждения механизма.",
    //           "accessory": "./App/img/TIME/watch/Accessory/milanskiy-setchatyy-remeshok-dlya-chasov-fitbit-blaze-black.jpg",
    //           "acc_name": "Миланский сетчатый ремешок для часов Fitbit Blaze - Black",
    //           "acc_price": "499 грн"
    //         }
    //         ];
  this.getWatch();
  }
  // getData(){
  //   return this.link;
  // }

  // getFullCard(){
  //   return this.link2;
  // }
  getWatch(){
    return fetch('./App/data/Catalog.json').then(response => response.json()).then(data => data);
  }
}
