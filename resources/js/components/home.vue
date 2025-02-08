<template>
  <div class="wrapper">
    <navComponent></navComponent>
    <sidemenuComponent></sidemenuComponent>
    <div class="content-wrapper">
      <section class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1>Store Lists</h1>
            </div>

          </div>
        </div><!-- /.container-fluid -->
      </section>

      <!-- Main content -->

      <section class="content">
        <div class="container-fluid">
          <!-- <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-header">
                  <h3 class="card-title">&nbsp;</h3>
                  <router-link to="/store_add/0" class="btn btn-primary pull-left">Add</router-link>
                </div>
                <div class="card-body">
                  <div class="spin_center" :class="{ 'd-none': isHidden }">
                    <div class="overlay"><i class="fas fa-3x fa-sync-alt fa-spin"></i>
                      <div class="text-bold pt-2">Loading...</div>
                    </div>
                  </div>
                  <ul class="list-group">
                    <input type="text" v-model="form.searchTerm2" @change="filterEmployee()" class="form-control to-right"
                      style="width:100%;" placeholder="Search users here">
                    <router-link v-for="e in filtersearch" :key="e.id"
                      :to="{ name: 'store_add', params: { id: e.id } }">
                      <li class="list-group-item ">
                        <div class="row">
                          <div class="col-6  float-left">
                            <div class="d-flex w-100 justify-content-between">
                              <h5 class="mb-1"> <strong>{{ e.title }}</strong></h5>
                            </div>
                            <span class="badge badge-secondary"> {{ e.description }}</span>
                          </div>
                        </div>
                      </li>
                    </router-link>
                  </ul>
                  <br>
                  <nav aria-label="Page navigation example" class="to-right">
                    <ul class="pagination">
                      <li class="page-item" v-for="(e, index) in this.countRecords"><a class="page-link"
                          @click="getPageNo(index + 1)" href="#">{{ index + 1 }}</a></li>
                    </ul>
                  </nav>
                  <nav aria-label="Page navigation example" class="">
                    {{ showing }}
                  </nav>
                </div>
              </div>
            </div>
          </div> -->

          <div>
            <div class="container-fluid" id="container-wrapper">

              <div class="row mb-3">
                <!-- Earnings (Monthly) Card Example -->
                <div class="col-xl-3 col-md-6 mb-4">
                  <div class="card h-100">
                    <div class="card-body">
                      <div class="row align-items-center">
                        <div class="col mr-2">
                          <div class="text-xs font-weight-bold text-uppercase mb-1">Status</div>
                          <div class="h5 mb-0 font-weight-bold text-gray-800">VALID</div>
                          <div class="mt-2 mb-0 text-muted text-xs">
                            <span class="text-success mr-2"><i class="fa fa-calendar"></i> Will expire on </span>
                            <span>aaaaaaaaaaa</span>
                          </div>
                        </div>
                        <div class="col-auto">
                          <i class="fas fa-calendar fa-2x text-primary"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Invoice Example -->
                <div class="col-xl-12 col-lg-7 mb-4">
                  <div class="card">
                    <!-- <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                      <h6 class="m-0 font-weight-bold text-primary">Invoice</h6>
                      <a class="m-0 float-right btn btn-danger btn-sm" href="#">View More <i
                          class="fas fa-chevron-right"></i></a>
                    </div> -->
                    <div class="table-responsive">
                      <table class="table align-items-center table-flush">
                        <thead class="thead-light">
                          <tr>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Item</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><a href="#">RA0449</a></td>
                            <td>Udin Wayang</td>
                            <td>Nasi Padang</td>
                            <td><span class="badge badge-success">Delivered</span></td>
                            <td><a href="#" class="btn btn-sm btn-primary">Detail</a></td>
                          </tr>
                          <tr>
                            <td><a href="#">RA5324</a></td>
                            <td>Jaenab Bajigur</td>
                            <td>Gundam 90' Edition</td>
                            <td><span class="badge badge-warning">Shipping</span></td>
                            <td><a href="#" class="btn btn-sm btn-primary">Detail</a></td>
                          </tr>
                          <tr>
                            <td><a href="#">RA8568</a></td>
                            <td>Rivat Mahesa</td>
                            <td>Oblong T-Shirt</td>
                            <td><span class="badge badge-danger">Pending</span></td>
                            <td><a href="#" class="btn btn-sm btn-primary">Detail</a></td>
                          </tr>
                          <tr>
                            <td><a href="#">RA1453</a></td>
                            <td>Indri Junanda</td>
                            <td>Hat Rounded</td>
                            <td><span class="badge badge-info">Processing</span></td>
                            <td><a href="#" class="btn btn-sm btn-primary">Detail</a></td>
                          </tr>
                          <tr>
                            <td><a href="#">RA1998</a></td>
                            <td>Udin Cilok</td>
                            <td>Baby Powder</td>
                            <td><span class="badge badge-success">Delivered</span></td>
                            <td><a href="#" class="btn btn-sm btn-primary">Detail</a></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="card-footer"></div>
                  </div>
                </div>

              </div>
              <!--Row-->

            </div>
          </div>
        </div>
      </section>
    </div>
    <footerComponent></footerComponent>
  </div>
</template>

<script type="text/javascript">
import Papa from 'papaparse';
import api from '../Helpers/api';

export default {
  created() {
    if (!User.loggedIn()) {
      this.$router.push({ name: '/' })
    }
    this.allStores();
  },
  data() {
    return {
      isHidden: true,
      form: {
        searchTerm2: null,
        start: 0
      },
      employees: [],
      searchTerm: '',
      countRecords: 0,
      getdctr: '-',
      utype: User.user_type(),
      token: localStorage.getItem('token'),
      showing: '',
    }
  },
  computed: {
    filtersearch() {
      return this.employees.filter(e => {
        return e.title.match(this.searchTerm)
      })
    },
  },
  methods: {
    allStores() {
      this.isHidden = false
      api.get('stores')
        .then(response => {
          this.employees = response.data.data,
            this.countRecords = response.data.count,
            this.showing = response.data.showing,
            this.isHidden = true
        }).catch(error => console.log(error))
    },
    filterEmployee() {
      this.employees = []
      this.countRecords = null
      this.form.start = 0
      this.isHidden = false
      api.post('stores', this.form)
        .then(response => {
          this.employees = response.data.data;
          this.countRecords = response.data.count;
          this.isHidden = true
        })
        .catch(error => this.errors = error.response.data.errors)
    },
    getPageNo(id) {
      this.form.start = (id - 1) * 10
      this.isHidden = false
      api.post('stores', this.form)
        .then(response => {
          this.employees = response.data.data
          this.countRecords = response.data.count
          this.showing = response.data.showing,
            this.isHidden = true
        })
        .catch(error => this.errors = error.response.data.errors)
    }
  },
}

</script>

<style>
.em_photo {
  height: 40px;
  width: 40px;
}

.to-right {
  float: right;
}

.spin_center {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  text-align: center;
  transform: translateX(-50%);
  /*display: none;*/
}

.btn-app {
  height: unset !important;
  padding: 0 1.5em 0 1.5em;
}
</style>