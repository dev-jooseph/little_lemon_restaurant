import logo from  '../icons_assets/Logo.svg';
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <section>
        <div className="company-info" id='about'>
          <img src={logo} alt="Little Lemon Restaurant Logo" />
          <p>We are a family-owned Mediterranean restaurant, committed to providing the best dining experience.</p>
        </div>
        <div>
          <h3>Important Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reservations">Reservations</a></li>
            <li><a href="#order-online">Order Online</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
        </div>
        <div>
          <h3>Contact Us</h3>
          <ul>
            <li>
              Address:<br/> 123 Main Street, Towncity, USA
            </li>
            <li>
              Phone:<br/> (123) 456-7890
            </li>
            <li>
              Email:<br/> info@littlelemon.com
            </li>
          </ul>
        </div>
        <div>
          <h3>Social Media Links</h3>
          <ul>
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </section>
    </footer>
  );
}
