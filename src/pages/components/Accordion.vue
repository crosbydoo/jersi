<template>
    <div class="w-full my-5">
        <button @click="toggleAccordion"
            class="w-full flex justify-between items-center py-2 px-4 bg-sky-400 rounded-md hover:bg-sky-400 focus:outline-none">
            <span class="text-lg font-semibold text-white hover:text-black">{{ title }}</span>
            <span :class="{ 'transform rotate-180': isOpen }" class="transition-transform text-white">
                &#9662;
            </span>
        </button>
        <transition name="accordion" @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
            <div v-if="isOpen" class="accordion-body">
                <div class="accordion-body-inner">
                    <slot></slot>
                </div>
            </div>
        </transition>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

const toggleAccordion = () => {
    isOpen.value = !isOpen.value;
};

const beforeEnter = (el) => {
    el.style.height = '0';
};

const enter = (el) => {
    el.style.height = el.scrollHeight + 'px';
};

const beforeLeave = (el) => {
    el.style.height = el.scrollHeight + 'px';
};

const leave = (el) => {
    el.style.height = '0';
};

const props = defineProps({
    title: String,
});
</script>
  
<style scoped>
/* .accordion-button {
    max-width: 400px;
    font-family: 'Lato', sans-serif;
    margin-bottom: 20px;
    background-color: #ec5366;
    border-radius: 6px;
}

.accordion-header {
    height: 40px;
    line-height: 40px;
    padding: 0 40px 0 8px;
    position: relative;
    color: #fff;
    cursor: pointer;
}

.accordion-header-icon {
    position: absolute;
    top: 5px;
    right: 8px;
    transform: rotate(0deg);
    transition-duration: 0.3s;
} */

.accordion-body {
    overflow: hidden;
    background-color: #fff;
    border-radius: 10px;
    transition: 150ms ease-out;
}

.accordion-body-inner {
    padding: 8px;
    overflow-wrap: break-word;
}

/* .accordion-header-icon.rotate {
    transform: rotate(180deg);
    transition-duration: 0.3s;
}

.accordion-purple {
    background-color: #8c618d;
}

.accordion-purple .accordion-body {
    border-color: #8c618d;
} */
</style>
  