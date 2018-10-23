$(document).ready(function () {
    (function () {
        var $cards = $('.card__image'),
            $link = $('.link_blue');

        function changeColor(card) {
            card.on('mouseleave', function() {
                card.toggleClass('card_selected');
                card.unbind('mouseleave')
            });
        }

        $cards.on('click', function() {
            changeColor($(this).parent('.card'));
        });

        $link.click(function() {
            changeColor($(this).closest('.card'));
        });
    }());
});