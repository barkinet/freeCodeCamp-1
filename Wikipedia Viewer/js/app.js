$(document).ready(function(){

		$('.search').keyup(function(event){
			var keyword = $(this).val();
			if(event.keyCode == 13){
				getSearchResults(keyword);
			}
		});
	});

	function getSearchResults(val){
		var api = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';
		var page='https://en.wikipedia.org/?curid=';

		$.get(api+val,function(data){
			var pages = data.query.pages;
			//console.log(pages);
			$('.list').empty();
			for(var p in pages){
				if(pages.hasOwnProperty(p)){
					//console.log(pages[p].title);



					$('.list').append('<div class="result"><li><a href="'+page+pages[p].pageid+'" target="_blank">'+pages[p].title+'<br><br><p id="des">'+pages[p].extract+'<p></a></li></div><br>');
				}
			}

		},"jsonp");
	}
