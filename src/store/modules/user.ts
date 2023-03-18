import { ref } from "vue"
import store from "@/store"
import { defineStore } from "pinia"
import { usePermissionStore } from "./permission"
import { useTagsViewStore } from "./tags-view"
import { getToken, removeToken, setToken } from "@/utils/cache/cookies"
import router, { resetRouter } from "@/router"
import { loginApi } from "@/api/login"
import { type ILoginRequestData } from "@/api/login/types/login"
import { type RouteRecordRaw } from "vue-router"
import asyncRouteSettings from "@/config/async-route"

export interface rolesType {
  address: string
  age: null
  avatar: string
  birthday: string
  code: string
  deptId: number
  deptName: string
  gender: number
  id: number
  name: string
  phone: string
  remark: null
  status: number
}
export const useUserStore = defineStore(
  "user",
  () => {
    const token = ref<string>(getToken() || "")
    const roles = ref<string[]>([])
    const username = ref<string>("")
    const userInfo = ref<rolesType>({})
    const permissionStore = usePermissionStore()
    const tagsViewStore = useTagsViewStore()

    /** 设置角色数组 */
    const setRoles = (value: string[]) => {
      roles.value = value
    }
    /** 登录 */
    const login = (loginData: ILoginRequestData) => {
      return new Promise((resolve, reject) => {
        loginApi({
          code: loginData.code,
          password: loginData.password
        })
          .then((res) => {
            setToken(res.token)
            token.value = res.token
            userInfo.value = res.data
            resolve(true)
          })
          .catch((error) => {
            reject(error)
          })
      })
    }
    /** 获取用户详情 */
    const getInfo = () => {
      return new Promise((resolve) => {
        const data = userInfo
        console.log(data.value)
        username.value = data.value.name
        // 验证返回的 roles 是否是一个非空数组
        if (data.value.code) {
          roles.value = [data.value.code]
          console.log(roles.value)
        } else {
          // 塞入一个没有任何作用的默认角色，不然路由守卫逻辑会无限循环
          roles.value = asyncRouteSettings.defaultRoles
        }
        resolve(true)
      })
    }
    /** 切换角色 */
    const changeRoles = async (role: string) => {
      const newToken = "token-" + role
      token.value = newToken
      setToken(newToken)
      await getInfo()
      permissionStore.setRoutes(roles.value)
      resetRouter()
      permissionStore.dynamicRoutes.forEach((item: RouteRecordRaw) => {
        router.addRoute(item)
      })
      _resetTagsView()
    }
    /** 登出 */
    const logout = () => {
      removeToken()
      token.value = ""
      roles.value = []
      resetRouter()
      _resetTagsView()
    }
    /** 重置 Token */
    const resetToken = () => {
      removeToken()
      token.value = ""
      roles.value = []
    }
    /** 重置 visited views 和 cached views */
    const _resetTagsView = () => {
      tagsViewStore.delAllVisitedViews()
      tagsViewStore.delAllCachedViews()
    }

    return { token, roles, username, setRoles, login, getInfo, changeRoles, logout, resetToken, userInfo }
  },
  {
    persist: true
  }
)

/** 在 setup 外使用 */
export function useUserStoreHook() {
  return useUserStore(store)
}
