export const messages = {
  ru: {
    day: "0 дней | {n} день | {n} день | {n} дня | {n} дней",
    week: "0 недель | {n} неделю | {n} неделю | {n} недели | {n} недель",
    month: "0 месяцев | {n} месяц | {n} месяц | {n} месяца | {n} месяцев",
    payment:
      "0 платежей | {n} платеж | {n} платеж | {n} платежа | {n} платежей",
  },
};

/**
 * @see {@link https://vue-i18n.intlify.dev/guide/essentials/pluralization.html}
 */
export const pluralRules = {
  ru: (choice, choicesLength) => {
    if (choice === 0) {
      return 0;
    }

    if (choice === 1) {
      return 1;
    }

    const teen = choice % 100 > 10 && choice % 100 < 20;
    const endsWithOne = choice % 10 === 1;

    if (choicesLength < 4) {
      return !teen && endsWithOne ? 2 : 3;
    }
    if (!teen && endsWithOne) {
      return 2;
    }
    if (!teen && choice % 10 >= 2 && choice % 10 <= 4) {
      return 3;
    }

    return choicesLength < 4 ? 3 : 4;
  },
};
