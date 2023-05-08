import { Modal, TaskBar, List, Alert } from '@react95/core'
import { Box } from '@chakra-ui/react'
import { useMenuList } from '../store/menu'

export const Layout = (props: { children: JSX.Element }) => {
    const menulist = useMenuList((state) => state.menulist)

    return (
        <Box h="100vh" w="100vw" bg="#333333">
            {props.children}
            {menulist[0].visible && (
                <Modal
                    width="800"
                    height="900"
                    defaultPosition={{ x: 50, y: 50 }}
                    icon={<Box>{menulist[0].icon}</Box>}
                    title={menulist[0].label}
                    closeModal={menulist[0].onClick}
                >
                    <Box overflow="hidden" w="full" h="full">
                        <iframe
                            scrolling="auto"
                            frameBorder="0"
                            width="100%"
                            height="100%"
                            src="https://pizzalabs.art/"
                        />
                    </Box>
                </Modal>
            )}

            {menulist[3].visible && (
                <Alert
                    title="Windows Networking"
                    type="error"
                    message="Discord will coming soon."
                    closeAlert={menulist[3].onClick}
                    buttons={[{ value: 'OK', onClick: menulist[3].onClick }]}
                />
            )}
            
            {menulist[5].visible && (
                <Alert
                    title="Windows Networking"
                    type="error"
                    message="Pizza Diary will coming soon."
                    closeAlert={menulist[5].onClick}
                    buttons={[{ value: 'OK', onClick: menulist[5].onClick }]}
                />
            )}
            <TaskBar
                list={
                    <List>
                        {menulist.map((menu, i) => {
                            return (
                                <Box key={i} cursor="pointer">
                                    <List.Item
                                        icon={
                                            <Box m="2" w="40px">
                                                {menu.icon}
                                            </Box>
                                        }
                                        onClick={menu.onClick}
                                    >
                                        {menu.label}
                                    </List.Item>
                                </Box>
                            )
                        })}
                    </List>
                }
            />
        </Box>
    )
}
