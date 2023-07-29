// const tl = gsap.timeline();

// tl.to("#img1",{
//     x:480,
//     duration:2,
//     // delay:1
// })
// tl.to("#img2",{
//     y:325,
//     duration:2,
//     // delay:.2
// })
// tl.to("#img3",{
//     x:-580,
//     duration:2,
//     // delay:.2
// })
// tl.to("#img4",{
//     y:-325,
//     duration:2,
//     // delay:.2
// })


gsap.from("#logo,#logo_container,#button_container",{
    y:-100,
    opacity:0,
    stagger:0.5,
    duration:2
})
gsap.to("#img1",{
    x:480,
    duration:2,
    delay:5
})
gsap.to("#img2",{
    y:325,
    duration:2,
    delay:5
})
gsap.to("#img3",{
    x:-580,
    duration:2,
    delay:5
})
gsap.to("#img4",{
    y:-325,
    duration:2,
    delay:5
})

gsap.to("#anim_btn",{
    scale:1.1,
    yoyo:true,
    repeat:-1,
    // duration:2
})

gsap.from("#content_text p",{
    y:440,
    stagger:.5,
    delay:2,
    duration:2
})


gsap.from("#scroll",{
    opacity:0,
    scale:0,
    y:40,
    delay:6,
    duration:2
})
gsap.to("#scroll",{
    y:8,
    duration:.5,
    // delay:5,
    yoyo:true,
    repeat:-1,
})