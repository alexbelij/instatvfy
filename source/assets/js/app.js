import $ from 'jquery'
import { getShows, searchShows } from 'source/api-client'
import renderShows from 'source/render'
import toggleNav from 'source/toggleNav'
import page from 'page'

$(function () {

  var $tvShowsContainer = $('#home-section')
  var $loader = $tvShowsContainer.find('.loader-wrap')

  toggleNav()

  $tvShowsContainer.on('click', 'button.seen', function (ev) {
    ev.preventDefault()
    $(this).closest('.show-modal').toggleClass('is-seen')
  })

  $('#app-body').find('.search-form').submit(function (ev) {
    ev.preventDefault()

    $loader.show()
    $tvShowsContainer.find('.show').remove()

    var query = $(this).find('input[type="text"]').val()

    searchShows(query, function (res) {
      $loader.hide()

      var show = res.map(element => {
        return element.show
      })

      renderShows(show)
    })
  })

  page('/top-shows', function (ctx, next) {
    $tvShowsContainer.find('.show').remove()
  })

  page('/', function (ctx, next) {
    if (!localStorage.shows) {
      getShows(shows => {
        $loader.hide()
        localStorage.shows = JSON.stringify(shows)
        renderShows(shows)
      })
    } else {
      $loader.hide()
      renderShows(JSON.parse(localStorage.shows))
    }
  })

  page()

});


