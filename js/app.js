
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



// sub-menu show
let navs = document.querySelectorAll(".nav")

let shopMenu= document.querySelector(".shop-menu")
let recipesMenu = document.querySelector(".recipes-menu")
let storyMenu = document.querySelector(".story-menu")


navs.forEach(nav=>{ 
    nav.onmouseover=()=>{
        if(!nav.classList.contains("active")){
            if(nav.classList.contains("shop")){
                shopMenu.classList.add("active")
                recipesMenu.classList.remove("active")
                storyMenu.classList.remove("active");
                return;
            }
            if(nav.classList.contains("recipes")){
                recipesMenu.classList.add("active")
                shopMenu.classList.remove("active")
                storyMenu.classList.remove("active");
                return
            }
            if(nav.classList.contains("story")){
                recipesMenu.classList.remove("active")
                shopMenu.classList.remove("active")
                storyMenu.classList.add("active");
                return
            }
        }
    }
})

header.onmouseleave=()=>{
    recipesMenu.classList.remove("active")
    shopMenu.classList.remove("active")
    storyMenu.classList.remove("active");
}

// spinner circle

$(document).ready(function(){
    let round =180;
    let spin = document.querySelector("#spinner");
    let arrow =   document.querySelectorAll(".sliderMenu .slick-arrow");
    let slickSlide = document.querySelectorAll(".sliderMenu .slick-slide");
    arrow.forEach(function(item){
        item.addEventListener("click",()=>{
           spin.style.transform=`translate(-50%) scale(1.3) rotate(${round}deg)`
            round+=90;
        })
    })
})






