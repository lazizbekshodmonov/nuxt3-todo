<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
})
import { useAuthStore } from '~/stores/auth_store'
import { useProjectsStore } from '~/stores/projects_store'

const projectStore = useProjectsStore()

const store = useAuthStore()
onMounted(() => {
  store.getUser()
  projectStore.saveProjects()
})
</script>
<template>
  <div class="p-6">
    <ul
      class="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
    >
      <li
        v-for="project in projectStore.projects"
        class="list-none"
        :key="project.upid"
      >
        <Project :project="project" />
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
