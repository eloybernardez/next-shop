import React, { useRef } from 'react';
import Image from 'next/image';
import logo from '@logos/logo_yard_sale.svg';
import styles from '@styles/PasswordRecovery.module.scss';

const PasswordRecovery = () => {
  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(form.current);

    const data = {
      email: formData.get('email'),
    };
  };
  return (
    <div className={styles.PasswordRecovery}>
      <div className={styles['PasswordRecovery-container']}>
        <Image src={logo} alt="logo" className={styles.logo} width={150} />
        <h1 className={styles.title}>Password recovery</h1>
        <p className={styles.subtitle}>Inform the email address used to create your account</p>
        <form action="/" className={styles.form} ref={form}>
          <label htmlFor="email" className={styles.label}>
            Email address
          </label>
          <input type="text" id="email" className={(styles.input, styles['input-email'])} />
          <button type="submit" value="Confirm" className={(styles['primary-button'], styles['login-button'])} onClick={handleSubmit} />
        </form>
      </div>
    </div>
  );
};

export default PasswordRecovery;
