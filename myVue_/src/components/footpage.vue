<template>
<div class="list_page">  
    <div style='padding:20px;' :key='item.number' v-for='item in items' v-on:click='addClickEvent(item)'>{{item.number}}</div>
</div>
</template>
<script type='module'>
import{eventBus}from '../main.js'; 
export default{
    mounted(){
    this.test_l();
    this.test();
    },
    data(){
        return {
           items:[],
           number_l:['1','2','3','4'],
        }
    },
    methods:{
        test_l(){ //添加class
            var div_number=document.querySelector(".list_page").childNodes;
            let div_number_type=[];
            for(let i=0;i<div_number.length;i++){
                div_number_type.push(div_number[i].nodeType);
                console.log(div_number_type);
                if(div_number_type[i]==1){
                    div_number[i].setAttribute('class','type_l')
                }
            }
        }, 
        test(){
            for(let i=0;i<4;i++){
                this.items.push({
                    number: this.number_l[i],
                    })
            }
        },
        addClickEvent(info){
            eventBus.$emit('submit-number',info.number);
        }
    },
    props:{page:Number},
}
</script>
<style>
.list_page{display:flex;justify-content:space-around;width:100%;margin-top:5px;padding-left:-60px;background: blueviolet}
.type_l{display: flex;height:40px;align-items: center;
justify-content: center;border:2px solid brown;
font-weight:20;border-radius:10px;width:80px;}
.list_page div:hover{background:rgb(248, 170, 170)}
</style>
