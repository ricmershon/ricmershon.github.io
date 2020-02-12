/*
 *******************************************************************************
 *******************************************************************************
 *
 * Project #1: My first application
 * Due: 13-Feb-2020
 * Created by: Ric Mershon
 *
 *******************************************************************************
 *******************************************************************************
 */

/*
 *******************************************************************************
 *
 * showStories() displays the stories on the screen.
 *
 *******************************************************************************
 */

const showStories = (stories) => {

    // Grab the story container from the DOM and empty the current list
    // of stories.

    const $storyContainer = $('#story-container');
    $storyContainer.empty();

    // Build the individual stories.

    stories.forEach((story, i) => {
        const $story = $('<div>').addClass('story');
        const $headline = $('<div>').addClass('headline').text(story.title);
        const $picture = $('<img>').addClass('picture').attr('src', story.urlToImage);
        const $summary = $('<div>').addClass('summary').text(story.content);
        const $source = $('<div>').addClass('source').text('Source: ' + story.source.name);

        // Put it all together.

        $story.append($picture).append($headline).append($summary).append($source).appendTo($storyContainer);

        // Set listener to open the url for the story in a new window
        // when it's clicked.

        $story.click(() => window.open(story.url) )
    })
}

/*
 *******************************************************************************
 *
 * getKeywordsData() queries the news api database given a keyword. Resulting
 * articles are passed to the showStories() function for display.
 *
 *******************************************************************************
 */

const getKeywordsData = (keyword) => {

    $.ajax({
        url: "https://newsapi.org/v2/everything?language=en&q=" + keyword + "&apiKey=4e7c32eeb3194593a08c378c61e9aedc"
    }).then(
        (data) => {

            // Call to showStories with data retrieved from database
            // and reset the form.

            showStories(data.articles);
            $('.keyword-form').trigger('reset')
        },
        () => console.log('unable to retrieve data')
    )
}

/*
 *******************************************************************************
 *
 * getHeadlinesData() queries the news api database given a country name and
 * category. Resulting articles are passed to the showStories() function
 * for display.
 *
 *******************************************************************************
 */

const getHeadlinesData = (country, category) => {

    $.ajax({
        url: "https://newsapi.org/v2/top-headlines?country=" + country +  "&category=" + category + "&apiKey=4e7c32eeb3194593a08c378c61e9aedc"
    }).then(
        (data) => {

            // Call to showStories with data retrieved from database.

            showStories(data.articles);
        },
        () => console.log('unable to retrieve data')
    )
}

/*
 *******************************************************************************
 *
 * On-load function sets up listeners for 3 input options: top menu, side menu
 * and keyword box.
 *
 *******************************************************************************
 */

$(() => {
    $('.header-menu-item').click(() => {
        getHeadlinesData($(event.currentTarget).attr('id'), '')
    })
    $('.sub-menu-item').click(() => {
        getHeadlinesData('us', $(event.currentTarget).attr('id'))
    })
    $('#submit-button').click(() => {
        event.preventDefault();
        getKeywordsData($('#keyword-box[type="text"]').val())
    })
})
