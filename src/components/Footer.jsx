import CopyrightIcon from '@mui/icons-material/Copyright';
import GitHubIcon from '@mui/icons-material/GitHub';
import React from 'react';

export default function Footer() {
  return (
    <div className='grid gap-4 gap-x-16 grid-cols-2 text-gray-300'>
      <div className='flex justify-center align-middle'>
        <CopyrightIcon className='mr-2' />
        <a
          href='https://github.com/e4tjn'
          className='flex justify-center align-middle hover:underline'
        >
          2023 e4tjn
        </a>
      </div>
      <a
        className='flex justify-center align-middle hover:underline'
        href='https://github.com/e4tjn/reddit-memes'
      >
        <GitHubIcon className='mr-2' />
        GitHub
      </a>
      <div className='flex justify-center align-middle'>
        <a
          href='https://github.com/D3vd/Meme_Api'
          className='hover:underline'
        >
          Powered by Meme Api
        </a>
      </div>
      <div className='flex justify-center align-middle'>
        <a
          href='https://app.netlify.com/sites/reddit-memes/deploys'
          target='_blank'
        >
          <img
            src='https://api.netlify.com/api/v1/badges/dd75ae1b-a2df-4ad4-85c5-55546a401406/deploy-status'
            alt=''
          />
        </a>
      </div>
    </div>
  );
}
