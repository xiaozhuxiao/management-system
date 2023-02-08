<template>
  <div class="menu-create">
    <create-or-edit :is-edit="true"></create-or-edit>
  </div>
</template>

<script>
import CreateOrEdit from './components/CreateOrEdit'

export default {
  name: 'MenuCreate',
  components: {
    CreateOrEdit
  }
}
</script>

<style></style>
