import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import Swiper from 'swiper'
import { Navigation, Autoplay, Pagination } from 'swiper/modules'

let scriptsLoaded = false
let smootherInstance = null
let scrollTriggers = []
let splitTextInstances = []

function cleanupGsapEffects() {
  scrollTriggers.forEach((trigger) => trigger.kill())
  scrollTriggers = []

  splitTextInstances.forEach((instance) => {
    try {
      instance.revert?.()
    } catch {
      // Element may already be unmounted during route changes.
    }
  })
  splitTextInstances = []

  window.ScrollTrigger?.getAll().forEach((trigger) => trigger.kill())

  if (smootherInstance) {
    smootherInstance.kill()
    smootherInstance = null
  }
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve()
      return
    }
    const script = document.createElement('script')
    script.src = src
    script.async = false
    script.onload = () => resolve()
    script.onerror = reject
    document.body.appendChild(script)
  })
}

async function loadGsapStack() {
  if (scriptsLoaded) return
  await loadScript('/assets/js/gsap.min.js')
  await loadScript('/assets/js/ScrollTrigger.min.js')
  await loadScript('/assets/js/ScrollSmoother.min.js')
  await loadScript('/assets/js/ScrollToPlugin.min.js')
  await loadScript('/assets/js/SplitText.min.js')
  await loadScript('/assets/js/wow.min.js')
  scriptsLoaded = true
}

function initAccordion() {
  document.querySelectorAll('.accordion-box').forEach((outerBox) => {
    outerBox.querySelectorAll('.acc-btn').forEach((btn) => {
      if (btn.dataset.bound) return
      btn.dataset.bound = 'true'
      btn.addEventListener('click', () => {
        const target = btn.closest('.accordion')
        const accContent = btn.nextElementSibling
        if (!target || !accContent) return

        if (target.classList.contains('active-block')) {
          btn.classList.remove('active')
          target.classList.remove('active-block')
          accContent.classList.remove('current')
          accContent.style.display = 'none'
        } else {
          outerBox.querySelectorAll('.accordion').forEach((el) => el.classList.remove('active-block'))
          outerBox.querySelectorAll('.acc-btn').forEach((el) => el.classList.remove('active'))
          outerBox.querySelectorAll('.acc-content').forEach((el) => {
            el.classList.remove('current')
            el.style.display = 'none'
          })
          btn.classList.add('active')
          target.classList.add('active-block')
          accContent.classList.add('current')
          accContent.style.display = 'block'
        }
      })
    })
  })
}

function initPricingToggle() {
  const monthlyBtn = document.querySelector('.monthly-label')
  const yearlyBtn = document.querySelector('.yearly-label')
  const prices = document.querySelectorAll('.price')
  if (!monthlyBtn || !yearlyBtn || !prices.length) return

  const changePrice = (type) => {
    prices.forEach((el) => {
      const value = el.dataset[type]
      if (!value) return
      const period = type === 'monthly' ? 'months' : 'year'
      el.innerHTML = `$${value}<sub>/ ${period}</sub>`
    })
  }

  if (monthlyBtn.dataset.bound) return
  monthlyBtn.dataset.bound = 'true'
  yearlyBtn.dataset.bound = 'true'

  monthlyBtn.addEventListener('click', () => {
    monthlyBtn.classList.add('active')
    yearlyBtn.classList.remove('active')
    changePrice('monthly')
  })
  yearlyBtn.addEventListener('click', () => {
    yearlyBtn.classList.add('active')
    monthlyBtn.classList.remove('active')
    changePrice('yearly')
  })
}

