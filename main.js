gsap.from('#page1 #box', {
  scale: 0,
  duration: 1,
  delay: 1,
  rotate: 360,
});

gsap.from('#page2 #box', {
  scale: 0,
  duration: 1,
  delay: 1,
  rotate: 360,
  scrollTrigger: {
    trigger: '#page2 #box',
    scroller: 'body',
    // markers: true,
    start: 'top 55%',
    end: ' top 30%',
    scrub: true,
  },
});

gsap.from('#page3 #box', {
  x: 600,
  duration: 2,
  scrollTrigger: {
    trigger: '#page3 #box',
    scroller: 'body',
    start: 'top 50%',
    end: 'top 30%',
    scrub: true,
  },
});
