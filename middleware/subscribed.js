export default ({ app, to, from, redirect}) => {
  let user = app.$cookies.get('helyos_user');
  if (user.subscription && user.subscription.status) return true;
  else redirect(from.fullPath);
}
