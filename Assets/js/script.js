$(document).ready(function () {
  var textarea = $('.description');
  var saveBtnEl = $('.saveBtn');
  var currentHour = dayjs().format('H');
  var currentDay = $('#currentDay');

  currentDay.text(dayjs().format('dddd, MMMM D, YYYY'));

  textarea.each(function () {
    var timeBlockId = $(this).closest('.time-block').attr("id");
    var textareaValue = localStorage.getItem(timeBlockId);
    $(this).val(textareaValue);

    var hour = timeBlockId.split('-')[1];
  
    if (hour < currentHour) {
      $(this).closest('.time-block').removeClass('present future').addClass('past');
    } else if (hour === currentHour) {
      $(this).closest('.time-block').removeClass('past future').addClass('present');
    } else {
      $(this).closest('.time-block').removeClass('past present').addClass('future');
    }
  });

  saveBtnEl.on('click', function() {
    var timeBlock = $(this).closest('.time-block').attr("id");
    textareaValue = $(this).siblings('textarea').val();
    localStorage.setItem(timeBlock, textareaValue);
  });
});
