(async function() { 
	'use strict';
function startMe() {

setInterval(function() { 
	var element2Remove = $('.selectbox-item.selector > div:contains("     ")');
	if(element2Remove.length > 0) myReplace();
}, 100);

function myReplace() { 

		document.querySelectorAll('.selectbox-item__title').forEach(function (el){
		  if (el.innerHTML === '     ') {
			el.innerHTML = Lampa.Storage.get('LocalServ_1');
		  }
		});

		document.querySelectorAll('.selectbox-item__title').forEach(function (el){
		  if (el.innerHTML === '       ') {
			el.innerHTML = Lampa.Storage.get('LocalServ_2');
		  }
		});

		document.querySelectorAll('.selectbox-item__title').forEach(function (el){
		  if (el.innerHTML === '          ') {
			el.innerHTML = Lampa.Storage.get('LocalServ_3');
		  }
		var element2Remove = $('.selectbox-item.selector > div:contains("empty")');
		if(element2Remove.length > 0) element2Remove.parent('div').hide();
		});

};		
		

async function searchLocal() {
	Lampa.Storage.set('LocalServ_1', 'empty');
	Lampa.Storage.set('LocalServ_2', 'empty');
	Lampa.Storage.set('LocalServ_3', 'empty');
	
	var startTime = new Date();
	var from = 2, to = 254, j = 0, k = 0;
	if (Lampa.Storage.get('torrserver_subnet')) {k = Lampa.Storage.get('torrserver_subnet')} else {k = 0};
	console.log('Server', 'ÐŸÐ¾Ð´ÑÐµÑ‚ÑŒ: ' + k);
	console.log('Server', 'Ð¡ÐºÐ°Ð½Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð¸Ðµ Ð¾Ñ‚ ' + from + ' Ð´Ð¾ ' + to + ' Ð½Ð°Ñ‡Ð°Ð»Ð¾ÑÑŒ...');

	for (let i = from; i <= to; i++) {
		fetch('http://192.168.' + k + '.' + i + ':8090', { timeout: 1000 })
			.then( function() {
				Lampa.Noty.show('Ð¡ÐµÑ€Ð²ÐµÑ€ Ð½Ð°Ð¹Ð´ÐµÐ½! Ð¡Ð¿Ð¸ÑÐ¾Ðº ÑÐµÑ€Ð²ÐµÑ€Ð¾Ð² Ð¾Ð±Ð½Ð¾Ð²Ð»Ñ‘Ð½!');
				console.log('Server', 'http://192.168.' + k + '.' + i + ':8090'); j = j + 1;
				if (j==1) {Lampa.Storage.set('LocalServ_1', '192.168.' + k + '.' + i)};
				if (j==2) {Lampa.Storage.set('LocalServ_2', '192.168.' + k + '.' + i)};
				if (j==3) {Lampa.Storage.set('LocalServ_3', '192.168.' + k + '.' + i)};
				if (Lampa.Storage.get('useLocal_auto') == true) Lampa.Storage.set('torrserver_url_two', Lampa.Storage.get('LocalServ_1') + ':8090');
					if (Lampa.Storage.get('LocalServ_1') !== 'empty') {
						// Ð·ÐµÐ»Ñ‘Ð½Ñ‹Ð¹
						$('div[data-name="localtorrserv"] > div.settings-param__name').css('color','1aff00')
					} 
				})
			.catch( function() {})
	
		var xhr = new XMLHttpRequest();
		xhr.timeout = 100
		xhr.open("GET", 'http://192.168.' + k + '.' + i + ':8090', true); //Ð°ÑÐ¸Ð½Ñ…Ñ€Ð¾Ð½Ð½Ñ‹Ð¹ Ð·Ð°Ð¿Ñ€Ð¾Ñ
		xhr.send();
		xhr.onload = function() {
			if (xhr.status == 200) {
				console.log('Server', 'XHR - http://192.168.' + k + '.' + i + ':8090');
			}
		}
	}
	
	var endTime = new Date();
	var totaltime = endTime - startTime;
	console.log('Server', 'Ð’Ñ€ÐµÐ¼Ñ ÑÐºÐ°Ð½Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð¸Ñ: ' + totaltime + ' ms');
	return(j);
	
};

async function proxyAwait() {
	var JJ = await searchLocal()
	return JJ
}

var icon_add_local_server = '<div class="settings-folder" style="padding:0!important"><div style="width:1.8em;height:1.3em;padding-right:.5em"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#00ff11"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.048"></g><g id="SVGRepo_iconCarrier"> <path d="M18.5 18.5L22 22" stroke="#ffd505" stroke-width="2.4" stroke-linecap="round"></path> <path d="M9 11.5H11.5M11.5 11.5H14M11.5 11.5V14M11.5 11.5V9" stroke="#00ff11" stroke-width="2.4" stroke-linecap="round"></path> <path d="M6.75 3.27093C8.14732 2.46262 9.76964 2 11.5 2C16.7467 2 21 6.25329 21 11.5C21 16.7467 16.7467 21 11.5 21C6.25329 21 2 16.7467 2 11.5C2 9.76964 2.46262 8.14732 3.27093 6.75" stroke="#ffd505" stroke-width="2.4" stroke-linecap="round"></path> </g></svg></div><div style="font-size:1.3em">Ð›Ð¾ÐºÐ°Ð»ÑŒÐ½Ñ‹Ð¹ TorrServer</div></div>'

/* ÐšÐ¾Ð¼Ð¿Ð¾Ð½ÐµÐ½Ñ‚ */
		Lampa.Settings.listener.follow('open', function (e) {
					if (e.name == 'main') {
						Lampa.SettingsApi.addComponent({
                            component: 'add_local_server',
							name: 'checker'
						});
						setTimeout(function() {
							$('div[data-component="add_local_server"]').remove();
						}, 0);
					}
		});
	/* Ð“Ð¾Ð»Ð¾Ð²Ð½Ð¾Ð¹ Ñ€Ð°Ð·Ð´ÐµÐ» */	
		Lampa.SettingsApi.addParam({
					component: 'server',
					param: {
						name: 'add_local_server',
						type: 'static',
						default: true
					},
					field: {
						name: icon_add_local_server
					},
					onRender: function(item) {
						setTimeout(function() {
							if($('div[data-static="true"]').length > 1) item.hide();
							//$('.settings-param__name', item).css('color','f3d900');
							$('div[data-static="true"]').insertAfter('div[data-name="torrserver_use_link"]');
						}, 0);
						item.on('hover:enter', function () {
							Lampa.Settings.create('add_local_server');
							Lampa.Controller.enabled().controller.back = function(){
								Lampa.Settings.create('server');
							}
						});
					}
		}); 
	/* Ð”Ð¾Ñ‡ÐµÑ€Ð½Ð¸Ð¹ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚ Ð¢Ñ€Ð¸Ð³Ð³ÐµÑ€ */	
		Lampa.SettingsApi.addParam({
					component: 'add_local_server',
					param: {
						name: 'useLocal',
						type: 'trigger',
						class: 'hide',
						default: false
					},
					field: {
						name: 'Ð’ÐºÐ»ÑŽÑ‡Ð¸Ñ‚ÑŒ Ð¿Ð¾Ð¸ÑÐº',
						description: 'ÐŸÐ¾Ð¸ÑÐº Ð»Ð¾ÐºÐ°Ð»ÑŒÐ½Ð¾Ð³Ð¾ Ð¢Ð¾Ñ€Ñ€Ð¡ÐµÑ€Ð²ÐµÑ€Ð°'
					},
					onChange: function(value) {
							if (Lampa.Storage.get('useLocal') == false) {$('div[data-name="search_button"]').hide()} else {$('div[data-name="search_button"]').show()};
							if (Lampa.Storage.get('useLocal') == false) {$('div[data-name="localtorrserv"]').hide()} else {$('div[data-name="localtorrserv"]').show()};
							if (Lampa.Storage.get('useLocal') == false) {$('div[data-name="torrserver_subnet"]').hide()} else {$('div[data-name="torrserver_subnet"]').show()};
							if (Lampa.Storage.get('useLocal') == false) {$('div[data-name="useLocal_auto"]').hide()} else {$('div[data-name="useLocal_auto"]').show()};
					},
					onRender: function (item) {//$('.settings-param__name', item).css('color','f3d900');
						setTimeout(function() {
							if (Lampa.Storage.get('useLocal') == false) {$('div[data-name="search_button"]').hide()} else {$('div[data-name="search_button"]').show()};
							if (Lampa.Storage.get('useLocal') == false) {$('div[data-name="localtorrserv"]').hide()} else {$('div[data-name="localtorrserv"]').show()};
							if (Lampa.Storage.get('useLocal') == false) {$('div[data-name="torrserver_subnet"]').hide()} else {$('div[data-name="torrserver_subnet"]').show()};
							if (Lampa.Storage.get('useLocal') == false) {$('div[data-name="useLocal_auto"]').hide()} else {$('div[data-name="useLocal_auto"]').show()};
						}, 0);
					}
		});
	/* Ð”Ð¾Ñ‡ÐµÑ€Ð½Ð¸Ð¹ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚ ÐŸÑƒÐ½ÐºÑ‚Ñ‹*/
	Lampa.SettingsApi.addParam({
					component: 'add_local_server',
					param: {
						name: 'search_button_indicator',
						type: 'button'
					},
					field: {
						name: 'ÐŸÐ¾Ð¸ÑÐº ÑÐµÑ€Ð²ÐµÑ€Ð°',
						description: ''
					},
					onRender: function (item) {
						setTimeout(function() {
							if($('div[data-name="search_button_indicator"]').length > 1) item.hide();
							$('.settings-param__name', item).css('color','f3d900');
							$('div[data-name="search_button_indicator"]').insertAfter('div[data-name="torrserver_use_link"]');
							item.hide()
						}, 0);
					}
	});
	
	Lampa.SettingsApi.addParam({
					component: 'add_local_server',
					param: {
						name: 'search_button',
						type: 'button'
					},
					field: {
						name: 'Ð˜ÑÐºÐ°Ñ‚ÑŒ ÑÐµÑ€Ð²ÐµÑ€',
						description: 'ÐÐ°Ð¶Ð¼Ð¸Ñ‚Ðµ Ð´Ð»Ñ Ð½Ð°Ñ‡Ð°Ð»Ð° Ð¿Ð¾Ð¸ÑÐºÐ° ÑÐµÑ€Ð²ÐµÑ€Ð°'
					},
					onRender: function (item) {
						setTimeout(function() {
							if($('div[data-name="search_button"]').length > 1) item.hide();
							$('.settings-param__name', item).css('color','f3d900');
							$('div[data-name="search_button"]').insertAfter('div[data-name="torrserver_use_link"]');
						}, 0);
							item.on('hover:enter', function () {
								item.hide();
								$('div[data-name="localtorrserv"]').hide();
								//var my_insert = '<div id="my_insert" class="settings-param-title" style="text-align:left;"><span>ÐŸÐ¾Ð¸ÑÐº ÑÐµÑ€Ð²ÐµÑ€Ð°...</span></div>';
								//$('div[data-name="useLocal"]').append(my_insert);
								$('div[data-name="search_button_indicator"]').show();
								var loader = $('<div class="broadcast__scan" style="margin: 1em 0 0 0"><div></div></div>');
								$('div[data-name="search_button_indicator"]').append(loader);
								proxyAwait();
							setTimeout(function() { 
								if (Lampa.Storage.get('LocalServ_1') == 'empty') {
									Lampa.Noty.show('Ð¡ÐµÑ€Ð²ÐµÑ€Ñ‹ Ð½Ðµ Ð¾Ð±Ð½Ð°Ñ€ÑƒÐ¶ÐµÐ½Ñ‹');
									// Ð·ÐµÐ»Ñ‘Ð½Ñ‹Ð¹
									$('div[data-name="localtorrserv"] > div.settings-param__name').css('color','ff4d5f')
									}
								//$('#my_insert').remove();
								$('div[data-name="search_button_indicator"]').hide(); loader.remove();
								item.show();
								$('div[data-name="localtorrserv"]').show();
							},4000);
							});
					}
	});
	
	Lampa.SettingsApi.addParam({
					component: 'add_local_server',
					param: {
						name: 'localtorrserv',
						type: 'select',
						values: {
						   0: 'ÐÐµ Ð²Ñ‹Ð±Ñ€Ð°Ð½',
						   1: '     ',	// 5
						   2: '       ', // 7
						   3: '          ' //
						},
						default: 0
					},
					field: {
						name: 'Ð›Ð¾ÐºÐ°Ð»ÑŒÐ½Ñ‹Ð¹ TorrServer (ÑÐ¿Ð¸ÑÐ¾Ðº)',
						description: 'ÐÐ°Ð¶Ð¼Ð¸Ñ‚Ðµ Ð´Ð»Ñ Ð²Ñ‹Ð±Ð¾Ñ€Ð° ÑÐµÑ€Ð²ÐµÑ€Ð° Ð¸Ð· ÑÐ¿Ð¸ÑÐºÐ° Ð½Ð°Ð¹Ð´ÐµÐ½Ð½Ñ‹Ñ…: Ð¿ÐµÑ€ÐµÐ¿Ð¸ÑˆÐµÑ‚ Ð·Ð½Ð°Ñ‡ÐµÐ½Ð¸Ðµ Ð² Ð´Ð¾Ð¿Ð¾Ð»Ð½Ð¸Ñ‚ÐµÐ»ÑŒÐ½Ð¾Ð¹ ÑÑÑ‹Ð»ÐºÐµ'
					},
					onChange: function (value) {
						if (value == '0') Lampa.Storage.set('torrserver_url_two', '');
						if (value == '1') Lampa.Storage.set('torrserver_url_two', Lampa.Storage.get('LocalServ_1') + ':8090');
						if (value == '2') Lampa.Storage.set('torrserver_url_two', Lampa.Storage.get('LocalServ_2') + ':8090');
						if (value == '3') Lampa.Storage.set('torrserver_url_two', Lampa.Storage.get('LocalServ_3') + ':8090');
						Lampa.Storage.set('torrserver_use_link', 'two');
						Lampa.Settings.update();
					},
					onRender: function (item) {
						setTimeout(function() {
							if($('div[data-name="localtorrserv"]').length > 1) item.hide();
							//$('div[data-name="localtorrserv"] > div.settings-param__name').css('color','1aff00')
							//if (Lampa.Storage.get('LocalServ_1') == 'empty') {$('.settings-param__name', item).css('color','1aff00')} else {$('.settings-param__name', item).css('color','ff001a')}
							$('.settings-param__name', item).css('color','f3d900');
							$('div[data-name="localtorrserv"]').insertAfter('div[data-name="torrserver_use_link"]');
						}, 0);
					},
					onBack: function onBack() {
						Lampa.Settings.update();
					}
	});

	Lampa.SettingsApi.addParam({
					component: 'add_local_server',
					param: {
						name: 'torrserver_subnet',
						type: 'select',
						values: {
						   0: '192.168.0.*',
						   1: '192.168.1.*',
						   2: '192.168.2.*',
						   3: '192.168.3.*',
						   8: '192.168.8.*',
						   10: '192.168.10.*',
						   31: '192.168.31.*',
						   50: '192.168.50.*',
						   88: '192.168.88.*',
						   100: '192.168.100.*',
						   243: '192.168.243.*',
						   //999: 'Ð¯ ÐÐµ Ñ€Ð°Ð·Ð±Ð¸Ñ€Ð°ÑŽÑÑŒ'
						},
						default: 1
					},
					field: {
						name: 'Ð’Ð°ÑˆÐ° Ð¿Ð¾Ð´ÑÐµÑ‚ÑŒ',
						description: 'Ð’Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ Ð¸Ð· ÑÐ¿Ð¸ÑÐºÐ° Ð´Ð»Ñ ÑƒÑÐºÐ¾Ñ€ÐµÐ½Ð¸Ñ Ð¿Ð¾Ð¸ÑÐºÐ°'
					},
					onChange: function (value) {
						Lampa.Noty.show('ÐŸÐ¾Ð²Ñ‚Ð¾Ñ€Ð¸Ñ‚Ðµ Ð¿Ð¾Ð¸ÑÐº ÑÐµÑ€Ð²ÐµÑ€Ð° Ð¿Ð¾ÑÐ»Ðµ ÑÐ¼ÐµÐ½Ñ‹ Ð¿Ð¾Ð´ÑÐµÑ‚Ð¸!');
						if (value == '0') Lampa.Storage.set('torrserver_subnet', '0');
						if (value == '1') Lampa.Storage.set('torrserver_subnet', '1');
						if (value == '2') Lampa.Storage.set('torrserver_subnet', '2');
						if (value == '3') Lampa.Storage.set('torrserver_subnet', '3');
						if (value == '8') Lampa.Storage.set('torrserver_subnet', '8');
						if (value == '10') Lampa.Storage.set('torrserver_subnet', '10');
						if (value == '31') Lampa.Storage.set('torrserver_subnet', '31');
						if (value == '50') Lampa.Storage.set('torrserver_subnet', '50');
						if (value == '88') Lampa.Storage.set('torrserver_subnet', '88');
						if (value == '100') Lampa.Storage.set('torrserver_subnet', '100');
						if (value == '243') Lampa.Storage.set('torrserver_subnet', '243');
						//if (value == '999') Lampa.Storage.set('torrserver_subnet', '');
					},
					onRender: function (item) {
						setTimeout(function() {
							if($('div[data-name="torrserver_subnet"]').length > 1) item.hide();
							//$('.settings-param__name', item).css('color','f3d900');
							$('div[data-name="torrserver_subnet"]').insertAfter('div[data-name="localtorrserv"]');
						}, 0);
					}
	});
	/* Ð”Ð¾Ñ‡ÐµÑ€Ð½Ð¸Ð¹ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚ ÐŸÐ¾Ð´ÑÑ‚Ð°Ð½Ð¾Ð²ÐºÐ° */	
		Lampa.SettingsApi.addParam({
					component: 'add_local_server',
					param: {
						name: 'useLocal_auto',
						type: 'trigger',
						default: false
					},
					field: {
						name: 'ÐŸÐ¾Ð´ÑÑ‚Ð°Ð²Ð»ÑÑ‚ÑŒ Ð°Ð²Ñ‚Ð¾Ð¼Ð°Ñ‚Ð¸Ñ‡ÐµÑÐºÐ¸',
						description: 'Ð’Ð¿Ð¸ÑÑ‹Ð²Ð°ÐµÑ‚ Ð² Ð´Ð¾Ð¿Ð¾Ð»Ð½Ð¸Ñ‚ÐµÐ»ÑŒÐ½ÑƒÑŽ ÑÑÑ‹Ð»ÐºÑƒ'
					},
					onChange: function(value) {
					},
					onRender: function (item) {//$('.settings-param__name', item).css('color','f3d900');
					}
		});

/* METRIKA */
			(function(m, e, t, r, i, k, a) {
				m[i] = m[i] || function() {
					(m[i].a = m[i].a || []).push(arguments)
				};
				m[i].l = 1 * new Date();
				for(var j = 0; j < document.scripts.length; j++) {
					if(document.scripts[j].src === r) {
						return;
					}
				}
				k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
			})
			(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
			ym(95034372, "init", {
				clickmap: true,
				trackLinks: true,
				accurateTrackBounce: true
			});
			var METRIKA = '<noscript><div><img src="https://mc.yandex.ru/watch/95034372" style="position:absolute; left:-9999px;" alt="" /></div></noscript>';
			$('body').append(METRIKA);
/* End METRIKA */

}

/* Ð•ÑÐ»Ð¸ Ð²ÑÑ‘ Ð³Ð¾Ñ‚Ð¾Ð²Ð¾ */
if(window.appready) startMe();
	else {
		Lampa.Listener.follow('app', function(e) {
			if(e.type == 'ready') {
				startMe();
			}
		});
	}

 })(); 

