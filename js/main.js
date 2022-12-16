console.log("JavaScript Portion of the Test");

// Step 1: Write a multi-line comment detailing your name and student number
console.log(" Brad Buttineau")
console.log("10078616")

const myImmutableArray = ["Jared", "Francis", "Amrit", "Sarah", "Gurleen", "Johanna", "Ury"];


// Step 2: Add the 3 people's names to the array
myArray.push(" Brad")
myArray.push("John")
myArray.push("Hope")

// Step 4: Remove the first array item from the array
myArray.pop(" Jared");


// Step 5 Remove the second array item from the array
myArray.pop("Francis")

// Step 6: Using array filter, iterate over the array items and remove all items beginning with the letter "J". Store the result in a new, block scoped, mutable variable
const leftOver= myArray.filter(function(item){
    if(item===J){
        return true;
    }else{
        return false;

    }
});

// Step 7: Create an event listener that fires a callback function when the call to action button in the header is clicked. It should alert "Call me now at 555-555-55555";
const image = document.quarySelector("img");
image.addEventListner("click", function(){
 console.log("image was clicked");
 alert("call ne at 555-555-5555");
});