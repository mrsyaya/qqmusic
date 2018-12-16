import Vue from 'vue'
import Router from 'vue-router'
// import Singer from "../components/singer/Singer.vue"
// const Singer=()=>import("../components/singer/Singer.vue")
import Recommend from "../components/recommend/Recommend.vue"
const Singer = (resolve) => {
  import('../components/singer/Singer.vue').then( (module) => {
      resolve(module)
  } )
}
const SingerDetail = (resolve) => {
  import('../components/singer/SingerDetail.vue').then( (module) => {
      resolve(module)
  } )
}

const SingIn = (resolve) => {
  import('../components/sing/SingIn.vue').then( (module) => {
      resolve(module)
  } )
}
const SingUp = (resolve) => {
  import('../components/sing/SingUp.vue').then( (module) => {
      resolve(module)
  } )
}

Vue.use(Router)

const routes=[
  {path:'/',redirect:'/recommend'},
  {path:'/recommend',component:Recommend},
  {path:'/singer',component:Singer,
   children:[
     {path:":id",component:SingerDetail}
   ]


},
 {path:'/singin',name:"singin",component:SingIn}
]

const router=new Router({
   routes
})

export default router