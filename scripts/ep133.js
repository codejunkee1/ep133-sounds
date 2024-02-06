document.addEventListener("DOMContentLoaded", () => {
    init();
});

function init() {
    const libraryEl = document.querySelector(".ep133-library-container");

    for (var i in sounds) {
        let template = document.querySelector("#ep133-library");
        if (template) {
            const clone = template.content.cloneNode(true);
            clone.querySelector(".ep133-header").innerHTML = i;

            const containerEl = clone.querySelector(".ep133-sounds-container");
            if (containerEl) {
                showSounds(containerEl, i, sounds[i]);
            }

            if (libraryEl) {
                libraryEl.appendChild(clone);
            }
        }
    }
}

function showSounds(containerEl, name, sounds) {
    let template = document.querySelector("#ep133-sound");

    if (template && containerEl) {
        for (var i = 0; i < sounds.length; i++) {
            const clone = template.content.cloneNode(true);
            clone.querySelector(".ep133-number").innerHTML = i + 1;
            clone.querySelector(".ep133-sound").innerHTML = sounds[i];
            containerEl.appendChild(clone);
        }
    }
}
