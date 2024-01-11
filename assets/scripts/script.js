function handleMouseEnter() {
    this.classList.add('s-card--hovered');
    document.body.id = `${this.id}--hovered`;
    console.log(document.body.id);
}

function handleMouseLeave() {
    this.classList.remove('s-card--hovered');
    document.body.id = '';
}

function addEventListenersToCards() {
    const cardElements = document.getElementsByClassName('s-card');
    console.log(cardElements);

    for (let index = 0; index < cardElements.length; index++) {
        const card = cardElements[index];
        console.log(card);
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);
    }
}

document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);

function selectCarouselItem(selectedButtonElement) {
    const selectedItem = selectedButtonElement.id;
    const carousel = document.querySelector('.s-cards-carousel');
    const transform = carousel.style.transform;
    const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i); //usou regex (expressão regular) -> https://regexr.com/
    const rotateYDeg = -120 * (Number(selectedItem) - 1);
    const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);

    carousel.style.transform = newTransform;

    const activeButtonElement = document.querySelector('.s-constroller__button--active');
    activeButtonElement.classList.remove('s-constroller__button--active');
    selectedButtonElement.classList.add('s-constroller__button--active');
}