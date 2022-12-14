const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

const dragstart = (event) => {
  event.target.classList.add('hold')
  setTimeout(() => event.target.classList.add('hide'), 0)
}

const dragend = (event) => {
  event.target.classList.remove('hold', 'hide')
}

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

const dragover = (event) => {
  event.preventDefault()
}

const dragenter = (event) => {
  event.target.classList.add('hovered')
}

const dragleave = (event) => {
  event.target.classList.remove('hovered')
}

const dragDrop = (event) => {
  event.target.append(item)
}

placeholders.forEach((placeholder) => {
  placeholder.addEventListener('dragover', dragover)
  placeholder.addEventListener('dragenter', dragenter)
  placeholder.addEventListener('dragleave', dragleave)
  placeholder.addEventListener('drop', dragDrop)
})
