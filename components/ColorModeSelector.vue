<template>
  <button type="button" @click="toggleMode" class="hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1">{{ nextModeIcon }}</button>
</template>

<script setup>
  const colorMode = useColorMode();
  
  const modes = {
    light: '🌕',
    dark: '🌑'
  }
  colorMode.preference = 'dark';

  const nextModeIcon = ref(modes['light']); 

  const toggleMode = () => {
    if(colorMode.preference === 'dark') {
      colorMode.preference = 'light';
      nextModeIcon.value = modes['dark'];
    } else {
      colorMode.preference = 'dark';
      nextModeIcon.value = modes['light'];
    }
  }
</script>