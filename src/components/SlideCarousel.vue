<template>
  <div class="slider">
    <!-- <div class="slide-track">
      <div class="slide">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
      </div>
      <div class="slide">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
      </div>
      <div class="slide">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
      </div>
      <div class="slide">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
      </div>
      <div class="slide">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
      </div>
      <div class="slide">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
      </div>
      <div class="slide">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
      </div>
      <div class="slide">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
      </div>
      <div class="slide">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
      </div>
      <div class="slide">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
      </div>
      <div class="slide">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
      </div>
      <div class="slide">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
      </div>
      <div class="slide">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
      </div>
    </div> -->
  </div>
</template>

<script setup>
// https://codepen.io/abhikb/pen/yLgMvGw
// Important Notes
// Width of the slide should be such that at any given point of time the number of slides seen should be very near to the half of total slides
// Slide track width should be = width of 1 slide * total no of slides(original + duplicates )
// Scroll animation translateX from 0px to (width of 1 slide * no of original slides )
// If slides are more than or at least 10 then doubling the slides is enough
// If slides are less than 5-8 then tripling them might work
// Animation time is very important , exact no of total slides worked for me 😅

</script>

<style lang="scss" scoped>

$animationSpeed: 40s;

@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-250px * 7))}
}

.slider {
  height  : 100px   ;
  margin  : auto    ;
  overflow: hidden  ;
  position: relative;
  width   : auto    ;

  .slide-track {
    animation: scroll $animationSpeed linear infinite;
    display: flex;
    width: calc(250px * 14);
  }
  .slide {
    height: 100px;
    width: 250px;
  }
}

</style>
