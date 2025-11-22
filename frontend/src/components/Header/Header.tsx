import styles from './Header.module.scss';
import { getRecalculatedRates } from '../../hooks';
import { useEffect, useMemo, useState } from 'react';
import { CurrencyRates } from '../../types';
import logo from '~assets/HindiLogo.svg';
import { Wrapper } from '../Wrappers';
import { Navigation } from '../Navigation';
import { Link } from 'react-router-dom';
import { Button, Text } from '../../ui-kit';
import { getCookie, clearCookie } from '../../api';
import { getCurrentUser } from '../../api/getCurrentUser.ts';
import { iconMap } from '../../constants/icons.ts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useIsLoggedIn } from '../../utils/authUtils.ts';
import { useDispatch } from 'react-redux';
import { logout } from '../../slices';

export const Header = () => {
	const [login, setLogin] = useState('');
	const dispatch = useDispatch();

	const isLoggedIn = useIsLoggedIn();
	console.log(isLoggedIn);

	const handleLogout = () => {
		clearCookie().then(() => {});
		dispatch(logout());
	};

	const token = getCookie('token');
	const user =
		token &&
		fetchUser(token).then((_) => {
			setLogin(_ ?? '');
		});
	console.log(user);

	return (
		<div className={styles.header}>
			<Link to="/">
				<Wrapper wrapperType="image" className={styles.header__logo}>
					<img src={logo} alt="" />
				</Wrapper>
			</Link>
			<Navigation></Navigation>
			<div className={styles.header__btns}>
				<Link to="/application-form">
					<Button version="secondary-btn">Записаться на занятие</Button>
				</Link>
				{isLoggedIn ? (
					<>
						<Text weight="font-bold">{login}</Text>
						<Button version="invisible" title="Выйти" onClick={handleLogout}>
							<FontAwesomeIcon icon={iconMap['logout']} color="black" />
						</Button>
					</>
				) : (
					<Link to="/login">Войти</Link>
				)}
			</div>
			{/*<div className={styles.header__currencies}>
        {Object.entries(recalculatedRates).map(([key, value]) => (
          <Currency key={key} rate={value} />
        ))}
      </div>*/}
		</div>
	);
};

const fetchUser = async (token: string) => {
	if (token) {
		return getCurrentUser(token).then((_) => _.login);
	}
	return null;
};
