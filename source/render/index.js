import $ from 'jquery'

var $tvShowsContainer = $('#home-section')
var $loader = $tvShowsContainer.find('.loader-wrap')

var template = `
<article class="show" data-id=":id:">
  <div class="show-pic">
    <img src=":img:" alt="Show"/>
  </div>
  <div class="show-meta">
    <div class="name">:name:</div>
    <div class="genre">:genre:</div>
</div>
</article>`

export default function renderShows(shows) {
  
  var $tvShows = ''

  shows.forEach(show => {
    var $tvShow = template
      .replace(':id:', show.id)
      .replace(':img:', show.image ? show.image.medium : 'http://www.med.navy.mil/sites/nhcne/NHCNE/Command/Leaders/image-not-available.jpg')
      .replace(':name:', show.name)
      .replace(':genre:', show.genres)
    
    $tvShows += $tvShow  
  })
  

  $tvShowsContainer.append($($tvShows).hide().fadeIn(300))
}
