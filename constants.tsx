import type { Car, Testimonial, NavLink } from './types';
import { Page } from './types';

export const NAV_LINKS: NavLink[] = [
  { nameKey: 'home', page: Page.Home },
  { nameKey: 'ourCars', page: Page.Cars },
  { nameKey: 'aboutUs', page: Page.About },
  { nameKey: 'contact', page: Page.Contact },
];

export const CARS_DATA: Car[] = [
  {
    id: 1,
    name: { en: 'Mercedes-Benz S-Class', fr: 'Mercedes-Benz Classe S', ar: 'مرسيدس بنز الفئة S' },
    type: { en: 'Luxury Sedan', fr: 'Berline de Luxe', ar: 'سيدان فاخر' },
    pricePerDay: 2500,
    seats: 5,
    transmission: { en: 'Automatic', fr: 'Automatique', ar: 'أوتوماتيك' },
    fuel: { en: 'Hybrid', fr: 'Hybride', ar: 'هجين' },
    images: [
        'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    description: {
        en: 'The epitome of luxury and sophistication, the Mercedes-Benz S-Class combines cutting-edge technology with unparalleled comfort. Experience the pinnacle of automotive excellence with premium materials, advanced driver assistance systems, and a whisper-quiet ride.',
        fr: 'L\'incarnation du luxe et de la sophistication, la Mercedes-Benz Classe S combine une technologie de pointe avec un confort inégalé. Découvrez le summum de l\'excellence automobile avec des matériaux premium, des systèmes d\'assistance à la conduite avancés et une conduite ultra-silencieuse.',
        ar: 'تجسيد الفخامة والأناقة، تجمع مرسيدس بنز الفئة S بين التكنولوجيا المتطورة والراحة الفائقة. استمتع بقمة التميز في عالم السيارات مع مواد فاخرة، أنظمة مساعدة متقدمة، وقيادة صامتة.'
    },
    features: [
        { en: 'Massage Seats', fr: 'Sièges massants', ar: 'مقاعد مساج' },
        { en: 'Burmester Sound', fr: 'Son Burmester', ar: 'نظام صوتي Burmester' },
        { en: 'Magic Body Control', fr: 'Magic Body Control', ar: 'نظام التحكم الذكي' },
        { en: 'Ambient Lighting', fr: 'Éclairage d\'ambiance', ar: 'إضاءة محيطية' }
    ]
  },
  {
    id: 2,
    name: { en: 'BMW X7', fr: 'BMW X7', ar: 'بي إم دبليو X7' },
    type: { en: 'Luxury SUV', fr: 'SUV de Luxe', ar: 'سيارة دفع رباعي فاخرة' },
    pricePerDay: 2800,
    seats: 7,
    transmission: { en: 'Automatic', fr: 'Automatique', ar: 'أوتوماتيك' },
    fuel: { en: 'Gasoline', fr: 'Essence', ar: 'بنزين' },
    images: [
        'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/1637859/pexels-photo-1637859.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    description: {
        en: 'Command attention with the BMW X7, the ultimate expression of luxury and performance. This full-size SUV offers spacious three-row seating, powerful V8 engines, and the latest iDrive technology, all wrapped in an imposing yet elegant design.',
        fr: 'Attirez l\'attention avec la BMW X7, l\'expression ultime du luxe et de la performance. Ce SUV grand format offre des sièges spacieux sur trois rangées, des moteurs V8 puissants et la dernière technologie iDrive, le tout dans un design imposant mais élégant.',
        ar: 'اجذب الأنظار مع بي إم دبليو X7، التعبير المثالي عن الفخامة والأداء. توفر هذه السيارة ذات الدفع الرباعي الكبيرة مقاعد فسيحة بثلاث صفوف، محركات V8 قوية، وأحدث تقنيات iDrive، كل ذلك بتصميم مهيب وأنيق.'
    },
    features: [
        { en: 'Panoramic Sunroof', fr: 'Toit ouvrant panoramique', ar: 'فتحة سقف بانورامية' },
        { en: 'Premium Leather', fr: 'Cuir premium', ar: 'جلد فاخر' },
        { en: 'xDrive All-Wheel', fr: 'Traction xDrive', ar: 'دفع رباعي xDrive' },
        { en: 'Crystal Gear Selector', fr: 'Sélecteur Crystal', ar: 'مبدل Crystal' }
    ]
  },
  {
    id: 3,
    name: { en: 'Audi A8', fr: 'Audi A8', ar: 'أودي A8' },
    type: { en: 'Luxury Sedan', fr: 'Berline de Luxe', ar: 'سيدان فاخر' },
    pricePerDay: 2200,
    seats: 5,
    transmission: { en: 'Automatic', fr: 'Automatique', ar: 'أوتوماتيك' },
    fuel: { en: 'Hybrid', fr: 'Hybride', ar: 'هجين' },
    images: [
        'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    description: {
        en: 'Discover the perfect blend of elegance and innovation with the Audi A8. This flagship sedan features quattro all-wheel drive, adaptive air suspension, and a revolutionary MMI touch response system, delivering an unparalleled driving experience.',
        fr: 'Découvrez le mélange parfait d\'élégance et d\'innovation avec l\'Audi A8. Cette berline phare dispose de la traction intégrale quattro, d\'une suspension pneumatique adaptive et d\'un système révolutionnaire MMI touch response, offrant une expérience de conduite inégalée.',
        ar: 'اكتشف المزيج المثالي بين الأناقة والابتكار مع أودي A8. تتميز هذه السيارة الفاخرة بنظام الدفع الرباعي quattro، ونظام التعليق الهوائي التكيفي، ونظام MMI المتطور، مما يوفر تجربة قيادة لا مثيل لها.'
    },
    features: [
        { en: 'Virtual Cockpit', fr: 'Tableau de bord virtuel', ar: 'لوحة عدادات افتراضية' },
        { en: 'Bang & Olufsen Audio', fr: 'Audio Bang & Olufsen', ar: 'نظام صوتي Bang & Olufsen' },
        { en: 'Matrix LED Lights', fr: 'Phares Matrix LED', ar: 'مصابيح Matrix LED' },
        { en: 'Valcona Leather', fr: 'Cuir Valcona', ar: 'جلد Valcona' }
    ]
  },
  {
    id: 4,
    name: { en: 'Porsche 911', fr: 'Porsche 911', ar: 'بورش 911' },
    type: { en: 'Sports Car', fr: 'Voiture de Sport', ar: 'سيارة رياضية' },
    pricePerDay: 3500,
    seats: 4,
    transmission: { en: 'Automatic', fr: 'Automatique', ar: 'أوتوماتيك' },
    fuel: { en: 'Gasoline', fr: 'Essence', ar: 'بنزين' },
    images: [
        'https://images.pexels.com/photos/1637859/pexels-photo-1637859.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/2127739/pexels-photo-2127739.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/2127740/pexels-photo-2127740.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    description: {
        en: 'Experience automotive perfection with the legendary Porsche 911. This iconic sports car delivers breathtaking performance with its rear-engine layout, precision handling, and unmistakable design. Perfect for those who demand the ultimate driving experience.',
        fr: 'Découvrez la perfection automobile avec la légendaire Porsche 911. Cette voiture de sport emblématique offre des performances époustouflantes avec sa configuration moteur arrière, sa maniabilité de précision et son design reconnaissable. Parfait pour ceux qui recherchent l\'expérience de conduite ultime.',
        ar: 'اختبر الكمال في عالم السيارات مع بورش 911 الأسطورية. توفر هذه السيارة الرياضية الأيقونية أداءً مذهلاً مع تخطيط محركها الخلفي، وقدرات المناولة الدقيقة، وتصميمها المميز. مثالية لمن يبحثون عن تجربة قيادة لا مثيل لها.'
    },
    features: [
        { en: 'Turbocharged Engine', fr: 'Moteur turbocompressé', ar: 'محرك توربيني' },
        { en: 'PDK Transmission', fr: 'Transmission PDK', ar: 'ناقل حركة PDK' },
        { en: 'Sport Chrono Package', fr: 'Pack Sport Chrono', ar: 'حزمة Sport Chrono' },
        { en: 'Active Aerodynamics', fr: 'Aérodynamique active', ar: 'ديناميكية هوائية نشطة' }
    ]
  },
  {
    id: 5,
    name: { en: 'Range Rover', fr: 'Range Rover', ar: 'رينج روفر' },
    type: { en: 'Luxury 4x4', fr: '4x4 de Luxe', ar: 'دفع رباعي فاخر' },
    pricePerDay: 3000,
    seats: 5,
    transmission: { en: 'Automatic', fr: 'Automatique', ar: 'أوتوماتيك' },
    fuel: { en: 'Diesel', fr: 'Diesel', ar: 'ديزل' },
    images: [
        'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    description: {
        en: 'The Range Rover redefines luxury off-road capability. Combining British elegance with formidable terrain-conquering abilities, this vehicle offers a serene cabin, advanced Terrain Response system, and the perfect balance between city sophistication and wilderness adventure.',
        fr: 'Le Range Rover redéfinit la capacité tout-terrain de luxe. Alliant l\'élégance britannique à des capacités de conquête de terrain formidables, ce véhicule offre une cabine sereine, un système Terrain Response avancé et l\'équilibre parfait entre sophistication urbaine et aventure sauvage.',
        ar: 'رينج روفر يعيد تعريف قدرة السيارات الفاخرة على الطرق الوعرة. يجمع بين الأناقة البريطانية وقدرات قهر التضاريس الرائعة، ويوفر هذه السيارة مقصورة هادئة، نظام Terrain Response المتقدم، والتوازن المثالي بين الأناقة الحضرية ومغامرة البرية.'
    },
    features: [
        { en: 'Terrain Response 2', fr: 'Terrain Response 2', ar: 'نظام Terrain Response 2' },
        { en: 'Air Suspension', fr: 'Suspension pneumatique', ar: 'نظام تعليق هوائي' },
        { en: 'Windsor Leather', fr: 'Cuir Windsor', ar: 'جلد Windsor' },
        { en: 'Meridian Sound System', fr: 'Son Meridian', ar: 'نظام صوتي Meridian' }
    ]
  },
  {
    id: 6,
    name: { en: 'Bentley Continental GT', fr: 'Bentley Continental GT', ar: 'بنتلي كونتيننتال GT' },
    type: { en: 'Luxury GT', fr: 'GT de Luxe', ar: 'GT فاخر' },
    pricePerDay: 4000,
    seats: 4,
    transmission: { en: 'Automatic', fr: 'Automatique', ar: 'أوتوماتيك' },
    fuel: { en: 'Gasoline', fr: 'Essence', ar: 'بنزين' },
    images: [
        'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/191240/pexels-photo-191240.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/1429748/pexels-photo-1429748.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    description: {
        en: 'Indulge in the ultimate expression of British luxury with the Bentley Continental GT. This grand tourer combines handcrafted excellence, powerful W12 performance, and exquisite attention to detail. Every journey becomes an unforgettable experience of refinement and power.',
        fr: 'Offrez-vous l\'expression ultime du luxe britannique avec la Bentley Continental GT. Ce grand tourisme combine l\'excellence artisanale, la performance puissante du W12 et une attention exquise aux détails. Chaque voyage devient une expérience inoubliable de raffinement et de puissance.',
        ar: 'استمتع بالتعبير الأسمى للفخامة البريطانية مع بنتلي كونتيننتال GT. تجمع هذه السيارة الفاخرة بين التميز الحرفي اليدوي، والأداء القوي لمحرك W12، والاهتمام الفائق بالتفاصيل. تصبح كل رحلة تجربة لا تُنسى من الأناقة والقوة.'
    },
    features: [
        { en: 'W12 Twin Turbo', fr: 'W12 Bi-Turbo', ar: 'W12 Twin Turbo' },
        { en: 'Diamond Knurling', fr: 'Moire diamant', ar: 'تشطيبات الماس' },
        { en: 'Naim Audio System', fr: 'Audio Naim', ar: 'نظام صوتي Naim' },
        { en: 'Rotating Display', fr: 'Écran rotatif', ar: 'شاشة دوارة' }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Alex Johnson',
    location: 'London, UK',
    quote: {
        en: "Renting from MarocWheels was the best decision for our trip. The Dacia Duster was perfect for the Atlas Mountains. The whole process was seamless and the staff were incredibly helpful!",
        fr: "La location chez MarocWheels a été la meilleure décision pour notre voyage. Le Dacia Duster était parfait pour les montagnes de l'Atlas. L'ensemble du processus s'est déroulé sans accroc et le personnel a été incroyablement serviable !",
        ar: "كان الاستئجار من MarocWheels أفضل قرار لرحلتنا. كانت سيارة داسيا داستر مثالية لجبال الأطلس. كانت العملية برمتها سلسة والموظفون كانوا متعاونين بشكل لا يصدق!"
    },
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d'
  },
  {
    name: 'Fatima Zahra',
    location: 'Paris, France',
    quote: {
        en: "Excellent service! We rented a Renault Clio for a week in Marrakech. The car was clean, reliable, and fuel-efficient. Highly recommended for navigating the city.",
        fr: "Service excellent ! Nous avons loué une Renault Clio pour une semaine à Marrakech. La voiture était propre, fiable et économe en carburant. Fortement recommandé pour se déplacer en ville.",
        ar: "خدمة ممتازة! استأجرنا سيارة رينو كليو لمدة أسبوع في مراكش. كانت السيارة نظيفة وموثوقة واقتصادية في استهلاك الوقود. موصى به بشدة للتنقل في المدينة."
    },
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026705d'
  },
  {
    name: 'Kenji Tanaka',
    location: 'Tokyo, Japan',
    quote: {
        en: "The team at MarocWheels provided top-notch customer service. They gave us great tips for our road trip to the Sahara. The Toyota Prado was a beast in the desert. Unforgettable experience!",
        fr: "L'équipe de MarocWheels a fourni un service client de premier ordre. Ils nous ont donné d'excellents conseils pour notre road trip vers le Sahara. Le Toyota Prado était une bête dans le désert. Expérience inoubliable !",
        ar: "قدم فريق MarocWheels خدمة عملاء من الدرجة الأولى. لقد قدموا لنا نصائح رائعة لرحلتنا البرية إلى الصحراء. كانت تويوتا برادو وحشًا في الصحراء. تجربة لا تُنسى!"
    },
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026706d'
  }
];