var url = 'https://659a57a7652b843dea537773.mockapi.io/api/v1/saveData';

$(document).ready(function(){
 fetch(url)
 .then(res => res.json())
 .then(data => data)
})
 

$(document).on('click', '#next-button', function () {
    var dataArr = [];

    $('.decision-row').each(function () {
        var title = $(this).find('.title').text();
        var description = $(this).find('.desc').text();
        dataArr.push({
            title: title,
            description: description
        });
        console.log(dataArr,"dataArr")
    });

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataArr)
        })
    .then(response => response.json())
    .then(data => {
        console.log('Data sent successfully:', data);
        alert('data saved successfully')
    })
    .catch(error => {
        console.error('Request failed:', error);
    });
});

