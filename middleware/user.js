export default ({ app, to, from, redirect}) => {
  let user = app.$cookies.get('helyos_user');
  if (user) return true;
  else redirect('/auth/sign-in', {redirect: from.fullPath});
}
