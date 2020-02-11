

const showStories = (stories) => {

    const $storyContainer = $('#story-container')
    $storyContainer.empty();

    stories.forEach((story, i) => {

        $story = $('<div>').addClass('story');
        const $headline = $('<div>').addClass('headline').text(story.title);
        const $picture = $('<img>').addClass('picture').attr('src', story.urlToImage);
        const $summary = $('<div>').addClass('summary').text(story.content);
        const $source = $('<div>').addClass('source').text('Source: ' + story.source.name);

        $story.append($picture).append($headline).append($summary).append($source)
        $story.on('click', () => {
            window.open(story.url);
        })

        $storyContainer.append($story)

    })
}

/*
 *******************************************************************************
 *
 * getKeywordsData queries the news api database given a keyword. Resulting
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
        () => {
            console.log('unable to retrive data')
        }
    )
}

/*
 *******************************************************************************
 *
 * getHeadlinesData queries the news api database given a country name and
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
        () => {
            console.log('unable to retrive data')
        }
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

    // Header menu

    $('.header-menu').click(() => {
        getHeadlinesData($(event.currentTarget).attr('id'), '')
    })

    // Side menu

    $('.side-menu-item').click(() => {
        getHeadlinesData('us', $(event.currentTarget).attr('id'))
    })

    // Keywords box

    $('#submit-button').click(() => {
        event.preventDefault();
        getKeywordsData($('#keyword-box[type="text"]').val())
    })
})
