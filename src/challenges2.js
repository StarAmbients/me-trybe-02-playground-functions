// Desafio 10 (----DONE----)
// REQUISITO 10: criação dinâmica de objetos
function techList(techToLearn, name) {
// techToLearn is defined and has at least one element
  if (techToLearn.length) {
    // We sort the elements in techs array
    techToLearn.sort();
    // We create a list of objects to be
    let techOrderedList = [];
    for (let t in techToLearn) {
      //We create a new object each iteration and send the value of the tech in arrat of techs to it
    const techBy = { 
      tech: techToLearn[t],
      name: name,
    };
    techOrderedList.push(techBy);
    }
    return techOrderedList;
  } else {
    return 'Vazio!'; 
  }
} 
//console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Debora")); 

// Desafio 11
// REQUISITO 11: uso de regex ou se não conseguir, criação de funções de validação de string
function size(setOfNumbers) {
  let answer = true;
  if (setOfNumbers.length === 11) {
    answer = true;
  } else {
    answer = false;
  }
  return answer;
}

function posit(setOfNumbers) {
  // const sortedNumbers = setOfNumbers.sort();
  let answer = true;
  if (setOfNumbers.sort()[0] >= 0) {
    answer = true;
  } else {
    answer = false;
  }
  return answer;
}

function range(setOfNumbers) {
  // We sort the array in descending order and check its first element.
  // As numbers could be sorted here as strings, "25" is bigger than "100", because "2" is bigger than "1",
  // We decided to avoid this possible incorrect result by using a compare function, which would work fine
  // anyway if the input values are numbers.
  let answer = true;
  setOfNumbers.sort(function (a, b) { return b - a; })[0] <= 9 ? answer = true : answer = false;
  return answer;
}

function freeRep(setOfNumbers) {
  // We should consider studying this option in the future
  // Reference: https://stackoverflow.com/questions/5667888/counting-the-occurrences-frequency-of-array-elements/16204191
  // const _ = require("lodash");
  // let occurences = _.countby(setOfNumbers);

  // From the same thread in Stackoverflow we found how to create and use Map()
  let repetitionsRightNumber = true;
  // for less then 3 repetitions of a value in the array
  const mapOccur = setOfNumbers.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
  for (let index = 1; index < setOfNumbers.length; index += 1) {
    if (mapOccur.get(setOfNumbers[index]) >= 3) {
      repetitionsRightNumber = false;
      break;
    }
  }
  return repetitionsRightNumber;
}

function cleanEntry(numbersToClean) {
  return numbersToClean.toString().replace(/,/g, '');
  // string without commas
}

function formatPhoneNumber(numbersToFormat) {
  let gSPN = '';
  let goodPhoneNumber = numbersToFormat;
  let areaCode = goodPhoneNumber.substr(0, 2);
  let firstFive = goodPhoneNumber.substr(2, 5);
  let lastFour = goodPhoneNumber.substr(7);
  gSPN = gSPN.concat('(').concat(areaCode).concat(') ').concat(firstFive);
  gSPN = gSPN.concat('-').concat(lastFour);
  return gSPN;
}

function generatePhoneNumber(entryNumbers) {
  const noMoreCommas = cleanEntry(entryNumbers);
  if (!size(entryNumbers)) {
    return 'Array com tamanho incorreto.';
  } else {
      if (posit(entryNumbers) && range(entryNumbers) && freeRep(entryNumbers)) {
        return formatPhoneNumber(noMoreCommas);
      } else return 'não é possível gerar um número de telefone com esses valores';
    }
}
// console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12 (----DONE----)
// REQUISITO 12: verificação de condição de existência de um triângulo
// The value of any given size is smaller than the sum of the other two sizes
function analysisSums(lineA, lineB, lineC) {
  if ((lineA < (lineB + lineC)) || (lineB < (lineA + lineC)) || (lineC < (lineA + lineB))) {
   return true;
  } else {
    return false;
  }
}
// The value of any given size is bigger than the absolute value of the difference between the other two sizes
function analysisAbsValues(lineA, lineB, lineC) {
  if ((lineA > Math.abs(lineB - lineC)) || (lineB > Math.abs(lineA - lineC)) || Math.abs(lineC > (lineA - lineB) )) {
    return true;
  } else {
    return false;
  }
}
// The value of any given size is bigger than the sum of the other two sizes
function conditionOne(lineA, lineB, lineC){
  if ((lineA > (lineB + lineC)) || (lineB > (lineA + lineC)) || (lineC > (lineA + lineB))) {
    return true;
  } else {
    return false;
  }
}
// The value of any given size is smaller than the absolute value of the difference between the other two sizes
function conditionTwo(lineA, lineB, lineC) {
  if ((lineA < Math.abs(lineB - lineC)) || (lineB < Math.abs(lineA - lineC)) || Math.abs(lineC < (lineA - lineB))) {
    return true;
  } else {
    return false;
  }
}
function triangleCheck(lineA, lineB, lineC) {
  if (conditionOne(lineA, lineB, lineC) || conditionTwo(lineA, lineB, lineC)) {
    return false;
  }
  if (analysisSums(lineA, lineB, lineC) && analysisAbsValues(lineA, lineB, lineC)) {
    return true;
  }
}
// console.log(triangleCheck(10, 14, 8)); //true

// Desafio 13 (----DONE----)
// REQUISITO 13: regras do bar da Trybe para ninguém embebedar
function hydrate(pedido) {
  // We use regular expression to identify the digits belonging to the string
  let extractingNumbers = pedido.match(/\d+/g);
  let howManyNumbers = extractingNumbers.length;
  let goodPractices = '';
  let cupsOfWater = 0;
  if (howManyNumbers === 1) {
    goodPractices = '1 copo de água';
  } else { 
      for (let index = 0; index < howManyNumbers; index += 1) {
         cupsOfWater = cupsOfWater + parseInt(extractingNumbers[index]);
        }
      goodPractices = cupsOfWater.toString().concat(' copos de água');
    }
return goodPractices;
}
// console.log(hydrate("1 cerveja"));
// console.log(hydrate("2 cervejas e 1 copo de vinho"));
// console.log(hydrate("1 cachaça, 5 cervejas e 1 copo de vinho"));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
