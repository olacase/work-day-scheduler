// #1 create a function to save inputs in local storage
$(document).ready(function() {

    $('.saveBtn').on('click', function () {
        var value = $(this).siblings('.tasks').val();
        var time = $(this).parent().attr('id');


        localStorage.setItem(time, value);


  // #2 create a notification message advising on any new input to the days schedule and display for 3 seconds
    $('.notification').addClass('show');

    setTimeout(function () {
        $('.notification').removeClass('show');
    console.log("timeout fnctn")
    }, 3000);

    });

    // #3 make a function that updates the time block with local time and link CSS displaying current time color-codes
    function hourUpdater () {
        var currentHour = moment().hours();

        $('.time-block').each(function() {
            var blockHour = parseInt($(this).attr('id').split('-')[1]);

            if(blockHour > currentHour) {
                $(this).addClass('past');
            } else if (blockHour === currentHour) {
                $(this).removeClass('past');
                $(this).addClass('present');
            } else {
                $(this).removeClass('past');
                $(this).removeClass('present');
                $(this).addClass('future');

            }

        });
        
    }
    hourUpdater();


    var interval = setInterval(hourUpdater, 15000);
    // load any saved data from localStorage
    $('#hour-9 .tasks').val(localStorage.getItem('hour-9'));
    $('#hour-10 .tasks').val(localStorage.getItem('hour-10'));
    $('#hour-11 .tasks').val(localStorage.getItem('hour-11'));
    $('#hour-12 .tasks').val(localStorage.getItem('hour-12'));
    $('#hour-13 .tasks').val(localStorage.getItem('hour-13'));
    $('#hour-14 .tasks').val(localStorage.getItem('hour-14'));
    $('#hour-15 .tasks').val(localStorage.getItem('hour-15'));
    $('#hour-16 .tasks').val(localStorage.getItem('hour-16'));
    $('#hour-17 .tasks').val(localStorage.getItem('hour-17'));
    $('#hour-18 .tasks').val(localStorage.getItem('hour-18'));











$('#currentDay').text(moment().format('dddd, MMMM Do'))

});