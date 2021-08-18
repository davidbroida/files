// new Set([1,1,2,2,3,4])


// function isVowel(char){
//     return "aeiou".includes(char);
// };


// function vowelCount(str){
//     const vowelMap = new Map();
//     for(let char of str){
//         let lowerCaseChar = char.toLowerCase()
//         if(isVowel(lowerCaseChar)){
//             if(vowelMap.has(lowerCaseChar)){
//                 vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
//             } else {
//                 vowelMap.set(lowerCaseChar, 1);
//             }
//         }
//     }
//     return vowelMap;
// }



// 1. create a function to check if a character is a vowel
// 2. create a function to count vowels that takes a string 
// 3. create a new Map
// 4. loop through the string over each character
// 5. make each character lower case
// 6. check to see if the lowecase character is a vowel
// 7. check to see if the map has that lower case character
// 8. if so set the map key to the character, and get the value and add 1
// 9. otherwise set the map key value pair to the lowercase character, 1
// 10. return the vowel map



function isVowel(char){
    return "aeiou".includes(char);
}

function vowelCount(str){
    const vowelMap = new Map();
    for(let char of str){
        let lowerCaseChar = char.toLowerCase()
        if(isVowel(lowerCaseChar)){
            if(vowelMap.has(lowerCaseChar)){
                vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
            }else {
                vowelMap.set(lowerCaseChar, 1);
            }
        }
    }
    return vowelMap;
}