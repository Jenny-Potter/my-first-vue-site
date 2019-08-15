<template>
<div class="headline">
    
    <a href="#"><span class="arrow" @click="goback()">⬅</span></a>
    <h1 class="h1" v-text="title"></h1> 
</div>
</template>
<script>
export default{
    data(){
        return{
            
        }
    },
    methods:{
        goback(){   //是否可以改成goback:function(){}
            history.back(-1);
        }
    },
    props:{title:String},
}
</script>
<style>
.headline{background:blueviolet; width:100% px;height:75px;position:fixed top;display:flex;align-items:center}
.arrow{position:left ;color:yellow;font-size: 30px}
.h1{color:white;text-align:center ;display:inline;text-align: center;margin-left: 50%}
a{text-decoration:none;width:10px;height:10px}
span{border:0.5px solid pink;width:20px;height:10px;border-radius:10px}
</style>


