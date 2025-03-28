import { Route, Switch } from 'wouter';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Resources from './pages/Resources';
import About from './pages/About';
import Contact from './pages/Contact';
import Quiz from './pages/Quiz';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import AdminAuth from './pages/AdminAuth';
import Background from './components/Background';
import CookieBanner from './components/CookieBanner';
import BackToTop from './components/BackToTop';
import AdminDashboard from './components/AdminDashboard';
import SubmitTestimonial from './pages/SubmitTestimonial';
import SubmitSuccess from './pages/SubmitSuccess';

export default function App() {
  return (
    <div className="min-h-screen text-white">
      <Background />
      <Navbar />
      <main>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/resources" component={Resources} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/terms-of-service" component={TermsOfService} />
          <Route path="/admin-auth" component={AdminAuth} />
          <Route path="/admin/testimonials" component={AdminDashboard} />
          <Route path="/submit-testimonial" component={SubmitTestimonial} />
          <Route path="/submit-success" component={SubmitSuccess} />
        </Switch>
      </main>
      <CookieBanner />
      <BackToTop />
    </div>
  );
} 