(function(){
    const title =  [...document.querySelectorAll('.questions-title')];
    console.log(title);
    title.forEach(e=>{
        e.addEventListener('click', ()=> {
            let height = 0;
            let answer = e.nextElementSibling
            let addPadding = e.parentElement.parentElement

            addPadding.classList.toggle('questions-padding--add')
            e.children[0].classList.toggle('questions-arrow--rotate')

            if (answer.clientHeight === 0) {
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`;
        })
    })
})();