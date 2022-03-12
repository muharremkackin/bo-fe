let closeBtn = document.getElementById('closeNavigationBtn');
let openBtn = document.getElementById('openNavigationBtn');


openBtn.addEventListener('click', function () {
    let navigation = document.getElementById('mainNavigation');

    navigation.classList.remove('hidden');
});

closeBtn.addEventListener('click', function () {
    let navigation = document.getElementById('mainNavigation');

    navigation.classList.add('hidden');
});