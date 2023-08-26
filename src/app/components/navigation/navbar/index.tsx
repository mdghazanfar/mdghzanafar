import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import './index.css';

const Navbar = ({ toggle }: { toggle: () => void }) => {
  return (
    <>
      <div className='w-full h-20  sticky top-0'>
        <div
          className=' h-20 items-center'
          style={{
            alignSelf: 'center',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            backgroundColor: '#fff',
          }}
        >
          <div className=' text-lg'>
            <Logo />
          </div>
          <div>
            <ul
              className='hidden content-center md:flex text-lg gap-x-10'
              style={{ color: '#333' }}
            >
              <li>
                <Link
                  href=''
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div>
                    <i className='fa fa-envelope text-blue-500'></i>
                    <span className='ml-2'>Email</span>
                  </div>
                  <p>ghazanfaralam642786@gmail.com</p>
                </Link>
              </li>
              <li>
                <Link
                  href='https://dev.to/mdghazanfar'
                  style={{ display: 'flex', flexDirection: 'column' }}
                >
                  <div>
                    <i className='fa fa-rss text-orange-500'></i>
                    <span className='ml-2'>See Blogs at</span>
                  </div>
                  <p> https://dev.to/mdghazanfar</p>
                </Link>
              </li>
              <li>
                <Link
                  href='/'
                  style={{ display: 'flex', flexDirection: 'column' }}
                >
                  <div>
                    <i className='fa fa-map-marker text-green-500'></i>
                    <span className='ml-2'>Location</span>
                  </div>
                  <p>Newtown,kolkata</p>
                </Link>
              </li>
            </ul>
          </div>

          {/* <div className='flex items-center space-x-4'>
            <div>
              <i className='fa fa-envelope text-blue-500'></i>
              <span className='ml-2'>youremail@example.com</span>
            </div>
            <div>
              <i className='fa fa-map-marker text-green-500'></i>
              <span className='ml-2'>Location</span>
            </div>
            <div>
              <i className='fa fa-rss text-orange-500'></i>
              <a
                href='https://yourblogurl.com'
                target='_blank'
                rel='noopener noreferrer'
                className='ml-2 text-blue-500 hover:text-blue-700'
              >
                Blog
              </a>
            </div>
          </div> */}
        </div>
        <div className=' mx-auto h-full '>
          <div
            className='flex  items-center h-full'
            style={{
              justifyContent: 'center',
              backgroundColor: '#fff',
            }}
          >
            <button
              type='button'
              className='inline-flex items-center md:hidden '
              onClick={toggle}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='40'
                height='40'
                viewBox='0 0 24 24'
              >
                <path
                  fill='#fff'
                  d='M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z'
                />
              </svg>
            </button>

            <ul className='hidden content-center md:flex gap-x-16 text-base text-black font-bold '>
              <li>
                <Link href='/'>
                  <p>About Us</p>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <p>Services</p>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <p>Contacts</p>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <p>Contacts</p>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <p>Contacts</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
