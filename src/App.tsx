import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";

export interface GameQuery {
	genre: Genre | null;
	platform: Platform | null;
}

function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`, // 1 column, 2 rows
				lg: `"nav nav" "aside main" `, // 2 columns, 2 rows
			}}
			templateColumns={{
				base: "1fr",
				lg: "200px 1fr",
			}}>
			<GridItem area={"nav"}>
				<NavBar />
			</GridItem>
			<Show above="lg">
				<GridItem area={"aside"} paddingX={"5px"}>
					<GenreList onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} selectedGenre={gameQuery.genre} />
				</GridItem>
			</Show>
			<GridItem area={"main"}>
				<PlatformSelector
					selectedPlatform={gameQuery.platform}
					onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })}
				/>	
				<GameGrid gameQuery={gameQuery} />
			</GridItem>
		</Grid>
	);
}

export default App;
