import fly from "@/utils/request.js"
export function getGoodsList(data) {
  return fly.get('goods/search', data)
}
