// /src/pages/login.tsx
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';
import { useRouter } from 'next/router';
import { Layout } from '../components';
import styles from '../styles/Login.module.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();
  const { returnUrl } = router.query;

  const handleLogin = () => {
    console.log(`Username: ${username}, Password: ${password}`); // デバッグ用メッセージ
    // 本来ならばAPIを使って認証を行う
    if (username === 'user' && password === 'password') {
      dispatch(login({ id: '1', name: 'User' }));
      router.push(returnUrl ? String(returnUrl) : '/');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Layout>
      <div className={styles.loginContainer}>
        <h1>このページは個人情報のため限定公開になります</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </Layout>
  );
};

export default Login;
