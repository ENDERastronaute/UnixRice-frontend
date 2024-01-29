<script lang="ts">
    import { IconMenu2 } from "@tabler/icons-svelte";

    export let showMenu = false;

    function toggleMenu() {
        showMenu = !showMenu;
    }
</script>

<header>
    <button on:click={toggleMenu} class="menu"><IconMenu2 size={32}></IconMenu2></button>
    <div class="actions">
        <a href="/login">login</a>
        <a href="/signup">signup</a>
    </div>
</header>

<style lang="scss">
    @import "style.scss";
</style>