<template>
  <div class="flex space-x-4 items-center justify-between">
    <p class="text-lg">{{ hint }}</p>
    <input class="border rounded-md text-lg px-4 py-1 focus:outline-none w-auto" :value="modelValue" @input="updateInput" :type="inputType" :placeholder="placeholder">
  </div>
</template>


<script>
export default {
  name: 'my-input',
  props: {
    modelValue: [String, Number],
    placeholder: {
      type: String
    },
    hint: {
      type: String
    },
    inputType: {
      type: String,
      default: 'text'
    }
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>