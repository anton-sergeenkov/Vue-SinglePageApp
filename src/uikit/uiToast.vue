<template>
    <transition name="fade">
        <div :class="classes" class="toast" @click="$emit('close')">
            <slot></slot>
        </div>
    </transition>
</template>

<script>
export default {
    props: {
        theme: { type: String, default: 'primary' },
        position: { type: String, default: 'left-bottom' },
        duration: { type: Number, default: 3500 },
    },
    computed: {
        classes() {
            return {
                ['toast--'+this.theme]: true, 
                ['toast--'+this.position]: true
            };
        }
    },
    created() {
        setTimeout(() => { 
            this.$emit('close');
        }, this.duration);
    },
}
</script>

<style scoped>
.toast {
    position: fixed;
    z-index: 200;
    max-width: 80%;
    padding: 15px 20px;
    font-size: 14px;
    text-align: center;
    cursor: pointer;
    border-radius: 5px;
    color: #fff;
    border-top: 4px solid rgba(0,0,0,0.12);
}
/*----------------------------------------
THEME 
----------------------------------------*/
.toast--primary {
    background-color: rgba(0,0,0,0.7);
}
.toast--success {
    background-color: #4caf50;
}
.toast--info {
    background-color: #2196f3;
}
.toast--warning {
    background-color: #fb8c00;
}
.toast--error {
    background-color: #ff5252;
}
/*----------------------------------------
POSITION 
----------------------------------------*/
.toast--top {
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
}
.toast--center {
	top: 50%;
	left: 50%;
	transform: translate(-50%,-50%);
}
.toast--bottom {
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%); 
}
.toast--left-bottom {
    bottom: 25px;
    left: 25px;
}
/*----------------------------------------
TRANSITION 
----------------------------------------*/
.fade-enter-active, .fade-leave-active {
    transition: 1s;
}
.fade-enter, .fade-leave-to {
    transform: translateY(100px);
}
</style>