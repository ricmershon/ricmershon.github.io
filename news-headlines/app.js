

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

    // for (let i = 0; i < stories.length; i++) {
    //     console.log(stories[i]);
    //
    //     const $headline = $('<div>').addClass('headline').text(stories[i].description);
    //     const $picture = $('<img>').addClass('picture').attr('src', stories[i].urlToImage);
    //     const $summary = $('<div>').addClass('summary').text(stories[i].content);
    //     const $link = $('<div>').addClass('link').text('Source: ' + stories[i].source.name);
    //
    //     $storyContainer.append($picture).append($headline).append($summary).append($link)
    //
    //
    // }

}

const getHeadlinesData = (country) => {

    $.ajax({
        url: "https://newsapi.org/v2/top-headlines?country=" + country +  "&apiKey=4e7c32eeb3194593a08c378c61e9aedc"

        // url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=" + borough + "&$limit=" + numRecords
    }).then(
        (data) => {

            // Call to showComplaints with data retrieved from database.

            console.log(data.articles);

            showStories(data.articles);
            // Reset the form.

            // $('form').trigger('reset')
        },
        () => {
            console.log('unable to retrive data')
        }
    )
}

$(() => {
    $('.header-menu').click(() => {
        event.preventDefault();
        getHeadlinesData($(event.currentTarget).attr('id'))
    })

    $('.side-nav-item').click(() => {
        event.preventDefault();
        getData($(event.currentTarget).attr('id'))
    })

})
