import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import ApplicationModal from './components/ApplicationModal';
import './App.css';
import LoginModal from './components/LoginModal';
import ResumePage from './components/ResumePage';

interface Job {
  id: string;
  title: string;
  company: string;
  companyLogo: string;
  location: string;
  salary: string;
  duration: string;
  description: string;
  tags: string[];
  badge?: string;
  badgeType?: string;
  powerups: {
    name: string;
    description: string;
    icon: string;
  }[];
  specialties: {
    name: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  }[];
}

interface LandingPageProps {
  onLogin: () => void;
  onNavigateToResume: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onLogin, onNavigateToResume }) => {
  return (
    <div className="landing-page">
      <nav className="landing-nav">
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
              <button className="btn btn-outline" onClick={onLogin}>
                Sign In
              </button>
              <button className="btn btn-primary" onClick={onLogin}>
                Create Account
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="landing-main">
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <h1>Your Journey to Professional Excellence Begins Here</h1>
              <p>Discover opportunities that align with your aspirations and unlock your potential</p>
              <div className="hero-buttons">
                <button className="btn btn-primary" onClick={onLogin}>
                  Get Started
                </button>
                <button className="btn btn-outline" onClick={onNavigateToResume}>
                  Create Resume
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="landing-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>RockstarCareers</h3>
              <p>Your partner in professional growth and career development. We connect ambitious professionals with opportunities that match their aspirations.</p>
              <div className="footer-contact">
                <p><i className="fas fa-envelope"></i> support@rockstarcareers.com</p>
                <p><i className="fas fa-phone"></i> +1 (555) 123-4567</p>
                <p><i className="fas fa-map-marker-alt"></i> 123 Career Street, Professional City, PC 12345</p>
              </div>
            </div>
            <div className="footer-section">
              <h4>For Job Seekers</h4>
              <ul>
                <li><a href="#jobs">Browse Jobs</a></li>
                <li><a href="#career-advice">Career Advice</a></li>
                <li><a href="#resume-builder">Resume Builder</a></li>
                <li><a href="#skill-assessment">Skill Assessment</a></li>
                <li><a href="#job-alerts">Job Alerts</a></li>
                <li><a href="#salary-insights">Salary Insights</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>For Employers</h4>
              <ul>
                <li><a href="#post-job">Post a Job</a></li>
                <li><a href="#talent-search">Talent Search</a></li>
                <li><a href="#employer-branding">Employer Branding</a></li>
                <li><a href="#recruitment-tools">Recruitment Tools</a></li>
                <li><a href="#pricing">Pricing Plans</a></li>
                <li><a href="#success-stories">Success Stories</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Resources</h4>
              <ul>
                <li><a href="#blog">Career Blog</a></li>
                <li><a href="#webinars">Webinars</a></li>
                <li><a href="#events">Industry Events</a></li>
                <li><a href="#guides">Career Guides</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#help-center">Help Center</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#press">Press</a></li>
                <li><a href="#partners">Partners</a></li>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms of Service</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Connect With Us</h4>
              <div className="social-links">
                <a href="#" title="LinkedIn"><i className="fab fa-linkedin"></i></a>
                <a href="#" title="Twitter"><i className="fab fa-twitter"></i></a>
                <a href="#" title="Facebook"><i className="fab fa-facebook"></i></a>
                <a href="#" title="Instagram"><i className="fab fa-instagram"></i></a>
                <a href="#" title="YouTube"><i className="fab fa-youtube"></i></a>
                <a href="#" title="GitHub"><i className="fab fa-github"></i></a>
              </div>
              <div className="newsletter-signup">
                <h4>Stay Updated</h4>
                <p>Subscribe to our newsletter for the latest opportunities and career insights</p>
                <div className="newsletter-form">
                  <input type="email" placeholder="Enter your email" />
                  <button className="btn btn-primary">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p>&copy; 2024 RockstarCareers. All rights reserved.</p>
              <div className="footer-bottom-links">
                <a href="#accessibility">Accessibility</a>
                <a href="#sitemap">Sitemap</a>
                <a href="#cookies">Cookie Policy</a>
                <a href="#security">Security</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'resume'>('home');

  const jobs: Job[] = [
    {
      id: '1',
      title: 'Tech Skills Bootcamp',
      company: 'Tech Solutions Inc.',
      companyLogo: 'TS',
      location: 'Online & In-Person',
      salary: '$2,500 - $5,000',
      duration: '12 Weeks',
      description: 'Comprehensive training in modern web development, cloud computing, and data analysis. Includes job placement assistance and industry certifications.',
      tags: ['Web Development', 'Cloud Computing', 'Data Analysis'],
      badge: 'New',
      badgeType: 'new',
      powerups: [
        {
          name: 'Career Acceleration',
          description: 'Fast-track your career with personalized mentorship',
          icon: 'fas fa-rocket'
        },
        {
          name: 'Industry Network',
          description: 'Access to exclusive industry events and networking',
          icon: 'fas fa-network-wired'
        }
      ],
      specialties: [
        { name: 'Frontend Development', level: 'Intermediate' },
        { name: 'Backend Systems', level: 'Beginner' },
        { name: 'Cloud Architecture', level: 'Advanced' }
      ]
    },
    {
      id: '2',
      title: 'AI & Machine Learning Fundamentals',
      company: 'AI Institute',
      companyLogo: 'AI',
      location: 'Online',
      salary: '$3,500 - $6,000',
      duration: '16 Weeks',
      description: 'Dive into artificial intelligence and machine learning with practical applications. Learn Python, TensorFlow, and neural networks through hands-on projects.',
      tags: ['Python', 'Machine Learning', 'Neural Networks'],
      badge: 'Trending',
      badgeType: 'trending',
      powerups: [
        {
          name: 'Research Access',
          description: 'Access to cutting-edge AI research papers and datasets',
          icon: 'fas fa-flask'
        },
        {
          name: 'GPU Resources',
          description: 'Free access to high-performance computing resources',
          icon: 'fas fa-microchip'
        }
      ],
      specialties: [
        { name: 'Deep Learning', level: 'Advanced' },
        { name: 'Computer Vision', level: 'Intermediate' },
        { name: 'NLP', level: 'Expert' }
      ]
    },
    {
      id: '3',
      title: 'Project Management Professional',
      company: 'Project Masters',
      companyLogo: 'PM',
      location: 'Hybrid',
      salary: '$3,000 - $4,500',
      duration: '10 Weeks',
      description: 'Prepare for PMP certification with expert-led training in project management methodologies, risk management, and team leadership. Includes exam preparation.',
      tags: ['PMP', 'Agile', 'Leadership'],
      badge: 'Certified',
      badgeType: 'certified',
      powerups: [
        {
          name: 'Exam Guarantee',
          description: 'Free retake if you don\'t pass the first time',
          icon: 'fas fa-shield-alt'
        },
        {
          name: 'Mentorship Program',
          description: 'One-on-one guidance from certified PMPs',
          icon: 'fas fa-user-graduate'
        }
      ],
      specialties: [
        { name: 'Agile Methodologies', level: 'Expert' },
        { name: 'Risk Management', level: 'Advanced' },
        { name: 'Team Leadership', level: 'Intermediate' }
      ]
    },
    {
      id: '4',
      title: 'Digital Marketing Mastery',
      company: 'Digital Masters Academy',
      companyLogo: 'DM',
      location: 'Online',
      salary: '$1,800 - $3,200',
      duration: '8 Weeks',
      description: 'Master the art of digital marketing with hands-on training in SEO, social media marketing, content strategy, and analytics. Includes real-world project experience.',
      tags: ['SEO', 'Social Media', 'Analytics'],
      badge: 'Popular',
      badgeType: 'popular',
      powerups: [
        {
          name: 'Tool Access',
          description: 'Free access to premium marketing tools',
          icon: 'fas fa-tools'
        },
        {
          name: 'Portfolio Builder',
          description: 'Create a professional portfolio website',
          icon: 'fas fa-briefcase'
        }
      ],
      specialties: [
        { name: 'SEO Optimization', level: 'Advanced' },
        { name: 'Social Media Strategy', level: 'Expert' },
        { name: 'Content Marketing', level: 'Intermediate' }
      ]
    },
    {
      id: '5',
      title: 'Cybersecurity Specialist',
      company: 'SecureNet Solutions',
      companyLogo: 'CS',
      location: 'Online & In-Person',
      salary: '$4,000 - $7,000',
      duration: '14 Weeks',
      description: 'Comprehensive cybersecurity training covering ethical hacking, network security, and threat detection. Includes hands-on labs and certification preparation.',
      tags: ['Security', 'Networking', 'Ethical Hacking'],
      badge: 'Elite',
      badgeType: 'elite',
      powerups: [
        {
          name: 'Lab Environment',
          description: 'Access to virtual hacking labs',
          icon: 'fas fa-laptop-code'
        },
        {
          name: 'Certification Bundle',
          description: 'Multiple security certifications included',
          icon: 'fas fa-certificate'
        }
      ],
      specialties: [
        { name: 'Penetration Testing', level: 'Expert' },
        { name: 'Network Security', level: 'Advanced' },
        { name: 'Incident Response', level: 'Intermediate' }
      ]
    },
    {
      id: '6',
      title: 'Data Science Immersion',
      company: 'DataSphere Academy',
      companyLogo: 'DS',
      location: 'Online',
      salary: '$3,800 - $6,500',
      duration: '16 Weeks',
      description: 'Master data science with Python, R, and advanced statistical analysis. Learn machine learning, data visualization, and big data processing.',
      tags: ['Data Science', 'Python', 'R', 'Statistics'],
      badge: 'Hot',
      badgeType: 'hot',
      powerups: [
        {
          name: 'Cloud Credits',
          description: '$500 in cloud computing credits',
          icon: 'fas fa-cloud'
        },
        {
          name: 'Industry Projects',
          description: 'Work on real-world data science projects',
          icon: 'fas fa-project-diagram'
        }
      ],
      specialties: [
        { name: 'Statistical Analysis', level: 'Expert' },
        { name: 'Machine Learning', level: 'Advanced' },
        { name: 'Data Visualization', level: 'Intermediate' }
      ]
    },
    {
      id: '7',
      title: 'UX/UI Design Masterclass',
      company: 'Design Forge',
      companyLogo: 'DF',
      location: 'Hybrid',
      salary: '$2,800 - $4,800',
      duration: '12 Weeks',
      description: 'Learn user experience and interface design principles, prototyping, and user research. Create a professional portfolio with real client projects.',
      tags: ['UX Design', 'UI Design', 'Prototyping'],
      badge: 'Creative',
      badgeType: 'creative',
      powerups: [
        {
          name: 'Design Tools',
          description: 'Full access to Adobe Creative Suite',
          icon: 'fas fa-palette'
        },
        {
          name: 'Portfolio Review',
          description: 'Professional portfolio critique sessions',
          icon: 'fas fa-eye'
        }
      ],
      specialties: [
        { name: 'User Research', level: 'Advanced' },
        { name: 'Prototyping', level: 'Expert' },
        { name: 'Visual Design', level: 'Intermediate' }
      ]
    },
    {
      id: '8',
      title: 'Blockchain Development',
      company: 'Crypto Academy',
      companyLogo: 'CA',
      location: 'Online',
      salary: '$4,500 - $7,500',
      duration: '14 Weeks',
      description: 'Master blockchain development with Solidity, smart contracts, and decentralized applications. Learn about DeFi, NFTs, and blockchain security.',
      tags: ['Blockchain', 'Solidity', 'Smart Contracts'],
      badge: 'Future',
      badgeType: 'future',
      powerups: [
        {
          name: 'Testnet Access',
          description: 'Access to multiple blockchain testnets',
          icon: 'fas fa-link'
        },
        {
          name: 'Project Funding',
          description: 'Potential funding for promising projects',
          icon: 'fas fa-coins'
        }
      ],
      specialties: [
        { name: 'Smart Contracts', level: 'Expert' },
        { name: 'DeFi Development', level: 'Advanced' },
        { name: 'Blockchain Security', level: 'Intermediate' }
      ]
    }
  ];

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleSubmit = () => {
    console.log('Application submitted');
    handleCloseModal();
  };

  const handleLogin = (email: string, password: string) => {
    console.log('Login attempt with:', email, password);
    setIsLoginModalOpen(false);
    setIsLoggedIn(true);
  };

  const handleNavigateToResume = () => {
    setCurrentPage('resume');
  };

  if (!isLoggedIn) {
    if (currentPage === 'resume') {
      return <ResumePage />;
    }
    return <LandingPage onLogin={() => setIsLoginModalOpen(true)} onNavigateToResume={handleNavigateToResume} />;
  }

  return (
    <div className="app">
      <Analytics />
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
        <div className="dual-view">
          <div className="job-list">
            {jobs.map((job) => (
              <div 
                key={job.id} 
                className={`job-list-item ${selectedJob?.id === job.id ? 'selected' : ''}`}
                onClick={() => setSelectedJob(job)}
              >
                <div className="job-list-header">
                  <div className="company-logo">{job.companyLogo}</div>
                  <div>
                    <h3 className="job-title">
                      {job.title}
                      {job.badge && <span className={`new-badge ${job.badgeType}`}>{job.badge}</span>}
                    </h3>
                    <p className="company-name">{job.company}</p>
                  </div>
                </div>
                <div className="job-list-meta">
                  <div><i className="fas fa-map-marker-alt"></i> {job.location}</div>
                  <div><i className="fas fa-dollar-sign"></i> <span className="job-salary">{job.salary}</span></div>
                  <div><i className="fas fa-clock"></i> {job.duration}</div>
                </div>
                <div className="job-list-tags">
                  {job.tags.map((tag, index) => (
                    <span key={index} className="job-tag">{tag}</span>
                  ))}
                </div>
                <div className="job-list-powerups">
                  {job.powerups.map((powerup, index) => (
                    <div key={index} className="powerup-badge" title={powerup.description}>
                      <i className={powerup.icon}></i>
                      <span>{powerup.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="job-details">
            {selectedJob ? (
              <div className="job-details-content">
                <div className="job-details-header">
                  <div className="company-logo">{selectedJob.companyLogo}</div>
                  <div>
                    <h2 className="job-title">
                      {selectedJob.title}
                      {selectedJob.badge && <span className={`new-badge ${selectedJob.badgeType}`}>{selectedJob.badge}</span>}
                    </h2>
                    <p className="company-name">{selectedJob.company}</p>
                  </div>
                </div>
                <div className="job-details-meta">
                  <div><i className="fas fa-map-marker-alt"></i> {selectedJob.location}</div>
                  <div><i className="fas fa-dollar-sign"></i> <span className="job-salary">{selectedJob.salary}</span></div>
                  <div><i className="fas fa-clock"></i> {selectedJob.duration}</div>
                </div>
                <div className="job-details-description">
                  <h3>Description</h3>
                  <p>{selectedJob.description}</p>
                </div>
                <div className="job-details-tags">
                  <h3>Skills Required</h3>
                  <div className="tags-container">
                    {selectedJob.tags.map((tag, index) => (
                      <span key={index} className="job-tag">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="job-details-powerups">
                  <h3>Powerups</h3>
                  <div className="powerups-container">
                    {selectedJob.powerups.map((powerup, index) => (
                      <div key={index} className="powerup-card">
                        <i className={powerup.icon}></i>
                        <h4>{powerup.name}</h4>
                        <p>{powerup.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="job-details-specialties">
                  <h3>Specialties</h3>
                  <div className="specialties-container">
                    {selectedJob.specialties.map((specialty, index) => (
                      <div key={index} className="specialty-card">
                        <h4>{specialty.name}</h4>
                        <span className={`specialty-level ${specialty.level.toLowerCase()}`}>
                          {specialty.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <button className="btn apply-button" onClick={handleOpenModal}>Apply Now</button>
              </div>
            ) : (
              <div className="job-details-placeholder">
                <p>Select a job to view details</p>
              </div>
            )}
          </div>
        </div>
      </main>

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