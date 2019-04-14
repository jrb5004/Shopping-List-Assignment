$(function() {
   
    $('div').on('click', '.shopping-item-toggle', function(event) {
        event.stopPropagation();
        $(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
        });

    $('div').on('click', '.shopping-item-delete', function(event) {
        $(this).closest("li").detach();
        });

    $('#js-shopping-list-form').on('submit', function(event) {
        event.preventDefault();
        let newItemName = document.getElementById('shopping-list-entry').value;
        let newItem = `<li><span class="shopping-item">${newItemName}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`;
        $("ul").append(newItem);
        });

});