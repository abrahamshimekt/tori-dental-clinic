import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Reviews from "@/components/Reviews";
import DoctorHighlight from "@/components/DoctorHighlight";
import Gallery from "@/components/Gallery";
import AppointmentForm from "@/components/AppointmentForm";
import LocationContact from "@/components/LocationContact";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Reviews />
      <DoctorHighlight />
      <Gallery />
      <AppointmentForm />
      <LocationContact />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
