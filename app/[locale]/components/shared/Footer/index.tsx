// import Link from 'next/link';
import Image from 'next/image';
import {
  FacebookFilled,
  YoutubeFilled,
  TwitterCircleFilled,
  InstagramFilled,
  WhatsAppOutlined,
  SendOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';

const Footer = ({}) => {
  const t = useTranslations('footer');

  return (
    <footer className="footer">
      <section className="bg-light py-4 py-md-5 py-xl-8 border-top border-light">
        <div className="container-md overflow-hidden">
          <div className="row gy-4 gy-lg-0 justify-content-xl-between">
            <div className="col-12 col-md-4 col-lg-4 col-xl-2">
              <div className="widget">
                <Link target="_blank" href="/">
                  <Image src="/logo.png" alt="Logo" width={175} height={175} />
                </Link>
              </div>
            </div>

            <div className="col-12 col-md-4 col-lg-4 col-xl-4">
              <div className="widget">
                <ul className="list-unstyled">
                  {/* <li className="mb-2">{t('aboutUs')}</li> */}
                  {t('reliablePartner')
                    .split('\n')
                    .map((line, index) => (
                      <li key={index} className="mb-2">
                        {line}
                      </li>
                    ))}
                </ul>
              </div>
            </div>

            <div className="col-12 col-md-4 col-lg-4 col-xl-4">
              <div className="widget">
                <h4 className="widget-title mb-4">{t('contacts')}</h4>
                <p className="mb-1">
                  <Link
                    href="https://api.whatsapp.com/send?phone=97460023377"
                    target="_blank"
                    className="link-secondary text-decoration-none"
                  >
                    <WhatsAppOutlined
                      className="me-2"
                      style={{ fontSize: '18px', color: '#25D366' }}
                    />
                    +97460023377
                  </Link>
                </p>
                <p className="mb-1">
                  <Link
                    target="_blank"
                    href="https://t.me/qatartoursdaleel"
                    className="link-secondary text-decoration-none"
                  >
                    <SendOutlined
                      className="me-2"
                      style={{ fontSize: '18px', color: '#0088CC' }}
                    />
                    @qatartoursdaleel
                  </Link>
                </p>
                <p className="mb-1">
                  <Link
                    target="_blank"
                    href="mailto:daleeltourism@gmail.com"
                    className="link-secondary text-decoration-none"
                  >
                    <MailOutlined
                      className="me-2"
                      style={{ fontSize: '18px', color: '#007bff' }}
                    />
                    daleeltourism@gmail.com
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-light py-4 py-md-5 py-xl-8 border-top border-light-subtle">
        <div className="container-md overflow-hidden">
          <div className="row gy-4 gy-md-0 align-items-md-center">
            <div className="col-xs-12 col-md-7 order-1 order-md-0">
              <div className="copyright text-center text-md-start">
                {t('copyright')}
              </div>
            </div>

            <div className="col-xs-12 col-md-5 order-0 order-md-1">
              <div className="social-media-wrapper">
                <ul className="list-unstyled m-0 p-0 d-flex justify-content-center justify-content-md-end">
                  <li className="me-3">
                    <Link
                      target="_blank"
                      href="https://www.instagram.com/daleel.tourism.qa/"
                      className="link-dark link-opacity-75-hover"
                    >
                      <InstagramFilled
                        style={{ fontSize: '24px', color: '#fd1d1d' }}
                      />
                    </Link>
                  </li>
                  <li className="me-3">
                    <Link
                      target="_blank"
                      href="https://api.whatsapp.com/send?phone=97460023377"
                      className="link-dark link-opacity-75-hover"
                    >
                      <WhatsAppOutlined
                        style={{ fontSize: '24px', color: '#25D366' }}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      href="https://t.me/qatartoursdaleel"
                      className="link-dark link-opacity-75-hover"
                    >
                      <SendOutlined
                        style={{ fontSize: '24px', color: '#0088CC' }}
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
