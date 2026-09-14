import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          about: "About",
          projects: "Projects",
          experience: "Experience",
          art: "Art",
          blog: "Blog",
          contact: "Contact",
          hatCollector: "Hat Collector",
          everyProblem:
            "Every problem calls for its own distinct approach, which is precisely why I collect and wear different hats.",
          buildTogether: "Let's Build Together",
          contactMe: "Would like to work with me or discuss a project? Feel free to get in touch:",
          connectWithMe: "Or connect with me on social media:",
          subject: "Subject:",
          message: "Message:",
          sendMeEMail: "Send Me an E-Mail",
          footer: "© 2026 A. Taha Baki. Engineered with logic, designed with passion.",
        },
      },
      tr: {
        translation: {
          about: "Hakkımda",
          projects: "Projeler",
          experience: "Deneyim",
          art: "Sanat",
          blog: "Blog",
          contact: "İletişim",
          hatCollector: "Şapka Koleksiyoncusu",
          everyProblem:
            "Her sorun kendine özgü bir yaklaşım gerektirir. Tam da bu yüzden probleme uygun şapkalar toplar ve takarım.",
          buildTogether: "Birlikte Çalışalım",
          contactMe:
            "Benimle çalışmak veya bir proje hakkında konuşmak ister misiniz? Benimle iletişime geçmekten çekinmeyin:",
          connectWithMe: "Ya da sosyal medya üzerinden benimle bağlantı kurabilirsiniz:",
          subject: "Konu:",
          message: "Mesaj:",
          sendMeEMail: "Bana E-Posta Gönderin",
          footer: "© 2026 A. Taha Baki. Mantıkla geliştirildi, tutkuyla tasarlandı.",
        },
      },
    },
  });

export default i18n;
