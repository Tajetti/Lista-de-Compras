const form = document.getElementById('form');
const input = document.getElementById('input');
const list = document.getElementById('lista');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nomeItem = input.value
  
  if(nomeItem === "") {
    alert("Digite um item!");
    return;
  }

  const li = document.createElement("li");
  li.className = "option"
  li.innerHTML = `
    <div class="item">
      <input type="checkbox" class="checkbox" id="checkbox">
      <label for="checkbox">${nomeItem}</label>
    </div>
    <div class="trash">
      <img src="img/icon/Frame-3.png" alt="Lixeira" id="trash-icon"> 
    </div>
    `
  lista.appendChild(li);
  input.value = ""; 
 
  const trashIcon = li.querySelector("#trash-icon");
  trashIcon.addEventListener("click", () => {
    li.remove();

    const msgError = document.querySelector(".Display-none")
    msgError.classList.remove("Display-none")

    setTimeout(() => {
      msgError.classList.add("Display-none")
    }, 2000)
  })
})