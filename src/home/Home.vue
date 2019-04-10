<template>
  <div class="block">
    <!-- 轮播 -->
    <carousel></carousel>
    <!-- 赛车介绍 -->
    <mybody></mybody>
  </div>
  
  
</template>

<script>
import carousel from '../carousel/carousel.vue'
import mybody from '../body/Body.vue'
import { mapState } from 'vuex'
    export default{
       components: {carousel,mybody,},
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
        //赛车介绍图
        getcar_pic(){
          var url = "http://127.0.0.1:8686/pic";
            this.axios.get(url).then(result=>{
              this.pic = result.data;
              //console.log(result.data);
            }) 
        },
        //方程式赛车图
        getformula(){
          var url = "http://127.0.0.1:8686/formula";
          this.axios.get(url).then(result=>{
            // console.log(result.data);
            this.formula = result.data;
            console.log(this.formula);
          })
        },
        //成功案例图片
        getSucImg(){
                var url = "http://127.0.0.1:8686/sucimg";
                this.axios.get(url).then(result=>{
                  for(var item of result.data){
                    this.sucImg.push(item);
                    
                  }
                  //console.log(this.sucImg);
                })
            },
        // 获取视频
        getVideo(){
          var url = "http://127.0.0.1:8686/myvideo";
          this.axios.get(url).then(result=>{
            // console.log(result.data);
            this.myVideo = result.data;
          })
        },
      },
      
      created(){
        isLogo:{
          if (sessionStorage.getItem('uname')) {
            this.$store.commit('userStatus',sessionStorage.getItem('uname'))
          }else{
            // this.$router.push("/");
          }
        };
        console.log('登录状态',this.$store.state.currentUser);
        this.getImg();
        this.getcar_pic();
        this.getformula();
        this.getSucImg();
        this.getVideo();
      },

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

</style>
  