<template>
  <div>
    <nav
      class="flex justify-end items-center bg-white dark:bg-bluegtrey-dark shadow w-screen h-14 px-4"
    >
      <!-- <FormInput
        type="search"
        placeholder="Search..."
        v-model="search"
        class="mx-8"
      /> -->
      <Search />
      <NavbarProfile />
    </nav>

    <div>
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
