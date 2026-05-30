"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TeamCardFive from '@/components/sections/team/TeamCardFive';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import TextAbout from '@/components/sections/about/TextAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="largeSmall"
        background="grid"
        cardStyle="inset"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "home",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Menu",
          id: "menu",
        },
        {
          name: "Team",
          id: "team",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "FAQs",
          id: "faq",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      logoSrc="http://img.b2bpic.net/free-photo/top-view-black-plates-composition-with-copy-space_23-2148633541.jpg"
      logoAlt="La Fourche Logo"
      brandName="La Fourche"
      button={{
        text: "Reservations",
        href: "#contact",
      }}
      animateOnLoad={true}
    />
  </div>

  <div id="home" data-section="home">
      <HeroLogo
      logoText="La Fourche"
      description="Experience Parisian Elegance with Exquisite Cuisine and Fine Wines. A culinary journey awaits."
      buttons={[
        {
          text: "Discover Menu",
          href: "#menu",
        },
        {
          text: "Make a Reservation",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/view-street-lights-london-city_23-2149437467.jpg"
      imageAlt="Elegant interior of Bar Restaurant La Fourche"
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={true}
      tag="Our Story"
      title="A Culinary Journey Rooted in Tradition"
      buttons={[
        {
          text: "Learn More",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSix
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Exquisite Ambiance",
          description: "Dine in an atmosphere of refined elegance, perfect for intimate dinners or lively gatherings. Our decor blends classic Parisian charm with modern comfort.",
          imageSrc: "http://img.b2bpic.net/free-photo/gold-candlestick-standing-festive-table-home-new-year-eve-concept_132075-11280.jpg",
          imageAlt: "Elegant restaurant ambiance",
        },
        {
          title: "Masterful Cuisine",
          description: "Our culinary team, led by Chef Antoine Dubois, crafts each dish with passion and precision, using only the finest ingredients sourced from local markets and trusted suppliers.",
          imageSrc: "http://img.b2bpic.net/free-photo/professional-chef-modern-kitchen-carefully-sprinkles-fresh-herbs_482257-127710.jpg",
          imageAlt: "Chef preparing a dish",
        },
        {
          title: "Seasonal Delights",
          description: "Our menu evolves with the seasons, ensuring that every visit offers new and exciting flavors. We celebrate the best produce nature has to offer.",
          imageSrc: "http://img.b2bpic.net/free-photo/modern-helathy-ingredients-composition_23-2147859410.jpg",
          imageAlt: "Fresh ingredients on a cutting board",
        },
      ]}
      title="The La Fourche Experience"
      description="Where every detail contributes to an unforgettable dining journey."
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "m1",
          name: "Steak Frites",
          price: "€32",
          imageSrc: "http://img.b2bpic.net/free-photo/fried-meatball-with-topped-with-white-cheese-with-herbs_141793-1185.jpg",
          imageAlt: "Classic Steak Frites",
        },
        {
          id: "m2",
          name: "Seafood Linguine",
          price: "€28",
          imageSrc: "http://img.b2bpic.net/free-photo/ai-generated-pasta-food_23-2150664652.jpg",
          imageAlt: "Seafood Linguine",
        },
        {
          id: "m3",
          name: "Chocolate Lava Cake",
          price: "€12",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-delicious-chocolate-cake_23-2148549961.jpg",
          imageAlt: "Chocolate Lava Cake",
        },
        {
          id: "m4",
          name: "Bordeaux Red Blend",
          price: "€45",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-with-glass-wine_23-2148406379.jpg",
          imageAlt: "Bordeaux Red Blend",
        },
        {
          id: "m5",
          name: "Signature Cocktail",
          price: "€15",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-bartender-creating-delicious-drink_23-2149125745.jpg",
          imageAlt: "Signature Cocktail",
        },
        {
          id: "m6",
          name: "Artisanal Coffee",
          price: "€6",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-coffee-cup-rose-valentines-day_23-2148389553.jpg",
          imageAlt: "Artisanal Coffee",
        },
      ]}
      title="Our Signature Creations"
      description="Explore a curated selection of culinary delights and fine beverages, crafted to perfection."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      team={[
        {
          id: "t1",
          name: "Antoine Dubois",
          role: "Head Chef",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-man-showing-thumb-up-sign_23-2147863554.jpg",
          imageAlt: "Portrait of Chef Antoine Dubois",
        },
        {
          id: "t2",
          name: "Sophie Martin",
          role: "Restaurant Manager",
          imageSrc: "http://img.b2bpic.net/free-photo/young-happy-waiter-using-digital-tablet-while-talking-couple-taking-their-order-cafe_637285-540.jpg",
          imageAlt: "Portrait of Restaurant Manager Sophie Martin",
        },
        {
          id: "t3",
          name: "Pierre Lefevre",
          role: "Head Sommelier",
          imageSrc: "http://img.b2bpic.net/free-photo/mid-adult-businessman-toasting-with-glass-wine-while-having-video-call-laptop-office_637285-9573.jpg",
          imageAlt: "Portrait of Sommelier Pierre Lefevre",
        },
      ]}
      title="Meet Our Talented Team"
      description="Crafting an exceptional dining experience, one dish and one interaction at a time."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={true}
      testimonial="A truly unforgettable dining experience! The ambiance, the service, and especially the food were beyond exquisite. La Fourche has become our new favorite spot in the city."
      rating={5}
      author="Our Valued Guests"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/happy-girl-taking-photo-her-salad-indoor-portrait-smiling-brunette-woman-having-fun-dinner_197531-17193.jpg",
          alt: "Sarah Johnson",
        },
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-man-luxury-restaurant_23-2150598415.jpg",
          alt: "Michael Chen",
        },
        {
          src: "http://img.b2bpic.net/free-photo/vertical-shot-pretty-female-with-pink-silk-dress-sitting-outdoor-cafe_181624-30906.jpg",
          alt: "Emily Rodriguez",
        },
        {
          src: "http://img.b2bpic.net/free-photo/elegant-man-wearing-suit_23-2148831134.jpg",
          alt: "David Kim",
        },
        {
          src: "http://img.b2bpic.net/free-photo/cheerful-asian-female-entrepreneur-sitting-table-cafe_1262-17235.jpg",
          alt: "Olivia White",
        },
      ]}
      ratingAnimation="reveal-blur"
      avatarsAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "Do I need a reservation?",
          content: "We highly recommend making a reservation, especially for dinner and weekend evenings, to ensure you get a table. Walk-ins are welcome, but subject to availability.",
        },
        {
          id: "q2",
          title: "What are your opening hours?",
          content: "La Fourche is open Tuesday to Sunday. Lunch: 12 PM - 2:30 PM, Dinner: 6 PM - 10:30 PM. The bar operates until midnight on weekends. We are closed on Mondays.",
        },
        {
          id: "q3",
          title: "Do you accommodate dietary restrictions?",
          content: "Yes, our kitchen is happy to accommodate most dietary restrictions and allergies. Please inform our staff when making your reservation or upon arrival, and our chef will guide you through the menu.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Find answers to common questions about your visit, reservations, and our services."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "radial-gradient",
      }}
      tag="Contact Us"
      title="Plan Your Visit"
      description="We look forward to welcoming you to Bar Restaurant La Fourche. Make a reservation, inquire about private events, or simply get in touch with any questions."
      buttons={[
        {
          text: "Make a Reservation",
          href: "#",
        },
        {
          text: "View Location",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Menu",
          items: [
            {
              label: "Starters",
              href: "#menu",
            },
            {
              label: "Main Courses",
              href: "#menu",
            },
            {
              label: "Desserts",
              href: "#menu",
            },
            {
              label: "Drinks",
              href: "#menu",
            },
          ],
        },
        {
          title: "About Us",
          items: [
            {
              label: "Our Story",
              href: "#about",
            },
            {
              label: "Our Team",
              href: "#team",
            },
            {
              label: "Testimonials",
              href: "#testimonials",
            },
          ],
        },
        {
          title: "Contact",
          items: [
            {
              label: "Reservations",
              href: "#contact",
            },
            {
              label: "Location",
              href: "#contact",
            },
            {
              label: "FAQs",
              href: "#faq",
            },
          ],
        },
      ]}
      logoText="La Fourche"
      copyrightText="© 2024 La Fourche. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
