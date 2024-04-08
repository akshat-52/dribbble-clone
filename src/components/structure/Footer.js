import React from 'react';

export const RenderFooter = () => {
    return (
        <div className="footer-container">
            {/* Placeholder links/icons */}
            <div className="footer-links">
                <a href="#">For designers</a>
                <span className="footer-divider">|</span>
                <a href="#">Hire designers</a>
                <span className="footer-divider">|</span>
                <a href="#">Company</a>
                <span className="footer-divider">|</span>
                <a href="#">Directories</a>
                <span className="footer-divider">|</span>
                <a href="#">Design Resources</a>
            </div>

            {/* Smaller logo */}
            <div className="logo">
                <img
                    onClick={() => { window.location.href = "https://www.dribbble.com" }}
                    src="/dribble.png"
                    alt="dribbble logo"
                    style={{ maxWidth: '100px', maxHeight: '50px' }} // Adjust the size here
                />
            </div>

            {/* Placeholder text */}
            <div className="footer-text">
                <p>&copy; {new Date().getFullYear()} Aeonaxy. All Rights Reserved</p>
            </div>
        </div>
    );
};
