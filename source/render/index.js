import $ from 'jquery'

var $tvShowsContainer = $('#home-section')
var $loader = $tvShowsContainer.find('.loader-wrap')

var template = `
<article class="show" data-id=":id:">
  <div class="show-pic">
    <img src=":img:" alt="Show"/>
  </div>
  <a href="">
    <div class="show-modal">
      <button class="seen"><?xml version="1.0" encoding="utf-8"?><svg width="25" height="25" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1664 960q-152-236-381-353 61 104 61 225 0 185-131.5 316.5t-316.5 131.5-316.5-131.5-131.5-316.5q0-121 61-225-229 117-381 353 133 205 333.5 326.5t434.5 121.5 434.5-121.5 333.5-326.5zm-720-384q0-20-14-34t-34-14q-125 0-214.5 89.5t-89.5 214.5q0 20 14 34t34 14 34-14 14-34q0-86 61-147t147-61q20 0 34-14t14-34zm848 384q0 34-20 69-140 230-376.5 368.5t-499.5 138.5-499.5-139-376.5-368q-20-35-20-69t20-69q140-229 376.5-368t499.5-139 499.5 139 376.5 368q20 35 20 69z"/></svg></button>
      <button class="like"><?xml version="1.0" encoding="utf-8"?><svg width="25" height="25" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M896 1664q-26 0-44-18l-624-602q-10-8-27.5-26t-55.5-65.5-68-97.5-53.5-121-23.5-138q0-220 127-344t351-124q62 0 126.5 21.5t120 58 95.5 68.5 76 68q36-36 76-68t95.5-68.5 120-58 126.5-21.5q224 0 351 124t127 344q0 221-229 450l-623 600q-18 18-44 18z"/></svg></button>
    </div> 
  </a>
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
