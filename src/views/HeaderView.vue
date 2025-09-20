<template>
  <el-menu mode="horizontal" class="menu" :ellipsis="false" @select="handleSelect">
    <el-menu-item index="0">
      <img src="@/assets/icon.ico" class="logo-img" />&nbsp;
      <span class="log-text">素材管理姬</span>
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item class="menu-item" index="1">软件介绍</el-menu-item>
    <el-menu-item class="menu-item" index="2">更新日志</el-menu-item>
    <el-menu-item class="menu-item" index="3">问题反馈</el-menu-item>
    <el-menu-item class="menu-item download-menu-item" index="4">
      <i-ep-download />
      <span style="padding: 0 15px">下 载</span>
    </el-menu-item>
  </el-menu>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// 处理菜单项点击
const handleSelect = (key: string, keyPath: string[]) => {
  switch (key) {
    case '0':
      router.push('/')
      break
    case '1':
      router.push('/')
      break
    case '2':
      router.push('/update_log')
      break
    case '3':
      router.push('/report')
      break
    case '4':
      handleDownload()
      break
    default:
      break
  }
}

// 处理下载按钮点击
const handleDownload = () => {
  // 滚动到下载区域
  window.open('#download', '_blank')
}
</script>

<style scoped>
.menu {
  height: 80px;
  line-height: 60px;
  font-size: 80px;
}

.menu-item {
  font-size: 20px;
}

.download-menu-item {
  width: 220px;
  background: #337ecc;
  color: #fff;
}

.flex-grow {
  flex-grow: 1;
}

.logo-img {
  height: 80%;
}

.log-text {
  font-size: 25px;
  font-weight: bold;
  color: black;
  margin-left: 10px;
}
</style>