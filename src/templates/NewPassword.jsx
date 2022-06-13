import React, { useRef } from 'react';
import Image from 'next/image';
import logo from '@logos/logo_yard_sale.svg';
import styles from '@styles/NewPassword.module.scss';

const NewPassword = () => {
  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current); // para enviar la informacion del formulario al hacer submit
    const data = {
      oldpassword: formData.get('password'),
      newpassword: formData.get('new-password'),
    };
    // console.log(data);
  };
  return (
    <div className={styles.NewPassword}>
      <div className={styles['NewPassword-container']}>
        <Image src={logo} alt="logo" className={styles.logo} width={150} />
        <h1 className={styles.title}>Create a new password</h1>
        <p className={styles.subtitle}>Enter a new passwrd for your account</p>
        <form action="/" className={styles.form} ref={form}>
          <label for="password" className={styles.label}>
            Password
          </label>
          <input type="password" id="password" placeholder="*********" className={(styles.input, styles['input-password'])} />
          <label for="new-password" className={styles.label}>
            Password
          </label>
          <input type="password" id="new-password" placeholder="*********" className={(styles.input, styles['input-password'])} />
          <button type="submit" value="Confirm" className={(styles['primary-button'], styles['login-button'])} onClick={handleSubmit} />
        </form>
      </div>
    </div>
  );
};

export default NewPassword;
