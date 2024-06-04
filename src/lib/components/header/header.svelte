<script lang="ts">
    import { PUBLIC_LOGIN_URL, PUBLIC_SIGNUP_URL } from "$env/static/public";
    import type User from "$lib/models/user";
    import { IconMenu2 } from "@tabler/icons-svelte";
    import { IconSearch } from "@tabler/icons-svelte";

    export let avatar: string|undefined = undefined;
    export let userId: string|undefined = undefined;
    export let showMenu = false;
    export let users: User[]|undefined;

    let usersSearch: User[] = [];

    function toggleMenu() {
        showMenu = !showMenu;
    }

    function handleSearch(evt: any) {
        const value = evt.target.value as string;

        usersSearch = value.length > 0 ? users!.filter(user => user.username.includes(value)) : [];

        console.log(usersSearch);
        
    }
</script>

<header>
    <button on:click={toggleMenu} class="menu"><IconMenu2 size={32}></IconMenu2></button>

    <div class="actions">
        <button class="searchbtn"><IconSearch></IconSearch></button>

        <div class={`search ${usersSearch.length > 0 ? 'active' : ''}`}>
            <input type="text" placeholder="Search" on:input={handleSearch}>
            <ul class="searchresult">
                {#each usersSearch as user}
                    <li><a href={`/u/${user.id}`}><img src={user.avatar} alt="avatar"> {user.username.length <= 12 ? user.username : user.username.substring(0, 9) + '...'}</a></li>
                {/each}
            </ul>
        </div>

        {#if avatar}
            <a href={`/u/${userId}`}>
                <img src={avatar} alt="avatar">
            </a>
        {:else}
            <a href={PUBLIC_LOGIN_URL}>login</a>
            <a href={PUBLIC_SIGNUP_URL}>signup</a>
        {/if}
    </div>



</header>

<style lang="scss">
    @import "style.scss";
</style>