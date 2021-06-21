$(function() {
      $('#mark_form').submit(function(e) {
        var $form = $(this);
        $.ajax({
          type: $form.attr('method'),
          url: $form.attr('action'),
          data: $form.serialize()
        }).done(function(response) {
          result = $.parseJSON(response);
          $.magnificPopup.open({
              items: {
                src: '<div class="white-popup">'+result.answer+'</div>',
                type: 'inline'
              },
              removalDelay: 500,
              mainClass: 'mfp-fade'
            });
        }).fail(function() {
          result = $.parseJSON(response);
          $.magnificPopup.open({
              items: {
                  src: '<div class="white-popup">'+result.answer+'</div>',
                  type: 'inline',
                  removalDelay: 500,
                  mainClass: 'mfp-fade'
              }
            });
        });
        //отмена действия по умолчанию для кнопки submit
        e.preventDefault(); 
      });
    });
// console.log($('#mark_form'));