'use strict';
const UP = document.querySelector('.Up');
const DOWN = document.querySelector('.Down');
const TEXT = document.querySelector('.text');

function* createIdGenerator() {
   let size = 0;
   while (true) {
      yield size++;
   };
};

const idGenerator = createIdGenerator();

function* newFontGenerator(size) {
   let action = yield size;
   while (true) {
      switch (action) {
         case 'up':
            action = yield size += 2;
            break;
         case 'down':
            action = yield size -= 2;
            break;

      }
   }
}
const fontGenerator = newFontGenerator(14)


UP.addEventListener('click', () => {

   TEXT.style.fontSize = fontGenerator.next('up').value + 'px';
})
DOWN.addEventListener('click', () => {
   TEXT.style.fontSize = fontGenerator.next('down').value + 'px';
})

