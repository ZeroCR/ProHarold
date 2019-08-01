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
  primosArray.map(x => x % 2 !== 0 ? newPrimosArray.push(x) : x);
  return newPrimosArray;
};


module.exports = {
  esPalindromo,
  biggestObject,
  primos
}