function initSwipers() {
  const swipers = []

  if (document.querySelector('.brand-slider')) {
    swipers.push(
      new Swiper('.brand-slider', {
        modules: [Autoplay, Navigation],
        spaceBetween: 30,
        speed: 1300,
        loop: true,
        autoplay: { delay: 2000, disableOnInteraction: false },
        navigation: { nextEl: '.array-next', prevEl: '.array-prev' },
        breakpoints: {
          1399: { slidesPerView: 6 },
          1199: { slidesPerView: 5.5 },
          991: { slidesPerView: 4.5 },
          767: { slidesPerView: 3.3 },
          575: { slidesPerView: 2 },
          0: { slidesPerView: 1.6 },
        },
      })
    )
  }

  if (document.querySelector('.feature-box-slider')) {
    swipers.push(
      new Swiper('.feature-box-slider', {
        modules: [Autoplay, Navigation, Pagination],
        spaceBetween: 30,
        speed: 1300,
        loop: true,
        autoplay: { delay: 2000, disableOnInteraction: false },
        navigation: { nextEl: '.array-next', prevEl: '.array-prev' },
        pagination: { el: '.dot', clickable: true },
        breakpoints: {
          1199: { slidesPerView: 4 },
          991: { slidesPerView: 3 },
          767: { slidesPerView: 2 },
          575: { slidesPerView: 1.5 },
          0: { slidesPerView: 1.2 },
        },
      })
    )
  }

  if (document.querySelector('.testimonial-slider-content')) {
    const slider = new Swiper('.testimonial-slider-content', {
      modules: [Navigation, Pagination],
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: true,
      speed: 1300,
      loop: true,
      navigation: { nextEl: '.array-next', prevEl: '.array-prev' },
      pagination: { el: '.dot2', clickable: true },
    })
    swipers.push(slider)
  }

  if (document.querySelector('.testimonial-slider-3')) {
    swipers.push(
      new Swiper('.testimonial-slider-3', {
        modules: [Autoplay, Navigation, Pagination],
        spaceBetween: 30,
        speed: 1300,
        loop: true,
        centeredSlides: true,
        autoplay: { delay: 2000, disableOnInteraction: false },
        navigation: { nextEl: '.array-next', prevEl: '.array-prev' },
        pagination: { el: '.dot2', clickable: true },
        breakpoints: {
          1399: { slidesPerView: 4 },
          1199: { slidesPerView: 3.4 },
          991: { slidesPerView: 3 },
          767: { slidesPerView: 2 },
          575: { slidesPerView: 1.5 },
          0: { slidesPerView: 1.2 },
        },
      })
    )
  }

  return swipers
}

async function initGsapEffects(isCancelled = () => false) {
  await loadGsapStack()
  if (isCancelled()) return

  const gsap = window.gsap
  if (!gsap) return

  gsap.registerPlugin(window.ScrollTrigger, window.ScrollSmoother, window.SplitText)

  cleanupGsapEffects()
  if (isCancelled()) return

  if (document.querySelector('#smooth-wrapper') && document.querySelector('#smooth-content')) {
    smootherInstance = window.ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 2,
      effects: true,
      smoothTouch: 0.1,
      normalizeScroll: false,
      ignoreMobileResize: true,
    })
  }

  if (window.WOW) {
    new window.WOW({ live: false }).init()
  }

  if (window.SplitText && window.ScrollTrigger) {
    document.querySelectorAll('.text-anim').forEach((element) => {
      if (isCancelled()) return
      if (!element.isConnected || !element.textContent?.trim()) return
      if (element.querySelector('.char, .word')) return

      try {
        const animationSplitText = new window.SplitText(element, { type: 'chars, words' })
        splitTextInstances.push(animationSplitText)

        const trigger = window.ScrollTrigger.create({
          trigger: element,
          start: 'top 85%',
          onEnter: () => {
            if (!element.isConnected) return
            gsap.from(animationSplitText.chars, {
              duration: 1,
              delay: 0.1,
              x: 20,
              autoAlpha: 0,
              stagger: 0.03,
              ease: 'power2.out',
            })
          },
        })
        scrollTriggers.push(trigger)
      } catch {
        // Skip elements SplitText cannot safely process during navigation.
      }
    })
  }
}

