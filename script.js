const form = document.querySelector('form');
const ul = document.querySelector('ul');


// form.addEventListener('submit', () =>{

// });

form.onsubmit = function(event){
   event.preventDefault();

   const input = form.querySelector('input')
   const value = input.value;
   if (value=="") return;

   //CRIANDO ELEMENTOS USANDO TEMPLATE LITERALS
 ul.innerHTML += `<li class="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out flex justify-between"><span>${value}</span><button id="delete"class="text-red-700 delete">X</button></li>`
   const li = document.querySelector('li');
   ul.appendChild(li);
   input.value = "";
   //CRIANDO ELEMENTOS COM CREATEELEMENT()
   // //Aqui cria o elemento li da lista
   // const li = document.createElement('li');
   // li.setAttribute("class","px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out flex justify-between")
   // li.textContent = value;
   
   // //aqui cria o botão de delete do elemento
   // const button = document.createElement('button')
   // button.textContent = "X";
   // button.setAttribute("class","text-red-700 delete")

   // //aqui adiciona o botao a lista
   // li.appendChild(button)
   // //aqui adiciona tudo que tem dentro da lista
   // ul.appendChild(li);
};

ul.addEventListener('click', (event) => {
   if(event.target.classList.contains('delete')){
      if(confirm("deseja remover item?")){
         event.target.parentElement.remove();
      }
   }
})