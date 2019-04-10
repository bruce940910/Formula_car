<template>
  <div class="block">
    <!-- 轮播 -->
    <!-- <el-carousel>
      <el-carousel-item v-for="item in imglist" :key="item.id">
          <img :src="item.img_url" >
      </el-carousel-item>
    </el-carousel> -->

    <el-carousel :interval="5000" arrow="always" height="560px">
      <el-carousel-item v-for="item in imglist" :key="item.id">
        <img v-lazy="item.img_url" class="imgitem">
      </el-carousel-item>
    </el-carousel>
    <router-view></router-view>
    <!-- <router-view name="a"></router-view>
    <router-view name="b"></router-view> -->
  </div>
  
  
</template>

<script>
    export default{
      data(){
        return{
          imglist :[],
          pic:[],
          formula:[],
          sucImg:[],
          myVideo:[],
        }
      },
      methods:{
        //轮播图片
        getImg(){
          var url = "http://127.0.0.1:8686/imagelist";
          this.axios.get(url).then(result=>{
            //console.log(result.data);
            for(var item of result.data){
              this.imglist.push(item);
              // console.log("imglist=",this.imglist);
              
            }
            //console.log(this.imglist[0].img_url);
            
          })
        },
        
      },
      
      created(){
        this.getImg();
      }
    }
</script>
<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  /* card */
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
  .imgitem{
    width: 100%
  }

</style>
  