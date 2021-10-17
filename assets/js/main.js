$(document).ready(() => {
    $('.calendar-datepicker').datepicker({
        format: "mm_dd_yy",
        autoclose: true
    });
    $('.calendar-btn_clear').click(function () {
        console.log(this);
        $(this).prev().val('');
    });
    $('.main__sort-list').click(function () {
        $('.main__sort-grip').removeClass('main__sort_active');
        $(this).addClass('main__sort_active');
        $('.main__content-wrap').removeClass('main__content-wrap_list');
    });
    $('.main__sort-grip').click(function () {
        $('.main__sort-list').removeClass('main__sort_active');
        $(this).addClass('main__sort_active');
        $('.main__content-wrap').addClass('main__content-wrap_list');
    });
});