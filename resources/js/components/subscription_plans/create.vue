<template>
    <div class="wrapper">
        <navComponent></navComponent>
        <sidemenuComponent></sidemenuComponent>
        <div class="content-wrapper">
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1>&nbsp;</h1>
                        </div>
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item"><a href="#">Home</a></li>
                                <li class="breadcrumb-item active">Company</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            <section class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">


                            <div class="card card-primary">
                                <div class="card-header">
                                    <h3 class="card-title" v-if="isNew">Add Store</h3> <h3 class="card-title" v-else="isNew">Edit Store</h3>
                                    <div class="card-tools">
                                        <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                            <i class="fas fa-minus"></i>
                                        </button>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <form class="user" @submit.prevent="addUser" enctype="multipart/form-data">
                                        <div class="form-group">
                                            <input type="text" class="form-control" id="exampleInputFirstName"
                                                placeholder="Enter Title" v-model="form.title">
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" id="exampleInputLastName"
                                                placeholder="Enter Description" v-model="form.description">
                                        </div>
                                        <div class="form-group">
                                            <button type="submit" class="btn btn-primary btn-block">Submit</button>
                                        </div>
                                        <div class="form-group">
                                            <button type="button" class="btn btn-danger btn-block" @click="delete_user()">
                                                Delete
                                            </button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
        <footerComponent></footerComponent>
    </div>
</template>

<script type="text/javascript">
import AppStorage from '../../Helpers/AppStorage';
import Datepicker from 'vuejs-datepicker'
import api from '../../Helpers/api';


export default {
    components: {
        Datepicker
    },
    created() {
        if (!User.loggedIn()) {
            this.$router.push({ name: '/' })
        }
        let checkId = this.$route.params.id
        if (checkId != 0) {
            this.form.id = checkId;
            this.editUser();
            this.isNew = false;
        }
    },

    data() {
        return {
            doctors: [],
            form: {
                title: '',
                description: '',
                id: '',
            },
            getId: 0,
            isNew: true,
        }
    },

    methods: {
        addUser() {
            if (this.isNew) {
                api.post('store-add', this.form)
                    .then(response => {
                        this.$router.push({ name: 'store_list' });
                        Toast.fire({
                            icon: 'success',
                            title: 'Saved successfully'
                        })
                    })
                    .catch(error => console.log(error))
            } else {
                api.post('store-update', this.form)
                    .then(response => {
                        Toast.fire({
                            icon: 'success',
                            title: 'Updated successfully'
                        })
                    })
                    .catch(error => console.log(error))
            }
        },
        editUser() {
            let id = this.$route.params.id
            api.get('store-detail/' + id)
                .then(response => {
                    this.form.title = response.data.title,
                        this.form.description = response.data.description
                }).catch(error => console.log(error))
        },
    delete_user() {

      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {

          api.get('store-delete/' + this.form.id )
            .then(response => {
                        this.$router.push({ name: 'store_list' });
              Toast.fire({
                icon: 'success',
                title: 'Deleted successfully'
              });
            })
            .catch(error => {
              console.log(error);
            });
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      });
    }
    }
}

</script>

<style>
.pull-right {
    float: right !important;
}
</style>