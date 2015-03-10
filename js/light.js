//================================================
/*

Turn Off the Lights
The entire page will be fading to dark, so you can watch the videos as if you were in the cinema.
Copyright (C) 2015 Stefan vd
www.stefanvd.net
www.turnoffthelights.com

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.


To view a copy of this license, visit http://creativecommons.org/licenses/GPL/2.0/

*/
//================================================

function $(id) { return document.getElementById(id); }
// settings
var default_opacity = null, suggestions = null, playlist = null, videoheadline = null, flash = null, head = null, infobar = null, likebutton = null, sharebutton = null, viewcount = null, addvideobutton = null, likebar = null, mousespotlighto = null, mousespotlightc = null, mousespotlighta = null, lightcolor = null, lightimagea = null, lightimage = null, interval = null, fadein = null, fadeout = null, readera = null, readerlargestyle = null, mousespotlightt = null, password = null, enterpassword = null, noflash = null, hardflash = null, dynamic = null, dynamic1 = null, dynamic2 = null, dynamic3 = null, dynamic4 = null, dynamic5 = null, hoveroptiondyn5 = null, blur = null, cinemaontop = null, slideeffect = null, lightimagelin = null, linearsq = null, colora = null, intervallina = null, colorb = null, intervallinb = null;
// html elements used
var div = null, video = null, span = null, iframe = null, embed = null, object = null, a = null, img = null;

/////////// Option page settings
chrome.storage.local.get(['suggestions', 'playlist', 'videoheadline', 'head', 'infobar', 'likebutton', 'sharebutton', 'viewcount', 'addvideobutton', 'likebar'], function(response){
suggestions = response['suggestions'];
playlist = response['playlist'];
videoheadline = response['videoheadline'];
head = response['head'];
infobar = response['infobar'];
likebutton = response['likebutton'];
sharebutton = response['sharebutton'];
viewcount = response['viewcount'];
addvideobutton = response['addvideobutton'];
likebar = response['likebar'];

// detect if not higher then z-index 1000, then make it push down
// search for the z-index, if found something give it 'auto'
// var q = document.getElementsByTagName('*');
// for(var i = 0; i < q.length; i++ ) {
// if (q[i].currentStyle){var y = q[i].currentStyle["z-Index"];}
// else if (window.getComputedStyle){var y = document.defaultView.getComputedStyle(q[i],null).getPropertyValue("z-Index");}
// if (y >= 1000){q[i].style.zIndex = 'auto';}
// }


// detect if no -webkit-transform:translateZ(0) used, if so
// remove this and place the 'none' value
var w = document.getElementsByTagName('*');
for(var i = 0; i < w.length; i++ ) {
if (w[i].currentStyle){var t = w[i].currentStyle["-webkit-transform"] ||
         w[i].currentStyle["-moz-transform"] ||
         w[i].currentStyle["-ms-transform"] ||
         w[i].currentStyle["-o-transform"] ||
         w[i].currentStyle["transform"]
}
else if (window.getComputedStyle){
var st = document.defaultView.getComputedStyle(w[i], null);
var t = st.getPropertyValue("-webkit-transform") ||
         st.getPropertyValue("-moz-transform") ||
         st.getPropertyValue("-ms-transform") ||
         st.getPropertyValue("-o-transform") ||
         st.getPropertyValue("transform")
}
if (t == "matrix(1, 0, 0, 1, 0, 0)"){ w[i].style.webkitTransform = 'none'; w[i].style.MozTransform = 'none'; w[i].style.msTransform = 'none'; w[i].style.OTransform = 'none'; w[i].style.transform = 'none';}
}

// YouTube options
if (window.location.href.match(/((http:\/\/(.*youtube\.com\/.*))|(https:\/\/(.*youtube\.com\/.*)))/i)){

// YouTube video OK
var watch7 = $('watch7');
if(watch7)$('watch7').style.zIndex = 'auto';

var watch7main = $('watch7-main');
if(watch7main)$('watch7-main').style.zIndex = 'auto';

var watch7content = $('watch7-content');
if(watch7content)$('watch7-content').style.zIndex = 'auto';

/* temp fix watch7-video */
var watch7video = $('watch7-video');
if(watch7video)$('watch7-video').style.zIndex = 'auto';

// Turn Off the Lights path detection and set to auto zindex
// this to make sure later YouTube doesn't change again the website layout
var path = [];
var el = document.getElementById('movie_player');
if(el){
do {
    var qq = path.unshift(el.nodeName);
    if (el.currentStyle) { 
        var yta = qq.currentStyle["z-Index"]; 
    }
    else {
        var yta = document.defaultView.getComputedStyle(el,null).getPropertyValue("z-Index");
    }
	if (yta == "auto"){}
	else{el.style.zIndex = 'auto';}
} while ((el.nodeName.toLowerCase() != 'html') && (el = el.parentNode))
}

// Shows YouTube Suggestions
if(suggestions == 'true'){
var watch7sidebar = $('watch7-sidebar');  // new youtube watch7
if(watch7sidebar){$('watch7-sidebar').style.zIndex = '1000';}

var watchsidebar = $('watch-sidebar');
if(watchsidebar){$('watch-sidebar').style.zIndex = '1000';}
}

// Shows YouTube playlist
if(playlist == 'true'){
var watchappbarplaylist = $('watch-appbar-playlist');
if(watchappbarplaylist){$('watch-appbar-playlist').style.zIndex = 1001;}
}

// Shows video title
if(videoheadline == 'true'){
var watchheadlinetitle = $('watch-headline-title');  // new youtube watch7
if(watchheadlinetitle){$('watch-headline-title').style.zIndex = 1001;$('watch-headline-title').style.position = 'relative';}

span = document.getElementsByTagName('span');  // new youtube watch7
for(var i = 0; i < span.length; i++ ) 
{if(span[i].className == (' yt-uix-expander-head') ) {span[i].style.color = 'white';}}

var eowtitle = $('eow-title');
if(eowtitle){$('eow-title').style.color = 'white';$('eow-title').style.zIndex = 1001;$('eow-title').style.position = 'relative';}
}

// Shows YouTube Channel name
if(head == 'true'){
var watch7userheader = $('watch7-user-header');
if(watch7userheader){$('watch7-user-header').style.zIndex = 1000;$('watch7-user-header').style.position = 'relative';}

div = document.getElementsByTagName('a'); 
for(var i = 0; i < div.length; i++ )
{if(div[i].className == (' yt-uix-sessionlink     spf-link  g-hovercard')) {div[i].style.color = 'white';}}
}

// Shows Infobar
if(infobar == 'true'){
var watchdescription = $('watch-description');
if(watchdescription){$('watch-description').style.zIndex = 1000;$('watch-description').style.background = 'white';}
}

// Shows like and unlike buttons
if(likebutton == 'true'){
var watchdislike = $('watch-dislike'); // new youtube watch7
if(watchdislike){$('watch-dislike').style.zIndex = 1000;$('watch-dislike').style.position = 'relative';$('watch-dislike').style.background = 'white';} // new youtube watch7

var watchlike = $('watch-like');
if(watchlike){$('watch-like').style.zIndex = 1000;$('watch-like').style.position = 'relative';$('watch-like').style.background = 'white';}

var watchunlike = $('watch-unlike');
if(watchunlike){$('watch-unlike').style.zIndex = 1000;$('watch-unlike').style.position = 'relative';}
}

// Shows share buttons
if(sharebutton == 'true'){
var elems = document.getElementsByTagName('button'), i;
for (i in elems) {if((' ' + elems[i].className + ' ').indexOf('action-panel-trigger-share') > -1) {elems[i].style.zIndex = 1001;elems[i].style.position = "relative";elems[i].style.background = "white";}}
}

// Shows view count
if(viewcount == 'true'){
div = document.getElementsByTagName('div'); 
for(var i = 0; i < div.length; i++ )
{if(div[i].className == ('watch-view-count')) {div[i].style.color = 'white';div[i].style.zIndex = 1001;}}
}

// Shows add button
if(addvideobutton == 'true'){
var elems = document.getElementsByTagName('button'), i;
for (i in elems) {if((' ' + elems[i].className + ' ').indexOf('action-panel-trigger-addto') > -1) {elems[i].style.zIndex = 1001;elems[i].style.position = "relative";elems[i].style.background = "white";}}
}

// Shows like/dislike bar
if(likebar == 'true'){
div = document.getElementsByTagName('div');  // new youtube watch7
for(var i = 0; i < div.length; i++ )
{if(div[i].className == ('video-extras-sparkbars')) {div[i].style.zIndex = 1001;div[i].style.position = 'relative';}}

span = document.getElementsByTagName('span');  // new youtube watch7
for(var i = 0; i < span.length; i++ )
{if(span[i].className == ('video-extras-likes-dislikes')) {span[i].style.zIndex = 1001;span[i].style.position = 'relative';}}

var watchdescription = $('watch-description');
if(watchdescription){$('watch-description').style.zIndex = 'auto';}

div = document.getElementsByTagName('div'); 
for(var i = 0; i < div.length; i++ )
{if(div[i].className == ('watch-sparkbars')) {div[i].style.zIndex = 1001;div[i].style.position = 'relative';}}

span = document.getElementsByTagName('span'); 
for(var i = 0; i < span.length; i++ )
{if(span[i].className == ('watch-likes-dislikes')) {span[i].style.zIndex = 1001;span[i].style.position = 'relative';}}
}

// MAC & PC & LINUX
// HTML5

// show YouTube HTML5 annotation
div = document.getElementsByTagName('div'); 
for(var i = 0; i < div.length; i++ )
{if(div[i].className == ('video-annotations iv-module')) {div[i].style.zIndex = 1001;}}

// channel page
var c4player = $('c4-player');
if(c4player){$('c4-player').style.zIndex = 1001;$('c4-player').style.visibility = 'visible';$('c4-player').style.position = 'relative';}

// new YouTube october 2013
var mastheadpositioner = $('masthead-positioner');
if(mastheadpositioner){$('masthead-positioner').style.zIndex = '10';}

var appbarguidemenu = $('appbar-guide-menu');
if(appbarguidemenu){$('appbar-guide-menu').style.zIndex = '10';}

var appbarguideiframemask = $('appbar-guide-iframe-mask');
if(appbarguideiframemask){$('appbar-guide-iframe-mask').style.zIndex = '-1';}

// short and cleaner engine 2014
var data = [['movie_player',1000],['movie_player-html5',1000],['watch-player',1000],['player-api',1001],['html5-player',1001],['video-player',1001],['user_fullwidth_gadget',1001]];
for (var conf in data) {
        var temp = document.getElementById(data[conf][0]);
        if (temp) {
                if (conf[0] == 'player-api') {
                        temp.style.overflow = 'visible';
                }
                temp.style.zIndex = data[conf][1];
                temp.style.visibility = 'visible';
                temp.style.position = 'relative';
        }
}

var divs = document.getElementsByTagName('div');
for (var div in divs) {
        var c = divs[div].className;
        if (c == 'video-controls' || c == 'html5-video-controls' || c == 'html5-video-controls ytp-block-autohide' || c == 'html5-video-controls disabled-control-seek') {
                divs[div].style.zIndex = 1001;
                divs[div].style.visibility = 'visible';
        }
}

// YouTube show sub title
var subtitel = document.getElementsByTagName('div');
for(var i = 0; i < subtitel.length; i++ )
{if(subtitel[i].className == ('ytp-player-content ytp-subtitles-player-content')) {subtitel[i].style.zIndex = 1001;subtitel[i].style.pointerEvents = 'none';}}

var ytbezel = document.getElementsByTagName('div');
for(var i = 0; i < ytbezel.length; i++ )
{if(ytbezel[i].className == ('html5-bezel html5-center-overlay')) {ytbezel[i].style.zIndex = 1001;}}

// YouTube still showing the skip button for the ads
var admedia = document.getElementsByTagName('div');
for(var i = 0; i < admedia.length; i++ )
{if(admedia[i].className == ('ad-container ad-container-single-media-element')) {admedia[i].style.zIndex = 1001;}}

var admediaanno = document.getElementsByTagName('div');
for(var i = 0; i < admediaanno.length; i++ )
{if(admediaanno[i].className == ('ad-container ad-container-single-media-element-annotations')) {admediaanno[i].style.zIndex = 1001;}}

// show HTML5 controls
var ytpprogress = document.getElementsByTagName('div');
for(var i = 0; i < ytpprogress.length; i++ )
{if(ytpprogress[i].className == ('ytp-progress-bar-container')) {ytpprogress[i].style.zIndex = 1005;}}

} // end YouTube
});

/////////// leanbackplayer player support
// controls way
var lbpcontrols = $('lbp_controls');
if(lbpcontrols){$('lbp_controls').style.cssText = 'z-index:1002 !important';}

/////////// API for Website Developer
// id way
var websiteidapi = $('dont-turn-off-the-lights');
if(websiteidapi){$('dont-turn-off-the-lights').style.cssText = 'visibility:visible !important; position:relative !important; z-index:1000 !important';}

// class way
var websiteclassapi = document.getElementsByClassName('dont-turn-off-the-lights');
for(var i = 0; i < websiteclassapi.length; i++ ){websiteclassapi[i].cssText = 'visibility:visible !important; position:relative !important; z-index:1000 !important';}

