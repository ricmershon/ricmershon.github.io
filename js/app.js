const appInfo = [
  {
    app: "Kibbutz-19",
    readMe: "https://github.com/ricmershon/kibbutz-16-api/blob/master/README.md",
    techSpecs: [
      {
        name: "ReactJS",
        description: "Frontend framework used for the Client interface."
      },
      {
        name: "React Router",
        description: "Used to declare a standard interface structure for ReactJS to make navigation very intuitive for users."
      },
      {
        name: "React Bootstrap",
        description: "The CSS framework used to create a mobile-first responsive Client interface."
      },
      {
        name: "GraphQL with Apollo Fetch",
        description: "Runtime library used on the Client for fulfilling queries from the API, which itself is delivered with GraphQL on the back end."
      },
      {
        name: "Express",
        description: "Backend framework for Node.js used for the API."
      },
      {
        name: "MongoDB",
        description: "The database deployed for the project for its document-based, intuitive design."
      },
      {
        name: "Mongoose",
        description: "Used within the API as the object model for the MongoDB database on Node.js."
      },
      {
        name: "MongoDB Atlas",
        description: "A cloud-based service used to deploy and access the database on Amazon Web Services (AWS)."
      },
      {
        name: "Chart.js",
        description: "Used for visualization of data provided by The COVID Tracking Project."
      }
    ]
  },
  {
    app: "Caregivers",
    readMe: "https://github.com/ricmershon/express-mongo-starter/blob/master/README.md",
    techSpecs: [
      {
        name: "Express",
        description: "Backend framework for Node.js."
      },
      {
        name: "MongoDB",
        description: "The database deployed for the project for its document-based, intuitive design."
      },
      {
        name: "Mongoose",
        description: "Used as the object model for the MongoDB database on Node.js."
      },
      {
        name: "Bootstrap",
        description: "The CSS framework used to create a mobile-first responsive Client interface."
      },
      {
        name: "method-override",
        description: "In order to use HTTP verbs PUT and DELETE where they are not supported by the Client browser."
      },
      {
        name: "express-session",
        description: "Middleware used for creating sessions."
      },
      {
        name: "dotenv",
        description: "Use to load environment variables form a .env file into process.env."
      },
    ]
  },
  {
    app: "News Headlines",
    readMe: "https://github.com/ricmershon/ricmershon.github.io/blob/master/news-headlines/README.md",
    techSpecs: [
      {
        name: "jQuery",
        description: "JavaScript library used for DOM traversal and manipulation."
      },
      {
        name: "Ajax",
        description: "Used to send and retrive data from the new API server asynchronously without interfering with the display and behavior of the page."
      },
      {
        name: "Adobe XD",
        description: "Used to wireframe the project."
      },
      {
        name: "Flexobx",
        description: "CSS library in order to create a responsive design."
      }
    ]
  },
  {
    app: "Perennial Portal",
    readMe: "https://github.com/ricmershon/perennial-api/blob/master/README.md",
    techSpecs: [
      {
        name: "In progress",
        description: "TBD."
      }
    ]
  }
]

const buildModal = (index) => {

  // Create high level elements contained within modal content div.

  const $content = $('.modal-content').empty()          // enclosing div
  const $header = $('<div>').addClass('modal-header')   // header
  const $body = $('<div>').addClass('modal-body')       // body
  const $footer = $('<div>').addClass('modal-footer')   // footer

  $content.append($header).append($body).append($footer)

  // Heade contains a title and 'close' button.

  const $title = $('<h5>').addClass('modal-title').text(`${appInfo[index].app} Tech Specs`);
  const $closeButton = $('<button>')
    .addClass('close')
    .attr('type', "button")
    .attr('data-dismiss', "modal")
    .attr('aria-label', "Close");
  $closeButton.append($('<span>').attr('aria-hidden', "true").text('x'));
  $header.append($title).append($closeButton)

  // Body contains a list of tech specs.

  const $specList = $('<ul>').addClass('font-weight-light')   // Spec list
  appInfo[index].techSpecs.forEach((techSpec, i) => {
    const $item = $('<li>').text(`${techSpec.name} - ${techSpec.description}`)
    $specList.append($item)
  })

  const $readMe = $('<a>')
    .addClass('font-weight-light')
    .attr('href', appInfo[index].readMe)
    .attr('target', "_blank")
    .text('Click here ')

  $body
    .append($('<h6>').text('Technologies Used'))
    .append($specList)
    .append($readMe)
    .append($('<span>')
    .addClass('font-weight-light').text(`for the project's README.md.`))

  // Footer contains the 'close' button.

  $footerButton = $('<button>')
    .addClass('btn btn-secondary')
    .attr('data-dismiss', "modal")
    .text("Close")
  $footer.append($footerButton)
}

$(() => {
  $('#appModal').on('show.bs.modal',
    function (event) {
      let appInfoIndex = parseInt($(event.relatedTarget).data('app'))
      buildModal(appInfoIndex)
    }
  )
})
