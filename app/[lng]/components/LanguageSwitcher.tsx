import { Menu, Dropdown } from 'antd';
import { DownOutlined, GlobalOutlined } from '@ant-design/icons'; // Import the icons
import Link from 'next/link';
import { useTranslation } from '@/app/i18n';
import { languages } from '@/app/i18n/settings';
import { ReactElement } from 'react';

interface LanguageSwitcherProps {
  lng: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = async ({
  lng,
}): Promise<ReactElement> => {
  const { t } = await useTranslation(lng);

  // Create menu items
  const menuItems = languages.map((l) => ({
    key: l,
    label: (
      <Link className='text-decoration-none' href={`/${l}`} passHref>
        <span style={{ fontWeight: l === lng ? 'bold' : 'normal' }}>
          {l.toUpperCase()}
        </span>
      </Link>
    ),
  }));

  return (
    <Dropdown
      menu={{ items: menuItems }} // Use the menu prop instead of overlay
      trigger={['click']}
      placement="bottomRight"
      arrow
    >
      <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
        <GlobalOutlined style={{ fontSize: '30px' }} />{' '}
        {/* Use the icon here */}
        <DownOutlined style={{ fontSize: '16px', marginLeft: '8px' }} />
      </div>
    </Dropdown>
  );
};

export default LanguageSwitcher;
