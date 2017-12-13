import $ from 'jquery'
import page from 'page'

var $tvShowsContainer = $('#home-section')

$tvShowsContainer.on('click', 'article.show', function (e) {
  e.preventDefault()

  var $tvShowId = $(this)[0].dataset.id

  page(`/movie?q=${$tvShowId}`)
})