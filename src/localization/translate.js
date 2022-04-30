import ar from "localization/languagues/arabia";
import ch from "localization/languagues/china";
import id from "localization/languagues/endo";
import fil from "localization/languagues/filipino";
import fr from "localization/languagues/fr";
import de from "localization/languagues/germany";
import hi from "localization/languagues/hindu";
import sv from "localization/languagues/isvec";
import it from "localization/languagues/italy";
import ja from "localization/languagues/japan";
import ko from "localization/languagues/korea";
import pl from "localization/languagues/lehce";
import ms from "localization/languagues/malez";
import pt from "localization/languagues/portugal";
import ro from "localization/languagues/romen";
import ru from "localization/languagues/rus";
import es from "localization/languagues/spanish";
import sr from "localization/languagues/srbia";
import th from "localization/languagues/tay";
import tr from "localization/languagues/tr";

import English from "localization/languagues/english";

const languaguesList = {
    "ar": ar,
    "ch": ch,
    "id": id,
    "fil": fil,
    "fr": fr,
    "de": de,
    "hi": hi,
    "sv": sv,
    "it": it,
    "ja": ja,
    "ko": ko,
    "pl": pl,
    "ms": ms,
    "pt": pt,
    "ro": ro,
    "ru": ru,
    "es": es,
    "sr": sr,
    "th": th,
    "tr": tr,
}

export const TranslateText = (word, language) => {
    return languaguesList[language][word];
}

export const CheckIsWordEnglish = (word) => {
    return English.includes(word);
}