// npm install rxjs
// declare var module:any;
var rxjs = require('rxjs');
var observableUno$ = rxjs.of(1, 2, 3, 4, 5, 6, 7);
console.log(observableUno$);
observableUno$
    .subscribe(function (ok) {
    console.log('En ok', ok);
}, function (error) {
    console.log(error);
}, function () {
    console.log('Completado');
});
