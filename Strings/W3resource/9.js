let str = 'Welcome to w3resource.com';
let vowel = 0;
let consonent =0;
for( let i of str.toLowerCase()){
    if (i== 'a' || i== 'e' || i== 'i' || i== 'o' || i== 'u') {
        vowel++;
    }
    else if (i >= 'a' && i <= 'z') {
        
        consonent ++;
    }
}


console.log('The total number of vowel in the string is     : '+vowel);
console.log('The total number of consonant in the string is : : '+consonent);