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
          momentOfRemembrance: "A moment of remembrance",
          beforeContinue: "Before you continue, please take a moment.",
          whatIsAnitSayac:
            "is a digital memorial dedicated to women who have lost their lives to violence. Behind every number is a life, a story, and a person who deserved to live. These women were more than statistics. They were people who deserved to live freely, safely, and without fear.",
          rememberHonor: "Remember. Honor. Never forget.",
          mayRemembrance: "May remembrance become awareness, and awareness become change.",
          responsibilityWeShare: "RESPONSIBILITY WE ALL SHARE",
          teachThem:
            "Teach respect before prejudice. Teach equality before control. Teach empathy before violence.",
          no1HasTheRight:
            "We must raise children to understand no one owns another person, that every woman deserves freedom and safety, and all of that begins in childhood.",
          saferFuture: "A safer future begins with what we teach today.",
          rememberTheLoss:
            "Remember the women we have lost. Protect the freedom of the women who are here.",
          visitAnitSayac: "Visit the memorial and take a moment to remember",
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
          momentOfRemembrance: "ADALET İÇİN UNUTMA",
          beforeContinue: "Devam etmeden önce, lütfen bir dakikanızı ayırın.",
          whatIsAnitSayac:
            ", şiddet nedeniyle yaşamını yitiren kadınlara adanmış dijital bir anıttır. Her bir sayının ardında bir can, bir hikaye ve yaşamayı hak eden bir insan var. Bu kadınlar birer istatistikten ibaret değildi. Özgürce, güvenle ve korkusuzca yaşamayı hak eden insanlardı.",
          rememberHonor: "Hatırla. Onurlandır. Asla unutma.",
          mayRemembrance: "Hatırlamak bilince, bilinç de değişime dönüşsün.",
          responsibilityWeShare: "HEPİMİZİN TAŞIDIĞI BİR SORUMLULUK",
          teachThem:
            "Önyargıdan önce saygıyı öğretin. Tahakkümden önce eşitliği öğretin. Şiddetten önce empatiyi öğretin.",
          no1HasTheRight:
            "Çocuklarımızı; kimsenin bir başkasına sahip olamayacağını, her kadının özgürlüğü ve güvenliği hak ettiğini kavrayacak şekilde büyütmeliyiz. Tüm bunlar çocuklukta başlar.",
          saferFuture: "Daha güvenli bir gelecek, bugün ne öğrettiğimizle şekillenir.",
          rememberTheLoss:
            "Şiddetin götürdüğü kadınları anın. Hayatta olanların özgürlüğünü koruyun.",
          visitAnitSayac: "Bir dakikanızı onları hatırlamak için ayırın",
        },
      },
    },
  });

export default i18n;
