export default ({ app, next, redirect}) => {
  if ( !! app.$cookies.get('helyos_abyss')) return true;

  else redirect('/abyss/login');
}
