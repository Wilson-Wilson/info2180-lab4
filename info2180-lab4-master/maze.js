window.onload = function() {
    var x = document.getElementsByClassName("boundary");
    for (var i = 0; i < x.length - 1; i++) {
      x[i].onmouseenter = function() {overBoundaryExc2()};
    }
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
