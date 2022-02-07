// import { animals } from './data.js';
export function renderListItem(animal) {
    const div = document.createElement('div');
    div.classList.add('animal');
    div.style.top = animal.top;
    div.style.left = animal.left;

    const a = document.createElement('a');
    a.href = `/animals/?id=${animal.id}`;
    a.setAttribute('target', '_blank');

    const img = document.createElement('img');
    img.src = `./assets/${animal.type}.svg`;

    const nameSpan = document.createElement('span');
    nameSpan.textContent = animal.name;
    nameSpan.classList.add('name');

    const span = document.createElement('span');
    span.textContent = animal.says;

    a.append(img);
    div.append(a, nameSpan, span);
    return div;
}

export function renderFocusItem(animal) {
    const div = document.createElement('div');
    div.classList.add('animal');
    const img = document.createElement('img');
    img.src = `../assets/${animal.type}.svg`;
    // img.style.height = '200px';

    const nameSpan = document.createElement('span');
    nameSpan.textContent = animal.name;
    nameSpan.classList.add('name');

    const span = document.createElement('span');
    span.textContent = animal.says;

    div.append(img, nameSpan, span);
    return div;
}
