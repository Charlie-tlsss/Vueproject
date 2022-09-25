<template>
    <div>
        <Student name="李四" sex="女" :age="18"/>
    </div>
</template>

<script>
import Student from './componets/Student.vue'

export default {
    name:'App',
    components:{
        Student,
    },
    data() {
        return {
            
        }
    },
    methods:{

    }
    
}
</script>

<style>


</style>