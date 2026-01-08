import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export default function Header(){
    return (
        <>
          <header id="header">
            <nav className="navbar">
                <a className="logo">
                   EduBridge
                </a>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Product</a>
                    </li>
                    <li>
                        <a href="#">Pricing</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
                <div className="account">
                    <a href="#">Login</a>
                    <a href="#" className="btn-join">
                         Join Us
                        <ArrowForwardIcon/>
                    </a>
                </div>
            </nav>
          </header>
        </>
    )
}