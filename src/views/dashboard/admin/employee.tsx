import { User, Timer, Lock, Watch, Star, Medal } from "@element-plus/icons-vue"
import { defineComponent, onUpdated, ref } from "vue"
import { statusTypefaceColor, statusColor, statusEnum } from "./types/EmployeeType"
interface propsType {
  status: object
}
enum statusIcon {
  totalNum = (<User />),
  leaveEarlyNum = (<Timer />),
  absenteeismNum = (<Lock />),
  lateNum = (<Watch />),
  normalNum = (<Star />),
  abnormalStatus = (<Medal />)
}

export default defineComponent({
  name: "Employee",
  props: {
    status: { type: Object }
  },
  setup(props: propsType) {
    const data = ref({})
    onUpdated(() => {
      const { status } = props
      data.value = status
      data.value.abnormalStatus = data.value.totalNum - data.value.normalNum
    })
    return () => {
      // 使用父组件传递的数据
      return (
        <>
          {Object.entries(data.value).map(([key, value]) => (
            <el-card
              shadow="hover"
              style={{ width: "180px", height: "100px", borderRadius: "28px", backgroundColor: statusColor[key] }}
            >
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <el-icon size="35px">{statusIcon[key]}</el-icon>
                <div style={{ fontSize: "18px", color: statusTypefaceColor[key], margin: "10px 0" }}>
                  {statusEnum[key] === "状态异常" ? "状态异常" : statusEnum[key]}
                </div>
              </div>
              <div style={{ fontSize: "40px", color: statusTypefaceColor[key] }}>{value}</div>
            </el-card>
          ))}
        </>
      )
    }
  }
})
