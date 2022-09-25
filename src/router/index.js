import VueRouter from 'vue-router'
import About from "../pages/About";
import Home from "../pages/Home";
import Message from "../pages/Message";
import News from "../pages/News";
import Show from "../pages/Show";


export default new VueRouter({
    routes:[
        {
            path:'/about',
            name:'guanyu',
            component:About

        },
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'message',
                    component:Message,
                    children:[
                        {
                            name:'xiangqing',
                            path:'show',
                            component:Show,
                            //第一种写法
                            // props:{
                                
                            // }
                            //2.
                            props:true,
                        }
                    ]
                },
                {
                    path:'news',
                    component:News,
                }
            ]
            
        },
    ]
})

