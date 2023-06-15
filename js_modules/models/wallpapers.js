        color = wallpapersList.filter((item) => {

            return item.file == selectedWallpaper;

        })[0].color;

    } catch (err) {

        redoOnboarding();

    }

}

function populateWallpapersInDOM() {

    const bar = document.getElementById('wallpapers');

    for (const n of wallpapersList) {

        let input = n.file;

        input = input.split('.').join('-thumb.');

        const thumb = document.createElement('div');

        thumb.className = 'thumb-group';

        thumb.setAttribute('onclick', 'changeWallpaper(event)');

        thumb.setAttribute('onkeypress', 'click_to_enter(event)');

        thumb.setAttribute('tabindex', '3');

        const div = document.createElement('div');

        div.innerHTML = n.title;

        div.className = 'thumb-title';

        thumb.appendChild(div);

        const img = document.createElement('img');

        img.src = WALLPAPERS_URL + input;

        img.className = 'thumbnail';

        img.title = n.title;

        thumb.appendChild(img);

        bar.appendChild(thumb);

    }

}
