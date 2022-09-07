function toast(title, icon, duration) {
  uni.showToast({
    title,
    icon: '',
  })
}
toast.error = function(title, duration = 3000) {
  uni.showToast({
    title,
    icon: 'error',
    duration
  })
}

toast.success = function(title, duration = 3000) {
  uni.showToast({
    title,
    icon: 'success',
    duration
  })
}

toast.loading = function(title, duration) {
  uni.showToast({
    title: "正在加载中。。。",
    icon: 'loading',
  })
}
export default toast
