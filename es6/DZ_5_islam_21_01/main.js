const input = document.getElementById('input')
const createButton = document.getElementById('crete_todo')
const todoList = document.getElementById('todo_list')

const createTodo = function () {
    if (input.value.trim() === '') {
        return false
    } else {
        const div = document.createElement('div')
        const text = document.createElement('h3')
        const btn = document.createElement('button')
        const edit = document.createElement('button_edit')

        div.setAttribute('class', 'block_text')
        text.setAttribute('class', 'text')

        text.innerText = input.value.trim()
        div.append(text)
        todoList.append(div)

        btn.className = 'btn'
        btn.textContent = 'delete'
        text.append(btn)
        btn.addEventListener('click', e =>{
            text.remove()
        })
        edit.textContent = 'edit'
        // edit = prompt(text)

    }
    input.value = ''
}


createButton.addEventListener('click', createTodo)
input.addEventListener('keydown', (e) => e.keyCode === 13 ? createTodo() : false)