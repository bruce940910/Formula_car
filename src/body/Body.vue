<template>
    <div id="mybody">
        <!-- <router-view></router-view> -->
        <router-view name="carousel"></router-view>
        <!-- 赛车介绍 -->
      <!-- 介绍一楼 -->
    <el-row>
        <p><a href="javascript:;">赛车介绍</a></p>
        <p>FOCUS ON WEB DESIGN BRAND POSITIONING HELP YOU REALIZE THE VALUE OF INTERNET BRAND</p>
        <p>专注高端 精准定位 用心服务 帮您实现品牌价值</p>
    </el-row>
    <el-row type="flex" justify="space-around">
    <el-col :span="5"  v-for="item in pic" :key="item.id" >
      <el-card :body-style="{ padding: '0px' }">
        <img v-lazy="item.pic_img" class="image" >
        <div class="card_info" style="padding: 14px;">
          <h4 >
            <!-- <a href="JavaScript:;" class="ssc">{{item.title}}</a> -->
            <router-link :to="{path:'introduce',query:{c_name:item.c_name}}">{{item.title}}</router-link>
          </h4>
        <span>{{item.intr}}</span>
        <div class="bottom clearfix">
          <!-- <time class="time">{{ currentDate }}</time> -->
          <!-- <el-button type="text" class="button">操作按钮</el-button> -->
        </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
      <!-- 介绍二楼 -->
  <el-row type="flex" justify="space-around">
    <el-col :span="7"  v-for="item in formula" :key="item.id">  
       <h4><a href="javascript:;">{{item.title}}</a></h4>
      <el-card :body-style="{ padding: '0px' }">
        <img v-lazy="item.formula" class="image">
        <div style="padding: 14px;">
        <span class="card-intr">{{item.intr}}</span>
        <div class="bottom clearfix">
          <!-- <time class="time">{{ currentDate }}</time> -->
          <!-- <el-button type="text" class="button">操作按钮</el-button> -->
        </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
    <!-- 成功案例 -->
    <el-row class="success-case">
      <p><a href="javascript:;">成功案例</a></p>
      <p>HAS BEEN FULL OF ENTHUSIASM TO MEET UNDERSTAND DESIGN YOU!</p>
      <p>有活力、有梦想、有品位、有创意，与一般团队有独特区别的年轻队伍</p>
        <!-- 成功-轮播 -->
    <el-row>
      <el-col :span="24">
        <el-card shadow="never" :body-style="{ padding: '0px',border: '0px' }">
        <!--  -->
        <div style="padding: 14px;">
          <el-carousel :interval="5000" arrow="always" type="card" indicator-position="none">
            <el-carousel-item v-for="item in sucImg" :key="item.id">
              <img v-lazy="item.img_url" >
            </el-carousel-item>
          </el-carousel>
          <div class="bottom clearfix">
          <!-- <time class="time">{{ currentDate }}</time> -->
          <!-- <el-button type="text" class="button">操作按钮</el-button> -->
          </div>
        </div>
        </el-card>
      </el-col>
    </el-row>
    </el-row>
    
    <!-- 关于我们 -->
    <div class="about-us">
      <el-row>
      <p><a href="javascript:;">关于我们</a></p>
      <p>THE STRENGTH OF BRAND INNOVATION SCIENCE AND TECHNOLOGY WILL NEVER STOP</p>
      <p>实力品牌 专业技能 技术人才 创新科技 永不止步</p>
    </el-row>
    <!-- 视频 -->
    <my-video></my-video>
    <!-- <el-row type="flex" :gutter="20" >
      <el-col :span=6 offset=9 justify="space-around">
        <my-video></my-video>
      </el-col>
    </el-row> -->
    </div>
    
  </div>
</template>
<script>
  import myVideo from '../video/TVideo';
    export default{
      components:{myVideo},
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
              console.log('介绍',result.data);
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
        //链接跳转
        carDetail(p){
          this.$router.push('/sscInfor')
        }
      },
      
      created(){
        this.getImg();
        this.getcar_pic();
        this.getformula();
        this.getSucImg();
        this.getVideo();
      }
    }
</script>
<style scoped>
.about-us>div:nth-child(2){
  height: 350px;
}
#mybody{
  margin-left: 170px;
  margin-right: 170px;
  background-color: #ebeef5;
}
  img.image{
    transform: 600ms;
  }
  img.image:hover{
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -ms-transform: scale(1.1);
    -o-transform: scale(1.1);
    transform: scale(1.1);
  }
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
  /* 赛车介绍 */
  a{
    text-decoration: none;
    color: #000;
  }
  a:hover{
    color: #409eff;
  }
  .el-row>p:nth-child(1){
    font-size: 38px;
    color: #000;
    margin-bottom:15px; 
  }
  .el-row>p:nth-child(2){
    font-size: 8px;
    color: #aaa1b6;
  }
  .el-card__body>.image{
     width: 100%;
  }
  .el-col.el-col-7>h4{
    font-size: 20px;
    margin-top: 80px;
    margin-bottom: 15px;
  }
  /* 成功案例 */
  span.card-intr{
    
    width: 100%;
    height: 88px;
    text-align: left;
    overflow: auto;
    text-overflow: ellipsis;
    display:inline-block; 
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2; 
  }
  /* div.el-carousel__container{
    overflow: hidden;
  } */
  .success-case{
    margin: 50px 23px;
    margin-top: 80px;
    background-color: #eee;
    
  }
  .el-card.is-never-shadow>.el-card__body>div{
    background-color: #eee;
    height: 400px;
  }
  /** 关于我们 **/
  .el-col.el-col-6.el-col-offset-9>div>video{
    padding: 0 10px;
  }
  
</style>
  