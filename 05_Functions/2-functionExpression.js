// ? =========================================================
// ?                    FONKSİYONLAR
// ?==========================================================

//!----------------------------------------------------------
//! 2.YÖNTEM  : FUNCTION EXPRESSION
//!-----------------------------------------------------------
//* Örnek1:
//**********************************************************/
console.log("******** 2- EXPRESSION*******");

//* Örnek1: Parametreli, Dönüş değerli
//**********************************************************/
// console.log(tekCift(5));
//! function expression yöntemiyle bir fnk tanımlandığında önce tanımlamanın yapılması gerekir yoksa Uncaught ReferenceError: Cannot access 'tekCift' before initialization hatası alınır.
const tekCift = function (number) {
  return number % 2 === 0 ? `${number} çifttir` : `${number} tektir`;
};

console.log(tekCift(2));
console.log(tekCift(7));

//* Örnek2: 3 sayinin en büyüğünü bulan fonks.
//**********************************************************/

const buyukBul = function (x, y, z = -Number.MAX_VALUE) {
  let enBuyuk;
  if (x >= y && x >= z) {
    enBuyuk = x;
  } else if (y >= z && y >= x) {
    enBuyuk = y;
  } else if (z >= x && z >= y) {
    enBuyuk = z;
  } else {
    enBuyuk = x;
  }
  return enBuyuk;
};

console.log("En Büyük Sayi:", buyukBul(1, 3, 2));
console.log("En Büyük Sayi:", buyukBul(5, 4, 1));
console.log("En Büyük Sayi:", buyukBul(4, 6, 7));
console.log("En Büyük Sayi:", buyukBul(6, 6, 7));
console.log("En Büyük Sayi:", buyukBul(9, 8, 9));
console.log("En Büyük Sayi:", buyukBul(8, 9, 9));
console.log("En Büyük Sayi:", buyukBul(8, 9));
console.log("En Büyük Sayi:", buyukBul(-8, -9));

//* ORNEK3: Bir fonksiyon içerisinde başka fonksiyonlar çağrılabilir
//*****************************************************/
