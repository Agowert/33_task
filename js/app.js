$(window).on('load', function(){
    initMobileMenu();
    initPopup();
    initScrollUpButton();
});

$(window).on('scroll', function() {
    toggleScrollUpButton();
});

function toggleScrollUpButton() {
    var TOP_OFFSET = 400;
    if ($('html').scrollTop() > $(window).height() - TOP_OFFSET) {
        $('#scrollUpArrow').addClass('visible');
    }
    else {
        $('#scrollUpArrow').removeClass('visible');
    }
}

function initScrollUpButton() {
    $('#scrollUpArrow').on('click', function() {
        $('html, body').animate({ scrollTop: 0 }, 600);
    });
}

function initMobileMenu() {
    $('#menuButton').on('click', function() {
        $('#menuButton').toggleClass('active');
        $('#menuContainer').toggleClass('active');
    });
}

function initPopup() {
    var $popupWindow = $('#popupWindow');
    var $overlay = $('#overlay');

    $('#subscribePopupButton').on('click', function() {
        $popupWindow.addClass('visible');
        $overlay.addClass('visible');
    });


    $('#closeButton, #overlay').on('click', function() {
        closePopup();
    });


    $popupWindow.on('click', function(event) {
        if (event.target === this) {
            closePopup();
        }
    });

    function closePopup() {
        $popupWindow.removeClass('visible');
        $overlay.removeClass('visible');
    }

    var $emailInput = $('#emailInput');
    var $emailError = $('#emailError');

    $('#subscribeForm').on('submit', function(event) {
        var email = $emailInput.val().trim();

        if (email === '') {
            event.preventDefault();
            $emailInput.addClass('error');
            $emailError.addClass('visible');
        }

    });


    $emailInput.on('click input', function() {
        $emailInput.removeClass('error');
        $emailError.removeClass('visible');
    });
}