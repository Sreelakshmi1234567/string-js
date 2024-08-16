let str = "Hello!";
let vowels = "aeiou";
let vowelsCount = 0;
let consonantsCount = 0;

for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (vowels.includes(char)) vowelsCount++;
    
    else if (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') consonantsCount++;
}
console.log( "vowels:"+vowelsCount,"consonants:"+consonantsCount);




