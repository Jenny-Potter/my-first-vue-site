<template>
<div class="allpage">
<headpage :title='title'></headpage><!--父组件app传给子组件headpage-->
<div class="router-view">
<router-view @updatevalue='updatevalue'></router-view><!--子组件meta传给父组件app-->
</div>
<footpage :page='page'></footpage>
</div>
</template>
<script>
import headpage from'./components/headpage';
import footpage from'./components/footpage';

export default {
  data(){
    return{
      title:'',
      page:'',

    };
  },
  components:{headpage,footpage},
  mounted() {

  },
  methods:{
    updatevalue(arrayvalue){this.title=arrayvalue[0];this.page=arrayvalue[1]}
  }
};
</script>
<style>
.allpage{width:100%;height:100%}
headpage{height:50%}
*.love-it{width:20px;height:20px}
*.name{font-size:25px;color: gold;
letter-spacing: 0;margin-top:0;
text-shadow: 0px 1px 0px #999, 0px 2px 0px #888, 0px 3px 0px #777, 0px 4px 0px #666, 0px 5px 0px #555, 0px 6px 0px #444, 0px 7px 0px #333, 0px 8px 7px #001135}
</style>