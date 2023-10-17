    // JavaScript code for form validation
	// Prevent form from submitting
  document.getElementById("myForm").addEventListener('submit', function(event) {
    let input = document.getElementById('inputField').value
    var regex = /^[0-9a-zA-z]+$/
    
    if (input.match(regex) != null){
      alert("Your input is " + input)
    } else {
      alert("Please enter a valid response")
    }
  })
  /*
      // Retrieve the input field value
      let input = document.getElementById("inputField").value
      
      // Regular expression pattern for alphanumeric input
      
           
      // Check if the input value matches the pattern
      
      // Valid input: display confirmation and submit the form
        document.getElementById("myForm").addEventListener('submit', function(event) {
          event.preventDefault()
          let input = document.getElementById('inputField').value
          let regex = /^[a-zA-Z0-9]+$/
          //event.preventDefault()
          if (input === ""){
            alert('Letter or number is required!')
          }
            else if (input != regex)
              alert('Leter or number is required!')
            else 
              alert("You entered", input)            
          })
        
        
        // Invalid input: display error message
       
      */
