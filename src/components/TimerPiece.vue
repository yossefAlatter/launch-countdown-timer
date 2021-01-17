<template>
    <div id="timer-piece">

        <!-- create Timer Dom area -->
        <!-- start -->
        <div class="counter-con"></div>
        <!-- end -->

    </div>
</template>

<script>

import $ from 'jquery'

export default {
    name: 'TimerPiece',

    props: ["selector","num"],

    data(){
        return {
            counter: this.num 
        }
    },

    methods:{

        //== method to create Dom of timer ==//
        //== start ==//
        createTimerDom(counter,selector){
            $(selector).html(`
                <div class="parent">
                    <div class="layer1">
                        <div class="num1">${counter-1}</div>
                    </div>
                    <div class="layer2">
                        <div class="cover"></div>
                        <div class="num2">${counter}</div>
                    </div>
                </div>
                <div class="layer3">
                    <div class="cover"></div>
                    <div class="num3">${counter-1}</div>
                </div>
                <div class="layer4">
                    <div class="num4">${counter}</div>
                </div>
            `)
        },
        //== end ==//

        //== method to make flip animation ==//
        //== start ==//
        creatFlipAnimation(selector){
            $(selector).css({
            'transition': 'all 0.9s',
            'transition-timing-function': 'ease-in-out',
            'transform': 'rotate3d(1, 0, 0, -180deg)'
        })
        },
        //== end ==//

        //== method to reset animation to zero point ==//
        //== start ==//
        goToZeroPoint(selector){
            $(selector).css({
                'transition': 'all 0s',
                'transform': 'rotate3d(1, 0, 0, 0deg)'
            })
        },
        //== end ==//

        //== method to lanuch timer down ==//
        //== start ==//
        launchTimerDown(counter){
            this.creatFlipAnimation(`${this.selector} .parent`);
            setTimeout(()=>{
                this.createTimerDom(counter,`${this.selector} .counter-con`)
                this.goToZeroPoint(`${this.selector} .parent`)
        
        },900)
        },
        //== end ==//

    },

    mounted(){
    
    this.createTimerDom(this.counter,`${this.selector} .counter-con`)
    if(this.selector == '.seconds'){
        var mycounterHero = setInterval(()=>{
            this.launchTimerDown(--this.counter)
            if (this.counter == 0 ){
                clearInterval(mycounterHero)
            }
        },1000);
    }

    },

}
</script>

<style lang="scss" scoped>



</style>