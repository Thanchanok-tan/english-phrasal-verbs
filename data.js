/**
 * EngMastery - Comprehensive Phrasal Verbs Data Structure
 * Contains full dataset for 12 primary base verbs with phonetics, Thai readings, translations, and example sentences.
 */

const PHRASAL_VERBS_DATA = {
  run: {
    baseVerb: "Run",
    thaiMeaning: "วิ่ง / ดำเนินการ / ประสบ",
    icon: "🏃‍♂️",
    description: "Phrasal verbs using 'Run' often relate to movement, encounters, or exhausting supplies.",
    items: [
      {
        id: "run-into",
        verb: "run into",
        phonetic: "/rʌn ˈɪn.tuː/",
        thaiPhonetic: "รัน อินทู",
        thaiTranslation: "บังเอิญเจอ / พบโดยไม่ตั้งใจ",
        icon: "🤝",
        quickDef: "บังเอิญพบ",
        exampleEn: "I ran into my old teacher at the supermarket.",
        exampleTh: "ฉันบังเอิญเจอคุณครูเก่าที่ซูเปอร์มาร์เก็ต"
      },
      {
        id: "run-out-of",
        verb: "run out of",
        phonetic: "/rʌn aʊt ɒv/",
        thaiPhonetic: "รัน เอาต์ ออฟ",
        thaiTranslation: "หมด / ไม่เหลือ",
        icon: "🪹",
        quickDef: "สิ่งของหมดลง",
        exampleEn: "I’m going to the store, but I might run out of milk.",
        exampleTh: "ฉันจะไปที่ร้านค้า แต่อาจจะนมหมด"
      },
      {
        id: "run-through",
        verb: "run through",
        phonetic: "/rʌn θruː/",
        thaiPhonetic: "รัน ธรู",
        thaiTranslation: "ซ้อม / ทบทวนอย่างรวดเร็ว",
        icon: "📑",
        quickDef: "ทบทวนคร่าวๆ",
        exampleEn: "Let’s run through the plan one more time.",
        exampleTh: "เรามาทบทวนแผนกันอีกครั้งนะ"
      },
      {
        id: "run-over",
        verb: "run over",
        phonetic: "/rʌn ˈoʊ.vɚ/",
        thaiPhonetic: "รัน โอเวอร์",
        thaiTranslation: "ชนด้วยรถ / อธิบายอีกครั้ง",
        icon: "🚗",
        quickDef: "ชนด้วยรถ / ตรวจซ้ำ",
        exampleEn: "He accidentally ran over a traffic cone.",
        exampleTh: "เขาเผลอขับรถชนกรวยจราจร"
      },
      {
        id: "run-away",
        verb: "run away",
        phonetic: "/rʌn əˈweɪ/",
        thaiPhonetic: "รัน อะเวย์",
        thaiTranslation: "หนี / วิ่งหนีไปอย่างกระทันหัน",
        icon: "💨",
        quickDef: "วิ่งหนีไป",
        exampleEn: "She ran away from home when she was young.",
        exampleTh: "เธอหนีออกจากบ้านตอนยังเด็ก"
      },
      {
        id: "run-after",
        verb: "run after",
        phonetic: "/rʌn ˈæf.tɚ/",
        thaiPhonetic: "รัน แอฟเตอร์",
        thaiTranslation: "ไล่ตาม / พยายามจับ",
        icon: "🐕",
        quickDef: "วิ่งไล่ตาม",
        exampleEn: "The dog ran after the ball.",
        exampleTh: "สุนัขวิ่งไล่ลูกบอล"
      },
      {
        id: "run-up",
        verb: "run up",
        phonetic: "/rʌn ʌp/",
        thaiPhonetic: "รัน อัป",
        thaiTranslation: "เพิ่มขึ้นอย่างรวดเร็ว / ทำให้เกิดค่าใช้จ่าย",
        icon: "📈",
        quickDef: "ค่าใช้จ่ายพุ่งสูง",
        exampleEn: "Our costs have run up too much this year.",
        exampleTh: "ค่าใช้จ่ายของเราพุ่งสูงขึ้นมากในปีนี้"
      },
      {
        id: "run-across",
        verb: "run across",
        phonetic: "/rʌn əˈkrɒs/",
        thaiPhonetic: "รัน อะครอส",
        thaiTranslation: "บังเอิญพบ / เจอโดยบังเอิญ",
        icon: "🔍",
        quickDef: "เจอโดยบังเอิญ",
        exampleEn: "I ran across some old photos while cleaning.",
        exampleTh: "ฉันบังเอิญเจอรุปเก่า ๆ ตอนกำลังทำความสะอาด"
      }
    ]
  },
  give: {
    baseVerb: "Give",
    thaiMeaning: "ให้ / มอบให้ / ยอม",
    icon: "🎁",
    description: "Phrasal verbs with 'Give' relate to surrendering, donating, or distributing items.",
    items: [
      {
        id: "give-up",
        verb: "give up",
        phonetic: "/ɡɪv ʌp/",
        thaiPhonetic: "กิฟว์ อัป",
        thaiTranslation: "ยอมแพ้ / เลิกพยายาม",
        icon: "🏳️",
        quickDef: "ยอมแพ้",
        exampleEn: "Don't give up on your goals.",
        exampleTh: "อย่ายอมแพ้ในเป้าหมายของคุณ"
      },
      {
        id: "give-in",
        verb: "give in",
        phonetic: "/ɡɪv ɪn/",
        thaiPhonetic: "กิฟว์ อิน",
        thaiTranslation: "ยอมจำนน / ยอมแพ้แก่ความกดดัน",
        icon: "🙌",
        quickDef: "ยอมจำนน",
        exampleEn: "She finally gave in and said yes.",
        exampleTh: "ในที่สุดเธอก็ยอมจำนนและตอบตกลง"
      },
      {
        id: "give-away",
        verb: "give away",
        phonetic: "/ɡɪv əˈweɪ/",
        thaiPhonetic: "กิฟว์ อะเวย์",
        thaiTranslation: "แจก / บริจาค / เปิดเผยความลับ",
        icon: "📦",
        quickDef: "แจกฟรี / บอกความลับ",
        exampleEn: "They gave away old clothes to the homeless shelter.",
        exampleTh: "พวกเขาบริจาคเสื้อผ้าเก่าให้กับสถานสงเคราะห์"
      },
      {
        id: "give-back",
        verb: "give back",
        phonetic: "/ɡɪv bæk/",
        thaiPhonetic: "กิฟว์ แบ็ก",
        thaiTranslation: "คืนสิ่งของ / ส่งคืน",
        icon: "🔄",
        quickDef: "ส่งคืนของ",
        exampleEn: "Please give back my pen after using it.",
        exampleTh: "กรุณาคืนปากกาให้ฉันหลังจากใช้งานเสร็จ"
      },
      {
        id: "give-out",
        verb: "give out",
        phonetic: "/ɡɪv aʊt/",
        thaiPhonetic: "กิฟว์ เอาต์",
        thaiTranslation: "แจกจ่าย / กระจายออก / หมดแรง",
        icon: "📄",
        quickDef: "แจกจ่ายใบงาน",
        exampleEn: "The teacher gave out the worksheets to students.",
        exampleTh: "คุณครูแจกใบงานให้กับนักเรียน"
      },
      {
        id: "give-off",
        verb: "give off",
        phonetic: "/ɡɪv ɒf/",
        thaiPhonetic: "กิฟว์ ออฟ",
        thaiTranslation: "ปล่อยออก / แผ่ออกมา (กลิ่น/แสง)",
        icon: "🌸",
        quickDef: "ส่งกลิ่น/ปล่อยแสง",
        exampleEn: "The flowers give off a sweet smell.",
        exampleTh: "ดอกไม้ส่งกลิ่นหอมหวานออกมา"
      },
      {
        id: "give-up-on",
        verb: "give up on",
        phonetic: "/ɡɪv ʌp ɒn/",
        thaiPhonetic: "กิฟว์ อัป ออน",
        thaiTranslation: "หมดหวังในใครบางคนหรือบางสิ่ง",
        icon: "💔",
        quickDef: "หมดหวังใน...",
        exampleEn: "Never give up on someone you love.",
        exampleTh: "อย่าหมดหวังในคนที่คุณรัก"
      }
    ]
  },
  make: {
    baseVerb: "Make",
    thaiMeaning: "ทำ / สร้าง / แต่งขึ้น",
    icon: "🛠️",
    description: "Phrasal verbs with 'Make' describe creation, understanding, compensation, or departure.",
    items: [
      {
        id: "make-up",
        verb: "make up",
        phonetic: "/meɪk ʌp/",
        thaiPhonetic: "เมก อัป",
        thaiTranslation: "แต่งเรื่อง / ประดิษฐ์เรื่อง / คืนดี",
        icon: "📖",
        quickDef: "แต่งเรื่องขึ้นมา",
        exampleEn: "He made up a funny story about his cat.",
        exampleTh: "เขาแต่งเรื่องตลก ๆ ขึ้นมาเกี่ยวกับแมวของเขา"
      },
      {
        id: "make-out",
        verb: "make out",
        phonetic: "/meɪk aʊt/",
        thaiPhonetic: "เมก เอาต์",
        thaiTranslation: "เข้าใจ / จับใจความได้ / มองเห็น",
        icon: "🧐",
        quickDef: "มองเห็น/เข้าใจชัด",
        exampleEn: "I can't make out what she's saying in the noise.",
        exampleTh: "ฉันจับใจความไม่ได้ว่าเธอกำลังพูดอะไรท่ามกลางเสียงดัง"
      },
      {
        id: "make-over",
        verb: "make over",
        phonetic: "/meɪk ˈoʊ.vɚ/",
        thaiPhonetic: "เมก โอเวอร์",
        thaiTranslation: "เปลี่ยนแปลง / ปรับปรุงภาพลักษณ์",
        icon: "✨",
        quickDef: "ปรับปรุงโฉมใหม่",
        exampleEn: "She made over her room last weekend.",
        exampleTh: "เธอเปลี่ยนแปลงห้องของเธอเมื่อสุดสัปดาห์ที่แล้ว"
      },
      {
        id: "make-up-for",
        verb: "make up for",
        phonetic: "/meɪk ʌp fɔːr/",
        thaiPhonetic: "เมก อัป ฟอร์",
        thaiTranslation: "ชดเชย / แก้ไขความผิด",
        icon: "🍰",
        quickDef: "ชดเชยความผิด",
        exampleEn: "I was late, so I baked a cake to make up for it.",
        exampleTh: "ฉันมาสาย เลยอบเค้กเพื่อชดเชยความผิด"
      },
      {
        id: "make-off",
        verb: "make off",
        phonetic: "/meɪk ɒf/",
        thaiPhonetic: "เมก ออฟ",
        thaiTranslation: "หนีไป / ออกไปอย่างรวดเร็ว",
        icon: "🥷",
        quickDef: "หลบหนีไปอย่างไว",
        exampleEn: "The thief made off before the police arrived.",
        exampleTh: "โจรรอบหนีไปก่อนที่ตำรวจจะมาถึง"
      },
      {
        id: "make-for",
        verb: "make for",
        phonetic: "/meɪk fɔːr/",
        thaiPhonetic: "เมก ฟอร์",
        thaiTranslation: "มุ่งหน้าไปทาง / ส่งผลให้เกิด",
        icon: "🏃‍♀️",
        quickDef: "มุ่งหน้าไปยัง...",
        exampleEn: "We made for the exit when it started to rain.",
        exampleTh: "เรารีบมุ่งหน้าไปที่ทางออกเมื่อฝนเริ่มตก"
      },
      {
        id: "make-up-your-mind",
        verb: "make up your mind",
        phonetic: "/meɪk ʌp jɔːr maɪnd/",
        thaiPhonetic: "เมก อัป ยัวร์ ไมน์ด",
        thaiTranslation: "ตัดสินใจ / หาข้อสรุปได้",
        icon: "🤔",
        quickDef: "ตัดสินใจให้ได้",
        exampleEn: "Please make up your mind and tell me now.",
        exampleTh: "ช่วยตัดสินใจให้ได้และบอกฉันตอนนี้เลย"
      }
    ]
  },
  look: {
    baseVerb: "Look",
    thaiMeaning: "มอง / ค้นหา / เฝ้าดู",
    icon: "👀",
    description: "Phrasal verbs with 'Look' involve perception, investigation, care, or anticipation.",
    items: [
      {
        id: "look-for",
        verb: "look for",
        phonetic: "/lʊk fɔːr/",
        thaiPhonetic: "ลุก ฟอร์",
        thaiTranslation: "ค้นหา / มองหา",
        icon: "🔑",
        quickDef: "ค้นหาสิ่งของ",
        exampleEn: "I'm looking for my keys. Have you seen them?",
        exampleTh: "ฉันกำลังมองหากุญแจอยู่ คุณเห็นมันไหม?"
      },
      {
        id: "look-after",
        verb: "look after",
        phonetic: "/lʊk ˈæf.tɚ/",
        thaiPhonetic: "ลุก แอฟเตอร์",
        thaiTranslation: "ดูแล / เอาใจใส่",
        icon: "👶",
        quickDef: "ดูแลคอยเอาใจใส่",
        exampleEn: "She looks after her little brother every day.",
        exampleTh: "เธอดูแลน้องชายตัวน้อยของเธอทุกวัน"
      },
      {
        id: "look-forward-to",
        verb: "look forward to",
        phonetic: "/lʊk ˈfɔːr.wɚd tuː/",
        thaiPhonetic: "ลุก ฟอร์เวิร์ด ทู",
        thaiTranslation: "ตั้งตาตั้งรอ / รู้สึกตื่นเต้น",
        icon: "🗓️",
        quickDef: "ตั้งตารอคอย",
        exampleEn: "I really look forward to the weekend.",
        exampleTh: "ฉันตั้งตารอสุด ๆ กับวันหยุดสุดสัปดาห์"
      },
      {
        id: "look-into",
        verb: "look into",
        phonetic: "/lʊk ˈɪn.tuː/",
        thaiPhonetic: "ลุก อินทู",
        thaiTranslation: "ตรวจสอบ / สืบค้น",
        icon: "🕵️‍♂️",
        quickDef: "สืบสวน/ตรวจสอบ",
        exampleEn: "The police will look into the problem immediately.",
        exampleTh: "ตำรวจจะตรวจสอบปัญหานี้อย่างละเอียดทันที"
      },
      {
        id: "look-out",
        verb: "look out",
        phonetic: "/lʊk aʊt/",
        thaiPhonetic: "ลุก เอาต์",
        thaiTranslation: "ระวัง / คอยระวังอันตราย",
        icon: "⚠️",
        quickDef: "เตือนให้ระวัง",
        exampleEn: "Look out! There's a car coming.",
        exampleTh: "ระวัง! มีรถกำลังมา"
      },
      {
        id: "look-through",
        verb: "look through",
        phonetic: "/lʊk θruː/",
        thaiPhonetic: "ลุก ธรู",
        thaiTranslation: "ตรวจดูอย่างรวดเร็ว / อ่านผ่านๆ",
        icon: "📑",
        quickDef: "อ่านผ่านตาอย่างไว",
        exampleEn: "Let's look through these papers before the meeting.",
        exampleTh: "เรามาตรวจดูเอกสารเหล่านี้ก่อนประชุมเถอะ"
      },
      {
        id: "look-up",
        verb: "look up",
        phonetic: "/lʊk ʌp/",
        thaiPhonetic: "ลุก อัป",
        thaiTranslation: "ค้นหาข้อมูล (ในพจนานุกรม/อินเทอร์เน็ต)",
        icon: "📖",
        quickDef: "ค้นคำในดิคฯ",
        exampleEn: "I need to look up this word in the dictionary.",
        exampleTh: "ฉันต้องค้นหาคำนี้ในพจนานุกรม"
      }
    ]
  },
  take: {
    baseVerb: "Take",
    thaiMeaning: "นำไป / หยิบ / รับเอา",
    icon: "🤲",
    description: "Phrasal verbs with 'Take' refer to adoption, departure, removal, or control.",
    items: [
      {
        id: "take-off",
        verb: "take off",
        phonetic: "/teɪk ɒf/",
        thaiPhonetic: "เทก ออฟ",
        thaiTranslation: "ถอดออก / (เครื่องบิน) ทะยานขึ้น",
        icon: "✈️",
        quickDef: "ถอดเสื้อผ้า/บินขึ้น",
        exampleEn: "Please take off your shoes inside.",
        exampleTh: "กรุณาถอดรองเท้าออกเมื่ออยู่ข้างในค่ะ"
      },
      {
        id: "take-up",
        verb: "take up",
        phonetic: "/teɪk ʌp/",
        thaiPhonetic: "เทก อัป",
        thaiTranslation: "เริ่มงานอดิเรกหรือกิจกรรมใหม่",
        icon: "🎨",
        quickDef: "เริ่มเล่นงานอดิเรก",
        exampleEn: "She took up painting last month.",
        exampleTh: "เธอเริ่มวาดภาพเมื่อเดือนที่แล้ว"
      },
      {
        id: "take-over",
        verb: "take over",
        phonetic: "/teɪk ˈoʊ.vɚ/",
        thaiPhonetic: "เทก โอเวอร์",
        thaiTranslation: "เข้าควบคุม / ครอบครองกิจการ",
        icon: "🏢",
        quickDef: "เข้าครอบครองดูแล",
        exampleEn: "A large company took over the business.",
        exampleTh: "บริษัทใหญ่เข้าครอบครองกิจการ"
      },
      {
        id: "take-back",
        verb: "take back",
        phonetic: "/teɪk bæk/",
        thaiPhonetic: "เทก แบ็ก",
        thaiTranslation: "นำกลับคืน / ถอนคำพูด",
        icon: "🗣️",
        quickDef: "ถอนคำพูดคืน",
        exampleEn: "I took back what I said to him.",
        exampleTh: "ฉันถอนคำพูดที่พูดกับเขาไป"
      },
      {
        id: "take-on",
        verb: "take on",
        phonetic: "/teɪk ɒn/",
        thaiPhonetic: "เทก ออน",
        thaiTranslation: "รับงานหรือความรับผิดชอบใหม่",
        icon: "📋",
        quickDef: "รับงาน/ความรับผิดชอบ",
        exampleEn: "He took on a new project at work.",
        exampleTh: "เขารับผิดชอบโปรเจกต์ใหม่ที่ทำงาน"
      },
      {
        id: "take-in",
        verb: "take in",
        phonetic: "/teɪk ɪn/",
        thaiPhonetic: "เทก อิน",
        thaiTranslation: "เข้าใจ / รับเข้าไว้ / หลอกลวง",
        icon: "🧠",
        quickDef: "ทำความเข้าใจข่าวสาร",
        exampleEn: "It took me a while to take in the news.",
        exampleTh: "ฉันใช้เวลาสักพักกว่าจะเข้าใจข่าวนี้"
      }
    ]
  },
  come: {
    baseVerb: "Come",
    thaiMeaning: "มา / ปรากฏ / เกิดขึ้น",
    icon: "🚶‍♂️",
    description: "Phrasal verbs with 'Come' describe arrival, discovery, ideas, or emergence.",
    items: [
      {
        id: "come-on",
        verb: "come on",
        phonetic: "/kʌm ɒn/",
        thaiPhonetic: "คัม ออน",
        thaiTranslation: "เร็วเข้า / กระตุ้น / ให้กำลังใจ",
        icon: "⚡",
        quickDef: "เร็วเข้า! / เอาหน่า!",
        exampleEn: "Come on! We're going to be late.",
        exampleTh: "เร็วเข้า! เราจะสายแล้วนะ"
      },
      {
        id: "come-back",
        verb: "come back",
        phonetic: "/kʌm bæk/",
        thaiPhonetic: "คัม แบ็ก",
        thaiTranslation: "กลับมา / หวนกลับ",
        icon: "🏠",
        quickDef: "เดินทางกลับมา",
        exampleEn: "She will come back tomorrow evening.",
        exampleTh: "เธอจะกลับมาในเย็นวันพรุ่งนี้"
      },
      {
        id: "come-in",
        verb: "come in",
        phonetic: "/kʌm ɪn/",
        thaiPhonetic: "คัม อิน",
        thaiTranslation: "เข้ามาข้างใน",
        icon: "🚪",
        quickDef: "เข้ามาข้างใน",
        exampleEn: "Please come in and take a seat.",
        exampleTh: "เชิญเข้ามาและนั่งได้เลย"
      },
      {
        id: "come-across",
        verb: "come across",
        phonetic: "/kʌm əˈkrɒs/",
        thaiPhonetic: "คัม อะครอส",
        thaiTranslation: "บังเอิญเจอ / พบโดยไม่ได้ตั้งใจ",
        icon: "🙋‍♂️",
        quickDef: "พบเจอบังเอิญ",
        exampleEn: "I came across an old friend yesterday.",
        exampleTh: "เมื่อวานฉันบังเอิญเจอเพื่อนเก่า"
      },
      {
        id: "come-out",
        verb: "come out",
        phonetic: "/kʌm aʊt/",
        thaiPhonetic: "คัม เอาต์",
        thaiTranslation: "ปรากฏ / วางจำหน่าย / ถูกเปิดเผย",
        icon: "💡",
        quickDef: "ถูกเปิดเผย/วางขาย",
        exampleEn: "The truth finally came out.",
        exampleTh: "ความจริงในที่สุดก็ถูกเปิดเผย"
      },
      {
        id: "come-up-with",
        verb: "come up with",
        phonetic: "/kʌm ʌp wɪð/",
        thaiPhonetic: "คัม อัป วิธ",
        thaiTranslation: "คิดขึ้นมา / เสนอความคิดใหม่",
        icon: "💡",
        quickDef: "คิดไอเดียใหม่ได้",
        exampleEn: "He came up with a great solution to the problem.",
        exampleTh: "เขาคิดไอเดียดี ๆ ออกมาในการแก้ปัญหา"
      },
      {
        id: "come-through",
        verb: "come through",
        phonetic: "/kʌm θruː/",
        thaiPhonetic: "คัม ธรู",
        thaiTranslation: "ประสบความสำเร็จ / ช่วยเหลือในยามยาก",
        icon: "🏆",
        quickDef: "ผ่านพ้นช่วงยากลำบาก",
        exampleEn: "The team came through when it mattered most.",
        exampleTh: "ทีมผ่านพ้นช่วงเวลายากลำบากได้สำเร็จ"
      }
    ]
  },
  go: {
    baseVerb: "Go",
    thaiMeaning: "ไป / ดำเนินไป / ออกไป",
    icon: "🚀",
    description: "Phrasal verbs with 'Go' indicate continuation, alarms, review, or socializing.",
    items: [
      {
        id: "go-on",
        verb: "go on",
        phonetic: "/ɡoʊ ɒn/",
        thaiPhonetic: "โก ออน",
        thaiTranslation: "ดำเนินการต่อไป / ต่อไป",
        icon: "▶️",
        quickDef: "ดำเนินเรื่องต่อไป",
        exampleEn: "Please go on with your story.",
        exampleTh: "กรุณาดำเนินเรื่องต่อไป"
      },
      {
        id: "go-off",
        verb: "go off",
        phonetic: "/ɡoʊ ɒf/",
        thaiPhonetic: "โก ออฟ",
        thaiTranslation: "ระเบิด / สัญญาณเตือนส่งเสียงดัง",
        icon: "⏰",
        quickDef: "นาฬิกาเตือนดัง",
        exampleEn: "The alarm went off suddenly at 6 AM.",
        exampleTh: "สัญญาณเตือนดังขึ้นอย่างกระทันหันตอน 6 โมงเช้า"
      },
      {
        id: "go-over",
        verb: "go over",
        phonetic: "/ɡoʊ ˈoʊ.vɚ/",
        thaiPhonetic: "โก โอเวอร์",
        thaiTranslation: "ทบทวน / ตรวจสอบความถูกต้อง",
        icon: "🔎",
        quickDef: "ทบทวนรายละเอียด",
        exampleEn: "Let's go over this document again.",
        exampleTh: "มาทบทวนเอกสารนี้กันอีกครั้ง"
      },
      {
        id: "go-through",
        verb: "go through",
        phonetic: "/ɡoʊ θruː/",
        thaiPhonetic: "โก ธรู",
        thaiTranslation: "เผชิญกับประสบการณ์ที่ยากลำบาก",
        icon: "🌧️",
        quickDef: "ผ่านเรื่องยากลำบาก",
        exampleEn: "She went through a lot last year.",
        exampleTh: "เธอผ่านเรื่องยากลำบากมากมายเมื่อปีที่แล้ว"
      },
      {
        id: "go-out",
        verb: "go out",
        phonetic: "/ɡoʊ aʊt/",
        thaiPhonetic: "โก เอาต์",
        thaiTranslation: "ออกจากบ้านไปทำกิจกรรม / ไฟดับ",
        icon: "🍽️",
        quickDef: "ออกไปข้างนอก",
        exampleEn: "We went out for dinner together.",
        exampleTh: "พวกเราออกไปทานอาหารเย็นด้วยกัน"
      },
      {
        id: "go-back",
        verb: "go back",
        phonetic: "/ɡoʊ bæk/",
        thaiPhonetic: "โก แบ็ก",
        thaiTranslation: "กลับไป / ย้อนกลับสถานที่เดิม",
        icon: "🔙",
        quickDef: "กลับไปยังจุดเดิม",
        exampleEn: "He went back to his hometown.",
        exampleTh: "เขากลับไปยังบ้านเกิดของเขา"
      }
    ]
  },
  turn: {
    baseVerb: "Turn",
    thaiMeaning: "หมุน / เปลี่ยน / หมุนวน",
    icon: "🔄",
    description: "Phrasal verbs with 'Turn' control switches, volume, transformation, or attendance.",
    items: [
      {
        id: "turn-on",
        verb: "turn on",
        phonetic: "/tɜːn ɒn/",
        thaiPhonetic: "เทิร์น ออน",
        thaiTranslation: "เปิด (ไฟ/อุปกรณ์ไฟฟ้า)",
        icon: "💡",
        quickDef: "เปิดสวิตช์ไฟ",
        exampleEn: "Please turn on the light.",
        exampleTh: "กรุณาเปิดไฟด้วยครับ"
      },
      {
        id: "turn-off",
        verb: "turn off",
        phonetic: "/tɜːn ɒf/",
        thaiPhonetic: "เทิร์น ออฟ",
        thaiTranslation: "ปิด (ไฟ/อุปกรณ์ไฟฟ้า)",
        icon: "🔌",
        quickDef: "ปิดเครื่องใช้ไฟฟ้า",
        exampleEn: "Don't forget to turn off the TV.",
        exampleTh: "อย่าลืมปิดทีวีนะ"
      },
      {
        id: "turn-up",
        verb: "turn up",
        phonetic: "/tɜːn ʌp/",
        thaiPhonetic: "เทิร์น อัป",
        thaiTranslation: "เพิ่มเสียง / ปรากฏตัวอย่างคาดไม่ถึง",
        icon: "🔊",
        quickDef: "เร่งเสียง/ปรากฏตัว",
        exampleEn: "Can you turn up the music?",
        exampleTh: "คุณช่วยเร่งเสียงเพลงหน่อยได้ไหม?"
      },
      {
        id: "turn-down",
        verb: "turn down",
        phonetic: "/tɜːn daʊn/",
        thaiPhonetic: "เทิร์น ดาวน์",
        thaiTranslation: "เบาเสียง /ปฏิเสธข้อเสนอ",
        icon: "🔉",
        quickDef: "ลดเสียง/ปฏิเสธ",
        exampleEn: "He turned down the job offer.",
        exampleTh: "เขาปฏิเสธข้อเสนองานนั้น"
      },
      {
        id: "turn-out",
        verb: "turn out",
        phonetic: "/tɜːn aʊt/",
        thaiPhonetic: "เทิร์น เอาต์",
        thaiTranslation: "กลายเป็นว่า / ปรากฏผลลัพธ์ในที่สุด",
        icon: "🌟",
        quickDef: "ปรากฏผลลัพธ์ว่า",
        exampleEn: "The party turned out to be amazing.",
        exampleTh: "งานปาร์ตี้กลับกลายเป็นว่ายอดเยี่ยมมาก"
      },
      {
        id: "turn-into",
        verb: "turn into",
        phonetic: "/tɜːn ˈɪn.tuː/",
        thaiPhonetic: "เทิร์น อินทู",
        thaiTranslation: "เปลี่ยนสภาพเป็น / กลายเป็น",
        icon: "🦋",
        quickDef: "เปลี่ยนสภาพกลายเป็น",
        exampleEn: "Caterpillars turn into butterflies.",
        exampleTh: "หนอนผีเสื้อเปลี่ยนสภาพกลายเป็นผีเสื้อ"
      }
    ]
  },
  get: {
    baseVerb: "Get",
    thaiMeaning: "ได้รับ / ไปถึง / กลายเป็น",
    icon: "🎯",
    description: "Phrasal verbs with 'Get' involve transit, relationships, recovery, or escaping.",
    items: [
      {
        id: "get-up",
        verb: "get up",
        phonetic: "/ɡet ʌp/",
        thaiPhonetic: "เก็ต อัป",
        thaiTranslation: "ตื่นนอน / ลุกขึ้นจากที่นอน",
        icon: "🌅",
        quickDef: "ลุกขึ้นจากเตียง",
        exampleEn: "I get up early every morning.",
        exampleTh: "ฉันตื่นนอนแต่เช้าทุกวัน"
      },
      {
        id: "get-on",
        verb: "get on",
        phonetic: "/ɡet ɒn/",
        thaiPhonetic: "เก็ต ออน",
        thaiTranslation: "ขึ้นรถ/เรือ/เครื่องบิน / เข้ากันได้ดี",
        icon: "🚌",
        quickDef: "ขึ้นรถโดยสาร",
        exampleEn: "Get on the bus before it leaves.",
        exampleTh: "ขึ้นรถบัสก่อนที่มันจะออกนะ"
      },
      {
        id: "get-off",
        verb: "get off",
        phonetic: "/ɡet ɒf/",
        thaiPhonetic: "เก็ต ออฟ",
        thaiTranslation: "ลงจากยานพาหนะ / เลิกลานะ",
        icon: "🛑",
        quickDef: "ลงจากรถ",
        exampleEn: "We get off at the next station.",
        exampleTh: "พวกเราจะลงที่สถานีถัดไป"
      },
      {
        id: "get-along",
        verb: "get along",
        phonetic: "/ɡet əˈlɒŋ/",
        thaiPhonetic: "เก็ต อะลอง",
        thaiTranslation: "เข้ากันได้ดีกับผู้อื่น",
        icon: "🤝",
        quickDef: "เข้ากันได้ดี",
        exampleEn: "She gets along well with her colleagues.",
        exampleTh: "เธอเข้ากันได้ดีกับเพื่อนร่วมงาน"
      },
      {
        id: "get-over",
        verb: "get over",
        phonetic: "/ɡet ˈoʊ.vɚ/",
        thaiPhonetic: "เก็ต โอเวอร์",
        thaiTranslation: "ทำใจได้ / หายจากป่วย",
        icon: "❤️‍🩹",
        quickDef: "ทำใจได้/หายป่วย",
        exampleEn: "He finally got over his illness.",
        exampleTh: "ในที่สุดเขาก็หายป่วย"
      },
      {
        id: "get-away",
        verb: "get away",
        phonetic: "/ɡet əˈweɪ/",
        thaiPhonetic: "เก็ต อะเวย์",
        thaiTranslation: "หลบหนี / ออกไปเที่ยวพักผ่อน",
        icon: "🏖️",
        quickDef: "หลบไปพักผ่อน",
        exampleEn: "We need to get away for the weekend.",
        exampleTh: "พวกเราจำเป็นต้องหาเวลาไปเที่ยวพักผ่อนช่วงสุดสัปดาห์"
      }
    ]
  },
  break: {
    baseVerb: "Break",
    thaiMeaning: "แตก / หัก / บุกรุก",
    icon: "💔",
    description: "Phrasal verbs with 'Break' describe sudden disruptions, endings, or outbreaks.",
    items: [
      {
        id: "break-down",
        verb: "break down",
        phonetic: "/breɪk daʊn/",
        thaiPhonetic: "เบรก ดาวน์",
        thaiTranslation: "เครื่องเสีย / ร้องไห้เสียใจอย่างหนัก",
        icon: "🛠️",
        quickDef: "เครื่องยนต์พังเสีย",
        exampleEn: "Our car broke down on the highway.",
        exampleTh: "รถยนต์ของเราเสียอยู่บนทางหลวง"
      },
      {
        id: "break-out",
        verb: "break out",
        phonetic: "/breɪk aʊt/",
        thaiPhonetic: "เบรก เอาต์",
        thaiTranslation: "ปะทุขึ้น (สงคราม/ไฟ) / แหกคุกหนี",
        icon: "🔥",
        quickDef: "ไฟหรือโรคปะทุ",
        exampleEn: "A fire broke out in the building.",
        exampleTh: "เกิดเหตุไฟไหม้ปะทุขึ้นในอาคาร"
      },
      {
        id: "break-up",
        verb: "break up",
        phonetic: "/breɪk ʌp/",
        thaiPhonetic: "เบรก อัป",
        thaiTranslation: "เลิกรัก / ยุติความสัมพันธ์",
        icon: "💔",
        quickDef: "ยุติความสัมพันธ์",
        exampleEn: "They decided to break up after two years.",
        exampleTh: "พวกเขาตัดสินใจเลิกรักกันหลังจากคบกันมา 2 ปี"
      },
      {
        id: "break-into",
        verb: "break into",
        phonetic: "/breɪk ˈɪn.tuː/",
        thaiPhonetic: "เบรก อินทู",
        thaiTranslation: "งัดแงะ / บุกรุกเข้าไปในบ้าน",
        icon: "🚨",
        quickDef: "งัดบ้านบุกรุก",
        exampleEn: "Someone broke into the house last night.",
        exampleTh: "มีคนงัดบ้านเข้ามาเมื่อคืนนี้"
      },
      {
        id: "break-through",
        verb: "break through",
        phonetic: "/breɪk θruː/",
        thaiPhonetic: "เบรก ธรู",
        thaiTranslation: "ฝ่าอุปสรรค / ค้นพบครั้งยิ่งใหญ่",
        icon: "🚀",
        quickDef: "ฝ่าอุปสรรคสำเร็จ",
        exampleEn: "Scientists broke through in finding a cure.",
        exampleTh: "เหล่านักวิทยาศาสตร์ค้นพบความก้าวหน้าในการรักษา"
      }
    ]
  },
  keep: {
    baseVerb: "Keep",
    thaiMeaning: "เก็บ / รักษา / ดำเนินต่อไป",
    icon: "🛡️",
    description: "Phrasal verbs with 'Keep' signify persistence, distance, or preservation.",
    items: [
      {
        id: "keep-on",
        verb: "keep on",
        phonetic: "/kiːp ɒn/",
        thaiPhonetic: "คีป ออน",
        thaiTranslation: "ทำต่อไปอย่างต่อเนื่อง",
        icon: "🏃‍♂️",
        quickDef: "ทำอย่างต่อเนื่อง",
        exampleEn: "Keep on trying, and you will succeed.",
        exampleTh: "พยายามต่อไปเรื่อย ๆ แล้วคุณจะประสบความสำเร็จ"
      },
      {
        id: "keep-up",
        verb: "keep up",
        phonetic: "/kiːp ʌp/",
        thaiPhonetic: "คีป อัป",
        thaiTranslation: "ตามทัน / รักษาระดับไว้อย่างต่อเนื่อง",
        icon: "⚡",
        quickDef: "ก้าวทัน/รักษาระดับ",
        exampleEn: "You are doing great! Keep up the good work.",
        exampleTh: "คุณทำได้ดีมาก! รักษาระดับผลงานที่ดีนี้ไว้นะ"
      },
      {
        id: "keep-away",
        verb: "keep away",
        phonetic: "/kiːp əˈweɪ/",
        thaiPhonetic: "คีป อะเวย์",
        thaiTranslation: "ให้อยู่ห่าง ๆ / หลีกเลี่ยง",
        icon: "🚫",
        quickDef: "อยู่ให้ห่างไว้",
        exampleEn: "Keep away from the dangerous machinery.",
        exampleTh: "ให้อยู่ห่างจากเครื่องจักรที่อันตราย"
      },
      {
        id: "keep-off",
        verb: "keep off",
        phonetic: "/kiːp ɒf/",
        thaiPhonetic: "คีป ออฟ",
        thaiTranslation: "ห้ามเหยียบ / ห้ามแตะต้อง",
        icon: "🌱",
        quickDef: "ห้ามเหยียบย่ำ",
        exampleEn: "Please keep off the grass.",
        exampleTh: "กรุณาอย่าเดินเหยียบหญ้า"
      },
      {
        id: "keep-back",
        verb: "keep back",
        phonetic: "/kiːp bæk/",
        thaiPhonetic: "คีป แบ็ก",
        thaiTranslation: "กั้นไว้ / ปิดบังความรู้สึก",
        icon: "🛑",
        quickDef: "กั้นถอยหลังไว้",
        exampleEn: "The police told the crowd to keep back.",
        exampleTh: "ตำรวจบอกให้ฝูงชนถอยออกไปอยู่ห่าง ๆ"
      }
    ]
  },
  put: {
    baseVerb: "Put",
    thaiMeaning: "วาง / ใส่ / จัดวาง",
    icon: "📥",
    description: "Phrasal verbs with 'Put' describe wearing, postponing, putting out fires, or enduring.",
    items: [
      {
        id: "put-on",
        verb: "put on",
        phonetic: "/pʊt ɒn/",
        thaiPhonetic: "พุต ออน",
        thaiTranslation: "สวมใส่ (เสื้อผ้า/แว่นตา)",
        icon: "👕",
        quickDef: "สวมใส่เสื้อผ้า",
        exampleEn: "Put on your coat, it's freezing outside.",
        exampleTh: "สวมเสื้อโค้ตของคุณซะ ข้างนอกอากาศหนาวจัด"
      },
      {
        id: "put-off",
        verb: "put off",
        phonetic: "/pʊt ɒf/",
        thaiPhonetic: "พุต ออฟ",
        thaiTranslation: "เลื่อนเวลา / ผลัดวันประกันพรุ่ง",
        icon: "⏳",
        quickDef: "เลื่อนเวลานัดหมาย",
        exampleEn: "Don't put off until tomorrow what you can do today.",
        exampleTh: "อย่าผลัดวันประกันพรุ่งสิ่งที่ทำได้ในวันนี้ไปถึงวันพรุ่งนี้"
      },
      {
        id: "put-out",
        verb: "put out",
        phonetic: "/pʊt aʊt/",
        thaiPhonetic: "พุต เอาต์",
        thaiTranslation: "ดับไฟ / ดับบุหรี่",
        icon: "🧯",
        quickDef: "ดับไฟ/ดับเพลิง",
        exampleEn: "Firefighters worked fast to put out the fire.",
        exampleTh: "นักดับเพลิงทำงานอย่างรวดเร็วเพื่อดับไฟ"
      },
      {
        id: "put-up-with",
        verb: "put up with",
        phonetic: "/pʊt ʌp wɪð/",
        thaiPhonetic: "พุต อัป วิธ",
        thaiTranslation: "อดทนกับ / ยอมทนต่อบางสิ่ง",
        icon: "🧘‍♂️",
        quickDef: "อดทนกับ...",
        exampleEn: "I can't put up with this noise anymore.",
        exampleTh: "ฉันไม่สามารถอดทนกับเสียงดังนี้ได้อีกต่อไปแล้ว"
      },
      {
        id: "put-away",
        verb: "put away",
        phonetic: "/pʊt əˈweɪ/",
        thaiPhonetic: "พุต อะเวย์",
        thaiTranslation: "เก็บเข้าที่ให้เป็นระเบียบ",
        icon: "🧸",
        quickDef: "เก็บของเข้าที่",
        exampleEn: "Please put away your toys after playing.",
        exampleTh: "กรุณาเก็บของเล่นเข้าที่หลังจากเล่นเสร็จแล้ว"
      },
      {
        id: "put-together",
        verb: "put together",
        phonetic: "/pʊt təˈɡeð.ɚ/",
        thaiPhonetic: "พุต ทูเก็ตเธอร์",
        thaiTranslation: "ประกอบชิ้นส่วน / รวบรวมเข้าด้วยกัน",
        icon: "🧩",
        quickDef: "ประกอบชิ้นส่วน",
        exampleEn: "They put together a new bookcase.",
        exampleTh: "พวกเขาประกอบชั้นวางหนังสือตัวใหม่"
      }
    ]
  }
};
