/**
 * Created by anita on 17/05/15.
 */

var T = (function(){

    var start = 0, // stopwatch is not running
        running = 0,
        output = document.getElementById('output'),
        startPauseButton = document.getElementById('startPause'),
        resetButton = document.getElementById('reset');

    function startPause() {
        if (running === 0) { // if start is clicked
            running = 1; // change the value of running to 1
            increment(); //start our timer
            console.log(running);
            startPauseButton.innerHTML = 'Pause'; // update start button to Pause
        } else {
            running = 0; // if stopwatch is paused
            startPauseButton.innerHTML = 'Resume'; // update the value of the button to Resume
        }
        return running;

    }
    function reset() {
        running = 0;
        start = 0;
        startPauseButton.innerHTML = 'Start';
        output.innerHTML = '00:00:00'; //update output
    }
    function addLeadingZeros(n) {
        //if (n < 10) {
        //    n = '0' + n;
        //}
        //if (n < 10) {
        //    n = '0' + n;
        //}
        return n < 10 ? '0' + n: '' + n;
    }
    function increment() {
        if (running === 1) {
            setTimeout(function () {
                start++;
                var min = Math.floor(start / 10 / 60);
                var secs = Math.floor(start / 10);
                var cent = start % 10;

                output.innerHTML = addLeadingZeros(min) + ':' + addLeadingZeros(secs) + ':' +  addLeadingZeros(cent);
                increment();
            }, 100);
        }
    }

    startPauseButton.addEventListener('click', startPause, false);
    resetButton.addEventListener('click', reset, false);

    return {
        startPause: startPause,
        reset: reset,
        addLeadingZeros: addLeadingZeros,
        increment: increment
    }
}());