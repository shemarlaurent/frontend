export default ({ app, next, redirect }) => {
  let admin = app.$cookies.get('helyos_admin');
  if(admin) return true;
  else {
    // this.$notification.error('You are not authorized to access this page');
    redirect('/admin/auth/login')
  }
}
