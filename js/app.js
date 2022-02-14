
// Interactive header

let scrollY = 0
let header = document.querySelector("header")

const scrollFunction = () => {
    let currY = window.scrollY

    if (scrollY > currY) {
        scrollY = currY
        return (
            header.classList.contains('hide-nav') && header.classList.remove('hide-nav')
        )
    }

    scrollY = currY
    return (
        !header.classList.contains('hide-nav') && header.classList.add('hide-nav')
    )
}

window.onscroll = scrollFunction



