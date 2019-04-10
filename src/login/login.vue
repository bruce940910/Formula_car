<template>
    <div class="login_bgp">
        <!-- <div class="form">
            <div>
                <p>用户名</p>
                <input type="text" v-model="uname">
            </div>
            <div>
                <p>密码</p>
                <input type="password" v-model="upwd">
            </div>
            <div>
                <button @click="login">登陆</button>
            </div>
        </div> -->
        <div class="myform">
            <!-- <p>用户名</p> -->
            <label for="" >用户名</label>
            <input type="text" v-model="uname">
            <!-- <p>密码</p> -->
            <label for="" >密码</label>
            <input type="password" v-model="upwd">
            <p>
                <button @click="login" class="btn">登录</button>
            </p>
        </div>
    </div>
</template>
<script>
export default {
    data:{
        uname:'',
        upwd:''
    },
    methods:{
        // login(){
        //     var uname = this.uname;
        //     var upwd = this.upwd;
        //     var url = "http://localhost:8686/p_login";
        //     this.axios.post('http://localhost:8686/p_login', {
        //         uname:uname,upwd:upwd
        //     })
        //     .then(function (response) {
        //         console.log(response.data);
        //         if(response.data.code==1){
        //             sessionStorage.setItem('uname',uname);
        //             sessionStorage.setItem('user_state',response.data.code);
        //             this.$store.commit('login',uname);
        //             console.log(this.$store.state.user_state);
        //             this.$router.push({
        //                 path:'/home'
        //             })
        //         }
        //     }.bind(this))
        //     .catch(function (error) {
        //         console.log(error);
        //     });
        // }
        
         login(){
            var uname = this.uname;
            var upwd = this.upwd;
            var url = "http://localhost:8686/p_login";
            this.axios.post('http://localhost:8686/p_login', {
                uname:uname,upwd:upwd
            })
            .then(function (response) {
                console.log(response.data);
                if(response.data.code==1){
                    // this.$Message.success('登录成功');
                    this.$message({
                        showClose:true,
                        message:'登录成功'
                    });
                    sessionStorage.setItem('uname',uname);
                    sessionStorage.setItem('isLogin',true);
                    // window.localStorage.setItem('uname',uname);
                    // window.localStorage.setItem('isLogin',true);
                    this.$router.push('/');
                    this.$store.dispatch('setUser',uname);
                    
                }
                else{
                    // this.$Message.error('帐号或密码错误');
                    this.$message.error({
                        showClose:true,
                        message:'帐号或密码错误'
                    });
                }
            }.bind(this))
            .catch(function (error) {
                console.log(error);
            });
            
        },
        
    },
    created(){
        // 登录状态
        console.log('登录状态',this.$store.state.currentUser);
        isLogo:{
        //   if (sessionStorage.getItem('uname')) {
        if(window.localStorage.getItem('uname')&&window.localStorage.getItem('isLogin')){
            this.$store.commit('userStatus',sessionStorage.getItem('uname'))
          }else{
            // this.$router.push("/");
          }
        }
        // 读取session状态判断是否要重新登录
        // isLogin:{
        //     if(sessionStorage.getItem('uname')&&sessionStorage.getItem('user_state')){
        //         this.$store.commit('login',sessionStorage.getItem('uname'));
        //     }
        //     else{
        //         this.$store.commit('logout');
        //     }
        // }
    }
}
</script>
<style scoped>
    .myform>p{
        margin-top: 26px;
    }
    label{
        width: 153px;
        margin-bottom: 5px;
        margin-top: 5px;
    }
    .btn{
        display: block;
        width: 153px;
        /* display: flex;
        justify-content: center;
        align-items: center; */
        /* align-self: center; */
    }
    .myform{
        text-align: start!important;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 60%;

    }
    .login_bgp{
        height: 800px;
        background-image: url('../img/login.jpg');
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    .form{
        margin: 0!important;
        text-align: start;
        width: 30%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end

    }
</style>
