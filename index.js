// Importing the firebase links//

import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"

const appSettings = {
    databaseURL: "https://mobile-app-7f6c8-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")


const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const shoppingListEl = document.getElementById("shopping-list")

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value

    push(shoppingListInDB, inputValue)

    clearInputFieldEl()
})

// Creating a fuction to be able to update the items in realtime//
onValue(shoppingListInDB, function(snapshot) {
    let itemArray = Object.values(snapshot.val())

    clearShoppingListEl()

    for (let i = 0; i < itemsArray.length; i++) {
        appendItemToShoppingListEl(itemArray[i])
    }
}) 
// Creating a function to clear the input after putting a list//

function clearInputFieldEL() {
    inputFieldEl.value = ""
}

function appendItemToShoppingListEl(inputValue) {
    shoppingListEL.innerHTML += `<li>${inputValue}</li>`
}

