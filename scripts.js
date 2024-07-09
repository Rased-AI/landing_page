const translations = {
    en: {
        title: "Download Rasid AI",
        description: "The best App powerd by AI for Finance Management",
        downloadButton: "Download for Android"
    },
    ar: {
        title: "تحميل تطبيق راصد",
        description: "افضل تطبيق مدعوم بالذكاء الإصطناعي لإدارة المال و المصروفات",
        downloadButton: "حمل لاندرويد"
    }
};

function switchLanguage(lang) {
    document.getElementById('title').innerText = translations[lang].title;
    document.getElementById('description').innerText = translations[lang].description;
    document.getElementById('download-button').innerText = translations[lang].downloadButton;
    document.body.style.direction = lang === 'ar' ? 'rtl' : 'ltr';
}
