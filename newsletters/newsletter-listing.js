console.log("Hello from newsletter-listing.js!");

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

function addRelatedLinks(newsletterSections) {
  let list = document.getElementById("relatedlinks");
    for (i = 0; i < newsletterSections.length; ++i) {
        var li = document.createElement('li');
        li.innerText = newsletterSections[i].url;
        list.appendChild(li);
    }
}

document.addEventListener("DOMContentLoaded", (event) => {
    var dropDownDiv = document.getElementById("custom-select");
    var newsletterListDiv = document.getElementById("newsletterListContent");
    
    var dropDownData = '<option value="0">Select option:</option>';
    dropDownDiv.innerHTML += dropDownData;
    var newsletterListData = "";
    
        dropDownData = '<option value="' + 1 + '">' + 'Building and Design Industry' + '</option>'

        newsletterListData = '<div class="col-md-6 blog-main">' 
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
                        +'</svg> ' + fromDateToString('2024-06-18T08:52:17.8745577') + '</small> '
                    + '<h3 class="blog-title">' + 'Building and Design Industry' + '</h3>'
                + '</div>'
                + '<div class="related-links">'
                + '<div><span>Related Links</span></div>'
                + '<ul id="relatedlinks"></ul>'
                + '</div>' 
                + '</div> </div>'

        dropDownDiv.innerHTML += dropDownData;
        newsletterListDiv.innerHTML += newsletterListData;
        addRelatedLinks(newsletter.newsletterSections)
    
        dropDownData = '<option value="' + 2 + '">' + 'New E-commerce Business' + '</option>'

        newsletterListData = '<div class="col-md-6 blog-main">' 
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
                        +'</svg> ' + fromDateToString('2024-06-20T05:37:27.4227903') + '</small> '
                    + '<h3 class="blog-title">' + 'New E-commerce Business' + '</h3>'
                + '</div>'
                + '<div class="related-links">'
                + '<div><span>Related Links</span></div>'
                + '<ul id="relatedlinks"></ul>'
                + '</div>' 
                + '</div> </div>'

        dropDownDiv.innerHTML += dropDownData;
        newsletterListDiv.innerHTML += newsletterListData;
        addRelatedLinks(newsletter.newsletterSections)
    

});