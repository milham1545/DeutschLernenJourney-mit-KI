// Complete German learning data structure
export interface Vocabulary {
  german: string;
  indonesian: string;
  example: string;
}

export interface Grammar {
  title: string;
  explanation: string;
  examples: string[];
}

export interface Dialog {
  title: string;
  lines: { speaker: string; german: string; indonesian: string }[];
}

export interface Exercise {
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface SubSection {
  id: string;
  title: string;
  vocabulary: Vocabulary[];
  grammar: Grammar[];
  dialogs: Dialog[];
  exercises: Exercise[];
}

export interface Level {
  id: string;
  title: string;
  description: string;
  subSections: SubSection[];
}

export const levels: Level[] = [
  {
    id: "A1",
    title: "A1 - Pemula (Beginner)",
    description: "Dasar-dasar bahasa Jerman: salam, perkenalan, angka, dan kalimat sederhana",
    subSections: [
      // 1. DASAR, SALAM & ORANG (Lengkap)
      {
        id: "begruessung",
        title: "Begrüßung & Einführung (Dasar)",
        vocabulary: [
          { german: "Hallo", indonesian: "Halo", example: "Hallo, wie geht's?" },
          { german: "Guten Morgen", indonesian: "Selamat pagi", example: "Guten Morgen, aufstehen!" },
          { german: "Guten Tag", indonesian: "Selamat siang", example: "Guten Tag, Herr Müller." },
          { german: "Guten Abend", indonesian: "Selamat malam", example: "Guten Abend, schlafen Sie gut." },
          { german: "Auf Wiedersehen", indonesian: "Sampai jumpa", example: "Auf Wiedersehen, bis bald!" },
          { german: "Tschüss", indonesian: "Dadah", example: "Tschüss, bis morgen!" },
          { german: "Danke", indonesian: "Terima kasih", example: "Danke schön!" },
          { german: "Bitte", indonesian: "Sama-sama/Silakan", example: "Bitte sehr!" },
          { german: "Entschuldigung", indonesian: "Maaf/Permisi", example: "Entschuldigung, darf ich vorbei?" },
          { german: "Ja", indonesian: "Ya", example: "Ja, ich komme." },
          { german: "Nein", indonesian: "Tidak", example: "Nein, ich habe keine Zeit." },
          { german: "der Name", indonesian: "nama", example: "Mein Name ist Lisa." },
          { german: "heißen", indonesian: "bernama", example: "Ich heiße Lisa." },
          { german: "kommen", indonesian: "datang/berasal", example: "Ich komme aus Indonesien." },
        ],
        grammar: [
          {
            title: "Kata Ganti Orang (Personalpronomen)",
            explanation: "Ini adalah fondasi kalimat. Hafalkan perubahan subjeknya:\n- ich (saya)\n- du (kamu - informal)\n- er (dia laki-laki)\n- sie (dia perempuan)\n- es (dia netral/benda)\n- wir (kami/kita)\n- ihr (kalian)\n- sie (mereka)\n- Sie (Anda - formal, selalu huruf besar).",
            examples: ["Ich bin Andi.", "Du bist nett.", "Sie (mereka) spielen.", "Sie (Anda) sind höflich."],
          },
          {
            title: "Konjugasi Kata Kerja (Verbkonjugation)",
            explanation: "Kata kerja Jerman berubah ujungnya sesuai subjek. Pola Regular (seperti 'kommen'):\n- ich komm-e\n- du komm-st\n- er/sie/es komm-t\n- wir komm-en\n- ihr komm-t\n- sie/Sie komm-en",
            examples: ["Ich komme.", "Du kommst.", "Er kommt."],
          },
          {
            title: "Kata Kerja 'sein' (to be)",
            explanation: "Sangat penting & tidak beraturan! Artinya: adalah/ada.\n- ich bin\n- du bist\n- er/sie/es ist\n- wir sind\n- ihr seid\n- sie/Sie sind",
            examples: ["Ich bin glücklich.", "Das ist ein Buch.", "Wir sind Freunde."],
          },
        ],
        dialogs: [
          {
            title: "Perkenalan",
            lines: [
              { speaker: "A", german: "Hallo, ich heiße Sarah. Wie heißt du?", indonesian: "Halo, namaku Sarah. Siapa namamu?" },
              { speaker: "B", german: "Ich bin Tom. Woher kommst du?", indonesian: "Aku Tom. Dari mana asalmu?" },
              { speaker: "A", german: "Aus Deutschland. Und du?", indonesian: "Dari Jerman. Dan kamu?" },
              { speaker: "B", german: "Ich komme aus Indonesien.", indonesian: "Aku dari Indonesia." },
            ],
          },
        ],
        exercises: [
          { question: "Bahasa Jerman 'Saya':", options: ["Du", "Wir", "Ich", "Er"], correctAnswer: 2 },
          { question: "Konjugasi: 'Du ___ (komen) aus Bali.'", options: ["komme", "kommst", "kommt", "kommen"], correctAnswer: 1 },
          { question: "'Selamat malam' adalah...", options: ["Guten Morgen", "Guten Tag", "Guten Abend", "Gute Nacht"], correctAnswer: 2 },
          { question: "Lengkapi: '___ (Dia pr) ist schön.'", options: ["Er", "Sie", "Es", "Wir"], correctAnswer: 1 },
          { question: "Apa arti 'Auf Wiedersehen'?", options: ["Halo", "Terima kasih", "Maaf", "Sampai jumpa"], correctAnswer: 3 },
          { question: "Konjugasi 'sein' untuk 'wir':", options: ["bin", "bist", "sind", "seid"], correctAnswer: 2 },
        ],
      },

      // 2. KELUARGA (Lengkap)
      {
        id: "familie",
        title: "Familie (Keluarga)",
        vocabulary: [
          { german: "der Vater", indonesian: "ayah", example: "Mein Vater ist groß." },
          { german: "die Mutter", indonesian: "ibu", example: "Meine Mutter kocht." },
          { german: "die Eltern", indonesian: "orang tua", example: "Meine Eltern sind hier." },
          { german: "der Bruder", indonesian: "saudara laki-laki", example: "Ich habe einen Bruder." },
          { german: "die Schwester", indonesian: "saudara perempuan", example: "Das ist meine Schwester." },
          { german: "die Geschwister", indonesian: "saudara kandung", example: "Hast du Geschwister?" },
          { german: "der Großvater (Opa)", indonesian: "kakek", example: "Opa liest." },
          { german: "die Großmutter (Oma)", indonesian: "nenek", example: "Oma schläft." },
          { german: "der Onkel", indonesian: "paman", example: "Onkel Bob." },
          { german: "die Tante", indonesian: "bibi", example: "Tante Lisa." },
          { german: "der Cousin", indonesian: "sepupu (lk)", example: "Mein Cousin." },
          { german: "die Cousine", indonesian: "sepupu (pr)", example: "Meine Cousine." },
          { german: "der Sohn", indonesian: "anak laki-laki", example: "Mein Sohn spielt." },
          { german: "die Tochter", indonesian: "anak perempuan", example: "Meine Tochter singt." },
          { german: "das Baby", indonesian: "bayi", example: "Das Baby weint." },
          { german: "der Mann", indonesian: "pria/suami", example: "Der Mann arbeitet." },
          { german: "die Frau", indonesian: "wanita/istri", example: "Die Frau lacht." },
        ],
        grammar: [
          {
            title: "Artikel Tertentu (Der/Die/Das)",
            explanation: "Di Jerman, benda punya gender. Wajib dihafal!\n- DER (Maskulin): der Vater, der Mann\n- DIE (Feminin): die Mutter, die Frau (dan semua bentuk Jamak/Plural)\n- DAS (Netral): das Kind, das Baby",
            examples: ["Der Tisch (Maskulin)", "Die Lampe (Feminin)", "Das Buch (Netral)"],
          },
          {
            title: "Possessivartikel (Kepemilikan)",
            explanation: "Mengatakan 'milikku' atau 'milikmu'. Perhatikan akhiran '-e' untuk feminin/plural!\n- mein (milikku) -> mein Vater (mask), meine Mutter (fem)\n- dein (milikmu) -> dein Bruder (mask), deine Schwester (fem)",
            examples: ["Das ist mein Vater.", "Das ist meine Mutter."],
          },
        ],
        dialogs: [
          {
            title: "Anggota Keluarga",
            lines: [
              { speaker: "A", german: "Wer ist das?", indonesian: "Siapa itu?" },
              { speaker: "B", german: "Das ist mein Bruder.", indonesian: "Itu saudaraku." },
              { speaker: "A", german: "Und die Frau?", indonesian: "Dan wanita itu?" },
              { speaker: "B", german: "Das ist meine Mutter.", indonesian: "Itu ibuku." },
            ],
          },
        ],
        exercises: [
          { question: "Artikel untuk 'Mutter'?", options: ["der", "die", "das", "den"], correctAnswer: 1 },
          { question: "Bentuk kepemilikan 'Saya' untuk 'Tante' (feminin):", options: ["mein Tante", "meine Tante", "meinen Tante", "meiner Tante"], correctAnswer: 1 },
          { question: "Apa arti 'Geschwister'?", options: ["Orang tua", "Kakek Nenek", "Saudara kandung", "Sepupu"], correctAnswer: 2 },
          { question: "Lawan kata 'der Vater'?", options: ["der Bruder", "die Mutter", "die Oma", "der Onkel"], correctAnswer: 1 },
          { question: "Artikel jamak (Plural) selalu...", options: ["der", "die", "das", "dem"], correctAnswer: 1 },
        ],
      },

      // 3. ANGKA & WAKTU (Lengkap)
      {
        id: "zahlen_zeit",
        title: "Zahlen & Zeit (Angka & Waktu)",
        vocabulary: [
          { german: "eins", indonesian: "satu", example: "1" },
          { german: "zwei", indonesian: "dua", example: "2" },
          { german: "drei", indonesian: "tiga", example: "3" },
          { german: "vier", indonesian: "empat", example: "4" },
          { german: "fünf", indonesian: "lima", example: "5" },
          { german: "sechs", indonesian: "enam", example: "6" },
          { german: "sieben", indonesian: "tujuh", example: "7" },
          { german: "acht", indonesian: "delapan", example: "8" },
          { german: "neun", indonesian: "sembilan", example: "9" },
          { german: "zehn", indonesian: "sepuluh", example: "10" },
          { german: "elf", indonesian: "sebelas", example: "11" },
          { german: "zwölf", indonesian: "dua belas", example: "12" },
          { german: "zwanzig", indonesian: "dua puluh", example: "20" },
          { german: "die Uhr", indonesian: "jam", example: "Eine Uhr." },
          { german: "die Stunde", indonesian: "jam (durasi)", example: "Eine Stunde lernen." },
          { german: "der Tag", indonesian: "hari", example: "Guten Tag." },
          { german: "die Woche", indonesian: "minggu", example: "Jede Woche." },
          { german: "der Monat", indonesian: "bulan", example: "Im Monat Mai." },
          { german: "das Jahr", indonesian: "tahun", example: "Nächstes Jahr." },
          { german: "heute", indonesian: "hari ini", example: "Heute arbeite ich." },
          { german: "morgen", indonesian: "besok", example: "Morgen frei." },
          { german: "gestern", indonesian: "kemarin", example: "Gestern war Sonntag." },
        ],
        grammar: [
          {
            title: "Membaca Waktu (Uhrzeit)",
            explanation: "Resminya pakai format 24 jam. Santainya format 12 jam.\n- Resmi: 14:30 (vierzehn Uhr dreißig)\n- Santai: halb drei (setengah tiga - ingat, Jerman nyebut jam depannya!).\n- Viertel nach (lewat seperempat), Viertel vor (kurang seperempat).",
            examples: ["Es ist zehn Uhr.", "Es ist halb drei (02:30).", "Viertel nach drei (03:15)."],
          },
        ],
        dialogs: [
          {
            title: "Janji Temu",
            lines: [
              { speaker: "A", german: "Wann treffen wir uns?", indonesian: "Kapan kita ketemu?" },
              { speaker: "B", german: "Morgen um acht Uhr.", indonesian: "Besok jam delapan." },
              { speaker: "A", german: "Passt. Bis morgen!", indonesian: "Cocok. Sampai besok!" },
            ],
          },
        ],
        exercises: [
          { question: "Bahasa Jerman '20':", options: ["zwei", "zwölf", "zwanzig", "zweiundzwanzig"], correctAnswer: 2 },
          { question: "Jam 04:30 dalam bahasa sehari-hari:", options: ["Halb vier", "Halb fünf", "Vier dreißig", "Fünf halb"], correctAnswer: 1 },
          { question: "Apa arti 'gestern'?", options: ["Besok", "Lusa", "Hari ini", "Kemarin"], correctAnswer: 3 },
          { question: "Hasil dari 5 + 4 =", options: ["acht", "neun", "zehn", "elf"], correctAnswer: 1 },
          { question: "'Minggu' dalam bahasa Jerman:", options: ["der Tag", "die Woche", "das Jahr", "der Monat"], correctAnswer: 1 },
        ],
      },

      // 4. MAKANAN (Lengkap)
      {
        id: "essen",
        title: "Essen & Trinken (Makan & Minum)",
        vocabulary: [
          { german: "das Brot", indonesian: "roti", example: "Frisches Brot." },
          { german: "der Käse", indonesian: "keju", example: "Käse aus Holland." },
          { german: "die Butter", indonesian: "mentega", example: "Butter aufs Brot." },
          { german: "das Ei", indonesian: "telur", example: "Gekochtes Ei." },
          { german: "der Apfel", indonesian: "apel", example: "Roter Apfel." },
          { german: "die Banane", indonesian: "pisang", example: "Gelbe Banane." },
          { german: "die Orange", indonesian: "jeruk", example: "Saftige Orange." },
          { german: "der Reis", indonesian: "nasi", example: "Reis mit Huhn." },
          { german: "das Fleisch", indonesian: "daging", example: "Ich esse kein Fleisch." },
          { german: "der Fisch", indonesian: "ikan", example: "Frischer Fisch." },
          { german: "das Wasser", indonesian: "air", example: "Wasser ohne Gas." },
          { german: "der Kaffee", indonesian: "kopi", example: "Schwarzer Kaffee." },
          { german: "der Tee", indonesian: "teh", example: "Grüner Tee." },
          { german: "die Milch", indonesian: "susu", example: "Milch und Zucker." },
          { german: "das Bier", indonesian: "bir", example: "Ein Bier, bitte." },
          { german: "essen", indonesian: "makan", example: "Wir essen Pizza." },
          { german: "trinken", indonesian: "minum", example: "Er trinkt Wasser." },
          { german: "kochen", indonesian: "memasak", example: "Sie kocht Suppe." },
          { german: "lecker", indonesian: "enak", example: "Das ist lecker." },
        ],
        grammar: [
          {
            title: "Kasus Akkusativ (Objek Langsung)",
            explanation: "Ini poin KRUSIAL! Saat benda jadi objek (yang dimakan/diminum), artikelnya berubah.\n- DER berubah jadi DEN.\n- DIE dan DAS tetap.\nContoh: Ich esse DEN Apfel (karena Apfel itu DER). Ich esse DAS Brot (tetap).",
            examples: ["Ich habe den Apfel.", "Ich sehe den Mann.", "Ich trinke den Kaffee."],
          },
          {
            title: "Konjugasi 'essen' (Vokal berubah)",
            explanation: "Hati-hati, huruf 'e' berubah jadi 'i' untuk 'du' dan 'er/sie/es'.\n- ich esse\n- du ISST\n- er ISST\n- wir essen...",
            examples: ["Er isst Fleisch.", "Isst du Gemüse?"],
          },
        ],
        dialogs: [
          {
            title: "Sarapan",
            lines: [
              { speaker: "A", german: "Was isst du zum Frühstück?", indonesian: "Kamu makan apa pas sarapan?" },
              { speaker: "B", german: "Ich esse Brot mit Käse und trinke Kaffee.", indonesian: "Aku makan roti keju dan minum kopi." },
              { speaker: "A", german: "Lecker!", indonesian: "Enak!" },
            ],
          },
        ],
        exercises: [
          { question: "Konjugasi: Er ___ (essen) Pizza.", options: ["esst", "isst", "essen", "esse"], correctAnswer: 1 },
          { question: "Pilih artikel yang benar (Akkusativ): Ich trinke ___ (der) Tee.", options: ["der", "die", "das", "den"], correctAnswer: 3 },
          { question: "Apa arti 'das Wasser'?", options: ["Susu", "Air", "Roti", "Daging"], correctAnswer: 1 },
          { question: "Lawan kata 'lapar' (hungrig) adalah 'kenyang' (satt). Tapi 'haus' adalah...", options: ["müde", "durstig", "lecker", "krank"], correctAnswer: 1 },
          { question: "Bahasa Jerman 'Daging':", options: ["Fisch", "Brot", "Fleisch", "Reis"], correctAnswer: 2 },
          { question: "Buah berwarna kuning melengkung:", options: ["die Orange", "der Apfel", "die Banane", "die Birne"], correctAnswer: 2 },
        ],
      },

      // 5. RUMAH (Lengkap)
      {
        id: "haus",
        title: "Haus & Möbel (Rumah & Perabot)",
        vocabulary: [
          { german: "das Haus", indonesian: "rumah", example: "Altes Haus." },
          { german: "die Wohnung", indonesian: "apartemen", example: "Neue Wohnung." },
          { german: "das Zimmer", indonesian: "kamar", example: "Mein Zimmer." },
          { german: "die Küche", indonesian: "dapur", example: "Große Küche." },
          { german: "das Bad", indonesian: "kamar mandi", example: "Im Bad." },
          { german: "das Wohnzimmer", indonesian: "ruang tamu", example: "Im Wohnzimmer." },
          { german: "das Schlafzimmer", indonesian: "kamar tidur", example: "Im Schlafzimmer." },
          { german: "die Tür", indonesian: "pintu", example: "Tür auf." },
          { german: "das Fenster", indonesian: "jendela", example: "Fenster zu." },
          { german: "der Tisch", indonesian: "meja", example: "Am Tisch." },
          { german: "der Stuhl", indonesian: "kursi", example: "Auf dem Stuhl." },
          { german: "das Bett", indonesian: "kasur", example: "Im Bett." },
          { german: "der Schrank", indonesian: "lemari", example: "Im Schrank." },
          { german: "die Lampe", indonesian: "lampu", example: "Helle Lampe." },
          { german: "der Schlüssel", indonesian: "kunci", example: "Auto Schlüssel." },
        ],
        grammar: [
          {
            title: "Preposisi Lokasi 'in' (Dativ)",
            explanation: "Kalau mau bilang 'di dalam', kita pakai 'in'. Artikelnya berubah jadi Dativ.\n- der -> dem (disingkat: im)\n- das -> dem (disingkat: im)\n- die -> der\nContoh: Di dapur (die Küche -> in der Küche). Di rumah (das Haus -> im Haus).",
            examples: ["Ich bin im (in dem) Zimmer.", "Sie ist in der Küche."],
          },
        ],
        dialogs: [
          {
            title: "Dimana Kunci?",
            lines: [
              { speaker: "A", german: "Wo ist mein Schlüssel?", indonesian: "Dimana kunciku?" },
              { speaker: "B", german: "Er liegt auf dem Tisch.", indonesian: "Ada di atas meja." },
            ],
          },
        ],
        exercises: [
          { question: "Bahasa Jerman 'Dapur':", options: ["das Bad", "die Küche", "der Flur", "das Dach"], correctAnswer: 1 },
          { question: "Kalau kamu mandi, kamu ada di...", options: ["im Bad", "in der Küche", "im Bett", "im Garten"], correctAnswer: 0 },
          { question: "'Jendela' bahasa Jermannya...", options: ["die Tür", "die Wand", "das Fenster", "der Boden"], correctAnswer: 2 },
          { question: "Apa arti 'der Stuhl'?", options: ["Meja", "Kursi", "Lemari", "Lampu"], correctAnswer: 1 },
          { question: "Terjemahkan: 'Di kamar tidur'", options: ["In Schlafzimmer", "Im Schlafzimmer", "Der Schlafzimmer", "Das Schlafzimmer"], correctAnswer: 1 },
        ],
      },

      // 6. PAKAIAN (BARU & LENGKAP)
      {
        id: "kleidung",
        title: "Kleidung (Pakaian)",
        vocabulary: [
          { german: "die Kleidung", indonesian: "pakaian", example: "Schöne Kleidung." },
          { german: "die Hose", indonesian: "celana panjang", example: "Blaue Hose." },
          { german: "das Hemd", indonesian: "kemeja", example: "Weißes Hemd." },
          { german: "das T-Shirt", indonesian: "kaos", example: "Cooles T-Shirt." },
          { german: "die Jacke", indonesian: "jaket", example: "Warme Jacke." },
          { german: "der Mantel", indonesian: "mantel", example: "Langer Mantel." },
          { german: "das Kleid", indonesian: "gaun", example: "Rotes Kleid." },
          { german: "der Rock", indonesian: "rok", example: "Kurzer Rock." },
          { german: "der Schuh", indonesian: "sepatu", example: "Neue Schuhe (Pl)." },
          { german: "die Socken", indonesian: "kaos kaki", example: "Bunte Socken." },
          { german: "der Hut", indonesian: "topi", example: "Alter Hut." },
          { german: "tragen", indonesian: "memakai/membawa", example: "Ich trage eine Jacke." },
          { german: "anziehen", indonesian: "mengenakan", example: "Zieh dich an!" },
          { german: "ausziehen", indonesian: "melepas pakaian", example: "Zieh die Schuhe aus." },
        ],
        grammar: [
          {
            title: "Kata Kerja Terpisah (Trennbare Verben)",
            explanation: "Ini unik! Kata kerja seperti 'anziehen' (memakai) kalau dipakai kalimat, 'an'-nya pindah ke BELAKANG kalimat.\n- Ich ziehe die Jacke AN.\n- Du ziehst die Schuhe AUS.",
            examples: ["Ich ziehe das Hemd an.", "Wir ziehen die Hose an."],
          },
          {
            title: "Warna & Akhiran Adjektiva (Intro)",
            explanation: "Kalau sifat (merah, biru) ada sebelum benda, dia dapet buntut.\n- Rote Hose (karena die Hose)\n- Ein roter Apfel (karena der Apfel)\nTapi untuk A1, cukup hafal: rot, blau, grün, schwarz, weiß, gelb.",
            examples: ["Das Hemd ist weiß.", "Die Hose ist blau."],
          },
        ],
        dialogs: [
          {
            title: "Belanja Baju",
            lines: [
              { speaker: "Verkäufer", german: "Kann ich helfen?", indonesian: "Bisa saya bantu?" },
              { speaker: "Kunde", german: "Ich suche eine Hose.", indonesian: "Saya cari celana panjang." },
              { speaker: "Verkäufer", german: "Welche Farbe?", indonesian: "Warna apa?" },
              { speaker: "Kunde", german: "Schwarz, bitte.", indonesian: "Hitam." },
            ],
          },
        ],
        exercises: [
          { question: "Bahasa Jerman 'Sepatu':", options: ["die Hose", "der Schuh", "das Hemd", "der Hut"], correctAnswer: 1 },
          { question: "Lengkapi kalimat: 'Ich ziehe die Jacke ___ (an).'", options: ["auf", "an", "aus", "ein"], correctAnswer: 1 },
          { question: "Apa arti 'das Kleid'?", options: ["Kemeja", "Rok", "Gaun", "Celana"], correctAnswer: 2 },
          { question: "Kata kerja 'tragen' (memakai) untuk 'du':", options: ["tragst", "trägst", "tragt", "trage"], correctAnswer: 1 },
          { question: "Lawan kata 'hitam' (schwarz) adalah...", options: ["weiß", "rot", "grün", "gelb"], correctAnswer: 0 },
        ],
      },

      // 7. SEKOLAH & KANTOR (BARU & LENGKAP)
      {
        id: "schule_buero",
        title: "Schule & Büro (Sekolah & Kantor)",
        vocabulary: [
          { german: "das Buch", indonesian: "buku", example: "Ich lese das Buch." },
          { german: "das Heft", indonesian: "buku tulis", example: "Schreib ins Heft." },
          { german: "der Stift", indonesian: "pulpen/pensil", example: "Hast du einen Stift?" },
          { german: "das Papier", indonesian: "kertas", example: "Ein Blatt Papier." },
          { german: "die Tasche", indonesian: "tas", example: "Meine Tasche ist schwer." },
          { german: "der Lehrer", indonesian: "guru (lk)", example: "Der Lehrer spricht." },
          { german: "die Lehrerin", indonesian: "guru (pr)", example: "Die Lehrerin erklärt." },
          { german: "der Schüler", indonesian: "murid", example: "Der Schüler lernt." },
          { german: "lernen", indonesian: "belajar", example: "Wir lernen Deutsch." },
          { german: "schreiben", indonesian: "menulis", example: "Er schreibt gut." },
          { german: "lesen", indonesian: "membaca", example: "Sie liest viel." },
          { german: "fragen", indonesian: "bertanya", example: "Darf ich fragen?" },
          { german: "antworten", indonesian: "menjawab", example: "Antworte mir!" },
          { german: "verstehen", indonesian: "mengerti", example: "Ich verstehe nicht." },
        ],
        grammar: [
          {
            title: "Kalimat Perintah (Imperativ)",
            explanation: "Menyuruh orang. Subjek 'du' hilang.\n- Du machst -> Mach!\n- Du schreibst -> Schreib!\n- Du liest -> Lies! (Vokal berubah)\nUntuk sopan pakai 'Sie': Schreiben Sie bitte!",
            examples: ["Lies das Buch!", "Komm hierher!", "Hör zu!"],
          },
          {
            title: "Modal 'können' (Bisa)",
            explanation: "Menyatakan kemampuan.\n- ich kann\n- du kannst\n- er kann\n- wir können...",
            examples: ["Ich kann lesen.", "Kannst du mir helfen?"],
          },
        ],
        dialogs: [
          {
            title: "Di Kelas",
            lines: [
              { speaker: "Lehrer", german: "Macht die Bücher auf!", indonesian: "Buka buku kalian!" },
              { speaker: "Schüler", german: "Welche Seite?", indonesian: "Halaman berapa?" },
              { speaker: "Lehrer", german: "Seite zehn. Lest den Text.", indonesian: "Halaman sepuluh. Baca teksnya." },
            ],
          },
        ],
        exercises: [
          { question: "Bahasa Jerman 'Buku':", options: ["das Heft", "das Buch", "der Stift", "der Tisch"], correctAnswer: 1 },
          { question: "Konjugasi 'lesen' untuk 'du':", options: ["lest", "lies", "liest", "lese"], correctAnswer: 2 },
          { question: "Apa arti 'verstehen'?", options: ["Berbicara", "Menulis", "Mengerti", "Bertanya"], correctAnswer: 2 },
          { question: "'Ich kann nicht...' artinya:", options: ["Saya tidak mau", "Saya tidak bisa", "Saya tidak boleh", "Saya tidak harus"], correctAnswer: 1 },
          { question: "Lawan kata 'fragen' (bertanya):", options: ["sagen", "antworten", "hören", "sehen"], correctAnswer: 1 },
        ],
      },

      // 8. TRANSPORTASI & ALAM (BARU & LENGKAP)
      {
        id: "verkehr_natur",
        title: "Verkehr & Natur (Transportasi & Alam)",
        vocabulary: [
          { german: "das Auto", indonesian: "mobil", example: "Schnelles Auto." },
          { german: "der Bus", indonesian: "bis", example: "Der Bus kommt." },
          { german: "der Zug", indonesian: "kereta api", example: "Ich fahre Zug." },
          { german: "das Fahrrad", indonesian: "sepeda", example: "Mein Fahrrad ist kaputt." },
          { german: "das Flugzeug", indonesian: "pesawat", example: "Das Flugzeug fliegt." },
          { german: "das Taxi", indonesian: "taksi", example: "Ein Taxi rufen." },
          { german: "die Straße", indonesian: "jalan", example: "Auf der Straße." },
          { german: "die Stadt", indonesian: "kota", example: "Große Stadt." },
          { german: "das Land", indonesian: "negara/desa", example: "Schönes Land." },
          { german: "fahren", indonesian: "mengendarai/naik (darat)", example: "Ich fahre Auto." },
          { german: "fliegen", indonesian: "terbang", example: "Wir fliegen nach Bali." },
          { german: "der Baum", indonesian: "pohon", example: "Grüner Baum." },
          { german: "die Blume", indonesian: "bunga", example: "Bunte Blume." },
          { german: "die Sonne", indonesian: "matahari", example: "Die Sonne scheint." },
          { german: "der Regen", indonesian: "hujan", example: "Es regnet." },
        ],
        grammar: [
          {
            title: "Verben 'fahren' (Vokal berubah)",
            explanation: "Sama kayak 'essen', 'fahren' juga berubah vokalnya (a -> ä).\n- ich fahre\n- du fährst\n- er fährt\n- wir fahren",
            examples: ["Fährst du gern Rad?", "Der Zug fährt ab."],
          },
          {
            title: "Preposisi 'mit' (dengan/naik)",
            explanation: "Kalau naik kendaraan, pakai 'mit' + Dativ.\n- mit DEM Auto (naik mobil)\n- mit DEM Bus (naik bis)\n- mit DER Bahn (naik kereta)",
            examples: ["Ich fahre mit dem Bus.", "Er kommt mit dem Auto."],
          },
        ],
        dialogs: [
          {
            title: "Mau kemana?",
            lines: [
              { speaker: "A", german: "Wohin fährst du?", indonesian: "Kamu pergi (naik kendaraan) kemana?" },
              { speaker: "B", german: "Ich fahre in die Stadt.", indonesian: "Aku ke kota." },
              { speaker: "A", german: "Fährst du mit dem Bus?", indonesian: "Naik bis?" },
              { speaker: "B", german: "Nein, mit dem Auto.", indonesian: "Bukan, naik mobil." },
            ],
          },
        ],
        exercises: [
          { question: "Bahasa Jerman 'Kereta Api':", options: ["das Auto", "der Zug", "das Rad", "das Boot"], correctAnswer: 1 },
          { question: "Konjugasi: Du ___ (fahren) schnell.", options: ["fahrst", "fährst", "fahrt", "fahre"], correctAnswer: 1 },
          { question: "Apa arti 'das Fahrrad'?", options: ["Motor", "Sepeda", "Mobil", "Truk"], correctAnswer: 1 },
          { question: "Kalau hujan, turunlah...", options: ["die Sonne", "der Mond", "der Regen", "der Stern"], correctAnswer: 2 },
          { question: "Lengkapi: 'Ich fahre ___ (naik) dem Bus.'", options: ["in", "auf", "mit", "zu"], correctAnswer: 2 },
        ],
      },

      // 9. TUBUH & KESEHATAN (Lengkap)
      {
        id: "koerper",
        title: "Körper & Gesundheit (Tubuh & Kesehatan)",
        vocabulary: [
          { german: "der Kopf", indonesian: "kepala", example: "Kopf hoch!" },
          { german: "das Auge", indonesian: "mata", example: "Blaue Augen." },
          { german: "die Nase", indonesian: "hidung", example: "Kleine Nase." },
          { german: "der Mund", indonesian: "mulut", example: "Mund zu." },
          { german: "das Ohr", indonesian: "telinga", example: "Offenes Ohr." },
          { german: "die Hand", indonesian: "tangan", example: "Kalte Hände." },
          { german: "der Fuß", indonesian: "kaki", example: "Große Füße." },
          { german: "der Bauch", indonesian: "perut", example: "Dicker Bauch." },
          { german: "der Rücken", indonesian: "punggung", example: "Gerader Rücken." },
          { german: "das Herz", indonesian: "jantung", example: "Gutes Herz." },
          { german: "krank", indonesian: "sakit", example: "Ich bin krank." },
          { german: "gesund", indonesian: "sehat", example: "Bleib gesund." },
          { german: "der Arzt", indonesian: "dokter", example: "Termin beim Arzt." },
          { german: "Schmerzen", indonesian: "rasa sakit", example: "Ich habe Schmerzen." },
        ],
        grammar: [
          {
            title: "Ungkapan Rasa Sakit (weh tun)",
            explanation: "Cara bilang sakit: [Bagian Tubuh] + tut weh.\n- Der Kopf tut weh (Kepalaku sakit).\n- Die Füße tun weh (Kakiku sakit - jamak pakai 'tun').\nAtau pakai 'Ich habe [Bagian]schmerzen'.\n- Ich habe Kopfschmerzen.",
            examples: ["Mein Bauch tut weh.", "Ich habe Zahnschmerzen (sakit gigi)."],
          },
          {
            title: "Modal 'müssen' (Harus)",
            explanation: "Kewajiban.\n- ich muss\n- du musst\n- er muss\n- wir müssen",
            examples: ["Ich muss zum Arzt.", "Du musst schlafen."],
          },
        ],
        dialogs: [
          {
            title: "Di Dokter",
            lines: [
              { speaker: "Arzt", german: "Was fehlt Ihnen?", indonesian: "Apa keluhan Anda?" },
              { speaker: "Patient", german: "Ich habe Kopfschmerzen und Fieber.", indonesian: "Saya sakit kepala dan demam." },
              { speaker: "Arzt", german: "Sie müssen viel Wasser trinken.", indonesian: "Anda harus minum banyak air." },
            ],
          },
        ],
        exercises: [
          { question: "Bahasa Jerman 'Mata':", options: ["die Nase", "das Auge", "der Mund", "das Ohr"], correctAnswer: 1 },
          { question: "Bentuk jamak dari 'Hand' adalah...", options: ["Hande", "Hände", "Handen", "Händer"], correctAnswer: 1 },
          { question: "'Mein Kopf tut weh' artinya:", options: ["Kepalaku besar", "Kepalaku sakit", "Kepalaku gatal", "Kepalaku pusing"], correctAnswer: 1 },
          { question: "Lawan kata 'krank' (sakit):", options: ["müde", "gesund", "tot", "fit"], correctAnswer: 1 },
          { question: "Konjugasi 'müssen' untuk 'ich':", options: ["muss", "musst", "müssen", "müsst"], correctAnswer: 0 },
        ],
      },
      // 10. HEWAN (Tambahan Wajib)
      {
        id: "tiere",
        title: "Tiere (Hewan)",
        vocabulary: [
          { german: "der Hund", indonesian: "anjing", example: "Der Hund bellt." },
          { german: "die Katze", indonesian: "kucing", example: "Die Katze schläft." },
          { german: "die Maus", indonesian: "tikus", example: "Die Maus ist klein." },
          { german: "der Vogel", indonesian: "burung", example: "Der Vogel singt." },
          { german: "der Fisch", indonesian: "ikan", example: "Der Fisch schwimmt." },
          { german: "das Pferd", indonesian: "kuda", example: "Ich reite gern." },
          { german: "die Kuh", indonesian: "sapi", example: "Die Kuh gibt Milch." },
          { german: "das Schwein", indonesian: "babi", example: "Das Schwein ist rosa." },
          { german: "das Huhn", indonesian: "ayam", example: "Das Huhn legt Eier." },
          { german: "das Kaninchen", indonesian: "kelinci", example: "Das Kaninchen frisst Karotten." },
          { german: "das Schaf", indonesian: "domba", example: "Wolle vom Schaf." },
          { german: "die Ziege", indonesian: "kambing", example: "Die Ziege meckert." },
          { german: "die Ente", indonesian: "bebek", example: "Die Ente schwimmt im See." },
        ],
        grammar: [
          {
            title: "Diminutif (Pengecilan)",
            explanation: "Di Jerman, hewan kecil sering berakhiran '-chen' dan artikelnya SELALU 'das'.\n- das Kaninchen (Kelinci)\n- das Hühnchen (Ayam kecil)",
            examples: ["Das Kätzchen (anak kucing)", "Das Häschen (kelinci kecil)"],
          },
        ],
        dialogs: [
          {
            title: "Di Peternakan",
            lines: [
              { speaker: "Kind", german: "Guck mal, eine Kuh!", indonesian: "Lihat, ada sapi!" },
              { speaker: "Vater", german: "Ja, und dort ist ein Pferd.", indonesian: "Ya, dan di sana ada kuda." },
            ],
          },
        ],
        exercises: [
          { question: "Bahasa Jerman 'Anjing':", options: ["die Katze", "der Hund", "der Wolf", "das Tier"], correctAnswer: 1 },
          { question: "Hewan apa yang 'memberi susu' (gibt Milch)?", options: ["das Pferd", "der Vogel", "die Kuh", "der Fisch"], correctAnswer: 2 },
          { question: "Apa arti 'das Schwein'?", options: ["Sapi", "Babi", "Kuda", "Ayam"], correctAnswer: 1 },
          { question: "Hewan kecil 'tikus' bahasa Jermannya...", options: ["die Maus", "die Ratte", "der Hamster", "das Tier"], correctAnswer: 0 },
        ],
      },

      // 11. PERALATAN & TEKNOLOGI (Tambahan Terakhir)
      {
        id: "technik_geschirr",
        title: "Technik & Haushalt (Teknologi & Rumah Tangga)",
        vocabulary: [
          { german: "der Teller", indonesian: "piring", example: "Ein leerer Teller." },
          { german: "das Glas", indonesian: "gelas", example: "Ein Glas Wasser." },
          { german: "die Tasse", indonesian: "cangkir", example: "Eine Tasse Kaffee." },
          { german: "der Löffel", indonesian: "sendok", example: "Suppe mit dem Löffel." },
          { german: "die Gabel", indonesian: "garpu", example: "Messer und Gabel." },
          { german: "das Messer", indonesian: "pisau", example: "Scharfes Messer." },
          { german: "die Flasche", indonesian: "botol", example: "Eine Flasche Cola." },
          { german: "das Telefon", indonesian: "telepon", example: "Das Telefon klingelt." },
          { german: "das Handy", indonesian: "HP/Ponsel", example: "Mein Handy ist neu." },
          { german: "der Computer", indonesian: "komputer", example: "Ich arbeite am Computer." },
          { german: "der Fernseher", indonesian: "televisi", example: "Der Fernseher ist an." },
          { german: "benutzen", indonesian: "menggunakan", example: "Ich benutze das Internet." },
        ],
        grammar: [
          {
            title: "Kata Kerja 'benutzen' (Menggunakan)",
            explanation: "Sangat berguna untuk alat. Pola regular.\n- ich benutze\n- du benutzt\n- er benutzt...",
            examples: ["Ich benutze mein Handy.", "Benutzt du den Computer?"],
          },
        ],
        dialogs: [
          {
            title: "Makan Malam",
            lines: [
              { speaker: "A", german: "Ich brauche einen Löffel.", indonesian: "Aku butuh sendok." },
              { speaker: "B", german: "Hier ist einer. Und dein Glas?", indonesian: "Ini ada satu. Dan gelasmu?" },
              { speaker: "A", german: "Das Glas ist leer.", indonesian: "Gelasnya kosong." },
            ],
          },
        ],
        exercises: [
          { question: "Alat untuk minum kopi:", options: ["der Teller", "die Tasse", "das Messer", "die Gabel"], correctAnswer: 1 },
          { question: "Bahasa Jerman 'HP':", options: ["das Telefon", "der Computer", "das Handy", "der Fernseher"], correctAnswer: 2 },
          { question: "Pasangan 'die Gabel' adalah...", options: ["der Löffel", "das Messer", "der Teller", "die Flasche"], correctAnswer: 1 },
          { question: "Apa arti 'der Fernseher'?", options: ["Kulkas", "Radio", "Televisi", "Laptop"], correctAnswer: 2 },
          { question: "Konjugasi: Wir ___ (benutzen) den Computer.", options: ["benutzt", "benutze", "benutzen", "benutzst"], correctAnswer: 2 },
        ],
      },
    ],
  },
  {
    id: "A2",
    title: "A2 - Dasar Lanjutan (Elementary)",
    description: "Penguasaan total A2: Struktur kalimat kompleks, masa lampau, emosi, dan kehidupan profesional.",
    subSections: [
      // 1. BELANJA & FASHION (Focus: Adjektivdeklination)
      {
        id: "einkaufen_mode",
        title: "Einkaufen & Mode (Belanja & Fashion)",
        vocabulary: [
          { german: "das Geschäft", indonesian: "toko", example: "Das Geschäft ist offen." },
          { german: "die Kleidung", indonesian: "pakaian", example: "Moderne Kleidung." },
          { german: "teuer", indonesian: "mahal", example: "Zu teuer für mich." },
          { german: "billig", indonesian: "murah", example: "Das ist ein Schnäppchen." },
          { german: "die Kasse", indonesian: "kasir", example: "Zahlen an der Kasse." },
          { german: "die Hose", indonesian: "celana", example: "Die Hose passt nicht." },
          { german: "der Pullover", indonesian: "sweater", example: "Ein warmer Pullover." },
          { german: "anprobieren", indonesian: "mencoba (baju)", example: "Darf ich das anprobieren?" },
          { german: "die Größe", indonesian: "ukuran", example: "Welche Größe haben Sie?" },
          { german: "passen", indonesian: "pas/muat", example: "Es passt mir gut." },
          { german: "stehen", indonesian: "cocok (dipandang)", example: "Die Farbe steht dir." },
          { german: "der Rabatt", indonesian: "diskon", example: "Gibt es einen Rabatt?" },
        ],
        grammar: [
          {
            title: "Adjektivdeklination (Akhiran Kata Sifat)",
            explanation: "Di A2, kata sifat sebelum benda berubah akhiran (terutama Akkusatif).\n- Maskulin: Ich kaufe den neuEN Pullover.\n- Feminin: Ich suche eine rotE Hose.\n- Neutral: Ich möchte ein blauES Hemd.\n- Plural: Ich mag schwarzE Schuhe.",
            examples: ["Ich trage einen warmen Mantel.", "Hast du eine neue Brille?"],
          },
        ],
        dialogs: [
          {
            title: "Mencari Ukuran",
            lines: [
              { speaker: "Kunde", german: "Haben Sie diesen Pullover in Rot?", indonesian: "Punya sweater ini warna merah?" },
              { speaker: "Verkäufer", german: "Ja, welche Größe brauchen Sie?", indonesian: "Ya, butuh ukuran apa?" },
              { speaker: "Kunde", german: "Größe L. Der blaue Pullover ist zu klein.", indonesian: "Ukuran L. Sweater birunya kekecilan." },
            ],
          },
        ],
        exercises: [
          { question: "Lawan kata 'teuer' (mahal):", options: ["groß", "billig", "klein", "neu"], correctAnswer: 1 },
          { question: "Tempat membayar di toko:", options: ["die Kasse", "das Regal", "der Eingang", "die Toilette"], correctAnswer: 0 },
          { question: "Adjektivdeklination (Akkusatif Maskulin): Ich kaufe den ___ Mantel.", options: ["schwarze", "schwarzen", "schwarzes", "schwarzer"], correctAnswer: 1 },
          { question: "Kata kerja 'mencoba pakaian':", options: ["probieren", "anprobieren", "studieren", "tragen"], correctAnswer: 1 },
          { question: "Apa arti 'stehen' dalam konteks baju?", options: ["Berdiri", "Cocok/Pantas", "Mahal", "Kekecilan"], correctAnswer: 1 },
          { question: "Lengkapi: Die Hose ___ (pas) mir nicht.", options: ["passt", "steht", "gefällt", "gehört"], correctAnswer: 0 },
          { question: "Apa bahasa Jerman 'Diskon'?", options: ["der Preis", "der Rabatt", "die Rechnung", "das Geld"], correctAnswer: 1 },
          { question: "Adjektivdeklination (Akkusatif Netral): Ein ___ Hemd.", options: ["neues", "neuen", "neue", "neuem"], correctAnswer: 0 },
        ],
      },

      // 2. RUMAH & LOKASI (Focus: Wechselpräpositionen)
      {
        id: "wohnen_ort",
        title: "Wohnen & Ort (Rumah & Lokasi)",
        vocabulary: [
          { german: "der Kühlschrank", indonesian: "kulkas", example: "Milch im Kühlschrank." },
          { german: "der Herd", indonesian: "kompor", example: "Vorsicht, heißer Herd!" },
          { german: "die Spülmaschine", indonesian: "mesin cuci piring", example: "Geschirr spülen." },
          { german: "der Mülleimer", indonesian: "tempat sampah", example: "Müll rausbringen." },
          { german: "die Wand", indonesian: "dinding", example: "An der Wand." },
          { german: "der Boden", indonesian: "lantai", example: "Auf dem Boden." },
          { german: "der Teppich", indonesian: "karpet", example: "Der Teppich ist weich." },
          { german: "das Regal", indonesian: "rak", example: "Bücher im Regal." },
          { german: "hängen", indonesian: "menggantung", example: "Das Bild hängt." },
          { german: "liegen", indonesian: "tergeletak", example: "Das Buch liegt da." },
          { german: "stehen", indonesian: "berdiri/tegak", example: "Die Flasche steht." },
          { german: "aufräumen", indonesian: "membereskan", example: "Zimmer aufräumen." },
        ],
        grammar: [
          {
            title: "Wechselpräpositionen (Preposisi Dua Arah - Dativ)",
            explanation: "Menjelaskan POSISI benda yang diam (Wo? = Di mana?). Gunakan Dativ.\n- Der Tisch -> an DEM Tisch.\n- Die Wand -> an DER Wand.\n- Das Bett -> in DEM (im) Bett.",
            examples: ["Das Bild hängt an der Wand.", "Der Teppich liegt auf dem Boden."],
          },
        ],
        dialogs: [
          {
            title: "Barang Hilang",
            lines: [
              { speaker: "A", german: "Wo ist meine Brille?", indonesian: "Dimana kacamata aku?" },
              { speaker: "B", german: "Sie liegt auf dem Tisch im Wohnzimmer.", indonesian: "Ada di atas meja di ruang tamu." },
              { speaker: "A", german: "Nein, da liegt nur eine Zeitung.", indonesian: "Enggak, cuma ada koran di situ." },
            ],
          },
        ],
        exercises: [
          { question: "Preposisi Dativ: Susu ada DI DALAM kulkas (in ___ Kühlschrank).", options: ["dem (im)", "den", "der", "die"], correctAnswer: 0 },
          { question: "Alat untuk membersihkan karpet/lantai:", options: ["der Staubsauger", "der Herd", "der Ofen", "die Lampe"], correctAnswer: 0 },
          { question: "Apa arti 'liegen'?", options: ["Berdiri", "Tergeletak/Berbaring", "Duduk", "Jalan"], correctAnswer: 1 },
          { question: "Preposisi: Lampu menggantung DI ATAS meja (über ___ Tisch).", options: ["dem", "den", "der", "des"], correctAnswer: 0 },
          { question: "Bahasa Jerman 'Dinding':", options: ["der Boden", "die Decke", "die Wand", "das Fenster"], correctAnswer: 2 },
          { question: "Lengkapi: Das Buch steht ___ (di) Regal.", options: ["im", "am", "auf", "unter"], correctAnswer: 0 },
          { question: "Kata kerja 'membereskan rumah':", options: ["putzen", "kochen", "aufräumen", "schlafen"], correctAnswer: 2 },
          { question: "Lawan kata 'di atas' (auf/über) adalah 'di bawah' (__).", options: ["unter", "hinter", "neben", "zwischen"], correctAnswer: 0 },
        ],
      },

      // 3. KULINER & RESTORAN (Focus: Mögen/Schmecken)
      {
        id: "essen_trinken",
        title: "Essen & Trinken (Kuliner)",
        vocabulary: [
          { german: "das Rindfleisch", indonesian: "daging sapi", example: "Steak vom Rind." },
          { german: "das Hähnchen", indonesian: "ayam", example: "Brathähnchen." },
          { german: "die Kartoffel", indonesian: "kentang", example: "Kartoffelbrei." },
          { german: "die Zwiebel", indonesian: "bawang", example: "Zwiebeln schneiden." },
          { german: "der Salat", indonesian: "salad", example: "Frischer Salat." },
          { german: "die Suppe", indonesian: "sup", example: "Heiße Suppe." },
          { german: "bestellen", indonesian: "memesan", example: "Essen bestellen." },
          { german: "schmecken", indonesian: "rasanya", example: "Es schmeckt gut." },
          { german: "die Rechnung", indonesian: "tagihan/bon", example: "Die Rechnung bitte." },
          { german: "das Trinkgeld", indonesian: "tip", example: "Hier ist Trinkgeld." },
          { german: "satt", indonesian: "kenyang", example: "Ich bin satt." },
          { german: "durstig", indonesian: "haus", example: "Ich bin durstig." },
        ],
        grammar: [
          {
            title: "Mögen vs. Gern",
            explanation: "- Mögen (Kata kerja): Ich mag Pizza (Aku suka pizza - untuk benda).\n- Gern (Adverb): Ich esse gern Pizza (Aku suka makan pizza - untuk kegiatan).",
            examples: ["Ich mag dich.", "Ich schwimme gern."],
          },
        ],
        dialogs: [
          {
            title: "Bayar Makanan",
            lines: [
              { speaker: "Gast", german: "Die Rechnung, bitte.", indonesian: "Minta bonnya." },
              { speaker: "Kellner", german: "Zusammen oder getrennt?", indonesian: "Gabung atau pisah?" },
              { speaker: "Gast", german: "Zusammen. Hier sind 20 Euro. Stimmt so.", indonesian: "Gabung. Ini 20 Euro. Kembaliannya ambil saja." },
            ],
          },
        ],
        exercises: [
          { question: "Bahasa Jerman 'Daging Sapi':", options: ["das Schwein", "das Rindfleisch", "der Fisch", "das Lamm"], correctAnswer: 1 },
          { question: "Saya suka kopi (Benda): Ich ___ Kaffee.", options: ["mag", "gerne", "will", "kann"], correctAnswer: 0 },
          { question: "Saya suka minum kopi (Kegiatan): Ich trinke ___ Kaffee.", options: ["mag", "gern", "will", "gut"], correctAnswer: 1 },
          { question: "Lawan kata 'lapar' (hungrig) adalah...", options: ["durstig", "müde", "satt", "voll"], correctAnswer: 2 },
          { question: "Apa arti 'Die Rechnung bitte'?", options: ["Minta menu", "Minta bon", "Minta air", "Minta garpu"], correctAnswer: 1 },
          { question: "Uang ekstra untuk pelayan:", options: ["das Spielgeld", "das Trinkgeld", "das Lehrgeld", "das Papiergeld"], correctAnswer: 1 },
          { question: "Kata kerja 'memesan':", options: ["bestellen", "stellen", "bezahlen", "kaufen"], correctAnswer: 0 },
          { question: "Rasa makanan enak: Es ___ gut.", options: ["hört", "schmeckt", "riecht", "fühlt"], correctAnswer: 1 },
        ],
      },

      // 4. TRANSPORT & KOTA (Focus: Trennbare Verben)
      {
        id: "stadt_verkehr",
        title: "Stadt & Verkehr (Kota & Transport)",
        vocabulary: [
          { german: "der Zug", indonesian: "kereta api", example: "Zug fahren." },
          { german: "die U-Bahn", indonesian: "kereta bawah tanah", example: "Station U-Bahn." },
          { german: "der Bus", indonesian: "bus", example: "Buslinie 5." },
          { german: "die Haltestelle", indonesian: "halte", example: "An der Haltestelle." },
          { german: "der Bahnhof", indonesian: "stasiun", example: "Hauptbahnhof." },
          { german: "abfahren", indonesian: "berangkat", example: "Der Zug fährt ab." },
          { german: "ankommen", indonesian: "tiba", example: "Wir kommen an." },
          { german: "umsteigen", indonesian: "ganti kendaraan", example: "Bitte umsteigen." },
          { german: "einsteigen", indonesian: "naik (masuk)", example: "Schnell einsteigen." },
          { german: "aussteigen", indonesian: "turun (keluar)", example: "Hier aussteigen." },
          { german: "die Post", indonesian: "kantor pos", example: "Zur Post gehen." },
          { german: "die Apotheke", indonesian: "apotek", example: "Medikamente holen." },
        ],
        grammar: [
          {
            title: "Trennbare Verben (Kata Kerja Terpisah)",
            explanation: "Awalan pindah ke belakang.\n- abfahren -> Der Bus fährt ... ab.\n- ankommen -> Der Zug kommt ... an.\n- einsteigen -> Er steigt ... ein.",
            examples: ["Ich steige hier aus.", "Wann fängt der Film an?"],
          },
        ],
        dialogs: [
          {
            title: "Info Perjalanan",
            lines: [
              { speaker: "A", german: "Entschuldigung, hält der Bus am Bahnhof?", indonesian: "Permisi, bisnya berhenti di stasiun?" },
              { speaker: "B", german: "Nein, Sie müssen an der Kirche umsteigen.", indonesian: "Enggak, Anda harus ganti bis di gereja." },
              { speaker: "A", german: "Danke schön!", indonesian: "Terima kasih!" },
            ],
          },
        ],
        exercises: [
          { question: "Lawan kata 'abfahren' (berangkat):", options: ["ankommen", "umsteigen", "einsteigen", "fliegen"], correctAnswer: 0 },
          { question: "Kata kerja terpisah: Der Zug ___ um 8 Uhr ___.", options: ["fährt/ab", "ab/fährt", "fahren/ab", "ab/fahren"], correctAnswer: 0 },
          { question: "Tempat menunggu kereta:", options: ["der Flughafen", "der Bahnhof", "der Hafen", "die Tankstelle"], correctAnswer: 1 },
          { question: "Apa arti 'umsteigen'?", options: ["Naik", "Turun", "Ganti kendaraan", "Jalan kaki"], correctAnswer: 2 },
          { question: "Tempat membeli obat:", options: ["die Post", "die Bank", "die Apotheke", "die Schule"], correctAnswer: 2 },
          { question: "Lengkapi: Ich steige in den Bus ___ (naik/masuk).", options: ["aus", "ein", "um", "auf"], correctAnswer: 1 },
          { question: "Preposisi: Saya pergi KE bank -> Ich gehe ___ Bank.", options: ["zur", "zum", "nach", "in"], correctAnswer: 0 },
          { question: "Kendaraan di bawah tanah:", options: ["das Flugzeug", "die U-Bahn", "das Schiff", "das Fahrrad"], correctAnswer: 1 },
        ],
      },

      // 5. KESEHATAN & TUBUH (Focus: Modalverb Sollen)
      {
        id: "gesundheit",
        title: "Gesundheit (Kesehatan)",
        vocabulary: [
          { german: "der Kopfschmerz", indonesian: "sakit kepala", example: "Aspirin nehmen." },
          { german: "das Fieber", indonesian: "demam", example: "Er hat Fieber." },
          { german: "der Husten", indonesian: "batuk", example: "Hustensaft." },
          { german: "der Bauch", indonesian: "perut", example: "Bauchweh." },
          { german: "das Medikament", indonesian: "obat", example: "Medikamente kaufen." },
          { german: "die Tablette", indonesian: "pil", example: "Tablette schlucken." },
          { german: "der Termin", indonesian: "janji temu", example: "Termin vereinbaren." },
          { german: "untersuchen", indonesian: "memeriksa", example: "Arzt untersucht." },
          { german: "weh tun", indonesian: "sakit (kata kerja)", example: "Mein Arm tut weh." },
          { german: "die Praxis", indonesian: "praktek dokter", example: "In der Praxis." },
          { german: "krank", indonesian: "sakit (adj)", example: "Ich bin krank." },
          { german: "gesund", indonesian: "sehat", example: "Bleib gesund!" },
        ],
        grammar: [
          {
            title: "Modalverb 'sollen' (Saran)",
            explanation: "Untuk nasihat dokter atau orang lain.\n- Du sollst im Bett bleiben (Kamu sebaiknya di kasur).\n- Sie sollen viel Wasser trinken.",
            examples: ["Was soll ich tun?"],
          },
        ],
        dialogs: [
          {
            title: "Sakit",
            lines: [
              { speaker: "A", german: "Was fehlt Ihnen?", indonesian: "Apa keluhan Anda?" },
              { speaker: "B", german: "Mein Hals tut weh und ich habe Fieber.", indonesian: "Leher saya sakit dan saya demam." },
              { speaker: "A", german: "Sie sollen Tee trinken und wenig sprechen.", indonesian: "Anda sebaiknya minum teh dan sedikit bicara." },
            ],
          },
        ],
        exercises: [
          { question: "Bahasa Jerman 'Sakit perut':", options: ["Kopfschmerzen", "Bauchschmerzen", "Halsschmerzen", "Fieber"], correctAnswer: 1 },
          { question: "Saran dokter: Sie ___ (sebaiknya) di rumah.", options: ["sollen", "müssen", "dürfen", "können"], correctAnswer: 0 },
          { question: "Apa arti 'weh tun'?", options: ["Menyakitkan/Sakit", "Melakukan", "Bekerja", "Bermain"], correctAnswer: 0 },
          { question: "Benda 'Pil/Tablet':", options: ["die Tafel", "die Tabelle", "die Tablette", "das Tablett"], correctAnswer: 2 },
          { question: "Lawan kata 'krank':", options: ["müde", "gesund", "tot", "falsch"], correctAnswer: 1 },
          { question: "Apa arti 'der Termin'?", options: ["Akhir", "Batas waktu", "Janji temu", "Jam"], correctAnswer: 2 },
          { question: "Konjugasi 'sollen' (du):", options: ["sollst", "soll", "sollt", "sollen"], correctAnswer: 0 },
          { question: "Tempat dokter bekerja:", options: ["die Praxis", "das Büro", "die Fabrik", "der Laden"], correctAnswer: 0 },
        ],
      },

      // 6. KERJA & PEKERJAAN (Focus: Perfekt)
      {
        id: "arbeit_beruf",
        title: "Arbeit & Beruf (Pekerjaan)",
        vocabulary: [
          { german: "der Chef", indonesian: "bos", example: "Mein Chef." },
          { german: "der Kollege", indonesian: "rekan kerja", example: "Nette Kollegen." },
          { german: "das Büro", indonesian: "kantor", example: "Im Büro." },
          { german: "die E-Mail", indonesian: "email", example: "E-Mail senden." },
          { german: "anrufen", indonesian: "menelepon", example: "Kunden anrufen." },
          { german: "der Urlaub", indonesian: "cuti/liburan", example: "Urlaub nehmen." },
          { german: "stressig", indonesian: "stres/tegang", example: "Stressiger Tag." },
          { german: "verdienen", indonesian: "menghasilkan uang", example: "Gut verdienen." },
          { german: "bewerben", indonesian: "melamar", example: "Bewerbung schreiben." },
          { german: "der Mechaniker", indonesian: "mekanik", example: "Auto reparieren." },
          { german: "der Kellner", indonesian: "pelayan", example: "Im Restaurant." },
          { german: "die Krankenschwester", indonesian: "perawat", example: "Im Krankenhaus." },
        ],
        grammar: [
          {
            title: "Perfekt (Masa Lampau Lisan)",
            explanation: "Menceritakan apa yang SUDAH terjadi. Rumus: haben/sein + Partizip II (ge-).\n- Ich habe gearbeitet (Saya sudah bekerja).\n- Er hat angerufen (Dia sudah menelepon).\n- Wir sind gefahren (Kami sudah pergi).",
            examples: ["Hast du den Chef gesehen?"],
          },
        ],
        dialogs: [
          {
            title: "Hari Kerja",
            lines: [
              { speaker: "A", german: "Wie war die Arbeit?", indonesian: "Gimana kerjanya?" },
              { speaker: "B", german: "Anstrengend. Ich habe den ganzen Tag telefoniert.", indonesian: "Melelahkan. Aku teleponan seharian." },
              { speaker: "A", german: "Hast du Pause gemacht?", indonesian: "Kamu istirahat gak?" },
              { speaker: "B", german: "Nein, keine Zeit.", indonesian: "Enggak, gak ada waktu." },
            ],
          },
        ],
        exercises: [
          { question: "Bentuk lampau: Ich habe Fußball ___ (spielen).", options: ["spielen", "gespielt", "spielt", "spielte"], correctAnswer: 1 },
          { question: "Siapa itu 'der Kollege'?", options: ["Bos", "Klien", "Rekan kerja", "Satpam"], correctAnswer: 2 },
          { question: "Bentuk perempuan 'der Kellner':", options: ["die Kellnerin", "die Kellner", "die Kellnerei", "das Kellner"], correctAnswer: 0 },
          { question: "Partizip II dari 'machen':", options: ["gemacht", "gemachen", "macht", "ge-machen"], correctAnswer: 0 },
          { question: "Apa arti 'verdienen'?", options: ["Melayani", "Menghasilkan (uang)", "Membayar", "Membeli"], correctAnswer: 1 },
          { question: "Kata kerja bantu untuk 'gehen' (pergerakan) di Perfekt:", options: ["haben", "sein (bin/ist)", "werden", "können"], correctAnswer: 1 },
          { question: "Profesi yang memperbaiki mobil:", options: ["der Arzt", "der Mechaniker", "der Lehrer", "der Pilot"], correctAnswer: 1 },
          { question: "Lawan kata 'stressig':", options: ["entspannt", "schnell", "teuer", "laut"], correctAnswer: 0 },
        ],
      },

      // 7. KOMUNIKASI & EMOSI (Focus: Reflexive Verben)
      {
        id: "gefuehle",
        title: "Gefühle & Kommunikation (Emosi)",
        vocabulary: [
          { german: "die Nachricht", indonesian: "pesan", example: "SMS/WhatsApp." },
          { german: "erzählen", indonesian: "menceritakan", example: "Erzähl mir alles." },
          { german: "die Freude", indonesian: "kegembiraan", example: "Große Freude." },
          { german: "die Angst", indonesian: "rasa takut", example: "Keine Angst." },
          { german: "die Liebe", indonesian: "cinta", example: "Liebe ist schön." },
          { german: "glücklich", indonesian: "bahagia", example: "Ich bin glücklich." },
          { german: "traurig", indonesian: "sedih", example: "Nicht traurig sein." },
          { german: "wütend", indonesian: "marah", example: "Er ist wütend." },
          { german: "sich freuen", indonesian: "senang (refleksif)", example: "Ich freue mich." },
          { german: "sich ärgern", indonesian: "kesal (refleksif)", example: "Er ärgert sich." },
          { german: "sich treffen", indonesian: "bertemu (refleksif)", example: "Wir treffen uns." },
          { german: "gratulieren", indonesian: "mengucapkan selamat", example: "Ich gratuliere dir." },
        ],
        grammar: [
          {
            title: "Reflexive Verben (Kata Kerja Refleksif)",
            explanation: "Kata kerja yang kembali ke subjek. Butuh: mich, dich, sich, uns, euch.\n- Ich freue MICH (Saya senang).\n- Du ärgerst DICH (Kamu kesal).\n- Er fühlt SICH gut (Dia merasa baik).",
            examples: ["Wir treffen uns um 8."],
          },
        ],
        dialogs: [
          {
            title: "Kabar Baik",
            lines: [
              { speaker: "A", german: "Ich habe den Job!", indonesian: "Aku dapet kerjanya!" },
              { speaker: "B", german: "Super! Ich freue mich für dich.", indonesian: "Keren! Aku ikut seneng buat kamu." },
              { speaker: "A", german: "Danke! Ich bin so glücklich.", indonesian: "Makasih! Aku bahagia banget." },
            ],
          },
        ],
        exercises: [
          { question: "Lengkapi: Ich freue ___ (diri).", options: ["mich", "dich", "sich", "uns"], correctAnswer: 0 },
          { question: "Bahasa Jerman 'Sedih':", options: ["glücklich", "böse", "traurig", "müde"], correctAnswer: 2 },
          { question: "Lengkapi: Du ärgerst ___.", options: ["mich", "dich", "sich", "euch"], correctAnswer: 1 },
          { question: "Apa arti 'die Angst'?", options: ["Marah", "Cinta", "Takut", "Berani"], correctAnswer: 2 },
          { question: "Kata kerja 'bertemu' (refleksif):", options: ["sich treffen", "sich laufen", "sich essen", "sich schlafen"], correctAnswer: 0 },
          { question: "Lengkapi: Wir treffen ___ (kami).", options: ["uns", "euch", "sich", "mich"], correctAnswer: 0 },
          { question: "Sinonim 'wütend' (marah):", options: ["böse/sauer", "froh", "nett", "lieb"], correctAnswer: 0 },
          { question: "Apa arti 'erzählen'?", options: ["Menghitung", "Menceritakan", "Membayar", "Mendengar"], correctAnswer: 1 },
        ],
      },

      // 8. PENDIDIKAN & MASA DEPAN (Focus: Futur I)
      {
        id: "bildung_zukunft",
        title: "Bildung & Zukunft (Pendidikan)",
        vocabulary: [
          { german: "die Schule", indonesian: "sekolah", example: "In die Schule gehen." },
          { german: "die Universität", indonesian: "universitas", example: "An der Uni." },
          { german: "die Prüfung", indonesian: "ujian", example: "Prüfung bestehen." },
          { german: "lernen", indonesian: "belajar", example: "Viel lernen." },
          { german: "studieren", indonesian: "kuliah", example: "Biologie studieren." },
          { german: "die Note", indonesian: "nilai", example: "Gute Note." },
          { german: "bestehen", indonesian: "lulus", example: "Test bestanden." },
          { german: "durchfallen", indonesian: "gagal", example: "Durchgefallen." },
          { german: "der Plan", indonesian: "rencana", example: "Ein Plan für morgen." },
          { german: "werden", indonesian: "akan/menjadi", example: "Ich werde Arzt." },
          { german: "hoffen", indonesian: "berharap", example: "Ich hoffe das Beste." },
          { german: "wissen", indonesian: "tahu/mengetahui", example: "Ich weiß es nicht." },
        ],
        grammar: [
          {
            title: "Futur I (Masa Depan)",
            explanation: "Menyatakan kejadian di masa depan atau janji.\nRumus: werden + Infinitiv.\n- Ich WERDE lernen (Saya akan belajar).\n- Es WIRD regnen (Akan hujan).",
            examples: ["Wir werden sehen.", "Er wird kommen."],
          },
        ],
        dialogs: [
          {
            title: "Setelah Sekolah",
            lines: [
              { speaker: "A", german: "Was wirst du nach der Schule machen?", indonesian: "Apa yang bakal kamu lakukan setelah sekolah?" },
              { speaker: "B", german: "Ich werde studieren. Und du?", indonesian: "Aku bakal kuliah. Kamu?" },
              { speaker: "A", german: "Ich mache eine Ausbildung.", indonesian: "Aku ambil pelatihan kerja (vocational)." },
            ],
          },
        ],
        exercises: [
          { question: "Bentuk Futur I: Ich ___ (akan) gehen.", options: ["werde", "wirst", "wird", "werden"], correctAnswer: 0 },
          { question: "Lawan kata 'lulus' (bestehen):", options: ["gewinnen", "durchfallen", "lernen", "studieren"], correctAnswer: 1 },
          { question: "Konjugasi 'wissen' (tahu) untuk 'ich':", options: ["wisse", "weiß", "weiße", "wissen"], correctAnswer: 1 },
          { question: "Bahasa Jerman 'Ujian':", options: ["die Übung", "die Prüfung", "die Pause", "die Klasse"], correctAnswer: 1 },
          { question: "Konjugasi Futur I untuk 'wir': Wir ___ reisen.", options: ["werde", "wirst", "werden", "wird"], correctAnswer: 2 },
          { question: "Apa arti 'die Note'?", options: ["Uang", "Nilai/Angka", "Buku", "Papan"], correctAnswer: 1 },
          { question: "Kata kerja 'berharap':", options: ["hoffen", "helfen", "holen", "hören"], correctAnswer: 0 },
          { question: "Struktur Futur I: Er wird ein Haus ___.", options: ["kaufen", "kauft", "gekauft", "kaufte"], correctAnswer: 0 },
        ],
      },

      // 9. HOBI & ALAM (Focus: Komparativ)
      {
        id: "freizeit_natur",
        title: "Freizeit & Natur (Waktu Luang)",
        vocabulary: [
          { german: "das Hobby", indonesian: "hobi", example: "Mein Hobby." },
          { german: "der Fußball", indonesian: "sepak bola", example: "Fußball spielen." },
          { german: "schwimmen", indonesian: "berenang", example: "Im Wasser schwimmen." },
          { german: "wandern", indonesian: "hiking", example: "In den Bergen wandern." },
          { german: "die Sonne", indonesian: "matahari", example: "Sonne scheint." },
          { german: "der Regen", indonesian: "hujan", example: "Viel Regen." },
          { german: "der Schnee", indonesian: "salju", example: "Kalter Schnee." },
          { german: "der Wald", indonesian: "hutan", example: "Grüner Wald." },
          { german: "der Strand", indonesian: "pantai", example: "Am Strand." },
          { german: "der Berg", indonesian: "gunung", example: "Hoher Berg." },
          { german: "warm", indonesian: "hangat", example: "Es ist warm." },
          { german: "kalt", indonesian: "dingin", example: "Mir ist kalt." },
        ],
        grammar: [
          {
            title: "Komparativ (Perbandingan)",
            explanation: "Membandingkan dua hal.\n- gut -> besser (lebih baik)\n- viel -> mehr (lebih banyak)\n- gern -> lieber (lebih suka)\n- schnell -> schneller (lebih cepat)",
            examples: ["Der Sommer ist wärmer als der Winter."],
          },
        ],
        dialogs: [
          {
            title: "Liburan",
            lines: [
              { speaker: "A", german: "Magst du den Winter?", indonesian: "Kamu suka musim dingin?" },
              { speaker: "B", german: "Nein, ich mag den Sommer lieber.", indonesian: "Enggak, aku lebih suka musim panas." },
              { speaker: "A", german: "Warum?", indonesian: "Kenapa?" },
              { speaker: "B", german: "Weil es wärmer ist.", indonesian: "Karena lebih hangat." },
            ],
          },
        ],
        exercises: [
          { question: "Komparativ 'gut' (lebih baik):", options: ["guter", "besser", "besten", "mehr"], correctAnswer: 1 },
          { question: "Komparativ 'gern' (lebih suka):", options: ["gerner", "lieber", "mehrer", "besser"], correctAnswer: 1 },
          { question: "Bahasa Jerman 'Hutan':", options: ["der Baum", "der Wald", "der Berg", "die Wiese"], correctAnswer: 1 },
          { question: "Musim dengan salju:", options: ["Sommer", "Winter", "Herbst", "Frühling"], correctAnswer: 1 },
          { question: "Lawan kata 'kalt' (dingin):", options: ["warm", "kühl", "nass", "dunkel"], correctAnswer: 0 },
          { question: "Komparativ 'schnell' (lebih cepat):", options: ["schnellst", "schneller", "mehr schnell", "schnellsten"], correctAnswer: 1 },
          { question: "Apa arti 'wandern'?", options: ["Jalan-jalan di kota", "Hiking/Jalan di alam", "Lari cepat", "Tidur"], correctAnswer: 1 },
          { question: "Apa arti 'der Berg'?", options: ["Pantai", "Sungai", "Gunung", "Danau"], correctAnswer: 2 },
        ],
      },

      // 10. HEWAN LIAR (Materi Tambahan)
      {
        id: "wilde_tiere",
        title: "Wilde Tiere (Hewan Liar)",
        vocabulary: [
          { german: "der Löwe", indonesian: "singa", example: "Löwe brüllt." },
          { german: "der Tiger", indonesian: "harimau", example: "Tiger im Zoo." },
          { german: "der Elefant", indonesian: "gajah", example: "Großer Elefant." },
          { german: "der Bär", indonesian: "beruang", example: "Bär im Wald." },
          { german: "der Affe", indonesian: "monyet", example: "Lustiger Affe." },
          { german: "die Schlange", indonesian: "ular", example: "Lange Schlange." },
          { german: "gefährlich", indonesian: "berbahaya", example: "Das ist gefährlich." },
          { german: "wild", indonesian: "liar", example: "Wilde Tiere." },
          { german: "der Zoo", indonesian: "kebun binatang", example: "Wir gehen in den Zoo." },
          { german: "füttern", indonesian: "memberi makan", example: "Tiere nicht füttern." },
          { german: "die Insel", indonesian: "pulau", example: "Einsame Insel." },
          { german: "der Dschungel", indonesian: "hutan rimba", example: "Im Dschungel." },
        ],
        grammar: [
          {
            title: "Superlatif (Paling)",
            explanation: "Tingkatan tertinggi.\n- schnell -> am schnellsten (paling cepat)\n- groß -> am größten (paling besar)\n- gut -> am besten (paling baik)",
            examples: ["Der Elefant ist das größte Tier."],
          },
        ],
        dialogs: [
          {
            title: "Di Kebun Binatang",
            lines: [
              { speaker: "Kind", german: "Guck mal, der Löwe!", indonesian: "Lihat, singa!" },
              { speaker: "Vater", german: "Ja, er ist sehr gefährlich.", indonesian: "Ya, dia sangat berbahaya." },
              { speaker: "Kind", german: "Und der Elefant ist am größten.", indonesian: "Dan gajah itu yang paling besar." },
            ],
          },
        ],
        exercises: [
          { question: "Hewan 'Singa' bahasa Jermannya:", options: ["der Tiger", "der Löwe", "die Katze", "der Wolf"], correctAnswer: 1 },
          { question: "Bahasa Jerman 'Berbahaya':", options: ["sicher", "gefährlich", "nett", "klein"], correctAnswer: 1 },
          { question: "Superlatif 'schnell' (paling cepat):", options: ["am schnellsten", "schneller", "schnellsten", "mehr schnell"], correctAnswer: 0 },
          { question: "Hewan yang makan pisang:", options: ["der Löwe", "der Affe", "der Bär", "der Fisch"], correctAnswer: 1 },
          { question: "Superlatif 'groß' (paling besar):", options: ["am grossen", "am größer", "am größten", "am grossesten"], correctAnswer: 2 },
          { question: "Apa arti 'die Schlange'?", options: ["Cacing", "Ular", "Tali", "Jalan"], correctAnswer: 1 },
          { question: "Lawan kata 'wild' (liar) biasanya:", options: ["zahm (jinak)", "böse", "laut", "groß"], correctAnswer: 0 },
          { question: "Tempat melihat hewan liar di kota:", options: ["der Park", "der Zoo", "der Wald", "der Markt"], correctAnswer: 1 },
        ],
      },

      // 11. GRAMMATIK PROFI (Nebensätze)
      {
        id: "nebensaetze",
        title: "Satzverbindung (Grammar Expert)",
        vocabulary: [
          { german: "weil", indonesian: "karena", example: "Ich esse, weil ich Hunger habe." },
          { german: "wenn", indonesian: "jika/kalau", example: "Wenn ich Zeit habe." },
          { german: "dass", indonesian: "bahwa", example: "Ich weiß, dass du kommst." },
          { german: "dann", indonesian: "kemudian", example: "Dann gehen wir." },
          { german: "deshalb", indonesian: "oleh karena itu", example: "Deshalb lerne ich." },
          { german: "aber", indonesian: "tapi", example: "Aber ich will nicht." },
          { german: "oder", indonesian: "atau", example: "Tee oder Kaffee?" },
          { german: "und", indonesian: "dan", example: "Ich und du." },
          { german: "sondern", indonesian: "melainkan", example: "Nicht rot, sondern blau." },
          { german: "denn", indonesian: "karena (posisi 0)", example: "Ich gehe, denn ich bin müde." },
        ],
        grammar: [
          {
            title: "Nebensatz (Anak Kalimat)",
            explanation: "Dengan 'weil', 'dass', 'wenn', kata kerja pindah ke PALING BELAKANG.\n- Ich lerne Deutsch, WEIL es Spaß MACHT.\n- Er sagt, DASS er krank IST.",
            examples: ["Wenn es regnet, bleibe ich zu Hause."],
          },
        ],
        dialogs: [
          {
            title: "Alasan",
            lines: [
              { speaker: "A", german: "Warum lernst du Deutsch?", indonesian: "Kenapa kamu belajar Jerman?" },
              { speaker: "B", german: "Ich lerne Deutsch, weil ich in Berlin arbeiten will.", indonesian: "Aku belajar Jerman karena aku mau kerja di Berlin." },
            ],
          },
        ],
        exercises: [
          { question: "Susun kalimat: Ich glaube, dass...", options: ["er ist nett", "er nett ist", "ist er nett", "nett ist er"], correctAnswer: 1 },
          { question: "Pilih kata sambung: Ich gehe ins Bett, ___ ich müde bin.", options: ["weil", "aber", "und", "oder"], correctAnswer: 0 },
          { question: "Kata sambung 'jika':", options: ["wann", "wenn", "als", "wo"], correctAnswer: 1 },
          { question: "Posisi kata kerja dengan 'denn': Ich esse, denn ich ___ Hunger.", options: ["habe", "hat", "haben", "hätte"], correctAnswer: 0 },
          { question: "Lengkapi: Er sagt, ___ (bahwa) er kommt.", options: ["weil", "dass", "wenn", "aber"], correctAnswer: 1 },
          { question: "Arti 'deshalb':", options: ["Karena", "Oleh karena itu", "Tetapi", "Dan"], correctAnswer: 1 },
          { question: "Kalimat: Ich trinke Wasser, ___ (karena) ich Durst habe.", options: ["weil", "denn", "aber", "oder"], correctAnswer: 0 },
          { question: "Yang mana bukan kata sambung?", options: ["und", "oder", "aber", "tisch"], correctAnswer: 3 },
        ],
      },
      // 12. KEUANGAN & BANK (Pelengkap Daftar A2)
      {
        id: "finanzen_geld",
        title: "Geld & Finanzen (Uang & Keuangan)",
        vocabulary: [
          { german: "das Geld", indonesian: "uang", example: "Ich habe kein Geld." },
          { german: "das Konto", indonesian: "rekening", example: "Konto eröffnen." },
          { german: "die Bank", indonesian: "bank", example: "Zur Bank gehen." },
          { german: "die Karte", indonesian: "kartu (atm/kredit)", example: "Mit Karte zahlen." },
          { german: "der Automat", indonesian: "mesin ATM", example: "Geld am Automaten holen." },
          { german: "sparen", indonesian: "menabung/hemat", example: "Geld sparen." },
          { german: "ausgeben", indonesian: "menghabiskan (uang)", example: "Nicht zu viel ausgeben." },
          { german: "überweisen", indonesian: "mentransfer", example: "Miete überweisen." },
          { german: "abheben", indonesian: "mengambil uang", example: "Geld abheben." },
          { german: "wechseln", indonesian: "menukar (uang)", example: "Euro in Rupiah wechseln." },
          { german: "teuer", indonesian: "mahal", example: "Das ist zu teuer." },
          { german: "günstig", indonesian: "murah/terjangkau", example: "Ein günstiges Angebot." },
        ],
        grammar: [
          {
            title: "Verben mit Akkusativ (Uang)",
            explanation: "Kata kerja keuangan biasanya butuh objek langsung.\n- Ich spare GELD.\n- Ich überweise DIE Miete.\n- Ich hebe 100 Euro ab.",
            examples: ["Er gibt viel Geld aus."],
          },
        ],
        dialogs: [
          {
            title: "Di Bank",
            lines: [
              { speaker: "Kunde", german: "Ich möchte Geld abheben.", indonesian: "Saya mau ambil uang." },
              { speaker: "Angestellter", german: "Bitte nutzen Sie den Automaten draußen.", indonesian: "Silakan gunakan mesin ATM di luar." },
              { speaker: "Kunde", german: "Danke, und ich möchte auch Geld wechseln.", indonesian: "Makasih, dan saya juga mau tukar uang." },
            ],
          },
        ],
        exercises: [
          { question: "Lawan kata 'menabung' (sparen):", options: ["ausgeben", "bekommen", "haben", "finden"], correctAnswer: 0 },
          { question: "Apa arti 'überweisen'?", options: ["Mengambil", "Mentransfer", "Menukar", "Menghitung"], correctAnswer: 1 },
          { question: "Tempat mengambil uang tunai:", options: ["der Automat", "der Koffer", "der Schrank", "der Tisch"], correctAnswer: 0 },
          { question: "Saya ingin ___ (menukar) uang.", options: ["wechseln", "tauschen", "kaufen", "geben"], correctAnswer: 0 },
          { question: "Bahasa Jerman 'Rekening':", options: ["die Rechnung", "das Konto", "die Karte", "die Bank"], correctAnswer: 1 },
          { question: "Kata kerja 'mengambil uang':", options: ["abheben", "aufheben", "mitnehmen", "wegnehmen"], correctAnswer: 0 },
          { question: "Sinonim 'billig' (murah):", options: ["günstig", "teuer", "hoch", "viel"], correctAnswer: 0 },
          { question: "Apa yang kamu lakukan dengan ATM?", options: ["essen", "schlafen", "Geld abheben", "lesen"], correctAnswer: 2 },
        ],
      },
    ],
  },
  {
    id: "B1",
    title: "B1 - Menengah (Intermediate)",
    description: "Kemandirian bahasa: Pekerjaan, diskusi kompleks, teknologi, seni, dan struktur kalimat tingkat lanjut.",
    subSections: [
      // 1. PENDAPAT & ARGUMEN
      {
        id: "meinungen",
        title: "Meinungen & Diskussion (Pendapat)",
        vocabulary: [
          { german: "die Meinung", indonesian: "pendapat", example: "Was ist deine Meinung dazu?" },
          { german: "glauben", indonesian: "percaya/kira", example: "Ich glaube, das ist richtig." },
          { german: "denken", indonesian: "berpikir", example: "Ich denke, wir sollten gehen." },
          { german: "finden", indonesian: "berpendapat/menemukan", example: "Ich finde den Film gut." },
          { german: "meiner Meinung nach", indonesian: "menurut pendapat saya", example: "Meiner Meinung nach ist das falsch." },
          { german: "zustimmen", indonesian: "setuju", example: "Ich stimme dir zu." },
          { german: "ablehnen", indonesian: "menolak", example: "Ich muss das Angebot ablehnen." },
          { german: "überzeugt sein", indonesian: "yakin", example: "Ich bin davon überzeugt." },
          { german: "die Ansicht", indonesian: "pandangan", example: "Ich bin anderer Ansicht." },
          { german: "recht haben", indonesian: "benar", example: "Du hast recht." },
        ],
        grammar: [
          {
            title: "Verben mit 'dass' (Kalimat 'Bahwa')",
            explanation: "Menghubungkan pendapat. Kata kerja di anak kalimat pindah ke ujung.\n- Ich denke, DASS er nett IST.\n- Ich finde, DASS das gut WAR.",
            examples: ["Er sagt, dass er keine Zeit hat."],
          },
        ],
        dialogs: [
          {
            title: "Debat Kecil",
            lines: [
              { speaker: "A", german: "Was hältst du von dem Plan?", indonesian: "Apa pendapatmu tentang rencana itu?" },
              { speaker: "B", german: "Ehrlich gesagt, bin ich nicht überzeugt.", indonesian: "Jujur saja, aku gak yakin." },
              { speaker: "A", german: "Warum? Ich finde, dass es eine gute Idee ist.", indonesian: "Kenapa? Aku rasa itu ide bagus." },
            ],
          },
        ],
        exercises: [
          { question: "Susun kalimat: Ich glaube, dass...", options: ["er kommt heute", "er heute kommt", "kommt er heute", "heute er kommt"], correctAnswer: 1 },
          { question: "Sinonim 'Ich denke':", options: ["Ich gehe", "Ich meine / Ich finde", "Ich mache", "Ich sehe"], correctAnswer: 1 },
          { question: "Lengkapi: 'Meiner Meinung ___ ist das falsch.'", options: ["von", "zu", "nach", "bei"], correctAnswer: 2 },
          { question: "Lawan kata 'zustimmen' (setuju):", options: ["denken", "ablehnen", "glauben", "finden"], correctAnswer: 1 },
          { question: "Terjemahkan: 'Saya yakin.'", options: ["Ich bin überzeugt.", "Ich bin Meinung.", "Ich bin Ansicht.", "Ich bin falsch."], correctAnswer: 0 },
          { question: "Lengkapi: 'Ich stimme ___ (kamu) zu.' (Dativ)", options: ["dich", "dir", "du", "dein"], correctAnswer: 1 },
          { question: "Struktur: Er sagt, dass er krank ___.", options: ["ist", "sein", "war", "bist"], correctAnswer: 0 },
          { question: "Apa arti 'die Ansicht'?", options: ["Wajah", "Pemandangan", "Pandangan/Opini", "Mata"], correctAnswer: 2 },
          { question: "Lengkapi: 'Du hast ___ (benar).'", options: ["links", "echt", "recht", "gut"], correctAnswer: 2 },
          { question: "Kata kerja untuk 'menolak' tawaran:", options: ["annehmen", "aufnehmen", "ablehnen", "abnehmen"], correctAnswer: 2 },
        ],
      },

      // 2. MASA LALU & BIOGRAFI
      {
        id: "vergangenheit_biografie",
        title: "Vergangenheit & Biografie (Masa Lampau)",
        vocabulary: [
          { german: "die Vergangenheit", indonesian: "masa lalu", example: "In der Vergangenheit." },
          { german: "die Erinnerung", indonesian: "kenangan", example: "Schöne Erinnerungen." },
          { german: "früher", indonesian: "dulu", example: "Früher war alles anders." },
          { german: "damals", indonesian: "waktu itu", example: "Damals lebte ich in Berlin." },
          { german: "aufwachsen", indonesian: "tumbuh besar", example: "Ich bin in München aufgewachsen." },
          { german: "erleben", indonesian: "mengalami", example: "Wir haben viel erlebt." },
          { german: "passieren", indonesian: "terjadi", example: "Was ist passiert?" },
          { german: "sich erinnern", indonesian: "mengingat", example: "Ich erinnere mich an dich." },
          { german: "entdecken", indonesian: "menemukan (tempat/hal)", example: "Amerika wurde entdeckt." },
          { german: "erfinden", indonesian: "menemukan (ciptaan)", example: "Wer hat das Telefon erfunden?" },
        ],
        grammar: [
          {
            title: "Präteritum (Lampau Tertulis)",
            explanation: "Bentuk lampau formal (buku/berita).\n- sein -> war\n- haben -> hatte\n- kommen -> kam\n- sagen -> sagte",
            examples: ["Es war einmal ein König.", "Er sagte, er hatte keine Zeit."],
          },
        ],
        dialogs: [
          {
            title: "Cerita Masa Kecil",
            lines: [
              { speaker: "A", german: "Wo bist du aufgewachsen?", indonesian: "Di mana kamu tumbuh besar?" },
              { speaker: "B", german: "Ich wuchs in einem kleinen Dorf auf.", indonesian: "Aku tumbuh di desa kecil." },
              { speaker: "A", german: "War es schön?", indonesian: "Indah gak?" },
              { speaker: "B", german: "Ja, ich hatte viele Freunde.", indonesian: "Ya, aku punya banyak teman." },
            ],
          },
        ],
        exercises: [
          { question: "Präteritum dari 'gehen' (pergi):", options: ["gegangen", "ging", "geht", "gingt"], correctAnswer: 1 },
          { question: "Präteritum dari 'sein' (adalah):", options: ["bin", "war", "waren", "wäre"], correctAnswer: 1 },
          { question: "Apa arti 'damals'?", options: ["Besok", "Sekarang", "Nanti", "Waktu itu/Dulu"], correctAnswer: 3 },
          { question: "Präteritum dari 'haben' (punya):", options: ["hast", "hatte", "habte", "hätte"], correctAnswer: 1 },
          { question: "Lengkapi: 'Ich ___ (ingat) mich an den Urlaub.'", options: ["denke", "vergesse", "erinnere", "glaube"], correctAnswer: 2 },
          { question: "Präteritum dari 'kommen' (datang):", options: ["kam", "kommt", "gekommen", "käme"], correctAnswer: 0 },
          { question: "Lawan kata 'Vergangenheit' (Masa Lalu):", options: ["Gestern", "Zukunft", "Erinnerung", "Damals"], correctAnswer: 1 },
          { question: "Apa arti 'aufwachsen'?", options: ["Bangun tidur", "Tumbuh besar", "Mencuci", "Menunggu"], correctAnswer: 1 },
          { question: "Siapa yang 'erfindet' (menemukan) mesin?", options: ["Der Erfinder", "Der Entdecker", "Der Lehrer", "Der Arzt"], correctAnswer: 0 },
          { question: "Präteritum 'sagen' (berkata):", options: ["sagt", "sagte", "gesagt", "sägt"], correctAnswer: 1 },
        ],
      },

      // 3. MASA DEPAN & RENCANA
      {
        id: "zukunft_plaene",
        title: "Zukunft & Pläne (Masa Depan)",
        vocabulary: [
          { german: "die Zukunft", indonesian: "masa depan", example: "In der Zukunft." },
          { german: "der Plan", indonesian: "rencana", example: "Ein guter Plan." },
          { german: "das Ziel", indonesian: "tujuan/goal", example: "Mein Ziel ist B2." },
          { german: "vorhaben", indonesian: "berencana", example: "Was hast du vor?" },
          { german: "beabsichtigen", indonesian: "bermaksud", example: "Ich beabsichtige zu reisen." },
          { german: "beschließen", indonesian: "memutuskan", example: "Wir haben beschlossen, umzuziehen." },
          { german: "hoffen", indonesian: "berharap", example: "Ich hoffe auf Erfolg." },
          { german: "erwarten", indonesian: "mengharapkan", example: "Ich erwarte einen Anruf." },
          { german: "vermutlich", indonesian: "mungkin/diduga", example: "Vermutlich regnet es." },
          { german: "bald", indonesian: "segera", example: "Bis bald!" },
        ],
        grammar: [
          {
            title: "Futur I (Masa Depan)",
            explanation: "Rumus: werden + Infinitiv.\n- Ich WERDE lernen (Saya akan belajar).\n- Es WIRD regnen (Akan hujan).",
            examples: ["Wir werden sehen.", "Er wird bestimmt kommen."],
          },
        ],
        dialogs: [
          {
            title: "Rencana Hidup",
            lines: [
              { speaker: "A", german: "Was sind deine Pläne für die Zukunft?", indonesian: "Apa rencanamu buat masa depan?" },
              { speaker: "B", german: "Ich werde wahrscheinlich im Ausland arbeiten.", indonesian: "Aku kemungkinan bakal kerja di luar negeri." },
            ],
          },
        ],
        exercises: [
          { question: "Bentuk Futur I: Ich ___ (werden) gehen.", options: ["werde", "wirst", "wird", "werden"], correctAnswer: 0 },
          { question: "Arti 'vorhaben':", options: ["takut", "berencana", "lupa", "ingat"], correctAnswer: 1 },
          { question: "Konjugasi Futur I untuk 'du': Du ___ sehen.", options: ["werde", "wirst", "wird", "werdet"], correctAnswer: 1 },
          { question: "Sinonim 'vermutlich':", options: ["sicher", "vielleicht/wahrscheinlich", "nie", "immer"], correctAnswer: 1 },
          { question: "Apa arti 'das Ziel'?", options: ["Awal", "Tujuan/Target", "Jalan", "Rencana"], correctAnswer: 1 },
          { question: "Struktur Futur I: Er wird ein Haus ___.", options: ["kaufen", "kauft", "gekauft", "kaufte"], correctAnswer: 0 },
          { question: "Kata kerja untuk 'memutuskan':", options: ["beschließen", "schließen", "hoffen", "warten"], correctAnswer: 0 },
          { question: "Konjugasi Futur I untuk 'wir': Wir ___ reisen.", options: ["werde", "wirst", "werden", "wird"], correctAnswer: 2 },
          { question: "Arti 'nächste Woche':", options: ["Minggu lalu", "Minggu ini", "Minggu depan", "Besok"], correctAnswer: 2 },
          { question: "Apa arti 'beabsichtigen'?", options: ["Melihat", "Bermaksud", "Berhenti", "Memulai"], correctAnswer: 1 },
        ],
      },

      // 4. TEKNOLOGI & INTERNET
      {
        id: "technologie",
        title: "Technologie & Internet",
        vocabulary: [
          { german: "der Laptop", indonesian: "laptop", example: "Neuer Laptop." },
          { german: "das Smartphone", indonesian: "smartphone", example: "Smartphone aufladen." },
          { german: "das WLAN", indonesian: "Wi-Fi", example: "Kein WLAN." },
          { german: "die Datei", indonesian: "file", example: "Datei öffnen." },
          { german: "herunterladen", indonesian: "download", example: "App herunterladen." },
          { german: "hochladen", indonesian: "upload", example: "Video hochladen." },
          { german: "löschen", indonesian: "menghapus", example: "Nachricht löschen." },
          { german: "speichern", indonesian: "menyimpan", example: "Bitte speichern." },
          { german: "der Virus", indonesian: "virus", example: "Vorsicht vor Viren." },
          { german: "das Passwort", indonesian: "kata sandi", example: "Passwort eingeben." },
          { german: "die Verbindung", indonesian: "koneksi", example: "Schlechte Verbindung." },
          { german: "der Bildschirm", indonesian: "layar", example: "Bildschirm ist kaputt." },
        ],
        grammar: [
          {
            title: "Relativsätze (Kalimat Relatif)",
            explanation: "Menjelaskan benda dengan 'yang'.\n- Der Laptop, DER neu ist (Maskulin).\n- Die App, DIE ich nutze (Feminin).\n- Das Handy, DAS hier liegt (Netral).\n- Die Kinder, DIE spielen (Plural).",
            examples: ["Das ist der Mann, der mich angerufen hat."],
          },
        ],
        dialogs: [
          {
            title: "Masalah Wifi",
            lines: [
              { speaker: "A", german: "Das WLAN funktioniert nicht.", indonesian: "Wifi-nya gak jalan." },
              { speaker: "B", german: "Hast du den Router neu gestartet?", indonesian: "Udah restart routernya?" },
              { speaker: "A", german: "Ja, aber die Verbindung ist immer noch weg.", indonesian: "Iya, tapi koneksinya masih hilang." },
            ],
          },
        ],
        exercises: [
          { question: "Bahasa Jerman 'Download':", options: ["hochladen", "herunterladen", "aufladen", "einladen"], correctAnswer: 1 },
          { question: "Lengkapi: Der Mann, ___ (yang) hier wohnt.", options: ["der", "die", "das", "den"], correctAnswer: 0 },
          { question: "Lengkapi: Die Frau, ___ (yang) singt.", options: ["der", "die", "das", "dem"], correctAnswer: 1 },
          { question: "Apa arti 'speichern'?", options: ["Menghapus", "Menyimpan", "Mencetak", "Mengirim"], correctAnswer: 1 },
          { question: "Lawan kata 'hochladen':", options: ["herunterladen", "aufladen", "einladen", "ausladen"], correctAnswer: 0 },
          { question: "Benda untuk mengetik di komputer:", options: ["die Maus", "der Bildschirm", "die Tastatur", "der Drucker"], correctAnswer: 2 },
          { question: "Lengkapi: Das Kind, ___ (yang) spielt.", options: ["der", "die", "das", "den"], correctAnswer: 2 },
          { question: "Apa arti 'löschen'?", options: ["Membuat", "Menyimpan", "Menghapus", "Mencari"], correctAnswer: 2 },
          { question: "Kata sandi bahasa Jermannya:", options: ["das Wort", "das Passwort", "der Pass", "der Schlüssel"], correctAnswer: 1 },
          { question: "Relativpronomen jamak (Plural): Die Bücher, ___ (yang) hier liegen.", options: ["der", "die", "das", "denen"], correctAnswer: 1 },
        ],
      },

      // 5. KULINER & MEMASAK
      {
        id: "kochen_essen",
        title: "Kochen & Kulinarik (Kuliner)",
        vocabulary: [
          { german: "der Mixer", indonesian: "blender", example: "Obst im Mixer." },
          { german: "die Pfanne", indonesian: "wajan", example: "Braten in der Pfanne." },
          { german: "der Kochtopf", indonesian: "panci", example: "Suppe im Topf." },
          { german: "das Rezept", indonesian: "resep", example: "Ein neues Rezept probieren." },
          { german: "schneiden", indonesian: "memotong", example: "Gemüse schneiden." },
          { german: "braten", indonesian: "menggoreng", example: "Fleisch braten." },
          { german: "das Gewürz", indonesian: "bumbu", example: "Viele Gewürze." },
          { german: "der Knoblauch", indonesian: "bawang putih", example: "Mit Knoblauch." },
          { german: "die Sahne", indonesian: "krim", example: "Soße mit Sahne." },
          { german: "vegetarisch", indonesian: "vegetarian", example: "Ich esse vegetarisch." },
          { german: "die Garnele", indonesian: "udang", example: "Garnelen grillen." },
          { german: "der Nachtisch", indonesian: "hidangan penutup", example: "Eis zum Nachtisch." },
        ],
        grammar: [
          {
            title: "Infinitiv mit 'zu' (Kalimat Majemuk)",
            explanation: "Menghubungkan dua kata kerja. Kata kerja kedua di akhir pakai 'zu'.\n- Ich habe Lust, Pizza ZU essen (Saya ada niat makan pizza).\n- Es ist gesund, Sport ZU machen.\n(Kecuali modal verbs: ich muss essen - tanpa zu).",
            examples: ["Ich vergaß, das Brot zu kaufen.", "Er versucht, Deutsch zu lernen."],
          },
        ],
        dialogs: [
          {
            title: "Di Dapur",
            lines: [
              { speaker: "A", german: "Hast du Lust, heute zu kochen?", indonesian: "Kamu ada niat masak hari ini?" },
              { speaker: "B", german: "Nein, ich habe keine Zeit, einzukaufen.", indonesian: "Enggak, aku gak punya waktu buat belanja." },
              { speaker: "A", german: "Dann bestellen wir Pizza.", indonesian: "Yaudah kita pesen pizza." },
            ],
          },
        ],
        exercises: [
          { question: "Alat untuk menggoreng:", options: ["der Topf", "die Pfanne", "der Löffel", "der Mixer"], correctAnswer: 1 },
          { question: "Struktur: Es ist gesund, Sport ___ machen.", options: ["zu", "für", "um", "mit"], correctAnswer: 0 },
          { question: "Apa arti 'schneiden'?", options: ["Memasak", "Memotong", "Mencuci", "Makan"], correctAnswer: 1 },
          { question: "Bahan makanan 'Bawang Putih':", options: ["die Zwiebel", "der Knoblauch", "der Pfeffer", "das Salz"], correctAnswer: 1 },
          { question: "Struktur: Ich habe vergessen, Milch ___.", options: ["kaufen", "zu kaufen", "gekauft", "kaufe"], correctAnswer: 1 },
          { question: "Apa arti 'der Nachtisch'?", options: ["Sarapan", "Makan malam", "Hidangan penutup", "Cemilan"], correctAnswer: 2 },
          { question: "Modalverb (tanpa zu): Ich muss ___.", options: ["schlafen", "zu schlafen", "geschlafen", "schlafe"], correctAnswer: 0 },
          { question: "Makanan laut 'Udang':", options: ["der Fisch", "die Garnele", "der Krebs", "die Muschel"], correctAnswer: 1 },
          { question: "Alat 'Blender' dalam Jerman:", options: ["der Mixer", "der Toaster", "der Ofen", "der Kühlschrank"], correctAnswer: 0 },
          { question: "Struktur: Er versucht, das Auto ___.", options: ["reparieren", "zu reparieren", "repariert", "Reparatur"], correctAnswer: 1 },
        ],
      },

      // 6. SENI, BUDAYA & MUSIK
      {
        id: "kultur_kunst",
        title: "Kultur & Kunst (Seni & Budaya)",
        vocabulary: [
          { german: "die Ausstellung", indonesian: "pameran", example: "Museumsausstellung." },
          { german: "das Gemälde", indonesian: "lukisan", example: "Ein altes Gemälde." },
          { german: "der Künstler", indonesian: "seniman", example: "Ein bekannter Künstler." },
          { german: "die Bühne", indonesian: "panggung", example: "Auf der Bühne stehen." },
          { german: "das Instrument", indonesian: "alat musik", example: "Ein Instrument spielen." },
          { german: "die Gitarre", indonesian: "gitar", example: "Gitarre üben." },
          { german: "das Klavier", indonesian: "piano", example: "Am Klavier." },
          { german: "der Zuschauer", indonesian: "penonton", example: "Die Zuschauer klatschen." },
          { german: "das Konzert", indonesian: "konser", example: "Live Konzert." },
          { german: "malen", indonesian: "melukis", example: "Ein Bild malen." },
        ],
        grammar: [
          {
            title: "Genitiv (Kepemilikan Formal)",
            explanation: "Menyatakan milik. Lebih formal dari 'von'.\n- Das Auto DES Mannes (Maskulin/Neutral + s).\n- Die Tasche DER Frau (Feminin/Plural).",
            examples: ["Der Titel des Buches.", "Die Farbe der Blume."],
          },
        ],
        dialogs: [
          {
            title: "Konser Musik",
            lines: [
              { speaker: "A", german: "Wie war das Konzert des Pianisten?", indonesian: "Gimana konser pianisnya (Genitiv)?" },
              { speaker: "B", german: "Die Musik der Band war fantastisch.", indonesian: "Musik band-nya (Genitiv) luar biasa." },
            ],
          },
        ],
        exercises: [
          { question: "Apa arti 'das Gemälde'?", options: ["Patung", "Lukisan", "Foto", "Kamera"], correctAnswer: 1 },
          { question: "Genitiv: Das Buch ___ (siswa - maskulin).", options: ["der Schüler", "des Schülers", "dem Schüler", "den Schüler"], correctAnswer: 1 },
          { question: "Orang yang melukis disebut:", options: ["der Maler/Künstler", "der Musiker", "der Sänger", "der Schauspieler"], correctAnswer: 0 },
          { question: "Genitiv: Die Tasche ___ (wanita - feminin).", options: ["der Frau", "des Frau", "die Frau", "dem Frau"], correctAnswer: 0 },
          { question: "Tempat pertunjukan teater:", options: ["das Kino", "die Bühne", "der Park", "die Schule"], correctAnswer: 1 },
          { question: "Alat musik yang dipetik:", options: ["das Klavier", "die Gitarre", "die Trompete", "die Flöte"], correctAnswer: 1 },
          { question: "Genitiv: Das Spielzeug ___ (anak - netral).", options: ["des Kindes", "der Kind", "dem Kind", "das Kindes"], correctAnswer: 0 },
          { question: "Apa arti 'Zuschauer'?", options: ["Pemain", "Penonton", "Wasit", "Pelatih"], correctAnswer: 1 },
          { question: "Lengkapi: Die Farbe ___ (bunga - feminin) ist rot.", options: ["der Blume", "des Blume", "dem Blume", "die Blume"], correctAnswer: 0 },
          { question: "Apa arti 'Ausstellung'?", options: ["Pameran", "Pertunjukan", "Konser", "Film"], correctAnswer: 0 },
        ],
      },

      // 7. KERJA, BISNIS & KEUANGAN
      {
        id: "arbeit_finanzen",
        title: "Arbeit & Finanzen (Kerja & Uang)",
        vocabulary: [
          { german: "der Vertrag", indonesian: "kontrak", example: "Vertrag unterschreiben." },
          { german: "die Unterschrift", indonesian: "tanda tangan", example: "Ihre Unterschrift bitte." },
          { german: "die Besprechung", indonesian: "rapat", example: "Wichtige Besprechung." },
          { german: "kündigen", indonesian: "resign/pecat", example: "Ich habe gekündigt." },
          { german: "bewerben", indonesian: "melamar", example: "Bewerbung senden." },
          { german: "einstellen", indonesian: "mempekerjakan", example: "Neue Leute einstellen." },
          { german: "das Konto", indonesian: "rekening", example: "Geld auf dem Konto." },
          { german: "die Überweisung", indonesian: "transfer", example: "Überweisung tätigen." },
          { german: "der Kredit", indonesian: "kredit/pinjaman", example: "Kredit aufnehmen." },
          { german: "die Steuer", indonesian: "pajak", example: "Steuern zahlen." },
          { german: "der Gewinn", indonesian: "keuntungan", example: "Gewinn machen." },
          { german: "der Verlust", indonesian: "kerugian", example: "Verlust vermeiden." },
        ],
        grammar: [
          {
            title: "Konjunktionen: obwohl & trotzdem",
            explanation: "Pertentangan.\n- OBWOHL (Meskipun) -> Kata kerja di akhir.\n- TROTZDEM (Namun demikian) -> Kata kerja di posisi 2.",
            examples: ["Ich arbeite, obwohl ich müde bin."],
          },
        ],
        dialogs: [
          {
            title: "Di Bank",
            lines: [
              { speaker: "Kunde", german: "Ich möchte ein Konto eröffnen.", indonesian: "Saya mau buka rekening." },
              { speaker: "Angestellter", german: "Gerne. Bitte unterschreiben Sie hier.", indonesian: "Baik. Silakan tanda tangan di sini." },
            ],
          },
        ],
        exercises: [
          { question: "Bahasa Jerman 'Tanda tangan':", options: ["der Brief", "die Unterschrift", "der Stift", "das Zeichen"], correctAnswer: 1 },
          { question: "Lawan kata 'Gewinn' (untung):", options: ["Verlust", "Umsatz", "Steuer", "Kredit"], correctAnswer: 0 },
          { question: "Struktur: Er kommt zur Arbeit, ___ er krank ist.", options: ["obwohl", "weil", "dass", "trotzdem"], correctAnswer: 0 },
          { question: "Apa arti 'kündigen'?", options: ["Melamar", "Bekerja", "Berhenti/Resign", "Liburan"], correctAnswer: 2 },
          { question: "Tempat menyimpan uang di bank:", options: ["das Konto", "der Schrank", "die Tasche", "der Vertrag"], correctAnswer: 0 },
          { question: "Apa arti 'die Steuer'?", options: ["Gaji", "Pajak", "Bonus", "Denda"], correctAnswer: 1 },
          { question: "Struktur: Er ist müde, ___ arbeitet er weiter.", options: ["trotzdem", "obwohl", "weil", "dass"], correctAnswer: 0 },
          { question: "Kata kerja 'melamar kerja':", options: ["bewerben", "werben", "sterben", "erben"], correctAnswer: 0 },
          { question: "Apa arti 'die Besprechung'?", options: ["Istirahat", "Rapat", "Pulang", "Makan siang"], correctAnswer: 1 },
          { question: "Lawan kata 'einstellen' (mempekerjakan):", options: ["kündigen", "anstellen", "bestellen", "vorstellen"], correctAnswer: 0 },
        ],
      },

      // 8. KOMUNIKASI & HUBUNGAN
      {
        id: "kommunikation_beziehungen",
        title: "Kommunikation & Beziehungen",
        vocabulary: [
          { german: "verlieben", indonesian: "jatuh cinta", example: "Sich verlieben." },
          { german: "heiraten", indonesian: "menikah", example: "Sie heiraten morgen." },
          { german: "sich trennen", indonesian: "berpisah", example: "Wir haben uns getrennt." },
          { german: "das Vertrauen", indonesian: "kepercayaan", example: "Vertrauen ist wichtig." },
          { german: "enttäuschen", indonesian: "mengecewakan", example: "Er hat mich enttäuscht." },
          { german: "diskutieren", indonesian: "berdiskusi", example: "Wir diskutieren oft." },
          { german: "überzeugen", indonesian: "meyakinkan", example: "Das überzeugt mich." },
          { german: "vorschlagen", indonesian: "mengusulkan", example: "Ich schlage vor, wir gehen." },
          { german: "warnen", indonesian: "memperingatkan", example: "Ich habe dich gewarnt." },
          { german: "informieren", indonesian: "menginformasikan", example: "Bitte informieren Sie mich." },
        ],
        grammar: [
          {
            title: "Verben mit Präpositionen",
            explanation: "Pasangan wajib kata kerja.\n- warten AUF (menunggu)\n- träumen VON (mimpi tentang)\n- diskutieren ÜBER (diskusi tentang)",
            examples: ["Ich warte auf dich."],
          },
        ],
        dialogs: [
          {
            title: "Masalah Hubungan",
            lines: [
              { speaker: "A", german: "Wir müssen reden.", indonesian: "Kita harus bicara." },
              { speaker: "B", german: "Worüber willst du diskutieren?", indonesian: "Apa yang mau kamu diskusikan?" },
            ],
          },
        ],
        exercises: [
          { question: "Preposisi: Ich warte ___ (pada) den Bus.", options: ["auf", "an", "mit", "zu"], correctAnswer: 0 },
          { question: "Apa arti 'heiraten'?", options: ["Cerai", "Menikah", "Pacaran", "Berteman"], correctAnswer: 1 },
          { question: "Preposisi: Wir diskutieren ___ (tentang) Politik.", options: ["über", "auf", "mit", "in"], correctAnswer: 0 },
          { question: "Preposisi: Ich träume ___ (dari/tentang) dir.", options: ["von", "zu", "bei", "an"], correctAnswer: 0 },
          { question: "Lawan kata 'menikah':", options: ["sich trennen/scheiden", "verlieben", "verloben", "küssen"], correctAnswer: 0 },
          { question: "Apa arti 'enttäuschen'?", options: ["Membahagiakan", "Mengecewakan", "Marah", "Takut"], correctAnswer: 1 },
          { question: "Kata kerja 'meyakinkan':", options: ["überzeugen", "zeugen", "zeigen", "ziehen"], correctAnswer: 0 },
          { question: "Sinonim 'sagen/memberitahu':", options: ["informieren", "fragen", "hören", "sehen"], correctAnswer: 0 },
          { question: "Apa arti 'Vertrauen'?", options: ["Cinta", "Benci", "Kepercayaan", "Ragu"], correctAnswer: 2 },
          { question: "Kata kerja 'mengusulkan':", options: ["schlagen", "vorschlagen", "nachschlagen", "zuschlagen"], correctAnswer: 1 },
        ],
      },

      // 9. TRAVEL & DOKUMEN (Lanjutan)
      {
        id: "reisen_dokumente",
        title: "Reisen & Dokumente (Travel B1)",
        vocabulary: [
          { german: "der Pass", indonesian: "paspor", example: "Reisepass zeigen." },
          { german: "das Visum", indonesian: "visa", example: "Visum beantragen." },
          { german: "der Zoll", indonesian: "bea cukai", example: "Durch den Zoll gehen." },
          { german: "die Grenze", indonesian: "perbatasan", example: "An der Grenze." },
          { german: "das Gepäck", indonesian: "bagasi", example: "Gepäck aufgeben." },
          { german: "der Koffer", indonesian: "koper", example: "Koffer packen." },
          { german: "die Verspätung", indonesian: "keterlambatan", example: "Zug hat Verspätung." },
          { german: "der Stau", indonesian: "macet", example: "Stau auf der Autobahn." },
          { german: "gültig", indonesian: "berlaku", example: "Ist der Pass noch gültig?" },
          { german: "buchen", indonesian: "booking", example: "Flug buchen." },
          { german: "die Ampel", indonesian: "lampu merah", example: "Rote Ampel." },
        ],
        grammar: [
          {
            title: "Genitiv Präpositionen (wegen/trotz)",
            explanation: "Preposisi tingkat lanjut yang diikuti Genitiv.\n- WEGEN des Wetters (Gara-gara cuaca...)\n- TROTZ des Staus (Meskipun macet...).",
            examples: ["Wegen der Verspätung komme ich zu spät."],
          },
        ],
        dialogs: [
          {
            title: "Di Bandara",
            lines: [
              { speaker: "Beamter", german: "Ihren Pass, bitte.", indonesian: "Paspor Anda, tolong." },
              { speaker: "Reisender", german: "Hier ist er. Ist mein Visum gültig?", indonesian: "Ini dia. Apa visa saya berlaku?" },
            ],
          },
        ],
        exercises: [
          { question: "Apa arti 'der Stau'?", options: ["Kecelakaan", "Kemacetan", "Lampu merah", "Polisi"], correctAnswer: 1 },
          { question: "Preposisi Genitiv: ___ (Gara-gara) des Wetters.", options: ["Wegen", "Mit", "Für", "Zu"], correctAnswer: 0 },
          { question: "Dokumen untuk ke luar negeri:", options: ["der Pass", "die Karte", "der Zettel", "das Buch"], correctAnswer: 0 },
          { question: "Tempat pemeriksaan barang:", options: ["der Zoll", "die Polizei", "die Schule", "das Hotel"], correctAnswer: 0 },
          { question: "Lawan kata 'pünktlich' (tepat waktu) di kereta:", options: ["Verspätung haben", "ankommen", "fahren", "stoppen"], correctAnswer: 0 },
          { question: "Apa arti 'gültig'?", options: ["Kadaluarsa", "Berlaku/Valid", "Mahal", "Murah"], correctAnswer: 1 },
          { question: "Apa itu 'die Grenze'?", options: ["Kota", "Desa", "Perbatasan", "Jalan"], correctAnswer: 2 },
          { question: "Preposisi Genitiv: ___ (Meskipun) des Regens.", options: ["Trotz", "Wegen", "Mit", "Ohne"], correctAnswer: 0 },
          { question: "Kata kerja 'memesan' tiket/hotel:", options: ["buchen", "suchen", "kuchen", "fluchen"], correctAnswer: 0 },
          { question: "Warna lampu lalu lintas berhenti:", options: ["rot", "grün", "gelb", "blau"], correctAnswer: 0 },
        ],
      },

      // 10. POLITIK & HUKUM
      {
        id: "politik_recht",
        title: "Politik & Recht (Politik & Hukum)",
        vocabulary: [
          { german: "die Demokratie", indonesian: "demokrasi", example: "Freie Demokratie." },
          { german: "die Regierung", indonesian: "pemerintah", example: "Regierung wählen." },
          { german: "die Wahl", indonesian: "pemilihan/pemilu", example: "An der Wahl teilnehmen." },
          { german: "das Gesetz", indonesian: "hukum/UU", example: "Gesetz brechen." },
          { german: "der Rechtsanwalt", indonesian: "pengacara", example: "Anwalt anrufen." },
          { german: "das Gericht", indonesian: "pengadilan", example: "Vor Gericht." },
          { german: "die Menschenrechte", indonesian: "hak asasi manusia", example: "Menschenrechte achten." },
          { german: "erlauben", indonesian: "mengizinkan", example: "Es ist erlaubt." },
          { german: "verbieten", indonesian: "melarang", example: "Rauchen verboten." },
          { german: "die Partei", indonesian: "partai", example: "Politische Partei." },
        ],
        grammar: [
          {
            title: "Passiv dengan Modalverb",
            explanation: "Sesuatu HARUS/BISA dilakukan.\n- Das Gesetz MUSS geachtet WERDEN.\n- Das KANN gemacht WERDEN.",
            examples: ["Die Strafe muss bezahlt werden."],
          },
        ],
        dialogs: [
          {
            title: "Berita Politik",
            lines: [
              { speaker: "A", german: "Wer hat die Wahl gewonnen?", indonesian: "Siapa yang menang pemilu?" },
              { speaker: "B", german: "Die neue Partei hat gewonnen.", indonesian: "Partai baru yang menang." },
            ],
          },
        ],
        exercises: [
          { question: "Profesi yang bekerja di pengadilan:", options: ["der Arzt", "der Lehrer", "der Rechtsanwalt", "der Bäcker"], correctAnswer: 2 },
          { question: "Lawan kata 'mengizinkan' (erlauben):", options: ["fragen", "verbieten", "lassen", "geben"], correctAnswer: 1 },
          { question: "Apa arti 'die Wahl'?", options: ["Pilihan/Pemilu", "Jalan", "Tembok", "Hutan"], correctAnswer: 0 },
          { question: "Struktur Pasif Modal: Das Auto muss ___ werden.", options: ["repariert", "reparieren", "Reparatur", "reparierte"], correctAnswer: 0 },
          { question: "Apa arti 'Regierung'?", options: ["Rakyat", "Pemerintah", "Polisi", "Tentara"], correctAnswer: 1 },
          { question: "Tempat sidang hukum:", options: ["das Gericht", "die Küche", "der Markt", "das Kino"], correctAnswer: 0 },
          { question: "Hak dasar manusia:", options: ["Menschenrechte", "Menschenpflichten", "Menschenliebe", "Menschenhass"], correctAnswer: 0 },
          { question: "Sinonim 'Advokat':", options: ["Rechtsanwalt", "Richter", "Polizist", "Zeuge"], correctAnswer: 0 },
          { question: "Apa arti 'Partei'?", options: ["Pesta", "Partai", "Bagian", "Taman"], correctAnswer: 1 },
          { question: "Struktur Pasif Modal: Das kann gemacht ___.", options: ["wird", "werden", "wurde", "worden"], correctAnswer: 1 },
        ],
      },

      // 11. SAINS & LINGKUNGAN
      {
        id: "wissenschaft_umwelt",
        title: "Wissenschaft & Umwelt (Sains)",
        vocabulary: [
          { german: "die Forschung", indonesian: "penelitian", example: "Wichtige Forschung." },
          { german: "das Experiment", indonesian: "eksperimen", example: "Experiment durchführen." },
          { german: "die Theorie", indonesian: "teori", example: "In der Theorie." },
          { german: "analysieren", indonesian: "menganalisis", example: "Daten analysieren." },
          { german: "der Klimawandel", indonesian: "perubahan iklim", example: "Klimawandel stoppen." },
          { german: "die Umwelt", indonesian: "lingkungan", example: "Umwelt schützen." },
          { german: "die Verschmutzung", indonesian: "polusi", example: "Verschmutzung der Meere." },
          { german: "das Recycling", indonesian: "daur ulang", example: "Recycling von Papier." },
          { german: "die Energie", indonesian: "energi", example: "Grüne Energie." },
          { german: "die Nachhaltigkeit", indonesian: "keberlanjutan", example: "Nachhaltigkeit ist Trend." },
        ],
        grammar: [
          {
            title: "Nominalisierung (Kata Benda dari Kerja)",
            explanation: "Bahasa sains sering mengubah kata kerja jadi benda.\n- forschen -> die Forschung\n- verschmutzen -> die Verschmutzung",
            examples: ["Das Analysieren der Daten (dari analysieren)."],
          },
        ],
        dialogs: [
          {
            title: "Diskusi Iklim",
            lines: [
              { speaker: "A", german: "Der Klimawandel ist ein großes Problem.", indonesian: "Perubahan iklim itu masalah besar." },
              { speaker: "B", german: "Ja, wir müssen mehr Energie sparen.", indonesian: "Ya, kita harus lebih hemat energi." },
            ],
          },
        ],
        exercises: [
          { question: "Arti 'Klimawandel':", options: ["Cuaca", "Perubahan iklim", "Musim panas", "Hujan"], correctAnswer: 1 },
          { question: "Apa itu 'Recycling'?", options: ["Membuang", "Membakar", "Daur ulang", "Menimbun"], correctAnswer: 2 },
          { question: "Kata kerja untuk 'menganalisis':", options: ["analysieren", "denken", "machen", "sehen"], correctAnswer: 0 },
          { question: "Nominalisierung: 'forschen' menjadi...", options: ["die Forschung", "das Forschen", "der Forscher", "die Forsch"], correctAnswer: 0 },
          { question: "Apa arti 'Nachhaltigkeit'?", options: ["Keberlanjutan", "Kecepatan", "Kekuatan", "Kelemahan"], correctAnswer: 0 },
          { question: "Apa arti 'Verschmutzung'?", options: ["Pembersihan", "Polusi/Pencemaran", "Perbaikan", "Penjualan"], correctAnswer: 1 },
          { question: "Sinonim 'Experiment':", options: ["Versuch", "Suche", "Buch", "Tuch"], correctAnswer: 0 },
          { question: "Lawan kata 'schützen' (melindungi):", options: ["zerstören", "halten", "bewahren", "retten"], correctAnswer: 0 },
          { question: "Apa arti 'Energie sparen'?", options: ["Boros energi", "Hemat energi", "Jual energi", "Beli energi"], correctAnswer: 1 },
          { question: "Kata benda dari 'analysieren':", options: ["die Analyse", "das Analys", "der Analys", "die Analysierung"], correctAnswer: 0 },
        ],
      },

      // 12. KREATIVITAS & PRODUKSI
      {
        id: "kreativitaet",
        title: "Kreativität & Produktion",
        vocabulary: [
          { german: "herstellen", indonesian: "memproduksi", example: "Autos herstellen." },
          { german: "erfinden", indonesian: "menemukan (invensi)", example: "Wer hat das erfunden?" },
          { german: "entwickeln", indonesian: "mengembangkan", example: "Ideen entwickeln." },
          { german: "entwerfen", indonesian: "merancang/desain", example: "Haus entwerfen." },
          { german: "bauen", indonesian: "membangun", example: "Brücke bauen." },
          { german: "renovieren", indonesian: "merenovasi", example: "Wohnung renovieren." },
          { german: "reparieren", indonesian: "memperbaiki", example: "Handy reparieren." },
          { german: "basteln", indonesian: "membuat kerajinan", example: "Mit Kindern basteln." },
          { german: "schaffen", indonesian: "menciptakan/berhasil", example: "Wir schaffen das!" },
          { german: "dekorieren", indonesian: "mendekorasi", example: "Zimmer dekorieren." },
        ],
        grammar: [
          {
            title: "Partizip II sebagai Adjektiva",
            explanation: "Kata kerja bentuk ketiga jadi sifat.\n- das reparierte Auto (mobil yang sudah diperbaiki).\n- das renovierte Haus.",
            examples: ["Das gekochte Ei."],
          },
        ],
        dialogs: [
          {
            title: "Proyek Rumah",
            lines: [
              { speaker: "A", german: "Ich renoviere mein Zimmer.", indonesian: "Aku lagi renovasi kamarku." },
              { speaker: "B", german: "Brauchst du Hilfe beim Streichen?", indonesian: "Butuh bantuan ngecat?" },
            ],
          },
        ],
        exercises: [
          { question: "Siapa yang 'entwirft' (merancang) bangunan?", options: ["der Arzt", "der Architekt", "der Bäcker", "der Pilot"], correctAnswer: 1 },
          { question: "Sinonim 'kaputt machen' adalah lawan dari...", options: ["reparieren", "kaufen", "sehen", "essen"], correctAnswer: 0 },
          { question: "Apa arti 'erfinden'?", options: ["Mencari", "Menemukan (invensi)", "Membeli", "Menjual"], correctAnswer: 1 },
          { question: "Partizip II Adjektiv: Das ___ (kochen) Ei.", options: ["gekochte", "kochende", "kocht", "gekocht"], correctAnswer: 0 },
          { question: "Apa arti 'herstellen'?", options: ["Memproduksi", "Meletakkan", "Berdiri", "Mencuri"], correctAnswer: 0 },
          { question: "Sinonim 'entwickeln':", options: ["machen", "löschen", "kreieren/entwickeln", "schlafen"], correctAnswer: 2 },
          { question: "Apa arti 'basteln'?", options: ["Membuat kerajinan tangan", "Memasak", "Menari", "Berlari"], correctAnswer: 0 },
          { question: "Partizip II Adjektiv: Das ___ (reparieren) Auto.", options: ["reparierte", "reparierende", "repariert", "Reparatur"], correctAnswer: 0 },
          { question: "Arti 'Wir schaffen das':", options: ["Kita bisa melakukannya/berhasil", "Kita gagal", "Kita tidur", "Kita makan"], correctAnswer: 0 },
          { question: "Kata kerja 'mendekorasi':", options: ["dekorieren", "malen", "bauen", "kaufen"], correctAnswer: 0 },
        ],
      },

      // 13. KESEHATAN LANJUT
      {
        id: "gesundheit_detail",
        title: "Gesundheit (Lanjutan)",
        vocabulary: [
          { german: "die Operation", indonesian: "operasi", example: "Er braucht eine Operation." },
          { german: "die Verletzung", indonesian: "cedera", example: "Schwere Verletzung." },
          { german: "der Unfall", indonesian: "kecelakaan", example: "Autounfall." },
          { german: "die Spritze", indonesian: "suntikan", example: "Spritze geben." },
          { german: "bluten", indonesian: "berdarah", example: "Die Wunde blutet." },
          { german: "der Notarzt", indonesian: "dokter darurat", example: "Notarzt rufen." },
          { german: "schwanger", indonesian: "hamil", example: "Sie ist schwanger." },
          { german: "die Krankheit", indonesian: "penyakit", example: "Seltene Krankheit." },
          { german: "sich fühlen", indonesian: "merasa", example: "Wie fühlst du dich?" },
          { german: "der Schmerz", indonesian: "rasa sakit", example: "Schmerzen haben." },
        ],
        grammar: [
          {
            title: "Reflexive Verben (Lanjutan)",
            explanation: "Kata kerja refleksif untuk kesehatan.\n- Ich habe MICH verletzt (Saya melukai diri/terluka).\n- Ich fühle MICH krank.",
            examples: ["Er hat sich das Bein gebrochen."],
          },
        ],
        dialogs: [
          {
            title: "Kecelakaan",
            lines: [
              { speaker: "A", german: "Hilfe! Ein Unfall!", indonesian: "Tolong! Ada kecelakaan!" },
              { speaker: "B", german: "Ich rufe den Krankenwagen.", indonesian: "Aku panggil ambulans." },
            ],
          },
        ],
        exercises: [
          { question: "Bahasa Jerman 'Operasi':", options: ["die Option", "die Operation", "die Oper", "das Opfer"], correctAnswer: 1 },
          { question: "Lengkapi: Ich habe ___ (diri) verletzt.", options: ["mich", "dich", "sich", "uns"], correctAnswer: 0 },
          { question: "Apa arti 'bluten'?", options: ["Menangis", "Berdarah", "Berkeringat", "Muntah"], correctAnswer: 1 },
          { question: "Siapa yang dipanggil saat darurat?", options: ["der Notarzt", "der Lehrer", "der Koch", "der Frisör"], correctAnswer: 0 },
          { question: "Apa arti 'schwanger'?", options: ["Sakit", "Hamil", "Gemuk", "Kurus"], correctAnswer: 1 },
          { question: "Kata benda dari 'sakit' (krank):", options: ["die Krankheit", "das Krank", "der Kranke", "die Kränkung"], correctAnswer: 0 },
          { question: "Lengkapi: Wie fühlst du ___?", options: ["mich", "dich", "sich", "uns"], correctAnswer: 1 },
          { question: "Apa arti 'Spritze'?", options: ["Obat", "Suntikan", "Perban", "Kursi roda"], correctAnswer: 1 },
          { question: "Sinonim 'Schmerzen haben':", options: ["weh tun", "gut tun", "leid tun", "machen"], correctAnswer: 0 },
          { question: "Apa arti 'der Unfall'?", options: ["Kejutan", "Kecelakaan", "Hadiah", "Pesta"], correctAnswer: 1 },
        ],
      },

      // 14. GAYA HIDUP & ABSTRAK
      {
        id: "lifestyle_abstrak",
        title: "Lifestyle & Abstrak",
        vocabulary: [
          { german: "die Erfahrung", indonesian: "pengalaman", example: "Gute Erfahrung." },
          { german: "die Wahrheit", indonesian: "kebenaran", example: "Sag die Wahrheit." },
          { german: "die Lüge", indonesian: "kebohongan", example: "Das ist eine Lüge." },
          { german: "der Traum", indonesian: "mimpi", example: "Ein böser Traum." },
          { german: "die Freiheit", indonesian: "kebebasan", example: "Freiheit ist wichtig." },
          { german: "der Erfolg", indonesian: "kesuksesan", example: "Viel Erfolg!" },
          { german: "die Geduld", indonesian: "kesabaran", example: "Hab Geduld." },
          { german: "verwirklichen", indonesian: "mewujudkan", example: "Träume verwirklichen." },
          { german: "berücksichtigen", indonesian: "mempertimbangkan", example: "Bitte berücksichtigen." },
          { german: "die Beziehung", indonesian: "hubungan", example: "Gute Beziehung." },
        ],
        grammar: [
          {
            title: "Doppelkonnektoren (Konektor Ganda)",
            explanation: "Menghubungkan ide.\n- Sowohl ... als auch (Baik ... maupun).\n- Weder ... noch (Tidak ... dan juga tidak).",
            examples: ["Ich spreche sowohl Deutsch als auch Englisch."],
          },
        ],
        dialogs: [
          {
            title: "Tentang Hidup",
            lines: [
              { speaker: "A", german: "Was ist dir wichtig?", indonesian: "Apa yang penting buatmu?" },
              { speaker: "B", german: "Sowohl Freiheit als auch Erfolg.", indonesian: "Baik kebebasan maupun kesuksesan." },
            ],
          },
        ],
        exercises: [
          { question: "Lawan kata 'Wahrheit' (kebenaran):", options: ["Lüge", "Traum", "Witz", "Fehler"], correctAnswer: 0 },
          { question: "Arti 'Erfahrung':", options: ["Perjalanan", "Pengalaman", "Bahaya", "Harapan"], correctAnswer: 1 },
          { question: "Konektor: ___ er noch sie (Tidak dia dan tidak dia).", options: ["Weder", "Entweder", "Sowohl", "Je"], correctAnswer: 0 },
          { question: "Apa arti 'Geduld'?", options: ["Uang", "Kesabaran", "Emas", "Waktu"], correctAnswer: 1 },
          { question: "Apa arti 'verwirklichen'?", options: ["Menghancurkan", "Mewujudkan", "Melupakan", "Mencari"], correctAnswer: 1 },
          { question: "Sinonim 'bedenken/memikirkan':", options: ["berücksichtigen", "vergessen", "lachen", "schlafen"], correctAnswer: 0 },
          { question: "Apa arti 'Erfolg'?", options: ["Kegagalan", "Kesuksesan", "Awal", "Akhir"], correctAnswer: 1 },
          { question: "Lawan kata 'Lüge':", options: ["Wahrheit", "Traum", "Fantasi", "Cerita"], correctAnswer: 0 },
          { question: "Konektor: ___ billig als auch gut.", options: ["Sowohl", "Weder", "Je", "Zwar"], correctAnswer: 0 },
          { question: "Apa arti 'Beziehung'?", options: ["Hubungan", "Pemisahan", "Pertengkaran", "Jarak"], correctAnswer: 0 },
        ],
      },

      // 15. GRAMMAR EXPERT B1
      {
        id: "grammar_profi",
        title: "Grammatik Profi (Struktur Kalimat)",
        vocabulary: [
          { german: "ob", indonesian: "apakah (indirect)", example: "Ich weiß nicht, ob er kommt." },
          { german: "als", indonesian: "ketika (lampau)", example: "Als ich Kind war..." },
          { german: "wenn", indonesian: "jika/ketika", example: "Wenn ich Zeit habe." },
          { german: "während", indonesian: "selama/sementara", example: "Während ich esse..." },
          { german: "bevor", indonesian: "sebelum", example: "Bevor ich gehe..." },
          { german: "nachdem", indonesian: "setelah", example: "Nachdem ich gegessen hatte..." },
          { german: "damit", indonesian: "supaya", example: "Ich lerne, damit ich arbeite." },
          { german: "um...zu", indonesian: "untuk (tujuan)", example: "Ich lerne, um zu arbeiten." },
          { german: "obwohl", indonesian: "meskipun", example: "Obwohl es regnet." },
          { german: "trotzdem", indonesian: "namun/tetapi", example: "Es regnet, trotzdem gehe ich." },
        ],
        grammar: [
          {
            title: "Nebensatz-Konnektoren",
            explanation: "Kata penghubung yang melempar kata kerja ke ujung.\n- Ich weiß nicht, OB er zu Hause IST.\n- ALS ich klein WAR, spielte ich Fußball.\n- BEVOR du gehst, ruf mich an.",
            examples: ["Ich warte, bis du fertig bist."],
          },
        ],
        dialogs: [
          {
            title: "Cerita Waktu",
            lines: [
              { speaker: "A", german: "Wann hast du Deutsch gelernt?", indonesian: "Kapan kamu belajar Jerman?" },
              { speaker: "B", german: "Als ich in Berlin wohnte.", indonesian: "Pas aku tinggal di Berlin (lampau)." },
            ],
          },
        ],
        exercises: [
          { question: "Lengkapi: Ich weiß nicht, ___ (apakah) er kommt.", options: ["wenn", "ob", "dass", "weil"], correctAnswer: 1 },
          { question: "Kata sambung untuk kejadian lampau sekali terjadi: ___ ich klein war.", options: ["Wenn", "Als", "Wann", "Wo"], correctAnswer: 1 },
          { question: "Lengkapi: ___ (sebelum) ich esse, wasche ich die Hände.", options: ["Bevor", "Nachdem", "Während", "Als"], correctAnswer: 0 },
          { question: "Struktur: Ich lerne Deutsch, ___ (untuk) zu arbeiten.", options: ["um", "damit", "weil", "dass"], correctAnswer: 0 },
          { question: "Lengkapi: ___ (selama) ich schlafe, träume ich.", options: ["Während", "Bevor", "Nachdem", "Seit"], correctAnswer: 0 },
          { question: "Posisi kata kerja dengan 'weil': Ich gehe, weil ich müde ___.", options: ["bin", "bist", "ist", "sind"], correctAnswer: 0 },
          { question: "Kata sambung 'jika':", options: ["wenn", "als", "wann", "ob"], correctAnswer: 0 },
          { question: "Lengkapi: Er fragt, ___ (apakah) du Zeit hast.", options: ["ob", "wenn", "dass", "weil"], correctAnswer: 0 },
          { question: "Arti 'nachdem':", options: ["Sebelum", "Setelah", "Selama", "Ketika"], correctAnswer: 1 },
          { question: "Struktur: Ich arbeite, ___ (supaya) ich Geld habe.", options: ["damit", "um", "zu", "weil"], correctAnswer: 0 },
        ],
      },
      // 16. KECANTIKAN & MODE (Sisa Daftar Kosakata B1)
      {
        id: "beauty_fashion",
        title: "Beauty & Fashion",
        vocabulary: [
          { german: "das Make-up", indonesian: "riasan", example: "Dezentes Make-up tragen." },
          { german: "der Lippenstift", indonesian: "lipstik", example: "Roter Lippenstift." },
          { german: "die Frisur", indonesian: "gaya rambut", example: "Neue Frisur." },
          { german: "der Friseur", indonesian: "penata rambut", example: "Termin beim Friseur." },
          { german: "das Model", indonesian: "model", example: "Sie arbeitet als Model." },
          { german: "der Haarschnitt", indonesian: "potongan rambut", example: "Kurzer Haarschnitt." },
          { german: "der Bart", indonesian: "jenggot", example: "Bart rasieren." },
          { german: "das Parfüm", indonesian: "parfum", example: "Das Parfüm riecht gut." },
          { german: "die Creme", indonesian: "krim", example: "Creme für die Haut." },
          { german: "pflegen", indonesian: "merawat", example: "Haut pflegen." },
        ],
        grammar: [
          {
            title: "N-Deklination (Kata Benda Lemah)",
            explanation: "Spesial B1! Beberapa kata benda maskulin mendapat akhiran '-n' di semua kasus (kecuali Nominativ).\n- Der Kollege -> Ich sehe den KollegeN.\n- Der Name -> Ich schreibe den NameN.\n- Der Kunde -> Ich helfe dem KundeN.",
            examples: ["Ich spreche mit dem Polizisten.", "Wir fragen den Experten."],
          },
        ],
        dialogs: [
          {
            title: "Di Salon",
            lines: [
              { speaker: "Friseur", german: "Was machen wir heute?", indonesian: "Mau diapain hari ini?" },
              { speaker: "Kunde", german: "Nur schneiden, bitte. Keine Farbe.", indonesian: "Potong aja, tolong. Gak pake warna." },
              { speaker: "Friseur", german: "Möchten Sie auch eine Rasur?", indonesian: "Mau cukur juga?" },
            ],
          },
        ],
        exercises: [
          { question: "Profesi penata rambut:", options: ["der Frisör/Friseur", "der Bäcker", "der Schneider", "der Maler"], correctAnswer: 0 },
          { question: "N-Deklination: Ich kenne den ___ (Jurnalis).", options: ["Journalist", "Journalisten", "Journalister", "Journaliste"], correctAnswer: 1 },
        ],
      },

      // 17. GRAMMAR EXPERT II (Masa Lampau Ganda)
      {
        id: "plusquamperfekt",
        title: "Grammatik Expert: Plusquamperfekt",
        vocabulary: [
          { german: "nachdem", indonesian: "setelah (urutan waktu)", example: "Nachdem ich gegessen hatte..." },
          { german: "bevor", indonesian: "sebelum", example: "Bevor ich gehe..." },
          { german: "sobald", indonesian: "segera setelah", example: "Sobald er da war..." },
          { german: "schließlich", indonesian: "akhirnya", example: "Schließlich gelang es." },
          { german: "zuerst", indonesian: "pertama-tama", example: "Zuerst duschen." },
          { german: "danach", indonesian: "setelah itu", example: "Danach frühstücken." },
          { german: "anschließend", indonesian: "selanjutnya", example: "Anschließend gehen wir." },
          { german: "vorher", indonesian: "sebelumnya", example: "Vorher anrufen." },
        ],
        grammar: [
          {
            title: "Plusquamperfekt (Masa Lampau Sempurna)",
            explanation: "Kejadian yang SUDAH SELESAI sebelum kejadian lain di masa lampau.\nRumus: hatte/war + Partizip II.\n- Nachdem ich gegessen HATTE, GING ich ins Bett (Setelah aku SUDAH makan, aku pergi tidur).\nUrutannya: 1. Makan (Plusquamperfekt) -> 2. Tidur (Präteritum).",
            examples: ["Er war schon gegangen, als ich ankam.", "Sie hatte das Buch gelesen, bevor sie den Film sah."],
          },
        ],
        dialogs: [
          {
            title: "Urutan Kejadian",
            lines: [
              { speaker: "A", german: "Warum warst du gestern so müde?", indonesian: "Kenapa kamu capek banget kemarin?" },
              { speaker: "B", german: "Weil ich in der Nacht davor nicht geschlafen hatte.", indonesian: "Karena malam sebelumnya aku gak tidur (sudah terjadi sebelum capek)." },
            ],
          },
        ],
        exercises: [
          { question: "Lengkapi: Nachdem er ___ (belajar), machte er Pause.", options: ["gelernt hatte", "gelernt hat", "lernen war", "hatte gelernt"], correctAnswer: 0 },
          { question: "Kata sambung urutan waktu: ___ ich aß, trank ich Wasser.", options: ["Während", "Bevor", "Nachdem", "Seit"], correctAnswer: 1 },
        ],
      },
    ],
  },
  {
    id: "B2",
    title: "B2 - Menengah Atas (Expert)",
    description: "Penguasaan total: Debat, bahasa bisnis, analisis ilmiah, idiom, dan nuansa bahasa yang halus.",
    subSections: [
      // 1. ARGUMENTASI & DISKUSI (Gabungan Materi Asli + Vocab Komunikasi)
      {
        id: "argumentation",
        title: "Argumentation & Diskussion",
        vocabulary: [
          { german: "einerseits ... andererseits", indonesian: "di satu sisi ... di sisi lain", example: "Einerseits ist es teuer, andererseits ist es gut." },
          { german: "sowohl ... als auch", indonesian: "baik ... maupun", example: "Ich spreche sowohl Deutsch als auch Englisch." },
          { german: "weder ... noch", indonesian: "tidak ... dan juga tidak", example: "Er isst weder Fleisch noch Fisch." },
          { german: "je ... desto", indonesian: "semakin ... semakin", example: "Je mehr ich lerne, desto besser verstehe ich." },
          { german: "zwar ... aber", indonesian: "memang ... tapi", example: "Es ist zwar kalt, aber sonnig." },
          { german: "der Standpunkt", indonesian: "sudut pandang", example: "Vertreten Sie Ihren Standpunkt." },
          { german: "die Ansicht", indonesian: "pandangan/opini", example: "Meiner Ansicht nach ist das falsch." },
          { german: "überzeugen", indonesian: "meyakinkan", example: "Deine Argumente haben mich überzeugt." },
          { german: "widersprechen", indonesian: "membantah/bertentangan", example: "Ich muss dir widersprechen." },
          { german: "behaupten", indonesian: "mengklaim", example: "Er behauptet, er wisse nichts." },
          { german: "bezweifeln", indonesian: "meragukan", example: "Ich bezweifle, dass das stimmt." },
        ],
        grammar: [
          {
            title: "Zweiteilige Konnektoren (Konektor Ganda)",
            explanation: "Ciri khas B2. Menghubungkan dua ide dengan lebih canggih.\n- Je schneller, desto besser (Semakin cepat, semakin baik).\n- Entweder wir gehen jetzt, oder wir bleiben hier (Entah kita pergi, atau diam).",
            examples: ["Nicht nur billig, sondern auch gut.", "Zwar schwierig, aber machbar."],
          },
          {
            title: "Verben der Meinungsäußerung",
            explanation: "Cara menyampaikan pendapat selain 'Ich denke...'.\n- Ich bin der Meinung, dass...\n- Ich stehe auf dem Standpunkt, dass...\n- Es liegt auf der Hand, dass... (Sudah jelas bahwa...)",
            examples: ["Ich bin davon überzeugt, dass wir gewinnen."],
          },
        ],
        dialogs: [
          {
            title: "Debat Teknologi",
            lines: [
              { speaker: "A", german: "Einerseits vernetzt uns Social Media.", indonesian: "Di satu sisi, Sosmed menghubungkan kita." },
              { speaker: "B", german: "Andererseits verlieren wir die Privatsphäre.", indonesian: "Di sisi lain, kita kehilangan privasi." },
              { speaker: "A", german: "Je mehr wir teilen, desto gläserner werden wir.", indonesian: "Semakin banyak kita berbagi, semakin transparan kita." },
            ],
          },
        ],
        exercises: [
          { question: "Lengkapi: ___ mehr du übst, desto besser wirst du.", options: ["Je", "Desto", "Um", "Weil"], correctAnswer: 0 },
          { question: "Konektor: Er ist ___ reich, ___ unglücklich (memang...tapi).", options: ["zwar...aber", "weder...noch", "entweder...oder", "je...desto"], correctAnswer: 0 },
          { question: "Sinonim 'meiner Meinung nach':", options: ["meiner Ansicht nach", "meiner Idee nach", "meinem Kopf nach", "meinem Wissen nach"], correctAnswer: 0 },
          { question: "Apa arti 'widersprechen'?", options: ["Setuju", "Diam", "Membantah", "Bertanya"], correctAnswer: 2 },
          { question: "Pasangan 'weder' (tidak) adalah...", options: ["oder", "noch", "aber", "als"], correctAnswer: 1 },
        ],
      },

      // 2. TEKNOLOGI & MEDIA (Dari Daftar B2 Raksasa)
      {
        id: "technologie",
        title: "Technologie & Digitale Medien",
        vocabulary: [
          { german: "die Programmiersprache", indonesian: "bahasa pemrograman", example: "Python ist eine Programmiersprache." },
          { german: "der Algorithmus", indonesian: "algoritma", example: "Der Algorithmus bestimmt den Feed." },
          { german: "die Datenbank", indonesian: "basis data", example: "Datenbank aktualisieren." },
          { german: "die Verschlüsselung", indonesian: "enkripsi", example: "Sichere Verschlüsselung." },
          { german: "der Entwickler", indonesian: "developer", example: "App-Entwickler." },
          { german: "die künstliche Intelligenz", indonesian: "kecerdasan buatan (AI)", example: "KI verändert die Welt." },
          { german: "virtuell", indonesian: "virtual", example: "Virtuelle Realität." },
          { german: "zugreifen", indonesian: "mengakses", example: "Auf Daten zugreifen." },
          { german: "speichern", indonesian: "menyimpan", example: "In der Cloud speichern." },
          { german: "löschen", indonesian: "menghapus", example: "Datei endgültig löschen." },
          { german: "hochladen", indonesian: "upload", example: "Video hochladen." },
          { german: "herunterladen", indonesian: "download", example: "Software herunterladen." },
        ],
        grammar: [
          {
            title: "Zustandspassiv (Pasif Keadaan)",
            explanation: "Menjelaskan HASIL dari sebuah aksi. Rumus: sein + Partizip II.\n- Das Fenster wird geöffnet (Aksi: sedang dibuka).\n- Das Fenster IST geöffnet (Keadaan: sudah terbuka).",
            examples: ["Das Programm ist installiert.", "Die Datei ist gespeichert."],
          },
        ],
        dialogs: [
          {
            title: "Masalah Server",
            lines: [
              { speaker: "Admin", german: "Der Server ist abgestürzt.", indonesian: "Servernya crash." },
              { speaker: "User", german: "Sind die Daten gesichert?", indonesian: "Apa datanya sudah dibackup (keadaan)?" },
              { speaker: "Admin", german: "Ja, das Backup ist erstellt.", indonesian: "Ya, backup sudah dibuat." },
            ],
          },
        ],
        exercises: [
          { question: "Bentuk Pasif Keadaan: Die Tür ___ (schließen).", options: ["ist geschlossen", "wird geschlossen", "hat geschlossen", "war schließen"], correctAnswer: 0 },
          { question: "Bahasa Jerman 'Kecerdasan Buatan':", options: ["Künstliche Intelligenz", "Kluge Maschine", "Schlauer Roboter", "Virtuelle Welt"], correctAnswer: 0 },
          { question: "Lawan kata 'hochladen':", options: ["runterladen/herunterladen", "aufladen", "einladen", "ausladen"], correctAnswer: 0 },
          { question: "Apa arti 'zugreifen'?", options: ["Menghapus", "Mengetik", "Mengakses", "Mengirim"], correctAnswer: 2 },
          { question: "Kata sifat untuk 'tidak nyata':", options: ["aktuell", "virtuell", "manuell", "visuell"], correctAnswer: 1 },
        ],
      },

      // 3. BISNIS & EKONOMI (Dari Daftar B2 Raksasa)
      {
        id: "wirtschaft",
        title: "Wirtschaft & Management",
        vocabulary: [
          { german: "das Unternehmen", indonesian: "perusahaan", example: "Ein globales Unternehmen." },
          { german: "die Wirtschaft", indonesian: "ekonomi", example: "Die Wirtschaft wächst." },
          { german: "die Nachfrage", indonesian: "permintaan", example: "Hohe Nachfrage nach Autos." },
          { german: "das Angebot", indonesian: "penawaran", example: "Angebot und Nachfrage." },
          { german: "der Wettbewerb", indonesian: "kompetisi", example: "Starker Wettbewerb." },
          { german: "die Inflation", indonesian: "inflasi", example: "Die Inflation steigt." },
          { german: "die Strategie", indonesian: "strategi", example: "Langfristige Strategie." },
          { german: "investieren", indonesian: "berinvestasi", example: "In Aktien investieren." },
          { german: "verhandeln", indonesian: "bernegosiasi", example: "Über den Preis verhandeln." },
          { german: "die Entscheidung treffen", indonesian: "membuat keputusan", example: "Wir müssen eine Entscheidung treffen." },
          { german: "delegieren", indonesian: "mendelegasikan", example: "Aufgaben delegieren." },
        ],
        grammar: [
          {
            title: "Partizipien als Adjektive (Partizip I & II)",
            explanation: "Membuat kalimat padat khas bisnis.\n- Partizip I (Aktif/-ing): Die steigenden Preise (Harga yang sedang naik).\n- Partizip II (Pasif/-ed): Das verkaufte Haus (Rumah yang sudah terjual).",
            examples: ["Der verhandelte Preis.", "Die wachsende Wirtschaft."],
          },
        ],
        dialogs: [
          {
            title: "Rapat Strategi",
            lines: [
              { speaker: "Chef", german: "Angesichts der steigenden Inflation müssen wir handeln.", indonesian: "Mengingat inflasi yang sedang naik, kita harus bertindak." },
              { speaker: "Manager", german: "Wir sollten die Preise anpassen.", indonesian: "Kita harus menyesuaikan harga." },
            ],
          },
        ],
        exercises: [
          { question: "Partizip I dari 'wachsen' (tumbuh): Die ___ Wirtschaft.", options: ["wachsende", "gewachsene", "wächst", "wachsen"], correctAnswer: 0 },
          { question: "Istilah ekonomi 'Supply & Demand':", options: ["Geben und Nehmen", "Angebot und Nachfrage", "Kauf und Verkauf", "Geld und Ware"], correctAnswer: 1 },
          { question: "Ungkapan 'Membuat keputusan':", options: ["Entscheidung machen", "Entscheidung tun", "Entscheidung treffen", "Entscheidung bilden"], correctAnswer: 2 },
          { question: "Apa arti 'der Wettbewerb'?", options: ["Kerjasama", "Kompetisi", "Keuntungan", "Kerugian"], correctAnswer: 1 },
          { question: "Lawan kata 'steigen' (naik) untuk harga:", options: ["sinken", "laufen", "fliegen", "springen"], correctAnswer: 0 },
        ],
      },

      // 4. POLITIK & HUKUM (Dari Daftar B2 Raksasa + Konjunktiv I)
      {
        id: "politik_recht",
        title: "Politik, Recht & Gesellschaft",
        vocabulary: [
          { german: "die Regierung", indonesian: "pemerintah", example: "Die Regierung plant Gesetze." },
          { german: "das Parlament", indonesian: "parlemen", example: "Rede im Parlament." },
          { german: "die Demokratie", indonesian: "demokrasi", example: "Wir leben in einer Demokratie." },
          { german: "das Gesetz", indonesian: "hukum/UU", example: "Das Gesetz verabschieden." },
          { german: "der Rechtsanwalt", indonesian: "pengacara", example: "Fragen Sie Ihren Anwalt." },
          { german: "das Gericht", indonesian: "pengadilan", example: "Vor Gericht gehen." },
          { german: "die Menschenrechte", indonesian: "hak asasi manusia", example: "Menschenrechte achten." },
          { german: "der Kandidat", indonesian: "kandidat", example: "Kandidat für das Amt." },
          { german: "genehmigen", indonesian: "menyetujui/mengizinkan", example: "Der Bau wurde genehmigt." },
          { german: "sanktionieren", indonesian: "memberi sanksi", example: "Das Land wurde sanktioniert." },
        ],
        grammar: [
          {
            title: "Konjunktiv I (Indirekte Rede)",
            explanation: "Wajib untuk berita/laporan. Mengutip perkataan orang lain secara netral.\n- er sei (katanya dia adalah)\n- er habe (katanya dia punya)\n- er werde (katanya dia akan)\n- er komme (katanya dia datang)",
            examples: ["Der Sprecher sagte, die Wahl sei manipuliert.", "Er behauptet, er wisse von nichts."],
          },
        ],
        dialogs: [
          {
            title: "Berita TV",
            lines: [
              { speaker: "Reporter", german: "Der Präsident sagte, er werde die Steuern senken.", indonesian: "Presiden berkata (katanya) dia akan menurunkan pajak." },
              { speaker: "Zuschauer", german: "Das glaube ich erst, wenn ich es sehe.", indonesian: "Aku baru percaya kalau sudah melihatnya." },
            ],
          },
        ],
        exercises: [
          { question: "Konjunktiv I dari 'sein' (dia): Er ___.", options: ["ist", "war", "sei", "wäre"], correctAnswer: 2 },
          { question: "Tempat kerja pengacara dan hakim:", options: ["das Büro", "das Gericht", "die Schule", "die Fabrik"], correctAnswer: 1 },
          { question: "Apa arti 'genehmigen'?", options: ["Menolak", "Melarang", "Menyetujui/Mengizinkan", "Menghukum"], correctAnswer: 2 },
          { question: "Bahasa Jerman 'Hak Asasi Manusia':", options: ["Menschenpflichten", "Menschenrechte", "Menschenleben", "Bürgerrechte"], correctAnswer: 1 },
          { question: "Kutipan berita: Der Minister sagte, er ___ (haben) keine Zeit.", options: ["hat", "hätte", "habe", "hatte"], correctAnswer: 2 },
        ],
      },

      // 5. SAINS & STRUKTUR KOMPLEKS (Gabungan Materi Asli 'Passiv' + Sains)
      {
        id: "wissenschaft_passiv",
        title: "Wissenschaft & Komplexe Strukturen",
        vocabulary: [
          { german: "die Forschung", indonesian: "penelitian", example: "Forschung kostet Geld." },
          { german: "die Hypothese", indonesian: "hipotesis", example: "Eine Hypothese aufstellen." },
          { german: "das Experiment", indonesian: "eksperimen", example: "Ein Experiment durchführen." },
          { german: "analysieren", indonesian: "menganalisis", example: "Daten analysieren." },
          { german: "definieren", indonesian: "mendefinisikan", example: "Begriffe definieren." },
          { german: "herstellen", indonesian: "memproduksi (manufaktur)", example: "In Deutschland hergestellt." },
          { german: "entwickeln", indonesian: "mengembangkan", example: "Neue Methode entwickeln." },
          { german: "entdecken", indonesian: "menemukan (discovery)", example: "Ein neues Virus entdeckt." },
          { german: "die Ursache", indonesian: "penyebab", example: "Ursache und Wirkung." },
          { german: "die Wirkung", indonesian: "dampak/efek", example: "Große Wirkung." },
        ],
        grammar: [
          {
            title: "Vorgangspassiv (Pasif Proses)",
            explanation: "Fokus pada kejadian. Pelaku (Von/Durch) sering dihilangkan.\n- Das Auto wird repariert (sedang diperbaiki).\n- Das Auto WURDE repariert (sudah diperbaiki - lampau).\n- Das Auto IST repariert WORDEN (sudah diperbaiki - perfekt).",
            examples: ["Die Ergebnisse werden analysiert.", "Penicillin wurde von Fleming entdeckt."],
          },
          {
            title: "Passiversatzformen (Alternatif Pasif)",
            explanation: "Cara lain bilang pasif yang lebih 'akademis'.\n- ist zu lösen = muss gelöst werden (harus diselesaikan).\n- lässt sich machen = kann gemacht werden (bisa dilakukan).",
            examples: ["Das Problem lässt sich lösen.", "Die Gefahr ist nicht zu unterschätzen."],
          },
        ],
        dialogs: [
          {
            title: "Diskusi Ilmiah",
            lines: [
              { speaker: "A", german: "Die Probe muss analysiert werden.", indonesian: "Sampel harus dianalisis." },
              { speaker: "B", german: "Das lässt sich heute noch machen.", indonesian: "Itu bisa dilakukan hari ini juga." },
            ],
          },
        ],
        exercises: [
          { question: "Bentuk Pasif: Das Haus ___ 1990 gebaut.", options: ["wird", "wurde", "ist", "hat"], correctAnswer: 1 },
          { question: "Arti 'Das lässt sich reparieren':", options: ["Itu harus diperbaiki", "Itu bisa diperbaiki", "Itu tidak bisa diperbaiki", "Itu sedang diperbaiki"], correctAnswer: 1 },
          { question: "Sinonim 'produzieren':", options: ["herstellen", "bestellen", "vorstellen", "ausstellen"], correctAnswer: 0 },
          { question: "Apa arti 'die Ursache'?", options: ["Akibat", "Penyebab", "Solusi", "Masalah"], correctAnswer: 1 },
          { question: "Siapa penemu benua Amerika? Amerika wurde ___ Kolumbus entdeckt.", options: ["durch", "mit", "von", "über"], correctAnswer: 2 },
        ],
      },

      // 6. HARAPAN & REALITA (Materi Asli 'Konjunktiv II' + Abstrak)
      {
        id: "wuensche_realitaet",
        title: "Wünsche, Träume & Irrealität",
        vocabulary: [
          { german: "die Hoffnung", indonesian: "harapan", example: "Die Hoffnung stirbt zuletzt." },
          { german: "die Enttäuschung", indonesian: "kekecewaan", example: "Große Enttäuschung." },
          { german: "die Realität", indonesian: "realita", example: "Zurück in die Realität." },
          { german: "bereuen", indonesian: "menyesali", example: "Ich bereue nichts." },
          { german: "wünschen", indonesian: "berharap/menginginkan", example: "Ich wünsche mir Ruhe." },
          { german: "sich vorstellen", indonesian: "membayangkan", example: "Stell dir vor, wir gewinnen." },
          { german: "hätte", indonesian: "punya (andaikan)", example: "Hätte ich doch Zeit!" },
          { german: "wäre", indonesian: "adalah (andaikan)", example: "Wäre ich doch dort!" },
          { german: "würde", indonesian: "akan (andaikan)", example: "Ich würde kommen, wenn..." },
        ],
        grammar: [
          {
            title: "Konjunktiv II (Vergangenheit)",
            explanation: "Menyesali masa lalu. Rumus: wäre/hätte + Partizip II.\n- Ich wäre gekommen (Seandainya aku datang - faktanya nggak).\n- Ich hätte das gekauft (Seandainya aku beli itu - faktanya nggak).",
            examples: ["Hätte ich mehr gelernt, hätte ich bestanden.", "Wäre er pünktlich gewesen, hätten wir den Zug bekommen."],
          },
        ],
        dialogs: [
          {
            title: "Penyesalan",
            lines: [
              { speaker: "A", german: "Hättest du doch auf mich gehört!", indonesian: "Coba aja kamu dengerin aku!" },
              { speaker: "B", german: "Ja, dann wäre das nicht passiert.", indonesian: "Ya, kalau gitu ini gak bakal kejadian." },
            ],
          },
        ],
        exercises: [
          { question: "Lengkapi: Wenn ich reich ___, würde ich reisen.", options: ["bin", "war", "wäre", "gewesen"], correctAnswer: 2 },
          { question: "Bentuk lampau Konjunktiv II: Ich ___ das Auto gekauft (tapi gak jadi).", options: ["hätte", "habe", "hatte", "würde"], correctAnswer: 0 },
          { question: "Apa arti 'bereuen'?", options: ["Bahagia", "Menyesali", "Berharap", "Marah"], correctAnswer: 1 },
          { question: "Sinonim 'sich vorstellen' (imajinasi):", options: ["membayangkan", "memperkenalkan", "memesan", "melihat"], correctAnswer: 0 },
          { question: "Struktur: ___ ich Zeit, käme ich.", options: ["Habe", "Hätte", "Hat", "Hatten"], correctAnswer: 1 },
        ],
      },

      // 7. IDIOM & GAYA BAHASA (Materi Tambahan "Super Detail")
      {
        id: "idiome_ausdruck",
        title: "Idiome & Nomen-Verb-Verbindungen",
        vocabulary: [
          // Nomen-Verb-Verbindungen (Bahasa Formal)
          { german: "eine Entscheidung treffen", indonesian: "membuat keputusan", example: "Wir müssen eine Entscheidung treffen." },
          { german: "Kritik üben", indonesian: "mengkritik", example: "Er übt Kritik an der Regierung." },
          { german: "einen Vorschlag machen", indonesian: "memberi usulan", example: "Darf ich einen Vorschlag machen?" },
          { german: "Rücksicht nehmen", indonesian: "bertenggang rasa/memperhatikan", example: "Bitte nehmen Sie Rücksicht." },
          { german: "in Frage kommen", indonesian: "menjadi opsi/mungkin", example: "Das kommt nicht in Frage!" },
          { german: "zur Verfügung stehen", indonesian: "tersedia", example: "Ich stehe gerne zur Verfügung." },
          // Idiome (Bahasa Gaul/Kiasan)
          { german: "Schwein haben", indonesian: "beruntung (hoki)", example: "Da hast du Schwein gehabt!" },
          { german: "Tomaten auf den Augen haben", indonesian: "tidak melihat apa yang jelas", example: "Hast du Tomaten auf den Augen?" },
          { german: "Ich verstehe nur Bahnhof", indonesian: "Saya tidak mengerti sama sekali", example: "Was sagst du? Ich verstehe nur Bahnhof." },
          { german: "den Nagel auf den Kopf treffen", indonesian: "tepat sasaran", example: "Du hast den Nagel auf den Kopf getroffen." },
          { german: "zwei Fliegen mit einer Klappe schlagen", indonesian: "sekali dayung dua pulau terlampaui", example: "So schlagen wir zwei Fliegen mit einer Klappe." },
        ],
        grammar: [
          {
            title: "Nomen-Verb-Verbindungen",
            explanation: "Kunci bahasa Jerman tingkat lanjut. Mengganti kata kerja simpel dengan Frasa Benda.\n- kritisieren -> Kritik üben\n- entscheiden -> eine Entscheidung treffen\n- helfen -> Hilfe leisten",
            examples: ["Das Gesetz tritt in Kraft (mulai berlaku).", "Er stellt eine Frage (daripada 'er fragt')."],
          },
        ],
        dialogs: [
          {
            title: "Rapat Kantor",
            lines: [
              { speaker: "Chef", german: "Wir müssen eine Entscheidung treffen.", indonesian: "Kita harus ambil keputusan." },
              { speaker: "Mitarbeiter", german: "Dieser Plan kommt nicht in Frage.", indonesian: "Rencana ini tidak mungkin (tidak masuk opsi)." },
              { speaker: "Chef", german: "Dann machen Sie einen besseren Vorschlag.", indonesian: "Kalau gitu kasih usulan yang lebih baik." },
            ],
          },
        ],
        exercises: [
          { question: "Arti 'Ich verstehe nur Bahnhof':", options: ["Saya mau ke stasiun", "Saya suka kereta", "Saya tidak mengerti sama sekali", "Saya paham sedikit"], correctAnswer: 2 },
          { question: "Lengkapi: Wir müssen eine Entscheidung ___.", options: ["machen", "treffen", "tun", "geben"], correctAnswer: 1 },
          { question: "Apa arti 'Schwein haben'?", options: ["Punya babi", "Jorok", "Beruntung", "Sial"], correctAnswer: 2 },
          { question: "Sinonim 'kritisieren':", options: ["Kritik üben", "Kritik machen", "Kritik tun", "Kritik haben"], correctAnswer: 0 },
          { question: "Arti 'In Frage kommen':", options: ["Bertanya", "Menjadi opsi/mungkin", "Menjawab", "Meragukan"], correctAnswer: 1 },
        ],
      },
      // 8. ASUMSI & RUMOR (Subjektive Modalverben - Materi B2 Hardcore!)
      {
        id: "subjektive_modalverben",
        title: "Vermutungen & Gerüchte (Asumsi & Rumor)",
        vocabulary: [
          { german: "dürfte", indonesian: "kemungkinan besar (90%)", example: "Das dürfte stimmen." },
          { german: "müsste", indonesian: "seharusnya (pasti)", example: "Er müsste gleich kommen." },
          { german: "könnte", indonesian: "bisa jadi (50%)", example: "Es könnte regnen." },
          { german: "soll", indonesian: "kabarnya/katanya (rumor)", example: "Er soll sehr reich sein." },
          { german: "wollen", indonesian: "mengaku (padahal belum tentu)", example: "Er will den Präsidenten kennen." },
          { german: "vermutlich", indonesian: "diduga/kemungkinan", example: "Täter vermutlich gefasst." },
          { german: "wahrscheinlich", indonesian: "kemungkinan besar", example: "Wahrscheinlich kommt er." },
          { german: "angeblich", indonesian: "konon/katanya", example: "Angeblich ist es gesund." },
          { german: "scheinen", indonesian: "tampaknya", example: "Es scheint zu funktionieren." },
        ],
        grammar: [
          {
            title: "Subjektive Bedeutung der Modalverben",
            explanation: "Modalverben bisa berubah arti jadi 'tebakan':\n- Er MUSS krank sein (Dia PASTI sakit - kesimpulan logis).\n- Er KÖNNTE krank sein (Dia MUNGKIN sakit - tebakan).\n- Er SOLL krank sein (KATANYA dia sakit - rumor dari orang lain).",
            examples: ["Der Film soll gut sein (Kata orang filmnya bagus).", "Sie will alles wissen (Dia ngaku-ngaku tahu semuanya)."],
          },
        ],
        dialogs: [
          {
            title: "Gosip Kantor",
            lines: [
              { speaker: "A", german: "Hast du gehört? Der Chef soll kündigen.", indonesian: "Denger gak? Katanya bos mau resign." },
              { speaker: "B", german: "Das kann nicht sein. Er dürfte zufrieden sein.", indonesian: "Gak mungkin. Dia kayaknya puas-puas aja." },
              { speaker: "A", german: "Aber er will ein neues Angebot haben.", indonesian: "Tapi dia ngakunya dapet tawaran baru." },
            ],
          },
        ],
        exercises: [
          { question: "Arti 'Er soll reich sein':", options: ["Dia pasti kaya", "Dia ingin kaya", "Katanya dia kaya (rumor)", "Dia harus kaya"], correctAnswer: 2 },
          { question: "Tebakan yang sangat yakin (90%): 'Das ___ stimmen.'", options: ["könnte", "dürfte", "mag", "darf"], correctAnswer: 1 },
          { question: "Arti 'Er will es nicht gewusst haben':", options: ["Dia tidak mau tahu", "Dia mengaku tidak tahu (tapi meragukan)", "Dia akan tahu", "Dia pasti tahu"], correctAnswer: 1 },
          { question: "Sinonim 'angeblich' (konon):", options: ["sicher", "wirklich", "vermutlich/soll", "falsch"], correctAnswer: 2 },
          { question: "Modalverb untuk kesimpulan logis (Pasti begitu!):", options: ["müssen", "können", "dürfen", "wollen"], correctAnswer: 0 },
        ],
      },

      // 9. NUANSA BAHASA (Modalpartikeln - Biar ngomong kayak Native)
      {
        id: "modalpartikeln",
        title: "Nuancen & Modalpartikeln (Bumbu Bahasa)",
        vocabulary: [
          { german: "halt", indonesian: "ya mau gimana lagi (pasrah)", example: "Das ist halt so." },
          { german: "eben", indonesian: "memang begitu (persetujuan/pasrah)", example: "Das ist eben das Leben." },
          { german: "doch", indonesian: "kan/kok (ingetin/bantah)", example: "Das weißt du doch!" },
          { german: "mal", indonesian: "coba/sebentar (memperhalus)", example: "Guck mal hier." },
          { german: "ja", indonesian: "kan (kaget/memang)", example: "Das ist ja teuer!" },
          { german: "eigentlich", indonesian: "sebenarnya", example: "Was willst du eigentlich?" },
          { german: "überhaupt", indonesian: "sama sekali/omong-omong", example: "Hast du überhaupt Zeit?" },
          { german: "wohl", indonesian: "mungkin/kayaknya", example: "Das ist wohl falsch." },
          { german: "bloß", indonesian: "saja (peringatan/harapan)", example: "Komm mir bloß nicht zu spät!" },
          { german: "denn", indonesian: "memangnya (di pertanyaan)", example: "Was machst du denn hier?" },
        ],
        grammar: [
          {
            title: "Fungsi Modalpartikeln",
            explanation: "Kata-kata kecil ini tidak punya arti harfiah, tapi memberi 'rasa' pada kalimat.\n- Komm her! (Kasar)\n- Komm MAL her! (Lebih santai/akrab)\n- Das weißt du! (Fakta)\n- Das weißt du DOCH! (Kamu kan udah tau, kok lupa?)",
            examples: ["Das ist JA toll! (Kaget/Surprise)", "Mach das BLOß nicht! (Peringatan keras)"],
          },
        ],
        dialogs: [
          {
            title: "Ketemu Teman Lama",
            lines: [
              { speaker: "A", german: "Das ist ja eine Überraschung!", indonesian: "Wah (kan) kejutan banget!" },
              { speaker: "B", german: "Was machst du denn hier?", indonesian: "Emangnya kamu lagi ngapain di sini?" },
              { speaker: "A", german: "Ich wohne doch jetzt hier.", indonesian: "Aku kan sekarang tinggal di sini (kamu tau kan?)." },
            ],
          },
        ],
        exercises: [
          { question: "Partikel untuk memperhalus perintah: 'Sag ___ (coba), wie spät ist es?'", options: ["doch", "mal", "ja", "denn"], correctAnswer: 1 },
          { question: "Partikel untuk hal yang sudah diketahui bersama: 'Das wusstest du ___!'", options: ["doch", "denn", "mal", "eigentlich"], correctAnswer: 0 },
          { question: "Partikel untuk kaget: 'Der ist ___ (kan/ternyata) groß!'", options: ["halt", "ja", "mal", "bloß"], correctAnswer: 1 },
          { question: "Partikel pasrah: 'Das Leben ist ___ hart.'", options: ["halt/eben", "doch", "mal", "denn"], correctAnswer: 0 },
          { question: "Partikel peringatan: 'Lass das ___ sein!'", options: ["bloß", "mal", "halt", "eigentlich"], correctAnswer: 0 },
        ],
      },

      // 10. PEMBENTUKAN KATA (Wortbildung - Prefix Ajaib)
      {
        id: "wortbildung",
        title: "Wortbildung & Präfixe (Pembentukan Kata)",
        vocabulary: [
          { german: "zerreißen", indonesian: "merobek (hancur)", example: "Das Papier zerreißen." },
          { german: "zerstören", indonesian: "menghancurkan", example: "Das Haus wurde zerstört." },
          { german: "missverstehen", indonesian: "salah paham", example: "Bitte missversteh mich nicht." },
          { german: "misslingen", indonesian: "gagal", example: "Der Plan ist misslungen." },
          { german: "verlaufen", indonesian: "tersesat", example: "Wir haben uns verlaufen." },
          { german: "versprechen", indonesian: "salah ucap (slip of tongue)", example: "Sorry, ich habe mich versprochen." },
          { german: "verschlafen", indonesian: "kesiangan", example: "Ich habe verschlafen." },
          { german: "bearbeiten", indonesian: "mengedit/memproses", example: "Den Text bearbeiten." },
          { german: "beachten", indonesian: "memperhatikan", example: "Bitte beachten Sie die Stufe." },
          { german: "entladen", indonesian: "baterai habis/membongkar", example: "Der Akku hat sich entladen." },
        ],
        grammar: [
          {
            title: "Makna Prefix (Awalan)",
            explanation: "Prefix mengubah arti kata kerja secara drastis:\n- ZER-: Hancur/Rusak (zerstören, zerbrechen).\n- MISS-: Salah/Gagal (missverstehen, missfallen).\n- VER- (sich): Kesalahan/Kecelakaan (sich verhören - salah dengar, sich verlaufen - tersesat).",
            examples: ["Ich habe mich verwählt (salah sambung).", "Die Vase ist zerbrochen (pecah hancur)."],
          },
        ],
        dialogs: [
          {
            title: "Salah Paham",
            lines: [
              { speaker: "A", german: "Du hast mich missverstanden.", indonesian: "Kamu salah paham sama aku." },
              { speaker: "B", german: "Nein, du hast dich unklar ausgedrückt.", indonesian: "Enggak, kamu yang ngomongnya gak jelas." },
              { speaker: "A", german: "Sorry, ich habe mich versprochen.", indonesian: "Maaf, aku tadi salah ngomong." },
            ],
          },
        ],
        exercises: [
          { question: "Prefix untuk 'hancur/rusak':", options: ["ver-", "zer-", "be-", "ent-"], correctAnswer: 1 },
          { question: "Arti 'sich verlaufen':", options: ["Berjalan cepat", "Tersesat", "Lari", "Jalan-jalan"], correctAnswer: 1 },
          { question: "Lawan kata 'gelingen' (berhasil):", options: ["misslingen", "zerlingen", "verlingen", "entlingen"], correctAnswer: 0 },
          { question: "Saya 'salah sambung' telepon:", options: ["Ich habe mich verwählt", "Ich habe mich gewählt", "Ich habe zerwählt", "Ich habe misswählt"], correctAnswer: 0 },
          { question: "Prefix untuk 'salah' (wrongly):", options: ["be-", "zer-", "miss-", "er-"], correctAnswer: 2 },
        ],
      },
    ],
  },
];

// Flashcard data derived from vocabulary
export const getFlashcardsForLevel = (levelId: string): Vocabulary[] => {
  const level = levels.find((l) => l.id === levelId);
  if (!level) return [];
  
  return level.subSections.flatMap((section) => section.vocabulary);
};

export const getAllFlashcards = (): { levelId: string; vocabulary: Vocabulary }[] => {
  return levels.flatMap((level) =>
    level.subSections.flatMap((section) =>
      section.vocabulary.map((vocab) => ({
        levelId: level.id,
        vocabulary: vocab,
      }))
    )
  );
};
