import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { role } from '../API/auth/interfaces';
import { post } from '../API/admin/interfaces.ts';

interface InitialState {
  roles: string[];
  postName: string[];
}

const initialState: InitialState = {
  roles: [],
  postName: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setRoles: (state, action: PayloadAction<role[]>) => {
      if (!action.payload) {
        return;
      }
      const roles = action.payload.map((item) => item.name);
      state.roles = roles;
    },
    setPostName: (state, action: PayloadAction<post[]>) => {
      if (!action.payload) {
        return;
      }
      const postName = action.payload.map((item) => item.name);
      state.postName = postName;
    },
  },
});

export const { setRoles, setPostName } = userSlice.actions;
