import { useContext } from 'react';
import { AuthContext } from '@app/hoc/AuthProvider';

function useAuth() {
  return useContext(AuthContext)
}

export { useAuth }