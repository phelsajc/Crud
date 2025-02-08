<template>
  <div class="wrapper">
    <navComponent></navComponent>
    <sidemenuComponent></sidemenuComponent>
    <div class="content-wrapper">
      <!-- <section class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1>Store Lists</h1>
            </div>

          </div>
        </div>
      </section> -->

      <section class="content">
        <div class="container mt-5">
          <div class="row">
            <div class="col-md-4" v-for="(plan, index) in plans" :key="index">
              <div class="card text-center shadow-sm">
                <div class="card-header bg-primary text-white">
                  <h4>{{ plan.name }}</h4>
                </div>
                <div class="card-body">
                  <h2 class="text-primary">${{ plan.price }} / month</h2>
                  <button class="btn btn-primary mt-3">Subscribe</button>
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
import Papa from 'papaparse';
import api from '../../Helpers/api';

export default {
  created() {
    if (!User.loggedIn()) {
      this.$router.push({ name: '/' })
    }
    this.allStores();
  },
  data() {
    return {
      plans: [
        { name: "Basic", price: 10, features: ["Feature A", "Feature B"] },
        { name: "Pro", price: 20, features: ["Feature A", "Feature B", "Feature C"] },
        { name: "Enterprise", price: 50, features: ["Feature A", "Feature B", "Feature C", "Feature D"] }
      ],
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

.card {
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
}

.card:hover {
  transform: scale(1.05);
}
</style>