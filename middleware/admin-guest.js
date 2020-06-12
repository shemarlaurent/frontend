export default ({ app, next, redirect}) => {
  let admin = app.$cookies.get('helyos_admin');
  if(admin) redirect('/admin/dashboard');

}
