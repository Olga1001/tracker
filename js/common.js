$(document).ready(function () {

    //if height popup bigger window height

    if ($(".popup")) {
        let popup = $(this).find(".popup-window").closest(".popup");
        let container = $(this).find(".popup-window");
        if (container.height() >= $(window).height()) {
            popup.addClass('top');
        }
    }

    //fixed body
    // if($(".popup").hasClass('active')){
    //     $.scrollLock(true);
    // } else {
    //     $.scrollLock(false);
    // }

    //popup sing-in
    $(".btn-sing-in").click(function () {
        $(".popup-logregistr").addClass('active');
        $(".popup-attention, .first-tracker").removeClass('active');

        $(".header-user").addClass('hide');
        $(".btn-back, .footer").addClass('active');
        $(".menu, .menu-col").removeClass("active");
        $.scrollLock(true);
    });
    $(".main .bloggers-my-edit").click(function (e) {
        e.preventDefault();
        $(".popup-logregistr").addClass('active');
        $(".popup-attention").addClass('active');
        $.scrollLock(true);
    });
    $(".popup-window div, .popup-window form").click(function (e) {
        e.stopPropagation();
    });

    //close all
    $(".close, .popup, .popup-close, .cancel, .btn-back").click(function () {
        $.scrollLock(false);
        $(".popup").removeClass('active');
        $(this).closest(".bg-popup").removeClass('active');
        $(".form-checkin").addClass('active');
        setTimeout(function () {
            $("div").removeClass('required');
            $(".popup-tab").first().addClass('active').siblings().removeClass('active');
            $(".form-checkin").addClass('active').siblings().removeClass('active');
            $(".popup-container").find(".popup-forms-list").first().addClass('active').siblings().removeClass('active');
            $(".form-repeat").removeClass('gray');
            $(".form-repeat").closest(".form-padding").css("padding-bottom", "30px");
            $(".form-repeat-block").slideUp();
            $('.form-repeat-number').text("0");
            $(".popup-calculate-copy").text("Скопировать текст");
        }, 300);
    });

    // switching login check in
    $(".popup-tab").click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        let index = $(this).index();
        $(this).closest(".popup-container").find(".popup-forms-list").eq(index).addClass('active').siblings().removeClass('active');
        $(".popup-attention").removeClass('active');
    });

    //popup check in -> next resend code
    $(".form-repeat").click(function (e) {
        e.preventDefault();
        $(this).addClass('gray');
        $(".form-repeat-block").slideDown(300);
        $(this).closest(".form-field").css("margin-bottom", "0");
        $(this).closest(".form-padding").css("padding-bottom", "25px");
        let reply = $(this).closest(".form-field").find(".form-repeat-number").text();
        if (reply >= 0) {
            reply++;
            $('.form-repeat-number').text(reply);
        }
        timer();
    });

    //timer in form
    function timer() {
        let count = 59,
            int;
        $('.form-repeat-count').text(count);
        int = setInterval(function () {
            if (count > 0) {
                count--;
                $('.form-repeat-count').text(count);
            } else {
                clearInterval(int);
                $(".form-repeat").removeClass('gray');
            }
        }, 1000);
    }

    $(".form-next-sms").click(function (e) {
        e.preventDefault();
        $(".form, .popup").removeClass('active');
        $('.popup-logregistr, .form-confirmation').addClass('active');
        $.scrollLock(true);
    });
    $(".form-next-rate").click(function (e) {
        $('.popup').removeClass('active');
        $('.popup-rate').addClass('active');
        $.scrollLock(true);
    });

    //btn back check-in
    $(".form-back").click(function (e) {
        e.preventDefault();
        $(".form").removeClass('active');
        $(".form-checkin").addClass('active');
    });

    // password recovery
    $(".form-forgot").click(function (e) {
        e.preventDefault();
        $(".popup").removeClass('active');
        $(".popup-forgot .form").removeClass('active');
        $(".popup-forgot").addClass('active');
        $(".form-step-one").addClass('active');
        $.scrollLock(true);
    });
    $(".form-next-two").click(function (e) {
        e.preventDefault();
        $(".form").removeClass('active');
        $(".form-step-two").addClass('active');
        $.scrollLock(true);
    });
    $(".form-next-tree").click(function (e) {
        e.preventDefault();
        $(".form").removeClass('active');
        $(".form-step-tree").addClass('active');
        $.scrollLock(true);
    });
    $(".form-back-two").click(function (e) {
        e.preventDefault();
        $(".form").removeClass('active');
        $(".form-step-two").addClass('active');
        $.scrollLock(true);
    });
    $(".form-back-one").click(function (e) {
        e.preventDefault();
        $(".form").removeClass('active');
        $(".form-step-one").addClass('active');
        $.scrollLock(true);
    });
    $(".form-back-login").click(function (e) {
        e.preventDefault();
        $(".popup").removeClass('active');
        $(".popup-logregistr").addClass('active');
        $(".form-checkin").addClass('active');
        $.scrollLock(true);
    });

    //range in search bloggers
    $(".range").slider({
        range: "min",
        value: 5,
        min: 0,
        max: 10,
        step: 1,
    });
    //active icons in list bloggers
    $(".bloggers-content-list, .bloggers-my-content").click(function () {
        $(this).toggleClass('active');
    });


    $(".next-calculate-example").click(function (e) {
        e.preventDefault();
        $(".popup-calculate-item").removeClass('active');
        $(".popup-calculate-two, .popup-calculate-example").addClass('active');
    });

    //calculate
    $(".btn-calculate").click(function (e) {
        $(".popup-calculate").addClass('active');
        $(".popup-calculate-item").removeClass('active');
        $(".popup-calculate-one").addClass('active');
        $(".popup-calculate-active").show();
        $(".popup-calculate .popup-top-title").text("Калькулятор подписчиков");
        $.scrollLock(true);
        if (window.matchMedia("(max-width: 768px)").matches) {
            $(".btn-back, .footer").addClass('active');
            $(".header-user").addClass('hide');
        }
    });
    if (window.matchMedia("(max-width: 768px)").matches) {

        $(".next-calculate-example").click(function (e) {
            e.preventDefault();
            $(".popup-calculate .popup-top-title").text("Пример результатов расчетов");
            $(".popup-calculate-two").removeClass('active');
            $(".popup-calculate-active").hide();
        });
        $(".popup-example-back").click(function (e) {
            e.preventDefault();
            $(".popup-calculate-active").show();
            $(".popup-calculate-item, .popup-calculate-two").removeClass('active');
            $(".popup-calculate-one").addClass('active');
            $(".popup-calculate .popup-top-title").text("Калькулятор подписчиков");
        });
        $(".form-next-calculate_two").click(function (e) {
            e.preventDefault();
            $(".popup-calculate-item").removeClass('active');
            $(".bg-yellow").hide();
            $(".popup-calculate-one").addClass('active');
            $(".popup-calculate-two").addClass('active');
        });
        $(".next-calculate-result, .popup-calculate-last").click(function (e) {
            e.preventDefault();
            $(".popup-calculate-item").removeClass('active');
            $(".popup-calculate-result").addClass('active');
            $(".popup-calculate .popup-top-title").text("Результаты расчетов");
            $(".popup-calculate-active").hide();
        });
    } else {
        $(".popup-example-back").click(function (e) {
            e.preventDefault();
            $(".popup-calculate-item").removeClass('active');
            $(".popup-calculate-two, .popup-calculate-clear").addClass('active');

        });
        $(".form-next-calculate_two").click(function (e) {
            e.preventDefault();
            $(".popup-calculate-one").removeClass('active');
            $(".popup-calculate-two, .popup-calculate-clear").addClass('active');
        });
        $(".next-calculate-result").click(function (e) {
            e.preventDefault();
            $(".popup-calculate-item").removeClass('active');
            $(".popup-calculate-two, .popup-calculate-result").addClass('active');
        });
    }


    $(".next-conversion").click(function (e) {
        e.preventDefault();
        $(".popup").removeClass('active');
        $(".popup-conversion").addClass('active');
        $.scrollLock(true);
    });
    $(".popup-calculate-copy").click(function (e) {
        e.preventDefault();
        $(this).text("Скопировано");
    });

    //blogger tabs
    $(".tabs-list").click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        let index = $(this).index();
        $(".second-block").eq(index).addClass('active').siblings().removeClass('active');
    });

    //show popup review delete
    $(".show-review").click(function (e) {
        e.preventDefault();
        $(".popup-review").addClass('active');
        $.scrollLock(true);
    });
    //show popup info and review bloggers
    $(".show-info-blogger").click(function (e) {
        e.preventDefault();
        $(".popup-info").addClass('active');
        $(".btn-back, .footer").addClass('active');
        $(".header-user").addClass('hide');
        $.scrollLock(true);
    });
    $(".show-info-review").click(function (e) {
        e.preventDefault();
        $(".popup-info-review").addClass('active');
        $(".popup-logregistr").addClass('active');
        $(".popup-attention").addClass('active');
        $(".btn-back, .footer").addClass('active');
        $(".header-user").addClass('hide');
        $.scrollLock(true);
    });

    //delete list brogger
    $(".show-delete").click(function (e) {
        e.preventDefault();
        $.scrollLock(true);
        $(".popup-delete").addClass('active');
        $(".footer, .btn-back").addClass('active');
        $(".header-user").addClass('hide');
        let blogger = $(this).closest(".bloggers-card").find(".blogger").text(),
            list = $(this).closest(".bloggers-card, .bloggers-content");
        $(".blogger-item").text(blogger);
        $(".delete-list").click(function () {
            list.remove();
            $(".popup").removeClass('active');
            $(".footer, .btn-back").removeClass('active');
            $(".header-user").removeClass('hide');
            $.scrollLock(false);
        });
    });

    $(".datepicker").datepicker({
        dateFormat: 'dd.mm.yy D',
        minDate: new Date($('#hiddendelivdate').val()),
        dayNamesShort: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"], // For formatting
    });

    $(".cabinet .second-block:nth-child(2) .bloggers-my-edit, .show-filling-edit").click(function (e) {
        e.preventDefault();
        $(".popup").removeClass('active');
        $(".popup-filling-edit").addClass('active');
        $(".header-user").addClass('hide');
        $(".footer, .btn-back").addClass('active');
        $.scrollLock(true);
    });

    //add blogger
    $(".add-blogger").click(function (e) {
        e.preventDefault();
        $(".popup").removeClass('active');
        $(".popup-filling").addClass('active');
        $.scrollLock(true);
        if (window.matchMedia("(max-width: 768px)").matches) {
            $(".header-user").addClass('hide');
            $(".footer, .btn-back").addClass('active');
        }
    });
    $(".main .add-blogger, .main .show-filling-edit").click(function (e) {
        e.preventDefault();
        $(".popup-logregistr").addClass('active');
        $(".popup-attention").addClass('active');
        $.scrollLock(true);
    });

    $(".cabinet .second-block:nth-child(3) .bloggers-my-edit, .show-edit-info").click(function (e) {
        e.preventDefault();
        $(".popup").removeClass('active');
        $(".popup-edit-info").addClass('active');
        $(".header-user").addClass('hide');
        $(".footer, .btn-back").addClass('active');
        $.scrollLock(true);
    });

    //tabs in Leave a comment on the blogger
    $(".popup-feedback-tab").click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        if ($(".popup-feedback-tab:nth-child(2)").hasClass('active')) {
            $(".popup-radio").addClass('active');
        } else {
            $(".popup-radio").removeClass('active');
        }
    });

    //drop-down list: Customer account topic in Leave a comment on the blogger
    $(".popup-drop-item").click(function () {
        $(".popup-drop-list").slideToggle(300);
        $(this).find(".popup-drop-arrow").toggleClass('active');
    });

    $(".popup-white-text").click(function () {
        $(".popup-white-drop").slideToggle(300);
    });
    $(".next-feedback-two").click(function () {
        $(".popup").removeClass('active');
        $(".popup-feedback-two").addClass('active');
        $.scrollLock(true);
    });
    $(".back-feedback").click(function () {
        $(".popup").removeClass('active');
        $(".popup-feedback").addClass('active');
    });

    $(".show-feedback").click(function (e) {
        e.preventDefault();
        $(".popup").removeClass('active');
        $(".popup-feedback").addClass('active');
        if (window.matchMedia("(max-width: 768px)").matches) {
            $(".btn-back, .footer").addClass('active');
            $(".header-user").addClass('hide');
        }
        $.scrollLock(true);
    });
    $(".main .show-feedback").click(function (e) {
        e.preventDefault();
        $(".popup-logregistr").addClass('active');
        $(".popup-attention").addClass('active');
        $.scrollLock(true);
    });

    $(".reference-hide").click(function (e) {
        e.preventDefault();
        $(this).closest(".reference").hide();
    });
    // mobile

    //filter
    $(".bloggers-filter-btn").click(function (e) {
        e.preventDefault();
        $(".header-user").addClass('hide-main');
        $(".footer, .btn-back").addClass('active-main');
        $(this).closest(".second-block ").find(".search").addClass('active');
        $.scrollLock(true);
    });
    $(".btn-back").click(function (e) {
        e.preventDefault();
        $(".header-user").removeClass('hide').removeClass('hide-main');
        $(".search, .footer, .btn-back, .popup, .first-tracker").removeClass('active').removeClass('active-main');
        $(".popup-calculate-copy").text("Скопировать текст");
        $.scrollLock(false);
    });
    $(".bloggers-drop-arrow").click(function (e) {
        e.preventDefault();
        $(this).find(".bloggers-drop-img").toggleClass('active');
        $(this).closest(".bloggers-col").find(".bloggers-drop").slideToggle(300);
    });
    $(".bloggers-total-top").click(function (e) {
        e.preventDefault();
        $(this).find(".bloggers-drop-img").toggleClass('active');
        $(this).closest(".bloggers-total-mob").find(".bloggers-total-drop").slideToggle(300);

        let text = $(this).find(".blue-text").text();
        $(this).find(".blue-text").text(text == "Развернуть" ? "Свернуть" : "Развернуть");
    });

    $(".popup-conversion-item").click(function () {
        $(".popup-conversion-drop").slideToggle(300);
    });
    $(".sent-review").click(function () {
        $(".popup-sent").addClass("active");
        $.scrollLock(true);
    });
    $(".first-link").click(function () {
        $(".first-tracker").addClass("active");
        $(".footer, .btn-back").addClass("active-main");
        $(".header-user").addClass("hide-main");
        $.scrollLock(true);
    });
    $(".header-burger").click(function () {
        $(".menu, .menu-col").addClass("active");
        $.scrollLock(true);
    });
    $(".menu-close").click(function () {
        $(".menu, .menu-col").removeClass("active");
        $.scrollLock(false);
    });

});
