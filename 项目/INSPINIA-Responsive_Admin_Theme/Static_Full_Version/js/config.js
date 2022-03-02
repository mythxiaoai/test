requirejs.config({
    baseUrl: 'js/',
    paths: {
        "jquery":"jquery"
    }
});
requirejs(['jquery'],function ($) {
    $(function () {
        alert('123123');
    });
});