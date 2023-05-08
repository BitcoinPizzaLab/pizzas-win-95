import { Box, Center, Flex } from '@chakra-ui/react'

interface MenuIconProps {
    Icon: JSX.Element
    label: string
    onClick?: () => void
}

export const MenuIcon = (props: MenuIconProps) => {
    const {
        Icon,
        label,
        onClick = () => {
            //
        },
    } = props

    return (
        <Flex
            cursor="pointer"
            gap="1"
            direction="column"
            justifyContent="center"
            onClick={onClick}
        >
            <Box alignSelf="center" w="55px">
                {Icon}
            </Box>
            <Center fontSize="14px" alignSelf="center">
                {label}
            </Center>
        </Flex>
    )
}
