


<script lang="ts">
    import { PUBLIC_API_URL, PUBLIC_IMAGES_URL } from "$env/static/public";
    import type Post from "$lib/models/post";
    import { IconTrash, IconPencil, IconDeviceFloppy } from "@tabler/icons-svelte";

    export let post: Post;
    export let userId: string|number;

    let titleUpdate = post.content.title;
    let paragraphUpdate = post.content.paragraph ?? '';
    let votes = 0;

    post.votes.forEach(vote => {
        votes += vote.value;
    });

    let updateDialog: HTMLDialogElement;
    let upCheckBox: HTMLInputElement;
    let downCheckBox: HTMLInputElement;

    let index = 0
    let image: string = post.content.images[index];
    let imagesStr = JSON.stringify(post.content.images);
    

    const onVote = (evt: any) => {
        let value: number;
        
        if (!upCheckBox.checked && !downCheckBox.checked) {
            value = 0;

            if (evt.target === downCheckBox) {
                votes += 1;
            }
            else {
                votes -= 1;
            }
        }
        else if (evt.target === upCheckBox && downCheckBox.checked) {
            downCheckBox.checked = false;
            value = 1;
            votes += 2;
        }
        else if (evt.target === upCheckBox) {
            value = 1;
            votes += 1;
        }
        else if (evt.target === downCheckBox && upCheckBox.checked) {
            upCheckBox.checked = false;
            value = -1;
            votes -= 2
        }
        else if (evt.target === downCheckBox) {
            value = -1;
            votes -= 1;
        }
        else {
            value = 0;
        }

        fetch(`${PUBLIC_API_URL}/post/${post.id}/vote`, {
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
            <img class="image" src={`${PUBLIC_IMAGES_URL}/${image}`} alt="th" />
        {/if}
    </div>
    <div class="body">
        <div class="text">
            <h3>{titleUpdate}</h3>
            <p>{paragraphUpdate}</p>
        </div>

        <footer>
            <div class="user">
                <img src={post.avatar} alt="avatar">
                <p>{post.username}</p>
            </div>
            <div class="actions">
                <form method="post" action="?/delete">
                    <input type="hidden" name="id" value={post.id}>
                    <button type="submit"><IconTrash></IconTrash></button>
                </form>
                <button on:click={() => {updateDialog.showModal()}}><IconPencil></IconPencil></button>
            </div>
            <div class="events">
                <div class="votes">
                    {#if userId && post.author_id != userId}
                        <div class="up {upCheckBox ? (upCheckBox.checked ? 'active' : '') : ''}">
                            <input type="checkbox" bind:this={upCheckBox} on:click={onVote}>
                        </div>
                    {/if}
                    <p>{votes}</p>
                    {#if userId && post.author_id != userId}
                        <div class="down {downCheckBox ? (downCheckBox.checked ? 'active' : '') : ''}">
                            <input type="checkbox" bind:this={downCheckBox} on:click={onVote}>
                        </div>
                    {/if}
                </div>
            </div>
        </footer>
    </div>
</article>

<dialog bind:this={updateDialog}>
    <form method="post" action="?/update">
        <input type="text" name="title" bind:value={titleUpdate}>
        <input type="text" name="paragraph" bind:value={paragraphUpdate}>
        <input type="hidden" name="images" value={imagesStr}>
        <input type="hidden" name="id" value={post.id}>
        <button type='submit' on:click={() => {updateDialog.close()}}><IconPencil></IconPencil></button>
    </form>
</dialog>

<style lang="scss">
    @import './style.scss';
</style>