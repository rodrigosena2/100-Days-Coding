let myChannel: string | boolean = ' Front Beginners '
let is20K: boolean = true;

myChannel += 'has 20K followers'

console.log(myChannel)

const num: number = 10
const regex: RegExp = /eeeeee/

const array1: string[] = myChannel.split('')
const array2: Array<number | string> = [1, 2, 3, 'a']

interface ExemploProps {
  name: string
  role: string
  isAdmin: boolean
  age: number
}

const objeto: ExemploProps = {
  name: 'Rodrigo',
  role: 'developer',
  isAdmin: true,
  age: 24,
}
function exemplo({name, role, isAdmin, age}: ExemploProps) {

}

const ids: Record<number, string> ={
  [10]: 'a',
  [20]: 'b',
}

ids[30] = 'c'

if(ids[30] === 'asre') {
  
}

const arrayTeste = [1,2,3].map((v) => `${v + 1}`) // '2', '3,' '4'