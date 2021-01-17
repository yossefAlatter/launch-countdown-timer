<template>
  <div id="app-bg">

      <!-- starts layer -->
      <!-- start -->
      <div class="starts-layer">
          <img :src="startsBg.bgUrl" :alt="startsBg.bgUrl">
      </div>
      <!-- end -->

      <!-- hills layer -->
      <!-- start -->
      <div class="hills-layer">
          <img :src="hillsBg.bgUrl" :alt="hillsBg.bgUrl">
      </div>
      <!-- end -->
       
  </div>
</template>

<script>

export default {
  name: 'AppBg',

  data(){
      return {
          startsBg: {
              bgName: 'starts',
              bgUrl: require('./../assets/bg-stars.svg'),
          },
          hillsBg: {
              bgName: 'hills',
              bgUrl: require('./../assets/pattern-hills.svg'),
          },
      }
  }

}
</script>

<style lang="scss">

//== app-bg style ==//
//== start ==//
#app-bg{
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: var(--color5);
    overflow: hidden;
    .starts-layer{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        img{
            min-width: 100%;
        }
    }
    .hills-layer{
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        img{
            min-width: 100%;
            height: 194px;
        }
    }
}
//== end ==//

</style>
