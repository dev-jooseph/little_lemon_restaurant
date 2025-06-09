export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>© {currentYear} Little Lemon Restaurant</p>
    </footer>
  );
}
