import { createProdMockServer } from "vite-plugin-mock/es/createProdMockServer"
import userModule from "./user"
export function setupProdMockServer() {
  createProdMockServer([...userModule])
}
