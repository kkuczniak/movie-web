import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface IFormInput {
  email: string;
  password: string;
}

export default function Login() {
  const [login, setLogin] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async (email, password) => {
    if (login) {
      // await signIn(email, password)
    } else {
      // await signUp(email,password)
    }
  };

  return (
    <div className='flex justify-center items-center mt-20'>
      <Head>
        <title>Login</title>
      </Head>
      <section className='w-full md:w-[600px] md:h-[600px] flex flex-col items-center  rounded-lg pt-5'>
        <Image
          src='/logo.png'
          alt='MovieLogo'
          width={200}
          height={200}
          layout='fixed'
          className='mx-auto rounded-full'
        />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col space-y-5 mt-10 px-2 w-full md:w-[70%] min-w-[70%] text-[white]'
        >
          <input
            className='input'
            type='email'
            {...register('email', { required: true, maxLength: 30 })}
            placeholder='Email'
          />
          {errors.email && (
            <p className=' text-sm font-light text-CustomOrange'>
              This field is required
            </p>
          )}
          <input
            className='input'
            type='password'
            placeholder='Password'
            {...register('password', { required: true })}
          />
          {errors.password && (
            <p className=' text-sm font-light text-CustomOrange'>
              This field is required
            </p>
          )}

          <input
            className='input bg-CustomOrange  uppercase font-bold'
            type='submit'
            value='Sign In'
          />
          <div>
            New to movie-web? &nbsp;
            <button className=' hover:underline'> Sign up now</button>
          </div>
        </form>
      </section>
    </div>
  );
}
