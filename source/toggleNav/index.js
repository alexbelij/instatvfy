import $ from 'jquery'

var $tvShowsContainer = $('#home-section')

export default function toggleNav () {
  $('#app-body').find('.toggle-nav').on('click', function (ev) {
    $('#app-body').find('nav.site-nav').toggleClass('is-close')
    $tvShowsContainer.toggleClass('nav-open')
  })
}