// src/MonkeyForm.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../MonkeyForm/MonkeyForm.css'; // Import CSS for custom styles
import closeMouth from "../../src/assets/closeMouth.png";
import openEyes from "../../src/assets/openEyes.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const MonkeyForm = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="form-container">
      <div className="form">
        <motion.div
          className="monkey-animation"
          animate={{ opacity: showPassword ? 1 : 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={showPassword ? closeMouth : openEyes}
            alt="Monkey"
          />
        </motion.div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Name / Email ID"
            className="input-field"
          />
          <div className="password-field">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
            />
            <button 
              className="toggle-password-btn" 
              onClick={() => setShowPassword(!showPassword)}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonkeyForm;
