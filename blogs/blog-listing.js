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
    var dropDownDiv = document.getElementById("custom-select");
    var blogListDiv = document.getElementById("blogListContent");
    
    var dropDownData = '<option value="0">Select option:</option>';
    dropDownDiv.innerHTML += dropDownData;
    var blogListData = "";
    
        dropDownData = '<option value="' + 1 + '">' + 'How to Start a Small Textile Business: Tips for Fabric Suppliers and Manufacturers' + '</option>'

        blogListData = '<div class="col-md-6 blog-main">' 
            + '<div class="blog-card">'
                + '<div class="card-content"> '
                    + '<div><span class="badge-default">Topic</span></div>'
                    + '<small class="text-muted my-3 d-flex align-items-center">'
                        +'<svg class="calendar-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">'
                            +' <g clip-path="url(#clip0_578_177)">'
                                +' <path fill-rule="evenodd" clip-rule="evenodd" '
                                    +' d="M21.3333 24H2.66667C1.196 24 0 22.9236 0 21.6V4.8C0 3.4764 1.196 2.4 2.66667 2.4H5.33333V0H8V2.4H16V0H18.6667V2.4H21.3333C22.804 2.4 24 3.4764 24 4.8V21.6C24 22.9236 22.804 24 21.3333 24ZM21.3347 21.6L21.3333 7.2H2.66667V21.6H21.3347ZM7.99727 10.8H5.33061V13.2H7.99727V10.8ZM7.99727 15.6H5.33061V18H7.99727V15.6ZM13.3306 10.8H10.6639V13.2H13.3306V10.8ZM13.3306 15.6H10.6639V18H13.3306V15.6ZM18.6639 10.8H15.9973V13.2H18.6639V10.8ZM18.6639 15.6H15.9973V18H18.6639V15.6Z" fill="#787878"/>'
                            + '</g>'
                            +'<defs>'
                                + '<clipPath id="clip0_578_177">'
                                    +' <rect width="24" height="24" fill="white" />'
                                + '</clipPath>'
                            + '</defs>'
                        +'</svg> ' + fromDateToString('2024-06-06T10:09:32.1847754') + '</small> '
                    + '<h3 class="blog-title">' + 'How to Start a Small Textile Business: Tips for Fabric Suppliers and Manufacturers' + '</h3>'
                    + '<small class="d-inline-block mb-3">By Username, LowCode</small>'
                    + '<img class="blog-img" alt="blog-image" src="../assets/images/building.jpg" />'
                    + '<!-- <div class="image-placeholder-wrapper">'
                        + '<div class="image-placeholder"></div>'
                    + '</div> -->'
                + '</div> </div> </div>'

        dropDownDiv.innerHTML += dropDownData;
        blogListDiv.innerHTML += blogListData;
    
        dropDownData = '<option value="' + 2 + '">' + 'Finding the Perfect Gym Near You' + '</option>'

        blogListData = '<div class="col-md-6 blog-main">' 
            + '<div class="blog-card">'
                + '<div class="card-content"> '
                    + '<div><span class="badge-default">Topic</span></div>'
                    + '<small class="text-muted my-3 d-flex align-items-center">'
                        +'<svg class="calendar-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">'
                            +' <g clip-path="url(#clip0_578_177)">'
                                +' <path fill-rule="evenodd" clip-rule="evenodd" '
                                    +' d="M21.3333 24H2.66667C1.196 24 0 22.9236 0 21.6V4.8C0 3.4764 1.196 2.4 2.66667 2.4H5.33333V0H8V2.4H16V0H18.6667V2.4H21.3333C22.804 2.4 24 3.4764 24 4.8V21.6C24 22.9236 22.804 24 21.3333 24ZM21.3347 21.6L21.3333 7.2H2.66667V21.6H21.3347ZM7.99727 10.8H5.33061V13.2H7.99727V10.8ZM7.99727 15.6H5.33061V18H7.99727V15.6ZM13.3306 10.8H10.6639V13.2H13.3306V10.8ZM13.3306 15.6H10.6639V18H13.3306V15.6ZM18.6639 10.8H15.9973V13.2H18.6639V10.8ZM18.6639 15.6H15.9973V18H18.6639V15.6Z" fill="#787878"/>'
                            + '</g>'
                            +'<defs>'
                                + '<clipPath id="clip0_578_177">'
                                    +' <rect width="24" height="24" fill="white" />'
                                + '</clipPath>'
                            + '</defs>'
                        +'</svg> ' + fromDateToString('2024-05-29T11:26:16.0324895') + '</small> '
                    + '<h3 class="blog-title">' + 'Finding the Perfect Gym Near You' + '</h3>'
                    + '<small class="d-inline-block mb-3">By Username, LowCode</small>'
                    + '<img class="blog-img" alt="blog-image" src="../assets/images/building.jpg" />'
                    + '<!-- <div class="image-placeholder-wrapper">'
                        + '<div class="image-placeholder"></div>'
                    + '</div> -->'
                + '</div> </div> </div>'

        dropDownDiv.innerHTML += dropDownData;
        blogListDiv.innerHTML += blogListData;
    
        dropDownData = '<option value="' + 3 + '">' + 'Shop the Best Black Friday Deals on E-commerce Websites' + '</option>'

        blogListData = '<div class="col-md-6 blog-main">' 
            + '<div class="blog-card">'
                + '<div class="card-content"> '
                    + '<div><span class="badge-default">Topic</span></div>'
                    + '<small class="text-muted my-3 d-flex align-items-center">'
                        +'<svg class="calendar-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">'
                            +' <g clip-path="url(#clip0_578_177)">'
                                +' <path fill-rule="evenodd" clip-rule="evenodd" '
                                    +' d="M21.3333 24H2.66667C1.196 24 0 22.9236 0 21.6V4.8C0 3.4764 1.196 2.4 2.66667 2.4H5.33333V0H8V2.4H16V0H18.6667V2.4H21.3333C22.804 2.4 24 3.4764 24 4.8V21.6C24 22.9236 22.804 24 21.3333 24ZM21.3347 21.6L21.3333 7.2H2.66667V21.6H21.3347ZM7.99727 10.8H5.33061V13.2H7.99727V10.8ZM7.99727 15.6H5.33061V18H7.99727V15.6ZM13.3306 10.8H10.6639V13.2H13.3306V10.8ZM13.3306 15.6H10.6639V18H13.3306V15.6ZM18.6639 10.8H15.9973V13.2H18.6639V10.8ZM18.6639 15.6H15.9973V18H18.6639V15.6Z" fill="#787878"/>'
                            + '</g>'
                            +'<defs>'
                                + '<clipPath id="clip0_578_177">'
                                    +' <rect width="24" height="24" fill="white" />'
                                + '</clipPath>'
                            + '</defs>'
                        +'</svg> ' + fromDateToString('2024-06-11T07:46:56.3141876') + '</small> '
                    + '<h3 class="blog-title">' + 'Shop the Best Black Friday Deals on E-commerce Websites' + '</h3>'
                    + '<small class="d-inline-block mb-3">By Username, LowCode</small>'
                    + '<img class="blog-img" alt="blog-image" src="../assets/images/building.jpg" />'
                    + '<!-- <div class="image-placeholder-wrapper">'
                        + '<div class="image-placeholder"></div>'
                    + '</div> -->'
                + '</div> </div> </div>'

        dropDownDiv.innerHTML += dropDownData;
        blogListDiv.innerHTML += blogListData;
    

});