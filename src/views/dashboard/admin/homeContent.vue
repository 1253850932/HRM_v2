<!--
 * new page
 * @author:
 * @since: 2023-03-18
 * homeContent.vue
-->
<script setup lang="ts">
defineOptions({
  name: "homeContent"
})
</script>
<template>
  <el-card class="home-content">
    <template #header>
      <div class="card-header">
        <div class="card-header-text">
          <el-icon size="25px" style="margin-top: 5px"><ChatLineSquare /></el-icon>
          <span class="card-header-text-note">通知公告</span>
        </div>
        <el-button class="button" text
          >更多 <el-icon><ArrowRight /></el-icon
        ></el-button>
      </div>
    </template>
    <div v-for="o in 4" :key="o" class="text item">
      <span> {{ "List item " + o }}</span>
      <span> {{ new Date() }}</span>
    </div>
  </el-card>
</template>

<style lang="scss" scoped>
.home-content {
  .card-header {
    display: flex;
    justify-content: space-between;
    .card-header-text {
      width: 100px;
      line-height: 35px;
      .card-header-text-note {
        float: right;
      }
    }
  }
  :deep(.el-card__header) {
    height: 60px;
  }
  .item {
    display: flex;
    justify-content: space-between;
  }
}
</style>
