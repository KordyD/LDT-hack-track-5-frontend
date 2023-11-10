import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { role } from '../API/auth/interfaces';

interface InitialState {
  roles: string[];
}

const initialState: InitialState = {
  roles: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setRoles: (state, action: PayloadAction<role[]>) => {
      const roles = action.payload.map((item) => item.name);
      state.roles = roles;
    },
  },
});

export const { setRoles } = userSlice.actions;