/////////// HTML5 video
// default html5 video detection
video = document.getElementsByTagName('video');
for(var i = 0; i < video.length; i++) {

var path = [];
var el = video[i];
do {
    var qq = path.unshift(el.nodeName);
    if (el.currentStyle) { 
        var yta = qq.currentStyle["z-Index"]; 
    }
    else {
        var yta = document.defaultView.getComputedStyle(el,null).getPropertyValue("z-Index");
    }
	if (yta == "auto"){}
	else{el.style.zIndex = 'auto';}
} while ((el.nodeName.toLowerCase() != 'html') && (el = el.parentNode))

// other file then "mp3" then run this code
if (video[i].currentSrc.lastIndexOf(".mp3")==-1) {video[i].style.cssText = 'visibility:visible !important; position:relative !important; z-index:1000 !important';}

}

// default html5 video detection inside a iframe element
/*iframe = document.getElementsByTagName("iframe");
for(var i = 0; i < iframe.length; i++) {
try {
	var innerDoc = iframe[i].contentWindow ? iframe[i].contentWindow.document : iframe[i].contentDocument ? iframe[i].contentDocument : iframe[i].document;
	if(innerDoc){
		var iframevideo = innerDoc.getElementsByTagName("video");
		for(var j = 0; j < iframevideo.length; j++) {
		iframe[i].style.cssText = 'visibility:visible !important; position:relative !important; z-index:1000 !important';
		}
	}
} catch(e){}
}*/

// iframe HTML5 video
// see inside injected.js

/////////// Turn Off the Lights -> on

// New intelligent video detection --------------
function intelligentvideodetection() {
if (window.location.href.match(/((http:\/\/(.*youtube\.com\/.*))|(https:\/\/(.*youtube\.com\/.*)))/i)){} // flash detection off for youtube.com
else {
// search for the z-index, if found something give it 'auto'
var x = document.getElementsByTagName('*');
for(var i = 0; i < x.length; i++ ) {
if (x[i].currentStyle){var y = x[i].currentStyle["z-Index"];}
else if (window.getComputedStyle){var y = document.defaultView.getComputedStyle(x[i],null).getPropertyValue("z-Index");}
if (y == "auto"){}
else{x[i].style.zIndex = 'auto';}
}
}
}

//-----------------------------------------------

function flexiwidthheightdetection() {
// set height and width to a fixed value
// embed iframe
var iframe = document.querySelectorAll('iframe');
for(var i = 0; i < iframe.length; i++ ){
	try{
		var iheight = iframe[i].contentDocument.body.clientHeight;
		var iwidth = iframe[i].contentDocument.body.clientWidth;
		iframe[i].style.height = iheight + "px";
		iframe[i].style.width = iwidth + "px";
	}catch(e){}
}

// var embed = document.querySelectorAll('embed');
// for(var i = 0; i < embed.length; i++ ){
	// if(document.defaultView && document.defaultView.getComputedStyle){
		// try{
		// var targetComputedStyleHeight=document.defaultView.getComputedStyle(embed[i],null).getPropertyValue("height");
		// var spar = targetComputedStyleHeight.replace("px","");embed[i].style.height = Math.round(spar) + "px";
		// var targetComputedStyleWidth=document.defaultView.getComputedStyle(embed[i],null).getPropertyValue("width");
		// var been = targetComputedStyleWidth.replace("px","");embed[i].style.width = Math.round(been) + "px"; 
		// }catch(e){}
	// }
// }
}

//-----------------------------------------------

