var userFormEl = document.querySelector('#user-form');
var nameInputEl = document.querySelector('#username');

userFormEl.addEventListener('submit', formSubmitHandler);

var formSubmitHandler = function(event) {
  event.preventDefault();

  var username = nameInputEl.value.trim();

  if (username) {
    getUserRepos(username);
    nameInputEl.value = "";
  } else {
    alert('Please Enter a GitHub username');
  }
  console.log(event);
};

var getUserRepos = function(user) {
  // format the github api url
  var apiUrl = "https://api.github.com/users/" + user + "/repos";

  // make a get request to url
  fetch(apiUrl).then(function(response) {
    console.log(response);
    response.json().then(function(data) {
      console.log(data);
    });
  });
};

getUserRepos("tannerlsmith");