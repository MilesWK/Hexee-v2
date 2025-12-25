const hex = document.getElementById("hexcode")           // The color input on the left side 
const display = document.getElementById("display")       // The hex code display on the right side 
const cbg = document.getElementById("color_background")  // The background of the right side
const cc = document.getElementById("copycode")           // The button to copy the hex code

var hex_code = "000000"

var update_hex = function() {                            // Update display, color. 
    hex_code = hex.value  
    console.log(hex_code)
    display.innerText = hex_code
    cbg.style.backgroundColor = hex_code
}

function copy_code() {                                   // Copy code to the clipboard
  navigator.clipboard.writeText(hex.value)
  cc.innerText = "Copied!"
  setTimeout(function() {
    cc.innerText = "Copy Code"
  }, 3000)
}
    


hex.addEventListener("input", (event) => {               // When the input is changed
  update_hex()
});
