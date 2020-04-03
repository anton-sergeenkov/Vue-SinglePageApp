<template>
    <transition name="fade">
        <div class="dialog" @click="checkClose" ref="wrapper">
            <div class="content">
                <div class="content-header">
                    <slot name="header">Default Header</slot>
                </div>
                <div class="content-form">
                    <slot name="form">Default Form</slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    methods: {
        close() {
            this.$emit('close');
        },
        checkClose(event) {
            if (event.target == this.$refs.wrapper) {
                this.close();
            }
        },
        handleEscapeKey(e) {
            if (e.keyCode === 27) {
                this.close();
            }
        }
    },
    mounted() {
        if (typeof document !== 'undefined') {
            document.body.addEventListener('keyup', this.handleEscapeKey);
        }
    },
    destroyed() {
        if (typeof document !== 'undefined') {
            document.body.removeEventListener('keyup', this.handleEscapeKey);
        }
    },
}
</script>

<style scoped>
.dialog {
    --color-wrapper: rgba(0, 0, 0, 0.3);
    --color-form: #fff;
    --color-form-header: #dddcdc;
    --font-header: 20px;
}
.dialog {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 100vh;
    background-color: var(--color-wrapper);
}
.content {
    position: relative;
    border-radius: 2px;
    background-color: var(--color-form);
    box-shadow: 0px 5px 5px 0px var(--color-wrapper);
}
.content-header {
    padding: 20px 30px;
    font-size: var(--font-header);
    background-color: var(--color-form-header);
    color: rgba(0, 0, 0, 0.65);
}
.content-form{
    padding: 20px;
}
.fade-enter-active, .fade-leave-active {
    transition: opacity .4s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>
