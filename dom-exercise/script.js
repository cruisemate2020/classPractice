// 1: Get the node with the  main title

const mainTitle = document.querySelector('h1');
console.log(mainTitle);

// => <h1>Fruits and veggies</h1>
// ----------------------------------------------

// 2: Get the main title text

const mainTitleText = mainTitle.innerHTML;
console.log(mainTitleText);

// => Fruits and veggies
// ----------------------------------------------

// 3: Get all the nodes with the fruit items

const fruitItems = document.getElementsByClassName('fruit-item');
console.log(fruitItems);

// => HTMLCollection(4) [li.fruit-item, li.fruit-item, li.fruit-item, li.fruit-item]
// ----------------------------------------------

// 4: Get all the veggie items - the text

const veggieText = document.querySelectorAll('.veggie-item');
veggieText.forEach(el => console.log(el.innerHTML));

// Broccoli Celery Potato Spinach
// ----------------------------------------------

// 5: Get the subtitle in the veggies section

const veggieTitle = document.querySelector('.list-veggies h2');
console.log(veggieTitle.innerHTML);

// => Veggies
// ----------------------------------------------

// 6: Add an ID 'fruit-title' to the first subtitle (in the Fruit section)

const fruitTitle = document.querySelector('.list-fruits h2');
fruitTitle.id = 'fruit-title';
console.log(fruitTitle);

// => fruit-title
// ----------------------------------------------

// 7: Add a class 'best-fruit' to the 1st and the 3rd fruit

const bestFruit = document.querySelectorAll('.fruits li');
bestFruit[0].className += ' best-fruit';
bestFruit[2].className += ' best-fruit';
console.log(bestFruit[0], bestFruit[2]);

// bestFruit.forEach(el, index) => {
//     if (index === 0 || index === 2){
//         // el.className += 'best-fruit';
//         el.classList.add('best-fruit');
//     }
//     console.log(el);
// };


// => <li class="fruit-item best-fruit">Pear</li>
// => <li class="fruit-item best-fruit">Plum</li>
// ----------------------------------------------

// 8: Remove class 'veggies' from the unordered list of veggies

const removeVeggieClass = document.querySelector('.list-veggies ul');
removeVeggieClass.classList.remove('veggies');
console.log(removeVeggieClass); //removes the class name, but leaves the word class in the open tag.


// => <ul>...</ul>
// ----------------------------------------------

// 9: Add a class 'veggie-love' to all the veggies
const veggieLove = document.querySelectorAll('.list-veggies ul li');
// veggieLove.forEach(el => el.classList += ' veggie-love');

veggieLove.forEach(el => el.classList.add('veggie-love'));
// => <li class="veggie-item veggie-love">Broccoli</li> ...
// ----------------------------------------------

// 10: Remove class 'veggie-item' from 'spinach'

veggieLove.forEach(el => {
    if(el.innerHTML === 'Spinach') {
        el.classList.remove('veggie-item');
    }
})

// veggieLove[3].classList.remove('veggie-item');


// => ... <li class="veggie-love">Spinach</li>