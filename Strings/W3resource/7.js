let str = 'Welcome to w3resource.com';
let vowel = 0;
let consonant = 0;
let space = 0;
let character = 0;
let digit = 0;
let word = 1;
for (let i = 0; i < str.length; i++) {
    if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
        vowel++;
    }
    if (str[i] == ' ') {
        space++;
    }
    if (str[i] == ' ') {
        word++;
    }
    if (str[i] >= 'a' && str[i] <= 'z') {
        character++;
    }
    if (str[i] >= '0' && str[i] <= '9') {
        digit++;
    }


    if (str[i] != 'a' && str[i] != 'e' && str[i] != 'i' && str[i] != 'o' &&str[i] != 'u' && (str[i] >= 'a' && str[i] <= 'z')) {
        
            consonant++;
        }


    }
    console.log(" total length      : " + str.length);
    console.log(" total word        : " + word);
    console.log(" total vowel       : " + vowel);
    console.log(" total consonent   : " + consonant);
    console.log(" total character   : " + character);
    console.log(" total Digit       : " + digit);
    console.log(" total Space       : " + space);
