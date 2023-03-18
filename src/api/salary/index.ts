import { request } from "@/utils/service"
import { salaryParams, queryParameterType } from "./salary"
import type * as Salary from "./salary"

/**
 * 个人工资设置
 * @returns  {Promise}
 */
const getSalarySetAPI = (data: salaryParams) => {
  return request<Salary.personalSalarySettingResponseData>({
    url: "/salary/set",
    method: "post",
    data
  })
}
/**
 * 分页查询 - 月份查询 - 名字查询 - id查询
 * @returns  {Promise}
 */
const getSalaryQueryAPI = (params: queryParameterType) => {
  return request<Salary.queryResponseData>({
    url: "/salary",
    method: "get",
    params
  })
}

export { getSalarySetAPI, getSalaryQueryAPI }
