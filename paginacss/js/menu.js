(function(){
    const openButton = document.querySelector('.nav-menu')
    const menu = document.querySelector('.nav-link')
    const close = document.querySelector('.nav-close')



    openButton.addEventListener('click', () =>{
        menu.classList.add('nav-link--show')

    })

    close.addEventListener('click', () =>{
        menu.classList.remove('nav-link--show')

    })

})();