window.onload = function() {
    document.getElementById("boundary1").onmouseenter = function() {overBoundary()};
};

function overBoundary() {
    document.getElementById("boundary1").className+=' youlose';
}
