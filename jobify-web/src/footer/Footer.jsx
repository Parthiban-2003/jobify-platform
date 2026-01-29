import './Footer.css';

function Footer() {
    const year = new Date().getFullYear();
    return (
        <>
            <footer className="footer fixed-bottom text-center fs-5">
                <p className="mb-0">© {year} Jobify-Platform. All rights reserved.</p>
            </footer>
        </>
    )
}

export default Footer;