import { CardItemType } from '@/app/[locale]/components/Home/CardItem';
import { useTranslations } from 'next-intl';

const Cards = (): CardItemType[] => {
  const t = useTranslations();

  return [
    {
      title: t('headers.DOHA_TOUR.title'),
      subTitle: t('headers.DOHA_TOUR.subTitle'),
      url: 'DOHA_TOUR',
      img: '/assets/covers/1.jpeg',
      header: '/assets/headers/1.jpg',
      headerType: 'img',
      moreDetails: {
        header: t('details.DOHA_TOUR.header'),
        descriptions: [
          t('details.DOHA_TOUR.description1'),
          t('details.DOHA_TOUR.description2'),
          t('details.DOHA_TOUR.description3'),
          t('details.DOHA_TOUR.description4'),
          t('details.DOHA_TOUR.description5'),
        ],
        secondHeader: t('details.DOHA_TOUR.attractionsHeader'),
        moreInfo: [
          {
            title: t('details.DOHA_TOUR.attractions.bazaar.title'),
            description: t('details.DOHA_TOUR.attractions.bazaar.description'),
          },
          {
            title: t('details.DOHA_TOUR.attractions.katara.title'),
            description: t('details.DOHA_TOUR.attractions.katara.description'),
          },
          {
            title: t('details.DOHA_TOUR.attractions.pearl.title'),
            description: t('details.DOHA_TOUR.attractions.pearl.description'),
          },
          {
            title: t('details.DOHA_TOUR.attractions.future_city.title'),
            description: t(
              'details.DOHA_TOUR.attractions.future_city.description'
            ),
          },
          {
            title: t('details.DOHA_TOUR.attractions.waqif.title'),
            description: t('details.DOHA_TOUR.attractions.waqif.description'),
          },
          {
            title: t('details.DOHA_TOUR.attractions.art_gallery.title'),
            description: t(
              'details.DOHA_TOUR.attractions.art_gallery.description'
            ),
          },
        ],
      },
      gallery: [
        {
          src: '/assets/gallery/1/1.heic',
          title: t('gallery.DOHA_TOUR.1'),
        },
        {
          src: '/assets/gallery/1/2.heic',
          title: t('gallery.DOHA_TOUR.2'),
        },
        {
          src: '/assets/gallery/1/3.jpg',
          title: t('gallery.DOHA_TOUR.3'),
        },
        {
          src: '/assets/gallery/1/4.jpg',
          title: t('gallery.DOHA_TOUR.4'),
        },
        {
          src: '/assets/gallery/1/5.jpg',
          title: t('gallery.DOHA_TOUR.5'),
        },
        {
          src: '/assets/gallery/1/6.jpeg',
          title: t('gallery.DOHA_TOUR.6'),
        },
      ],
      prices: [
        <div key={1}>
          <div className="d-flex align-items-baseline justify-content-center">
            <div className="icon">
              <i aria-hidden="true" className="fas fa-bus"></i>
            </div>
            <div className="title">{t('prices.DOHA_TOUR.groupTour.title')}</div>
          </div>
          <p>{t('prices.DOHA_TOUR.groupTour.schedule')}</p>
          <p>
            {t('prices.DOHA_TOUR.groupTour.adultPrice')} <br />
            {t('prices.DOHA_TOUR.groupTour.childPrice')}
          </p>
        </div>,
        <div key={2}>
          <div className="d-flex align-items-baseline justify-content-center">
            <div className="icon">
              <i aria-hidden="true" className="fas fa-car-side"></i>
            </div>
            <div className="title">
              {t('prices.DOHA_TOUR.individualTour.title')}
            </div>
          </div>
          <p>{t('prices.DOHA_TOUR.individualTour.schedule')}</p>
          <p>
            {t('prices.DOHA_TOUR.individualTour.groupSize')}
            <br /> {t('prices.DOHA_TOUR.individualTour.price')}
          </p>
        </div>,
        <div key={3}>
          <div className="d-flex align-items-baseline justify-content-center">
            <div className="icon">
              <i aria-hidden="true" className="fas fa-user-tie"></i>
            </div>
            <div className="title">{t('prices.DOHA_TOUR.russianGuide')}</div>
          </div>
        </div>,
      ],
    },
    {
      title: t('headers.DOHA_TOUR_MUSEUM.title'),
      subTitle: t('headers.DOHA_TOUR_MUSEUM.subTitle'),
      url: 'DOHA_TOUR_MUSEUM',
      img: '/assets/covers/2.jpeg',
      header: '/assets/headers/2.jpg',
      headerType: 'img',
      moreDetails: {
        header: t('details.DOHA_TOUR_MUSEUM.header'),
        descriptions: [
          t('details.DOHA_TOUR_MUSEUM.description1'),
          t('details.DOHA_TOUR_MUSEUM.description2'),
          t('details.DOHA_TOUR_MUSEUM.description3'),
          t('details.DOHA_TOUR_MUSEUM.description4'),
          t('details.DOHA_TOUR_MUSEUM.description5'),
        ],
        secondHeader: 'Attractions',
        moreInfo: [
          {
            title: t('details.DOHA_TOUR_MUSEUM.attractions.katara.title'),
            description: t(
              'details.DOHA_TOUR_MUSEUM.attractions.katara.description'
            ),
          },
          {
            title: t('details.DOHA_TOUR_MUSEUM.attractions.bazaar.title'),
            description: t(
              'details.DOHA_TOUR_MUSEUM.attractions.bazaar.description'
            ),
          },
          {
            title: t(
              'details.DOHA_TOUR_MUSEUM.attractions.National_Museum.title'
            ),
            description: t(
              'details.DOHA_TOUR_MUSEUM.attractions.National_Museum.description'
            ),
          },
          {
            title: t('details.DOHA_TOUR_MUSEUM.attractions.Arabian_Boat.title'),
            description: t(
              'details.DOHA_TOUR_MUSEUM.attractions.Arabian_Boat.description'
            ),
          },
        ],
      },
      gallery: [
        {
          src: '/assets/gallery/2/1.jpg',
          title: t('gallery.DOHA_TOUR_MUSEUM.1'),
        },
        {
          src: '/assets/gallery/2/2.jpg',
          title: t('gallery.DOHA_TOUR_MUSEUM.2'),
        },
        {
          src: '/assets/gallery/2/3.jpg',
          title: t('gallery.DOHA_TOUR_MUSEUM.3'),
        },
        {
          src: '/assets/gallery/2/4.jpg',
          title: t('gallery.DOHA_TOUR_MUSEUM.4'),
        },
        {
          src: '/assets/gallery/2/5.jpg',
          title: t('gallery.DOHA_TOUR_MUSEUM.5'),
        },
        {
          src: '/assets/gallery/2/6.jpg',
          title: t('gallery.DOHA_TOUR_MUSEUM.6'),
        },
      ],
      prices: [
        <div key={1}>
          <div className="d-flex align-items-baseline justify-content-center">
            <div className="icon">
              <i aria-hidden="true" className="fas fa-bus"></i>
            </div>
            <div className="title">
              {t('prices.DOHA_TOUR_MUSEUM.groupTour.title')}
            </div>
          </div>
          <p>{t('prices.DOHA_TOUR_MUSEUM.groupTour.schedule')}</p>
          <p>
            {t('prices.DOHA_TOUR_MUSEUM.groupTour.adultPrice')}
            <br />
            {t('prices.DOHA_TOUR_MUSEUM.groupTour.childPrice')}
          </p>
        </div>,
        <div key={2}>
          <div className="d-flex align-items-baseline justify-content-center">
            <div className="icon">
              <i aria-hidden="true" className="fas fa-car-side"></i>
            </div>
            <div className="title">
              {t('prices.DOHA_TOUR_MUSEUM.individualTour.title')}
            </div>
          </div>
          <p>{t('prices.DOHA_TOUR_MUSEUM.individualTour.schedule')}</p>
          <p>
            {t('prices.DOHA_TOUR_MUSEUM.individualTour.groupSize')}
            <br /> {t('prices.DOHA_TOUR_MUSEUM.individualTour.price')}
            <br /> {t('prices.DOHA_TOUR_MUSEUM.individualTour.oneMorePrice')}
          </p>
        </div>,
        <div key={3}>
          <div className="d-flex align-items-baseline justify-content-center">
            <div className="icon">
              <i aria-hidden="true" className="fas fa-user-tie"></i>
            </div>
            <div className="title">
              {t('prices.DOHA_TOUR_MUSEUM.russianGuide')}
            </div>
          </div>
        </div>,
      ],
    },
    {
      title: t('headers.NORTHWEST_OF_QATAR.title'),
      subTitle: t('headers.NORTHWEST_OF_QATAR.subTitle'),
      url: 'NORTHWEST_OF_QATAR',
      img: '/assets/covers/3.jpg',
      header: '/assets/headers/3.jpg',
      headerType: 'img',
      moreDetails: {
        header: t('details.NORTHWEST_OF_QATAR.header'),
        descriptions: [
          t('details.NORTHWEST_OF_QATAR.description1'),
          t('details.NORTHWEST_OF_QATAR.description2'),
          t('details.NORTHWEST_OF_QATAR.description3'),
          t('details.NORTHWEST_OF_QATAR.description4'),
        ],
        secondHeader: t('details.NORTHWEST_OF_QATAR.attractionsHeader'),
        moreInfo: [
          {
            title: t(
              'details.NORTHWEST_OF_QATAR.attractions.camel_racing.title'
            ),
            description: t(
              'details.NORTHWEST_OF_QATAR.attractions.camel_racing.description'
            ),
          },
          {
            title: t(
              'details.NORTHWEST_OF_QATAR.attractions.Sheikh_Faisal_Museum.title'
            ),
            description: t(
              'details.NORTHWEST_OF_QATAR.attractions.Sheikh_Faisal_Museum.description'
            ),
          },
          {
            title: t(
              'details.NORTHWEST_OF_QATAR.attractions.Student_town.title'
            ),
            description: t(
              'details.NORTHWEST_OF_QATAR.attractions.Student_town.description'
            ),
          },
          {
            title: t(
              'details.NORTHWEST_OF_QATAR.attractions.Doha_Mosque.title'
            ),
            description: t(
              'details.NORTHWEST_OF_QATAR.attractions.Doha_Mosque.description'
            ),
          },
        ],
      },
      gallery: [
        {
          src: '/assets/gallery/3/1.jpg',
          title: t('gallery.NORTHWEST_OF_QATAR.1'),
        },
        {
          src: '/assets/gallery/3/2.jpg',
          title: t('gallery.NORTHWEST_OF_QATAR.2'),
        },
        {
          src: '/assets/gallery/3/3.jpg',
          title: t('gallery.NORTHWEST_OF_QATAR.3'),
        },
        {
          src: '/assets/gallery/3/4.jpg',
          title: t('gallery.NORTHWEST_OF_QATAR.4'),
        },
        {
          src: '/assets/gallery/3/5.jpg',
          title: t('gallery.NORTHWEST_OF_QATAR.5'),
        },
        {
          src: '/assets/gallery/3/6.jpg',
          title: t('gallery.NORTHWEST_OF_QATAR.6'),
        },
      ],
      prices: [
        <div key={1}>
          <div className="d-flex align-items-baseline justify-content-center">
            <div className="icon">
              <i aria-hidden="true" className="fas fa-car-side"></i>
            </div>
            <div className="title">
              {t('prices.NORTHWEST_OF_QATAR.Individual_excursion.title')}
            </div>
          </div>
          <p>{t('prices.NORTHWEST_OF_QATAR.Individual_excursion.schedule')}</p>
          <p>
            {t('prices.NORTHWEST_OF_QATAR.Individual_excursion.groupSize')}
            <br />{' '}
            {t('prices.NORTHWEST_OF_QATAR.Individual_excursion.adultPrice')}
            <br />{' '}
            {t('prices.NORTHWEST_OF_QATAR.Individual_excursion.oneMorePrice')}
          </p>
        </div>,
        <div key={2}>
          <div className="d-flex align-items-baseline justify-content-center">
            <div className="icon">
              <i aria-hidden="true" className="fas fa-user-tie"></i>
            </div>
            <div className="title">
              {t('prices.NORTHWEST_OF_QATAR.russianGuide')}
            </div>
          </div>
        </div>,
      ],
    },
    {
      title: t('headers.MANGROVES_RESERVE.title'),
      subTitle: t('headers.MANGROVES_RESERVE.subTitle'),
      url: 'MANGROVES_RESERVE',
      img: '/assets/covers/4.jpg',
      header: '/assets/headers/4.jpg',
      headerType: 'img',
      moreDetails: {
        header: t('details.MANGROVES_RESERVE.header'),
        descriptions: [t('details.MANGROVES_RESERVE.description1')],
        secondHeader: t('details.MANGROVES_RESERVE.secondHeader'),
        moreInfo: [
          {
            title: t('details.MANGROVES_RESERVE.routes.hotel.title'),
            description: t(
              'details.MANGROVES_RESERVE.routes.hotel.description'
            ),
          },
          {
            title: t('details.MANGROVES_RESERVE.routes.trip.title'),
            description: t('details.MANGROVES_RESERVE.routes.trip.description'),
          },
          {
            title: t('details.MANGROVES_RESERVE.routes.Kayaking_trip.title'),
            description: t(
              'details.MANGROVES_RESERVE.routes.Kayaking_trip.description'
            ),
          },
          {
            title: t('details.MANGROVES_RESERVE.routes.Dinner.title'),
            description: t(
              'details.MANGROVES_RESERVE.routes.Dinner.description'
            ),
          },
          {
            title: t('details.MANGROVES_RESERVE.routes.transfer.title'),
            description: t(
              'details.MANGROVES_RESERVE.routes.transfer.description'
            ),
          },
        ],
      },
      gallery: [
        {
          src: '/assets/gallery/4/1.jpg',
          title: t('gallery.MANGROVES_RESERVE.1'),
        },
        {
          src: '/assets/gallery/4/2.jpg',
          title: t('gallery.MANGROVES_RESERVE.2'),
        },
        {
          src: '/assets/gallery/4/3.webp',
          title: t('gallery.MANGROVES_RESERVE.3'),
        },
        {
          src: '/assets/gallery/4/4.jpg',
          title: t('gallery.MANGROVES_RESERVE.4'),
        },
        {
          src: '/assets/gallery/4/5.jpeg',
          title: t('gallery.MANGROVES_RESERVE.5'),
        },
        {
          src: '/assets/gallery/4/6.jpg',
          title: t('gallery.MANGROVES_RESERVE.6'),
        },
      ],
      prices: [
        <div key={1}>
          <div className="d-flex align-items-baseline justify-content-center">
            <div className="icon">
              <i aria-hidden="true" className="fas fa-bus"></i>
            </div>
            <div className="title">
              {t('prices.MANGROVES_RESERVE.groupTour.title')}
            </div>
          </div>
          <p>{t('prices.MANGROVES_RESERVE.groupTour.schedule')}</p>
          <p>
            {t('prices.MANGROVES_RESERVE.groupTour.adultPrice')}
            <br /> {t('prices.MANGROVES_RESERVE.groupTour.childPrice')}
          </p>
        </div>,
        <div key={2}>
          <div className="d-flex align-items-baseline justify-content-center">
            <div className="icon">
              <i aria-hidden="true" className="fas fa-car-side"></i>
            </div>
            <div className="title">
              {t('prices.MANGROVES_RESERVE.individualTour.title')}
            </div>
          </div>
          <p>{t('prices.MANGROVES_RESERVE.individualTour.groupSize')}</p>
          <p>
            {t('prices.MANGROVES_RESERVE.individualTour.price')}
            <br /> {t('prices.MANGROVES_RESERVE.individualTour.trip')}
          </p>
        </div>,
        <div key={3}>
          <div className="d-flex align-items-baseline justify-content-center">
            <div className="icon">
              <i aria-hidden="true" className="fas fa-anchor"></i>
            </div>
            <div className="title">
              {t('prices.MANGROVES_RESERVE.Kayaking')}
            </div>
          </div>
        </div>,
        <div key={4}>
          <div className="d-flex align-items-baseline justify-content-center">
            <div className="icon">
              <i aria-hidden="true" className="fas fa-concierge-bell"></i>
            </div>
            <div className="title">{t('prices.MANGROVES_RESERVE.Dinner')}</div>
          </div>
        </div>,
      ],
    },
    {
      title: t('headers.FISHING_IN_DOHA.title'),
      subTitle: t('headers.FISHING_IN_DOHA.subTitle'),
      url: 'FISHING_IN_DOHA',
      img: '/assets/covers/5.jpeg',
      header: '/assets/headers/5.jpeg',
      headerType: 'img',
      moreDetails: {
        header: t('details.FISHING_IN_DOHA.header'),
        descriptions: [
          t('details.FISHING_IN_DOHA.description1'),
          t('details.FISHING_IN_DOHA.description2'),
          t('details.FISHING_IN_DOHA.description3'),
        ],
        secondHeader: t('details.FISHING_IN_DOHA.attractionsHeader'),
        moreInfo: [
          {
            title: t('details.FISHING_IN_DOHA.attractions.transfer.title'),
            description: t(
              'details.FISHING_IN_DOHA.attractions.transfer.description'
            ),
          },
          {
            title: t('details.FISHING_IN_DOHA.attractions.boat.title'),
            description: t(
              'details.FISHING_IN_DOHA.attractions.boat.description'
            ),
          },
          {
            title: t('details.FISHING_IN_DOHA.attractions.equipment.title'),
            description: t(
              'details.FISHING_IN_DOHA.attractions.equipment.description'
            ),
          },
          {
            title: t('details.FISHING_IN_DOHA.attractions.fishing.title'),
            description: t(
              'details.FISHING_IN_DOHA.attractions.fishing.description'
            ),
          },
          {
            title: t('details.FISHING_IN_DOHA.attractions.maxPeople.title'),
            description: t(
              'details.FISHING_IN_DOHA.attractions.maxPeople.description'
            ),
          },
        ],
      },
      gallery: [
        {
          src: '/assets/gallery/5/1.jpeg',
          title: t('gallery.FISHING_IN_DOHA.1'),
        },
        {
          src: '/assets/gallery/5/2.jpeg',
          title: t('gallery.FISHING_IN_DOHA.2'),
        },
        {
          src: '/assets/gallery/5/3.jpeg',
          title: t('gallery.FISHING_IN_DOHA.3'),
        },
        {
          src: '/assets/gallery/5/4.jpeg',
          title: t('gallery.FISHING_IN_DOHA.4'),
        },
        {
          src: '/assets/gallery/5/5.jpeg',
          title: t('gallery.FISHING_IN_DOHA.5'),
        },
        {
          src: '/assets/gallery/5/6.jpeg',
          title: t('gallery.FISHING_IN_DOHA.6'),
        },
      ],
      prices: [
        <div key={1}>
          <div className="d-flex align-items-start justify-content-center">
            <div className="icon">$</div>
            <div className="title fs-2">
              {t('prices.FISHING_IN_DOHA.groupTour.price')}
            </div>
          </div>
          <p>{t('prices.FISHING_IN_DOHA.groupTour.description')}</p>
          <div className="d-flex align-items-start justify-content-center">
            <div className="icon">
              <i aria-hidden="true" className="fas fa-users"></i>
            </div>
            <div className="title">
              {t('prices.FISHING_IN_DOHA.groupTour.groupSize')}
            </div>
          </div>
        </div>,
        <div key={2}>
          <div className="d-flex align-items-start justify-content-center">
            <div className="icon">
              <i aria-hidden="true" className="fas fa-user-tie"></i>
            </div>
            <div className="title">
              {t('prices.FISHING_IN_DOHA.individualTour.title')}
            </div>
          </div>
        </div>,
        <div key={3}>
          <div className="d-flex align-items-baseline justify-content-center">
            <div className="icon">
              <i aria-hidden="true" className="fas fa-fish"></i>
            </div>
            <div className="title">
              {t('prices.FISHING_IN_DOHA.russianGuide')}
            </div>
          </div>
        </div>,
      ],
    },
    {
      title: t('headers.DESERT_SAFARI.title'),
      subTitle: t('headers.DESERT_SAFARI.subTitle'),
      url: 'DESERT_SAFARI',
      img: '/assets/covers/6.jpg',
      header: '/assets/headers/6.jpg',
      headerType: 'img',
      moreDetails: {
        header: t('details.DESERT_SAFARI.header'),
        descriptions: [
          t('details.DESERT_SAFARI.description1'),
          t('details.DESERT_SAFARI.description2'),
          t('details.DESERT_SAFARI.description3'),
        ],
        secondHeader: t('details.DESERT_SAFARI.attractionsHeader'),
        moreInfo: [
          {
            title: t('details.DESERT_SAFARI.attractions.jeepRiding.title'),
            description: t(
              'details.DESERT_SAFARI.attractions.jeepRiding.description'
            ),
          },
          {
            title: t('details.DESERT_SAFARI.attractions.photoStop.title'),
            description: t(
              'details.DESERT_SAFARI.attractions.photoStop.description'
            ),
          },
          {
            title: t('details.DESERT_SAFARI.attractions.bayVisit.title'),
            description: t(
              'details.DESERT_SAFARI.attractions.bayVisit.description'
            ),
          },
        ],
      },
      gallery: [
        {
          src: '/assets/gallery/6/1.jpg',
          title: t('gallery.DESERT_SAFARI.1'),
        },
        {
          src: '/assets/gallery/6/2.jpg',
          title: t('gallery.DESERT_SAFARI.2'),
        },
        {
          src: '/assets/gallery/6/3.jpg',
          title: t('gallery.DESERT_SAFARI.3'),
        },
        {
          src: '/assets/gallery/6/4.jpg',
          title: t('gallery.DESERT_SAFARI.4'),
        },
        {
          src: '/assets/gallery/6/5.jpg',
          title: t('gallery.DESERT_SAFARI.5'),
        },
        {
          src: '/assets/gallery/6/6.jpg',
          title: t('gallery.DESERT_SAFARI.6'),
        },
      ],
      prices: [
        <div key={1}>
          <div className="d-flex align-items-baseline justify-content-center">
            <div className="icon">
              <i aria-hidden="true" className="fas fa-users"></i>
            </div>
            <div className="title">
              {t('prices.DESERT_SAFARI.groupSafari.title')}
            </div>
          </div>
          <p>{t('prices.DESERT_SAFARI.groupSafari.schedule')}</p>
          <p>
            {t('prices.DESERT_SAFARI.groupSafari.adultPrice')} <br />
            {t('prices.DESERT_SAFARI.groupSafari.childPrice')}
          </p>
        </div>,
        <div key={2}>
          <div className="d-flex align-items-baseline justify-content-center">
            <div className="icon">
              <i aria-hidden="true" className="fas fa-biking"></i>
            </div>
            <div className="title">
              {t('prices.DESERT_SAFARI.atvRide.title')}
            </div>
          </div>
          <p>{t('prices.DESERT_SAFARI.atvRide.duration')}</p>
          <p>
            {t('prices.DESERT_SAFARI.atvRide.atvPrice')} <br />
            {t('prices.DESERT_SAFARI.atvRide.buggyPrice')}
          </p>
        </div>,
        <div key={3}>
          <div className="d-flex align-items-baseline justify-content-center">
            <div className="icon">
              <i aria-hidden="true" className="fas fa-truck-monster"></i>
            </div>
            <div className="title">
              {t('prices.DESERT_SAFARI.individualSafari.title')}
            </div>
          </div>
          <p>{t('prices.DESERT_SAFARI.individualSafari.schedule')}</p>
          <p>{t('prices.DESERT_SAFARI.individualSafari.price')}</p>
        </div>,
      ],
    },
    {
      title: t('headers.SAFARI_WITH_DINNER.title'),
      subTitle: t('headers.SAFARI_WITH_DINNER.subTitle'),
      url: 'SAFARI_WITH_DINNER',
      img: '/assets/covers/7.jpeg',
      header: '/assets/headers/7.jpg',
      headerType: 'img',
      moreDetails: {
        header: t('details.SAFARI_WITH_DINNER.header'),
        descriptions: [
          t('details.SAFARI_WITH_DINNER.description1'),
          t('details.SAFARI_WITH_DINNER.description2'),
          t('details.SAFARI_WITH_DINNER.description3'),
          t('details.SAFARI_WITH_DINNER.description4'),
        ],
        secondHeader: t('details.SAFARI_WITH_DINNER.secondHeader'),
        moreInfo: [
          {
            title: t('moreInfo.SAFARI_WITH_DINNER.jeepRiding.title'),
            description: t(
              'moreInfo.SAFARI_WITH_DINNER.jeepRiding.description'
            ),
          },
          {
            title: t('moreInfo.SAFARI_WITH_DINNER.photoStop.title'),
            description: t('moreInfo.SAFARI_WITH_DINNER.photoStop.description'),
          },
          {
            title: t('moreInfo.SAFARI_WITH_DINNER.swimming.title'),
            description: t('moreInfo.SAFARI_WITH_DINNER.swimming.description'),
          },
          {
            title: t('moreInfo.SAFARI_WITH_DINNER.bbqDinner.title'),
            description: t('moreInfo.SAFARI_WITH_DINNER.bbqDinner.description'),
          },
        ],
      },
      gallery: [
        {
          src: '/assets/gallery/7/1.jpg',
          title: t('gallery.SAFARI_WITH_DINNER.1'),
        },
        {
          src: '/assets/gallery/7/2.jpeg',
          title: t('gallery.SAFARI_WITH_DINNER.2'),
        },
        {
          src: '/assets/gallery/7/3.jpeg',
          title: t('gallery.SAFARI_WITH_DINNER.3'),
        },
        {
          src: '/assets/gallery/7/4.jpeg',
          title: t('gallery.SAFARI_WITH_DINNER.4'),
        },
        {
          src: '/assets/gallery/7/5.jpg',
          title: t('gallery.SAFARI_WITH_DINNER.5'),
        },
        {
          src: '/assets/gallery/7/6.jpg',
          title: t('gallery.SAFARI_WITH_DINNER.6'),
        },
      ],
      prices: [
        <div key={1}>
          <div className="d-flex align-items-baseline justify-content-center">
            <div className="icon">
              <i aria-hidden="true" className="fas fa-truck-monster"></i>
            </div>
            <div className="title">
              {t('prices.SAFARI_WITH_DINNER.individual.title')}
            </div>
          </div>
          <p>{t('prices.SAFARI_WITH_DINNER.individual.description')}</p>
          <p>{t('prices.SAFARI_WITH_DINNER.individual.price')}</p>
        </div>,
        <div key={2}>
          <div className="d-flex align-items-baseline justify-content-center">
            <div className="icon">
              <i aria-hidden="true" className="fas fa-biking"></i>
            </div>
            <div className="title">
              {t('prices.SAFARI_WITH_DINNER.atv.title')}
            </div>
          </div>
          <p>{t('prices.SAFARI_WITH_DINNER.atv.description')}</p>
          <p>{t('prices.SAFARI_WITH_DINNER.atv.price')}</p>
        </div>,
      ],
    },
    {
      title: t('headers.YACHT_CHARTER_IN_QATAR.title'),
      subTitle: t('headers.YACHT_CHARTER_IN_QATAR.subTitle'),
      url: 'YACHT_CHARTER_IN_QATAR',
      img: '/assets/covers/8.jpg',
      header: '/assets/headers/8.jpg',
      headerType: 'img',
      moreDetails: {
        header: t('details.YACHT_CHARTER_IN_QATAR.header'),
        descriptions: [
          t('details.YACHT_CHARTER_IN_QATAR.description1'),
          t('details.YACHT_CHARTER_IN_QATAR.description2'),
          t('details.YACHT_CHARTER_IN_QATAR.description3'),
        ],
      },
      gallery: [
        {
          src: '/assets/gallery/8/1.jpeg',
          title: t('gallery.YACHT_CHARTER_IN_QATAR.1'),
        },
        {
          src: '/assets/gallery/8/2.jpeg',
          title: t('gallery.YACHT_CHARTER_IN_QATAR.2'),
        },
        {
          src: '/assets/gallery/8/3.jpeg',
          title: t('gallery.YACHT_CHARTER_IN_QATAR.3'),
        },
        {
          src: '/assets/gallery/8/4.jpeg',
          title: t('gallery.YACHT_CHARTER_IN_QATAR.4'),
        },
      ],
      prices: [
        <div key={1}>
          <div className="d-flex align-items-baseline justify-content-center">
            <div className="icon">
              <i aria-hidden="true" className="fas fa-ship"></i>
            </div>
            <div className="title">
              {t('prices.YACHT_CHARTER_IN_QATAR.boat12m.title')}
            </div>
          </div>
          <p>
            {t('prices.YACHT_CHARTER_IN_QATAR.boat12m.price')} <br />
            {t('prices.YACHT_CHARTER_IN_QATAR.boat12m.capacity')}
          </p>
        </div>,
        <div key={2}>
          <div className="d-flex align-items-baseline justify-content-center">
            <div className="icon">
              <i aria-hidden="true" className="fas fa-ship"></i>
            </div>
            <div className="title">
              {t('prices.YACHT_CHARTER_IN_QATAR.yacht20m.title')}
            </div>
          </div>
          <p>
            {t('prices.YACHT_CHARTER_IN_QATAR.yacht20m.price')} <br />
            {t('prices.YACHT_CHARTER_IN_QATAR.yacht20m.capacity')}
          </p>
        </div>,
        <div key={3}>
          <div className="d-flex align-items-baseline justify-content-center">
            <div className="icon">
              <i aria-hidden="true" className="fas fa-tint"></i>
            </div>
            <div className="title">
              {t('prices.YACHT_CHARTER_IN_QATAR.extras.title')}
            </div>
          </div>
        </div>,
      ],
    },
    {
      title: t('headers.HELICOPTER_FLIGHT.title'),
      subTitle: t('headers.HELICOPTER_FLIGHT.subTitle'),
      url: 'HELICOPTER_FLIGHT',
      img: '/assets/covers/9.jpg',
      header: '/assets/headers/9.jpg',
      headerType: 'img',
      moreDetails: {
        header: t('details.HELICOPTER_FLIGHT.header'),
        descriptions: [
          t('details.HELICOPTER_FLIGHT.description1'),
          t('details.HELICOPTER_FLIGHT.description2'),
          t('details.HELICOPTER_FLIGHT.description3'),
          t('details.HELICOPTER_FLIGHT.description4'),
        ],
        secondHeader: t('details.HELICOPTER_FLIGHT.secondHeader'),
        moreInfo: [
          {
            title: t('moreInfo.HELICOPTER_FLIGHT.kataraHeritageVillage.title'),
            description: t(
              'moreInfo.HELICOPTER_FLIGHT.kataraHeritageVillage.description'
            ),
          },
          {
            title: t('moreInfo.HELICOPTER_FLIGHT.pearlIsland.title'),
            description: t(
              'moreInfo.HELICOPTER_FLIGHT.pearlIsland.description'
            ),
          },
          {
            title: t('moreInfo.HELICOPTER_FLIGHT.zigzagTowers.title'),
            description: t(
              'moreInfo.HELICOPTER_FLIGHT.zigzagTowers.description'
            ),
          },
        ],
      },
      gallery: [
        {
          src: '/assets/gallery/9/1.jpg',
          title: t('gallery.HELICOPTER_FLIGHT.1'),
        },
        {
          src: '/assets/gallery/9/2.jpg',
          title: t('gallery.HELICOPTER_FLIGHT.2'),
        },
        {
          src: '/assets/gallery/9/3.jpg',
          title: t('gallery.HELICOPTER_FLIGHT.3'),
        },
        {
          src: '/assets/gallery/9/4.jpg',
          title: t('gallery.HELICOPTER_FLIGHT.4'),
        },
        {
          src: '/assets/gallery/9/5.jpeg',
          title: t('gallery.HELICOPTER_FLIGHT.5'),
        },
        {
          src: '/assets/gallery/9/6.jpg',
          title: t('gallery.HELICOPTER_FLIGHT.6'),
        },
      ],
      prices: [
        <div key={1}>
          <div className="d-flex align-items-baseline justify-content-center">
            <div className="icon">
              <i aria-hidden="true" className="fas fa-helicopter"></i>
            </div>
            <div className="title">
              {t('prices.HELICOPTER_FLIGHT.individualFlight.title')}
            </div>
          </div>
          <p>
            {t('prices.HELICOPTER_FLIGHT.individualFlight.description')} <br />
            {t('prices.HELICOPTER_FLIGHT.individualFlight.price')}
          </p>
        </div>,
        <div key={2}>
          <div className="d-flex align-items-baseline justify-content-center">
            <div className="icon">
              <i aria-hidden="true" className="fas fa-car"></i>
            </div>
            <div className="title">
              {t('prices.HELICOPTER_FLIGHT.individualTransfer.title')}
            </div>
          </div>
          <p>{t('prices.HELICOPTER_FLIGHT.individualTransfer.description')}</p>
        </div>,
      ],
    },
    {
      title: t('headers.QUEST_THEME_PARK.title'),
      subTitle: t('headers.QUEST_THEME_PARK.subTitle'),
      url: 'QUEST_THEME_PARK',
      img: '/assets/covers/10.jpg',
      header: '/assets/headers/10.jpg',
      headerType: 'img',
      moreDetails: {
        header: t('details.QUEST_THEME_PARK.header'),
        descriptions: [
          t('details.QUEST_THEME_PARK.description1'),
          t('details.QUEST_THEME_PARK.description2'),
          t('details.QUEST_THEME_PARK.description3'),
          t('details.QUEST_THEME_PARK.description4'),
        ],
        secondHeader: t('details.QUEST_THEME_PARK.secondHeader'),
        moreInfo: [
          {
            title: t('moreInfo.QUEST_THEME_PARK.extremeRides.title'),
            description: [
              t('moreInfo.QUEST_THEME_PARK.extremeRides.description.0'),
              t('moreInfo.QUEST_THEME_PARK.extremeRides.description.1'),
              t('moreInfo.QUEST_THEME_PARK.extremeRides.description.2'),
              t('moreInfo.QUEST_THEME_PARK.extremeRides.description.3'),
              t('moreInfo.QUEST_THEME_PARK.extremeRides.description.4'),
              t('moreInfo.QUEST_THEME_PARK.extremeRides.description.5'),
              t('moreInfo.QUEST_THEME_PARK.extremeRides.description.6'),
            ],
          },
          {
            title: t('moreInfo.QUEST_THEME_PARK.familyAttractions.title'),
            description: [
              t('moreInfo.QUEST_THEME_PARK.familyAttractions.description.0'),
              t('moreInfo.QUEST_THEME_PARK.familyAttractions.description.1'),
              t('moreInfo.QUEST_THEME_PARK.familyAttractions.description.2'),
              t('moreInfo.QUEST_THEME_PARK.familyAttractions.description.3'),
              t('moreInfo.QUEST_THEME_PARK.familyAttractions.description.4'),
              t('moreInfo.QUEST_THEME_PARK.familyAttractions.description.5'),
            ],
          },
          {
            title: t('moreInfo.QUEST_THEME_PARK.questsAndGames.title'),
            description: [
              t('moreInfo.QUEST_THEME_PARK.questsAndGames.description.0'),
              t('moreInfo.QUEST_THEME_PARK.questsAndGames.description.1'),
              t('moreInfo.QUEST_THEME_PARK.questsAndGames.description.2'),
              t('moreInfo.QUEST_THEME_PARK.questsAndGames.description.3'),
              t('moreInfo.QUEST_THEME_PARK.questsAndGames.description.4'),
            ],
          },
          {
            title: t('moreInfo.QUEST_THEME_PARK.3DAttractions.title'),
            description: [
              t('moreInfo.QUEST_THEME_PARK.3DAttractions.description.0'),
              t('moreInfo.QUEST_THEME_PARK.3DAttractions.description.1'),
            ],
          },
          {
            title: t('moreInfo.QUEST_THEME_PARK.interactiveAttractions.title'),
            description: [
              t(
                'moreInfo.QUEST_THEME_PARK.interactiveAttractions.description.0'
              ),
              t(
                'moreInfo.QUEST_THEME_PARK.interactiveAttractions.description.1'
              ),
              t(
                'moreInfo.QUEST_THEME_PARK.interactiveAttractions.description.2'
              ),
            ],
          },
        ],
      },
      gallery: [
        {
          src: '/assets/gallery/10/1.jpg',
          title: t('gallery.QUEST_THEME_PARK.1'),
        },
        {
          src: '/assets/gallery/10/2.jpg',
          title: t('gallery.QUEST_THEME_PARK.2'),
        },
        {
          src: '/assets/gallery/10/3.jpg',
          title: t('gallery.QUEST_THEME_PARK.3'),
        },
        {
          src: '/assets/gallery/10/4.jpg',
          title: t('gallery.QUEST_THEME_PARK.4'),
        },
        {
          src: '/assets/gallery/10/5.jpg',
          title: t('gallery.QUEST_THEME_PARK.5'),
        },
        {
          src: '/assets/gallery/10/6.jpg',
          title: t('gallery.QUEST_THEME_PARK.6'),
        },
      ],
      prices: [
        <div key={1}>
          <div className="d-flex align-items-baseline justify-content-center">
            <div className="icon">
              <i aria-hidden="true" className="fas fa-ticket-alt"></i>
            </div>
            <div className="title">
              {t('prices.QUEST_THEME_PARK.ticket.title')}
            </div>
          </div>
          <p>{t('prices.QUEST_THEME_PARK.ticket.description')}</p>
        </div>,
        <div key={2}>
          <div className="d-flex align-items-baseline justify-content-center">
            <div className="icon">
              <i aria-hidden="true" className="fas fa-bus"></i>
            </div>
            <div className="title">
              {t('prices.QUEST_THEME_PARK.ticketGroupTransfer.title')}
            </div>
          </div>
          <p>{t('prices.QUEST_THEME_PARK.ticketGroupTransfer.description')}</p>
        </div>,
      ],
    },
    {
      title: t('headers.MERYAL_AQUAPARK.title'),
      subTitle: t('headers.MERYAL_AQUAPARK.subTitle'),
      url: 'MERYAL_AQUAPARK',
      img: '/assets/covers/11.jpeg',
      header:
        'https://www.youtube.com/embed/BC7D3ek5qr4?autoplay=1&controls=0&rel=0&playsinline=1&enablejsapi=1&origin=https%3A%2F%2Fmyqatar.travel&widgetid=1',
      headerType: 'vid',
      moreDetails: {
        header: t('details.MERYAL_AQUAPARK.header'),
        descriptions: [
          t('details.MERYAL_AQUAPARK.description1'),
          t('details.MERYAL_AQUAPARK.description2'),
        ],
        secondHeader: t('details.MERYAL_AQUAPARK.secondHeader'),
        moreInfo: [
          {
            title: t('moreInfo.MERYAL_AQUAPARK.extremeRides.title'),
            description: [
              t('moreInfo.MERYAL_AQUAPARK.extremeRides.description.0'),
              t('moreInfo.MERYAL_AQUAPARK.extremeRides.description.1'),
              t('moreInfo.MERYAL_AQUAPARK.extremeRides.description.2'),
              t('moreInfo.MERYAL_AQUAPARK.extremeRides.description.3'),
              t('moreInfo.MERYAL_AQUAPARK.extremeRides.description.4'),
              t('moreInfo.MERYAL_AQUAPARK.extremeRides.description.5'),
              t('moreInfo.MERYAL_AQUAPARK.extremeRides.description.6'),
              t('moreInfo.MERYAL_AQUAPARK.extremeRides.description.7'),
              t('moreInfo.MERYAL_AQUAPARK.extremeRides.description.8'),
              t('moreInfo.MERYAL_AQUAPARK.extremeRides.description.9'),
              t('moreInfo.MERYAL_AQUAPARK.extremeRides.description.10'),
              t('moreInfo.MERYAL_AQUAPARK.extremeRides.description.11'),
              t('moreInfo.MERYAL_AQUAPARK.extremeRides.description.12'),
              t('moreInfo.MERYAL_AQUAPARK.extremeRides.description.13'),
              t('moreInfo.MERYAL_AQUAPARK.extremeRides.description.14'),
              t('moreInfo.MERYAL_AQUAPARK.extremeRides.description.15'),
              t('moreInfo.MERYAL_AQUAPARK.extremeRides.description.16'),
            ],
          },
          {
            title: t('moreInfo.MERYAL_AQUAPARK.familyAttractions.title'),
            description: [
              t('moreInfo.MERYAL_AQUAPARK.familyAttractions.description.0'),
              t('moreInfo.MERYAL_AQUAPARK.familyAttractions.description.1'),
              t('moreInfo.MERYAL_AQUAPARK.familyAttractions.description.2'),
              t('moreInfo.MERYAL_AQUAPARK.familyAttractions.description.3'),
              t('moreInfo.MERYAL_AQUAPARK.familyAttractions.description.4'),
              t('moreInfo.MERYAL_AQUAPARK.familyAttractions.description.5'),
            ],
          },
          {
            title: t('moreInfo.MERYAL_AQUAPARK.childrenAttractions.title'),
            description: [
              t('moreInfo.MERYAL_AQUAPARK.childrenAttractions.description.0'),
              t('moreInfo.MERYAL_AQUAPARK.childrenAttractions.description.1'),
              t('moreInfo.MERYAL_AQUAPARK.childrenAttractions.description.2'),
              t('moreInfo.MERYAL_AQUAPARK.childrenAttractions.description.3'),
              t('moreInfo.MERYAL_AQUAPARK.childrenAttractions.description.4'),
              t('moreInfo.MERYAL_AQUAPARK.childrenAttractions.description.5'),
              t('moreInfo.MERYAL_AQUAPARK.childrenAttractions.description.6'),
              t('moreInfo.MERYAL_AQUAPARK.childrenAttractions.description.7'),
            ],
          },
        ],
      },
      gallery: [
        {
          src: '/assets/gallery/11/1.jpg',
          title: t('gallery.MERYAL_AQUAPARK.1'),
        },
        {
          src: '/assets/gallery/11/2.jpg',
          title: t('gallery.MERYAL_AQUAPARK.2'),
        },
        {
          src: '/assets/gallery/11/3.jpg',
          title: t('gallery.MERYAL_AQUAPARK.3'),
        },
        {
          src: '/assets/gallery/11/4.jpg',
          title: t('gallery.MERYAL_AQUAPARK.4'),
        },
      ],
      prices: [
        <div key={1}>
          <div className="d-flex align-items-baseline justify-content-center">
            <div className="icon">
              <i aria-hidden="true" className="fas fa-ticket-alt"></i>
            </div>
            <div className="title">
              {t('prices.MERYAL_AQUAPARK.ticket.title')}
            </div>
          </div>
          <p>{t('prices.MERYAL_AQUAPARK.ticket.description')}</p>
        </div>,
      ],
    },
  ];
};

export default Cards;
