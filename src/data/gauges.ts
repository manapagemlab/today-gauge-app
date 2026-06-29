import type { Gauge } from "@/types/gauge";

export const gauges: Gauge[] = [
  {
    id: "tired",
    label: "からだ充電ゲージ",
    shortLabel: "からだ充電",
    questions: [
      "学校やお出かけのあと、体が重い感じがする？",
      "いつもより座りこんだり、横になりたくなったりしてる？",
      "声をかけても、返事や動き出しに時間がかかる？"
    ],
    color: "#5B8DEF",
    lightColor: "#EAF1FF",
    icon: "Moon",
    strategies: ["5分だけ休けいする", "やることを1つだけにして、終わったら小さく休む"]
  },
  {
    id: "hungry",
    label: "おなかゲージ",
    shortLabel: "おなか",
    questions: [
      "おなかが空いて、イライラしやすくなってる？",
      "甘いものや飲みものがほしい感じがある？",
      "ひとくち食べたら、少し落ち着きそう？"
    ],
    color: "#F6C453",
    lightColor: "#FFF7DD",
    icon: "Apple",
    strategies: ["ひとくち食べるか、飲みものをとる", "食べやすいものを2つ見せて、選んでもらう"]
  },
  {
    id: "worry",
    label: "こころザワザワゲージ",
    shortLabel: "こころザワザワ",
    questions: [
      "これからのことや今日あったことで、心がざわざわしてる？",
      "「どうなるの？」が気になって、何回も聞きたくなる？",
      "安心できる説明や見通しがほしい感じがある？"
    ],
    color: "#63B68C",
    lightColor: "#EAF8F1",
    icon: "Cloud",
    strategies: ["何が心配か、二択で聞いてみる", "次にすることをメモや絵で見えるようにする"]
  },
  {
    id: "schedule",
    label: "予定びっくりゲージ",
    shortLabel: "予定びっくり",
    questions: [
      "予定が変わったり、急に言われたりして、イヤな感じが残ってる？",
      "次に何をするか分からなくて、止まってしまう感じがある？",
      "先に順番を見せてもらうと、少しラクになりそう？"
    ],
    color: "#F07A6A",
    lightColor: "#FFF0EE",
    icon: "Calendar",
    strategies: ["次の予定を見える形で伝える", "変わった予定は、先に「ここだけ変わったよ」と短く伝える"]
  },
  {
    id: "stimulus",
    label: "にぎやか刺激ゲージ",
    shortLabel: "にぎやか刺激",
    questions: [
      "音、光、人の多さ、においで、頭や体がつかれてる？",
      "静かな場所や暗めの場所に行きたい感じがある？",
      "服のタグ、におい、ざわざわした音が気になってる？"
    ],
    color: "#F59E42",
    lightColor: "#FFF3E5",
    icon: "Volume2",
    strategies: ["静かな場所に移動する", "音・光・人の多さを1つだけ減らしてみる"]
  },
  {
    id: "words",
    label: "ことば迷子ゲージ",
    shortLabel: "ことば迷子",
    questions: [
      "気持ちはあるのに、うまく言葉に出せない？",
      "話そうとすると、頭の中がいっぱいになる？",
      "指さし、メモ、二択なら伝えやすそう？"
    ],
    color: "#9B7AE5",
    lightColor: "#F2EDFF",
    icon: "MessageCircle",
    strategies: ["言葉ではなく、指さしや二択で選んでもらう", "話す前に、メモ・絵・チャットで出してもらう"]
  },
  {
    id: "switch",
    label: "きりかえゲージ",
    shortLabel: "きりかえ",
    questions: [
      "遊びや動画、好きなことをやめるのがむずかしかった？",
      "「あと少し」が分かると、終わりやすくなりそう？",
      "次のことを始める前に、気持ちの準備時間がほしい？"
    ],
    color: "#58C7D9",
    lightColor: "#E9FAFC",
    icon: "RefreshCcw",
    strategies: ["あと1回、またはタイマーを使う", "残り時間をバーや砂時計で見えるようにする"]
  },
  {
    id: "mistake",
    label: "できるかな不安ゲージ",
    shortLabel: "できるかな不安",
    questions: [
      "まちがえそう、うまくできなさそうで、やりたくない感じがある？",
      "はじめる前に「失敗したらどうしよう」が浮かぶ？",
      "小さい手順に分けると、少しやってみられそう？"
    ],
    color: "#EC6FA9",
    lightColor: "#FDEDF5",
    icon: "ShieldAlert",
    strategies: ["間違えても大丈夫と先に伝える", "手順を小さく分けて、最後に一緒に確認する"]
  }
];

export const gaugeQuestionItems = gauges.flatMap((gauge) =>
  gauge.questions.map((question, questionIndex) => ({
    id: `${gauge.id}-${questionIndex}`,
    gauge,
    question,
    questionIndex
  }))
);
