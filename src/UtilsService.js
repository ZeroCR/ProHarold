const esPalindromo = (palabra) => {
  let palindromoMsg; 
  for (var i = 0; i < palabra.length; i++) {
    if (palabra[i] != palabra[palabra.length - i - 1]) {
      return palindromoMsg = "No es palindromo";
    }
    return palindromoMsg = "Es palindromo";
  }
  return palindromoMsg;
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

const primos = (primosArray) => primosArray.filter(x => x % 2 !== 0);

const msg = ()=> {
  const message = [
    {message: "Hello React, do you like my counter??"},
    {message: "We are glad you are having fun =) "},
    {message: "Don't cry because it has ended, smile becase it happened"},
    {message: "Go confidently in the direction of your dreams, live the live you've imagine!"},
    {message: "Your limitation—it's only your imagination."},
    {message: "Sometimes later becomes never"},
    {message: "The harder you work for something, the greater you'll feel when you achieve it"},
    {message: "Dream bigger"},
    {message: "Push yourself, because no one else is going to do it for you"},
    {message: "Great things never come from comfort zones"},
    {message: "You really are having fun, don't you? =P"},
    
  ]
  const rand = message[Math.floor(Math.random() * message.length)];
  return rand;
}

//const fieldDifferent = (arr) => { arr.reduce((obj, item) => Object.assign(obj, { [item.key]: item.value }), {}); };





module.exports = {
  esPalindromo,
  biggestObject,
  primos,
  msg
}
