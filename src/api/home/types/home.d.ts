export interface employeeStatusType {
  /**
   * 今日旷工
   */
  absenteeismNum: number
  /**
   * 今日迟到
   */
  lateNum: number
  /**
   * 今日早退
   */
  leaveEarlyNum: number
  /**
   * 状态正常
   */
  normalNum: number
  /**
   * 员工总数
   */
  totalNum: number
}

export interface doorStaffType {
  /** 部门名称 */
  name: string
  /** 部门人员 */
  value: number
}

export interface homeCityType {
  /** 职工上年度最低月工资 */
  averageSalary: number
  /** 生育保险企业缴纳比例 */

  comMaternityRate: number
  /** 医疗保险企业缴纳比例 */

  comMedicalRate: number
  /** 养老保险企业缴纳比例 缴纳比例：0 ~ 1 */

  comPensionRate: number
  /** 失业保险企业缴纳比例 */

  comUnemploymentRate: number
  createTime: string
  deleteFlag: number
  /** 公积金缴纳基数下限 */

  houLowerLimit: number
  /** 公积金缴纳基数上限 */

  houUpperLimit: number
  id: number
  /** 职工上年度平均月工资 不低于500元 */

  lowerSalary: number
  /** 城市名称 */

  name: string
  /** 医疗保险个人缴纳比例 */

  perMedicalRate: number
  /** 养老保险个人缴纳比例 缴纳比例：0 ~ 1 */

  perPensionRate: number
  /** 失业保险个人缴纳比例  */

  perUnemploymentRate: number
  /** 职工社保缴纳基数下限  */

  socLowerLimit: number
  /** 职工社保缴纳基数上限  */

  socUpperLimit: number
  updateTime: string
}

export type employeeStatusResponseData = IApiResponseData<employeeStatusType>
export type doorStaffResponseData = IApiResponseData<doorStaffType>
export type presentInTheMonthResponseData = IApiResponseData<[]>
export type homeCityResponseData = IApiResponseData<homeCityType>
export type homeStaffResponseData = IApiResponseData<[]>
