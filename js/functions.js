function Servicios() {
    servicios.forEach(function (element) {
        var item = $('<div class="col item center ' + element.position + '" style="background:' + element.bgColor + '"></div>');
        var content = $('<div class="item__img" style="border: 4px solid ' + element.bgColor + ';"><img src=' + element.srcImage + ' alt="' + element.title + '"></div><h4 class="item__title">' + element.title + '</h4><p class="item__text">' + element.text + '</p>');
        item.append(content);
        $('#servicios-carousel').append(item);
    });
}

//Events
function onFocus() {
    $(this).next().addClass("active");
}
function onBlur() {
    $(this).val().length == 0 ? $(this).next().removeClass("active"): $(this).next().addClass("active");
}