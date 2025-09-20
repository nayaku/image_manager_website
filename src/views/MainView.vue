<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const handleDownload = () => {
  // 这里可以添加下载逻辑
  window.open('#download', '_blank')
}
</script>

<template>
  <div class="main-container">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1>素材管理姬</h1>
        <p>好用的画师素材管理辅助助手，支持使用标签分类高效管理图片素材</p>
        <div class="hero-buttons">
          <el-button type="primary" size="large" @click="handleDownload">
            <i-ep-download /> 立即下载
          </el-button>
          <el-button size="large" @click="router.push('/update_log')">
            查看更新日志
          </el-button>
        </div>
      </div>
      <div class="hero-image">
        <img src="/main_interface.jpg" alt="素材管理姬主界面" />
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <h2>功能特点</h2>
      <div class="features-grid">
        <el-card class="feature-card">
          <template #header>
            <div class="card-header">
              <i-ep-picture class="feature-icon" />
              <span>广泛的图片格式支持</span>
            </div>
          </template>
          <p>支持常见的主流图片，包括PSD和webp格式，满足画师的各种素材需求。</p>
        </el-card>

        <el-card class="feature-card">
          <template #header>
            <div class="card-header">
              <i-ep-check class="feature-icon" />
              <span>标签分类与检索</span>
            </div>
          </template>
          <p>支持图片的标签分类与检索，帮助您快速找到需要的素材。</p>
        </el-card>

        <el-card class="feature-card">
          <template #header>
            <div class="card-header">
              <i-ep-monitor class="feature-icon" />
              <span>屏幕贴图</span>
            </div>
          </template>
          <p>支持图片屏幕贴图，贴图可以缩放、旋转、透明化或者折叠，方便参考。</p>
        </el-card>

        <el-card class="feature-card">
          <template #header>
            <div class="card-header">
              <i-ep-camera class="feature-icon" />
              <span>截屏功能</span>
            </div>
          </template>
          <p>支持截屏功能，截取下来的图将会成为新的屏幕贴图，方便快速记录灵感。</p>
        </el-card>
      </div>
    </section>

    <!-- Screenshots Section -->
    <section class="screenshots-section">
      <h2>软件截图</h2>
      <div class="screenshots-grid">
        <el-image :src="'/main_interface.jpg'" fit="contain" class="screenshot">
          <template #error>
            <div class="image-slot">图片加载失败</div>
          </template>
        </el-image>
        <el-image :src="'/screen_sticker.jpg'" fit="contain" class="screenshot">
          <template #error>
            <div class="image-slot">图片加载失败</div>
          </template>
        </el-image>
        <el-image :src="'/tag_search.jpg'" fit="contain" class="screenshot">
          <template #error>
            <div class="image-slot">图片加载失败</div>
          </template>
        </el-image>
        <el-image :src="'/add_image.jpg'" fit="contain" class="screenshot">
          <template #error>
            <div class="image-slot">图片加载失败</div>
          </template>
        </el-image>
      </div>
    </section>

    <!-- Download Section -->
    <section id="download" class="download-section">
      <h2>下载最新版本</h2>
      <div class="download-info">
        <p>当前版本：3.2.3</p>
        <p>更新日期：2025年9月20日</p>
      </div>
      <el-button type="primary" size="large" @click="handleDownload">
        <i-ep-download /> 下载素材管理姬 v3.2.3
      </el-button>
    </section>
  </div>
</template>

<style scoped>
.main-container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
}

/* Hero Section */
.hero-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 50px 0;
  padding: 50px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  color: white;
}

.hero-content {
  flex: 1;
  margin-right: 50px;
}

.hero-content h1 {
  font-size: 48px;
  margin-bottom: 20px;
  font-weight: bold;
}

.hero-content p {
  font-size: 20px;
  margin-bottom: 30px;
  opacity: 0.9;
}

.hero-buttons {
  display: flex;
  gap: 20px;
}

.hero-image {
  flex: 1;
  max-width: 600px;
}

.hero-image img {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

/* Features Section */
.features-section {
  margin: 80px 0;
}

.features-section h2 {
  text-align: center;
  font-size: 36px;
  margin-bottom: 50px;
  color: #333;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

.feature-card {
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.card-header {
  display: flex;
  align-items: center;
}

.feature-icon {
  margin-right: 10px;
  color: #667eea;
  font-size: 24px;
}

/* Screenshots Section */
.screenshots-section {
  margin: 80px 0;
}

.screenshots-section h2 {
  text-align: center;
  font-size: 36px;
  margin-bottom: 50px;
  color: #333;
}

.screenshots-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

.screenshot {
  height: 400px;
  background: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.image-slot {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #999;
}

/* Download Section */
.download-section {
  text-align: center;
  margin: 80px 0;
  padding: 50px;
  background: #f8f9fa;
  border-radius: 20px;
}

.download-section h2 {
  font-size: 36px;
  margin-bottom: 20px;
  color: #333;
}

.download-info {
  margin-bottom: 30px;
  color: #666;
}

.download-info p {
  margin: 5px 0;
}
</style>