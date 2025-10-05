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
    name: { en: 'Dacia Duster', fr: 'Dacia Duster', ar: 'داسيا داستر' },
    type: { en: 'SUV', fr: 'SUV', ar: 'سيارة دفع رباعي' },
    pricePerDay: 450,
    seats: 5,
    transmission: { en: 'Manual', fr: 'Manuelle', ar: 'يدوي' },
    fuel: { en: 'Diesel', fr: 'Diesel', ar: 'ديزل' },
    images: [
        'https://images.pexels.com/photos/1637859/pexels-photo-1637859.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/2127740/pexels-photo-2127740.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: {
        en: 'The Dacia Duster is a robust and reliable SUV, perfect for exploring both Moroccan cities and rugged mountain roads. Its economical diesel engine makes it a great choice for long trips.',
        fr: 'Le Dacia Duster est un SUV robuste et fiable, parfait pour explorer les villes marocaines et les routes de montagne accidentées. Son moteur diesel économique en fait un excellent choix pour les longs trajets.',
        ar: 'داسيا داستر هي سيارة دفع رباعي قوية وموثوقة، مثالية لاستكشاف المدن المغربية والطرق الجبلية الوعرة. محركها الديزل الاقتصادي يجعلها خيارًا رائعًا للرحلات الطويلة.'
    },
    features: [
        { en: 'Air Conditioning', fr: 'Climatisation', ar: 'تكييف هواء' },
        { en: 'Bluetooth', fr: 'Bluetooth', ar: 'بلوتوث' },
        { en: 'GPS Navigation', fr: 'Navigation GPS', ar: 'نظام ملاحة GPS' },
        { en: 'Spacious Trunk', fr: 'Coffre spacieux', ar: 'صندوق واسع' }
    ]
  },
  {
    id: 2,
    name: { en: 'Renault Clio', fr: 'Renault Clio', ar: 'رينو كليو' },
    type: { en: 'Hatchback', fr: 'Citadine', ar: 'هاتشباك' },
    pricePerDay: 300,
    seats: 5,
    transmission: { en: 'Manual', fr: 'Manuelle', ar: 'يدوي' },
    fuel: { en: 'Gasoline', fr: 'Essence', ar: 'بنزين' },
    images: [
        'https://images.pexels.com/photos/191240/pexels-photo-191240.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1429748/pexels-photo-1429748.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: {
        en: 'The Renault Clio is a compact and stylish hatchback, ideal for navigating the narrow streets of Moroccan medinas. It offers excellent fuel efficiency and is easy to park.',
        fr: 'La Renault Clio est une citadine compacte et élégante, idéale pour naviguer dans les rues étroites des médinas marocaines. Elle offre une excellente efficacité énergétique et est facile à garer.',
        ar: 'رينو كليو هي سيارة هاتشباك مدمجة وأنيقة، مثالية للتنقل في الشوارع الضيقة للمدن المغربية القديمة. تتميز بكفاءة ممتازة في استهلاك الوقود وسهولة ركنها.'
    },
    features: [
        { en: 'Air Conditioning', fr: 'Climatisation', ar: 'تكييف هواء' },
        { en: 'USB Port', fr: 'Port USB', ar: 'منفذ USB' },
        { en: 'Compact Size', fr: 'Taille compacte', ar: 'حجم مدمج' },
        { en: 'Fuel Efficient', fr: 'Économe en carburant', ar: 'كفاءة في استهلاك الوقود' }
    ]
  },
  {
    id: 3,
    name: { en: 'Hyundai Accent', fr: 'Hyundai Accent', ar: 'هيونداي أكسنت' },
    type: { en: 'Sedan', fr: 'Berline', ar: 'سيدان' },
    pricePerDay: 350,
    seats: 5,
    transmission: { en: 'Automatic', fr: 'Automatique', ar: 'أوتوماتيك' },
    fuel: { en: 'Gasoline', fr: 'Essence', ar: 'بنزين' },
    images: [
        'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: {
        en: 'A comfortable and smooth sedan, the Hyundai Accent is perfect for family trips or business travel. The automatic transmission provides a relaxing driving experience.',
        fr: 'Berline confortable et douce, la Hyundai Accent est parfaite pour les voyages en famille ou d\'affaires. La transmission automatique offre une expérience de conduite relaxante.',
        ar: 'هيونداي أكسنت هي سيارة سيدان مريحة وسلسة، مثالية للرحلات العائلية أو سفر الأعمال. يوفر ناقل الحركة الأوتوماتيكي تجربة قيادة مريحة.'
    },
    features: [
        { en: 'Air Conditioning', fr: 'Climatisation', ar: 'تكييف هواء' },
        { en: 'Automatic', fr: 'Automatique', ar: 'أوتوماتيك' },
        { en: 'Cruise Control', fr: 'Régulateur de vitesse', ar: 'مثبت سرعة' },
        { en: 'Comfortable Seating', fr: 'Sièges confortables', ar: 'مقاعد مريحة' }
    ]
  },
  {
    id: 4,
    name: { en: 'Toyota Prado', fr: 'Toyota Prado', ar: 'تويوتا برادو' },
    type: { en: '4x4', fr: '4x4', ar: 'دفع رباعي' },
    pricePerDay: 900,
    seats: 7,
    transmission: { en: 'Automatic', fr: 'Automatique', ar: 'أوتوماتيك' },
    fuel: { en: 'Diesel', fr: 'Diesel', ar: 'ديزل' },
    images: [
        'https://images.pexels.com/photos/3782235/pexels-photo-3782235.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3802661/pexels-photo-3802661.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/4061539/pexels-photo-4061539.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: {
        en: 'For the ultimate Moroccan adventure, the Toyota Prado is your go-to vehicle. This powerful 4x4 can handle desert dunes and mountain tracks with ease, offering space and luxury.',
        fr: 'Pour l\'aventure marocaine ultime, le Toyota Prado est votre véhicule de prédilection. Ce 4x4 puissant peut affronter les dunes du désert et les pistes de montagne avec aisance, offrant espace et luxe.',
        ar: 'لمغامرة مغربية لا مثيل لها، تويوتا برادو هي سيارتك المثالية. يمكن لهذه السيارة ذات الدفع الرباعي القوية التعامل مع الكثبان الصحراوية والمسارات الجبلية بسهولة، مع توفير المساحة والرفاهية.'
    },
    features: [
        { en: 'All-Wheel Drive', fr: 'Traction intégrale', ar: 'دفع رباعي' },
        { en: '7 Seats', fr: '7 Sièges', ar: '7 مقاعد' },
        { en: 'Premium Sound System', fr: 'Système audio premium', ar: 'نظام صوتي فاخر' },
        { en: 'Sunroof', fr: 'Toit ouvrant', ar: 'فتحة سقف' }
    ]
  },
  {
    id: 5,
    name: { en: 'Kia Picanto', fr: 'Kia Picanto', ar: 'كيا بيكانتو' },
    type: { en: 'Hatchback', fr: 'Citadine', ar: 'هاتشباك' },
    pricePerDay: 250,
    seats: 4,
    transmission: { en: 'Automatic', fr: 'Automatique', ar: 'أوتوماتيك' },
    fuel: { en: 'Gasoline', fr: 'Essence', ar: 'بنزين' },
    images: [
        'https://images.pexels.com/photos/951318/pexels-photo-951318.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: {
        en: 'The most economical option for city driving. The Kia Picanto is small, zippy, and incredibly easy to handle in heavy traffic. Perfect for solo travelers or couples.',
        fr: 'L\'option la plus économique pour la conduite en ville. La Kia Picanto est petite, vive et incroyablement facile à manier dans un trafic dense. Parfaite pour les voyageurs en solo ou les couples.',
        ar: 'الخيار الأكثر اقتصادا للقيادة في المدينة. كيا بيكانتو صغيرة وسريعة وسهلة التحكم بشكل لا يصدق في حركة المرور الكثيفة. مثالية للمسافرين المنفردين أو الأزواج.'
    },
    features: [
        { en: 'Air Conditioning', fr: 'Climatisation', ar: 'تكييف هواء' },
        { en: 'Very Economical', fr: 'Très économique', ar: 'اقتصادية جدا' },
        { en: 'Easy to Park', fr: 'Facile à garer', ar: 'سهلة الركن' },
        { en: 'Automatic', fr: 'Automatique', ar: 'أوتوماتيك' }
    ]
  },
  {
    id: 6,
    name: { en: 'Peugeot 301', fr: 'Peugeot 301', ar: 'بيجو 301' },
    type: { en: 'Sedan', fr: 'Berline', ar: 'سيدان' },
    pricePerDay: 400,
    seats: 5,
    transmission: { en: 'Manual', fr: 'Manuelle', ar: 'يدوي' },
    fuel: { en: 'Diesel', fr: 'Diesel', ar: 'ديزل' },
    images: [
        'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/261986/pexels-photo-261986.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: {
        en: 'A reliable and spacious sedan that offers a comfortable ride for long distances. The Peugeot 301 is known for its large trunk space, making it ideal for travelers with a lot of luggage.',
        fr: 'Une berline fiable et spacieuse qui offre une conduite confortable sur de longues distances. La Peugeot 301 est connue pour son grand coffre, ce qui la rend idéale pour les voyageurs avec beaucoup de bagages.',
        ar: 'سيارة سيدان موثوقة وواسعة توفر قيادة مريحة للمسافات الطويلة. تشتهر بيجو 301 بمساحة صندوقها الكبيرة، مما يجعلها مثالية للمسافرين الذين لديهم الكثير من الأمتعة.'
    },
    features: [
        { en: 'Spacious Trunk', fr: 'Coffre spacieux', ar: 'صندوق واسع' },
        { en: 'Fuel Efficient Diesel', fr: 'Diesel économe', ar: 'ديزل اقتصادي' },
        { en: 'Bluetooth', fr: 'Bluetooth', ar: 'بلوتوث' },
        { en: 'Comfortable Ride', fr: 'Conduite confortable', ar: 'قيادة مريحة' }
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