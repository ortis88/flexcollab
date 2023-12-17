document.addEventListener('DOMContentLoaded', function() {
    var box1Checkbox = document.getElementById('box1');
    var box2Checkbox = document.getElementById('box2');
    var box3Checkbox = document.getElementById('box3');
    var items = document.querySelectorAll('.news-list .nl-item');

    function updateFilter() {
        var showAll = !(box1Checkbox.checked || box2Checkbox.checked || box3Checkbox.checked);

        items.forEach(function(item) {
            var itemId = item.id;

            if (showAll || 
                (box1Checkbox.checked && itemId === 'news04') ||
                (box1Checkbox.checked && itemId === 'news03') ||
                (box2Checkbox.checked && itemId === 'news01') ||
                (box3Checkbox.checked && itemId === 'news02')
                ) {
                item.classList.remove('nl-hidden');
            } else {
                item.classList.add('nl-hidden');
            }
        });
    }

    box1Checkbox.addEventListener('change', updateFilter);
    box2Checkbox.addEventListener('change', updateFilter);
    box3Checkbox.addEventListener('change', updateFilter);

});