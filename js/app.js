$(function(){

	var startEvents = {

		init: function(){
			this.overlaying();
		},

		overlaying: function(){
			var overlay = $('<div id="overlay"></div>'),
					image = $("<img>"),
					capture = $("<p></p>"),
					imgGallery = $('a');

			overlay.append(image);//add img to overlay div
			overlay.append;
			$("body").append(overlay);//add overlay to body

			$("#imgGallery a").click(function(event){
				event.preventDefault();
			  var imgLocation = $(this).attr("href");
			  image.attr("src", imgLocation);
			  overlay.show();
			});

			overlay.click(function(){
			  overlay.hide();
			});
		}
	};

startEvents.init();

})();