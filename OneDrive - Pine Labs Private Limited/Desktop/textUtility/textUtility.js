function WordCount(str) {
    if(!str.length) return 0;
    let totalSoFar = 0;
    for (let i = 0; i < str.length; i++){
      if (str[i] === ' '){
        while(i < str.length && str[i] === ' ') i++;
        totalSoFar += 1;
        console.log("ye raha apka word count");
        document.getElementById('outputPara2').innerHTML=document.getElementById('text').value;
      } 
    }
    totalSoFar += 1;
    return totalSoFar;
}