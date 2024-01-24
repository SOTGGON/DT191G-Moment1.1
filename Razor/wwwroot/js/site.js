// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

document.addEventListener("DOMContentLoaded", function() {
    // Få aktuellt datum
    var currentDate = new Date();

    // Formatera datumet som xxxx-xx-xx
    var formattedDate = currentDate.toISOString().slice(0, 10);

    // Infoga datum på sidan
    var dateElement = document.querySelector('.date');
    if (dateElement) {
        dateElement.textContent = 'Dagens datum är: ' + formattedDate;
    }
});
