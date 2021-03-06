/**
 * Responsible for rendering the home screen.
 */
'use strict';
/* global control */

function display() {

    var body = $('#main');
    // Set the background to be a picture.
    body.css('background-image', 'url(img/Agriculture_in_Malawi_by_Joachim_Huber_CClicense.jpg)');

    var viewPlotsButton = $('<button>');
    viewPlotsButton.text('View Plots');
    viewPlotsButton.on(
        'click',
        function() {
            control.openTableToListView(
                'plot',
                null,
                null,
                'tables/plot/html/plot_list.html');
        }
    );
    $('#wrapper').append(viewPlotsButton);

    var viewTeasButton = $('<button>');
    viewTeasButton.text('View Visits');
    viewTeasButton.on(
        'click',
        function() {
            control.openTableToListView(
                'visit',
                null,
                null,
                'tables/visit/html/visit_list.html');
        }
    );
    $('#wrapper').append(viewTeasButton);

}
