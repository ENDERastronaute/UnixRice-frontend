<script lang="ts">
    import PostCard from "$lib/components/postCard/postCard.svelte";

    export let data: any;
</script>

{#if data.userId}
    <form method="post" action="?/create" enctype="multipart/form-data">
        <label for="title">Title</label>
        <input name="title" type="text">
        <label for="description">Description</label>
        <input name="description" type="text">
        
        <input type="file" name="images" multiple max="10">

        <button type="submit">submit</button>
    </form>
{/if}


<div class="posts">
    {#await data.posts}
        <p>chargement</p>
    {:then posts}
        {#each posts as post}
            <PostCard post={post} userId={data.userId}></PostCard>
        {/each}
    {/await}
</div>

<style>
    @import 'style.scss';
</style>