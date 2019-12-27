$(document).ready(function () {

    //height header
    let heightHeader = $(".header").height();

    //if height popup bigger window height
    if ($(".popup")) {
        let popup = $(this).find(".popup-window").closest(".popup");
        let container = $(this).find(".popup-window");
        if (container.height() >= $(window).height()) {
            popup.addClass('top');
        }
    }
    if (window.matchMedia("(max-width: 768px)").matches) {
        $(".btn-calculate, .show-info-review, .show-info-blogger, .add-blogger, .show-feedback, .show-edit-info, .show-filling-edit, .btn-sing-in").click(function (e) {
            e.preventDefault();
            $("body").css("background", "#ffffff");
            $("html, body").scrollTop($(".popup").offset().top);
        });
    } else {
        $("body").css("background", "#F2F7FA");
    }

    //popup sing-in
    $(".btn-sing-in").click(function () {
        $(".popup-logregistr").addClass('active');
        $(".popup-attention, .first-tracker").removeClass('active');
        $(".header-user").addClass('hide');
        $(".btn-back").addClass('active');
        $(".menu, .menu-col").removeClass("active");
        if (window.matchMedia("(max-width: 768px)").matches) {
            $(".main").hide();
            $('body').css({"overflow-y":"scroll", "position":"initial", "width":"100%", "left":"0"});
        } else {
            $.scrollLock(true);
            $('body').css({"overflow-y":"scroll", "position":"fixed", "width":"100%", "left":"0"});
        }
    });
    $(".main .bloggers-my-edit").click(function (e) {
        e.preventDefault();
        $(".popup-logregistr").addClass('active');
        $(".popup-attention").addClass('active');
        if (window.matchMedia("(max-width: 768px)").matches) {
            $(".main").hide();
        } else {
            $.scrollLock(true);
        }
    });
    $(".popup-window div, .popup-window form").click(function (e) {
        e.stopPropagation();
    });
    if (window.matchMedia("(min-width: 769px)").matches) {
        $(".popup").click(function () {
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
    }
    //close all
    $(".close, .popup-close, .cancel, .btn-back").click(function () {
        $('body').css({"position":"relative", "background":"#F2F7FA"});
        if (window.matchMedia("(min-width: 769px)").matches) {
            $.scrollLock(false);
        }
        if (window.matchMedia("(min-width: 769px)").matches) {
            $(".header").css("z-index","8");
        } else {
            $(".header").css("z-index","10");
        }
        $(".cabinet, .empty, .main").show();
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
        e.preventDefault();
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
    $( ".range" ).slider({
        range: "min",
        min: 1,
        max: 10,
        value: 10,
        step: 1,
        slide: function( event, ui ) {
            $( ".amount" ).val(ui.value);
        }
    });
    $( ".amount" ).val( $( ".range" ).slider( "value" ) );

    //active icons in list bloggers
    $(".bloggers-content-list, .bloggers-my-content").click(function () {
        $(this).toggleClass('active');
    });

    $(".next-calculate-example").click(function (e) {
        e.preventDefault();
        $(".popup-calculate-item").removeClass('active');
        $(".popup-calculate-two, .popup-calculate-example").addClass('active');
        $("html, body").scrollTop($(".popup").offset().top);
    });

    //calculate
    $(".btn-calculate").click(function (e) {
        $(this).find(".popup-top .popup-top-title").text('Калькулятор подписчиков');
        $(".popup-calculate").addClass('active');
        $(".popup-calculate-item").removeClass('active');
        $(".popup-calculate-one").addClass('active');
        $(".popup-calculate-active").show();
        if (window.matchMedia("(max-width: 768px)").matches) {
            $(".btn-back").addClass('active');
            $(".header-user").addClass('hide');
            $(".cabinet, .empty, .main").hide();
        } else {
            $.scrollLock(true);
        }
    });
    if (window.matchMedia("(max-width: 768px)").matches) {

        $(".next-calculate-example").click(function (e) {
            e.preventDefault();
            $(this).closest(".popup-calculate").find(".popup-top-title").text("Пример результатов расчетов");
            $(".popup-calculate-two").removeClass('active');
            $(".popup-calculate-active").hide();
        });
        $(".popup-example-back").click(function (e) {
            e.preventDefault();
            $(".popup-calculate-active").show();
            $(".popup-calculate-item, .popup-calculate-two").removeClass('active');
            $(".popup-calculate-one").addClass('active');
            $(".popup-top-mob .popup-top-title").text("Калькулятор подписчиков");
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
            $(this).closest(".popup-calculate").find(".popup-top-title").text("Результаты расчетов");
            $(".popup-calculate-item").removeClass('active');
            $(".popup-calculate-result").addClass('active');
            $(".popup-calculate-active").hide();
            $("html, body").scrollTop($(".popup").offset().top);
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
        $(this).closest(".popup-conversion").find(".popup-top-title").text('Расчет конверсии');
        $(".popup").removeClass('active');
        $(".popup-conversion").addClass('active');
        $("html, body").scrollTop($(".popup").offset().top);
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
        if ($(".tabs-list").eq(1).hasClass('active')){
            $(".cabinet .tabs-list-count").removeClass('active');
        } else {
            $(".cabinet .tabs-list-count").addClass('active');
        }

    });

    //show popup review delete
    $(".show-review").click(function (e) {
        e.preventDefault();
        $(".popup-review").addClass('active');
        $(".popup-logregistr, .popup-attention").addClass('active');
        $.scrollLock(true);
    });
    //show popup info and review bloggers
    $(".show-info-blogger").click(function (e) {
        e.preventDefault();
        $(".popup-info").addClass('active');
        $(".btn-back").addClass('active');
        $(".header-user").addClass('hide');
        $(".popup-logregistr, .popup-attention").addClass('active');
        if (window.matchMedia("(max-width: 768px)").matches) {
            $(".cabinet, .main").hide();
        } else {
            $.scrollLock(true);
        }
    });
    $(".show-info-review").click(function (e) {
        e.preventDefault();
        $(".popup-info-review").addClass('active');
        $(".popup-logregistr").addClass('active');
        $(".popup-attention").addClass('active');
        $(".btn-back").addClass('active');
        $(".header-user").addClass('hide');
        if (window.matchMedia("(max-width: 768px)").matches) {
            $(".cabinet, .main").hide();
        } else {
            $.scrollLock(true);
        }
    });

    //delete list brogger
    if (window.matchMedia("(max-width: 993px)").matches) {
        $(".show-delete").click(function (e) {
            e.preventDefault();
            $(this).closest(".bloggers-bottom").find(".bloggers-deleted").removeClass('active');
            $(this).closest(".bloggers-bottom").find(".bloggers-delete-list, .bloggers-delete-ask").addClass('active');
        });

    } else {
        $(".show-delete").click(function (e) {
            e.preventDefault();
            $.scrollLock(true);
            $(".popup-delete").addClass('active');
            $(".btn-back").addClass('active');
            $(".header-user").addClass('hide');
            let blogger = $(this).closest(".bloggers-card").find(".blogger").text(),
                list = $(this).closest(".bloggers-card, .bloggers-content");
            $(".blogger-item").text(blogger);
            $(".delete-list").click(function () {
                list.remove();
                $(".popup").removeClass('active');
                $(".btn-back").removeClass('active');
                $(".header-user").removeClass('hide');
                $.scrollLock(false);
            });
        });
    }
    $(".delete-yes").click(function (e) {
        e.preventDefault();
        $(this).closest(".bloggers-delete-list").addClass('bg-white');
        $(this).closest(".bloggers-info").find(".bloggers-deleted").addClass('active');
        $(this).closest(".bloggers-info").find(".bloggers-delete-ask").removeClass('active');
    });
    $(".delete-not").click(function (e) {
        e.preventDefault();
        $(this).closest(".bloggers-delete-list").removeClass('active');
    });

    $(".cabinet .second-block:nth-child(2) .bloggers-my-edit, .show-filling-edit").click(function (e) {
        e.preventDefault();
        $(".popup").removeClass('active');
        $(".popup-filling-edit").addClass('active');
        $(".header-user").addClass('hide');
        $(".btn-back").addClass('active');
        if (window.matchMedia("(max-width: 768px)").matches) {
            $(".cabinet").hide();
        } else {
            $.scrollLock(true);
        }
    });

    //add blogger
    $(".add-blogger").click(function (e) {
        e.preventDefault();
        $(".popup").removeClass('active');
        $(".popup-filling").addClass('active');
        if (window.matchMedia("(max-width: 768px)").matches) {
            $(".header-user").addClass('hide');
            $(".btn-back").addClass('active');
            $(".cabinet, .empty").hide();
        } else {
            $.scrollLock(true);
        }
    });
    $(".main .add-blogger, .main .show-filling-edit").click(function (e) {
        e.preventDefault();
        $(".popup-logregistr").addClass('active');
        $(".popup-attention").addClass('active');
        if (window.matchMedia("(max-width: 768px)").matches) {
            $(".main").hide();
        } else {
            $.scrollLock(true);
        }
    });
    $(".cabinet .second-block:nth-child(3) .bloggers-my-edit, .cabinet .show-edit-info").click(function (e) {
        e.preventDefault();
        $(".popup").removeClass('active');
        $(".popup-edit-info").addClass('active');
        $(".header-user").addClass('hide');
        $(".btn-back").addClass('active');
        if (window.matchMedia("(max-width: 768px)").matches) {
            $(".cabinet").hide();
        } else {
            $.scrollLock(true);
        }
    });

    //tabs in Leave a comment on the blogger
    $(".popup-feedback-tab").click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        if ($(".popup-feedback-tab:nth-child(2)").hasClass('active')) {
            $(".popup-radio").addClass('active');
            $(".change-one").addClass("active");
            $(".change-two").removeClass("active");
        } else {
            $(".popup-radio").removeClass('active');
            $(".change-two").addClass("active");
            $(".change-one").removeClass("active");
        }
    });

    //drop-down list: Customer account topic in Leave a comment on the blogger
    $(".popup-drop-item").click(function () {
        $(".popup-drop-input").toggleClass('active');
        $(".popup-drop-list").slideToggle(300);
        $(this).find(".popup-drop-arrow").toggleClass('active');
    });

    let checks= Array.prototype.slice.call(document.querySelectorAll('.popup-drop-list .checkbox')),
        input = document.querySelector(".popup-drop-input");
    checks.forEach(function (c) {
        c.onclick = function () {
            let a = [];
            checks.forEach(function (b) {
                b.checked && a.push(b.value)
            });
            input.value = a.join(', ');
        }
    });

    $(".popup-white-text").click(function () {
        $(".popup-white-drop").slideToggle(300);
    });
    $(".next-feedback-two").click(function (e) {
        e.preventDefault();
        $(".popup").removeClass('active');
        $(".popup-feedback-two").addClass('active');
        $("html, body").scrollTop($(".popup").offset().top);
        $.scrollLock(true);
    });
    $(".back-feedback").click(function () {
        $(".popup").removeClass('active');
        $(".popup-feedback").addClass('active');
        $(".popup-top-mob .popup-top-title").text("Оставить отзыв на блогера");
        $(".popup-feedback-span").text('Шаг 1 из 2');
        $(".popup-top-mob, .popup-feedback-span").addClass('active');
        $("html, body").scrollTop($(".popup").offset().top);
    });

    $(".show-feedback").click(function (e) {
        e.preventDefault();
        $(".popup").removeClass('active');
        $(".popup-feedback").addClass('active');
        $(".popup-top-mob .popup-top-title").text("Оставить отзыв на блогера");
        $(".popup-feedback-span").text('Шаг 1 из 2');
        $(".popup-top-mob, .popup-feedback-span").addClass('active');
        if (window.matchMedia("(max-width: 768px)").matches) {
            $(".btn-back").addClass('active');
            $(".header-user").addClass('hide');
            $(".cabinet, .empty").hide();
            $(".header").css("z-index", "10");
        } else {
            $.scrollLock(true);
            $(".header").css("z-index", "8");
        }
    });
    $(".main .show-feedback").click(function (e) {
        e.preventDefault();
        $(".popup-logregistr").addClass('active');
        $(".popup-attention").addClass('active');
        if (window.matchMedia("(max-width: 768px)").matches) {
            $(".main").hide();
        } else {
            $.scrollLock(true);
        }
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
        $(".btn-back").addClass('active-main');
        $(".popup-search-top").addClass('active');
        $(".cabinet").hide();
        $(".bg-popup").removeClass('active');
        if (window.matchMedia("(max-width: 993px)").matches) {
            $(".header").css("z-index","10");
            $("body").css("background", "#ffffff");
            $("html, body").scrollTop($(".popup").offset().top);
        }
    });
    $(".filter-one").click(function (e) {
        e.preventDefault();
        $(".popup-search-one").addClass('active');
    });
    $(".filter-two").click(function (e) {
        e.preventDefault();
        $(".popup-search-two").addClass('active');
    });
    $(".filter-tree").click(function (e) {
        e.preventDefault();
        $(".popup-search-tree").addClass('active');
    });

    $(".main .bloggers-filter-btn, .main .bloggers-bottom-btn").click(function (e) {
        e.preventDefault();
        $(".popup-logregistr").addClass('active');
        $(".popup-attention").addClass('active');
        $(".header-user").addClass('hide');
        $(".btn-back").addClass('active');
        if (window.matchMedia("(max-width: 768px)").matches) {
            $(".main").hide();
        } else {
            $.scrollLock(true);
        }
    });
    $(".btn-back").click(function (e) {
        e.preventDefault();
        $(".popup-top-mob, .popup-feedback-span, .popup-search-top").removeClass('active');
        $(".header-user").removeClass('hide').removeClass('hide-main');
        $(".search, .btn-back, .first-tracker").removeClass('active').removeClass('active-main');
        $(".popup").removeClass('active');
        $(".popup-search-one").removeClass('active');
        $(".popup-calculate-copy").text("Скопировать текст");
        if (window.matchMedia("(min-width: 769px)").matches) {
            $(".header").css("z-index","8");
        } else {
            $(".header").css("z-index","10");
        }
    });
    $(".bloggers-comments").click(function (e) {
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
        $(".popup-top-mob, .popup-feedback-span, .popup-feedback-two, .popup-drop-arrow").removeClass('active');
        $(".popup-sent").addClass("active");
        $(".popup-drop-list").slideUp(300);
    });
    $(".first-link").click(function () {
        $(".first-tracker").addClass("active");
        $(".btn-back").addClass("active-main");
        $(".header-user").addClass("hide-main");
        if (window.matchMedia("(min-width: 769px)").matches) {
            $.scrollLock(true);
        } else {
            $('body').css({"overflow-y":"scroll", "position":"fixed", "width":"100%", "left":"0"});
        }

    });
    $(".header-burger").click(function () {
        $(".menu, .menu-col").addClass("active");
        if (window.matchMedia("(min-width: 769px)").matches) {
            $.scrollLock(true);
        } else {
            $('body').css({"overflow-y":"scroll", "position":"fixed", "width":"100%", "left":"0"});
        }
    });
    $(".menu-close").click(function () {
        $(".menu, .menu-col").removeClass("active");
        if (window.matchMedia("(min-width: 769px)").matches) {
            $.scrollLock(false);
        } else {
            $('body').css({ "position":"relative"});
        }
    });

    $(".add-list").click(function (e) {
        e.preventDefault();
        $(this).closest(".bloggers-card").find(".bloggers-add").addClass('active');
    });
    $(".hide-mouth").click(function (e) {
        e.preventDefault();
        $(this).closest(".bloggers-card").find(".bloggers-lurk").addClass('active');
    });
    $(".delete-forever").click(function (e) {
        e.preventDefault();
        $(this).closest(".bloggers-card").find(".bloggers-delete").addClass('active');
    });
    $(".cancel-action").click(function (e) {
        e.preventDefault();
        $(this).closest(".bloggers-bottom-item").removeClass('active');
    });

    //date
    $(".datepicker").datepicker({
        dateFormat: 'dd.mm.yy D',
        minDate: new Date($('#hiddendelivdate').val()),
        dayNamesShort: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"], // For formatting

    });


    $("div, form").scroll(function() {
        $( ".datepicker" ).datepicker('hide');
        $("input, textarea").blur();
    });

    $(".bloggers-add .blue-text").click(function (e) {
        e.preventDefault();
        $(".second-block").removeClass('active');
        $(".tabs-list").removeClass('active');
        $(".second-block").eq(1).addClass('active');
        $(".tabs-list").eq(1).addClass('active');
        $("html, body").scrollTop($(".second-block").eq(1).find(".bloggers").offset().top - (30 + heightHeader) + "px");
    });

    $(".next-rate-extend").click(function (e) {
        $('.popup').removeClass('active');
        $(".header-user").addClass('hide');
        $(".btn-back").addClass('active');
        $('.popup-rate-extend').addClass('active');
        $.scrollLock(true);
    });
    let selected,
        selected2;
    $('.popup-calculate-select select').mousedown( function(){
        if( $( this ).val() != selected ) {
            selected = $( this ).val();
            selected2=null;
            $(".popup-calculate-select").addClass('active');
        } else {
            selected=null;
            $(".popup-calculate-select").removeClass('active');
        }
    }).blur(function(){
        if (selected2==selected) {
            selected=null;
            selected2=null;
            $(".popup-calculate-select").removeClass('active');
        }
    }).mouseup(function(){
        console.log( 'preoutu' );
        if( $(this).val() != selected || $(this).val() == selected2 ) {
            selected=null;
            selected2=null;
            $(".popup-calculate-select").removeClass('active');
        }
        else {
            selected2=$( this ).val();
            $(".popup-calculate-select").addClass('active');
        }
    });

    let content = {
        1: [10000, 30, 5, 15, 5],
        2: [1000, 3, 5, 1, 5],
        3: [10000, 30, 5, 15, 5]
    }
    let btnTestContent = document.querySelectorAll('.btn-checkbox');
    btnTestContent.forEach(btn=>{
        btn.addEventListener('click',()=>{
            event.preventDefault();
            btnTestContent.forEach(r=>{
                r.classList.remove('active')
            })
            btn.classList.add('active');
            let inp = document.querySelectorAll('.form-input');
            let a = [];
            inp.forEach(i=>{
                if (i.classList.contains('desk')) {
                    a.push(i);
                    $(".next-calculate-result").removeClass('btn-gray').attr('disabled', false);
                }
            })
            a.forEach((inp, ind)=>{
                inp.value = content[btn.value][ind]
            })
        })
    })
    $('.desk').on('keyup ',function(){
        let val =  $('.desk').value;
        if(val != ''){
            $(".next-calculate-result").removeClass('btn-gray').attr('disabled', false);
        }else {
            $(".next-calculate-result").addClass('btn-gray').attr('disabled', true);
        }
    });
});
