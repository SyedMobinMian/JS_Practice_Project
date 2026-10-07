
// ###################################################################
// @@@@@@@@@@@@@@@@@@@@ 1. COLOR CHANGER PROJECCT @@@@@@@@@@@@@@@@@@@@
// ###################################################################

const buttons = document.querySelectorAll('.color-btn');
const body = document.querySelector('body');
buttons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {

        //Direct ID ki value ("red", "green", "blue", "yellow", "purple") set ho jayge

        body.style.backgroundColor = e.target.id;
        if (e.target.id === 'reset') {
            body.style.backgroundColor = e.target.id = '#0f172a';
        }

        // or

        // if(e.target.id === 'red'){
        //     body.style.backgroundColor = e.target.id;
        // }
        // if(e.target.id === 'green'){
        //     body.style.backgroundColor = e.target.id;
        // }
        // if(e.target.id === 'blue'){
        //     body.style.backgroundColor = e.target.id;
        // }
        // if(e.target.id === 'yellow'){
        //     body.style.backgroundColor = e.target.id;
        // }
        // if(e.target.id === 'purple'){
        //     body.style.backgroundColor = e.target.id;
        // }

    });
});
