<template>
  <div class="w-72 mx-8 z-10">
    <Combobox v-model="selected">
      <div class="relative">
        <div
          class="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm"
        >
          <ComboboxInput
            class="w-full outline-none border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 bg-slate-200 focus:ring-0"
            :displayValue="(person) => ''"
            @change="query = $event.target.value"
            placeholder="Search..."
          />
        </div>
        <TransitionRoot
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          @after-leave="query = ''"
        >
          <ComboboxOptions
            class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            :class="query == '' ? ' hidden' : 'block'"
          >
            <div
              v-if="filteredPeople.projects.length === 0 && query !== ''"
              class="relative cursor-default select-none py-2 px-4 text-gray-700"
            >
              Nothing found.
            </div>

            <ComboboxOption
              v-for="person in filteredPeople.projects"
              as="template"
              :key="person.upid"
              :value="person.name"
              v-slot="{ selected, active }"
            >
              <li
                class="relative cursor-default select-none py-2 pl-10 pr-4"
                :class="{
                  'bg-teal-600 text-white': active,
                  'text-gray-900': !active,
                }"
                @click="routePage(person.upid)"
              >
                <span
                  class="block truncate"
                  :class="{ 'font-medium': selected, 'font-normal': !selected }"
                >
                  {{ person.name }}
                </span>
                <span
                  v-if="selected"
                  class="absolute inset-y-0 left-0 flex items-center pl-3"
                  :class="{ 'text-white': active, 'text-teal-600': !active }"
                >
                </span>
              </li>
            </ComboboxOption>
          </ComboboxOptions>
        </TransitionRoot>
      </div>
    </Combobox>
  </div>
</template>

<script lang="ts" setup>
import {
  Combobox,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
  TransitionRoot,
} from '@headlessui/vue'
import type { Project } from '~/models'
import { useProjectsStore } from '~/stores/projects_store'
const router = useRouter()
const store = useProjectsStore()

const routePage = (id: number) => router.push('/profile/' + id)
let selected = ref(store.projects[0])
const query = ref('')
const filteredPeople = reactive({
  projects: [] as Project[],
})

watchEffect(() => {
  filteredPeople.projects =
    query.value === ''
      ? store.projects
      : store.projects.filter(
          (item) =>
            item.name.toLowerCase().indexOf(query.value.toLowerCase()) !== -1
        )
})
</script>
