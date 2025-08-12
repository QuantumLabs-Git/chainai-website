import { useEffect } from 'react'

export const useWOW = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.wow')
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target
          const animationClass = element.classList.value.split(' ').find(cls => 
            ['fadeIn', 'fadeInUp', 'fadeInDown', 'fadeInLeft', 'fadeInRight', 'bounceInScale'].includes(cls)
          )
          
          if (animationClass) {
            element.classList.add('animated', animationClass)
          }
          
          observer.unobserve(element)
        }
      })
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    })
    
    elements.forEach(element => {
      observer.observe(element)
    })
    
    return () => {
      elements.forEach(element => {
        observer.unobserve(element)
      })
    }
  }, [])
}

export default useWOW