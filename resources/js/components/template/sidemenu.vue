<template>
  <aside id="sidebar" class="main-sidebar sidebar-dark-primary elevation-4">
    <router-link to="/all_employee" class="brand-link">
      &nbsp;
      <span class="brand-text font-weight-light">CRUD</span> 
    </router-link>
    <div class="sidebar">
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">   
          
          <li class="nav-item">
             <router-link to="/user_list"> <a href="#" class="nav-link"
                    :class="{ 'active': this.$route.name == 'user_list' || this.$route.name == 'user_add' }">
                    <i class="far fa-circle nav-icon"></i>
                    <p>User</p>
                  </a></router-link>
          </li>

          <li class="nav-item">
            <router-link to="/store_list"> <a href="#" class="nav-link"
                    :class="{ 'active': this.$route.name == 'store_list' || this.$route.name == 'store_add' }">
                    <i class="far fa-circle nav-icon"></i>
                    Stores
                  </a></router-link>
          </li>


          <li class="nav-item">
            <router-link to="/logout" class="nav-link">
              <p>Logout</p>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>
<script>
export default {
  data() {
    return {
      
    }
  },
}
</script>
  