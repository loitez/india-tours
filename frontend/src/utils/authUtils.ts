import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../selectors';

export const useIsLoggedIn = () => {
    return useSelector(selectIsLoggedIn);
};