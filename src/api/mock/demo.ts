import { request } from "@/utils/service"

const prefix = "/mock"

/** @desc 登录 */
export function login(data: { username: string; password: string }) {
  return request({ url: `${prefix}/user/login`, method: "post", data: data })
}

/** @desc 退出登录 */
export function logout() {
  return request.post(`${prefix}/user/logout`)
}

/** @desc 获取动态菜单 */
export function getMenuList() {
  return request({ url: `/aaa`, method: "get" })
}
