<template>
  <div
    class="flex flex-col justify-between h-[200px] p-4 bg-slate-50 shadow-md shadow-slate-300 rounded"
  >
    <div class="relative w-[100%] flex justify-between">
      <h3>{{ project.name }}</h3>
      <p>{{ new Date(project.created).toLocaleDateString('en-US') }}</p>
    </div>
    <div class="flex justify-between">
      <Button
        @on-click="useRouter().push(`/profile/${project.upid}`)"
        class="bg-blue-800 hover:bg-blue-600 text-[14px] py-1"
      >
        View
      </Button>
      <div class="flex">
        <Modal v-model="isOpen" :show="isOpen">
          <Input
            class="mb-4"
            v-model="projectName.name"
            :value="project.name"
            type="text"
            placeholder="Project name"
            @keyup.enter="editProject"
          />
          <div class="flex justify-between">
            <Button class="bg-red-800 hover:bg-red-600" @on-click="closeModal">
              Close
            </Button>
            <Button
              class="bg-blue-800 hover:bg-blue-600"
              @on-click="editProject"
            >
              Save
            </Button>
          </div>
        </Modal>
        <Button
          class="bg-green-800 hover:bg-green-600 text-[14px] py-1 mr-2"
          @on-click="openModal"
        >
          Edit
        </Button>

        <Button
          @on-click="deleteProject"
          class="bg-red-800 hover:bg-red-600 text-[14px] py-1"
        >
          Delete
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '~/models'
import { useProjectsStore } from '~/stores/projects_store'
const props = defineProps<{
  project: Project
}>()
const store = useProjectsStore()
const projectName = reactive({
  name: '',
})

projectName.name = props.project.name
const isOpen = ref(false)
function openModal() {
  isOpen.value = true
}
function closeModal() {
  isOpen.value = false
}
async function editProject() {
  const status = await store.updateProject(projectName.name, props.project.upid)
  if (status == 200) {
    closeModal()
  }
}

function deleteProject() {
  store.deleteProject(props.project.upid)
}
</script>

<style scoped></style>
