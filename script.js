function validate() {
  var username = document.getElementById("userName").value;
  var password = document.getElementById("password").value;

  // Validate username
  if (!username) {
    alert("Please enter a username.");
    return false;
  }

  // Validate password
  if (!password) {
    alert("Please enter a password.");
    return false;
  }

  // Additional validation rules for username and password
  // Add your own validation logic here

  // Validation successful
  //

  let Uname = "batch8";
    let password1 = "parties1";

    if (username == Uname) {
        if (password == password1) {
            window.location = "./vote.html";
        }else{
          alert("Validation wrong!");
          return true;
        }
    }
    

  
}
