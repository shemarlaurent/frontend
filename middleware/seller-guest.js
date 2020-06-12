export default ({ app, next, redirect}) => {
  let seller = app.$cookies.get('helyos_seller');
  if (seller) redirect('/seller/dashboard');

}
