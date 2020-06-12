export default ({ app, next, redirect}) => {
  if (!!app.$cookies.get('helyos_affiliate')) redirect('/affiliate/dashboard');

}
