let sentence = 'The movie is not so bad, I like it';
var wordNot = sentence.indexOf('not');
var wordBad = sentence.indexOf('bad');
if (wordNot !== -1 && wordBad !== -1 && wordNot < wordBad) {
    let modifiedSentence = sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + 3);
    console.log(modifiedSentence);
} else {
    console.log(sentence);
}

