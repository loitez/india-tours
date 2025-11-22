import styles from './Authorization.module.scss';
import { Header } from '../../components';
import { Button, Input, Text } from '../../ui-kit';
import { Link } from 'react-router-dom';
import { login } from '../../slices';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

export const Authorization = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			const response = await fetch('/api/auth/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ password, email }),
			});

			const data = await response.json();
			console.log(data);

			dispatch(login(data.user));

			if (data.redirectUrl) {
				window.location.href = data.redirectUrl;
			}
		} catch (error) {
			console.error(error);
			alert('Registration failed');
		}
	};

	return (
		<>
			<Header />
			<div className={styles.authorization}>
				<Text size="text-h1" layout="text-block" align="text-center">
					Войти в личный кабинет
				</Text>
				<form
					action=""
					className={styles.authorization__form}
					onSubmit={handleSubmit}
				>
					<Input
						name="name"
						value={email}
						handleChange={(e) => setEmail(e.target.value)}
						placeholder="Логин"
					></Input>
					<Input
						name="password"
						value={password}
						handleChange={(e) => setPassword(e.target.value)}
						placeholder="Пароль"
					></Input>
					<Button type="submit">Войти</Button>
				</form>
				<Text size="text-s" layout="text-block" align="text-center">
					Нет аккаунта? <Link to="/register">Зарегистрироваться</Link>
				</Text>
			</div>
		</>
	);
};
