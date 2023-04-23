# how to run

## clone project
git clone https://github.com/VeraKaleid/jank-map-tracker.git

## install yarn & dependencies
yarn

## run app
yarn electron-dev

# how to use

1. copy and paste coordinates from PARTY CHAT (everything. the regex is sensitive). it'll look something like this:
        
        (Vera Kaleid) Amh Araeng ( 31  , 11 )
        
2. press button
3. look at map and appreciate the jank

Warning: Only ShB areas supported at present



# adding new maps

## download maps
get them from https://ffxiv.gamerescape.com/wiki/Category:Geography
put them into public/maps , named appropriately

## add aetheryte entries
go to src\components\AetheryteComponent.svelte
get data here: https://ffxiv.consolegameswiki.com/wiki/Limsa_Lominsa
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
