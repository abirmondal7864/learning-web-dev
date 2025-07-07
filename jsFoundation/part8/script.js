// example 1
document
    .getElementById("changeTextButton")
    .addEventListener("click", function () {
        let paragraph = document.getElementById("myParagraph");
        paragraph.textContent = "This is a new text";
    console.log(paragraph); //NOT needed, just for testing
    })

// example 2 
document
    .getElementById("highlightFirstCity")
    .addEventListener("click", function () {
        let cities = document.getElementById("citiesList");
        cities.firstElementChild.classList.add("highlight"); 
    });

// example 3
document.getElementById("changeOrder")
    .addEventListener("click", function () {
        let changedOrder = document.getElementById("coffeeType");
        changedOrder.textContent = "Espresso";
        changedOrder.style.color = "red";
        changedOrder.style.padding = "10px";
    });

// example 4
document.getElementById("addNewItem")
    .addEventListener("click", function () {
        let newItem = document.createElement("li");
        newItem.textContent = "Eggs";
        
        document.getElementById("shoppingList").appendChild(newItem);
})

// example 5
document.getElementById("removeLastTask").addEventListener("click", function() {
    let newList = document.getElementById("taskList");
    newList.lastElementChild.remove();
});

// example 6
document.getElementById("clickMeButton")
    .addEventListener("dblclick", function () { //change to dblclick
    alert("You double clicked me!");
})
// document.getElementById("clickMeButton")
//     .addEventListener("mouseover", function () { //change to mouseover
//     alert("You hovered over me!");
// })

//example 7
document.getElementById("teaList").addEventListener("click", function (event) { //event handler function
    if (event.target && event.target.matches(".teaItem")) { 
        alert("You selected " + event.target.textContent);
    };
});
// event.target.matches(".teaItem"): This is the crucial part.It uses the matches() method to check if the
// clicked element(event.target) matches the CSS selector ".teaItem".
// The ".teaItem" selector targets elements with the class "teaItem".
// This is how the code determines if the click occurred on a specific "teaItem" element within the "teaList".

//example 8
document.getElementById("feedbackForm").addEventListener("submit", function (event) {
    event.preventDefault();
//By default, when a form is submitted, the browser typically reloads the page or sends the form data to a server.
//event.preventDefault() stops this default behavior, allowing you to handle the form submission using JavaScript.
    
    let feedback = document.getElementById("feedbackInput").value;  //dont forget to add .value***
    console.log(feedback);
    document.getElementById("feedbackDisplay").textContent = `Feedback is: ${feedback}`;
});

//example 9
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("domStatus").textContent = "DOM fully loaded";
})
// "DOMContentLoaded": This is the event type.It fires when the initial HTML document has been completely loaded
// and parsed, without waiting for stylesheets, images, and subframes to finish loading.

//example 10
document
  .getElementById("toggleHighlight")
  .addEventListener("click", function() {
    let descriptionText = document.getElementById("descriptionText");
    descriptionText.classList.toggle("highlight");
  });
//    The toggle() method does the following:
// If the "highlight" class is currently present on the element, it removes it.
// If the "highlight" class is not present on the element, it adds it