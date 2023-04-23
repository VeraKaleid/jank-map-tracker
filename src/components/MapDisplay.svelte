<script>
    export const defaultRegion = { regionName: "Default", mapCoordinates: [] };
    export let activeRegion = defaultRegion;

    export function updateActiveRegion(region){
        activeRegion = region;
        //console.log("Updated region to " + activeRegion.regionName);
    }

</script>