import { request } from "@/utils/service"
import type * as Home from "./types/home"

/** 今日员工状态查询 */
function getEmployeeStatusAPI() {
  return request<Home.employeeStatusResponseData>({
    url: "/home/count",
    method: "get"
  })
}
/**
 * 获取员工分布
 * @returns  {Promise}
 */
function getDoorStaffAPI() {
  return request<Home.doorStaffResponseData>({
    url: "/home/department",
    method: "get"
  })
}
/**
 * 获取当月出席查询
 * @returns  {Promise}
 */
const getAttendAPI = (id = 1, month = 202212) => {
  return request<Home.doorStaffResponseData>({
    url: "/home/attendance",
    method: "get",
    params: { id, month }
  })
}
/**
 * 城市社保缴纳比例
 * @returns  {Promise}
 */
const getHomeCityAPI = () => {
  return request<Home.homeCityResponseData>({
    url: "/home/city",
    method: "get"
  })
}
/**
 * 城市社保缴纳比例
 * @returns  {Promise}
 */
const getHomeStaffAPI = () => {
  return request<Home.homeStaffResponseData>({
    url: "/home/staff",
    method: "get"
  })
}
export { getEmployeeStatusAPI, getDoorStaffAPI, getAttendAPI, getHomeCityAPI, getHomeStaffAPI }
