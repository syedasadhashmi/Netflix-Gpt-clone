export const LOGO_URL =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const USER_URL =
  "https://occ-0-1881-58.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABePNpNV8l0dbVZFWW3RjDE33YCa7ujM2G9tHmPC6wbmPrkYs2auKw6bk5Ek_Qo8NVDQv25bbXTmF7dTQjS467v5a9og9kQR8UQ.png?r=cad";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMG_CDN = "https://image.tmdb.org/t/p/w500/";

export const BG_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/a927b1ee-784d-494a-aa80-cf7a062d2523/web/PK-en-20250714-TRIFECTA-perspective_3ea31bb5-14e1-41fe-997f-52b7ec8f28e4_large.jpg";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "arabic", name: "Arabic" },
  { identifier: "urdu", name: "Urdu" },
];
