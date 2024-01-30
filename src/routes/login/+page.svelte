
<script lang="ts">
    import { IconEyeOff } from "@tabler/icons-svelte";
    import { IconEye } from "@tabler/icons-svelte";

    let passwordBtnIcon = IconEyeOff;
    let showPassword = false;

    function toggleShowPassword() {
        showPassword = !showPassword;
        passwordBtnIcon = showPassword ? IconEye : IconEyeOff;
    }
</script>

<main class="main">
    <div class="bg"></div>
    <form action="">
        <h1>Login</h1>

        <fieldset>
            <input type="text" name="username" id="username" placeholder="Username" required autocomplete="off">
            <label for="username">Username</label>
        </fieldset>

        <fieldset>
            <input type={showPassword ? 'text' : 'password'} name="password" id="password" placeholder="Password" required autocomplete="off">
            <label for="password">Password</label>
            <button type="button" on:click={toggleShowPassword}>
                <svelte:component this={passwordBtnIcon} />
            </button>
        </fieldset>

        <div class="buttons">
            <button class="submit" type="submit">Login</button>
            <button class="cancel" type="reset">Cancel</button>
        </div>
    </form>
</main>

<style lang="scss">
    @import './style.scss';
</style>