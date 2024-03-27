let doesExists = localStorage.getItem("infinite-craft-data")
let confirmed
let replace = prompt("Enter a new save file to import:");
if (doesExists == null) {
	localStorage.setItem("infinite-craft-data", replace);

}
