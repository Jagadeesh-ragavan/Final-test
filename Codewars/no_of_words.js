function topThreeWords(text) {
    let newWords = text.split('');
    console.log(newWords);
    let result = {}
    
    for(let word of newWords){
        if(result[word].has(word)){
             result
        } else {
            result[word] = 1
        }
    }

    
}

topThreeWords("a a a  b  c c  d d d d  e e e e e")
