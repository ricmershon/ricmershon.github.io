# News Headlines at rmersh65.github.io
Display news headlines from the US, Canada and Mexico.

## Designer and Engineer
Ric Mershon

## Background
This project uses the News API, which can be found at https://newsapi.org/. It uses both of the News API main endpoints:

* Top headlines - returns breaking news for a country and category. Ajax call from app.js:
```
$.ajax({
    url: "https://newsapi.org/v2/top-headlines?country="
     + country +  "&category=" + category + "&apiKey="
}).then(
    (data) => {

        // Call to showStories with data retrieved from database.

        showStories(data.articles);
    },
    () => console.log('unable to retrieve data')
)
```
* Everything - returns breaking news from around the world based on keywords and keyword phrases. Ajax call from app.js:
```
$.ajax({
    url: "https://newsapi.org/v2/everything?language=en&q="
     + keyword + "&apiKey="
}).then(
    (data) => {

        // Call to showStories with data retrieved from database
        // and reset the form.

        showStories(data.articles);
        $('.keyword-form').trigger('reset')
    },
    () => console.log('unable to retrieve data')
)
```
See https://newsapi.org/docs/endpoints for more information.

## Accessing the Application

Got to https://rmersh65.github.io/news-headlines/.

## Wireframes
Wireframe were created with Adobe XD. They can be found at [wireframes](https://xd.adobe.com/view/cc534d99-fba5-4fc9-525b-4cb79c5e129a-ba62/).

## Layout Details and Approach
I'm finally getting the hang of CSS--a little. I picked up a dotted Moleskine notebook (thank you Karolin Rafalski for the recommendation!) and started working the elements from the *inside out*. I found this to be EXTREMELY helpful, and would recommend this approach to anyone struggling with CSS and Flexbox. I ended up with pages and pages


The layout consists of static and dynamic elements. See the previous section on wireframes for a visual reference.

### Static elements
The static layout contains:

* Header - app title and menu items for US, Canada and Mexico.
* Main section - holds a sub menu on the side with category choices for US news, along with a form for worldwide news keyword entry.
* Story container - holds all the individual stories.
* Footer - contains the required News API attribution.

### Dynamic Elements - News stories
News stories are loaded into the story container after query of the News API database. Each news story contain 4 elements: a picture, a headline, summary description and a news source. The entire `<div>` for each story is an active link that will open the source url of the link in a new window.

Each news story `<div>` is distinguished from the next with padding, margins and drop-shadows, giving them a card-like feel. Hovering over the story changes the shadowing on the card to make it look raised, indicating it is active and can be clicked on to open the story.

### Responsive Design
The application has a responsive design where display elements are stacked and fonts are shrunk for smaller displays, like smart phones.

## Technologies used:

* [jQuery](https://jquery.com/) - JavaScript library for DOM traversal and manipulation.
* [Ajax](https://api.jquery.com/jquery.ajax/) - Web technology used to send and retrieve data from a server asynchronously without interfering with the display and behavior of the page.
* [Adobe XD](https://www.adobe.com/products/xd.html?sdid=12B9F15S&mv=Search&ef_id=CjwKCAiAvonyBRB7EiwAadauqWmOixI61Qf9ss2N6uknIujAN22N8Qc4_AZqnOFY4PI0PFRsFicQCxoC30oQAvD_BwE:G:s&s_kwcid=AL!3085!3!315233774109!e!!g!!adobe%20xd) - Used for wireframing. It comes for free in an Adobe package for which I have a subscription. I found it to be very powerful, yet big, bulky and cumbersome. Unless I'm working on a huge project I will look for other tools.
* [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - Allows responsive elements within a container to be automatically arranged depending upon screen size (or device).

## Code
The code has functions to perform these operations:
* Create event listeners.
* Get data.
* Display data.

### Event Listeners
Three event listeners are enabled inside the on load function. One each for sections by 1. country, 2. US category and 3. Worldwide keyword search.

### Get Data
Two functions are invoked and use Ajax to pull data from the News API database: `getHeadlines()` pulls data for the country and US category queries. `getKeywordsData()` pulls data for keyword queries. Both call passing an array of stories as an argument `showStories()` to display stories.

### Display Data
The `showStories()` function takes an array of stories as a parameter, builds an individual story of class `'story'` for each news story and attaches it to the `#story-container <div>.` The `.click()` method is assigned for each story with the URL of the story, contained within each record for a story in the stories array.

## Known Issues
Slight movement of the header text on the top right when data is displayed.

## Areas for Improvement

### User Interface

#### Model Box at Load
First and foremost it's not clear to the users what should be done when the page is loaded. A modal box would help but it became a bit complex and I couldn't get it to work. See the second page of the wireframe for my thouhts on the modal box look, feel and functionality.

#### Other User Interface Improvements
* Making the header and sidebar sticky. I tried but could not get this to work.
* For context, I would like to see the country and category sections have their hover changes remain while stories are displayed.
* Get rid of the ugly blue highlighting around the form elements.

### JavaScript
More work could be done to put code into objects.

## Acknowledgements
Thank you to King Arthur for advice, guidance, support and chocolate chip cookie recipes!!!

Karolin for the dotted notebook recommendation.
