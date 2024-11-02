<script lang="ts">
	import * as pckg from "../package.json";
	import "./app.css"
	
	// Inputs
	export let doc: XMLDocument | undefined;
	export let editCount: number
</script>

{#if doc}
	<h2>Welcome to new-oscd-plugin</h2>
{/if}

<input type="hidden" name="package-name" value={pckg.name} />
<input type="hidden" name="package-version" value={pckg.version} />
