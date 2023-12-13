/*
 * names.js
 *
 * Contains all Pokemon names in multiple languages. Also includes functionality
 * to remove accents from non-English Pokemon names for easier comparison.
 */

const ACCENT_MAP = {
  'â':'a',
  'ä':'a',
  'ß':'s',
  'Ü':'u',
  'ü':'u',
  'Ï':'i',
  'ï':'i',
  'Ê':'e',
  'ê':'e',
  'é':'e',
  'È':'e',
  'è':'e',
  'ô':'o',
  'Ô':'O',
  'ç':'c',
  'Ç':'C'
} as const;

// Based on https://github.com/aristus/accent-folding/blob/master/accent-fold.js

export const removeAccents = (s: string) => {
  if (!s) { return ''; }
  let ret = '';
  for (let i=0; i<s.length; i++) {
    // @ts-ignore
    ret += ACCENT_MAP[s.charAt(i)] || s.charAt(i);
  }
  return ret;
}

export const POKEMON_NAMES = [{
  names: {
    de: "bisasam",
    en: "bulbasaur",
    fr: "bulbizarre",
    ja: "フシギダネ",
    zh: "妙蛙种子",
  },
  number: 1,
  pokemonTypes: ["grass", "poison"],
},{
  names: {
    de: "bisaknosp",
    en: "ivysaur",
    fr: "herbizarre",
    ja: "フシギソウ",
    zh: "妙蛙草",
  },
  number: 2,
  pokemonTypes: ["grass", "poison"],
},{
  names: {
    de: "bisaflor",
    en: "venusaur",
    fr: "florizarre",
    ja: "フシギバナ",
    zh: "妙蛙花",
  },
  number: 3,
  pokemonTypes: ["grass", "poison"],
},{
  names: {
    de: "glumanda",
    en: "charmander",
    fr: "salamèche",
    ja: "ヒトカゲ",
    zh: "小火龙",
  },
  number: 4,
  pokemonTypes: ["fire"],
},{
  names: {
    de: "glutexo",
    en: "charmeleon",
    fr: "reptincel",
    ja: "リザード",
    zh: "火恐龙",
  },
  number: 5,
  pokemonTypes: ["fire", ""],
},{
  names: {
    de: "glurak",
    en: "charizard",
    fr: "dracaufeu",
    ja: "リザードン",
    zh: "喷火龙",
  },
  number: 6,
  pokemonTypes: ["fire", "flying"],
},{
  names: {
    de: "schiggy",
    en: "squirtle",
    fr: "carapuce",
    ja: "ゼニガメ",
    zh: "杰尼龟",
  },
  number: 7,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "schillok",
    en: "wartortle",
    fr: "carabaffe",
    ja: "カメール",
    zh: "卡咪龟",
  },
  number: 8,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "turtok",
    en: "blastoise",
    fr: "tortank",
    ja: "カメックス",
    zh: "水箭龟",
  },
  number: 9,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "raupy",
    en: "caterpie",
    fr: "chenipan",
    ja: "キャタピー",
    zh: "绿毛虫",
  },
  number: 10,
  pokemonTypes: ["bug", ""],
},{
  names: {
    de: "safcon",
    en: "metapod",
    fr: "chrysacier",
    ja: "トランセル",
    zh: "铁甲蛹",
  },
  number: 11,
  pokemonTypes: ["bug", ""],
},{
  names: {
    de: "smettbo",
    en: "butterfree",
    fr: "papilusion",
    ja: "バタフリー",
    zh: "巴大蝶",
  },
  number: 12,
  pokemonTypes: ["bug", "flying"],
},{
  names: {
    de: "hornliu",
    en: "weedle",
    fr: "aspicot",
    ja: "ビードル",
    zh: "独角虫",
  },
  number: 13,
  pokemonTypes: ["bug", "poison"],
},{
  names: {
    de: "kokuna",
    en: "kakuna",
    fr: "coconfort",
    ja: "コクーン",
    zh: "铁壳蛹",
  },
  number: 14,
  pokemonTypes: ["bug", "poison"],
},{
  names: {
    de: "bibor",
    en: "beedrill",
    fr: "dardargnan",
    ja: "スピアー",
    zh: "大针蜂",
  },
  number: 15,
  pokemonTypes: ["bug", "poison"],
},{
  names: {
    de: "taubsi",
    en: "pidgey",
    fr: "roucool",
    ja: "ポッポ",
    zh: "波波",
  },
  number: 16,
  pokemonTypes: ["normal", "flying"],
},{
  names: {
    de: "tauboga",
    en: "pidgeotto",
    fr: "roucoups",
    ja: "ピジョン",
    zh: "比比鸟",
  },
  number: 17,
  pokemonTypes: ["normal", "flying"],
},{
  names: {
    de: "tauboss",
    en: "pidgeot",
    fr: "roucarnage",
    ja: "ピジョット",
    zh: "大比鸟",
  },
  number: 18,
  pokemonTypes: ["normal", "flying"],
},{
  names: {
    de: "rattfratz",
    en: "rattata",
    fr: "rattata",
    ja: "コラッタ",
    zh: "小拉达",
  },
  number: 19,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "rattikarl",
    en: "raticate",
    fr: "rattatac",
    ja: "ラッタ",
    zh: "拉达",
  },
  number: 20,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "habitak",
    en: "spearow",
    fr: "piafabec",
    ja: "オニスズメ",
    zh: "烈雀",
  },
  number: 21,
  pokemonTypes: ["normal", "flying"],
},{
  names: {
    de: "ibitak",
    en: "fearow",
    fr: "rapasdepic",
    ja: "オニドリル",
    zh: "大嘴雀",
  },
  number: 22,
  pokemonTypes: ["normal", "flying"],
},{
  names: {
    de: "rettan",
    en: "ekans",
    fr: "abo",
    ja: "アーボ",
    zh: "阿柏蛇",
  },
  number: 23,
  pokemonTypes: ["poison", ""],
},{
  names: {
    de: "arbok",
    en: "arbok",
    fr: "arbok",
    ja: "アーボック",
    zh: "阿柏怪",
  },
  number: 24,
  pokemonTypes: ["poison", ""],
},{
  names: {
    de: "pikachu",
    en: "pikachu",
    fr: "pikachu",
    ja: "ピカチュウ",
    zh: "皮卡丘",
  },
  number: 25,
  pokemonTypes: ["electric", ""],
},{
  names: {
    de: "raichu",
    en: "raichu",
    fr: "raichu",
    ja: "ライチュウ",
    zh: "雷丘",
  },
  number: 26,
  pokemonTypes: ["electric", ""],
},{
  names: {
    de: "sandan",
    en: "sandshrew",
    fr: "sabelette",
    ja: "サンド",
    zh: "穿山鼠",
  },
  number: 27,
  pokemonTypes: ["ground", ""],
},{
  names: {
    de: "sandamer",
    en: "sandslash",
    fr: "sablaireau",
    ja: "サンドパン",
    zh: "穿山王",
  },
  number: 28,
  pokemonTypes: ["ground", ""],
},{
  names: {
    de: "nidoran",
    en: "nidoran",
    fr: "nidoran",
    ja: "ニドラン",
    zh: "尼多兰",
  },
  number: 29,
  pokemonTypes: ["poison", ""],
},{
  names: {
    de: "nidorina",
    en: "nidorina",
    fr: "nidorina",
    ja: "ニドリーナ",
    zh: "尼多娜",
  },
  number: 30,
  pokemonTypes: ["poison", ""],
},{
  names: {
    de: "nidoqueen",
    en: "nidoqueen",
    fr: "nidoqueen",
    ja: "ニドクイン",
    zh: "尼多后",
  },
  number: 31,
  pokemonTypes: ["poison", "ground"],
},{
  names: {
    de: "nidoran",
    en: "nidoran",
    fr: "nidoran",
    ja: "ニドラン",
    zh: "尼多朗",
  },
  number: 32,
  pokemonTypes: ["poison", ""],
},{
  names: {
    de: "nidorino",
    en: "nidorino",
    fr: "nidorino",
    ja: "ニドリーノ",
    zh: "尼多力诺",
  },
  number: 33,
  pokemonTypes: ["poison", ""],
},{
  names: {
    de: "nidoking",
    en: "nidoking",
    fr: "nidoking",
    ja: "ニドキング",
    zh: "尼多王",
  },
  number: 34,
  pokemonTypes: ["poison", "ground"],
},{
  names: {
    de: "piepi",
    en: "clefairy",
    fr: "mélofée",
    ja: "ピッピ",
    zh: "皮皮",
  },
  number: 35,
  pokemonTypes: ["fairy", ""],
},{
  names: {
    de: "pixi",
    en: "clefable",
    fr: "mélodelfe",
    ja: "ピクシー",
    zh: "皮可西",
  },
  number: 36,
  pokemonTypes: ["fairy", ""],
},{
  names: {
    de: "vulpix",
    en: "vulpix",
    fr: "goupix",
    ja: "ロコン",
    zh: "六尾",
  },
  number: 37,
  pokemonTypes: ["fire", ""],
},{
  names: {
    de: "vulnona",
    en: "ninetales",
    fr: "feunard",
    ja: "キュウコン",
    zh: "九尾",
  },
  number: 38,
  pokemonTypes: ["fire", ""],
},{
  names: {
    de: "pummeluff",
    en: "jigglypuff",
    fr: "rondoudou",
    ja: "プリン",
    zh: "胖丁",
  },
  number: 39,
  pokemonTypes: ["normal", "fairy"],
},{
  names: {
    de: "knuddeluff",
    en: "wigglytuff",
    fr: "grodoudou",
    ja: "プクリン",
    zh: "胖可丁",
  },
  number: 40,
  pokemonTypes: ["normal", "fairy"],
},{
  names: {
    de: "zubat",
    en: "zubat",
    fr: "nosferapti",
    ja: "ズバット",
    zh: "超音蝠",
  },
  number: 41,
  pokemonTypes: ["poison", "flying"],
},{
  names: {
    de: "golbat",
    en: "golbat",
    fr: "nosferalto",
    ja: "ゴルバット",
    zh: "大嘴蝠",
  },
  number: 42,
  pokemonTypes: ["poison", "flying"],
},{
  names: {
    de: "myrapla",
    en: "oddish",
    fr: "mystherbe",
    ja: "ナゾノクサ",
    zh: "走路草",
  },
  number: 43,
  pokemonTypes: ["grass", "poison"],
},{
  names: {
    de: "duflor",
    en: "gloom",
    fr: "ortide",
    ja: "クサイハナ",
    zh: "臭臭花",
  },
  number: 44,
  pokemonTypes: ["grass", "poison"],
},{
  names: {
    de: "giflor",
    en: "vileplume",
    fr: "rafflesia",
    ja: "ラフレシア",
    zh: "霸王花",
  },
  number: 45,
  pokemonTypes: ["grass", "poison"],
},{
  names: {
    de: "paras",
    en: "paras",
    fr: "paras",
    ja: "パラス",
    zh: "派拉斯",
  },
  number: 46,
  pokemonTypes: ["bug", "grass"],
},{
  names: {
    de: "parasek",
    en: "parasect",
    fr: "parasect",
    ja: "パラセクト",
    zh: "派拉斯特",
  },
  number: 47,
  pokemonTypes: ["bug", "grass"],
},{
  names: {
    de: "bluzuk",
    en: "venonat",
    fr: "mimitoss",
    ja: "コンパン",
    zh: "毛球",
  },
  number: 48,
  pokemonTypes: ["bug", "poison"],
},{
  names: {
    de: "omot",
    en: "venomoth",
    fr: "aéromite",
    ja: "モルフォン",
    zh: "摩鲁蛾",
  },
  number: 49,
  pokemonTypes: ["bug", "poison"],
},{
  names: {
    de: "digda",
    en: "diglett",
    fr: "taupiqueur",
    ja: "ディグダ",
    zh: "地鼠",
  },
  number: 50,
  pokemonTypes: ["ground", ""],
},{
  names: {
    de: "digdri",
    en: "dugtrio",
    fr: "triopikeur",
    ja: "ダグトリオ",
    zh: "三地鼠",
  },
  number: 51,
  pokemonTypes: ["ground", ""],
},{
  names: {
    de: "mauzi",
    en: "meowth",
    fr: "miaouss",
    ja: "ニャース",
    zh: "喵喵",
  },
  number: 52,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "snobilikat",
    en: "persian",
    fr: "persian",
    ja: "ペルシアン",
    zh: "猫老大",
  },
  number: 53,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "enton",
    en: "psyduck",
    fr: "psykokwak",
    ja: "コダック",
    zh: "可达鸭",
  },
  number: 54,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "entoron",
    en: "golduck",
    fr: "akwakwak",
    ja: "ゴルダック",
    zh: "哥达鸭",
  },
  number: 55,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "menki",
    en: "mankey",
    fr: "férosinge",
    ja: "マンキー",
    zh: "猴怪",
  },
  number: 56,
  pokemonTypes: ["fighting", ""],
},{
  names: {
    de: "rasaff",
    en: "primeape",
    fr: "colossinge",
    ja: "オコリザル",
    zh: "火暴猴",
  },
  number: 57,
  pokemonTypes: ["fighting", ""],
},{
  names: {
    de: "fukano",
    en: "growlithe",
    fr: "caninos",
    ja: "ガーディ",
    zh: "卡蒂狗",
  },
  number: 58,
  pokemonTypes: ["fire", ""],
},{
  names: {
    de: "arkani",
    en: "arcanine",
    fr: "arcanin",
    ja: "ウインディ",
    zh: "风速狗",
  },
  number: 59,
  pokemonTypes: ["fire", ""],
},{
  names: {
    de: "quapsel",
    en: "poliwag",
    fr: "ptitard",
    ja: "ニョロモ",
    zh: "蚊香蝌蚪",
  },
  number: 60,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "quaputzi",
    en: "poliwhirl",
    fr: "têtarte",
    ja: "ニョロゾ",
    zh: "蚊香君",
  },
  number: 61,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "quappo",
    en: "poliwrath",
    fr: "tartard",
    ja: "ニョロボン",
    zh: "蚊香泳士",
  },
  number: 62,
  pokemonTypes: ["water", "fighting"],
},{
  names: {
    de: "abra",
    en: "abra",
    fr: "abra",
    ja: "ケーシィ",
    zh: "凯西",
  },
  number: 63,
  pokemonTypes: ["psychic", ""],
},{
  names: {
    de: "kadabra",
    en: "kadabra",
    fr: "kadabra",
    ja: "ユンゲラー",
    zh: "勇基拉",
  },
  number: 64,
  pokemonTypes: ["psychic", ""],
},{
  names: {
    de: "simsala",
    en: "alakazam",
    fr: "alakazam",
    ja: "フーディン",
    zh: "胡地",
  },
  number: 65,
  pokemonTypes: ["psychic", ""],
},{
  names: {
    de: "machollo",
    en: "machop",
    fr: "machoc",
    ja: "ワンリキー",
    zh: "腕力",
  },
  number: 66,
  pokemonTypes: ["fighting", ""],
},{
  names: {
    de: "maschock",
    en: "machoke",
    fr: "machopeur",
    ja: "ゴーリキー",
    zh: "豪力",
  },
  number: 67,
  pokemonTypes: ["fighting", ""],
},{
  names: {
    de: "machomei",
    en: "machamp",
    fr: "mackogneur",
    ja: "カイリキー",
    zh: "怪力",
  },
  number: 68,
  pokemonTypes: ["fighting", ""],
},{
  names: {
    de: "knofensa",
    en: "bellsprout",
    fr: "chétiflor",
    ja: "マダツボミ",
    zh: "喇叭芽",
  },
  number: 69,
  pokemonTypes: ["grass", "poison"],
},{
  names: {
    de: "ultrigaria",
    en: "weepinbell",
    fr: "boustiflor",
    ja: "ウツドン",
    zh: "口呆花",
  },
  number: 70,
  pokemonTypes: ["grass", "poison"],
},{
  names: {
    de: "sarzenia",
    en: "victreebel",
    fr: "empiflor",
    ja: "ウツボット",
    zh: "大食花",
  },
  number: 71,
  pokemonTypes: ["grass", "poison"],
},{
  names: {
    de: "tentacha",
    en: "tentacool",
    fr: "tentacool",
    ja: "メノクラゲ",
    zh: "玛瑙水母",
  },
  number: 72,
  pokemonTypes: ["water", "poison"],
},{
  names: {
    de: "tentoxa",
    en: "tentacruel",
    fr: "tentacruel",
    ja: "ドククラゲ",
    zh: "毒刺水母",
  },
  number: 73,
  pokemonTypes: ["water", "poison"],
},{
  names: {
    de: "kleinstein",
    en: "geodude",
    fr: "racaillou",
    ja: "イシツブテ",
    zh: "小拳石",
  },
  number: 74,
  pokemonTypes: ["rock", "ground"],
},{
  names: {
    de: "georok",
    en: "graveler",
    fr: "gravalanch",
    ja: "ゴローン",
    zh: "隆隆石",
  },
  number: 75,
  pokemonTypes: ["rock", "ground"],
},{
  names: {
    de: "geowaz",
    en: "golem",
    fr: "grolem",
    ja: "ゴローニャ",
    zh: "隆隆岩",
  },
  number: 76,
  pokemonTypes: ["rock", "ground"],
},{
  names: {
    de: "ponita",
    en: "ponyta",
    fr: "ponyta",
    ja: "ポニータ",
    zh: "小火马",
  },
  number: 77,
  pokemonTypes: ["fire", ""],
},{
  names: {
    de: "gallopa",
    en: "rapidash",
    fr: "galopa",
    ja: "ギャロップ",
    zh: "烈焰马",
  },
  number: 78,
  pokemonTypes: ["fire", ""],
},{
  names: {
    de: "flegmon",
    en: "slowpoke",
    fr: "ramoloss",
    ja: "ヤドン",
    zh: "呆呆兽",
  },
  number: 79,
  pokemonTypes: ["water", "psychic"],
},{
  names: {
    de: "lahmus",
    en: "slowbro",
    fr: "flagadoss",
    ja: "ヤドラン",
    zh: "呆壳兽",
  },
  number: 80,
  pokemonTypes: ["water", "psychic"],
},{
  names: {
    de: "magnetilo",
    en: "magnemite",
    fr: "magnéti",
    ja: "コイル",
    zh: "小磁怪",
  },
  number: 81,
  pokemonTypes: ["electric", "steel"],
},{
  names: {
    de: "magneton",
    en: "magneton",
    fr: "magnéton",
    ja: "レアコイル",
    zh: "三合一磁怪",
  },
  number: 82,
  pokemonTypes: ["electric", "steel"],
},{
  names: {
    de: "porenta",
    en: "farfetch'd",
    fr: "canarticho",
    ja: "カモネギ",
    zh: "大葱鸭",
  },
  number: 83,
  pokemonTypes: ["normal", "flying"],
},{
  names: {
    de: "dodu",
    en: "doduo",
    fr: "doduo",
    ja: "ドードー",
    zh: "嘟嘟",
  },
  number: 84,
  pokemonTypes: ["normal", "flying"],
},{
  names: {
    de: "dodri",
    en: "dodrio",
    fr: "dodrio",
    ja: "ドードリオ",
    zh: "嘟嘟利",
  },
  number: 85,
  pokemonTypes: ["normal", "flying"],
},{
  names: {
    de: "jurob",
    en: "seel",
    fr: "otaria",
    ja: "パウワウ",
    zh: "小海狮",
  },
  number: 86,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "jugong",
    en: "dewgong",
    fr: "lamantine",
    ja: "ジュゴン",
    zh: "白海狮",
  },
  number: 87,
  pokemonTypes: ["water", "ice"],
},{
  names: {
    de: "sleima",
    en: "grimer",
    fr: "tadmorv",
    ja: "ベトベター",
    zh: "臭泥",
  },
  number: 88,
  pokemonTypes: ["poison", ""],
},{
  names: {
    de: "sleimok",
    en: "muk",
    fr: "grotadmorv",
    ja: "ベトベトン",
    zh: "臭臭泥",
  },
  number: 89,
  pokemonTypes: ["poison", ""],
},{
  names: {
    de: "muschas",
    en: "shellder",
    fr: "kokiyas",
    ja: "シェルダー",
    zh: "大舌贝",
  },
  number: 90,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "austos",
    en: "cloyster",
    fr: "crustabri",
    ja: "パルシェン",
    zh: "刺甲贝",
  },
  number: 91,
  pokemonTypes: ["water", "ice"],
},{
  names: {
    de: "nebulak",
    en: "gastly",
    fr: "fantominus",
    ja: "ゴース",
    zh: "鬼斯",
  },
  number: 92,
  pokemonTypes: ["ghost", "poison"],
},{
  names: {
    de: "alpollo",
    en: "haunter",
    fr: "spectrum",
    ja: "ゴースト",
    zh: "鬼斯通",
  },
  number: 93,
  pokemonTypes: ["ghost", "poison"],
},{
  names: {
    de: "gengar",
    en: "gengar",
    fr: "ectoplasma",
    ja: "ゲンガー",
    zh: "耿鬼",
  },
  number: 94,
  pokemonTypes: ["ghost", "poison"],
},{
  names: {
    de: "onix",
    en: "onix",
    fr: "onix",
    ja: "イワーク",
    zh: "大岩蛇",
  },
  number: 95,
  pokemonTypes: ["rock", "ground"],
},{
  names: {
    de: "traumato",
    en: "drowzee",
    fr: "soporifik",
    ja: "スリープ",
    zh: "催眠貘",
  },
  number: 96,
  pokemonTypes: ["psychic", ""],
},{
  names: {
    de: "hypno",
    en: "hypno",
    fr: "hypnomade",
    ja: "スリーパー",
    zh: "引梦貘人",
  },
  number: 97,
  pokemonTypes: ["psychic", ""],
},{
  names: {
    de: "krabby",
    en: "krabby",
    fr: "krabby",
    ja: "クラブ",
    zh: "大钳蟹",
  },
  number: 98,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "kingler",
    en: "kingler",
    fr: "krabboss",
    ja: "キングラー",
    zh: "巨钳蟹",
  },
  number: 99,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "voltobal",
    en: "voltorb",
    fr: "voltorbe",
    ja: "ビリリダマ",
    zh: "霹雳电球",
  },
  number: 100,
  pokemonTypes: ["electric", ""],
},{
  names: {
    de: "lektrobal",
    en: "electrode",
    fr: "électrode",
    ja: "マルマイン",
    zh: "顽皮雷弹",
  },
  number: 101,
  pokemonTypes: ["electric", ""],
},{
  names: {
    de: "owei",
    en: "exeggcute",
    fr: "noeunoeuf",
    ja: "タマタマ",
    zh: "蛋蛋",
  },
  number: 102,
  pokemonTypes: ["grass", "psychic"],
},{
  names: {
    de: "kokowei",
    en: "exeggutor",
    fr: "noadkoko",
    ja: "ナッシー",
    zh: "椰蛋树",
  },
  number: 103,
  pokemonTypes: ["grass", "psychic"],
},{
  names: {
    de: "tragosso",
    en: "cubone",
    fr: "osselait",
    ja: "カラカラ",
    zh: "卡拉卡拉",
  },
  number: 104,
  pokemonTypes: ["ground", ""],
},{
  names: {
    de: "knogga",
    en: "marowak",
    fr: "ossatueur",
    ja: "ガラガラ",
    zh: "嘎啦嘎啦",
  },
  number: 105,
  pokemonTypes: ["ground", ""],
},{
  names: {
    de: "kicklee",
    en: "hitmonlee",
    fr: "kicklee",
    ja: "サワムラー",
    zh: "飞腿郎",
  },
  number: 106,
  pokemonTypes: ["fighting", ""],
},{
  names: {
    de: "nockchan",
    en: "hitmonchan",
    fr: "tygnon",
    ja: "エビワラー",
    zh: "快拳郎",
  },
  number: 107,
  pokemonTypes: ["fighting", ""],
},{
  names: {
    de: "schlurp",
    en: "lickitung",
    fr: "excelangue",
    ja: "ベロリンガ",
    zh: "大舌头",
  },
  number: 108,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "smogon",
    en: "koffing",
    fr: "smogo",
    ja: "ドガース",
    zh: "瓦斯弹",
  },
  number: 109,
  pokemonTypes: ["poison", ""],
},{
  names: {
    de: "smogmog",
    en: "weezing",
    fr: "smogogo",
    ja: "マタドガス",
    zh: "双弹瓦斯",
  },
  number: 110,
  pokemonTypes: ["poison", ""],
},{
  names: {
    de: "rihorn",
    en: "rhyhorn",
    fr: "rhinocorne",
    ja: "サイホーン",
    zh: "独角犀牛",
  },
  number: 111,
  pokemonTypes: ["ground", "rock"], 
},{
  names: {
    de: "rizeros",
    en: "rhydon",
    fr: "rhinoféros",
    ja: "サイドン",
    zh: "钻角犀兽",
  },
  number: 112,
  pokemonTypes: ["ground", "rock"],
},{
  names: {
    de: "chaneira",
    en: "chansey",
    fr: "leveinard",
    ja: "ラッキー",
    zh: "吉利蛋",
  },
  number: 113,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "tangela",
    en: "tangela",
    fr: "saquedeneu",
    ja: "モンジャラ",
    zh: "蔓藤怪",
  },
  number: 114,
  pokemonTypes: ["grass", ""],
},{
  names: {
    de: "kangama",
    en: "kangaskhan",
    fr: "kangourex",
    ja: "ガルーラ",
    zh: "袋兽",
  },
  number: 115,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "seeper",
    en: "horsea",
    fr: "hypotrempe",
    ja: "タッツー",
    zh: "墨海马",
  },
  number: 116,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "seemon",
    en: "seadra",
    fr: "hypocéan",
    ja: "シードラ",
    zh: "海刺龙",
  },
  number: 117,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "goldini",
    en: "goldeen",
    fr: "poissirène",
    ja: "トサキント",
    zh: "角金鱼",
  },
  number: 118,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "golking",
    en: "seaking",
    fr: "poissoroy",
    ja: "アズマオウ",
    zh: "金鱼王",
  },
  number: 119,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "sterndu",
    en: "staryu",
    fr: "stari",
    ja: "ヒトデマン",
    zh: "海星星",
  },
  number: 120,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "starmie",
    en: "starmie",
    fr: "staross",
    ja: "スターミー",
    zh: "宝石海星",
  },
  number: 121,
  pokemonTypes: ["water", "psychic"],
},{
  names: {
    de: "pantimos",
    en: "mr. mime",
    fr: "m. mime",
    ja: "バリヤード",
    zh: "魔墙人偶",
  },
  number: 122,
  pokemonTypes: ["psychic", "fairy"],
},{
  names: {
    de: "sichlor",
    en: "scyther",
    fr: "insécateur",
    ja: "ストライク",
    zh: "飞天螳螂",
  },
  number: 123,
  pokemonTypes: ["bug", "flying"],
},{
  names: {
    de: "rossana",
    en: "jynx",
    fr: "lippoutou",
    ja: "ルージュラ",
    zh: "迷唇姐",
  },
  number: 124,
  pokemonTypes: ["ice", "psychic"],
},{
  names: {
    de: "elektek",
    en: "electabuzz",
    fr: "élektek",
    ja: "エレブー",
    zh: "电击兽",
  },
  number: 125,
  pokemonTypes: ["electric", ""],
},{
  names: {
    de: "magmar",
    en: "magmar",
    fr: "magmar",
    ja: "ブーバー",
    zh: "鸭嘴火兽",
  },
  number: 126,
  pokemonTypes: ["fire", ""],
},{
  names: {
    de: "pinsir",
    en: "pinsir",
    fr: "scarabrute",
    ja: "カイロス",
    zh: "凯罗斯",
  },
  number: 127,
  pokemonTypes: ["bug", ""],
},{
  names: {
    de: "tauros",
    en: "tauros",
    fr: "tauros",
    ja: "ケンタロス",
    zh: "肯泰罗",
  },
  number: 128,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "karpador",
    en: "magikarp",
    fr: "magicarpe",
    ja: "コイキング",
    zh: "鲤鱼王",
  },
  number: 129,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "garados",
    en: "gyarados",
    fr: "léviator",
    ja: "ギャラドス",
    zh: "暴鲤龙",
  },
  number: 130,
  pokemonTypes: ["water", "flying"],
},{
  names: {
    de: "lapras",
    en: "lapras",
    fr: "lokhlass",
    ja: "ラプラス",
    zh: "拉普拉斯",
  },
  number: 131,
  pokemonTypes: ["water", "ice"],
},{
  names: {
    de: "ditto",
    en: "ditto",
    fr: "métamorph",
    ja: "メタモン",
    zh: "百变怪",
  },
  number: 132,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "evoli",
    en: "eevee",
    fr: "évoli",
    ja: "イーブイ",
    zh: "伊布",
  },
  number: 133,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "aquana",
    en: "vaporeon",
    fr: "aquali",
    ja: "シャワーズ",
    zh: "水伊布",
  },
  number: 134,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "blitza",
    en: "jolteon",
    fr: "voltali",
    ja: "サンダース",
    zh: "雷伊布",
  },
  number: 135,
  pokemonTypes: ["electric", ""],
},{
  names: {
    de: "flamara",
    en: "flareon",
    fr: "pyroli",
    ja: "ブースター",
    zh: "火伊布",
  },
  number: 136,
  pokemonTypes: ["fire", ""],
},{
  names: {
    de: "porygon",
    en: "porygon",
    fr: "porygon",
    ja: "ポリゴン",
    zh: "多边兽",
  },
  number: 137,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "amonitas",
    en: "omanyte",
    fr: "amonita",
    ja: "オムナイト",
    zh: "菊石兽",
  },
  number: 138,
  pokemonTypes: ["rock", "water"],
},{
  names: {
    de: "amoroso",
    en: "omastar",
    fr: "amonistar",
    ja: "オムスター",
    zh: "多刺菊石兽",
  },
  number: 139,
  pokemonTypes: ["rock", "water"],
},{
  names: {
    de: "kabuto",
    en: "kabuto",
    fr: "kabuto",
    ja: "カブト",
    zh: "化石盔",
  },
  number: 140,
  pokemonTypes: ["rock", "water"],
},{
  names: {
    de: "kabutops",
    en: "kabutops",
    fr: "kabutops",
    ja: "カブトプス",
    zh: "镰刀盔",
  },
  number: 141,
  pokemonTypes: ["rock", "water"],
},{
  names: {
    de: "aerodactyl",
    en: "aerodactyl",
    fr: "ptéra",
    ja: "プテラ",
    zh: "化石翼龙",
  },
  number: 142,
  pokemonTypes: ["rock", "flying"],
},{
  names: {
    de: "relaxo",
    en: "snorlax",
    fr: "ronflex",
    ja: "カビゴン",
    zh: "卡比兽",
  },
  number: 143,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "arktos",
    en: "articuno",
    fr: "artikodin",
    ja: "フリーザー",
    zh: "急冻鸟",
  },
  number: 144,
  pokemonTypes: ["ice", "flying"],
},{
  names: {
    de: "zapdos",
    en: "zapdos",
    fr: "électhor",
    ja: "サンダー",
    zh: "闪电鸟",
  },
  number: 145,
  pokemonTypes: ["electric", "flying"],
},{
  names: {
    de: "lavados",
    en: "moltres",
    fr: "sulfura",
    ja: "ファイヤー",
    zh: "火焰鸟",
  },
  number: 146,
  pokemonTypes: ["fire", "flying"],
},{
  names: {
    de: "dratini",
    en: "dratini",
    fr: "minidraco",
    ja: "ミニリュウ",
    zh: "迷你龙",
  },
  number: 147,
  pokemonTypes: ["dragon", ""],
},{
  names: {
    de: "dragonir",
    en: "dragonair",
    fr: "draco",
    ja: "ハクリュー",
    zh: "哈克龙",
  },
  number: 148,
  pokemonTypes: ["dragon", ""],
},{
  names: {
    de: "dragoran",
    en: "dragonite",
    fr: "dracolosse",
    ja: "カイリュー",
    zh: "快龙",
  },
  number: 149,
  pokemonTypes: ["dragon", "flying"],
},{
  names: {
    de: "mewtu",
    en: "mewtwo",
    fr: "mewtwo",
    ja: "ミュウツー",
    zh: "超梦",
  },
  number: 150,
  pokemonTypes: ["psychic", ""],
},{
  names: {
    de: "mew",
    en: "mew",
    fr: "mew",
    ja: "ミュウ",
    zh: "梦幻",
  },
  number: 151,
  pokemonTypes: ["psychic", ""],
},{
  names: {
    de: "endivie",
    en: "chikorita",
    fr: "germignon",
    ja: "チコリータ",
    zh: "菊草叶",
  },
  number: 152,
  pokemonTypes: ["grass", ""],
},{
  names: {
    de: "lorblatt",
    en: "bayleef",
    fr: "macronium",
    ja: "ベイリーフ",
    zh: "月桂叶",
  },
  number: 153,
  pokemonTypes: ["grass", ""],
},{
  names: {
    de: "meganie",
    en: "meganium",
    fr: "méganium",
    ja: "メガニウム",
    zh: "大竺葵",
  },
  number: 154,
  pokemonTypes: ["grass", ""],
},{
  names: {
    de: "feurigel",
    en: "cyndaquil",
    fr: "héricendre",
    ja: "ヒノアラシ",
    zh: "火球鼠",
  },
  number: 155,
  pokemonTypes: ["fire", ""],
},{
  names: {
    de: "igelavar",
    en: "quilava",
    fr: "feurisson",
    ja: "マグマラシ",
    zh: "火岩鼠",
  },
  number: 156,
  pokemonTypes: ["fire", ""],
},{
  names: {
    de: "tornupto",
    en: "typhlosion",
    fr: "typhlosion",
    ja: "バクフーン",
    zh: "火暴兽",
  },
  number: 157,
  pokemonTypes: ["fire", ""],
},{
  names: {
    de: "karnimani",
    en: "totodile",
    fr: "kaiminus",
    ja: "ワニノコ",
    zh: "小锯鳄",
  },
  number: 158,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "tyracroc",
    en: "croconaw",
    fr: "crocrodil",
    ja: "アリゲイツ",
    zh: "蓝鳄",
  },
  number: 159,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "impergator",
    en: "feraligatr",
    fr: "aligatueur",
    ja: "オーダイル",
    zh: "大力鳄",
  },
  number: 160,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "wiesor",
    en: "sentret",
    fr: "fouinette",
    ja: "オタチ",
    zh: "尾立",
  },
  number: 161,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "wiesenior",
    en: "furret",
    fr: "fouinar",
    ja: "オオタチ",
    zh: "大尾立",
  },
  number: 162,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "hoothoot",
    en: "hoothoot",
    fr: "hoothoot",
    ja: "ホーホー",
    zh: "咕咕",
  },
  number: 163,
  pokemonTypes: ["normal", "flying"],
},{
  names: {
    de: "noctuh",
    en: "noctowl",
    fr: "noarfang",
    ja: "ヨルノズク",
    zh: "猫头夜鹰",
  },
  number: 164,
  pokemonTypes: ["normal", "flying"],
},{
  names: {
    de: "ledyba",
    en: "ledyba",
    fr: "coxy",
    ja: "レディバ",
    zh: "芭瓢虫",
  },
  number: 165,
  pokemonTypes: ["bug", "flying"],
},{
  names: {
    de: "ledian",
    en: "ledian",
    fr: "coxyclaque",
    ja: "レディアン",
    zh: "安瓢虫",
  },
  number: 166,
  pokemonTypes: ["bug", "flying"],
},{
  names: {
    de: "webarak",
    en: "spinarak",
    fr: "mimigal",
    ja: "イトマル",
    zh: "圆丝蛛",
  },
  number: 167,
  pokemonTypes: ["bug", "poison"],
},{
  names: {
    de: "ariados",
    en: "ariados",
    fr: "migalos",
    ja: "アリアドス",
    zh: "阿利多斯",
  },
  number: 168,
  pokemonTypes: ["bug", "poison"],
},{
  names: {
    de: "iksbat",
    en: "crobat",
    fr: "nostenfer",
    ja: "クロバット",
    zh: "叉字蝠",
  },
  number: 169,
  pokemonTypes: ["poison", "flying"],
},{
  names: {
    de: "lampi",
    en: "chinchou",
    fr: "loupio",
    ja: "チョンチー",
    zh: "灯笼鱼",
  },
  number: 170,
  pokemonTypes: ["water", "electric"],
},{
  names: {
    de: "lanturn",
    en: "lanturn",
    fr: "lanturn",
    ja: "ランターン",
    zh: "电灯怪",
  },
  number: 171,
  pokemonTypes: ["water", "electric"],
},{
  names: {
    de: "pichu",
    en: "pichu",
    fr: "pichu",
    ja: "ピチュー",
    zh: "皮丘",
  },
  number: 172,
  pokemonTypes: ["electric", ""],
},{
  names: {
    de: "pii",
    en: "cleffa",
    fr: "mélo",
    ja: "ピィ",
    zh: "皮宝宝",
  },
  number: 173,
  pokemonTypes: ["fairy", ""],
},{
  names: {
    de: "fluffeluff",
    en: "igglybuff",
    fr: "toudoudou",
    ja: "ププリン",
    zh: "宝宝丁",
  },
  number: 174,
  pokemonTypes: ["normal", "fairy"],
},{
  names: {
    de: "togepi",
    en: "togepi",
    fr: "togepi",
    ja: "トゲピー",
    zh: "波克比",
  },
  number: 175,
  pokemonTypes: ["fairy", ""],
},{
  names: {
    de: "togetic",
    en: "togetic",
    fr: "togetic",
    ja: "トゲチック",
    zh: "波克基古",
  },
  number: 176,
  pokemonTypes: ["fairy", "flying"],
},{
  names: {
    de: "natu",
    en: "natu",
    fr: "natu",
    ja: "ネイティ",
    zh: "天然雀",
  },
  number: 177,
  pokemonTypes: ["psychic", "flying"],
},{
  names: {
    de: "xatu",
    en: "xatu",
    fr: "xatu",
    ja: "ネイティオ",
    zh: "天然鸟",
  },
  number: 178,
  pokemonTypes: ["psychic", "flying"],
},{
  names: {
    de: "voltilamm",
    en: "mareep",
    fr: "wattouat",
    ja: "メリープ",
    zh: "咩利羊",
  },
  number: 179,
  pokemonTypes: ["electric", ""],
},{
  names: {
    de: "waaty",
    en: "flaaffy",
    fr: "lainergie",
    ja: "モココ",
    zh: "茸茸羊",
  },
  number: 180,
  pokemonTypes: ["electric", ""],
},{
  names: {
    de: "ampharos",
    en: "ampharos",
    fr: "pharamp",
    ja: "デンリュウ",
    zh: "电龙",
  },
  number: 181,
  pokemonTypes: ["electric", ""],
},{
  names: {
    de: "blubella",
    en: "bellossom",
    fr: "joliflor",
    ja: "キレイハナ",
    zh: "美丽花",
  },
  number: 182,
  pokemonTypes: ["grass", ""],
},{
  names: {
    de: "marill",
    en: "marill",
    fr: "marill",
    ja: "マリル",
    zh: "玛力露",
  },
  number: 183,
  pokemonTypes: ["water", "fairy"],
},{
  names: {
    de: "azumarill",
    en: "azumarill",
    fr: "azumarill",
    ja: "マリルリ",
    zh: "玛力露丽",
  },
  number: 184,
  pokemonTypes: ["water", "fairy"],
},{
  names: {
    de: "mogelbaum",
    en: "sudowoodo",
    fr: "simularbre",
    ja: "ウソッキー",
    zh: "树才怪",
  },
  number: 185,
  pokemonTypes: ["rock", ""],
},{
  names: {
    de: "quaxo",
    en: "politoed",
    fr: "tarpaud",
    ja: "ニョロトノ",
    zh: "蚊香蛙皇",
  },
  number: 186,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "hoppspross",
    en: "hoppip",
    fr: "granivol",
    ja: "ハネッコ",
    zh: "毽子草",
  },
  number: 187,
  pokemonTypes: ["grass", "flying"],
},{
  names: {
    de: "hubelupf",
    en: "skiploom",
    fr: "floravol",
    ja: "ポポッコ",
    zh: "毽子花",
  },
  number: 188,
  pokemonTypes: ["grass", "flying"],
},{
  names: {
    de: "papungha",
    en: "jumpluff",
    fr: "cotovol",
    ja: "ワタッコ",
    zh: "毽子棉",
  },
  number: 189,
  pokemonTypes: ["grass", "flying"],
},{
  names: {
    de: "griffel",
    en: "aipom",
    fr: "capumain",
    ja: "エイパム",
    zh: "长尾怪手",
  },
  number: 190,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "sonnkern",
    en: "sunkern",
    fr: "tournegrin",
    ja: "ヒマナッツ",
    zh: "向日种子",
  },
  number: 191,
  pokemonTypes: ["grass", ""],
},{
  names: {
    de: "sonnflora",
    en: "sunflora",
    fr: "héliatronc",
    ja: "キマワリ",
    zh: "向日花怪",
  },
  number: 192,
  pokemonTypes: ["grass", ""],
},{
  names: {
    de: "yanma",
    en: "yanma",
    fr: "yanma",
    ja: "ヤンヤンマ",
    zh: "蜻蜻蜓",
  },
  number: 193,
  pokemonTypes: ["bug", "flying"],
},{
  names: {
    de: "felino",
    en: "wooper",
    fr: "axoloto",
    ja: "ウパー",
    zh: "乌波",
  },
  number: 194,
  pokemonTypes: ["water", "ground"],
},{
  names: {
    de: "morlord",
    en: "quagsire",
    fr: "maraiste",
    ja: "ヌオー",
    zh: "沼王",
  },
  number: 195,
  pokemonTypes: ["water", "ground"],
},{
  names: {
    de: "psiana",
    en: "espeon",
    fr: "mentali",
    ja: "エーフィ",
    zh: "太阳伊布",
  },
  number: 196,
  pokemonTypes: ["psychic", ""],
},{
  names: {
    de: "nachtara",
    en: "umbreon",
    fr: "noctali",
    ja: "ブラッキー",
    zh: "月亮伊布",
  },
  number: 197,
  pokemonTypes: ["dark", ""],
},{
  names: {
    de: "kramurx",
    en: "murkrow",
    fr: "cornèbre",
    ja: "ヤミカラス",
    zh: "黑暗鸦",
  },
  number: 198,
  pokemonTypes: ["dark", "flying"],
},{
  names: {
    de: "laschoking",
    en: "slowking",
    fr: "roigada",
    ja: "ヤドキング",
    zh: "呆呆王",
  },
  number: 199,
  pokemonTypes: ["water", "psychic"],
},{
  names: {
    de: "traunfugil",
    en: "misdreavus",
    fr: "feuforêve",
    ja: "ムウマ",
    zh: "梦妖",
  },
  number: 200,
  pokemonTypes: ["ghost", ""],
},{
  names: {
    de: "icognito",
    en: "unown",
    fr: "zarbi",
    ja: "アンノーン",
    zh: "未知图腾",
  },
  number: 201,
  pokemonTypes: ["psychic", ""],
},{
  names: {
    de: "woingenau",
    en: "wobbuffet",
    fr: "qulbutoké",
    ja: "ソーナンス",
    zh: "果然翁",
  },
  number: 202,
  pokemonTypes: ["psychic", ""],
},{
  names: {
    de: "girafarig",
    en: "girafarig",
    fr: "girafarig",
    ja: "キリンリキ",
    zh: "麒麟奇",
  },
  number: 203,
  pokemonTypes: ["normal", "psychic"],
},{
  names: {
    de: "tannza",
    en: "pineco",
    fr: "pomdepik",
    ja: "クヌギダマ",
    zh: "榛果球",
  },
  number: 204,
  pokemonTypes: ["bug", ""],
},{
  names: {
    de: "forstellka",
    en: "forretress",
    fr: "foretress",
    ja: "フォレトス",
    zh: "佛烈托斯",
  },
  number: 205,
  pokemonTypes: ["bug", "steel"],
},{
  names: {
    de: "dummisel",
    en: "dunsparce",
    fr: "insolourdo",
    ja: "ノコッチ",
    zh: "土龙弟弟",
  },
  number: 206,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "skorgla",
    en: "gligar",
    fr: "scorplane",
    ja: "グライガー",
    zh: "天蝎",
  },
  number: 207,
  pokemonTypes: ["ground", "flying"],
},{
  names: {
    de: "stahlos",
    en: "steelix",
    fr: "steelix",
    ja: "ハガネール",
    zh: "大钢蛇",
  },
  number: 208,
  pokemonTypes: ["steel", "ground"],
},{
  names: {
    de: "snubbull",
    en: "snubbull",
    fr: "snubbull",
    ja: "ブルー",
    zh: "布鲁",
  },
  number: 209,
  pokemonTypes: ["fairy", ""],
},{
  names: {
    de: "granbull",
    en: "granbull",
    fr: "granbull",
    ja: "グランブル",
    zh: "布鲁皇",
  },
  number: 210,
  pokemonTypes: ["fairy", ""],
},{
  names: {
    de: "baldorfish",
    en: "qwilfish",
    fr: "qwilfish",
    ja: "ハリーセン",
    zh: "千针鱼",
  },
  number: 211,
  pokemonTypes: ["water", "poison"],
},{
  names: {
    de: "scherox",
    en: "scizor",
    fr: "cizayox",
    ja: "ハッサム",
    zh: "巨钳螳螂",
  },
  number: 212,
  pokemonTypes: ["bug", "steel"],
},{
  names: {
    de: "pottrott",
    en: "shuckle",
    fr: "caratroc",
    ja: "ツボツボ",
    zh: "壶壶",
  },
  number: 213,
  pokemonTypes: ["bug", "rock"],
},{
  names: {
    de: "skaraborn",
    en: "heracross",
    fr: "scarhino",
    ja: "ヘラクロス",
    zh: "赫拉克罗斯",
  },
  number: 214,
  pokemonTypes: ["bug", "fighting"],
},{
  names: {
    de: "sniebel",
    en: "sneasel",
    fr: "farfuret",
    ja: "ニューラ",
    zh: "狃拉",
  },
  number: 215,
  pokemonTypes: ["dark", "ice"],
},{
  names: {
    de: "teddiursa",
    en: "teddiursa",
    fr: "teddiursa",
    ja: "ヒメグマ",
    zh: "熊宝宝",
  },
  number: 216,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "ursaring",
    en: "ursaring",
    fr: "ursaring",
    ja: "リングマ",
    zh: "圈圈熊",
  },
  number: 217,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "schneckmag",
    en: "slugma",
    fr: "limagma",
    ja: "マグマッグ",
    zh: "熔岩虫",
  },
  number: 218,
  pokemonTypes: ["fire", ""],
},{
  names: {
    de: "magcargo",
    en: "magcargo",
    fr: "volcaropod",
    ja: "マグカルゴ",
    zh: "熔岩蜗牛",
  },
  number: 219,
  pokemonTypes: ["fire", "rock"],
},{
  names: {
    de: "quiekel",
    en: "swinub",
    fr: "marcacrin",
    ja: "ウリムー",
    zh: "小山猪",
  },
  number: 220,
  pokemonTypes: ["ice", "ground"],
},{
  names: {
    de: "keifel",
    en: "piloswine",
    fr: "cochignon",
    ja: "イノムー",
    zh: "长毛猪",
  },
  number: 221,
  pokemonTypes: ["ice", "ground"],
},{
  names: {
    de: "corasonn",
    en: "corsola",
    fr: "corayon",
    ja: "サニーゴ",
    zh: "太阳珊瑚",
  },
  number: 222,
  pokemonTypes: ["water", "rock"],
},{
  names: {
    de: "remoraid",
    en: "remoraid",
    fr: "rémoraid",
    ja: "テッポウオ",
    zh: "铁炮鱼",
  },
  number: 223,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "octillery",
    en: "octillery",
    fr: "octillery",
    ja: "オクタン",
    zh: "章鱼桶",
  },
  number: 224,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "botogel",
    en: "delibird",
    fr: "cadoizo",
    ja: "デリバード",
    zh: "信使鸟",
  },
  number: 225,
  pokemonTypes: ["ice", "flying"],
},{
  names: {
    de: "mantax",
    en: "mantine",
    fr: "démanta",
    ja: "マンタイン",
    zh: "巨翅飞鱼",
  },
  number: 226,
  pokemonTypes: ["water", "flying"],
},{
  names: {
    de: "panzaeron",
    en: "skarmory",
    fr: "airmure",
    ja: "エアームド",
    zh: "盔甲鸟",
  },
  number: 227,
  pokemonTypes: ["steel", "flying"],
},{
  names: {
    de: "hunduster",
    en: "houndour",
    fr: "malosse",
    ja: "デルビル",
    zh: "戴鲁比",
  },
  number: 228,
  pokemonTypes: ["dark", "fire"],
},{
  names: {
    de: "hundemon",
    en: "houndoom",
    fr: "démolosse",
    ja: "ヘルガー",
    zh: "黑鲁加",
  },
  number: 229,
  pokemonTypes: ["dark", "fire"],
},{
  names: {
    de: "seedraking",
    en: "kingdra",
    fr: "hyporoi",
    ja: "キングドラ",
    zh: "刺龙王",
  },
  number: 230,
  pokemonTypes: ["water", "dragon"],
},{
  names: {
    de: "phanpy",
    en: "phanpy",
    fr: "phanpy",
    ja: "ゴマゾウ",
    zh: "小小象",
  },
  number: 231,
  pokemonTypes: ["ground", ""],
},{
  names: {
    de: "donphan",
    en: "donphan",
    fr: "donphan",
    ja: "ドンファン",
    zh: "顿甲",
  },
  number: 232,
  pokemonTypes: ["ground", ""],
},{
  names: {
    de: "porygon2",
    en: "porygon2",
    fr: "porygon2",
    ja: "ポリゴン２",
    zh: "多边兽２型",
  },
  number: 233,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "damhirplex",
    en: "stantler",
    fr: "cerfrousse",
    ja: "オドシシ",
    zh: "惊角鹿",
  },
  number: 234,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "farbeagle",
    en: "smeargle",
    fr: "queulorior",
    ja: "ドーブル",
    zh: "图图犬",
  },
  number: 235,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "rabauz",
    en: "tyrogue",
    fr: "debugant",
    ja: "バルキー",
    zh: "无畏小子",
  },
  number: 236,
  pokemonTypes: ["fighting", ""],
},{
  names: {
    de: "kapoera",
    en: "hitmontop",
    fr: "kapoera",
    ja: "カポエラー",
    zh: "战舞郎",
  },
  number: 237,
  pokemonTypes: ["fighting", ""],
},{
  names: {
    de: "kussilla",
    en: "smoochum",
    fr: "lippouti",
    ja: "ムチュール",
    zh: "迷唇娃",
  },
  number: 238,
  pokemonTypes: ["ice", "psychic"],
},{
  names: {
    de: "elekid",
    en: "elekid",
    fr: "élekid",
    ja: "エレキッド",
    zh: "电击怪",
  },
  number: 239,
  pokemonTypes: ["electric", ""],
},{
  names: {
    de: "magby",
    en: "magby",
    fr: "magby",
    ja: "ブビィ",
    zh: "鸭嘴宝宝",
  },
  number: 240,
  pokemonTypes: ["fire", ""],
},{
  names: {
    de: "miltank",
    en: "miltank",
    fr: "écrémeuh",
    ja: "ミルタンク",
    zh: "大奶罐",
  },
  number: 241,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "heiteira",
    en: "blissey",
    fr: "leuphorie",
    ja: "ハピナス",
    zh: "幸福蛋",
  },
  number: 242,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "raikou",
    en: "raikou",
    fr: "raikou",
    ja: "ライコウ",
    zh: "雷公",
  },
  number: 243,
  pokemonTypes: ["electric", ""],
},{
  names: {
    de: "entei",
    en: "entei",
    fr: "entei",
    ja: "エンテイ",
    zh: "炎帝",
  },
  number: 244,
  pokemonTypes: ["fire", ""],
},{
  names: {
    de: "suicune",
    en: "suicune",
    fr: "suicune",
    ja: "スイクン",
    zh: "水君",
  },
  number: 245,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "larvitar",
    en: "larvitar",
    fr: "embrylex",
    ja: "ヨーギラス",
    zh: "幼基拉斯",
  },
  number: 246,
  pokemonTypes: ["rock", "ground"],
},{
  names: {
    de: "pupitar",
    en: "pupitar",
    fr: "ymphect",
    ja: "サナギラス",
    zh: "沙基拉斯",
  },
  number: 247,
  pokemonTypes: ["rock", "ground"],
},{
  names: {
    de: "despotar",
    en: "tyranitar",
    fr: "tyranocif",
    ja: "バンギラス",
    zh: "班基拉斯",
  },
  number: 248,
  pokemonTypes: ["rock", "dark"],
},{
  names: {
    de: "lugia",
    en: "lugia",
    fr: "lugia",
    ja: "ルギア",
    zh: "洛奇亚",
  },
  number: 249,
  pokemonTypes: ["psychic", "flying"],
},{
  names: {
    de: "ho-oh",
    en: "ho-oh",
    fr: "ho-oh",
    ja: "ホウオウ",
    zh: "凤王",
  },
  number: 250,
  pokemonTypes: ["fire", "flying"],
},{
  names: {
    de: "celebi",
    en: "celebi",
    fr: "celebi",
    ja: "セレビィ",
    zh: "时拉比",
  },
  number: 251,
  pokemonTypes: ["psychic", "grass"],
},{
  names: {
    de: "geckarbor",
    en: "treecko",
    fr: "arcko",
    ja: "キモリ",
    zh: "木守宫",
  },
  number: 252,
  pokemonTypes: ["grass", ""],
},{
  names: {
    de: "reptain",
    en: "grovyle",
    fr: "massko",
    ja: "ジュプトル",
    zh: "森林蜥蜴",
  },
  number: 253,
  pokemonTypes: ["grass", ""],
},{
  names: {
    de: "gewaldro",
    en: "sceptile",
    fr: "jungko",
    ja: "ジュカイン",
    zh: "蜥蜴王",
  },
  number: 254,
  pokemonTypes: ["grass", ""],
},{
  names: {
    de: "flemmli",
    en: "torchic",
    fr: "poussifeu",
    ja: "アチャモ",
    zh: "火稚鸡",
  },
  number: 255,
  pokemonTypes: ["fire", ""],
},{
  names: {
    de: "jungglut",
    en: "combusken",
    fr: "galifeu",
    ja: "ワカシャモ",
    zh: "力壮鸡",
  },
  number: 256,
  pokemonTypes: ["fire", "fighting"],
},{
  names: {
    de: "lohgock",
    en: "blaziken",
    fr: "braségali",
    ja: "バシャーモ",
    zh: "火焰鸡",
  },
  number: 257,
  pokemonTypes: ["fire", "fighting"],
},{
  names: {
    de: "hydropi",
    en: "mudkip",
    fr: "gobou",
    ja: "ミズゴロウ",
    zh: "水跃鱼",
  },
  number: 258,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "moorabbel",
    en: "marshtomp",
    fr: "flobio",
    ja: "ヌマクロー",
    zh: "沼跃鱼",
  },
  number: 259,
  pokemonTypes: ["water", "ground"],
},{
  names: {
    de: "sumpex",
    en: "swampert",
    fr: "laggron",
    ja: "ラグラージ",
    zh: "巨沼怪",
  },
  number: 260,
  pokemonTypes: ["water", "ground"],
},{
  names: {
    de: "fiffyen",
    en: "poochyena",
    fr: "medhyèna",
    ja: "ポチエナ",
    zh: "土狼犬",
  },
  number: 261,
  pokemonTypes: ["dark", ""],
},{
  names: {
    de: "magnayen",
    en: "mightyena",
    fr: "grahyèna",
    ja: "グラエナ",
    zh: "大狼犬",
  },
  number: 262,
  pokemonTypes: ["dark", ""],
},{
  names: {
    de: "zigzachs",
    en: "zigzagoon",
    fr: "zigzaton",
    ja: "ジグザグマ",
    zh: "蛇纹熊",
  },
  number: 263,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "geradaks",
    en: "linoone",
    fr: "linéon",
    ja: "マッスグマ",
    zh: "直冲熊",
  },
  number: 264,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "waumpel",
    en: "wurmple",
    fr: "chenipotte",
    ja: "ケムッソ",
    zh: "刺尾虫",
  },
  number: 265,
  pokemonTypes: ["bug", ""],
},{
  names: {
    de: "schaloko",
    en: "silcoon",
    fr: "armulys",
    ja: "カラサリス",
    zh: "甲壳茧",
  },
  number: 266,
  pokemonTypes: ["bug", ""],
},{
  names: {
    de: "papinella",
    en: "beautifly",
    fr: "charmillon",
    ja: "アゲハント",
    zh: "狩猎凤蝶",
  },
  number: 267,
  pokemonTypes: ["bug", "flying"],
},{
  names: {
    de: "panekon",
    en: "cascoon",
    fr: "blindalys",
    ja: "マユルド",
    zh: "盾甲茧",
  },
  number: 268,
  pokemonTypes: ["bug", ""],
},{
  names: {
    de: "pudox",
    en: "dustox",
    fr: "papinox",
    ja: "ドクケイル",
    zh: "毒粉蛾",
  },
  number: 269,
  pokemonTypes: ["bug", "poison"],
},{
  names: {
    de: "loturzel",
    en: "lotad",
    fr: "nénupiot",
    ja: "ハスボー",
    zh: "莲叶童子",
  },
  number: 270,
  pokemonTypes: ["water", "grass"],
},{
  names: {
    de: "lombrero",
    en: "lombre",
    fr: "lombre",
    ja: "ハスブレロ",
    zh: "莲帽小童",
  },
  number: 271,
  pokemonTypes: ["water", "grass"],
},{
  names: {
    de: "kappalores",
    en: "ludicolo",
    fr: "ludicolo",
    ja: "ルンパッパ",
    zh: "乐天河童",
  },
  number: 272,
  pokemonTypes: ["water", "grass"],
},{
  names: {
    de: "samurzel",
    en: "seedot",
    fr: "grainipiot",
    ja: "タネボー",
    zh: "橡实果",
  },
  number: 273,
  pokemonTypes: ["grass", ""],
},{
  names: {
    de: "blanas",
    en: "nuzleaf",
    fr: "pifeuil",
    ja: "コノハナ",
    zh: "长鼻叶",
  },
  number: 274,
  pokemonTypes: ["grass", "dark"],
},{
  names: {
    de: "tengulist",
    en: "shiftry",
    fr: "tengalice",
    ja: "ダーテング",
    zh: "狡猾天狗",
  },
  number: 275,
  pokemonTypes: ["grass", "dark"],
},{
  names: {
    de: "schwalbini",
    en: "taillow",
    fr: "nirondelle",
    ja: "スバメ",
    zh: "傲骨燕",
  },
  number: 276,
  pokemonTypes: ["normal", "flying"],
},{
  names: {
    de: "schwalboss",
    en: "swellow",
    fr: "hélédelle",
    ja: "オオスバメ",
    zh: "大王燕",
  },
  number: 277,
  pokemonTypes: ["normal", "flying"],
},{
  names: {
    de: "wingull",
    en: "wingull",
    fr: "goélise",
    ja: "キャモメ",
    zh: "长翅鸥",
  },
  number: 278,
  pokemonTypes: ["water", "flying"],
},{
  names: {
    de: "pelipper",
    en: "pelipper",
    fr: "bekipan",
    ja: "ペリッパー",
    zh: "大嘴鸥",
  },
  number: 279,
  pokemonTypes: ["water", "flying"],
},{
  names: {
    de: "trasla",
    en: "ralts",
    fr: "tarsal",
    ja: "ラルトス",
    zh: "拉鲁拉丝",
  },
  number: 280,
  pokemonTypes: ["psychic", "fairy"],
},{
  names: {
    de: "kirlia",
    en: "kirlia",
    fr: "kirlia",
    ja: "キルリア",
    zh: "奇鲁莉安",
  },
  number: 281,
  pokemonTypes: ["psychic", "fairy"],
},{
  names: {
    de: "guardevoir",
    en: "gardevoir",
    fr: "gardevoir",
    ja: "サーナイト",
    zh: "沙奈朵",
  },
  number: 282,
  pokemonTypes: ["psychic", "fairy"],
},{
  names: {
    de: "gehweiher",
    en: "surskit",
    fr: "arakdo",
    ja: "アメタマ",
    zh: "溜溜糖球",
  },
  number: 283,
  pokemonTypes: ["bug", "water"],
},{
  names: {
    de: "maskeregen",
    en: "masquerain",
    fr: "maskadra",
    ja: "アメモース",
    zh: "雨翅蛾",
  },
  number: 284,
  pokemonTypes: ["bug", "flying"],
},{
  names: {
    de: "knilz",
    en: "shroomish",
    fr: "balignon",
    ja: "キノココ",
    zh: "蘑蘑菇",
  },
  number: 285,
  pokemonTypes: ["grass", ""],
},{
  names: {
    de: "kapilz",
    en: "breloom",
    fr: "chapignon",
    ja: "キノガッサ",
    zh: "斗笠菇",
  },
  number: 286,
  pokemonTypes: ["grass", "fighting"],
},{
  names: {
    de: "bummelz",
    en: "slakoth",
    fr: "parecool",
    ja: "ナマケロ",
    zh: "懒人獭",
  },
  number: 287,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "muntier",
    en: "vigoroth",
    fr: "vigoroth",
    ja: "ヤルキモノ",
    zh: "过动猿",
  },
  number: 288,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "letarking",
    en: "slaking",
    fr: "monaflèmit",
    ja: "ケッキング",
    zh: "请假王",
  },
  number: 289,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "nincada",
    en: "nincada",
    fr: "ningale",
    ja: "ツチニン",
    zh: "土居忍士",
  },
  number: 290,
  pokemonTypes: ["bug", "ground"],
},{
  names: {
    de: "ninjask",
    en: "ninjask",
    fr: "ninjask",
    ja: "テッカニン",
    zh: "铁面忍者",
  },
  number: 291,
  pokemonTypes: ["bug", "flying"],
},{
  names: {
    de: "ninjatom",
    en: "shedinja",
    fr: "munja",
    ja: "ヌケニン",
    zh: "脱壳忍者",
  },
  number: 292,
  pokemonTypes: ["bug", "ghost"],
},{
  names: {
    de: "flurmel",
    en: "whismur",
    fr: "chuchmur",
    ja: "ゴニョニョ",
    zh: "咕妞妞",
  },
  number: 293,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "krakeelo",
    en: "loudred",
    fr: "ramboum",
    ja: "ドゴーム",
    zh: "吼爆弹",
  },
  number: 294,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "krawumms",
    en: "exploud",
    fr: "brouhabam",
    ja: "バクオング",
    zh: "爆音怪",
  },
  number: 295,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "makuhita",
    en: "makuhita",
    fr: "makuhita",
    ja: "マクノシタ",
    zh: "幕下力士",
  },
  number: 296,
  pokemonTypes: ["fighting", ""],
},{
  names: {
    de: "hariyama",
    en: "hariyama",
    fr: "hariyama",
    ja: "ハリテヤマ",
    zh: "铁掌力士",
  },
  number: 297,
  pokemonTypes: ["fighting", ""],
},{
  names: {
    de: "azurill",
    en: "azurill",
    fr: "azurill",
    ja: "ルリリ",
    zh: "露力丽",
  },
  number: 298,
  pokemonTypes: ["normal", "fairy"],
},{
  names: {
    de: "nasgnet",
    en: "nosepass",
    fr: "tarinor",
    ja: "ノズパス",
    zh: "朝北鼻",
  },
  number: 299,
  pokemonTypes: ["rock", ""],
},{
  names: {
    de: "eneco",
    en: "skitty",
    fr: "skitty",
    ja: "エネコ",
    zh: "向尾喵",
  },
  number: 300,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "enekoro",
    en: "delcatty",
    fr: "delcatty",
    ja: "エネコロロ",
    zh: "优雅猫",
  },
  number: 301,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "zobiris",
    en: "sableye",
    fr: "ténéfix",
    ja: "ヤミラミ",
    zh: "勾魂眼",
  },
  number: 302,
  pokemonTypes: ["dark", "ghost"],
},{
  names: {
    de: "flunkifer",
    en: "mawile",
    fr: "mysdibule",
    ja: "クチート",
    zh: "大嘴娃",
  },
  number: 303,
  pokemonTypes: ["steel", "fairy"],
},{
  names: {
    de: "stollunior",
    en: "aron",
    fr: "galekid",
    ja: "ココドラ",
    zh: "可可多拉",
  },
  number: 304,
  pokemonTypes: ["steel", "rock"],
},{
  names: {
    de: "stollrak",
    en: "lairon",
    fr: "galegon",
    ja: "コドラ",
    zh: "可多拉",
  },
  number: 305,
  pokemonTypes: ["steel", "rock"],
},{
  names: {
    de: "stolloss",
    en: "aggron",
    fr: "galeking",
    ja: "ボスゴドラ",
    zh: "波士可多拉",
  },
  number: 306,
  pokemonTypes: ["steel", "rock"],
},{
  names: {
    de: "meditie",
    en: "meditite",
    fr: "méditikka",
    ja: "アサナン",
    zh: "玛沙那",
  },
  number: 307,
  pokemonTypes: ["fighting", "psychic"],
},{
  names: {
    de: "meditalis",
    en: "medicham",
    fr: "charmina",
    ja: "チャーレム",
    zh: "恰雷姆",
  },
  number: 308,
  pokemonTypes: ["fighting", "psychic"],
},{
  names: {
    de: "frizelbliz",
    en: "electrike",
    fr: "dynavolt",
    ja: "ラクライ",
    zh: "落雷兽",
  },
  number: 309,
  pokemonTypes: ["electric", ""],
},{
  names: {
    de: "voltenso",
    en: "manectric",
    fr: "élecsprint",
    ja: "ライボルト",
    zh: "雷电兽",
  },
  number: 310,
  pokemonTypes: ["electric", ""],
},{
  names: {
    de: "plusle",
    en: "plusle",
    fr: "posipi",
    ja: "プラスル",
    zh: "正电拍拍",
  },
  number: 311,
  pokemonTypes: ["electric", ""],
},{
  names: {
    de: "minun",
    en: "minun",
    fr: "négapi",
    ja: "マイナン",
    zh: "负电拍拍",
  },
  number: 312,
  pokemonTypes: ["electric", ""],
},{
  names: {
    de: "volbeat",
    en: "volbeat",
    fr: "muciole",
    ja: "バルビート",
    zh: "电萤虫",
  },
  number: 313,  
  pokemonTypes: ["bug", ""],
},{
  names: {
    de: "illumise",
    en: "illumise",
    fr: "lumivole",
    ja: "イルミーゼ",
    zh: "甜甜萤",
  },
  number: 314,
  pokemonTypes: ["bug", ""],
},{
  names: {
    de: "roselia",
    en: "roselia",
    fr: "rosélia",
    ja: "ロゼリア",
    zh: "毒蔷薇",
  },
  number: 315,
  pokemonTypes: ["grass", "poison"],
},{
  names: {
    de: "schluppuck",
    en: "gulpin",
    fr: "gloupti",
    ja: "ゴクリン",
    zh: "溶食兽",
  },
  number: 316,
  pokemonTypes: ["poison", ""],
},{
  names: {
    de: "schlukwech",
    en: "swalot",
    fr: "avaltout",
    ja: "マルノーム",
    zh: "吞食兽",
  },
  number: 317,
  pokemonTypes: ["poison", ""],
},{
  names: {
    de: "kanivanha",
    en: "carvanha",
    fr: "carvanha",
    ja: "キバニア",
    zh: "利牙鱼",
  },
  number: 318,
  pokemonTypes: ["water", "dark"],
},{
  names: {
    de: "tohaido",
    en: "sharpedo",
    fr: "sharpedo",
    ja: "サメハダー",
    zh: "巨牙鲨",
  },
  number: 319,
  pokemonTypes: ["water", "dark"],
},{
  names: {
    de: "wailmer",
    en: "wailmer",
    fr: "wailmer",
    ja: "ホエルコ",
    zh: "吼吼鲸",
  },
  number: 320,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "wailord",
    en: "wailord",
    fr: "wailord",
    ja: "ホエルオー",
    zh: "吼鲸王",
  },
  number: 321,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "camaub",
    en: "numel",
    fr: "chamallot",
    ja: "ドンメル",
    zh: "呆火驼",
  },
  number: 322,
  pokemonTypes: ["fire", "ground"],
},{
  names: {
    de: "camerupt",
    en: "camerupt",
    fr: "camérupt",
    ja: "バクーダ",
    zh: "喷火驼",
  },
  number: 323,
  pokemonTypes: ["fire", "ground"],
},{
  names: {
    de: "qurtel",
    en: "torkoal",
    fr: "chartor",
    ja: "コータス",
    zh: "煤炭龟",
  },
  number: 324,
  pokemonTypes: ["fire", ""],
},{
  names: {
    de: "spoink",
    en: "spoink",
    fr: "spoink",
    ja: "バネブー",
    zh: "跳跳猪",
  },
  number: 325,
  pokemonTypes: ["psychic", ""],
},{
  names: {
    de: "groink",
    en: "grumpig",
    fr: "groret",
    ja: "ブーピッグ",
    zh: "噗噗猪",
  },
  number: 326,
  pokemonTypes: ["psychic", ""],
},{
  names: {
    de: "pandir",
    en: "spinda",
    fr: "spinda",
    ja: "パッチール",
    zh: "晃晃斑",
  },
  number: 327,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "knacklion",
    en: "trapinch",
    fr: "kraknoix",
    ja: "ナックラー",
    zh: "大颚蚁",
  },
  number: 328,
  pokemonTypes: ["ground", ""],
},{
  names: {
    de: "vibrava",
    en: "vibrava",
    fr: "vibraninf",
    ja: "ビブラーバ",
    zh: "超音波幼虫",
  },
  number: 329,
  pokemonTypes: ["ground", "dragon"],
},{
  names: {
    de: "libelldra",
    en: "flygon",
    fr: "libégon",
    ja: "フライゴン",
    zh: "沙漠蜻蜓",
  },
  number: 330,
  pokemonTypes: ["ground", "dragon"],
},{
  names: {
    de: "tuska",
    en: "cacnea",
    fr: "cacnea",
    ja: "サボネア",
    zh: "刺球仙人掌",
  },
  number: 331,
  pokemonTypes: ["grass", ""],
},{
  names: {
    de: "noktuska",
    en: "cacturne",
    fr: "cacturne",
    ja: "ノクタス",
    zh: "梦歌仙人掌",
  },
  number: 332,
  pokemonTypes: ["grass", "dark"],
},{
  names: {
    de: "wablu",
    en: "swablu",
    fr: "tylton",
    ja: "チルット",
    zh: "青绵鸟",
  },
  number: 333,
  pokemonTypes: ["normal", "flying"],
},{
  names: {
    de: "altaria",
    en: "altaria",
    fr: "altaria",
    ja: "チルタリス",
    zh: "七夕青鸟",
  },
  number: 334,
  pokemonTypes: ["dragon", "flying"],
},{
  names: {
    de: "sengo",
    en: "zangoose",
    fr: "mangriff",
    ja: "ザングース",
    zh: "猫鼬斩",
  },
  number: 335,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "vipitis",
    en: "seviper",
    fr: "séviper",
    ja: "ハブネーク",
    zh: "饭匙蛇",
  },
  number: 336,
  pokemonTypes: ["poison", ""],
},{
  names: {
    de: "lunastein",
    en: "lunatone",
    fr: "séléroc",
    ja: "ルナトーン",
    zh: "月石",
  },
  number: 337,
  pokemonTypes: ["rock", "psychic"],
},{
  names: {
    de: "sonnfel",
    en: "solrock",
    fr: "solaroc",
    ja: "ソルロック",
    zh: "太阳岩",
  },
  number: 338,
  pokemonTypes: ["rock", "psychic"],
},{
  names: {
    de: "schmerbe",
    en: "barboach",
    fr: "barloche",
    ja: "ドジョッチ",
    zh: "泥泥鳅",
  },
  number: 339,
  pokemonTypes: ["water", "ground"],
},{
  names: {
    de: "welsar",
    en: "whiscash",
    fr: "barbicha",
    ja: "ナマズン",
    zh: "鲶鱼王",
  },
  number: 340,
  pokemonTypes: ["water", "ground"],
},{
  names: {
    de: "krebscorps",
    en: "corphish",
    fr: "écrapince",
    ja: "ヘイガニ",
    zh: "龙虾小兵",
  },
  number: 341,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "krebutack",
    en: "crawdaunt",
    fr: "colhomard",
    ja: "シザリガー",
    zh: "铁螯龙虾",
  },
  number: 342,
  pokemonTypes: ["water", "dark"],
},{
  names: {
    de: "puppance",
    en: "baltoy",
    fr: "balbuto",
    ja: "ヤジロン",
    zh: "天秤偶",
  },
  number: 343,
  pokemonTypes: ["ground", "psychic"],
},{
  names: {
    de: "lepumentas",
    en: "claydol",
    fr: "kaorine",
    ja: "ネンドール",
    zh: "念力土偶",
  },
  number: 344,
  pokemonTypes: ["ground", "psychic"],
},{
  names: {
    de: "liliep",
    en: "lileep",
    fr: "lilia",
    ja: "リリーラ",
    zh: "触手百合",
  },
  number: 345,
  pokemonTypes: ["rock", "grass"],
},{
  names: {
    de: "wielie",
    en: "cradily",
    fr: "vacilys",
    ja: "ユレイドル",
    zh: "摇篮百合",
  },
  number: 346,
  pokemonTypes: ["rock", "grass"],
},{
  names: {
    de: "anorith",
    en: "anorith",
    fr: "anorith",
    ja: "アノプス",
    zh: "太古羽虫",
  },
  number: 347,
  pokemonTypes: ["rock", "bug"],
},{
  names: {
    de: "armaldo",
    en: "armaldo",
    fr: "armaldo",
    ja: "アーマルド",
    zh: "太古盔甲",
  },
  number: 348,
  pokemonTypes: ["rock", "bug"],
},{
  names: {
    de: "barschwa",
    en: "feebas",
    fr: "barpau",
    ja: "ヒンバス",
    zh: "丑丑鱼",
  },
  number: 349,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "milotic",
    en: "milotic",
    fr: "milobellus",
    ja: "ミロカロス",
    zh: "美纳斯",
  },
  number: 350,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "formeo",
    en: "castform",
    fr: "morphéo",
    ja: "ポワルン",
    zh: "飘浮泡泡",
  },
  number: 351,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "kecleon",
    en: "kecleon",
    fr: "kecleon",
    ja: "カクレオン",
    zh: "变隐龙",
  },
  number: 352,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "shuppet",
    en: "shuppet",
    fr: "polichombr",
    ja: "カゲボウズ",
    zh: "怨影娃娃",
  },
  number: 353,
  pokemonTypes: ["ghost", ""],
},{
  names: {
    de: "banette",
    en: "banette",
    fr: "branette",
    ja: "ジュペッタ",
    zh: "诅咒娃娃",
  },
  number: 354,
  pokemonTypes: ["ghost", ""],
},{
  names: {
    de: "zwirrlicht",
    en: "duskull",
    fr: "skelénox",
    ja: "ヨマワル",
    zh: "夜巡灵",
  },
  number: 355,
  pokemonTypes: ["ghost", ""],
},{
  names: {
    de: "zwirrklop",
    en: "dusclops",
    fr: "téraclope",
    ja: "サマヨール",
    zh: "彷徨夜灵",
  },
  number: 356,
  pokemonTypes: ["ghost", ""],
},{
  names: {
    de: "tropius",
    en: "tropius",
    fr: "tropius",
    ja: "トロピウス",
    zh: "热带龙",
  },
  number: 357,
  pokemonTypes: ["grass", "flying"],
},{
  names: {
    de: "palimpalim",
    en: "chimecho",
    fr: "éoko",
    ja: "チリーン",
    zh: "风铃铃",
  },
  number: 358,
  pokemonTypes: ["psychic", ""],
},{
  names: {
    de: "absol",
    en: "absol",
    fr: "absol",
    ja: "アブソル",
    zh: "阿勃梭鲁",
  },
  number: 359,
  pokemonTypes: ["dark", ""],
},{
  names: {
    de: "isso",
    en: "wynaut",
    fr: "okéoké",
    ja: "ソーナノ",
    zh: "小果然",
  },
  number: 360,
  pokemonTypes: ["psychic", ""],
},{
  names: {
    de: "schneppke",
    en: "snorunt",
    fr: "stalgamin",
    ja: "ユキワラシ",
    zh: "雪童子",
  },
  number: 361,
  pokemonTypes: ["ice", ""],
},{
  names: {
    de: "firnontor",
    en: "glalie",
    fr: "oniglali",
    ja: "オニゴーリ",
    zh: "冰鬼护",
  },
  number: 362,
  pokemonTypes: ["ice", ""],
},{
  names: {
    de: "seemops",
    en: "spheal",
    fr: "obalie",
    ja: "タマザラシ",
    zh: "海豹球",
  },
  number: 363,
  pokemonTypes: ["ice", "water"],
},{
  names: {
    de: "seejong",
    en: "sealeo",
    fr: "phogleur",
    ja: "トドグラー",
    zh: "海魔狮",
  },
  number: 364,
  pokemonTypes: ["ice", "water"],
},{
  names: {
    de: "walraisa",
    en: "walrein",
    fr: "kaimorse",
    ja: "トドゼルガ",
    zh: "帝牙海狮",
  },
  number: 365,
  pokemonTypes: ["ice", "water"],
},{
  names: {
    de: "perlu",
    en: "clamperl",
    fr: "coquiperl",
    ja: "パールル",
    zh: "珍珠贝",
  },
  number: 366,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "aalabyss",
    en: "huntail",
    fr: "serpang",
    ja: "ハンテール",
    zh: "猎斑鱼",
  },
  number: 367,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "saganabyss",
    en: "gorebyss",
    fr: "rosabyss",
    ja: "サクラビス",
    zh: "樱花鱼",
  },
  number: 368,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "relicanth",
    en: "relicanth",
    fr: "relicanth",
    ja: "ジーランス",
    zh: "古空棘鱼",
  },
  number: 369,
  pokemonTypes: ["water", "rock"],
},{
  names: {
    de: "liebiskus",
    en: "luvdisc",
    fr: "lovdisc",
    ja: "ラブカス",
    zh: "爱心鱼",
  },
  number: 370,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "kindwurm",
    en: "bagon",
    fr: "draby",
    ja: "タツベイ",
    zh: "宝贝龙",
  },
  number: 371,
  pokemonTypes: ["dragon", ""],
},{
  names: {
    de: "draschel",
    en: "shelgon",
    fr: "drackhaus",
    ja: "コモルー",
    zh: "甲壳龙",
  },
  number: 372,
  pokemonTypes: ["dragon", ""],
},{
  names: {
    de: "brutalanda",
    en: "salamence",
    fr: "drattak",
    ja: "ボーマンダ",
    zh: "暴飞龙",
  },
  number: 373,
  pokemonTypes: ["dragon", "flying"],
},{
  names: {
    de: "tanhel",
    en: "beldum",
    fr: "terhal",
    ja: "ダンバル",
    zh: "铁哑铃",
  },
  number: 374,
  pokemonTypes: ["steel", "psychic"],
},{
  names: {
    de: "metang",
    en: "metang",
    fr: "métang",
    ja: "メタング",
    zh: "金属怪",
  },
  number: 375,
  pokemonTypes: ["steel", "psychic"],
},{
  names: {
    de: "metagross",
    en: "metagross",
    fr: "métalosse",
    ja: "メタグロス",
    zh: "巨金怪",
  },
  number: 376,
  pokemonTypes: ["steel", "psychic"],
},{
  names: {
    de: "regirock",
    en: "regirock",
    fr: "regirock",
    ja: "レジロック",
    zh: "雷吉洛克",
  },
  number: 377,
  pokemonTypes: ["rock", ""],
},{
  names: {
    de: "regice",
    en: "regice",
    fr: "regice",
    ja: "レジアイス",
    zh: "雷吉艾斯",
  },
  number: 378,
  pokemonTypes: ["ice", ""],
},{
  names: {
    de: "registeel",
    en: "registeel",
    fr: "registeel",
    ja: "レジスチル",
    zh: "雷吉斯奇鲁",
  },
  number: 379,
  pokemonTypes: ["steel", ""],
},{
  names: {
    de: "latias",
    en: "latias",
    fr: "latias",
    ja: "ラティアス",
    zh: "拉帝亚斯",
  },
  number: 380,
  pokemonTypes: ["dragon", "psychic"],
},{
  names: {
    de: "latios",
    en: "latios",
    fr: "latios",
    ja: "ラティオス",
    zh: "拉帝欧斯",
  },
  number: 381,
  pokemonTypes: ["dragon", "psychic"],
},{
  names: {
    de: "kyogre",
    en: "kyogre",
    fr: "kyogre",
    ja: "カイオーガ",
    zh: "盖欧卡",
  },
  number: 382,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "groudon",
    en: "groudon",
    fr: "groudon",
    ja: "グラードン",
    zh: "固拉多",
  },
  number: 383,
  pokemonTypes: ["ground", ""],
},{
  names: {
    de: "rayquaza",
    en: "rayquaza",
    fr: "rayquaza",
    ja: "レックウザ",
    zh: "烈空坐",
  },
  number: 384,
  pokemonTypes: ["dragon", "flying"],
},{
  names: {
    de: "jirachi",
    en: "jirachi",
    fr: "jirachi",
    ja: "ジラーチ",
    zh: "基拉祈",
  },
  number: 385,
  pokemonTypes: ["steel", "psychic"],
},{
  names: {
    de: "deoxys",
    en: "deoxys",
    fr: "deoxys",
    ja: "デオキシス",
    zh: "代欧奇希斯",
  },
  number: 386,
  pokemonTypes: ["psychic", ""],
},{
  names: {
    de: "chelast",
    en: "turtwig",
    fr: "tortipouss",
    ja: "ナエトル",
    zh: "草苗龟",
  },
  number: 387,
  pokemonTypes: ["grass", ""], 
},{
  names: {
    de: "chelcarain",
    en: "grotle",
    fr: "boskara",
    ja: "ハヤシガメ",
    zh: "树林龟",
  },
  number: 388,
  pokemonTypes: ["grass", ""],
},{
  names: {
    de: "chelterrar",
    en: "torterra",
    fr: "torterra",
    ja: "ドダイトス",
    zh: "土台龟",
  },
  number: 389,
  pokemonTypes: ["grass", "ground"],
},{
  names: {
    de: "panflam",
    en: "chimchar",
    fr: "ouisticram",
    ja: "ヒコザル",
    zh: "小火焰猴",
  },
  number: 390,
  pokemonTypes: ["fire", ""],
},{
  names: {
    de: "panpyro",
    en: "monferno",
    fr: "chimpenfeu",
    ja: "モウカザル",
    zh: "猛火猴",
  },
  number: 391,
  pokemonTypes: ["fire", "fighting"],
},{
  names: {
    de: "panferno",
    en: "infernape",
    fr: "simiabraz",
    ja: "ゴウカザル",
    zh: "烈焰猴",
  },
  number: 392,
  pokemonTypes: ["fire", "fighting"],
},{
  names: {
    de: "plinfa",
    en: "piplup",
    fr: "tiplouf",
    ja: "ポッチャマ",
    zh: "波加曼",
  },
  number: 393,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "pliprin",
    en: "prinplup",
    fr: "prinplouf",
    ja: "ポッタイシ",
    zh: "波皇子",
  },
  number: 394,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "impoleon",
    en: "empoleon",
    fr: "pingoléon",
    ja: "エンペルト",
    zh: "帝王拿波",
  },
  number: 395,
  pokemonTypes: ["water", "steel"],
},{
  names: {
    de: "staralili",
    en: "starly",
    fr: "étourmi",
    ja: "ムックル",
    zh: "姆克儿",
  },
  number: 396,
  pokemonTypes: ["normal", "flying"],
},{
  names: {
    de: "staravia",
    en: "staravia",
    fr: "étourvol",
    ja: "ムクバード",
    zh: "姆克鸟",
  },
  number: 397,
  pokemonTypes: ["normal", "flying"],
},{
  names: {
    de: "staraptor",
    en: "staraptor",
    fr: "étouraptor",
    ja: "ムクホーク",
    zh: "姆克鹰",
  },
  number: 398,
  pokemonTypes: ["normal", "flying"],
},{
  names: {
    de: "bidiza",
    en: "bidoof",
    fr: "keunotor",
    ja: "ビッパ",
    zh: "大牙狸",
  },
  number: 399,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "bidifas",
    en: "bibarel",
    fr: "castorno",
    ja: "ビーダル",
    zh: "大尾狸",
  },
  number: 400,
  pokemonTypes: ["normal", "water"],
},{
  names: {
    de: "zirpurze",
    en: "kricketot",
    fr: "crikzik",
    ja: "コロボーシ",
    zh: "圆法师",
  },
  number: 401,
  pokemonTypes: ["bug", ""],
},{
  names: {
    de: "zirpeise",
    en: "kricketune",
    fr: "mélokrik",
    ja: "コロトック",
    zh: "音箱蟀",
  },
  number: 402,
  pokemonTypes: ["bug", ""],
},{
  names: {
    de: "sheinux",
    en: "shinx",
    fr: "lixy",
    ja: "コリンク",
    zh: "小猫怪",
  },
  number: 403,
  pokemonTypes: ["electric", ""],
},{
  names: {
    de: "luxio",
    en: "luxio",
    fr: "luxio",
    ja: "ルクシオ",
    zh: "勒克猫",
  },
  number: 404,
  pokemonTypes: ["electric", ""],
},{
  names: {
    de: "luxtra",
    en: "luxray",
    fr: "luxray",
    ja: "レントラー",
    zh: "伦琴猫",
  },
  number: 405,
  pokemonTypes: ["electric", ""],
},{
  names: {
    de: "knospi",
    en: "budew",
    fr: "rozbouton",
    ja: "スボミー",
    zh: "含羞苞",
  },
  number: 406,
  pokemonTypes: ["grass", "poison"],
},{
  names: {
    de: "roserade",
    en: "roserade",
    fr: "roserade",
    ja: "ロズレイド",
    zh: "罗丝雷朵",
  },
  number: 407,
  pokemonTypes: ["grass", "poison"],
},{
  names: {
    de: "koknodon",
    en: "cranidos",
    fr: "kranidos",
    ja: "ズガイドス",
    zh: "头盖龙",
  },
  number: 408,
  pokemonTypes: ["rock", ""],
},{
  names: {
    de: "rameidon",
    en: "rampardos",
    fr: "charkos",
    ja: "ラムパルド",
    zh: "战槌龙",
  },
  number: 409,
  pokemonTypes: ["rock", ""],
},{
  names: {
    de: "schilterus",
    en: "shieldon",
    fr: "dinoclier",
    ja: "タテトプス",
    zh: "盾甲龙",
  },
  number: 410,
  pokemonTypes: ["rock", "steel"],
},{
  names: {
    de: "bollterus",
    en: "bastiodon",
    fr: "bastiodon",
    ja: "トリデプス",
    zh: "护城龙",
  },
  number: 411,
  pokemonTypes: ["rock", "steel"],
},{
  names: {
    de: "burmy",
    en: "burmy",
    fr: "cheniti",
    ja: "ミノムッチ",
    zh: "结草儿",
  },
  number: 412,
  pokemonTypes: ["bug", ""],
},{
  names: {
    de: "burmadame",
    en: "wormadam",
    fr: "cheniselle",
    ja: "ミノマダム",
    zh: "结草贵妇",
  },
  number: 413,
  pokemonTypes: ["bug", "grass"],
},{
  names: {
    de: "moterpel",
    en: "mothim",
    fr: "papilord",
    ja: "ガーメイル",
    zh: "绅士蛾",
  },
  number: 414,
  pokemonTypes: ["bug", "flying"],
},{
  names: {
    de: "wadribie",
    en: "combee",
    fr: "apitrini",
    ja: "ミツハニー",
    zh: "三蜜蜂",
  },
  number: 415,
  pokemonTypes: ["bug", "flying"],
},{
  names: {
    de: "honweisel",
    en: "vespiquen",
    fr: "apireine",
    ja: "ビークイン",
    zh: "蜂女王",
  },
  number: 416,
  pokemonTypes: ["bug", "flying"],
},{
  names: {
    de: "pachirisu",
    en: "pachirisu",
    fr: "pachirisu",
    ja: "パチリス",
    zh: "帕奇利兹",
  },
  number: 417,
  pokemonTypes: ["electric", ""],
},{
  names: {
    de: "bamelin",
    en: "buizel",
    fr: "mustébouée",
    ja: "ブイゼル",
    zh: "泳圈鼬",
  },
  number: 418,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "bojelin",
    en: "floatzel",
    fr: "mustéflott",
    ja: "フローゼル",
    zh: "浮潜鼬",
  },
  number: 419,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "kikugi",
    en: "cherubi",
    fr: "ceribou",
    ja: "チェリンボ",
    zh: "樱花宝",
  },
  number: 420,
  pokemonTypes: ["grass", ""],
},{
  names: {
    de: "kinoso",
    en: "cherrim",
    fr: "ceriflor",
    ja: "チェリム",
    zh: "樱花儿",
  },
  number: 421,
  pokemonTypes: ["grass", ""],
},{
  names: {
    de: "schalellos",
    en: "shellos",
    fr: "sancoki",
    ja: "カラナクシ",
    zh: "无壳海兔",
  },
  number: 422,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "gastrodon",
    en: "gastrodon",
    fr: "tritosor",
    ja: "トリトドン",
    zh: "海兔兽",
  },
  number: 423,
  pokemonTypes: ["water", "ground"],
},{
  names: {
    de: "ambidiffel",
    en: "ambipom",
    fr: "capidextre",
    ja: "エテボース",
    zh: "双尾怪手",
  },
  number: 424,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "driftlon",
    en: "drifloon",
    fr: "baudrive",
    ja: "フワンテ",
    zh: "飘飘球",
  },
  number: 425,
  pokemonTypes: ["ghost", "flying"],
},{
  names: {
    de: "drifzepeli",
    en: "drifblim",
    fr: "grodrive",
    ja: "フワライド",
    zh: "随风球",
  },
  number: 426,
  pokemonTypes: ["ghost", "flying"],
},{
  names: {
    de: "haspiror",
    en: "buneary",
    fr: "laporeille",
    ja: "ミミロル",
    zh: "卷卷耳",
  },
  number: 427,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "schlapor",
    en: "lopunny",
    fr: "lockpin",
    ja: "ミミロップ",
    zh: "长耳兔",
  },
  number: 428,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "traunmagil",
    en: "mismagius",
    fr: "magirêve",
    ja: "ムウマージ",
    zh: "梦妖魔",
  },
  number: 429,
  pokemonTypes: ["ghost", ""],
},{
  names: {
    de: "kramshef",
    en: "honchkrow",
    fr: "corboss",
    ja: "ドンカラス",
    zh: "乌鸦头头",
  },
  number: 430,
  pokemonTypes: ["dark", "flying"],
},{
  names: {
    de: "charmian",
    en: "glameow",
    fr: "chaglam",
    ja: "ニャルマー",
    zh: "魅力喵",
  },
  number: 431,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "shnurgarst",
    en: "purugly",
    fr: "chaffreux",
    ja: "ブニャット",
    zh: "东施喵",
  },
  number: 432,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "klingplim",
    en: "chingling",
    fr: "korillon",
    ja: "リーシャン",
    zh: "铃铛响",
  },
  number: 433,
  pokemonTypes: ["psychic", ""],
},{
  names: {
    de: "skunkapuh",
    en: "stunky",
    fr: "moufouette",
    ja: "スカンプー",
    zh: "臭鼬噗",
  },
  number: 434,
  pokemonTypes: ["poison", "dark"],
},{
  names: {
    de: "skuntank",
    en: "skuntank",
    fr: "moufflair",
    ja: "スカタンク",
    zh: "坦克臭鼬",
  },
  number: 435,
  pokemonTypes: ["poison", "dark"],
},{
  names: {
    de: "bronzel",
    en: "bronzor",
    fr: "archéomire",
    ja: "ドーミラー",
    zh: "铜镜怪",
  },
  number: 436,
  pokemonTypes: ["steel", "psychic"],
},{
  names: {
    de: "bronzong",
    en: "bronzong",
    fr: "archéodong",
    ja: "ドータクン",
    zh: "青铜钟",
  },
  number: 437,
  pokemonTypes: ["steel", "psychic"],
},{
  names: {
    de: "mobai",
    en: "bonsly",
    fr: "manzaï",
    ja: "ウソハチ",
    zh: "盆才怪",
  },
  number: 438,
  pokemonTypes: ["rock", ""],
},{
  names: {
    de: "pantimimi",
    en: "mime jr.",
    fr: "mime jr.",
    ja: "マネネ",
    zh: "魔尼尼",
  },
  number: 439,
  pokemonTypes: ["psychic", "fairy"],
},{
  names: {
    de: "wonneira",
    en: "happiny",
    fr: "ptiravi",
    ja: "ピンプク",
    zh: "小福蛋",
  },
  number: 440,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "plaudagei",
    en: "chatot",
    fr: "pijako",
    ja: "ペラップ",
    zh: "聒噪鸟",
  },
  number: 441,
  pokemonTypes: ["normal", "flying"],
},{
  names: {
    de: "kryppuk",
    en: "spiritomb",
    fr: "spiritomb",
    ja: "ミカルゲ",
    zh: "花岩怪",
  },
  number: 442,
  pokemonTypes: ["ghost", "dark"],
},{
  names: {
    de: "kaumalat",
    en: "gible",
    fr: "griknot",
    ja: "フカマル",
    zh: "圆陆鲨",
  },
  number: 443,
  pokemonTypes: ["dragon", "ground"],
},{
  names: {
    de: "knarksel",
    en: "gabite",
    fr: "carmache",
    ja: "ガバイト",
    zh: "尖牙陆鲨",
  },
  number: 444,
  pokemonTypes: ["dragon", "ground"],
},{
  names: {
    de: "knakrack",
    en: "garchomp",
    fr: "carchacrok",
    ja: "ガブリアス",
    zh: "烈咬陆鲨",
  },
  number: 445,
  pokemonTypes: ["dragon", "ground"],
},{
  names: {
    de: "mampfaxo",
    en: "munchlax",
    fr: "goinfrex",
    ja: "ゴンベ",
    zh: "小卡比兽",
  },
  number: 446,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "riolu",
    en: "riolu",
    fr: "riolu",
    ja: "リオル",
    zh: "利欧路",
  },
  number: 447,
  pokemonTypes: ["fighting", ""],
},{
  names: {
    de: "lucario",
    en: "lucario",
    fr: "lucario",
    ja: "ルカリオ",
    zh: "路卡利欧",
  },
  number: 448,
  pokemonTypes: ["fighting", "steel"],
},{
  names: {
    de: "hippopotas",
    en: "hippopotas",
    fr: "hippopotas",
    ja: "ヒポポタス",
    zh: "沙河马",
  },
  number: 449,
  pokemonTypes: ["ground", ""],
},{
  names: {
    de: "hippoterus",
    en: "hippowdon",
    fr: "hippodocus",
    ja: "カバルドン",
    zh: "河马兽",
  },
  number: 450,
  pokemonTypes: ["ground", ""],
},{
  names: {
    de: "pionskora",
    en: "skorupi",
    fr: "rapion",
    ja: "スコルピ",
    zh: "钳尾蝎",
  },
  number: 451,
  pokemonTypes: ["poison", "bug"],
},{
  names: {
    de: "piondragi",
    en: "drapion",
    fr: "drascore",
    ja: "ドラピオン",
    zh: "龙王蝎",
  },
  number: 452,
  pokemonTypes: ["poison", "dark"],
},{
  names: {
    de: "glibunkel",
    en: "croagunk",
    fr: "cradopaud",
    ja: "グレッグル",
    zh: "不良蛙",
  },
  number: 453,
  pokemonTypes: ["poison", "fighting"],
},{
  names: {
    de: "toxiquak",
    en: "toxicroak",
    fr: "coatox",
    ja: "ドクロッグ",
    zh: "毒骷蛙",
  },
  number: 454,
  pokemonTypes: ["poison", "fighting"],
},{
  names: {
    de: "venuflibis",
    en: "carnivine",
    fr: "vortente",
    ja: "マスキッパ",
    zh: "尖牙笼",
  },
  number: 455,
  pokemonTypes: ["grass", ""],
},{
  names: {
    de: "finneon",
    en: "finneon",
    fr: "écayon",
    ja: "ケイコウオ",
    zh: "荧光鱼",
  },
  number: 456,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "lumineon",
    en: "lumineon",
    fr: "luminéon",
    ja: "ネオラント",
    zh: "霓虹鱼",
  },
  number: 457,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "mantirps",
    en: "mantyke",
    fr: "babimanta",
    ja: "タマンタ",
    zh: "小球飞鱼",
  },
  number: 458,
  pokemonTypes: ["water", "flying"],
},{
  names: {
    de: "shnebedeck",
    en: "snover",
    fr: "blizzi",
    ja: "ユキカブリ",
    zh: "雪笠怪",
  },
  number: 459,
  pokemonTypes: ["grass", "ice"],
},{
  names: {
    de: "rexblisar",
    en: "abomasnow",
    fr: "blizzaroi",
    ja: "ユキノオー",
    zh: "暴雪王",
  },
  number: 460,
  pokemonTypes: ["grass", "ice"],
},{
  names: {
    de: "snibunna",
    en: "weavile",
    fr: "dimoret",
    ja: "マニューラ",
    zh: "玛狃拉",
  },
  number: 461,
  pokemonTypes: ["dark", "ice"],
},{
  names: {
    de: "magnezone",
    en: "magnezone",
    fr: "magnézone",
    ja: "ジバコイル",
    zh: "自爆磁怪",
  },
  number: 462,
  pokemonTypes: ["electric", "steel"],
},{
  names: {
    de: "schlurplek",
    en: "lickilicky",
    fr: "coudlangue",
    ja: "ベロベルト",
    zh: "大舌舔",
  },
  number: 463,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "rihornior",
    en: "rhyperior",
    fr: "rhinastoc",
    ja: "ドサイドン",
    zh: "超甲狂犀",
  },
  number: 464,
  pokemonTypes: ["ground", "rock"],
},{
  names: {
    de: "tangoloss",
    en: "tangrowth",
    fr: "bouldeneu",
    ja: "モジャンボ",
    zh: "巨蔓藤",
  },
  number: 465,
  pokemonTypes: ["grass", ""],
},{
  names: {
    de: "elevoltek",
    en: "electivire",
    fr: "élekable",
    ja: "エレキブル",
    zh: "电击魔兽",
  },
  number: 466,
  pokemonTypes: ["electric", ""],
},{
  names: {
    de: "magbrant",
    en: "magmortar",
    fr: "maganon",
    ja: "ブーバーン",
    zh: "鸭嘴炎兽",
  },
  number: 467,
  pokemonTypes: ["fire", ""],
},{
  names: {
    de: "togekiss",
    en: "togekiss",
    fr: "togekiss",
    ja: "トゲキッス",
    zh: "波克基斯",
  },
  number: 468,
  pokemonTypes: ["fairy", "flying"],
},{
  names: {
    de: "yanmega",
    en: "yanmega",
    fr: "yanmega",
    ja: "メガヤンマ",
    zh: "远古巨蜓",
  },
  number: 469,
  pokemonTypes: ["bug", "flying"],
},{
  names: {
    de: "folipurba",
    en: "leafeon",
    fr: "phyllali",
    ja: "リーフィア",
    zh: "叶伊布",
  },
  number: 470,
  pokemonTypes: ["grass", ""],
},{
  names: {
    de: "glaziola",
    en: "glaceon",
    fr: "givrali",
    ja: "グレイシア",
    zh: "冰伊布",
  },
  number: 471,
  pokemonTypes: ["ice", ""],
},{
  names: {
    de: "skorgro",
    en: "gliscor",
    fr: "scorvol",
    ja: "グライオン",
    zh: "天蝎王",
  },
  number: 472,
  pokemonTypes: ["ground", "flying"],
},{
  names: {
    de: "mamutel",
    en: "mamoswine",
    fr: "mammochon",
    ja: "マンムー",
    zh: "象牙猪",
  },
  number: 473,
  pokemonTypes: ["ice", "ground"],
},{
  names: {
    de: "porygon-z",
    en: "porygon-z",
    fr: "porygon-z",
    ja: "ポリゴンＺ",
    zh: "多边兽乙型",
  },
  number: 474,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "galagladi",
    en: "gallade",
    fr: "gallame",
    ja: "エルレイド",
    zh: "艾路雷朵",
  },
  number: 475,
  pokemonTypes: ["psychic", "fighting"],
},{
  names: {
    de: "voluminas",
    en: "probopass",
    fr: "tarinorme",
    ja: "ダイノーズ",
    zh: "大朝北鼻",
  },
  number: 476,
  pokemonTypes: ["rock", "steel"],
},{
  names: {
    de: "zwirrfinst",
    en: "dusknoir",
    fr: "noctunoir",
    ja: "ヨノワール",
    zh: "黑夜魔灵",
  },
  number: 477,
  pokemonTypes: ["ghost", ""],
},{
  names: {
    de: "frosdedje",
    en: "froslass",
    fr: "momartik",
    ja: "ユキメノコ",
    zh: "雪妖女",
  },
  number: 478,
  pokemonTypes: ["ice", "ghost"],
},{
  names: {
    de: "rotom",
    en: "rotom",
    fr: "motisma",
    ja: "ロトム",
    zh: "洛托姆",
  },
  number: 479,
  pokemonTypes: ["electric", "ghost"],
},{
  names: {
    de: "selfe",
    en: "uxie",
    fr: "créhelf",
    ja: "ユクシー",
    zh: "由克希",
  },
  number: 480,
  pokemonTypes: ["psychic", ""],
},{
  names: {
    de: "vesprit",
    en: "mesprit",
    fr: "créfollet",
    ja: "エムリット",
    zh: "艾姆利多",
  },
  number: 481,
  pokemonTypes: ["psychic", ""],
},{
  names: {
    de: "tobutz",
    en: "azelf",
    fr: "créfadet",
    ja: "アグノム",
    zh: "亚克诺姆",
  },
  number: 482,
  pokemonTypes: ["psychic", ""],
},{
  names: {
    de: "dialga",
    en: "dialga",
    fr: "dialga",
    ja: "ディアルガ",
    zh: "帝牙卢卡",
  },
  number: 483,
  pokemonTypes: ["steel", "dragon"],
},{
  names: {
    de: "palkia",
    en: "palkia",
    fr: "palkia",
    ja: "パルキア",
    zh: "帕路奇亚",
  },
  number: 484,
  pokemonTypes: ["water", "dragon"],
},{
  names: {
    de: "heatran",
    en: "heatran",
    fr: "heatran",
    ja: "ヒードラン",
    zh: "席多蓝恩",
  },
  number: 485,
  pokemonTypes: ["fire", "steel"],
},{
  names: {
    de: "regigigas",
    en: "regigigas",
    fr: "regigigas",
    ja: "レジギガス",
    zh: "雷吉奇卡斯",
  },
  number: 486,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "giratina",
    en: "giratina",
    fr: "giratina",
    ja: "ギラティナ",
    zh: "骑拉帝纳",
  },
  number: 487,
  pokemonTypes: ["ghost", "dragon"],
},{
  names: {
    de: "cresselia",
    en: "cresselia",
    fr: "cresselia",
    ja: "クレセリア",
    zh: "克雷色利亚",
  },
  number: 488,
  pokemonTypes: ["psychic", ""],
},{
  names: {
    de: "phione",
    en: "phione",
    fr: "phione",
    ja: "フィオネ",
    zh: "霏欧纳",
  },
  number: 489,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "manaphy",
    en: "manaphy",
    fr: "manaphy",
    ja: "マナフィ",
    zh: "玛纳霏",
  },
  number: 490,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "darkrai",
    en: "darkrai",
    fr: "darkrai",
    ja: "ダークライ",
    zh: "达克莱伊",
  },
  number: 491,
  pokemonTypes: ["dark", ""],
},{
  names: {
    de: "shaymin",
    en: "shaymin",
    fr: "shaymin",
    ja: "シェイミ",
    zh: "谢米",
  },
  number: 492,
  pokemonTypes: ["grass", ""],
},{
  names: {
    de: "arceus",
    en: "arceus",
    fr: "arceus",
    ja: "アルセウス",
    zh: "阿尔宙斯",
  },
  number: 493,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "victini",
    en: "victini",
    fr: "victini",
    ja: "ビクティニ",
    zh: "比克提尼",
  },
  number: 494,
  pokemonTypes: ["psychic", "fire"],
},{
  names: {
    de: "serpifeu",
    en: "snivy",
    fr: "vipélierre",
    ja: "ツタージャ",
    zh: "藤藤蛇",
  },
  number: 495,
  pokemonTypes: ["grass", ""],
},{
  names: {
    de: "efoserp",
    en: "servine",
    fr: "lianaja",
    ja: "ジャノビー",
    zh: "青藤蛇",
  },
  number: 496,
  pokemonTypes: ["grass", ""],
},{
  names: {
    de: "serpiroyal",
    en: "serperior",
    fr: "majaspic",
    ja: "ジャローダ",
    zh: "君主蛇",
  },
  number: 497,
  pokemonTypes: ["grass", ""],
},{
  names: {
    de: "floink",
    en: "tepig",
    fr: "gruikui",
    ja: "ポカブ",
    zh: "暖暖猪",
  },
  number: 498,
  pokemonTypes: ["fire", ""],
},{
  names: {
    de: "ferkokel",
    en: "pignite",
    fr: "grotichon",
    ja: "チャオブー",
    zh: "炒炒猪",
  },
  number: 499,
  pokemonTypes: ["fire", "fighting"],
},{
  names: {
    de: "flambirex",
    en: "emboar",
    fr: "roitiflam",
    ja: "エンブオー",
    zh: "炎武王",
  },
  number: 500,
  pokemonTypes: ["fire", "fighting"],
},{
  names: {
    de: "ottaro",
    en: "oshawott",
    fr: "moustillon",
    ja: "ミジュマル",
    zh: "水水獭",
  },
  number: 501,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "zwottronin",
    en: "dewott",
    fr: "mateloutre",
    ja: "フタチマル",
    zh: "双刃丸",
  },
  number: 502,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "admurai",
    en: "samurott",
    fr: "clamiral",
    ja: "ダイケンキ",
    zh: "大剑鬼",
  },
  number: 503,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "nagelotz",
    en: "patrat",
    fr: "ratentif",
    ja: "ミネズミ",
    zh: "探探鼠",
  },
  number: 504,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "kukmarda",
    en: "watchog",
    fr: "miradar",
    ja: "ミルホッグ",
    zh: "步哨鼠",
  },
  number: 505,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "yorkleff",
    en: "lillipup",
    fr: "ponchiot",
    ja: "ヨーテリー",
    zh: "小约克",
  },
  number: 506,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "terribark",
    en: "herdier",
    fr: "ponchien",
    ja: "ハーデリア",
    zh: "哈约克",
  },
  number: 507,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "bissbark",
    en: "stoutland",
    fr: "mastouffe",
    ja: "ムーランド",
    zh: "长毛狗",
  },
  number: 508,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "felilou",
    en: "purrloin",
    fr: "chacripan",
    ja: "チョロネコ",
    zh: "扒手猫",
  },
  number: 509,
  pokemonTypes: ["dark", ""],
},{
  names: {
    de: "kleoparda",
    en: "liepard",
    fr: "léopardus",
    ja: "レパルダス",
    zh: "酷豹",
  },
  number: 510,
  pokemonTypes: ["dark", ""],
},{
  names: {
    de: "vegimak",
    en: "pansage",
    fr: "feuillajou",
    ja: "ヤナップ",
    zh: "花椰猴",
  },
  number: 511,
  pokemonTypes: ["grass", ""],
},{
  names: {
    de: "vegichita",
    en: "simisage",
    fr: "feuiloutan",
    ja: "ヤナッキー",
    zh: "花椰猿",
  },
  number: 512,
  pokemonTypes: ["grass", ""],
},{
  names: {
    de: "grillmak",
    en: "pansear",
    fr: "flamajou",
    ja: "バオップ",
    zh: "爆香猴",
  },
  number: 513,
  pokemonTypes: ["fire", ""],
},{
  names: {
    de: "grillchita",
    en: "simisear",
    fr: "flamoutan",
    ja: "バオッキー",
    zh: "爆香猿",
  },
  number: 514,
  pokemonTypes: ["fire", ""],
},{
  names: {
    de: "sodamak",
    en: "panpour",
    fr: "flotajou",
    ja: "ヒヤップ",
    zh: "冷水猴",
  },
  number: 515,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "sodachita",
    en: "simipour",
    fr: "flotoutan",
    ja: "ヒヤッキー",
    zh: "冷水猿",
  },
  number: 516,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "somniam",
    en: "munna",
    fr: "munna",
    ja: "ムンナ",
    zh: "食梦梦",
  },
  number: 517,
  pokemonTypes: ["psychic", ""],
},{
  names: {
    de: "somnivora",
    en: "musharna",
    fr: "mushana",
    ja: "ムシャーナ",
    zh: "梦梦蚀",
  },
  number: 518,
  pokemonTypes: ["psychic", ""],
},{
  names: {
    de: "dusselgurr",
    en: "pidove",
    fr: "poichigeon",
    ja: "マメパト",
    zh: "豆豆鸽",
  },
  number: 519,
  pokemonTypes: ["normal", "flying"],
},{
  names: {
    de: "navitaub",
    en: "tranquill",
    fr: "colombeau",
    ja: "ハトーボー",
    zh: "咕咕鸽",
  },
  number: 520,
  pokemonTypes: ["normal", "flying"],
},{
  names: {
    de: "fasasnob",
    en: "unfezant",
    fr: "déflaisan",
    ja: "ケンホロウ",
    zh: "高傲雉鸡",
  },
  number: 521,
  pokemonTypes: ["normal", "flying"],
},{
  names: {
    de: "elezeba",
    en: "blitzle",
    fr: "zébibron",
    ja: "シママ",
    zh: "斑斑马",
  },
  number: 522,
  pokemonTypes: ["electric", ""],
},{
  names: {
    de: "zebritz",
    en: "zebstrika",
    fr: "zéblitz",
    ja: "ゼブライカ",
    zh: "雷电斑马",
  },
  number: 523,
  pokemonTypes: ["electric", ""],
},{
  names: {
    de: "kiesling",
    en: "roggenrola",
    fr: "nodulithe",
    ja: "ダンゴロ",
    zh: "石丸子",
  },
  number: 524,
  pokemonTypes: ["rock", ""],
},{
  names: {
    de: "sedimantur",
    en: "boldore",
    fr: "géolithe",
    ja: "ガントル",
    zh: "地幔岩",
  },
  number: 525,
  pokemonTypes: ["rock", ""],
},{
  names: {
    de: "brockoloss",
    en: "gigalith",
    fr: "gigalithe",
    ja: "ギガイアス",
    zh: "庞岩怪",
  },
  number: 526,
  pokemonTypes: ["rock", ""],
},{
  names: {
    de: "fleknoil",
    en: "woobat",
    fr: "chovsourir",
    ja: "コロモリ",
    zh: "滚滚蝙蝠",
  },
  number: 527,
  pokemonTypes: ["psychic", "flying"],
},{
  names: {
    de: "fletiamo",
    en: "swoobat",
    fr: "rhinolove",
    ja: "ココロモリ",
    zh: "心蝙蝠",
  },
  number: 528,
  pokemonTypes: ["psychic", "flying"],
},{
  names: {
    de: "rotomurf",
    en: "drilbur",
    fr: "rototaupe",
    ja: "モグリュー",
    zh: "螺钉地鼠",
  },
  number: 529,
  pokemonTypes: ["ground", ""],
},{
  names: {
    de: "stalobor",
    en: "excadrill",
    fr: "minotaupe",
    ja: "ドリュウズ",
    zh: "龙头地鼠",
  },
  number: 530,
  pokemonTypes: ["ground", "steel"],
},{
  names: {
    de: "ohrdoch",
    en: "audino",
    fr: "nanméouïe",
    ja: "タブンネ",
    zh: "差不多娃娃",
  },
  number: 531,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "praktibalk",
    en: "timburr",
    fr: "charpenti",
    ja: "ドッコラー",
    zh: "搬运小匠",
  },
  number: 532,
  pokemonTypes: ["fighting", ""],
},{
  names: {
    de: "strepoli",
    en: "gurdurr",
    fr: "ouvrifier",
    ja: "ドテッコツ",
    zh: "铁骨土人",
  },
  number: 533,
  pokemonTypes: ["fighting", ""],
},{
  names: {
    de: "meistagrif",
    en: "conkeldurr",
    fr: "bétochef",
    ja: "ローブシン",
    zh: "修建老匠",
  },
  number: 534,
  pokemonTypes: ["fighting", ""],
},{
  names: {
    de: "schallquap",
    en: "tympole",
    fr: "tritonde",
    ja: "オタマロ",
    zh: "圆蝌蚪",
  },
  number: 535,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "mebrana",
    en: "palpitoad",
    fr: "batracné",
    ja: "ガマガル",
    zh: "蓝蟾蜍",
  },
  number: 536,
  pokemonTypes: ["water", "ground"],
},{
  names: {
    de: "branawarz",
    en: "seismitoad",
    fr: "crapustule",
    ja: "ガマゲロゲ",
    zh: "蟾蜍王",
  },
  number: 537,
  pokemonTypes: ["water", "ground"],
},{
  names: {
    de: "jiutesto",
    en: "throh",
    fr: "judokrak",
    ja: "ナゲキ",
    zh: "投摔鬼",
  },
  number: 538,
  pokemonTypes: ["fighting", ""],
},{
  names: {
    de: "karadonis",
    en: "sawk",
    fr: "karaclée",
    ja: "ダゲキ",
    zh: "打击鬼",
  },
  number: 539,
  pokemonTypes: ["fighting", ""],
},{
  names: {
    de: "strawickl",
    en: "sewaddle",
    fr: "larveyette",
    ja: "クルミル",
    zh: "虫宝包",
  },
  number: 540,
  pokemonTypes: ["bug", "grass"],
},{
  names: {
    de: "folikon",
    en: "swadloon",
    fr: "couverdure",
    ja: "クルマユ",
    zh: "宝包茧",
  },
  number: 541,
  pokemonTypes: ["bug", "grass"],
},{
  names: {
    de: "matrifol",
    en: "leavanny",
    fr: "manternel",
    ja: "ハハコモリ",
    zh: "保姆虫",
  },
  number: 542,
  pokemonTypes: ["bug", "grass"],
},{
  names: {
    de: "toxiped",
    en: "venipede",
    fr: "venipatte",
    ja: "フシデ",
    zh: "百足蜈蚣",
  },
  number: 543,
  pokemonTypes: ["bug", "poison"],
},{
  names: {
    de: "rollum",
    en: "whirlipede",
    fr: "scobolide",
    ja: "ホイーガ",
    zh: "车轮球",
  },
  number: 544,
  pokemonTypes: ["bug", "poison"],
},{
  names: {
    de: "cerapendra",
    en: "scolipede",
    fr: "brutapode",
    ja: "ペンドラー",
    zh: "蜈蚣王",
  },
  number: 545,
  pokemonTypes: ["bug", "poison"],
},{
  names: {
    de: "waumboll",
    en: "cottonee",
    fr: "doudouvet",
    ja: "モンメン",
    zh: "木棉球",
  },
  number: 546,
  pokemonTypes: ["grass", "fairy"],
},{
  names: {
    de: "elfun",
    en: "whimsicott",
    fr: "farfaduvet",
    ja: "エルフーン",
    zh: "风妖精",
  },
  number: 547,
  pokemonTypes: ["grass", "fairy"],
},{
  names: {
    de: "lilminip",
    en: "petilil",
    fr: "chlorobule",
    ja: "チュリネ",
    zh: "百合根娃娃",
  },
  number: 548,
  pokemonTypes: ["grass", ""],
},{
  names: {
    de: "dressella",
    en: "lilligant",
    fr: "fragilady",
    ja: "ドレディア",
    zh: "裙儿小姐",
  },
  number: 549,
  pokemonTypes: ["grass", ""],
},{
  names: {
    de: "barschuft",
    en: "basculin",
    fr: "bargantua",
    ja: "バスラオ",
    zh: "野蛮鲈鱼",
  },
  number: 550,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "ganovil",
    en: "sandile",
    fr: "mascaïman",
    ja: "メグロコ",
    zh: "黑眼鳄",
  },
  number: 551,
  pokemonTypes: ["ground", "dark"],
},{
  names: {
    de: "rokkaiman",
    en: "krokorok",
    fr: "escroco",
    ja: "ワルビル",
    zh: "混混鳄",
  },
  number: 552,
  pokemonTypes: ["ground", "dark"],
},{
  names: {
    de: "rabigator",
    en: "krookodile",
    fr: "crocorible",
    ja: "ワルビアル",
    zh: "流氓鳄",
  },
  number: 553,
  pokemonTypes: ["ground", "dark"],
},{
  names: {
    de: "flampion",
    en: "darumaka",
    fr: "darumarond",
    ja: "ダルマッカ",
    zh: "火红不倒翁",
  },
  number: 554,
  pokemonTypes: ["fire", ""],
},{
  names: {
    de: "flampivian",
    en: "darmanitan",
    fr: "darumacho",
    ja: "ヒヒダルマ",
    zh: "达摩狒狒",
  },
  number: 555,
  pokemonTypes: ["fire", ""],
},{
  names: {
    de: "maracamba",
    en: "maractus",
    fr: "maracachi",
    ja: "マラカッチ",
    zh: "沙铃仙人掌",
  },
  number: 556,
  pokemonTypes: ["grass", ""],
},{
  names: {
    de: "lithomith",
    en: "dwebble",
    fr: "crabicoque",
    ja: "イシズマイ",
    zh: "石居蟹",
  },
  number: 557,
  pokemonTypes: ["bug", "rock"],
},{
  names: {
    de: "castellith",
    en: "crustle",
    fr: "crabaraque",
    ja: "イワパレス",
    zh: "岩殿居蟹",
  },
  number: 558,
  pokemonTypes: ["bug", "rock"],
},{
  names: {
    de: "zurrokex",
    en: "scraggy",
    fr: "baggiguane",
    ja: "ズルッグ",
    zh: "滑滑小子",
  },
  number: 559,
  pokemonTypes: ["dark", "fighting"],
},{
  names: {
    de: "irokex",
    en: "scrafty",
    fr: "baggaïd",
    ja: "ズルズキン",
    zh: "头巾混混",
  },
  number: 560,
  pokemonTypes: ["dark", "fighting"],
},{
  names: {
    de: "symvolara",
    en: "sigilyph",
    fr: "cryptéro",
    ja: "シンボラー",
    zh: "象征鸟",
  },
  number: 561,
  pokemonTypes: ["psychic", "flying"],
},{
  names: {
    de: "makabaja",
    en: "yamask",
    fr: "tutafeh",
    ja: "デスマス",
    zh: "哭哭面具",
  },
  number: 562,
  pokemonTypes: ["ghost", ""],
},{
  names: {
    de: "echnatoll",
    en: "cofagrigus",
    fr: "tutankafer",
    ja: "デスカーン",
    zh: "迭失棺",
  },
  number: 563,
  pokemonTypes: ["ghost", ""],
},{
  names: {
    de: "galapaflos",
    en: "tirtouga",
    fr: "carapagos",
    ja: "プロトーガ",
    zh: "原盖海龟",
  },
  number: 564,
  pokemonTypes: ["water", "rock"],
},{
  names: {
    de: "karippas",
    en: "carracosta",
    fr: "mégapagos",
    ja: "アバゴーラ",
    zh: "肋骨海龟",
  },
  number: 565,
  pokemonTypes: ["water", "rock"],
},{
  names: {
    de: "flapteryx",
    en: "archen",
    fr: "arkéapti",
    ja: "アーケン",
    zh: "始祖小鸟",
  },
  number: 566,
  pokemonTypes: ["rock", "flying"],
},{
  names: {
    de: "aeropteryx",
    en: "archeops",
    fr: "aéroptéryx",
    ja: "アーケオス",
    zh: "始祖大鸟",
  },
  number: 567,
  pokemonTypes: ["rock", "flying"],
},{
  names: {
    de: "unratütox",
    en: "trubbish",
    fr: "miamiasme",
    ja: "ヤブクロン",
    zh: "破破袋",
  },
  number: 568,
  pokemonTypes: ["poison", ""],
},{
  names: {
    de: "deponitox",
    en: "garbodor",
    fr: "miasmax",
    ja: "ダストダス",
    zh: "灰尘山",
  },
  number: 569,
  pokemonTypes: ["poison", ""],
},{
  names: {
    de: "zorua",
    en: "zorua",
    fr: "zorua",
    ja: "ゾロア",
    zh: "索罗亚",
  },
  number: 570,
  pokemonTypes: ["dark", ""],
},{
  names: {
    de: "zoroark",
    en: "zoroark",
    fr: "zoroark",
    ja: "ゾロアーク",
    zh: "索罗亚克",
  },
  number: 571,
  pokemonTypes: ["dark", ""],
},{
  names: {
    de: "picochilla",
    en: "minccino",
    fr: "chinchidou",
    ja: "チラーミィ",
    zh: "泡沫栗鼠",
  },
  number: 572,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "chillabell",
    en: "cinccino",
    fr: "pashmilla",
    ja: "チラチーノ",
    zh: "奇诺栗鼠",
  },
  number: 573,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "mollimorba",
    en: "gothita",
    fr: "scrutella",
    ja: "ゴチム",
    zh: "哥德宝宝",
  },
  number: 574,
  pokemonTypes: ["psychic", ""],
},{
  names: {
    de: "hypnomorba",
    en: "gothorita",
    fr: "mesmérella",
    ja: "ゴチミル",
    zh: "哥德小童",
  },
  number: 575,
  pokemonTypes: ["psychic", ""],
},{
  names: {
    de: "morbitesse",
    en: "gothitelle",
    fr: "sidérella",
    ja: "ゴチルゼル",
    zh: "哥德小姐",
  },
  number: 576,
  pokemonTypes: ["psychic", ""],
},{
  names: {
    de: "monozyto",
    en: "solosis",
    fr: "nucléos",
    ja: "ユニラン",
    zh: "单卵细胞球",
  },
  number: 577,
  pokemonTypes: ["psychic", ""],
},{
  names: {
    de: "mitodos",
    en: "duosion",
    fr: "méios",
    ja: "ダブラン",
    zh: "双卵细胞球",
  },
  number: 578,
  pokemonTypes: ["psychic", ""],
},{
  names: {
    de: "zytomega",
    en: "reuniclus",
    fr: "symbios",
    ja: "ランクルス",
    zh: "人造细胞卵",
  },
  number: 579,
  pokemonTypes: ["psychic", ""],
},{
  names: {
    de: "piccolente",
    en: "ducklett",
    fr: "couaneton",
    ja: "コアルヒー",
    zh: "鸭宝宝",
  },
  number: 580,
  pokemonTypes: ["water", "flying"],
},{
  names: {
    de: "swaroness",
    en: "swanna",
    fr: "lakmécygne",
    ja: "スワンナ",
    zh: "舞天鹅",
  },
  number: 581,
  pokemonTypes: ["water", "flying"],
},{
  names: {
    de: "gelatini",
    en: "vanillite",
    fr: "sorbébé",
    ja: "バニプッチ",
    zh: "迷你冰",
  },
  number: 582,
  pokemonTypes: ["ice", ""],
},{
  names: {
    de: "gelatroppo",
    en: "vanillish",
    fr: "sorboul",
    ja: "バニリッチ",
    zh: "多多冰",
  },
  number: 583,
  pokemonTypes: ["ice", ""],
},{
  names: {
    de: "gelatwino",
    en: "vanilluxe",
    fr: "sorbouboul",
    ja: "バイバニラ",
    zh: "双倍多多冰",
  },
  number: 584,
  pokemonTypes: ["ice", ""],
},{
  names: {
    de: "sesokitz",
    en: "deerling",
    fr: "vivaldaim",
    ja: "シキジカ",
    zh: "四季鹿",
  },
  number: 585,
  pokemonTypes: ["normal", "grass"],
},{
  names: {
    de: "kronjuwild",
    en: "sawsbuck",
    fr: "haydaim",
    ja: "メブキジカ",
    zh: "萌芽鹿",
  },
  number: 586,
  pokemonTypes: ["normal", "grass"],
},{
  names: {
    de: "emolga",
    en: "emolga",
    fr: "emolga",
    ja: "エモンガ",
    zh: "电飞鼠",
  },
  number: 587,
  pokemonTypes: ["electric", "flying"],
},{
  names: {
    de: "laukaps",
    en: "karrablast",
    fr: "carabing",
    ja: "カブルモ",
    zh: "盖盖虫",
  },
  number: 588,
  pokemonTypes: ["bug", ""],
},{
  names: {
    de: "cavalanzas",
    en: "escavalier",
    fr: "lançargot",
    ja: "シュバルゴ",
    zh: "骑士蜗牛",
  },
  number: 589,
  pokemonTypes: ["bug", "steel"],
},{
  names: {
    de: "tarnpignon",
    en: "foongus",
    fr: "trompignon",
    ja: "タマゲタケ",
    zh: "哎呀球菇",
  },
  number: 590,
  pokemonTypes: ["grass", "poison"],
},{
  names: {
    de: "hutsassa",
    en: "amoonguss",
    fr: "gaulet",
    ja: "モロバレル",
    zh: "败露球菇",
  },
  number: 591,
  pokemonTypes: ["grass", "poison"],
},{
  names: {
    de: "quabbel",
    en: "frillish",
    fr: "viskuse",
    ja: "プルリル",
    zh: "轻飘飘",
  },
  number: 592,
  pokemonTypes: ["water", "ghost"],
},{
  names: {
    de: "apoquallyp",
    en: "jellicent",
    fr: "moyade",
    ja: "ブルンゲル",
    zh: "胖嘟嘟",
  },
  number: 593,
  pokemonTypes: ["water", "ghost"],
},{
  names: {
    de: "mamolida",
    en: "alomomola",
    fr: "mamanbo",
    ja: "ママンボウ",
    zh: "保姆曼波",
  },
  number: 594,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "wattzapf",
    en: "joltik",
    fr: "statitik",
    ja: "バチュル",
    zh: "电电虫",
  },
  number: 595,
  pokemonTypes: ["bug", "electric"],
},{
  names: {
    de: "voltula",
    en: "galvantula",
    fr: "mygavolt",
    ja: "デンチュラ",
    zh: "电蜘蛛",
  },
  number: 596,
  pokemonTypes: ["bug", "electric"],
},{
  names: {
    de: "kastadur",
    en: "ferroseed",
    fr: "grindur",
    ja: "テッシード",
    zh: "种子铁球",
  },
  number: 597,
  pokemonTypes: ["grass", "steel"],
},{
  names: {
    de: "tentantel",
    en: "ferrothorn",
    fr: "noacier",
    ja: "ナットレイ",
    zh: "坚果哑铃",
  },
  number: 598,
  pokemonTypes: ["grass", "steel"],
},{
  names: {
    de: "klikk",
    en: "klink",
    fr: "tic",
    ja: "ギアル",
    zh: "齿轮儿",
  },
  number: 599,
  pokemonTypes: ["steel", ""],
},{
  names: {
    de: "kliklak",
    en: "klang",
    fr: "clic",
    ja: "ギギアル",
    zh: "齿轮组",
  },
  number: 600,
  pokemonTypes: ["steel", ""],
},{
  names: {
    de: "klikdiklak",
    en: "klinklang",
    fr: "cliticlic",
    ja: "ギギギアル",
    zh: "齿轮怪",
  },
  number: 601,
  pokemonTypes: ["steel", ""],
},{
  names: {
    de: "zapplardin",
    en: "tynamo",
    fr: "anchwatt",
    ja: "シビシラス",
    zh: "麻麻小鱼",
  },
  number: 602,
  pokemonTypes: ["electric", ""],
},{
  names: {
    de: "zapplalek",
    en: "eelektrik",
    fr: "lampéroie",
    ja: "シビビール",
    zh: "麻麻鳗",
  },
  number: 603,
  pokemonTypes: ["electric", ""],
},{
  names: {
    de: "zapplarang",
    en: "eelektross",
    fr: "ohmassacre",
    ja: "シビルドン",
    zh: "麻麻鳗鱼王",
  },
  number: 604,
  pokemonTypes: ["electric", ""],
},{
  names: {
    de: "pygraulon",
    en: "elgyem",
    fr: "lewsor",
    ja: "リグレー",
    zh: "小灰怪",
  },
  number: 605,
  pokemonTypes: ["psychic", ""],
},{
  names: {
    de: "megalon",
    en: "beheeyem",
    fr: "neitram",
    ja: "オーベム",
    zh: "大宇怪",
  },
  number: 606,
  pokemonTypes: ["psychic", ""],
},{
  names: {
    de: "lichtel",
    en: "litwick",
    fr: "funécire",
    ja: "ヒトモシ",
    zh: "烛光灵",
  },
  number: 607,
  pokemonTypes: ["ghost", "fire"],
},{
  names: {
    de: "laternecto",
    en: "lampent",
    fr: "mélancolux",
    ja: "ランプラー",
    zh: "灯火幽灵",
  },
  number: 608,
  pokemonTypes: ["ghost", "fire"],
},{
  names: {
    de: "skelabra",
    en: "chandelure",
    fr: "lugulabre",
    ja: "シャンデラ",
    zh: "水晶灯火灵",
  },
  number: 609,
  pokemonTypes: ["ghost", "fire"],
},{
  names: {
    de: "milza",
    en: "axew",
    fr: "coupenotte",
    ja: "キバゴ",
    zh: "牙牙",
  },
  number: 610,
  pokemonTypes: ["dragon", ""],
},{
  names: {
    de: "sharfax",
    en: "fraxure",
    fr: "incisache",
    ja: "オノンド",
    zh: "斧牙龙",
  },
  number: 611,
  pokemonTypes: ["dragon", ""],
},{
  names: {
    de: "maxax",
    en: "haxorus",
    fr: "tranchodon",
    ja: "オノノクス",
    zh: "双斧战龙",
  },
  number: 612,
  pokemonTypes: ["dragon", ""],
},{
  names: {
    de: "petznief",
    en: "cubchoo",
    fr: "polarhume",
    ja: "クマシュン",
    zh: "喷嚏熊",
  },
  number: 613,
  pokemonTypes: ["ice", ""],
},{
  names: {
    de: "siberio",
    en: "beartic",
    fr: "polagriffe",
    ja: "ツンベアー",
    zh: "冻原熊",
  },
  number: 614,
  pokemonTypes: ["ice", ""],
},{
  names: {
    de: "frigometri",
    en: "cryogonal",
    fr: "hexagel",
    ja: "フリージオ",
    zh: "几何雪花",
  },
  number: 615,
  pokemonTypes: ["ice", ""],
},{
  names: {
    de: "schnuthelm",
    en: "shelmet",
    fr: "escargaume",
    ja: "チョボマキ",
    zh: "小嘴蜗",
  },
  number: 616,
  pokemonTypes: ["bug", ""],
},{
  names: {
    de: "hydragil",
    en: "accelgor",
    fr: "limaspeed",
    ja: "アギルダー",
    zh: "敏捷虫",
  },
  number: 617,
  pokemonTypes: ["bug", ""],
},{
  names: {
    de: "flunschlik",
    en: "stunfisk",
    fr: "limonde",
    ja: "マッギョ",
    zh: "泥巴鱼",
  },
  number: 618,
  pokemonTypes: ["ground", "electric"],
},{
  names: {
    de: "lin-fu",
    en: "mienfoo",
    fr: "kungfouine",
    ja: "コジョフー",
    zh: "功夫鼬",
  },
  number: 619,
  pokemonTypes: ["fighting", ""],
},{
  names: {
    de: "wie-shu",
    en: "mienshao",
    fr: "shaofouine",
    ja: "コジョンド",
    zh: "师父鼬",
  },
  number: 620,
  pokemonTypes: ["fighting", ""],
},{
  names: {
    de: "shardrago",
    en: "druddigon",
    fr: "drakkarmin",
    ja: "クリムガン",
    zh: "赤面龙",
  },
  number: 621,
  pokemonTypes: ["dragon", ""],
},{
  names: {
    de: "golbit",
    en: "golett",
    fr: "gringolem",
    ja: "ゴビット",
    zh: "泥偶小人",
  },
  number: 622,
  pokemonTypes: ["ground", "ghost"],
},{
  names: {
    de: "golgantes",
    en: "golurk",
    fr: "golemastoc",
    ja: "ゴルーグ",
    zh: "泥偶巨人",
  },
  number: 623,
  pokemonTypes: ["ground", "ghost"],
},{
  names: {
    de: "gladiantri",
    en: "pawniard",
    fr: "scalpion",
    ja: "コマタナ",
    zh: "驹刀小兵",
  },
  number: 624,
  pokemonTypes: ["dark", "steel"],
},{
  names: {
    de: "caesurio",
    en: "bisharp",
    fr: "scalproie",
    ja: "キリキザン",
    zh: "劈斩司令",
  },
  number: 625,
  pokemonTypes: ["dark", "steel"],
},{
  names: {
    de: "bisofank",
    en: "bouffalant",
    fr: "frison",
    ja: "バッフロン",
    zh: "爆炸头水牛",
  },
  number: 626,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "geronimatz",
    en: "rufflet",
    fr: "furaiglon",
    ja: "ワシボン",
    zh: "毛头小鹰",
  },
  number: 627,
  pokemonTypes: ["normal", "flying"],
},{
  names: {
    de: "washakwil",
    en: "braviary",
    fr: "gueriaigle",
    ja: "ウォーグル",
    zh: "勇士雄鹰",
  },
  number: 628,
  pokemonTypes: ["normal", "flying"],
},{
  names: {
    de: "skallyk",
    en: "vullaby",
    fr: "vostourno",
    ja: "バルチャイ",
    zh: "秃鹰丫头",
  },
  number: 629,
  pokemonTypes: ["dark", "flying"],
},{
  names: {
    de: "grypheldis",
    en: "mandibuzz",
    fr: "vaututrice",
    ja: "バルジーナ",
    zh: "秃鹰娜",
  },
  number: 630,
  pokemonTypes: ["dark", "flying"],
},{
  names: {
    de: "furnifraß",
    en: "heatmor",
    fr: "aflamanoir",
    ja: "クイタラン",
    zh: "熔蚁兽",
  },
  number: 631,
  pokemonTypes: ["fire", ""],
},{
  names: {
    de: "fermicula",
    en: "durant",
    fr: "fermite",
    ja: "アイアント",
    zh: "铁蚁",
  },
  number: 632,
  pokemonTypes: ["bug", "steel"],
},{
  names: {
    de: "kapuno",
    en: "deino",
    fr: "solochi",
    ja: "モノズ",
    zh: "单首龙",
  },
  number: 633,
  pokemonTypes: ["dark", "dragon"],
},{
  names: {
    de: "duodino",
    en: "zweilous",
    fr: "diamat",
    ja: "ジヘッド",
    zh: "双首暴龙",
  },
  number: 634,
  pokemonTypes: ["dark", "dragon"],
},{
  names: {
    de: "trikephalo",
    en: "hydreigon",
    fr: "trioxhydre",
    ja: "サザンドラ",
    zh: "三首恶龙",
  },
  number: 635,
  pokemonTypes: ["dark", "dragon"],
},{
  names: {
    de: "ignivor",
    en: "larvesta",
    fr: "pyronille",
    ja: "メラルバ",
    zh: "燃烧虫",
  },
  number: 636,
  pokemonTypes: ["bug", "fire"],
},{
  names: {
    de: "ramoth",
    en: "volcarona",
    fr: "pyrax",
    ja: "ウルガモス",
    zh: "火神蛾",
  },
  number: 637,
  pokemonTypes: ["bug", "fire"],
},{
  names: {
    de: "kobalium",
    en: "cobalion",
    fr: "cobaltium",
    ja: "コバルオン",
    zh: "勾帕路翁",
  },
  number: 638,
  pokemonTypes: ["steel", "fighting"],
},{
  names: {
    de: "terrakium",
    en: "terrakion",
    fr: "terrakium",
    ja: "テラキオン",
    zh: "代拉基翁",
  },
  number: 639,
  pokemonTypes: ["rock", "fighting"],
},{
  names: {
    de: "viridium",
    en: "virizion",
    fr: "viridium",
    ja: "ビリジオン",
    zh: "毕力吉翁",
  },
  number: 640,
  pokemonTypes: ["grass", "fighting"],
},{
  names: {
    de: "boreos",
    en: "tornadus",
    fr: "boréas",
    ja: "トルネロス",
    zh: "龙卷云",
  },
  number: 641,
  pokemonTypes: ["flying", ""],
},{
  names: {
    de: "voltolos",
    en: "thundurus",
    fr: "fulguris",
    ja: "ボルトロス",
    zh: "雷电云",
  },
  number: 642,
  pokemonTypes: ["electric", "flying"],
},{
  names: {
    de: "reshiram",
    en: "reshiram",
    fr: "reshiram",
    ja: "レシラム",
    zh: "莱希拉姆",
  },
  number: 643,
  pokemonTypes: ["dragon", "fire"],
},{
  names: {
    de: "zekrom",
    en: "zekrom",
    fr: "zekrom",
    ja: "ゼクロム",
    zh: "捷克罗姆",
  },
  number: 644,
  pokemonTypes: ["dragon", "electric"],
},{
  names: {
    de: "demeteros",
    en: "landorus",
    fr: "démétéros",
    ja: "ランドロス",
    zh: "土地云",
  },
  number: 645,
  pokemonTypes: ["ground", "flying"],
},{
  names: {
    de: "kyurem",
    en: "kyurem",
    fr: "kyurem",
    ja: "キュレム",
    zh: "酋雷姆",
  },
  number: 646,
  pokemonTypes: ["dragon", "ice"],
},{
  names: {
    de: "keldeo",
    en: "keldeo",
    fr: "keldeo",
    ja: "ケルディオ",
    zh: "凯路迪欧",
  },
  number: 647,
  pokemonTypes: ["water", "fighting"],
},{
  names: {
    de: "meloetta",
    en: "meloetta",
    fr: "meloetta",
    ja: "メロエッタ",
    zh: "美洛耶塔",
  },
  number: 648,
  pokemonTypes: ["normal", "psychic"],
},{
  names: {
    de: "genesect",
    en: "genesect",
    fr: "genesect",
    ja: "ゲノセクト",
    zh: "盖诺赛克特",
  },
  number: 649,
  pokemonTypes: ["bug", "steel"],
},{
  names: {
    de: "igamaro",
    en: "chespin",
    fr: "marisson",
    ja: "ハリマロン",
    zh: "哈力栗",
  },
  number: 650,
 pokemonTypes: ["grass", ""],
},{
  names: {
    de: "igastarnish",
    en: "quilladin",
    fr: "boguérisse",
    ja: "ハリボーグ",
    zh: "胖胖哈力",
  },
  number: 651,
  pokemonTypes: ["grass", ""],
},{
  names: {
    de: "brigaron",
    en: "chesnaught",
    fr: "blindépique",
    ja: "ブリガロン",
    zh: "布里卡隆",
  },
  number: 652,
  pokemonTypes: ["grass", "fighting"],
},{
  names: {
    de: "fynx",
    en: "fennekin",
    fr: "feunnec",
    ja: "フォッコ",
    zh: "火狐狸",
  },
  number: 653,
  pokemonTypes: ["fire", ""],
},{
  names: {
    de: "rutena",
    en: "braixen",
    fr: "roussil",
    ja: "テールナー",
    zh: "长尾火狐",
  },
  number: 654,
  pokemonTypes: ["fire", ""],
},{
  names: {
    de: "fennexis",
    en: "delphox",
    fr: "goupelin",
    ja: "マフォクシー",
    zh: "妖火红狐",
  },
  number: 655,
  pokemonTypes: ["fire", "psychic"],
},{
  names: {
    de: "froxy",
    en: "froakie",
    fr: "grenousse",
    ja: "ケロマツ",
    zh: "呱呱泡蛙",
  },
  number: 656,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "amphizel",
    en: "frogadier",
    fr: "croâporal",
    ja: "ゲコガシラ",
    zh: "呱头蛙",
  },
  number: 657,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "quajutsu",
    en: "greninja",
    fr: "amphinobi",
    ja: "ゲッコウガ",
    zh: "甲贺忍蛙",
  },
  number: 658,
  pokemonTypes: ["water", "dark"],
},{
  names: {
    de: "scoppel",
    en: "bunnelby",
    fr: "sapereau",
    ja: "ホルビー",
    zh: "掘掘兔",
  },
  number: 659,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "grebbit",
    en: "diggersby",
    fr: "excavarenne",
    ja: "ホルード",
    zh: "掘地兔",
  },
  number: 660,
  pokemonTypes: ["normal", "ground"],
},{
  names: {
    de: "dartiri",
    en: "fletchling",
    fr: "passerouge",
    ja: "ヤヤコマ",
    zh: "小箭雀",
  },
  number: 661,
pokemonTypes: ["normal", "flying"],
},{
  names: {
    de: "dartignis",
    en: "fletchinder",
    fr: "braisillon",
    ja: "ヒノヤコマ",
    zh: "火箭雀",
  },
  number: 662,
  pokemonTypes: ["fire", "flying"],
},{
  names: {
    de: "fiaro",
    en: "talonflame",
    fr: "flambusard",
    ja: "ファイアロー",
    zh: "烈箭鹰",
  },
  number: 663,
  pokemonTypes: ["fire", "flying"],
},{
  names: {
    de: "purmel",
    en: "scatterbug",
    fr: "lépidonille",
    ja: "コフキムシ",
    zh: "粉蝶虫",
  },
  number: 664,
  pokemonTypes: ["bug", ""],
},{
  names: {
    de: "puponcho",
    en: "spewpa",
    fr: "pérégrain",
    ja: "コフーライ",
    zh: "粉蝶蛹",
  },
  number: 665,
  pokemonTypes: ["bug", ""],
},{
  names: {
    de: "vivillon",
    en: "vivillon",
    fr: "prismillon",
    ja: "ビビヨン",
    zh: "彩粉蝶",
  },
  number: 666,
  pokemonTypes: ["bug", "flying"],
},{
  names: {
    de: "leufeo",
    en: "litleo",
    fr: "hélionceau",
    ja: "シシコ",
    zh: "小狮狮",
  },
  number: 667,
  pokemonTypes: ["fire", "normal"],
},{
  names: {
    de: "pyroleo",
    en: "pyroar",
    fr: "némélios",
    ja: "カエンジシ",
    zh: "火炎狮",
  },
  number: 668,
  pokemonTypes: ["fire", "normal"],
},{
  names: {
    de: "flabébé",
    en: "flabébé",
    fr: "flabébé",
    ja: "フラベベ",
    zh: "花蓓蓓",
  },
  number: 669,
  pokemonTypes: ["fairy", ""],
},{
  names: {
    de: "floette",
    en: "floette",
    fr: "floette",
    ja: "フラエッテ",
    zh: "花叶蒂",
  },
  number: 670,
  pokemonTypes: ["fairy", ""],
},{
  names: {
    de: "florges",
    en: "florges",
    fr: "florges",
    ja: "フラージェス",
    zh: "花洁夫人",
  },
  number: 671,
  pokemonTypes: ["fairy", ""],
},{
  names: {
    de: "mähikel",
    en: "skiddo",
    fr: "cabriolaine",
    ja: "メェークル",
    zh: "坐骑小羊",
  },
  number: 672,
  pokemonTypes: ["grass", ""],
},{
  names: {
    de: "chevrumm",
    en: "gogoat",
    fr: "chevroum",
    ja: "ゴーゴート",
    zh: "坐骑山羊",
  },
  number: 673,
  pokemonTypes: ["grass", ""],
},{
  names: {
    de: "pam-pam",
    en: "pancham",
    fr: "pandespiègle",
    ja: "ヤンチャム",
    zh: "顽皮熊猫",
  },
  number: 674,
  pokemonTypes: ["fighting", ""],
},{
  names: {
    de: "pandagro",
    en: "pangoro",
    fr: "pandarbare",
    ja: "ゴロンダ",
    zh: "霸道熊猫",
  },
  number: 675,
  pokemonTypes: ["fighting", "dark"],
},{
  names: {
    de: "coiffwaff",
    en: "furfrou",
    fr: "couafarel",
    ja: "トリミアン",
    zh: "多丽米亚",
  },
  number: 676,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "psiau",
    en: "espurr",
    fr: "psystigri",
    ja: "ニャスパー",
    zh: "妙喵",
  },
  number: 677,
  pokemonTypes: ["psychic", ""],
},{
  names: {
    de: "psiaugon",
    en: "meowstic",
    fr: "mistigrix",
    ja: "ニャオニクス",
    zh: "超能妙喵",
  },
  number: 678,
  pokemonTypes: ["psychic", ""],
},{
  names: {
    de: "gramokles",
    en: "honedge",
    fr: "monorpale",
    ja: "ヒトツキ",
    zh: "独剑鞘",
  },
  number: 679,
  pokemonTypes: ["steel", "ghost"],
},{
  names: {
    de: "duokles",
    en: "doublade",
    fr: "dimoclès",
    ja: "ニダンギル",
    zh: "双剑鞘",
  },
  number: 680,
  pokemonTypes: ["steel", "ghost"],
},{
  names: {
    de: "durengard",
    en: "aegislash",
    fr: "exagide",
    ja: "ギルガルド",
    zh: "坚盾剑怪",
  },
  number: 681,
  pokemonTypes: ["steel", "ghost"],
},{
  names: {
    de: "parfi",
    en: "spritzee",
    fr: "fluvetin",
    ja: "シュシュプ",
    zh: "粉香香",
  },
  number: 682,
  pokemonTypes: ["fairy", ""],
},{
  names: {
    de: "parfinesse",
    en: "aromatisse",
    fr: "cocotine",
    ja: "フレフワン",
    zh: "芳香精",
  },
  number: 683,
  pokemonTypes: ["fairy", ""],
},{
  names: {
    de: "flauschling",
    en: "swirlix",
    fr: "sucroquin",
    ja: "ペロッパフ",
    zh: "绵绵泡芙",
  },
  number: 684,
  pokemonTypes: ["fairy", ""],
},{
  names: {
    de: "sabbaione",
    en: "slurpuff",
    fr: "cupcanaille",
    ja: "ペロリーム",
    zh: "胖甜妮",
  },
  number: 685,
  pokemonTypes: ["fairy", ""],
},{
  names: {
    de: "iscalar",
    en: "inkay",
    fr: "sepiatop",
    ja: "マーイーカ",
    zh: "好啦鱿",
  },
  number: 686,
  pokemonTypes: ["dark", "psychic"],
},{
  names: {
    de: "calamanero",
    en: "malamar",
    fr: "sepiatroce",
    ja: "カラマネロ",
    zh: "乌贼王",
  },
  number: 687,
  pokemonTypes: ["dark", "psychic"],
},{
  names: {
    de: "bithora",
    en: "binacle",
    fr: "opermine",
    ja: "カメテテ",
    zh: "龟脚脚",
  },
  number: 688,
  pokemonTypes: ["rock", "water"],
},{
  names: {
    de: "thanathora",
    en: "barbaracle",
    fr: "golgopathe",
    ja: "ガメノデス",
    zh: "龟足巨铠",
  },
  number: 689,
  pokemonTypes: ["rock", "water"],
},{
  names: {
    de: "algitt",
    en: "skrelp",
    fr: "venalgue",
    ja: "クズモー",
    zh: "垃垃藻",
  },
  number: 690,
  pokemonTypes: ["poison", "water"],
},{
  names: {
    de: "tandrak",
    en: "dragalge",
    fr: "kravarech",
    ja: "ドラミドロ",
    zh: "毒藻龙",
  },
  number: 691,
  pokemonTypes: ["poison", "dragon"],
},{
  names: {
    de: "scampisto",
    en: "clauncher",
    fr: "flingouste",
    ja: "ウデッポウ",
    zh: "铁臂枪虾",
  },
  number: 692,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "wummer",
    en: "clawitzer",
    fr: "gamblast",
    ja: "ブロスター",
    zh: "钢炮臂虾",
  },
  number: 693,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "eguana",
    en: "helioptile",
    fr: "galvaran",
    ja: "エリキテル",
    zh: "伞电蜥",
  },
  number: 694,
  pokemonTypes: ["electric", "normal"],
},{
  names: {
    de: "elezard",
    en: "heliolisk",
    fr: "iguolta",
    ja: "エレザード",
    zh: "光电伞蜥",
  },
  number: 695,
  pokemonTypes: ["electric", "normal"],
},{
  names: {
    de: "balgoras",
    en: "tyrunt",
    fr: "ptyranidur",
    ja: "チゴラス",
    zh: "宝宝暴龙",
  },
  number: 696,  
  pokemonTypes: ["rock", "dragon"],
},{
  names: {
    de: "monargoras",
    en: "tyrantrum",
    fr: "rexillius",
    ja: "ガチゴラス",
    zh: "怪颚龙",
  },
  number: 697,
  pokemonTypes: ["rock", "dragon"],
},{
  names: {
    de: "amarino",
    en: "amaura",
    fr: "amagara",
    ja: "アマルス",
    zh: "冰雪龙",
  },
  number: 698,
  pokemonTypes: ["rock", "ice"],
},{
  names: {
    de: "amagarga",
    en: "aurorus",
    fr: "dragmara",
    ja: "アマルルガ",
    zh: "冰雪巨龙",
  },
  number: 699,
  pokemonTypes: ["rock", "ice"],
},{
  names: {
    de: "feelinara",
    en: "sylveon",
    fr: "nymphali",
    ja: "ニンフィア",
    zh: "仙子伊布",
  },
  number: 700,
  pokemonTypes: ["fairy", ""],
},{
  names: {
    de: "resladero",
    en: "hawlucha",
    fr: "brutalibré",
    ja: "ルチャブル",
    zh: "摔角鹰人",
  },
  number: 701,
  pokemonTypes: ["fighting", "flying"],
},{
  names: {
    de: "dedenne",
    en: "dedenne",
    fr: "dedenne",
    ja: "デデンネ",
    zh: "咚咚鼠",
  },
  number: 702,
  pokemonTypes: ["electric", "fairy"],
},{
  names: {
    de: "rocara",
    en: "carbink",
    fr: "strassie",
    ja: "メレシー",
    zh: "小碎钻",
  },
  number: 703,
  pokemonTypes: ["rock", "fairy"],
},{
  names: {
    de: "viscora",
    en: "goomy",
    fr: "mucuscule",
    ja: "ヌメラ",
    zh: "黏黏宝",
  },
  number: 704,  
  pokemonTypes: ["dragon", ""],
},{
  names: {
    de: "viscargot",
    en: "sliggoo",
    fr: "colimucus",
    ja: "ヌメイル",
    zh: "黏美儿",
  },
  number: 705,
  pokemonTypes: ["dragon", ""],
},{
  names: {
    de: "viscogon",
    en: "goodra",
    fr: "muplodocus",
    ja: "ヌメルゴン",
    zh: "黏美龙",
  },
  number: 706,
  pokemonTypes: ["dragon", ""],
},{
  names: {
    de: "clavion",
    en: "klefki",
    fr: "trousselin",
    ja: "クレッフィ",
    zh: "钥圈儿",
  },
  number: 707,
  pokemonTypes: ["steel", "fairy"],
},{
  names: {
    de: "paragoni",
    en: "phantump",
    fr: "brocélôme",
    ja: "ボクレー",
    zh: "小木灵",
  },
  number: 708,
  pokemonTypes: ["ghost", "grass"],
},{
  names: {
    de: "trombork",
    en: "trevenant",
    fr: "desséliande",
    ja: "オーロット",
    zh: "朽木妖",
  },
  number: 709,
  pokemonTypes: ["ghost", "grass"],
},{
  names: {
    de: "irrbis",
    en: "pumpkaboo",
    fr: "pitrouille",
    ja: "バケッチャ",
    zh: "南瓜精",
  },
  number: 710,
  pokemonTypes: ["ghost", "grass"],
},{
  names: {
    de: "pumpdjinn",
    en: "gourgeist",
    fr: "banshitrouye",
    ja: "パンプジン",
    zh: "南瓜怪人",
  },
  number: 711,
  pokemonTypes: ["ghost", "grass"],
},{
  names: {
    de: "arktip",
    en: "bergmite",
    fr: "grelaçon",
    ja: "カチコール",
    zh: "冰宝",
  },
  number: 712,
  pokemonTypes: ["ice", ""],
},{
  names: {
    de: "arktilas",
    en: "avalugg",
    fr: "séracrawl",
    ja: "クレベース",
    zh: "冰岩怪",
  },
  number: 713,
  pokemonTypes: ["ice", ""],
},{
  names: {
    de: "ef-em",
    en: "noibat",
    fr: "sonistrelle",
    ja: "オンバット",
    zh: "嗡蝠",
  },
  number: 714,
  pokemonTypes: ["flying", "dragon"],
},{
  names: {
    de: "uhafnir",
    en: "noivern",
    fr: "bruyverne",
    ja: "オンバーン",
    zh: "音波龙",
  },
  number: 715,
  pokemonTypes: ["flying", "dragon"],
},{
  names: {
    de: "xerneas",
    en: "xerneas",
    fr: "xerneas",
    ja: "ゼルネアス",
    zh: "哲尔尼亚斯",
  },
  number: 716,
  pokemonTypes: ["fairy", ""],
},{
  names: {
    de: "yveltal",
    en: "yveltal",
    fr: "yveltal",
    ja: "イベルタル",
    zh: "伊裴尔塔尔",
  },
  number: 717,
  pokemonTypes: ["dark", "flying"],
},{
  names: {
    de: "zygarde",
    en: "zygarde",
    fr: "zygarde",
    ja: "ジガルデ",
    zh: "基格尔德",
  },
  number: 718,
  pokemonTypes: ["dragon", "ground"],
},{
  names: {
    de: "diancie",
    en: "diancie",
    fr: "diancie",
    ja: "ディアンシー",
    zh: "蒂安希",
  },
  number: 719,
  pokemonTypes: ["rock", "fairy"],
},{
  names: {
    de: "hoopa",
    en: "hoopa",
    fr: "hoopa",
    ja: "フーパ",
    zh: "胡帕",
  },
  number: 720,
  pokemonTypes: ["psychic", "ghost"],
},{
  names: {
    de: "volcanion",
    en: "volcanion",
    fr: "volcanion",
    ja: "ボルケニオン",
    zh: "波尔凯尼恩",
  },
  number: 721,
  pokemonTypes: ["fire", "water"],
},{
  names: {
    de: "bauz",
    en: "rowlet",
    fr: "brindibou",
    ja: "モクロー",
    zh: "木木枭",
  },
  number: 722,
  pokemonTypes: ["grass", "flying"],
},{
  names: {
    de: "arboretoss",
    en: "dartrix",
    fr: "efflèche",
    ja: "フクスロー",
    zh: "投羽枭",
  },
  number: 723,
  pokemonTypes: ["grass", "flying"],
},{
  names: {
    de: "silvarro",
    en: "decidueye",
    fr: "archéduc",
    ja: "ジュナイパー",
    zh: "狙射树枭",
  },
  number: 724,
  pokemonTypes: ["grass", "ghost"],
},{
  names: {
    de: "flamiau",
    en: "litten",
    fr: "flamiaou",
    ja: "ニャビー",
    zh: "火斑喵",
  },
  number: 725,
  pokemonTypes: ["fire", ""],
},{
  names: {
    de: "miezunder",
    en: "torracat",
    fr: "matoufeu",
    ja: "ニャヒート",
    zh: "炎热喵",
  },
  number: 726,
  pokemonTypes: ["fire", ""],
},{
  names: {
    de: "fuegro",
    en: "incineroar",
    fr: "félinferno",
    ja: "ガオガエン",
    zh: "炽焰咆哮虎",
  },
  number: 727,
  pokemonTypes: ["fire", "dark"],
},{
  names: {
    de: "robball",
    en: "popplio",
    fr: "otaquin",
    ja: "アシマリ",
    zh: "球球海狮",
  },
  number: 728,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "marikeck",
    en: "brionne",
    fr: "otarlette",
    ja: "オシャマリ",
    zh: "花漾海狮",
  },
  number: 729,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "primarene",
    en: "primarina",
    fr: "oratoria",
    ja: "アシレーヌ",
    zh: "西狮海壬",
  },
  number: 730,
  pokemonTypes: ["water", "fairy"],
},{
  names: {
    de: "peppeck",
    en: "pikipek",
    fr: "picassaut",
    ja: "ツツケラ",
    zh: "小笃儿",
  },
  number: 731,
  pokemonTypes: ["normal", "flying"],
},{
  names: {
    de: "trompeck",
    en: "trumbeak",
    fr: "piclairon",
    ja: "ケララッパ",
    zh: "喇叭啄鸟",
  },
  number: 732,
  pokemonTypes: ["normal", "flying"],
},{
  names: {
    de: "tukanon",
    en: "toucannon",
    fr: "bazoucan",
    ja: "ドデカバシ",
    zh: "铳嘴大鸟",
  },
  number: 733,
  pokemonTypes: ["normal", "flying"],
},{
  names: {
    de: "mangunior",
    en: "yungoos",
    fr: "manglouton",
    ja: "ヤングース",
    zh: "猫鼬少",
  },
  number: 734,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "manguspektor",
    en: "gumshoos",
    fr: "argouste",
    ja: "デカグース",
    zh: "猫鼬探长",
  },
  number: 735,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "mabula",
    en: "grubbin",
    fr: "larvibule",
    ja: "アゴジムシ",
    zh: "强颚鸡母虫",
  },
  number: 736,
  pokemonTypes: ["bug", ""],
},{
  names: {
    de: "akkup",
    en: "charjabug",
    fr: "chrysapile",
    ja: "デンヂムシ",
    zh: "虫电宝",
  },
  number: 737,
  pokemonTypes: ["bug", "electric"],
},{
  names: {
    de: "donarion",
    en: "vikavolt",
    fr: "lucanon",
    ja: "クワガノン",
    zh: "锹农炮虫",
  },
  number: 738,
  pokemonTypes: ["bug", "electric"],
},{
  names: {
    de: "krabbox",
    en: "crabrawler",
    fr: "crabagarre",
    ja: "マケンカニ",
    zh: "好胜蟹",
  },
  number: 739,
  pokemonTypes: ["fighting", ""],
},{
  names: {
    de: "krawell",
    en: "crabominable",
    fr: "crabominable",
    ja: "ケケンカニ",
    zh: "好胜毛蟹",
  },
  number: 740,
  pokemonTypes: ["fighting", "ice"],
},{
  names: {
    de: "choreogel",
    en: "oricorio",
    fr: "plumeline",
    ja: "オドリドリ",
    zh: "花舞鸟",
  },
  number: 741,
  pokemonTypes: ["fire", "flying"],
},{
  names: {
    de: "wommel",
    en: "cutiefly",
    fr: "bombydou",
    ja: "アブリー",
    zh: "萌虻",
  },
  number: 742,
  pokemonTypes: ["bug", "fairy"],
},{
  names: {
    de: "bandelby",
    en: "ribombee",
    fr: "rubombelle",
    ja: "アブリボン",
    zh: "蝶结萌虻",
  },
  number: 743,
  pokemonTypes: ["bug", "fairy"],
},{
  names: {
    de: "wuffels",
    en: "rockruff",
    fr: "rocabot",
    ja: "イワンコ",
    zh: "岩狗狗",
  },
  number: 744,
  pokemonTypes: ["rock", ""],
},{
  names: {
    de: "wolwerock",
    en: "lycanroc",
    fr: "lougaroc",
    ja: "ルガルガン",
    zh: "鬃岩狼人",
  },
  number: 745,
  pokemonTypes: ["rock", ""],
},{
  names: {
    de: "lusardin",
    en: "wishiwashi",
    fr: "froussardine",
    ja: "ヨワシ",
    zh: "弱丁鱼",
  },
  number: 746,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "garstella",
    en: "mareanie",
    fr: "vorastérie",
    ja: "ヒドイデ",
    zh: "好坏星",
  },
  number: 747,
  pokemonTypes: ["poison", "water"],
},{
  names: {
    de: "aggrostella",
    en: "toxapex",
    fr: "prédastérie",
    ja: "ドヒドイデ",
    zh: "超坏星",
  },
  number: 748,
  pokemonTypes: ["poison", "water"],
},{
  names: {
    de: "pampuli",
    en: "mudbray",
    fr: "tiboudet",
    ja: "ドロバンコ",
    zh: "泥驴仔",
  },
  number: 749,
  pokemonTypes: ["ground", ""],
},{
  names: {
    de: "pampross",
    en: "mudsdale",
    fr: "bourrinos",
    ja: "バンバドロ",
    zh: "重泥挽马",
  },
  number: 750,
  pokemonTypes: ["ground", ""],
},{
  names: {
    de: "araqua",
    en: "dewpider",
    fr: "araqua",
    ja: "シズクモ",
    zh: "滴蛛",
  },
  number: 751,
  pokemonTypes: ["water", "bug"],
},{
  names: {
    de: "aranestro",
    en: "araquanid",
    fr: "tarenbulle",
    ja: "オニシズクモ",
    zh: "滴蛛霸",
  },
  number: 752,
  pokemonTypes: ["water", "bug"],
},{
  names: {
    de: "imantis",
    en: "fomantis",
    fr: "mimantis",
    ja: "カリキリ",
    zh: "伪螳草",
  },
  number: 753,
  pokemonTypes: ["grass", ""],
},{
  names: {
    de: "mantidea",
    en: "lurantis",
    fr: "floramantis",
    ja: "ラランテス",
    zh: "兰螳花",
  },
  number: 754,
  pokemonTypes: ["grass", ""],
},{
  names: {
    de: "bubungus",
    en: "morelull",
    fr: "spododo",
    ja: "ネマシュ",
    zh: "睡睡菇",
  },
  number: 755,
  pokemonTypes: ["grass", "fairy"], 
},{
  names: {
    de: "lamellux",
    en: "shiinotic",
    fr: "lampignon",
    ja: "マシェード",
    zh: "灯罩夜菇",
  },
  number: 756,
  pokemonTypes: ["grass", "fairy"],
},{
  names: {
    de: "molunk",
    en: "salandit",
    fr: "tritox",
    ja: "ヤトウモリ",
    zh: "夜盗火蜥",
  },
  number: 757,
  pokemonTypes: ["poison", "fire"],
},{
  names: {
    de: "amfira",
    en: "salazzle",
    fr: "malamandre",
    ja: "エンニュート",
    zh: "焰后蜥",
  },
  number: 758,
  pokemonTypes: ["poison", "fire"],
},{
  names: {
    de: "velursi",
    en: "stufful",
    fr: "nounourson",
    ja: "ヌイコグマ",
    zh: "童偶熊",
  },
  number: 759,
  pokemonTypes: ["normal", "fighting"],
},{
  names: {
    de: "kosturso",
    en: "bewear",
    fr: "chelours",
    ja: "キテルグマ",
    zh: "穿着熊",
  },
  number: 760,
  pokemonTypes: ["normal", "fighting"],
},{
  names: {
    de: "frubberl",
    en: "bounsweet",
    fr: "croquine",
    ja: "アマカジ",
    zh: "甜竹竹",
  },
  number: 761,
  pokemonTypes: ["grass", ""],
},{
  names: {
    de: "frubaila",
    en: "steenee",
    fr: "candine",
    ja: "アママイコ",
    zh: "甜舞妮",
  },
  number: 762,
  pokemonTypes: ["grass", ""],
},{
  names: {
    de: "fruyal",
    en: "tsareena",
    fr: "sucreine",
    ja: "アマージョ",
    zh: "甜冷美后",
  },
  number: 763,
  pokemonTypes: ["grass", ""],
},{
  names: {
    de: "curelei",
    en: "comfey",
    fr: "guérilande",
    ja: "キュワワー",
    zh: "花疗环环",
  },
  number: 764,
  pokemonTypes: ["fairy", ""],
},{
  names: {
    de: "kommandutan",
    en: "oranguru",
    fr: "gouroutan",
    ja: "ヤレユータン",
    zh: "智挥猩",
  },
  number: 765,
  pokemonTypes: ["normal", "psychic"],
},{
  names: {
    de: "quartermak",
    en: "passimian",
    fr: "quartermac",
    ja: "ナゲツケサル",
    zh: "投掷猴",
  },
  number: 766,
  pokemonTypes: ["fighting", ""],
},{
  names: {
    de: "reißlaus",
    en: "wimpod",
    fr: "sovkipou",
    ja: "コソクムシ",
    zh: "胆小虫",
  },
  number: 767,
  pokemonTypes: ["bug", "water"],
},{
  names: {
    de: "tectass",
    en: "golisopod",
    fr: "sarmuraï",
    ja: "グソクムシャ",
    zh: "具甲武者",
  },
  number: 768,
  pokemonTypes: ["bug", "water"],
},{
  names: {
    de: "sankabuh",
    en: "sandygast",
    fr: "bacabouh",
    ja: "スナバァ",
    zh: "沙丘娃",
  },
  number: 769,
  pokemonTypes: ["ghost", "ground"],
},{
  names: {
    de: "colossand",
    en: "palossand",
    fr: "trépassable",
    ja: "シロデスナ",
    zh: "噬沙堡爷",
  },
  number: 770,
  pokemonTypes: ["ghost", "ground"],
},{
  names: {
    de: "gufa",
    en: "pyukumuku",
    fr: "concombaffe",
    ja: "ナマコブシ",
    zh: "拳海参",
  },
  number: 771,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "typ: null",
    en: "type: null",
    fr: "type:0",
    ja: "タイプ：ヌル",
    zh: "属性：空",
  },
  number: 772,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "amigento",
    en: "silvally",
    fr: "silvallié",
    ja: "シルヴァディ",
    zh: "银伴战兽",
  },
  number: 773,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "meteno",
    en: "minior",
    fr: "météno",
    ja: "メテノ",
    zh: "小陨星",
  },
  number: 774,
  pokemonTypes: ["rock", "flying"],
},{
  names: {
    de: "koalelu",
    en: "komala",
    fr: "dodoala",
    ja: "ネッコアラ",
    zh: "树枕尾熊",
  },
  number: 775,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "tortunator",
    en: "turtonator",
    fr: "boumata",
    ja: "バクガメス",
    zh: "爆焰龟兽",
  },
  number: 776,
  pokemonTypes: ["fire", "dragon"],
},{
  names: {
    de: "togedemaru",
    en: "togedemaru",
    fr: "togedemaru",
    ja: "トゲデマル",
    zh: "托戈德玛尔",
  },
  number: 777,
  pokemonTypes: ["electric", "steel"],
},{
  names: {
    de: "mimigma",
    en: "mimikyu",
    fr: "mimiqui",
    ja: "ミミッキュ",
    zh: "谜拟丘",
  },
  number: 778,
  pokemonTypes: ["ghost", "fairy"],
},{
  names: {
    de: "knirfish",
    en: "bruxish",
    fr: "denticrisse",
    ja: "ハギギシリ",
    zh: "磨牙彩皮鱼",
  },
  number: 779,
  pokemonTypes: ["water", "psychic"],
},{
  names: {
    de: "sen-long",
    en: "drampa",
    fr: "draïeul",
    ja: "ジジーロン",
    zh: "老翁龙",
  },
  number: 780,
  pokemonTypes: ["normal", "dragon"],
},{
  names: {
    de: "moruda",
    en: "dhelmise",
    fr: "sinistrail",
    ja: "ダダリン",
    zh: "破破舵轮",
  },
  number: 781,
  pokemonTypes: ["ghost", "grass"],
},{
  names: {
    de: "miniras",
    en: "jangmo-o",
    fr: "bébécaille",
    ja: "ジャラコ",
    zh: "心鳞宝",
  },
  number: 782,
  pokemonTypes: ["dragon", ""],
},{
  names: {
    de: "mediras",
    en: "hakamo-o",
    fr: "écaïd",
    ja: "ジャランゴ",
    zh: "鳞甲龙",
  },
  number: 783,
  pokemonTypes: ["dragon", "fighting"],
},{
  names: {
    de: "grandiras",
    en: "kommo-o",
    fr: "ékaïser",
    ja: "ジャラランガ",
    zh: "杖尾鳞甲龙",
  },
  number: 784,
  pokemonTypes: ["dragon", "fighting"],
},{
  names: {
    de: "kapu-riki",
    en: "tapu koko",
    fr: "tokorico",
    ja: "カプ・コケコ",
    zh: "卡璞・鸣鸣",
  },
  number: 785,
  pokemonTypes: ["electric", "fairy"],
},{
  names: {
    de: "kapu-fala",
    en: "tapu lele",
    fr: "tokopiyon",
    ja: "カプ・テテフ",
    zh: "卡璞・蝶蝶",
  },
  number: 786,
  pokemonTypes: ["psychic", "fairy"],
},{
  names: {
    de: "kapu-toro",
    en: "tapu bulu",
    fr: "tokotoro",
    ja: "カプ・ブルル",
    zh: "卡璞・哞哞",
  },
  number: 787,
  pokemonTypes: ["grass", "fairy"],
},{
  names: {
    de: "kapu-kime",
    en: "tapu fini",
    fr: "tokopisco",
    ja: "カプ・レヒレ",
    zh: "卡璞・鳍鳍",
  },
  number: 788,
  pokemonTypes: ["water", "fairy"],
},{
  names: {
    de: "cosmog",
    en: "cosmog",
    fr: "cosmog",
    ja: "コスモッグ",
    zh: "科斯莫古",
  },
  number: 789,
  pokemonTypes: ["psychic", ""],
},{
  names: {
    de: "cosmovum",
    en: "cosmoem",
    fr: "cosmovum",
    ja: "コスモウム",
    zh: "科斯莫姆",
  },
  number: 790,
  pokemonTypes: ["psychic", ""],
},{
  names: {
    de: "solgaleo",
    en: "solgaleo",
    fr: "solgaleo",
    ja: "ソルガレオ",
    zh: "索尔迦雷欧",
  },
  number: 791,
  pokemonTypes: ["psychic", "steel"],
},{
  names: {
    de: "lunala",
    en: "lunala",
    fr: "lunala",
    ja: "ルナアーラ",
    zh: "露奈雅拉",
  },
  number: 792,
  pokemonTypes: ["psychic", "ghost"],
},{
  names: {
    de: "anego",
    en: "nihilego",
    fr: "zéroïd",
    ja: "ウツロイド",
    zh: "虚吾伊德",
  },
  number: 793,
  pokemonTypes: ["rock", "poison"],
},{
  names: {
    de: "masskito",
    en: "buzzwole",
    fr: "mouscoto",
    ja: "マッシブーン",
    zh: "爆肌蚊",
  },
  number: 794,
  pokemonTypes: ["bug", "fighting"],
},{
  names: {
    de: "schabelle",
    en: "pheromosa",
    fr: "cancrelove",
    ja: "フェローチェ",
    zh: "费洛美螂",
  },
  number: 795,
  pokemonTypes: ["bug", "fighting"],
},{
  names: {
    de: "voltriant",
    en: "xurkitree",
    fr: "câblifère",
    ja: "デンジュモク",
    zh: "电束木",
  },
  number: 796,
  pokemonTypes: ["electric", ""],
},{
  names: {
    de: "kaguron",
    en: "celesteela",
    fr: "bamboiselle",
    ja: "テッカグヤ",
    zh: "铁火辉夜",
  },
  number: 797,
  pokemonTypes: ["steel", "flying"],
},{
  names: {
    de: "katagami",
    en: "kartana",
    fr: "katagami",
    ja: "カミツルギ",
    zh: "纸御剑",
  },
  number: 798,
  pokemonTypes: ["grass", "steel"],
},{
  names: {
    de: "schlingking",
    en: "guzzlord",
    fr: "engloutyran",
    ja: "アクジキング",
    zh: "恶食大王",
  },
  number: 799,
  pokemonTypes: ["dark", "dragon"],
},{
  names: {
    de: "necrozma",
    en: "necrozma",
    fr: "necrozma",
    ja: "ネクロズマ",
    zh: "奈克洛兹玛",
  },
  number: 800,
  pokemonTypes: ["psychic", ""],
},{
  names: {
    de: "magearna",
    en: "magearna",
    fr: "magearna",
    ja: "マギアナ",
    zh: "玛机雅娜",
  },
  number: 801,
  pokemonTypes: ["steel", "fairy"],
},{
  names: {
    de: "marshadow",
    en: "marshadow",
    fr: "marshadow",
    ja: "マーシャドー",
    zh: "玛夏多",
  },
  number: 802,
  pokemonTypes: ["fighting", "ghost"],
},{
  names: {
    de: "venicro",
    en: "poipole",
    fr: "vémini",
    ja: "ベベノム",
    zh: "毒贝比",
  },
  number: 803,
  pokemonTypes: ["poison", ""],
},{
  names: {
    de: "agoyon",
    en: "naganadel",
    fr: "mandrillon",
    ja: "アーゴヨン",
    zh: "四颚针龙",
  },
  number: 804,
  pokemonTypes: ["poison", "dragon"],
},{
  names: {
    de: "muramura",
    en: "stakataka",
    fr: "ama-ama",
    ja: "ツンデツンデ",
    zh: "垒磊石",
  },
  number: 805,
  pokemonTypes: ["rock", "steel"],
},{
  names: {
    de: "kopplosio",
    en: "blacephalon",
    fr: "pierroteknik",
    ja: "ズガドーン",
    zh: "砰头小丑",
  },
  number: 806,
  pokemonTypes: ["fire", "ghost"],
},{
  names: {
    de: "zeraora",
    en: "zeraora",
    fr: "zeraora",
    ja: "ゼラオラ",
    zh: "捷拉奥拉",
  },
  number: 807,
  pokemonTypes: ["electric", ""],
},{
  names: {
    de: "meltan",
    en: "meltan",
    fr: "meltan",
    ja: "メルタン",
    zh: "美录坦",
  },
  number: 808,
  pokemonTypes: ["steel", ""],
},{
  names: {
    de: "melmetal",
    en: "melmetal",
    fr: "melmetal",
    ja: "メルメタル",
    zh: "美录梅塔",
  },
  number: 809,
  pokemonTypes: ["steel", ""],
},{
  names: {
    de: "chimpep",
    en: "grookey",
    fr: "ouistempo",
    ja: "サルノリ",
    zh: "敲音猴",
  },
  number: 810,
pokemonTypes: ["grass", ""],
},{
  names: {
    de: "chimstix",
    en: "thwackey",
    fr: "badabouin",
    ja: "バチンキー",
    zh: "啪咚猴",
  },
  number: 811,
  pokemonTypes: ["grass", ""],
},{
  names: {
    de: "gortrom",
    en: "rillaboom",
    fr: "gorythmic",
    ja: "ゴリランダー",
    zh: "轰擂金刚猩",
  },
  number: 812,
  pokemonTypes: ["grass", ""],
},{
  names: {
    de: "hopplo",
    en: "scorbunny",
    fr: "flambino",
    ja: "ヒバニー",
    zh: "炎兔儿",
  },
  number: 813,
  pokemonTypes: ["fire", ""],
},{
  names: {
    de: "kickerlo",
    en: "raboot",
    fr: "lapyro",
    ja: "ラビフット",
    zh: "腾蹴小将",
  },
  number: 814,
  pokemonTypes: ["fire", ""],
},{
  names: {
    de: "liberlo",
    en: "cinderace",
    fr: "pyrobut",
    ja: "エースバーン",
    zh: "闪焰王牌",
  },
  number: 815,
  pokemonTypes: ["fire", ""],
},{
  names: {
    de: "memmeon",
    en: "sobble",
    fr: "larméléon",
    ja: "メッソン",
    zh: "泪眼蜥",
  },
  number: 816,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "phlegleon",
    en: "drizzile",
    fr: "arrozard",
    ja: "ジメレオン",
    zh: "变涩蜥",
  },
  number: 817,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "intelleon",
    en: "inteleon",
    fr: "lézargus",
    ja: "インテレオン",
    zh: "千面避役",
  },
  number: 818,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "raffel",
    en: "skwovet",
    fr: "rongourmand",
    ja: "ホシガリス",
    zh: "贪心栗鼠",
  },
  number: 819,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "schlaraffel",
    en: "greedent",
    fr: "rongrigou",
    ja: "ヨクバリス",
    zh: "藏饱栗鼠",
  },
  number: 820,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "meikro",
    en: "rookidee",
    fr: "minisange",
    ja: "ココガラ",
    zh: "稚山雀",
  },
  number: 821,
  pokemonTypes: ["flying", ""],
},{
  names: {
    de: "kranoviz",
    en: "corvisquire",
    fr: "bleuseille",
    ja: "アオガラス",
    zh: "蓝鸦",
  },
  number: 822,
  pokemonTypes: ["flying", ""],
},{
  names: {
    de: "krarmor",
    en: "corviknight",
    fr: "corvaillus",
    ja: "アーマーガア",
    zh: "钢铠鸦",
  },
  number: 823,
  pokemonTypes: ["flying", "steel"],
},{
  names: {
    de: "sensect",
    en: "blipbug",
    fr: "larvadar",
    ja: "サッチムシ",
    zh: "索侦虫",
  },
  number: 824,
  pokemonTypes: ["bug", ""],
},{
  names: {
    de: "keradar",
    en: "dottler",
    fr: "coléodôme",
    ja: "レドームシ",
    zh: "天罩虫",
  },
  number: 825,
  pokemonTypes: ["bug", "psychic"],
},{
  names: {
    de: "maritellit",
    en: "orbeetle",
    fr: "astronelle",
    ja: "イオルブ",
    zh: "以欧路普",
  },
  number: 826,
  pokemonTypes: ["bug", "psychic"],
},{
  names: {
    de: "kleptifux",
    en: "nickit",
    fr: "goupilou",
    ja: "クスネ",
    zh: "狡小狐",
  },
  number: 827,
  pokemonTypes: ["dark", ""],
},{
  names: {
    de: "gaunux",
    en: "thievul",
    fr: "roublenard",
    ja: "フォクスライ",
    zh: "猾大狐",
  },
  number: 828,
  pokemonTypes: ["dark", ""],
},{
  names: {
    de: "cottini",
    en: "gossifleur",
    fr: "tournicoton",
    ja: "ヒメンカ",
    zh: "幼棉棉",
  },
  number: 829,
  pokemonTypes: ["grass", ""],
},{
  names: {
    de: "cottomi",
    en: "eldegoss",
    fr: "blancoton",
    ja: "ワタシラガ",
    zh: "白蓬蓬",
  },
  number: 830,
  pokemonTypes: ["grass", ""],
},{
  names: {
    de: "wolly",
    en: "wooloo",
    fr: "moumouton",
    ja: "ウールー",
    zh: "毛辫羊",
  },
  number: 831,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "zwollock",
    en: "dubwool",
    fr: "moumouflon",
    ja: "バイウールー",
    zh: "毛毛角羊",
  },
  number: 832,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "kamehaps",
    en: "chewtle",
    fr: "khélocrok",
    ja: "カムカメ",
    zh: "咬咬龟",
  },
  number: 833,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "kamalm",
    en: "drednaw",
    fr: "torgamord",
    ja: "カジリガメ",
    zh: "暴噬龟",
  },
  number: 834,
  pokemonTypes: ["water", "rock"],
},{
  names: {
    de: "voldi",
    en: "yamper",
    fr: "voltoutou",
    ja: "ワンパチ",
    zh: "来电汪",
  },
  number: 835,
  pokemonTypes: ["electric", ""],
},{
  names: {
    de: "bellektro",
    en: "boltund",
    fr: "fulgudog",
    ja: "パルスワン",
    zh: "逐电犬",
  },
  number: 836,
  pokemonTypes: ["electric", ""],
},{
  names: {
    de: "klonkett",
    en: "rolycoly",
    fr: "charbi",
    ja: "タンドン",
    zh: "小炭仔",
  },
  number: 837,
  pokemonTypes: ["rock", ""],
},{
  names: {
    de: "wagong",
    en: "carkol",
    fr: "wagomine",
    ja: "トロッゴン",
    zh: "大炭车",
  },
  number: 838,
  pokemonTypes: ["rock", "fire"],
},{
  names: {
    de: "montecarbo",
    en: "coalossal",
    fr: "monthracite",
    ja: "セキタンザン",
    zh: "巨炭山",
  },
  number: 839,
  pokemonTypes: ["rock", "fire"],
},{
  names: {
    de: "knapfel",
    en: "applin",
    fr: "verpom",
    ja: "カジッチュ",
    zh: "啃果虫",
  },
  number: 840,
  pokemonTypes: ["grass", "dragon"],
},{
  names: {
    de: "drapfel",
    en: "flapple",
    fr: "pomdrapi",
    ja: "アップリュー",
    zh: "苹裹龙",
  },
  number: 841,
  pokemonTypes: ["grass", "dragon"],
},{
  names: {
    de: "schlapfel",
    en: "appletun",
    fr: "dratatin",
    ja: "タルップル",
    zh: "丰蜜龙",
  },
  number: 842,
  pokemonTypes: ["grass", "dragon"],
},{
  names: {
    de: "salanga",
    en: "silicobra",
    fr: "dunaja",
    ja: "スナヘビ",
    zh: "沙包蛇",
  },
  number: 843,
  pokemonTypes: ["ground", ""],
},{
  names: {
    de: "sanaconda",
    en: "sandaconda",
    fr: "dunaconda",
    ja: "サダイジャ",
    zh: "沙螺蟒",
  },
  number: 844,
  pokemonTypes: ["ground", ""],
},{
  names: {
    de: "urgl",
    en: "cramorant",
    fr: "nigosier",
    ja: "ウッウ",
    zh: "古月鸟",
  },
  number: 845,
  pokemonTypes: ["flying", "water"],
},{
  names: {
    de: "pikuda",
    en: "arrokuda",
    fr: "embrochet",
    ja: "サシカマス",
    zh: "刺梭鱼",
  },
  number: 846,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "barrakiefa",
    en: "barraskewda",
    fr: "hastacuda",
    ja: "カマスジョー",
    zh: "戽斗尖梭",
  },
  number: 847,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "toxel",
    en: "toxel",
    fr: "toxizap",
    ja: "エレズン",
    zh: "电音婴",
  },
  number: 848,
  pokemonTypes: ["electric", "poison"],
},{
  names: {
    de: "riffex",
    en: "toxtricity",
    fr: "salarsen",
    ja: "ストリンダー",
    zh: "颤弦蝾螈",
  },
  number: 849,
  pokemonTypes: ["electric", "poison"],
},{
  names: {
    de: "thermopod",
    en: "sizzlipede",
    fr: "grillepattes",
    ja: "ヤクデ",
    zh: "烧火蚣",
  },
  number: 850,
  pokemonTypes: ["fire", "bug"],
},{
  names: {
    de: "infernopod",
    en: "centiskorch",
    fr: "scolocendre",
    ja: "マルヤクデ",
    zh: "焚焰蚣",
  },
  number: 851,
  pokemonTypes: ["fire", "bug"],
},{
  names: {
    de: "klopptopus",
    en: "clobbopus",
    fr: "poulpaf",
    ja: "タタッコ",
    zh: "拳拳蛸",
  },
  number: 852,
  pokemonTypes: ["fighting", ""],
},{
  names: {
    de: "kaocto",
    en: "grapploct",
    fr: "krakos",
    ja: "オトスパス",
    zh: "八爪武师",
  },
  number: 853,
  pokemonTypes: ["fighting", ""],
},{
  names: {
    de: "fatalitee",
    en: "sinistea",
    fr: "théffroi",
    ja: "ヤバチャ",
    zh: "来悲茶",
  },
  number: 854,
  pokemonTypes: ["ghost", ""],
},{
  names: {
    de: "mortipot",
    en: "polteageist",
    fr: "polthégeist",
    ja: "ポットデス",
    zh: "怖思壶",
  },
  number: 855,
  pokemonTypes: ["ghost", ""],
},{
  names: {
    de: "brimova",
    en: "hatenna",
    fr: "bibichut",
    ja: "ミブリム",
    zh: "迷布莉姆",
  },
  number: 856,
  pokemonTypes: ["psychic", ""],
},{
  names: {
    de: "brimano",
    en: "hattrem",
    fr: "chapotus",
    ja: "テブリム",
    zh: "提布莉姆",
  },
  number: 857,
  pokemonTypes: ["psychic", ""],
},{
  names: {
    de: "silembrim",
    en: "hatterene",
    fr: "sorcilence",
    ja: "ブリムオン",
    zh: "布莉姆温",
  },
  number: 858,
  pokemonTypes: ["psychic", "fairy"],
},{
  names: {
    de: "bähmon",
    en: "impidimp",
    fr: "grimalin",
    ja: "ベロバー",
    zh: "捣蛋小妖",
  },
  number: 859,
  pokemonTypes: ["dark", "fairy"],
},{
  names: {
    de: "pelzebub",
    en: "morgrem",
    fr: "fourbelin",
    ja: "ギモー",
    zh: "诈唬魔",
  },
  number: 860,
  pokemonTypes: ["dark", "fairy"],
},{
  names: {
    de: "olangaar",
    en: "grimmsnarl",
    fr: "angoliath",
    ja: "オーロンゲ",
    zh: "长毛巨魔",
  },
  number: 861,
  pokemonTypes: ["dark", "fairy"],
},{
  names: {
    de: "barrikadax",
    en: "obstagoon",
    fr: "ixon",
    ja: "タチフサグマ",
    zh: "堵拦熊",
  },
  number: 862,
  pokemonTypes: ["dark", "normal"],
},{
  names: {
    de: "mauzinger",
    en: "perrserker",
    fr: "berserkatt",
    ja: "ニャイキング",
    zh: "喵头目",
  },
  number: 863,
  pokemonTypes: ["steel", ""],
},{
  names: {
    de: "gorgasonn",
    en: "cursola",
    fr: "corayôme",
    ja: "サニゴーン",
    zh: "魔灵珊瑚",
  },
  number: 864,
  pokemonTypes: ["ghost", ""],
},{
  names: {
    de: "lauchzelot",
    en: "sirfetch'd",
    fr: "palarticho",
    ja: "ネギガナイト",
    zh: "葱游兵",
  },
  number: 865,
  pokemonTypes: ["fighting", ""],
},{
  names: {
    de: "pantifrost",
    en: "mr. rime",
    fr: "m. glaquette",
    ja: "バリコオル",
    zh: "踏冰人偶",
  },
  number: 866,
  pokemonTypes: ["ice", "psychic"],
},{
  names: {
    de: "oghnatoll",
    en: "runerigus",
    fr: "tutétékri",
    ja: "デスバーン",
    zh: "迭失板",
  },
  number: 867,
  pokemonTypes: ["ground", "ghost"],
},{
  names: {
    de: "hokumil",
    en: "milcery",
    fr: "crèmy",
    ja: "マホミル",
    zh: "小仙奶",
  },
  number: 868,
  pokemonTypes: ["fairy", ""],
},{
  names: {
    de: "pokusan",
    en: "alcremie",
    fr: "charmilly",
    ja: "マホイップ",
    zh: "霜奶仙",
  },
  number: 869,
  pokemonTypes: ["fairy", ""],
},{
  names: {
    de: "legios",
    en: "falinks",
    fr: "hexadron",
    ja: "タイレーツ",
    zh: "列阵兵",
  },
  number: 870,
  pokemonTypes: ["fighting", ""],
},{
  names: {
    de: "britzigel",
    en: "pincurchin",
    fr: "wattapik",
    ja: "バチンウニ",
    zh: "啪嚓海胆",
  },
  number: 871,
  pokemonTypes: ["electric", ""],
},{
  names: {
    de: "snomnom",
    en: "snom",
    fr: "frissonille",
    ja: "ユキハミ",
    zh: "雪吞虫",
  },
  number: 872,
  pokemonTypes: ["ice", "bug"],
},{
  names: {
    de: "mottineva",
    en: "frosmoth",
    fr: "beldeneige",
    ja: "モスノウ",
    zh: "雪绒蛾",
  },
  number: 873,
  pokemonTypes: ["ice", "bug"],
},{
  names: {
    de: "humanolith",
    en: "stonjourner",
    fr: "dolman",
    ja: "イシヘンジン",
    zh: "巨石丁",
  },
  number: 874,
  pokemonTypes: ["rock", ""],
},{
  names: {
    de: "kubuin",
    en: "eiscue",
    fr: "bekaglaçon",
    ja: "コオリッポ",
    zh: "冰砌鹅",
  },
  number: 875,
  pokemonTypes: ["ice", ""],
},{
  names: {
    de: "servol",
    en: "indeedee",
    fr: "wimessir",
    ja: "イエッサン",
    zh: "爱管侍",
  },
  number: 876,
  pokemonTypes: ["psychic", "normal"],
},{
  names: {
    de: "morpeko",
    en: "morpeko",
    fr: "morpeko",
    ja: "モルペコ",
    zh: "莫鲁贝可",
  },
  number: 877,
  pokemonTypes: ["electric", "dark"],
},{
  names: {
    de: "kupfanti",
    en: "cufant",
    fr: "charibari",
    ja: "ゾウドウ",
    zh: "铜象",
  },
  number: 878,
  pokemonTypes: ["steel", ""],
},{
  names: {
    de: "patinaraja",
    en: "copperajah",
    fr: "pachyradjah",
    ja: "ダイオウドウ",
    zh: "大王铜象",
  },
  number: 879,
  pokemonTypes: ["steel", ""],
},{
  names: {
    de: "lectragon",
    en: "dracozolt",
    fr: "galvagon",
    ja: "パッチラゴン",
    zh: "雷鸟龙",
  },
  number: 880,
  pokemonTypes: ["electric", "dragon"],
},{
  names: {
    de: "lecryodon",
    en: "arctozolt",
    fr: "galvagla",
    ja: "パッチルドン",
    zh: "雷鸟海兽",
  },
  number: 881,
  pokemonTypes: ["electric", "ice"],
},{
  names: {
    de: "pescragon",
    en: "dracovish",
    fr: "hydragon",
    ja: "ウオノラゴン",
    zh: "鳃鱼龙",
  },
  number: 882,
  pokemonTypes: ["water", "dragon"],
},{
  names: {
    de: "pescryodon",
    en: "arctovish",
    fr: "hydragla",
    ja: "ウオチルドン",
    zh: "鳃鱼海兽",
  },
  number: 883,
  pokemonTypes: ["water", "ice"],
},{
  names: {
    de: "duraludon",
    en: "duraludon",
    fr: "duralugon",
    ja: "ジュラルドン",
    zh: "铝钢龙",
  },
  number: 884,
  pokemonTypes: ["steel", "dragon"],
},{
  names: {
    de: "grolldra",
    en: "dreepy",
    fr: "fantyrm",
    ja: "ドラメシヤ",
    zh: "多龙梅西亚",
  },
  number: 885,
  pokemonTypes: ["dragon", "ghost"],
},{
  names: {
    de: "phandra",
    en: "drakloak",
    fr: "dispareptil",
    ja: "ドロンチ",
    zh: "多龙奇",
  },
  number: 886,
  pokemonTypes: ["dragon", "ghost"],
},{
  names: {
    de: "katapuldra",
    en: "dragapult",
    fr: "lanssorien",
    ja: "ドラパルト",
    zh: "多龙巴鲁托",
  },
  number: 887,
  pokemonTypes: ["dragon", "ghost"],
},{
  names: {
    de: "zacian",
    en: "zacian",
    fr: "zacian",
    ja: "ザシアン",
    zh: "苍响",
  },
  number: 888,
  pokemonTypes: ["fairy", ""],
},{
  names: {
    de: "zamazenta",
    en: "zamazenta",
    fr: "zamazenta",
    ja: "ザマゼンタ",
    zh: "藏玛然特",
  },
  number: 889,
  pokemonTypes: ["fighting", ""],
},{
  names: {
    de: "endynalos",
    en: "eternatus",
    fr: "éthernatos",
    ja: "ムゲンダイナ",
    zh: "无极汰那",
  },
  number: 890,
  pokemonTypes: ["poison", "dragon"],
},{
  names: {
    de: "dakuma",
    en: "kubfu",
    fr: "wushours",
    ja: "ダクマ",
    zh: "熊徒弟",
  },
  number: 891,
  pokemonTypes: ["fighting", ""],
},{
  names: {
    de: "wulaosu",
    en: "urshifu",
    fr: "shifours",
    ja: "ウーラオス",
    zh: "武道熊师",
  },
  number: 892,
  pokemonTypes: ["fighting", "dark"],
},{
  names: {
    de: "zarude",
    en: "zarude",
    fr: "zarude",
    ja: "ザルード",
    zh: "萨戮德",
  },
  number: 893,
  pokemonTypes: ["dark", "grass"],
},{
  names: {
    de: "regieleki",
    en: "regieleki",
    fr: "regieleki",
    ja: "レジエレキ",
    zh: "雷吉艾勒奇",
  },
  number: 894,
    pokemonTypes: ["electric", ""],
},{
  names: {
    de: "regidrago",
    en: "regidrago",
    fr: "regidrago",
    ja: "レジドラゴ",
    zh: "雷吉铎拉戈",
  },
  number: 895,
  pokemonTypes: ["dragon", ""],
},{
  names: {
    de: "polaross",
    en: "glastrier",
    fr: "blizzeval",
    ja: "ブリザポス",
    zh: "雪暴马",
  },
  number: 896,
  pokemonTypes: ["ice", ""],
},{
  names: {
    de: "phantoross",
    en: "spectrier",
    fr: "spectreval",
    ja: "レイスポス",
    zh: "灵幽马",
  },
  number: 897,
  pokemonTypes: ["ghost", ""],
},{
  names: {
    de: "coronospa",
    en: "calyrex",
    fr: "sylveroy",
    ja: "バドレックス",
    zh: "蕾冠王",
  },
  number: 898,
  pokemonTypes: ["psychic", "grass"],
},{
  names: {
    de: "damythir",
    en: "wyrdeer",
    fr: "cerbyllin",
    ja: "アヤシシ",
    zh: "诡角鹿",
  },
  number: 899,
  pokemonTypes: ["normal", "psychic"],
},{
  names: {
    de: "axantor",
    en: "kleavor",
    fr: "hachécateur",
    ja: "バサギリ",
    zh: "劈斧螳螂",
  },
  number: 900,
  pokemonTypes: ["bug", "rock"],
},{
  names: {
    de: "ursaluna",
    en: "ursaluna",
    fr: "ursaking",
    ja: "ガチグマ",
    zh: "月月熊",
  },
  number: 901,
  pokemonTypes: ["ground", "normal"],
},{
  names: {
    de: "salmagnis",
    en: "basculegion",
    fr: "paragruel",
    ja: "イダイトウ",
    zh: "幽尾玄鱼",
  },
  number: 902,
  pokemonTypes: ["water", "ghost"],
},{
  names: {
    de: "snieboss",
    en: "sneasler",
    fr: "farfurex",
    ja: "オオニューラ",
    zh: "大狃拉",
  },
  number: 903,
  pokemonTypes: ["fighting", "poison"],
},{
  names: {
    de: "myriador",
    en: "overqwil",
    fr: "qwilpik",
    ja: "ハリーマン",
    zh: "万针鱼",
  },
  number: 904,
  pokemonTypes: ["dark", "poison"],
},{
  names: {
    de: "cupidos",
    en: "enamorus",
    fr: "amovénus",
    ja: "ラブトロス",
    zh: "眷恋云",
  },
  number: 905,
  pokemonTypes: ["flying", "fairy"],
},{
  names: {
    de: "felori",
    en: "sprigatito",
    fr: "poussacha",
    ja: "ニャオハ",
    zh: "新叶喵",
  },
  number: 906,
  pokemonTypes: ["grass", ""],
},{
  names: {
    de: "feliospa",
    en: "floragato",
    fr: "matourgeon",
    ja: "ニャローテ",
    zh: "蒂蕾喵",
  },
  number: 907,
  pokemonTypes: ["grass", ""],
},{
  names: {
    de: "maskagato",
    en: "meowscarada",
    fr: "miascarade",
    ja: "マスカーニャ",
    zh: "魔幻假面喵",
  },
  number: 908,
  pokemonTypes: ["grass", "ghost"],
},{
  names: {
    de: "krokel",
    en: "fuecoco",
    fr: "chochodile",
    ja: "ホゲータ",
    zh: "呆火鳄",
  },
  number: 909,
  pokemonTypes: ["fire", ""],
},{
  names: {
    de: "lokroko",
    en: "crocalor",
    fr: "crocogril",
    ja: "アチゲータ",
    zh: "炙烫鳄",
  },
  number: 910,
  pokemonTypes: ["fire", ""],
},{
  names: {
    de: "skelokrok",
    en: "skeledirge",
    fr: "flâmigator",
    ja: "ラウドボーン",
    zh: "骨纹巨声鳄",
  },
  number: 911,
  pokemonTypes: ["fire", "ghost"],
},{
  names: {
    de: "kwaks",
    en: "quaxly",
    fr: "coiffeton",
    ja: "クワッス",
    zh: "润水鸭",
  },
  number: 912,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "fuentente",
    en: "quaxwell",
    fr: "canarbello",
    ja: "ウェルカモ",
    zh: "涌跃鸭",
  },
  number: 913,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "bailonda",
    en: "quaquaval",
    fr: "palmaval",
    ja: "ウェーニバル",
    zh: "狂欢浪舞鸭",
  },
  number: 914,
  pokemonTypes: ["water", "fighting"],
},{
  names: {
    de: "ferkuli",
    en: "lechonk",
    fr: "gourmelet",
    ja: "グルトン",
    zh: "爱吃豚",
  },
  number: 915,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "fragrunz",
    en: "oinkologne",
    fr: "fragroin",
    ja: "パフュートン",
    zh: "飘香豚",
  },
  number: 916,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "tarundel",
    en: "tarountula",
    fr: "tissenboule",
    ja: "タマンチュラ",
    zh: "团珠蛛",
  },
  number: 917,
  pokemonTypes: ["bug", ""],
},{
  names: {
    de: "spinsidias",
    en: "spidops",
    fr: "filentrappe",
    ja: "ワナイダー",
    zh: "操陷蛛",
  },
  number: 918,
  pokemonTypes: ["bug", ""],
},{
  names: {
    de: "micrick",
    en: "nymble",
    fr: "lilliterelle",
    ja: "マメバッタ",
    zh: "豆蟋蟀",
  },
  number: 919,
  pokemonTypes: ["bug", ""],
},{
  names: {
    de: "lextremo",
    en: "lokix",
    fr: "gambex",
    ja: "エクスレッグ",
    zh: "烈腿蝗",
  },
  number: 920,
  pokemonTypes: ["bug", "dark"],
},{
  names: {
    de: "pamo",
    en: "pawmi",
    fr: "pohm",
    ja: "パモ",
    zh: "布拨",
  },
  number: 921,
  pokemonTypes: ["electric", ""],
},{
  names: {
    de: "pamamo",
    en: "pawmo",
    fr: "pohmotte",
    ja: "パモット",
    zh: "布土拨",
  },
  number: 922,
  pokemonTypes: ["electric", "fighting"],
},{
  names: {
    de: "pamomamo",
    en: "pawmot",
    fr: "pohmarmotte",
    ja: "パーモット",
    zh: "巴布土拨",
  },
  number: 923,
  pokemonTypes: ["electric", "fighting"],
},{
  names: {
    de: "zwieps",
    en: "tandemaus",
    fr: "compagnol",
    ja: "ワッカネズミ",
    zh: "一对鼠",
  },
  number: 924,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "famieps",
    en: "maushold",
    fr: "famignol",
    ja: "イッカネズミ",
    zh: "一家鼠",
  },
  number: 925,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "hefel",
    en: "fidough",
    fr: "pâtachiot",
    ja: "パピモッチ",
    zh: "狗仔包",
  },
  number: 926,
  pokemonTypes: ["fairy", ""],
},{
  names: {
    de: "backel",
    en: "dachsbun",
    fr: "briochien",
    ja: "バウッツェル",
    zh: "麻花犬",
  },
  number: 927,
  pokemonTypes: ["fairy", ""],
},{
  names: {
    de: "olini",
    en: "smoliv",
    fr: "olivini",
    ja: "ミニーブ",
    zh: "迷你芙",
  },
  number: 928,
  pokemonTypes: ["grass", "normal"],
},{
  names: {
    de: "olivinio",
    en: "dolliv",
    fr: "olivado",
    ja: "オリーニョ",
    zh: "奥利纽",
  },
  number: 929,
  pokemonTypes: ["grass", "normal"],
},{
  names: {
    de: "olithena",
    en: "arboliva",
    fr: "arboliva",
    ja: "オリーヴァ",
    zh: "奥利瓦",
  },
  number: 930,
  pokemonTypes: ["grass", "normal"],
},{
  names: {
    de: "krawalloro",
    en: "squawkabilly",
    fr: "tapatoès",
    ja: "イキリンコ",
    zh: "怒鹦哥",
  },
  number: 931,
  pokemonTypes: ["normal", "flying"],
},{
  names: {
    de: "geosali",
    en: "nacli",
    fr: "selutin",
    ja: "コジオ",
    zh: "盐石宝",
  },
  number: 932,
  pokemonTypes: ["rock", ""],
},{
  names: {
    de: "sedisal",
    en: "naclstack",
    fr: "amassel",
    ja: "ジオヅム",
    zh: "盐石垒",
  },
  number: 933,
  pokemonTypes: ["rock", ""],
},{
  names: {
    de: "saltigant",
    en: "garganacl",
    fr: "gigansel",
    ja: "キョジオーン",
    zh: "盐石巨灵",
  },
  number: 934,
  pokemonTypes: ["rock", ""],
},{
  names: {
    de: "knarbon",
    en: "charcadet",
    fr: "charbambin",
    ja: "カルボウ",
    zh: "炭小侍",
  },
  number: 935,
  pokemonTypes: ["fire", ""],
},{
  names: {
    de: "crimanzo",
    en: "armarouge",
    fr: "carmadura",
    ja: "グレンアルマ",
    zh: "红莲铠骑",
  },
  number: 936,
  pokemonTypes: ["fire", "psychic"],
},{
  names: {
    de: "azugladis",
    en: "ceruledge",
    fr: "malvalame",
    ja: "ソウブレイズ",
    zh: "苍炎刃鬼",
  },
  number: 937,
  pokemonTypes: ["fire", "ghost"],
},{
  names: {
    de: "blipp",
    en: "tadbulb",
    fr: "têtampoule",
    ja: "ズピカ",
    zh: "光蚪仔",
  },
  number: 938,
  pokemonTypes: ["electric", ""],
},{
  names: {
    de: "wampitz",
    en: "bellibolt",
    fr: "ampibidou",
    ja: "ハラバリー",
    zh: "电肚蛙",
  },
  number: 939,
  pokemonTypes: ["electric", ""],
},{
  names: {
    de: "voltrel",
    en: "wattrel",
    fr: "zapétrel",
    ja: "カイデン",
    zh: "电海燕",
  },
  number: 940,
  pokemonTypes: ["electric", "flying"],
},{
  names: {
    de: "voltrean",
    en: "kilowattrel",
    fr: "fulgulairo",
    ja: "タイカイデン",
    zh: "大电海燕",
  },
  number: 941,
  pokemonTypes: ["electric", "flying"],
},{
  names: {
    de: "mobtiff",
    en: "maschiff",
    fr: "grondogue",
    ja: "オラチフ",
    zh: "偶叫獒",
  },
  number: 942,
  pokemonTypes: ["dark", ""],
},{
  names: {
    de: "mastifioso",
    en: "mabosstiff",
    fr: "dogrino",
    ja: "マフィティフ",
    zh: "獒教父",
  },
  number: 943,
  pokemonTypes: ["dark", ""],
},{
  names: {
    de: "sproxi",
    en: "shroodle",
    fr: "gribouraigne",
    ja: "シルシュルー",
    zh: "滋汁鼹",
  },
  number: 944,
  pokemonTypes: ["poison", "normal"],
},{
  names: {
    de: "affiti",
    en: "grafaiai",
    fr: "tag-tag",
    ja: "タギングル",
    zh: "涂标客",
  },
  number: 945,
  pokemonTypes: ["poison", "normal"],
},{
  names: {
    de: "weherba",
    en: "bramblin",
    fr: "virovent",
    ja: "アノクサ",
    zh: "纳噬草",
  },
  number: 946,
  pokemonTypes: ["grass", "ghost"],
},{
  names: {
    de: "horrerba",
    en: "brambleghast",
    fr: "virevorreur",
    ja: "アノホラグサ",
    zh: "怖纳噬草",
  },
  number: 947,
  pokemonTypes: ["grass", "ghost"],
},{
  names: {
    de: "tentagra",
    en: "toedscool",
    fr: "terracool",
    ja: "ノノクラゲ",
    zh: "原野水母",
  },
  number: 948,
  pokemonTypes: ["ground", "grass"],
},{
  names: {
    de: "tenterra",
    en: "toedscruel",
    fr: "terracruel",
    ja: "リククラゲ",
    zh: "陆地水母",
  },
  number: 949,
  pokemonTypes: ["ground", "grass"],
},{
  names: {
    de: "klibbe",
    en: "klawf",
    fr: "craparoi",
    ja: "ガケガニ",
    zh: "毛崖蟹",
  },
  number: 950,
  pokemonTypes: ["rock", ""],
},{
  names: {
    de: "chilingel",
    en: "capsakid",
    fr: "pimito",
    ja: "カプサイジ",
    zh: "热辣娃",
  },
  number: 951,
  pokemonTypes: ["grass", ""],
},{
  names: {
    de: "halupenjo",
    en: "scovillain",
    fr: "scovilain",
    ja: "スコヴィラン",
    zh: "狠辣椒",
  },
  number: 952,
  pokemonTypes: ["grass", "fire"],
},{
  names: {
    de: "relluk",
    en: "rellor",
    fr: "léboulérou",
    ja: "シガロコ",
    zh: "虫滚泥",
  },
  number: 953,
  pokemonTypes: ["bug", ""],
},{
  names: {
    de: "skarabaks",
    en: "rabsca",
    fr: "bérasca",
    ja: "ベラカス",
    zh: "虫甲圣",
  },
  number: 954,
  pokemonTypes: ["bug", "psychic"],
},{
  names: {
    de: "flattutu",
    en: "flittle",
    fr: "flotillon",
    ja: "ヒラヒナ",
    zh: "飘飘雏",
  },
  number: 955,
  pokemonTypes: ["psychic", ""],
},{
  names: {
    de: "psiopatra",
    en: "espathra",
    fr: "cléopsytra",
    ja: "クエスパトラ",
    zh: "超能艳鸵",
  },
  number: 956,
  pokemonTypes: ["psychic", ""],
},{
  names: {
    de: "forgita",
    en: "tinkatink",
    fr: "forgerette",
    ja: "カヌチャン",
    zh: "小锻匠",
  },
  number: 957,
  pokemonTypes: ["fairy", "steel"],
},{
  names: {
    de: "tafforgita",
    en: "tinkatuff",
    fr: "forgella",
    ja: "ナカヌチャン",
    zh: "巧锻匠",
  },
  number: 958,
  pokemonTypes: ["fairy", "steel"],
},{
  names: {
    de: "granforgita",
    en: "tinkaton",
    fr: "forgelina",
    ja: "デカヌチャン",
    zh: "巨锻匠",
  },
  number: 959,
  pokemonTypes: ["fairy", "steel"],
},{
  names: {
    de: "schligda",
    en: "wiglett",
    fr: "taupikeau",
    ja: "ウミディグダ",
    zh: "海地鼠",
  },
  number: 960,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "schligdri",
    en: "wugtrio",
    fr: "triopikeau",
    ja: "ウミトリオ",
    zh: "三海地鼠",
  },
  number: 961,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "adebom",
    en: "bombirdier",
    fr: "lestombaile",
    ja: "オトシドリ",
    zh: "下石鸟",
  },
  number: 962,
  pokemonTypes: ["flying", "dark"],
},{
  names: {
    de: "normifin",
    en: "finizen",
    fr: "dofin",
    ja: "ナミイルカ",
    zh: "波普海豚",
  },
  number: 963,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "delfinator",
    en: "palafin",
    fr: "superdofin",
    ja: "イルカマン",
    zh: "海豚侠",
  },
  number: 964,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "knattox",
    en: "varoom",
    fr: "vrombi",
    ja: "ブロロン",
    zh: "噗隆隆",
  },
  number: 965,
  pokemonTypes: ["steel", "poison"],
},{
  names: {
    de: "knattatox",
    en: "revavroom",
    fr: "vrombotor",
    ja: "ブロロローム",
    zh: "普隆隆姆",
  },
  number: 966,
  pokemonTypes: ["steel", "poison"],
},{
  names: {
    de: "mopex",
    en: "cyclizar",
    fr: "motorizard",
    ja: "モトトカゲ",
    zh: "摩托蜥",
  },
  number: 967,
  pokemonTypes: ["dragon", "normal"],
},{
  names: {
    de: "schlurm",
    en: "orthworm",
    fr: "ferdeter",
    ja: "ミミズズ",
    zh: "拖拖蚓",
  },
  number: 968,
  pokemonTypes: ["steel", ""],
},{
  names: {
    de: "lumispross",
    en: "glimmet",
    fr: "germéclat",
    ja: "キラーメ",
    zh: "晶光芽",
  },
  number: 969,
  pokemonTypes: ["rock", "poison"],
},{
  names: {
    de: "lumiflora",
    en: "glimmora",
    fr: "floréclat",
    ja: "キラフロル",
    zh: "晶光花",
  },
  number: 970,
  pokemonTypes: ["rock", "poison"],
},{
  names: {
    de: "gruff",
    en: "greavard",
    fr: "toutombe",
    ja: "ボチ",
    zh: "墓仔狗",
  },
  number: 971,
  pokemonTypes: ["ghost", ""],
},{
  names: {
    de: "friedwuff",
    en: "houndstone",
    fr: "tomberro",
    ja: "ハカドッグ",
    zh: "墓扬犬",
  },
  number: 972,
  pokemonTypes: ["ghost", ""],
},{
  names: {
    de: "flaminkno",
    en: "flamigo",
    fr: "flamenroule",
    ja: "カラミンゴ",
    zh: "缠红鹤",
  },
  number: 973,
  pokemonTypes: ["flying", "fighting"],
},{
  names: {
    de: "flaniwal",
    en: "cetoddle",
    fr: "piétacé",
    ja: "アルクジラ",
    zh: "走鲸",
  },
  number: 974,
  pokemonTypes: ["ice", ""],
},{
  names: {
    de: "kolowal",
    en: "cetitan",
    fr: "balbalèze",
    ja: "ハルクジラ",
    zh: "浩大鲸",
  },
  number: 975,
  pokemonTypes: ["ice", ""],
},{
  names: {
    de: "agiluza",
    en: "veluza",
    fr: "délestin",
    ja: "ミガルーサ",
    zh: "轻身鳕",
  },
  number: 976,
  pokemonTypes: ["water", "psychic"],
},{
  names: {
    de: "heerashai",
    en: "dondozo",
    fr: "oyacata",
    ja: "ヘイラッシャ",
    zh: "吃吼霸",
  },
  number: 977,
  pokemonTypes: ["water", ""],
},{
  names: {
    de: "nigiragi",
    en: "tatsugiri",
    fr: "nigirigon",
    ja: "シャリタツ",
    zh: "米立龙",
  },
  number: 978,
  pokemonTypes: ["dragon", "water"],
},{
  names: {
    de: "epitaff",
    en: "annihilape",
    fr: "courrousinge",
    ja: "コノヨザル",
    zh: "弃世猴",
  },
  number: 979,
  pokemonTypes: ["fighting", "ghost"],
},{
  names: {
    de: "suelord",
    en: "clodsire",
    fr: "terraiste",
    ja: "ドオー",
    zh: "土王",
  },
  number: 980,
  pokemonTypes: ["poison", "ground"],
},{
  names: {
    de: "farigiraf",
    en: "farigiraf",
    fr: "farigiraf",
    ja: "リキキリン",
    zh: "奇麒麟",
  },
  number: 981,
  pokemonTypes: ["normal", "psychic"],
},{
  names: {
    de: "dummimisel",
    en: "dudunsparce",
    fr: "deusolourdo",
    ja: "ノココッチ",
    zh: "土龙节节",
  },
  number: 982,
  pokemonTypes: ["normal", ""],
},{
  names: {
    de: "gladimperio",
    en: "kingambit",
    fr: "scalpereur",
    ja: "ドドゲザン",
    zh: "仆刀将军",
  },
  number: 983,
  pokemonTypes: ["dark", "steel"],
},{
  names: {
    de: "riesenzahn",
    en: "great tusk",
    fr: "fort-ivoire",
    ja: "イダイナキバ",
    zh: "雄伟牙",
  },
  number: 984,
  pokemonTypes: ["ground", "fighting"],
},{
  names: {
    de: "brüllschweif",
    en: "scream tail",
    fr: "hurle-queue",
    ja: "サケブシッポ",
    zh: "吼叫尾",
  },
  number: 985,
  pokemonTypes: ["fairy", "psychic"],
},{
  names: {
    de: "wutpilz",
    en: "brute bonnet",
    fr: "fongus-furie",
    ja: "アラブルタケ",
    zh: "猛恶菇",
  },
  number: 986,
  pokemonTypes: ["grass", "dark"],
},{
  names: {
    de: "flatterhaar",
    en: "flutter mane",
    fr: "flotte-mèche",
    ja: "ハバタクカミ",
    zh: "振翼发",
  },
  number: 987,
  pokemonTypes: ["ghost", "fairy"],
},{
  names: {
    de: "kriechflügel",
    en: "slither wing",
    fr: "rampe-ailes",
    ja: "チヲハウハネ",
    zh: "爬地翅",
  },
  number: 988,
  pokemonTypes: ["bug", "fighting"],
},{
  names: {
    de: "sandfell",
    en: "sandy shocks",
    fr: "pelage-sablé",
    ja: "スナノケガワ",
    zh: "沙铁皮",
  },
  number: 989,
  pokemonTypes: ["electric", "ground"],
},{
  names: {
    de: "eisenrad",
    en: "iron treads",
    fr: "roue-de-fer",
    ja: "テツノワダチ",
    zh: "铁辙迹",
  },
  number: 990,
  pokemonTypes: ["steel", "ground"],
},{
  names: {
    de: "eisenbündel",
    en: "iron bundle",
    fr: "hotte-de-fer",
    ja: "テツノツツミ",
    zh: "铁包袱",
  },
  number: 991,
  pokemonTypes: ["ice", "water"],
},{
  names: {
    de: "eisenhand",
    en: "iron hands",
    fr: "paume-de-fer",
    ja: "テツノカイナ",
    zh: "铁臂膀",
  },
  number: 992,
  pokemonTypes: ["fighting", "electric"],
},{
  names: {
    de: "eisenhals",
    en: "iron jugulis",
    fr: "têtes-de-fer",
    ja: "テツノコウベ",
    zh: "铁脖颈",
  },
  number: 993,
  pokemonTypes: ["dark", "flying"],
},{
  names: {
    de: "eisenfalter",
    en: "iron moth",
    fr: "mite-de-fer",
    ja: "テツノドクガ",
    zh: "铁毒蛾",
  },
  number: 994,
  pokemonTypes: ["fire", "poison"],
},{
  names: {
    de: "eisendorn",
    en: "iron thorns",
    fr: "épine-de-fer",
    ja: "テツノイバラ",
    zh: "铁荆棘",
  },
  number: 995,
  pokemonTypes: ["rock", "electric"],
},{
  names: {
    de: "frospino",
    en: "frigibax",
    fr: "frigodo",
    ja: "セビエ",
    zh: "凉脊龙",
  },
  number: 996,
  pokemonTypes: ["dragon", "ice"],
},{
  names: {
    de: "cryospino",
    en: "arctibax",
    fr: "cryodo",
    ja: "セゴール",
    zh: "冻脊龙",
  },
  number: 997,
  pokemonTypes: ["dragon", "ice"],
},{
  names: {
    de: "espinodon",
    en: "baxcalibur",
    fr: "glaivodo",
    ja: "セグレイブ",
    zh: "戟脊龙",
  },
  number: 998,
  pokemonTypes: ["dragon", "ice"],
},{
  names: {
    de: "gierspenst",
    en: "gimmighoul",
    fr: "mordudor",
    ja: "コレクレー",
    zh: "索财灵",
  },
  number: 999,
  pokemonTypes: ["ghost", ""],
},{
  names: {
    de: "monetigo",
    en: "gholdengo",
    fr: "gromago",
    ja: "サーフゴー",
    zh: "赛富豪",
  },
  number: 1000,
  pokemonTypes: ["steel", "ghost"],
},{
  names: {
    de: "chongjian",
    en: "wo-chien",
    fr: "chongjian",
    ja: "チオンジェン",
    zh: "古简蜗",
  },
  number: 1001,
  pokemonTypes: ["dark", "grass"],
},{
  names: {
    de: "baojian",
    en: "chien-pao",
    fr: "baojian",
    ja: "パオジアン",
    zh: "古剑豹",
  },
  number: 1002,
  pokemonTypes: ["dark", "ice"],
},{
  names: {
    de: "dinglu",
    en: "ting-lu",
    fr: "dinglu",
    ja: "ディンルー",
    zh: "古鼎鹿",
  },
  number: 1003,
  pokemonTypes: ["dark", "ground"],
},{
  names: {
    de: "yuyu",
    en: "chi-yu",
    fr: "yuyu",
    ja: "イーユイ",
    zh: "古玉鱼",
  },
  number: 1004,
  pokemonTypes: ["dark", "fire"],
},{
  names: {
    de: "donnersichel",
    en: "roaring moon",
    fr: "rugit-lune",
    ja: "トドロクツキ",
    zh: "轰鸣月",
  },
  number: 1005,
  pokemonTypes: ["dragon", "dark"],
},{
  names: {
    de: "eisenkrieger",
    en: "iron valiant",
    fr: "garde-de-fer",
    ja: "テツノブジン",
    zh: "铁武者",
  },
  number: 1006,
  pokemonTypes: ["fairy", "fighting"],
},{
  names: {
    de: "koraidon",
    en: "koraidon",
    fr: "koraidon",
    ja: "コライドン",
    zh: "故勒顿",
  },
  number: 1007,
  pokemonTypes: ["fighting", "dragon"],
},{
  names: {
    de: "miraidon",
    en: "miraidon",
    fr: "miraidon",
    ja: "ミライドン",
    zh: "密勒顿",
  },
  number: 1008,
  pokemonTypes: ["electric", "dragon"],
},{
  names: {
    de: "windewoge",
    en: "walking wake",
    fr: "serpente-eau",
    ja: "ウネルミナモ",
    zh: "波荡水",
  },
  number: 1009,
  pokemonTypes: ["water", "dragon"],
},{
  names: {
    de: "eisenblatt",
    en: "iron leaves",
    fr: "vert-de-fer",
    ja: "テツノイサハ",
    zh: "铁斑叶",
  },
  number: 1010,
  pokemonTypes: ["grass", "psychic"],
},{
  names: {
    de: "sirapfel",
    en: "dipplin",
    fr: "pomdramour",
    ja: "カミッチュ",
    zh: "裹蜜虫",
  },
  number: 1011,
  pokemonTypes: ["grass", "dragon"],
},{
  names: {
    de: "mortcha",
    en: "poltchageist",
    fr: "poltchageist",
    ja: "チャデス",
    zh: "斯魔茶",
  },
  number: 1012,
  pokemonTypes: ["grass", "ghost"],

},{
  names: {
    de: "fatalitcha",
    en: "sinistcha",
    fr: "théffroyable",
    ja: "ヤバソチャ",
    zh: "来悲粗茶",
  },
  number: 1013,
  pokemonTypes: ["grass", "ghost"],
},{
  names: {
    de: "boninu",
    en: "okidogi",
    fr: "félicanis",
    ja: "イイネイヌ",
    zh: "够赞狗",
  },
  number: 1014,
  pokemonTypes: ["poison", "fighting"],
},{
  names: {
    de: "benesaru",
    en: "munkidori",
    fr: "fortusimia",
    ja: "マシマシラ",
    zh: "愿增猿",
  },
  number: 1015,
  pokemonTypes: ["poison", "psychic"],
},{
  names: {
    de: "beatori",
    en: "fezandipiti",
    fr: "favianos",
    ja: "キチキギス",
    zh: "吉雉鸡",
  },
  number: 1016,
  pokemonTypes: ["poison", "fairy"],
},{
  names: {
    de: "ogerpon",
    en: "ogerpon",
    fr: "ogerpon",
    ja: "オーガポン",
    zh: "厄诡椪",
  },
  number: 1017,
  pokemonTypes: ["grass", ""],

}] as const;

export type PokemonNumber = typeof POKEMON_NAMES[number]['number'];
export type NamesForPokemon = typeof POKEMON_NAMES[number]['names'];
export type PokemonTypes = typeof POKEMON_NAMES[number]['pokemonTypes'];
