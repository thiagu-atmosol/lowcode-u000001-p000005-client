console.log("Hello from blog-listing.js!");

function fromDateToString(dateValue) {
  let date = new Date(dateValue)
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric"
  }
  const formattedDate = date.toLocaleDateString("en-US", options)
  return formattedDate
}

document.addEventListener("DOMContentLoaded", (event) => {
    var blogListDiv = document.getElementByTagName('body');
    console.log();
    blogListDiv.innerHTML += ;
});