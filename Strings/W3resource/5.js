let str = 'This is w3resource.com';
let l = 0;
let space = 0;
while(str[l] !=undefined){
    l++;

    if( str[l] ==" " ){
        space++;
    }
    
}
space++;
console.log(l);
console.log("Total number of words in the string is : "+space);
