const input = document.getElementById('input')
const createButton = document.getElementById('crete_todo')
const todoList = document.getElementById('todo_list')
const createTodo = function () {
    if (input.value.trim() === '') {
        return false
    } else {
        let arr = []
        arr.push(input.value)
        arr.map((e)=>{
            const h2 = document.createElement('h2')
            document.body.append(h2)
            h2.append(e.split('').reverse().join())
        })

    }
    input.value = ''
}
createButton.addEventListener('click', createTodo)
input.addEventListener('keydown', (e) => e.keyCode === 13 ? createTodo() : false)