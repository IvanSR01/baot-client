import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducer.ts'


const store = configureStore(
	{
		reducer: reducer
	}
)

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>
export default store