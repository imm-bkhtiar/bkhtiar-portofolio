export default class Skills_meter{
  container;
  style

  addStyle(style) {
    for (const [css, value] of Object.entries(style)) {
      this.container.style.setProperty(css, value);
    }
  }

  addElement(list) {
    const skill_meter_contaier = document.createElement('section')
    skill_meter_contaier.setAttribute('class', 'skill_meter_container')
    for (const [language, level] of Object.entries(list)) {
      const skill_name = document.createElement('h4')
      skill_name.textContent = language
      const skill_level = document.createElement('p')
      skill_level.textContent = level
      const skill_meter = document.createElement('span')
      skill_meter.setAttribute('level', level)
      const meter_container = document.createElement('div')
      meter_container.appendChild(skill_meter)

      const wrapper = document.createElement('div')
      wrapper.setAttribute('class', 'wrapper')
      wrapper.setAttribute('level', level)
      wrapper.appendChild(skill_name)
      wrapper.appendChild(skill_level)
      wrapper.appendChild(meter_container)

      skill_meter_contaier.appendChild(wrapper)
    }
    this.container.appendChild(skill_meter_contaier)
  }
  
  createLevelMeter() {
    const skills_meter = document.querySelectorAll(".container[its='skills_meter'] .skill_meter_container .wrapper div span");
    skills_meter.forEach(skill_meter => {
    const level = skill_meter.getAttribute('level')
      const screenHeight = window.innerHeight
      const contentPosition = skill_meter.getBoundingClientRect().top
      if (contentPosition < screenHeight / 2 || contentPosition < screenHeight / 1.15 ) {
        skill_meter.style.animation = `${level} 2s forwards`
      }
    });
  } 

  catchRootElement(style) {
    this.container = document.querySelector(".container[its='skills_meter']");
    this.addStyle({
      "--gap": style.gap,
      "--font-size":style.fontSize,
      "--ticknes":style.ticknes,
      "--border":style.border,
      "--color":style.color,
      "--line-color":style.lineColor, 
      "--line-gap":style.linegap,
      "--language-fontsize": style.languageFontSize,
    });
  }

  onPageAnimation(opt) {
    window.addEventListener('DOMContentLoaded', opt)
    window.addEventListener('scroll', opt)
  }

  onHoverAnimation() {
    const wrappers = document.querySelectorAll(".container[its='skills_meter'] .skill_meter_container .wrapper");
    wrappers.forEach(wrapper => {
      wrapper.classList.add('on_hover')
    });
  }

  createSkillLevel({list, style}){
    this.style = style
    this.catchRootElement(style)
    this.addElement(list)
    this.createLevelMeter()
    if (style.hoverAnimation) {
      this.onPageAnimation(this.createLevelMeter)
      this.onHoverAnimation()
    }
  }
}
