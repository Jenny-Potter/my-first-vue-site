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
import g13 from '../assets/13g.jpg';
import g14 from '../assets/14g.jpg';
import g15 from '../assets/15g.jpg';
import g16 from '../assets/16g.jpg'; 
import { storyThree } from './story.js'; 

export default{
    mounted(){
        this.test();
        this.$emit('updatevalue',['故 事 大 王',2])
    },
    data(){
        return{
            metalist:[],
            picture_l:[g13, g14, g15, g16],
            name_l:["大器晚成","大义灭亲","口若悬河","滥竽充数"],
            id_l:["1","2","3","4"],
            mark_l:["2345","4353","34354","55355"],
            story_l:storyThree,
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
