document.addEventListener('DOMContentLoaded', function() {
    var offcanvasElementList = [].slice.call(document.querySelectorAll('.offcanvas'))
    var offcanvasList = offcanvasElementList.map(function(offcanvasEl) {
        return new bootstrap.Offcanvas(offcanvasEl)
    })

    var pageListItems = document.querySelectorAll('.pages-list-item a');
    pageListItems.forEach(function(item) {
        item.addEventListener('click', function() {
            var offcanvas = bootstrap.Offcanvas.getInstance(document.getElementById('staticBackdrop'));
            if (offcanvas) {
                offcanvas.hide();
            }
        });
    });
});
