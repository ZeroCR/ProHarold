const esPalindromo = (palabra) => {
  const nuevaPalabra = {
    palabra,
  }
  for (var i = 0; i < palabra.length; i++) {
    if (palabra[i] != palabra[palabra.length - i - 1]) {
      return false;
    }
    return true;
  }
  return nuevaPalabra;
};

const biggestObject = (objectList) => {
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
};

const primos = (primosArray) => {
  let newPrimosArray = [];
  let newPrimosArrayIndex = 0;
  primosArray.map((element, index) => {
    if ((element % 2) !== 0) {
      newPrimosArray[newPrimosArrayIndex] = primosArray[index];
      newPrimosArrayIndex++;
    };
  });
 return newPrimosArray;
};


module.exports = {
  esPalindromo,
  biggestObject,
  primos
}
