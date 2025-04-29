import React, { useState } from 'react';
import ApplicationModal from './components/ApplicationModal';
import './App.css';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleSubmit = () => {
    console.log('Application submitted');
    handleCloseModal();
  };

  return (
    <div className="app">
      <header>
        <div className="header-content">
          <h1 className="logo">RockstarCareers</h1>
          <p className="logo-subtitle">Chronicles of Professional Destiny</p>
        </div>
      </header>
      
      <nav>
        <div className="container">
          <ul className="nav-list">
            <li><a href="#">Home</a></li>
            <li><a href="#">Find Jobs</a></li>
            <li><a href="#">Companies</a></li>
            <li><a href="#">Career Resources</a></li>
            <li><a href="#">For Employers</a></li>
            <li><a href="#">Sign In</a></li>
          </ul>
        </div>
      </nav>
      
      <section className="hero">
        <div className="hero-content">
          <h2>Discover Your Next Career Opportunity</h2>
          <p>Unveil positions worthy of your talents within the shadows of the industry.</p>
          <div className="search-bar">
            <input type="text" placeholder="Position title, skills, location..." />
            <button>Search</button>
          </div>
          <div className="trending-searches">
            Whispered inquiries: <span>Nocturnalist</span> • <span>Arcane Affairs</span> • <span>Shadow Curator</span> • <span>Ethereal Design</span>
          </div>
        </div>
      </section>
      
      <main className="container">
        <section className="featured-jobs">
          <h2 className="section-title">The Chronicle of Vacancies</h2>
          <p className="section-description">Positions of distinction for the discerning professional</p>
          
          <div className="job-grid">
            <div className="job-card">
              <div className="job-bookmark">☆</div>
              <div className="job-card-header">
                <div className="company-logo">NV</div>
                <div>
                  <h3 className="job-title">Senior Audio Engineer <span className="new-badge">New</span></h3>
                  <p className="company-name">Nocturne Studios</p>
                </div>
              </div>
              <div className="job-card-body">
                <div className="job-meta">
                  <div>📍 Los Angeles, CA</div>
                  <div>💰 <span className="job-salary">$95K - $120K</span></div>
                  <div>⏰ Full-time</div>
                </div>
                <div className="job-description">
                  Oversee recording sessions and audio production for high-profile artists. Expertise in analog and digital recording techniques required with attention to sonic detail.
                </div>
                <div className="job-tags">
                  <span className="job-tag">Pro Tools</span>
                  <span className="job-tag">Mixing</span>
                  <span className="job-tag">Mastering</span>
                </div>
                <button className="btn" onClick={handleOpenModal}>Apply Now</button>
              </div>
            </div>
          </div>
        </section>

        <section className="categories">
          <h2 className="section-title">Realms of Opportunity</h2>
          <p className="section-description">Explore the diverse domains where your talents may find their true calling</p>
          
          <div className="category-grid">
            <div className="category-card">
              <div className="category-icon">🎵</div>
              <h3 className="category-title">Music Production</h3>
              <p className="category-count">42 Open Positions</p>
            </div>
            <div className="category-card">
              <div className="category-icon">🎭</div>
              <h3 className="category-title">Performing Arts</h3>
              <p className="category-count">28 Open Positions</p>
            </div>
            <div className="category-card">
              <div className="category-icon">🎨</div>
              <h3 className="category-title">Visual Arts</h3>
              <p className="category-count">35 Open Positions</p>
            </div>
            <div className="category-card">
              <div className="category-icon">📱</div>
              <h3 className="category-title">Digital Media</h3>
              <p className="category-count">56 Open Positions</p>
            </div>
          </div>
        </section>

        <section className="testimonials">
          <h2 className="section-title">Voices of the Industry</h2>
          <p className="section-description">Hear from those who have found their path through our platform</p>
          
          <div className="testimonial-container">
            <div className="testimonial">
              <p className="testimonial-text">
                Through RockstarCareers, I discovered a position that perfectly aligned with my artistic vision. The platform's curated approach led me to opportunities I wouldn't have found elsewhere.
              </p>
              <div className="testimonial-author">
                <p className="author-name">Eleanor Blackwood</p>
                <p className="author-job">Creative Director, Midnight Studios</p>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-section">
          <h2 className="section-title">By the Numbers</h2>
          <p className="section-description">Our impact in the creative industry</p>
          
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">10,000+</div>
              <div className="stat-label">Successful Placements</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">500+</div>
              <div className="stat-label">Partner Companies</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">95%</div>
              <div className="stat-label">Satisfaction Rate</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2 className="cta-title">Begin Your Journey</h2>
          <p className="cta-text">
            Join our community of creative professionals and discover opportunities that resonate with your artistic vision. Let us guide you to your next career milestone.
          </p>
          <div className="button-group">
            <button className="btn">Create Profile</button>
            <button className="btn btn-outline">Learn More</button>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3 className="footer-logo">RockstarCareers</h3>
              <p className="footer-description">
                A premier platform connecting creative professionals with distinguished opportunities in the arts and entertainment industry.
              </p>
              <div className="social-icons">
                <a href="#" className="social-icon">f</a>
                <a href="#" className="social-icon">t</a>
                <a href="#" className="social-icon">in</a>
              </div>
            </div>
            <div className="footer-section">
              <h3 className="footer-heading">For Candidates</h3>
              <ul className="footer-links">
                <li><a href="#">Browse Jobs</a></li>
                <li><a href="#">Career Resources</a></li>
                <li><a href="#">Salary Calculator</a></li>
                <li><a href="#">Resume Builder</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3 className="footer-heading">For Employers</h3>
              <ul className="footer-links">
                <li><a href="#">Post a Job</a></li>
                <li><a href="#">Browse Candidates</a></li>
                <li><a href="#">Recruitment Tools</a></li>
                <li><a href="#">Pricing Plans</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3 className="footer-heading">Company</h3>
              <ul className="footer-links">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 RockstarCareers. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <ApplicationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default App; 