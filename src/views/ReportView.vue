<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage, ElForm, type FormInstance, type FormRules } from 'element-plus'

// 表单引用
const formRef = ref<FormInstance | null>(null)

// 表单数据
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
  type: 'bug',
  version: '3.2.3'
})

// 表单验证规则
const rules = ref<FormRules>({
  name: [
    { required: true, message: '请输入您的称呼', trigger: 'blur' },
    { min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur' }
  ],
  email: [
    { required: true, message: '请输入您的邮箱', trigger: 'blur' },
    { type: 'email', message: '请输入正确的邮箱格式', trigger: 'blur' }
  ],
  subject: [
    { required: true, message: '请输入反馈主题', trigger: 'blur' },
    { min: 5, max: 50, message: '长度在 5 到 50 个字符', trigger: 'blur' }
  ],
  message: [
    { required: true, message: '请输入反馈内容', trigger: 'blur' },
    { min: 10, max: 1000, message: '长度在 10 到 1000 个字符', trigger: 'blur' }
  ]
})

// 提交状态
const submitting = ref(false)
const submitSuccess = ref(false)

// 提交表单
const submitForm = async (formEl: any) => {
  if (!formEl) return
  await formEl.validate(async (valid: boolean) => {
    if (valid) {
      submitting.value = true
      try {
        // 模拟API请求
        await new Promise(resolve => setTimeout(resolve, 1500))
        
        // 提交成功
        submitSuccess.value = true
        
        // 重置表单
        form.value = {
          name: '',
          email: '',
          subject: '',
          message: '',
          type: 'bug',
          version: '3.2.3'
        }
        
        // 重置验证状态
        formEl.resetFields()
        
        // 3秒后关闭成功提示
        setTimeout(() => {
          submitSuccess.value = false
        }, 3000)
      } catch (error) {
        console.error('提交失败:', error)
        ElMessage.error('提交失败，请稍后再试')
      } finally {
        submitting.value = false
      }
    }
  })
}

// 重置表单
const resetForm = (formEl: any) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<template>
  <div class="report-container">
    <div class="report-header">
      <h1>问题反馈</h1>
      <p>我们非常重视您的反馈，请告诉我们您在使用过程中遇到的问题或建议</p>
    </div>

    <div class="report-content">
      <!-- 成功提示 -->
      <el-alert v-if="submitSuccess" title="提交成功" type="success" show-icon :closable="false" />

      <!-- 反馈表单 -->
      <el-form
        ref="formRef"
        :model="form"
        :rules="rules"
        label-width="100px"
        class="report-form"
      >
        <el-form-item label="您的称呼" prop="name">
          <el-input v-model="form.name" placeholder="请输入您的称呼" />
        </el-form-item>

        <el-form-item label="联系邮箱" prop="email">
          <el-input v-model="form.email" placeholder="请输入您的邮箱，方便我们回复" />
        </el-form-item>

        <el-form-item label="反馈类型">
          <el-radio-group v-model="form.type">
            <el-radio label="bug">功能异常</el-radio>
            <el-radio label="suggestion">功能建议</el-radio>
            <el-radio label="other">其他问题</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="使用版本">
          <el-select v-model="form.version" placeholder="请选择您使用的版本">
            <el-option label="3.2.3" value="3.2.3" />
            <el-option label="3.2.2" value="3.2.2" />
            <el-option label="3.2.1" value="3.2.1" />
            <el-option label="3.2.0" value="3.2.0" />
            <el-option label="3.1.6" value="3.1.6" />
            <el-option label="其他版本" value="other" />
          </el-select>
        </el-form-item>

        <el-form-item label="反馈主题" prop="subject">
          <el-input v-model="form.subject" placeholder="请简要描述您的反馈内容" />
        </el-form-item>

        <el-form-item label="详细描述" prop="message">
          <el-input
            v-model="form.message"
            type="textarea"
            :rows="6"
            placeholder="请详细描述您遇到的问题或建议，包括操作步骤、期望效果等"
          />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm(formRef)" :loading="submitting">
            提交反馈
          </el-button>
          <el-button @click="resetForm(formRef)">重置</el-button>
        </el-form-item>
      </el-form>

      <!-- 常见问题 -->
      <div class="faq-section">
        <h2>常见问题</h2>
        <el-collapse>
          <el-collapse-item title="如何添加新的标签？">
            <div class="faq-content">
              在添加图片或编辑图片信息时，可以直接在标签输入框中输入新的标签名称，按回车添加。添加后该标签会被保存到系统中，方便后续使用。
            </div>
          </el-collapse-item>
          <el-collapse-item title="为什么某些图片无法加载？">
            <div class="faq-content">
              如果遇到图片无法加载的情况，可能是由于图片格式不支持或文件损坏。素材管理姬支持常见的主流图片格式，包括PSD和webp格式。如果问题仍然存在，请尝试重新添加图片或检查文件完整性。
            </div>
          </el-collapse-item>
          <el-collapse-item title="如何备份我的图片数据库？">
            <div class="faq-content">
              从3.1.5版本开始，素材管理姬支持图片数据库导出和导入功能。您可以在软件设置中找到相关选项，点击导出按钮将数据库备份到指定位置，需要恢复时再通过导入功能恢复数据。
            </div>
          </el-collapse-item>
          <el-collapse-item title="如何提高软件运行性能？">
            <div class="faq-content">
              为了提高运行性能，建议定期清理不常用的素材，保持数据库大小适中。同时，从3.1.5版本开始，我们已经对软件进行了性能优化和内存占用减少的改进。
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </div>
</template>

<style scoped>
.report-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.report-header {
  text-align: center;
  margin-bottom: 60px;
}

.report-header h1 {
  font-size: 42px;
  margin-bottom: 15px;
  color: #333;
}

.report-header p {
  font-size: 18px;
  color: #666;
}

.report-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.report-form {
  background: #f8f9fa;
  border-radius: 15px;
  padding: 30px;
}

.faq-section {
  background: #f8f9fa;
  border-radius: 15px;
  padding: 30px;
}

.faq-section h2 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

.faq-content {
  padding: 10px 0;
  line-height: 1.6;
  color: #666;
}

@media (max-width: 768px) {
  .report-container {
    padding: 20px 15px;
  }

  .report-header h1 {
    font-size: 32px;
  }

  .report-content {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .report-form,
  .faq-section {
    padding: 20px;
  }

  .el-form-item {
    margin-bottom: 15px;
  }
}
</style>