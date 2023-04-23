# how to run

## clone project
git clone https://github.com/VeraKaleid/jank-map-tracker.git

## install yarn & dependencies
yarn

## run app
yarn electron-dev




# adding new maps

## download maps
get them from https://ffxiv.gamerescape.com/wiki/Category:Geography
put them into public/maps , named appropriately

## add aetheryte entries
go to src\components\AetheryteComponent.svelte
copy format:

const NewRegionName = [
        new MapCoordinate("Aetheryte Location 1", 32.6, 17.6),
        new MapCoordinate("Aetheryte Location 2", 19.1, 25.5),
]

const NewRegionAetheryte = new Region("The New Region", NewRegionName);
export const AetheryteCollection = [
        ....,
        NewRegionAetheryte
]

save, run app.
