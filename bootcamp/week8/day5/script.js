const quotes = [
    { id: 0, author: 'Albert Einstein', quote: 'Life is like riding a bicycle. To keep your balance, you must keep moving.' },
    { id: 1, author: 'Mark Twain', quote: 'The secret of getting ahead is getting started.' },
    // Add more quotes as needed
  ];
  
  let currentQuoteIndex = -1;
  
  const quoteDisplay = document.getElementById('quoteDisplay');
  const generateBtn = document.getElementById('generateBtn');
  const addQuoteBtn = document.getElementById('addQuoteBtn');
  const charCountBtn = document.getElementById('charCountBtn');
  const charCountNoSpaceBtn = document.getElementById('charCountNoSpaceBtn');
  const wordCountBtn = document.getElementById('wordCountBtn');
  const likeBtn = document.getElementById('likeBtn');
  const filterForm = document.getElementById('filterForm');
  const filterBtn = document.getElementById('filterBtn');
  const authorFilter = document.getElementById('authorFilter');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  
  generateBtn.addEventListener('click', generateRandomQuote);
  addQuoteBtn.addEventListener('click', addNewQuote);
  charCountBtn.addEventListener('click', countCharacters);
  charCountNoSpaceBtn.addEventListener('click', countCharactersWithoutSpace);
  wordCountBtn.addEventListener('click', countWords);
  likeBtn.addEventListener('click', likeQuote);
  filterBtn.addEventListener('click', filterQuotesByAuthor);
  prevBtn.addEventListener('click', showPreviousQuote);
  nextBtn.addEventListener('click', showNextQuote);
  
  function generateRandomQuote() {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * quotes.length);
    } while (newIndex === currentQuoteIndex);
    
    currentQuoteIndex = newIndex;
    displayCurrentQuote();
  }
  
  function addNewQuote() {
    const quoteInput = document.getElementById('quoteInput').value;
    const authorInput = document.getElementById('authorInput').value;
  
    if (quoteInput && authorInput) {
      const newQuote = {
        id: quotes.length,
        author: authorInput,
        quote: quoteInput,
        likes: 0,
      };
  
      quotes.push(newQuote);
      alert('Quote added successfully!');
    } else {
      alert('Please enter both quote and author.');
    }
  }
  
  function countCharacters() {
    if (currentQuoteIndex !== -1) {
      const quote = quotes[currentQuoteIndex].quote;
      alert(`Character Count (with space): ${quote.length}`);
    }
  }
  
  function countCharactersWithoutSpace() {
    if (currentQuoteIndex !== -1) {
      const quote = quotes[currentQuoteIndex].quote;
      const charCountWithoutSpace = quote.replace(/\s/g, '').length;
      alert(`Character Count (no space): ${charCountWithoutSpace}`);
    }
  }
  
  function countWords() {
    if (currentQuoteIndex !== -1) {
      const quote = quotes[currentQuoteIndex].quote;
      const wordCount = quote.split(/\s+/).filter(word => word !== '').length;
      alert(`Word Count: ${wordCount}`);
    }
  }
  
  function likeQuote() {
    if (currentQuoteIndex !== -1) {
      quotes[currentQuoteIndex].likes++;
      alert('Liked!');
    }
  }
  
  function filterQuotesByAuthor() {
    const filterAuthor = authorFilter.value.trim().toLowerCase();
    const filteredQuotes = quotes.filter(quote => quote.author.toLowerCase() === filterAuthor);
  
    if (filteredQuotes.length > 0) {
      currentQuoteIndex = 0;
      displayCurrentQuote();
    } else {
      alert(`No quotes found for author: ${filterAuthor}`);
    }
  }
  function showPreviousQuote() {
    if (currentQuoteIndex > 0) {
      currentQuoteIndex--;
      displayCurrentQuote();
    } else {
      alert('No previous quote.');
    }
  }
  
  function showNextQuote() {
    if (currentQuoteIndex < quotes.length - 1) {
      currentQuoteIndex++;
      displayCurrentQuote();
    } else {
      alert('No next quote.');
    }
  }
  
  function displayCurrentQuote() {
    if (currentQuoteIndex !== -1) {
      const currentQuote = quotes[currentQuoteIndex];
      quoteDisplay.textContent = `"${currentQuote.quote}" - ${currentQuote.author}`;
    }
  }
  

  const additionalQuotes = [
    { id: 3, author: 'Ralph Waldo Emerson', quote: 'Do not go where the path may lead, go instead where there is no path and leave a trail.' },
    { id: 4, author: 'Maya Angelou', quote: 'If you don’t like something, change it. If you can’t change it, change your attitude.' },
    { id: 5, author: 'Walt Disney', quote: 'The way to get started is to quit talking and begin doing.' },
    { id: 6, author: 'Nelson Mandela', quote: 'It always seems impossible until it’s done.' },
    { id: 7, author: 'C.S. Lewis', quote: 'You are never too old to set another goal or to dream a new dream.' },
    { id: 8, author: 'Eleanor Roosevelt', quote: 'The future belongs to those who believe in the beauty of their dreams.' },
    { id: 9, author: 'Albert Einstein', quote: 'Strive not to be a success, but rather to be of value.' },
    { id: 10, author: 'Oprah Winfrey', quote: 'The biggest adventure you can take is to live the life of your dreams.' },
    { id: 11, author: 'Steve Jobs', quote: 'Your time is limited, don’t waste it living someone else’s life.' },
    { id: 12, author: 'Rumi', quote: 'The wound is the place where the light enters you.' },
    { id: 13, author: 'J.K. Rowling', quote: 'It does not do to dwell on dreams and forget to live.' },
    { id: 14, author: 'Winston Churchill', quote: 'Success is not final, failure is not fatal: It is the courage to continue that counts.' },
    { id: 15, author: 'Audrey Hepburn', quote: 'The most important thing is to enjoy your life—to be happy—it’s all that matters.' },
    { id: 16, author: 'Dalai Lama', quote: 'Happiness is not something ready made. It comes from your own actions.' },
    { id: 17, author: 'Maya Angelou', quote: 'I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.' },
    { id: 18, author: 'Mark Twain', quote: 'The secret of getting ahead is getting started.' },
    { id: 19, author: 'Coco Chanel', quote: 'Success is most often achieved by those who don’t know that failure is inevitable.' },
    { id: 20, author: 'Henry Ford', quote: 'Whether you think you can, or you think you can’t—you’re right.' },
    { id: 21, author: 'Helen Keller', quote: 'The only thing worse than being blind is having sight but no vision.' },
    { id: 22, author: 'Albert Einstein', quote: 'Two things are infinite: the universe and human stupidity; and I’m not sure about the universe.' },
    { id: 23, author: 'Marilyn Monroe', quote: 'Imperfection is beauty, madness is genius and it’s better to be absolutely ridiculous than absolutely boring.' },
    { id: 24, author: 'Martin Luther King Jr.', quote: 'Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.' },
    { id: 25, author: 'C.S. Lewis', quote: 'You can never get a cup of tea large enough or a book long enough to suit me.' },
    { id: 26, author: 'Vincent van Gogh', quote: 'I dream my painting and I paint my dream.' },
    { id: 27, author: 'Eleanor Roosevelt', quote: 'No one can make you feel inferior without your consent.' },
    { id: 28, author: 'Pablo Picasso', quote: 'Every child is an artist. The problem is how to remain an artist once we grow up.' },
    { id: 29, author: 'Thomas Edison', quote: 'I have not failed. I’ve just found 10,000 ways that won’t work.' },
    { id: 30, author: 'Walt Disney', quote: 'The way to get started is to quit talking and begin doing.' },
  ];
  quotes.push(...additionalQuotes);
