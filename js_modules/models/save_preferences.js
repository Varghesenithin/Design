import { applyPreferences } from './load_preferences.js';

export function saveDropdownPositions() {

    const select = document.getElementsByTagName('select');

    const dropdownPositions = {};

    for (const i of select) {

        dropdownPositions[i.id] = i.value;

    };

    localStorage

        .setItem('advDropdownValues', JSON.stringify(dropdownPositions));

    applyPreferences();

};

