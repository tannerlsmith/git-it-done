var userFormEl = document.querySelector('#user-form');
var nameInputEl = document.querySelector('#username');
var repoContainerEl = document.querySelector('#repos-container');
var repoSearchTerm = document.querySelector('#repo-search-term');

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
      displayRepos(data, user);
    });
  });
};

var displayRepos = function(repos, searchTerm) {
  console.log(repos);
  console.log(searchTerm);
  repoContainerEl.textContent = "";
  repoSearchTerm.textContent = searchTerm;

  for (var i = 0; i < repos.length; i++) {
    // formats the repo name
    var repoName = repos[i].owner.login + '/' + repos[i].name;

    // creates a container for each repo
    var repoEl = document.createElement('div');
    repoEl.classList = 'list-item flex-row justify-space-between align-center';

    // Creates a span element to hold repo name
    var titleEl = document.createElement('span');
    titleEl.textContent = repoName;

    // appends to container
    repoEl.appendChild(titleEl);

    // create a status element 
    var statusEl = document.createElement('span');
    statusEl.classList = 'flex-row align-center';

    // check if current repo has issues or not
    if (repos[i].open_issues_count > 0) {
      statusEl.innerHTML = 
        "<i class='fas fa-times status-icon icon-danger'></i>" + repos[i].open_issues_count + " issues(s)";
    } else {
      statusEl.innerHTML = "<i class='fas fa-check-square status-icon icon-success'></i>";
    }

    // appends to container 
    repoEl.appendChild(statusEl);
    
    // appends container to the dom
    repoContainerEl.appendChild(repoEl);

  }
}

getUserRepos("tannerlsmith");