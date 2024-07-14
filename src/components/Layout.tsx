// src/components/Layout.tsx

import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from '../styles/Layout.module.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;