'use client';
import { Dropdown } from 'antd';
import { DownOutlined, GlobalOutlined } from '@ant-design/icons';
import { useTransition, ReactElement } from 'react';
import { usePathname, useRouter } from '@/navigation';
import { useParams } from 'next/navigation';
import { locales } from '@/config';

const LanguageSwitcher: React.FC = (): ReactElement => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [isPending, startTransition] = useTransition();

  const currentLocale = params.locale || 'ru';

  const onLanguageChange = (locale: string) => {
    startTransition(() => {
      router.replace(
        {
          pathname: pathname,
        },
        { locale }
      );
    });
  };

  // Create menu items
  const menuItems = locales.map((l) => ({
    key: l,
    label: (
      <span
        className="dropdown-item" // Bootstrap class for dropdown item
        onClick={() => onLanguageChange(l)}
        style={{ fontWeight: l === currentLocale ? 'bold' : 'normal' }} // Bold if the current locale matches
      >
        {l.toUpperCase()}
      </span>
    ),
  }));

  return (
    <Dropdown
      menu={{ items: menuItems }}
      trigger={['click']}
      placement="bottomRight"
      arrow
    >
      <div
        style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
        className="d-inline-flex align-items-center"
      >
        <GlobalOutlined style={{ fontSize: '30px', color: '#54afbe' }} />{' '}
        <DownOutlined style={{ fontSize: '16px', marginLeft: '8px', color: '#54afbe' }} />
      </div>
    </Dropdown>
  );
};

export default LanguageSwitcher;
