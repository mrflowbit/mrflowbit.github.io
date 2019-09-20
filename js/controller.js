var qualbutton = document.querySelectorAll("#komplett-paket .qual-btn");
var qual = document.querySelectorAll("#komplett-paket .qualifikationen");


function showQualification (controllerIndex) {
    qualbutton.forEach(function(node) {
        node.style.backgroundColor = "";
        node.style.borderBottom = "";
    });
    
    qualbutton[controllerIndex].style.borderBottom = "2px solid #20c997";

    qual.forEach((node) => {
        node.style.display = "none";
    });

    qual[controllerIndex].style.display = "block";
}

showQualification(0);