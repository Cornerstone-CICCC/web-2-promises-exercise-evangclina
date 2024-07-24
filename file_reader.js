const fs = require("fs").promises;

// THEN-CATCH SOLUTION BELOW THIS LINE
fs.readFile("./firstName.txt", "utf-8")
    .then((data) => {
        // console.log(data)
        firstName = data
        return fs.readFile("./lastName.txt", "utf-8")
    })
    .then((data) => {
        lastName = data 
        return fs.readFile("./age.txt", "utf-8")
    })
    .then((data) => {
        age = data
        return fs.readFile("./hobbies.txt", "utf-8")
    })
    .then((data) => {
        hobbies = data

        //convert string to array 
        const array = hobbies.split("")
        array.splice(0, 1)
        array.splice(0, 1)
        array.splice(8,1)
        array.splice(8,1)
        array.splice(9,1)
        array.splice(16,1)
        array.splice(16,1)
        const array2 = array.join("")
        const array3 = array2.split(" ")
        console.log(`THEN & CATCH Solution: \n ${firstName} ${lastName} is ${age} years old and his hobbies are ${array3[0]} and ${array3[1]}.`)
    })
    .catch((error) => {s
        console.log(error)
    })

// ASYNC/AWAIT SOLUTION BELOW THIS LINE
async function readFiles(){
    try{
        firstName2 = await fs.readFile("./firstname.txt", "utf-8")
        lastName2 = await fs.readFile("./lastname.txt", "utf-8")
        age2 = await fs.readFile("./age.txt", "utf-8")
        hobbies2 = await fs.readFile("./hobbies.txt", "utf-8")

        //making string into array 
        const array2 = hobbies2.split("")
        array2.splice(0, 1)
        array2.splice(0, 1)
        array2.splice(8,1)
        array2.splice(8,1)
        array2.splice(9,1)
        array2.splice(16,1)
        array2.splice(16,1)
        const array3 = array2.join("")
        const array4 = array3.split(" ")

        console.log(`ASYN AWAIT Solution: \n ${firstName2} ${lastName2} is ${age2} years old and his hobbies are ${array4[0]} and ${array4[1]}.`)
        
    }catch(error){
        console.log(error)
    }
}

readFiles()