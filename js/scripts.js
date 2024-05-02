document.getElementById("audio-control").click(function(){
    if( document.getElementById("myVideo").prop('muted') ) {
          document.getElementById("myVideo").prop('muted', false);
          this.innerText = 'Mute audio';
    } else {
      document.getElementById("myVideo").prop('muted', true);
      this.innerText = 'Play audio';
    }
});
