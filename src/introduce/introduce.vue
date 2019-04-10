<template>
    <div>
        <el-carousel :interval="5000" arrow="always" height="750px">
            <el-carousel-item v-for="item in car_list" :key="item.id">
                <img v-lazy="car_link+item" class="imgitem">
            </el-carousel-item>
        </el-carousel>
       <div>
           <el-table>
                <el-table-column>
                    
                </el-table-column>   
           </el-table>
       </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            car_list:'',
            car_link:''
        }
    },
    methods:{
        getInfo(){
            var c_name = this.$route.query.c_name;
            var url = "http://127.0.0.1:8686/c_info";
            console.log('车名',c_name);
            this.axios.get(url,{params:{c_name}})
            // this.axios.get(url+'?c_name='+c_name)
            .then(response=>{
                    console.log(c_name);
                    console.log(response.data);
                    //获取文件名
                    this.car_list = response.data.car_list
                    //获取图片路径
                    var link = response.data.data[0].c_pic+'/';
                    this.car_link = link;
                    console.log(this.car_list);
                    console.log(this.car_link);
                })
        }
    },
    created(){
        this.getInfo();
        // var c_name = this.$route.query.c_name;
        // console.log('车名',c_name);
        // intr_ad:{
            
        //     console.log('发出请求')
        //     var c_name = this.c_name;
        //     var url = 'http://127.0.0.1:8686/c_info';
        //     this.axios.get(url,{params:{c_name}})
        //     .then(response=>(
        //         console.log('赛车信息',response.data),
        //         // console.log(),
        //         this.c_info = response.data,
        //         this.c_pic = response.data.c_pic,
        //         console.log(this.c_pic)
        //     ))
        // }
    }
}
</script>
<style scoped>
    .el-carousel__item>img{
        width: 100%;
    }
</style>
