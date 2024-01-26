document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form")
  form.addEventListener("submit", e => {
    e.preventDefault()
    let initialValue = document.getElementById("new-task-description")
    handleToDo(initialValue.value)
    form.reset()
  })
})

function handleToDo(toDo) {
  let p = document.createElement("p")
  let btn = document.createElement("button")
  btn.textContent = "x"
  p.textContent = `${toDo} `
  p.appendChild(btn)
  btn.addEventListener("click", handleDelete)
  document.getElementById("list").appendChild(p)
}

let handleDelete = e => e.target.parentNode.remove()