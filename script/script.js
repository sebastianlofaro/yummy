$(document).ready( function() {
	$('.searchButton').on("click", function() {
		var keyword = $(".textInput").val();
		console.log(keyword);
		var result = $.ajax({
		url: "http://api.yummly.com/v1/api/recipes?_app_id=6d9e22ab&_app_key=e4270a20949b90bf9cca1017d935f12b&q=" + keyword + "&requirePictures=true",
		dataType: "jsonp",
		type: "GET"
		})
	.done(function(result){
		console.log(result.matches);
		$('.resultsContainer').html("");
		$.each(result.matches, function(key, value) {
			console.log(value.totalTimeInSeconds);
			var output = '<div class="result"><a href="https://www.yummly.com/recipe/' + value.id + '"><h3 class="recipeName">' + value.sourceDisplayName + '</h3></a><img src="' + value.smallImageUrls[0] + '" class="recipeImage"><p>Cooking time: ' + (value.totalTimeInSeconds/60) + ' minutes</p><p>Rating: ' + value.rating + ' </p></div>';
			$('.resultsContainer').append(output);
		});

		
		


	})
	.fail(function(jqXHR, error, errorThrown){
		
	});
	});
});

