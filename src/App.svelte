<script>
	import AetheryteComponent from "./components/AetheryteComponent.svelte";
    import Locations from "./components/Locations.svelte";
	import { writable } from 'svelte/store'
    import MapDisplay from "./components/MapDisplay.svelte";

	export let AetheryteCollection;

	export let regions = [];
	export let inputString = '';
	export let sanitizedInput = writable('');
	
	export const defaultRegion = { regionName: "Default", mapCoordinates: [] };
    export let activeRegion = defaultRegion;

	let bindLocation;
	let bindMapDisplay;


</script>

<main>
	<div class="coordinate-display">
		<div style="display: flex; justify-content: center;">
			<input bind:value={inputString} />
			<button on:click={() => {bindLocation.newCoordinate(); activeRegion = activeRegion}}>Add Map</button>
		</div>
		<ul>
		{#each regions as region}
			<li>
				<div class="region-header">
					<h2>{region.regionName}</h2>
				</div>
				<ul>
					{#each region.mapCoordinates as coordinate}
						<div class="coordinate-item">
							<button on:click={() => {bindLocation.deleteCoordinate(region, coordinate); activeRegion = activeRegion}}>Delete</button>
							<li>{coordinate.player}, {region.regionName} ({coordinate.x}, {coordinate.y})</li>
						</div>
					{/each}
				</ul>
			</li>
		{/each}
		</ul>
	</div>

	<div class = "map-display">
		<ul class="nav nav-tabs nav-tabs--files">
			{#if regions.length}
				{#each regions as region}
					<li class="nav-item">
						<a class="nav-link {region === activeRegion ? 'active' : ''}" href={"#"} on:click={() => bindMapDisplay.updateActiveRegion(region)}>
							{region.regionName}
						</a>
					</li>
				{/each}
			{:else}
				<li class="nav-item">
					<a class="nav-link" href={"#"}>
						No Maps Yet
					</a>
				</li>
			{/if}
		</ul>

		
		<div class="map-image-container" style="background-image: url('maps/{activeRegion ? activeRegion.regionName : defaultRegion.regionName}.png'); 
			height: calc(100vh - 150px);
			width: calc(100vh - 150px);
			background-size: contain;
			background-position: left;
			background-repeat: no-repeat;">
			{#key activeRegion}
			<div style="height: calc(100vh - 150px);
				width: calc(100vh - 150px);">
				{#if typeof activeRegion.mapCoordinates === 'object' && Array.isArray(activeRegion.mapCoordinates)}
					{#each activeRegion.mapCoordinates as point}
						<div class="map-dot"
							style="position: absolute;
								left: {point.x / 43 * 100}%;
								top: {point.y / 43 * 100}%;
								"
								title="{point.player}">
							
						</div>
					{/each}
				{/if}
			</div>
			{/key}
		</div>
		
	</div>
</main>


<Locations 
	bind:regions 
	bind:inputString 
	bind:sanitizedInput 
	bind:this={bindLocation}
/>
<AetheryteComponent 
	bind:AetheryteCollection
/>
<MapDisplay
	bind:this={bindMapDisplay}
	bind:activeRegion
/>

  
<style>
	.region-header {
		width: 25%;
		overflow: hidden;
	}
	

	.coordinate-display {
		width: 34%;
		float: left;
	}
 

	.coordinate-item {
		display: flex;
		align-items: center;
	}

	.coordinate-item button {
		margin-right: 8px;
	}


	ul {
		list-style-type: none;
		padding: 10px;
  		margin: 10px;
	}

	li {
		display: flex;
		align-items: center;
		list-style: none;
		margin: 0.5rem 0;
	}

	.map-display {
		width: 66%;
		float: left;
	}

    .nav-tabs {
    margin-bottom: 1rem;
    }
  

  
    .nav-tabs--files {
        border-bottom: 0;
        margin-bottom: -1px;
        display: flex;
        flex-wrap: wrap;
        justify-content: left;
    }

    .nav-tabs--files .nav-link {
        border: 1px solid #dee2e6;
        border-bottom: none;
        border-radius: 0.25rem 0.25rem 0 0;
        background-color: #f8f9fa;
        color: #495057;
        margin-right: 0.5rem;
        margin-bottom: -1px;
        position: relative;
        flex-grow: 1;
        text-align: center;
        padding: 0.5rem;
        cursor: pointer;
    }

    .nav-tabs--files .nav-link:hover {
        border-color: #dee2e6 #dee2e6 #f8f9fa;
        background-color: #e9ecef;
    }

    .nav-tabs--files .nav-link.active {
        background-color: #333;
        color: #fff;
    }

    .map-dot {
        position: absolute;
        z-index: 100;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: red;
    }

    .map-image-container {
        position: relative;
        height: calc(100vh - 150px);
        width: calc(100vh - 150px);

    }
</style>
  
