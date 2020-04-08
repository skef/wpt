// DO NOT EDIT! This test has been generated by /offscreen-canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.text.measure.width.empty
// Description:The empty string has zero width for OffscreenCanvas
// Note:

importScripts("/resources/testharness.js");
importScripts("/2dcontext/resources/canvas-tests.js");

var t = async_test("The empty string has zero width for OffscreenCanvas");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

var f = new FontFace("CanvasTest", "url('/fonts/CanvasTest.ttf')");
let fonts = (self.fonts ? self.fonts : document.fonts);
f.load();
fonts.add(f);
fonts.ready.then(function() {
    ctx.font = '50px CanvasTest';
    _assertSame(ctx.measureText("").width, 0, "ctx.measureText(\"\").width", "0");
}).then(t_pass, t_fail);

});
done();
