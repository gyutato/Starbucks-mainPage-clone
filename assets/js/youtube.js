/* iFrame API: 단순한 소스 코드 복사로는 제어 불가능한 음소거, 자동재생 등의 기능 제어를 위해 사용 */

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

/* var player; 
The <iframe> (and video player) will replace this <div> tag.
즉, <div id="player"></div> 자리에 들어갈 것이므로 따로 변수 player를 사용하지는 않을 것임 */

function onYouTubeIframeAPIReady() {
  /* player = */ new YT.Player('player', { // player 변수를 사용하지 않을 것이므로 없어도 됨
    // height: '360', CSS에서 지정해 주었으므로 여기서 지정할 필요 없음
    // width: '640',
    videoId: 'An6LvWQuj_8',
    playerVars: {
        autoplay: true, // 자동 재생 유무
        loop: true, // 반복 재생 유무
        playlist: 'An6LvWQuj_8' // 반복 재생할 유튜브 영상 ID 목록
    },
    events: {
        onReady: function(event) {
            event.target.mute()
        }
    }
    // events: {
    //   'onReady': onPlayerReady,
    //   'onStateChange': onPlayerStateChange
    // } 사용 안함...
  });
}