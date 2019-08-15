<template>
<div>
    <ul>
        <li :key="item.id" v-for="item in metalist" @click="goinfo(item)">
            <a href="#" @click="te"><img :src="item.picture"/></a>
            <p class="name">{{item.name}}</p>
            <p class="mark"><img class="love-it" src="../assets/17g.jpg"  alt="wrong"/>{{item.mark}}</p>
        </li>
    </ul>
</div>
</template>
<script>
import g9 from '../assets/9g.jpg';
import g10 from '../assets/10g.jpg';
import g11 from '../assets/11g.jpg';
import g12 from '../assets/12g.jpg';  
import { storyTwo } from './story.js';

export default{
    mounted(){
        this.test();
        this.$emit('updatevalue',['故 事 大 王',2])
    },
    data(){
        return{
            metalist:[],
            picture_l:[g9, g10, g11, g12],
            name_l:["草木皆兵","持之以恒","出类拔萃","从容不迫"],
            id_l:["1","2","3","4"],
            mark_l:["233","433","374","5565"],
            story_l:storyTwo,
        }
    },
    methods:{
        te (e) {
            e.preventDefault();
        },
         test(){
            for(let i=0;i<4;i++){
                this.metalist.push({
                    name: this.name_l[i],
                    picture: this.picture_l[i],
                    mark: this.mark_l[i],
                    id: this.id_l[i],
                    story:this.story_l[i],
                    })
            }
            console.log(this.metalist)
        },
        goinfo(info){
            sessionStorage.setItem('info',JSON.stringify(info));
            this.$router.push({
                path:"/metainfo",
                name:"metainfo",
                query:{id:123}
            })
        }


    },
}
</script>
<style>
.mark{text-align: right}.name{text-align: left}img{width:200px;height:400px;border-radius: 20px}ul{margin:0; display:flex;justify-content:space-between;padding-left: 0}a{text-decoration: none}li{padding:0px;margin-top:20px ;list-style:none;border:2px dashed purple;border-radius: 20px}
</style>
