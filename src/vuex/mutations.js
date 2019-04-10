//更改用户状态信息
export const userStatus=(state,user)=>{
    if (user){
      state.currentUser = user
      state.isLogin = true
    }else if(user==null){
      //退出的时候清空sessionStorage里的东西
      sessionStorage.clear();
      // localStorage.setItem('uname',null);
      // localStorage.setItem('isLogin',false);
      // localStorage.setItem('u')
    //  sessionStorage.setItem('userToke','');
      state.currentUser = null;
    //  state.isLogin = false;
    }
  }
  // 清空仓库状态
export const logout=(state)=>{
    state.currentUser = null;
    state.isLogin = false;
}

  // 修改token，并将token存入localStorage
export const  changeLogin=(state, user)=> {
    state.Authorization = user.Authorization;
    localStorage.setItem('Authorization', user.Authorization);
  }
