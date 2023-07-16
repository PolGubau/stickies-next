import { ReactComponent as BrFlag } from "assets/icons/flags/br.svg";
import { ReactComponent as DeFlag } from "assets/icons/flags/de.svg";
import { ReactComponent as DaFlag } from "assets/icons/flags/da.svg";
import { ReactComponent as ElFlag } from "assets/icons/flags/el.svg";
import { ReactComponent as EnFlag } from "assets/icons/flags/en.svg";
import { ReactComponent as EoFlag } from "assets/icons/flags/eo.svg";
import { ReactComponent as EsFlag } from "assets/icons/flags/es.svg";
import { ReactComponent as FrFlag } from "assets/icons/flags/fr.svg";
import { ReactComponent as GaFlag } from "assets/icons/flags/ga.svg";
import { ReactComponent as HeFlag } from "assets/icons/flags/he.svg";
import { ReactComponent as HvFlag } from "assets/icons/flags/hv.svg";
import { ReactComponent as ItFlag } from "assets/icons/flags/it.svg";
import { ReactComponent as JaFlag } from "assets/icons/flags/ja.svg";
import { ReactComponent as KoFlag } from "assets/icons/flags/ko.svg";
import { ReactComponent as NlFlag } from "assets/icons/flags/nl.svg";
import { ReactComponent as NoFlag } from "assets/icons/flags/no.svg";
import { ReactComponent as PlFlag } from "assets/icons/flags/pl.svg";
import { ReactComponent as RoFlag } from "assets/icons/flags/ro.svg";
import { ReactComponent as RuFlag } from "assets/icons/flags/ru.svg";
import { ReactComponent as SvFlag } from "assets/icons/flags/sv.svg";
import { ReactComponent as SwFlag } from "assets/icons/flags/sw.svg";
import { ReactComponent as TrFlag } from "assets/icons/flags/tr.svg";
import { ReactComponent as ViFlag } from "assets/icons/flags/vi.svg";
import { ReactComponent as ZhFlag } from "assets/icons/flags/zh.svg";
import { ReactComponent as CatFlag } from "assets/icons/flags/cat.svg";
import { ReactComponent as FiFlag } from "assets/icons/flags/fi.svg";
import { ReactComponent as HiFlag } from "assets/icons/flags/hi.svg";
import { ReactComponent as UkFlag } from "assets/icons/flags/uk.svg";
import { ReactComponent as HuFlag } from "assets/icons/flags/hu.svg";
import { ReactComponent as AndFlag } from "assets/icons/flags/and.svg";

const languages = [
  {
    code: "br",
    country: "Brazil",
    language: "Portuguese",
    flag: <BrFlag title="Brazilian Flag" />,
  },
  {
    code: "de",
    country: "Germany",
    language: "German",
    flag: <DeFlag title="German Flag" />,
  },
  {
    code: "da",
    country: "Denmark",
    language: "Danish",
    flag: <DaFlag title="Danish Flag" />,
  },
  {
    code: "el",
    country: "Greece",
    language: "Greek",
    flag: <ElFlag title="Greek Flag" />,
  },
  {
    code: "en",
    country: "United Kingdom",
    language: "English",
    flag: <EnFlag title="British Flag" />,
  },
  {
    code: "eo",
    country: "Esperanto",
    language: "Esperanto",
    flag: <EoFlag title="Esperanto Flag" />,
  },
  {
    code: "es",
    country: "Spain",
    language: "Spanish",
    flag: <EsFlag title="Spanish Flag" />,
  },
  {
    code: "fr",
    country: "France",
    language: "French",
    flag: <FrFlag title="French Flag" />,
  },
  {
    code: "ga",
    country: "Ireland",
    language: "Irish",
    flag: <GaFlag title="Irish Flag" />,
  },
  {
    code: "he",
    country: "Israel",
    language: "Hebrew",
    flag: <HeFlag title="Israeli Flag" />,
  },
  {
    code: "hw",
    country: "Hawaii",
    language: "Hawaiian",
    flag: <HvFlag title="Hawaiian Flag" />,
  },
  {
    code: "it",
    country: "Italy",
    language: "Italian",
    flag: <ItFlag title="Italian Flag" />,
  },
  {
    code: "ja",
    country: "Japan",
    language: "Japanese",
    flag: <JaFlag title="Japanese Flag" />,
  },
  {
    code: "ko",
    country: "South Korea",
    language: "Korean",
    flag: <KoFlag title="Korean Flag" />,
  },
  {
    code: "nl",
    country: "Netherlands",
    language: "Dutch",
    flag: <NlFlag title="Dutch Flag" />,
  },
  {
    code: "no",
    country: "Norway",
    language: "Norwegian",
    flag: <NoFlag title="Norwegian Flag" />,
  },
  {
    code: "pl",
    country: "Poland",
    language: "Polish",
    flag: <PlFlag title="Polish Flag" />,
  },
  {
    code: "ro",
    country: "Romania",
    language: "Romanian",
    flag: <RoFlag title="Romanian Flag" />,
  },
  {
    code: "ru",
    country: "Russia",
    language: "Russian",
    flag: <RuFlag title="Russian Flag" />,
  },
  {
    code: "sv",
    country: "Sweden",
    language: "Swedish",
    flag: <SvFlag title="Swedish Flag" />,
  },
  {
    code: "sw",
    country: "Switzerland",
    language: "Swiss",
    flag: <SwFlag title="Swiss Flag" />,
  },
  {
    code: "tr",
    country: "Turkey",
    language: "Turkish",
    flag: <TrFlag title="Turkish Flag" />,
  },
  {
    code: "vi",
    country: "Vietnam",
    language: "Vietnamese",
    flag: <ViFlag title="Vietnamese Flag" />,
  },
  {
    code: "zh",
    country: "China",
    language: "Chinese",
    flag: <ZhFlag title="Chinese Flag" />,
  },
  {
    code: "cat",
    country: "Catalonia",
    language: "Catalan",
    flag: <CatFlag title="Catalan Flag" />,
  },
  {
    code: "fi",
    country: "Finland",
    language: "Finnish",
    flag: <FiFlag title="Finnish Flag" />,
  },
  {
    code: "hi",
    country: "India",
    language: "Hindi",
    flag: <HiFlag title="Indian Flag" />,
  },
  {
    code: "uk",
    country: "Ukraine",
    language: "Ukrainian",
    flag: <UkFlag title="Ukrainian Flag" />,
  },
  {
    code: "hu",
    country: "Hungary",
    language: "Hungarian",
    flag: <HuFlag title="Hungarian Flag" />,
  },
  {
    code: "and",
    country: "Andorra",
    language: "Catalan",
    flag: <AndFlag title="Andorran Flag" />,
  },
];

const allCodes = languages.map((flag) => flag.code);
type flagCodes = (typeof allCodes)[number];

export default languages;
export type { flagCodes };
