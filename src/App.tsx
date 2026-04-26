import TopBar from './sections/TopBar';
import Intro from './sections/Intro';
import About from './sections/About';
import Work from './sections/Work';
import Projects from './sections/Projects';
import Notes from './sections/Notes';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  return (
    <>
      <TopBar />
      <main id="main">
        <Intro />
        <Divider />
        <About />
        <Divider />
        <Work />
        <Divider />
        <Projects />
        <Divider />
        <Notes />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function Divider() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 md:px-12">
      <div className="hairline" />
    </div>
  );
}
