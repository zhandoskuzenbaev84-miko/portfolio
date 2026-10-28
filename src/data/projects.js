/**
 * Centralized project data.
 * Features honest, practice-focused concepts and interfaces.
 * Missing URLs are explicitly flagged as concepts to avoid broken or fabricated links.
 */
export const projectsData = [
  {
    id: "tez-savdo",
    title: "Tez Savdo",
    category: "e-commerce",
    status: "Project Concept",
    featured: true,
    accentColor: "from-purple-500/20 to-indigo-500/20",
    glowColor: "rgba(139, 92, 246, 0.3)",
    tags: ["React", "Tailwind CSS", "JavaScript", "Responsive UI"],
    liveUrl: null, // Placeholder: Add deployed URL when published
    githubUrl: null, // Placeholder: Add repository URL when public
    previewVisual: {
      type: "marketplace",
      badge: "Marketplace UI",
      primaryColor: "#8B5CF6",
    },
    translations: {
      en: {
        categoryLabel: "E-Commerce Concept",
        subtitle: "Uzbekistan-focused modern marketplace interface",
        shortDesc: "A responsive e-commerce web concept tailored for local commerce in Uzbekistan with intuitive product catalog, fast search, and mobile-first navigation.",
        details: "Designed to provide a smooth browsing experience for local marketplace buyers and sellers. Emphasizes instant filtering, responsive cards, clean typography, and bilingual support considerations.",
        highlights: [
          "Responsive product grid with interactive cards and quick preview",
          "Category filtering and instant live search interface",
          "Mobile-optimized cart drawer and checkout flow concept",
          "Clean layout styled with Tailwind CSS utility architecture",
        ],
      },
      uz: {
        categoryLabel: "E-Tijorat Konsepsiyasi",
        subtitle: "O'zbekiston bozoriga mo'ljallangan zamonaviy marketplace interfeysi",
        shortDesc: "Mahalliy bozor uchun qulay mahsulot katalogi, tezkor qidiruv va mobil moslashuvchanlikka ega e-tijorat veb-konsepsiyasi.",
        details: "Mahalliy xaridorlar va sotuvchilar uchun intuitiv foydalanish tajribasini yaratish maqsadida ishlab chiqilgan. Tezkor saralash, toza tipografiya va zamonaviy kartalar bilan boyitilgan.",
        highlights: [
          "Interaktiv kartalar va tezkor ko'rish imkoniyatiga ega mahsulotlar to'ri",
          "Kategoriyalar bo'yicha saralash va tezkor qidiruv interfeysi",
          "Mobil qurilmalar uchun moslashtirilgan savatcha va buyurtma oynasi",
          "Tailwind CSS asosida qurilgan toza va zamonaviy dizayn",
        ],
      },
    },
  },
  {
    id: "weather-app",
    title: "Weather Pulse",
    category: "utility",
    status: "Practice Project",
    featured: true,
    accentColor: "from-cyan-500/20 to-blue-500/20",
    glowColor: "rgba(34, 211, 238, 0.3)",
    tags: ["React", "API Integration", "JavaScript", "CSS Glassmorphism"],
    liveUrl: null, // Placeholder: Add deployed URL when published
    githubUrl: null, // Placeholder: Add repository URL when public
    previewVisual: {
      type: "weather",
      badge: "Weather App",
      primaryColor: "#22D3EE",
    },
    translations: {
      en: {
        categoryLabel: "Weather Application",
        subtitle: "Real-time meteorological interface concept",
        shortDesc: "An interactive weather application concept featuring real-time condition displays, temperature trends, forecast cards, and adaptive weather themes.",
        details: "Built to practice asynchronous JavaScript, REST API integration, state management, and building dynamic UI states based on live data response.",
        highlights: [
          "Dynamic visual cards adapting to current weather conditions",
          "5-day forecast breakdown with interactive temperature charts",
          "City search with debounced suggestions and error handling",
          "Glassmorphism UI surfaces with subtle ambient glow",
        ],
      },
      uz: {
        categoryLabel: "Ob-havo Ilovasi",
        subtitle: "Haqiqiy vaqtdagi meteorologik interfeys konsepsiyasi",
        shortDesc: "Ob-havo ma'lumotlarini vizual ko'rinishda taqdim etuvchi, 5 kunlik prognoz va shahar qidiruvi mavjud interaktiv veb-ilova.",
        details: "Asinxron JavaScript, REST API bilan ishlash, React holatlarini boshqarish va ob-havoga qarab o'zgaruvchi vizual elementlarni mashq qilish uchun yaratilgan.",
        highlights: [
          "Ob-havo holatiga qarab moslashuvchan dinamik vizual kartalar",
          "5 kunlik ob-havo prognozi va harorat ko'rsatkichlari",
          "Shaharlar bo'yicha qidiruv va xatoliklarni xushmuomala ushlash",
          "Glassmorphism uslubidagi shaffof panellar va neon effektlar",
        ],
      },
    },
  },
  {
    id: "task-manager",
    title: "TaskFlow UI",
    category: "productivity",
    status: "Practice Project",
    featured: true,
    accentColor: "from-emerald-500/20 to-teal-500/20",
    glowColor: "rgba(52, 211, 153, 0.3)",
    tags: ["React", "State Management", "LocalStorage", "Tailwind CSS"],
    liveUrl: null, // Placeholder: Add deployed URL when published
    githubUrl: null, // Placeholder: Add repository URL when public
    previewVisual: {
      type: "tasks",
      badge: "Productivity App",
      primaryColor: "#34D399",
    },
    translations: {
      en: {
        categoryLabel: "Productivity Tool",
        subtitle: "Task management and workflow tracker",
        shortDesc: "A sleek, distraction-free productivity dashboard for organizing personal tasks, prioritizing daily workflows, and tracking completion states.",
        details: "Focuses on clean React state architecture, custom hooks, persistent browser storage via localStorage, and accessible keyboard-navigable list management.",
        highlights: [
          "Categorized columns for To-Do, In-Progress, and Completed tasks",
          "Persistent local data saving without page reload loss",
          "Priority flags (High, Medium, Normal) and tag-based sorting",
          "Smooth card transitions and instant feedback interactions",
        ],
      },
      uz: {
        categoryLabel: "Unumdorlik Vositası",
        subtitle: "Vazifalarni rejalashtirish va kuzatish tizimi",
        shortDesc: "Kundalik vazifalarni rejalashtirish, muhimlik darajalarini belgilash va bajarilish jarayonini kuzatishga mo'ljallangan qulay boshqaruv paneli.",
        details: "React holatlarini to'g'ri boshqarish, maxsus hooklar, brauzerning localStorage xotirasi bilan ishlash va qulay klaviatura navigatsiyasiga e'tibor qaratilgan.",
        highlights: [
          "Bajarilishi kerak, Jarayonda va Bajarilgan ustunlar tizimi",
          "Ma'lumotlarni brauzerda avtomatik saqlab qolish (LocalStorage)",
          "Muhimlik darajasi (Yuqori, O'rta, Oddiy) va teglar bo'yicha saralash",
          "Yumshoq animatsiyalar va darhol seziladigan interaktiv javob",
        ],
      },
    },
  },
];

export const projectCategories = [
  { id: "all", labelEn: "All Projects", labelUz: "Barcha Loyihalar" },
  { id: "e-commerce", labelEn: "E-Commerce", labelUz: "E-Tijorat" },
  { id: "utility", labelEn: "API & Utilities", labelUz: "API & Vositalar" },
  { id: "productivity", labelEn: "Productivity", labelUz: "Unumdorlik" },
];
