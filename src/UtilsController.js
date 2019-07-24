//ESTO SERIA EL CODIGO FINAL

biggestObject = () => {
  let mayorObjectLength = 0;  
  objectList.forEach((elemento, index) => {
  let NewObjectArray = Object.keys(elemento);
  let objLength = NewObjectArray.length;
  if (mayorObjectLength < objLength) {
    mayorObjectLength = objLength;
  mayorObjectIndex = index;
  }
  });
   return objectList[mayorObjectIndex];
  }
 console.log(biggestObject(objectList));

 const objectList = [];

// const objectList = [
//   {
//       firstName: "John",
//       lastName : "Constantine",
//       age : 33,
//       id : 123
//      },

//   {
//       firstName: "Thomas",
//       lastName : "Anderson",
//       nickName : "Neo",
//       age : 24,
//       id : 999
//      },  

//   {
//       firstName: "John",
//       lastName : "wick",
//       nickName : "Spooky Man"

//      }
// ];


/*
let objArray = Object.keys(user); // crea un array con los nombres de las propidades del objeto para luego averiguar el tamaño o longitud del array el cual seria igual a la cantidad de propiedades del objeto
let objLength = objArray.length; // crea una variable objLength y le adjudicamos el valor de la longitud del array del objeto, dicha longitud es la cantudad de propiedades del objeto mismo.
  
  console.log(objArray);
  console.log(objLength);
  // 	expected output: 
  //	> Array ["firstName", "lastName", "age", "id"]
  //	> 4

    let mayorObject = 0;
    let objArray =[];
    let objLength = 0;
  biggestObject = objectList.forEach((item, index, array) => {
      objArray = Object.keys(objectList[index]);
      objLength = objArray.length;
      
      if (objLength > mayorObject) {
        mayorObject === objLength;
      }
      return objectList[mayorObject];
  });
  */
 

// ALGORITMO 
// for (var i = 0; i < objectList.length; i++) {
// console.log('elemento a evaluar', objectList[i]);
// let NewObjectArray = Object.keys(objectList[i]);
// console.log('keys del objeto', NewObjectArray);
// let objLength = NewObjectArray.length;
// console.log('tamaño del nuevo array de keys', objLength);
// console.log('mayorObject < objLength?', mayorObject < objLength)
// if (mayorObject < objLength) {
// mayorObject = objLength;
// console.log('mayorObject actual', objLength);
// }
// // return mayorObject;
// }


// DEBUGGING DEL CODIGO
// objectList.forEach(elemento => {
// console.log('elemento a evaluar', elemento);
// let NewObjectArray = Object.keys(elemento);
// console.log('keys del objeto', NewObjectArray);
// let objLength = NewObjectArray.length;
// console.log('tamaño del nuevo array de keys', objLength);
// console.log('mayorObject < objLength?', mayorObject < objLength)
// if (mayorObject < objLength) {
// mayorObject = objLength;
// console.log('mayorObject actual', objLength);
// }
// });
// console.log('objeto mayor', mayorObject);



//CODIGO DEPURADO
// objectList.forEach(element => {
// mayorObject = mayorObject < Object.keys(element).length ? Object.keys(element).length : mayorObject;
// });



//ESTO ERA EL CODIGO INICIAL
  
// let i;
// let mayorObject= 0;
// for (i = 0; i < objectList[i].length; i++) {
//   let NewObjectArray = Object.keys(objectList[i]);
//   let objLength = NewObjectArray.length;
//   if (mayorObject<objLength){
//     mayorObject === objLength;
//   }
//   return mayorObject;
// }






