import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AgencyInfo from './components/AgencyInfo';
import DestinationGallery from './components/DestinationGallery';
import RecommendationQuiz from './components/RecommendationQuiz';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="min-h-screen bg-bg-dark text-white selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <AgencyInfo />
        <DestinationGallery />
        <RecommendationQuiz />
        <BookingForm />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
