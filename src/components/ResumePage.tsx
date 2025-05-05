import React, { useState } from 'react';

interface Experience {
  id: string;
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface Education {
  id: string;
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
}

interface Certification {
  id: string;
  name: string;
  organization: string;
  dateEarned: string;
}

interface ResumeData {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
  };
  summary: string;
  experiences: Experience[];
  education: Education[];
  skills: string[];
  certifications: Certification[];
}

const ResumePage: React.FC = () => {
  const [resumeData, setResumeData] = useState<ResumeData>({
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      location: '',
    },
    summary: '',
    experiences: [],
    education: [],
    skills: [],
    certifications: [],
  });

  const [currentSkill, setCurrentSkill] = useState('');

  const handlePersonalInfoChange = (field: keyof ResumeData['personalInfo'], value: string) => {
    setResumeData(prev => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value
      }
    }));
  };

  const handleSummaryChange = (value: string) => {
    setResumeData(prev => ({
      ...prev,
      summary: value
    }));
  };

  const addExperience = () => {
    const newExperience: Experience = {
      id: Date.now().toString(),
      jobTitle: '',
      company: '',
      startDate: '',
      endDate: '',
      description: ''
    };
    setResumeData(prev => ({
      ...prev,
      experiences: [...prev.experiences, newExperience]
    }));
  };

  const updateExperience = (id: string, field: keyof Experience, value: string) => {
    setResumeData(prev => ({
      ...prev,
      experiences: prev.experiences.map(exp => 
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    }));
  };

  const removeExperience = (id: string) => {
    setResumeData(prev => ({
      ...prev,
      experiences: prev.experiences.filter(exp => exp.id !== id)
    }));
  };

  const addEducation = () => {
    const newEducation: Education = {
      id: Date.now().toString(),
      degree: '',
      institution: '',
      startDate: '',
      endDate: ''
    };
    setResumeData(prev => ({
      ...prev,
      education: [...prev.education, newEducation]
    }));
  };

  const updateEducation = (id: string, field: keyof Education, value: string) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.map(edu => 
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    }));
  };

  const removeEducation = (id: string) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.filter(edu => edu.id !== id)
    }));
  };

  const addSkill = () => {
    if (currentSkill.trim()) {
      setResumeData(prev => ({
        ...prev,
        skills: [...prev.skills, currentSkill.trim()]
      }));
      setCurrentSkill('');
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setResumeData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));
  };

  const addCertification = () => {
    const newCertification: Certification = {
      id: Date.now().toString(),
      name: '',
      organization: '',
      dateEarned: ''
    };
    setResumeData(prev => ({
      ...prev,
      certifications: [...prev.certifications, newCertification]
    }));
  };

  const updateCertification = (id: string, field: keyof Certification, value: string) => {
    setResumeData(prev => ({
      ...prev,
      certifications: prev.certifications.map(cert => 
        cert.id === id ? { ...cert, [field]: value } : cert
      )
    }));
  };

  const removeCertification = (id: string) => {
    setResumeData(prev => ({
      ...prev,
      certifications: prev.certifications.filter(cert => cert.id !== id)
    }));
  };

  const handleGenerateResume = () => {
    // TODO: Implement resume generation logic
    console.log('Generating resume with data:', resumeData);
  };

  const handleSaveDraft = () => {
    // TODO: Implement save draft logic
    console.log('Saving draft:', resumeData);
  };

  return (
    <div className="resume-page">
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
              <button className="btn btn-outline" onClick={() => window.location.href = '/'}>
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="resume-main">
        <div className="container">
          <div className="resume-builder">
            <h1>Create Your Professional Resume</h1>
            <p className="resume-subtitle">Stand out with a professionally crafted resume that highlights your unique skills and experiences</p>
            
            <div className="resume-sections">
              <section className="resume-section">
                <h2>Personal Information</h2>
                <div className="form-group">
                  <input 
                    type="text" 
                    placeholder="Full Name"
                    value={resumeData.personalInfo.fullName}
                    onChange={(e) => handlePersonalInfoChange('fullName', e.target.value)}
                  />
                  <input 
                    type="email" 
                    placeholder="Email"
                    value={resumeData.personalInfo.email}
                    onChange={(e) => handlePersonalInfoChange('email', e.target.value)}
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone"
                    value={resumeData.personalInfo.phone}
                    onChange={(e) => handlePersonalInfoChange('phone', e.target.value)}
                  />
                  <input 
                    type="text" 
                    placeholder="Location"
                    value={resumeData.personalInfo.location}
                    onChange={(e) => handlePersonalInfoChange('location', e.target.value)}
                  />
                </div>
              </section>

              <section className="resume-section">
                <h2>Professional Summary</h2>
                <textarea 
                  placeholder="Write a compelling summary of your professional background and career goals..."
                  value={resumeData.summary}
                  onChange={(e) => handleSummaryChange(e.target.value)}
                />
              </section>

              <section className="resume-section">
                <h2>Work Experience</h2>
                {resumeData.experiences.map((exp) => (
                  <div key={exp.id} className="experience-entry">
                    <input 
                      type="text" 
                      placeholder="Job Title"
                      value={exp.jobTitle}
                      onChange={(e) => updateExperience(exp.id, 'jobTitle', e.target.value)}
                    />
                    <input 
                      type="text" 
                      placeholder="Company"
                      value={exp.company}
                      onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                    />
                    <div className="date-range">
                      <input 
                        type="month" 
                        placeholder="Start Date"
                        value={exp.startDate}
                        onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                      />
                      <input 
                        type="month" 
                        placeholder="End Date"
                        value={exp.endDate}
                        onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                      />
                    </div>
                    <textarea 
                      placeholder="Describe your responsibilities and achievements..."
                      value={exp.description}
                      onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                    />
                    <button 
                      className="btn btn-outline remove-btn"
                      onClick={() => removeExperience(exp.id)}
                    >
                      Remove Experience
                    </button>
                  </div>
                ))}
                <button className="btn btn-outline add-more" onClick={addExperience}>
                  + Add Another Experience
                </button>
              </section>

              <section className="resume-section">
                <h2>Education</h2>
                {resumeData.education.map((edu) => (
                  <div key={edu.id} className="education-entry">
                    <input 
                      type="text" 
                      placeholder="Degree/Certificate"
                      value={edu.degree}
                      onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                    />
                    <input 
                      type="text" 
                      placeholder="Institution"
                      value={edu.institution}
                      onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
                    />
                    <div className="date-range">
                      <input 
                        type="month" 
                        placeholder="Start Date"
                        value={edu.startDate}
                        onChange={(e) => updateEducation(edu.id, 'startDate', e.target.value)}
                      />
                      <input 
                        type="month" 
                        placeholder="End Date"
                        value={edu.endDate}
                        onChange={(e) => updateEducation(edu.id, 'endDate', e.target.value)}
                      />
                    </div>
                    <button 
                      className="btn btn-outline remove-btn"
                      onClick={() => removeEducation(edu.id)}
                    >
                      Remove Education
                    </button>
                  </div>
                ))}
                <button className="btn btn-outline add-more" onClick={addEducation}>
                  + Add Another Education
                </button>
              </section>

              <section className="resume-section">
                <h2>Skills</h2>
                <div className="skills-input">
                  <input 
                    type="text" 
                    placeholder="Add a skill"
                    value={currentSkill}
                    onChange={(e) => setCurrentSkill(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                  />
                  <button className="btn btn-outline" onClick={addSkill}>Add</button>
                </div>
                <div className="skills-tags">
                  {resumeData.skills.map((skill, index) => (
                    <div key={index} className="skill-tag">
                      {skill}
                      <button 
                        className="remove-skill"
                        onClick={() => removeSkill(skill)}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </section>

              <section className="resume-section">
                <h2>Certifications</h2>
                {resumeData.certifications.map((cert) => (
                  <div key={cert.id} className="certification-entry">
                    <input 
                      type="text" 
                      placeholder="Certification Name"
                      value={cert.name}
                      onChange={(e) => updateCertification(cert.id, 'name', e.target.value)}
                    />
                    <input 
                      type="text" 
                      placeholder="Issuing Organization"
                      value={cert.organization}
                      onChange={(e) => updateCertification(cert.id, 'organization', e.target.value)}
                    />
                    <input 
                      type="date" 
                      placeholder="Date Earned"
                      value={cert.dateEarned}
                      onChange={(e) => updateCertification(cert.id, 'dateEarned', e.target.value)}
                    />
                    <button 
                      className="btn btn-outline remove-btn"
                      onClick={() => removeCertification(cert.id)}
                    >
                      Remove Certification
                    </button>
                  </div>
                ))}
                <button className="btn btn-outline add-more" onClick={addCertification}>
                  + Add Another Certification
                </button>
              </section>
            </div>

            <div className="resume-actions">
              <button className="btn btn-primary" onClick={handleGenerateResume}>
                Generate Resume
              </button>
              <button className="btn btn-outline" onClick={handleSaveDraft}>
                Save as Draft
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ResumePage; 