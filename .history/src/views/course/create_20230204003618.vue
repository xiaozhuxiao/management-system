<template>
  <div class="corrse-create">
    <el-card>
      <!-- 头部 -->
      <div slot="header">
        <el-steps :active="activeStep" simple>
          <el-step v-for="(item, i) in stops" :key="item.id" :title="item.title" :icon="item.icon" @click.native="activeStep = i"></el-step>
        </el-steps>
      </div>
      <!-- 步骤对应的表单结构 -->
      <el-form label-width="80px">
        <!-- 基本信息 -->
        <div v-show="activeStep === 0">
          <el-form-item label="课程名称">
            <el-input v-model="course.courseName" maxlength="50" show-word-limit></el-input>
          </el-form-item>
          <el-form-item label="课程简介">
            <el-input v-model="course.brief" maxlength="50" show-word-limit></el-input>
          </el-form-item>
          <el-form-item label="课程概述">
            <el-input v-model="course.previewFirstField" placeholder="概述1" style="width: 49%; min-width: 300px; margin-right: 15px" maxlength="30" show-word-limit></el-input>
            <el-input v-model="course.previewSecondField" placeholder="概述2" style="width: 49%; min-width: 300px" maxlength="30" show-word-limit></el-input>
          </el-form-item>
          <el-form-item label="讲师姓名">
            <el-input v-model="course.teacherDTO.teacherName" maxlength="10" show-word-limit></el-input>
          </el-form-item>
          <el-form-item label="讲师简介">
            <el-input v-model="course.teacherDTO.description" maxlength="50" show-word-limit></el-input>
          </el-form-item>
          <el-form-item label="课程排序">
            <el-input-number label="描述文字" v-model="course.sortNum" controls-position="right" :min="1" :max="10"></el-input-number>
          </el-form-item>
        </div>
        <!-- 课程封面 -->
        <div v-show="activeStep === 1">
          <!-- 封装图片上传组件 -->
          <course-image v-model="course.courseListImg" label="课程封面" :limit="3"></course-image>
          <course-image v-model="course.courseImgUrl" label="解锁封面" :limit="3"></course-image>
        </div>
        <!-- 销售信息 -->
        <div v-show="activeStep === 2">
          <el-form-item label="售卖价格">
            <el-input placeholder="请输入价格" v-model="course.discounts" type="number" :min="0">
              <template slot="append">元</template>
            </el-input>
          </el-form-item>
          <el-form-item label="商品原价">
            <el-input placeholder="请输入价格" v-model="course.price" type="number" :min="0">
              <template slot="append">元</template>
            </el-input>
          </el-form-item>
          <el-form-item label="销量">
            <el-input placeholder="请输入销量" v-model="course.sales" type="number" :min="0">
              <template slot="append">单</template>
            </el-input>
          </el-form-item>
          <el-form-item label="活动标签">
            <el-input placeholder="请输入内容" v-model="course.discountsTag"> </el-input>
          </el-form-item>
        </div>
        <!-- 秒杀信息 -->
        <div v-show="activeStep === 3">
          <el-form-item label="限时秒杀开关" label-width="120px">
            <el-switch v-model="course.activityCourse" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
          </el-form-item>
          <template v-if="course.activityCourse">
            <el-form-item label="开始时间">
              <el-date-picker v-model="course.activityCourseDTO.beginTime" type="datetime" placeholder="选择日期时间"> </el-date-picker>
            </el-form-item>
            <el-form-item label="结束时间">
              <el-date-picker v-model="course.activityCourseDTO.endTime" type="datetime" placeholder="选择日期时间"> </el-date-picker>
            </el-form-item>
            <el-form-item label="秒杀价">
              <el-input placeholder="请输入价格" v-model="course.activityCourseDTO.amount" type="number" :min="0">
                <template slot="append">元</template>
              </el-input>
            </el-form-item>
            <el-form-item label="库存">
              <el-input placeholder="请输入库存" v-model="course.activityCourseDTO.stock" type="number" :min="0">
                <template slot="append">个</template>
              </el-input>
            </el-form-item>
          </template>
        </div>
        <!-- 课程详情 -->
        <div v-show="activeStep === 4">
          <el-form-item label="课程详情">
            <text-editor v-model="course.courseDescriptionMarkDown"></text-editor>
          </el-form-item>
          <el-form-item label="是否上架">
            <el-switch v-model="course.status" active-color="#13ce66" inactive-color="#ff4949" active-value="1" inactive-value="0"></el-switch>
          </el-form-item>
          <el-form-item><el-button type="primary" @click="handleSave">保存</el-button></el-form-item>
        </div>
        <!-- 下一步按钮 -->
        <el-form-item v-if="activeStep !== stops.length - 1">
          <el-button @click="activeStep++">下一步</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import CourseImage from './components/CourseImage'

import { saveOrUpdateCourse } from '@/services/course'

import TextEditor from '@/components/TextEditor/index'

export default {
  name: 'CourseCreate',
  components: {
    CourseImage,
    TextEditor
  },
  data() {
    return {
      // 步骤的进度
      activeStep: 0,
      // 步骤条的相关信息
      stops: [
        { id: 1, title: '基本信息', icon: 'el-icon-edit' },
        { id: 2, title: '课程封面', icon: 'el-icon-upload' },
        { id: 3, title: '销售信息', icon: 'el-icon-picture' },
        { id: 4, title: '秒杀信息', icon: 'el-icon-picture' },
        { id: 5, title: '课程详情', icon: 'el-icon-picture' }
      ],
      // 本地预览图片地址
      imageUrl: '',

      // 添加课程的相关信息
      //   - 将数据中与 ID 相关的数据去除,因为是编辑功能使用的
      course: {
        // id: 0,
        courseName: '',
        brief: '',
        teacherDTO: {
          // id: 0,
          // courseId: 0,
          teacherName: '',
          teacherHeadPicUrl: '',
          position: '',
          description: ''
        },
        // 课程详情内容
        courseDescriptionMarkDown: '',
        // 商品原价
        price: 0,
        // 售卖价格
        discounts: 0,
        priceTag: '',
        // 活动标签
        discountsTag: '',
        isNew: true,
        isNewDes: '',
        // 课程封面地址
        courseListImg: '',
        // 解锁封面地址
        courseImgUrl: '',
        sortNum: 0,
        previewFirstField: '',
        previewSecondField: '',
        // 上架状态,默认值 0 代表不上架, 1 代表上架
        status: 0,
        // 销量
        sales: 0,
        // 参与秒杀活动的课程
        activityCourse: false,
        activityCourseDTO: {
          // id: 0,
          // courseId: 0,
          // 秒杀活动开始时间
          beginTime: '',
          // 秒杀活动结束时间
          endTime: '',
          // 秒杀活动价格
          amount: 0,
          // 秒杀活动库存
          stock: 0
        },
        autoOnlineTime: ''
      }
    }
  },
  // 挂载钩子
  //   - 富文本编辑器初始化

  methods: {
    async handleSave() {
      const { data } = await saveOrUpdateCourse(this.course)
      if (data.code === '000000') {
        this.$message.success('添加课程成功')
        this.$router.push({
          name: 'course'
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.el-step {
  cursor: pointer;
}
</style>
