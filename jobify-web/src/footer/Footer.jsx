function Footer() {
    const year = new Date().getFullYear();
    return (
        <>
            <footer className="text-center mt-3 mb-3 text-muted">
                © {year} Jobify-platform. All rights reserved.
            </footer>
        </>
    )
}

export default Footer;