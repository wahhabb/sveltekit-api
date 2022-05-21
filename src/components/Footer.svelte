<script>
    export let author;
</script>
<footer>
    <p>Copyright &copy; { new Date().getFullYear() } 
        {#if (author > "")}  
            by { author }
        {/if} 
    </p>
</footer>

<style>
    p {
        color: antiquewhite;
    }
    footer {
        background-color: darkblue;
        padding: 2em;
        text-align: center;
    }
</style>