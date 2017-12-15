import $ from 'jquery'
import page from 'page'

var $tvShowsContainer = $('#home-section')

$tvShowsContainer.on('click', '.show', function (e) {
  e.preventDefault()

  var $tvShowId = $(this).closest('.show')[0].dataset.id

  page(`/movie?q=${$tvShowId}`)
})