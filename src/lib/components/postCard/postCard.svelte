


<script lang="ts">
    import type Post from "$lib/models/post";
    import { IconTrash, IconPencil, IconDeviceFloppy } from "@tabler/icons-svelte";

    export let post: Post;

    let titleUpdate = post.content.title;
    let paragraphUpdate = post.content.paragraph ?? '';
    let imagesStr = post.content.images.toString();
    let votes: number;

    post.votes.forEach(vote => {
        votes += vote.value;
    });

    let updateDialog: HTMLDialogElement;
    let upCheckBox: HTMLInputElement;
    let downCheckBox: HTMLInputElement;

    let index = 0
    let image: string = post.content.images[index];

    const onVote = (evt: any) => {
        let value: number;

        if (!upCheckBox.checked && !downCheckBox.checked) {
            value = 0;
        }
        else if (evt.target === upCheckBox) {
            downCheckBox.checked = false;
            value = 1;
            votes += 1;
        }
        else {
            upCheckBox.checked = false;
            value = -1;
            votes -= 1;
        }

        fetch(`${import.meta.env.VITE_API}/post/${post.id}/vote`, {
            method: "POST",
            body: JSON.stringify({
                value: value,
                user_id: 1 // à changer
            })
        })
    }
    
</script>

<article class="post">
    <div class="images">
        {#if image}
            <img class="image" src={image} alt="th" />
        {/if}
    </div>
    <div class="body">
        <header>
            <div class="user">
                <p>{post.username}</p>
            </div>
        </header>

        <div class="text">
            <h3>{titleUpdate}</h3>
            <p>{paragraphUpdate}</p>
        </div>

        <footer>
            <div class="events">
                <div class="votes">
                    <input type="checkbox" bind:this={upCheckBox} on:click={onVote}>
                    <p>{post.votes}</p>
                    <input type="checkbox" bind:this={downCheckBox} on:click={onVote}>
                </div>
            </div>
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