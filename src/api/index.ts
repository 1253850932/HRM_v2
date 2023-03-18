import { request } from "@/utils/service"
/** 获取登录验证码 */
export function get() {
  return request({
    url: "/home/staff",
    method: "get"
  })
}
