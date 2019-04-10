<template>
    <div id="myFoot">
        <el-row >
            <el-col offset=2 :span="4" >
                <el-card :body-style="{ padding: '0px',background: '#333',color: 'bisque' }" shadow="never">
                    <h4>关于我们</h4>
                    <div style="padding: 14px;">
                        <ul class="fabout">
                            <li>WRC世界拉力锦标赛</li>
                            <li>达喀尔拉力赛</li>
                        </ul>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="4" >
                <el-card :body-style="{ padding: '0px',background: '#333',color: 'bisque' }" shadow="never">
                    <h4>关于我们</h4>
                    <div style="padding: 14px;">
                        <ul class="fabout">
                            <li>WRC世界拉力锦标赛</li>
                            <li>达喀尔拉力赛</li>
                        </ul>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="4" >
                <el-card :body-style="{ padding: '0px',background: '#333',color: 'bisque' }" shadow="never">
                    <h4>关于我们</h4>
                    <div style="padding: 14px;">
                        <ul class="fabout">
                            <li>WRC世界拉力锦标赛</li>
                            <li>达喀尔拉力赛</li>
                        </ul>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="4" v-for="item of list" :key="item.id" class="mb">
                <el-card :body-style="{ padding: '0px',background: '#333',color: 'bisque' }" shadow="never">
                    <div style="padding: 14px;">
                        <span class="mb" >
                            <img :src="item.url">
                        </span>
                        
                    </div>
                </el-card>
            </el-col>

        </el-row>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                list:[],
            }
        },
        methods:{
            getBot(){
                var url = "http://127.0.0.1:8686/weixin";
                this.axios.get(url).then(result=>{
                    console.log(result.data);
                    this.list = result.data;
                })
            }
        },
        created(){
            this.getBot();
        },
    }
</script>
<style scoped>
#myFoot{
   
    width: 100%;
    background: #333;
}
.fabout>li{
    margin: 20px auto;
}
.clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }

.mb img{
    width: 80%;
    
}
.el-col{
    background: #333;
    color: bisque;
    border: 0px;
}
.el-card{
    border: 0px;
    background: #333;
    color: bisque;
}
.el-card__body>span{
    margin-top: 20px;
}
ul{
    list-style: none;
    margin: 0;
    padding: 0;
}
ul>li{
    margin-bottom: 15px;
}
a{
    text-decoration: none;
}
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
