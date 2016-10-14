window.onload = function() {
    document.getElementById("boundary1").onmouseenter = function() {overBoundaryExc2()};
    //document.getElementById("boundary").onmouseenter = function() {overBoundaryExc2()};
    //document.getElementsByClassName("boundary").onmouseenter = function() {overBoundaryExc2()};
};

function overBoundaryExc1() {
    document.getElementById("boundary1").className+=' youlose';
}

function overBoundaryExc2() {
    var walls = document.querySelectorAll(".boundary");
    for (var i = 0; i < walls.length - 1; i++) {
      walls[i].className+=' youlose';
    }
}
