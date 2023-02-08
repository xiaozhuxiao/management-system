<template>
  <div class="menu-create"></div>
  <create-or-edit :is-edit="true"></create-or-edit>
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