if (window.location.href.match(/((http:\/\/(.*youtube\.com\/.*))|(https:\/\/(.*youtube\.com\/.*)))/i)){} // flash detection off for youtube.com
else {
// embed iframe
var iframe = document.querySelectorAll('iframe');
for(var i = 0; i < iframe.length; i++ ){
// video list
var insideframe = iframe[i].src;
if((insideframe.substring(0, 17) == '//www.youtube.com') || (insideframe.substring(0, 26) == '//www.youtube-nocookie.com') || (insideframe.substring(0, 22) == 'http://www.youtube.com') || (insideframe.substring(0, 23) == 'https://www.youtube.com') || (insideframe.substring(0, 31) == 'http://www.youtube-nocookie.com') || (insideframe.substring(0, 32) == 'https://www.youtube-nocookie.com') || (insideframe.substring(0, 19) == 'https://youtube.com') || (insideframe.substring(0, 18) == 'http://youtube.com')
|| (insideframe.substring(0, 16) == 'http://vimeo.com') || (insideframe.substring(0, 17) == 'https://vimeo.com') || (insideframe.substring(0, 23) == 'http://player.vimeo.com') || (insideframe.substring(0, 24) == 'https://player.vimeo.com') || (insideframe.substring(0, 29) == 'https://secure-a.vimeocdn.com') || (insideframe.substring(0, 21) == 'http://a.vimeocdn.com') || (insideframe.substring(0, 22) == 'https://a.vimeocdn.com')
|| (insideframe.substring(0, 26) == 'http://www.dailymotion.com') || (insideframe.substring(0, 27) == 'https://www.dailymotion.com') || (insideframe.substring(0, 24) == 'http://static1.dmcdn.net') || (insideframe.substring(0, 25) == 'https://static1.dmcdn.net')
|| (insideframe.substring(0, 27) == 'http://videoplayer.vevo.com') || (insideframe.substring(0, 28) == 'https://videoplayer.vevo.com')
|| (insideframe.substring(0, 19) == 'http://vk.com/video') || (insideframe.substring(0, 20) == 'https://vk.com/video') || (insideframe.substring(0, 17) == 'http://vk.com/swf') || (insideframe.substring(0, 18) == 'https://vk.com/swf')
|| (insideframe.substring(0, 26) == 'http://www.facebook.com/v/') || (insideframe.substring(0, 27) == 'https://www.facebook.com/v/') || (insideframe.substring(0, 26) == 'http://static.ak.fbcdn.net')  || (insideframe.substring(0, 27) == 'https://static.ak.fbcdn.net') || (insideframe.substring(0, 29) == 'http://static.ak.facebook.com') || (insideframe.substring(0, 30) == 'https://static.ak.facebook.com') || (insideframe.substring(0, 31) == 'http://s-static.ak.facebook.com') || (insideframe.substring(0, 32) == 'https://s-static.ak.facebook.com') || (insideframe.substring(0, 30) == 'http://fbstatic-a.akamaihd.net') || (insideframe.substring(0, 31) == 'https://fbstatic-a.akamaihd.net')// facebook embed video
|| (insideframe.substring(0, 30) == 'http://lads.myspace.com/videos') || (insideframe.substring(0, 31) == 'https://lads.myspace.com/videos')
|| (insideframe.substring(0, 25) == 'http://www.hulu.com/embed') || (insideframe.substring(0, 26) == 'https://www.hulu.com/embed') || (insideframe.substring(0, 32) == 'https://www.hulu.com/site-player') || (insideframe.substring(0, 31) == 'http://www.hulu.com/site-player')|| (insideframe.substring(0, 22) == 'http://player.hulu.com') || (insideframe.substring(0, 23) == 'https://player.hulu.com')
|| (insideframe.substring(0, 14) == 'http://blip.tv') || (insideframe.substring(0, 15) == 'http://blip.tv') || (insideframe.substring(0, 16) == 'http://a.blip.tv') || (insideframe.substring(0, 17) == 'https://a.blip.tv')
|| (insideframe.substring(0, 17) == 'http://l.yimg.com') || (insideframe.substring(0, 18) == 'https://l.yimg.com') // yahoo video
|| (insideframe.substring(0, 27) == 'http://videos.revision3.com') || (insideframe.substring(0, 28) == 'https://videos.revision3.com') || (insideframe.substring(0, 20) == 'http://revision3.com') || (insideframe.substring(0, 21) == 'https://revision3.com')
|| (insideframe.substring(0, 23) == 'http://www.metacafe.com') || (insideframe.substring(0, 24) == 'https://www.metacafe.com')
|| (insideframe.substring(0, 24) == 'http://www-cdn.justin.tv') || (insideframe.substring(0, 25) == 'https://www-cdn.justin.tv')
|| (insideframe.substring(0, 16) == 'http://twitch.tv') || (insideframe.substring(0, 17) == 'https://twitch.tv') || (insideframe.substring(0, 24) == 'http://www-cdn.jtvnw.net') || (insideframe.substring(0, 25) == 'https://www-cdn.jtvnw.net')
|| (insideframe.substring(0, 21) == 'http://s.mcstatic.com') || (insideframe.substring(0, 22) == 'https://s.mcstatic.com') // metacafe
|| (insideframe.substring(0, 21) == 'http://is4.myvideo.de') || (insideframe.substring(0, 22) == 'https://is4.myvideo.de')
|| (insideframe.substring(0, 32) == 'http://cdn1.static.videobash.com') || (insideframe.substring(0, 33) == 'https://cdn1.static.videobash.com')
|| (insideframe.substring(0, 24) == 'http://player.ooyala.com') || (insideframe.substring(0, 25) == 'https://player.ooyala.com') // espn.com
|| (insideframe.substring(0, 19) == 'http://i.nflcdn.com') || (insideframe.substring(0, 20) == 'https://i.nflcdn.com') //nfl.com
|| (insideframe.substring(0, 22) == 'http://cfiles.5min.com') || (insideframe.substring(0, 23) == 'https://cfiles.5min.com') // aol.com
|| (insideframe.substring(0, 18) == 'http://can.cbs.com') || (insideframe.substring(0, 19) == 'https://can.cbs.com') // tv.com
|| (insideframe.substring(0, 25) == 'http://cdn.livestream.com') || (insideframe.substring(0, 26) == 'https://cdn.livestream.com')
|| (insideframe.substring(0, 29) == 'http://static-cdn1.ustream.tv') || (insideframe.substring(0, 30) == 'https://static-cdn1.ustream.tv')
|| (insideframe.substring(0, 21) == 'http://static.muzu.tv') || (insideframe.substring(0, 22) == 'https://static.muzu.tv')
|| (insideframe.substring(0, 32) == 'http://static.ak.crunchyroll.com') || (insideframe.substring(0, 33) == 'https://static.ak.crunchyroll.com')
|| (insideframe.substring(0, 20) == 'http://video.ted.com') || (insideframe.substring(0, 21) == 'https://video.ted.com') || (insideframe.substring(0, 20) == 'http://embed.ted.com') || (insideframe.substring(0, 21) == 'https://embed.ted.com')
|| (insideframe.substring(0, 19) == 'http://metatube.com') || (insideframe.substring(0, 20) == 'https://metatube.com')
|| (insideframe.substring(0, 32) == 'http://videohosting.sidereel.com') || (insideframe.substring(0, 33) == 'https://videohosting.sidereel.com')
|| (insideframe.substring(0, 28) == 'http://rutube.ru/video/embed') || (insideframe.substring(0, 29) == 'https://rutube.ru/video/embed')
/*|| (insideframe.substring(0, 19) == 'http://www.veoh.com') || (insideframe.substring(0, 20) == 'https://www.veoh.com')*/
|| (insideframe.substring(0, 16) == 'http://vine.co/v') || (insideframe.substring(0, 17) == 'https://vine.co/v')
|| (insideframe.substring(0, 22) == 'http://embed.break.com') || (insideframe.substring(0, 23) == 'https://embed.break.com') || (insideframe.substring(0, 23) == 'https://media1.break.com') || (insideframe.substring(0, 24) == 'https://media1.break.com')
|| (insideframe.substring(0, 27) == 'http://www.collegehumor.com') || (insideframe.substring(0, 28) == 'https://www.collegehumor.com') || (insideframe.substring(0, 38) == 'http://0.static.collegehumor.cvcdn.com') || (insideframe.substring(0, 39) == 'https://0.static.collegehumor.cvcdn.com')
|| (insideframe.substring(0, 24) == 'http://hub.video.msn.com') || (insideframe.substring(0, 25) == 'https://hub.video.msn.com') || (insideframe.substring(0, 34) == 'http://img.widgets.video.s-msn.com') || (insideframe.substring(0, 35) == 'https://img.widgets.video.s-msn.com') // msn bing.com
|| (insideframe.substring(0, 30) == 'http://flash.pcworld.com/video') || (insideframe.substring(0, 31) == 'https://flash.pcworld.com/video')
|| (insideframe.substring(0, 23) == 'http://z.cdn.turner.com') || (insideframe.substring(0, 24) == 'https://z.cdn.turner.com')
|| (insideframe.substring(0, 24) == 'http://player.ku6cdn.com') || (insideframe.substring(0, 25) == 'https://player.ku6cdn.com')
|| (insideframe.substring(0, 21) == 'http://js.tudouui.com') || (insideframe.substring(0, 22) == 'https://js.tudouui.com')
|| (insideframe.substring(0, 21) == 'http://player.cntv.cn') || (insideframe.substring(0, 22) == 'https://player.cntv.cn')
|| (insideframe.substring(0, 34) == 'http://js.kankan.xunlei.com/player') || (insideframe.substring(0, 35) == 'https://js.kankan.xunlei.com/player')
|| (insideframe.substring(0, 18) == 'http://tv.sohu.com') || (insideframe.substring(0, 19) == 'https://tv.sohu.com')
|| (insideframe.substring(0, 25) == 'http://player.letvcdn.com') || (insideframe.substring(0, 26) == 'https://player.letvcdn.com')
|| (insideframe.substring(0, 20) == 'http://www.iqiyi.com') || (insideframe.substring(0, 21) == 'https://www.iqiyi.com')
|| (insideframe.substring(0, 23) == 'http://static1.mtime.cn') || (insideframe.substring(0, 24) == 'https://static1.mtime.cn') || (insideframe.substring(0, 22) == 'http://movie.mtime.com') || (insideframe.substring(0, 23) == 'https://movie.mtime.com')
|| (insideframe.substring(0, 23) == 'http://movie.douban.com') || (insideframe.substring(0, 24) == 'https://movie.douban.com')
|| (insideframe.substring(0, 23) == 'http://static.m1905.com') || (insideframe.substring(0, 24) == 'https://static.m1905.com')
|| (insideframe.substring(0, 22) == 'http://imgcache.qq.com') || (insideframe.substring(0, 23) == 'https://imgcache.qq.com')
|| (insideframe.substring(0, 19) == 'http://s1.56img.com') || (insideframe.substring(0, 20) == 'https://s1.56img.com')
|| (insideframe.substring(0, 20) == 'http://client.joy.cn') || (insideframe.substring(0, 21) == 'https://client.joy.cn')
|| (insideframe.substring(0, 23) == 'http://player.youku.com') || (insideframe.substring(0, 24) == 'https://player.youku.com') || (insideframe.substring(0, 23) == 'http://static.youku.com') || (insideframe.substring(0, 24) == 'https://static.youku.com'))
{
// search for the video player, and set the previous path all to z-index "auto"
var path = [];
var el = document.getElementsByTagName("iframe")[i];
do {
    var qq = path.unshift(el.nodeName);
    if (el.currentStyle) { 
        var yta = qq.currentStyle["z-Index"];
    }
    else {
        var yta = document.defaultView.getComputedStyle(el,null).getPropertyValue("z-Index");
    }
	if (yta == "auto"){}
	else{el.style.zIndex = 'auto';}
} while ((el.nodeName.toLowerCase() != 'html') && (el = el.parentNode))

// current video to front
var targetComputedStyleHeight=document.defaultView.getComputedStyle(iframe[i],null).getPropertyValue("height");var spar = targetComputedStyleHeight.replace("px","");
var targetComputedStyleWidth=document.defaultView.getComputedStyle(iframe[i],null).getPropertyValue("width");var been = targetComputedStyleWidth.replace("px","");
iframe[i].style.cssText = 'visibility:visible !important; position:relative !important; z-index:1000 !important;' + 'height:' + Math.round(spar) + 'px; width:' + Math.round(been) + 'px; display: block;';
//iframe[i].style.cssText = 'visibility:visible !important; position:relative !important; z-index:1000 !important';
}
}

// embed object
var object = document.querySelectorAll('object');
for(var i = 0; i < object.length; i++ ){
// video list
var insideframe = object[i].data;
if((insideframe.substring(0, 17) == '//www.youtube.com') || (insideframe.substring(0, 26) == '//www.youtube-nocookie.com') || (insideframe.substring(0, 22) == 'http://www.youtube.com') || (insideframe.substring(0, 23) == 'https://www.youtube.com') || (insideframe.substring(0, 31) == 'http://www.youtube-nocookie.com') || (insideframe.substring(0, 32) == 'https://www.youtube-nocookie.com') || (insideframe.substring(0, 19) == 'https://youtube.com') || (insideframe.substring(0, 18) == 'http://youtube.com')
|| (insideframe.substring(0, 16) == 'http://vimeo.com') || (insideframe.substring(0, 17) == 'https://vimeo.com') || (insideframe.substring(0, 23) == 'http://player.vimeo.com') || (insideframe.substring(0, 24) == 'https://player.vimeo.com') || (insideframe.substring(0, 29) == 'https://secure-a.vimeocdn.com') || (insideframe.substring(0, 21) == 'http://a.vimeocdn.com') || (insideframe.substring(0, 22) == 'https://a.vimeocdn.com')
|| (insideframe.substring(0, 26) == 'http://www.dailymotion.com') || (insideframe.substring(0, 27) == 'https://www.dailymotion.com') || (insideframe.substring(0, 24) == 'http://static1.dmcdn.net') || (insideframe.substring(0, 25) == 'https://static1.dmcdn.net')
|| (insideframe.substring(0, 27) == 'http://videoplayer.vevo.com') || (insideframe.substring(0, 28) == 'https://videoplayer.vevo.com')
|| (insideframe.substring(0, 19) == 'http://vk.com/video') || (insideframe.substring(0, 20) == 'https://vk.com/video') || (insideframe.substring(0, 17) == 'http://vk.com/swf') || (insideframe.substring(0, 18) == 'https://vk.com/swf')
|| (insideframe.substring(0, 26) == 'http://www.facebook.com/v/') || (insideframe.substring(0, 27) == 'https://www.facebook.com/v/') || (insideframe.substring(0, 26) == 'http://static.ak.fbcdn.net')  || (insideframe.substring(0, 27) == 'https://static.ak.fbcdn.net') || (insideframe.substring(0, 29) == 'http://static.ak.facebook.com') || (insideframe.substring(0, 30) == 'https://static.ak.facebook.com') || (insideframe.substring(0, 31) == 'http://s-static.ak.facebook.com') || (insideframe.substring(0, 32) == 'https://s-static.ak.facebook.com') || (insideframe.substring(0, 30) == 'http://fbstatic-a.akamaihd.net') || (insideframe.substring(0, 31) == 'https://fbstatic-a.akamaihd.net')// facebook embed video
|| (insideframe.substring(0, 30) == 'http://lads.myspace.com/videos') || (insideframe.substring(0, 31) == 'https://lads.myspace.com/videos')
|| (insideframe.substring(0, 25) == 'http://www.hulu.com/embed') || (insideframe.substring(0, 26) == 'https://www.hulu.com/embed') || (insideframe.substring(0, 32) == 'https://www.hulu.com/site-player') || (insideframe.substring(0, 31) == 'http://www.hulu.com/site-player')|| (insideframe.substring(0, 22) == 'http://player.hulu.com') || (insideframe.substring(0, 23) == 'https://player.hulu.com')
|| (insideframe.substring(0, 14) == 'http://blip.tv') || (insideframe.substring(0, 15) == 'http://blip.tv') || (insideframe.substring(0, 16) == 'http://a.blip.tv') || (insideframe.substring(0, 17) == 'https://a.blip.tv')
|| (insideframe.substring(0, 17) == 'http://l.yimg.com') || (insideframe.substring(0, 18) == 'https://l.yimg.com') // yahoo video
|| (insideframe.substring(0, 27) == 'http://videos.revision3.com') || (insideframe.substring(0, 28) == 'https://videos.revision3.com') || (insideframe.substring(0, 20) == 'http://revision3.com') || (insideframe.substring(0, 21) == 'https://revision3.com')
|| (insideframe.substring(0, 23) == 'http://www.metacafe.com') || (insideframe.substring(0, 24) == 'https://www.metacafe.com')
|| (insideframe.substring(0, 24) == 'http://www-cdn.justin.tv') || (insideframe.substring(0, 25) == 'https://www-cdn.justin.tv')
|| (insideframe.substring(0, 16) == 'http://twitch.tv') || (insideframe.substring(0, 17) == 'https://twitch.tv') || (insideframe.substring(0, 24) == 'http://www-cdn.jtvnw.net') || (insideframe.substring(0, 25) == 'https://www-cdn.jtvnw.net')
|| (insideframe.substring(0, 21) == 'http://s.mcstatic.com') || (insideframe.substring(0, 22) == 'https://s.mcstatic.com') // metacafe
|| (insideframe.substring(0, 21) == 'http://is4.myvideo.de') || (insideframe.substring(0, 22) == 'https://is4.myvideo.de')
|| (insideframe.substring(0, 32) == 'http://cdn1.static.videobash.com') || (insideframe.substring(0, 33) == 'https://cdn1.static.videobash.com')
|| (insideframe.substring(0, 24) == 'http://player.ooyala.com') || (insideframe.substring(0, 25) == 'https://player.ooyala.com') // espn.com
|| (insideframe.substring(0, 19) == 'http://i.nflcdn.com') || (insideframe.substring(0, 20) == 'https://i.nflcdn.com') //nfl.com
|| (insideframe.substring(0, 22) == 'http://cfiles.5min.com') || (insideframe.substring(0, 23) == 'https://cfiles.5min.com') // aol.com
|| (insideframe.substring(0, 18) == 'http://can.cbs.com') || (insideframe.substring(0, 19) == 'https://can.cbs.com') // tv.com
|| (insideframe.substring(0, 25) == 'http://cdn.livestream.com') || (insideframe.substring(0, 26) == 'https://cdn.livestream.com')
|| (insideframe.substring(0, 29) == 'http://static-cdn1.ustream.tv') || (insideframe.substring(0, 30) == 'https://static-cdn1.ustream.tv')
|| (insideframe.substring(0, 21) == 'http://static.muzu.tv') || (insideframe.substring(0, 22) == 'https://static.muzu.tv')
|| (insideframe.substring(0, 32) == 'http://static.ak.crunchyroll.com') || (insideframe.substring(0, 33) == 'https://static.ak.crunchyroll.com')
|| (insideframe.substring(0, 20) == 'http://video.ted.com') || (insideframe.substring(0, 21) == 'https://video.ted.com') || (insideframe.substring(0, 20) == 'http://embed.ted.com') || (insideframe.substring(0, 21) == 'https://embed.ted.com')
|| (insideframe.substring(0, 19) == 'http://metatube.com') || (insideframe.substring(0, 20) == 'https://metatube.com')
|| (insideframe.substring(0, 32) == 'http://videohosting.sidereel.com') || (insideframe.substring(0, 33) == 'https://videohosting.sidereel.com')
|| (insideframe.substring(0, 28) == 'http://rutube.ru/video/embed') || (insideframe.substring(0, 29) == 'https://rutube.ru/video/embed')
/*|| (insideframe.substring(0, 19) == 'http://www.veoh.com') || (insideframe.substring(0, 20) == 'https://www.veoh.com')*/
|| (insideframe.substring(0, 16) == 'http://vine.co/v') || (insideframe.substring(0, 17) == 'https://vine.co/v')
|| (insideframe.substring(0, 22) == 'http://embed.break.com') || (insideframe.substring(0, 23) == 'https://embed.break.com') || (insideframe.substring(0, 23) == 'http://media1.break.com') || (insideframe.substring(0, 24) == 'https://media1.break.com')
|| (insideframe.substring(0, 27) == 'http://www.collegehumor.com') || (insideframe.substring(0, 28) == 'https://www.collegehumor.com') || (insideframe.substring(0, 38) == 'http://0.static.collegehumor.cvcdn.com') || (insideframe.substring(0, 39) == 'https://0.static.collegehumor.cvcdn.com')
|| (insideframe.substring(0, 24) == 'http://hub.video.msn.com') || (insideframe.substring(0, 25) == 'https://hub.video.msn.com') || (insideframe.substring(0, 34) == 'http://img.widgets.video.s-msn.com') || (insideframe.substring(0, 35) == 'https://img.widgets.video.s-msn.com') // msn bing.com
|| (insideframe.substring(0, 30) == 'http://flash.pcworld.com/video') || (insideframe.substring(0, 31) == 'https://flash.pcworld.com/video')
|| (insideframe.substring(0, 23) == 'http://z.cdn.turner.com') || (insideframe.substring(0, 24) == 'https://z.cdn.turner.com')
|| (insideframe.substring(0, 24) == 'http://player.ku6cdn.com') || (insideframe.substring(0, 25) == 'https://player.ku6cdn.com')
|| (insideframe.substring(0, 21) == 'http://js.tudouui.com') || (insideframe.substring(0, 22) == 'https://js.tudouui.com')
|| (insideframe.substring(0, 21) == 'http://player.cntv.cn') || (insideframe.substring(0, 22) == 'https://player.cntv.cn')
|| (insideframe.substring(0, 34) == 'http://js.kankan.xunlei.com/player') || (insideframe.substring(0, 35) == 'https://js.kankan.xunlei.com/player')
|| (insideframe.substring(0, 18) == 'http://tv.sohu.com') || (insideframe.substring(0, 19) == 'https://tv.sohu.com')
|| (insideframe.substring(0, 25) == 'http://player.letvcdn.com') || (insideframe.substring(0, 26) == 'https://player.letvcdn.com')
|| (insideframe.substring(0, 20) == 'http://www.iqiyi.com') || (insideframe.substring(0, 21) == 'https://www.iqiyi.com')
|| (insideframe.substring(0, 23) == 'http://static1.mtime.cn') || (insideframe.substring(0, 24) == 'https://static1.mtime.cn') || (insideframe.substring(0, 22) == 'http://movie.mtime.com') || (insideframe.substring(0, 23) == 'https://movie.mtime.com')
|| (insideframe.substring(0, 23) == 'http://movie.douban.com') || (insideframe.substring(0, 24) == 'https://movie.douban.com')
|| (insideframe.substring(0, 23) == 'http://static.m1905.com') || (insideframe.substring(0, 24) == 'https://static.m1905.com')
|| (insideframe.substring(0, 22) == 'http://imgcache.qq.com') || (insideframe.substring(0, 23) == 'https://imgcache.qq.com')
|| (insideframe.substring(0, 19) == 'http://s1.56img.com') || (insideframe.substring(0, 20) == 'https://s1.56img.com')
|| (insideframe.substring(0, 20) == 'http://client.joy.cn') || (insideframe.substring(0, 21) == 'https://client.joy.cn')
|| (insideframe.substring(0, 23) == 'http://player.youku.com') || (insideframe.substring(0, 24) == 'https://player.youku.com') || (insideframe.substring(0, 23) == 'http://static.youku.com') || (insideframe.substring(0, 24) == 'https://static.youku.com'))
{
// search for the video player, and set the previous path all to z-index "auto"
var path = [];
var el = document.getElementsByTagName("object")[i];
do {
    var qq = path.unshift(el.nodeName);
    if (el.currentStyle) { 
        var yta = qq.currentStyle["z-Index"];
    }
    else {
        var yta = document.defaultView.getComputedStyle(el,null).getPropertyValue("z-Index");
    }
	if (yta == "auto"){}
	else{el.style.zIndex = 'auto';}
} while ((el.nodeName.toLowerCase() != 'html') && (el = el.parentNode))

// current video to front
object[i].style.cssText = 'visibility:visible !important; position:relative !important; z-index:1000 !important';
}
}

// embed embed
var embed = document.querySelectorAll('embed');
for(var i = 0; i < embed.length; i++ ){
// video list
var insideframe = embed[i].src;
if((insideframe.substring(0, 17) == '//www.youtube.com') || (insideframe.substring(0, 26) == '//www.youtube-nocookie.com') || (insideframe.substring(0, 22) == 'http://www.youtube.com') || (insideframe.substring(0, 23) == 'https://www.youtube.com') || (insideframe.substring(0, 31) == 'http://www.youtube-nocookie.com') || (insideframe.substring(0, 32) == 'https://www.youtube-nocookie.com') || (insideframe.substring(0, 19) == 'https://youtube.com') || (insideframe.substring(0, 18) == 'http://youtube.com')
|| (insideframe.substring(0, 16) == 'http://vimeo.com') || (insideframe.substring(0, 17) == 'https://vimeo.com') || (insideframe.substring(0, 23) == 'http://player.vimeo.com') || (insideframe.substring(0, 24) == 'https://player.vimeo.com') || (insideframe.substring(0, 29) == 'https://secure-a.vimeocdn.com') || (insideframe.substring(0, 21) == 'http://a.vimeocdn.com') || (insideframe.substring(0, 22) == 'https://a.vimeocdn.com')
|| (insideframe.substring(0, 26) == 'http://www.dailymotion.com') || (insideframe.substring(0, 27) == 'https://www.dailymotion.com') || (insideframe.substring(0, 24) == 'http://static1.dmcdn.net') || (insideframe.substring(0, 25) == 'https://static1.dmcdn.net')
|| (insideframe.substring(0, 27) == 'http://videoplayer.vevo.com') || (insideframe.substring(0, 28) == 'https://videoplayer.vevo.com')
|| (insideframe.substring(0, 19) == 'http://vk.com/video') || (insideframe.substring(0, 20) == 'https://vk.com/video') || (insideframe.substring(0, 17) == 'http://vk.com/swf') || (insideframe.substring(0, 18) == 'https://vk.com/swf')
|| (insideframe.substring(0, 26) == 'http://www.facebook.com/v/') || (insideframe.substring(0, 27) == 'https://www.facebook.com/v/') || (insideframe.substring(0, 26) == 'http://static.ak.fbcdn.net')  || (insideframe.substring(0, 27) == 'https://static.ak.fbcdn.net') || (insideframe.substring(0, 29) == 'http://static.ak.facebook.com') || (insideframe.substring(0, 30) == 'https://static.ak.facebook.com') || (insideframe.substring(0, 31) == 'http://s-static.ak.facebook.com') || (insideframe.substring(0, 32) == 'https://s-static.ak.facebook.com') || (insideframe.substring(0, 30) == 'http://fbstatic-a.akamaihd.net') || (insideframe.substring(0, 31) == 'https://fbstatic-a.akamaihd.net')// facebook embed video
|| (insideframe.substring(0, 30) == 'http://lads.myspace.com/videos') || (insideframe.substring(0, 31) == 'https://lads.myspace.com/videos')
|| (insideframe.substring(0, 25) == 'http://www.hulu.com/embed') || (insideframe.substring(0, 26) == 'https://www.hulu.com/embed') || (insideframe.substring(0, 32) == 'https://www.hulu.com/site-player') || (insideframe.substring(0, 31) == 'http://www.hulu.com/site-player')|| (insideframe.substring(0, 22) == 'http://player.hulu.com') || (insideframe.substring(0, 23) == 'https://player.hulu.com') 
|| (insideframe.substring(0, 14) == 'http://blip.tv') || (insideframe.substring(0, 15) == 'http://blip.tv') || (insideframe.substring(0, 16) == 'http://a.blip.tv') || (insideframe.substring(0, 17) == 'https://a.blip.tv')
|| (insideframe.substring(0, 17) == 'http://l.yimg.com') || (insideframe.substring(0, 18) == 'https://l.yimg.com') // yahoo video
|| (insideframe.substring(0, 27) == 'http://videos.revision3.com') || (insideframe.substring(0, 28) == 'https://videos.revision3.com') || (insideframe.substring(0, 20) == 'http://revision3.com') || (insideframe.substring(0, 21) == 'https://revision3.com')
|| (insideframe.substring(0, 23) == 'http://www.metacafe.com') || (insideframe.substring(0, 24) == 'https://www.metacafe.com')
|| (insideframe.substring(0, 24) == 'http://www-cdn.justin.tv') || (insideframe.substring(0, 25) == 'https://www-cdn.justin.tv')
|| (insideframe.substring(0, 16) == 'http://twitch.tv') || (insideframe.substring(0, 17) == 'https://twitch.tv') || (insideframe.substring(0, 24) == 'http://www-cdn.jtvnw.net') || (insideframe.substring(0, 25) == 'https://www-cdn.jtvnw.net')
|| (insideframe.substring(0, 21) == 'http://s.mcstatic.com') || (insideframe.substring(0, 22) == 'https://s.mcstatic.com') // metacafe
|| (insideframe.substring(0, 21) == 'http://is4.myvideo.de') || (insideframe.substring(0, 22) == 'https://is4.myvideo.de')
|| (insideframe.substring(0, 32) == 'http://cdn1.static.videobash.com') || (insideframe.substring(0, 33) == 'https://cdn1.static.videobash.com')
|| (insideframe.substring(0, 24) == 'http://player.ooyala.com') || (insideframe.substring(0, 25) == 'https://player.ooyala.com') // espn.com
|| (insideframe.substring(0, 19) == 'http://i.nflcdn.com') || (insideframe.substring(0, 20) == 'https://i.nflcdn.com') //nfl.com
|| (insideframe.substring(0, 22) == 'http://cfiles.5min.com') || (insideframe.substring(0, 23) == 'https://cfiles.5min.com') // aol.com
|| (insideframe.substring(0, 18) == 'http://can.cbs.com') || (insideframe.substring(0, 19) == 'https://can.cbs.com') // tv.com
|| (insideframe.substring(0, 25) == 'http://cdn.livestream.com') || (insideframe.substring(0, 26) == 'https://cdn.livestream.com')
|| (insideframe.substring(0, 29) == 'http://static-cdn1.ustream.tv') || (insideframe.substring(0, 30) == 'https://static-cdn1.ustream.tv')
|| (insideframe.substring(0, 21) == 'http://static.muzu.tv') || (insideframe.substring(0, 22) == 'https://static.muzu.tv')
|| (insideframe.substring(0, 32) == 'http://static.ak.crunchyroll.com') || (insideframe.substring(0, 33) == 'https://static.ak.crunchyroll.com')
|| (insideframe.substring(0, 20) == 'http://video.ted.com') || (insideframe.substring(0, 21) == 'https://video.ted.com') || (insideframe.substring(0, 20) == 'http://embed.ted.com') || (insideframe.substring(0, 21) == 'https://embed.ted.com')
|| (insideframe.substring(0, 19) == 'http://metatube.com') || (insideframe.substring(0, 20) == 'https://metatube.com')
|| (insideframe.substring(0, 32) == 'http://videohosting.sidereel.com') || (insideframe.substring(0, 33) == 'https://videohosting.sidereel.com')
|| (insideframe.substring(0, 28) == 'http://rutube.ru/video/embed') || (insideframe.substring(0, 29) == 'https://rutube.ru/video/embed')
/*|| (insideframe.substring(0, 19) == 'http://www.veoh.com') || (insideframe.substring(0, 20) == 'https://www.veoh.com')*/
|| (insideframe.substring(0, 16) == 'http://vine.co/v') || (insideframe.substring(0, 17) == 'https://vine.co/v')
|| (insideframe.substring(0, 22) == 'http://embed.break.com') || (insideframe.substring(0, 23) == 'https://embed.break.com') || (insideframe.substring(0, 23) == 'https://media1.break.com') || (insideframe.substring(0, 24) == 'https://media1.break.com')
|| (insideframe.substring(0, 27) == 'http://www.collegehumor.com') || (insideframe.substring(0, 28) == 'https://www.collegehumor.com') || (insideframe.substring(0, 38) == 'http://0.static.collegehumor.cvcdn.com') || (insideframe.substring(0, 39) == 'https://0.static.collegehumor.cvcdn.com')
|| (insideframe.substring(0, 24) == 'http://hub.video.msn.com') || (insideframe.substring(0, 25) == 'https://hub.video.msn.com') || (insideframe.substring(0, 34) == 'http://img.widgets.video.s-msn.com') || (insideframe.substring(0, 35) == 'https://img.widgets.video.s-msn.com') // msn bing.com
|| (insideframe.substring(0, 30) == 'http://flash.pcworld.com/video') || (insideframe.substring(0, 31) == 'https://flash.pcworld.com/video')
|| (insideframe.substring(0, 23) == 'http://z.cdn.turner.com') || (insideframe.substring(0, 24) == 'https://z.cdn.turner.com')
|| (insideframe.substring(0, 24) == 'http://player.ku6cdn.com') || (insideframe.substring(0, 25) == 'https://player.ku6cdn.com')
|| (insideframe.substring(0, 21) == 'http://js.tudouui.com') || (insideframe.substring(0, 22) == 'https://js.tudouui.com')
|| (insideframe.substring(0, 21) == 'http://player.cntv.cn') || (insideframe.substring(0, 22) == 'https://player.cntv.cn')
|| (insideframe.substring(0, 34) == 'http://js.kankan.xunlei.com/player') || (insideframe.substring(0, 35) == 'https://js.kankan.xunlei.com/player')
|| (insideframe.substring(0, 18) == 'http://tv.sohu.com') || (insideframe.substring(0, 19) == 'https://tv.sohu.com')
|| (insideframe.substring(0, 25) == 'http://player.letvcdn.com') || (insideframe.substring(0, 26) == 'https://player.letvcdn.com')
|| (insideframe.substring(0, 20) == 'http://www.iqiyi.com') || (insideframe.substring(0, 21) == 'https://www.iqiyi.com')
|| (insideframe.substring(0, 23) == 'http://static1.mtime.cn') || (insideframe.substring(0, 24) == 'https://static1.mtime.cn') || (insideframe.substring(0, 22) == 'http://movie.mtime.com') || (insideframe.substring(0, 23) == 'https://movie.mtime.com')
|| (insideframe.substring(0, 23) == 'http://movie.douban.com') || (insideframe.substring(0, 24) == 'https://movie.douban.com')
|| (insideframe.substring(0, 23) == 'http://static.m1905.com') || (insideframe.substring(0, 24) == 'https://static.m1905.com')
|| (insideframe.substring(0, 22) == 'http://imgcache.qq.com') || (insideframe.substring(0, 23) == 'https://imgcache.qq.com')
|| (insideframe.substring(0, 19) == 'http://s1.56img.com') || (insideframe.substring(0, 20) == 'https://s1.56img.com')
|| (insideframe.substring(0, 20) == 'http://client.joy.cn') || (insideframe.substring(0, 21) == 'https://client.joy.cn')
|| (insideframe.substring(0, 23) == 'http://player.youku.com') || (insideframe.substring(0, 24) == 'https://player.youku.com') || (insideframe.substring(0, 23) == 'http://static.youku.com') || (insideframe.substring(0, 24) == 'https://static.youku.com'))
{
// search for the video player, and set the previous path all to z-index "auto"
var path = [];
var el = document.getElementsByTagName("embed")[i];
if (window.location.href.match(/http:\/\/(vk\.com\/.*|vk\.com\/.*)/i)){} //blacklist
else{
do {
    var qq = path.unshift(el.nodeName);
    if (el.currentStyle) { 
        var yta = qq.currentStyle["z-Index"];
    }
    else {
        var yta = document.defaultView.getComputedStyle(el,null).getPropertyValue("z-Index");
    }
	if (yta == "auto"){}
	else{el.style.zIndex = 'auto';}
} while ((el.nodeName.toLowerCase() != 'html') && (el = el.parentNode))
}

// current video to front
embed[i].style.cssText = 'visibility:visible !important; position:relative !important; z-index:1000 !important';
}
}

}

