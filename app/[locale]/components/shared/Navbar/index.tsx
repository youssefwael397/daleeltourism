// components/Navbar.tsx
import { WhatsAppOutlined } from '@ant-design/icons';
import Image from 'next/image';
import LanguageSwitcher from '../../LanguageSwitcher';
import { Link } from '@/navigation';


const Navbar: React.FC = () => {
  return (
    <nav className="container-fluid navbar navbar-expand-lg navbar-light bg-light position-sticky">
      <div className="container-md d-flex justify-between">
        {/* Replace Navbar text with logo */}
        <Link href="/" className="navbar-brand">
          <Image src="/logo.png" alt="Logo" width={80} height={80} priority />
        </Link>
        <div className="d-flex justify-content-center align-items-center gap-2">
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
