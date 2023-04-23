<script>
    import { Region, MapCoordinate } from './data.js';
  
    const IlMheg = [
        new MapCoordinate("Lydha Lran", 14.2, 31.6),
        new MapCoordinate("Pla Enni", 19.4, 4.2),
        new MapCoordinate("Wolekdorf", 29.4, 7.3)
    ];  
    const IlMhegAetheryte = new Region("Il Mheg", IlMheg);

    const Lakeland = [
        new MapCoordinate("Fort Jobb", 36.7, 21.3),
        new MapCoordinate("The Ostall Imperative", 6.7, 16.8)
    ]

    const LakelandAetheryte = new Region("Lakeland", Lakeland);

    const Kholusia = [
        new MapCoordinate("Stilltide", 34.4, 27.7),
        new MapCoordinate("Wright", 17.1, 29.3),
        new MapCoordinate("Tomra", 12.7, 8.4)
    ]

    const KholusiaAetheryte = new Region("Kholusia", Kholusia);

    const AmhAraeng = [
        new MapCoordinate("The Inn at Journey's Head", 29.6, 27.5),
        new MapCoordinate("Mord Souq", 26.5, 17.2),
        new MapCoordinate("Twine", 11.4, 17.1)
    ]

    const AmhAraengAetheryte = new Region("Amh Araeng", AmhAraeng);

    const TheRaktikaGreatwood = [
        new MapCoordinate("Slitherbough", 19.4, 27.4),
        new MapCoordinate("Fanow", 29.1, 17.8),
    ]

    const TheRaktikaGreatwoodAetheryte = new Region("The Rak'tika Greatwood", TheRaktikaGreatwood);

    const TheTempest = [
        new MapCoordinate("The Ondo Cups", 32.6, 17.6),
        new MapCoordinate("The Macarenses Angle", 19.1, 25.5),
    ]

    const TheTempestAetheryte = new Region("The Tempest", TheTempest);

    export const AetheryteCollection = [
        IlMhegAetheryte,
        LakelandAetheryte,
        KholusiaAetheryte,
        AmhAraengAetheryte,
        TheRaktikaGreatwoodAetheryte,
        TheTempestAetheryte
    ]
  
</script>
  