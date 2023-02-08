<template>
  <div class="menu-edit"></div>
  <!-- 引入并通过 is-edit -->
  <create-or-edit></create-or-edit>
</template>

<script>
import CreateOrEdit from './components/CreateOrEdit'
export default {
  name: 'MenuEdit',
  components: {
    CreateOrEdit
  }
}
</script>

<style></style>
