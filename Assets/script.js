// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

const localSettings ={}

dayjs.local(localSettings);


$(function () {
  
  const currentHour = dayjs().format('H'); // Getting the current (H) hour of the day using days.js library

  // The function below changes the color of each time block based on whether it's in the "past, present, or future" relative to the current hour. Example if 12 clock now in the future of 1pm it will be a different color.

  function hourlyC() {
    $('.time-block').each(function() {
      const blockH = parseInt(this.id);
      $(this).toggleClass('past', blockH < currentHour);
      $(this).toggleClass('present', blockH === currentHour);
      $(this).toggleClass('future', blockH > currentHour);
    });
  }

  function hourlyC(); //calling function

// // This will ill save the user's input in a textarea to localStorage 


// function textEntry() {
//   $('.saveBtn').on('click', function() {
//     const key = $(this).parent().attr('id');
//     const value = $(this).siblings('.description').val();
//     localStorage.setItem(key, value);
//   });
// }



// function textEntry(); //calling function

   // Will refresh the color of each time block based on whether it's in the past(grey), present(red), or future(green).
   
   function refreshColor() {

    $('.time-block').each(function() {
      const blockHour = parseInt(this.id);
      if (blockH == currentHour) {
        $(this).removeClass('past future').addClass('present');
      } else if (blockH < currentHour) {
        $(this).removeClass('future present').addClass('past');
      } else {
        $(this).removeClass('past present').addClass('future');
      }
    });
   }

   function refreshColor();

// This will get the user input from the localStorage and set textarea values for each time block.

$('.time-block').each(function() {
  const key = $(this).attr('id');
  const value = localStorage.getItem(key);
  $(this).children('.description').val(value);
});

});










//  This is to set the date and time using the updateT (time) function


// function updateT() {
//       const dateElement = $('#date');
//       const timeElement = $('#time');
//       const currentDate = dayjs().format('dddd, MMMM D, YYYY');
//       const currentTime = dayjs().format('hh:mm:ss A');
//       dateElement.text(currentDate);
//       timeElement.text(currentTime); 
    
//     };
//     setInterval(updateTime, 1000);
//  
    