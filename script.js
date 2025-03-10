
   
document.querySelector(".popup-trigger").addEventListener("click", function() {
    var popup = document.getElementById("popup");
    var popupImg = document.getElementById("popupImg");
    popupImg.src = this.src; 
    popup.style.display = "flex";
});


function closePopup() {
    document.getElementById("popup").style.display = "none";
}


document.querySelectorAll('.post-img').forEach(image => {
    image.addEventListener('click', function() {
        this.classList.toggle('clicked');
    });
});





    const ctx = document.getElementById('pieChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Views', 'Likes', 'Comments'],
            datasets: [{
                data: [12000, 3500, 500],
                backgroundColor: ['#4CAF50', '#2196F3', '#FF9800']
            }]
        }
    });
