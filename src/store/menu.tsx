import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { Image } from '@chakra-ui/react'

export const useMenuList: any = create(
    immer((set) => ({
        menulist: [
            {
                icon: <Image w="full" src="https://pizzalabs.art/logo.png" />,
                label: 'Bitcoin Pizzas',
                visible: false,
                onClick: () => {
                    set((state) => {
                        state.menulist[0].visible = !state.menulist[0].visible
                    })
                },
            },
            {
                icon: <Image w="full" src="https://pizzalabs.art/logo.png" />,
                label: 'Pizza Couriers',
                visible: false,
                onClick: () => {
                    set((state) => {
                        state.menulist[1].visible = !state.menulist[1].visible
                    })
                },
            },
            {
                icon: <Image w="full" src="https://pizzalabs.art/logo.png" />,
                label: 'Twitter',
                visible: false,
                onClick: () => {
                    window.open('https://twitter.com/pizzalabs_btc')
                },
            },
            {
                icon: <Image w="full" src="https://pizzalabs.art/logo.png" />,
                label: 'Discord',
                visible: false,
                onClick: () => {
                    set((state) => {
                        state.menulist[3].visible = !state.menulist[3].visible
                    })
                },
            },
            {
                icon: <Image w="full" src="https://pizzalabs.art/logo.png" />,
                label: 'Pizza Log',
                visible: false,
                onClick: () => {
                    set((state) => {
                        state.menulist[4].visible = !state.menulist[4].visible
                    })
                },
            },
            {
                icon: <Image w="full" src="https://pizzalabs.art/logo.png" />,
                label: 'Pizza Diary',
                visible: false,
                onClick: () => {
                    set((state) => {
                        state.menulist[5].visible = !state.menulist[5].visible
                    })
                },
            },
        ],
    }))
)
