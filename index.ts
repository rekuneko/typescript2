//2
var isbn:string = "123456789"
var val:boolean
console.log(isbn)

export function isValid(isbn:string):boolean {
    if(!isbn) return false
    if(isbn.length !== 10) return false

    const lastChar:string = isbn.slice(-1)

    let sum:number = 0
    let mult:number = 10
    let mod:number = 0
    
    Array.from(isbn.slice(0, -1)).forEach(a => {
      sum += Number(a) * mult
      mult--
    })
    
    if (lastChar == 'X') {
      sum += 10;
    } else {
      sum += Number(lastChar)
    }
    
    mod = sum % 11
    if(mod == 0){
        val = true
    } else{
        val = false
    }

    return val
  
  }
  console.log(isValid(isbn))
  

//3
var str:string = "Cat30"
console.log(str)

export const replace = (str:string) => {
    var newStr1 = str.replace(/[a-z]/gi, function(c){
        switch(c){
            case 'z': return 'a'
            case 'Z': return 'A'
            default: return String.fromCharCode(1+c.charCodeAt(0))
        }
    })

    var newStr2 = newStr1.split('').reduce((a, c) => a + (/[aeiou]/i.test(c)? c.toUpperCase():c.toLowerCase()), "")
    console.log(newStr2)
}   
replace(str)

//4
var qArray = [false,1,0,2,0,3,"a"]
var newArray = qArray.filter(c => c!==0).concat(qArray.filter(k => k==0))

export const testFunction = () => {
    console.log(newArray)
}

testFunction();