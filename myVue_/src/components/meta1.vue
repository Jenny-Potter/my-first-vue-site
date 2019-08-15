<template>
<div>
    <ul>
        <li :key="item.id" v-for="item in metalist" @click="goinfo(item)">
            <a href="#" @click="te"><img class="listpic" :src="item.picture"/></a>
            <p class="name">{{item.name}}</p>
            <p class="mark"><img class="love-it" src="../assets/17g.jpg"  alt="wrong"/>{{item.mark}}</p>
        </li>
    </ul>
</div>
</template>
<script>
import g5 from '../assets/5g.jpg';
import g6 from '../assets/6g.jpg';
import g7 from '../assets/7g.jpg';
import g8 from '../assets/8g.jpg'; 
import { storyOne } from './story.js'; 

export default{
    mounted(){
        this.test();
        this.$emit('updatevalue',['故 事 大 王',2])
    },
    data(){
        return{
            metalist:[],
            picture_l:[g5, g6, g7, g8],
            name_l:["举一反三","班门弄斧","囫囵吞枣","打草惊蛇"],
            id_l:["1","2","3","4"],
            mark_l:["455343","34","45","3554"],
            story_l:storyOne,
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
.mark{text-align: right}.name{text-align: left}.listpic{width:200px;height:400px;border-radius: 20px}ul{margin:0; display:flex;justify-content:space-between;padding-left: 0}a{text-decoration: none}li{padding:0px;margin-top:20px ;list-style:none;border:2px dashed purple;border-radius: 20px}
</style>
