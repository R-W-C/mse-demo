document.getElementById("audio-control").onclick = function()
{
	const myVideo = document.getElementById('myVideo');
	myVideo.muted = !myVideo.muted;
	this.innerText = myVideo.muted ? 'Play audio' : 'Mute audio';
};