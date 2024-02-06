document.addEventListener("DOMContentLoaded", () => {
    init();
});

function init() {
    const libraryEl = document.querySelector(".ep133-library-container");

    for (var i = 0; i < library.length; i++) {
        let template = document.querySelector("#ep133-library");
        if (template) {
            const clone = template.content.cloneNode(true);
            clone.querySelector(".ep133-header").innerHTML = library[i].name;

            const containerEl = clone.querySelector(".ep133-sounds-container");
            if (containerEl) {
                showSounds(containerEl, library[i].start, library[i].sounds);
            }

            if (libraryEl) {
                libraryEl.appendChild(clone);
            }
        }
    }
}

function showSounds(containerEl, startIndex, sounds) {
    let template = document.querySelector("#ep133-sound");

    if (template && containerEl) {
        for (var i = 0; i < sounds.length; i++) {
            const clone = template.content.cloneNode(true);
            clone.querySelector(".ep133-number").innerHTML = startIndex + i;
            clone.querySelector(".ep133-sound").innerHTML = sounds[i];
            containerEl.appendChild(clone);
        }
    }
}
