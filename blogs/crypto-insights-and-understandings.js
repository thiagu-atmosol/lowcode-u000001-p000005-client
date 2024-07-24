
document.addEventListener("DOMContentLoaded", (event) => {
    
        postContentDiv = document.querySelector('#related-post-36');
        postContentDiv.addEventListener('click', function() {
            if(false){
                postName = ''.replaceAll(" ", "-").toLowerCase();
                window.location.href = `https://lowcodeappsourcestore.z7.web.core.windows.net/u1p5/blogs/${postName}.html`;
            }
            else{
                window.location.href = `https://lowcodeappsourcestore.z7.web.core.windows.net/u1p5/blogs/p5b36.html`;
            }
        });
    
        postContentDiv = document.querySelector('#related-post-6');
        postContentDiv.addEventListener('click', function() {
            if(true){
                postName = 'Start textile business'.replaceAll(" ", "-").toLowerCase();
                window.location.href = `https://lowcodeappsourcestore.z7.web.core.windows.net/u1p5/blogs/${postName}.html`;
            }
            else{
                window.location.href = `https://lowcodeappsourcestore.z7.web.core.windows.net/u1p5/blogs/p5b6.html`;
            }
        });
    
});