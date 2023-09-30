import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { api } from '../api/api'

const initialState = {
    loading: false,
    data: null,
    count: 0
}

export const getProperties = createAsyncThunk('getProperties', async () => {
    const response = await fetch('http://localhost/api/v1/property-list')
    return response.json()
})

const propertySlice = createSlice({
    name: 'propertiesList',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getProperties.pending, (state, action) => {
            state.loading = true
            state.data = action.payload
        });
        builder.addCase(getProperties.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
        });
        builder.addCase(getProperties.rejected, (state, action) => {
            state.loading = false
            console.error('error', action.payload)
        });
    }
  })
  
  export default propertySlice.reducer

