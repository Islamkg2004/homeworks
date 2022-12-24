let arr = []
for(let i=0; i<=10; i++){
    arr.push(i)
}
console.log(arr)



for(let i=20; i>=0; i--){
    console.log(i)
}

for(let i=9; i<=19; i++) console.log(i)

for(let i=19; i>=9; i--) console.log(i)


let colors = prompt('Choice color! (red, yellow, green)').toLowerCase().trim()

switch (colors) {
    case 'red':
        alert('STOP!')
        break
    case 'yellow':
        alert('Wait!')
        break
    case 'green':
        alert('GO')
        break
    default:
        alert('Choice color! (red, yellow, green)')
        break
}