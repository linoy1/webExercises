function checkEmail() {

    var mail = document.getElementById('email');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(mail.value)) {
        alert('THE Email inValid,Please enter valid Email!');
        return false;
    }
}

function checkboxesValidate() {
    var x = document.form.interests;
    for (var i = 0; i < x.length; ++i) {
        if (x[i].checked == true) {
            return true;
        } else {
            alert("Please choose one or more options!");
            return false;
        }
    }
}



/*  $('document').ready(function() {
      $('input[type="text"], input[type="email"], textarea').focus(function() {
          var background = $(this).attr('id');
          $('#' + background + '-form').addClass('formgroup-active');
          $('#' + background + '-form').removeClass('formgroup-error');
      });
      $('input[type="text"], input[type="email"], textarea').blur(function() {
          var background = $(this).attr('id');
          $('#' + background + '-form').removeClass('formgroup-active');
      });

      function errorfield(field) {
          $(field).addClass('formgroup-error');
          console.log(field);
      }

      $("#waterform").submit(function() {
          var stopsubmit = false;

          if ($('#name').val() == "") {
              errorfield('#name-form');
              stopsubmit = true;
          }
          if ($('#email').val() == "") {
              errorfield('#email-form');
              stopsubmit = true;
          }
          if (stopsubmit) return false;
      });

  });*/