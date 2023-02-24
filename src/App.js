import { ChakraProvider } from "@chakra-ui/react";
import Header from './components/Header';
import LandingSection from './components/LandingSection';
import ProjectSection from './components/ProjectSection';
import ContactMeSection from './components/ContactMeSection';
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider>
      <main>
        <Header />
        <LandingSection />
        <ProjectSection />
        <ContactMeSection />
        <Footer />
      </main>
    </ChakraProvider>
  );
}

export default App;
