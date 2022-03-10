<template>
  <footer>{{ title }}</footer>
</template>

<script>
export default {
  props: {
    title: {
      default: "Copyright",
    },
  },
};
</script>
