
// for border increase

$(document).ready(function() {
    $('.shadow-example').hover(
        function() {
            $(this).addClass('shadow-lg ');
        },
        function() {
            $(this).removeClass('shadow-lg ');
        }
    );
});

//email
function openEmailOptions() {
    // Define the email options URL
    var emailOptionsURL = "https://mail.google.com/mail/u/0/#inbox?compose=new"; // Replace with your desired URL
    
    // Open a new browser window with email options
    window.open(emailOptionsURL, "EmailOptions", width="1400",height="900");
}