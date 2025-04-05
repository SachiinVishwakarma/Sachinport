import React, { Suspense, useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, CssBaseline, Box, CircularProgress, Typography } from "@mui/material";
import theme from "./theme/theme";
import Footer from './components/Footer';  // Import your Footer component
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutSection  from"./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from"./components/ContactSection";

const App = () => {


  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="relative z-0 bg-primary">
          <Suspense
            fallback={
              <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <CircularProgress color="primary" size={60} thickness={4} />
                <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
                  Loading...
                </Typography>
              </Box>
            }
          >
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
              <Navbar />
              <Home />
            </div>
            <AboutSection />
            <ProjectsSection />
            <div>
              <ContactSection />
            </div>
          </Suspense>
          <Footer />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
