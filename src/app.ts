// const anchor = document.querySelector('a')!

// console.log(anchor.href)


//type casting
// const form = document.querySelector('.new-item-form') as HTMLFormElement



//Class

// class Invoice {
//     // readonly client: string;
//     // private details: string;
//     // public amount: number;

//     constructor(
//         public client: string,
//         public details: string,
//         public amount: number,
//     ){}
//     format(statement: string){
//         return `This customer ${this.client} owes ${this.amount} for ${this.details} others ${statement}`
//     }
// }

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice('jerry', 'job not completed', 2000)
// docTwo = new Payment('Harry', 'job completed', 5000)

// let docs: HasFormatter[] =[]

// docs.push(docOne)
// docs.push(docTwo)
// console.log(docs)
// const invOne = new Invoice('Enah', 'for work done', 500)
// const invTwo = new Invoice('Holo', 'for job not done well', 200)
// invOne.details = 'hello'
// let invoices: Invoice[] = [];
// invoices.push(invOne)
// invoices.push(invTwo)
// invOne.amount = 455
// console.log(invOne.format())



import {Invoice} from './classes/invoice.js';
import { Payment } from './classes/payments.js';
import { HasFormatter } from './interfaces/HasFormatter.js';
import { listTemplates } from './classes/listTemplates.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement
const Type = document.getElementById('type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement
const ul = document.querySelector('ul')!
const list = new listTemplates(ul)

form.addEventListener('submit', (e: Event) =>{
    e.preventDefault()

    let doc: HasFormatter;
    if(Type.value === 'invoice'){
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    }else{
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }

    list.render(doc, Type.value, 'end')
})
