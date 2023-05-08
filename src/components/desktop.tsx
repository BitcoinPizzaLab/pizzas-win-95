import { SimpleGrid, Box } from '@chakra-ui/react'
import { MenuIcon } from './menuIcon'
import { useMenuList } from '../store/menu'

export const Desktop = () => {
    const menulist = useMenuList((state) => state.menulist)

    return (
        <SimpleGrid columns={1} p="5" spacing="30px">
            {menulist.map((menu, i) => {
                return (
                    <Box key={i} w="100px" h="80px">
                        <MenuIcon
                            onClick={menu.onClick}
                            Icon={menu.icon}
                            label={menu.label}
                        />
                    </Box>
                )
            })}
        </SimpleGrid>
    )
}