/////////// Video
// Vimeo, fixed show video
if (window.location.href.match(/((http:\/\/(.*vimeo\.com\/.*|.*vimeo\.com\/.*\/b\/.*|.*vimeo\.com\/.*\/w\/.*))|(https:\/\/(.*vimeo\.com\/.*|.*vimeo\.com\/.*\/b\/.*|.*vimeo\.com\/.*\/w\/.*)))/i)){
// 30/03/2014 show the controls
var elems = document.getElementsByTagName('div'), i;
for (i in elems) {if((' ' + elems[i].className + ' ').indexOf('controls') > -1) {elems[i].style.zIndex = 1001;}}

var elems = document.getElementsByTagName('div'), i;
for (i in elems) {if((' ' + elems[i].className + ' ').indexOf('sidedock') > -1) {elems[i].style.zIndex = 1001;}}

var elems = document.getElementsByTagName('div'), i;
for (i in elems) {if((' ' + elems[i].className + ' ').indexOf('title') > -1) {elems[i].style.zIndex = 1001;}}

//fixed 16/01/2015
var elems = document.getElementsByTagName('div'), i;
for (i in elems) {if((' ' + elems[i].className + ' ').indexOf('target') > -1) {elems[i].style.zIndex = 1001;}}

var elems = document.getElementsByTagName('div'), i;
for (i in elems) {if((' ' + elems[i].className + ' ').indexOf('video') > -1) {elems[i].style.zIndex = 1001;}}
}

