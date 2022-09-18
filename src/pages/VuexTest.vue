<template>
    <div>
        <h3>Vuex test</h3>
        {{counter}}
        {{ $store.getters.getTwoPowerCounter}}
        <button @click="increase">눌러봐</button>
    </div>
</template>

<script>
    import { computed } from '@vue/reactivity';
    import { useStore } from 'vuex';

    export default{
        setup(){
            const store = useStore();
            const counter = computed(() => store.state.counter);
            const increase = () => {
                console.log('counter. ', counter.value);
                store.commit("setCounter", ++counter.value);
            }
            return {counter, increase}
        }
    }
</script>