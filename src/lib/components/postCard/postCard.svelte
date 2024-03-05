


<script lang="ts">
    import type Post from "$lib/models/post";
    import { IconTrash, IconPencil, IconDeviceFloppy } from "@tabler/icons-svelte";

    export let post: Post;

    let titleUpdate = post.content.title;
    let paragraphUpdate = post.content.paragraph ?? '';
    let imagesStr = post.content.images.toString();

    let updateDialog: HTMLDialogElement;

    let index = 0
    let image: string = post.content.images[index];
</script>

<article class="post">
    <div class="images">
        {#if image}
            <img class="image" src={image} alt="th" />
        {/if}
    </div>
    <div class="body">
        <div class="text">
            <h3>{titleUpdate}</h3>
            <p>{paragraphUpdate}</p>
        </div>

        <footer>
            <div class="user"></div>
            <div class="actions">
                <form method="post" action="?/delete">
                    <input type="hidden" name="id" value={post.id}>
                    <button type="submit"><IconTrash></IconTrash></button>
                </form>
                <button on:click={() => {updateDialog.showModal()}}><IconPencil></IconPencil></button>
            </div>
        </footer>
    </div>
</article>

<dialog bind:this={updateDialog}>
    <form method="post" action="?/update">
        <input type="text" name="title" bind:value={titleUpdate}>
        <input type="text" name="paragraph" bind:value={paragraphUpdate}>
        <input type="hidden" name="images" bind:value={imagesStr}>
        <input type="hidden" name="id" value={post.id}>
        <button type='submit' on:click={() => {updateDialog.close()}}><IconPencil></IconPencil></button>
    </form>
</dialog>

<style lang="scss">
    @import './style.scss';
</style>