import { createSlice } from "@reduxjs/toolkit"

interface SidebarState {
    expanded: boolean
}

const initialState: SidebarState = {
    expanded: false,
}

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.expanded = !state.expanded
        },
        setSidebarState: (state, action) => {
            state.expanded = action.payload
        }
    }
})

export const { toggleSidebar, setSidebarState } = sidebarSlice.actions
export default sidebarSlice.reducer
