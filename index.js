let cats= ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(){
    cats.push("Ralph")
}
        
function destructivelyPrependCat(){
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(){
    cats.pop("Garfield")
}

function destructivelyRemoveFirstCat(){
    cats.shift("Milo")
}

function appendCat(){
let ginger = cats.concat(["Broom"])
    return ginger
}

function prependCat(){
const copyOfCats = [...cats]
copyOfCats.unshift("Arnold")
    return copyOfCats
}

function removeLastCat(){
    const newCopy = [...cats]
   console.log(newCopy.pop())
   return newCopy
}
 function removeFirstCat(){
   const lastCopy = [...cats] 
   console.log(lastCopy.shift())
   return lastCopy
}