
// https://www.npmjs.com/package/react-hexgrid?activeTab=readme

import { HexGrid, Layout, Hexagon, Text, Pattern, Path, Hex } from 'react-hexgrid';
// import './board.css'
import Image1 from '../assets/img/logo_howards.png'

function Board () {
    return (
      <div id="board">
        <HexGrid width={1400} height={800} viewBox="-50 -50 100 100">
          {/* Grid with manually inserted hexagons */}
          <Layout size={{ x: 10, y: 10 }} flat={true} spacing={1.01} origin={{ x: 0, y: 0 }}>
            <Hexagon q={0} r={0} s={0} fill = 'url(#pat-1)'/>
            {/* Using pattern (defined below) to fill the hexagon */}
            <Hexagon q={0} r={1} s={-1} className='hex'/>
            <Hexagon q={1} r={0} s={-1} />
            <Hexagon q={1} r={-1} s={0} />
            <Hexagon q={0} r={-1} s={1} />
            <Hexagon q={-1} r={0} s={1} />
            <Hexagon q={-1} r={1} s={0} />

            <Hexagon q={-2} r={0} s={1} />
            <Hexagon q={0} r={2} s={-2} />
            <Hexagon q={1} r={1} s={-2} />
            <Hexagon q={2} r={0} s={-2} />
            <Hexagon q={2} r={-1} s={-1} />
            <Hexagon q={2} r={-2} s={0} />
            <Hexagon q={1} r={-2} s={1} />
            <Hexagon q={0} r={-2} s={2} />
            <Hexagon q={-1} r={-1} s={2} />
            <Hexagon q={-2} r={0} s={2} />
            <Hexagon q={-2} r={1} s={1} />
            <Hexagon q={-2} r={2} s={0} />
            <Hexagon q={-1} r={2} s={-1} />

            {/* Pattern and text */}

          </Layout>
          <Pattern id="pat-1" link={Image1} />
          <Pattern id="pat-2" link="http://cat-picture2" />

        </HexGrid>
      </div>
    );
}

export default Board;