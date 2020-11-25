
//================================================================//
//*********** click-action.js ***********//
//*********** © Aida Drogan - #BlondieCode
//*********** Описывает клики по общим элементам админ-панели
//*********** Кнопка ОТМЕНА на pop-up окнах (class="p-cancel")
//*********** Элементы-чекеры с кастомным интерфейсом (checkbox, radio button)
//*********** Раздвижной элемент "баян"
//================================================================//

$(document).ready(function(){

    //================================================================//
    //*********** ОТМЕНА на pop-up окнах ***********//
    //================================================================//

    $('body').on('click', '.p-cancel', function(){
        $('.popup-holder.dynamic').fadeOut('fast', function(){
            $(this).remove();
        });
    });

    //================================================================//
    //*********** CHECKERS ***********//
    // --- атрибут data-relna с именем класса элемента,
    // --- который нужно переключить в неактивное состоянии (стилевой класс .na)
    // --- при выборе элемента-чекера

    // --- класс .single назначается родительскому элементу,
    // --- в котором может быть только один активный чекер (поведение радио-кнопок)
    //================================================================//

    $('body').on('click', '.checker', function(){
        $(this).toggleClass('active');
        var relative = $(this).attr('data-relna');
        if (relative){
            $('.' + relative).toggleClass('na');
        }
    });

    $('.check-holder').on('click', '.check', function(){
        if (!$(this).parent('.check-holder').hasClass('na')){
            if ($(this).parents('.check-holder').hasClass('single')){
                $(this).parents('.check-holder').find('.check').removeClass('active');
                $(this).addClass('active');
            } else {
                $(this).toggleClass('active');
            }
        }
    });

    //================================================================//
    //*********** БАЯН ***********//
    // --- класс элемента open-bayan
    // --- тело баяна следующий за .open-bayan элемент
    // --- класс up - стилевое оформление открытого баяна
    //================================================================//

    $('body').on('click', '.open-bayan', function(){

        if ($(this).hasClass('up')){
            $(this).next().slideUp('fast');
            $(this).removeClass('up');
        } else {
            $(this).addClass('up');
            $(this).next().slideDown('fast');
        }
    });
});