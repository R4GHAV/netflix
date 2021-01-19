window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("navv").style.backgroundColor = 'rgba('+13+','+ 13+','+ 13+','+ 1+')';
  } else {
    document.getElementById("navv").style.backgroundColor = 'rgba('+13+','+ 13+','+ 13+','+ 0.01+')';
  }
}
function mute() {
  var video=document.querySelector('.vid');
  if(video.muted === true){
    video.muted=false;
    document.querySelector('.mute').innerHTML="<i class=\"fas fa-volume-up\" aria-hidden=\"true\"></i>";
  }else if (video.muted === false) {
    video.muted=true;
      document.querySelector('.mute').innerHTML="<i class=\"fas fa-volume-mute\" aria-hidden=\"true\"></i>";
  }
}
