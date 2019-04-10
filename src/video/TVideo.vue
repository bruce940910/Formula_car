<template>
    <div>
        <!-- <el-row type="flex" :gutter="20" >
            <el-col :span=6 offset=9 justify="space-around">
                <div class="myVideo">
                    <video  width="360px" height="260px" controls="controls"  preload="none" :poster=item.poster v-for="item in myvideo" :key="item.id" :src=item.video>
                    </video>
                </div>
            </el-col>
        </el-row> -->
        <el-row type="flex" :gutter="25">
            <el-col :span=5  v-for="item in myvideo" :key="item.id" offset=2>
                <div class="myVideo">
                    <video  width="360" height="200" controls="controls"  preload="none" :poster=item.poster :src=item.video>
                    </video>
                </div>
            </el-col>
        </el-row>
    </div> 
</template>
<script>
    export default{
        data(){
            return {
                myvideo:[],
            }
        },
        methods:{
            getVideo(){
                var url = "http://127.0.0.1:8686/myvideo";
                this.axios.get(url).then(result=>{
                    console.log(result.data);
                    this.myvideo = result.data;
                })
            }
        },
        created(){
            this.getVideo();
        }
    }
</script>
<style >
.myVideo{
    display: flex;
    justify-content: space-around;
}
</style>
