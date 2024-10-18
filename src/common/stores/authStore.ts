import create from 'zustand';
import { IAuthInfo } from '../types/auth';

interface AuthState {
  authInfo: IAuthInfo;
  setAuthInfo: (authInfo: IAuthInfo) => void;
  clearAuthInfo: () => void;
}

const initialState: IAuthInfo = {
  id: '',
  firstName: '',
  lastName: '',
  username: '',
  jwtToken: '',
  role: '',
  permissions: null,
  refreshToken: '',
};

export const useAuthStore = create<AuthState>((set) => ({
  authInfo: initialState,

  setAuthInfo: (authInfo: IAuthInfo) => set({ authInfo }),

  clearAuthInfo: () => set({ authInfo: initialState }),
}));
