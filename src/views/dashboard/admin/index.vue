<script lang="ts" setup>
import { getEmployeeStatusAPI } from "@/api/home"
import { employeeStatusType } from "@/api/home/types/home"
import { getMenuList } from "@/api/mock/demo"
import { onMounted, ref } from "vue"
import Employee from "./employee"
import HomeContent from "./homeContent.vue"
const employeeStatus = ref<employeeStatusType>()
onMounted(async () => {
  const res = await getEmployeeStatusAPI()
  employeeStatus.value = res.data
  const r = await getMenuList()
  console.log(r)
})
</script>
<template>
  <div class="app-container">
    <el-card class="status-card">
      <template #header>
        <div class="card-header">
          <span>今日员工状态</span>
        </div>
      </template>
      <el-scrollbar max-height="280px">
        <div class="card-body">
          <Employee :status="employeeStatus" />
        </div>
      </el-scrollbar>
    </el-card>
    <HomeContent />
  </div>
</template>

<style lang="scss" scoped>
.app-container {
  display: flex;
  .status-card {
    width: 35vw;
    height: 330px;
    border-radius: 28px;
    :deep(.el-card__header) {
      border-bottom: none;
      height: 50px;
      color: rgb(74, 144, 226);
    }
    .card-body {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      height: 240px;
      :deep(.el-card__body) {
        display: flex;
        justify-content: space-around;
        height: 100px;
        margin-top: 5px;
      }
    }
  }
  .home-content {
    width: 60vw;
    border-radius: 28px;
    margin-left: 20px;
  }
}
</style>
