gsap.from("#inner1",{
    scale:0,
    rotate:360,
    delay:1,
    duration:1
})
gsap.from("#inner2",{
    scale:0,
    rotate:360,
    // delay:1,
    duration:1,
    scrollTrigger:{
        trigger:"#inner2",
        scroll:"body",
        markers:true,
        scrub:5,
        start:"top 30%",
    }
})