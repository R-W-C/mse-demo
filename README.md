
Code to play video with Media Source Extensions (MSE) API

Based on code found here: 
https://github.com/bitmovin/mse-demo/blob/main/index.html

For a good explanation on the MSE API, see 
https://learn.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/samples/dn551368(v=vs.85)?redirectedfrom=MSDN

Command line command used to create segments with a segment timeline:

MP4Box -dash 10000 -segment-name part_  -url-template "original.mp4" -rap -segment-timeline

Output:
* 1 mp4-file ("part_init.mp4")
* 10 m4s-files ("part_0.m4s", "part_154112.m4s" .. "part_1159168.m4s")
* 1 mpd-file ("massage in aandacht-merged (720p + audio)_dash.mpd")


Demo site: https://r-w-c.github.io/mse-demo
