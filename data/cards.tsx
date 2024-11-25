import { CardItemType } from '@/app/[locale]/components/Home/CardItem';
import { useTranslations } from 'next-intl';

const Cards = (): CardItemType[] => {
  const t = useTranslations();

  return [
    {
      title: t('headers.DOHA_TOUR.title'),
      subTitle: t('headers.DOHA_TOUR.subTitle'),
      url: 'DOHA_TOUR',
      img: '/assets/headers/1.jpg',
      header: '/assets/headers/1.jpg',
      headerType: 'img',
      moreDetails: {
        header: t('details.DOHA_TOUR.header'),
        descriptions: t.raw('details.DOHA_TOUR.descriptions'),
        secondHeader: t('details.DOHA_TOUR.attractionsHeader'),
        moreInfo: t.raw('details.DOHA_TOUR.attractions'),
      },
      gallery: [
        '/assets/gallery/1/1.jpg',
        '/assets/gallery/1/2.jpg',
        '/assets/gallery/1/3.jpg',
        '/assets/gallery/1/4.jpg',
        '/assets/gallery/1/5.jpg',
        '/assets/gallery/1/6.jpg',
        '/assets/gallery/1/7.jpg',
        '/assets/gallery/1/8.jpg',
        '/assets/gallery/1/9.jpg',
        '/assets/gallery/1/10.jpg',
        '/assets/gallery/1/11.jpg',
        '/assets/gallery/1/12.jpg',
        '/assets/gallery/1/13.jpg',
        '/assets/gallery/1/14.jpg',
        '/assets/gallery/1/15.jpg',
      ],
      prices: [
        <p key={1}>
          {t.raw('prices.DOHA_TOUR.0.0')} <br />
          <strong>{t.raw('prices.DOHA_TOUR.0.1')}</strong> <br />
          {t.raw('prices.DOHA_TOUR.0.2')}
        </p>,
        <p key={2}>
          {t.raw('prices.DOHA_TOUR.1.0')}{' '}
          <span className="text-uppercase">
            {t.raw('prices.DOHA_TOUR.1.1')}
          </span>
        </p>,
        <ul key={3} className="plus-section-list">
          {t.raw('prices.DOHA_TOUR.2').map((info: string, index: number) => (
            <li key={index}>{info}</li>
          ))}
        </ul>,
      ],
    },
    {
      title: t('headers.DOHA_TOUR_MUSEUM.title'),
      subTitle: t('headers.DOHA_TOUR_MUSEUM.subTitle'),
      url: 'DOHA_TOUR_MUSEUM',
      img: '/assets/headers/2.jpg',
      header: '/assets/headers/2.jpg',
      headerType: 'img',
      moreDetails: {
        header: t('details.DOHA_TOUR_MUSEUM.header'),
        descriptions: t.raw('details.DOHA_TOUR_MUSEUM.descriptions'),
        secondHeader: t('details.DOHA_TOUR_MUSEUM.attractionsHeader'),
        moreInfo: t.raw('details.DOHA_TOUR_MUSEUM.attractions'),
      },
      gallery: [
        '/assets/gallery/2/1.jfif',
        '/assets/gallery/2/2.jfif',
        '/assets/gallery/2/3.jfif',
        '/assets/gallery/2/4.jfif',
        '/assets/gallery/2/5.jfif',
        '/assets/gallery/2/6.jfif',
        '/assets/gallery/2/7.jfif',
        '/assets/gallery/2/8.jfif',
        '/assets/gallery/2/9.jfif',
        '/assets/gallery/2/10.jpg',
        '/assets/gallery/2/11.jfif',
        '/assets/gallery/2/12.jpg',
        '/assets/gallery/2/13.jfif',
        '/assets/gallery/2/14.jfif',
        '/assets/gallery/2/15.jpg',
        '/assets/gallery/2/16.jpg',
        '/assets/gallery/2/17.jpg',
        '/assets/gallery/2/18.jpg',
        '/assets/gallery/2/19.jpg',
        '/assets/gallery/2/20.jpg',
      ],
      prices: [
        <p key={1}>
          {t.raw('prices.DOHA_TOUR_MUSEUM.0.0')} <br />
          <strong>{t.raw('prices.DOHA_TOUR_MUSEUM.0.1')}</strong> <br />
          {t.raw('prices.DOHA_TOUR_MUSEUM.0.2')}
        </p>,
        <p key={2}>
          {t.raw('prices.DOHA_TOUR_MUSEUM.1.0')}{' '}
          <span className="text-uppercase">
            {t.raw('prices.DOHA_TOUR_MUSEUM.1.1')}
          </span>
        </p>,
        <ul key={3} className="plus-section-list">
          {t
            .raw('prices.DOHA_TOUR_MUSEUM.2')
            .map((info: string, index: number) => (
              <li key={index}>{info}</li>
            ))}
        </ul>,
      ],
    },
    {
      title: t('headers.NORTHWEST_OF_QATAR.title'),
      subTitle: t('headers.NORTHWEST_OF_QATAR.subTitle'),
      url: 'NORTHWEST_OF_QATAR',
      img: '/assets/headers/3.jpg',
      header: '/assets/headers/3.jpg',
      headerType: 'img',
      moreDetails: {
        header: t('details.NORTHWEST_OF_QATAR.header'),
        descriptions: t.raw('details.NORTHWEST_OF_QATAR.descriptions'),
        secondHeader: t('details.NORTHWEST_OF_QATAR.attractionsHeader'),
        moreInfo: t.raw('details.NORTHWEST_OF_QATAR.attractions'),
      },
      gallery: [
        '/assets/gallery/3/1.jfif',
        '/assets/gallery/3/2.jfif',
        '/assets/gallery/3/4.jfif',
        '/assets/gallery/3/5.jfif',
        '/assets/gallery/3/6.jfif',
        '/assets/gallery/3/7.jfif',
        '/assets/gallery/3/8.jfif',
        '/assets/gallery/3/9.jfif',
        '/assets/gallery/3/10.jfif',
        '/assets/gallery/3/11.jfif',
        '/assets/gallery/3/14.jfif',
        '/assets/gallery/3/15.jfif',
      ],
      prices: [
        <p key={1}>
          {t.raw('prices.NORTHWEST_OF_QATAR.0.0')} <br />
          <strong>{t.raw('prices.NORTHWEST_OF_QATAR.0.1')}</strong> <br />
          {t.raw('prices.NORTHWEST_OF_QATAR.0.2')}
        </p>,
        <p key={2}>
          {t.raw('prices.NORTHWEST_OF_QATAR.1.0')}{' '}
          <span className="text-uppercase">
            {t.raw('prices.NORTHWEST_OF_QATAR.1.1')}
          </span>
        </p>,
        <ul key={3} className="plus-section-list">
          {t
            .raw('prices.NORTHWEST_OF_QATAR.2')
            .map((info: string, index: number) => (
              <li key={index}>{info}</li>
            ))}
        </ul>,
      ],
    },
    {
      title: t('headers.MANGROVES_RESERVE.title'),
      subTitle: t('headers.MANGROVES_RESERVE.subTitle'),
      url: 'MANGROVES_RESERVE',
      img: '/assets/headers/4.jfif',
      header: '/assets/headers/4.jfif',
      headerType: 'img',
      moreDetails: {
        header: t('details.MANGROVES_RESERVE.header'),
        descriptions: t.raw('details.MANGROVES_RESERVE.descriptions'),
        secondHeader: t('details.MANGROVES_RESERVE.attractionsHeader'),
        moreInfo: t.raw('details.MANGROVES_RESERVE.attractions'),
      },
      gallery: [
        '/assets/gallery/4/1.jfif',
        '/assets/gallery/4/2.jfif',
        '/assets/gallery/4/3.jpg',
        '/assets/gallery/4/4.jfif',
        '/assets/gallery/4/5.jfif',
        '/assets/gallery/4/6.jfif',
        '/assets/gallery/4/7.jfif',
        '/assets/gallery/4/8.jfif',
        '/assets/gallery/4/9.jfif',
        '/assets/gallery/4/10.jfif',
        '/assets/gallery/4/11.jfif',
        '/assets/gallery/4/12.jfif',
        '/assets/gallery/4/13.jfif',
        '/assets/gallery/4/14.jfif',
        '/assets/gallery/4/15.jfif',
        '/assets/gallery/4/16.jpg',
        '/assets/gallery/4/17.jpg',
        '/assets/gallery/4/18.jpg',
        '/assets/gallery/4/19.jpg',
        '/assets/gallery/4/20.jpg',
        '/assets/gallery/4/21.jpg',
        '/assets/gallery/4/22.jpg',
        '/assets/gallery/4/23.jpg',
        '/assets/gallery/4/24.jpg',
        '/assets/gallery/4/25.jpg',
        '/assets/gallery/4/26.jpg',
        '/assets/gallery/4/27.jpg',
        '/assets/gallery/4/28.jpg',
        '/assets/gallery/4/29.jpg',
        '/assets/gallery/4/30.jpg',
        '/assets/gallery/4/31.jpg',
        '/assets/gallery/4/32.jpg',
      ],
      prices: [
        <p key={1}>
          {t.raw('prices.MANGROVES_RESERVE.0.0')} <br />
          <strong>{t.raw('prices.MANGROVES_RESERVE.0.1')}</strong> <br />
          {t.raw('prices.MANGROVES_RESERVE.0.2')}
        </p>,
        <p key={2}>
          {t.raw('prices.MANGROVES_RESERVE.1.0')}{' '}
          <span className="text-uppercase">
            {t.raw('prices.MANGROVES_RESERVE.1.1')}
          </span>
        </p>,
        <ul key={3} className="plus-section-list">
          {t
            .raw('prices.MANGROVES_RESERVE.2')
            .map((info: string, index: number) => (
              <li key={index}>{info}</li>
            ))}
        </ul>,
      ],
    },
    {
      title: t('headers.FISHING_IN_DOHA.title'),
      subTitle: t('headers.FISHING_IN_DOHA.subTitle'),
      url: 'FISHING_IN_DOHA',
      img: '/assets/headers/5.jfif',
      header: '/assets/headers/5.jfif',
      headerType: 'img',
      moreDetails: {
        header: t('details.FISHING_IN_DOHA.header'),
        descriptions: t.raw('details.FISHING_IN_DOHA.descriptions'),
        secondHeader: t('details.FISHING_IN_DOHA.attractionsHeader'),
        moreInfo: t.raw('details.FISHING_IN_DOHA.attractions'),
      },
      gallery: [
        '/assets/gallery/5/1.jfif',
        '/assets/gallery/5/2.jfif',
        '/assets/gallery/5/3.jfif',
        '/assets/gallery/5/4.jfif',
        '/assets/gallery/5/5.jfif',
        '/assets/gallery/5/6.jfif',
        '/assets/gallery/5/7.jfif',
        '/assets/gallery/5/8.jfif',
        '/assets/gallery/5/9.jfif',
        '/assets/gallery/5/10.jfif',
        '/assets/gallery/5/11.jfif',
        '/assets/gallery/5/12.jfif',
        '/assets/gallery/5/13.jfif',
        '/assets/gallery/5/14.jfif',
        '/assets/gallery/5/15.jfif',
      ],
      pricesSectionTitles: t.raw('pricesTitles.FISHING_IN_DOHA'),
      prices: [
        <p key={1}>{t.raw('prices.FISHING_IN_DOHA.0.0')}</p>,
        <p key={2}>
          {t.raw('prices.FISHING_IN_DOHA.1.0')}{' '}
          <span className="text-uppercase">
            {t.raw('prices.FISHING_IN_DOHA.1.1')}
          </span>
        </p>,
        <ul key={3} className="plus-section-list">
          {t
            .raw('prices.FISHING_IN_DOHA.2')
            .map((info: string, index: number) => (
              <li key={index}>{info}</li>
            ))}
        </ul>,
      ],
    },
    {
      title: t('headers.DESERT_SAFARI.title'),
      subTitle: t('headers.DESERT_SAFARI.subTitle'),
      url: 'DESERT_SAFARI',
      img: '/assets/headers/6.jfif',
      header: '/assets/headers/6.jfif',
      headerType: 'img',
      moreDetails: {
        header: t('details.DESERT_SAFARI.header'),
        descriptions: t.raw('details.DESERT_SAFARI.descriptions'),
        secondHeader: t('details.DESERT_SAFARI.attractionsHeader'),
        moreInfo: t.raw('details.DESERT_SAFARI.attractions'),
      },
      gallery: Array.from({ length: 36 }, (_, index) => index).map(
        (number) => `/assets/gallery/6/${number + 1}.jfif`
      ),
      prices: [
        <p key={1}>
          {t.raw('prices.DESERT_SAFARI.0.0')} <br />
          <strong>{t.raw('prices.DESERT_SAFARI.0.1')}</strong> <br />
          {t.raw('prices.DESERT_SAFARI.0.2')}
        </p>,
        <p key={2}>
          {t.raw('prices.DESERT_SAFARI.1.0')}{' '}
          <span className="text-uppercase">
            {t.raw('prices.DESERT_SAFARI.1.1')}
          </span>
        </p>,
        <ul key={3} className="plus-section-list">
          {t
            .raw('prices.DESERT_SAFARI.2')
            .map((info: string, index: number) => (
              <li key={index}>{info}</li>
            ))}
        </ul>,
      ],
    },
    {
      title: t('headers.SAFARI_WITH_DINNER.title'),
      subTitle: t('headers.SAFARI_WITH_DINNER.subTitle'),
      url: 'SAFARI_WITH_DINNER',
      img: '/assets/headers/7.jfif',
      header: '/assets/headers/7.jfif',
      headerType: 'img',
      moreDetails: {
        header: t('details.SAFARI_WITH_DINNER.header'),
        descriptions: t.raw('details.SAFARI_WITH_DINNER.descriptions'),
        // secondHeader: t('details.SAFARI_WITH_DINNER.attractionsHeader'),
        // moreInfo: t.raw('details.SAFARI_WITH_DINNER.attractions'),
      },
      gallery: [
        '/assets/gallery/7/1.jfif',
        '/assets/gallery/7/2.jfif',
        '/assets/gallery/7/3.jfif',
        '/assets/gallery/7/4.jfif',
        '/assets/gallery/7/5.jfif',
        '/assets/gallery/7/6.jfif',
        '/assets/gallery/7/7.jfif',
        '/assets/gallery/7/8.jfif',
      ],
      prices: [
        <p key={1}>
          {t.raw('prices.SAFARI_WITH_DINNER.0.0')} <br />
          <strong>{t.raw('prices.SAFARI_WITH_DINNER.0.1')}</strong> <br />
          {t.raw('prices.SAFARI_WITH_DINNER.0.2')}
        </p>,
        <p key={2}>
          {t.raw('prices.SAFARI_WITH_DINNER.1.0')}{' '}
          <span className="text-uppercase">
            {t.raw('prices.SAFARI_WITH_DINNER.1.1')}
          </span>
        </p>,
        <ul key={3} className="plus-section-list">
          {t
            .raw('prices.SAFARI_WITH_DINNER.2')
            .map((info: string, index: number) => (
              <li key={index}>{info}</li>
            ))}
        </ul>,
      ],
    },
    {
      title: t('headers.YACHT_CHARTER_IN_QATAR.title'),
      subTitle: t('headers.YACHT_CHARTER_IN_QATAR.subTitle'),
      url: 'YACHT_CHARTER_IN_QATAR',
      img: '/assets/headers/8.jfif',
      header: '/assets/headers/8.jfif',
      headerType: 'img',
      moreDetails: {
        header: t('details.YACHT_CHARTER_IN_QATAR.header'),
        descriptions: t.raw('details.YACHT_CHARTER_IN_QATAR.descriptions'),
      },
      gallery: Array.from({ length: 26 }, (_, index) => index).map(
        (number) => `/assets/gallery/8/${number + 1}.jfif`
      ),
      prices: [
        <p key={1}>
          {t.raw('prices.YACHT_CHARTER_IN_QATAR.0.0')} <br />
          <strong>{t.raw('prices.YACHT_CHARTER_IN_QATAR.0.1')}</strong> <br />
          {t.raw('prices.YACHT_CHARTER_IN_QATAR.0.2')}
        </p>,
        <p key={2}>
          {t.raw('prices.YACHT_CHARTER_IN_QATAR.1.0')}{' '}
          <span className="text-uppercase">
            {t.raw('prices.YACHT_CHARTER_IN_QATAR.1.1')}
          </span>
        </p>,
        <ul key={3} className="plus-section-list">
          {t.raw('prices.YACHT_CHARTER_IN_QATAR.2').map((info: string, index: number) => (
            <li key={index}>{info}</li>
          ))}
        </ul>,
      ],
    },
    {
      title: t('headers.HELICOPTER_FLIGHT.title'),
      subTitle: t('headers.HELICOPTER_FLIGHT.subTitle'),
      url: 'HELICOPTER_FLIGHT',
      img: '/assets/headers/9.jfif',
      header: '/assets/headers/9.jfif',
      headerType: 'img',
      moreDetails: {
        header: t('details.HELICOPTER_FLIGHT.header'),
        descriptions: t.raw('details.HELICOPTER_FLIGHT.descriptions'),
        // secondHeader: t('details.HELICOPTER_FLIGHT.attractionsHeader'),
        // moreInfo: t.raw('details.HELICOPTER_FLIGHT.attractions'),
      },
      gallery: Array.from({ length: 44 }, (_, index) => index).map(
        (number) => `/assets/gallery/9/${number + 1}.jfif`
      ),
      prices: [
        <p key={1}>
          {t.raw('prices.HELICOPTER_FLIGHT.0.0')} <br />
          <strong>{t.raw('prices.HELICOPTER_FLIGHT.0.1')}</strong> <br />
          {t.raw('prices.HELICOPTER_FLIGHT.0.2')}
        </p>,
        <p key={2}>
          {t.raw('prices.HELICOPTER_FLIGHT.1.0')}{' '}
          <span className="text-uppercase">
            {t.raw('prices.HELICOPTER_FLIGHT.1.1')}
          </span>
        </p>,
        <ul key={3} className="plus-section-list">
          {t.raw('prices.HELICOPTER_FLIGHT.2').map((info: string, index: number) => (
            <li key={index}>{info}</li>
          ))}
        </ul>,
      ],
    },
  ];
};

export default Cards;
