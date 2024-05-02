/***********************************************************************************************************
* mse.js
*
* Code to play video with Media Source Extensions (MSE) API
* 
* Based on code found here: 
* https://github.com/bitmovin/mse-demo/blob/main/index.html
* 
* For a good explanation on the MSE API, see 
* https://learn.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/samples/dn551368(v=vs.85)?redirectedfrom=MSDN
* 
* Command line command used to create segments with a segment timeline:
* 
* MP4Box -dash 10000 -segment-name part_  -url-template "original.mp4" -rap -segment-timeline
* 
* Output:
* 1 mp4-file ("part_init.mp4")
* 10 m4s-files ("part_0.m4s", "part_153856.m4s" .. "part_1158912.m4s")
* 1 mpd-file ("original_dash.mpd")
*
*************************************************************************************************************/

(function() {

  const INITURL = 'part_init.mp4';

  const CHUNKS = [
	  "part_0.m4s",
	  "part_153856.m4s",
	  "part_296704.m4s",
	  "part_411136.m4s",
	  "part_560896.m4s",
	  "part_651008.m4s",
	  "part_779008.m4s",
	  "part_939264.m4s",
	  "part_1025792.m4s",
	  "part_1158912.m4s"
  ];
	
  const BASEURL = './video/';

  const MIMETYPE = 'video/mp4';
  const CODECS = 'avc1.640020,mp4a.40.2'; //Get this from mpd-file

  var sourceBuffer;
  var index = 0;

  var video = document.querySelector('video');

  if (!window.MediaSource) {
	console.error('No Media Source API available');
	return;
  }

  var ms = new MediaSource();
  video.src = window.URL.createObjectURL(ms);
  ms.addEventListener('sourceopen', onMediaSourceOpen);

  function onMediaSourceOpen() {
	sourceBuffer = ms.addSourceBuffer(MIMETYPE + '; codecs="' + CODECS + '"');
	sourceBuffer.addEventListener('updateend', nextSegment);

	GET(BASEURL + INITURL, appendToBuffer);

	video.play();
  }

  function nextSegment() {
	var url = BASEURL + CHUNKS[index];
	GET(url, appendToBuffer);
	index++;
	if (index == CHUNKS.length) {
			sourceBuffer.removeEventListener('updateend', nextSegment);
	}
  }

  function appendToBuffer(videoChunk) {
	if (videoChunk) {
	  sourceBuffer.appendBuffer(new Uint8Array(videoChunk));
	}
  }

  function GET(url, callback) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url);
	xhr.responseType = 'arraybuffer';

	xhr.onload = function(e) {
	  if (xhr.status != 200) {
		console.warn('Unexpected status code ' + xhr.status + ' for ' + url);
		return false;
	  }
	  callback(xhr.response);
	};

	xhr.send();
  }
})();
