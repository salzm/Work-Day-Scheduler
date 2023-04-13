// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

const localeSettings = {};
  dayjs.locale(localeSettings); 

  // Wait until the DOM is fully loaded before executing the code inside the function.
  $(function () {
    // Get the current hour of the day using the dayjs library.
    const currentH = dayjs().format('H');
    
  // The function below changes the color of each time block based on whether it's in the "past, present, or future". It changes per Hour. I could not figure this one out 

   // Will refresh the color of each time block based on whether it's in the past(grey), present(red), or future(green). 


    function colorRefresh() {
      $('.time-block').each(function() {
      const blockHour = parseInt(this.id);
      if (blockHour == currentH) {
      $(this).removeClass('past future').addClass('present');
    } else if (blockHour < currentH) {
      $(this).removeClass('future present').addClass('past');
    } else {
      $(this).removeClass('past present').addClass('future');
    }
  });
}

colorRefresh();

  // Once the user click on the save button their text will be stored locally. The user's input in a textarea to localStorage - only when the corresponding save button has been clicked. 

    function inputTextByUser() {
      $('.saveBtn').on('click', function() { // Add Event Listner for click to save the input
        const key = $(this).parent().attr('id');
        const value = $(this).siblings('.description').val();
        localStorage.setItem(key, value);
      });
    }

    inputTextByUser();                

    // This will get the user input from the localStorage and set textarea values for each time block.
    $('.time-block').each(function() {
         const key = $(this).attr('id');
        const value = localStorage.getItem(key);
        $(this).children('.description').val(value);
    });
  
    // This will update the time  and date to display using jquery


    function updateTime() {
      const dateElement = $('#date');
      const timeElement = $('#time');
      const currentDate = dayjs().format('dddd, MMMM D, YYYY');
      const currentTime = dayjs().format('hh:mm A');
      dateElement.text(currentDate);
      timeElement.text(currentTime);
    }
    
    setInterval(updateTime, 1000); // Set interval to countdown to 1000
  });
