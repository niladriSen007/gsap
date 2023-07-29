const tl = gsap.timeline()

tl.from("#logo,#logo_container > a,#button_container > button",{
    y:-120,
    // delay:1,
    duration:2,
    stagger:0.4,
})


gsap.from("#content > h1,#content > div",{
    x:-980,
    delay:3,
    duration:2,
    stagger:0.5,
})


gsap.from("#content_img",{
    x:980,
    delay:3,
    duration:2,
    stagger:0.5,
})


gsap.from("#page2 div",{
    scale:0,
    opacity:0,
    duration:1,
    stagger:.5,
    scrollTrigger:{
        trigger:"#page2 div",
        scroll:"body",
        // markers:true,
        // scrub:true,
        start:"top 96%",
    }
})


// tl.from("#inner2",{
//     scale:0,
//     opacity:0,
//     delay:15,
//     scrollTrigger:{
//         trigger:"#inner2",
//         scroll:"body",
//         scrub:5,
//         start:"top 96%",
//     }
// })
// tl.from("#inner3",{
//     scale:0,
//     opacity:0,
//     delay:15,
//     scrollTrigger:{
//         trigger:"#inner3",
//         scroll:"body",
//         scrub:5,
//         start:"top 96%",
//     }
// })
// tl.from("#inner2",{
//     scale:0,
//     opacity:0,
//     //rotate:360,
//     delay:8,
//     scrollTrigger:{
//         trigger:"#inner",
//         scroll:"body",
//         // markers:true,
//         scrub:5,
//         start:"top 96%",
//     }
// })

