<template>
  <div class="footer-content">
    <p>Copyright © 2023-2025 素材管理姬 All rights reserved. 保留一切权利</p>
    <p class="footer-links">
      <a href="/" @click.prevent="router.push('/')">关于我们</a>
      <span> | </span>
      <a href="/report" @click.prevent="router.push('/report')">问题反馈</a>
      <span> | </span>
      <a href="/update_log" @click.prevent="router.push('/update_log')">更新日志</a>
    </p>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>
<style scoped>
.footer-content {
  text-align: center;
  padding: 20px 0;
  color: #666;
  font-size: 14px;
}

.footer-links {
  margin-top: 10px;
}

.footer-links a {
  color: #409eff;
  text-decoration: none;
}

.footer-links a:hover {
  text-decoration: underline;
}
</style>