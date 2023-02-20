import RedditIcon from '@mui/icons-material/Reddit';
import Footer from './components/Footer';
import MemeView from './components/MemeView';

function App() {
  return (
    <>
      <div className='flex justify-center align-middle p-2'>
        <h1 className='text-3xl flex justify-center align-middle m-2'>
          <RedditIcon
            style={{ width: '40px', height: '40px', color: '#FF4500' }}
            className='mr-2'
          />
          Reddit Memes
        </h1>
      </div>
      <div className='flex justify-center'>
        <MemeView />
      </div>
      <div className='flex justify-center'>
        <Footer />
      </div>
    </>
  );
}

export default App;
