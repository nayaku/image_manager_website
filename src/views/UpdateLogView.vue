<script setup lang="ts">
import { ref } from 'vue'

// 定义更新日志数据
const updateLogs = ref([
  {
    version: '3.2.3',
    date: '2025年9月20日',
    changes: [
      '修复DPI缩放问题',
      '修复多屏切换问题',
      '修复截图过小崩溃问题',
      '修复重复多次按下截图快捷键造成的冲突导致崩溃的问题',
      '添加截图复制到剪贴板的功能',
      '支持贴图添加到数据库',
      '支持从剪贴板添加图片和贴片'
    ]
  },
  {
    version: '3.2.2',
    date: '2024年11月12日',
    changes: [
      '紧急修复截图后找不到的问题'
    ]
  },
  {
    version: '3.2.1',
    date: '2024年11月10日',
    changes: [
      '截图贴屏增加边框，避免找不到',
      '更新依赖包'
    ]
  },
  {
    version: '3.2.0',
    date: '2024年1月12日',
    changes: [
      '修正当网络太慢时无法下载更新的问题',
      '修正关闭更新窗口无法取消更新问题',
      '性能优化'
    ]
  },
  {
    version: '3.1.6',
    date: '2023年11月25日',
    changes: [
      '更新到NET8',
      '默认排序循序为新添加的优先显示',
      '更新依赖包'
    ]
  },
  {
    version: '3.1.5',
    date: '2023年9月14日',
    changes: [
      '优化性能和减少内存占用',
      '修正添加图片取消后出现崩溃的错误',
      '图片数据库导出和导入',
      '文件夹导入',
      '修正了添加图片时，添加已有标签后出错的bug'
    ],
    important: true,
    importantMessage: '修改了数据库，首次启动将会迁移数据，可能需要不少时间，请耐心等候'
  },
  {
    version: '3.1.4',
    date: '2023年5月13日',
    changes: [
      '调整截图逻辑',
      '调整图片缩放滑动条的体验'
    ]
  },
  {
    version: '3.1.3',
    date: '2023年4月13日',
    changes: [
      '修正多开逻辑错误',
      '错误弹窗更加友好',
      '修正不能添加标签的错误'
    ]
  },
  {
    version: '3.1.2',
    date: '2023年4月5日',
    changes: [
      '修改截图的逻辑',
      '添加错误收集处理机制',
      '支持自动更新',
      '在开始菜单栏添加删除软件的功能',
      '修正添加文件后更新主界面提示弹窗的两个按钮均为更新主界面操作的BUG',
      '删除弹窗中点击鼠标弹出的错误',
      '解决启动时候的一些错误'
    ]
  },
  {
    version: '3.1.1',
    date: '2023年2月2日',
    changes: [
      '解决安装后因缺乏权限而无法运行的错误'
    ]
  },
  {
    version: '3.1.0',
    date: '2023年2月2日',
    changes: [
      '初版发布'
    ]
  }
])

// 当前激活的版本
const activeVersion = ref(updateLogs.value[0].version)
</script>

<template>
  <div class="update-log-container">
    <div class="update-log-header">
      <h1>更新日志</h1>
      <p>查看素材管理姬的版本更新记录</p>
    </div>

    <div class="update-log-content">
      <!-- 版本选择器 -->
      <div class="version-selector">
        <el-select v-model="activeVersion" placeholder="选择版本" class="version-select">
          <el-option
            v-for="log in updateLogs"
            :key="log.version"
            :label="`v${log.version} (${log.date})`"
            :value="log.version"
          />
        </el-select>
      </div>

      <!-- 更新日志列表 -->
      <div class="update-log-list">
        <el-timeline>
          <el-timeline-item
            v-for="(log, index) in updateLogs"
            :key="log.version"
            :timestamp="`v${log.version} - ${log.date}`"
            :placement="index % 2 === 0 ? 'top' : 'bottom'"
          >
            <el-card :class="{ 'highlight-card': log.version === activeVersion }">
              <div v-if="log.important" class="important-notice">
                <i-ep-warning style="color: #f56c6c; margin-right: 5px" />
                {{ log.importantMessage }}
              </div>
              <ul class="change-list">
                <li v-for="(change, idx) in log.changes" :key="idx">
                  <i-ep-check style="color: #67c23a; margin-right: 8px" />
                  {{ change }}
                </li>
              </ul>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
    </div>
  </div>
</template>

<style scoped>
.update-log-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.update-log-header {
  text-align: center;
  margin-bottom: 60px;
}

.update-log-header h1 {
  font-size: 42px;
  margin-bottom: 15px;
  color: #333;
}

.update-log-header p {
  font-size: 18px;
  color: #666;
}

.update-log-content {
  background: #f8f9fa;
  border-radius: 15px;
  padding: 30px;
}

.version-selector {
  margin-bottom: 40px;
  text-align: center;
}

.version-select {
  width: 300px;
  font-size: 16px;
}

.update-log-list {
  padding: 20px 0;
}

.el-timeline {
  padding-left: 0;
}

.el-timeline-item {
  padding-bottom: 40px;
}

.el-timeline-item__timestamp {
  font-size: 16px;
  font-weight: bold;
  color: #409eff;
  margin-bottom: 15px;
}

.highlight-card {
  border-color: #409eff;
  box-shadow: 0 0 20px rgba(64, 158, 255, 0.2);
}

.important-notice {
  background: #fef0f0;
  border: 1px solid #fbc4c4;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
  color: #f56c6c;
  font-weight: bold;
  display: flex;
  align-items: center;
}

.change-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.change-list li {
  display: flex;
  align-items: flex-start;
  margin-bottom: 12px;
  padding: 8px 0;
  font-size: 15px;
  line-height: 1.6;
}

.change-list li:last-child {
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .update-log-container {
    padding: 20px 15px;
  }

  .update-log-header h1 {
    font-size: 32px;
  }

  .version-select {
    width: 100%;
  }

  .el-timeline-item {
    padding-bottom: 30px;
  }

  .el-timeline-item__timestamp {
    font-size: 14px;
    margin-bottom: 10px;
  }

  .change-list li {
    font-size: 14px;
  }
}
</style>