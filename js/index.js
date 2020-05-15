function myFunction(x) {
    if (x.matches) { // If media query matches
        document.querySelector(".gonna").innerHTML = `<div class="pos-f-t">
        <div class="collapse" id="navbarToggleExternalContent">
          <div class="bg-dark p-4" style="text-align: center;">
            <h5 class="text-white h5">
              <a href="index.html" class="text-white">Home</a>
            </h5>
            <h5 class="text-white h5">
              <a href="skills.html" class="text-white">Skills</a>
            </h5>
            <h5 class="text-white h5">
              <a href="project.html" class="text-white">Project</a>
            </h5>
            <h5 class="text-white h5">
              <a href="about.html" class="text-white">About</a>
            </h5>
            <h5 class="text-white h5">
              <a href="contact.html" class="text-white">Contact</a>
            </h5>
          </div>
        </div>
        <nav class="navbar navbar-dark bg-dark">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </nav>
      </div>`;
    }
};

var x = window.matchMedia("(max-width: 800px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes