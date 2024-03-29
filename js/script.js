const thoughts = document.querySelectorAll('.thoughts');

thoughts.forEach(function(div) {
    div.addEventListener('click', function() { 
        const main = document.querySelector('.main');
        const hidden = document.querySelector('.hidden');

        if (main.style.display === 'none') {
            main.style.display = 'block';
            hidden.style.display = 'none';
        } else {
            main.style.display = 'none';
            hidden.style.display = 'block';
        }
    });
});

const hiddenman = document.querySelectorAll('.hiddenman');

hiddenman.forEach(function(div) {
    div.addEventListener('click', function() { 
        const main = document.querySelector('.hidden');
        const hidden = document.querySelector('.main');

        if (hidden.style.display === 'none') {
            hidden.style.display = 'block';
            main.style.display = 'none';
        } else {
            hidden.style.display = 'none';
            main.style.display = 'block';
        }
    });
});

