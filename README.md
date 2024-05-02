/***********************************************************************************************************
* mse.js
*
* Code to play video with Media Source Extensions (MSE) API
*
* Based on code found here:
* https://github.com/bitmovin/mse-demo/blob/main/index.html
*
* For a good explanation, see
* https://learn.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/samples/dn551368(v=vs.85)?redirectedfrom=MSDN
*
* Command line command used to create segments of 10 seconds and frgaments of 1 second:
*
* MP4Box -dash 10000 -segment-name part_  -url-template "massage in aandacht-merged (720p + audio).mp4" -rap -segment-timeline
*
* Output:
* 1 mp4-file ("part_init.mp4")
* 10 m4s-files ("part_0.m4s", "part_154112.m4s", .. , "part_1159168.m4s")
* 1 mpd-file ("massage in aandacht-merged (720p + audio)_dash.mpd")
*
*************************************************************************************************************/
