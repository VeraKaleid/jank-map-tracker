// Define the MapCoordinate data type
export class MapCoordinate {
    constructor(player, x, y) {
      this.player = player;
      this.x = x;
      this.y = y;
    }
  }
  
// Define the Region data type
export class Region {
  constructor(regionName, mapCoordinates) {
    this.regionName = regionName;
    this.mapCoordinates = mapCoordinates;
  }
}
  