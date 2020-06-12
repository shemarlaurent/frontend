export default ({ app, next, redirect}) => {
  if (!!app.$cookies.get('helyos_affiliate')) return true;

  else redirect('/affiliate/auth/login');
}
