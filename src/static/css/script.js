// function updateTextInput(val) {
//     document.getElementById('textInput').value = val;
// }

const headerFunctions = {
    asideFon: function () {
        $('aside').toggleClass('active');
    },
    headerOpen: function () {
        $('.sidebar_action').addClass('active');
        $('.sidebar_action_list').addClass('active');
        $('.sidebar_burger').addClass('active');
        $('body').addClass('overflow');
    },
    headerClouse: function () {
        $('.sidebar_action').removeClass('active');
        $('.sidebar_action_list').removeClass('active');
        $('.sidebar_burger').removeClass('active');
        $('body').removeClass('overflow');
    },
};


$(document).ready(function () {
    $('.sidebar_burger').click(function () {
        headerFunctions.asideFon();
        if ($('aside').hasClass('active')) {
            headerFunctions.headerOpen();
        } else {
            headerFunctions.headerClouse();
        }
    })

    // $('select').selectize({})


    // function disabledInput() {
    //     $('.form_label_disabled').find('input').attr('disabled', 'disabled');
    //     $('.form_label_disabled').find('input[type="radio"]').first().attr('checked', 'checked');
    //     $('.form_label_disabled').find('select').attr('disabled');
    // }

    // disabledInput();


    // onload = function () {
    //     var inputs = document.querySelectorAll('input[type=range]');
    //     for (var i = 0; i < inputs.length; i++) {
    //         input = inputs[i]
    //         input.oninput = function () {
    //             var value = (input.value - input.min) / (input.max - input.min);
    //             input.style.backgroundImage = [
    //                 '-webkit-gradient(',
    //                 'linear, ',
    //                 'left top, ',
    //                 'right top, ',
    //                 'color-stop(' + value + ', #00B6DE), ',
    //                 'color-stop(' + value + ',  #fff)',
    //                 ')'
    //             ].join('');
    //         };
    //     }
    // };

    // $('.card_block').change(function () {
    //     $('.card').removeClass('active')
    //     $(this).parent('.card').addClass('active')
    // })

    // $("input[type='tel']").mask("+ 4 1 999 999 999");

    // $("#inputNumber").mask("999.999.999.999.999.999.999.999.999.999");


    // $('.wrapper_result input, .wrapper_result select').change(function(){
    //     $('.loader_wrap').addClass('active');

    //     setTimeout(function(){
    //         $('.loader_wrap').removeClass('active');
    //     }, 500)
    // })

});
