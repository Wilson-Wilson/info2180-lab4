window.onload = function() {
    var x = document.getElementsByClassName("boundary");
    for (var i = 0; i < x.length - 1; i++) {
      x[i].onmouseenter = function() {overBoundaryExc2()};
    }

    document.getElementById('end').onmouseenter = function() {win()};
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

function win() {
  if (document.getElementById('boundary1').className!="boundary youlose") {
    window.alert("YOU WIN!");
  }
}
