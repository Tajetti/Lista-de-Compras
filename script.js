const form = document.getElementById("form")
const addItem = document.getElementById("addItem")
const submit = document.getElementById("submit")
const list = document.getElementsByClassName("list")

addItem.addEventListener("input", (event) => {
  const hasNumberRegex = /\d+/g;
  addItem.value = addItem.value.replace(hasNumberRegex, "");
}) // Verifica se o input que adiciona itens tem números. Se tiver, ele irá remover

form.onsubmit = (event) => { // Adiciona o evento de submit ao form
  event.preventDefault() // Previne que a página atualize

  const itemParaAdicionar = addItem.value // Verifica se o input está vazio e remove os espaços em branco
  if (itemText === "") {return} // Se o input estiver vazio, não faz nada
}

