var klaroConfig = {
  version: 1,
  elementID: "klaro",
  styling: { theme: ["dark", "bottom"] },
  noAutoLoad: false,
  htmlTexts: true,
  embedded: false,
  groupByPurpose: true,
  storageMethod: "cookie",
  cookieName: "klaro",
  cookieExpiresAfterDays: 365,
  default: true,
  mustConsent: window.forceConsentModal,
  acceptAll: true,
  hideDeclineAll: true,
  hideLearnMore: false,
  privacyPolicyUrl: privacyPolicyUrl,
  translations: {
    zz: { privacyPolicyUrl: privacyPolicyUrl },
    fr: {
      consentNotice: {
        description:
          "Autorisez l'utilisation des donnÃ©es pour nos services " +
          "{purposes}. Vous pouvez modifier votre consentement Ã  tout moment.",
        learnMore: "En savoir plus",
      },
      ok: "Accepter",
      consentModal: {
        title: "Traitement des donnÃ©es personnelles",
        description:
          "Pouvons-nous utiliser vos donnÃ©es pour fournir nos services et autoriser nos partenaires Ã  personnaliser leurs annonces pour vous ?",
      },
      adsense: {
        description:
          "<div>Diffusion d'annonces personnalisÃ©es.</div>" +
          '<div><a target="_blank" href="https://policies.google.com/technologies/partner-sites">' +
          "DÃ©couvrez comment Google collecte et utilise les donnÃ©es</a></div>",
        title: "Google Adsense Advertisement",
      },
      matomo: { description: "Collecte de statistiques visiteurs" },
      purposes: { analytics: "Statistiques" },
    },
    en: {
      consentModal: {
        title: "Services we would like to use",
        description:
          "<div>Personalized ads.</div>" +
          '<div><a target="_blank" href="https://policies.google.com/technologies/partner-sites">' +
          "Learn how Google collect and use data</a></div>",
      },
      adsense: {
        description: "Displaying of personalized advertisements",
        title: "Google Adsense Advertisement",
      },
      matomo: { description: "Collecting of visitor statistics" },
    },
  },
  services: [
    {
      name: "matomo",
      default: true,
      title: "Matomo/Piwik",
      purposes: ["analytics"],
      cookies: [],
      callback: function (consent) {
        if (consent === true) {
          (paq = window._paq || []).push(["rememberCookieConsentGiven"]);
        } else {
          (paq = window._paq || []).push(["forgetCookieConsentGiven"]);
        }
      },
      required: false,
      optOut: true,
      onlyOnce: true,
    },
    {
      name: "adsense",
      purposes: ["advertising"],
      default: true,
      onInit: function () {
        (adsbygoogle = window.adsbygoogle || []).pauseAdRequests = 1;
      },
      onDecline: function (klaro) {
        if (klaro.confirmed) {
          (adsbygoogle =
            window.adsbygoogle || []).requestNonPersonalizedAds = 1;
          (adsbygoogle = window.adsbygoogle || []).pauseAdRequests = 0;
        }
      },
      onAccept: function (klaro) {
        if (klaro.confirmed) {
          (adsbygoogle = window.adsbygoogle || []).pauseAdRequests = 0;
        }
      },
    },
  ],
};
