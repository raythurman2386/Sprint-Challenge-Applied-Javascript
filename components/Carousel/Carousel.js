class Carousel {
    constructor(element) {
        this.element = element;
        this.leftButton = this.element.querySelector('.left-button');
        this.rightButton = this.element.querySelector('.right-button');
        this.images = this.element.querySelectorAll('.img');
        this.imageData = this.images.forEach(image => {
            new CarouselImage(image);
        })


        this.leftButton.addEventListener('click', () => this.button());
        this.rightButton.addEventListener('click', () => this.button());
    }

    button() {
        console.log('left');
    }
}

class CarouselImage {
    constructor(image) {
        this.image = image;
        this.imgData = this.image.dataset.tab;
        console.log(this.imgData)
    }
    moveLeft() {
        console.log('left');
        this.image.classList.remove('img-active');
    }

    moveRight() {
        console.log(this.images);
        this.image.classList.remove('img-active');
    }
}

let carousel = document.querySelectorAll('.carousel').forEach(carousel => new Carousel(carousel));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/