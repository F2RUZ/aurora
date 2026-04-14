// app/page.tsx
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Cases from '@/components/Cases/Cases';
import Services from '@/components/Services/Services';
import About from '@/components/About/About';
import Team from '@/components/Team/Team';
import { ModalProvider } from '@/components/Modal/ModalContext';
import Modal from '@/components/Modal/Modal';

export default function Home() {
  return (
    <ModalProvider>
      {/* padding-top = высота хедера (80px) чтобы fixed header не перекрывал Hero */}
      <main style={{ paddingTop: '80px' }}>
        <Header />

        <section id="hero">
          <Hero />
        </section>

        <section id="cases">
          <Cases />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="team">
          <Team />
        </section>

        <About />

        <Modal />
      </main>
    </ModalProvider>
  );
}