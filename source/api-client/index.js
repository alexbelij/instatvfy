import $ from 'jquery'

export function getShows(callback) {
  $.ajax('https://api.tvmaze.com/shows')
    .then(shows => {
      callback(shows)
    })
}

export function searchShows(query, callback) {
  $.ajax(`https://api.tvmaze.com/search/shows?q=${query}`)
    .then(shows => {
      callback(shows)
    })
}

export function getShow(id, callback) {
  $.ajax(`https://api.tvmaze.com/shows/${id}`)
  .then(show => {
    callback(show)  
  })

  .catch(err => {
    console.log(err)
  })
}