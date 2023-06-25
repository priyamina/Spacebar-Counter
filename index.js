var hits = 0;
var hitElement = document.querySelector( '.hits' );
document.body.onkeyup = function(a) {
if( a.keyCode == 32 ) {
addHit();
}
}
var addHit = function() {
hits++;
renderHits();
}
var renderHits = function() {
hitElement.innerHTML = hits;
}
var resetHits = function() {
hits = 0;
renderHits();
}
Submitted by:PRIYA MINA ,ECE 2ND YEAR,priya040btece21@igdtuw.ac.in
