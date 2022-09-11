$( function() {
  $( "#accordion" ).accordion({
    heightStyle: "content",
  });
} );

document.addEventListener('DOMContentLoaded', function() {

	$("#accordion").accordion({
    header: "h3",
		collapsible: false,
		active: true,
		autoHeight: false,
		animate: {
			duration: 500,
			easing:'swing'
		}
	});

  document.querySelectorAll('.catalog__art-is').forEach(function(artIs){
    artIs.addEventListener('click' , function(){
      document.querySelector('.catalog__art-box').style.display = "flex";
      document.querySelector('.catalog__unknow-box').style.display = "none";
    });
  });
  document.querySelectorAll('.catalog__art-ist').forEach(function(catalog__acrdnArtIst){
    catalog__acrdnArtIst.addEventListener('click' , function(){
      document.querySelector('.catalog__unknow-box').style.display = "flex";
      document.querySelector('.catalog__art-box').style.display = "none";
    });
  });
  document.querySelectorAll('.catalog__art-btn').forEach(function(artBtn){
    artBtn.addEventListener('click' , function(){
      document.querySelector('.catalog__art-is-nofoc').classList.remove('catalog__art-is-focus');
    })
  });
});

