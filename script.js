document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  // Getting the user's name from the form
  const userName = document.getElementById("name").value;

  alert(`Thank you for your feedback, ${userName}!`);
});
