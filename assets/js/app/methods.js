define (['jquery', 'ghostHunter'], function($){
	
	var methods = {};
	
	methods.loading = function(){
    $(function(){
	    $(".status").fadeOut();
	    $(".preloader").delay(1000).fadeOut("slow");
    });
	}

	methods.userAgentInit = function(){
		var agente = navigator.userAgent.toLowerCase();
		document.documentElement.setAttribute('data-useragent', navigator.userAgent);
	}

	methods.displayMenu = function(){
  	$('#js_icon_menu').on('click', function(e) {
  		e.preventDefault();
  		$('#js_box_main_menu').css({
  			display: 'block'
  		});
  		$('#js_box_main_menu').addClass('slideInRight').removeClass('fadeOutRight');
  	});
  }

  methods.closeMenu = function(){
  	$('#js_icon_cerrar').on('click', function(e) {
  		e.preventDefault();
  		$('#js_box_main_menu').removeAttr('style');
      $('#js_box_main_menu').addClass('fadeOutRight').removeClass('slideInRight');
  	});
    $('#js_box_main_menu').on('click', function(e) {
      if(e.target == this){
      	$(this).addClass('fadeOutRight').removeClass('slideInRight');
      }
    });
  }

	methods.ghostHunter = function(){
		$('#js_campo_buscador').ghostHunter({
			    results             : '#js_resultados',
			    onKeyUp             : !0,
			    rss                 : '/rss.xml',
			    displaySearchInfo   : true
			  });
			  $('#js_campo_buscador').on('keyup', function() {
			  	var $caja_buscar = $('#js_campo_buscador').val().length;
				  if($caja_buscar > 0){
			  		$('#js_lista_articulos').css({
			  			display: 'none'
			  		});
				  }
				  if($caja_buscar == 0){
				  	$('#js_lista_articulos').css({
		  				display: 'block'
		  			});
				  }
			  });
	}

	methods.politicaCookies = function(){
		function setCookie(cname,cvalue,exdays) {
		  var d = new Date();
		  d.setTime(d.getTime() + (exdays*24*60*60*1000));
		  var expires = "expires=" + d.toGMTString();
		  document.cookie = cname+"="+cvalue+"; "+expires + "; path=/";
		}

		function getCookie(cname) {
		  var name = cname + "=";
		  var ca = document.cookie.split(';');
		  for(var i=0; i<ca.length; i++) {
		      var c = ca[i];
		      while (c.charAt(0)==' ') c = c.substring(1);
		      if (c.indexOf(name) == 0) {
		          return c.substring(name.length, c.length);
		      }
		  }
		  return "";
		}

		var user=getCookie("_01lr");
		if (user == "") {
		  $('#js_barra_aceptacion_cookie').css({
		    display: 'block'
		  });
		}
		$('#js_btn_cookie').on('click', function(e) {
		  e.preventDefault();
		  user = '01luisrene';
		  if (user != "" && user != null) {
		    setCookie("_01lr", user, 30);
		    $('#js_barra_aceptacion_cookie').css({
		      display: 'none'
		    });
		    console.log("cookie creada: " + user);
		   }
		});
  }

  methods.botonUp = function(){
		$(window).scroll(function(){
		  if($(this).scrollTop() > 300){
		    $("#js_up").show(); //fadeIn
		  }else{
		    $("#js_up").fadeOut(); //fadeOut
		  }
		});
		$("#js_up i").on('click', function (e) {
		  e.preventDefault();
		    $("body,html").animate({
		    scrollTop: 0
		  },700);
		  return false;
		});
  }

	methods.imprimirCurriculum = function(){
		$('#js_imprimir_curriculum').on('click', function(e) {
			e.preventDefault();
			window.print();
			return false;
		});
	}

	methods.disqus = function (newIdentifier, newUrl, newTitle) {
		if ($('#disqus_thread').length) {
			if (typeof DISQUS === 'undefined') {
			  /* * * CONFIGURATION VARIABLES * * */
			  var disqus_shortname = '01luisrenemas'; // required: replace example with your forum shortname
			  var disqus_identifier = newIdentifier;
			  var disqus_url = newUrl;
			  var disqus_title = newTitle;

			  /* * * DON'T EDIT BELOW THIS LINE * * */
			  (function() {
			      var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
			      dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
			      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
			 	})();
			} else {
			    DISQUS.reset({
		        reload: true,
		        config: function () {
	            this.page.identifier = newIdentifier;
	            this.page.url = newUrl;
	            this.page.title = newTitle;
		        }
			    });
				}
			}
	}

	methods.cookieNewsletter = function(){
		function newsletter(){
      $('#js_box_suscripcion').css({
        display: 'block'
      });
    }
		function setCookie(cname,cvalue,exdays) {
		    var d = new Date();
		    d.setTime(d.getTime() + (exdays*24*60*60*1000));
		    var expires = "expires=" + d.toGMTString();
		    document.cookie = cname+"="+cvalue+"; "+expires + "; path=/";
		}

		function getCookie(cname) {
		    var name = cname + "=";
		    var ca = document.cookie.split(';');
		    for(var i=0; i<ca.length; i++) {
		        var c = ca[i];
		        while (c.charAt(0)==' ') c = c.substring(1);
		        if (c.indexOf(name) == 0) {
		            return c.substring(name.length, c.length);
		        }
		    }
		    return "";
		}

		var user=getCookie("_nl");
		if (user == "") {
		    setTimeout(function(){ newsletter() }, 15000);
		}
		$('.js_close_suscripcion').on('click', function() {
		  user = 'newsletter';
		  if (user != "" && user != null) {
		    setCookie("_nl", user, .0417);
		    $('#js_box_suscripcion').hide();
		    console.log("cookie creada: " + user);
		   }
		});

		$('.js_boton_suscripcion').on('click', function() {
		  user = 'newsletter';
		  if (user != "" && user != null) {
		    setCookie("_nl", user, 15);
		    setTimeout(function(){ $('#js_box_suscripcion').hide() }, 2000);
		    console.log("cookie creada: " + user);
		   }
		});
	}

	return methods;
});