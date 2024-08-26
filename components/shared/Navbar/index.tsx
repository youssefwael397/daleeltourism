import { WhatsAppOutlined } from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => (
  <nav className="container-fluid navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-md d-flex justify-between">
      {/* Replace Navbar text with logo */}
      <Link href="/" className="navbar-brand">
        <Image src="/logo.png" alt="Logo" width={80} height={80} priority />
      </Link>
      <Link
        href="https://wa.me/+201010932484"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="nav-link"
      >
        <WhatsAppOutlined style={{ fontSize: '34px', color: '#25D366' }} />
      </Link>
    </div>
  </nav>
);

export default Navbar;
