
// Interactive header

let scrollY = 0
let header = document.querySelector("header")

const scrollFunction = () => {
    let currY = window.scrollY

    if (currY == 0) {
        scrollY = currY
        return (
            !header.classList.contains('transparent-nav') && header.classList.add('transparent-nav')
        )
    }

    if (scrollY > currY) {
        scrollY = currY
    
        header.classList.contains('transparent-nav') && header.classList.remove('transparent-nav')
        header.classList.contains('hide-nav') && header.classList.remove('hide-nav')

        return
    }

    scrollY = currY

    header.classList.contains('transparent-nav') && header.classList.remove('transparent-nav')
    !header.classList.contains('hide-nav') && header.classList.add('hide-nav')

    return 
        
    
}

window.onscroll = scrollFunction



