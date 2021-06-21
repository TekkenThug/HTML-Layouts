$(function () {
  $('#fullpage').fullpage({
    navigation: true,
    autoScrolling: true,
    scrollHorizontally: true,
    verticalCentered: true,
    anchors: ['header-section', 'advance-section', 'price-section', 'feedback-section'],
    scrollOverflow: true,
  });

  $('.feedback__form').on('submit', function (event) {
    event.preventDefault();

    let name = $('.feedback__form input[name="name"]').val(),
      phone = $('.feedback__form input[name="phone"]').val(),
      text = $('.feedback__form textarea[name="text"]').val();

    $.ajax({
      url: 'server-side/mailto.php',
      type: 'POST',
      dataType: 'json',
      data: {
        name: name,
        phone: phone,
        text: text
      },
      beforeSend: function() {
        $("#preloader").fadeIn('10');
      },
      success(data) {
        $('.modal-msg-form').fadeIn('300');
        $('.modal-shadow').fadeIn('300');
        $('.modal-msg-form .content').html(data.answer);

        $('.feedback__form input[name="name"]').val(""),
        $('.feedback__form input[name="phone"]').val(""),
        $('.feedback__form textarea[name="text"]').val("");
      },
      complete: function() {
        $("#preloader").fadeOut('10');
      }
    });
  });

  $('.modal-msg-form .close-btn, .modal-shadow').on('click', () => {
    $('.modal-msg-form').fadeOut('300');
    $('.modal-shadow').fadeOut('300');
  });
});
