var input = document.getElementById('input');
var display = document.getElementById('display');
var array = []
var deger = []

function Yazdır(e) {
    if (e.innerText == '+') {
        if (input.value.includes('+')) {
            input.value = input.value.replace(input.value[input.value.length - 1], '+')
        }
        else if (input.value.includes('-')) {
            input.value = input.value.replace(input.value[input.value.length - 1], '+')
        }
        else if (input.value.includes('/')) {
            input.value = input.value.replace(input.value[input.value.length - 1], '+')
        }
        else if (input.value.includes('*')) {
            input.value = input.value.replace(input.value[input.value.length - 1], '+')
        }
        else {
            input.value += e.innerText
        }
        array.push(e.innerText)


    }
    else if (e.innerText == '-') {
        if (input.value.includes('+')) {
            input.value = input.value.replace(input.value[input.value.length - 1], '-')
        }
        else if (input.value.includes('-')) {
            input.value = input.value.replace(input.value[input.value.length - 1], '-')
        }
        else if (input.value.includes('/')) {
            input.value = input.value.replace(input.value[input.value.length - 1], '-')
        }
        else if (input.value.includes('*')) {
            input.value = input.value.replace(input.value[input.value.length - 1], '-')
        }
        else {
            input.value += e.innerText
        }
        array.push(e.innerText)


    }
    else if (e.innerText == '/') {
        if (input.value.includes('+')) {
            input.value = input.value.replace(input.value[input.value.length - 1], '/')
        }
        else if (input.value.includes('-')) {
            input.value = input.value.replace(input.value[input.value.length - 1], '/')
        }
        else if (input.value.includes('/')) {
            input.value = input.value.replace(input.value[input.value.length - 1], '/')
        }
        else if (input.value.includes('*')) {
            input.value = input.value.replace(input.value[input.value.length - 1], '/')
        }
        else {
            input.value += e.innerText
        }
        array.push(e.innerText)


    }
    else if (e.innerText == '*') {

        if (input.value.includes('+')) {
            input.value = input.value.replace(input.value[input.value.length - 1], '*')
        }
        else if (input.value.includes('-')) {
            input.value = input.value.replace(input.value[input.value.length - 1], '*')
        }
        else if (input.value.includes('/')) {
            input.value = input.value.replace(input.value[input.value.length - 1], '*')
        }
        else if (input.value.includes('*')) {
            input.value = input.value.replace(input.value[input.value.length - 1], '*')
        }
        else {
            input.value += e.innerText
        }
        array.push(e.innerText)
    }
    else {
        input.value += e.innerText
        array = input.value.split('')
    }

    // İlk olarak operatör girilmişse yapılan kontrol
    var cond = input.value.split('')
    if (cond[0] == '+' || cond[0] == '-' || cond[0] == '*' || cond[0] == '/') {
        input.value = ''
    }
}

function Hesaplama() {
    if (input.value != '' && (input.value.includes('+') || input.value.includes('-') || input.value.includes('*') || input.value.includes('/'))) {

        if (input.value.includes('+')) {
            Topla(input.value)
        }
        else if (input.value.includes('-')) {
            Cıkar(input.value)
        }
        else if (input.value.includes('*')) {
            Carp(input.value)
        }
        else {
            Bol(input.value)
        }
    }
}

function Topla(value) {
    var splitValue = value.split('+')
    if (splitValue[1] == '') {
        value = parseInt(splitValue[0]) + 0
    }
    else {
        value = parseInt(splitValue[0]) + parseInt(splitValue[1])
        array.push(value)
        input.value = ''

    }
    display.value = splitValue[0] + ' + ' + splitValue[1] + ' = ' + value + ', '
}
function Cıkar(value) {
    var splitValue = value.split('-')
    if (splitValue[1] == '') {
        value = parseInt(splitValue[0]) - 0
    } else {
        value = parseInt(splitValue[0]) - parseInt(splitValue[1])
        array.push(value)
        input.value = ''

    }
    display.value = splitValue[0] + ' - ' + splitValue[1] + ' = ' + value + ', '
}
function Carp(value) {
    var splitValue = value.split('*')
    if (splitValue[1] == '') {
        value = parseInt(splitValue[0])
    } else {
        value = parseInt(splitValue[0]) * parseInt(splitValue[1])
        array.push(value)
        input.value = ''
    }
    display.value += splitValue[0] + ' * ' + splitValue[1] + ' = ' + value + ', '
}
function Bol(value) {
    var splitValue = value.split('/')
    if (parseInt(splitValue[1]) == 0 || splitValue[1] == '0') {
        value = splitValue[0]
    }
    else if (splitValue[1] == '') {
        value = parseInt(splitValue[0])
    } else {
        value = parseInt(splitValue[0] / parseInt(splitValue[1]))
        array.push(value)
        input.value = ''
    }
    display.value += splitValue[0] + ' / ' + splitValue[1] + ' = ' + value + ', '
}
function GeriAl() {
    var deger = input.value.split('')
    deger.pop()
    input.value = deger.join('')
}
function Temizle() {
    input.value = ''
    display.value = ''
}
const div = document.getElementById('buttons')
const acBtn = document.createElement('button')
const hspBtn = document.createElement('button')

acBtn.innerHTML = 'AC'
acBtn.setAttribute('onclick', 'GeriAl()')
acBtn.setAttribute('class', 'acBtn')
div.appendChild(acBtn)

for (let i = 0; i < 16; i++) {
    const Btn = document.createElement('button')
    Btn.setAttribute('onclick', 'Yazdır(this)')
    if (i == 0) {
        Btn.innerHTML = 'C'
        Btn.setAttribute('onclick', 'Temizle()')
    }
    if (i == 1) Btn.innerHTML = '/'
    if (i > 1) Btn.innerHTML = (i - 1).toString()
    if (i == 5) Btn.innerHTML = '*'
    if (i > 5) Btn.innerHTML = (i - 2).toString()
    if (i == 9) Btn.innerHTML = '+'
    if (i > 9) Btn.innerHTML = (i - 3).toString()
    if (i == 13) Btn.innerHTML = '-'
    if (i == 14) Btn.innerHTML = '.'
    if (i == 15) Btn.innerHTML = '0'
    Btn.setAttribute('class', 'btn')
    div.appendChild(Btn)


}
hspBtn.innerHTML = '='
hspBtn.setAttribute('onclick', 'Hesaplama()')
hspBtn.setAttribute('class', 'acBtn')
div.appendChild(hspBtn)
