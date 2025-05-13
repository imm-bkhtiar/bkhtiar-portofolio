export default class AnimationOnScroll {
  animationOpts

  constructor(animationOpts){
    this.animationOpts = animationOpts
  }

  addStyle(style, element) {
    for (const [css, value] of Object.entries(style)) {
      element.style.setProperty(css, value);
    }
  }

  configureAnimation() {
    const elements = document.querySelectorAll('*[animation]')
    elements.forEach(element => {
      const animationName = element.getAttribute('animation').split(' ')
      const screeenHeight = window.innerHeight
      const elementPosition = element.getBoundingClientRect().top

      if( elementPosition < screeenHeight / 2 ) {
        // cannot using this when add event listener on window. this become window
        this.addStyle({
          "--from-opt": `var(--from-${animationName[1]})`,
          "--animation-name" : animationName[0],
          "--animation-duration" : `${this.animationOpts.duration}ms`,
          "--animation-timingFunction" : this.animationOpts.timingFunction,
          "--object-distance" : this.animationOpts.objectDistance,
        }, element)
      } else if (elements[elements.length -1].getBoundingClientRect().top < screeenHeight / 1.15) {
        this.addStyle({
          "--from-opt": `var(--from-${animationName[1]})`,
          "--animation-name" : animationName[0],
          "--animation-duration" : `${this.animationOpts.duration}ms`,
          "--animation-timingFunction" : this.animationOpts.timingFunction,
          "--object-distance" : this.animationOpts.objectDistance,
        }, element)
      }
    });
  }

  addAnimate(opt) {
    window.animationOpts = this.animationOpts
    window.addStyle = this.addStyle
    window.addEventListener('DOMContentLoaded', opt)
    window.addEventListener('scroll', opt)
  }

  createAnimation(){
    this.addAnimate(this.configureAnimation)
  }
}
