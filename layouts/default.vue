<template>
  <div class="bg-slate-300">
    <nav
      class="flex justify-between items-center bg-white shadow w-full h-14 px-4"
    >
      <Modal v-if="route.path == '/profile'" v-model="isOpen" :show="isOpen">
        <Input
          class="mb-4"
          v-model="newProject.name"
          type="text"
          placeholder="Project name"
          @keyup.enter="addProject"
        />
        <div class="flex justify-between">
          <Button
            class="bg-red-800 hover:bg-red-600 py-2"
            @on-click="closeModal"
          >
            Close
          </Button>
          <Button
            class="bg-green-800 hover:bg-green-600 py-2"
            @on-click="addProject"
          >
            Add
          </Button>
        </div>
      </Modal>
      <Button
        v-if="route.path == '/profile'"
        class="bg-blue-800 hover:bg-blue-600 w-10 h-10 md:w-auto md:h-auto p-0 flex items-center justify-center"
        @on-click="openModal"
      >
        <span class="hidden md:block">Add project</span>
        <span class="block md:hidden">+</span>
      </Button>
      <Search class="w-1/3" />
      <Profile />
    </nav>
  </div>
  <div>
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
import { useProjectsStore } from '~/stores/projects_store'
const route = useRoute()
const store = useProjectsStore()
const isOpen = ref(false)
function openModal() {
  isOpen.value = true
}
function closeModal() {
  isOpen.value = false
}

const newProject = reactive({
  name: '',
})
async function addProject() {
  if (newProject.name) {
    const status = await store.addProject(newProject)
    if (status == 201) {
      closeModal()
    }
  }
}
</script>
