<template>
  <div class="role">
    <role-list></role-list>
  </div>
</template>

<script>
import { component } from 'vue/types/umd'
import RoleList from './components/list'
export default {
  name: 'LoginIndex',
  component: {
    RoleList
  }
}
</script>

<style></style>
