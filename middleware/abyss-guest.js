export default ({ app, next, redirect}) => {
  if (!! app.$cookies.get('helyos_abyss')) redirect('/abyss');

}
