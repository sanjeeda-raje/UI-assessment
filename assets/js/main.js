
$(document).ready(function () {

  $("#add-new-card-button").on("click", function () {
    // Create a new card jQuery object
    var newCard = $(
        `<div class="row decision-row-2 append-new-card" id="card-container">
            <div class="col-md-1">
                <div class="align-self-center">
                    <i class="bi bi-check-circle-fill"></i>
                </div>
            </div>
            <div class="col-md-11">
                <div class="decision-row d-lg-flex justify-content-between bg-box-2">
                    <div>
                        <div class="d-flex">
                            <div class="box"></div>
                            <div class="box ms-1"></div>
                        </div>
                        <div class="d-flex">
                            <div class="box mt-1"></div>
                            <div class="box ms-1 mt-1"></div>
                        </div>
                    </div>
                    <div>
                        <h6 class="title" contenteditable="true">Percentile Pay</h6>
                        <p class="desc" contenteditable="true">Decide the Percentile pay for the airline staff</p>
                    </div>
                    <div class="align-self-center">
                        <button type="button" class="btn me-2 decision-button" id="my-button1">Take Decision</button>
                        <i class="bi bi-trash3-fill trash"></i>
                    </div>
                </div>
            </div>
        </div>`
    );
    var currentIndex = $(".decision-row-2").length + 1;

    var maxIndex = 5; // Change this to the maximum index before reset

    var newIndex = (currentIndex % maxIndex) + 1; 
    // Update any unique IDs or contenteditable attributes
    var newButtonId = "my-button" + newIndex;
    newCard.find(".btn").attr("id", newButtonId);

    // Generate a unique class for the new card based on its index
    var newIndexClass = "decision-row-" + newIndex;
    newCard.addClass(newIndexClass);

    // Remove the template class
    newCard.removeClass("append-new-card");

    // Insert the new decision card before the element with class .d-md-flex.add-decision
    newCard.insertBefore(".d-md-flex.add-decision");
});

});

$(document).on('click', '.trash', function() {
  $(this).closest('.row').remove();
  });
 

 // Attach a click event listener to the "add new card" button
//  $('#add-new-card-button').click(function() {
          
//     // Clone the first card element
//     var newCard = $('.decision-row:first').clone();
//     // Add any necessary attributes to the new card element
//     newCard.attr('data-card-id', '123');
    
//     // Append the new card element to the container
//     $('#card-container').append(newCard);
//   });
  
 

$('.btn-style').click(function() {
  var buttonStyle = $(this).attr('id');
  $('.decision-button[data-target="' + buttonStyle.replace('btn-style-', '') + '"]').removeClass().addClass(buttonStyle + ' btn me-2 decision-button btn-edit');
});




// const element = document.getElementById("route");
// element.addEventListener("change", function() {
//    var routes = document.getElementById("route").innerHTML;
// console.log(routes);
// });