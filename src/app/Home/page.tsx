import React from 'react';
import Image from 'next/image';
import bg from './bg1.jpg';
import MyPic from './MyPic.jpg';
import SocialMediaIcons from '../components/SocialMedia/SocialMediaIcons';

const Bio = () => {
  return (
    <>
      <div
        className='bg-scroll h-fit'
        style={{
          alignSelf: 'center',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          alignContent: 'center',
          height: '80vh',
        }}
      >
        {/* <div
          style={{
            position: 'fixed',
            height: '100vh',
            width: '100vw',
            overflow: 'hidden',
            zIndex: '-1',
          }}
        >
          <Image
            alt='Mountains'
            src={bg}
            placeholder='blur'
            quality={100}
            fill
            sizes='100vw'
            style={{
              objectFit: 'cover',
            }}
          />
        </div> */}
        <div
          style={{
            alignSelf: 'center',
            fontSize: '3rem',
            fontFamily: 'serif',
            fontWeight: 'bold',
          }}
        >
          <p>Hello, I am</p>

          <p
            style={{
              color: '#0a046e',
            }}
          >
            Md Ghazanfar Alam
          </p>
          <p
            style={{
              color: '#0a046e',
            }}
          >
            Software Engineer
          </p>
        </div>

        <div className='flex justify-center items-center '>
          <Image
            alt='My Photo'
            src={MyPic}
            className='rounded-full w-60 h-60'
          />
        </div>
      </div>
      <div className='flex flex-col items-center justify-center pb-10 '>
        <SocialMediaIcons />
      </div>
    </>
  );
};

export default Bio;
