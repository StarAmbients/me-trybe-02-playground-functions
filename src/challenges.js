// Desafio 1 (----DONE----)
// REQUISITO 01: uso do operador de junção
function compareTrue(aptoExameCultural, aptoExameLinguaEspanhola) {
  let aptoPedidoDeCidadaniaEspanhola = false;
  if (aptoExameCultural && aptoExameLinguaEspanhola) {
    aptoPedidoDeCidadaniaEspanhola = true;
  } else aptoPedidoDeCidadaniaEspanhola = false;
  return aptoPedidoDeCidadaniaEspanhola;
}
// console.log(compareTrue(true, true));
// console.log(compareTrue(true, false));
// console.log(compareTrue(false, true));
// console.log(compareTrue(false, false));

// Desafio 2 (----DONE----)
// REQUISITO 02: calculo de área de triangulo
function calcArea(base, heigh) {
  let area = (base * heigh) / 2;
  return area;
}
// calcArea(10,50);
// calcArea(5,2);
// calcArea(51,1);

// Desafio 3 (----DONE----)
// REQUISITO 03: desde uma frase, retorna um array com as palavras na frase
function splitSentence(frase) {
  let setOfWords = [];
  let spacePosition = 0;
  do {
    spacePosition = frase.indexOf(' ', 0);
    // We always split the phrase in two, first part with a word, second part, with the rest of the phrase
    if (spacePosition !== -1) {
      setOfWords.push(frase.substring(0, spacePosition));
      frase = frase.substring(spacePosition + 1, frase.length);
    } else // In case there is only one word in the phase, there's no space char to search for.
    if (frase.length > 0) {
      setOfWords.push(frase.substring(0, frase.length));
    }
  } while (spacePosition !== -1 || frase.length === 0);
  return setOfWords;
}
// let manyWords = splitSentence(" ");
// let manyWords = splitSentence("formiga");
// let manyWords = splitSentence("vamo que vamos");
// let manyWords = splitSentence("Debora Schuch da Rosa");
// console.log(manyWords);

// Desafio 4 (----DONE----)
// REQUISITO 04: desde um array com palavras, concatena a última com a primeira
function concatName(conjuntoPalavras) {
  let ultimoItemPrimeiroItem = '';
  let primeira = conjuntoPalavras.shift();
  let ultima = conjuntoPalavras.pop();
  ultimoItemPrimeiroItem = ultimoItemPrimeiroItem.concat(primeira).concat(', ').concat(ultima);
  return (ultimoItemPrimeiroItem);
}
// const nomeCompleto = ["Débora", "Schuch", "da", "Rosa"];
// console.log(concatName(nomeCompleto));
// console.log(concatName(['foguete', 'não', 'tem', 'ré']));
// console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5 (----DONE----)
// REQUISITO 5: desde numero de vitórias (peso 3) e número de empates (peso 1), calcula pontuaçao
function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties * 1);
  return points;
}
// console.log(footballPoints(14,8));
// console.log(footballPoints(1,2));
// console.log(footballPoints(0,0));

// Desafio 6 (----DONE----)
// REQUISITO 06: desde um conjunto de números, descobrir o maior deles e contar quantas vezes aparece
// eslint-disable-next-line sonarjs/cognitive-complexity
function highestCount(setOfNumbers) {
  let tamanho = 0;
  let ultimoElemento = 0;
  let count = 0;
  setOfNumbers.sort();
  tamanho = setOfNumbers.length;
  ultimoElemento = setOfNumbers[tamanho - 1];
  if (ultimoElemento !== 0) {
    for (let index = tamanho - 1; index >= 0; index -= 1) {
      if (setOfNumbers[index] === ultimoElemento) {
        count += 1;
      } else {
        break;
      }
    }
  }
  return count;
}
// let  conj = [9, 9, 2, 3, 9, 5, 7];
// let conj2 = [0, 4, 4, 4, 9, 2, 1];
// let conj3 = [0, 0, 0];
// let quantidadeVezesMaiorNumeroRepete = highestCount(conj);
// console.log(quantidadeVezesMaiorNumeroRepete);

// Desafio 7 (----DONE----)
// REQUISITO 07: desde coordenadas lineares de rato e dois gatos, dizer qual gato caça o rato
function catAndMouse(mouse, cat1, cat2) {
  let diffCatCat = cat1 - cat2;
  let diffmouseCat1 = Math.abs(mouse - cat1);
  let diffmouseCat2 = Math.abs(mouse - cat2);
  let message = ' ';
  if (diffCatCat === 0) {
    message = 'os gatos trombam e o rato foge';
  } else if (diffmouseCat1 < diffmouseCat2) {
    message = 'cat1';
  } else message = 'cat2';
  return message;
}
// console.log(catAndMouse(0, 3, 2));
// console.log(catAndMouse(0, 6, 12));
// console.log(catAndMouse(0, 0, 0));

// Desafio 8 (----DONE----)
// REQUISITO 08: dado um conjunto de números, dependendo de como cada um deles é dividido por 3, por 5,
// ambos ou nenhum destes, registramos mensagens respectivas
/* function divisivelPorX(numberToBeAnalysed, divisor) {
  // We verify if the rest of the division between number and divisor
  let answer = true;
  if (numberToBeAnalysed % divisor === 0) {
    answer = true;
  } else answer = false;
  return answer;
} */

function fizzBuzz() {
  /* DSR declarar numbers como parametro let messageCapturing = [];
  for (let number of numbers) {
    if (divisivelPorX(number, 3) && divisivelPorX(number, 5)) {
      messageCapturing.push("fizzbuzz");
    } else {
            if (divisivelPorX(number, 3)) {
              messageCapturing.push("fizz");
            } else {
                    if (divisivelPorX(number, 5)) {
                      messageCapturing.push("buzz");
                    } else {
                            messageCapturing.push("bug!");
                          }
                  }
            }
          }
  return(messageCapturing);  */
}
// console.log(fizzBuzz([2, 15, 7, 9, 45]));
// (5) ['fizzbuzz', 'bug!', 'bug!', 'fizz', 'bug!']
// console.log(fizzBuzz([7, 9]));
// console.log(fizzBuzz([9, 25]));

// Desafio 9 (----DONE----)
// REQUISITO 08: codifica e decodifica mensagens com o método de substituição de vogais por números de 1 a 5 e vice-versa
function encode(message) {
  let codedMessage = message;
  const vowels = 'aeiou';
  for (let i = 0; i < 5; i += 1) {
    const search = vowels[i];
    const searchRegExp = new RegExp(search, 'g');
    // Searching all occurences of the vowel
    let secret = i + 1;
    const replaceWith = secret;
    codedMessage = codedMessage.replace(searchRegExp, replaceWith);
  }
  return codedMessage;
}
// console.log(encode("Bacedifogu"));
// console.log(encode("Hi there!"));

function decode(message) {
  let codedMessage = message;
  const vowels = 'aeiou';
  for (let i = 0; i < 5; i += 1) {
    const search = i + 1;
    const searchRegExp = new RegExp(search, 'g');
    let secret = vowels[i];
    const replaceWith = secret;
    codedMessage = codedMessage.replace(searchRegExp, replaceWith);
  }
  return codedMessage;
}
// console.log(decode("B1c2d3f4g5"));
// console.log(decode("H3 th2r2!"));

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
