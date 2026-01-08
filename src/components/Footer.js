import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
export default function Footer(){
    return(
        <>
         <footer id="footer">
            <div className="container">
                <div className="footer-row">
                    <div className="col">
                        <h2>Get In Touch</h2>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="social">
                        <a href="#">
                            <FacebookIcon/>
                        </a>
                        <a href="#">
                            <InstagramIcon/>
                        </a>
                        <a href="#">
                            <TwitterIcon/>
                        </a>
                    </div>
                 </div>
                    <div className='col'>
                        <h2>Company Info</h2>
                        <ul>
                            <li>
                                <a href='#'>About Us</a>
                            </li>
                            <li>
                                <a href='#'>Carrier</a>
                            </li>
                            <li>
                                <a href='#'>We Are hairing</a>
                            </li>
                            <li>
                                <a href='#'>Blog</a>
                            </li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h2>Features</h2>
                        <ul>
                            <li>
                                <a href='#'>Business Marketing</a>
                            </li>
                            <li>
                                <a href='#'>User Analytic</a>
                            </li>
                            <li>
                                <a href='#'>Live Chat </a>
                            </li>
                            <li>
                                <a href='#'>Unlimited Support</a>
                            </li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h2>Resources</h2>
                        <ul>
                            <li>
                                <a href='#'>IOS & Android</a>
                            </li>
                            <li>
                                <a href='#'>Watch a Demo</a>
                            </li>
                            <li>
                                <a href='#'>Customers </a>
                            </li>
                            <li>
                                <a href='#'>Api</a>
                            </li>
                        </ul>
                    </div>
            </div>
         </footer>
        </>
    )
}