import React from 'react'
import './footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer" id='footer'>
        <div className="copyright">
            &copy; Copyright{' '}
            <strong>
                <span>Tit Technology</span>
            </strong>
            . All Rights Reserved
        </div>
        <div className="credits">
            Designed by <Link to=" ">tit</Link>
        </div>
    </footer>
  )
}

export default Footer