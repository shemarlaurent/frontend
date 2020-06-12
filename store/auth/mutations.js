export default {
  SAVE_AUTH_ADMIN(state, result) {
    state.authenticated = true;
    state.admin = result.admin;
    state.admin.token = result.access_token;

    this.$cookies.set('helyos_admin', state.admin);
  },

  SAVE_AUTH_SELLER(state, result) {
    state.authenticated = true;
    state.seller = result.seller;
    state.seller.token = result.access_token;

    this.$cookies.set('helyos_seller', state.seller);
  },

  UPDATE_BOOL_DATA (state, bool) {
    state.bool = bool;
  },


  SAVE_AUTH_USER(state, user) {
    state.authenticated = true;
    state.user = user.user;
    state.user.token = user.access_token;

    this.$cookies.set('helyos_user', state.user);
  },


  SAVE_AUTH_AFFILIATE(state, data) {
    state.authenticated = true;
    state.affiliate = data.affiliate;
    state.affiliate.token = data.access_token;

    this.$cookies.set('helyos_affiliate', state.affiliate);
  },

  SAVE_AUTH_ABYSS(state, data) {
    state.authenticated = true;
    state.abyss = data.abyssUser;
    state.abyss.token = data.access_token;

    this.$cookies.set('helyos_abyss', state.abyss);
  },

  UPDATE_USER_DATA(state, data) {
    let user = this.$cookies.get('helyos_user');
    let token = user.token;
    state.user = data;
    state.user.token = token;
    this.$cookies.set('helyos_user', state.user);
  },

  UPDATE_ABYSS_DATA(state, data) {
    let abyss = this.$cookies.get('helyos_abyss');
    let token = abyss.token;
    state.abyss = data;
    state.abyss.token = token;
    this.$cookies.set('helyos_abyss', state.abyss);
  },

  LOGOUT_ABYSS(state) {
    state.abyss = null;
    this.$cookies.set('helyos_abyss', undefined);
  },

  LOGOUT_USER(state) {
    state.user = null;

    this.$cookies.set('helyos_user', undefined);

    console.log(this.$cookies.get('helyos_user'));
  },

  LOGOUT_ADMIN(state) {
    state.admin = null;

    this.$cookies.set('helyos_admin', undefined);
  },

  LOGOUT_SELLER(state) {
    state.seller = null;

    this.$cookies.set('helyos_seller', undefined);
  },

  LOGOUT_AFFILIATE(state) {
    state.affiliate = null;

    this.$cookies.set('helyos_affiliate', undefined);
  }

}
