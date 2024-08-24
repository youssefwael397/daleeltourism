import Link from 'next/link';
import Image from 'next/image';
import {
  FacebookFilled,
  YoutubeFilled,
  TwitterCircleFilled,
  InstagramFilled,
  WhatsAppOutlined,
  SendOutlined ,
} from '@ant-design/icons';

const Footer = () => (
  <footer className="footer">
    <section className="bg-light py-4 py-md-5 py-xl-8 border-top border-light">
      <div className="container overflow-hidden">
        <div className="row gy-4 gy-lg-0 justify-content-xl-between">
          <div className="col-12 col-md-2 col-lg-2 col-xl-2">
            <div className="widget">
              <Link href="#!">
                <Image src="/logo.png" alt="Logo" width={175} height={175} />
              </Link>
            </div>
          </div>

          <div className="col-12 col-md-4 col-lg-4 col-xl-4">
            <div className="widget">
              <ul className="list-unstyled">
                <li className="mb-2">
                  For over 20 years, RUSTAR TOURISM has been delivering the
                  fairy tale of the East to people worldwide!
                </li>
                <li className="mb-2">
                  RUSTAR TOURISM is known as a reliable tourism partner with
                  years of experience and high-quality services.
                </li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-md-4 col-lg-4 col-xl-4">
            <div className="widget">
              <h4 className="widget-title mb-4">Contacts</h4>
              <address className="mb-4">
                8014 Edith Blvd NE, Albuquerque, New York, United States
              </address>
              <p className="mb-1">
                <Link
                  href="tel:+201010932484"
                  className="link-secondary text-decoration-none"
                >
                  (20) 1010-932-484
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="bg-light py-4 py-md-5 py-xl-8 border-top border-light-subtle">
      <div className="container overflow-hidden">
        <div className="row gy-4 gy-md-0 align-items-md-center">
          <div className="col-xs-12 col-md-7 order-1 order-md-0">
            <div className="copyright text-center text-md-start">
              &copy; 2024. All rights reserved by Daleel Tourism
            </div>
          </div>

          <div className="col-xs-12 col-md-5 order-0 order-md-1">
            <div className="social-media-wrapper">
              <ul className="list-unstyled m-0 p-0 d-flex justify-content-center justify-content-md-end">
                <li className="me-3">
                  <Link href="#!" className="link-dark link-opacity-75-hover">
                    <FacebookFilled
                      style={{ fontSize: '24px', color: '#4267B2' }}
                    />
                  </Link>
                </li>
                <li className="me-3">
                  <Link href="#!" className="link-dark link-opacity-75-hover">
                    <YoutubeFilled
                      style={{ fontSize: '24px', color: '#FF0000' }}
                    />
                  </Link>
                </li>
                <li className="me-3">
                  <Link href="#!" className="link-dark link-opacity-75-hover">
                    <TwitterCircleFilled
                      style={{ fontSize: '24px', color: '#1DA1F2' }}
                    />
                  </Link>
                </li>
                <li className="me-3">
                  <Link href="#!" className="link-dark link-opacity-75-hover">
                    <InstagramFilled
                      style={{ fontSize: '24px', color: '#fd1d1d' }}
                    />
                  </Link>
                </li>
                <li className="me-3">
                  <Link href="#!" className="link-dark link-opacity-75-hover">
                    <WhatsAppOutlined
                      style={{ fontSize: '24px', color: '#25D366' }}
                    />
                  </Link>
                </li>
                <li>
                  <Link href="#!" className="link-dark link-opacity-75-hover">
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

export default Footer;
