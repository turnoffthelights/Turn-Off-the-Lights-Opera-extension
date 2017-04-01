function $(id) { return document.getElementById(id); }
// Install on www.stefanvd.net
// Install on www.turnoffthelights.com
if (window.location.href.match(/http:\/\/(.*stefanvd\.net\/.*|www\.stefanvd\.net\/.*\/.*)/i)|| window.location.href.match(/http:\/\/(.*turnoffthelights\.com\/.*|www\.turnoffthelights\.com\/.*\/.*)/i)){
	if ($('turnoffthelights-opera-install-button')) {
		$('turnoffthelights-opera-install-button').style.display = 'none';
		$('turnoffthelights-opera-thanks-button').style.display = '';
	}
}
var ambientaureaproduct = "https://addons.opera.com/extensions/details/ambient-aurea/";
var datetodayproduct = "https://addons.opera.com/extensions/details/date-today/";
var turnoffthelightsproduct = "https://addons.opera.com/extensions/details/turn-off-the-lights/";
var financetoolbarproduct = "https://addons.opera.com/extensions/details/finance-toolbar/";
var propermenubarproduct = "https://addons.opera.com/extensions/details/proper-menubar/";
var fullscreenproduct = "https://addons.opera.com/extensions/details/full-screen/";
var zoomproduct = "https://addons.opera.com/extensions/details/zoom/";
var donatewebsite = "https://www.turnoffthelights.com/donate.html";
var writereview = "https://addons.opera.com/en/extensions/details/turn-off-the-lights/";
var linkchangelog = "https://www.turnoffthelights.com/extension/operachangelog.html";
var linktranslate = "https://www.turnoffthelights.com/extension/translate.html";
var linksupport = "https://www.turnoffthelights.com/support/";
var linkwelcomepage = "https://www.turnoffthelights.com/extension/operawelcome.html";
var linkuninstall = "https://www.turnoffthelights.com/extension/operauninstalled.html";
var linkguide = "https://www.turnoffthelights.com/extension/operaguide.html";
var linkshare = "https://www.turnoffthelights.com/shareextension.html";
var linkthemedownload = "https://www.turnoffthelights.com/browser/theme.html";
var browsernewtab = "opera://startpage";
var browserstore = "https://addons.opera.com";
var linkyoutube = "https://www.youtube.com/c/turnoffthelights?sub_confirmation=1";