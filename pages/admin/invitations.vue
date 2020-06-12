<template>
  <section>
    <div class="page-content-wrapper">
      <div class="page-content-wrapper-inner">
        <div class="viewport-header">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb has-arrow">
              <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
              <li class="breadcrumb-item active" aria-current="page">Invitations</li>
            </ol>
          </nav>
        </div>
        <div class="content-viewport">
          <div class="row">
            <div class="col-lg-6">
              <div class="grid">
                <p class="grid-header d-flex justify-content-between">
                  <b>Seller Invitations</b>
                  <a href="#" @click="openModal" class="text-base text-helyos hover:text:helyos-dark">Invite seller</a>
                </p>

                <div class="item-wrapper">
                  <div class="table-responsive">
                    <table class="table info-table table-striped">
                      <thead>
                      <tr>
                        <th>Email Addresses</th>
                        <th class="text-left">Token</th>
                        <th class="text-left">Status</th>
                        <th class="text-left">Date Sent</th>
                        <th></th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr v-if="invitations.sellers.length > 0" v-for="invitation in invitations.sellers">
                        <td>{{ invitation.email }}</td>
                        <td>{{ invitation.token }}</td>
                        <td>{{ (invitation.status === '1') ? 'accepted' : 'pending' }}</td>
                        <td>{{ formatDate(invitation.created_at) }}</td>
                        <td class="actions dropleft">
                          <a
                            href="#"
                            class
                            role="button"
                            id="dropdownMenuLink"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i class="mdi mdi-dots-vertical"></i>
                          </a>

                          <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a class="dropdown-item" href="#">Delete Invitation</a>
                          </div>
                        </td>
                      </tr>

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="grid">
                <p class="grid-header d-flex justify-content-between">
                  Affiliate Invitations
                  <a href="#" @click="openModalAffiliate" class="text-base text-helyos hover:text:helyos-dark">Invite Affiliate</a>
                </p>
                <div class="item-wrapper">
                  <div class="table-responsive">
                    <table class="table info-table table-striped">
                      <thead>
                      <tr>
                        <th>Email Addresses</th>
                        <th>Status</th>
                        <th>Date Invited</th>
                        <th>Date Accepted</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr v-if="invitations.affiliates.length > 0" v-for="invitation in invitations.affiliates">
                        <td>{{ invitation.email }}</td>
                        <td>{{ invitation.token }}</td>
                        <td>{{ (invitation.status === '1') ? 'accepted' : 'pending' }}</td>
                        <td>{{ formatDate(invitation.created_at) }}</td>
                        <td class="actions dropleft">
                          <a
                            href="#"
                            class
                            role="button"
                            id="affiliateDropdown"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i class="mdi mdi-dots-vertical"></i>
                          </a>

                          <div class="dropdown-menu" aria-labelledby="affiliateDropdown">
                            <a class="dropdown-item" href="#">Delete Invitation</a>
                          </div>
                        </td>
                      </tr>


                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content-modals">
      <div class="modal fade" tabindex="-1" role="dialog" id="seller-invitation-modal">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="equel-grid">
                <div class="grid">
                  <p class="grid-header">Invite Seller</p>
                  <div class="grid-body">
                    <div class="item-wrapper">
                      <form enctype="multipart/form-data">
                        <div class="form-group">
                          <label for="email">Seller Email</label>
                          <input
                            type="text"
                            class="form-control"
                            id="email"
                            placeholder="Enter Seller Email"
                            v-model="seller.email"
                          />
                        </div>
                        <button @click.prevent="inviteSeller" class="btn btn-sm text-white btn-primary w-50"
                          v-if="!loading">Send Invitation</button>
                        <button
                          class="btn btn-sm text-white btn-primary w-50"
                          disabled="disabled"
                          v-else
                        >
                          <svg
                            class="fill"
                            height="18px"
                            fill="#e7e7e7"
                            viewBox="0 0 135 140"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect y="10" width="15" height="120" rx="6">
                              <animate
                                attributeName="height"
                                begin="0.5s"
                                dur="1s"
                                values="120;110;100;90;80;70;60;50;40;140;120"
                                calcMode="linear"
                                repeatCount="indefinite"
                              />
                              <animate
                                attributeName="y"
                                begin="0.5s"
                                dur="1s"
                                values="10;15;20;25;30;35;40;45;50;0;10"
                                calcMode="linear"
                                repeatCount="indefinite"
                              />
                            </rect>
                            <rect x="30" y="10" width="15" height="120" rx="6">
                              <animate
                                attributeName="height"
                                begin="0.25s"
                                dur="1s"
                                values="120;110;100;90;80;70;60;50;40;140;120"
                                calcMode="linear"
                                repeatCount="indefinite"
                              />
                              <animate
                                attributeName="y"
                                begin="0.25s"
                                dur="1s"
                                values="10;15;20;25;30;35;40;45;50;0;10"
                                calcMode="linear"
                                repeatCount="indefinite"
                              />
                            </rect>
                            <rect x="60" width="15" height="140" rx="6">
                              <animate
                                attributeName="height"
                                begin="0s"
                                dur="1s"
                                values="120;110;100;90;80;70;60;50;40;140;120"
                                calcMode="linear"
                                repeatCount="indefinite"
                              />
                              <animate
                                attributeName="y"
                                begin="0s"
                                dur="1s"
                                values="10;15;20;25;30;35;40;45;50;0;10"
                                calcMode="linear"
                                repeatCount="indefinite"
                              />
                            </rect>
                            <rect x="90" y="10" width="15" height="120" rx="6">
                              <animate
                                attributeName="height"
                                begin="0.25s"
                                dur="1s"
                                values="120;110;100;90;80;70;60;50;40;140;120"
                                calcMode="linear"
                                repeatCount="indefinite"
                              />
                              <animate
                                attributeName="y"
                                begin="0.25s"
                                dur="1s"
                                values="10;15;20;25;30;35;40;45;50;0;10"
                                calcMode="linear"
                                repeatCount="indefinite"
                              />
                            </rect>
                            <rect x="120" y="10" width="15" height="120" rx="6">
                              <animate
                                attributeName="height"
                                begin="0.5s"
                                dur="1s"
                                values="120;110;100;90;80;70;60;50;40;140;120"
                                calcMode="linear"
                                repeatCount="indefinite"
                              />
                              <animate
                                attributeName="y"
                                begin="0.5s"
                                dur="1s"
                                values="10;15;20;25;30;35;40;45;50;0;10"
                                calcMode="linear"
                                repeatCount="indefinite"
                              />
                            </rect>
                          </svg>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" tabindex="-2" role="dialog" id="affiliate-invitation-modal">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="equel-grid">
                <div class="grid">
                  <p class="grid-header">Invite Affiliate</p>
                  <div class="grid-body">
                    <div class="item-wrapper">
                      <form enctype="multipart/form-data">
                        <div class="form-group">
                          <label for="affiliate">Affiliate Email</label>
                          <input type="text" class="form-control"
                            id="affiliate"
                            placeholder="Enter Seller Email"
                            v-model="affiliate.email"
                          />
                        </div>
                        <button @click.prevent="inviteAffiliate" class="btn btn-sm text-white btn-primary w-50"
                          v-if="!loading">Send Invitation</button>
                        <button
                          class="btn btn-sm text-white btn-primary w-50"
                          disabled="disabled"
                          v-else
                        >
                          <svg
                            class="fill"
                            height="18px"
                            fill="#e7e7e7"
                            viewBox="0 0 135 140"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect y="10" width="15" height="120" rx="6">
                              <animate
                                attributeName="height"
                                begin="0.5s"
                                dur="1s"
                                values="120;110;100;90;80;70;60;50;40;140;120"
                                calcMode="linear"
                                repeatCount="indefinite"
                              />
                              <animate
                                attributeName="y"
                                begin="0.5s"
                                dur="1s"
                                values="10;15;20;25;30;35;40;45;50;0;10"
                                calcMode="linear"
                                repeatCount="indefinite"
                              />
                            </rect>
                            <rect x="30" y="10" width="15" height="120" rx="6">
                              <animate
                                attributeName="height"
                                begin="0.25s"
                                dur="1s"
                                values="120;110;100;90;80;70;60;50;40;140;120"
                                calcMode="linear"
                                repeatCount="indefinite"
                              />
                              <animate
                                attributeName="y"
                                begin="0.25s"
                                dur="1s"
                                values="10;15;20;25;30;35;40;45;50;0;10"
                                calcMode="linear"
                                repeatCount="indefinite"
                              />
                            </rect>
                            <rect x="60" width="15" height="140" rx="6">
                              <animate
                                attributeName="height"
                                begin="0s"
                                dur="1s"
                                values="120;110;100;90;80;70;60;50;40;140;120"
                                calcMode="linear"
                                repeatCount="indefinite"
                              />
                              <animate
                                attributeName="y"
                                begin="0s"
                                dur="1s"
                                values="10;15;20;25;30;35;40;45;50;0;10"
                                calcMode="linear"
                                repeatCount="indefinite"
                              />
                            </rect>
                            <rect x="90" y="10" width="15" height="120" rx="6">
                              <animate
                                attributeName="height"
                                begin="0.25s"
                                dur="1s"
                                values="120;110;100;90;80;70;60;50;40;140;120"
                                calcMode="linear"
                                repeatCount="indefinite"
                              />
                              <animate
                                attributeName="y"
                                begin="0.25s"
                                dur="1s"
                                values="10;15;20;25;30;35;40;45;50;0;10"
                                calcMode="linear"
                                repeatCount="indefinite"
                              />
                            </rect>
                            <rect x="120" y="10" width="15" height="120" rx="6">
                              <animate
                                attributeName="height"
                                begin="0.5s"
                                dur="1s"
                                values="120;110;100;90;80;70;60;50;40;140;120"
                                calcMode="linear"
                                repeatCount="indefinite"
                              />
                              <animate
                                attributeName="y"
                                begin="0.5s"
                                dur="1s"
                                values="10;15;20;25;30;35;40;45;50;0;10"
                                calcMode="linear"
                                repeatCount="indefinite"
                              />
                            </rect>
                          </svg>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import $ from 'jquery'
  export default {
    middleware: 'admin',
    layout: 'admin',
    data() {
      return {
        seller: {
          email: ''
        },
        affiliate: {
          email: '',
        },
        invitations: {
          sellers: [],
          affiliates: [],
        },
        loading: false,
        token: this.$cookies.get('helyos_admin').token,
      }

    },

    mounted() {
      this.getInvitations();
    },

    methods: {
      getInvitations() {
        this.$axios.$get('admin/invitation/all', {
          headers: {
            'Authorization': 'Bearer ' + this.token,
          }
        }).then(response => {
          if (response.length > 0) {
            this.invitations.sellers = response.filter(invitation => invitation.type === 'seller');
            this.invitations.affiliates = response.filter(invitation => invitation.type === 'affiliate');
          }
        });
      },
      openModal() {
          window.$('#seller-invitation-modal').modal()
      },

      openModalAffiliate() {
        window.$('#affiliate-invitation-modal').modal()
      },


      inviteSeller() {
        this.loading = true;

        this.$axios.$post('admin/invitation/seller', this.seller, {
          headers: {
            'Authorization': 'Bearer ' + this.token,
          }
        })
          .then(response => {
            this.loading = false;
            this.$notification.success('Invitation sent successfully', { timer: 5 });
            this.sellers.push(response);
            $('#seller-invitation-modal').modal('hide');
          })
          .catch(error => {
            // this.$notification.error('An error has occurred', { timer: 5 });
            this.loading = false;
            $('#seller-invitation-modal').modal('hide');
          })
      },
      inviteAffiliate() {
        this.loading = true;

        this.$axios.$post('admin/invitation/affiliate', this.affiliate, {
          headers: {
            'Authorization': 'Bearer ' + this.token,
          }
          })
          .then(response => {
            this.loading = false;
            this.$notification.success('Invitation sent successfully', { timer: 5 });
            this.affiliates.push(response);
            $('#affiliate-invitation-modal').modal('hide');
          })
          .catch(error => {
            // this.$notification.error('An error has occurred', { timer: 5 });
            this.loading = false
            $('#affiliate-invitation-modal').modal('hide');
          })
      },
    }
  }
</script>

<style scoped>


</style>
