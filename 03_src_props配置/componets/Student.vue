<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <button @click="update">尝试修改收到的年龄</button>
  </div>
</template>

<script>
export default {
    name:'Student',
    data() {
        return {
            msg:'我是一个学生！',
            
        }
    },
    methods:{
      update() {
        this.age = 19
      },
    },                    
    //props:['name','age','sex'],//简单声明接受

    //接受同时对数据进行类型限制
    // props:{
    //   name:String,
    //   age:Number,
    //   sex:String
    // },

    //接受同时对数据进行类型限制，默认值指定，必要性限制
    props:{
      name:{
        type:String, //name类型必须是字符串
        required:true //name是必须的
      },
      age:{
        type:Number, 
        default:99 //默认值
      },
      sex:{ 
        type:String, 
        required:true,
      },
    }


}
</script>

<style>

</style>