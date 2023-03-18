export interface queryType {
  list: List[]
  /**月份 */
  month: string
  /**页码 */
  pages: number
  /** 数据总数 */
  total: number
}

export interface List extends salaryParams {
  absenteeismDeduct: number
  address: null | string
  baseSalary: null
  bonus: null
  code: string
  deptId: number
  deptName: string
  housePay: number | null
  lateDeduct: number
  leaveDeduct: number
  leaveEarlyDeduct: number
  month: null
  name: string
  overtimeSalary: null
  phone: null | string
  remark: null
  socialPay: number | null
  staffId: number
  subsidy: null
  totalSalary: null
}

export interface salaryParams {
  /** */
  staffId: number
  /**基本工资 */
  baseSalary: number
  /**生活补贴 */

  subsidy: number
  /**奖金 */

  bonus: number
  /**月份 */

  month: number
  /**迟到扣款 */

  lateDeduct: number
  /**旷工扣款 */

  leaveDeduct: number
  /**早退扣款 */

  leaveEarlyDeduct: number
  /**请假扣款 */

  absenteeismDeduct: number
  /**备注 */

  remark: string
  /**最终工资 */

  totalSalary: number
}
export interface queryParameterType {
  /** 当前页码 */
  current?: string
  /** 查询数据数量 */
  size?: string
  /**查询月份 */
  month?: string
  /**查询名字 */
  name?: string
  /** 查询id */
  id?: number
}

export type queryResponseData = IApiResponseData<queryType>
export type personalSalarySettingResponseData = IApiResponseData<{}>
