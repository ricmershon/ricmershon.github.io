const hideResolution = () => {
    $(event.currentTarget).next().hide()
    $(event.currentTarget).on('click', showResolution)
}

const showResolution = () => {
    $(event.currentTarget).next().show()
    $(event.currentTarget).on('click', hideResolution)
}

const showComplaints = (data) => {
    const $list = $('#list');
    $list.empty()
    for (let i = 0; i < data.length; i++) {
        const $complaint = $('<div>').addClass('complaint')
        const $descriptor = $('<div>').addClass('aside descriptor').text(data[i].complaint_type);
        const $whatBlueDid = $('<div>').addClass('aside what-blue-did').text('WHAT DID THE POLICE DO?').on('click', showResolution)
        const $resolution = $('<div>').addClass('resolution').text(data[i].resolution_description).hide()
        $complaint.append($descriptor).append($whatBlueDid).append($resolution).appendTo($list)
    }
}

const getComplaints = (numRecords, borough) => {
    $.ajax({
        url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=" + borough + "&$limit=" + numRecords
    }).then(
        (data) => {
            showComplaints(data);
            $('form').trigger('reset')
        },
        () => {
            console.log('unable to retrive data')
        }
    )
}

$(() => {
    $('.borough-button').click(() => {
        event.preventDefault();
        getComplaints($('#input-box[type="text"]').val(), $(event.currentTarget).attr('id'))

    })
})
