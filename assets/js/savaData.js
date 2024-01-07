var url = 'https://659a57a7652b843dea537773.mockapi.io/api/v1/saveData';

$(document).ready(function(){
 fetch(url)
 .then(res => res.json())
 .then(data => data)
})
 

$(document).on('click', '#next-button', function () {
    var dataArr = [];

    $('.decision-row').each(function (index) {
        var title = $(this).find('.title').text();
        var description = $(this).find('.desc').text();
        var uniqueId = generateUniqueId(); // Call a function to generate a unique ID
        dataArr.push({
            id: uniqueId,
            title: title,
            description: description
        });
        console.log(dataArr, "dataArr");
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
            alert('data saved successfully');
        })
        .catch(error => {
            console.error('Request failed:', error);
        });
});

// Function to generate a unique ID
function generateUniqueId() {
    // Implement your logic to generate a unique ID
    // This example uses a simple timestamp-based approach
    return Date.now() + Math.floor(Math.random() * 1000);
}

