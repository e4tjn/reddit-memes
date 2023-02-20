import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import CategoryIcon from '@mui/icons-material/Category';
import DownloadIcon from '@mui/icons-material/Download';
import RedditIcon from '@mui/icons-material/Reddit';
import React from 'react';

export default function MemeView() {
  const [meme, setMeme] = React.useState({});
  const [authorUrl, setAuthorUrl] = React.useState('');
  const [subredditUrl, setSubredditUrl] = React.useState('');

  async function getMeme() {
    await fetch('https://meme-api.com/gimme')
      .then((response) => response.json())
      .then((data) => setMeme(data))
      .catch((err) => console.log(err));
    setAuthorUrl('https://reddit.com/user/' + meme.author);
    setSubredditUrl('https://reddit.com/r/' + meme.subreddit);
  }

  React.useEffect(() => {
    getMeme();
  }, []);

  return (
    <div className='grid gap-10 grid-cols-1 m-5'>
      <div className='grid grid-cols-2 gap-3 justify-between align-middle'>
        <div
          style={{ backgroundColor: '#FF4500' }}
          className='p-4 text-white rounded-lg shadow-xl hover:scale-105 transition ease-in-out flex justify-center align-middle'
          onClick={getMeme}
        >
          <AutorenewIcon className='mr-2' />
          New Meme
        </div>

        <a
          href={meme.url}
          download={meme.title}
          style={{ backgroundColor: '#FF4500' }}
          className='p-4 text-white rounded-lg shadow-xl hover:scale-105 transition ease-in-out flex justify-center align-middle'
        >
          <DownloadIcon className='mr-2' />
          Save Meme
        </a>
      </div>
      <div className='max-w-md rounded-lg overflow-hidden shadow-xl p-5 dark:bg-slate-400'>
        <img
          src={meme.url}
          alt={meme.title}
          className='w-full object-cover rounded-lg shadow-xl'
        />
        <div
          style={{ backgroundColor: '#FF4500' }}
          className='p-6 text-white rounded-lg mt-10 shadow-xl'
        >
          <h2 className='text-xl font-bold'>{meme.title}</h2>
          <a
            className='flex mt-2'
            href={authorUrl}
            target='_blank'
          >
            <AccountCircleIcon />
            <p className='text-white ml-2'>{meme.author}</p>
          </a>

          <a
            className='flex mt-2'
            href={subredditUrl}
            target='_blank'
          >
            <CategoryIcon />
            <p className='text-white ml-2'>{meme.subreddit}</p>
          </a>

          <a
            className='flex mt-2'
            href={meme.postLink}
            target='_blank'
          >
            <RedditIcon />
            <p className='text-white ml-2'>{meme.postLink}</p>
          </a>
        </div>
      </div>
    </div>
  );
}
