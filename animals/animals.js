import { animals } from '../data.js';
import { renderFocusItem } from '../render-utils.js';
import { findById } from '../utils.js';
// console.log('henlo')
const focusAnimal = document.getElementById('animal-info');

const params = new URLSearchParams(window.location.search);
// console.log(params.get('id'));
const animal = findById(params.get('id'), animals);
// console.log(animal);

const renderFocus = renderFocusItem(animal);

focusAnimal.append(renderFocus);
