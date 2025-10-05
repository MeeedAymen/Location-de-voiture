
import { Locale } from "../types";

export const translations: { [key: string]: { [key in Locale]: string } } = {
  // Header & Footer
  home: { en: 'Home', fr: 'Accueil', ar: 'الرئيسية' },
  ourCars: { en: 'Our Cars', fr: 'Nos Voitures', ar: 'سياراتنا' },
  aboutUs: { en: 'About Us', fr: 'À Propos', ar: 'من نحن' },
  contact: { en: 'Contact', fr: 'Contact', ar: 'اتصل بنا' },
  bookNow: { en: 'Book Now', fr: 'Réservez', ar: 'احجز الآن' },
  quickLinks: { en: 'Quick Links', fr: 'Liens Rapides', ar: 'روابط سريعة' },
  contactUs: { en: 'Contact Us', fr: 'Contactez-nous', ar: 'اتصل بنا' },
  followUs: { en: 'Follow Us', fr: 'Suivez-nous', ar: 'تابعنا' },
  footerSlogan: { 
    en: 'Your adventure in Morocco starts here. We provide reliable cars for an unforgettable journey.',
    fr: 'Votre aventure au Maroc commence ici. Nous fournissons des voitures fiables pour un voyage inoubliable.',
    ar: 'مغامرتك في المغرب تبدأ هنا. نحن نقدم سيارات موثوقة لرحلة لا تُنسى.'
  },
  
  // Home Page
  heroTitle: { en: 'Your Moroccan Adventure Starts Here', fr: 'Votre Aventure Marocaine Commence Ici', ar: 'مغامرتك المغربية تبدأ هنا' },
  pickupLocation: { en: 'Pickup Location', fr: 'Lieu de Prise en Charge', ar: 'موقع الاستلام' },
  pickupLocationPlaceholder: { en: 'e.g., Casablanca Airport', fr: 'ex: Aéroport de Casablanca', ar: 'مثال: مطار الدار البيضاء' },
  pickupDate: { en: 'Pickup Date', fr: 'Date de Prise en Charge', ar: 'تاريخ الاستلام' },
  dropoffDate: { en: 'Drop-off Date', fr: 'Date de Retour', ar: 'تاريخ التسليم' },
  searchCars: { en: 'Search Cars', fr: 'Rechercher des Voitures', ar: 'ابحث عن سيارات' },
  howItWorksTitle: { en: 'Start Your Journey in 3 Easy Steps', fr: 'Commencez Votre Voyage en 3 Étapes Faciles', ar: 'ابدأ رحلتك في 3 خطوات سهلة' },
  howItWorksSubtitle: { en: 'Renting a car with us is simple, fast, and secure.', fr: 'La location de voiture avec nous est simple, rapide et sécurisée.', ar: 'استئجار سيارة معنا بسيط وسريع وآمن.' },
  step1Title: { en: '1. Choose Your Car', fr: '1. Choisissez Votre Voiture', ar: '١. اختر سيارتك' },
  step1Desc: { en: 'Browse our diverse fleet of well-maintained vehicles to find the one that perfectly suits your adventure.', fr: 'Parcourez notre flotte diversifiée de véhicules bien entretenus pour trouver celui qui convient parfaitement à votre aventure.', ar: 'تصفح أسطولنا المتنوع من السيارات التي تتم صيانتها جيدًا للعثور على السيارة التي تناسب مغامرتك تمامًا.' },
  step2Title: { en: '2. Book Securely', fr: '2. Réservez en Toute Sécurité', ar: '٢. احجز بأمان' },
  step2Desc: { en: 'Select your dates and provide your details through our secure online booking system in just a few clicks.', fr: 'Sélectionnez vos dates et fournissez vos informations via notre système de réservation en ligne sécurisé en quelques clics.', ar: 'اختر تواريخك وقدم تفاصيلك من خلال نظام الحجز الآمن عبر الإنترنت ببضع نقرات فقط.' },
  step3Title: { en: '3. Start Your Adventure', fr: '3. Commencez Votre Aventure', ar: '٣. ابدأ مغامرتك' },
  step3Desc: { en: 'Pick up your keys at your chosen location and begin your unforgettable journey across Morocco.', fr: 'Récupérez vos clés à l\'endroit choisi et commencez votre voyage inoubliable à travers le Maroc.', ar: 'استلم مفاتيحك في الموقع الذي اخترته وابدأ رحلتك التي لا تُنسى عبر المغرب.' },
  featuredVehicles: { en: 'Featured Vehicles', fr: 'Véhicules en Vedette', ar: 'السيارات المميزة' },
  featuredVehiclesSubtitle: { en: 'Handpicked for comfort, reliability, and the perfect Moroccan road trip experience.', fr: 'Sélectionnés pour le confort, la fiabilité et l\'expérience parfaite d\'un road trip marocain.', ar: 'مختارة بعناية للراحة والموثوقية وتجربة رحلة برية مغربية مثالية.' },
  whyRentWithUs: { en: 'Why Rent With MarocWheels?', fr: 'Pourquoi Louer Avec MarocWheels ?', ar: 'لماذا تستأجر مع MarocWheels؟' },
  transparentPricing: { en: 'Transparent Pricing', fr: 'Prix Transparents', ar: 'أسعار شفافة' },
  transparentPricingDesc: { en: 'No hidden fees. What you see is what you pay. We believe in honest and straightforward pricing for all our vehicles.', fr: 'Pas de frais cachés. Ce que vous voyez est ce que vous payez. Nous croyons en une tarification honnête et directe pour tous nos véhicules.', ar: 'لا توجد رسوم خفية. ما تراه هو ما تدفعه. نؤمن بالتسعير الصادق والمباشر لجميع سياراتنا.' },
  roadsideAssistance: { en: '24/7 Roadside Assistance', fr: 'Assistance Routière 24/7', ar: 'مساعدة على الطريق 24/7' },
  roadsideAssistanceDesc: { en: 'Your safety is our priority. We offer around-the-clock support to ensure you\'re never stranded on your adventure.', fr: 'Votre sécurité est notre priorité. Nous offrons une assistance 24 heures sur 24 pour que vous ne soyez jamais bloqué dans votre aventure.', ar: 'سلامتك هي أولويتنا. نقدم دعمًا على مدار الساعة لضمان عدم تعرضك لأي مشاكل في مغامرتك.' },
  wideRangeOfCars: { en: 'Wide Range of Cars', fr: 'Large Gamme de Voitures', ar: 'مجموعة واسعة من السيارات' },
  wideRangeOfCarsDesc: { en: 'From economical city cars to rugged 4x4s for desert exploration, our diverse fleet has the perfect vehicle for your needs.', fr: 'Des voitures de ville économiques aux 4x4 robustes pour l\'exploration du désert, notre flotte diversifiée a le véhicule parfait pour vos besoins.', ar: 'من سيارات المدينة الاقتصادية إلى سيارات الدفع الرباعي القوية لاستكشاف الصحراء، يمتلك أسطولنا المتنوع السيارة المثالية لاحتياجاتك.' },
  testimonialsTitle: { en: 'What Our Customers Say', fr: 'Ce Que Disent Nos Clients', ar: 'ماذا يقول عملاؤنا' },
  
  // AI Trip Planner
  aiPlannerTitle: { en: 'AI Trip Planner', fr: 'Planificateur de Voyage IA', ar: 'مخطط الرحلات بالذكاء الاصطناعي' },
  aiPlannerSubtitle: { en: 'Let our AI craft a personalized itinerary for your Moroccan adventure!', fr: 'Laissez notre IA créer un itinéraire personnalisé pour votre aventure marocaine !', ar: 'دع الذكاء الاصطناعي الخاص بنا يصمم خط سير رحلة مخصصًا لمغامرتك المغربية!' },
  aiPlannerPlaceholder: { en: 'e.g., Fes, Chefchaouen, Sahara Desert', fr: 'ex: Fès, Chefchaouen, Désert du Sahara', ar: 'مثال: فاس، شفشاون، الصحراء الكبرى' },
  generateItinerary: { en: 'Generate Itinerary', fr: 'Générer l\'Itinéraire', ar: 'إنشاء خط سير الرحلة' },
  aiCrafting: { en: 'Our AI is crafting your personalized journey...', fr: 'Notre IA élabore votre voyage personnalisé...', ar: 'يقوم الذكاء الاصطناعي بصياغة رحلتك الشخصية...' },

  // Cars Page
  ourFleet: { en: 'Our Fleet', fr: 'Notre Flotte', ar: 'أسطولنا' },
  ourFleetSubtitle: { en: 'Choose from our wide selection of vehicles to suit your travel needs.', fr: 'Choisissez parmi notre large sélection de véhicules pour répondre à vos besoins de voyage.', ar: 'اختر من بين مجموعتنا الواسعة من السيارات التي تناسب احتياجات سفرك.' },
  all: { en: 'All', fr: 'Tous', ar: 'الكل' },
  sortBy: { en: 'Sort by', fr: 'Trier par', ar: 'الترتيب حسب' },
  priceAsc: { en: 'Price: Low to High', fr: 'Prix : Croissant', ar: 'السعر: من الأقل إلى الأعلى' },
  priceDesc: { en: 'Price: High to Low', fr: 'Prix : Décroissant', ar: 'السعر: من الأعلى إلى الأقل' },

  // Car Details Page
  details: { en: 'Details', fr: 'Détails', ar: 'التفاصيل' },
  perDay: { en: '/ per day', fr: '/ par jour', ar: '/ اليوم' },
  features: { en: 'Features', fr: 'Caractéristiques', ar: 'المميزات' },
  bookThisCar: { en: 'Book This Car', fr: 'Réserver cette Voiture', ar: 'احجز هذه السيارة' },
  seats: { en: 'Seats', fr: 'Sièges', ar: 'مقاعد' },

  // Booking Page
  bookYourCar: { en: 'Book Your Car', fr: 'Réservez Votre Voiture', ar: 'احجز سيارتك' },
  bookingSubtitle: { 
    en: 'Select your dates and contact us on WhatsApp to finalize your booking.', 
    fr: 'Sélectionnez vos dates et contactez-nous sur WhatsApp pour finaliser votre réservation.', 
    ar: 'اختر تواريخك واتصل بنا على الواتساب لإتمام حجزك.' 
  },
  yourDetails: { en: 'Your Details', fr: 'Vos Coordonnées', ar: 'تفاصيلك' },
  fullName: { en: 'Full Name', fr: 'Nom Complet', ar: 'الاسم الكامل' },
  emailAddress: { en: 'Email Address', fr: 'Adresse E-mail', ar: 'البريد الإلكتروني' },
  phoneNumber: { en: 'Phone Number', fr: 'Numéro de Téléphone', ar: 'رقم الهاتف' },
  bookingDates: { en: 'Booking Dates', fr: 'Dates de Réservation', ar: 'تواريخ الحجز' },
  specialRequests: { en: 'Any special requests?', fr: 'Des demandes spéciales ?', ar: 'أي طلبات خاصة؟' },
  confirmBooking: { en: 'Confirm Booking', fr: 'Confirmer la Réservation', ar: 'تأكيد الحجز' },
  bookViaWhatsApp: { en: 'Book via WhatsApp', fr: 'Réserver via WhatsApp', ar: 'احجز عبر الواتساب' },
  processing: { en: 'Processing...', fr: 'Traitement...', ar: 'جاري المعالجة...' },
  yourSelection: { en: 'Your Selection', fr: 'Votre Sélection', ar: 'اختيارك' },
  rentalDuration: { en: 'Rental Duration:', fr: 'Durée de la Location :', ar: 'مدة الإيجار:' },
  totalPrice: { en: 'Total Price:', fr: 'Prix Total :', ar: 'السعر الإجمالي:' },
  day: { en: 'day', fr: 'jour', ar: 'يوم' },
  days: { en: 'days', fr: 'jours', ar: 'أيام' },
  bookingThankYou: { en: 'Thank You!', fr: 'Merci !', ar: 'شكرًا لك!' },
  bookingConfirmation: { 
    en: 'Your booking request for the {carName} has been received. We will contact you shortly at {email} to confirm the details.',
    fr: 'Votre demande de réservation pour la {carName} a été reçue. Nous vous contacterons sous peu à {email} pour confirmer les détails.',
    ar: 'تم استلام طلب حجزك لسيارة {carName}. سنتصل بك قريبًا على {email} لتأكيد التفاصيل.'
  },
  whatsAppMessage: { 
    en: 'Hello MarocWheels, I would like to book the {carName} from {pickupDate} to {dropoffDate}.\n\nCar Details: {carLink}\n\nThank you.', 
    fr: 'Bonjour MarocWheels, j\'aimerais réserver la {carName} du {pickupDate} au {dropoffDate}.\n\nDétails de la voiture : {carLink}\n\nMerci.', 
    ar: 'مرحباً MarocWheels، أود حجز سيارة {carName} من {pickupDate} إلى {dropoffDate}.\n\nتفاصيل السيارة: {carLink}\n\nشكراً لكم.' 
  },
  whatsAppMessageNoDate: { 
    en: 'Hello MarocWheels, I would like to inquire about booking the {carName}.\n\nCar Details: {carLink}\n\nThank you.', 
    fr: 'Bonjour MarocWheels, j\'aimerais me renseigner sur la réservation de la {carName}.\n\nDétails de la voiture : {carLink}\n\nMerci.', 
    ar: 'مرحباً MarocWheels، أود الاستفسار عن حجز سيارة {carName}.\n\nتفاصيل السيارة: {carLink}\n\nشكراً لكم.' 
  },
  errorPastDate: { en: 'Pickup date cannot be in the past.', fr: 'La date de prise en charge ne peut pas être dans le passé.', ar: 'لا يمكن أن يكون تاريخ الاستلام في الماضي.' },
  errorDropoffDate: { en: 'Drop-off date must be after the pickup date.', fr: 'La date de retour doit être postérieure à la date de prise en charge.', ar: 'يجب أن يكون تاريخ التسليم بعد تاريخ الاستلام.' },

  // About Page
  aboutTitle: { en: 'About MarocWheels', fr: 'À Propos de MarocWheels', ar: 'عن MarocWheels' },
  aboutSubtitle: { en: 'Your Trusted Partner for Exploring Morocco', fr: 'Votre Partenaire de Confiance pour Explorer le Maroc', ar: 'شريكك الموثوق لاستكشاف المغرب' },
  ourStory: { en: 'Our Story', fr: 'Notre Histoire', ar: 'قصتنا' },
  ourStoryP1: {
    en: 'Founded by a team of passionate travelers and locals, MarocWheels was born from a desire to share the authentic beauty of Morocco with the world. We believe that the best way to experience this country\'s diverse landscapes and rich culture is with the freedom of the open road.',
    fr: 'Fondée par une équipe de voyageurs passionnés et de locaux, MarocWheels est née du désir de partager la beauté authentique du Maroc avec le monde. Nous croyons que la meilleure façon de découvrir les paysages variés et la riche culture de ce pays est avec la liberté de la route.',
    ar: 'تأسست MarocWheels على يد فريق من المسافرين الشغوفين والسكان المحليين، ونبعت من رغبة في مشاركة جمال المغرب الأصيل مع العالم. نؤمن بأن أفضل طريقة لتجربة المناظر الطبيعية المتنوعة والثقافة الغنية في هذا البلد هي بحرية الطريق المفتوح.'
  },
  ourStoryP2: {
    en: 'We started with just a handful of cars and a simple mission: to provide reliable, clean, and affordable vehicles with exceptional customer service. Today, we\'ve grown our fleet but our core values remain the same. We\'re not just a car rental company; we\'re your local guides, ready to help you create an unforgettable journey.',
    fr: 'Nous avons commencé avec une poignée de voitures et une mission simple : fournir des véhicules fiables, propres et abordables avec un service client exceptionnel. Aujourd\'hui, notre flotte a grandi mais nos valeurs fondamentales restent les mêmes. Nous ne sommes pas seulement une société de location de voitures ; nous sommes vos guides locaux, prêts à vous aider à créer un voyage inoubliable.',
    ar: 'بدأنا بعدد قليل من السيارات ومهمة بسيطة: توفير سيارات موثوقة ونظيفة وبأسعار معقولة مع خدمة عملاء استثنائية. اليوم، نما أسطولنا لكن قيمنا الأساسية لا تزال كما هي. نحن لسنا مجرد شركة لتأجير السيارات؛ نحن مرشدوك المحليون، على استعداد لمساعدتك في إنشاء رحلة لا تُنسى.'
  },
  ourMission: { en: 'Our Mission', fr: 'Notre Mission', ar: 'مهمتنا' },
  ourMissionP1: {
    en: 'Our mission is to empower travelers to discover the magic of Morocco at their own pace. We are committed to providing a seamless rental experience, from easy online booking to 24/7 support on the road.',
    fr: 'Notre mission est de permettre aux voyageurs de découvrir la magie du Maroc à leur propre rythme. Nous nous engageons à fournir une expérience de location transparente, de la réservation en ligne facile à l\'assistance 24/7 sur la route.',
    ar: 'مهمتنا هي تمكين المسافرين من اكتشاف سحر المغرب بالسرعة التي تناسبهم. نحن ملتزمون بتقديم تجربة تأجير سلسة، من الحجز السهل عبر الإنترنت إلى الدعم على مدار الساعة طوال أيام الأسبوع على الطريق.'
  },
  missionPoint1: { en: 'Safety First: Meticulously maintained vehicles for your peace of mind.', fr: 'La Sécurité d\'Abord : Des véhicules méticuleusement entretenus pour votre tranquillité d\'esprit.', ar: 'السلامة أولاً: سيارات تتم صيانتها بدقة لراحة بالك.' },
  missionPoint2: { en: 'Customer Focus: Friendly, multilingual staff ready to assist you.', fr: 'Orientation Client : Un personnel amical et multilingue prêt à vous aider.', ar: 'التركيز على العملاء: فريق عمل ودود ومتعدد اللغات على استعداد لمساعدتك.' },
  missionPoint3: { en: 'Local Expertise: Offering insider tips to enhance your travel experience.', fr: 'Expertise Locale : Offrir des conseils d\'initiés pour améliorer votre expérience de voyage.', ar: 'الخبرة المحلية: نقدم نصائح من الداخل لتعزيز تجربة سفرك.' },

  // Contact Page
  getInTouch: { en: 'Get In Touch', fr: 'Contactez-nous', ar: 'تواصل معنا' },
  getInTouchSubtitle: { en: 'We\'d love to hear from you. Whether you have a question or need assistance, we\'re here to help.', fr: 'Nous serions ravis d\'avoir de vos nouvelles. Que vous ayez une question ou besoin d\'aide, nous sommes là pour vous aider.', ar: 'نحب أن نسمع منك. سواء كان لديك سؤال أو كنت بحاجة إلى مساعدة، نحن هنا للمساعدة.' },
  sendMessage: { en: 'Send us a Message', fr: 'Envoyez-nous un Message', ar: 'أرسل لنا رسالة' },
  yourName: { en: 'Your Name', fr: 'Votre Nom', ar: 'اسمك' },
  yourQuestion: { en: 'Your question or comment...', fr: 'Votre question ou commentaire...', ar: 'سؤالك أو تعليقك...' },
  send: { en: 'Send Message', fr: 'Envoyer le Message', ar: 'إرسال الرسالة' },
  sending: { en: 'Sending...', fr: 'Envoi en cours...', ar: 'جارٍ الإرسال...' },
  messageSent: { en: 'Your message has been sent. We will get back to you soon.', fr: 'Votre message a été envoyé. Nous vous répondrons bientôt.', ar: 'تم إرسال رسالتك. سوف نرد عليك قريبا.' },
  contactInformation: { en: 'Contact Information', fr: 'Coordonnées', ar: 'معلومات الاتصال' },
  address: { en: 'Address:', fr: 'Adresse :', ar: 'العنوان:' },
  email: { en: 'Email:', fr: 'E-mail :', ar: 'البريد الإلكتروني:' },
  phone: { en: 'Phone:', fr: 'Téléphone :', ar: 'الهاتف:' },
  hours: { en: 'Hours:', fr: 'Horaires :', ar: 'ساعات العمل:' },
  hoursValue: { en: 'Mon - Sun, 8:00 AM - 10:00 PM', fr: 'Lun - Dim, 8:00 - 22:00', ar: 'الاثنين - الأحد، 8:00 صباحًا - 10:00 مساءً' },

  // SEO
  seo_main_title: { en: 'Car Rental Morocco', fr: 'Location de Voiture Maroc', ar: 'تأجير سيارات في المغرب' },
  seo_main_description: { en: 'A premium car rental agency in Morocco offering a wide range of vehicles for your Moroccan adventure. Explore the beauty of Morocco with our reliable and comfortable cars.', fr: 'Une agence de location de voitures premium au Maroc offrant une large gamme de véhicules pour votre aventure marocaine. Explorez la beauté du Maroc avec nos voitures fiables et confortables.', ar: 'وكالة تأجير سيارات فاخرة في المغرب تقدم مجموعة واسعة من المركبات لمغامرتك المغربية. استكشف جمال المغرب بسياراتنا الموثوقة والمريحة.' },
  seo_cars_description: { en: 'Browse our diverse fleet of rental cars. From economical hatchbacks to rugged 4x4s, find the perfect vehicle for your Moroccan adventure.', fr: 'Parcourez notre flotte diversifiée de voitures de location. Des citadines économiques aux 4x4 robustes, trouvez le véhicule parfait pour votre aventure marocaine.', ar: 'تصفح أسطولنا المتنوع من السيارات للإيجار. من سيارات الهاتشباك الاقتصادية إلى سيارات الدفع الرباعي القوية، ابحث عن السيارة المثالية لمغامرتك المغربية.' },
  seo_about_description: { en: 'Learn about MarocWheels, your trusted partner for car rentals in Morocco. Discover our story, mission, and commitment to customer satisfaction.', fr: 'Découvrez MarocWheels, votre partenaire de confiance pour la location de voitures au Maroc. Découvrez notre histoire, notre mission et notre engagement envers la satisfaction de nos clients.', ar: 'تعرف على MarocWheels، شريكك الموثوق لتأجير السيارات في المغرب. اكتشف قصتنا ورسالتنا والتزامنا بإرضاء العملاء.' },
  seo_contact_description: { en: 'Get in touch with MarocWheels. Find our contact information, address, and send us a message for any inquiries about car rentals in Morocco.', fr: 'Contactez MarocWheels. Trouvez nos coordonnées, notre adresse et envoyez-nous un message pour toute demande de renseignements sur la location de voitures au Maroc.', ar: 'تواصل مع MarocWheels. اعثر على معلومات الاتصال الخاصة بنا وعنواننا وأرسل لنا رسالة لأي استفسارات حول تأجير السيارات في المغرب.' },
  seo_booking_description: { en: 'Start the booking process for the', fr: 'Commencez le processus de réservation pour le', ar: 'ابدأ عملية الحجز لـ' },
  rent_a: { en: 'Rent a', fr: 'Louer un', ar: 'استأجر' },
  rent_the: { en: 'Rent the', fr: 'Louer le', ar: 'استأجر الـ' },
  bookYour: { en: 'Book Your', fr: 'Réservez Votre', ar: 'احجز' },
};