// Dailymotion, fixed show video
else if (window.location.href.match(/http:\/\/(.*\.dailymotion\.com\/video\/.*|.*\.dailymotion\.com\/.*\/video\/.*)/i)){
intelligentvideodetection();

div = document.getElementsByTagName('div'); 
for(var i = 0; i < div.length; i++ ) 
{if(div[i].className == ('dmpi_video_playerv4 span-8')) {div[i].style.zIndex = 1000;div[i].style.position = 'relative';}}

// HTML5 video
div = document.getElementsByTagName('div'); 
for(var i = 0; i < div.length; i++ ) 
{if(div[i].className == ('controls_container')) {div[i].style.zIndex = 1000;}}
}

// vk.com, fixed show video
else if (window.location.href.match(/http:\/\/(vk\.com\/.*|vk\.com\/.*)/i)){
var videoplayer = $('video_player');
if(videoplayer){$('video_player').style.zIndex = 1001;$('video_player').style.position = 'relative';}

var mvlayerwrap = $('mv_layer_wrap');
if(mvlayerwrap){$('mv_layer_wrap').style.zIndex = 1001;}
}

// ted.com, fixed show video
else if (window.location.href.match(/http:\/\/(.*\.ted\.com\/.*)/i)){
div = document.getElementsByTagName('div'); 
for(var i = 0; i < div.length; i++ )
{if(div[i].className == ('')) {div[i].style.zIndex = 1001;}}
}

// 1tv.ru, fixed show video
else if (window.location.href.match(/http:\/\/(.*\.1tv\.ru\/.*)/i)){
var flashvideoportal1 = $('flashvideoportal_1');
if(flashvideoportal1){$('flashvideoportal_1').style.zIndex = 1001;$('flashvideoportal_1').style.position = 'relative';}
}

//Flash games
//Windows Media Player
//Silverlight
//Quicktime
// -> object,embed,applet,iframe
// -> turn on the flash detection

///////////

	// Black div on
	var blackon = $('stefanvdlightareoff1');

	function reader() {
		// save the current reader bar settings, before remove it
		if(readera == 'true'){
		var readerontext;
		var readeronrange;
		var readerlargestyle;
		var readerlargeimgclick;
		var readerlargetitleclick;

		readerontext = $('totlgammaVal');
		readeronrange = $('totlrange');
		if (readerontext != null && readeronrange != null) {
			chrome.storage.local.set({"interval": readerontext.value});
		}
	
		readerlargestyle = $('__totl-tidbit-box');
		readerlargeimgclick = $('__totl-min');
		readerlargetitleclick = $('__totl-box-info');
		if (readerlargestyle != null && readerlargeimgclick != null && readerlargetitleclick != null) {
			if(readerlargestyle.style.width == '24px'){chrome.storage.local.set({"readerlargestyle": "false"});}
			else{chrome.storage.local.set({"readerlargestyle": "true"});}
		}	
		}
	
		var totlreaderbar = $('totlreaderbar');
		if(totlreaderbar) {document.body.removeChild(totlreaderbar);}
		
		// remove help div
		var stefanvdlightareoffcustom = $('stefanvdlightareoffcustom');
		if(stefanvdlightareoffcustom) {
		document.body.removeChild(stefanvdlightareoffcustom);
		document.body.style.cursor = "default";
		}
		window.onmousemove = null;
		
		// YouTube video title (set back to default)
		var eowtitle = $('eow-title');
		if(eowtitle){$('eow-title').style.color = 'black';$('eow-title').style.zIndex = 'auto';$('eow-title').style.position = 'relative';}
		
		var watchheadlinetitle = $('watch-headline-title');  // new youtube watch7
		if(watchheadlinetitle){$('watch-headline-title').style.zIndex = 'auto';$('watch-headline-title').style.position = 'relative';}
		
		span = document.getElementsByTagName('span');  // new youtube watch7
		for(var i = 0; i < span.length; i++ ) 
		{if(span[i].className == (' yt-uix-expander-head') ) {span[i].style.color = 'black';}}	
		// YouTube video view count (set back to default)
		var eowtitle = $('eow-title');
		if(eowtitle){$('eow-title').style.color = '#333';$('eow-title').style.zIndex = 'auto';$('eow-title').style.position = 'relative';}
		span = document.getElementsByTagName('span'); 
		for(var i = 0; i < span.length; i++ )
		{if(span[i].className == ('watch-view-count ')) {span[i].style.color = '#333';span[i].style.zIndex = 'auto';span[i].style.position = 'relative';}}
		var watch7viewsinfo = $('watch7-views-info'); // new youtube watch7 september 2013
		if(watch7viewsinfo){$('watch7-views-info').style.zIndex = 'auto';$('watch7-views-info').style.color = '#333';}
		div = document.getElementsByTagName('a'); 
		for(var i = 0; i < div.length; i++ )
		{if(div[i].className == (' yt-uix-sessionlink     spf-link  g-hovercard')) {div[i].style.color = '#333';}}
	}

	function removenewframe() {
		var stefanvdlightareoff1 = $('stefanvdlightareoff1');
		var stefanvdlightareoff2 = $('stefanvdlightareoff2');
		var stefanvdlightareoff3 = $('stefanvdlightareoff3');
		var stefanvdlightareoff4 = $('stefanvdlightareoff4');
		if(stefanvdlightareoff1) {document.body.removeChild(stefanvdlightareoff1);}
		if(stefanvdlightareoff2) {document.body.removeChild(stefanvdlightareoff2);}
		if(stefanvdlightareoff3) {document.body.removeChild(stefanvdlightareoff3);}
		if(stefanvdlightareoff4) {document.body.removeChild(stefanvdlightareoff4);}
		
		var stefanvdblurimage = $('stefanvdblurimage');
		if(stefanvdblurimage) {document.body.removeChild(stefanvdblurimage);}

		var stefanvdlightcorner = $('stefanvdlightcorner');
		if(stefanvdlightcorner) {document.body.removeChild(stefanvdlightcorner);}
	}
	
	function removenewdynamic() {
		var stefanvddynamicbackground = $('stefanvddynamicbackground');
		if(stefanvddynamicbackground) {document.body.removeChild(stefanvddynamicbackground);}
	}
	
