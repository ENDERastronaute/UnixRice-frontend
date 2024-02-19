<script lang="ts">
    export let data: any;
</script>

<form method="post" action="?/create">
    <label for="title">Title</label>
    <input name="title" type="text">
	<label for="description">Description</label>
    <input name="description" type="text">
    
    <input type="file" name="images" multiple max="10">

	<button type="submit">submit</button>
</form>