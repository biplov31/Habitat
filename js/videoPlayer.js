const  videoPlayer = document.querySelector('.video-player');
const videoContent = document.querySelector('.video-content')

// close video when clicked on stop button
const closeVideo = document.querySelector('.close-btn');
closeVideo.addEventListener('click', stopVideo);
function stopVideo() {
  videoPlayer.style.display = 'none';
};

// play video when clicked on play button
const playVideo = document.querySelector('.play-btn');
playVideo.addEventListener('click', startVideo);
  // console.log(e.target.closest('.vid-thumbnail').classList);
function startVideo(vidFile) {
  // let thumbImg = playVideo.closest('.vid-thumbnail');
  videoContent.src = vidFile;
  videoPlayer.style.display = 'block';
}

// const videoGallery = document.querySelector('.video-gallery');
// const thumbImg = Array.from(videoGallery.children);
// console.log(thumbImg[0]);

// when a play button is clicked we want to find the thumbnail image associated with it (thumb-img whose overlay has that play button) and pass respective link of video as the src element of video-player so that video gets displayed
document.querySelectorAll('.play-btn').forEach( img => {
  img.addEventListener('click', (e) => {
    let listClass = e.target.closest('.vid-thumbnail').classList;   // when a play button is clicked, JS looks for the closest parent with the class 'vid-thumbnail' and returns an array containing all the lists in that element/div i.e. 
    if (listClass.contains('thumb-img1')) {   // .includes() does not work with classList because it does not exactly return an array. so use .contains and and do not use dot in front of className because class is already referenced beforehand with classList
      console.log('It does.')
      vidFile = "./videos/vid1.mp4";
    } else if (listClass.contains('thumb-img2')) {
      vidFile = "./videos/vid2.mp4";
    } else if (listClass.contains('thumb-img3')) {
      vidFile = "./videos/vid3.mp4";
    } else if (listClass.contains('thumb-img4')) {
      vidFile = "./videos/vid4.mp4";
    } else {
      vidFile = "./videos/vid5.mp4";
    }
    startVideo(vidFile);
  });
})


