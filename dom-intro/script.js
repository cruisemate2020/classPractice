console.log('script.js connected');

//getting an element by ID

const mainTitle = document.getElementById('title1');
console.log(mainTitle);

//getting an element by ID

const paragraphs = document.getElementsByClassName('paragraph');
console.log(paragraphs);

//TURN HTML COLLECTION INTO AN ARRAY

//1.
// [...paragraphs].forEach(element => {
//     console.log(element);
// });


//2.
const arrFromCollection = Array.from(paragraphs);
arrFromCollection.forEach(element => {
    console.log(element);
});

const theParagraphs = document.getElementsByTagName('p'); // gives HTM Collection back; behaves almost as an array, but if we want to apply array methods we need to turn it into an array (using the ... )
console.log('---->', theParagraphs[0]);

//querySelector()

const title2 = document.querySelector('#title2');
console.log(title2);

const firstParagraph = document.querySelector('.paragraph');
console.log(firstParagraph);

const prodSubtitle = document.querySelector('.products h2');
console.log(prodSubtitle);

const allParagraphs = document.querySelectorAll('p'); // gives NodeList back; behaves as an array
console.log(allParagraphs);

allParagraphs.forEach(el => console.log(el));

console.log('--------------------------------------------------');

//accessing the elements' attributes and the content

const textOfMainTitle = mainTitle.innerHTML;
console.log(textOfMainTitle);

mainTitle.style.color = 'red';
mainTitle.style.backgroundColor = 'pink';

mainTitle.style.border = '2px green dotted';
mainTitle.style.fontSize = '50px;';

//access and set the node's properties

allParagraphs[0].id = 'par1';

allParagraphs.forEach(el => {
    el.style.color = 'tomato';
    el.style.fontStyle = 'italic';
})

console.log(prodSubtitle.className); //title2

//add one more class
//1.
allParagraphs[1].className += ' cool-paragraph';

//2.
allParagraphs[2].classList.add('red-something');

//remove class
allParagraphs[2].classList.remove('paragraph');

allParagraphs[2].classList.toggle('red-something');