chrome.storage.local.get(['mousespotlighto', 'mousespotlightc', 'mousespotlighta', 'lightcolor', 'lightimagea', 'lightimage', 'interval', 'fadein', 'fadeout', 'readera', 'readerlargestyle', 'mousespotlightt', 'enterpassword', 'password', 'dynamic', 'dynamic1', "dynamic2", 'dynamic3', 'dynamic4', 'dynamic5', 'flash', 'noflash', 'hardflash', 'hoveroptiondyn5', 'blur', 'cinemaontop', 'spotlightradius', 'slideeffect', 'lightimagelin', 'linearsq', 'colora', 'intervallina', 'colorb', 'intervallinb'], function(response){
mousespotlighto = response['mousespotlighto'];if(!mousespotlighto)mousespotlighto = 'true'; // default mousespotlight true
mousespotlightc = response['mousespotlightc'];if(!mousespotlightc)mousespotlightc = 'false'; // default mousespotlight false
mousespotlighta = response['mousespotlighta'];if(!mousespotlighta)mousespotlighta = 'false'; // default mousespotlight false
lightcolor = response['lightcolor'];if(lightcolor)lightcolor = response['lightcolor'];else lightcolor = '#000000'; // default color black
lightimagea = response['lightimagea'];
lightimage = response['lightimage'];
interval = response['interval'];if(!interval)interval = 80; default_opacity = interval; // default interval 80%
fadein = response['fadein'];if(!fadein)fadein = 'true'; // default fadein true
fadeout = response['fadeout'];if(!fadeout)fadeout = 'true'; // default fadeout true
readera = response['readera'];if(!readera)readera = 'false'; // default readera false
readerlargestyle = response['readerlargestyle'];if(!readerlargestyle)readerlargestyle = 'true'; // default large style
mousespotlightt = response['mousespotlightt'];if(!mousespotlightt)mousespotlightt = 'false'; // default mousespotlight false
enterpassword = response['enterpassword'];
password = response['password'];if(!password)password = 'false';
dynamic = response['dynamic'];if(!dynamic)dynamic = 'false'; // default dynamic false
dynamic1 = response['dynamic1'];
dynamic2 = response['dynamic2'];
dynamic3 = response['dynamic3'];
dynamic4 = response['dynamic4'];
dynamic5 = response['dynamic5'];
flash = response['flash'];
noflash = response['noflash'];
hardflash = response['hardflash'];
hoveroptiondyn5 = response['hoveroptiondyn5'];
blur = response['blur'];
cinemaontop = response['cinemaontop'];if(!cinemaontop)cinemaontop = 'false'; // default cinemaontop false
spotlightradius = response['spotlightradius'];if(!spotlightradius)spotlightradius = 50; // default spotlightradius 50
slideeffect = response['slideeffect'];if(!slideeffect)slideeffect = 'false'; // default slideeffect false
lightimagelin = response['lightimagelin'];if(!lightimagelin)lightimagelin = 'false'; // default lightimagelin false
linearsq = response['linearsq'];
colora = response['colora'];
intervallina = response['intervallina'];
colorb = response['colorb'];
intervallinb = response['intervallinb'];
 
// Show all Flash objects -> Flash detection
function flashobjects(){
try{
var d=window.document,j,i,t,T,N,b,r=1,C;
for(j=0;t=['object','embed','applet','iframe'][j];++j)
{
T=d.getElementsByTagName(t);
for(i=T.length-1;(i+1)&&(N=T[i]);--i)
if(j!=3||!R((C=N.contentWindow)?C:N.contentDocument.defaultView))
{
N.style.cssText = 'visibility:visible !important; position:relative !important; z-index:1000 !important';
}
}
}catch(E){r = 0}
return r
}

if(flash == 'true'){
intelligentvideodetection();

flashobjects();
} else if(hardflash == 'true'){
intelligentvideodetection();

for(j=0;t=['object','embed','applet','iframe'][j];++j)
{
var a = document.querySelectorAll(t);
for(var i = 0; i < a.length; i++ )
{
a[i].style.cssText = 'visibility:visible !important; position:relative !important; z-index:1000 !important';
}
}
}

// Password in document
// taart make it remove or not
var i18nlockentername = chrome.i18n.getMessage("lockentername");
var i18nlockwrongpassword = chrome.i18n.getMessage("lockwrongpassword");

function taart(){
var pwon2 = $('stefanvdlightareoffpw');
	if(pwon2){
		var entername = window.prompt(i18nlockentername,'');
		if(enterpassword == entername){
		document.body.removeChild(pwon2);
		if(fadeout == 'true'){ReducingFinished = false;fader('hide');reader();} 
		else {removenewframe();reader();}
		} else {window.alert(i18nlockwrongpassword);}	
	} else {
		if(fadeout == 'true'){ReducingFinished = false;fader('hide');reader();}
		else {removenewframe();reader();}
	}
	removenewdynamic();
}

// Password enable
var pwon = $('stefanvdlightareoffpw');
if(password == 'true'){
	if(pwon){
		var entername = window.prompt(i18nlockentername,'');
		if(enterpassword == entername){document.body.removeChild(pwon);lightsgoonoroff();} else {window.alert(i18nlockwrongpassword);}	
	} else {
		lightsgoonoroff();
	    var newpw = document.createElement("div");
	    newpw.setAttribute('id','stefanvdlightareoffpw');
        newpw.style.display = 'none';
	    document.body.appendChild(newpw);
	}
} else {
lightsgoonoroff();
}

function lightsgoonoroff() {
	if(blackon) {
		if(dynamic == 'true'){
			removenewdynamic();
		}
		if((mousespotlightc == 'true') || (mousespotlighta == 'true')){
			// fade out effect
			if(fadeout == 'true'){taart();}
			else{taart();}
		}
		else {
		// fade out effect
		if(fadeout == 'true'){taart();}
		else{taart();}
		}
	}
	else {	
		default_opacity = interval;

	    if(mousespotlighta == 'true'){
	    var newframe1 = document.createElement("div");
	    newframe1.setAttribute('id','stefanvdlightareoff1');
	    newframe1.setAttribute('class','stefanvdlightareoff');
		var mousespotlightstyle = '-webkit-gradient(radial, -50 -50, 50, -50 -50, 42, from(' + lightcolor + '), to(rgba(0,0,0,0)))';
		
		newframe1.style.backgroundImage = mousespotlightstyle;
		newframe1.style.pointerEvents = 'none'; // make it possible to click on a link 
        newframe1.style.opacity = 0;
        newframe1.style.zIndex = 999;
	    document.body.appendChild(newframe1);
		
	    // fade out effect
		// no click posible

        // fade in effect
		if(fadein == 'true'){fader('show');}
        else{newframe1.style.opacity = default_opacity/100;} // no fade effect	
		
		var spot = $('stefanvdlightareoff1');
		var width = document.documentElement.clientWidth;
		var height = document.documentElement.clientHeight;
		
		function moveSpot(e){
		var x = 0; var y = 0;
		if (!e) var e = window.event;
		if (e.clientX || e.clientY)
		{
			x = e.clientX; y = e.clientY;
		}
		
		var style = '-webkit-gradient(radial, '+x+' '+y+', 50, '+x+' '+y+', 42, from(' + lightcolor + '), to(rgba(0,0,0,0)))';
		spot.style.opacity = default_opacity/100;
		spot.style.backgroundImage = style;
		}
		window.onmousemove = moveSpot;
		}
		else if(mousespotlightc == 'true'){
		var beginxcordinate = null;var beginycordinate = null;var endxcordinate = null;var endycordinate = null;
		var customview;var posx;var posy;var initx = false;var inity = false;
		
		// change size corner
var rect;var stretchable = false;var resizable = false;
var width, height, xpos, ypos;
var mouseX, mouseY, drawnX, drawnY, rX, rY;
var rand = 20;

function watchMouse(e) {
width = parseInt(rect.style.width); height = parseInt(rect.style.height);
xpos = parseInt(rect.style.left); ypos = parseInt(rect.style.top);

// Include possible scroll values
var sx = window.scrollX || document.documentElement.scrollLeft|| 0;
var sy = window.scrollY || document.documentElement.scrollTop|| 0;

if(!e) e = window.event;

var mouseX = e.clientX + sx;
var mouseY = e.clientY + sy;

/* Direction of mouse movement
  deltaX: -1 for left, 1 for right
  deltaY: -1 for up, 1 for down
*/
var deltaX = mouseX - rX;
var deltaY = mouseY - rY;
// Store difference in global variables
rX = mouseX;
rY = mouseY;
 

// left
if(mouseX <= xpos + rand && mouseX > xpos) { dragBorder("left", deltaX); document.body.style.cursor = "w-resize"; }
// right
else if(mouseX >= xpos + width +rand && mouseX < xpos + width + 2*rand ) { dragBorder("right", deltaX); document.body.style.cursor = "e-resize"; }
// top
else if(mouseY <= ypos + rand && mouseY > ypos) { dragBorder("top", deltaY); document.body.style.cursor = "n-resize"; }
// bottom
else if(mouseY >= ypos + height +rand && mouseY < ypos + height + 2*rand )  { dragBorder("bottom", deltaY); document.body.style.cursor = "s-resize"; }
// normal use
else { document.body.style.cursor = "auto"; }
}

function dragBorder(arg, delta) {
if(stretchable)  {
	if(arg == "right") { rect.style.width = (width + delta) + "px";
	$("stefanvdlightareoff3").style.width = (parseInt($("stefanvdlightareoff3").style.width) + delta) + "px";$("stefanvdlightareoff3").style.left = (parseInt($("stefanvdlightareoff3").style.left) + delta) + "px";
	}
	else if(arg == "left") { rect.style.width = (width - delta) + "px"; rect.style.left = (parseInt(rect.style.left) + delta) + "px";
	$("stefanvdlightareoff2").style.width = (parseInt($("stefanvdlightareoff2").style.width) + delta) + "px";
	}
	else if(arg == "bottom") { rect.style.height = (height + delta) + "px";
	$("stefanvdlightareoff4").style.height = (parseInt($("stefanvdlightareoff4").style.height) - delta) + "px";$("stefanvdlightareoff4").style.top = (parseInt($("stefanvdlightareoff4").style.top) + delta) + "px";
	$("stefanvdlightareoff2").style.height = (parseInt($("stefanvdlightareoff2").style.height) + delta) + "px";
	$("stefanvdlightareoff3").style.height = (parseInt($("stefanvdlightareoff3").style.height) + delta) + "px";
	}
	else if(arg == "top") { rect.style.height = (height - delta) + "px"; rect.style.top = (parseInt(rect.style.top) + delta) + "px";
	$("stefanvdlightareoff1").style.height = (parseInt($("stefanvdlightareoff1").style.height) + delta) + "px";
	$("stefanvdlightareoff2").style.height = (parseInt($("stefanvdlightareoff2").style.height) - delta) + "px";$("stefanvdlightareoff2").style.top = (parseInt($("stefanvdlightareoff2").style.top) + delta) + "px";
	$("stefanvdlightareoff3").style.height = (parseInt($("stefanvdlightareoff3").style.height) - delta) + "px";$("stefanvdlightareoff3").style.top = (parseInt($("stefanvdlightareoff3").style.top) + delta) + "px";
	}
}
}
//----		
		
		function getMouse(obj,e){
		posx = 0;posy = 0;
		var ev = (!e)?window.event:e;
		if (ev.clientX){
			posx = ev.clientX;
			posy = ev.clientY;
		}
		else{return 0}

		obj.addEventListener("mousedown", function(){
		initx = posx; inity = posy;
		beginxcordinate = posx;beginycordinate = posy;
		try {
			customview = $('stefanvdlightareoffcustom');
			customview.style.left = initx + 'px';customview.style.top = inity + 'px';
			document.body.appendChild(customview);
		}
		catch(err){}
		});
		obj.addEventListener("mouseup", function(){initx = false;inity = false;});
		if(initx){
		customview.style.width = Math.abs(posx - initx) + 'px';customview.style.height = Math.abs(posy - inity) + 'px';
		customview.style.left = posx - initx < 0 ?posx + 'px':initx + 'px';
		customview.style.top = posy - inity < 0 ?posy + 'px':inity + 'px';
		
		endxcordinate = posx;endycordinate = posy;
		// remove help div
		var stefanvdlightareoffcustom = $('stefanvdlightareoffcustom');
		if(stefanvdlightareoffcustom) {document.body.removeChild(stefanvdlightareoffcustom);}
		document.body.style.cursor = "default";
		
		// create corner
		var cornerison = $("stefanvdlightcorner");
		if(cornerison){}
		else {
			var newcornerdiv = document.createElement('div'); 
			newcornerdiv.setAttribute('id','stefanvdlightcorner');
			document.body.appendChild(newcornerdiv);
		}
		
		rect = $("stefanvdlightcorner");rect.onmousemove = watchMouse; 
		$("stefanvdlightcorner").addEventListener("mousedown", function(){ stretchable = true; }, false);
		$("stefanvdlightcorner").addEventListener("mouseup", function(){ stretchable = false; document.body.style.cursor = "auto"; }, false);
		$("stefanvdlightcorner").addEventListener("mouseout", function(){ stretchable = false; document.body.style.cursor = "auto"; }, false);

		$("stefanvdlightcorner").style.top = parseInt(document.getElementById("stefanvdlightareoff1").style.height) - 10 + "px";
		$("stefanvdlightcorner").style.height = parseInt(document.getElementById("stefanvdlightareoff2").style.height) - 20 + "px";
		$("stefanvdlightcorner").style.left = parseInt(document.getElementById("stefanvdlightareoff2").style.width) - 10 + "px";
		$("stefanvdlightcorner").style.width = parseInt(document.getElementById("stefanvdlightareoff3").style.left) - parseInt(document.getElementById("stefanvdlightareoff2").style.width) - 20 + "px";
		}
		
		else{return false}
		var viewpartwidth = customview.style.width;
		var viewpartheight = customview.style.height;
		
		var view1 = $('stefanvdlightareoff1');
		view1.className = 'stefanvdlightareoff';
		view1.style.left = 0 + 'px';view1.style.top = 0 + 'px';
		view1.style.width = '100%';view1.style.height = beginycordinate + 'px';
		view1.style.visibility = 'visible';
		document.body.appendChild(view1);
		
		var view2 = $('stefanvdlightareoff2');
		view2.className = 'stefanvdlightareoff';
		view2.style.left = 0 + 'px';view2.style.top = beginycordinate + 'px';
		view2.style.width = beginxcordinate + 'px';view2.style.height = viewpartheight;
		view2.style.visibility = 'visible';
		document.body.appendChild(view2);
		
		var view3 = $('stefanvdlightareoff3');
		var viewcall3awidth = window.innerWidth - beginxcordinate; // calc width
		view3.className = 'stefanvdlightareoff';
		view3.style.left = endxcordinate + 'px';view3.style.top = beginycordinate + 'px';
		view3.style.width = viewcall3awidth + 'px';view3.style.height = viewpartheight;
		view3.style.visibility = 'visible';
		document.body.appendChild(view3);
		
		var view4 = $('stefanvdlightareoff4');
		var viewcall4aheight = window.innerHeight - endycordinate; // calc height
		view4.className = 'stefanvdlightareoff';
		view4.style.left = 0 + 'px';view4.style.top = endycordinate + 'px';
		view4.style.width='100%';view4.style.height = viewcall4aheight + 'px';
		view4.style.visibility = 'visible';
		document.body.appendChild(view4);
		
		var calcpartx = endxcordinate - beginxcordinate;
		var calcparty = endycordinate - beginycordinate;
	if((calcpartx < 0) &&! (calcparty < 0)){ // X as automatic change view
		var view1 = $('stefanvdlightareoff1');
		view1.className = 'stefanvdlightareoff';
		view1.style.left = 0 + 'px';view1.style.top = 0 + 'px';
		view1.style.width = '100%';view1.style.height = beginycordinate + 'px';
		view1.style.visibility = 'visible';
		document.body.appendChild(view1);	
	
		var view2 = $('stefanvdlightareoff2');
		view2.className = 'stefanvdlightareoff';
		view2.style.left = 0 + 'px';view2.style.top = beginycordinate + 'px';
		view2.style.width = endxcordinate + 'px';view2.style.height = viewpartheight;
		view2.style.visibility = 'visible';
		document.body.appendChild(view2);
		
		var view3 = $('stefanvdlightareoff3');
		var viewcall3bwidth = window.innerWidth - beginxcordinate; // calc width
		view3.className = 'stefanvdlightareoff';
		view3.style.left = beginxcordinate + 'px';view3.style.top = beginycordinate + 'px';
		view3.style.width = viewcall3bwidth + 'px';view3.style.height = viewpartheight;
		view3.style.visibility = 'visible';
		document.body.appendChild(view3);
		
		var view4 = $('stefanvdlightareoff4');
		var viewcall4bheight = window.innerHeight - endycordinate; // calc height
		view4.className = 'stefanvdlightareoff';
		view4.style.left = 0 + 'px';view4.style.top = endycordinate + 'px';
		view4.style.width='100%';view4.style.height = viewcall4bheight + 'px';
		view4.style.visibility = 'visible';
		document.body.appendChild(view4);
	}
	else if((calcparty < 0) &&! (calcpartx < 0)){ // Y as automatic change view
		var view1 = $('stefanvdlightareoff1');
		view1.className = 'stefanvdlightareoff';
		view1.style.left = 0 + 'px';view1.style.top = 0 + 'px';
			if(endycordinate < 0){endycordinate = 0;}
		view1.style.width = '100%';view1.style.height = endycordinate + 'px';
		view1.style.visibility = 'visible';
		document.body.appendChild(view1);

		var view2 = $('stefanvdlightareoff2');
		view2.className = 'stefanvdlightareoff';
		view2.style.left = 0 + 'px';view2.style.top = endycordinate + 'px';
		view2.style.width = beginxcordinate + 'px';
			if(endycordinate == 0){view2.style.height = beginycordinate + 'px';}else{view2.style.height = viewpartheight;}
		view2.style.visibility = 'visible';
		document.body.appendChild(view2);
		
		var view3 = $('stefanvdlightareoff3');
		var viewcall3cwidth = window.innerWidth - beginxcordinate; // calc width
		view3.className = 'stefanvdlightareoff';
		view3.style.left = endxcordinate + 'px';view3.style.top = endycordinate + 'px';
		view3.style.width = viewcall3cwidth + 'px';
			if(endycordinate == 0){view3.style.height = beginycordinate + 'px';}else{view3.style.height = viewpartheight;}
		view3.style.visibility = 'visible';
		document.body.appendChild(view3);

		var view4 = $('stefanvdlightareoff4');
		var viewcall4cheight = window.innerHeight - endycordinate; // calc height
		view4.className = 'stefanvdlightareoff';
		view4.style.left = 0 + 'px';view4.style.top = beginycordinate + 'px';
		view4.style.width='100%';view4.style.height = viewcall4cheight + 'px';
		view4.style.visibility = 'visible';
		document.body.appendChild(view4);	
	}
	else if((calcpartx < 0) && (calcparty < 0)){ // X en Y as automatic change view
		var view1 = $('stefanvdlightareoff1');
		view1.className = 'stefanvdlightareoff';
		view1.style.left = 0 + 'px';view1.style.top = 0 + 'px';
			if(endycordinate < 0){endycordinate = 0;}
		view1.style.width = '100%';view1.style.height = endycordinate + 'px';
		view1.style.visibility = 'visible';
		document.body.appendChild(view1);
		
		var view2 = $('stefanvdlightareoff2');
		view2.className = 'stefanvdlightareoff';
		view2.style.left = 0 + 'px';view2.style.top = endycordinate + 'px';
		view2.style.width = endxcordinate + 'px';
			if(endycordinate == 0){view2.style.height = beginycordinate + 'px';}else{view2.style.height = viewpartheight;}
		view2.style.visibility = 'visible';
		document.body.appendChild(view2);
		
		var view3 = $('stefanvdlightareoff3');
		var viewcall3dwidth = window.innerWidth - beginxcordinate; // calc width
		view3.className = 'stefanvdlightareoff';
		view3.style.left = beginxcordinate + 'px';view3.style.top = endycordinate + 'px';
		view3.style.width = viewcall3dwidth + 'px';
			if(endycordinate == 0){view3.style.height = beginycordinate + 'px';}else{view3.style.height = viewpartheight;}
		view3.style.visibility = 'visible';
		document.body.appendChild(view3);		
		
		var view4 = $('stefanvdlightareoff4');
		var viewcall4dheight = window.innerHeight - beginycordinate; // calc height
		view4.className = 'stefanvdlightareoff';
		view4.style.left = 0 + 'px';view4.style.top = beginycordinate + 'px';
		view4.style.width = '100%';view4.style.height = viewcall4dheight + 'px';
		view4.style.visibility = 'visible';
		document.body.appendChild(view4);
	}
		}
		
		window.onmousemove = function(event){try {getMouse(window,event);}catch(err){}};
		
	    var newframe1 = document.createElement("div");
	    var newframe2 = document.createElement("div");
	    var newframe3 = document.createElement("div");
	    var newframe4 = document.createElement("div");
		var newframe5 = document.createElement("div");
	    newframe1.setAttribute('id','stefanvdlightareoff1');
	    newframe2.setAttribute('id','stefanvdlightareoff2');
	    newframe3.setAttribute('id','stefanvdlightareoff3');
	    newframe4.setAttribute('id','stefanvdlightareoff4');
	    newframe1.setAttribute('class','stefanvdlightareoff');
	    newframe2.setAttribute('class','stefanvdlightareoff');
	    newframe3.setAttribute('class','stefanvdlightareoff');
	    newframe4.setAttribute('class','stefanvdlightareoff');
		newframe5.setAttribute('id','stefanvdlightareoffcustom');
		newframe1.style.background = lightcolor;
		newframe2.style.background = lightcolor;
		newframe3.style.background = lightcolor;
		newframe4.style.background = lightcolor;
	    newframe2.style.visibility = 'hidden';
	    newframe3.style.visibility = 'hidden';
	    newframe4.style.visibility = 'hidden';
	    document.body.appendChild(newframe1);
	    document.body.appendChild(newframe2);
	    document.body.appendChild(newframe3);
	    document.body.appendChild(newframe4);
		document.body.appendChild(newframe5);
		document.body.style.cursor = 'crosshair'; // show cursor
		
	    // fade out effect      
		if(fadeout == 'true'){
		newframe1.addEventListener("click", function() {taart();});
		newframe2.addEventListener("click", function() {taart();});
		newframe3.addEventListener("click", function() {taart();});
		newframe4.addEventListener("click", function() {taart();});
		}
        else{
		newframe1.addEventListener("click", function() {taart();});
		newframe2.addEventListener("click", function() {taart();});
		newframe3.addEventListener("click", function() {taart();});
		newframe4.addEventListener("click", function() {taart();});
		}

        // fade in effect      
		if(fadein == 'true'){fader('show');}
        else{newframe1.style.opacity = default_opacity/100;newframe2.style.opacity = default_opacity/100;newframe3.style.opacity = default_opacity/100;newframe4.style.opacity = default_opacity/100;} // no fade effect
		}
		else if(mousespotlightt == 'true'){
		var newdiv = document.createElement('div'); 
        newdiv.setAttribute('id','stefanvdlightareoff1');
        newdiv.setAttribute('class','stefanvdlightareoff');
		newdiv.style.width = '100%'; 
        newdiv.style.height = '100%'; 
        newdiv.style.left = 0; 
        newdiv.style.top = 0; 
        newdiv.style.position = 'fixed';
		newdiv.style.pointerEvents = 'none'; // make it possible to click on a link 
		/* if image background, load it then */
			if (lightimagea == 'true'){newdiv.style.background = "url('"+lightimage+"')";newdiv.style.backgroundSize = "100% 100%";}
			else if(lightimagelin == 'true'){newdiv.style.background = 'linear-gradient(to ' + linearsq + ', ' + colora + ' ' + intervallina + '%,' + colorb + ' ' + intervallinb + '%)';}
			else {newdiv.style.background = lightcolor;}
		/*-------------*/    
        newdiv.style.opacity = 0;
        newdiv.style.zIndex = 999;
		
        document.body.appendChild(newdiv);
	  
	    // fade out effect      
		if(fadeout == 'true'){newdiv.addEventListener("click", function() {taart();})}
        else{newdiv.addEventListener("click", function() {taart();})}

        // fade in effect      
		if(fadein == 'true'){fader('show');}
        else{newdiv.style.opacity = default_opacity/100;} // no fade effect		
		}
		else { // Begin normal lights off		 
		var newdiv = document.createElement('div'); 
        newdiv.setAttribute('id','stefanvdlightareoff1');
        newdiv.setAttribute('class','stefanvdlightareoff');
		newdiv.style.width = '100%'; 
        newdiv.style.height = '100%'; 
        newdiv.style.left = 0; 
        newdiv.style.top = 0;
		if(cinemaontop == 'true'){
        newdiv.style.position = 'absolute';
		
		if(window.innerHeight > 870){ // height cinema
		newdiv.style.height = '100%';
		}else{
		newdiv.style.height = '870px';
		}		
		
		} else {
		newdiv.style.position = 'fixed';
		}
		/* if image background, load it then */
			if (lightimagea == 'true'){newdiv.style.background = "url('"+lightimage+"')";newdiv.style.backgroundSize = "100% 100%";}
			else if(lightimagelin == 'true'){newdiv.style.background = 'linear-gradient(to ' + linearsq + ', ' + colora + ' ' + intervallina + '%,' + colorb + ' ' + intervallinb + '%)';}
			else {newdiv.style.background = lightcolor;}
		/*-------------*/    
        newdiv.style.opacity = 0;
        newdiv.style.zIndex = 999;
		
		// Motion fall down effect
		if (slideeffect == 'true'){
		// -webkit-animation: totlbounceInDown 1.5s 0.0s linear 1;
		newdiv.style.WebkitAnimation = "totlbounceInDown 1.5s 0.0s linear 1";
		slideeffect = 'false';
		chrome.storage.local.set({"slideeffect": "false"});
		}
        document.body.appendChild(newdiv);

	    // fade out effect      
		if(fadeout == 'true'){newdiv.addEventListener("click", function() {taart();})}
        else{newdiv.addEventListener("click", function() {taart();})}

        // fade in effect      
		if(fadein == 'true'){fader('show');}
        else{newdiv.style.opacity = default_opacity/100;} // no fade effect
		}
		
		// blur effect
		if(blur == 'true'){
			// disable for on YouTube website
			if (window.location.href.match(/((http:\/\/(.*youtube\.com\/.*))|(https:\/\/(.*youtube\.com\/.*)))/i)){}
			else{
			/*chrome.extension.sendMessage({name: 'currenttabforblur'}, function(response) {
				var img = response.screenshotUrl;
				var newblur = document.createElement('img');
				newblur.setAttribute('id','stefanvdblurimage');
				newblur.setAttribute('src','' + img + '');
				newblur.style.width = '100%';
				newblur.style.height = '100%';
				newblur.style.left = 0;
				newblur.style.top = 0;
				newblur.style.position = 'absolute';
				newblur.style.zIndex = 998;
				document.body.appendChild(newblur);

				for (var bcount=0; bcount<4; bcount++) {
				newblur.style.webkitFilter = 'blur(' + bcount + 'px)';
				}
			});
			*/
				
			(function(exports){function urlsToAbsolute(nodeList){if(!nodeList.length){return[];}
var attrName='href';if(nodeList[0].__proto__===HTMLImageElement.prototype||nodeList[0].__proto__===HTMLScriptElement.prototype){attrName='src';}
nodeList=[].map.call(nodeList,function(el,i){var attr=el.getAttribute(attrName);if(!attr){return;}
var absURL=/^(https?|data):/i.test(attr);if(absURL){return el;}else{return el;}});return nodeList;}
function screenshotPage(){urlsToAbsolute(document.images);urlsToAbsolute(document.querySelectorAll("link[rel='stylesheet']"));var screenshot=document.documentElement.cloneNode(true);var b=document.createElement('base');b.href=document.location.protocol+'//'+location.host;var head=screenshot.querySelector('head');head.insertBefore(b,head.firstChild);screenshot.style.pointerEvents='none';screenshot.style.overflow='hidden';screenshot.style.webkitUserSelect='none';screenshot.style.mozUserSelect='none';screenshot.style.msUserSelect='none';screenshot.style.oUserSelect='none';screenshot.style.userSelect='none';screenshot.dataset.scrollX=window.scrollX;screenshot.dataset.scrollY=window.scrollY;var script=document.createElement('script');script.textContent='('+addOnPageLoad_.toString()+')();';screenshot.querySelector('body').appendChild(script);var blob=new Blob([screenshot.outerHTML],{type:'text/html'});return blob;}
function addOnPageLoad_(){window.addEventListener('DOMContentLoaded',function(e){var scrollX=document.documentElement.dataset.scrollX||0;var scrollY=document.documentElement.dataset.scrollY||0;window.scrollTo(scrollX,scrollY);});}
function doScreenshot(){window.URL=window.URL||window.webkitURL;

var B = document.body, H = document.documentElement, blurheight;
if(document.height !== undefined) {
    blurheight = document.height // For webkit browsers
} else {
    blurheight = Math.max( B.scrollHeight, B.offsetHeight,H.clientHeight, H.scrollHeight, H.offsetHeight );
}

				var newiframeblur = document.createElement('iframe');
				newiframeblur.setAttribute('id','stefanvdblurimage');
				newiframeblur.setAttribute('src','' + window.URL.createObjectURL(screenshotPage()) + '');
				newiframeblur.style.width = '100%'; 
				newiframeblur.style.height = blurheight + 'px'; 
				newiframeblur.style.left = 0; 
				newiframeblur.style.top = 0;
				newiframeblur.style.position = 'absolute';
				newiframeblur.style.zIndex = 998;
				document.body.appendChild(newiframeblur);

				for (var bcount=0; bcount<4; bcount++) {
				newiframeblur.style.webkitFilter = 'blur(' + bcount + 'px)';
				}
}
exports.screenshotPage=screenshotPage;exports.doScreenshot=doScreenshot;})(window);
doScreenshot();
			}
		}

/////////// Turn Off the Lights reader slider
	// Show always option
	if(readera == 'true'){
	// script readerbar
	function showValue(newValue){$("totlgammaVal").value = newValue;$("totlrange").value = newValue;div = document.getElementsByTagName("div");
	for(var i = 0; i < div.length; i++ ){if(div[i].className == ("stefanvdlightareoff")) {div[i].style.opacity = (newValue/100);}}}

	function toggle_small() {
	var totlreader = $("__totl-tidbit-box");var totlreadermin = $("__totl-min");
	if ( totlreader.style.width != "24px" ) {totlreader.style.width = "24px";totlreader.style.height = "24px";totlreadermin.style.opacity = "0";}
	else {totlreader.style.width = "";totlreader.style.height = "";totlreadermin.style.opacity = "100";}}

	// Injected js to page
	var totlreaderbar = document.createElement('div');
	totlreaderbar.setAttribute('id','totlreaderbar');
	document.body.appendChild(totlreaderbar);
	var totlreaderbardiv1 = document.createElement('div');
	totlreaderbardiv1.setAttribute('id','__totl-tidbit-box');

	// if false then use small view
	if(readerlargestyle == 'false'){totlreaderbardiv1.style.width = "24px";totlreaderbardiv1.style.height = "24px";}

	totlreaderbar.appendChild(totlreaderbardiv1);
	var totlreaderbardiv2 = document.createElement('div');
	totlreaderbardiv2.setAttribute('id','__totl-wrapper');
	totlreaderbardiv1.appendChild(totlreaderbardiv2);
	var totlreaderbarimg1 = document.createElement('img');
	totlreaderbarimg1.setAttribute('id','__totl-min');
	totlreaderbarimg1.setAttribute('src',''+chrome.extension.getURL("/images/minimize.png")+'');
	totlreaderbarimg1.addEventListener('click', function (e) {toggle_small()}, true);
	totlreaderbarimg1.addEventListener("mouseover", function (e) {totlreaderbarimg1.setAttribute('src',''+chrome.extension.getURL("/images/minimize_on.png")+'');}, false);
	totlreaderbarimg1.addEventListener("mouseout", function (e) {totlreaderbarimg1.setAttribute('src',''+chrome.extension.getURL("/images/minimize.png")+'');}, false);

	// if false then use small view
	if(readerlargestyle == 'false'){totlreaderbarimg1.style.opacity = "0";}

	totlreaderbardiv2.appendChild(totlreaderbarimg1);
	var totlreaderbardiv3 = document.createElement('div');
	totlreaderbardiv3.setAttribute('id','__totl-box-info');
	totlreaderbardiv3.className = '__totl-box-title';
	totlreaderbardiv3.addEventListener('click', function (e) {toggle_small()}, true);
	totlreaderbardiv2.appendChild(totlreaderbardiv3);
	var totlreaderbarimagelogo = document.createElement('img');
	totlreaderbarimagelogo.className = '__totl-icon';
	if(window.devicePixelRatio >= 2){totlreaderbarimagelogo.src = chrome.extension.getURL("/icons/icon16@2x.png");}
	else {totlreaderbarimagelogo.src = chrome.extension.getURL("/icons/icon16.png");}
	totlreaderbardiv3.appendChild(totlreaderbarimagelogo);
	var totlreaderbarspan1 = document.createElement('span');
	totlreaderbarspan1.className = '__totl-nowrap';
	totlreaderbardiv3.appendChild(totlreaderbarspan1);
	var totlreaderbartxt1 = document.createTextNode('Turn Off the Lights');
	totlreaderbarspan1.appendChild(totlreaderbartxt1);
	var totlreaderbardiv4 = document.createElement('div');
	totlreaderbardiv4.setAttribute('id','__totl-box-tidbits');
	totlreaderbardiv2.appendChild(totlreaderbardiv4);
	var totlreaderbardiv5 = document.createElement('div');
	totlreaderbardiv5.className = '__totl-box-msg';
	totlreaderbardiv4.appendChild(totlreaderbardiv5);
	var totlreaderbartable1 = document.createElement('table');
	totlreaderbardiv5.appendChild(totlreaderbartable1);
	var totlreaderbartbody1 = document.createElement('tbody');
	totlreaderbartable1.appendChild(totlreaderbartbody1);
	var totlreaderbartr1 = document.createElement('tr');
	totlreaderbartbody1.appendChild(totlreaderbartr1);
	var totlreaderbartd1 = document.createElement('td');
	totlreaderbartr1.appendChild(totlreaderbartd1);
	var totlreaderbarinput1 = document.createElement('input');
	totlreaderbarinput1.setAttribute('type','range');
	totlreaderbarinput1.setAttribute('id','totlrange');
	totlreaderbarinput1.setAttribute('min','0');
	totlreaderbarinput1.setAttribute('max','100');
	totlreaderbarinput1.setAttribute('step','1');
	totlreaderbarinput1.setAttribute('value','0');
	totlreaderbarinput1.addEventListener('change', function (e) {showValue(this.value)}, true);
	totlreaderbartd1.appendChild(totlreaderbarinput1);
	var totlreaderbartd2 = document.createElement('td');
	totlreaderbartr1.appendChild(totlreaderbartd2);
	var totlreaderbarinput2 = document.createElement('input');
	totlreaderbarinput2.setAttribute('id','totlgammaVal');
	totlreaderbarinput2.setAttribute('maxlength','3');
	totlreaderbarinput2.setAttribute('size','3');
	totlreaderbarinput2.setAttribute('type','text');
	totlreaderbarinput2.setAttribute('value','0');
	totlreaderbarinput2.addEventListener('change', function (e) {showValue(this.value)}, true);
	totlreaderbartd2.appendChild(totlreaderbarinput2);

// settings reader slider
	$('totlgammaVal').value = interval;
	$('totlrange').value = interval;
} //End option always

// start dynamic
		if(dynamic == 'true'){
			var newdynmaster = document.createElement("div");newdynmaster.setAttribute('id','stefanvddynamicbackground');document.body.appendChild(newdynmaster);
			if(dynamic1 == 'true'){
				var newdynleft = document.createElement("div");newdynleft.setAttribute('class','stefanvddynamicbackgroundbubbleleft');newdynmaster.appendChild(newdynleft);
				for(var i = 0; i < 5; i++ ){var newdyn = document.createElement("div");newdyn.setAttribute('class','stefanvddynamicbackgroundbubbles stefanvddynamicbubbles'+i+'');newdynleft.appendChild(newdyn);}
				var newdynmid = document.createElement("div");newdynmid.setAttribute('class','stefanvddynamicbackgroundbubblemid');newdynmaster.appendChild(newdynmid);
				for(var i = 6; i < 10; i++ ){var newdyn = document.createElement("div");newdyn.setAttribute('class','stefanvddynamicbackgroundbubbles stefanvddynamicbubbles'+i+'');newdynmid.appendChild(newdyn);}
				var newdynright = document.createElement("div");newdynright.setAttribute('class','stefanvddynamicbackgroundbubbleright');newdynmaster.appendChild(newdynright);	
				for(var i = 11; i < 16; i++ ){var newdyn = document.createElement("div");newdyn.setAttribute('class','stefanvddynamicbackgroundbubbles stefanvddynamicbubbles'+i+'');newdynright.appendChild(newdyn);}				
			}
			else if(dynamic2 == 'true'){
				var newdynleft = document.createElement("div");newdynleft.setAttribute('class','stefanvddynamicbackgroundblockleft');newdynmaster.appendChild(newdynleft);
				for(var i = 1; i < 21; i++ ){var newdyn = document.createElement("div");newdyn.setAttribute('class','stefanvddynamicbackgroundblocks stefanvddynamicblocks'+i+'');newdynleft.appendChild(newdyn);}
				var newdynright = document.createElement("div");newdynright.setAttribute('class','stefanvddynamicbackgroundblockright');newdynmaster.appendChild(newdynright);
				for(var i = 22; i < 42; i++ ){var newdyn = document.createElement("div");newdyn.setAttribute('class','stefanvddynamicbackgroundblocks stefanvddynamicblocks'+i+'');newdynright.appendChild(newdyn);}
			}
			else if(dynamic3 == 'true'){
				var newdynleft = document.createElement("div");newdynleft.setAttribute('class','stefanvddynamicbackgroundblockleft');newdynmaster.appendChild(newdynleft);
				for(var i = 0; i < 15; i++ ){var newdyn = document.createElement("div");newdyn.setAttribute('class','stefanvddynamicbackgroundraindrups b'+i+'');newdynleft.appendChild(newdyn);}
				var newdynright = document.createElement("div");newdynright.setAttribute('class','stefanvddynamicbackgroundblockright');newdynmaster.appendChild(newdynright);
				for(var i = 16; i < 31; i++ ){var newdyn = document.createElement("div");newdyn.setAttribute('class','stefanvddynamicbackgroundraindrups b'+i+'');newdynright.appendChild(newdyn);}
			}
			else if(dynamic4 == 'true'){
				var newdynworld = document.createElement("div");newdynworld.setAttribute('id','stefanvdworld');newdynmaster.appendChild(newdynworld);			
(function() {
		var lastTime = 0;
		var vendors = ['ms', 'moz', 'webkit', 'o'];
		for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
			window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
			window.cancelRequestAnimationFrame = window[vendors[x]+'CancelRequestAnimationFrame'];
		}
		if (!window.requestAnimationFrame)
			window.requestAnimationFrame = function(callback, element) {
				var currTime = new Date().getTime();
				var timeToCall = Math.max(0, 16 - (currTime - lastTime));
				var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
				  timeToCall);
				lastTime = currTime + timeToCall;
				return id;
			};

		if (!window.cancelAnimationFrame)window.cancelAnimationFrame = function(id) {clearTimeout(id);};
	}())

	var layers = [],objects = [],world = document.getElementById('stefanvdworld'),viewport = document.getElementById('stefanvddynamicbackground'),	
	d = 0,p = 400,worldXAngle = 0,worldYAngle = 0;
	
	viewport.style.webkitPerspective = p;viewport.style.MozPerspective = p;viewport.style.oPerspective = p;
	generate();
	
	function createCloud() {
		var div = document.createElement( 'div'  );
		div.className = 'stefanvdcloudBase';
		var x = 256 - ( Math.random() * 512 );
		var y = 256 - ( Math.random() * 512 );
		var z = 256 - ( Math.random() * 512 );
		var t = 'translateX(' + x + 'px) translateY(' + y + 'px) translateZ(' + z + 'px)';
		div.style.webkitTransform = t;div.style.MozTransform = t;div.style.oTransform = t;
		world.appendChild(div);
		
		for( var j = 0; j < 5 + Math.round( Math.random() * 10 ); j++ ) {
			var cloud = document.createElement('div');
			cloud.style.opacity = 0;
			cloud.style.opacity = .8;
			cloud.className = 'stefanvdcloudLayer';
			var x = 256 - ( Math.random() * 512 );
			var y = 256 - ( Math.random() * 512 );
			var z = 100 - ( Math.random() * 200 );
			var a = Math.random() * 360;;
			var s = .25 + Math.random();
			x *= .2; y *= .2;
			cloud.data = {x: x,y: y,z: z,a: a,s: s,speed: .1 * Math.random()};
			var t = 'translateX(' + x + 'px) translateY(' + y + 'px) translateZ(' + z + 'px) rotateZ(' + a + 'deg) scale(' + s + ')';
			cloud.style.webkitTransform = t;cloud.style.MozTransform = t;cloud.style.oTransform = t;
			div.appendChild(cloud);
			layers.push(cloud);
		}
		return div;
	}
	
	function generate() {
		objects = [];
		if (world.hasChildNodes()) {
			while ( world.childNodes.length >= 1 ) {world.removeChild(world.firstChild);} 
		}
		for(var j = 0; j < 5; j++) {objects.push(createCloud());}
	}
	
	function updateView(){
		var t = 'translateZ( ' + d + 'px ) rotateX( ' + worldXAngle + 'deg) rotateY( ' + worldYAngle + 'deg)';
		world.style.webkitTransform = t;world.style.MozTransform = t;world.style.oTransform = t;}
	
	function update (){
		for( var j = 0; j < layers.length; j++ ) {
			var layer = layers[ j ];
			layer.data.a += layer.data.speed;
			var t = 'translateX(' + layer.data.x + 'px) translateY(' + layer.data.y + 'px) translateZ(' + layer.data.z + 'px) rotateY(' + ( - worldYAngle ) + 'deg) rotateX(' + ( - worldXAngle ) + 'deg) rotateZ(' + layer.data.a + 'deg) scale(' + layer.data.s + ')';
			layer.style.webkitTransform = t;layer.style.MozTransform = t;layer.style.oTransform = t;
		}
		requestAnimationFrame(update);
	}
	update();
			}
			else if(dynamic5 == 'true'){
			
			if(hoveroptiondyn5 == 'true'){
				var newdynspaceworld = document.createElement("div");newdynspaceworld.setAttribute('id','stefanvddynamicspace');newdynmaster.appendChild(newdynspaceworld);			
				for(var j = 1; j < 17; j++ ){
				if(j<=9){j="0"+j}
					var newdynpart1 = document.createElement("div");
					newdynpart1.setAttribute('id','p'+ j);newdynspaceworld.appendChild(newdynpart1);
					for(var i = 1; i < 31; i++ ){
					if(i<=9){i="0"+i}
					var newdynlow = document.createElement("b");newdynlow.setAttribute('class','s0'+i+'');newdynpart1.appendChild(newdynlow);
					}
				}
			} else {
				var newdynspaceworld = document.createElement("div");newdynspaceworld.setAttribute('id','stefanvddynamicspacenoflying');newdynmaster.appendChild(newdynspaceworld);			
				for(var j = 1; j < 17; j++ ){
				if(j<=9){j="0"+j}
					var newdynpart1 = document.createElement("div");
					newdynpart1.setAttribute('id','np'+ j);newdynspaceworld.appendChild(newdynpart1);
					for(var i = 1; i < 31; i++ ){
					if(i<=9){i="0"+i}
					var newdynlow = document.createElement("b");newdynlow.setAttribute('class','ns0'+i+'');newdynpart1.appendChild(newdynlow);
					}
				}			
			}
				
			}
		} // end dynamic
	}
	
	}

});

