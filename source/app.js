import $ from 'jquery'
import { getShows, searchShows, getShow } from 'source/api-client'
import renderShows from 'source/render'
import $tvShowsContainer from 'source/tv-show-container'
import toggleNav from 'source/toggleNav'
import 'source/search-form'
import 'source/show-click-event'
import page from 'page'
import title from 'title'
import qs from 'qs'

$(function () {

  toggleNav()

  page('/search', function (ctx, next) {
    $tvShowsContainer.find('.loader-wrap').show()
    $tvShowsContainer.find('.show').remove()
    $tvShowsContainer.find('.show-alone').remove()

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
    $tvShowsContainer.find('.show-alone').remove()

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
    $tvShowsContainer.find('.show-alone').remove()
    $tvShowsContainer.find('.loader-wrap').show()

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


  page('/movie', function (ctx, next) {
    var query = qs.parse(ctx.querystring)
    $tvShowsContainer.find('.show').remove()
    $tvShowsContainer.find('.show-alone').remove()

    getShow(query.q, function (show) {
      
      var showtempl = `
        <article class="show-alone">
          <div class="show-container">
            <div class="img-wrapper">
              <img src="${show.image.medium}"></img>
            </div>
            <div class="show-meta-alone">
              <div class="show-meta-name">${show.name}</div>
              <div class="show-meta-summary">${show.summary}</div>
            </div>
          <div/>
        </article>`

      $tvShowsContainer.append(showtempl)
    })
  })


  page('*', function () {
    $tvShowsContainer.find('.show').remove()
    $tvShowsContainer.find('.show-alone').remove()
    title('Error 404')
    console.log('Not found')
  })

  page()

});


