// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.  // Wait until the DOM is fully loaded before executing the code inside the function.


const localSettings = {};
  dayjs.locale(localSettings); 

  $(function () {
    // Get the current hour of the day using the dayjs library.
    const currentHr = dayjs().format('H');
    
  // The function below changes the color of each time block based on whether it's in the "past, present, or future". It changes per Hour. I could not figure this one out 

   // Will refresh the color of each time block based on whether it's in the past(grey), present(red), or future(green). 

   function color() {
    $('.time-block').each(function() {
    const blockHour = parseInt(this.id);
    if (blockHour == currentHr) {
    $(this).removeClass('past future').addClass('present'); // Researched what is removeClass and addClass is but confused on how it still works. Had an instructor help me. 
    //Basically it states if the var - block Hour is = to present replace past future with present. It removes class names from a selected elements and is adding it back
  } else if (blockHour < currentHr) {
    $(this).removeClass('future present').addClass('past');
  } else {
    $(this).removeClass('past present').addClass('future');
  }
});
}
  
color(); //Declaring function

  // Once the user click on the save button their text will be stored locally. The user's input in a textarea to localStorage - only when the corresponding save button has been clicked. 

    function inputTextByUser() {
      $('.saveBtn').on('click', function() { // Add Event Listner for click to save the input
        const key = $(this).parent().attr('id');
        const value = $(this).siblings('.description').val();
        localStorage.setItem(key, value); // Made a value and key to store this to local storage and to call it IE Save it to memory
      });
    }

    inputTextByUser();     //Declaring function            

    // This will get the user input from the localStorage and set values for each time block that is present.
    $('.time-block').each(function() {
         const key = $(this).attr('id');
        const value = localStorage.getItem(key);
        $(this).children('.description').val(value);
    });
  
    // This will update the time and date to display using jsday libary.


    function updateTime() {
      const dateElement = $('#date');
      const timeElement = $('#time');
      const currentDate = dayjs().format('dddd, MMMM D, YYYY');
      const currentTime = dayjs().format('hh:mm A');
      dateElement.text(currentDate);
      timeElement.text(currentTime);
    }
    
    setInterval(updateTime, 1000); // Set interval to countdown to 1000 set when Interval runs
  });
