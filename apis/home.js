import fly from "../utils/request.js"

export function getBanners() {
  return fly.get('/home/swiperdata')
}
export function getNavs() {
  return fly.get('/home/catitems')
}

export function getFloors() {
  return fly.get("/home/floordata")
}
