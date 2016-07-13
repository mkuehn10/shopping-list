$(function() {

    var originalPlaceholder = $('#shopping-list-entry').attr('placeholder');

    $('#js-shopping-list-form').submit(function(event) {
        console.log('Form submitted')
        event.preventDefault();
        itemToAdd = $('#shopping-list-entry').val();

        // If no text in input box then alert user
        if (itemToAdd.length === 0) {
            $('#shopping-list-entry').addClass('redborder');
            $('#shopping-list-entry').attr('placeholder', 'Please enter an item.');
        // Text in input box, continue processing input
        } else {
            $('#shopping-list-entry').removeClass('redborder');
            $('#shopping-list-entry').attr('placeholder', originalPlaceholder);
            $('#shopping-list-entry').val('');
            htmlString = []
            htmlString[0] = '<li>\n<span class="shopping-item">' + itemToAdd + '</span>\n';
            htmlString[1] = '<div class="shopping-item-controls">\n';
            htmlString[2] = '<button class="shopping-item-toggle">\n';
            htmlString[3] = '<span class="button-label">check</span>\n</button>\n';
            htmlString[4] = '<button class="shopping-item-delete">\n';
            htmlString[5] = '<span class="button-label">delete</span>\n</button>\n';
            htmlString[6] = '</div>\n</li>\n'
            html = htmlString.join('');
            $('ul.shopping-list').append(html);

        }


    });
    $('#shopping-list-entry').keypress(function(event) {
        //console.log(event.keyCode);
        if (event.keyCode === 13) {
            $('#js-shopping-list-form').submit();
            return false;
        }
    })
});