///////FLOWER POWER

let b = 2; // Initial value for b
    const animationSpeed = 0.0025;
    function updateFlowerPath() {
      const a = 50; // You can adjust these constants
      let path = '';
      for (let angle = 0; angle <= 2 * Math.PI; angle += 0.001) {
        const r = a * Math.sin(b * angle);
        const x = 50 + r * Math.cos(angle); // Centered at (200, 200)
        const y = 50 + r * Math.sin(angle);

        path += (angle === 0 ? "M" : "L") + x + "," + y;

      }
      document.getElementById('flowerPath').setAttribute('d', path);
    }
    function animate() {
      if (b <= 20) { // Stop the animation when b reaches 20
        b += animationSpeed;
        updateFlowerPath();
        requestAnimationFrame(animate);
      }
    }
    animate();
//////////
const lenis =new Lenis({
  duration:3
});
function raf(time){
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
  



//GSAP SVG
const icons = document.querySelectorAll(".map");
gsap.set(icons, {
  transformOrigin: "50% 50%"
});
gsap.to(icons, {
  repeat: -1,
  yoyo: true,
  ease: "power3.out",
  opacity: function(i) {
    return 0.1*i +0.1
  },
  rotation: function(i) {
    return 360 +(i + 1)/4
  },
  stagger:0.5,
  duration: 1
})
//////LLLLL
let poke = gsap.utils.toArray(".mlp");
  poke.forEach((element) => {
gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      toggleActions: "restart none none reset",
      start: "top 100%",
      end: "bottom 100%",
      scrub: false,
      markers: false
    },
    y: 200,
    opacity: 0,
    duration: 1

  });
});
////////SMALL TEXTS
let alltext = gsap.utils.toArray(".xp");
alltext.forEach(element => {
  console.log("helloooo");
  gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      toggleActions: "restart none none reset",
      start: "top 100%",
      end: "bottom 100%",
      scrub: false,
      markers: false
    },
    x: 0,
    opacity: 1,
    duration: 1

  });
}
);


///////CUSP//////
let currentMode = 1;
 var contra=document.getElementById("cus");
contra.addEventListener('click', toggleMode);
function toggleMode() {
  switch (currentMode) {
    case 1:
       contra.style.transform="rotateZ(135deg)";
       contra.style.fill="var(--text-color)";
      break;
    case 2:
      contra.style.transform="rotateZ(0deg)";
      contra.style.fill='var(--color)';
      break;
  }
  currentMode = currentMode === 2 ? 1 : currentMode + 1;
}
///////THEME
let currentModes = 1;
 const root=document.documentElement;
 var mood=document.getElementById("mood");
mood.addEventListener('click', to);
function to() {
  switch (currentModes) {
    case 1:
       root.style.setProperty('--color','rgb(210, 0, 0)');
       root.style.setProperty('--text-color','rgb(255, 255, 225)');
       root.style.setProperty('--bcolor','rgb(20, 20, 20)');
      break;
    case 2:
      root.style.setProperty('--color','rgb(210, 0, 0)');
      root.style.setProperty('--text-color','rgb(20, 20, 20)');
      root.style.setProperty('--bcolor','rgb(255, 255, 225)');
      break;
  }
  currentModes = currentModes === 2 ? 1 : currentModes + 1;
}
////////////////////////////////////////////////////////////
