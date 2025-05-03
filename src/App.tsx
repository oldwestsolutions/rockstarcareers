import React, { useState } from 'react';
import ApplicationModal from './components/ApplicationModal';
import './App.css';
import LoginModal from './components/LoginModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleSubmit = () => {
    console.log('Application submitted');
    handleCloseModal();
  };

  const handleLogin = (email: string, password: string) => {
    // TODO: Implement actual login logic
    console.log('Login attempt with:', email, password);
    setIsLoginModalOpen(false);
  };

  return (
    <div className="app">
      <nav>
        <div className="container">
          <div className="nav-content">
            <div className="nav-left">
              <h1 className="logo">RockstarCareers</h1>
              <p className="logo-subtitle">Chronicles of Professional Destiny</p>
            </div>
            <div className="nav-center">
              <div className="search-bar">
                <input type="text" placeholder="Search for jobs, skills, or companies..." />
                <button><i className="fas fa-search"></i></button>
              </div>
            </div>
            <div className="nav-right">
              <button className="login-button" onClick={() => setIsLoginModalOpen(true)}>
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      <main className="container">
        <section className="featured-jobs">
          <h2 className="section-title">Industry Chronicles</h2>
          <p className="section-description">Explore opportunities across diverse realms of expertise</p>
          
          <div className="industry-section">
            <h3 className="industry-title">Technology & Innovation</h3>
            <div className="job-grid horizontal">
              <div className="job-card">
                <div className="job-bookmark"><i className="fas fa-bookmark"></i></div>
                <div className="job-card-header">
                  <div className="company-logo">TS</div>
                  <div>
                    <h3 className="job-title">Tech Skills Bootcamp <span className="new-badge">New</span></h3>
                    <p className="company-name">Tech Solutions Inc.</p>
                  </div>
                </div>
                <div className="job-card-body">
                  <div className="job-meta">
                    <div><i className="fas fa-map-marker-alt"></i> Online & In-Person</div>
                    <div><i className="fas fa-dollar-sign"></i> <span className="job-salary">$2,500 - $5,000</span></div>
                    <div><i className="fas fa-clock"></i> 12 Weeks</div>
                  </div>
                  <div className="job-description">
                    Comprehensive training in modern web development, cloud computing, and data analysis. Includes job placement assistance and industry certifications.
                  </div>
                  <div className="job-tags">
                    <span className="job-tag">Web Development</span>
                    <span className="job-tag">Cloud Computing</span>
                    <span className="job-tag">Data Analysis</span>
                  </div>
                  <button className="btn" onClick={handleOpenModal}>Enroll Now</button>
                </div>
              </div>

              <div className="job-card">
                <div className="job-bookmark"><i className="fas fa-bookmark"></i></div>
                <div className="job-card-header">
                  <div className="company-logo">AI</div>
                  <div>
                    <h3 className="job-title">AI & Machine Learning Fundamentals <span className="new-badge">Trending</span></h3>
                    <p className="company-name">AI Institute</p>
                  </div>
                </div>
                <div className="job-card-body">
                  <div className="job-meta">
                    <div><i className="fas fa-map-marker-alt"></i> Online</div>
                    <div><i className="fas fa-dollar-sign"></i> <span className="job-salary">$3,500 - $6,000</span></div>
                    <div><i className="fas fa-clock"></i> 16 Weeks</div>
                  </div>
                  <div className="job-description">
                    Dive into artificial intelligence and machine learning with practical applications. Learn Python, TensorFlow, and neural networks through hands-on projects.
                  </div>
                  <div className="job-tags">
                    <span className="job-tag">Python</span>
                    <span className="job-tag">Machine Learning</span>
                    <span className="job-tag">Neural Networks</span>
                  </div>
                  <button className="btn" onClick={handleOpenModal}>Enroll Now</button>
                </div>
              </div>
            </div>
          </div>

          <div className="industry-section">
            <h3 className="industry-title">Finance & Business</h3>
            <div className="job-grid horizontal">
              <div className="job-card">
                <div className="job-bookmark"><i className="fas fa-bookmark"></i></div>
                <div className="job-card-header">
                  <div className="company-logo">PM</div>
                  <div>
                    <h3 className="job-title">Project Management Professional <span className="new-badge">Certified</span></h3>
                    <p className="company-name">Project Masters</p>
                  </div>
                </div>
                <div className="job-card-body">
                  <div className="job-meta">
                    <div><i className="fas fa-map-marker-alt"></i> Hybrid</div>
                    <div><i className="fas fa-dollar-sign"></i> <span className="job-salary">$3,000 - $4,500</span></div>
                    <div><i className="fas fa-clock"></i> 10 Weeks</div>
                  </div>
                  <div className="job-description">
                    Prepare for PMP certification with expert-led training in project management methodologies, risk management, and team leadership. Includes exam preparation.
                  </div>
                  <div className="job-tags">
                    <span className="job-tag">PMP</span>
                    <span className="job-tag">Agile</span>
                    <span className="job-tag">Leadership</span>
                  </div>
                  <button className="btn" onClick={handleOpenModal}>Enroll Now</button>
                </div>
              </div>

              <div className="job-card">
                <div className="job-bookmark"><i className="fas fa-bookmark"></i></div>
                <div className="job-card-header">
                  <div className="company-logo">DM</div>
                  <div>
                    <h3 className="job-title">Digital Marketing Mastery <span className="new-badge">Popular</span></h3>
                    <p className="company-name">Digital Masters Academy</p>
                  </div>
                </div>
                <div className="job-card-body">
                  <div className="job-meta">
                    <div><i className="fas fa-map-marker-alt"></i> Online</div>
                    <div><i className="fas fa-dollar-sign"></i> <span className="job-salary">$1,800 - $3,200</span></div>
                    <div><i className="fas fa-clock"></i> 8 Weeks</div>
                  </div>
                  <div className="job-description">
                    Master the art of digital marketing with hands-on training in SEO, social media marketing, content strategy, and analytics. Includes real-world project experience.
                  </div>
                  <div className="job-tags">
                    <span className="job-tag">SEO</span>
                    <span className="job-tag">Social Media</span>
                    <span className="job-tag">Analytics</span>
                  </div>
                  <button className="btn" onClick={handleOpenModal}>Enroll Now</button>
                </div>
              </div>
            </div>
          </div>

          <div className="industry-section">
            <h3 className="industry-title">Creative Arts & Design</h3>
            <div className="job-grid horizontal">
              <div className="job-card">
                <div className="job-bookmark"><i className="fas fa-bookmark"></i></div>
                <div className="job-card-header">
                  <div className="company-logo">AD</div>
                  <div>
                    <h3 className="job-title">Advanced Digital Design <span className="new-badge">New</span></h3>
                    <p className="company-name">Artistic Design Studio</p>
                  </div>
                </div>
                <div className="job-card-body">
                  <div className="job-meta">
                    <div><i className="fas fa-map-marker-alt"></i> Hybrid</div>
                    <div><i className="fas fa-dollar-sign"></i> <span className="job-salary">$2,800 - $4,200</span></div>
                    <div><i className="fas fa-clock"></i> 12 Weeks</div>
                  </div>
                  <div className="job-description">
                    Master advanced digital design techniques, including UI/UX, motion graphics, and 3D modeling. Work on real client projects and build a professional portfolio.
                  </div>
                  <div className="job-tags">
                    <span className="job-tag">UI/UX</span>
                    <span className="job-tag">Motion Graphics</span>
                    <span className="job-tag">3D Modeling</span>
                  </div>
                  <button className="btn" onClick={handleOpenModal}>Enroll Now</button>
                </div>
              </div>

              <div className="job-card">
                <div className="job-bookmark"><i className="fas fa-bookmark"></i></div>
                <div className="job-card-header">
                  <div className="company-logo">CD</div>
                  <div>
                    <h3 className="job-title">Creative Direction Masterclass <span className="new-badge">Elite</span></h3>
                    <p className="company-name">Creative Directors Guild</p>
                  </div>
                </div>
                <div className="job-card-body">
                  <div className="job-meta">
                    <div><i className="fas fa-map-marker-alt"></i> In-Person</div>
                    <div><i className="fas fa-dollar-sign"></i> <span className="job-salary">$4,500 - $6,500</span></div>
                    <div><i className="fas fa-clock"></i> 16 Weeks</div>
                  </div>
                  <div className="job-description">
                    Learn the art of creative direction from industry leaders. Develop skills in visual storytelling, brand strategy, and team leadership in creative environments.
                  </div>
                  <div className="job-tags">
                    <span className="job-tag">Visual Storytelling</span>
                    <span className="job-tag">Brand Strategy</span>
                    <span className="job-tag">Team Leadership</span>
                  </div>
                  <button className="btn" onClick={handleOpenModal}>Enroll Now</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="categories">
          <h2 className="section-title">Resume Building Resources</h2>
          <p className="section-description">Master the art of crafting a compelling resume that stands out</p>
          
          <div className="category-grid">
            <div className="category-card">
              <div className="category-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
                </svg>
              </div>
              <h3 className="category-title">Resume Templates</h3>
              <p className="category-count">50+ Templates</p>
            </div>
            <div className="category-card">
              <div className="category-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <h3 className="category-title">ATS Optimization</h3>
              <p className="category-count">Expert Tips</p>
            </div>
            <div className="category-card">
              <div className="category-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h3 className="category-title">Industry-Specific</h3>
              <p className="category-count">15 Industries</p>
            </div>
            <div className="category-card">
              <div className="category-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
              </div>
              <h3 className="category-title">Skills Showcase</h3>
              <p className="category-count">100+ Examples</p>
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

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLogin={handleLogin}
      />
    </div>
  );
};

export default App; 