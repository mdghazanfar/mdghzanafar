import Bio from './Home/page';
import About from './about/page';

export default function Home() {
  return (
    <>
      <div className=' mx-auto px-4 mt-20'>
        <Bio />
        <About />
      </div>
    </>
  );
}
