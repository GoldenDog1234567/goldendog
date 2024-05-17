let idleTime = 0;
const idleThreshold = 2000;
const elementIds = ['myImage0', 'myImage1', 'myImage2','myImage3','LOGO'];
const animations = ['bounceAnimation','breathe','shakeAndBreathe'];
let lastActivityTime = Date.now();  
['click','mousemove'].forEach(eventType => {  
  document.addEventListener(eventType, () => {  
    lastActivityTime = Date.now();  
  });  
});
setInterval(() => {  
  const now = Date.now();  
  if (now - lastActivityTime > idleThreshold) {  
    const randomElementId = elementIds[Math.floor(Math.random() * elementIds.length)];  
    const randomAnimation = animations[Math.floor(Math.random() * animations.length)];  
    const element = document.getElementById(randomElementId);  
    if (element) {  
      element.style.animation = `${randomAnimation} 1s ease 1 forwards`;
      setTimeout(() => {  
        element.style.animation = '';
      }, 1000);
    }  
  }  
}, 1000);