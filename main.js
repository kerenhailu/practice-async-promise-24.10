// 1.	צרו פונקציה שמחזירה promise, הפונקציה מקבלת שם, הפונקציה בודקת האם השם שווה לשם שלכם.
// צרו פונקציה אסיכרונית שקוראת לפונקצית הפרומיס ומחזירה את התוצאה.
// function GetName(Name) {
//   return new Promise((resolve, reject) => {
//     Name == "keren" ? resolve("the same") : reject("no the same");
//   });
// }
// async function asyncNameFanction() {
//   try {
//     return await GetName("keren");
//   }
//   catch (err) {
//     return err;
//   }
// }
// asyncNameFanction().then((res)=>{console.log(res);})
// .catch((rej)=>{console.log(rej);})
// .finally(()=>{console.log("the name is my?");})
// =====================================================================עשיתי
// 2.	צרו פונקציה שמחזירה promise, הפונקציה מקבלת 2 מספרים, הפונקציה בודקת האם המספרים זהים.
// צרו פונקציה אסיכרונית שקוראת לפונקצית הפרומיס ומחזירה את התוצאה.
// קראו לפונקציה האסיכרונית והדפיסו את התוצאה.
// function twoNumbers(num1,num2) {
//     return new Promise((resolve,reject)=>{
//         num1==num2?resolve("the same num"):reject("not the same num");
//     })
// }
// async function asyncTwoNum() {
//     try{
//         return twoNumbers()
//     }
//     catch(err){
//         err
//     }
// }

// asyncTwoNum().then((res)=>{console.log(res);})
// .catch((rej)=>{console.log(rej);})
// .finally(()=>{console.log("numbers is the same ?");})

// =====================================================================עשיתי
// 3.	צרו פונקציה שמחזירה promise, הפונקציה מקבלת סטרינג, הפונקציה בודקת האם אורך הסטרינג גדול מ 6.
// הוסיפו טיימר שפועל 4 שניות ורק לאחר מכן מחזיר תשובות.
// צרו פונקציה אסיכרונית שקוראת לפונקצית הפרומיס ומחזירה את התוצאה.
// קראו לפונקציה האסיכרונית והדפיסו את התוצאה למסך.
// הציגו אנימציה של טעינה בזמן שמחכים לתשובה.

// function strPromise(text) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       text.length > 6 ? resolve("longger") : reject("smaller");
//     }, 4000);
//   });
// }

// async function functionAsy() {
//   try {
//     showGif();
//     return await strPromise("kkkkkkkkk");
//   } catch (error) {
//     return error;
//   }
// }
// functionAsy()
//   .then((res) => {
//     div.innerHTML += res;
//   })
//   .catch((rej) => {
//     div.innerHTML += rej;
//   })
//   .finally(() => {
//     hideGif();
//   });

// function showGif() {
//   div.innerHTML += `<img id="img" src="https://66.media.tumblr.com/tumblr_ma0zhrQixj1rfjowdo1_500.gif">`;
// }
// function hideGif() {
//   img.style.display = "none";
//
// =====================================================================עשיתי!
// צרו מערך של 3 כלבים, לכל כלב יש שם, גיל וסוג.
// צרו פונקציה שמחזירה promise, הפונקציה מקבלת מערך של כלבים, הפונקציה מחזירה את הכלב הזקן ביותר.
// הוסיפו טיימר שפועל 5 שניות ורק לאחר מכן מחזיר תשובות.
// צרו פונקציה אסיכרונית שקוראת לפונקצית הפרומיס ומחזירה את התוצאה.
// קראו לפונקציה האסיכרונית והדפיסו את התוצאה למסך.
// הציגו אנימציה של כלב בזמן שמחכים לתשובה.
// *בצעו פעמיים

// class Dog {
//   name;
//   age;
//   type;
//   constructor(name, age, type) {
//     this.name = name;
//     this.age = age;
//     this.type = type;
//   }
// }
// let dog1 = new Dog("lolo", 2, "pincher");
// let dog2 = new Dog("lili", 5, "boldog");
// let dog3 = new Dog("black", 4, "Labrador");
// let ArrayDogs = [dog1, dog2, dog3];
// function arrayDogs(arrayOfDogs) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(arrayOfDogs ==""){
//              reject("ריק")
//         }
//       let olderDog = arrayOfDogs[0];
//       for (let dog of arrayOfDogs) {
//           if(olderDog.age < dog.age){
//              olderDog= dog
//           }
//       }
//       resolve(olderDog)
//     }, 5000);
//   });
// }
// async function returnOlderDog() {
//     try{
//         return await arrayDogs(ArrayDogs)
//     }
//     catch(err){
//        return err
//     }
// }
// returnOlderDog().then((res)=>{console.log(res);})
// .catch((rej)=>{console.log(rej);})
// .finally(()=>{console.log("the older Dog");})

// =====================================================================עשיתי
// 1.	צרו MAP של 7 ילדים, כאשר המפתח הוא השם והערך הוא הגיל.
// הוסיפו ילד.
// הציגו בלוג את הגיל שבחרתן/ם לו.
// הציגו בלוג רק את הגילים.
// הציגו בלוג רק את השמות.
// הציגו בלוג את הילדים שהשם שלהם ארוך מ4 תווים.

// let kids=new Map()
// kids.set("gal",25)
// kids.set("yam",5)
// kids.set("dan",15)
// kids.set("saron",22)
// kids.set("or",46)
// kids.set("idan",18)
// kids.set("hadar",19)
// kids.set("shir",60)

// console.log(kids.values());
// console.log(kids.keys());
// for (const name of kids.keys()) {
//     if(name.length>4)console.log(name);
// }

// =====================================================================
// 2.	צרו MAP של 4 דירות, כאשר המפתח הוא מספר הדירה והערך הוא המספר הנפשות בדירה.
let Apartments = new Map();
Apartments.set(1, 5);
Apartments.set(2, 12);
Apartments.set(3, 1);
Apartments.set(4, 2);

// 3.	צרו פונקציה שמחזירה promise, הפונקציה מקבלת MAP, הפונקציה מחזירה את הדירה עם הכי הרבה נפשות ביותר.
// הוסיפו טיימר שפועל 3 שניות ורק לאחר מכן מחזיר תשובות.
// צרו פונקציה אסיכרונית שקוראת לפונקצית הפרומיס ומחזירה את התוצאה.
// קראו לפונקציה האסיכרונית והדפיסו את התוצאה למסך.
// הציגו אנימציה בזמן שמחכים לתשובה.
// הציגו במסך את הנתונים בטבלה.
function apartmentSouls(mapApartments) {
  return new Promise((resolve, reject) => {
    let HiSouls = 0;
    setTimeout(() => {
        
   
    mapApartments.forEach((element) => {
      if (element > HiSouls) {
        HiSouls = element;
      }
    });
    resolve(HiSouls);
      if (HiSouls == 0) {
        reject("ריק");
      } 
    }, 3000);
  });
}

async function returnBiggestsouls(){
try{
    showGif()
    return await apartmentSouls(Apartments)
}
catch(err){
    return err
}
}

returnBiggestsouls()
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.log(rej);
  }).finally(()=>{haidGif() ,table()})

 function showGif(){
div1.innerHTML+=`<img id="img"src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5eeea355389655.59822ff824b72.gif" alt="">`
  }

 function haidGif(){
img.style.display+="none"
  }
  function table(){
  
    Apartments.forEach(element => {
           tr2.innerHTML+=`<td>HiSouls :${element}</td>`
      });
     for (const key of Apartments.keys()) {
        tr1.innerHTML+=`<td>Apartments :${key}</td>`
     }

  }