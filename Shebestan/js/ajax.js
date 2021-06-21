$(function() {
      $('#form_footer').submit(function(e) {
        var $form = $(this);
        $.ajax({
          type: $form.attr('method'),
          url: $form.attr('action'),
          data: $form.serialize()
        }).done(function() {
          alert("Спасибо! Скоро мы свяжемся с вами!");
          $('#phone_field_footer').val('');
        }).fail(function() {
          alert("Ошибка. Попробуйте позже");
          $('#phone_field_footer').val('');
        });
        //отмена действия по умолчанию для кнопки submit
        e.preventDefault(); 
      });
    });

$(function() {
      $('#form_order').submit(function(e) {
        var $form = $(this);
        $.ajax({
          type: $form.attr('method'),
          url: $form.attr('action'),
          data: $form.serialize()
        }).done(function() {
            $.magnificPopup.open({
              items: {
              src: '<div class="white-popup">Ваша заявка отправлена!</div>', // can be a HTML string, jQuery object, or CSS selector
              type: 'inline'
              
            }
          });
        }).fail(function() {
            $.magnificPopup.open({
              items: {
              src: '<div class="white-popup">Ошибка. Повторите позже.</div>', // can be a HTML string, jQuery object, or CSS selector
              type: 'inline'
            }
          });
        });
        //отмена действия по умолчанию для кнопки submit
        e.preventDefault(); 
      });
    });