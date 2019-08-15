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
<script type="module">
import g1 from '../assets/1g.jpg';
import g2 from '../assets/2g.jpg';
import g3 from '../assets/3g.jpg';
import g4 from '../assets/4g.jpg';
import { eventBus } from '../main.js';
import { storyZero } from './story.js';

export default{
    created(){
        eventBus.$on('submit-number',(data)=>{this.program(data)})
    },
    mounted(){
       this.test();
       this.$emit('updatevalue',['故 事 大 王',2]);
    },  
    data(){
        return{
            metalist:[],
            picture_l:[g1, g2, g3, g4],
            name_l:["名落孙山","塞翁失马","三顾茅庐","安居乐业"],
            id_l:["1","2","3","4"],
            mark_l:["2233","423","3324","5535"],
            story_l:storyZero,
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
        },
        program(info){
           let num=Number(info);
           switch(num){
               case 1:
                   this.$router.push({
                   path:"meta",
                   name:"meta",
                })
                break;
                case 2:
                   this.$router.push({
                   path:"meta1",
                   name:"meta1",
                })
                break;
                case 3:
                   this.$router.push({
                   path:"meta2",
                   name:"meta2",
                })
                break;
                case 4:
                   this.$router.push({
                   path:"meta3",
                   name:"meta3",
                })
                break;

           } 
            
        },
        },
}
</script>
<style>
.mark{text-align: right}
.name{text-align: left}
img{width:200px;height:400px;border-radius: 20px}
ul{margin:0; display:flex;justify-content:space-between;padding-left: 0}
a{text-decoration: none}
li{padding:0px;margin-top:20px ;list-style:none;border:2px dashed purple;border-radius: 20px}
</style>
