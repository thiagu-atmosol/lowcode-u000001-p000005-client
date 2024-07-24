
document.addEventListener("DOMContentLoaded", (event) => {
    
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
    
        postContentDiv = document.querySelector('#related-post-9');
        postContentDiv.addEventListener('click', function() {
            if(true){
                postName = 'Gym and fitness blog part 1'.replaceAll(" ", "-").toLowerCase();
                window.location.href = `https://lowcodeappsourcestore.z7.web.core.windows.net/u1p5/blogs/${postName}.html`;
            }
            else{
                window.location.href = `https://lowcodeappsourcestore.z7.web.core.windows.net/u1p5/blogs/p5b9.html`;
            }
        });
    
});