function initUiChrome() {
  const preloader = document.querySelector('.preloader')
  if (preloader && !preloader.classList.contains('loaded')) {
    window.addEventListener('load', () => {
      preloader.classList.add('loaded')
      setTimeout(() => {
        preloader.style.display = 'none'
      }, 600)
    })
    setTimeout(() => {
      preloader.classList.add('loaded')
      preloader.style.display = 'none'
    }, 1500)
  }

  document.querySelectorAll('.search-toggler').forEach((el) => {
    if (el.dataset.bound) return
    el.dataset.bound = 'true'
    el.addEventListener('click', (e) => {
      e.preventDefault()
      document.querySelector('.search-popup')?.classList.toggle('active')
      document.body.classList.toggle('locked')
    })
  })

  document.querySelectorAll('.sidebar__toggle').forEach((el) => {
    if (el.dataset.bound) return
    el.dataset.bound = 'true'
    el.addEventListener('click', () => {
      document.querySelector('.offcanvas__info')?.classList.add('info-open')
      document.querySelector('.offcanvas__overlay')?.classList.add('overlay-open')
    })
  })

  document.querySelectorAll('.offcanvas__close, .offcanvas__overlay').forEach((el) => {
    if (el.dataset.bound) return
    el.dataset.bound = 'true'
    el.addEventListener('click', () => {
      document.querySelector('.offcanvas__info')?.classList.remove('info-open')
      document.querySelector('.offcanvas__overlay')?.classList.remove('overlay-open')
    })
  })

  const header = document.getElementById('header-sticky')
  const onScroll = () => {
    if (!header) return
    if (window.scrollY > 250) header.classList.add('sticky')
    else header.classList.remove('sticky')
  }
  window.removeEventListener('scroll', window.__brevonScroll)
  window.__brevonScroll = onScroll
  window.addEventListener('scroll', onScroll)
  onScroll()

  const backTop = document.getElementById('back-top')
  const onBackTopScroll = () => {
    if (!backTop) return
    const nearBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 10
    if (nearBottom) backTop.classList.add('show')
    else backTop.classList.remove('show')
  }
  window.removeEventListener('scroll', window.__brevonBackTop)
  window.__brevonBackTop = onBackTopScroll
  window.addEventListener('scroll', onBackTopScroll)

  backTop?.addEventListener('click', (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })

  document.querySelectorAll('.video-popup').forEach((el) => {
    if (el.dataset.bound) return
    el.dataset.bound = 'true'
    el.addEventListener('click', (e) => {
      e.preventDefault()
      const href = el.getAttribute('href')
      if (href) window.open(href, '_blank', 'noopener')
    })
  })
}

function initContactInfoHover() {
  const boxes = document.querySelectorAll('.contact-info-box')
  if (!boxes.length) return

  boxes.forEach((box) => {
    if (box.dataset.hoverBound) return
    box.dataset.hoverBound = 'true'

    box.addEventListener('mouseenter', () => {
      boxes.forEach((item) => item.classList.remove('active'))
      box.classList.add('active')
    })
  })
}

export function useTemplateEffects() {
  const location = useLocation()
  const swipersRef = useRef([])

  useEffect(() => {
    let cancelled = false
    const isCancelled = () => cancelled

    initUiChrome()

    document.querySelector('.offcanvas__info')?.classList.remove('info-open')
    document.querySelector('.offcanvas__overlay')?.classList.remove('overlay-open')

    const timer = setTimeout(async () => {
      swipersRef.current.forEach((s) => s.destroy?.(true, true))
      if (cancelled) return
      swipersRef.current = initSwipers()
      initAccordion()
      initPricingToggle()
      initContactInfoHover()
      await initGsapEffects(isCancelled)
    }, 100)

    return () => {
      cancelled = true
      clearTimeout(timer)
      swipersRef.current.forEach((s) => s.destroy?.(true, true))
      swipersRef.current = []
      cleanupGsapEffects()
    }
  }, [location.pathname])
}
