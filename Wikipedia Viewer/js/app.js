var search = $('.search');
var results = $('.results');

search.keyup(function () {

    $.getJSON("http://en.wikipedia.org/w/api.php?action=parse&format=json&callback=?", {
        page: search.val(),
        prop: "text"
    }, function (data) {
        console.log(data);
    });

    results = 'hell0'

});