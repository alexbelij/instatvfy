import $ from 'jquery'
import { getShows, searchShows, getShowsPageTwo } from 'source/api-client'
import renderShows from 'source/render'
import $tvShowsContainer from 'source/tv-show-container'
import toggleNav from 'source/toggleNav'
import 'source/search-form'
import page from 'page'
import title from 'title'
import qs from 'qs'

$(function () {

  toggleNav()
 
  page('/search', function (ctx, next) {
    $tvShowsContainer.find('.loader-wrap').show()
    $tvShowsContainer.find('.show').remove()
    
    var query = qs.parse(ctx.querystring)
    title(`Search: ${query.q}`)

    searchShows(query.q, function (res) {
      $tvShowsContainer.find('.loader-wrap').hide()

      var show = res.map(element => {
        return element.show
      })

      renderShows(show)
    })
  })


  page('/', function (ctx, next) {
    title('Instatvfy | Find & Save Shows')
    $tvShowsContainer.find('.show').remove()

    if (!localStorage.shows) {
      getShows(shows => {
        $tvShowsContainer.find('.loader-wrap').hide()
        localStorage.shows = JSON.stringify(shows)
        renderShows(shows)
      })
    } else {
      $tvShowsContainer.find('.loader-wrap').hide()
      renderShows(JSON.parse(localStorage.shows))
    }
  })

  
  
  page('/top-shows', function () {
    title('Top Shows | Instatvfy')
    $tvShowsContainer.find('.show').remove()
    $tvShowsContainer.find('.loader-wrap').show()

    if (!localStorage.topShows) {
      getShowsPageTwo(function (shows) {
        $tvShowsContainer.find('.loader-wrap').hide()
        localStorage.topShows = JSON.stringify(shows)
        renderShows(shows)
      })
    } else {
      $tvShowsContainer.find('.loader-wrap').hide()
      renderShows(JSON.parse(localStorage.topShows))
    }
  })



  page('*', function () {
    title('Error 404')
    console.log('Not found')
  })

  page()

});


