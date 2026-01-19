
import { Question } from './types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "新年的第一個早晨，你睜開眼最想看見什麼？",
    options: [
      { id: 'a', text: "窗外灑落的一道嶄新陽光", value: "light" },
      { id: 'b', text: "床邊一杯還在冒煙的熱咖啡", value: "warmth" },
      { id: 'c', text: "安靜如水的清晨薄霧", value: "mist" },
      { id: 'd', text: "一份充滿驚喜的旅行邀請", value: "adventure" }
    ]
  },
  {
    id: 2,
    text: "如果新年是一首曲子，它聽起來會是？",
    options: [
      { id: 'a', text: "振奮人心的鼓點與號角", value: "rhythm" },
      { id: 'b', text: "輕柔如羽毛的鋼琴獨奏", value: "piano" },
      { id: 'c', text: "森林裡自然的鳥鳴與溪水聲", value: "nature" },
      { id: 'd', text: "熱鬧街頭熙熙攘攘的人聲", value: "crowd" }
    ]
  },
  {
    id: 3,
    text: "你感覺現在的自己像哪種狀態？",
    options: [
      { id: 'a', text: "即將發射但還在微調座標的火箭", value: "aiming" },
      { id: 'b', text: "剛跑完長跑，正在調整呼吸的選手", value: "resting" },
      { id: 'c', text: "正在冬眠、等待春天甦醒的小動物", value: "waiting" },
      { id: 'd', text: "急著跳進未知湖水裡的冒險者", value: "jumping" }
    ]
  },
  {
    id: 4,
    text: "面對堆積如山的工作或瑣事，你內心的第一反應是？",
    options: [
      { id: 'a', text: "全部掃空，我想從零開始", value: "reset" },
      { id: 'b', text: "先放著吧，我現在只想消失一小時", value: "escape" },
      { id: 'c', text: "一件件來，我需要更有節奏感", value: "order" },
      { id: 'd', text: "找人一起分享這個重擔", value: "share" }
    ]
  },
  {
    id: 5,
    text: "如果此刻空氣中有香味，你最希望聞到？",
    options: [
      { id: 'a', text: "雨後泥土與青草的清香", value: "earth" },
      { id: 'b', text: "曬過太陽的柔軟亞麻布味", value: "cotton" },
      { id: 'c', text: "深邃神祕的檀香與焚香", value: "wood" },
      { id: 'd', text: "充滿活力的佛手柑與柑橘", value: "citrus" }
    ]
  },
  {
    id: 6,
    text: "當你回顧去年，最讓你感到心累的是什麼？",
    options: [
      { id: 'a', text: "總是在重複同樣的錯誤", value: "loops" },
      { id: 'b', text: "人際關係中的過度社交", value: "social_fatigue" },
      { id: 'c', text: "對未來充滿不確定性的焦慮", value: "anxiety" },
      { id: 'd', text: "身體跟不上大腦的快節奏", value: "physical_fatigue" }
    ]
  },
  {
    id: 7,
    text: "想像一個理想的週末下午，你會在哪裡？",
    options: [
      { id: 'a', text: "沒去過的異國街道探索", value: "explore" },
      { id: 'b', text: "窩在有陽光的沙發看書", value: "sofa" },
      { id: 'c', text: "在山林溪流邊露營聽蟬鳴", value: "camping" },
      { id: 'd', text: "與老友在吵鬧的小館大笑", value: "laughter" }
    ]
  },
  {
    id: 8,
    text: "你覺得哪種色彩最能代表你現在的靈魂顏色？",
    options: [
      { id: 'a', text: "燃燒中的琥珀橘", value: "amber" },
      { id: 'b', text: "深邃平靜的海軍藍", value: "navy" },
      { id: 'c', text: "充滿希望的嫩芽綠", value: "sprout" },
      { id: 'd', text: "輕盈透明的雲朵白", value: "cloud" }
    ]
  },
  {
    id: 9,
    text: "如果可以獲得一種超能力，你最想要？",
    options: [
      { id: 'a', text: "時間倒流，重寫遺憾", value: "rewind" },
      { id: 'b', text: "瞬間移動，逃離當下", value: "teleport" },
      { id: 'c', text: "看穿人心，不再誤解", value: "vision" },
      { id: 'd', text: "無限體力，衝刺目標", value: "stamina" }
    ]
  },
  {
    id: 10,
    text: "最後，你覺得新年最完美的收尾動作是？",
    options: [
      { id: 'a', text: "換上全新的香氛床單沉沉睡去", value: "sleep" },
      { id: 'b', text: "在筆記本寫下充滿野心的願望", value: "write" },
      { id: 'c', text: "深深吸一口氣，感受空氣的重量", value: "breathe" },
      { id: 'd', text: "舉杯慶祝自己又過了一關", value: "celebrate" }
    ]
  }
];
