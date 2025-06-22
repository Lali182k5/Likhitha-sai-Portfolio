'use client';

export const dynamic = 'force-dynamic';

import Home from '../components/Home';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Achievements from '../components/Achievements';
import Contact from '../components/Contact';
import Resume from '../components/Resume';

export default function Page() {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <Resume />
    </>
  );
}
