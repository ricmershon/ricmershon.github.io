/*
 *******************************************************************************
 *******************************************************************************
 *
 * w0304 Homework: Dougie the Donut & Pizza Rat: The Sequel
 * Created: 06-Feb-2020
 * Created by: Ric Mershon
 *
 *******************************************************************************
 *******************************************************************************
 */


 /*
  *******************************************************************************
  *
  * hideResolution() is invoked when a user clicks on 'WHAT DID THE POLICE DO?'
  * AND the resolution is currently visible. It hides the resolution by calling
  * the hide() method on the item's next sibling. It creates a new event handler
  * for click which calls showResolution().
  *
  *******************************************************************************
  */


const hideResolution = () => {
    $(event.currentTarget).next().hide()
    $(event.currentTarget).on('click', showResolution)
}


/*
 *******************************************************************************
 *
 * showResolution() is invoked when a user clicks on 'WHAT DID THE POLICE DO?'
 * AND the resolution is currently hidden. It shows the resolution by calling
 * the show() method on the item's next sibling. It creates a new event handler
 * for click which calls hideResolution().
 *
 *******************************************************************************
 */

const showResolution = () => {
    $(event.currentTarget).next().show()
    $(event.currentTarget).on('click', hideResolution)
}

/*
 *******************************************************************************
 *
 * getComplaints() displays the complaints one at a time on the screen.
 *
 *******************************************************************************
 */

const showComplaints = (data) => {

    const $list = $('#list');

    // Empty the current list.

    $list.empty()

    //Build the new list.

    for (let i = 0; i < data.length; i++) {

        const $complaint = $('<div>').addClass('complaint')
        const $descriptor = $('<div>').addClass('aside descriptor').text(data[i].complaint_type);

        // Add an on click listener to call showResolution()

        const $whatBlueDid = $('<div>').addClass('aside what-blue-did').text('WHAT DID THE POLICE DO?').on('click', showResolution)
        const $resolution = $('<div>').addClass('resolution').text(data[i].resolution_description).hide()

        // Put it all together

        $complaint.append($descriptor).append($whatBlueDid).append($resolution).appendTo($list)

    }
}

/*
 *******************************************************************************
 *
 * getComplaints() queries the police records database given the number of
 * records and borough requested by the user, then passes the data to
 * showComplaints() to put them on the screen.
 *
 *******************************************************************************
 */

const getComplaints = (numRecords, borough) => {

    $.ajax({
        url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=" + borough + "&$limit=" + numRecords
    }).then(
        (data) => {

            // Call to showComplaints with data retrieved from database.

            showComplaints(data);

            // Reset the form.

            $('form').trigger('reset')
        },
        () => {
            console.log('unable to retrive data')
        }
    )
}

$(() => {

    $.ajax({
        url: "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=4e7c32eeb3194593a08c378c61e9aedc"
    }).then(
        (data) => {

            // Call to showComplaints with data retrieved from database.

            console.log(data);
            console.log(data.articles[0].title);
            console.log(data.articles[0].description);
            console.log(data.articles[0].url);
            console.log(data.articles[0].urlToImage);

            // Reset the form.

            // $('form').trigger('reset')
        },
        () => {
            console.log('unable to retrive data')
        }
    )


    // Listen for clicks on the class of borough button.

    // $('.borough-button').click(() => {
    //     event.preventDefault();
    //
    //     // Call getComplaints() with number of records requested
    //     // and the id of the button pressed.
    //
    //     getComplaints($('#input-box[type="text"]').val(), $(event.currentTarget).attr('id'))
//
//     })
 })
