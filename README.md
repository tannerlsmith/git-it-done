# git-it-done

* Deployed at https://tannerlsmith.github.io/git-it-done/

### Capturing Data returned from the API.
* With your fetch() request in place, we will need to read the data that were returned in the response.
* Console log the response after the fetch to check the promise. 
* Promises are callback functions. 
* JS sets fetch() requests aside and continues implemented the rest of your code, until the fetch callback is ready. This is asynchronous code. 
* Async code is referred to as AJAX. 
* With a response in place, look at the response object that is logged. 
* Fetch request looks like:
<br>
![fetch-request](./assets/images/fetch-request.png)

### Adding the Search Form
* The form with input capability will look like:
<br>
![form input for html](./assets/images/form-input.png)

* Now handling the form submission by making it functional:
* We need to create variables to store references to the form: 
<br>

* ```var userFormEl = document.querySelector("#user-form");```
<br>

* ```var nameInputEl = document.querySelector("#username");```
<br>

* Next, create a handler event: 
<br>

* ![alt](./assets/images/form-handler.png)
<br>

* with ```userFormEl.addEventListener('submit', formSubmitHandler);``` in place, check functionality by clicking the button and looking at the console. 
