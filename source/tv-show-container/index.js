import $ from 'jquery'

var $tvShowsContainer = $('#home-section')

$tvShowsContainer
  .on('click', 'button.seen', function (ev) {
    ev.preventDefault()
    $(this).closest('.show-modal').toggleClass('is-seen')
  })
  .on('click', 'button.like', function (ev) {
    ev.preventDefault()
    $(this).closest('.show-modal').toggleClass('is-liked')
  })

export default $tvShowsContainer