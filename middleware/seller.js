export default ({ app, next, redirect}) => {
  let seller = app.$cookies.get('helyos_seller');
  if (seller) return true;

  else redirect('/seller/auth/login');
}
