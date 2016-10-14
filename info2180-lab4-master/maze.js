window.onload = function() {
    var x = document.getElementsByClassName("boundary");
    for (var i = 0; i < x.length - 1; i++) {
      x[i].onmouseenter = function() {overBoundaryExc2()};
    }

    document.getElementById('end').onmouseenter = function() {win()};
    document.getElementById('start').onclick = function() {restart()};
};

function overBoundaryExc1() {
    document.getElementById("boundary1").className+=' youlose';
}

function overBoundaryExc2() {
    var walls = document.querySelectorAll(".boundary");
    for (var i = 0; i < walls.length - 1; i++) {
      walls[i].className='boundary youlose';
    }
    document.getElementById('status').innerHTML = 'YOU LOSE!';
}

function win() {
  if (document.getElementById('boundary1').className!="boundary youlose") {
    document.getElementById('status').innerHTML = 'YOU WIN!';
  }
}

function restart() {
  if (document.getElementById('boundary1').className=="boundary youlose") {
    var walls = document.querySelectorAll(".boundary");
    for (var i = 0; i < walls.length - 1; i++) {
      walls[i].className='boundary';
    }
    document.getElementById('status').innerHTML = 'Move your mouse over the "S" to begin.';
  }
}