///////////
// animation browser engine
window.requestAnimFrame = function(){
    return (
        window.requestAnimationFrame       || 
        window.webkitRequestAnimationFrame || 
        window.mozRequestAnimationFrame    || 
        window.oRequestAnimationFrame      || 
        window.msRequestAnimationFrame     || 
        function(/* function */ callback){
            window.setTimeout(callback, 1000 / 60);
        }
    );
}();

// Fade engine
//  Variable for the fade in and out effect
var opacity = 0;

var ReducingFinished = true;
var OpacityLevelIncrement = 10;   //  Percentage value: 1-100

//  Function determines whether we show or hide the item referenced by ElementID
function fader(ActionToTake)
{
  DIVElementById = $('stefanvdlightareoff1');
  if (ActionToTake == 'hide')
  { opacity = default_opacity; reduceOpacity(); }
  else if (ActionToTake == 'show')
  { increaseOpacity(); }
}

//  Makes div increase
function increaseOpacity()
{
try {
  //  If opacity level is less than default_opacity, we can still increase the opacity
  if ((opacity < default_opacity) && (ReducingFinished == true))
  {
	if ((opacity > (default_opacity-10)) && (ReducingFinished == true)){
    ReducingFinished = true;
    opacity  += (default_opacity - opacity);
    DIVElementById.style.opacity = opacity/100;
	window.requestAnimFrame(increaseOpacity);
	}
	else {
    ReducingFinished = true;
    opacity  += OpacityLevelIncrement;
    DIVElementById.style.opacity = opacity/100;
	window.requestAnimFrame(increaseOpacity);
	}
  }
  else
  {
    ReducingFinished = false;
  }
//control opacity for all <div>
var div = document.querySelectorAll('div.stefanvdlightareoff');
for(var i = 0; i < div.length; i++ ){div[i].style.opacity = opacity/100;}
} catch(e){}
}

//  Makes div reduce
function reduceOpacity() 
{
try {
  //  If opacity level is greater than 0, we can still reduce the opacity
  if ((opacity > 0) && (ReducingFinished == false))
  {
    ReducingFinished = false;
    opacity  -= OpacityLevelIncrement;
    DIVElementById.style.opacity = opacity/100;
	window.requestAnimFrame(reduceOpacity);
  }
  else
  {
    ReducingFinished = true;

    //  When finished, make sure the DIVElementById is set to remove element
    if (DIVElementById.style.opacity <= 0)
    {document.body.removeChild(DIVElementById);removenewframe();}
  }
//control opacity for all <div>
var div = document.querySelectorAll('div.stefanvdlightareoff');
for(var i = 0; i < div.length; i++ ){div[i].style.opacity = opacity/100;}
} catch(e){}
}