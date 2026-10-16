<template>
  <div class="status-card">
    <div class="status-card__content">
      <div class="status-card__title">
        {{ title }}
      </div>

      <div class="status-card__description">
        {{ description }}
      </div>
    </div>

    <span
      class="status-card__indicator"
      :class="{ 'is-active': active }"
    >
      {{ active ? 'OK' : 'OFF' }}
    </span>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    default: '',
  },

  active: {
    type: Boolean,
    default: false,
  },
});
</script>