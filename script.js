
// for navigation dropdown start
$(document).ready(function() {
    $('.nav_dropdown_item').hide();
  
    $('.nav_main_item').click(function() {
      var target = $(this).data('target');
      
      $('.nav_dropdown_item').not(target).hide();
      
      if ($(target).is(':visible')) {
        $(target).hide();
        $('.dropdown_background').hide();
        $(this).removeClass('active');
      } else {
        $(target).show();
        $('.dropdown_background').show();
        $('.nav_main_item').removeClass('active'); 
        $(this).addClass('active');
      }
    });
  });
  

// for navigation dropdown start end

// for offer carouse start

const right = document.getElementById('right');
const left = document.getElementById('left');
const carousel = document.querySelector('.carousel');
const progressBar = document.querySelector('.progress-bar');

let counter = 0;
const maxCounter = 1300; // Adjust this to fit the width of your images
const imageWidth = 650; // Width of each image
const totalImages = maxCounter / imageWidth + 1; // Number of images

function updateProgressBar() {
    const progress = (counter / maxCounter) * 100;
    progressBar.style.width = `${progress}%`;
}

right.addEventListener('click', () => {
    if (counter >= maxCounter) {
        counter = 0;
    } else {
        counter += imageWidth;
    }
    carousel.style.transform = `translateX(-${counter}px)`;
    updateProgressBar();
});

left.addEventListener('click', () => {
    if (counter <= 0) {
        counter = maxCounter;
    } else {
        counter -= imageWidth;
    }
    carousel.style.transform = `translateX(-${counter}px)`;
    updateProgressBar();
});

// Initialize the progress bar
updateProgressBar();


// for offer carouse end






// for awards carouse start

let btnRight = document.getElementById('right-slider2');
let btnLeft = document.getElementById('left-slider2');
let carouselContainer = document.querySelector('.carousel-slider2');
let progressBarElement = document.querySelector('.progress-bar-slider2');

let currentOffset = 0;
let totalWidth = 1300;
let imgWidth = 650; 
let totalImgs = totalWidth / imgWidth + 1; 

function updateProgress1() {
    let progressPercentage = (currentOffset / totalWidth) * 100;
    progressBarElement.style.width = `${progressPercentage}%`;
}

btnRight.addEventListener('click', () => {
    if (currentOffset >= totalWidth) {
        currentOffset = 0;
    } else {
        currentOffset += imgWidth;
    }
    carouselContainer.style.transform = `translateX(-${currentOffset}px)`;
    updateProgress1();
});

btnLeft.addEventListener('click', () => {
    if (currentOffset <= 0) {
        currentOffset = totalWidth;
    } else {
        currentOffset -= imgWidth;
    }
    carouselContainer.style.transform = `translateX(-${currentOffset}px)`;
    updateProgress1();
});

// Initialize the progress bar
updateProgress1();

// for awards carouse end