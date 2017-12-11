import $ from 'jquery'
import page from 'page'

$('#app-body').find('.search-form').submit(function (ev) {
  ev.preventDefault()

  var query = $(this).find('input[type="text"]').val()

  page(`/search?q=${query}`)

})