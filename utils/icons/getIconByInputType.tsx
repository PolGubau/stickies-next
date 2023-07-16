import { BiUserCircle, BiWorld } from "react-icons/bi";
import { FaRegIdCard } from "react-icons/fa";
import { RiMedalFill, RiPoliceCarFill } from "react-icons/ri";
import {
  TbArrowDown,
  TbArrowLeft,
  TbArrowRight,
  TbArrowUp,
  TbAsset,
  TbAugmentedReality2,
  TbBarcode,
  TbBinaryTree,
  TbBinaryTree2,
  TbBraces,
  TbBrackets,
  TbBrandCitymapper,
  TbChartLine,
  TbCheck,
  TbCheckbox,
  TbChecks,
  TbClipboard,
  TbClockHour4,
  TbCode,
  TbColorSwatch,
  TbCurrencyEuro,
  TbDatabase,
  TbDeviceDesktop,
  TbDeviceMobile,
  TbDeviceNintendo,
  TbDevices2,
  TbDiscount2,
  TbDownload,
  TbDragDrop2,
  TbEaseInOutControlPoints,
  TbExclamationCircle,
  TbEye,
  TbEyeClosed,
  TbFaceId,
  TbFaceIdError,
  TbFileSearch,
  TbFingerprint,
  TbFlag,
  TbFlame,
  TbFolder,
  TbForms,
  TbHeart,
  TbHistory,
  TbInputSearch,
  TbKey,
  TbScriptPlus,
} from "react-icons/tb";

export const getIconByName = (name: string): JSX.Element => {
  switch (name.toLowerCase()) {
    case "ar":
      return <TbAugmentedReality2 />;
    case "asset":
      return <TbAsset />;
    case "map":
      return <TbBrandCitymapper />;
    case "binnarytree":
      return <TbBinaryTree />;
    case "form":
      return <TbForms />;
    case "binnarytree2":
      return <TbBinaryTree2 />;
    case "script":
      return <TbScriptPlus />;
    case "palette":
      return <TbColorSwatch />;
    case "user":
      return <BiUserCircle />;
    case "world":
      return <BiWorld />;
    case "idcard":
      return <FaRegIdCard />;
    case "medal":
      return <RiMedalFill />;
    case "policecar":
      return <RiPoliceCarFill />;
    case "arrowright":
      return <TbArrowRight />;
    case "arrow":
      return <TbArrowRight />;
    case "arrowfeft":
      return <TbArrowLeft />;
    case "arrowup":
      return <TbArrowUp />;
    case "arrowdown":
      return <TbArrowDown />;
    case "scan":
      return <TbBarcode />;
    case "object":
      return <TbBraces />;
    case "array":
      return <TbBrackets />;
    case "check":
      return <TbCheck />;
    case "paste":
      return <TbClipboard />;
    case "clock":
      return <TbClockHour4 />;
    case "code":
      return <TbCode />;
    case "euro":
      return <TbCurrencyEuro />;
    case "database":
      return <TbDatabase />;
    case "checkbox":
      return <TbCheckbox />;
    case "chartline":
      return <TbChartLine />;
    case "checks":
      return <TbChecks />;
    case "desktop":
      return <TbDeviceDesktop />;
    case "mobile":
      return <TbDeviceMobile />;
    case "nintendo":
      return <TbDeviceNintendo />;
    case "devices":
      return <TbDevices2 />;
    case "discount":
      return <TbDiscount2 />;
    case "download":
      return <TbDownload />;
    case "dragdrop":
      return <TbDragDrop2 />;
    case "easeinout":
      return <TbEaseInOutControlPoints />;
    case "exclamation":
      return <TbExclamationCircle />;
    case "eyeclosed":
      return <TbEyeClosed />;
    case "eye":
      return <TbEye />;
    case "faceid":
      return <TbFaceId />;
    case "faceiderror":
      return <TbFaceIdError />;
    case "filesearch":
      return <TbFileSearch />;
    case "fingerprint":
      return <TbFingerprint />;
    case "flag":
      return <TbFlag />;
    case "flame":
      return <TbFlame />;
    case "folder":
      return <TbFolder />;
    case "heart":
      return <TbHeart />;
    case "history":
      return <TbHistory />;
    case "key":
      return <TbKey />;
    default:
      return <TbInputSearch />;
  }
};
