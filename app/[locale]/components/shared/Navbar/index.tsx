// components/Navbar.tsx
import { WhatsAppOutlined } from '@ant-design/icons';
import Image from 'next/image';
import LanguageSwitcher from '../../LanguageSwitcher';
import { Link } from '@/navigation';


const Navbar: React.FC = () => {
  return (
    <nav className="container-fluid navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-md d-flex justify-between">
        {/* Replace Navbar text with logo */}
        <Link href="/" className="navbar-brand">
          <Image src="/logo.png" alt="Logo" width={80} height={80} priority />
        </Link>
        <div className="d-flex justify-content-center align-items-center gap-2">
          {/* <Link
            href="https://wa.me/+201010932484"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="nav-link"
          >
            <WhatsAppOutlined style={{ fontSize: '34px', color: '#25D366' }} />
          </Link> */}
          {/* Add LanguageSwitcher here */}
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
