let tempY=0;
window.onscroll =()=>{
    // if(document.body.scrollTop!=0 || document.documentElement.scrollTop!=0){
    //     document.getElementById("nav").style.transform="translateY(-110%)";
    //     document.getElementById("nav").style.background="transparent";
    // }else{
    //     document.getElementById("nav").style.background="#fff";
    //     document.getElementById("nav").style.transform="translateY(0%)";
    //     setTimeout(()=>{
    //         document.getElementById("nav").style.background="transparent";
    //         clearTimeout();
    //     },500)
    // }
    if(window.scrollY!=0 ){
        document.getElementById("nav").style.transform="translateY(-110%)";
        document.getElementById("nav").style.background="transparent";
            if(tempY<=window.scrollY){
                tempY=window.scrollY;
            }
            if(tempY>window.scrollY){
                tempY=window.scrollY;
                document.getElementById("nav").style.background="#fff";
                document.getElementById("nav").style.transform="translateY(0%)";
                    setTimeout(()=>{
                        if(window.scrollY!=0|| document.body.scrollTop!=0 || document.documentElement.scrollTop!=0){
                        document.getElementById("nav").style.transform="translateY(-110%)";
                        }
                        clearTimeout();
                    },2000)
                }
    }else{
        document.getElementById("nav").style.background="#fff";
        document.getElementById("nav").style.transform="translateY(0%)";
        setTimeout(()=>{
            document.getElementById("nav").style.background="transparent";
            clearTimeout();
        },500)
    }

    }