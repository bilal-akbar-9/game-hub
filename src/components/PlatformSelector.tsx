import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

const PlatformSelector = () => {
	const { data, error } = usePlatforms();
	const {gameQuery,setPlatformId} =  useGameQueryStore();
	const selectedPlatform = usePlatform(gameQuery.platformId);
	if (error) return null;
	return (
		<Menu>
			<MenuButton marginY={"10px"} as={Button} rightIcon={<BsChevronDown />}>
				{selectedPlatform?.name || "Platform"}
			</MenuButton>
			<MenuList>
				{data?.results.map((platform) => (
					<MenuItem onClick={() => setPlatformId(platform.id)} key={platform.id}>
						{platform.name}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default PlatformSelector;
