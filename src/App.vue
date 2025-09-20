<script setup lang="ts">
import HeaderView from '@/views/HeaderView.vue'
import FooterView from '@/views/FooterView.vue'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <HeaderView />
      </el-header>
      <el-main>
        <RouterView />
      </el-main>
      <el-footer>
        <FooterView />
      </el-footer>
    </el-container>
  </div>
</template>
<style scoped>
.common-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.el-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.el-main {
  flex: 1;
  padding: 0;
}
</style>
