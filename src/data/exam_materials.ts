import { CourseMaterial } from "./course_materials";

export const examMaterials: CourseMaterial[] = [
  // --- KHUSUS UJIAN: GOETHE / TELC A1 SIMULATION ---
  {
    id: "EXAM_A1",
    title: "Latihan Ujian: Goethe-Zertifikat A1",
    description: "Simulasi 'Start Deutsch 1' paling akurat. Mencakup 100% format soal: Hören, Lesen, Schreiben, dan Sprechen.",
    sections: [
      // --- BAGIAN 1: HÖREN (MENDENGAR) ---
      {
        id: "exam_a1_hoeren",
        title: "Teil 1: Hören (Mendengar)",
        content: [
          {
            type: "text",
            content: "**Konsep:** Ujian Hören terdiri dari 3 bagian (Teil). Total waktu: 20 menit.\n\n**TEIL 1: Percakapan Sehari-hari (Diputar 2x)**\nAnda akan mendengar dialog pendek. Pilih jawaban a, b, atau c."
          },
          {
            type: "table",
            headers: ["Simulasi Transkrip (Baca)", "Soal", "Kunci & Tips"],
            rows: [
              [
                "*Wanita: Entschuldigung, wann fährt der Zug nach München?*\n*Pria: Gleich, um 10:15 Uhr.*\n*Wanita: Oh, danke. Und wann kommt er an?*\n*Pria: Um 12:30 Uhr.*",
                "Wann fährt der Zug ab? (Kapan berangkat?)\na) 10:15\nb) 10:50\nc) 12:30",
                "**Kunci: a) 10:15**\n*Jebakan:* Jangan terkecoh dengan 'ankommen' (tiba) jam 12:30. Fokus kata 'fährt ab' (berangkat)."
              ],
              [
                "*Dokter: Herr Müller, nehmen Sie die Tabletten bitte vor dem Essen.*\n*Patient: Also nicht danach?*\n*Dokter: Nein, immer davor. Dreimal täglich.*",
                "Wann soll er die Tabletten nehmen?\na) Nach dem Essen\nb) Vor dem Essen\nc) Beim Essen",
                "**Kunci: b) Vor dem Essen**\n*Jebakan:* Kata 'nicht danach' (bukan setelahnya) sering muncul untuk mengecoh."
              ]
            ]
          },
          {
            type: "text",
            content: "**TEIL 2: Pengumuman Publik (Diputar 1x Saja!)**\nBiasanya di stasiun, bandara, atau supermarket. Soalnya Benar/Salah (Richtig/Falsch)."
          },
          {
            type: "table",
            headers: ["Transkrip Pengumuman", "Pernyataan", "Jawaban"],
            rows: [
              [
                "*\"Achtung, liebe Kunden. Unser Geschäft schließt in 10 Minuten. Bitte gehen Sie zur Kasse.\"*",
                "Das Geschäft ist noch eine Stunde geöffnet.",
                "**Falsch (Salah)**\n*Alasan:* 'In 10 Minuten' (10 menit lagi), bukan 'eine Stunde' (satu jam)."
              ]
            ]
          },
          {
            type: "text",
            content: "**TEIL 3: Pesan Telepon (Diputar 2x)**\nSeseorang meninggalkan pesan di mesin penjawab (Anrufbeantworter)."
          },
          {
            type: "table",
            headers: ["Transkrip Pesan", "Soal", "Kunci"],
            rows: [
              [
                "*\"Hallo Julia, hier ist Sarah. Der Film fängt doch erst um 20 Uhr an. Wir treffen uns also um 19:30 vor dem Kino. Bis dann!\"*",
                "Wann treffen sie sich?\na) 20:00\nb) 19:30\nc) 19:00",
                "**Kunci: b) 19:30**\n*Tips:* 20.00 adalah jam mulai film, bukan jam bertemu (treffen)."
              ]
            ]
          }
        ],
        tips: [
          "Di Teil 2 (Pengumuman), hati-hati! Audio hanya diputar **1 KALI**. Konsentrasi penuh.",
          "Perhatikan kata 'nicht' atau 'kein'. Itu sering membalikkan makna jawaban."
        ],
        resources: [
          { title: "Audio Latihan A1 (YouTube)", url: "https://www.youtube.com/results?search_query=start+deutsch+1+hören", type: "video" }
        ]
      },

      // --- BAGIAN 2: LESEN (MEMBACA) ---
      {
        id: "exam_a1_lesen",
        title: "Teil 2: Lesen (Membaca)",
        content: [
          {
            type: "text",
            content: "**Waktu: 25 Menit.** Terdiri dari surat pendek, iklan, dan papan informasi."
          },
          {
            type: "table",
            headers: ["Jenis Teks", "Contoh Soal", "Analisis & Jawaban"],
            rows: [
              [
                "**Surat/Email**\n*Liebe Maria, danke für die Einladung. Ich komme gern, aber ich kann keinen Kuchen mitbringen. Mein Ofen ist kaputt. Soll ich Getränke kaufen?*",
                "**Pernyataan:**\nSie bringt einen Kuchen mit.\n(Richtig / Falsch?)",
                "**Falsch (Salah)**\n*Kunci:* 'kann KEINEN Kuchen mitbringen' (tidak bisa bawa kue). Fokus pada kata negatif."
              ],
              [
                "**Iklan Internet (A/B)**\n*Anda mencari kursus gitar murah.*\n\n**A:** Musikschule Mozart: Piano & Gitarre. 50€/Jam.\n**B:** Student gibt Gitarrenunterricht. Nur 15€.",
                "Welche Anzeige passt?\n(Iklan mana yang cocok?)",
                "**Anzeige B**\n*Kunci:* Kata 'günstig/billig' (murah) cocok dengan 'Student' dan '15€'. Iklan A mahal."
              ],
              [
                "**Papan Tanda**\n*\"Aufzug außer Betrieb. Bitte benutzen Sie die Treppe.\"*",
                "**Pernyataan:**\nMan kann den Aufzug benutzen.\n(Richtig / Falsch?)",
                "**Falsch (Salah)**\n*Kunci:* 'außer Betrieb' artinya rusak/tidak beroperasi."
              ]
            ]
          }
        ],
        tips: [
          "Hafalkan sinonim penting: **billig = günstig** (murah), **kaputt = defekt** (rusak), **geöffnet = auf** (buka), **geschlossen = zu** (tutup).",
          "Jangan baca seluruh teks kata per kata. Gunakan teknik *Scanning* (cari kata kunci)."
        ]
      },

      // --- BAGIAN 3: SCHREIBEN (MENULIS) ---
      {
        id: "exam_a1_schreiben",
        title: "Teil 3: Schreiben (Menulis)",
        content: [
          {
            type: "text",
            content: "**Waktu: 20 Menit.** Ada 2 tugas: Mengisi Formulir (5 Poin) dan Menulis Surat Pendek (10 Poin). Ini lumbung nilai!"
          },
          {
            type: "table",
            headers: ["Tugas 1: Formulir", "Data Soal", "Jawaban"],
            rows: [
              ["Nama Belakang", "Eva Müller", "**Müller** (Name/Familienname)"],
              ["Kota", "Sie wohnt in Berlin", "**Berlin** (Wohnort)"],
              ["Pembayaran", "Sie bezahlt mit Kreditkarte", "**Kreditkarte** (Zahlungsweise)"],
              ["Jumlah Anak", "Sie hat zwei Kinder", "**2** (Anzahl Kinder)"]
            ]
          },
          {
            type: "text",
            content: "**Tugas 2: Menulis Email/Surat (Wajib 3 Poin)**\nSoal: *Tulis email ke Hotel 'Sonne'. Anda mau datang bulan Agustus. Tanya harga kamar. Tanya apakah boleh bawa anjing.*\n\n**CONTOH JAWABAN SEMPURNA (Hafalkan Pola Ini!):**"
          },
          {
            type: "text",
            content: "**(1. Sapaan)**\nSehr geehrte Damen und Herren,\n\n**(2. Isi Poin 1 - Datang)**\nich möchte im August zu Ihnen kommen.\n\n**(3. Isi Poin 2 - Harga)**\nWie viel kostet ein Zimmer für zwei Personen?\n\n**(4. Isi Poin 3 - Anjing)**\nDarf ich meinen Hund mitbringen?\n\n**(5. Penutup)**\nMit freundlichen Grüßen\n\nIlham Ramdhani"
          }
        ],
        tips: [
          "Kalau penerima suratnya tidak dikenal (kantor/hotel), pakai: **'Sehr geehrte Damen und Herren'**.",
          "Kalau ke teman, pakai: **'Hallo [Nama]'** atau **'Liebe [Nama]'**.",
          "Pastikan ketiga poin soal terjawab semua! Satu poin hilang = nilai berkurang drastis."
        ]
      },

      // --- BAGIAN 4: SPRECHEN (BERBICARA) ---
      {
        id: "exam_a1_sprechen",
        title: "Teil 4: Sprechen (Berbicara)",
        content: [
          {
            type: "text",
            content: "**Waktu: 15 Menit (Kelompok).** Terdiri dari 3 babak. Kuncinya: Jangan diam! Kalau tidak paham, tanya."
          },
          {
            type: "table",
            headers: ["Babak", "Tugas", "Kalimat Hafalan (Redemittel)"],
            rows: [
              ["1. Vorstellung", "Perkenalkan diri (Nama, Umur, Asal, Alamat, Bahasa, Profesi, Hobi)", "**Mein Name ist... Ich bin ... Jahre alt. Ich komme aus Indonesia. Ich wohne in... Ich spreche... Ich bin... von Beruf. Mein Hobby ist...**"],
              ["1b. Buchstabieren", "Mengeja Nama / Nomor HP", "**B-U-D-I.  Null-Acht-Eins-Zwei...**"],
              ["2. Informasi", "Tanya Jawab Kartu (Thema: Essen/Einkaufen)", "**Tanya:** Was isst du gern?\n**Jawab:** Ich esse gern Nasi Goreng."],
              ["3. Bitten", "Meminta Sesuatu (Kartu Gambar)", "**Tanya:** Gib mir bitte das Buch!\n**Jawab:** Ja, hier bitte."]
            ]
          },
          {
            type: "text",
            content: "**TEMA KARTU YANG SERING MUNCUL (TEIL 2):**\n1. **Wochenende:** (Apa yang kamu lakukan?)\n2. **Essen & Trinken:** (Apa makanan favoritmu?)\n3. **Familie:** (Apakah kamu punya anak/saudara?)\n4. **Einkaufen:** (Dimana kamu beli roti?)"
          },
          {
            type: "text",
            content: "**KALIMAT DARURAT (PENTING!):**\nJika tidak mengerti ucapan penguji/partner, katakan:\n- **\"Wie bitte?\"** (Maaf?)\n- **\"Können Sie das bitte wiederholen?\"** (Bisa tolong ulangi?)\n- **\"Sprechen Sie bitte langsam.\"** (Tolong bicara pelan)."
          }
        ],
        tips: [
          "Di Teil 3 (Bitten/Permintaan), selalu gunakan kata **'Bitte'**. Penguji sangat memperhatikan kesopanan.",
          "Jangan jawab cuma 'Ya' atau 'Tidak'. Jawab dengan kalimat utuh. (Contoh: 'Hast du Zeit?' -> 'Ja, ich habe Zeit.')"
        ],
        resources: [
          { title: "Contoh Ujian Lisan Asli (Video)", url: "https://www.youtube.com/watch?v=s_yvT33Yfng", type: "video" }
        ]
      },

      // --- BAGIAN 5: STRATEGI & SKOR (RAHASIA LULUS) ---
      {
        id: "exam_a1_strategy",
        title: "Teil 5: Strategi Skor & Tips Hari-H",
        content: [
          {
            type: "text",
            content: "**Sistem Penilaian (Penting!):**\nTotal skor 100 poin. Batas lulus: **60 Poin** (60%).\n- Hören: 25 Poin\n- Lesen: 25 Poin\n- Schreiben: 25 Poin\n- Sprechen: 25 Poin\n\n**TIPS MAHAL UNTUK SETIAP BAGIAN:**"
          },
          {
            type: "table",
            headers: ["Bagian", "Tips Penyelamat Skor"],
            rows: [
              ["Hören & Lesen", "**Jangan kosongkan jawaban!** Tidak ada minus. Kalau tidak tahu, tebak saja."],
              ["Schreiben (Formulir)", "**Ejaan Wajib Benar!** Salah tulis nama kota/jalan = 0 Poin. Salin persis dari teks soal."],
              ["Schreiben (Surat)", "**Struktur > Grammar.** Asal ada Salam Pembuka, Isi (menjawab 3 poin soal), dan Penutup, nilai minimal sudah aman."],
              ["Sprechen", "**Bereaksi!** Kalau teman bicara bilang 'Ich habe Hunger', jangan diam. Jawab 'Oh, ich auch!' atau 'Gehen wir essen?'. Nilai interaksi itu tinggi."]
            ]
          },
          {
            type: "text",
            content: "**MENTAL CHECKLIST HARI H:**\n1. Bawa pulpen **HITAM/BIRU** (Jangan pensil untuk lembar jawaban).\n2. Jangan terpaku pada satu kata sulit. Lewati!\n3. Di ujian lisan, senyum dan sapa penguji ('Guten Morgen'). Kesan pertama menentukan."
          }
        ],
        tips: [
          "Di bagian menulis, tulisan tangan harus terbaca. Kalau tulisanmu jelek, gunakan HURUF CETAK/KAPITAL semua (diperbolehkan).",
          "Jangan panik kalau audio terdengar cepat. Fokus saja cari Kata Kunci (Angka, Tempat, Jam)."
        ]
      }
    ]
  },
  
  // --- KHUSUS UJIAN: GOETHE / TELC A2 SIMULATION ---
  {
    id: "EXAM_A2",
    title: "Latihan Ujian: Goethe-Zertifikat A2",
    description: "Simulasi level A2. Fokus pada kalimat majemuk, menceritakan masa lalu (Perfekt), dan negosiasi rencana.",
    sections: [
      // --- BAGIAN 1: HÖREN (MENDENGAR) ---
      {
        id: "exam_a2_hoeren",
        title: "Teil 1: Hören (Mendengar)",
        content: [
          {
            type: "text",
            content: "**Konsep A2:** Audio lebih cepat. Topik mencakup berita radio, wawancara, dan percakapan situasi kerja. Waktu: 30 Menit.\n\n**TEIL 1: Radio/Pengumuman (Pilihan Ganda)**\nAnda mendengar berita di radio atau pengumuman di toko."
          },
          {
            type: "table",
            headers: ["Simulasi Transkrip", "Soal", "Analisis & Kunci"],
            rows: [
              [
                "*Radio: Dan sekarang berita cuaca. Hari ini di Berlin sangat panas, sampai 30 derajat. Tapi hati-hati, besok hujan deras dan suhu turun menjadi 15 derajat.*",
                "Bagaimana cuaca BESOK?\na) Panas (30 derajat)\nb) Hujan dan dingin\nc) Cerah berawan",
                "**Kunci: b) Hujan dan dingin**\n*Jebakan:* Audio menyebut '30 derajat', tapi itu 'Heute' (Hari ini). Soal tanya 'Morgen' (Besok)."
              ],
              [
                "*Toko: Pelanggan yang terhormat, mobil Opel biru dengan plat nomor B-XY-123 menghalangi jalan keluar. Mohon segera dipindahkan.*",
                "Siapa yang dicari?\na) Pemilik mobil merah\nb) Pemilik mobil biru\nc) Petugas parkir",
                "**Kunci: b) Pemilik mobil biru**\n*Fokus:* Warna (blau) dan Merek (Opel)."
              ]
            ]
          },
          {
            type: "text",
            content: "**TEIL 2: Wawancara (Mencocokkan Gambar/Info)**\nAnda mendengar wawancara dengan seseorang tentang kesehariannya. Tugas: Pasangkan aktivitas dengan hari/waktu."
          },
          {
            type: "table",
            headers: ["Transkrip Wawancara", "Soal: Apa yang dilakukan hari Sabtu?", "Kunci"],
            rows: [
              [
                "*Pewawancara: Dan apa yang Anda lakukan di akhir pekan?*\n*Narasumber: Jumat malam saya biasanya nonton bioskop. Sabtu saya harus bekerja sampai siang, lalu sorenya saya main tenis. Minggu saya tidur lama.*",
                "a) Tidur lama\nb) Main Tenis\nc) Ke Bioskop",
                "**Kunci: b) Main Tenis**\n*Analisis:* Sabtu (Samstag) = Kerja & Tenis. Minggu = Tidur. Jumat = Bioskop."
              ]
            ]
          }
        ],
        tips: [
          "Perhatikan kata penghubung waktu: **zuerst** (pertama), **dann** (lalu), **danach** (setelah itu). Urutan cerita sering diacak di soal.",
          "Waspada kata **'eigentlich'** (sebenarnya). Biasanya kalimat setelahnya adalah fakta yang benar (membatalkan kalimat sebelumnya)."
        ],
        resources: [
          { title: "Latihan Hören A2 (DW Deutsch)", url: "https://learngerman.dw.com/de/nicos-weg/c-36519789", type: "web" }
        ]
      },

      // --- BAGIAN 2: LESEN (MEMBACA) ---
      {
        id: "exam_a2_lesen",
        title: "Teil 2: Lesen (Membaca)",
        content: [
          {
            type: "text",
            content: "**Waktu: 30 Menit.** Teks lebih panjang (sekitar 200-300 kata). Ada artikel koran, email kantor, dan papan informasi."
          },
          {
            type: "table",
            headers: ["Jenis Teks", "Soal", "Analisis & Jawaban"],
            rows: [
              [
                "**Artikel Koran**\n*Di Jerman, semakin banyak orang naik sepeda ke kantor. Itu sehat dan murah. Tapi masalahnya, jalanan di kota besar sering berbahaya untuk pesepeda.*",
                "**Pernyataan:**\nNaik sepeda di kota besar sangat aman.\n(Richtig / Falsch?)",
                "**Falsch (Salah)**\n*Kunci:* Teks bilang 'gefährlich' (berbahaya), lawan kata dari 'sicher' (aman)."
              ],
              [
                "**Papan Informasi Mall**\n*Lantai 1: Pakaian Pria & Wanita\nLantai 2: Mainan Anak & Buku\nLantai 3: Restoran & Toilet*",
                "**Situasi:**\nAnda ingin membeli boneka untuk anak.\nKe lantai berapa Anda pergi?",
                "**Lantai 2**\n*Kunci:* Cari kata kunci 'Spielzeug' (Mainan) atau kategori 'Anak' (Kinder)."
              ],
              [
                "**Email Kantor**\n*Halo Pak Schmidt, saya sakit hari ini. Saya tidak bisa datang rapat jam 10. Tapi saya sudah kirim laporannya lewat email. Sampai besok.*",
                "**Pernyataan:**\nPak Schmidt harus membaca laporan di email.\n(Richtig / Falsch?)",
                "**Richtig (Benar)**\n*Kunci:* 'Habe laporan dikirim lewat email'."
              ]
            ]
          }
        ],
        tips: [
          "Hafalkan sinonim A2: **bekommen = kriegen** (dapat), **benutzen = verwenden** (pakai), **billig = preiswert** (murah).",
          "Jangan terpaku mengartikan kata per kata. Pahami konteks kalimat secara utuh."
        ]
      },

      // --- BAGIAN 3: SCHREIBEN (MENULIS) ---
      {
        id: "exam_a2_schreiben",
        title: "Teil 3: Schreiben (Menulis)",
        content: [
          {
            type: "text",
            content: "**Waktu: 30 Menit.** Anda harus menulis 2 teks: SMS (Informal) dan Email (Formal/Semi-formal). Anda WAJIB memakai kata hubung (*und, oder, aber, weil*)."
          },
          {
            type: "table",
            headers: ["Tugas", "Soal", "Contoh Jawaban Lulus (Perhatikan Struktur)"],
            rows: [
              ["Tugas 1: SMS (Singkat)", "Teman mengajak ke bioskop. Anda tidak bisa karena sakit. Usulkan hari lain.", "**Hallo Tina, danke für die Einladung. Ich kann leider nicht kommen, WEIL ich krank bin. Gehen wir am Freitag ins Kino? Bis bald!**"],
              ["Tugas 2: Email (Formal)", "Anda ingin mendaftar kursus masak. Tanya: 1. Kapan mulai? 2. Berapa harganya? 3. Apa perlu bawa alat?", "**Sehr geehrte Damen und Herren,**\n\n**ich möchte mich für den Kochkurs anmelden. Wann beginnt der Kurs genau? Und wie viel kostet er? Muss ich eigene Messer mitbringen?**\n\n**Mit freundlichen Grüßen**\n**Budi Santoso**"]
            ]
          }
        ],
        tips: [
          "**GUNAKAN KATA HUBUNG!** Kalimat 'Ich komme nicht. Ich bin krank' (A1) nilainya kecil. Ubah jadi 'Ich komme nicht, **WEIL** ich krank bin' (A2) -> Nilai tinggi.",
          "Perhatikan posisi verb setelah 'weil' (Verb di ujung kalimat)."
        ]
      },

      // --- BAGIAN 4: SPRECHEN (BERBICARA) ---
      {
        id: "exam_a2_sprechen",
        title: "Teil 4: Sprechen (Berbicara)",
        content: [
          {
            type: "text",
            content: "**Waktu: 15 Menit.** Dilakukan berpasangan. Bagian tersulit adalah 'Merencanakan Sesuatu Bersama' (Teil 3)."
          },
          {
            type: "table",
            headers: ["Babak", "Tugas", "Redemittel (Kalimat Kunci)"],
            rows: [
              ["1. Tanya Jawab Pribadi", "Ceritakan tentang diri Anda lebih detail (Hobi, Kerja, Keluarga).", "**Saya bekerja sebagai... Saya punya 2 anak... Hobi saya adalah... karena itu menyenangkan.**"],
              ["2. Menceritakan Hidup (Monolog)", "Topik: Apa yang Anda lakukan akhir pekan lalu? / Liburan terakhir?", "**Gunakan PERFEKT (Masa Lalu)!**\n'Letztes Wochenende **bin** ich nach Bandung **gefahren**. Ich **habe** dort Nasi Goreng **gegessen**. Das **war** super.'"],
              ["3. Merencanakan (Dialog)", "Anda dan partner mau beli kado ultah buat teman. Diskusikan: Apa? Berapa harganya? Kapan beli?", "**Usul:** Wollen wir eine Uhr kaufen?\n**Menolak:** Nein, das ist zu teuer. Ich finde ein Buch besser.\n**Setuju:** Ja, gute Idee! Wann treffen wir uns?\n**Janji:** Am Samstag um 10 Uhr?"]
            ]
          },
          {
            type: "text",
            content: "**STRATEGI NEGOSIASI (TEIL 3):**\nJangan langsung setuju! Debat sedikit biar nilai komunikasi naik.\nA: \"Kita beli bunga saja.\"\nB: \"Hmm, bunga membosankan (*langweilig*). Bagaimana kalau coklat?\"\nA: \"Oke, coklat enak.\""
          }
        ],
        tips: [
          "Di Teil 2, penguji ingin mendengar **Perfekt** (ge-kauft, ge-fahren) dan **Präteritum** (war, hatte). Jika Anda cerita pakai Present Tense terus, nilai maksimal cuma batas lulus.",
          "Gunakan interjeksi natural: **'Ach so!', 'Wirklich?', 'Das klingt gut!'**."
        ],
        resources: [
          { title: "Redemittel Sprechen A2 (PDF)", url: "https://www.hueber.de/media/36/Hueber_Redemittel_A2.pdf", type: "pdf" }
        ]
      },

      // --- BAGIAN 5: STRATEGI & JEBAKAN A2 ---
      {
        id: "exam_a2_strategy",
        title: "Teil 5: Strategi Skor A2",
        content: [
          {
            type: "text",
            content: "**Cara Lulus A2 dengan Nilai Bagus:**\nBerbeda dengan A1 yang penting 'asal ngerti', di A2 grammar mulai dinilai, terutama posisi kata kerja."
          },
          {
            type: "table",
            headers: ["Bagian", "Strategi Khusus"],
            rows: [
              ["Grammar Wajib", "Pastikan bisa membedakan **'weil'** (Verb di akhir) dan **'denn'** (Verb posisi 2). Penguji sangat memperhatikan ini."],
              ["Lesen", "Cari **Sinonim**. Di teks tertulis 'starten' (mulai), di soal tertulis 'beginnen'. Itu artinya sama."],
              ["Schreiben", "Jangan lupa **Koma (,)**. Sebelum kata 'aber', 'weil', 'dass' harus ada koma. Contoh: 'Ich lerne Deutsch**, weil** es Spaß macht.'"]
            ]
          }
        ],
        tips: [
          "Jika di Speaking Anda lupa kata Jerman-nya, jangan ganti Bahasa Inggris. Deskripsikan bendanya. Misal lupa 'Payung' -> Bilang 'Benda untuk hujan'.",
          "Latihanlah angka ratusan dan ribuan, sering muncul di soal harga."
        ]
      }
    ]
  }
];