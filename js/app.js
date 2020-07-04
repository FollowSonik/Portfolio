$(function() {
  const filter = $('[data-filter]')
  const worksSlider = $('[data-slider="slick"]')

  filter.on('click', function(event) {
    event.preventDefault()
    let cat = $(this).data('filter')

    if (cat == 'all') {
      $('[data-cat]').removeClass('hide')
    } else {
      $('[data-cat]').each(function() {
        let workCat = $(this).data('cat')

        if (workCat != cat) {
          $(this).addClass('hide')
        } else {
          $(this).removeClass('hide')
        }
      })
    }
  })

  const modalCall = $('[data-modal]')
  const modalClose = $('[data-close]')

  modalCall.on('click', function(event) {
    event.preventDefault()

    let $this = $(this)
    let modalId = $this.data('modal')

    $(modalId).addClass('show')
    $('body').addClass('no-scroll')

    setTimeout(() => {
      $(modalId).find('.modal__dialog').css({
        transform: 'rotateX(0)'
      })
    }, 200)

    // $('#worksSlider').setPosition()
    worksSlider.setPosition()
  })

  modalClose.on('click', function(event) {
    event.preventDefault()

    let $this = $(this)
    let modalParent = $this.parents('.modal')

    modalParent.find('.modal__dialog').css({
      transform: 'rotateX(90deg)'
    })

    setTimeout(() => {
      modalParent.removeClass('show')
      $('body').removeClass('no-scroll')
    }, 400)
  })

  $('.modal').on('click', function() {
    let $this = $(this)

    $this.find('.modal__dialog').css({
      transform: 'rotateX(90deg)'
    })

    setTimeout(() => {
      $this.removeClass('show')
      $('body').removeClass('no-scroll')
    }, 350)
  })

  $('.modal__dialog').on('click', function(event) {
    event.stopPropagation()
  })

  worksSlider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true,
  })

  $('.slickPrev').on('click', function(event) {
    event.preventDefault()

    let currentSlider = $(this).parents('.modal').find(worksSlider)

    // $('#worksSlider').slick('slickPrev')
    currentSlider.slick('slickPrev')
  })

  $('.slickNext').on('click', function(event) {
    event.preventDefault()

    let currentSlider = $(this).parents('.modal').find(worksSlider)

    // $('#worksSlider').slick('slickNext')
    currentSlider.slick('slickNext')
  })

  const navToggle = $('#navToggle')
  const nav = $('#nav')

  navToggle.on('click', function(event) {
    event.preventDefault()

    nav.toggleClass('show')
  })
})