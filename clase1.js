//1

function cuadrado(x)
{
    let numero = x * x
    return 'El resultado de 8 elevado a cuadrado es ' + numero
}
console.log(cuadrado(8))

//2

function cubo(y)
{
    let numero2 = y * y * y
    return 'El resultado de 5 elevado a cubo es ' + numero2
}
alert(cubo(5))

//3 a

function operación (x, y)
{
    let numero3 = x * x - x - y
    return 'el resultado de x elevado al cuadrado - x - 10 es (la x equivale a 20) ' + numero3
}
console.log(operación (20, 10))

//b

function operación2 (a, b, c)
{
    let numero4 = (a - b) * c
    return 'el resultado de (x - 3) * 2 es (la x equivale a 5) ' + numero4
}
alert(operación2 (5, 3, 2))

//c

function operación3 (x, y)
{
    let numero5 = x * x * x + y
    return 'el resultado de x * x elevado al cuadrado + 20 es (la x equivale a 3) ' + numero5
}
console.log(operación3 (3, 20))

//d

function operación4 (a, b, c)
{
    let numero6 = (a/b) + c 
    return 'el resultado de (x/2) + 5 es '  + numero6 + '' + '(la x equivale a 8)'
}
alert(operación4 (8, 2, 5))

