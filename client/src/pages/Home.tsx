import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import TrendingProducts from '../components/TrendingProducts';
import NewCollection from '../components/NewCollection';
import BestSeller from '../components/BestSeller';
import ProductDetail from '../components/ProductDetail';
import WhyChooseUs from '../components/WhyChooseUs';
import BlogPosts from '../components/BlogPosts';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  useEffect(() => {
    // Add font-awesome CDN
    const fontAwesomeLink = document.createElement('link');
    fontAwesomeLink.rel = 'stylesheet';
    fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(fontAwesomeLink);

    // Add page title
    document.title = 'Shoees - Premium Sneaker Collection';

    return () => {
      // Clean up
      document.head.removeChild(fontAwesomeLink);
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrendingProducts />
        <NewCollection />
        <BestSeller />
        <ProductDetail />
        <WhyChooseUs />
        <BlogPosts />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
};

export default Home;
