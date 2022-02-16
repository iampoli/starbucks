
// Interactive header

let scrollY = 0
let header = document.querySelector("header")

const scrollFunction = () => {
    let currY = window.scrollY

    if (currY == 0) {
        scrollY = currY
             header.classList.contains('background-nav') && header.classList.remove('background-nav')          
            !header.classList.contains('transparent-nav') && header.classList.add('transparent-nav')
            return
    }

    if (scrollY > currY) {
        scrollY = currY
    
        header.classList.contains('transparent-nav') && header.classList.remove('transparent-nav')
        header.classList.contains('hide-nav') && header.classList.remove('hide-nav')
        !header.classList.contains('background-nav') && header.classList.add('background-nav') 
        return
    }

    scrollY = currY

    header.classList.contains('transparent-nav') && header.classList.remove('transparent-nav')
    !header.classList.contains('hide-nav') && header.classList.add('hide-nav')
    header.classList.contains('background-nav') && header.classList.remove('background-nav')          
    return 
        
    
}

window.onscroll = scrollFunction



// onload banner

// window.onload=()=>{
//     document.querySelector(".banner__content").style.opacity="1";
// }


// inter
const observerItems = document.querySelectorAll(".obs")

let observer = new IntersectionObserver(entries=>{
   entries.forEach(entry=>{
     entry.target.classList.toggle("show",entry.isIntersecting);
     if(entry.isIntersecting){
         observer.unobserve(entry.target);
     }
   })
})

observerItems.forEach(item=>{
    observer.observe(item);
})



