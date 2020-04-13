
$(() => {
    $('#send-message-button').click(() => {
      for (var i = 0; i < 100; i++) {
      console.log('submit clicked');

      }
    })
    //
    // $('.header-menu-item').click(() => {
    //     getHeadlinesData($(event.currentTarget).attr('id'), '')
    // })
    // $('.sub-menu-item').click(() => {
    //     getHeadlinesData('us', $(event.currentTarget).attr('id'))
    // })
    // $('#submenu-button').click(() => {
    //     event.preventDefault();
    //     getKeywordsData($('#submenu-keyword-box[type="text"]').val())
    // })
    // $('#welcome-button').click(() => {
    //     event.preventDefault();
    //     getKeywordsData($('#welcome-keyword-box[type="text"]').val())
    // })
})
