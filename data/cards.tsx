import { CardItemType } from '@/app/[lng]/components/Home/CardItem';
const cards: CardItemType[] = [
  {
    title: 'DOHA_TOUR',
    url: 'DOHA_TOUR',
    img: '/assets/covers/1.jpg',
    header: '/assets/headers/1.jpg',
    headerType: 'img',
    moreDetails: {
      header: 'Doha City Tour',
      descriptions: [
        `Explore Doha's unique heritage, storied history and modern achievements on a city tour in just 4 hours. We'll stroll through Souq Waqif, Dhow Harbour, visit the Qatar Heritage Village and head to The Pearl Island.`,
        `Our journey begins at Souq Waqif, Doha's oldest market. We'll stroll through a bustling maze of alleys where you'll get to know the city's trading heritage and traditions.`,
        `Our next stop is the Katara Cultural Village. This is the largest and most comprehensive cultural project in Qatar, which is famous for its beautiful theaters and concert halls, and its crown jewel is the Golden Masjid Mosque.`,
        `Next we will have a photo stop at the place where pearls used to be mined. Now “Pearl” is an artificial island with luxurious towers and villas, elite shops, hotels and exquisite restaurants.`,
      ],
      secondHeader: 'Attractions',
      moreInfo: [
        {
          title: 'Arab Bazaar',
          description:
            'Souq Waqif is a colorful attraction where you can truly touch the traditions and life of the local population. The local bazaar is filled with the smells of incense and spices, Arabic perfumes and hookah. Here you can see old men fingering their beads on benches, slowly strolling ladies wrapped in black abayas, sedate and well-groomed Arab men sitting in cafes, smoking hookah.',
        },
        {
          title: `Ethnic village "Katara"`,
          description: `The vast territory of the complex includes a magnificent drama theatre and an open amphitheater in the ancient Greek style, a luxurious Opera House, a planetarium, the glittering Golden and Blue Mosques, richly decorated with marvelous mosaics, as well as a multifunctional cinema, a congress hall, galleries and exhibition halls. The village is full of restaurants and cafes with authentic and international cuisine and shops offering to buy works by local artists.`,
        },
        {
          title: `Pearl Island`,
          description: `"The Pearl of Qatar" - "Arabian Riviera", which consists of: 
          Qanat Quartier - a Venice-inspired neighbourhood with colourful buildings, picturesque canals and bridges
          Porto Arabia - a Mediterranean corner with luxury yachts, restaurants and fashionable residential complexes
          Medina Centrale is a family-friendly area with gardens, playgrounds, and many cafes and shops`,
        },
      ],
    },
    gallery: [
      {
        src: '/assets/gallery/1/1.jpg',
        title: 'Ethnic village "Katara"',
      },
      {
        src: '/assets/gallery/1/2.jpg',
        title: 'Island "Pearl"',
      },
      {
        src: '/assets/gallery/1/3.jpg',
        title: 'Doha Corniche',
      },
      {
        src: '/assets/gallery/1/4.jpg',
        title: 'Museum of Islamic Art',
      },
      {
        src: '/assets/gallery/1/5.jpg',
        title: `Dow's Harbor`,
      },
      {
        src: '/assets/gallery/1/6.jpg',
        title: 'Arab Bazaar',
      },
    ],
    prices: [
      <div key={1}>
        <div className="d-flex align-items-baseline justify-content-center">
          <div className="icon">
            <i aria-hidden="true" className="fas fa-bus"></i>
          </div>
          <div className="title">Group Tour</div>
        </div>
        <p>(Every Mon, Wed, Sat)</p>
        <p>
          $60/adult <br /> $40/child (3-11 years)
        </p>
      </div>,
      <div key={2}>
        <div className="d-flex align-items-baseline justify-content-center">
          <div className="icon">
            <i aria-hidden="true" className="fas fa-car-side"></i>
          </div>
          <div className="title">Individual excursion</div>
        </div>
        <p>(Daily)</p>
        <p>
          1-6 people
          <br /> $500/ excursion
        </p>
      </div>,
      <div key={3}>
        <div className="d-flex align-items-baseline justify-content-center">
          <div className="icon">
            <i aria-hidden="true" className="fas fa-user-tie"></i>
          </div>
          <div className="title">Russian speaking guide</div>
        </div>
      </div>,
    ],
  },
  {
    title: 'DOHA_TOUR_MUSEUM',
    url: 'DOHA_TOUR_MUSEUM',
    img: '/assets/covers/2.jpg',
    header: '/assets/headers/2.jpg',
    headerType: 'img',
    moreDetails: {
      header: 'Doha City Tour with Visit to Qatar National Museum',
      descriptions: [
        `On a sightseeing tour of Doha, in just 4 hours, you will be able to get acquainted with the symbols of the capital of Qatar: from bazaars and camels to yachts and skyscrapers.`,
        `We will begin our acquaintance with the country's heritage in the ethnic village of "Katara". On its territory there is a modern marble amphitheater, the Blue and Golden Mosques.`,
        `Then, to immerse yourself in the oriental atmosphere of the city, you will go to the old market Souq Waqif. Here, in addition to the traditional spices of oriental markets, they sell live camels and Arabian horses, which you can even feed.`,
        `Then, to immerse yourself in the oriental atmosphere of the city, you will go to the old market Souq Waqif. Here, in addition to the traditional spices of oriental markets, they sell live camels and Arabian horses, which you can even feed.`,
        `We will visit the National Museum of Qatar to witness the country's past and present, and then take a short cruise on a traditional Dhow boat along the coastline.`,
      ],
      secondHeader: 'Attractions',
      moreInfo: [
        {
          title: 'Ethnic village "Katara"',
          description:
            'The vast territory of the complex includes a magnificent drama theatre and an open amphitheater in the ancient Greek style, a luxurious Opera House, a planetarium, the glittering Golden and Blue Mosques, richly decorated with marvelous mosaics, as well as a multifunctional cinema, a congress hall, galleries and exhibition halls. The village is full of restaurants and cafes with authentic and international cuisine and shops offering to buy works by local artists.',
        },
        {
          title: `Arab Bazaar`,
          description: `Souq Waqif is a colorful attraction where you can truly touch the traditions and life of the local population. The local bazaar is filled with the smells of incense and spices, Arabic perfumes and hookah. Here you can see old men fingering their beads on benches, slowly strolling ladies wrapped in black abayas, sedate and well-groomed Arab men sitting in cafes, smoking hookah.`,
        },
        {
          title: `National Museum of Qatar`,
          description: `The National Museum of Qatar looks like a chaotic composition of huge white disks, and is more reminiscent of a space station than an exhibition complex. But it is not only the appearance that is surprising. The story of the past and present of the country with the help of 3D technologies and new inventions is the main feature of the ultra-modern museum.`,
        },
        {
          title: 'Arabian Boat Cruise',
          description: `Admire stunning views of Doha's skyline with its futuristic skyscrapers as you glide across the sparkling sea on this cruise aboard an Arabian Dhow, a classic traditional wooden vessel.`,
        },
      ],
    },
    gallery: [
      {
        src: '/assets/gallery/2/1.jpg',
        title: 'Ethnic village "Katara"',
      },
      {
        src: '/assets/gallery/2/2.jpg',
        title: 'eating in the ethnographic village',
      },
      {
        src: '/assets/gallery/2/3.jpg',
        title: 'National Museum of Qatar',
      },
      {
        src: '/assets/gallery/2/4.jpg',
        title: 'Arabian Boat Cruise',
      },
      {
        src: '/assets/gallery/2/5.jpg',
        title: `Musherib District`,
      },
      {
        src: '/assets/gallery/2/6.jpg',
        title: 'Arab Bazaar',
      },
    ],
    prices: [
      <div key={1}>
        <div className="d-flex align-items-baseline justify-content-center">
          <div className="icon">
            <i aria-hidden="true" className="fas fa-bus"></i>
          </div>
          <div className="title">Group Tour</div>
        </div>
        <p>(Every Thursday)</p>
        <p>
          $85/adult
          <br /> $45/child (3-11 years)
        </p>
      </div>,
      <div key={2}>
        <div className="d-flex align-items-baseline justify-content-center">
          <div className="icon">
            <i aria-hidden="true" className="fas fa-car-side"></i>
          </div>
          <div className="title">Individual excursion</div>
        </div>
        <p>(Daily)</p>
        <p>
          1-6 people
          <br /> $500/ excursion
          <br /> +$20/person
        </p>
      </div>,
      <div key={3}>
        <div className="d-flex align-items-baseline justify-content-center">
          <div className="icon">
            <i aria-hidden="true" className="fas fa-user-tie"></i>
          </div>
          <div className="title">Russian speaking guide</div>
        </div>
      </div>,
    ],
  },
  {
    title: 'NORTHWEST_OF_QATAR',
    url: 'NORTHWEST_OF_QATAR',
    img: '/assets/covers/3.jpg',
    header: '/assets/headers/3.jpg',
    headerType: 'img',
    moreDetails: {
      header: 'Excursion to the North-West of Qatar',
      descriptions: [
        `We will head to the northwest of the country, where we will discover new, amazing sights of Qatar.`,
        `We will visit the municipal town of Shehaniya, 40 minutes drive from Doha. Camel racing takes place here from November to April, and in the remaining months of the year, camels are prepared and trained for this event.`,
        `We will then discover the unique exhibits of the Sheikh Faisal Museum, who became a collector at the age of 10 and collected countless exhibits from almost 4 continents.`,
        `And in the city of education we will be able to appreciate the unusual design of the mosque, which will leave a new and vivid idea of ​​these temples. The building stands on 5 pillars, which represent the 5 pillars of Islam. The mosque itself can accommodate up to 3,000 believers, and its entire interior is painted white.`,
      ],
      secondHeader: 'Attractions',
      moreInfo: [
        {
          title: 'Camel racing in Shehaniya',
          description:
            'Camel racing is an ancient sport that is currently actively developing in Qatar as a professional sport. The specially built camel racing track in Al Shehaniya, located 35 kilometers west of Doha, attracts numerous fans to the races every Friday during the winter season. The camels are controlled by unique robot jockeys.',
        },
        {
          title: `Sheikh Faisal Museum`,
          description: `This museum gives you the opportunity to enter the Sheikh's opulent mansions and look at his personal belongings. Sheikh Faisal devoted his entire life to collecting beautiful objects. His extensive and remarkable collection includes: carpets, furniture, swords, ancient tapestries, Bedouin clothing and even an entire Syrian house (moved inside the museum).`,
        },
        {
          title: `Student town`,
          description: `A real educational hub near Doha is Education City, a city within a city, where the headquarters of the Qatar Foundation is located. And also – campuses, universities, educational centers.`,
        },
        {
          title: 'Doha Mosque',
          description: `The most unusual mosque in Doha in terms of architecture is a futuristic snow-white building without a single sharp angle. The mosque building is like a spaceship that has landed in the desert and is designed as two intertwined ribbons of minarets that reach into the sky.`,
        },
      ],
    },
    gallery: [
      {
        src: '/assets/gallery/3/1.jpg',
        title: 'Shehaniya',
      },
      {
        src: '/assets/gallery/3/2.jpg',
        title: 'Camel racing',
      },
      {
        src: '/assets/gallery/3/3.jpg',
        title: 'Sheikh Faisal Museum Exhibitions',
      },
      {
        src: '/assets/gallery/3/4.jpg',
        title: 'Sheikh Faisal Museum',
      },
      {
        src: '/assets/gallery/3/5.jpg',
        title: `University town`,
      },
      {
        src: '/assets/gallery/3/6.jpg',
        title: 'Eid mubarak',
      },
    ],
    prices: [
      <div key={1}>
        <div className="d-flex align-items-baseline justify-content-center">
          <div className="icon">
            <i aria-hidden="true" className="fas fa-car-side"></i>
          </div>
          <div className="title">Individual excursion</div>
        </div>
        <p>(Daily)</p>
        <p>
          1-6 people
          <br /> $500/ excursion
          <br /> +$15/person
        </p>
      </div>,
      <div key={2}>
        <div className="d-flex align-items-baseline justify-content-center">
          <div className="icon">
            <i aria-hidden="true" className="fas fa-user-tie"></i>
          </div>
          <div className="title">Russian speaking guide</div>
        </div>
      </div>,
    ],
  },
  {
    title: 'MANGROVES_RESERVE',
    url: 'MANGROVES_RESERVE',
    img: '/assets/covers/4.jpg',
    header: '/assets/headers/4.jpg',
    headerType: 'img',
    moreDetails: {
      header: 'Excursion to the North-West of Qatar',
      descriptions: [
        `Excursion to the mangrove reserve is a fascinating journey along the salty waters of the bay on kayaks. An evergreen forest, which despite difficult conditions, has become a unique ecosystem. It is in this ecological and interesting place that you can ride enjoying the surrounding wonders of nature. After a short briefing, anyone can set off on a voyage overcoming the simple bends of the water surface between the mangroves.`,
      ],
      secondHeader: 'Route',
      moreInfo: [
        {
          title: 'Pick up from hotel',
          description: '',
        },
        {
          title: `Trip to Al Takhira Reserve`,
          description: ``,
        },
        {
          title: `Kayaking trip`,
          description: ``,
        },
        {
          title: 'Dinner',
          description: ``,
        },
        {
          title: 'Return transfer to the hotel',
          description: ``,
        },
      ],
    },
    gallery: [
      {
        src: '/assets/gallery/4/1.jpg',
        title: 'Mangrove Reserve',
      },
      {
        src: '/assets/gallery/4/2.jpg',
        title: 'Kayaking trip',
      },
      {
        src: '/assets/gallery/4/3.webp',
        title: 'Unique mangrove forest',
      },
      {
        src: '/assets/gallery/4/4.jpg',
        title: 'Kayaking',
      },
      {
        src: '/assets/gallery/4/5.jpeg',
        title: `Sun over the mangroves`,
      },
      {
        src: '/assets/gallery/4/6.jpg',
        title:
          'This is the habitat of flamingos. We will see them if we are lucky.',
      },
    ],
    prices: [
      <div key={1}>
        <div className="d-flex align-items-baseline justify-content-center">
          <div className="icon">
            <i aria-hidden="true" className="fas fa-bus"></i>
          </div>
          <div className="title">Group Tour</div>
        </div>
        <p>( Wednesdays and Sundays)</p>
        <p>
          $85/adult
          <br /> $45/child (6-11 years)
        </p>
      </div>,
      <div key={2}>
        <div className="d-flex align-items-baseline justify-content-center">
          <div className="icon">
            <i aria-hidden="true" className="fas fa-car-side"></i>
          </div>
          <div className="title"> Individual transfer </div>
        </div>
        <p>( up to 6 passengers in a car)</p>
        <p>
          +$150/car
          <br /> round trip
        </p>
      </div>,
      <div key={3}>
        <div className="d-flex align-items-baseline justify-content-center">
          <div className="icon">
            <i aria-hidden="true" className="fas fa-anchor"></i>
          </div>
          <div className="title">Kayaking</div>
        </div>
      </div>,
      <div key={4}>
        <div className="d-flex align-items-baseline justify-content-center">
          <div className="icon">
            <i aria-hidden="true" className="fas fa-concierge-bell"></i>
          </div>
          <div className="title">Dinner</div>
        </div>
      </div>,
    ],
  },
  {
    title: 'FISHING_IN_DOHA',
    url: 'FISHING_IN_DOHA',
    img: '/assets/covers/5.jpeg',
    header: '/assets/headers/5.jpeg',
    headerType: 'img',
    moreDetails: {
      header: 'Fishing in Qatar',
      descriptions: [
        `Accompanied by an experienced crew, you will set off on a comfortable boat on the waves towards an adventure. Feel like a real fisherman among the sea waves.`,
        `The vessel is equipped with everything necessary for trolling and spinning fishing, and there is a toilet on board.`,
        `And it doesn’t matter whether you are an experienced fisherman or a beginner, real excitement and a great mood will always be with you.`,
      ],
      secondHeader: 'Included',
      moreInfo: [
        {
          title: 'Transfer from and to the hotel',
          description: '',
        },
        {
          title: `Boat 10 meters`,
          description: ``,
        },
        {
          title: `On board there is an echo sounder, GPS, toilet`,
          description: ``,
        },
        {
          title:
            'Fishing equipment – ​​trolling, casting, jigging and bottom fishing',
          description: ``,
        },
        {
          title: 'Maximum 6 people on fishing trip.',
          description: ``,
        },
      ],
    },
    gallery: [
      {
        src: '/assets/gallery/5/1.jpeg',
        title: 'A boat equipped for fishing',
      },
      {
        src: '/assets/gallery/5/2.jpeg',
        title: 'A boat equipped for fishing',
      },
      {
        src: '/assets/gallery/5/3.jpeg',
        title: `A boat equipped for fishing`,
      },
      {
        src: '/assets/gallery/5/4.jpeg',
        title: `A boat equipped for fishing`,
      },
      {
        src: '/assets/gallery/5/5.jpeg',
        title: `A boat equipped for fishing`,
      },
      {
        src: '/assets/gallery/5/6.jpeg',
        title: `A boat equipped for fishing`,
      },
    ],
    prices: [
      <div key={1}>
        <div className="d-flex align-items-start justify-content-center">
          <div className="icon">$</div>
          <div className="title fs-2">600</div>
        </div>
        <p>(for the group)</p>
        <div className="d-flex align-items-start justify-content-center">
          <div className="icon">
            <i aria-hidden="true" className="fas fa-users"></i>
          </div>
          <div className="title">Up to 6 people on board</div>
        </div>
      </div>,
      <div key={2}>
        <div className="d-flex align-items-start justify-content-center">
          <div className="icon">
            <i aria-hidden="true" className="fas fa-user-tie"></i>
          </div>
          <div className="title">Services of an experienced captain</div>
        </div>
      </div>,
      <div key={3}>
        <div className="d-flex align-items-baseline justify-content-center">
          <div className="icon">
            <i aria-hidden="true" className="fas fa-fish"></i>
          </div>
          <div className="title">Everything you need for fishing</div>
        </div>
      </div>,
    ],
  },
  {
    title: 'DESERT_SAFARI',
    url: 'DESERT_SAFARI',
    img: '/assets/covers/6.jpg',
    header: '/assets/headers/6.jpg',
    headerType: 'img',
    moreDetails: {
      header: 'Safari',
      descriptions: [
        `Desert safari always brings joy and adrenaline to all participants!`,
        `Rushing through the dunes, holding your breath on the fast take-offs and steep descents is a real pleasure for those who value active recreation.`,
        `The uniqueness of a safari in Qatar is that here you can take unique photos against the backdrop of the golden sands of the endless sea of ​​the desert.`,
      ],
      secondHeader: 'Desert Safari',
      moreInfo: [
        {
          title: 'Jeep riding',
          description:
            'Breathtaking, extreme desert jeep driving will be a wonderful experience and will give you a lot of impressions.',
        },
        {
          title: `Photo stop in the desert`,
          description: `The desert landscapes amaze with their picturesque expanses. We will make a stop at sunset and enjoy the view of the luminary leaning over the horizon.`,
        },
        {
          title: `Visiting the Bay`,
          description: `This is one of the few places on the planet where the endless desert sands meet the sea - Khor Al-Adaid`,
        },
      ],
    },
    gallery: [
      {
        src: '/assets/gallery/6/1.jpg',
        title: 'Desert Safari in Jeeps',
      },
      {
        src: '/assets/gallery/6/2.jpg',
        title: 'Safari in Qatar',
      },
      {
        src: '/assets/gallery/6/3.jpg',
        title: `Opportunity to ride quad bikes`,
      },
      {
        src: '/assets/gallery/6/4.webp',
        title: `Safari in Qatar`,
      },
      {
        src: '/assets/gallery/6/5.jpeg',
        title: `Sea in the desert`,
      },
      {
        src: '/assets/gallery/6/6.jpeg',
        title: `Opportunity to ride camels`,
      },
    ],
    prices: [
      <div key={1}>
        <div className="d-flex align-items-baseline justify-content-center">
          <div className="icon">
            <i aria-hidden="true" className="fas fa-users"></i>
          </div>
          <div className="title">Group Safari</div>
        </div>
        <p>(Tue, Thu, Sun)</p>
        <p>
          $60/adult
          <br /> $45/child (4-11 yrs)
        </p>
      </div>,
      <div key={2}>
        <div className="d-flex align-items-baseline justify-content-center">
          <div className="icon">
            <i aria-hidden="true" className="fas fa-biking"></i>
          </div>
          <div className="title">ATV/Buggy Ride</div>
        </div>
        <p>30 min</p>
        <p>
          +$65/ATV
          <br /> +$180/2 seater buggy
        </p>
      </div>,
      <div key={3}>
        <div className="d-flex align-items-baseline justify-content-center">
          <div className="icon">
            <i aria-hidden="true" className="fas fa-truck-monster"></i>
          </div>
          <div className="title">Individual</div>
        </div>
        <p>
          daily <br /> (up to 6 passengers)
        </p>
        <div className="d-flex align-items-baseline justify-content-center">
          <div className="title">Desert Safari</div>
        </div>
        <p>$275/car</p>
      </div>,
    ],
  },
  {
    title: 'SAFARI_WITH_DINNER',
    url: 'SAFARI_WITH_DINNER',
    img: '/assets/covers/7.jpeg',
    header: '/assets/headers/7.jpg',
    headerType: 'img',
    moreDetails: {
      header: 'Dinner Safari',
      descriptions: [
        `Desert Safari in Qatar is an adventure that fills all participants with strong emotions!`,
        `Riding along the dunes, feeling the adrenaline rush from fast take-offs and steep descents is a real pleasure for those who value active recreation.`,
        `The special thing about this safari is that it includes a visit to a UNESCO protected and recognized site. This is a rare place on the planet where desert dunes meet the sea - Khor Al Adaid.`,
        `You can swim in the sea among the desert sands and end the day with a barbecue dinner in an authentic Bedouin camp, surrounded by thousands of stars.`,
      ],
      secondHeader: 'Desert Safari',
      moreInfo: [
        {
          title: 'Jeep riding',
          description:
            'Breathtaking, extreme desert jeep driving will be a wonderful experience and will give you a lot of impressions.',
        },
        {
          title: `Photo stop in the desert`,
          description: `The desert landscapes amaze with their picturesque expanses. We will make a stop at sunset and enjoy the view of the sun setting over the sea horizon.`,
        },
        {
          title: `Swimming in the sea`,
          description: `Dive into the amazing waters of the unique Khor Al Adaid – where the sea meets the desert.`,
        },
        {
          title: `BBQ Dinner`,
          description: `Enjoy an open-air desert dinner at a Bedouin camp.`,
        },
      ],
    },
    gallery: [
      {
        src: '/assets/gallery/7/1.jpg',
        title: 'Desert Safari in Jeeps',
      },
      {
        src: '/assets/gallery/7/2.jpeg',
        title: 'Opportunity to ride quad bikes',
      },
      {
        src: '/assets/gallery/7/3.jpeg',
        title: `Sea in the desert`,
      },
      {
        src: '/assets/gallery/7/4.jpeg',
        title: `Opportunity to ride camels`,
      },
      {
        src: '/assets/gallery/7/5.jpg',
        title: `Camp on the seashore in the desert`,
      },
      {
        src: '/assets/gallery/7/6.jpg',
        title: `Dinner - barbecue`,
      },
    ],
    prices: [
      <div key={1}>
        <div className="d-flex align-items-baseline justify-content-center">
          <div className="icon">
            <i aria-hidden="true" className="fas fa-truck-monster"></i>
          </div>
          <div className="title">Individual</div>
        </div>
        <p>
          daily <br /> (up to 6 passengers)
        </p>
        <p>
          Safari + swimming and dinner
          <br />
          $450/car
        </p>
      </div>,
      <div key={2}>
        <div className="d-flex align-items-baseline justify-content-center">
          <div className="icon">
            <i aria-hidden="true" className="fas fa-biking"></i>
          </div>
          <div className="title">ATV/Buggy Ride</div>
        </div>
        <p>30 min</p>
        <p>
          +$65/ATV
          <br />
          +$180/2 seater buggy
        </p>
      </div>,
    ],
  },
  {
    title: 'YACHT_CHARTER_IN_QATAR',
    url: 'YACHT_CHARTER_IN_QATAR',
    img: '/assets/covers/8.jpg',
    header: '/assets/headers/8.jpg',
    headerType: 'img',
    moreDetails: {
      header: 'Yacht Charter in Qatar',
      descriptions: [
        `Renting a yacht in Qatar is a great opportunity to spend time on the water in luxury and comfort, admire the beauty of the coastline, have a romantic date or relax with family and friends.`,
        `Doha, located right by the water, offers beautiful city panoramas that will open up before you during your walk.`,
        `Dive into the warm sea, bask in the rays of the gentle sun and feel like an exclusive guest on board a snow-white yacht in Doha.`,
      ],
    },
    gallery: [
      {
        src: '/assets/gallery/8/1.jpeg',
        title: 'Boat 12 meters',
      },
      {
        src: '/assets/gallery/8/2.jpeg',
        title: 'Boat 12 meters',
      },
      {
        src: '/assets/gallery/8/3.jpeg',
        title: `Boat 12 meters`,
      },
      {
        src: '/assets/gallery/8/4.jpeg',
        title: `Boat 12 meters`,
      },
    ],
    prices: [
      <div key={1}>
        <div className="d-flex align-items-baseline justify-content-center">
          <div className="icon">
            <i aria-hidden="true" className="fas fa-ship"></i>
          </div>
          <div className="title">Boat 12 meters</div>
        </div>
        <p>
          $600/2 hours, extra hour $200
          <br />
          max 8 people
        </p>
      </div>,
      <div key={2}>
        <div className="d-flex align-items-baseline justify-content-center">
          <div className="icon">
            <i aria-hidden="true" className="fas fa-ship"></i>
          </div>
          <div className="title">Yacht 20 meters</div>
        </div>
        <p>
          $1700/3 hours, extra hour $500
          <br />
          max 16 people
        </p>
      </div>,
      <div key={3}>
        <div className="d-flex align-items-baseline justify-content-center">
          <div className="icon">
            <i aria-hidden="true" className="fas fa-tint"></i>
          </div>
          <div className="title"> Water and towels</div>
        </div>
      </div>,
    ],
  },
  {
    title: 'HELICOPTER_FLIGHT',
    url: 'HELICOPTER_FLIGHT',
    img: '/assets/covers/9.jpg',
    header: '/assets/headers/9.jpg',
    headerType: 'img',
    moreDetails: {
      header: 'Helicopter flight',
      descriptions: [
        `Take to the skies above the capital of Qatar, picturesque Doha, on a 30-minute helicopter tour. Enjoy the views of the city and see its main attractions.`,
        `You will admire the cultural village of Katara, spread out on the east coast between the West Bay area and Pearl Island, which stretches 32 km into the azure Persian Gulf, sparkling with the roofs of skyscrapers.`,
        `You will see the unique architectural Zigzag Towers, which are the tallest and largest residential zigzag twin towers in the world.`,
        `And to finish the tour, you will fly along the coastline and see Lake Alkotafia.`,
      ],
      secondHeader: 'Route',
      moreInfo: [
        {
          title: 'Katara Heritage Village',
          description: `The Cultural Village is an amazing initiative of hope for people's participation through art and cultural exchange, made possible by His Highness Sheikh Hamad bin Khalifa Al Thani, the Father Emir of the State of Qatar.`,
        },
        {
          title: `Island "Pearl"`,
          description: `The Pearl Qatar is a modern district located on an artificial island. It is the largest construction project initiated by Sheikh Abdullah bin Khalifa Al Tan.`,
        },
        {
          title: `Zigzag Towers`,
          description: `Situated on the best stretch of the waterfront between Lusail and Pearl, the twin towers of West Bay Lagoon Plaza, or the Dancing Towers, have become one of the country's symbols thanks to their unusual architecture.`,
        },
      ],
    },
    gallery: [
      {
        src: '/assets/gallery/9/1.jpg',
        title: 'Helicopter flight in Doha',
      },
      {
        src: '/assets/gallery/9/2.jpg',
        title: 'Island "Pearl"',
      },
      {
        src: '/assets/gallery/9/3.jpg',
        title: `Island "Pearl"`,
      },
      {
        src: '/assets/gallery/9/4.jpg',
        title: `Great buildings`,
      },
      {
        src: '/assets/gallery/9/5.jpeg',
        title: `Nice views`,
      },
      {
        src: '/assets/gallery/9/6.jpg',
        title: `Helicopter flight in Doha`,
      },
    ],
    prices: [
      <div key={1}>
        <div className="d-flex align-items-baseline justify-content-center">
          <div className="icon">
            <i aria-hidden="true" className="fas fa-helicopter"></i>
          </div>
          <div className="title">Individual flight</div>
        </div>
        <p>(up to 4 passengers) $2800/board</p>
      </div>,
      <div key={2}>
        <div className="d-flex align-items-baseline justify-content-center">
          <div className="icon">
            <i aria-hidden="true" className="fas fa-car"></i>
          </div>
          <div className="title">Individual transfer</div>
        </div>
      </div>,
    ],
  },
  {
    title: 'QUEST_THEME_PARK',
    url: 'QUEST_THEME_PARK',
    img: '/assets/covers/10.jpg',
    header: '/assets/headers/10.jpg',
    headerType: 'img',
    moreDetails: {
      header: 'Quest Theme Park',
      descriptions: [
        `Quest is a 32,000 sq m indoor theme park located in Msheireb as part of the Doha Oasis mixed-use development. It features thrilling rides including the EpiQ Coaster, the world’s tallest roller coaster, and Magma Blast, the world’s tallest indoor drop tower.`,
        `And those who prefer less extreme entertainment will find simulators with multimedia control and virtual reality attractions in the park.`,
        `Quest is a great place for a family holiday, there are a lot of miniature attractions for young guests and family holidays.`,
        `In this kingdom of wonders everyone will find something fascinating and interesting for themselves.`,
      ],
      secondHeader: 'Attractions',
      moreInfo: [
        {
          title: 'Extreme rides',
          description: [
            `Roller Coaster “ EpiQ Coaster”`,
            `Attraction "Magma Blast"`,
            `Attraction "Gravity"`,
            `Aeroflip attraction`,
            `Interactive attraction “Time Machine”`,
            `Roller Coaster " Flaps"`,
            `Climbing wall “Rock to the sky”`,
          ],
        },
        {
          title: `Family attractions`,
          description: [
            `Laser tag`,
            `Carousel "Time Turner"`,
            `Oryx Express Ride`,
            `Spike's Air Castle Ride`,
            `Carousels`,
            `Electric Autodrome`,
          ],
        },
        {
          title: 'Quests and games',
          description: [
            'Games for the whole family with prizes',
            "Children's playground - labyrinth",
            "Attraction 'Pirate Ship'",
            'Mini Ferris Wheel',
            "Children's attractions",
          ],
        },
        {
          title: '3D attractions',
          description: [
            "Attraction 'The Legend of the Golden Oryx'",
            "Attraction 'Wings of Destiny'",
          ],
        },
        {
          title: 'Interactive attractions',
          description: [
            'VR Entertainment Station',
            "Attraction 'Slide with Firnas'",
            'VR Racing',
          ],
        },
      ],
    },
    gallery: [
      {
        src: '/assets/gallery/10/1.jpg',
        title: 'Quest Theme Park',
      },
      {
        src: '/assets/gallery/10/2.jpg',
        title: 'Imaginarium',
      },
      {
        src: '/assets/gallery/10/3.jpg',
        title: `Magma Blast`,
      },
      {
        src: '/assets/gallery/10/4.jpg',
        title: `Oryx Express`,
      },
      {
        src: '/assets/gallery/10/5.jpg',
        title: `Time Machine`,
      },
      {
        src: '/assets/gallery/10/6.jpg',
        title: `Gravity Zone`,
      },
    ],
    prices: [
      <div key={1}>
        <div className="d-flex align-items-baseline justify-content-center">
          <div className="icon">
            <i aria-hidden="true" className="fas fa-ticket-alt"></i>
          </div>
          <div className="title">Ticket</div>
        </div>
        <p>
          $65/adult
          <br />
          $45/child (4-11 years)
        </p>
      </div>,
      <div key={2}>
        <div className="d-flex align-items-baseline justify-content-center">
          <div className="icon">
            <i aria-hidden="true" className="fas fa-bus"></i>
          </div>
          <div className="title">Ticket + group transfer</div>
        </div>
        <p>(Mondays and Fridays)</p>
        <p>
          $85/adult
          <br />
          $65/child (4-11 years)
        </p>
      </div>,
    ],
  },
  {
    title: 'MERYAL_AQUAPARK',
    url: 'MERYAL_AQUAPARK',
    img: '/assets/covers/11.webp',
    header:
      'https://www.youtube.com/embed/BC7D3ek5qr4?autoplay=1&controls=0&rel=0&playsinline=1&enablejsapi=1&origin=https%3A%2F%2Fmyqatar.travel&widgetid=1',
    headerType: 'vid',
    moreDetails: {
      header: 'Meryal Aquapark',
      descriptions: [
        `Experience a world of adventure at Meryal Water Park. Qatar's largest water park features 45 thrilling rides and 52 incredible water slides. Only Meryal is home to the world's tallest slide, the Icon Tower.`,
        `The park is located on the coast, which allows everyone to relax on the sandy beach. Here you can also have a snack in any of the many restaurants and cafes.`,
      ],
      secondHeader: 'Attractions',
      moreInfo: [
        {
          title: 'Extreme rides',
          description: [
            'Oil Silk Lagoon',
            'The boiler',
            'Vertigo',
            'The fractionator',
            'Reformer',
            'Extruder',
            'Cracker',
            'Alqatara',
            'Oil slip',
            'Rapid Refinery',
            'Duhkan No 10',
            'Jet Fuel Falls',
            'Leap of Fate',
            'Roughneck',
            'Cracking unit',
            'Rusty Splash',
            'Wildcats well',
          ],
        },
        {
          title: 'Family attractions',
          description: [
            'Second escape',
            'Vaporizer',
            'Oil strike Tsunami',
            'Action River',
            'Wave River',
            'Alghazal',
            'Splashes in Motion',
          ],
        },
        {
          title: "Children's attractions",
          description: [
            'Distillers',
            'Driller',
            'Oil blast',
            'Alsfun',
            'Oil Splash',
            'Blow Out',
            'Rusty Railway',
            'Traitorous tanker',
          ],
        },
      ],
    },
    gallery: [
      {
        src: '/assets/gallery/11/1.webp',
        title: 'Water slides for the whole family',
      },
      {
        src: '/assets/gallery/11/2.jpeg',
        title: `The world's tallest water slide`,
      },
      {
        src: '/assets/gallery/11/3.jpg',
        title: `Unique attractions`,
      },
      {
        src: '/assets/gallery/11/4.jpg',
        title: `The huge territory of the water park Meryal Water Park`,
      },
      {
        src: '/assets/gallery/11/5.jpg',
        title: `Attractions for children`,
      },
      {
        src: '/assets/gallery/11/6.jpg',
        title: `Nice pictures`,
      },
      {
        src: '/assets/gallery/11/7.webp',
        title: `Nice pictures`,
      },
      {
        src: '/assets/gallery/11/8.webp',
        title: `Meryal Aquapark`,
      },
    ],
    prices: [
      <div key={1}>
        <div className="d-flex align-items-baseline justify-content-center">
          <div className="icon">
            <i aria-hidden="true" className="fas fa-ticket-alt"></i>
          </div>
          <div className="title">Ticket</div>
        </div>
        <p>
          $75 /adult
          <br />
          $65/child (3-11 years)
        </p>
      </div>,
    ],
  },
];

export default cards;
