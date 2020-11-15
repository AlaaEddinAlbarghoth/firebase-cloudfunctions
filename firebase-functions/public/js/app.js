const requestLink = document.querySelector('.add-question');
const requestModel = document.querySelector('.new-request');

// open request model
requestLink.addEventListener('click', () => {
    requestModel.classList.add('open');
});

// close request model
requestLink.addEventListener('click', (e) => {
    if (e.target.classList.contains('new-request')){
        requestModel.classList.remove('open');
    }
});