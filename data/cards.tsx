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
        '/assets/gallery/2/10.jfif',
        '/assets/gallery/2/11.jfif',
        '/assets/gallery/2/12.jfif',
        '/assets/gallery/2/13.jfif',
        '/assets/gallery/2/14.jfif',
        '/assets/gallery/2/15.jfif',
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
        '/assets/gallery/3/3.jfif',
        '/assets/gallery/3/4.jfif',
        '/assets/gallery/3/5.jfif',
        '/assets/gallery/3/6.jfif',
        '/assets/gallery/3/7.jfif',
        '/assets/gallery/3/8.jfif',
        '/assets/gallery/3/9.jfif',
        '/assets/gallery/3/10.jfif',
        '/assets/gallery/3/11.jfif',
        '/assets/gallery/3/12.jfif',
        '/assets/gallery/3/13.jfif',
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
      img: '/assets/headers/4.jpg',
      header: '/assets/headers/4.jpg',
      headerType: 'img',
      moreDetails: {
        header: t('details.MANGROVES_RESERVE.header'),
        descriptions: t.raw('details.MANGROVES_RESERVE.descriptions'),
        secondHeader: t('details.MANGROVES_RESERVE.attractionsHeader'),
        moreInfo: t.raw('details.MANGROVES_RESERVE.attractions'),
      },
      gallery: [
        '/assets/gallery/4/1.jpg',
        '/assets/gallery/4/2.jpg',
        '/assets/gallery/4/3.jpg',
        '/assets/gallery/4/4.jpg',
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
      img: '/assets/headers/5.jpeg',
      header: '/assets/headers/5.jpeg',
      headerType: 'img',
      moreDetails: {
        header: t('details.FISHING_IN_DOHA.header'),
        descriptions: t.raw('details.FISHING_IN_DOHA.descriptions'),
        secondHeader: t('details.FISHING_IN_DOHA.attractionsHeader'),
        moreInfo: t.raw('details.FISHING_IN_DOHA.attractions'),
      },
      gallery: [
        '/assets/gallery/5/1.jpeg',
        '/assets/gallery/5/2.jpeg',
        '/assets/gallery/5/3.jpeg',
        '/assets/gallery/5/4.jpeg',
        '/assets/gallery/5/5.jpeg',
        '/assets/gallery/5/6.jpeg',
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
      title: t('headers.DESERT_SAFARI.title'),
      subTitle: t('headers.DESERT_SAFARI.subTitle'),
      url: 'DESERT_SAFARI',
      img: '/assets/headers/6.jpg',
      header: '/assets/headers/6.jpg',
      headerType: 'img',
      moreDetails: {
        header: t('details.DESERT_SAFARI.header'),
        descriptions: t.raw('details.DESERT_SAFARI.descriptions'),
        secondHeader: t('details.DESERT_SAFARI.attractionsHeader'),
        moreInfo: t.raw('details.DESERT_SAFARI.attractions'),
      },
      gallery: [
        '/assets/gallery/6/1.jpg',
        '/assets/gallery/6/2.jpg',
        '/assets/gallery/6/3.jpg',
        '/assets/gallery/6/4.jpg',
        '/assets/gallery/6/5.jpg',
        '/assets/gallery/6/6.jpg',
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
      title: t('headers.SAFARI_WITH_DINNER.title'),
      subTitle: t('headers.SAFARI_WITH_DINNER.subTitle'),
      url: 'SAFARI_WITH_DINNER',
      img: '/assets/headers/7.jpg',
      header: '/assets/headers/7.jpg',
      headerType: 'img',
      moreDetails: {
        header: t('details.SAFARI_WITH_DINNER.header'),
        descriptions: t.raw('details.SAFARI_WITH_DINNER.descriptions'),
        // secondHeader: t('details.SAFARI_WITH_DINNER.attractionsHeader'),
        // moreInfo: t.raw('details.SAFARI_WITH_DINNER.attractions'),
      },
      gallery: [
        '/assets/gallery/7/1.jpg',
        '/assets/gallery/7/2.jpeg',
        '/assets/gallery/7/3.jpeg',
        '/assets/gallery/7/4.jpeg',
        '/assets/gallery/7/5.jpg',
        '/assets/gallery/7/6.jpg',
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
      title: t('headers.YACHT_CHARTER_IN_QATAR.title'),
      subTitle: t('headers.YACHT_CHARTER_IN_QATAR.subTitle'),
      url: 'YACHT_CHARTER_IN_QATAR',
      img: '/assets/headers/8.jpg',
      header: '/assets/headers/8.jpg',
      headerType: 'img',
      moreDetails: {
        header: t('details.YACHT_CHARTER_IN_QATAR.header'),
        descriptions: t.raw('details.YACHT_CHARTER_IN_QATAR.descriptions'),
      },
      gallery: [
        '/assets/gallery/8/1.jpeg',
        '/assets/gallery/8/2.jpeg',
        '/assets/gallery/8/3.jpeg',
        '/assets/gallery/8/4.jpeg',
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
      title: t('headers.HELICOPTER_FLIGHT.title'),
      subTitle: t('headers.HELICOPTER_FLIGHT.subTitle'),
      url: 'HELICOPTER_FLIGHT',
      img: '/assets/headers/9.jpg',
      header: '/assets/headers/9.jpg',
      headerType: 'img',
      moreDetails: {
        header: t('details.HELICOPTER_FLIGHT.header'),
        descriptions: t.raw('details.HELICOPTER_FLIGHT.descriptions'),
        // secondHeader: t('details.HELICOPTER_FLIGHT.attractionsHeader'),
        // moreInfo: t.raw('details.HELICOPTER_FLIGHT.attractions'),
      },
      gallery: [
        '/assets/gallery/9/1.jpg',
        '/assets/gallery/9/2.jpg',
        '/assets/gallery/9/3.jpg',
        '/assets/gallery/9/4.jpg',
        '/assets/gallery/9/5.jpeg',
        '/assets/gallery/9/6.jpg',
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
      title: t('headers.QUEST_THEME_PARK.title'),
      subTitle: t('headers.QUEST_THEME_PARK.subTitle'),
      url: 'QUEST_THEME_PARK',
      img: '/assets/headers/10.jpg',
      header: '/assets/headers/10.jpg',
      headerType: 'img',
      moreDetails: {
        header: t('details.QUEST_THEME_PARK.header'),
        descriptions: t.raw('details.QUEST_THEME_PARK.descriptions'),
        // secondHeader: t('details.QUEST_THEME_PARK.attractionsHeader'),
        // moreInfo: t.raw('details.QUEST_THEME_PARK.attractions'),
      },
      gallery: [
        '/assets/gallery/10/1.jpg',
        '/assets/gallery/10/2.jpg',
        '/assets/gallery/10/3.jpg',
        '/assets/gallery/10/4.jpg',
        '/assets/gallery/10/5.jpg',
        '/assets/gallery/10/6.jpg',
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
      title: t('headers.MERYAL_AQUAPARK.title'),
      subTitle: t('headers.MERYAL_AQUAPARK.subTitle'),
      url: 'MERYAL_AQUAPARK',
      img: '/assets/headers/11.jpg',
      header: '/assets/headers/11.jpg',
      headerType: 'img',
      moreDetails: {
        header: t('details.MERYAL_AQUAPARK.header'),
        descriptions: t.raw('details.MERYAL_AQUAPARK.descriptions'),
        // secondHeader: t('details.MERYAL_AQUAPARK.attractionsHeader'),
        // moreInfo: t.raw('details.MERYAL_AQUAPARK.attractions'),
      },
      gallery: [
        '/assets/gallery/11/1.jpg',
        '/assets/gallery/11/2.jpg',
        '/assets/gallery/11/3.jpg',
        '/assets/gallery/11/4.jpg',
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
  ];
};

export default Cards;
