export interface ILoginRequestData {
  /** admin 或 editor */
  code: "admin" | "editor"
  /** 密码 */
  password: string
}

export type LoginCodeResponseData = IApiResponseData<string>

export type LoginResponseData = IApiResponseData<{ token: string }>

export type UserInfoResponseData = IApiResponseData<{ username: string; roles: string[] }>
