const soma = (a, b)=>{
// const pq essa variavel soma não vai mudar
//pra indicar que é uma function, colocar o => (arrow function)

    return a + b

}

//const soma = (a, b)=> a+b
//outro jeito 

console.log(soma(1, 4))

it ('a function test...', function(){
    console.log('Function', this)
})

it ('an arrow test...', () =>{
    console.log('Arrow', this)
})
