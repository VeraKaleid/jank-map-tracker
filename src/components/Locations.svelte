<script>  
  export let regions = [];
  export let inputString;
  export let sanitizedInput;

  export function newCoordinate() {
    // Replace any characters that are not digits, decimal point, or whitespace
    const sanitizedString = inputString.replace(/[^A-Za-z0-9()<>. ]/g, "");
    sanitizedInput.set(sanitizedString);

    console.log("Sanitized string:", sanitizedString);

    // Extract player name
    const playerMatch = sanitizedString.match( /\((.+?)\)/ );
    const playerName = playerMatch ? playerMatch[1] : undefined;

    console.log("Player name:", playerName);

    // Extract region name
    const regionMatch = sanitizedString.match(/\)([^()]*)\(/);
    const regionName = regionMatch ? regionMatch[1].trim() : undefined;

    console.log("Region name:", regionName);

    // Extract coordinates
    const coordsMatch = sanitizedString.match(/ \((.*?)\)/);
    if (coordsMatch) {
        const [xStr, yStr] = coordsMatch[1].replace(/\s+/g, " ").trim().split(' ');
        const x = parseFloat(xStr);
        const y = parseFloat(yStr);
        console.log("Coordinates: " + x + ", "+ y);

        
        let region = regions.find(r => r.regionName === regionName);
        if (!region) {
        region = { regionName: regionName, mapCoordinates: [] };
        regions.push(region);
        }
        region.mapCoordinates.push({ player: playerName, x: x, y: y });

        regions = regions;
    }
  }

  export function deleteCoordinate(region, coordinate) {
    region.mapCoordinates = region.mapCoordinates.filter(c => c !== coordinate);

    regions = regions;
  }
</script>