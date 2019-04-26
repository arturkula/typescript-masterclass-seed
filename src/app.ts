// run in console with: yarn start

const elem = document.querySelector('.click');

function handleClick(this: HTMLAnchorElement, event: Event) {
    event.preventDefault();
    console.debug(this.className);
}

elem.addEventListener('click', handleClick, false);
