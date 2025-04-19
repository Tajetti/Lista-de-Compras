const form = document.getElementById('form');
const input = document.getElementById('input');
const list = document.getElementById('lista');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nomeItem = input.value // Ele pega o valor do input (o que o usuário digitou)
  
  if(nomeItem === "") {
    alert("Digite um item!");
    return;
  } // Verificação de que se o input estiver vazio, ele alerta que está vazio.

  const li = document.createElement("li"); // Cria um elemento li para adicionar na lista
  li.className = "option" // Adiciona a classe option para o li
  li.innerHTML = ` 
    <div class="item">
      <input type="checkbox" class="checkbox" id="checkbox">
      <label for="checkbox">${nomeItem}</label> <!--Item adicionado pelo usuário -->
    </div>
    <div class="trash">
      <img src="img/icon/Frame-3.png" alt="Lixeira" id="trash-icon"> 
    </div>
    ` // Adiciona o HTML dentro do li, com o input checkbox e o label com o nome do item
  list.appendChild(li); // Adiciona o li dentro da lista
  input.value = ""; // Retorna o valor do input para vazio 
 
  const trashIcon = li.querySelector("#trash-icon"); // Seleciona o ícone de lixeira dentro do li
  trashIcon.addEventListener("click", () => { 
    li.remove(); // Remove o li

    const msgError = document.querySelector(".Display-none") // Seleciona a mensagem de erro em que a classe é Display-none
    msgError.classList.remove("Display-none") // Remove a classe Display-none para mostrar a mensagem de erro

    setTimeout(() => {
      msgError.classList.add("Display-none")
    }, 2000) // Adiciona um temporizador de 2 segundos para esconder a mensagem de erro
  })
})