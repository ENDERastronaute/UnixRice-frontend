
<script lang="ts">
    import { IconEyeOff } from "@tabler/icons-svelte";
    import { IconEye } from "@tabler/icons-svelte";
    import { onMount } from "svelte";

    let passwordBtnIcon = IconEyeOff;
    let showPassword = false;

    function toggleShowPassword() {
        showPassword = !showPassword;
        passwordBtnIcon = showPassword ? IconEye : IconEyeOff;
    }

    let id: string|null;

    onMount(async () => {
        id = new URLSearchParams(window.location.search).get('id');
    })
</script>

<main class="main">
    <div class="bg"></div>
    <form action="" method="post">
        <h1>Login</h1>

        <fieldset>
            <input type="text" name="email" id="email" placeholder="Email" required autocomplete="off">
            <label for="username">Email</label>
        </fieldset>

        <fieldset>
            <input type={showPassword ? 'text' : 'password'} name="password" id="password" placeholder="Password" required autocomplete="off">
            <label for="password">Password</label>
            <button type="button" on:click={toggleShowPassword}>
                <svelte:component this={passwordBtnIcon} />
            </button>
        </fieldset>

        <input type="hidden" name="id" value={id}>

        <div class="buttons">
            <button class="submit" type="submit">Login</button>
            <button class="cancel" type="reset">Cancel</button>
        </div>
    </form>
</main>

<style lang="scss">
    @import './style.scss';
</style>