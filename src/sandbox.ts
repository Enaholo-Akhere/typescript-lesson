//Installing and compiling typescript into js
//  console.log('Enaholo')
// const input = document.querySelectorAll('input')

// console.log(input)
// input.forEach(input =>{
//     console.log(input)
// })

//Typescript types
// let ena = 'enaholo';
// let age = 30;
// let isTrue = true;
// you cannot reassign a variable with another data type in typescript

// const circ = (diameter: number) => {
//     return diameter * Math.PI * 2
// }

// console.log(circ(7.5))

// const arr = ['toad', 'fly', 'ant', 'bird']
// arr.push('dog')

// const mixed = [1, 'john', 'hello', 23, 12, 'hi', true]

// mixed.push(23)
// mixed.push('hello world')
// mixed.push(false)

//explicitly declaring types
// let str: string = 'incorrect';

// let  arr2: string[] = []

// arr2.push('hello')

// //union types
// let mixed: (string|boolean|number)[] = []

// mixed.push(12, 'hello', false)

// console.log(mixed)

// console.log('test the config: ')

//let greet: Function;

// let greet = (a: number, b: number, c?: number | string) => {
//     console.log(a + b )
//     console.log(c)
// }

// let minus: Function = (a: number, b: number): number => {
//     return a + b
// }

// let minRes = minus(20, 10)

// aliases
type numStr =  number | string 

// const greet = (user: {name: string, uid: numStr}) => {
//     return `user ${user.name} says hello ${user.uid}`

// console.log(greet()