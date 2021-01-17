<template>
  <div id="app">

    <!-- AppBg -->
    <!-- start -->
    <app-bg />
    <!-- end -->

    <!-- App Head -->
    <!-- start -->
    <h2 class="app-head">
      We're launching soon
    </h2>
    <!-- end -->

    <!-- Timer -->
    <!-- start -->
    <complete-timer-pieces />
    <!-- end -->

    <!-- App Footer -->
    <!-- Start -->
    <div class="app-footer">
      <div class="icons-con">
        <span class="mr-3 mr-sm-5"><font-awesome-icon :icon="{prefix: 'fab',iconName: 'facebook-square'}" /></span>
        <span class="mr-3 mr-sm-5"><font-awesome-icon :icon="{prefix: 'fab',iconName: 'pinterest'}" /></span>
        <span><font-awesome-icon :icon="{prefix: 'fab',iconName: 'instagram'}" /></span>
      </div>
    </div>
    <!-- End -->

  </div>
</template>

<script>
//== import components ==//
//== start ==//
import AppBg from './components/AppBg.vue'
//== end ==//

//== import font awesome ==//
//== start ==//
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookSquare, faInstagram ,faPinterest} from '@fortawesome/free-brands-svg-icons'
import CompleteTimerPieces from './components/CompleteTimerPieces.vue'
library.add([faFacebookSquare, faInstagram ,faPinterest])
//== end ==//

export default {
  components: { AppBg, CompleteTimerPieces },
  name: 'App',

}
</script>

<style lang="scss">

//== app style ==//
//== start ==//
#app{
  height: 100vh;
  position: relative;
}
//== end ==//

//== app-head style ==//
//== start ==//
.app-head{
  color: var(--color3);
  text-transform: uppercase;
  padding-top: 92px;
  padding-bottom: 47px;
  position: relative;
  text-align: center;
  letter-spacing: 3px;
}
//== end ==//

//== app-head media ==//
//== start ==//
@media screen and (max-width: 500px) {
  .app-head{
    font-size: 2em;
    margin: 0;
  }
}
@media screen and (max-width: 430px) {
  .app-head{
    font-size: 1.8em;
    padding-top: 89px;
    padding-bottom: 27px;
    margin: 0;
  }
}
@media screen and (max-width: 400px) {
  .app-head{
    font-size: 1.6em;
    padding-top: 87px;
    padding-bottom: 23px;
  }
}  
@media screen and (max-width: 365px) {
  .app-head{
    font-size: 1.4em;
  }
}  
@media screen and (max-width: 325px) {
  .app-head{
    font-size: 1.2em;
  }
}  
@media screen and (max-width: 285px) {
  .app-head{
    font-size: 1em;
  }
}  
@media screen and (max-width: 245px) {
  .app-head{
    font-size: 0.8em;
  }
} 
//== end ==//

//== app-footer style ==//
//== start ==//
.app-footer{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 50;
  .icons-con{
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    padding-bottom: 72px;
    span{
      color: var(--color1);
      font-size: 2em;
      cursor: pointer;
      &:hover{
        transition: all 0.3s;
        color: var(--color2);
      }
    }
  }
}
//== end ==//

</style>
