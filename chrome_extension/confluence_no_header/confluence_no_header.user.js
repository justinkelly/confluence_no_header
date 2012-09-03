// ==UserScript==
// @name           Confluence : No Header - for Swinburne.edu.au wiki
// @author         Justin Kelly https://github.com/justinkelly/confluence_no_header
// @version        1
// @include        https://wiki.swinburne.edu.au*
// @include        http://wiki.swinburne.edu.au*
// ==/UserScript==

cssString = ' '+
	'#header-precursor '+
	'{ '+
	'	display:none; ' +
	'} '+
	' '+
	'#header'+
	'{ '+
	'	margin-top: 0px !important;'+
	'} ';

insertCSS(cssString);
// Function to insert CSS
function insertCSS(cssToInsert) {
	var head=document.getElementsByTagName('head')[0];
	if(!head)
		return;
	var style=document.createElement('style');
	style.setAttribute('type','text/css');
	style.appendChild(document.createTextNode(cssToInsert));
	head.appendChild(style);
}