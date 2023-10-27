import { Tile } from "./Tile";

export function App() {
    const content_list = getContent();
    const tile1Content = content_list[0];
    const tile2Content = content_list[1];

    return (
        <div className="featured-tiles">
            <Tile content={tile1Content} />
            <Tile content={tile2Content} />
        </div>
    );
}

getContent = () => {
    return [
        {
            image: 'https://www.classcentral.com/report/wp-content/uploads/2022/04/Artificial-Intelligence-Featured-Image.png',
            provider: 'Provider A',
            title: 'Title A',
            courseType: 'Type A',
        },
        {
            image: 'https://gisgeography.com/wp-content/uploads/2022/01/Artificial-Intelligence-Courses-Feature.png',
            provider: 'Provider B',
            title: 'Title B',
            courseType: 'Type B',
        },
    ];
}
