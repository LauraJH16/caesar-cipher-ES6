function cipher() {
  let output = '';
  let input = document.getElementById('enter-phrase');
  let phrase = input.value;
  
  if (phrase !== '') {
    let stringContainsOnlyLetters = true;
    for (let re = 0; re < phrase.length; re++) {
      if (phrase.charCodeAt(re) >= 65 && phrase.charCodeAt(re) <= 90 || phrase.charCodeAt(re) > 96 && phrase.charCodeAt(re) < 123) {
        stringContainsOnlyLetters = true;
      } else {
        stringContainsOnlyLetters = false;
        break;
      }
    }
    if (stringContainsOnlyLetters) {
      for (let i = 0; i < phrase.length; i++) {
        let ascii = phrase.charCodeAt(i);

        if (ascii > 64 && ascii < 91) 
          output += String.fromCharCode(((ascii - 65) + 33) % 26 + 65);
        else if (ascii > 96 && ascii < 123) 
          output += String.fromCharCode(((ascii - 97) + 33) % 26 + 97);
      }
      return output;
    }
    if (!stringContainsOnlyLetters) {
      input.value = '';
      input.placeholder = 'Ingrese solo letras y no ingrese espacios en blanco';
      return '';
    }
  } else {
    input.placeholder = 'Ingrese una frase';
    return '';
  }
}
  
function decipher() {
  let output = '';
  let input = document.getElementById('enter-phrase');
  let phrase = input.value;
  
  if (phrase !== '') {
    let stringContainsOnlyLetters = true;
 
    for (let re = 0; re < phrase.length; re++) {
      if (phrase.charCodeAt(re) >= 65 && phrase.charCodeAt(re) <= 90 || phrase.charCodeAt(re) > 96 && phrase.charCodeAt(re) < 123) {
        stringContainsOnlyLetters = true;
      } else {
        stringContainsOnlyLetters = false;
        break; 
      }
    }
  
    if (stringContainsOnlyLetters) {
      for (let i = 0; i < phrase.length; i++) {
        let ascii = phrase.charCodeAt(i);
    
        if (ascii > 64 && ascii < 91) 
          output += String.fromCharCode((((ascii - 65) - 33) + 26 * 2) % 26 + 65);
        else if (ascii > 96 && ascii < 123) 
          output += String.fromCharCode((((ascii - 97) - 33) + 26 * 2) % 26 + 97);
      }
  
      return output;
    }

  
    if (!stringContainsOnlyLetters) {
      input.value = '';
      input.placeholder = 'Ingrese solo letras y no ingrese espacios en blanco';
      return '';
    }
  } else {
    input.placeholder = 'Ingrese una frase';
    return '';
  }
}

let answer = document.getElementById('result-phrase');
let btnCipher = document.getElementById('btn-cipher');
let btnDecipher = document.getElementById('btn-decipher');

btnCipher.addEventListener('click', () => {
  answer.value = cipher();
});

btnDecipher.addEventListener('click', () => {
  answer.value = decipher();
});