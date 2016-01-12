(function (adConfig) {
	var adName = adConfig.adName;
	var adImpression = adConfig.adImpression;
	var adBanner = adConfig.adBanner;
	var adCta = adConfig.adCta;
	var adAssets = adConfig.adAssets;
	var adScripts = adConfig.adScripts;
	var adStyles = adConfig.adStyles;

	function init() {
		loadAssets(function () {
			loadScripts(function () {
				loadStyles(function () {
					main();
				})
			})
		});
	}

	function loadAssets(callback) {
		var successCount = 0;
			var failureCount = 0;

			for (var i = 0; i < adAssets.length; i+=1) {
				var image = new Image();
				
				image.addEventListener('load', function () {
					successCount += 1;
					if (successCount + failureCount === adAssets.length) {
						callback();
					}
				});

				image.addEventListener('error', function () {
					failureCount += 1;
					if (successCount + failureCount === adAssets.length) {
						callback();
					}
				});
				
				image.src = adAssets[i];
			}
	}

	function loadScripts(callback) {
		var successCount = 0;
		var failureCount = 0;

		for (var i = 0; i < adScripts.length; i+=1) {
			var script = document.createElement('script');
			script.src = adScripts[i];
			
			script.addEventListener('load', function () {
				successCount += 1;
				if (successCount + failureCount === adScripts.length) {
					callback();
				}
			});

			script.addEventListener('error', function () {
				failureCount += 1;
				if (successCount + failureCount === adScripts.length) {
					callback();
				}
			});
			
			document.body.appendChild(script);
		}
	}

	function loadStyles(callback) {
		var successCount = 0;
		var failureCount = 0;

		for (var i = 0; i < adStyles.length; i+=1) {
			var style = document.createElement('link');
			style.type = 'text/css';
			style.rel = 'stylesheet';
			style.href = adStyles[i];
			
			style.addEventListener('load', function () {
				successCount += 1;
				if (successCount + failureCount === adStyles.length) {
					callback();
				}
			});

			style.addEventListener('error', function () {
				failureCount += 1;
				if (successCount + failureCount === adStyles.length) {
					callback();
				}
			});
			
			document.body.appendChild(style);
		}
	}

	init();
})(window.adConfig);