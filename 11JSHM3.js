const findLongestWord = (string) => {
    let arrString = string.split(' ');
    let wordLength = 0;
    let longestWord;
    
    for (let i = 0; i < arrString.length; i += 1) {
    wordLength = arrString[1].length;
    
    if (arrString[i].length > wordLength) {
      longestWord = arrString[i];
    
      return longestWord;
    }
    }
    };

  // Вызовы функции для проверки
  console.log(
    findLongestWord("The quick brown fox jumped over the lazy dog")
  ); // вернет 'jumped'
  
  console.log(
    findLongestWord("Google do a roll")
  ); // вернет 'Google'
  
  console.log(
    findLongestWord("May the force be with you")
  ); // вернет 'force'
  