 
function getVowelSubstring(str){
  
 let arr = [];
 
 for(let i =0; i<=str.length;i++){

   if(isAVowel(str[i])&& (i==0||i<=str.length)){
     arr.push(str[i]);
   }
   
   else if(arr.length==1) {
     
     arr.push(str);
    
        }
    
     }
    
     return arr ;
}

function isAVowel(str){
    
        if (str  == 'a' || str == 'e' || str  =='i' || str == 'o'||str == 'u')
         return true;
        else
         return false;
     
}
 
function getConsonantSubstring(str){
     var arr = [];
     var arrConsonants = [];
     for (i = 0; i < str.length; i++) {
         for (x= i + 1; x< str.length + 1; x++) {
             arr.push(str.slice(i, x));
         }
     }

     for (x=0; x<arr.length;x++){
          let c =arr[x];
           
          if((!(isAVowel(arr[x][0]))&&(!(isAVowel(arr[x][arr[x].length-1]))))){

                    arrConsonants.push(c);
               }

     }
     return arrConsonants.sort();
}




console.log(getVowelSubstring("apple"));
console.log(getConsonantSubstring("motor"));
console.log(getConsonantSubstring("aviation"));
 
console.log(getVowelSubstring("hmm"));
console.log(getVowelSubstring("uva"));


 