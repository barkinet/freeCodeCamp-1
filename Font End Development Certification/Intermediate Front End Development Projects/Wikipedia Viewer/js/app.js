$(document).ready(function () {
  $('.search').keyup(function (event) {
    var keyword = $(this).val()
    if (event.keyCode == 13) {
      getSearchResults(keyword)
    }
  })
})

function getSearchResults (val) {
  var api = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch='
  var page = 'https://en.wikipedia.org/?curid='

  $.get(api + val, function (data) {
    var pages = data.query.pages
		// console.log(pages);
    $('.list').empty()
    for (var p in pages) {
      if (pages.hasOwnProperty(p)) {
				// console.log(pages[p].title);
        $('.list').append(
					'<div class="search-row row row-centered">' +
					'	<div class="col-xs-10 col-centered">' +
					'		<a href="' + page + pages[p].pageid + '" target="_blank">' +
					'			<div class="panel panel-default">' +
					'				<div class="panel-heading">' +
					'					<h3 class="panel-title">' + pages[p].title + '</h3>' +
					'				</div>' +
					'				<div class="panel-body">' +
					'					' + pages[p].extract +
					'				</div>' +
					'			</div>' +
					'		</a>' +
					'	</div>' +
					'</div>')
      }
    }
  }, 'jsonp')
}
