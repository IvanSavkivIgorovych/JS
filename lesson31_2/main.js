$(document).ready(function () {
    $(".btn").click(function (e) {
        e.preventDefault();
        let num = parseFloat($(this).html());
        $(".calc__screen").append(num);
        $(".calc__input").val($(".calc__input").val() + num);
    });

    $(".op").click(function (e) {
        e.preventDefault();
        let op = $(this).html();
        $(".calc__screen").append(op);
        $(".calc__input").val($(".calc__input").val() + op);
    });

    $(".calc__eq").click(function () {
        $(".calc__input").val(eval($(".calc__input").val()));
        $(".calc__screen").html(eval($(".calc__input").val()));
    });

    $(".calc__c").click(function () {
        $(".calc__input").val("");
        $(".calc__screen").html("");
    });
});