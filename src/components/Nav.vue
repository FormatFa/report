<template>
    <el-menu>
    <el-menu-item>菜单一</el-menu-item>
    <el-menu-item>菜单二</el-menu-item>
    </el-menu>
</template>

<script>
export default {
    data(){
        
    },
    methods:{
        handleSelect(key,keyPath){
            console.log("handle:"+key+" path:"+keyPath);
        }
    }
    
}
</script>