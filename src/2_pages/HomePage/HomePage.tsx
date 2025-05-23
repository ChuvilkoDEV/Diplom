import React from "react";
import HeroSection from './ui/HeroSection'
import PopularActivities from './ui/PopularActivities'
import EventsSection from '@pages/HomePage/ui/EventsSection'
import { Header } from '@widgets/Header'
import { Footer } from '@widgets/Footer'

export const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <PopularActivities/>
      <EventsSection />
      <Footer />
    </>
  );
};
