'use strict';
const UP = document.querySelector('.Up');
const DOWN = document.querySelector('.Down');


function* createIdGenerator() {
   let size = 0;
   while (true) {
      yield ++size;
   };
};



const fontGenerator = newFontGenerator(14);

function* newFontGenerator(size) {


   while (true) {
      document.querySelector('.text').style.fontSize = size + 'px';
      let dir = yield size;
      console.log(dir)
      if (dir === 'up') {
         size += 2;

      } else if (dir === 'down') {
         size -= 2;
      };
      console.log(size)
   };
}

console.log(fontGenerator.next().value);

UP.addEventListener('click', () => fontGenerator.next('up'))
DOWN.addEventListener('click', () => fontGenerator.next('down'))

