var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    res = JSON.parse(this.response)

    // Hide our shame when it all goes wrong.
    if (!res.songName) {
      return;
    }

    // Detect if i'm actively listening to music.
    if (res.isPlaying) {
      document.getElementById("songStatus").innerHTML = "Josh is currently listening to "
    } else {
      document.getElementById("songStatus").innerHTML = "Josh last listened to "
    }
    // Song name and artist.
    document.getElementById("songName").innerHTML = res.songName;
    document.getElementById("filler1").innerHTML = " by ";
    document.getElementById("artistName").innerHTML = res.artistName;
    document.getElementById("filler2").innerHTML = " on spotify.";

  }
};
xhttp.open(
  "GET",
  "https://8yudihebd0.execute-api.us-east-2.amazonaws.com/v1/current",
  true
);
xhttp.send();
