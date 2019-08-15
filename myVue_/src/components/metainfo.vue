<template>
<div class="background" v-if="info">
    <div class="picture-left">
        <img class="showpic" :src="info.picture">
        <p class="infoname">{{info.name}}</p>
        <p class="like">点击次数<img class="love-it" src="../assets/17g.jpg"  alt="wrong"/>{{info.mark}}</p>
    </div>
    <div class="text-right" >
        <div class="storyborder">
            <div class="storyall">
            <p class="story" style="line-height:50px">{{partof}}</p>
            <p class="story_rest">{{partofrest}}</p>
            </div>
        </div>  
    </div>
</div> 
</template>
<script>
import bg18 from '../assets/18g.jpg';
export default{
    mounted(){
        let get_value =sessionStorage.getItem('info')||0;
        let info =JSON.parse(get_value);
        this.info=info;
        this.$emit('updatevalue',[this.info.name,2]);
        let partofnum=info.story.indexOf('[');
        this.partof=info.story.slice(0,partofnum);
        this.partofrest=info.story.slice(partofnum);
    },
    data(){
        return{
            info:'',
            infoPart:'',
            partofrest:'',
            partof:'',

        }
    }
}
</script>
<style>
.showpic{width:280px;height:560px}
.background{
    background:gainsboro;
    display:flex;
    }
.like{text-align: right;font-weight:bold}
.picture-left{width:50%;height: 100%;margin-top:3px}
.infoname{font-size:25px;color: gold;
letter-spacing: 0;margin-top:0;
text-shadow: 0px 1px 0px #999, 0px 2px 0px #888, 0px 3px 0px #777, 0px 4px 0px #666, 0px 5px 0px #555, 0px 6px 0px #444, 0px 7px 0px #333, 0px 8px 7px #001135}
.text-right{padding: 100px;}
.story{letter-spacing:2px;font-size:20px;font-family:"SimHei";color:rgb(156, 108, 18)}
.story_rest{margin-top: 30px;color:rgb(41, 68, 223)}
.storyall {
    border-radius:30px;
    margin:0px;
    border:5px solid rgb(190, 179, 179);
}
.storyborder{
    border:35px solid;
    border-image: url('../assets/18g.jpg') 100% round;
}
</style>