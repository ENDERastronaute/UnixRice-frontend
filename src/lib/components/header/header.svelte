<script lang="ts">
    import { PUBLIC_LOGIN_URL, PUBLIC_SIGNUP_URL } from "$env/static/public";
    import { IconMenu2 } from "@tabler/icons-svelte";

    export let avatar: string|undefined = undefined;
    export let userId: string|undefined = undefined;
    export let showMenu = false;

    function toggleMenu() {
        showMenu = !showMenu;
    }
</script>

<header>
    <button on:click={toggleMenu} class="menu"><IconMenu2 size={32}></IconMenu2></button>

    {#if avatar}
        <a href={`/u/${userId}`}>
            <img src={avatar} alt="avatar">
        </a>
    {:else}
        <div class="actions">
            <a href={PUBLIC_LOGIN_URL}>login</a>
            <a href={PUBLIC_SIGNUP_URL}>signup</a>
        </div>
    {/if}


</header>

<style lang="scss">
    @import "style.scss";
</style>