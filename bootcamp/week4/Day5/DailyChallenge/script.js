function singVerse(numBottles) {
    console.log(`${numBottles} bottles of beer on the wall`);
  
    for (let j = 1; j <= numBottles; j++) {
      console.log(`Take ${j}, pass ${j === 1 ? 'it' : 'them'} around`);
    }
  
    if (numBottles > 1) {
      console.log(`${numBottles - 1} bottles of beer on the wall`);
      console.log('');
    } else {
      console.log('No more bottles of beer on the wall');
    }
  }
  
  let bottles = 3;
  
  while (bottles >= 1) {
    singVerse(bottles);
    bottles--;
  }
  