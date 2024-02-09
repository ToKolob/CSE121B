const eButton = document.querySelector("button");
const eList = document.querySelector("ul#list");
const eInput = document.querySelector("input#favchap");

//function to make the element to shake fast for a second
async function shake(element) {
  for (let i = 0; i < 5; i++) {
    element.style.transform = "translateX(5px) rotate(2deg)";
    await new Promise((resolve) => setTimeout(resolve, 50));
    element.style.transform = "translateX(0px)";
    await new Promise((resolve) => setTimeout(resolve, 50));
  }

}

eButton.addEventListener("click", () => {
  if (eInput.value === "") {
    eInput.focus();
    shake(eInput);
  }else {
    eList.innerHTML += `<li>${eInput.value} <button type="button" class="remove">X</button></li>`;
    eInput.value = "";
    eInput.focus();
    const removeButtons = document.querySelectorAll("button.remove");
    removeButtons.forEach((button) => {
      button.addEventListener("click", () => {
        button.parentElement.remove();
      })
    })
    
  }
})
