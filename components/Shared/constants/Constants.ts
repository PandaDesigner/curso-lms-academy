const yearTime = new Date().getFullYear();

export const CONSTANTS = {
    app_title: "AcademyDogs",
    platform: "platform",
    home: "Home",
    courses: "Courses",
    my_courses: "My Courses",
    teachers: "Teachers",
    students: "Students",
    analytics: "Analytics",
    settings: "Settings",
    logout: "Logout",
    search: "Search...",
    footerYear: `${yearTime} © AcademyDogs`,
    private: "Private",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    notFound: "Page not found",
    btnWelcome: "Welcome home"
} as const;