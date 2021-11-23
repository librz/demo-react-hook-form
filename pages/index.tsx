import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import If from '../components/If'
import Google from '../public/google.svg'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  function onSubmit(values: any) {
    console.log(values);
    alert(`pass validation, form values: ${JSON.stringify(values)}`);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>react-hook-form demos</title>
        <meta name="description" content="Building demos with react-hook-form" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={styles.header}>Sign in to Company A</h1>
        <div className={styles.google_container} onClick={() => { alert("Feature not ready") }}>
          <Image src={Google} width={24} height={24} />
          <span>Continue with Google</span>
        </div>
        <div className={styles.or}>
          OR
        </div>
        <input 
          type="text" 
          placeholder="Username or email" 
          {...register('username',  { required: true })} 
        />
        <If condition={errors.username}>
          <p className={styles.field_error}>user name is required</p>
        </If>
        <input
          type="password"
          placeholder="Password"
          {...register('password', { required: true })}
        />
        <If condition={errors.password}>
          <p className={styles.field_error}>password is required</p>
        </If>
        <input type="submit" value="Sign in" /> 
        <div className={styles.more_actions}>
          <span onClick={() => { alert("Feature not ready") }}>Forgot your password?</span>
          <span onClick={() => { alert("Feature not ready") }}>Sign up</span>
        </div>
      </form>
    </div>
  )
}

export default Home
