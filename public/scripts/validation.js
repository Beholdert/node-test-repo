$('form')[0].reset();
$('.alert').hide();

$('input').on('keypress', function (e) {
    var char = e.charCode;
    var pos = this.getBoundingClientRect();

    if (!((char >= 97 && char <= 122) || (char >= 48 && char <= 57) || char == 95)) {
        $('.alert').fadeIn();
        e.preventDefault();
    } else {
         $('.alert').fadeOut();
    }
});

$('input').on('blur', function() {
        $('.alert').fadeOut();
});

$('#signupBtn').on('click', function(e) {
    var loginLength = $('form input[type=text]').val().length;
    var passwordLength = $('form input[type=password]').val().length;
    if (loginLength <= 3 || loginLength >= 15 || passwordLength <= 3 || passwordLength >= 15 ) {
        $('.alert').html('login and password should be in bounds (3, 15)');
        $('.alert').fadeIn();
        e.preventDefault();
    } else {
     $('form').attr('action', '/signUp');
     $('form')[0].submit();
    }
}); 

$('#logBtn').on('click', function(e) {
    var loginLength = $('form input[type=text]').val().length;
    var passwordLength = $('form input[type=password]').val().length;
    if (loginLength <= 3 || loginLength >= 15 || passwordLength <= 3 || passwordLength >= 15 ) {
        $('.alert').html('login and password should be in bounds (3, 15)');
        $('.alert').fadeIn();
        e.preventDefault();
    } else {
        $('form').attr('action', '/logIn');
        $('form')[0].submit();
    }
}); 

$('form').on('submit', function(e) {
    e.preventDefault();
});
