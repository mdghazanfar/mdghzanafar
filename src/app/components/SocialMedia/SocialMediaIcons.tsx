import React from 'react';

const SocialMediaIcons = () => {
  return (
    <div className='flex space-x-4 '>
      <a
        href='https://www.instagram.com/your-instagram-url'
        target='_blank'
        rel='noopener noreferrer'
      >
        <i
          style={{
            backgroundColor: '#0a046e',
            color: '#fff',
          }}
          className='fa fa-instagram text-2xl rounded-full w-10 h-10 flex justify-center items-center'
        ></i>
      </a>
      <a
        href='https://github.com/your-github-username'
        target='_blank'
        rel='noopener noreferrer'
      >
        <i
          style={{
            backgroundColor: '#0a046e',
            color: '#fff',
          }}
          className='fa fa-github text-2xl rounded-full w-10 h-10 flex justify-center items-center'
        ></i>
      </a>
      <a
        href='https://www.facebook.com/your-facebook-url'
        target='_blank'
        rel='noopener noreferrer'
      >
        <i
          style={{
            backgroundColor: '#0a046e',
            color: '#fff',
          }}
          className='fa fa-facebook text-2xl rounded-full w-10 h-10 flex justify-center items-center'
        ></i>
      </a>
      <a
        href='https://www.linkedin.com/in/your-linkedin-url'
        target='_blank'
        rel='noopener noreferrer'
      >
        <i
          style={{
            backgroundColor: '#0a046e',
            color: '#fff',
          }}
          className='fa fa-linkedin text-2xl rounded-full w-10 h-10 flex justify-center items-center'
        ></i>
      </a>
    </div>
  );
};

export default SocialMediaIcons;
