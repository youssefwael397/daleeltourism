import { CardItemType } from '@/app/[locale]/components/Home/CardItem';
import { useTranslations } from 'next-intl';

const Cards = (): CardItemType[] => {
  const t = useTranslations();

  return [
    {
      title: t('headers.capital_tour.title'),
      subTitle: t('headers.capital_tour.subTitle'),
      url: 'capital_tour',
      img: '/assets/headers/1.jpg',
      header: '/assets/headers/1.jpg',
      headerType: 'img',
      moreDetails: {
        header: t('details.capital_tour.header'),
        descriptions: t.raw('details.capital_tour.descriptions'),
        secondHeader: t('details.capital_tour.attractionsHeader'),
        moreInfo: t.raw('details.capital_tour.attractions'),
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
          {t.raw('prices.capital_tour.0.0')} <br />
          <strong>{t.raw('prices.capital_tour.0.1')}</strong> <br />
          {t.raw('prices.capital_tour.0.2')}
        </p>,
        <p key={2}>
          {t.raw('prices.capital_tour.1.0')}{' '}
          <span className="text-uppercase">
            {t.raw('prices.capital_tour.1.1')}
          </span>
        </p>,
        <ul key={3} className="plus-section-list">
          {t.raw('prices.capital_tour.2').map((info: string, index: number) => (
            <li key={index}>{info}</li>
          ))}
        </ul>,
      ],
    },
    {
      title: t('headers.safari_tour.title'),
      subTitle: t('headers.safari_tour.subTitle'),
      url: 'safari_tour',
      img: '/assets/headers/2.jpg',
      header: '/assets/headers/2.jpg',
      headerType: 'img',
      moreDetails: {
        header: t('details.safari_tour.header'),
        descriptions: t.raw('details.safari_tour.descriptions'),
        secondHeader: t('details.safari_tour.attractionsHeader'),
        moreInfo: t.raw('details.safari_tour.attractions'),
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
          {t.raw('prices.safari_tour.0.0')} <br />
          <strong>{t.raw('prices.safari_tour.0.1')}</strong> <br />
          {t.raw('prices.safari_tour.0.2')}
        </p>,
        <p key={2}>
          {t.raw('prices.safari_tour.1.0')}{' '}
          <span className="text-uppercase">
            {t.raw('prices.safari_tour.1.1')}
          </span>
        </p>,
        <ul key={3} className="plus-section-list">
          {t.raw('prices.safari_tour.2').map((info: string, index: number) => (
            <li key={index}>{info}</li>
          ))}
        </ul>,
      ],
    },
    {
      title: t('headers.secrets_and_history.title'),
      subTitle: t('headers.secrets_and_history.subTitle'),
      url: 'secrets_and_history',
      img: '/assets/headers/3.jpg',
      header: '/assets/headers/3.jpg',
      headerType: 'img',
      moreDetails: {
        header: t('details.secrets_and_history.header'),
        descriptions: t.raw('details.secrets_and_history.descriptions'),
        secondHeader: t('details.secrets_and_history.attractionsHeader'),
        moreInfo: t.raw('details.secrets_and_history.attractions'),
      },
      gallery: [
        '/assets/gallery/3/1.jfif',
        '/assets/gallery/3/2.jfif',
        '/assets/gallery/3/4.jfif',
        '/assets/gallery/3/5.jfif',
        '/assets/gallery/3/6.jfif',
        '/assets/gallery/3/7.jfif',
        '/assets/gallery/3/8.jfif',
        '/assets/gallery/3/9.jpg',
        '/assets/gallery/3/9.jfif',
        '/assets/gallery/3/10.jfif',
        '/assets/gallery/3/11.jfif',
        '/assets/gallery/3/14.jfif',
      ],
      prices: [
        <p key={1}>
          {t.raw('prices.secrets_and_history.0.0')} <br />
          <strong>{t.raw('prices.secrets_and_history.0.1')}</strong> <br />
          {t.raw('prices.secrets_and_history.0.2')}
        </p>,
        <p key={2}>
          {t.raw('prices.secrets_and_history.1.0')}{' '}
          <span className="text-uppercase">
            {t.raw('prices.secrets_and_history.1.1')}
          </span>
        </p>,
        <ul key={3} className="plus-section-list">
          {t
            .raw('prices.secrets_and_history.2')
            .map((info: string, index: number) => (
              <li key={index}>{info}</li>
            ))}
        </ul>,
      ],
    },
    {
      title: t('headers.countryside_trip.title'),
      subTitle: t('headers.countryside_trip.subTitle'),
      url: 'countryside_trip',
      img: '/assets/headers/4.jfif',
      header: '/assets/headers/4.jfif',
      headerType: 'img',
      moreDetails: {
        header: t('details.countryside_trip.header'),
        descriptions: t.raw('details.countryside_trip.descriptions'),
        secondHeader: t('details.countryside_trip.attractionsHeader'),
        moreInfo: t.raw('details.countryside_trip.attractions'),
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
      ],
      prices: [
        <p key={1}>
          {t.raw('prices.countryside_trip.0.0')} <br />
          <strong>{t.raw('prices.countryside_trip.0.1')}</strong> <br />
          {t.raw('prices.countryside_trip.0.2')}
        </p>,
        <p key={2}>
          {t.raw('prices.countryside_trip.1.0')}{' '}
          <span className="text-uppercase">
            {t.raw('prices.countryside_trip.1.1')}
          </span>
        </p>,
        <ul key={3} className="plus-section-list">
          {t
            .raw('prices.countryside_trip.2')
            .map((info: string, index: number) => (
              <li key={index}>{info}</li>
            ))}
        </ul>,
      ],
    },
    {
      title: t('headers.cars_photoshoot_in_qatar.title'),
      subTitle: t('headers.cars_photoshoot_in_qatar.subTitle'),
      url: 'cars_photoshoot_in_qatar',
      img: '/assets/headers/5.jfif',
      header: '/assets/headers/5.jfif',
      headerType: 'img',
      moreDetails: {
        header: t('details.cars_photoshoot_in_qatar.header'),
        descriptions: t.raw('details.cars_photoshoot_in_qatar.descriptions'),
        secondHeader: t('details.cars_photoshoot_in_qatar.attractionsHeader'),
        moreInfo: t.raw('details.cars_photoshoot_in_qatar.attractions'),
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
      pricesSectionTitles: t.raw('pricesTitles.cars_photoshoot_in_qatar'),
      prices: [
        <p key={1}>{t.raw('prices.cars_photoshoot_in_qatar.0.0')}</p>,
        <p key={2}>
          {t.raw('prices.cars_photoshoot_in_qatar.1.0')}{' '}
          <span className="text-uppercase">
            {t.raw('prices.cars_photoshoot_in_qatar.1.1')}
          </span>
        </p>,
        <ul key={3} className="plus-section-list">
          {t
            .raw('prices.cars_photoshoot_in_qatar.2')
            .map((info: string, index: number) => (
              <li key={index}>{info}</li>
            ))}
        </ul>,
      ],
    },
    {
      title: t('headers.qatar_nightlife_tour.title'),
      subTitle: t('headers.qatar_nightlife_tour.subTitle'),
      url: 'qatar_nightlife_tour',
      img: '/assets/headers/6.jfif',
      header: '/assets/headers/6.jfif',
      headerType: 'img',
      moreDetails: {
        header: t('details.qatar_nightlife_tour.header'),
        descriptions: t.raw('details.qatar_nightlife_tour.descriptions'),
        secondHeader: t('details.qatar_nightlife_tour.attractionsHeader'),
        moreInfo: t.raw('details.qatar_nightlife_tour.attractions'),
      },
      gallery: Array.from({ length: 36 }, (_, index) => index).map(
        (number) => `/assets/gallery/6/${number + 1}.jfif`
      ),
      prices: [
        <p key={1}>
          {t.raw('prices.qatar_nightlife_tour.0.0')} <br />
          <strong>{t.raw('prices.qatar_nightlife_tour.0.1')}</strong> <br />
          {t.raw('prices.qatar_nightlife_tour.0.2')}
        </p>,
        <p key={2}>
          {t.raw('prices.qatar_nightlife_tour.1.0')}{' '}
          <span className="text-uppercase">
            {t.raw('prices.qatar_nightlife_tour.1.1')}
          </span>
        </p>,
        <ul key={3} className="plus-section-list">
          {t
            .raw('prices.qatar_nightlife_tour.2')
            .map((info: string, index: number) => (
              <li key={index}>{info}</li>
            ))}
        </ul>,
      ],
    },
    {
      title: t('headers.fishing_tour_qatar.title'),
      subTitle: t('headers.fishing_tour_qatar.subTitle'),
      url: 'fishing_tour_qatar',
      img: '/assets/headers/7.jfif',
      header: '/assets/headers/7.jfif',
      headerType: 'img',
      moreDetails: {
        header: t('details.fishing_tour_qatar.header'),
        descriptions: t.raw('details.fishing_tour_qatar.descriptions'),
        // secondHeader: t('details.fishing_tour_qatar.attractionsHeader'),
        // moreInfo: t.raw('details.fishing_tour_qatar.attractions'),
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
          {t.raw('prices.fishing_tour_qatar.0.0')} <br />
          <strong>{t.raw('prices.fishing_tour_qatar.0.1')}</strong> <br />
          {t.raw('prices.fishing_tour_qatar.0.2')}
        </p>,
        <p key={2}>
          {t.raw('prices.fishing_tour_qatar.1.0')}{' '}
          <span className="text-uppercase">
            {t.raw('prices.fishing_tour_qatar.1.1')}
          </span>
        </p>,
        <ul key={3} className="plus-section-list">
          {t
            .raw('prices.fishing_tour_qatar.2')
            .map((info: string, index: number) => (
              <li key={index}>{info}</li>
            ))}
        </ul>,
      ],
    },
    {
      title: t('headers.qatar_museums_tour.title'),
      subTitle: t('headers.qatar_museums_tour.subTitle'),
      url: 'qatar_museums_tour',
      img: '/assets/headers/8.jfif',
      header: '/assets/headers/8.jfif',
      headerType: 'img',
      moreDetails: {
        header: t('details.qatar_museums_tour.header'),
        descriptions: t.raw('details.qatar_museums_tour.descriptions'),
      },
      gallery: [
        ...Array.from({ length: 26 }, (_, index) => index).map(
          (number) => `/assets/gallery/8/${number + 1}.jfif`
        ),
        '/assets/gallery/8/27.jpg',
        '/assets/gallery/8/28.jpg',
      ],
      prices: [
        <p key={1}>
          {t.raw('prices.qatar_museums_tour.0.0')} <br />
          <strong>{t.raw('prices.qatar_museums_tour.0.1')}</strong> <br />
          {t.raw('prices.qatar_museums_tour.0.2')}
        </p>,
        <p key={2}>
          {t.raw('prices.qatar_museums_tour.1.0')}{' '}
          <span className="text-uppercase">
            {t.raw('prices.qatar_museums_tour.1.1')}
          </span>
        </p>,
        <ul key={3} className="plus-section-list">
          {t
            .raw('prices.qatar_museums_tour.2')
            .map((info: string, index: number) => (
              <li key={index}>{info}</li>
            ))}
        </ul>,
      ],
    },
    {
      title: t('headers.islands_tour_qatar.title'),
      subTitle: t('headers.islands_tour_qatar.subTitle'),
      url: 'islands_tour_qatar',
      img: '/assets/headers/9.jfif',
      header: '/assets/headers/9.jfif',
      headerType: 'img',
      moreDetails: {
        header: t('details.islands_tour_qatar.header'),
        descriptions: t.raw('details.islands_tour_qatar.descriptions'),
        // secondHeader: t('details.islands_tour_qatar.attractionsHeader'),
        // moreInfo: t.raw('details.islands_tour_qatar.attractions'),
      },
      gallery: Array.from({ length: 44 }, (_, index) => index).map(
        (number) => `/assets/gallery/9/${number + 1}.jfif`
      ),
      prices: [
        <p key={1}>
          {t.raw('prices.islands_tour_qatar.0.0')} <br />
          <strong>{t.raw('prices.islands_tour_qatar.0.1')}</strong> <br />
          {t.raw('prices.islands_tour_qatar.0.2')}
        </p>,
        <p key={2}>
          {t.raw('prices.islands_tour_qatar.1.0')}{' '}
          <span className="text-uppercase">
            {t.raw('prices.islands_tour_qatar.1.1')}
          </span>
        </p>,
        <ul key={3} className="plus-section-list">
          {t
            .raw('prices.islands_tour_qatar.2')
            .map((info: string, index: number) => (
              <li key={index}>{info}</li>
            ))}
        </ul>,
      ],
    },
  ];
};

export default Cards;
