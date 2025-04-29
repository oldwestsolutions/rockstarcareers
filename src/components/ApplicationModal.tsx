import React from 'react';
import './ApplicationModal.css';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

const ApplicationModal: React.FC<ApplicationModalProps> = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <div className="modal" id="application-modal">
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title">Application Portal</h3>
          <span className="modal-close" onClick={onClose}>&times;</span>
        </div>
        <div className="modal-body">
          <p>Submit your manuscript for consideration to this distinguished position.</p>
          <p>Our council of reviewers will examine your qualifications with the utmost discretion.</p>
        </div>
        <div className="modal-footer">
          <button className="btn btn-outline" onClick={onClose}>Cancel</button>
          <button className="btn" onClick={onSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationModal; 