<script lang="ts">
    import type User from "$lib/models/user";

    export let data: { user: User, userId: string };

    let user = data.user;
    let userId = data.userId;
    
</script>

<main>
    {#if userId == user.id}
        <form method="post" action="?/update">
            <label for="email">Email</label>
            <input type="text" name="email" id="email" placeholder="Email">
            <input type="hidden" name="id" value={userId}>

            <button type="submit">Modify</button>
        </form>

        <form method="post" action="?/delete">
            <input type="hidden" name="id" value={userId}>
            <button type="submit">Delete account</button>
        </form>

        <form method="post" action="?/logout">
            <button type="submit">Logout</button>
        </form>
    {/if}



</main>

<style lang="scss">
    @import './style.scss';
</style>