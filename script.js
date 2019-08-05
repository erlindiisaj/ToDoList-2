const input = document.getElementById('input');
const addBtn = document.getElementById('addBtn');
const ul =document.getElementById('ul');



const createList = () => {
   const li = document.createElement('li');
   li.appendChild(document.createTextNode(input.value));
   ul.appendChild(li);
   input.value = ''  

   const btn =  document.createElement('button');
   btn.appendChild(document.createTextNode('X'));
   li.appendChild(btn);

   const removeList = () => {
      ul.removeChild(li);
   }
   
   const done = () => {   
      li.classList.toggle('done');
   }

   btn.addEventListener('click',  removeList);
   li.addEventListener('click', done);
}


const inputLength = () => {
   return input.value.length
}

const addElementByKeypress = (event) => {
   if(inputLength()  > 0 && inputLength() <= 45 && event.which===13){
      createList();
   }
}

const addElementByClick = () => {
   if(inputLength() > 0 && inputLength() <= 45) {
      createList();
   }
}

addBtn.addEventListener('click', addElementByClick);
input.addEventListener('keypress', addElementByKeypress);
   