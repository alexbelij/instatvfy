import $ from 'jquery'

export function getShows(callback) {
  $.ajax('http://api.tvmaze.com/shows')
    .then(shows => {
      callback(shows)
    })
}

export function searchShows(query, callback) {
  $.ajax(`http://api.tvmaze.com/search/shows?q=${query}`)
    .then(shows => {
      callback(shows)
    })
}  