"use client";
import Header from './components/header/Header';
import styles from './page.module.css';
import Image from 'next/image';
export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <div className={styles.banner}>
        </div>
      </div>
    </div>
  )
}
