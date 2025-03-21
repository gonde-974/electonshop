import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react'; // Икона

function ErrorPage() {
  return (
    <div className="error-container">
      <AlertTriangle className="error-icon" size={60} />
      <h1 className="error-title">Oops! Page Not Found</h1>
      <p className="error-text">The page you are looking for might have been removed or doesn't exist.</p>
      <Link to="/" className="error-button">Go Back Home</Link>
    </div>
  );
}

export default ErrorPage;
