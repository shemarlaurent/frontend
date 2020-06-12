export default ({ app, next, redirect}) => {
  let user = app.$cookies.get('helyos_user')
  console.log(user);
  if (user) redirect('/');

}
