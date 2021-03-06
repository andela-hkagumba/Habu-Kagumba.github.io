(function() {

	//variables Declaration
    var bodyEl = document.body,
		wrap = bodyEl.querySelector('.wrap'),
		head = bodyEl.querySelector('.head > span.menu-button > i'),
		zeMenu = bodyEl.querySelector('.ze-menu'),
        content = bodyEl.querySelector('.wrap-cover'),
        openbtn = document.getElementById('open-button'),
        closebtn = document.getElementById('close-button'),
        isOpen = false,
		boxy = bodyEl.querySelector('.box'),
		bima = bodyEl.querySelector('.bimatele'),
		cover = bodyEl.querySelector('.cover');

	// hamburger svg
	var svgMenu = Snap('#hamburger'),
		topBar = svgMenu.select('#_x33_'),
		middleBar = svgMenu.select('#_x32_'),
		botBar = svgMenu.select('#_x31_');

	//hammer
	var openMenuz = new Hammer(openbtn);
	var closeMenuz = new Hammer(closebtn);
	var wrapz = new Hammer(wrap);
	var contentz = new Hammer(content);
	var bodyz = new Hammer(bodyEl);

	//functions
    function initEvents() {

		openMenuz.on("tap press", toggleMenu);
		bodyz.on('swiperight', function(ev){
			var target = ev.target;
			if (!isOpen && target !== openbtn){
				toggleMenu();
			}
		});

		if (closebtn) {
			closeMenuz.on('tap press', toggleMenu);
		}

		contentz.on("tap press swipeleft", function(ev){
			var target = ev.target;
			if (isOpen && target !== openbtn){
				toggleMenu();
			}
		});
    }

    function toggleMenu() {
        if (isOpen) {
			openMenu();
			// mAt.play();
            classie.remove(bodyEl, 'showmenu');
        } else {
            classie.add(bodyEl, 'showmenu');
			closeMenu();
			// mAt.reverse();
        }
        isOpen = !isOpen;
    }


	function openMenu() {
		topBar.animate({
			path: "M56.2,47.1H3.8c-1.5,0-2.7-1.2-2.7-2.7s1.2-2.7,2.7-2.7h52.3c1.5,0,2.7,1.2,2.7,2.7S57.7,47.1,56.2,47.1"
		}, 900, mina.elastic);
		middleBar.animate({
			fill: '#FF302C',
			opacity: 1
		}, 900, mina.elastic);
		botBar.animate({
			path: 'M56.2,18.3H3.8c-1.5,0-2.7-1.2-2.7-2.7c0-1.5,1.2-2.7,2.7-2.7h52.3c1.5,0,2.7,1.2,2.7,2.7C58.9,17.1,57.7,18.3,56.2,18.3'
		}, 900, mina.elastic);
	}

	function closeMenu() {
		topBar.animate({
			path: "M46.6,50.4l-37-37c-1.1-1.1-1.1-2.8,0-3.8c1.1-1.1,2.8-1.1,3.8,0l37,37c1.1,1.1,1.1,2.8,0,3.8C49.4,51.5,47.7,51.5,46.6,50.4"
		}, 900, mina.elastic);
		middleBar.animate({
			fill: 'none',
			opacity: 0
		},900,mina.elastic);
		botBar.animate({
			path: 'M50.4,13.4l-37,37c-1.1,1.1-2.8,1.1-3.8,0c-1.1-1.1-1.1-2.8,0-3.8l37-37c1.1-1.1,2.8-1.1,3.8,0C51.5,10.6,51.5,12.3,50.4,13.4'
		}, 900, mina.elastic);
 	}


	function bimateleAnims() {
		//bt logo svg
		var bima_ze_logo = document.querySelector('bima_logo');

		if (bima_ze_logo){
			var btLogo = Snap('#bima_logo'),
				b_t = btLogo.select('#b'),
				t_b = btLogo.select('#t');
		}


		if (bima){
			// animations
			var bimaAdmin = new TimelineLite({paused:true});
			bimaAdmin.add(TweenLite.to(bima, 5, {backgroundPosition:"bottom", ease:Power4.easeInOut}));

			var bimaShow = new TimelineLite({paused:true});
			bimaShow.add(TweenLite.from(bima, 2, {left:'100%', ease:Power4.easeInOut}));

			var scaleIn = new Waypoint({
				element: bima,
				handler: function(direction){
					if (direction === 'down'){
							bimaShow.play();
					} else if(direction === 'up'){
							bimaShow.reverse();
					}
				}, offset: 400
			});
			var waypoint = new Waypoint({
				element: bima,
				handler: function(direction){
					var desklap = document.querySelector('svg#desktop_laptop');
					var tabphone = document.querySelector('svg#tab_phone');
					var graphic = document.querySelector('svg#graphic');
						classie.toggle(desklap, 'animd');
						classie.toggle(tabphone, 'animd');
						classie.toggle(graphic, 'animd');
					// var bimaAdmin =	TweenLite.to(bima, 2, {backgroundPosition:"bottom", ease:Power4.easeInOut});
					if (direction === 'down'/*  && bimaAdmin.reversed() */){
						bimaAdmin.play();
					} else if (direction === 'up') {
						bimaAdmin.reverse();
					}
				}, offset: 100
			});

		}
	}

	function init() {
		initEvents();
		// svgAnims();
		bimateleAnims();
	}

	// run functions

		init();

})();
