import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './VideoPortfolio.css';

const videos = [
  { title: "Cinematic Edit", src: "/videos/kg.mp4" },
  { title: "Reels Edit", src: "/videos/NANI.mp4" },
  { title: "Color Grading", src: "/videos/RUKK.mp4" },
  { title: "Mass Edit", src: "/videos/MB.mp4" },
  { title: "3D Edit", src: "/videos/3d.mp4" }
];

const VideoPortfolio = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="video-page-container">
      
      {/* 🚀 Advanced Cinematic Background Engine (Updated) */}
      <div className="video-bg-prime">
        
        {/* Layer 1: Parallax Video Loop (Recommended over static image) */}
        <div className="bg-video-layer">
          <video src="/videos/ambient-loop.mp4" autoPlay loop muted />
        </div>

        {/* Layer 2: Shifting Pulsing Radial Gradient (Replaces old static overlay) */}
        <div className="bg-shifting-gradient"></div>
        
        {/* Layer 3: Dynamic Floating Elements (Bokeh & Sparkles) */}
        <div className="floating-elements-field">
          {[...Array(5)].map((_, i) => (
            <div key={`bokeh-${i}`} className="bokeh-orb"></div>
          ))}
          {[...Array(10)].map((_, i) => (
            <div key={`sparkle-${i}`} className="sparkle"></div>
          ))}
        </div>

        {/* Layer 4: Deep Kinetic Squares */}
        <div className="square-field">
          <div className="animated-square"></div>
          <div className="animated-square"></div>
        </div>
      </div>

      {/* 🔥 Background Branding */}
      <motion.div 
        className="background-brand"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 2 }}
      >
        LOKESH EDITS
      </motion.div>

      {/* 🎬 Kinetic Logo */}
      <motion.div 
        className="floating-logo"
        animate={{ 
          y: [0, -15, 0], 
          rotate: [0, 5, -5, 0],
          scale: [1, 1.1, 1] 
        }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      >
        🎬
      </motion.div>

      {/* 🎯 Hero Section */}
      <div className="hero-video-section">
        <motion.h1
          className="main-title"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          VIDEO <span>PORTFOLIO</span>
        </motion.h1>

        <motion.p
          className="portfolio-desc"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Crafting cinematic visuals, reels, and motion stories using DaVinci Resolve. 
          Focused on storytelling, color grading, and high-impact edits.
        </motion.p>
      </div>

      {/* 🎥 Video 3D Grid (Updated Structure) */}
      <div className="video-3d-grid">
        {videos.map((video, index) => (
          <motion.div
            key={index}
            className="thumbnail-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotateY: 8, translateZ: 30 }}
            onClick={() => setSelectedVideo(video)}
          >
            <div className="card-glare"></div> {/* Micro-interaction layer */}
            <div className="neon-border-draw"></div> {/* Self-drawing border */}
            
            <div className="thumb-wrapper">
              <video 
                src={video.src} 
                muted 
                loop 
                onMouseOver={e => e.target.play()} 
                onMouseOut={e => (e.target.pause(), e.target.currentTime = 0)} 
              />
              <div className="play-overlay">
                <span>VIEW WORK</span>
              </div>
            </div>
            <h4>{video.title}</h4>
          </motion.div>
        ))}
      </div>
      

      {/* 🎬 MODAL (Deep Theater Mode) */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div 
            className="video-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="modal-backdrop" onClick={() => setSelectedVideo(null)}></div>
            
            <motion.div 
              className="big-screen-container"
              initial={{ scale: 0.7, y: 100, opacity: 0, rotateX: 10 }}
              animate={{ scale: 1, y: 0, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.7, y: 100, opacity: 0, rotateX: -10 }}
              transition={{ type: "spring", damping: 20, stiffness: 200 }}
            >
              <button className="close-btn" onClick={() => setSelectedVideo(null)}>×</button>
              
              <div className="video-frame-3d">
                <video src={selectedVideo.src} controls autoPlay className="main-video-player" />
                <div className="video-reflection"></div>
              </div>

              <div className="video-details">
                <h2>{selectedVideo.title}</h2>
                <div className="neon-divider"></div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VideoPortfolio;