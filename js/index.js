function myFunction(x) {
    if (x.matches) { // If media query matches
        document.querySelector(".gonna").innerHTML = ``;
    }
};

var x = window.matchMedia("(max-width: 800px)");
// myFunction(x); // Call listener function at run time
// x.addListener(myFunction); // Attach listener function on state changes