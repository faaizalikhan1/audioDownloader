//  Intro
var car;
function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/==a/g, "ً");
car = car.replace(/==i/g, "ٍ");
car = car.replace(/==u/g, "ٌ");
car = car.replace(/=a/g, "َ");
car = car.replace(/=i/g, "ِ");
car = car.replace(/=u/g, "ُ");
car = car.replace(/=w/g, "ّ");
car = car.replace(/=o/g, "ْ");
car = car.replace(/,/g, "ئ");
// car = car.replace(/./g, "ؤ");
car = car.replace(/[']/g, "ة");
car = car.replace(/["]/g, "ع");

car = car.replace(/[@]/g, "ة");

car = car.replace(/’/g, "\'");
car = car.replace(/[aâàā]/g, "ا");
car = car.replace(/N/g, "آ");
car = car.replace(/b/g, "ب");
car = car.replace(/ب'/g, "پ");
car = car.replace(/p/g, "پ");
car = car.replace(/پ'/g, "ب");
car = car.replace(/t/g, "ت");
car = car.replace(/ت'/g, "ث");
car = car.replace(/ث'/g, "ت");
car = car.replace(/ṯ/g, "ث");
car = car.replace(/[jǧ]/g, "ج");
car = car.replace(/ث'/g, "ث");
car = car.replace(/c/g, "ث");
car = car.replace(/h/g, "ح");
car = car.replace(/[ḥḤ]/g, "ح");
car = car.replace(/ح'/g, "خ");
car = car.replace(/[o]/g, "خ");
car = car.replace(/خ'/g, "ج");
car = car.replace(/d/g, "د");
car = car.replace(/ذ'/g, "د");
car = car.replace(/ḏ/g, "ذ");
car = car.replace(/r/g, "ر");
car = car.replace(/R/g, "ر");
car = car.replace(/;/g, "ز");
car = car.replace(/ز'/g, "ر");
car = car.replace(/z/g, "ذ");
car = car.replace(/s/g, "س");
car = car.replace(/:/g, "ش");
car = car.replace(/ش'/g, "س");
car = car.replace(/š/g, "ش");
car = car.replace(/[Sṣ]/g, "يٍ");
car = car.replace(/ص'/g, "ض");
car = car.replace(/x/g, "ص");
car = car.replace(/X/g, "صْ");
car = car.replace(/[y]/g, "ظ");
car = car.replace(/[Y]/g, "ظ");
car = car.replace(/[Dḍ]/g, "د");
car = car.replace(/[u]/g, "ط");
car = car.replace(/[U]/g, "،");
car = car.replace(/ط'/g, "ظ");
car = car.replace(/ظ'/g, "ط");
car = car.replace(/[Zẓ]/g, "~");
car = car.replace(/[gʿ]/g, "غ");
car = car.replace(/[Gʿ]/g, "لأ");
car = car.replace(/غ'/g, "غ");
car = car.replace(/غ'/g, "غ");
car = car.replace(/ġ/g, "غ");
car = car.replace(/e/g, "ء");
car = car.replace(/f/g, "ف");
car = car.replace(/F/g, "ف");
car = car.replace(/ف'/g, "ڤ");
car = car.replace(/ڤ'/g, "ف");
car = car.replace(/v/g, "ض");
car = car.replace(/V/g, "ض");
car = car.replace(/q/g, "ق");
car = car.replace(/Q/g, "َ");
car = car.replace(/ق'/g, "ڨ");
car = car.replace(/ڨ'/g, "ق");
car = car.replace(/k/g, "ك");
car = car.replace(/K/g, "چ");
car = car.replace(/ك'/g, "ڭ");
car = car.replace(/ڭ'/g, "ك");
car = car.replace(/l/g, "ل");
car = car.replace(/L/g, "ل");
car = car.replace(/m/g, "م");
car = car.replace(/M/g, "٫");
car = car.replace(/n/g, "ن");
car = car.replace(/h/g, "ه");
car = car.replace(/ه'/g, "ة");
car = car.replace(/ة'/g, "ه");
car = car.replace(/[w]/g, "و");
car = car.replace(/[W]/g, "وٌ");

car = car.replace(/[iîī]/g, "ي");
car = car.replace(/[E]/g, "ء");
car = car.replace(/ي'/g, "ى");
car = car.replace(/ى'/g, "ي");
car = car.replace(/-/g, "ء");
car = car.replace(/ʾ/g, "ء");
car = car.replace(/وءء/g, "ؤ");
car = car.replace(/يءء/g, "ئ");

car = car.replace(/I/g, "ى");
car = car.replace(/A/g, "اً");
car = car.replace(/B/g, "لآ");
car = car.replace(/P/g, "؛");
car = car.replace(/T/g, "لإ");
car = car.replace(/C/g, "ث");
car = car.replace(/J/g, "جـ");
car = car.replace(/H/g, "أ");
car = car.replace(/O/g, "و");

car = car.replace(/O/g, "و");




car = car.replace(/ءا/g, "أ");
car = car.replace(/_/g, "ـ");
car = car.replace(/\?/g, "ه");
car = car.replace(/\;/g, "؛");
car = car.replace(/\,/g, "،");

startPos = document.conversion.saisie.selectionStart;
endPos = document.conversion.saisie.selectionEnd;




beforeLen = document.conversion.saisie.value.length;
afterLen = car.length;
adjustment = afterLen - beforeLen;

document.conversion.saisie.value = car;

document.conversion.saisie.selectionStart = startPos + adjustment;
document.conversion.saisie.selectionEnd = endPos + adjustment;

var obj = document.conversion.saisie;
obj.focus();
obj.scrollTop = obj.scrollHeight;
}