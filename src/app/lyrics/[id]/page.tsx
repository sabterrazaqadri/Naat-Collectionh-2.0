"use client";
import { useParams } from "next/navigation";
import { useState } from "react";

const Lyrics: React.FC = () => {
  const { id } = useParams();
  const [isCopied, setIsCopied] = useState(false);

  // Match song IDs with their names and lyrics
  const songs = [
    {
      id: 1,
      name: "تیری شان عم نوالہ اللہ جل جلالہ",
      lyrics: ` تیری شان عم نوالہ اللہ جل جلالہ

تیرے پاک نام پہ اے خدا میرا دل فدا میری جاں فدا
میری روح کی یہی غذا تیرا نام لب پہ رہے سدا
ہوتیری رضا میری آرزو اللہ جل جلالہ اللہ جل جلالہ
__________

 تجھے بے نیازی کا واسطہ ہو قبول میری یہ  التجاء
کہ برائے احمد مجتبیٰ ہو معاف میری ہراک خطا
سر حشر رہ جائے آبرو اللہ جل جلالہ اللہ جل جلالہ
_________

جو حساب ر وز حساب ہو نہ سوال ہو نہ جواب ہو  میرے دائیں ہاتھ کتاب ہو
اور لب پہ نعت جناب ہو
میں رہوں حضور کے روبرو اللہ جل جلالہ اللہ جل جلالہ
__________

میں گناہ گار ہوں اے خدا کوئی نیک کام نہ کرسکا
نہیں ہو سکا تیرا حق ادا  تیرا فیض و فضل ہے بے بہا
ہو تیری رضا میری آرزو اللہ جل جلالہ اللہ جل جلالہ
__________

یہ دعا کرو میرے دوستو کہ عطا ہو ذوق یہ نجم کو
کبھی حمد ہو کبھی نعت ہو یہ دعا کرو  ہاں دعا کرو
میری چشم تر رہے باوضو اللہ جل جلالہ اللہ جل جلالہ
__________`,
    },

    {
      id: 2,
      name: "راحت افزا عجب ہے ذکر ترا",
      lyrics: `راحت افزا عجب ہے ذکر ترا
مغفرت کا سبب ہے ذکر ترا
__________

زینت ِ نطق  تیرا اسم عظیم
وجہ تحریک لب ہے ذکر  ترا
__________

وقت کے ہاتھ میں تری تسبیح
گردشِ روز و شب ہے ذکر ترا
__________

بندگی،  حلم،  آگہی،  ایثارہے
دیکھا جائے تو سب ہے ذکر ترا
__________

بے بسی  کی سیاہ راتوں میں
روشنی کا سبب ذکر ترا
__________

جس جا احصا کرے زبانِ بشر
اتنا محدود کب ہے ذکر ترا
__________

تیرے  ارشاد سے ہوا معلوم
ذکر شاہ عرب ہے ذکر ترا
__________

کس کو نسبت ہے تیرے پیاروں سے
اس زمیں کا ادب ہے ذکر ترا
__________

فکرِ شہزادؔ کے لئے لاریب
	باعثِ تاب و تب ہے ذکر ترا
__________`,
    },
    {
      id: 3,
      name: "حاضر ہیں حاضر ہیں حاضر ہیں ہم",
      lyrics: `حاضر ہیں حاضر ہیں حاضر ہیں ہم
لَبَّیْکَ اَللّٰھُمَّ لَبَّیْکَ لَبَّیْکَ لَا  شَرِیْکَ
لَکَ لَبَّیْکَ اِنَّ الْحَمْدَ وَ النَّعْمَۃَ لَکَ
وَ الْمُلْکَ لَا شَرِیْکَ لَکَ
__________

لائق حمد و ثنا  تیرے سوا کوئی نہیں
سننے والا عاصیوں کی التجا کوئی نہیں
ڈوبتوں کو جو بنا دے ناخدا کوئی نہیں 
جھولیاں بھر دے جوسن کے مدعا 
کوئی نہیں 
آسرا تیرے سوا تیرے سوا کوئی 
نہیں 
تر ہے دامن بھی ہمارے اور آنکھیں 
بھی ہیں نم 
حاضر ہیں حاضر ہیں حاضر ہیں ہم 
__________

یہ شرف کہ آدمی اللہ کے گھر جائے گا
یہ شرف کہ پاک دامن کا وہ رتبہ پائے گا
یہ شرف کہ داغ ِ دامن بھی ہر اک دھل جائے گا
یہ شرف کہ ہر خطا رب در گزر فرمائے گا
یہ شرف کہ روضۂ شاہِ امم پر جائے گا
اس شرف پہ جان بھی قربان کر دے تو ہے کم
حاضر ہیں حاضر ہیں حاضر ہیں ہم
__________

یہ سفر حج کا سفر  بگڑے بناتا ہے نصیب
یہ سفر مخلوق کو خالق سے کرتا 
ہے قریب 
یہ سفر یعنی مریضوں سے ملاقات ِ 
طبیب
ہو مقدر سے اگر عرفات کا میدان نصیب
یہ دعا مانگو کھڑے ہو کر وہاں پر اے ادیبؔ
ہو غلام ِ مصطفیٰ میں نام اپنا بھی رقم
حاضر ہیں حاضر ہیں حاضر ہیں ہم
__________`,
    },
    {
      id: 4,
      name: "يا رب العلمين ﷲ ہو ﷲ",
      lyrics: `يا رب العلمين ﷲﷲ
صل على طه الامين ﷲﷲ
في كل وقت و حين ﷲﷲ
__________

إملأ قلبي باليقين ﷲﷲ
ثبتني على ه‍ذا الدين ﷲﷲ
واغفر لي و المسلمين ﷲﷲ
__________

حسبي ربي جل ﷲﷲ
ما في قلبي غير ﷲﷲ 
على اله‍ادي صلى ﷲﷲ
لااله الاالله ﷲﷲ
__________`,
    },
    {
      id: 5,
      name: "وہ تنہا کون ہے اﷲ ہو ﷲ",
      lyrics: `وہ تنہا کون ہے ﷲ ہو ﷲ
بادشاہ وہ کون ہے ﷲ ہو ﷲ
مہربان وہ کون ہے ﷲ ہو ﷲ
__________

کیا اونچی شان ہے ﷲ ہو ﷲ
سب دلوں کی جان ہے ﷲ ہو ﷲ
اس کے سب نشان ہے ﷲ ہو ﷲ
__________`,
    },
    {
      id: 6,
      name: "اللہ کے گھر میں ہوں",
      lyrics: `اللہ نے بلایا ہے اللہ کے گھر میں ہوں
کعبے کا نظارہ ہے اللہ کے گھر میں ہوں
__________

دربار یہ کیسا ہے پیشانی سے پہلے 
دل
سجدے میں جھکایا اللہ کے گھر 
میں ہوں
__________

وہ رکن یمانی ہو یا رکن عراقی ہو
ہر کونےکو چوما ہے اللہ کے گھر میں ہوں
__________

مہمان خدا کے ہیں اب فکر نہیں 
کوئی
اللہ نے کھلانا ہے اللہ کے گھر میں 
ہوں
__________

مرکز ہے ہدایت کا یہ کعبہ مبارک گھر
دنیا میں جو پہلا ہے اللہ کے گھر میں ہوں
__________

یہ نقش براہیمی دیکھا تو مچل اٹھے 
مؤمن کا مصلہ ہے اللہ کے گھر میں 
ہوں
__________

یہ وقت ہے عزت کا میزاب ہے رحمت کا
سرپہ یہی سایہ ہے اللہ کے گھر میں ہوں
__________

جس سمت نظر اٹھی اک نور نظر آیا
پُر نور نظارہ ہے اللہ کے گھر میں ہوں
__________

 اللہ کرم کرنا  ہر سال بلا لینا
ہر دل کی تمنا ہے اللہ کے گھر میں 
ہوں
__________

یہ پاک حرم جس مین سارے ہی نبی آئے
کیا خوب نصیبا ہے اللہ کے گھر میں ہوں
__________

سجدے میں اجاگرؔ ہے اور سامنے 
کعبہ ہے
مولا نے نوازا ہے اللہ کے گھر میں 
ہوں
__________`,
    },
    {
      id: 7,
      name: "کعبہ دکھا دے مولا",
      lyrics: `ہر آنکھ چاہتی ہے کعبہ دکھا دے مولا
حسرت پکارتی ہے کعبہ دکھا دے مولا
__________

کوہ ِصفا سے دوڑوں مروہ کی چوٹیوں تک
خواہش مچل رہی ہے کعبہ دکھا دے مولا
__________

احرام پھر پہن کر طوفِ حرم کروں میں
میری دعا یہی ہے کعبہ دکھا دے مولا
__________

مینار اونچے اونچے دکھلا دے  تو حرم کے
پستی میں زندگی ہے کعبہ دکھا دے مولا
__________

یادِ حرم میں آنسو بہنیں کو رو رہے ہیں
اک آگ سی لگی ہے کعبہ دکھا دے مولا
__________

حالات کا ہوں مارا دامن میرا ہے خالی
اسباب کی کمی ہے کعبہ دکھا دے مولا
__________

یہ ملتزم سے جا کر لپٹتا رہے اجاگرؔ
یہ آرزو بڑی ہے کعبہ دکھا دے مولا
`,
    },
    {
      id: 8,
      name: "مرے مولا میں حاضر ہوں",
      lyrics: `چلا آیا ہوں تیرے گھر مرے مولا میں حاضرہوں
صدا لبیک کی لب پر مرے مولا میں حاضرہوں
__________

مرے آنسو ہیں فریادی مری آہیں سسکتی ہیں
مجھے بھی بخش دے داور مرے مولا میں حاضرہوں
__________

حطیمِ پاک کانہ خدا کا ایک حصہ ہے
میں آیا ہوں کعبے کے اندر مرے مولا میں حاضرہوں
__________

غلافِ کعبہ ہاتھوں میں پکڑ کر یہ دعا مانگی
کبھی چھوٹے نہ تیرا در مرے مولا میں حاضرہوں
__________

نکل آئے کوئی  صورت میری بخشش کی یا اللہ
حرم میں ہو کرم مجھ پر مرے مولا میں حاضرہوں
__________

مطافِ کعبہ میں ہوں اور چھما چھم بارشیں ہیں
دکھا ہر سال یہ منظر مرے مولا میں حاضرہوں
__________

کرم کی بارشوں میں سر جھکانا مانگنا رب سے
رہے گا یا د یہ منظر مرے مولا میں حاضرہوں
__________

گناہوںمیں بسر کی زندگی ہائے پشماں ہوں
جھکائے سر بچشم تر مرے مولا میں حاضرہوں
__________

نظر پہلی پڑی کعبے پہ اپنے رب سے یہ مانگا
مری موت ہو ایماں پر مرے مولا میں حاضرہوں
__________

اجاگرؔ نے  تجھے پایا تو اس نے پا لیا سب کچھ
رضا تیری مرا زیور مرے مولا میں حاضرہوں
`,
    },

    {
      id: 101,
      name: "الصُّبْحُ بدَا مِنْ طَلْعَتِہ",
      lyrics: `الصُّبْحُ بدَا مِنْ طَلْعَتِہ
والليلُ دجا من وفرتہ
__________

فاقَ الرُّسالۃ فضلاً وعلا
اَھْدَى السُّبُلاَ لِدَلالَتِہ
__________

كَنْزُ الْكَرَمِ مُوْلِي النِّعَم
ھادي الاممِ لشريعتہ
__________

اذكى النسبِ اعلى الحسب
كُلُّ العَرَبِ في خِدمَتِہ
__________

سَعَتِ الشَّجَرُ نَطَقَ الحَجَرُ
شُقّ القَمَرُ بِاِشَارتِہ
__________

جِبْرِيلُ اَتَى لَيْلَۃ َ اَسْرَى
والرَّبُ دعی لحضرتہ
__________

نالَ الشَّرَفَا واللہ عَفَا
عن ما سلفا من امتہ
__________

فمحمدُنا ھوَ سيدُنا
والعِزُّ لَنا لاِجَابتِہ`,
    },

    {
      id: 102,
      name: "چوں ماہ در ارض و سماں",
      lyrics: `چوں ماہ در ارض و سماں، تاباں توئی، تاباں توئی
رشک ملک، نور خدا، انسان توئی، انسان توئی
__________

روشن ز رویت دو جہان، عکس رخت خورشید وماہ
اے نور ذات کبریا رخشا توئی، رخشاں توئی
__________

آیات قرآن ابرویت، تفسیر قرآں گیسویت
اے روئے تو قرآن ما، ایمان توئی، ایمان توئی
__________

یا مصطفی یا مجتبی، ارحم لنا، ارحم لنا
دست ہوا بے چارا ارا، داماں توئی، داماں توئی
__________

من عاصیم، من عاجزم،من بیکسم حال میرا
یا شافعی زور جزا، پر ساں توئی، پر ساں توئی
__________

جامیؔ رود از چشم ما جلوہ نما بہر خدا
جان و دلم ہر دو فدا، جاناں توئی، جاناں توئی 
` },

    {
      id: 103,
      name: "رفعت عرش سے بھی رتبہ ہے بالا تیرا",
      lyrics: `رفعت عرش سے بھی رتبہ ہے بالا تیرا
ورفعنا سے عیاں ، ذکر ہے اونچا تیرا
__________

سورج الٹایا اشارے سے قمر چیر دیا
ملک ہر شے ہے تری کل پہ ہے قبضہ تیرا
__________

کعبہ وعرش سے اعلیٰ، ہے جناں سے بالا
رفعتیں رشک کریں جس پہ وہ روضہ تیرا
__________

تشنگی دور ہو، سیرابی سدا کی ہو نصیب
حوض کوثر سے ملے جس کو قطرہ تیرا
__________

پیکر نورکی یہ شان کے سایہ نہ بنا
خلق نے پایا مگر فضل کا سایہ تیرا
__________

تیری تقسیم سے بٹتی ہے جہاں میں نعمت
دینے والا ہے خدا، بانٹنا عہدہ تیرا
__________

سارا عالم ہے فدا جس پہ، جو رب کو بھایا
ہے حسین وہ نور مجسم سراپا تیرا
__________

سارے اصحاب ہدایت کے بنے ہیں تارے
کشتی نوح کی ہے مثل گھرانہ تیرا  
__________

میرے آلام کو آرام میں بدلا تو نے
جب بھی مشکل پڑی ، کام آیا سہارا تیرا
__________

دور ہو جائیں بلائیں، نہ کبھی پاس آئیں
چشم رحمت ہو تو محفوظ ہے بندہ تیرا
__________

فرق باطلہ کو دھول چٹائی جس نے
وہ رضا ہند میں ہے چاہنے والا تیرا
__________

لا نھر میں ہے بشارتؔ جو آئے، پائے
ہے یہ برہان بھی اک سائل و منگتا تیرا
`,
    },
    {
      id: 104,
      name: "میرے آقا کی ہے رحمت",
      lyrics: `میرے آقا کی ہے رحمت یہاں پر بھی وہاں پر بھی
مٹاتے ہیں ہر اک  کلفت یہاں پر بھی وہاں پر بھی
__________

عرب ہو یا عجم، عرض و سماں ہر جا میرے آقا
ہے جاری آپ کی مدحت یہاں پر بھی وہاں پر بھی
__________

یہ دنیا ہو یا ہو عقبیٰ، جدھر دیکھیں نظر آئے
انہی کی شان و شوکت یہاں پر بھی وہاں پر بھی
__________

ہیں وہ مملوک خالق کے، ہوۓ مالک جہاں بھر کے
ہے ملک مصطفی خلقت، یہاں پر بھی وہاں پر بھی
__________

گدا عطار کا ہوں، میں مرید غوث اعظم ہوں
سدا ملتی رہے برکت یہاں پر بھی وہاں پر بھی
__________

غلام عطار کا، احمد رضا کا اک سپاہی ہوں
سدا قائم رہے نسبت یہاں پر بھی وہاں پر بھی
__________

بچا لو قبر و محشر میں، عذاب و قہر سے آقا
کرو برہان کی نصرت یہاں پر بھی وہاں پر بھی
__________

نہ ہو مایوس اے برہانؔ ان کا فضل جاری ہے 
تجھے پہنچائیں گے رحمت یہاں پر بھی وہاں پر بھی`,
    },
    {
      id: 105,
      name: "محمد مصطفےٰ ﷺ تشریف لے آئے",
      lyrics: `محمد مصطفےٰ ﷺ صلِ علیٰ  تشریف لے آئے
زہے قسمت ہمارے پیشوا تشریف لے آئے
__________

افق کے گوشے گوشے سے اجالے کی کرن پھوٹی
طلوع صبح ہے شمس الضحیٰﷺ تشریف لے آئے
__________

عرب کے ریگزاروں میں عجم کی رہ گزاروں میں
چراغاں ہوگیا بدر الدجیٰ ﷺ تشریف لے آئے
__________

اٹھو اے عاصیو اور بڑھ کے دامن تھام لو ان کا
زمیں پر شافع ﷺ روز جزا تشریف لے آئے
__________

مکمل ہوگیا اب سلسلہ رشد و ہدایت کا
شہنشاہِ رسل نور الہدیٰ ﷺ تشریف لے آئے
__________

مبارک غم کے ماروں  کو مبارک خستہ خالوں کو
بالآخر مخزنﷺ جود و سخا تشریف لے آئے
__________

پسینہ آگیا بپھری ہوئی موجوں کو ہیبت سے
 شکستہ کشتیوں کے ناخدا تشریف لے آئے
__________

مقّدر جاگ اٹھااقبالؔ ہم سے بے سہاروں کا
شفیع المذنبین خیر الوریٰ ﷺ تشریف لے آئے`,
    },
    {
      id: 106,
      name: "تمہاری یاد سے دل کو",
      lyrics: `تمہاری یاد سے دل کو ہیں راحتیں کیا کیا
 تمہارے ذکر نے ٹالی ہیں مشکلیں کیا کیا
__________

 تمہاری دید کہاں ،دیدۂ خیال کہاں
بنائی پھر بھی خیالوں نے صورتیں کیا کیا 
__________

نظر  خیال سے پہلے مدینے جا پہنچی
دل و نگاہ میں دیکھیں رقابتیں کیا کیا
__________

اب اس مقام پہ ہم آگئے کہ ذکرِ رسول
جو ایک پل نہ ہو ، ہوتی ہیں الجھنیں کیا کیا
__________

بس ایک  رات کا مہماں اِنہیں  بنانے کو
زمینں سے عرش نے کی ہوں گی منتیں کیا کیا
__________

تمہارے نام کا ٹھپہ لگا ہوا پا کر
لگا رہے ہیں مری لوگ قیمتیں کیا کیا
__________

گئے نہیں ہو مدینے ادیب ؔتم لیکن
سنا رہے ہو وہاں کی حکایتیں کیا کیا`,
    },
    {
      id: 107,
      name: "حسن یوسف اور طہ کا جلوہ اور ہے",
      lyrics: `حسن یوسف اور طہ کا جلوہ اور ہے
ماہ کنعان اور ہے مہر مدینہ اور ہے
__________

آسمانوں پر گئے ادریس وعیسیٰ شک نہیں
دم میں سیر لامکاں معراج اسری اور ہے
__________

ہے خلیل اللہ حبیب اللہ میں فرق عظیم
شان خلت اور ہے تاج فترضی اور ہے
__________

انفلاق بحر برہان ِ عظیم ُالشان تھا
انشقاق بدرکا لیکن نتیجہ اور ہے
__________

مفت میں لیتے نہیں عاشق حیات خضر کو
خالی جینا اور ہے مرمر کے جینا اور ہے
__________

جنتی پھولوں کی خوشبو تو مسلّم ہے مگر
نکہت گل اور ہےان کا پسینہ اور ہے
__________

اعظمیؔ! تھی نوح کی کشتی میں عالم کی نجات
اہل بیت پاک کا لیکن سفینہ اور ہے
`,
    },
    {
      id: 108,
      name: "مصطفی کا خدا اور خود مصطفی",
      lyrics: `مصطفی کا خدا اور خود مصطفی
کیوں کہوں میرا کوئی سہارا نہیں
میں مدینے سے لیکن بہت دور ہوں
یہ خلش میرے دل کو گوارا نہیں
__________

ٹھوکروں کے سوا اور پائے گا کیا
جس کی منزل کا کوئی نہ ہو رہنما
اپنی منزل پہ ہرگز نہ پہنچے گا وہ
ہاتھ میں جس کے دامن تمہارا نہیں
__________

اسم احمد کی تعظیم کے منکرو
ان کی امت کو قرآن میں دیکھ لو
بے لقب ان کا اسم مبارک کبھی
ان کے معبود نے بھی پکارا نہیں
__________

عقل جن و بشر کا یہاں ذکر کیا
سدرہ والے جہاں دنگ و حیران ہیں
رفعت مصطفیٰ کی ملے حد کسے
یہ وہ دریا ہے جس کا کنارا نہیں
__________

وہ ہی روزے پہ بلوائےگا اک دن
اے سکندرؔ ذرا صبر سے کام لے
ان کے در کا گدا اور مایوس ہو
میرے سرکار کو یہ گوارا نہیں
`,
    },
    {
      id: 109,
      name: "میرے لفظوں میں شمس الضحیٰ",
      lyrics: `میرے لفظوں میں شمس الضحیٰ ہے مرے لہجہ میں بدرالدجیٰ 
مشعل مدحت مصطفیٰ ہوں ،ہر  اندھیرے کو میں جگمگا دوں
__________

ایسی اک نعت لکھنے کی یار رب مجھ کو توفیق دے زندگی میں
ان کی زلفوں کی خوشبو سنگھاؤں ان کے قدموں کی آہٹ سنا دوں
__________

وہ میری شاعری میرا فن ہیں،میں سخن ہوں وہ جان سخن ہیں
اپنا سب کچھ انہیں کا دیا ہے اپنا سب کچھ انہیں پر لُٹا دوں
__________

قافلے جا رہےہیں مدینے اور حسرت  سے میں تک رہا ہوں
یا لپٹ جاؤں قدموں سے ان کے  یا قضا کو پھر اپنی صدا دوں
__________

مری بخشش کا ساماں یہی ہے میرے دل کا ارماں یہی ہے
ایک دن ان کے روضہ پہ جاکران کی نعتیں انہیں کو سنا دوں
__________

ہے تمنا کہ ڈھل جاؤں یا رب  پیکر اُسوۂ مصطفےٰ میں
مسکراؤں اگر سنگ برسیں ہر بُرے کو بھلی سے دعا دوں
__________

عشق  ہے آگ ،آنسو ہے پانی، دونوں یکجا ہیں عشق نبی میں
یہ کرشمہ ہے نعتِ نبی کا ،جب کہو یہ کرشمہ دکھا دوں
__________

کاش آئے ان کی سواری، اے ادیبؔ ان کے قدموں کے نیچے
کھینچ  کر روح کو تن سے باہر ان کی چادر بنا کر بچھا دوں
`,
    },
    {
      id: 110,
      name: "مدينے بلانا ہمیں جان عالم",
      lyrics: `مدینے بلانا ہمیں جان عالم
درِ پاک کا ہم  نظارہ کریں گے
وہیں پر جئیں گے وہیں پر مریں گے
وہیں زندگی بھر گزارا کریں گے
__________

وہ جس کی چمک سے چمکتا ہے عالم
نگاہوں کو روشن جو کرتا ہے پیہم
مقدر سے مل جائےوہ سبز گنبد
تو جی بھر کے اس کا نظارہ کریں گے
__________

پڑیں گی مواجہ پہ جس دم نگائیں
رواں اشک ہونگے بھریں گے ہم آہیں
مچلتے بِلکتے ہوئے آپ کو ہم
دو عالم کے داتا پکارا کریں گے
__________

کبھی جا کر دیکھیں گے جنت کی کیاری
وہ جہاں آبِ کوثر ہے جاری
وہ خطباتِ آقا کا پر کیف منظر
تصور میں اس کا  نظارہ کریں گے
__________

در پاک پر روز جایا کریں گے
سعادت معراج پایا کریں گے
یوں ایمان ہر روز اپنا مسافرؔ
سنوارا کریں گے نکھارا کریں گے
`,
    },
    {
      id: 111,
      name: "میں کہ بے وقعت و بے مایا ہوں",
      lyrics: `میں کہ بے وقعت و بے مایا ہوں
تیری محفل میں چلا آیا ہوں
__________

آج ہوں میں تیرا دہلیز نشین
آج میں عرش کا ہم پایا ہوں
__________

چند پل یوں تیری قربت میں کٹے
جیسے اک عمر  گزار آیا ہوں
__________

جب بھی میں ارض ِ مدینہ  پہ چلا
دل ہی دل میں بہت اترایا ہوں
__________

تیرا پیکر  ہے کہ اک بالۂ نور
جالیوں سے تجھے دیکھ آیا ہوں
__________

یہ کہیں خامئ ایمان ہی نہ ہو
میں  مدینے سے پلٹ آیا ہوں`,
    },
    {
      id: 112,
      name: "میں تو خود ان کےدر کا گدا ہوں",
      lyrics: `میں تو خود ان کےدر کا گدا ہوں
اپنے آقا کو میں نذر کیا دوں
اب تو آنکھوں میں بھی کچھ نہیں ہے
ورنہ قدموں میں آنکھیں بچھا دوں
__________

میری آنسوبہت قیمتی ہیں
ان سے وابستہ ہیں ان کی یادیں
ان کی منزل ہے خاک مدینہ
یہ گوہر یونہی کیسے لٹا دوں
__________

بے نگاہی میری نہ جائیں
دیدہ ور میرے نزدیک آئیں
میں یہیں سےمدینہ دکھا دوں
ساری محفل کی محفل جگا دوں
`,
    },
    {
      id: 113,
      name: "اوج پانا میرے حضور کا ہے",
      lyrics: `اوج پانا میرے حضور کا ہے
عرش جانا میرے حضور کا ہے
__________

عرش سے پرے وہ ہو آئے
آنا جانا میرے حضور کا ہے
__________

شادیانیں بجیں شبِ معراج
آنا جانا میرے حضور کا ہے
__________

حق تعالی کا جلوہ راتوں رات
دیکھ  آنا میرے حضور کا ہے
__________

بیٹھے بیٹھے مدینہ گھوم آئے
کیا بلانا میرے حضور کا ہے
__________

قبر کا خوف مجھے ہو کیوں کر
واں پہ آنا میرے حضور کا ہے
__________

غم نہ محشر کی دھوپ کا ہے واں
شامیانہ میرے حضور کا ہے
__________

میں ہوں تیار انتظار یہ ہے
کب بلانا میرے حضور کا ہے
__________

لعل و یعقوت و نیلم ومرجان
ہر خزانہ میرے حضور کا ہے
__________

بھائی بھائی مہاجر و انصار
دل ملانا میرے حضور کا ہے
__________

جام شِیر اک شعر ِ ستار  نے
یہ پلانا میرے حضور کا ہے
__________

کاش کہنے لگیں یہ لوگ عبید
تو دیوانا میرے حضور کا ہے
__________

دل عبید ؔرضا کا ہے گلشن
دل سجانا میرے حضور کا ہے`,
    },
    {
      id: 114,
      name: "تم نور ہو میں اک ذرا ہوں",
      lyrics: `اے شمع ِحرم اے نورِ خدا تم نور ہو میں اک ذرا ہوں
سرکار میری اوقات ہے کیا تم دریا ہو میں قطرہ ہوں
__________

تم ابر کرم تم بحر سخا امید ہے تم سے وابستہ
رکھ چشم کرم ہر حال گدا، تم نور ہو میں اک ذرا ہوں
__________

دنیا کے ستم کب تک میں سہوں،تم سے نہ کہوں تو کس سے کہوں
سن لیجیے ٹوٹے دل کی صدا، تم نور ہو میں اک ذرا ہوں
__________

محتاج تمہارے جن و بشر احسان تمہارا عالم پر
تم حل ہو شہا ہر مشکل کا، تم نور ہو میں اک ذرا ہوں
__________

دیکھیں پھر سے آنکھیں وہ زمین وہ منظر صبح طیبہ کا
امسال شرف ہو پھر سے عطا تم نور ہو میں اک ذرا ہوں
__________

غم اور مصائب رنج و الم گھیرے ہیں مجھے یا شاہ امم
امداد کرو اے عقدہ کشا تم نور ہو میں اک ذرا ہوں
__________

دیتا ہوں صدا با چشم نم محشر میں آقا رکھنا بھرم 
عاصی ہوں میں با دیدہ نم، تم نور ہو میں اک ذرا ہوں`,
    },

    
    {
      id: 115,
      name: "روک لیتی ہے آپ کی نسبت",
      lyrics: `روک لیتی ہے آپ کی نسبت
تیر جتنے بھی ہم پر چلتے ہیں
یہ کرم ہے حضور کا ہم پر
آنے والے عذاب ٹلتے ہیں
__________

وہ ہی بھرتے ہیں جھولیاں سب کی
اور سمجھتے ہیں بولیاں سب کی
آؤ بازار مصطفیٰ ﷺ کو چلیں
کھوٹے سکے وہیں پہ چلتے ہیں
__________

اپنی اوقات صرف اتنی ہے
کچھ نہیں بات صرف اتنی ہے
کل بھی ٹکروں پر ان کے پلتے تھے
اب بھی ٹکروں پر ان کے پلتے ہیں
__________

اب ہمیں کیا کوئی دبائے گا
اب ہمیں کیا کوئی گرائے گا
ہم نے خود کو گرا لیا ہے وہاں
گرنے والے جہاں سنبھلتے ہیں
__________

ذکر سرکار کے اجالوں کی
بے نہایت ہیں رفعتیں خالدؔ
یہ اجالے کبھی نہ سمٹیں گے
یہ وہ سورج نہیں جو ڈھلتے ہیں
`,
    },

  ];

  // Find the song based on the ID from the route
  const song = songs.find((song) => song.id.toString() === id);

  const copyToClipboard = () => {
    if (song?.lyrics) {
      navigator.clipboard.writeText(song.lyrics).then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
      });
    }
  };

  const shareLyrics = async () => {
    if (navigator.share && song?.lyrics) {
      try {
        await navigator.share({
          title: song.name,
          text: song.lyrics,
          url: window.location.href,
        });
      } catch (error) {
        console.error("Sharing failed", error);
      }
    } else {
      alert("Sharing is not supported on this device.");
    }
  };

  return (
    <div className="min-h-screen bg-background p-4 font-urdu text-foreground">
      {/* Display the song name or a default message */}
      <div className="bg-white w-full h-auto rounded-lg border mb-4  shadow-lg">
        <h1 className="text-2xl text-center text-shadow-blueGlow text-blue-700 mt-2 underline  underline-offset-8 font-bold mb-4">
          {song?.name || "نامعلوم کلام"}
        </h1>
      </div>
      <div className="bg-foreground text-background p-4 rounded-md shadow-md bg-white md:text-2xl text-lg relative ">
        <pre className="font-urdu whitespace-pre-wrap text-center">
          {song?.lyrics || "شاعری دستیاب نہیں ہے۔"}
        </pre>
        <div className="mt-10 flex space-x-4 justify-center">
          {/* Copy Button */}
          <button
            onClick={copyToClipboard}
            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600"
          >
            {isCopied ? "کاپی ہوگئی!" : "کاپی کریں"}
          </button>
          {/* Share Button */}
          <button
            onClick={shareLyrics}
            className="bg-green-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600"
          >
            شیئر کریں
          </button>
        </div>
      </div>
    </div>
  );
};

export default Lyrics;