$('*').click(function() {
    let tagName = event.target.nodeName;
    let tags = $(tagName);
    let tagCount = tags.length;
    let stilius  = tags.css('text-transform','uppercase');
    $('#kasas').text(tagName + ' Paspaustu tagu skaicius: ' + tagCount + stilius);
});