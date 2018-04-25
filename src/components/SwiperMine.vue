<template>
    <div class="swiper-container">
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide>
                <img src="/static/img/slider1.jpg" />
            </swiper-slide>
            <swiper-slide>
                <img src="/static/img/slider2.jpg" />
            </swiper-slide>
            <swiper-slide>
                <img src="/static/img/slider3.jpg" />
            </swiper-slide>
        </swiper>
        <div class="swiper-pagination"></div>
    </div>
    
</template>

<script>
    import Vue from 'vue'
    import VueAwesomeSwiper from 'vue-awesome-swiper'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import 'swiper/dist/css/swiper.min.css';
    Vue.use(VueAwesomeSwiper)

    export default {
        data() {
            return {
                    swiperOption: {
                        notNextTick: true,
                        loop: true,
                        autoplay: 3000,
                        direction : 'horizontal',
                        grabCursor : true,
                        setWrapperSize :true,
                        autoHeight: true,
                        pagination : '.swiper-pagination',
                        paginationClickable :true,
                        prevButton:'.swiper-button-prev',
                        nextButton:'.swiper-button-next',
                        scrollbar:'.swiper-scrollbar',
                        mousewheelControl : true,
                        observeParents:true,
                        debugger: true,
                        pagination: {
                            el: '.swiper-pagination',
                        },
                        
                        onTransitionStart(swiper){
                            console.log(swiper)
                        },
                    }
                }
            },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },
        mounted() {
            console.log('this is current swiper instance object', this.swiper)
            this.swiper.slideTo(3, 1000, false)
        },
        components: {
            swiper,
            swiperSlide
        }
    }
</script>
<style>
    .swiper-pagination {
        bottom: 0;
        left: 0;
        right: 0;
    }
    .swiper-pagination-bullet{
        margin: 6px 3px
    }
    .swiper-pagination-bullet-active{
        background: #c62f2f
    }
    .swiper-slide img{
        width: 100%
    }
</style>