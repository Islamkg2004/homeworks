class Cars {
    static type = 'CARS'

    constructor(options) {
        this.model = options.model
        this.color = options.color
        this.wheels = options.wheels
    }

    start() {
        console.log('Машина заведена!')
    }
}

class Lexus extends Cars {
    static type = 'LEXUS'
    constructor(options) {
        super(options)
        this.transmission = options.transmission
    }
    start() {
        console.log('Lexus - машина заведена!')
    }
}class Ferrari extends Cars {
    static type = 'FERARI'
    constructor(options) {
        super(options)
        this.logo = options.logo
    }
    start() {
        console.log('Ferari - машина заведена!')
    }
}class Mercedes extends Cars {
    static type = 'MERCEDES'
    constructor(options) {
        super(options)
        this.year = options.year
    }
    start() {
        console.log('Mercedes - машина заведена!')
    }
}
const lexus = new Lexus({
    model: 'Lx 470',
    color: 'black',
    wheels: '4',
    transmission: 'mechanics '
})
console.log('\n\t\t Lexus\n',lexus, '\n Lexus type =', Lexus.type);
lexus.start()

const ferrari = new Ferrari({
    model: 'M1',
    color: 'black',
    wheels: '4',
    logo: 'horse'
})
console.log('\n\t\t Ferrari\n', ferrari, '\n Ferrari type =', Ferrari.type);
ferrari.start()

const mercedes = new Mercedes({
    model: 's500',
    color: 'black',
    wheels: '4',
    year: '2011'
})
console.log('\n\t\t Mercedes\n', mercedes, '\n Mercedes type =', Mercedes.type);
mercedes.start()


//ДОП ДЗ
class Light {
    constructor(selector) {
        this.$element = document.getElementById(selector)
    }
}

class Circle extends Light {
    constructor(options) {
        super(options.selector)
        this.$element.style.backgroundColor = options.color
        this.$element.textContent = options.text
    }
}

let color = prompt('Введите цвет светофора:  красный, желтый или зеленый '). toLowerCase();
if (color === 'красный') {
    const red = new Circle({
        selector: 'red',
        color: 'red',
        text: 'stop'
    })
}
else if (color === 'желтый'|| color === 'жёлтый'){
    const yellow = new Circle({
        selector: 'yellow',
        color: 'yellow',
        text: 'wait'
    })
}
else if (color === 'зеленый'|| color === 'зеленный'|| color === 'зелёный'|| color === 'зелённый'){
    const green = new Circle({
        selector: 'green',
        color: 'green',
        text: 'go'
    })
}
else alert('Вы должны ввести цвет светофора: красный, желтый или зеленый')