const form = document.getElementById("form");

form.addEventListener("submit", e => {
  e.preventDefault();
  let email = document.getElementById("email").value;
  let data = { email };

  localStorage.setItem('lead', JSON.stringify(data));
  
  document.getElementById("success-message").style.visibility = "visible";
});