<script lang="ts">
	import * as pckg from "../package.json";
	import "./app.css"
	
	
	interface Props {
		// Inputs
		doc: XMLDocument | undefined;
		editCount: number;
	}

	let { doc, editCount }: Props = $props();
</script>

<h4>Function Workshop</h4>

{#if doc}
	<h2>Welcome to new-oscd-plugin</h2>
{/if}

<input type="hidden" name="package-name" value={pckg.name} />
<input type="hidden" name="package-version" value={pckg.version} />
