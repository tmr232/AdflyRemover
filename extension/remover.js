document.onload = removeAdfly;
removeAdfly();

function removeAdfly() {
	var anchors=document.querySelectorAll("a");
	for(var i=0;i<anchors.length;++i) {
		anchors[i].href=anchors[i].href.replace(/http:\/\/adf\.ly\/[\d]*\/banner\//g, "http://");
	}
}