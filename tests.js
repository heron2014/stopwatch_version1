/**
 * Created by anita on 17/05/15.
 */
test('does #output element display 00:00:00 when we enter the page?', function (){
    var output = document.getElementById('output').innerHTML;
    equal(output, '00:00:00');
});

test('does #startPause button exist?', function (){
    var startPauseButton = document.getElementById('startPause').innerHTML;
   equal(startPauseButton, 'Start');
});

//test('clicking the button invokes startPause', function(){
//    var startPauseButton = document.getElementById('startPause');
//
//    equal($('#startPause').attr('onClick'), 'T.startPause()');
//})