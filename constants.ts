
import { DayMenu, Recipe } from './types';

export const RAMADAN_2026_START_DATE = new Date('2026-02-19');

const IMAGES = {
  çorba: "/yemekgorselleri/gun1/soup.webp",
  anaYemek: "/yemekgorselleri/gun1/main.webp",
  yardımcı: "/yemekgorselleri/gun1/side.webp",
  tatlı: "/yemekgorselleri/gun1/dessert.webp"
};

const SOUP_POOL = [
  { name: "Süzme Mercimek Çorbası", cal: 145, img: IMAGES.çorba },
  { name: "Yayla Çorbası", cal: 160, img: IMAGES.çorba },
  { name: "Ezogelin Çorbası", cal: 155, img: IMAGES.çorba },
  { name: "Şehriye Çorbası", cal: 130, img: IMAGES.çorba }
];

const MAIN_POOL = [
  { name: "Hünkar Beğendi", cal: 450, img: IMAGES.anaYemek },
  { name: "Kıymalı Bezelye", cal: 320, img: IMAGES.anaYemek },
  { name: "İzmir Köfte", cal: 410, img: IMAGES.anaYemek },
  { name: "Tavuk Sote", cal: 340, img: IMAGES.anaYemek }
];

export const MENU_DATA: DayMenu[] = Array.from({ length: 29 }, (_, i) => {
  const dayNumber = i + 1;
  const dateStr = new Date(RAMADAN_2026_START_DATE.getTime() + i * 24 * 60 * 60 * 1000).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long' });

  // 1. GÜN ÖZEL DETAYLI TARİFLER
  if (dayNumber === 1) {
    return {
      day: 1,
      date: dateStr,
      recipes: [
        {
          id: 's-1',
          name: "Süzme Mercimek Çorbası",
          category: 'Çorba',
          calories: 145,
          imageUrl: "/yemekgorselleri/gun1/soup.webp",
          prepTime: '25 dk',
          ingredients: [
            "1 su bardağı kırmızı mercimek",
            "1 adet kuru soğan",
            "1 adet havuç",
            "1 yemek kaşığı un",
            "1 yemek kaşığı tereyağı",
            "6 su bardağı sıcak su",
            "Tuz, karabiber, nane"
          ],
          instructions: [
            "Soğanları yemeklik doğrayıp tereyağında hafifçe soteleyin.",
            "Unu ekleyip kokusu çıkana kadar kavurmaya devam edin.",
            "Yıkanmış mercimekleri ve doğranmış havuçları ekleyip karıştırın.",
            "Sıcak suyu ilave edin ve mercimekler tamamen yumuşayana kadar pişirin.",
            "Pişen çorbayı pürüzsüz olana kadar blenderdan geçirin.",
            "Üzerine yağda yakılmış pul biber ve nane ile servis yapın."
          ]
        },
        {
          id: 'm-1',
          name: "İzmir Köfte",
          category: 'Ana Yemek',
          calories: 410,
          imageUrl: "/yemekgorselleri/gun1/main.webp",
          prepTime: '50 dk',
          ingredients: [
            "500 gr orta yağlı dana kıyma",
            "1 adet rendelenmiş soğan",
            "1 adet yumurta",
            "3 yemek kaşığı galeta unu",
            "4 adet orta boy patates",
            "2 adet yeşil biber",
            "1 yemek kaşığı domates salçası",
            "Tuz, kimyon, karabiber, kekik"
          ],
          instructions: [
            "Kıyma, soğan, yumurta, galeta unu ve baharatları bir kapta iyice yoğurup parmak şeklinde köfteler hazırlayın.",
            "Patatesleri elma dilimi şeklinde doğrayıp hafifçe kızartın.",
            "Köfteleri de hafifçe kızartın.",
            "Fırın tepsisine patatesleri ve köfteleri dizin, aralarına biberleri yerleştirin.",
            "Salçayı sıcak suyla açıp üzerine dökün ve 200 derece fırında yaklaşık 25-30 dakika pişirin."
          ]
        },
        {
          id: 'y-1',
          name: "Şehriyeli Pirinç Pilavı",
          category: 'Yardımcı Yemek',
          calories: 280,
          imageUrl: "/yemekgorselleri/gun1/side.webp",
          prepTime: '30 dk',
          ingredients: [
            "2 su bardağı baldo pirinç",
            "3 yemek kaşığı arpa şehriye",
            "2 yemek kaşığı tereyağı",
            "1 yemek kaşığı sıvı yağ",
            "3 su bardağı sıcak su",
            "1 tatlı kaşığı tuz"
          ],
          instructions: [
            "Pirinçleri ılık tuzlu suda 20 dakika bekletip nişastası gidene kadar yıkayın.",
            "Tencerede tereyağı ve sıvı yağı kızdırıp şehriyeleri rengi dönene kadar kavurun.",
            "Süzülen pirinçleri ekleyip pirinçler şeffaflaşana kadar (tane tane olana kadar) kavurun.",
            "Sıcak suyu ve tuzu ekleyip karıştırın.",
            "Kapağını kapatıp önce yüksek ateşte kaynayınca kısık ateşte suyunu çekene kadar pişirin.",
            "Ocaktan alıp üzerine kağıt havlu kapatarak 15 dakika demlendirin."
          ]
        },
        {
          id: 't-1',
          name: "Geleneksel Güllaç",
          category: 'Tatlı',
          calories: 310,
          imageUrl: "/yemekgorselleri/gun1/dessert.webp",
          prepTime: '20 dk',
          ingredients: [
            "10 yaprak güllaç",
            "1.5 litre süt",
            "2 su bardağı toz şeker",
            "1 paket vanilya",
            "1 su bardağı çekilmiş ceviz içi",
            "Üzeri için: Nar taneleri ve Antep fıstığı"
          ],
          instructions: [
            "Sütü ve şekeri tencereye alıp şeker eriyene kadar ısıtın (süt ılık olmalı, kaynar değil).",
            "Vanilyayı ekleyip karıştırın.",
            "Güllaç yapraklarını tepsiye göre kırıp parlak kısımları yukarı gelecek şekilde süte batırıp tepsiye dizin.",
            "Yaprakların yarısını dizdikten sonra araya bolca ceviz içi serpiştirin.",
            "Kalan yaprakları da aynı şekilde ıslatarak dizin.",
            "Kalan sütü en üstte gezdirin. Buzdolabında en az 2 saat dinlendirin.",
            "Servis yaparken nar taneleri ve fıstıkla süsleyin."
          ]
        }
      ]
    };
  }

  // 2. GÜN ÖZEL DETAYLI TARİFLER
  if (dayNumber === 2) {
    return {
      day: 2,
      date: dateStr,
      recipes: [
        {
          id: 's-2',
          name: "Yayla Çorbası",
          category: 'Çorba',
          calories: 120,
          imageUrl: "/yemekgorselleri/gun2/soup.webp",
          prepTime: '20 dk',
          ingredients: [
            "1 çay bardağı pirinç",
            "6 su bardağı su",
            "1 kase yoğurt",
            "1 yumurta sarısı",
            "1 yemek kaşığı un",
            "Tuz, kuru nane, tereyağı"
          ],
          instructions: [
            "Pirinçleri yıkayıp yumuşayana kadar suda haşlayın.",
            "Ayrı bir kasede yoğurt, yumurta sarısı ve unu pürüzsüz olana kadar çırpın.",
            "Çorbanın sıcak suyundan bir kepçe alıp yoğurtlu karışıma ekleyerek ılıştırın (kesilmemesi için).",
            "Ilıştırılmış karışımı yavaşça tencereye dökerken sürekli karıştırın.",
            "Kaynayana kadar karıştırmaya devam edin, tuzunu ocaktan almaya yakın atın.",
            "Üzeri için tereyağında nane yakıp gezdirin."
          ]
        },
        {
          id: 'm-2',
          name: "Karnıyarık",
          category: 'Ana Yemek',
          calories: 380,
          imageUrl: "/yemekgorselleri/gun2/main.webp",
          prepTime: '45 dk',
          ingredients: [
            "6 adet kemer patlıcan",
            "300 gr kıyma",
            "2 adet soğan",
            "2 adet domates",
            "2 adet yeşil biber",
            "Sarımsak, salça, sıvı yağ",
            "Tuz, karabiber, maydanoz"
          ],
          instructions: [
            "Patlıcanları alacalı soyup tuzlu suda bekletin, kurutup kızartın ve ortalarını yarın.",
            "İç harcı için soğanları ve kıymayı kavurun, biber, doğranmış domates ve salçayı ekleyin.",
            "Baharatları ve ince kıyılmış maydanozu ekleyip harcı patlıcanların içine doldurun.",
            "Üzerlerine birer dilim domates ve biber koyun.",
            "Salçalı sıcak su hazırlayıp tepsiye dökün, 180 derece fırında 20-25 dk pişirin."
          ]
        },
        {
          id: 'y-2',
          name: "Bulgur Pilavı",
          category: 'Yardımcı Yemek',
          calories: 250,
          imageUrl: "/yemekgorselleri/gun2/side.webp",
          prepTime: '25 dk',
          ingredients: [
            "2 su bardağı pilavlık bulgur",
            "1 adet soğan",
            "2 adet yeşil biber",
            "1 adet domates",
            "1 yemek kaşığı salça",
            "3.5 su bardağı sıcak su",
            "Tereyağı, sıvı yağ, tuz"
          ],
          instructions: [
            "Soğanı ve biberleri ince doğrayıp yağda kavurun.",
            "Salçayı ve rendelenmiş domatesi ekleyip kavurmaya devam edin.",
            "Yıkanmış bulguru ekleyip 2-3 dakika daha kavurun.",
            "Sıcak suyu ve tuzu ekleyip suyunu çekene kadar kısık ateşte pişirin.",
            "Demlenmesi için 10 dakika dinlendirin."
          ]
        },
        {
          id: 't-2',
          name: "Şekerpare",
          category: 'Tatlı',
          calories: 350,
          imageUrl: "/yemekgorselleri/gun2/dessert.webp",
          prepTime: '40 dk',
          ingredients: [
            "125 gr margarin veya tereyağı (oda sıcaklığında)",
            "Yarım su bardağı pudra şekeri",
            "2.5 yemek kaşığı irmik",
            "1 yumurta",
            "2-2.5 su bardağı un",
            "Kabartma tozu, vanilya",
            "Şerbeti için: 2 su bardağı şeker, 3 su bardağı su, limon"
          ],
          instructions: [
            "Önce şerbeti hazırlayıp soğumaya bırakın.",
            "Hamur malzemelerini yoğurup yumuşak bir hamur elde edin.",
            "Ceviz büyüklüğünde parçalar koparıp yuvarlayın, ortalarına fındık batırın.",
            "180 derece fırında üzeri kızarana kadar pişirin.",
            "Sıcak tatlının üzerine soğuk şerbeti dökün ve çekmesini bekleyin."
          ]
        }
      ]
    };
  }

  // 3. GÜN ÖZEL DETAYLI TARİFLER
  if (dayNumber === 3) {
    return {
      day: 3,
      date: dateStr,
      recipes: [
        {
          id: 's-3',
          name: "Tarhana Çorbası",
          category: 'Çorba',
          calories: 160,
          imageUrl: "/yemekgorselleri/gun3/soup.webp",
          prepTime: '20 dk',
          ingredients: [
            "3 yemek kaşığı ev tarhanası",
            "1 yemek kaşığı tereyağı",
            "1 tatlı kaşığı salça",
            "1 tatlı kaşığı kuru nane",
            "6 su bardağı su (veya et suyu)",
            "Tuz, pul biber, sarımsak (isteğe bağlı)"
          ],
          instructions: [
            "Tarhanayı 1 su bardağı ılık suda 10-15 dakika ıslatıp yumuşamasını bekleyin.",
            "Tencerede tereyağını eritip salçayı ve naneyi kavurun.",
            "Suyu ekleyip kaynamaya bırakın. Kaynayan sudan biraz alıp tarhanayı inceltin.",
            "Çorbaya yavaşça ekleyip topaklanmaması için sürekli karıştırın.",
            "Ezilmiş sarımsağı ekleyip bir taşım daha kaynatın.",
            "Kıvamı koyu gelirse sıcak su ekleyebilirsiniz. Sıcak servis yapın."
          ]
        },
        {
          id: 'm-3',
          name: "Etli Kuru Fasulye",
          category: 'Ana Yemek',
          calories: 340,
          imageUrl: "/yemekgorselleri/gun3/main.webp",
          prepTime: '55 dk',
          ingredients: [
            "2 su bardağı kuru fasulye (bir gece önceden ıslatılmış)",
            "250 gr kuşbaşı dana eti",
            "1 adet kuru soğan",
            "1 yemek kaşığı domates salçası",
            "1 tatlı kaşığı biber salçası",
            "2 yemek kaşığı tereyağı",
            "Tuz, karabiber, kimyon (gazını alması için)"
          ],
          instructions: [
            "Etleri düdüklü tencerede suyunu salıp çekene kadar kavurun.",
            "Tereyağını ve doğranmış soğanları ekleyip kavurmaya devam edin.",
            "Salçaları ekleyip kokusu çıkana kadar kavurun.",
            "Süzdüğünüz fasulyeleri ekleyip birkaç dakika çevirin.",
            "Üzerini 2-3 parmak geçecek kadar sıcak su, tuz ve baharatları ekleyin.",
            "Düdüklü tencerede fasulyenin cinsine göre 25-30 dakika pişirin (güveçte de yapabilirsiniz)."
          ]
        },
        {
          id: 'y-3',
          name: "Tereyağlı Pirinç Pilavı",
          category: 'Yardımcı Yemek',
          calories: 290,
          imageUrl: "/yemekgorselleri/gun3/side.webp",
          prepTime: '25 dk',
          ingredients: [
            "2 su bardağı baldo pirinç",
            "1 su bardağı haşlanmış nohut (isteğe bağlı)",
            "2 yemek kaşığı tereyağı",
            "1 yemek kaşığı sıvı yağ",
            "3 su bardağı sıcak su",
            "1 küp şeker (parlaklık için), tuz"
          ],
          instructions: [
            "Pirinçleri ılık tuzlu suda yarım saat bekletip nişastası gidene kadar iyice yıkayın.",
            "Tencerede tereyağı ve sıvı yağı eritin. Pirinçleri ekleyip şeffaflaşana kadar kavurun.",
            "Nohutları ekleyip karıştırın.",
            "Sıcak suyu, tuzu ve şekeri ekleyip karıştırın.",
            "Kapağını kapatıp suyunu çekene kadar kısık ateşte pişirin.",
            "Üzerine kağıt havlu kapatıp 15 dakika demlendirin."
          ]
        },
        {
          id: 't-3',
          name: "Dondurmalı İrmik Helvası",
          category: 'Tatlı',
          calories: 390,
          imageUrl: "/yemekgorselleri/gun3/dessert.webp",
          prepTime: '25 dk',
          ingredients: [
            "2 su bardağı irmik",
            "100 gr tereyağı",
            "2 yemek kaşığı dolmalık fıstık",
            "Şerbeti için: 1.5 su bardağı şeker, 2 su bardağı süt, 1 su bardağı su",
            "Servis için: Vanilyalı dondurma"
          ],
          instructions: [
            "Şerbet malzemelerini bir tencerede ısıtın (kaynatmayın, şeker erisin yeter).",
            "Geniş bir tencerede tereyağını eritip fıstıkları ve irmiği rengi dönene kadar (yaklaşık 15-20 dk) sürekli karıştırarak kavurun.",
            "Sıcak şerbeti kavrulan irmiğin üzerine yavaşça dökün (sıçrayabilir dikkat) ve karıştırın.",
            "Kapağını kapatıp suyunu çekene kadar pişirin, sonra ocaktan alıp demlenmeye bırakın.",
            "Bir kaseye streç film serip helvayı koyun, ortasını açıp dondurma koyun ve kapatıp tabağa ters çevirerek servis edin."
          ]
        }
      ]
    };
  }

  // 4. GÜN ÖZEL DETAYLI TARİFLER
  if (dayNumber === 4) {
    return {
      day: 4,
      date: dateStr,
      recipes: [
        {
          id: 's-4',
          name: "Ezogelin Çorbası",
          category: 'Çorba',
          calories: 135,
          imageUrl: "/yemekgorselleri/gun4/soup.webp",
          prepTime: '30 dk',
          ingredients: [
            "1 su bardağı kırmızı mercimek",
            "1 yemek kaşığı bulgur",
            "1 yemek kaşığı pirinç",
            "1 adet soğan",
            "1 diş sarımsak",
            "1 yemek kaşığı salça",
            "6-7 su bardağı sıcak su",
            "Tuz, nane, pul biber"
          ],
          instructions: [
            "Mercimek, bulgur ve pirinci yıkayıp süzün.",
            "Soğan ve sarımsağı ince ince doğrayıp yağda kavurun.",
            "Salçayı ve baharatları ekleyip kokusu çıkana kadar kavurun.",
            "Bakliyatları ve sıcak suyu ekleyip yumuşayana kadar pişirin.",
            "Arzu ederseniz blenderdan geçirin (orijinali taneli olur), limon ile servis yapın."
          ]
        },
        {
          id: 'm-4',
          name: "Fırında Tavuk Patates",
          category: 'Ana Yemek',
          calories: 360,
          imageUrl: "/yemekgorselleri/gun4/main.webp",
          prepTime: '50 dk',
          ingredients: [
            "4 adet tavuk baget",
            "3 adet orta boy patates",
            "2 diş sarımsak",
            "Sosu için: 1 kaşık salça, 2 kaşık yoğurt, zeytinyağı, kekik, tuz, karabiber"
          ],
          instructions: [
            "Sarımsakları ezip diğer sos malzemeleriyle geniş bir kapta karıştırın.",
            "Tavuk bagetleri yıkayıp kurulayın ve sosa bulayın.",
            "Patatesleri elma dilimi doğrayıp aynı sosla harmanlayın.",
            "Hepsini fırın tepsisine dizin.",
            "Önceden ısıtılmış 200 derece fırında tavuklar kızarana kadar (yaklaşık 40-45 dk) pişirin."
          ]
        },
        {
          id: 'y-4',
          name: "Meyhane Pilavı",
          category: 'Yardımcı Yemek',
          calories: 260,
          imageUrl: "/yemekgorselleri/gun4/side.webp",
          prepTime: '30 dk',
          ingredients: [
            "2 su bardağı pilavlık bulgur",
            "1 adet kuru soğan",
            "2 adet yeşil biber",
            "1 adet kapya biber",
            "2 adet domates",
            "1 yemek kaşığı salça",
            "4 su bardağı sıcak su"
          ],
          instructions: [
            "Sebzeleri yemeklik doğrayın. Soğanı ve biberleri yağda kavurun.",
            "Salçayı ve doğranmış domatesi ekleyip kavurmaya devam edin.",
            "Yıkanmış bulguru ekleyip karıştırın.",
            "Sıcak suyu ve tuzu ilave edin.",
            "Suyunu çekene kadar kısık ateşte pişirin, demlenmeye bırakın."
          ]
        },
        {
          id: 't-4',
          name: "Fırın Sütlaç",
          category: 'Tatlı',
          calories: 280,
          imageUrl: "/yemekgorselleri/gun4/dessert.webp",
          prepTime: '45 dk',
          ingredients: [
            "1 litre süt",
            "1 çay bardağı pirinç",
            "1 su bardağı şeker",
            "2 yemek kaşığı nişasta (yarım çay bardağı sütle açılmış)",
            "1 paket vanilya"
          ],
          instructions: [
            "Pirinçleri yumuşayana kadar suda haşlayıp süzün.",
            "Süt ve şekeri tencereye alıp şeker eriyene kadar karıştırın, pirinçleri ekleyin.",
            "Nişastayı sütle açıp tencereye ekleyin ve kıvam alana kadar karıştırarak pişirin.",
            "Vanilyayı ekleyip ocaktan alın ve fırın kaplarına paylaştırın.",
            "Tepsiye biraz su koyup kapları dizin, üzeri kızarana kadar 200 derece fırının üst rafında pişirin."
          ]
        }
      ]
    };
  }

  // 5. GÜN ÖZEL DETAYLI TARİFLER
  if (dayNumber === 5) {
    return {
      day: 5,
      date: dateStr,
      recipes: [
        {
          id: 's-5',
          name: "Yüksük Çorbası",
          category: 'Çorba',
          calories: 170,
          imageUrl: "/yemekgorselleri/gun5/soup.webp",
          prepTime: '30 dk',
          ingredients: [
            "1 su bardağı mantı",
            "1 su bardağı haşlanmış nohut",
            "1 yemek kaşığı salça",
            "1 tatlı kaşığı kuru nane",
            "6 su bardağı sıcak su",
            "Limon suyu"
          ],
          instructions: [
            "Tencerede yağı ve naneyi hafifçe yakın, salçayı ekleyip kavurun.",
            "Sıcak suyu ekleyip kaynamaya bırakın.",
            "Mantıları ve haşlanmış nohutları ekleyin.",
            "Mantılar yumuşayana kadar pişirin.",
            "Ocaktan almadan önce tuz ve limon suyunu ekleyin."
          ]
        },
        {
          id: 'm-5',
          name: "Orman Kebabı",
          category: 'Ana Yemek',
          calories: 340,
          imageUrl: "/yemekgorselleri/gun5/main.webp",
          prepTime: '55 dk',
          ingredients: [
            "500 gr kuşbaşı et",
            "2 adet patates",
            "2 adet havuç",
            "1 çay bardağı bezelye",
            "1 adet soğan",
            "1 yemek kaşığı salça",
            "Kekik, tuz, karabiber"
          ],
          instructions: [
            "Etleri suyunu salıp çekene kadar kavurun, üzerini geçecek kadar su ekleyip yumuşayana kadar pişirin.",
            "Ayrı bir yerde soğanları kavurun, küp doğranmış havuç ve patatesleri ekleyin.",
            "Salçayı ekleyip kavurun, haşlanmış etleri ve bezelyeyi ilave edin.",
            "Etin haşlama suyundan veya sıcak su ekleyip sebzeler yumuşayana kadar pişirin.",
            "Baharatlarını ekleyip ocaktan alın."
          ]
        },
        {
          id: 'y-5',
          name: "Pirinç Pilavı",
          category: 'Yardımcı Yemek',
          calories: 280,
          imageUrl: "/yemekgorselleri/gun5/side.webp",
          prepTime: '25 dk',
          ingredients: [
            "2 su bardağı pirinç",
            "2 yemek kaşığı tereyağı",
            "1 yemek kaşığı sıvı yağ",
            "3 su bardağı sıcak su",
            "Tuz"
          ],
          instructions: [
            "Pirinçleri ılık tuzlu suda yarım saat bekletip yıkayın.",
            "Yağları tencerede eritip pirinçleri tane tane olana kadar kavurun.",
            "Sıcak suyu ve tuzu ekleyin.",
            "Suyunu çekene kadar kısık ateşte pişirin, demlendirin."
          ]
        },
        {
          id: 't-5',
          name: "Kalburabastı",
          category: 'Tatlı',
          calories: 380,
          imageUrl: "/yemekgorselleri/gun5/dessert.webp",
          prepTime: '45 dk',
          ingredients: [
            "125 gr margarin (eritilmiş)",
            "1 çay bardağı sıvı yağ",
            "1 çay bardağı süt",
            "3 su bardağına yakın un",
            "İri dövülmüş ceviz",
            "Şerbeti için: 2 su bardağı şeker, 2 su bardağı su"
          ],
          instructions: [
            "Şerbeti hazırlayıp soğutun.",
            "Hamur malzemelerini yoğurun.",
            "Hamurdan parçalar koparıp rendenin veya kevgirin üzerinde açın, içine ceviz koyup kapatın ve şekil verin.",
            "180 derece fırında kızarana kadar pişirin.",
            "Fırından çıkan sıcak tatlının üzerine soğuk şerbeti dökün."
          ]
        }
      ]
    };
  }

  // 6. GÜN ÖZEL DETAYLI TARİFLER (EKONOMİK)
  if (dayNumber === 6) {
    return {
      day: 6,
      date: dateStr,
      recipes: [
        {
          id: 's-6',
          name: "Sütlü Domates Çorbası",
          category: 'Çorba',
          calories: 140,
          imageUrl: "/yemekgorselleri/gun6/soup.webp",
          prepTime: '20 dk',
          ingredients: [
            "4-5 adet olgun domates",
            "1 yemek kaşığı un",
            "1 yemek kaşığı tereyağı",
            "1 su bardağı süt",
            "1 yemek kaşığı salça",
            "5 su bardağı sıcak su",
            "Tuz, karabiber, rendelenmiş kaşar peyniri"
          ],
          instructions: [
            "Domatesleri rendeleyin.",
            "Tereyağında unu hafifçe kavurun, salçayı ekleyip çevirin.",
            "Rendelenmiş domatesleri ekleyip birkaç dakika pişirin.",
            "Sıcak suyu ilave edip kaynamaya bırakın.",
            "Kaynadıktan sonra sütü yavaşça ekleyin ve sürekli karıştırın.",
            "Kısık ateşte 5-10 dakika pişirip pürüzsüz olması için blenderdan geçirin.",
            "Servis ederken üzerine rendelenmiş kaşar peyniri ekleyin."
          ]
        },
        {
          id: 'm-6',
          name: "Kıymalı Patatesli Bezelye",
          category: 'Ana Yemek',
          calories: 310,
          imageUrl: "/yemekgorselleri/gun6/main.webp",
          prepTime: '40 dk',
          ingredients: [
            "500 gr bezelye (taze veya dondurulmuş)",
            "150 gr kıyma",
            "2 adet orta boy patates",
            "1 adet havuç",
            "1 adet kuru soğan",
            "1 yemek kaşığı salça",
            "3 yemek kaşığı sıvı yağ",
            "Tuz, karabiber, sıcak su"
          ],
          instructions: [
            "Soğanı yemeklik doğrayıp sıvı yağda kavurun.",
            "Kıymayı ekleyip rengi dönene kadar soteleyin.",
            "Küp doğranmış patates ve havuçları ekleyip birkaç dakika daha kavurun.",
            "Salçayı ekleyip kokusu çıkana kadar karıştırın.",
            "Bezelyeleri ve üzerini geçecek kadar sıcak suyu ekleyin.",
            "Sebzeler yumuşayana kadar yaklaşık 25-30 dakika kısık ateşte pişirin.",
            "Ocaktan almadan önce tuzunu ve karabiberini ekleyin."
          ]
        },
        {
          id: 'y-6',
          name: "Şehriyeli Pirinç Pilavı",
          category: 'Yardımcı Yemek',
          calories: 280,
          imageUrl: "/yemekgorselleri/gun6/side.webp",
          prepTime: '25 dk',
          ingredients: [
            "2 su bardağı pirinç",
            "3 yemek kaşığı arpa şehriye",
            "2 yemek kaşığı tereyağı",
            "1 yemek kaşığı sıvı yağ",
            "3 su bardağı sıcak su",
            "Tuz"
          ],
          instructions: [
            "Pirinçleri ılık tuzlu suda bekletip yıkayın ve süzün.",
            "Tencerede yağları eritip şehriyeleri rengi dönene kadar kavurun.",
            "Pirinçleri ekleyip tane tane olana kadar kavurmaya devam edin.",
            "Sıcak suyu ve tuzu ekleyip karıştırın.",
            "Kapağını kapatıp suyunu çekene kadar kısık ateşte pişirin.",
            "15 dakika demlendirip servis yapın."
          ]
        },
        {
          id: 't-6',
          name: "Portakallı Revani",
          category: 'Tatlı',
          calories: 360,
          imageUrl: "/yemekgorselleri/gun6/dessert.webp",
          prepTime: '50 dk',
          ingredients: [
            "3 yumurta",
            "1 su bardağı toz şeker",
            "1 su bardağı yoğurt",
            "1 su bardağı irmik",
            "1 su bardağı un",
            "1 paket kabartma tozu, 1 paket vanilya",
            "1 portakal kabuğu rendesi",
            "Şerbeti için: 3 su bardağı şeker, 3.5 su bardağı su, yarım portakal suyu"
          ],
          instructions: [
            "Önce şerbeti hazırlayıp soğumaya bırakın (şeker, su ve portakal suyunu kaynatıp 15 dk pişirin).",
            "Yumurta ve şekeri köpürene kadar çırpın.",
            "Yoğurt, irmik, portakal rendesi ve diğer malzemeleri ekleyip karıştırın.",
            "Yağlanmış fırın tepsisine döküp 180 derece fırında üzeri kızarana kadar pişirin.",
            "Fırından çıkan sıcak kekin üzerine soğuk şerbeti gezdirin.",
            "Hindistan cevizi ile süsleyerek servis yapın."
          ]
        }
      ]
    };
  }

  // 7. GÜN ÖZEL DETAYLI TARİFLER (EKONOMİK)
  if (dayNumber === 7) {
    return {
      day: 7,
      date: dateStr,
      recipes: [
        {
          id: 's-7',
          name: "Tel Şehriye Çorbası",
          category: 'Çorba',
          calories: 125,
          imageUrl: "/yemekgorselleri/gun7/soup.webp",
          prepTime: '20 dk',
          ingredients: [
            "1 çay bardağı tel şehriye",
            "1 yemek kaşığı tereyağı",
            "1 yemek kaşığı salça",
            "6 su bardağı sıcak su",
            "Limon suyu, tuz, karabiber, maydanoz"
          ],
          instructions: [
            "Tereyağını tencerede eritin ve salçayı kokusu çıkana kadar kavurun.",
            "Sıcak suyu ekleyip kaynamaya bırakın.",
            "Su kaynayınca tel şehriyeleri ilave edin ve şehriyeler yumuşayana kadar yaklaşık 10-15 dakika pişirin.",
            "Ocaktan almadan önce tuz ve karabiberini ekleyin.",
            "Limon suyu ve ince kıyılmış maydanoz ile servis yapın."
          ]
        },
        {
          id: 'm-7',
          name: "Sebzeli Tavuk Sote",
          category: 'Ana Yemek',
          calories: 340,
          imageUrl: "/yemekgorselleri/gun7/main.webp",
          prepTime: '45 dk',
          ingredients: [
            "500 gr tavuk göğsü veya kuşbaşı doğranmış but",
            "2 adet yeşil biber, 1 adet kapya biber",
            "1 adet büyük soğan",
            "2 adet domates",
            "2 diş sarımsak",
            "1 tatlı kaşığı salça",
            "Kekik, pul biber, tuz, zeytinyağı"
          ],
          instructions: [
            "Soğan ve biberleri yemeklik doğrayın, sarımsakları ezin.",
            "Geniş bir tavada zeytinyağını kızdırıp tavukları yüksek ateşte suyunu salıp çekene kadar soteleyin.",
            "Soğanları ve biberleri ekleyip yumuşayana kadar kavurmaya devam edin.",
            "Salçayı ve rendelenmiş domatesleri ekleyin.",
            "Baharatlarını ekleyip kapağını kapatın ve sebzelerin suyuyla 15-20 dakika kısık ateşte pişmeye bırakın."
          ]
        },
        {
          id: 'y-7',
          name: "Sebzeli Bulgur Pilavı",
          category: 'Yardımcı Yemek',
          calories: 260,
          imageUrl: "/yemekgorselleri/gun7/side.webp",
          prepTime: '30 dk',
          ingredients: [
            "2 su bardağı pilavlık bulgur",
            "1 adet soğan, 2 adet yeşil biber",
            "1 adet domates",
            "1 yemek kaşığı salça",
            "3.5 su bardağı sıcak su",
            "Tereyağı, sıvı yağ, tuz"
          ],
          instructions: [
            "Soğan ve biberleri ince doğrayıp yağda kavurun.",
            "Salçayı ve rendelenmiş domatesi ekleyip birkaç dakika daha kavurun.",
            "Yıkanmış bulguru ekleyip karıştırın.",
            "Sıcak suyu ve tuzu ekleyip kapağını kapatın.",
            "Kısık ateşte suyunu çekene kadar pişirin, demlenmeye bırakın."
          ]
        },
        {
          id: 't-7',
          name: "Tam Kıvamında İrmik Helvası",
          category: 'Tatlı',
          calories: 380,
          imageUrl: "/yemekgorselleri/gun7/dessert.webp",
          prepTime: '30 dk',
          ingredients: [
            "2 su bardağı irmik",
            "100 gr tereyağı",
            "Yarım çay bardağı sıvı yağ",
            "2 yemek kaşığı dolmalık fıstık veya dövülmüş ceviz",
            "Şerbeti için: 2 su bardağı şeker, 1 su bardağı süt, 1 su bardağı su"
          ],
          instructions: [
            "Şerbet malzemelerini bir kasede şeker eriyene kadar karıştırın (kaynatmanıza gerek yok).",
            "Tereyağı ve sıvı yağı tencerede eritip fıstıkları ve irmiği ekleyin.",
            "Sürekli karıştırarak irmiğin rengi hafif kahverengiye dönene kadar kavurun.",
            "Sıcak şerbeti yavaşça tencereye boşaltın (sıçramaya dikkat edin).",
            "Sütü çekip koyulaşana kadar karıştırmaya devam edin, sonra kapağını kapatıp 15 dakika demlendirin."
          ]
        }
      ]
    };
  }

  // 8. GÜN ÖZEL DETAYLI TARİFLER (EKONOMİK)
  if (dayNumber === 8) {
    return {
      day: 8,
      date: dateStr,
      recipes: [
        {
          id: 's-8',
          name: "Erişteli Yeşil Mercimek Çorbası",
          category: 'Çorba',
          calories: 180,
          imageUrl: "/yemekgorselleri/gun8/soup.webp",
          prepTime: '25 dk',
          ingredients: [
            "1 su bardağı yeşil mercimek",
            "Yarım su bardağı erişte",
            "1 adet soğan",
            "1 yemek kaşığı salça, 1 yemek kaşığı tereyağı",
            "6 su bardağı su",
            "Nane, pul biber, tuz"
          ],
          instructions: [
            "Mercimekleri haşlayıp suyunu süzün.",
            "Soğanı tereyağında kavurup salçayı ekleyin.",
            "Suyu ve mercimekleri ekleyip kaynamaya bırakın.",
            "Su kaynayınca erişteleri ekleyin ve erişteler yumuşayana kadar pişirin.",
            "Üzerine yağda yakılmış nane ve pul biber dökerek servis yapın."
          ]
        },
        {
          id: 'm-8',
          name: "Kıymalı Ispanak Yemeği",
          category: 'Ana Yemek',
          calories: 280,
          imageUrl: "/yemekgorselleri/gun8/main.webp",
          prepTime: '30 dk',
          ingredients: [
            "500 gr ıspanak",
            "100 gr kıyma",
            "1 adet soğan",
            "1 yemek kaşığı pirinç",
            "1 yemek kaşığı salça, 2 yemek kaşığı sıvı yağ",
            "Tuz, karabiber, sarımsaklı yoğurt (servis için)"
          ],
          instructions: [
            "Ispanakları sirkeli suda yıkayıp irice doğrayın.",
            "Soğanı kıyma ile birlikte kavurun, salçayı ekleyin.",
            "Ispanakları ve pirinci ekleyip kendi suyuyla kısık ateşte pişmeye bırakın.",
            "Pirinçler yumuşayınca ocaktan alın.",
            "Sarımsaklı yoğurt ile servis yapın."
          ]
        },
        {
          id: 'y-8',
          name: "Domates Soslu Makarna",
          category: 'Yardımcı Yemek',
          calories: 320,
          imageUrl: "/yemekgorselleri/gun8/side.webp",
          prepTime: '20 dk',
          ingredients: [
            "Yarım paket makarna (kelebek veya burgu)",
            "2 adet rendelenmiş domates",
            "1 diş sarımsak, 1 yemek kaşığı tereyağı",
            "Tuz, kuru fesleğen veya nane"
          ],
          instructions: [
            "Makarnayı bol tuzlu suda haşlayıp süzün.",
            "Sos için tereyağında sarımsağı ve domates rendesini pişirin.",
            "Haşlanan makarnayla sosu harmanlayın.",
            "Sıcak servis yapın."
          ]
        },
        {
          id: 't-8',
          name: "Sütlü İrmik Tatlısı",
          category: 'Tatlı',
          calories: 240,
          imageUrl: "/yemekgorselleri/gun8/dessert.webp",
          prepTime: '25 dk',
          ingredients: [
            "1 litre süt",
            "1 su bardağı irmik",
            "1 su bardağı şeker",
            "1 paket vanilya",
            "Üzeri için: Tarçın ve Hindistan cevizi"
          ],
          instructions: [
            "Tencereye süt, irmik ve şekeri alıp koyulaşana kadar karıştırarak pişirin.",
            "Kaynamaya başlayınca vanilyayı ekleyip ocaktan alın.",
            "Islatılmış borcama veya kaselere paylaştırın.",
            "Soğuduktan sonra üzerine tarçın serperek servis yapın."
          ]
        }
      ]
    };
  }

  // 9. GÜN ÖZEL DETAYLI TARİFLER
  if (dayNumber === 9) {
    return {
      day: 9,
      date: dateStr,
      recipes: [
        {
          id: 's-9',
          name: "Kremalı Mantar Çorbası",
          category: 'Çorba',
          calories: 160,
          imageUrl: "/yemekgorselleri/gun9/soup.webp",
          prepTime: '25 dk',
          ingredients: [
            "400 gr kültür mantarı",
            "1 adet kuru soğan",
            "2 yemek kaşığı un",
            "1 su bardağı süt",
            "4 su bardağı sıcak su",
            "2 yemek kaşığı tereyağı",
            "Tuz, karabiber, dereotu"
          ],
          instructions: [
            "Mantarları yıkayıp ince ince doğrayın (kararmaması için limonlu suda bekletebilirsiniz).",
            "Tereyağında yemeklik doğranmış soğanları kavurun, mantarları ekleyip suyunu salıp çekene kadar pişirin.",
            "Unu ekleyip kokusu çıkana kadar kavurun.",
            "Sıcak suyu yavaşça eklerken topaklanmaması için karıştırın.",
            "Kaynamaya başlayınca sütü ekleyin ve kıvam alana kadar yaklaşık 10 dakika pişirin.",
            "Tuz ve karabiberini ayarlayın, üzerine ince kıyılmış dereotu serperek servis yapın."
          ]
        },
        {
          id: 'm-9',
          name: "Tavuklu Sultan Kebabı",
          category: 'Ana Yemek',
          calories: 420,
          imageUrl: "/yemekgorselleri/gun9/main.webp",
          prepTime: '55 dk',
          ingredients: [
            "2 adet tavuk göğsü (kuşbaşı)",
            "2 adet yufka",
            "1 kase bezelye-havuç garnitür",
            "1 adet soğan",
            "Beşamel için: 2 kaşık un, 2 kaşık tereyağı, 2 bardak süt",
            "Üzeri için: Kaşar peyniri rendesi",
            "Salça, baharatlar"
          ],
          instructions: [
            "Tavukları soğanla soteleyin, garnitürü, salçayı ve baharatları ekleyip iç harcı hazırlayın.",
            "Bir kaseye dörde böldüğünüz yufkadan bir parça serip iç harçtan koyun, kenarlarını kapatıp fırın tepsisine ters çevirin.",
            "Beşamel sos için tereyağında unu kavurup sütü ekleyin, koyulaşana kadar pişirin.",
            "Tepsiye dizdiğiniz bohçaların üzerine beşamel sosu gezdirin.",
            "200 derece fırında kızarana kadar pişirin, son 5 dakika kala kaşar peyniri serpip erimesini bekleyin."
          ]
        },
        {
          id: 'y-9',
          name: "Arpa Şehriye Pilavı",
          category: 'Yardımcı Yemek',
          calories: 270,
          imageUrl: "/yemekgorselleri/gun9/side.webp",
          prepTime: '25 dk',
          ingredients: [
            "2 su bardağı arpa şehriye",
            "1 adet kapya biber",
            "1 adet çarliston biber",
            "2 yemek kaşığı tereyağı",
            "3.5 su bardağı sıcak su (veya tavuk suyu)",
            "Tuz"
          ],
          instructions: [
            "Biberleri küçük küpler halinde doğrayın.",
            "Tereyağını eritip biberleri hafifçe soteleyin.",
            "Şehriyeleri ekleyip rengi çok hafif dönene kadar kavurun.",
            "Sıcak suyunu ve tuzunu verip kapağını kapatın.",
            "Suyunu çekene kadar pişirin, 10 dakika demlendirip servis yapın."
          ]
        },
        {
          id: 't-9',
          name: "Muhallebili Kadayıf",
          category: 'Tatlı',
          calories: 340,
          imageUrl: "/yemekgorselleri/gun9/dessert.webp",
          prepTime: '40 dk',
          ingredients: [
            "300 gr kadayıf",
            "3 yemek kaşığı tereyağı",
            "5 yemek kaşığı şeker",
            "1 su bardağı dövülmüş ceviz",
            "Muhallebi için: 1 litre süt, 4 kaşık un, 3 kaşık nişasta, 1 bardak şeker, 1 paket vanilya, 1 paket krema (veya krem şanti)"
          ],
          instructions: [
            "Kadayıfları ince ince kırın veya robottan geçirin.",
            "Tavada tereyağını eritip kadayıfı ve şekeri ekleyerek altın rengi olana kadar kavurun. Cevizi ekleyip ocaktan alın.",
            "Muhallebi için krem şanti hariç tüm malzemeleri pişirin, soğuyunca kremayı/krem şantiyi ekleyip çırpın.",
            "Borcama kızarmış kadayıfın yarısını yayın.",
            "Üzerine muhallebiyi döküp düzeltin.",
            "Kalan kadayıfı en üste serpip dolapta 3-4 saat dinlendirin."
          ]
        }
      ]
    };
  }

  // 10. GÜN ÖZEL DETAYLI TARİFLER
  if (dayNumber === 10) {
    return {
      day: 10,
      date: dateStr,
      recipes: [
        {
          id: 's-10',
          name: "Düğün Çorbası",
          category: 'Çorba',
          calories: 185,
          imageUrl: "/yemekgorselleri/gun10/soup.webp",
          prepTime: '45 dk',
          ingredients: [
            "250 gr kuzu gerdan eti",
            "6 su bardağı su",
            "Terbiyesi için: 1 kase yoğurt, 1 yumurta sarısı, yarım limon suyu, 2 yemek kaşığı un",
            "Üzeri için: Tereyağı, pul biber"
          ],
          instructions: [
            "Etleri düdüklü tencerede iyice yumuşayana kadar haşlayın.",
            "Haşlanan etleri süzüp didikleyin, suyunu kenara ayırın.",
            "Ayrı bir kapta yoğurt, yumurta sarısı, limon suyu ve unu pürüzsüz olana kadar çırpın.",
            "Et suyunu tencereye alıp kaynatın, terbiyeye et suyundan ekleyip ılıştırarak tencereye yavaşça dökün.",
            "Didiklenmiş etleri ekleyip bir taşım daha kaynatın.",
            "Tereyağında kızdırılmış pul biberi üzerine gezdirerek servis yapın."
          ]
        },
        {
          id: 'm-10',
          name: "Kadınbudu Köfte",
          category: 'Ana Yemek',
          calories: 390,
          imageUrl: "/yemekgorselleri/gun10/main.webp",
          prepTime: '60 dk',
          ingredients: [
            "600 gr orta yağlı dana kıyma",
            "1 çay bardağı haşlanmış pirinç",
            "2 adet kuru soğan",
            "2 adet yumurta (bir tanesi içine, diğeri bulamak için)",
            "1 su bardağı galeta unu veya un (bulamak için)",
            "Tuz, karabiber, kimyon, sıvı yağ"
          ],
          instructions: [
            "Kıymanın yarısını yemeklik doğranmış soğanla suyunu çekene kadar kavurun ve soğutun.",
            "Geniş bir kapta kavrulmuş kıyma, çiğ kıyma, haşlanmış pirinç, 1 yumurta ve baharatları iyice yoğurun.",
            "Hamurdan yumurta büyüklüğünde parçalar koparıp yassı oval şekil verin.",
            "Hazırladığınız köfteleri önce una sonra çırpılmış yumurtaya bulayın.",
            "Kızgın yağda önlü arkalı altın sarısı olana kadar kızartın."
          ]
        },
        {
          id: 'y-10',
          name: "Garnitürlü Pirinç Pilavı",
          category: 'Yardımcı Yemek',
          calories: 290,
          imageUrl: "/yemekgorselleri/gun10/side.webp",
          prepTime: '30 dk',
          ingredients: [
            "2 su bardağı baldo pirinç",
            "1 su bardağı hazır veya haşlanmış garnitür (bezelye, havuç, patates)",
            "2 yemek kaşığı tereyağı",
            "3 su bardağı sıcak su",
            "Tuz"
          ],
          instructions: [
            "Pirinçleri ılık tuzlu suda 20 dakika bekletip iyice yıkayın.",
            "Tereyağını tencerede eritip pirinçleri tane tane olana kadar kavurun.",
            "Garnitürleri ve sıcak suyu ekleyin.",
            "Kısık ateşte suyunu çekene kadar pişirin.",
            "15 dakika demlendirip sıcak servis yapın."
          ]
        },
        {
          id: 't-10',
          name: "Ev Yapımı Supangle",
          category: 'Tatlı',
          calories: 260,
          imageUrl: "/yemekgorselleri/gun10/dessert.webp",
          prepTime: '25 dk',
          ingredients: [
            "1 litre süt",
            "1 su bardağı toz şeker",
            "2 yemek kaşığı un",
            "2 yemek kaşığı nişasta",
            "3 yemek kaşığı kakao",
            "1 yumurta sarısı",
            "80 gr bitter çikolata",
            "1 yemek kaşığı tereyağı",
            "Yarım su bardağı buzlu su"
          ],
          instructions: [
            "Süt, şeker, un, nişasta, kakao ve yumurta sarısını tencereye alıp karıştırarak pişirin.",
            "Kaynamaya başlayınca çikolata ve tereyağını ekleyip eriyene kadar karıştırın.",
            "Ocaktan aldıktan sonra buzlu suyu ekleyip mikserle 5-10 dakika pürüzsüz olana kadar çırpın (bu püf noktasıdır).",
            "Kaselerine paylaştırıp soğuyunca üzerine Hindistan cevizi veya fındık serperek servis yapın."
          ]
        }
      ]
    };
  }

  // 11. GÜN ÖZEL DETAYLI TARİFLER
  if (dayNumber === 11) {
    return {
      day: 11,
      date: dateStr,
      recipes: [
        {
          id: 's-11',
          name: "Lebeniye Çorbası",
          category: 'Çorba',
          calories: 210,
          imageUrl: "/yemekgorselleri/gun11/soup.webp",
          prepTime: '40 dk',
          ingredients: [
            "1 çay bardağı haşlanmış buğday",
            "1 su bardağı haşlanmış nohut",
            "1 kase süzme yoğurt",
            "1 yumurta sarısı, 1 yemek kaşığı un",
            "Köftesi için: 150 gr kıyma, Tuz, Karabiber",
            "Nane, tereyağı"
          ],
          instructions: [
            "Kıyma ve baharatları yoğurup nohut büyüklüğünde köfteler yapın ve tereyağında kızartın.",
            "Tencerede buğday ve nohudu suyla kaynatın.",
            "Yoğurt, yumurta ve unu çırpıp ılıştırarak tencereye ekleyin.",
            "Sürekli karıştırarak kaynayana kadar pişirin.",
            "Son olarak kızarttığınız köfteleri ve nane yakılmış yağı üzerine ekleyip servis yapın."
          ]
        },
        {
          id: 'm-11',
          name: "Patlıcan Musakka",
          category: 'Ana Yemek',
          calories: 345,
          imageUrl: "/yemekgorselleri/gun11/main.webp",
          prepTime: '50 dk',
          ingredients: [
            "4 adet patlıcan",
            "250 gr kıyma",
            "2 adet soğan, 2 diş sarımsak",
            "2 adet domates, 2 adet yeşil biber",
            "1 yemek kaşığı salça, Sıvı yağ",
            "Tuz, Karabiber, Pul Biber"
          ],
          instructions: [
            "Patlıcanları alacalı soyup küp doğrayın ve yağda hafifçe kızartın.",
            "Soğan, sarımsak ve kıymayı kavurun. Biberleri ve domatesleri ekleyip sosu hazırlayın.",
            "Salçalı suyu ilave edin.",
            "Kızarmış patlıcanları tencereye dizin, üzerine kıymalı harcı dökün.",
            "Kısık ateşte sebzeler yumuşayana ve sularını çekene kadar pişirin."
          ]
        },
        {
          id: 'y-11',
          name: "Şehriyeli Pirinç Pilavı",
          category: 'Yardımcı Yemek',
          calories: 280,
          imageUrl: "/yemekgorselleri/gun11/side.webp",
          prepTime: '30 dk',
          ingredients: [
            "2 su bardağı pirinç",
            "3 yemek kaşığı arpa şehriye",
            "2 yemek kaşığı tereyağı",
            "3 su bardağı sıcak su",
            "Tuz"
          ],
          instructions: [
            "Şehriyeleri tereyağında rengi dönene kadar kavurun.",
            "Yıkanmış pirinçleri ekleyip şeffaflaşana kadar kavurmaya devam edin.",
            "Sıcak suyunu ve tuzunu ekleyip kısık ateşte pişirin.",
            "Havlu kağıt kapatıp 20 dakika demlendirin."
          ]
        },
        {
          id: 't-11',
          name: "Karamel Soslu Trileçe",
          category: 'Tatlı',
          calories: 320,
          imageUrl: "/yemekgorselleri/gun11/dessert.webp",
          prepTime: '45 dk',
          ingredients: [
            "5 yumurta, 1 su bardağı şeker",
            "1.5 su bardağı un, 1 paket vanilya, 1 paket kabartma tozu",
            "Sütlü sos için: 3 su bardağı süt, 1 paket krema",
            "Karamel için: 1 su bardağı şeker, 1 yemek kaşığı tereyağı, 1 paket krema"
          ],
          instructions: [
            "Yumurta ve şekeri çırpıp keki hazırlayın ve pişirin.",
            "Kek soğuyunca üzerine sütlü sosu gezdirin.",
            "Karamel sosu hazırlayıp (şekeri eritip krema ekleyerek) en üste dökün.",
            "Buzdolabında dinlendirip servis yapın."
          ]
        }
      ]
    };
  }

  // 12. GÜN ÖZEL DETAYLI TARİFLER
  if (dayNumber === 12) {
    return {
      day: 12,
      date: dateStr,
      recipes: [
        {
          id: 's-12',
          name: "Köz Domates Çorbası",
          category: 'Çorba',
          calories: 130,
          imageUrl: "/yemekgorselleri/gun12/soup.webp",
          prepTime: '35 dk',
          ingredients: [
            "6 adet büyük domates (közlenmiş)",
            "2 diş sarımsak",
            "1 yemek kaşığı un",
            "1 yemek kaşığı tereyağı",
            "1 su bardağı süt",
            "Tuz, karabiber, taze fesleğen"
          ],
          instructions: [
            "Domatesleri fırında veya ocakta közleyip kabuklarını soyun.",
            "Tereyağında unu kokusu çıkana kadar kavurun.",
            "Közlenmiş domatesleri ve sarımsakları ekleyip birkaç dakika soteleyin.",
            "Sıcak su ekleyip kaynamaya bırakın, sonra pürüzsüz olana kadar blenderdan geçirin.",
            "Sütü ekleyip bir taşım daha kaynatın, fesleğen ile servis yapın."
          ]
        },
        {
          id: 'm-12',
          name: "Sebzeli Tavuk Haşlama",
          category: 'Ana Yemek',
          calories: 320,
          imageUrl: "/yemekgorselleri/gun12/main.webp",
          prepTime: '50 dk',
          ingredients: [
            "4 adet tavuk baget",
            "2 adet patates, 1 adet havuç",
            "1 adet kuru soğan",
            "Terbiyesi için: 1 yumurta sarısı, yarım limon suyu",
            "Tuz, karabiber, maydanoz"
          ],
          instructions: [
            "Tavukları tencereye alıp üzerine su ekleyerek haşlamaya başlayın.",
            "Yarım haşlanan tavukların üzerine küp doğranmış patates, havuç ve soğanı ekleyin.",
            "Sebzeler yumuşayana kadar pişirmeye devam edin.",
            "Limon suyu ve yumurta sarısını çırpıp yemeğin suyuyla ılıştırarak ekleyin.",
            "Maydanoz serpip sıcak servis yapın."
          ]
        },
        {
          id: 'y-12',
          name: "Sebzeli Bulgur Pilavı",
          category: 'Yardımcı Yemek',
          calories: 260,
          imageUrl: "/yemekgorselleri/gun12/side.webp",
          prepTime: '30 dk',
          ingredients: [
            "2 su bardağı pilavlık bulgur",
            "1 adet domates, 2 adet yeşil biber",
            "1 adet kuru soğan",
            "1 yemek kaşığı salça, 2 yemek kaşığı tereyağı",
            "3.5 su bardağı sıcak su"
          ],
          instructions: [
            "Soğan ve biberleri yağda kavurun.",
            "Salçayı ve rendelenmiş domatesi ekleyip birkaç dakika daha çevirin.",
            "Yıkanmış bulgurları ekleyip karıştırın.",
            "Sıcak suyunu ekleyip suyunu çekene kadar kısık ateşte pişirin."
          ]
        },
        {
          id: 't-12',
          name: "Çilekli Magnolia",
          category: 'Tatlı',
          calories: 280,
          imageUrl: "/yemekgorselleri/gun12/dessert.webp",
          prepTime: '25 dk',
          ingredients: [
            "1 litre süt",
            "1 su bardağı şeker",
            "2 yemek kaşığı nişasta, 2 yemek kaşığı un",
            "1 yumurta sarısı, 1 paket vanilya",
            "1 paket sıvı krema, 1 paket bebek bisküvisi",
            "Taze çilek"
          ],
          instructions: [
            "Puding malzemelerini (krema ve vanilya hariç) pişirip soğumaya bırakın.",
            "Soğuyan karışıma krema ve vanilyayı ekleyip çırpın.",
            "Bardakların kenarlarına çilek dilimleri dizin.",
            "Bisküvi kırıntısı ve pudingi kat kat dizerek kupları hazırlayın."
          ]
        }
      ]
    };
  }

  // 13. GÜN ÖZEL DETAYLI TARİFLER
  if (dayNumber === 13) {
    return {
      day: 13,
      date: dateStr,
      recipes: [
        {
          id: 's-13',
          name: "Kremalı Mantar Çorbası",
          category: 'Çorba',
          calories: 160,
          imageUrl: "/yemekgorselleri/gun13/soup.webp",
          prepTime: '30 dk',
          ingredients: [
            "400 gr mantar",
            "1 adet soğan",
            "2 yemek kaşığı un",
            "1 su bardağı süt veya krema",
            "Tereyağı, tuz, karabiber"
          ],
          instructions: [
            "Mantarları ince ince doğrayıp tereyağında soteleyin.",
            "Soğanları ekleyip kavurmaya devam edin.",
            "Unu ekleyip kavurduktan sonra sıcak su ilave edin.",
            "Pişmeye yakın sütü/kremayı ekleyip bir taşım daha kaynatın."
          ]
        },
        {
          id: 'm-13',
          name: "İzmir Köfte",
          category: 'Ana Yemek',
          calories: 410,
          imageUrl: "/yemekgorselleri/gun13/main.webp",
          prepTime: '50 dk',
          ingredients: [
            "500 gr kıyma",
            "4 adet patates",
            "1 adet soğan, 1 yumurta",
            "Galeta unu, baharatlar",
            "Salçalı sos için: 1 kaşık salça, sıcak su"
          ],
          instructions: [
            "Köfte harcını hazırlayıp şekil verin.",
            "Patatesleri elma dilimi doğrayıp fırın tepsisine dizin.",
            "Köfteleri de aralarına yerleştirin.",
            "Üzerine salçalı sosu döküp fırında pişirin."
          ]
        },
        {
          id: 'y-13',
          name: "Pirinç Pilavı",
          category: 'Yardımcı Yemek',
          calories: 280,
          imageUrl: "/yemekgorselleri/gun13/side.webp",
          prepTime: '25 dk',
          ingredients: [
            "2 su bardağı pirinç",
            "2 yemek kaşığı tereyağı",
            "3 su bardağı sıcak su",
            "Tuz"
          ],
          instructions: [
            "Pirinçleri yıkayıp tereyağında kavurun.",
            "Sıcak suyunu ekleyip demlenmeye bırakın."
          ]
        },
        {
          id: 't-13',
          name: "Fıstıklı Tel Kadayıf",
          category: 'Tatlı',
          calories: 420,
          imageUrl: "/yemekgorselleri/gun13/dessert.webp",
          prepTime: '45 dk',
          ingredients: [
            "500 gr tel kadayıf",
            "250 gr tereyağı",
            "1 su bardağı Antep fıstığı iç",
            "Şerbeti için: 3 su bardağı şeker, 3 su bardağı su"
          ],
          instructions: [
            "Kadayıfı erimiş tereyağı ile harmanlayın.",
            "Yarısını tepsiye dizip üzerine fıstık serpin.",
            "Kalan kadayıfı üzerine kapatıp fırında kızartın.",
            "Sıcak tatlıya soğuk şerbeti dökün."
          ]
        }
      ]
    };
  }

  // 14. GÜN ÖZEL DETAYLI TARİFLER
  if (dayNumber === 14) {
    return {
      day: 14,
      date: dateStr,
      recipes: [
        {
          id: 's-14',
          name: "Yayla Çorbası",
          category: 'Çorba',
          calories: 155,
          imageUrl: "/yemekgorselleri/gun14/soup.webp",
          prepTime: '25 dk',
          ingredients: [
            "1 çay bardağı pirinç",
            "6 su bardağı su",
            "1 kase yoğurt",
            "1 yumurta sarısı",
            "1 yemek kaşığı un",
            "Nane, tereyağı, tuz"
          ],
          instructions: [
            "Pirinçleri yıkayıp yumuşayana kadar suyla haşlayın.",
            "Ayrı bir kapta yoğurt, yumurta sarısı ve unu çırpın.",
            "Çorbanın sıcak suyundan alıp terbiyeyi ılıştırın ve tencereye yavaşça ekleyin.",
            "Kaynayana kadar karıştırın, tuzunu atıp ocaktan alın.",
            "Tereyağında nane yakıp üzerine gezdirin."
          ]
        },
        {
          id: 'm-14',
          name: "Zeytinyağlı Taze Fasulye",
          category: 'Ana Yemek',
          calories: 180,
          imageUrl: "/yemekgorselleri/gun14/main.webp",
          prepTime: '45 dk',
          ingredients: [
            "1 kg taze fasulye",
            "2 adet büyük soğan",
            "3 adet domates",
            "Yarım su bardağı zeytinyağı",
            "1 tatlı kaşığı toz şeker",
            "1 tatlı kaşığı tuz",
            "1 su bardağı sıcak su"
          ],
          instructions: [
            "Fasulyeleri ayıklayıp isteğe göre kırın veya bütünüyle bırakın.",
            "Soğanları yemeklik doğrayıp zeytinyağında pembeleşene kadar kavurun.",
            "Fasulyeleri ekleyip rengi dönene kadar soğanla birlikte çevirin.",
            "Rendelenmiş veya küp doğranmış domatesleri ekleyin.",
            "Şeker, tuz ve sıcak suyu ilave edip kapağını kapatın.",
            "Kısık ateşte fasulyeler yumuşayana kadar pişirin. Soğuk servis yapın."
          ]
        },
        {
          id: 'y-14',
          name: "Domates Soslu Makarna",
          category: 'Yardımcı Yemek',
          calories: 320,
          imageUrl: "/yemekgorselleri/gun14/side.webp",
          prepTime: '20 dk',
          ingredients: [
            "1 paket makarna (penne veya burgu)",
            "3 adet olgun domates",
            "2 diş sarımsak",
            "2 yemek kaşığı zeytinyağı",
            "1 yemek kaşığı tereyağı",
            "Tuz, karabiber, taze fesleğen"
          ],
          instructions: [
            "Makarnayı bol tuzlu suda dişe gelir kıvamda (al dente) haşlayın.",
            "Ayrı bir tavada zeytinyağı ve tereyağını ısıtıp ezilmiş sarımsakları kokusu çıkana kadar çevirin.",
            "Rendelenmiş domatesleri ekleyip suyunu hafif çekene kadar pişirin.",
            "Haşlanan makarnayı süzüp sosla buluşturun.",
            "Servis ederken üzerine taze fesleğen veya peynir ekleyin."
          ]
        },
        {
          id: 't-14',
          name: "Fırın Sütlaç",
          category: 'Tatlı',
          calories: 270,
          imageUrl: "/yemekgorselleri/gun14/dessert.webp",
          prepTime: '50 dk',
          ingredients: [
            "1 litre süt",
            "1 çay bardağı pirinç",
            "1 su bardağı su (pirinci haşlamak için)",
            "1 su bardağı toz şeker",
            "2 yemek kaşığı buğday nişastası (yarım çay bardağı süt ile açılmış)",
            "1 paket vanilya"
          ],
          instructions: [
            "Pirinçleri yıkayıp 1 bardak su ile suyunu çekene kadar haşlayın.",
            "Sütü ve şekeri ekleyip kaynamaya bırakın.",
            "Sütle açtığınız nişastayı yavaşça ekleyip kıvam alana kadar karıştırın. Vanilyayı ekleyin.",
            "Fırın kaplarına paylaştırın. Kapları derin bir fırın tepsisine dizin ve tepsiye kapların yarısına gelecek kadar soğuk su koyun.",
            "Önceden ısıtılmış 200 derece fırının sadece üst ızgarasını açıp üzerleri kızarana kadar pişirin."
          ]
        }
      ]
    };
  }

  // 15. GÜN ÖZEL DETAYLI TARİFLER
  if (dayNumber === 15) {
    return {
      day: 15,
      date: dateStr,
      recipes: [
        {
          id: 's-15',
          name: "Ezogelin Çorbası",
          category: 'Çorba',
          calories: 145,
          imageUrl: "/yemekgorselleri/gun15/soup.webp",
          prepTime: '30 dk',
          ingredients: [
            "1 su bardağı kırmızı mercimek",
            "1 yemek kaşığı pirinç",
            "1 yemek kaşığı bulgur",
            "1 adet kuru soğan",
            "1 yemek kaşığı domates salçası",
            "1 diş sarımsak",
            "6 su bardağı sıcak su",
            "Nane, pul biber, tuz, tereyağı"
          ],
          instructions: [
            "Mercimek, pirinç ve bulguru yıkayıp süzün.",
            "Tencerede tereyağını eritin, yemeklik doğranmış soğan ve sarımsağı soteleyin.",
            "Salçayı ekleyip kokusu çıkana kadar kavurun.",
            "Bakliyatları ve sıcak suyu ekleyin ve yumuşayana kadar pişirin.",
            "Dilerseniz blenderdan geçirin veya geleneksel usulde taneli bırakın.",
            "Üzerine yağda yakılmış nane ve pul biber ile servis yapın."
          ]
        },
        {
          id: 'm-15',
          name: "Tas Kebabı",
          category: 'Ana Yemek',
          calories: 380,
          imageUrl: "/yemekgorselleri/gun15/main.webp",
          prepTime: '65 dk',
          ingredients: [
            "500 gr kuşbaşı dana eti",
            "2 adet patates",
            "1 adet büyük kuru soğan",
            "2 diş sarımsak",
            "1 yemek kaşığı domates salçası",
            "2 adet yeşil biber",
            "Tuz, karabiber, kekik, sıvı yağ"
          ],
          instructions: [
            "Etleri tencereye alın ve suyunu salıp çekene kadar mühürleyin.",
            "Soğan ve sarımsağı ekleyip kavurmaya devam edin.",
            "Salçayı ve biberleri ekleyip 2-3 dakika karıştırın.",
            "Sıcak suyunu ekleyip etler yumuşayana kadar pişirin.",
            "Pişmeye yakın küp doğranmış patatesleri ekleyin ve 15 dk daha pişirin."
          ]
        },
        {
          id: 'y-15',
          name: "Şehriyeli Bulgur Pilavı",
          category: 'Yardımcı Yemek',
          calories: 250,
          imageUrl: "/yemekgorselleri/gun15/side.webp",
          prepTime: '25 dk',
          ingredients: [
            "2 su bardağı pilavlık bulgur",
            "Yarım su bardağı tel veya arpa şehriye",
            "2 yemek kaşığı tereyağı",
            "1 yemek kaşığı sıvı yağ",
            "4 su bardağı sıcak su",
            "Tuz"
          ],
          instructions: [
            "Tencerede yağları eritip şehriyeleri rengi dönene kadar kavurun.",
            "Bulguru ekleyip 2-3 dakika kavurmaya devam edin.",
            "Sıcak suyunu ve tuzunu ekleyip kısık ateşte suyunu çekene kadar pişirin.",
            "15-20 dakika demlenmeye bırakın."
          ]
        },
        {
          id: 't-15',
          name: "Haşhaşlı Revani",
          category: 'Tatlı',
          calories: 350,
          imageUrl: "/yemekgorselleri/gun15/dessert.webp",
          prepTime: '55 dk',
          ingredients: [
            "3 adet yumurta",
            "1 su bardağı toz şeker",
            "1 su bardağı süt",
            "1 su bardağı sıvı yağ",
            "1 su bardağı irmik",
            "1 su bardağı un",
            "Yarım su bardağı mavi haşhaş",
            "Kabartma tozu, vanilya",
            "Şerbeti için: 2 su bardağı şeker, 3 su bardağı su"
          ],
          instructions: [
            "Şerbeti hazırlayıp soğumaya bırakın.",
            "Kek malzemelerini çırpıp 180 derecede pişirin.",
            "Sıcak keke soğuk şerbeti dökün.",
            "Soğuyunca krem şanti ile süsleyip servis yapın."
          ]
        }
      ]
    };
  }

  if (dayNumber === 16) {
    return {
      day: 16,
      date: dateStr,
      recipes: [
        {
          id: 's-16',
          name: "Domates Çorbası",
          category: 'Çorba',
          calories: 130,
          imageUrl: "/yemekgorselleri/gun16/soup.webp",
          prepTime: '25 dk',
          ingredients: [
            "5 adet olgun domates",
            "1 yemek kaşığı un",
            "1 yemek kaşığı tereyağı",
            "1 yemek kaşığı domates salçası",
            "2 su bardağı tavuk suyu veya su",
            "Yarım su bardağı süt",
            "Üzeri için: Rendelenmiş kaşar peyniri"
          ],
          instructions: [
            "Tereyağında unu hafif kokusu çıkana kadar kavurun.",
            "Salçayı ve rendelenmiş domatesleri ekleyip 5 dakika daha pişirin.",
            "Suyu ekleyip kaynamaya bırakın.",
            "Çorba kıvam aldığında sütü yavaşça ilave edin ve karıştırın.",
            "Pürüzsüz olması için blenderdan geçirin.",
            "Servis ederken üzerine rendelenmiş kaşar peyniri ekleyin."
          ]
        },
        {
          id: 'm-16',
          name: "Tavuk Sote",
          category: 'Ana Yemek',
          calories: 320,
          imageUrl: "/yemekgorselleri/gun16/main.webp",
          prepTime: '40 dk',
          ingredients: [
            "500 gr tavuk göğsü",
            "2 adet yeşil biber",
            "1 adet kırmızı kapya biber",
            "1 adet kuru soğan",
            "2 diş sarımsak",
            "2 adet domates",
            "1 tatlı kaşığı domates salçası",
            "Tuz, karabiber, kekik, sıvı yağ"
          ],
          instructions: [
            "Tavukları kuşbaşı doğrayıp suyunu çekene kadar kavurun.",
            "Doğranmış soğan, sarımsak ve biberleri ekleyip sotelemeye devam edin.",
            "Salçayı ve küp doğranmış domatesleri ilave edin.",
            "Baharatlarını ekleyip kısık ateşte tavuklar yumuşayana kadar pişirin."
          ]
        },
        {
          id: 'y-16',
          name: "Pirinç Pilavı",
          category: 'Yardımcı Yemek',
          calories: 280,
          imageUrl: "/yemekgorselleri/gun16/side.webp",
          prepTime: '30 dk',
          ingredients: [
            "2 su bardağı pirinç",
            "3 su bardağı sıcak su",
            "2 yemek kaşığı tereyağı",
            "1 yemek kaşığı sıvı yağ",
            "2 yemek kaşığı arpa şehriye",
            "Tuz"
          ],
          instructions: [
            "Pirinçleri ılık tuzlu suda 15 dakika bekletip süzün.",
            "Tencerede yağları eritip şehriyeleri rengi dönene kadar kavurun.",
            "Pirinçleri ekleyip şeffaf bir renk alana kadar 3-4 dakika kavurun.",
            "Sıcak suyunu ve tuzunu ekleyip önce harlı, sonra kısık ateşte pişirin.",
            "Demlenmesi için üzerini kağıt havluyla kapatıp bekletin."
          ]
        },
        {
          id: 't-16',
          name: "Tel Kadayıf",
          category: 'Tatlı',
          calories: 340,
          imageUrl: "/yemekgorselleri/gun16/dessert.webp",
          prepTime: '45 dk',
          ingredients: [
            "500 gr tel kadayıf",
            "200 gr tereyağı",
            "1 su bardağı ceviz",
            "Şerbeti için: 3 bardak şeker, 3 bardak su, 1 tatlı kaşığı limon suyu"
          ],
          instructions: [
            "Şerbeti hazırlayıp soğumaya bırakın.",
            "Kadayıfları tereyağıyla harmanlayıp yarısını tepsiye basın.",
            "Cevizi serpip kalan kadayıfı üzerine bastırın.",
            "180 derecede kızarana kadar pişirin.",
            "Sıcak kadayıfa soğuk şerbeti verin."
          ]
        }
      ]
    };
  }

  if (dayNumber === 17) {
    return {
      day: 17,
      date: dateStr,
      recipes: [
        {
          id: 's-17',
          name: "Süzme Mercimek Çorbası",
          category: 'Çorba',
          calories: 140,
          imageUrl: "/yemekgorselleri/gun17/soup.webp",
          prepTime: '35 dk',
          ingredients: [
            "2 su bardağı kırmızı mercimek",
            "1 adet büyük soğan",
            "1 adet havuç",
            "1 adet patates",
            "1 yemek kaşığı tereyağı",
            "6-7 su bardağı su",
            "Tuz, karabiber, zerdeçal"
          ],
          instructions: [
            "Sebzeleri iri iri doğrayıp bakliyatlarla birlikte tencereye alın.",
            "Suyunu ekleyip sebzeler yumuşayana kadar haşlayın.",
            "Pürüzsüz bir kıvam için blenderdan geçirin veya tel süzgeçle süzün.",
            "Ayrı bir tavada tereyağını yakıp içine baharatları ekleyin ve çorbaya karıştırın."
          ]
        },
        {
          id: 'm-17',
          name: "İzmir Köfte",
          category: 'Ana Yemek',
          calories: 410,
          imageUrl: "/yemekgorselleri/gun17/main.webp",
          prepTime: '60 dk',
          ingredients: [
            "500 gr dana kıyma",
            "3 adet büyük patates",
            "1 adet soğan",
            "2 diş sarımsak",
            "1 adet yumurta",
            "Yarım demet maydanoz",
            "Galeta unu, baharatlar",
            "Sosu için: 2 yemek kaşığı salça, 2 su bardağı su"
          ],
          instructions: [
            "Kıyma, rendelenmiş soğan, yumurta ve baharatlarla köfteleri hazırlayın.",
            "Patatesleri elma dilim doğrayıp köftelerle birlikte hafifçe kızartın.",
            "Fırın tepsisine dizip üzerine salçalı sosu dökün.",
            "200 derece fırında patatesler yumuşayana kadar pişirin."
          ]
        },
        {
          id: 'y-17',
          name: "Sade Pirinç Pilavı",
          category: 'Yardımcı Yemek',
          calories: 280,
          imageUrl: "/yemekgorselleri/gun17/side.webp",
          prepTime: '25 dk',
          ingredients: [
            "2 su bardağı pirinç",
            "3 su bardağı tavuk suyu",
            "2 yemek kaşığı tereyağı",
            "1 yemek kaşığı sıvı yağ",
            "Tuz"
          ],
          instructions: [
            "Pirinci önceden ıslatıp süzün ve yağda şeffaflaşana kadar kavurun.",
            "Sıcak tavuk suyunu ve tuzunu ekleyip suyunu çekene kadar kısık ateşte pişirin."
          ]
        },
        {
          id: 't-17',
          name: "Kemalpaşa Tatlısı",
          category: 'Tatlı',
          calories: 320,
          imageUrl: "/yemekgorselleri/gun17/dessert.webp",
          prepTime: '30 dk',
          ingredients: [
            "1 paket hazır Kemalpaşa tatlısı",
            "3 su bardağı toz şeker",
            "4 su bardağı su",
            "Bir kaç damla limon suyu"
          ],
          instructions: [
            "Şerbeti kaynatıp tatlıları içine atın.",
            "Tatlılar yumuşayıp şerbeti çekene kadar pişirin.",
            "Soğuduktan sonra kaymak veya fıstık ile servis yapın."
          ]
        }
      ]
    };
  }

  if (dayNumber === 18) {
    return {
      day: 18,
      date: dateStr,
      recipes: [
        {
          id: 's-18',
          name: "Tarhana Çorbası",
          category: 'Çorba',
          calories: 145,
          imageUrl: "/yemekgorselleri/gun18/soup.webp",
          prepTime: '20 dk',
          ingredients: [
            "3 yemek kaşığı ev tarhanası",
            "1 yemek kaşığı tereyağı",
            "1 tatlı kaşığı salça",
            "2 diş sarımsak",
            "6 su bardağı su",
            "Nane, pul biber"
          ],
          instructions: [
            "Salçayı tereyağında kavurun, üzerine sarımsakları ekleyin.",
            "Suyu ekleyip tarhanayı azar azar dökerek devamlı karıştırın.",
            "Kaynayana kadar karıştırmayı bırakmayın, kıvam alınca nane ekleyip söndürün."
          ]
        },
        {
          id: 'm-18',
          name: "Hünkar Beğendi",
          category: 'Ana Yemek',
          calories: 450,
          imageUrl: "/yemekgorselleri/gun18/main.webp",
          prepTime: '75 dk',
          ingredients: [
            "500 gr kuşbaşı kuzu veya dana eti",
            "3 adet patlıcan",
            "1 yemek kaşığı un",
            "1 yemek kaşığı tereyağı",
            "Yarım su bardağı süt",
            "Yarım su bardağı rendelenmiş kaşar peyniri",
            "1 adet soğan, 1 yemek kaşığı salça"
          ],
          instructions: [
            "Etleri kendi suyunda pişirip soğan ve salça ile soteleyin.",
            "Patlıcanları közleyip içlerini çıkartın ve ince ince kıyın.",
            "Tereyağında unu kavurup patlıcanları ve sütü ekleyerek püre haline getirin.",
            "Peyniri ekleyip karıştırın. Beğendiyi tabağa yayıp üzerine etleri ekleyerek servis yapın."
          ]
        },
        {
          id: 'y-18',
          name: "Mevsim Salatası",
          category: 'Yardımcı Yemek',
          calories: 120,
          imageUrl: "/yemekgorselleri/gun18/side.webp",
          prepTime: '15 dk',
          ingredients: [
            "3 adet domates",
            "2 adet yeşil biber",
            "1 adet büyük soğan",
            "1 su bardağı çekilmiş ceviz",
            "Nar ekşisi, zeytinyağı, sumak"
          ],
          instructions: [
            "Tüm sebzeleri çok ince (küçücük) doğrayın.",
            "Sosunu ve cevizini ekleyip harmanlayın."
          ]
        },
        {
          id: 't-18',
          name: "İrmik Helvası",
          category: 'Tatlı',
          calories: 360,
          imageUrl: "/yemekgorselleri/gun18/dessert.webp",
          prepTime: '30 dk',
          ingredients: [
            "2 su bardağı irmik",
            "100 gr tereyağı",
            "Yarım çay bardağı dolmalı fıstık",
            "2 su bardağı şeker",
            "2 su bardağı su veya süt"
          ],
          instructions: [
            "Yağı eritip irmik ve fıstıkları rengi dönene kadar uzun süre kavurun.",
            "Sıcak şerbeti ekleyip kapağını kapatın ve suyunu çekene kadar pişirin.",
            "Demlenmesi için 15 dakika bekledikten sonra servis yapın."
          ]
        }
      ]
    };
  }

  if (dayNumber === 19) {
    return {
      day: 19,
      date: dateStr,
      recipes: [
        {
          id: 's-19',
          name: "Düğün Çorbası",
          category: 'Çorba',
          calories: 160,
          imageUrl: "/yemekgorselleri/gun19/soup.webp",
          prepTime: '45 dk',
          ingredients: [
            "250 gr kuzu gerdan",
            "1 kase yoğurt",
            "1 yumurta sarısı",
            "Yarım limon suyu",
            "2 yemek kaşığı un"
          ],
          instructions: [
            "Etleri düdüklü tencerede iyice haşlayıp didikleyin.",
            "Yoğurt, yumurta sarısı, un ve limonu çırparak terbiyesini hazırlayın.",
            "Et suyuyla ılıştırıp tencereye ekleyin. Kaynayana kadar karıştırın."
          ]
        },
        {
          id: 'm-19',
          name: "Sebzeli Tavuk Haşlama",
          category: 'Ana Yemek',
          calories: 280,
          imageUrl: "/yemekgorselleri/gun19/main.webp",
          prepTime: '50 dk',
          ingredients: [
            "500 gr tavuk but (kemiksiz)",
            "2 adet patates",
            "1 adet büyük havuç",
            "10-15 adet arpacık soğan",
            "2 diş sarımsak",
            "Tuz, karabiber"
          ],
          instructions: [
            "Tavukları iri kuşbaşı doğrayıp tencerede soteleyin.",
            "Soğan, havuç ve patatesleri ekleyip 5 dk daha çevirin.",
            "Sıcak su ekleyip tüm sebzeler yumuşayana kadar haşlayın."
          ]
        },
        {
          id: 'y-19',
          name: "Şehriyeli Pirinç Pilavı",
          category: 'Yardımcı Yemek',
          calories: 285,
          imageUrl: "/yemekgorselleri/gun19/side.webp",
          prepTime: '25 dk',
          ingredients: [
            "2 su bardağı pirinç",
            "3 yemek kaşığı arpa şehriye",
            "Tereyağı ve sıvı yağ"
          ],
          instructions: [
            "Şehriyeleri yağda kavurup pirinçleri ekleyin.",
            "Sıcak su ve tuz ekleyip demlendirerek pişirin."
          ]
        },
        {
          id: 't-19',
          name: "Şekerpare",
          category: 'Tatlı',
          calories: 340,
          imageUrl: "/yemekgorselleri/gun19/dessert.webp",
          prepTime: '45 dk',
          ingredients: [
            "125 gr tereyağı",
            "1 adet yumurta",
            "Yarım su bardağı pudra şekeri",
            "Yarım su bardağı irmik",
            "2-3 su bardağı un",
            "Kabartma tozu",
            "Üzeri için: Fındık"
          ],
          instructions: [
            "Hamur malzemelerini yoğurup ceviz büyüklüğünde parçalar koparın.",
            "Yağlı kağıt serili tepsiye dizip üzerlerine fındık batırın.",
            "180 derecede kızarana kadar pişirin ve soğuk şerbetle buluşturun."
          ]
        }
      ]
    };
  }

  if (dayNumber === 20) {
    return {
      day: 20,
      date: dateStr,
      recipes: [
        {
          id: 's-20',
          name: "Kremalı Mantar Çorbası",
          category: 'Çorba',
          calories: 170,
          imageUrl: "/yemekgorselleri/gun20/soup.webp",
          prepTime: '30 dk',
          ingredients: [
            "400 gr kültür mantarı",
            "1 adet küçük kuru soğan",
            "2 yemek kaşığı tereyağı",
            "2 yemek kaşığı un",
            "1 paket sıvı krema (200ml)",
            "5 su bardağı sıcak su veya tavuk suyu",
            "Tuz, karabiber, bir tutam dereotu"
          ],
          instructions: [
            "Mantarları nemli bir bezle silip ince ince dilimleyin, soğanı yemeklik doğrayın.",
            "Tencerede tereyağını eritip soğanları şeffaflaşana kadar soteleyin.",
            "Mantarları ekleyin ve suyunu salıp çekene kadar yüksek ateşte kavurun.",
            "Unu ekleyip kokusu çıkana kadar 2 dakika daha kavurmaya devam edin.",
            "Sıcak suyu azar azar ekleyerek topaklanmaması için hızlıca karıştırın.",
            "Çorba kaynamaya başlayınca altını kısın ve 10 dakika pişirin.",
            "Son olarak sıvı kremayı ekleyin, bir taşım daha kaynatıp tuz/karabiber ile tatlandırın.",
            "İnce kıyılmış dereotu ile sıcak servis yapın."
          ]
        },
        {
          id: 'm-20',
          name: "Karnıyarık",
          category: 'Ana Yemek',
          calories: 380,
          imageUrl: "/yemekgorselleri/gun20/main.webp",
          prepTime: '65 dk',
          ingredients: [
            "6 adet orta boy patlıcan",
            "300 gr orta yağlı dana kıyma",
            "2 adet kuru soğan",
            "3 adet yeşil biber",
            "2 adet domates",
            "3 diş sarımsak",
            "1 yemek kaşığı domates salçası",
            "Tuz, karabiber, pul biber, maydanoz",
            "Kızartmak için sıvı yağ"
          ],
          instructions: [
            "Patlıcanları alacalı soyup tuzlu suda 15 dakika bekletin, ardından kurulayıp yağda her yanını kızartın.",
            "İç harcı için; soğanları soteleyin, kıymayı ekleyip suyunu çekene kadar kavurun.",
            "Doğranmış biberleri, sarımsakları ve küp doğranmış domatesleri ekleyin.",
            "Salçanın yarısını, baharatları ve ince kıyılmış maydanozu ekleyip ocaktan alın.",
            "Kızaran patlıcanların ortalarını bir bıçak yardımıyla boydan boya açın.",
            "Hazırladığınız kıymalı harcı patlıcanların içine bolca doldurun.",
            "Üzerilerine birer dilim domates ve birer adet biber yerleştirin.",
            "Kalan salçayı 1 bardak sıcak suyla açıp fırın tepsisine dökün.",
            "190 derece fırında yaklaşık 25-30 dakika pişirin."
          ]
        },
        {
          id: 'y-20',
          name: "Cacık",
          category: 'Yardımcı Yemek',
          calories: 90,
          imageUrl: "/yemekgorselleri/gun20/side.webp",
          prepTime: '15 dk',
          ingredients: [
            "2 su bardağı süzme veya normal yoğurt",
            "3 adet orta boy salatalık",
            "2 diş sarımsak",
            "1 tatlı kaşığı kuru nane",
            "Çeyrek demet dereotu",
            "Zeytinyağı, tuz",
            "Soğuk su (kıvamına göre)"
          ],
          instructions: [
            "Yoğurdu geniş bir kapta pürüzsüz olana kadar çırpın.",
            "Salatalıkları isteğe göre soyun veya kabuklu bırakarak tavla zarı büyüklüğünde doğrayın ya da rendeleyin.",
            "Ezilmiş sarımsakları ve tuzu yoğurda ekleyin.",
            "Doğranmış salatalıkları ve ince kıyılmış dereotunu karışıma ilave edin.",
            "Kıvamı koyu gelirse azar azar soğuk su ekleyerek açın.",
            "Kaselere paylaştırdıktan sonra üzerine zeytinyağı gezdirip kuru nane ile süsleyin."
          ]
        },
        {
          id: 't-20',
          name: "Trileçe",
          category: 'Tatlı',
          calories: 330,
          imageUrl: "/yemekgorselleri/gun20/dessert.webp",
          prepTime: '80 dk',
          ingredients: [
            "Keki için: 5 adet yumurta, 1 su bardağı toz şeker, 1.5 su bardağı un, 1 paket kabartma tozu",
            "Sütlü sosu için: 3.5 su bardağı süt, 3 yemek kaşığı şeker, 1 paket sıvı krema (200ml)",
            "Karamel sosu için: 1 su bardağı şeker, 1 yemek kaşığı tereyağı, 1 paket sıvı krema",
            "Üzeri için: 1 paket krem şanti"
          ],
          instructions: [
            "Yumurta ve şekeri krema kıvamına gelene kadar en az 8-10 dakika çırpın.",
            "Elenmiş un ve kabartma tozunu ekleyip spatulayla söndürmeden karıştırın.",
            "170 derece fırında yaklaşık 35-40 dakika pişirin ve tamamen soğumaya bırakın.",
            "Sütlü sos malzemelerini bir kapta karıştırın (kaynatmaya gerek yok).",
            "Soğuyan keki kürdanla delin ve sütlü sosu her yerine gelecek şekilde dökün.",
            "Krem şantiyi hazırlayıp bir miktar süsleme için ayırdıktan sonra kekin üzerine yayın.",
            "Karamel için şekeri tavada eritin, tereyağını ve kremayı ekleyip hızlıca karıştırarak hazırlayın.",
            "Soğuyan karameli tatlının üzerine yayın ve ayırdığınız krem şanti ile klasik desenlerini verin."
          ]
        }
      ]
    };
  }

  if (dayNumber === 26) {
    return {
      day: 26,
      date: dateStr,
      recipes: [
        {
          id: 's-26',
          name: "Mantı Çorbası",
          category: 'Çorba',
          calories: 190,
          imageUrl: "/yemekgorselleri/gun26/soup.webp",
          prepTime: '35 dk',
          ingredients: [
            "1 kase dondurulmuş veya taze mantı",
            "1.5 su bardağı yoğurt",
            "1 adet yumurta sarısı",
            "1 yemek kaşığı un",
            "Tereyağı ve nane"
          ],
          instructions: [
            "Mantıları sıcak suda yumuşayana kadar haşlayın.",
            "Yoğurt, yumurta ve unu çırparak terbiyesini hazırlayın, sıcak suyla ılıştırıp ekleyin.",
            "Sürekli karıştırarak kaynayana kadar pişirin.",
            "Üzerine naneli tereyağı gezdirin."
          ]
        },
        {
          id: 'm-26',
          name: "Kekikli Tavuk Sote",
          category: 'Ana Yemek',
          calories: 320,
          imageUrl: "/yemekgorselleri/gun26/main.webp",
          prepTime: '40 dk',
          ingredients: [
            "600 gr tavuk göğsü",
            "2 adet yeşil biber",
            "1 adet büyük soğan",
            "2 diş sarımsak",
            "Bolca kekik, pul biber"
          ],
          instructions: [
            "Tavukları küp doğrayıp yüksek ateşte suyunu çekene kadar soteleyin.",
            "Soğan ve biberleri ekleyip yumuşayana kadar kavurmaya devam edin.",
            "Son aşamada sarımsak ve bol kekik ekleyip 2 dakika daha çevirip ocaktan alın."
          ]
        },
        {
          id: 'y-26',
          name: "Kremalı Makarna",
          category: 'Yardımcı Yemek',
          calories: 340,
          imageUrl: "/yemekgorselleri/gun26/side.webp",
          prepTime: '20 dk',
          ingredients: [
            "Yarım paket penne makarna",
            "1 paket sıvı krema",
            "1 kase haşlanmış mantar (isteğe bağlı)",
            "Tuz, karabiber"
          ],
          instructions: [
            "Makarnayı haşlayıp süzün.",
            "Tencerede kremayı ve baharatları ısıtın, makarnaları ekleyip kremayla özleşene kadar karıştırın."
          ]
        },
        {
          id: 't-26',
          name: "Mozaik Pasta",
          category: 'Tatlı',
          calories: 280,
          imageUrl: "/yemekgorselleri/gun26/dessert.webp",
          prepTime: '20 dk (+ dondurma)',
          ingredients: [
            "2 paket pötibör bisküvi",
            "1 su bardağı süt",
            "3 yemek kaşığı kakao",
            "100 gr tereyağı",
            "Yarım su bardağı şeker"
          ],
          instructions: [
            "Erimiş tereyağı, süt, kakao ve şekeri karıştırın.",
            "Bisküvileri içine çok küçük olmayacak şekilde kırın.",
            "Streç filme sarıp piramit şekli verin ve dondurucuda en az 3 saat bekletin."
          ]
        }
      ]
    };
  }

  if (dayNumber === 27) {
    return {
      day: 27,
      date: dateStr,
      recipes: [
        {
          id: 's-27',
          name: "Sütlü Domates Çorbası",
          category: 'Çorba',
          calories: 145,
          imageUrl: "/yemekgorselleri/gun27/soup.webp",
          prepTime: '30 dk',
          ingredients: [
            "4 adet büyük domates (rendelenmiş)",
            "1 yemek kaşığı tereyağı",
            "1 yemek kaşığı un",
            "1 su bardağı süt",
            "1 yemek kaşığı salça",
            "Tuz, karabiber",
            "Üzeri için: Rendelenmiş kaşar peyniri"
          ],
          instructions: [
            "Tereyağında unu hafifçe kavurup salçayı ekleyin.",
            "Rendelenmiş domatesleri ilave edip 5 dakika soteleyin.",
            "Üzerine suyunu ekleyip kaynamaya bırakın. Kaynayınca pürüzsüz olması için blenderdan geçirin.",
            "Sütü ve baharatları ekleyip bir taşım daha kaynatın.",
            "Servis ederken üzerine bolca kaşar rendesi serpin."
          ]
        },
        {
          id: 'm-27',
          name: "Etli Lahana Sarması",
          category: 'Ana Yemek',
          calories: 360,
          imageUrl: "/yemekgorselleri/gun27/main.webp",
          prepTime: '90 dk',
          ingredients: [
            "1 adet büyük beyaz lahana",
            "300 gr orta yağlı dana kıyma",
            "1 su bardağı pirinç",
            "1 adet büyük soğan",
            "Yarım demet maydanoz",
            "1 yemek kaşığı domates salçası",
            "1 yemek kaşığı biber salçası",
            "Tuz, karabiber, kuru nane, pul biber"
          ],
          instructions: [
            "Lahana yapraklarını tuzlu kaynar suda yumuşayana kadar haşlayın ve damarlarını alarak uygun boyutta kesin.",
            "Kıyma, yıkanmış pirinç, ince kıyılmış soğan, maydanoz, salçaların yarısı ve baharatlarla iç harcını hazırlayın.",
            "Hazırladığınız yapraklara harçtan koyup sıkıca sarın ve tencereye düzenli bir şekilde dizin.",
            "Kalan salçayı suyla açıp üzerlerine gezdirin, porselen bir tabak kapatıp kısık ateşte pişirin."
          ]
        },
        {
          id: 'y-27',
          name: "Yoğurtlu Havuç Tarator",
          category: 'Yardımcı Yemek',
          calories: 160,
          imageUrl: "/yemekgorselleri/gun27/side.webp",
          prepTime: '20 dk',
          ingredients: [
            "3 adet havuç (rendelenmiş)",
            "2 diş sarımsak",
            "1.5 su bardağı süzme yoğurt",
            "3 yemek kaşığı zeytinyağı",
            "Tuz",
            "Üzeri için: Kırılmış ceviz"
          ],
          instructions: [
            "Rendelenmiş havuçları zeytinyağında suyunu çekip yumuşayana kadar soteleyip soğutun.",
            "Süzme yoğurdu, ezilmiş sarımsak ve tuzla karıştırın.",
            "Havuçları yoğurda ekleyip harmanlayın ve servis tabağına alıp cevizle süsleyin."
          ]
        },
        {
          id: 't-27',
          name: "Kabak Tatlısı",
          category: 'Tatlı',
          calories: 290,
          imageUrl: "/yemekgorselleri/gun27/dessert.webp",
          prepTime: '50 dk (+ bekletme)',
          ingredients: [
            "1 kg bal kabağı (soyulmuş and dilimlenmiş)",
            "2 su bardağı toz şeker",
            "3-4 adet karanfil",
            "Üzeri için: Tahin and bol ceviz içi"
          ],
          instructions: [
            "Dilimlenmiş kabakları geniş bir tencereye alıp üzerine şekeri gezdirin.",
            "Kapağını kapatıp şekerlerin erimesi ve kabakların suyunu salması için en az 4-5 saat bekletin.",
            "Karanfilleri ekleyip tencereyi ocağa alın, kabaklar yumuşayıp şerbeti koyulaşana kadar pişirin.",
            "Tamamen soğuduktan sonra üzerine tahin gezdirip ceviz serperek servis yapın."
          ]
        }
      ]
    };
  }

  if (dayNumber === 28) {
    return {
      day: 28,
      date: dateStr,
      recipes: [
        {
          id: 's-28',
          name: "Arabaşı Çorbası",
          category: 'Çorba',
          calories: 210,
          imageUrl: "/yemekgorselleri/gun28/soup.webp",
          prepTime: '60 dk',
          ingredients: [
            "1 adet tavuk but",
            "3 yemek kaşığı un",
            "2 yemek kaşığı tereyağı",
            "1 yemek kaşığı biber salçası",
            "1 tatlı kaşığı pul biber",
            "Tuz, yarım limon suyu",
            "7-8 su bardağı su"
          ],
          instructions: [
            "Tavuk budunu haşlayıp suyunu süzün ve etlerini küçük parçalara didikleyin.",
            "Tereyağında unu kokusu çıkana kadar kavurun.",
            "Salçayı ve pul biberi ekleyip bir iki tur daha çevirin.",
            "Soğuk tavuk suyunu azar azar ekleyerek topaklanmaması için sürekli karıştırın.",
            "Kaynamaya başlayınca didiklenmiş etleri ve tuzu ekleyip 10-15 dakika kısık ateşte pişirin.",
            "Limon suyu ile sıcak servis yapın."
          ]
        },
        {
          id: 'm-28',
          name: "Sac Kavurma",
          category: 'Ana Yemek',
          calories: 440,
          imageUrl: "/yemekgorselleri/gun28/main.webp",
          prepTime: '55 dk',
          ingredients: [
            "500 gr kuzu kuşbaşı (veya küçük dana eti)",
            "3 adet yeşil sivri biber",
            "2 adet orta boy domates",
            "1 adet büyük kuru soğan",
            "3 yemek kaşığı sıvı yağ",
            "1 tatlı kaşığı tereyağı",
            "Tuz, karabiber, kekik, pul biber"
          ],
          instructions: [
            "Etleri sacda veya geniş bir tavada suyunu salıp çekene kadar pişirin.",
            "Sıvı yağı ve yemeklik doğranmış soğanları ekleyip soğanlar pembeleşene kadar kavurun.",
            "Doğranmış biberleri ekleyip 2-3 dakika daha soteleyin.",
            "Küp doğranmış domatesleri, tuzu ve baharatları ekleyin.",
            "Domatesler suyunu çekip etler yumuşayana kadar pişirip en son tereyağını ekleyerek servis yapın."
          ]
        },
        {
          id: 'y-28',
          name: "Çoban Salatası",
          category: 'Yardımcı Yemek',
          calories: 95,
          imageUrl: "/yemekgorselleri/gun28/side.webp",
          prepTime: '15 dk',
          ingredients: [
            "3 adet domates",
            "2 adet salatalık",
            "1 adet yeşil biber",
            "1 adet küçük kuru soğan",
            "Yarım demet maydanoz",
            "Zeytinyağı, limon suyu, tuz, isteğe göre sumak"
          ],
          instructions: [
            "Tüm sebzeleri tavla zarı büyüklüğünde doğrayın.",
            "İnce kıyılmış maydanozu ekleyin.",
            "Küçük bir kapta zeytinyağı, limon suyu ve tuzu karıştırıp salatanın üzerine dökün ve harmanlayın."
          ]
        },
        {
          id: 't-28',
          name: "Künefe",
          category: 'Tatlı',
          calories: 450,
          imageUrl: "/yemekgorselleri/gun28/dessert.webp",
          prepTime: '40 dk',
          ingredients: [
            "250 gr tel kadayıf",
            "150 gr tuzsuz künefe peyniri (veya dil peyniri)",
            "100 gr tereyağı",
            "Şerbet: 2 su bardağı şeker, 1.5 su bardağı su"
          ],
          instructions: [
            "Erimiş yağı kadayıfın üzerine döküp tel tel ayırın.",
            "Tepsinin yarısını kadayıfın yarısıyla kaplayıp iyice bastırın.",
            "Üzerine peyniri yayın ve kalan kadayıfı ekleyip tekrar bastırın.",
            "Ocakta her iki yüzünü de kızartıp soğuk şerbeti dökün."
          ]
        }
      ]
    };
  }

  if (dayNumber === 29) {
    return {
      day: 29,
      date: dateStr,
      recipes: [
        {
          id: 's-29',
          name: "Bademli Tavuk Çorbası",
          category: 'Çorba',
          calories: 175,
          imageUrl: "/yemekgorselleri/gun29/soup.webp",
          prepTime: '45 dk',
          ingredients: [
            "100 gr çiğ badem (beyazlatılmış)",
            "1 adet tavuk göğsü",
            "1 su bardağı süt",
            "1 yemek kaşığı tereyağı",
            "1 yemek kaşığı un",
            "Tuz, ak biber"
          ],
          instructions: [
            "Tavuk göğsünü haşlayıp suyunu ayırın ve tavuğu didikleyin.",
            "Bademleri blenderdan geçirip un haline getirin (veya çok ince kıyın).",
            "Tereyağında unu ve bademleri hafifçe kavurun.",
            "Tavuk suyunu azar azar ekleyip sürekli karıştırarak kıvam alana kadar pişirin.",
            "Sütü ve didiklenmiş tavukları ekleyip 5 dakika daha kaynatın. Tuz ve ak biberle tatlandırın."
          ]
        },
        {
          id: 'm-29',
          name: "İslim Kebabı",
          category: 'Ana Yemek',
          calories: 410,
          imageUrl: "/yemekgorselleri/gun29/main.webp",
          prepTime: '75 dk',
          ingredients: [
            "4 adet kemer patlıcan",
            "300 gr dana kıyma",
            "1 adet küçük soğan (rendelenmiş)",
            "2 diş sarımsak",
            "2 adet domates",
            "2 adet yeşil biber",
            "1 yemek kaşığı salça",
            "Tuz, karabiber, pul biber"
          ],
          instructions: [
            "Patlıcanları şerit halinde soyup uzun dilimler halinde kesin ve kızartın.",
            "Kıyma, soğan, sarımsak ve baharatlarla köfteler hazırlayıp az yağda kızartın.",
            "İki dilim patlıcanı artı şeklinde koyup ortasına köfteyi yerleştirin ve bohça gibi kapatın.",
            "Üzerine bir dilim domates ve biber saplayıp kürdanla sabitleyin.",
            "Salçalı su hazırlayıp üzerine dökün ve 190 derece fırında yaklaşık 20 dakika pişirin."
          ]
        },
        {
          id: 'y-29',
          name: "Zeytinyağı Yaprak Sarma",
          category: 'Yardımcı Yemek',
          calories: 220,
          imageUrl: "/yemekgorselleri/gun29/side.webp",
          prepTime: '90 dk',
          ingredients: [
            "250 gr asma yaprağı",
            "1.5 su bardağı pirinç",
            "2 adet büyük kuru soğan",
            "1 yemek kaşığı domates salçası",
            "Yarım demet maydanoz",
            "Zeytinyağı, limon suyu",
            "Kuru nane, yenibahar, tarçın (isteğe bağlı), tuz"
          ],
          instructions: [
            "İnce kıyılmış soğanları zeytinyağında soteleyip salçayı ve yıkanmış pirinci ekleyin.",
            "Baharatları ve yeşillikleri ekleyip yarım bardak suyla iç harcı hafifçe pişirin.",
            "Yaprakların içine harcı koyup incecik sarın.",
            "Tencereye dizip üzerine zeytinyağı, limon suyu ve sıcak su ekleyerek kısık ateşte pişirin."
          ]
        },
        {
          id: 't-29',
          name: "Etimek Tatlısı",
          category: 'Tatlı',
          calories: 310,
          imageUrl: "/yemekgorselleri/gun29/dessert.webp",
          prepTime: '40 dk (+ dinlenme)',
          ingredients: [
            "1 paket tuzsuz etimek",
            "2 su bardağı şeker (karamelize edilmiş şerbet)",
            "Muhallebi: 1 lt süt, 1 b un, yarım nişasta, b şeker"
          ],
          instructions: [
            "Etimekleri tepsiye dizip karamel şerbetiyle ıslatın.",
            "Üzerine pişirdiğiniz muhallebiyi döküp soğutun ve en üste krem şanti yayın."
          ]
        }
      ]
    };
  }

  if (dayNumber === 30) {
    return {
      day: 30,
      date: dateStr,
      recipes: [
        {
          id: 's-30',
          name: "Anadolu Çorbası",
          category: 'Çorba',
          calories: 165,
          imageUrl: "/yemekgorselleri/gun30/soup.webp",
          prepTime: '40 dk',
          ingredients: [
            "Yarım su bardağı yeşil mercimek",
            "Yarım su bardağı haşlanmış buğday",
            "Yarım su bardağı haşlanmış nohut",
            "1 adet kuru soğan",
            "1 su bardağı yoğurt",
            "1 adet yumurta sarısı",
            "1 yemek kaşığı un",
            "Tereyağı, nane, pul biber"
          ],
          instructions: [
            "Mercimeği yumuşayana kadar haşlayın, haşlanmış buğday ve nohudu ekleyin.",
            "Yoğurt, yumurta sarısı ve unu çırparak terbiyesini hazırlayın, sıcak suyla ılıştırıp tencereye ekleyin.",
            "Çorba kıvam alana kadar sürekli karıştırarak pişirin.",
            "Üzerine naneli ve pul biberli tereyağı gezdirerek servis yapın."
          ]
        },
        {
          id: 'm-30',
          name: "Karışık Izgara",
          category: 'Ana Yemek',
          calories: 550,
          imageUrl: "/yemekgorselleri/gun30/main.webp",
          prepTime: '60 dk',
          ingredients: [
            "200 gr kuzu şiş",
            "4 adet kasap köfte",
            "4 adet tavuk kanat",
            "2 adet kuzu pirzola",
            "Domates, yeşil biber, soğan",
            "Marine için: Zeytinyağı, süt, soğan suyu, baharatlar"
          ],
          instructions: [
            "Etleri en az 4 saat önceden marine edin.",
            "Izgarayı veya döküm tavayı iyice ısıtın.",
            "Etleri ve sebzeleri istediğiniz pişme derecesine göre ızgara yapın.",
            "Sıcak servis tabağına alıp lavaş eşliğinde servis yapın."
          ]
        },
        {
          id: 'y-30',
          name: "Sumaklı Soğan & Köz Biber",
          category: 'Yardımcı Yemek',
          calories: 110,
          imageUrl: "/yemekgorselleri/gun30/side.webp",
          prepTime: '20 dk',
          ingredients: [
            "2 adet kırmızı kapya biber",
            "2 adet büyük kuru soğan",
            "1 tatlı kaşığı sumak",
            "Yarım demet maydanoz",
            "Zeytinyağı, limon, tuz"
          ],
          instructions: [
            "Biberleri közleyip kabuklarını soyun ve şeritler halinde doğrayın.",
            "Soğanları piyazlık doğrayıp sumak ve tuzla hafifçe ovarak acısını alın.",
            "İnce kıyılmış maydanoz, köz biber ve soğanları karıştırıp soslayarak servis yapın."
          ]
        },
        {
          id: 't-30',
          name: "Cevizli Baklava",
          category: 'Tatlı',
          calories: 480,
          imageUrl: "/yemekgorselleri/gun30/dessert.webp",
          prepTime: '120 dk',
          ingredients: [
            "Baklavalık yufka, tereyağı, ceviz içi",
            "Şerbet: 3 su bardağı şeker, 3 su bardağı su"
          ],
          instructions: [
            "Yufkaları yağlayarak dizin, orta kata ceviz serpin. Dilimleyip fırınlayın ve ılık şerbetle buluşturun."
          ]
        }
      ]
    };
  }

  if (dayNumber === 21) {
    return {
      day: 21,
      date: dateStr,
      recipes: [
        {
          id: 's-21',
          name: "Mahluta Çorbası",
          category: 'Çorba',
          calories: 180,
          imageUrl: "/yemekgorselleri/gun21/soup.webp",
          prepTime: '40 dk',
          ingredients: [
            "1 su bardağı kırmızı mercimek",
            "Yarım su bardağı pirinç",
            "1 adet kuru soğan",
            "1 yemek kaşığı kişniş (isteğe bağlı)",
            "1 tatlı kaşığı kimyon",
            "Tereyağı ve zeytinyağı",
            "Limon suyu"
          ],
          instructions: [
            "Mercimek ve pirinci yıkayıp süzün, üzerini geçecek kadar suyla haşlayın.",
            "Ayrı bir tavada yemeklik doğranmış soğanları zeytinyağında pembeleşene kadar kavurun.",
            "Baharatları ekleyip kokusu çıkınca çorbaya ilave edin.",
            "Çorba koyulaşınca limon suyunu ekleyip bir taşım daha kaynatın.",
            "Üzerine kızdırılmış tereyağı gezdirerek servis yapın."
          ]
        },
        {
          id: 'm-21',
          name: "Patlıcan Kebabı",
          category: 'Ana Yemek',
          calories: 420,
          imageUrl: "/yemekgorselleri/gun21/main.webp",
          prepTime: '70 dk',
          ingredients: [
            "4 adet orta boy patlıcan",
            "500 gr orta yağlı zırh kıyması",
            "3 adet domates",
            "4 adet yeşil biber",
            "3 diş sarımsak",
            "Tuz, karabiber, pul biber"
          ],
          instructions: [
            "Patlıcanları yıkadıktan sonra 2 parmak kalınlığında halkalar halinde kesin.",
            "Kıyma ve baharatları yoğurarak köfteler hazırlayın.",
            "Fırın tepsisine bir patlıcan, bir köfte olacak şekilde yan yana dizin.",
            "Tepsinin ortasına domates, biber ve sarımsakları yerleştirin.",
            "Üzerine çok az su gezdirip 200 derece fırında patlıcanlar yumuşayana kadar pişirin."
          ]
        },
        {
          id: 'y-21',
          name: "Sebzeli Bulgur Pilavı",
          category: 'Yardımcı Yemek',
          calories: 290,
          imageUrl: "/yemekgorselleri/gun21/side.webp",
          prepTime: '30 dk',
          ingredients: [
            "2 su bardağı pilavlık bulgur",
            "1 adet büyük soğan",
            "2 adet yeşil biber",
            "1 adet kapya biber",
            "1 yemek kaşığı domates salçası",
            "Tereyağı ve sıvı yağ",
            "Tuz, kuru nane"
          ],
          instructions: [
            "Soğan ve biberleri ince ince doğrayıp yağda kavurun.",
            "Salçayı ekleyip kokusu çıkana kadar karıştırın.",
            "Bulguru ekleyip 2-3 dakika kavurduktan sonra 4 su bardağı sıcak su ve tuz ekleyin.",
            "Suyunu çekene kadar kısık ateşte pişirip demlenmeye bırakın."
          ]
        },
        {
          id: 't-21',
          name: "Çilekli Magnolia",
          category: 'Tatlı',
          calories: 310,
          imageUrl: "/yemekgorselleri/gun21/dessert.webp",
          prepTime: '40 dk',
          ingredients: [
            "1 litre süt",
            "1 su bardağı şeker",
            "2 yemek kaşığı un",
            "2 yemek kaşığı mısır nişastası",
            "1 adet yumurta sarısı",
            "1 paket vanilya",
            "1 paket krema (200ml)",
            "Bisküvi (bebe bisküvisi veya yulaflı)",
            "Taze çilek"
          ],
          instructions: [
            "Süt, şeker, un, nişasta ve yumurta sarısını tencerede koyulaşana kadar pişirin.",
            "Ocaktan alınca vanilyayı ekleyip soğumaya bırakın.",
            "Soğuyan muhallebiye kremayı ekleyip mikserle 5 dakika çırpın.",
            "Bardağın tabanına ufalanmış bisküvi, kenarlarına çilek dilimleri ve ortasına muhallebi koyarak katmanlar yapın."
          ]
        }
      ]
    };
  }

  if (dayNumber === 22) {
    return {
      day: 22,
      date: dateStr,
      recipes: [
        {
          id: 's-22',
          name: "Şehriyeli Tavuk Suyu Çorbası",
          category: 'Çorba',
          calories: 140,
          imageUrl: "/yemekgorselleri/gun22/soup.webp",
          prepTime: '45 dk',
          ingredients: [
            "1 adet tavuk but",
            "Yarım çay bardağı tel şehriye",
            "1 adet havuç (rendelenmiş)",
            "Yarım limon suyu",
            "Maydanoz",
            "Tuz, karabiber"
          ],
          instructions: [
            "Tavuğu haşlayıp suyunu süzün, etlerini küçük parçalara didikleyin.",
            "Tavuk suyunu tencereye alın, rendelenmiş havuçları ve didiklenmiş etleri ekleyin.",
            "Su kaynayınca tel şehriyeleri atıp yumuşayana kadar pişirin.",
            "Limon suyu and karabiber ekleyip bir taşım daha kaynatın. İnce kıyılmış maydanozla servis yapın."
          ]
        },
        {
          id: 'm-22',
          name: "Hasanpaşa Köfte",
          category: 'Ana Yemek',
          calories: 430,
          imageUrl: "/yemekgorselleri/gun22/main.webp",
          prepTime: '65 dk',
          ingredients: [
            "500 gr dana kıyma",
            "1 adet rende soğan",
            "2 diş sarımsak",
            "Yarım demet maydanoz",
            "Galeta unu, baharatlar",
            "Püresi için: 3 adet patates, 1 yemek kaşığı tereyağı, yarım çay bardağı süt",
            "Üzeri için: Kaşar peyniri rendesi"
          ],
          instructions: [
            "Kıymayı köfte malzemeleriyle yoğurup çanak şekli vererek fırın tepsisine dizin.",
            "Köfteleri 200 derece fırında 15 dakika pişirin.",
            "Patatesleri haşlayıp süt ve tereyağı ile pürüzsüz bir püre hazırlayın.",
            "Fırından çıkan köfte çanaklarının içine püreyi doldurun.",
            "Üzerine kaşar rendesi döküp peynirler kızarana kadar tekrar fırınlayın."
          ]
        },
        {
          id: 'y-22',
          name: "Sebzeli Pilav",
          category: 'Yardımcı Yemek',
          calories: 270,
          imageUrl: "/yemekgorselleri/gun22/side.webp",
          prepTime: '30 dk',
          ingredients: [
            "2 su bardağı pirinç",
            "1 su bardağı bezelye, mısır ve havuç (garnitür)",
            "2 yemek kaşığı tereyağı",
            "3 su bardağı sıcak su"
          ],
          instructions: [
            "Pirinci kavurup üzerine garnitürleri ekleyin.",
            "Sıcak suyunu ve tuzunu verip suyunu çekene kadar kısık ateşte pişirin."
          ]
        },
        {
          id: 't-22',
          name: "Kıbrıs Tatlısı",
          category: 'Tatlı',
          calories: 350,
          imageUrl: "/yemekgorselleri/gun22/dessert.webp",
          prepTime: '60 dk',
          ingredients: [
            "Keki için: 3 yumurta, yarım su bardağı şeker, yarım su bardağı sıvı yağ, 1 su bardağı galeta unu, 1 su bardağı hindistan cevizi, 1 su bardağı kırılmış ceviz",
            "Kreması için: 1 litre süt, 1 su bardağı nişasta, yarım su bardağı şeker, 1 paket vanilya, 1 paket krem şanti",
            "Şerbeti için: 1.5 su bardağı şeker, 2 su bardağı su"
          ],
          instructions: [
            "Önce şerbeti kaynatıp soğumaya bırakın.",
            "Kek malzemelerini çırpıp pişirin, fırından çıkar çıkmaz soğuk şerbeti dökün.",
            "Kremayı pişirin, soğuyunca krem şantiyi ekleyip çırpın ve kekin üzerine yayın.",
            "Bolca hindistan cevizi serpip buzdolabında dinlendirin."
          ]
        }
      ]
    };
  }

  if (dayNumber === 23) {
    return {
      day: 23,
      date: dateStr,
      recipes: [
        {
          id: 's-23',
          name: "Ayran Aşı Çorbası",
          category: 'Çorba',
          calories: 120,
          imageUrl: "/yemekgorselleri/gun23/soup.webp",
          prepTime: '20 dk (+haşlama süresi)',
          ingredients: [
            "1 su bardağı buğday (haşlanmış)",
            "Yarım su bardağı nohut (haşlanmış)",
            "2 kase yoğurt",
            "Taze nane, dereotu",
            "Tuz, soğuk su"
          ],
          instructions: [
            "Önceden haşlanmış buğday ve nohudu derin bir kaba alın.",
            "Yoğurdu çırpıp üzerine soğuk su ekleyerek ayran kıvamına getirin.",
            "Tüm malzemeleri karıştırıp ince kıyılmış taze nane ve dereotu ile tatlandırın.",
            "Soğuk servis yapın."
          ]
        },
        {
          id: 'm-23',
          name: "Etli Bamya",
          category: 'Ana Yemek',
          calories: 310,
          imageUrl: "/yemekgorselleri/gun23/main.webp",
          prepTime: '55 dk',
          ingredients: [
            "500 gr taze bamya",
            "250 gr kuşbaşı dana eti",
            "1 adet büyük kuru soğan",
            "2 adet domates",
            "1 yemek kaşığı salça",
            "Yarım limon suyu",
            "Zeytinyağı, tuz"
          ],
          instructions: [
            "Etleri kendi suyunu çekene kadar pişirin, üzerine soğanı ekleyip kavurun.",
            "Salça ve rendelenmiş domatesleri ekleyip 5 dakika daha soteleyin.",
            "Bamyaları ayıklayıp tencereye alın, üzerine yarım limon suyunu (salyalanmaması için) gezdirin.",
            "Sıcak suyunu ekleyip bamyalar yumuşayana kadar kısık ateşte pişirin."
          ]
        },
        {
          id: 'y-23',
          name: "Zeytinyağı Barbunya",
          category: 'Yardımcı Yemek',
          calories: 240,
          imageUrl: "/yemekgorselleri/gun23/side.webp",
          prepTime: '50 dk',
          ingredients: [
            "500 gr barbunya (taze veya haşlanmış)",
            "1 adet havuç",
            "1 adet patates",
            "1 adet büyük soğan",
            "Yarım çay bardağı zeytinyağı",
            "1 yemek kaşığı domates salçası"
          ],
          instructions: [
            "Soğan, havuç ve patatesleri zeytinyağında sırayla soteleyin.",
            "Barbunyaları ve salçayı ekleyip karıştırın.",
            "Üzerini biraz geçecek kadar sıcak su ekleyip suyunu çekip kıvamlanana kadar pişirin."
          ]
        },
        {
          id: 't-23',
          name: "Lokma Tatlısı",
          category: 'Tatlı',
          calories: 360,
          imageUrl: "/yemekgorselleri/gun23/dessert.webp",
          prepTime: '50 dk',
          ingredients: [
            "Hamuru için: 2 su bardağı un, 1 su bardağı ılık su, 1 tatlı kaşığı kuru maya, yarım tatlı kaşığı şeker",
            "Şerbeti için: 2 su bardağı şeker, 1.5 su bardağı su",
            "Kızartmak için bol sıvı yağ"
          ],
          instructions: [
            "Önce şerbeti hazırlayıp soğumaya bırakın.",
            "Cıvık bir hamur hazırlayıp 30-40 dakika mayalandırın.",
            "Yağlanmış kaşıkla küçük parçalar alarak kızgın yağda altın rengini alana kadar kızartın.",
            "Sıcak lokmaları hemen soğuk şerbete atıp 2-3 dakika bekletip servis yapın."
          ]
        }
      ]
    };
  }

  if (dayNumber === 24) {
    return {
      day: 24,
      date: dateStr,
      recipes: [
        {
          id: 's-24',
          name: "Domatesli Şehriye Çorbası",
          category: 'Çorba',
          calories: 135,
          imageUrl: "/yemekgorselleri/gun24/soup.webp",
          prepTime: '25 dk',
          ingredients: [
            "2 adet büyük domates (rendelenmiş)",
            "Yarım çay bardağı arpa şehriye",
            "1 yemek kaşığı tereyağı",
            "1 yemek kaşığı un",
            "1 yemek kaşığı salça",
            "Nane, tuz"
          ],
          instructions: [
            "Tereyağında unu kavurup salçayı ve domates rendesini ekleyin.",
            "Üzerine suyunu döküp kaynamaya bırakın.",
            "Su kaynayınca şehriyeleri ilave edip yumuşayana kadar pişirin. Nane ile süsleyin."
          ]
        },
        {
          id: 'm-24',
          name: "Manisa Kebabı",
          category: 'Ana Yemek',
          calories: 460,
          imageUrl: "/yemekgorselleri/gun24/main.webp",
          prepTime: '75 dk',
          ingredients: [
            "500 gr dana kıyma",
            "Pide ekmeği",
            "Sosu için: Bolca yoğurt, sarımsak",
            "Üzeri için: Bol tereyağı and pul biber"
          ],
          instructions: [
            "Kıyma ile uzun ince köfteler hazırlayıp geniş bir tavada az yağda pişirin.",
            "Pideleri küp küp doğrayıp tabağa dizin ve hafifçe köfte suyuyla ıslatın.",
            "Pidelerin üzerine sarımsaklı yoğurt dökün, üzerine köfteleri dizin.",
            "En üste kızgın tereyağını gezdirerek sıcak servis yapın."
          ]
        },
        {
          id: 'y-24',
          name: "Haydari",
          category: 'Yardımcı Yemek',
          calories: 110,
          imageUrl: "/yemekgorselleri/gun24/side.webp",
          prepTime: '15 dk',
          ingredients: [
            "500 gr süzme yoğurt",
            "100 gr beyaz peynir (ezilmiş)",
            "2 diş sarımsak",
            "Bir tutam kuru nane",
            "Zeytinyağı"
          ],
          instructions: [
            "Tüm malzemeleri pürüzsüz bir kıvam alana kadar çırpın veya ezip karıştırın.",
            "Servis tabağına alıp üzerine zeytinyağı ve nane gezdirin."
          ]
        },
        {
          id: 't-24',
          name: "Kazandibi",
          category: 'Tatlı',
          calories: 320,
          imageUrl: "/yemekgorselleri/gun24/dessert.webp",
          prepTime: '90 dk',
          ingredients: [
            "1 litre süt",
            "1 su bardağı şeker",
            "2 yemek kaşığı un",
            "2 yemek kaşığı nişasta",
            "1 paket vanilya",
            "Pudra şekeri (yakmak için)"
          ],
          instructions: [
            "Muhallebi malzemelerini bir tencerede koyulaşana kadar pişirin.",
            "Tepsinin tabanına bolca pudra şekeri serpip üzerine bir miktar muhallebi yayın.",
            "Ocağın üzerinde tepsiyi çevirerek şekeri karamelize edin (yakın).",
            "Kalan tüm muhallebiyi tepsiye döküp dondurun. Soğuyunca rulo yaparak servis edin."
          ]
        }
      ]
    };
  }

  if (dayNumber === 25) {
    return {
      day: 25,
      date: dateStr,
      recipes: [
        {
          id: 's-25',
          name: "Brokoli Çorbası",
          category: 'Çorba',
          calories: 110,
          imageUrl: "/yemekgorselleri/gun25/soup.webp",
          prepTime: '30 dk',
          ingredients: [
            "500 gr brokoli",
            "1 adet patates",
            "1 adet soğan",
            "1 su bardağı süt",
            "1 yemek kaşığı tereyağı"
          ],
          instructions: [
            "Brokoli, soğan ve patatesi az suda yumuşayana kadar haşlayın.",
            "Tüm sebzeleri blenderdan geçirin.",
            "Süt ve tereyağı ekleyip 5 dakika daha kaynatın. Sıcak servis yapın."
          ]
        },
        {
          id: 'm-25',
          name: "Fırında Somon",
          category: 'Ana Yemek',
          calories: 290,
          imageUrl: "/yemekgorselleri/gun25/main.webp",
          prepTime: '40 dk',
          ingredients: [
            "2 adet somon fileto",
            "1 adet limon",
            "Taze kekik, biberiye",
            "Zeytinyağı, tuz, karabiber",
            "Yarım soğan halkaları"
          ],
          instructions: [
            "Somonları yağlı kağıt serili tepsiye alın.",
            "Zeytinyağı, limon dilimleri ve taze otlarla harmanlayın.",
            "200 derece fırında yaklaşık 20-25 dakika pişirin."
          ]
        },
        {
          id: 'y-25',
          name: "Baharatlı Elma Dilim Patates",
          category: 'Yardımcı Yemek',
          calories: 220,
          imageUrl: "/yemekgorselleri/gun25/side.webp",
          prepTime: '45 dk',
          ingredients: [
            "4 adet patates",
            "Pul biber, nane, kekik, sarımsak tozu",
            "Zeytinyağı"
          ],
          instructions: [
            "Patatesleri elma dilim doğrayıp baharat ve yağla harmanlayın.",
            "Fırında altın rengi alana kadar kızartın."
          ]
        },
        {
          id: 't-25',
          name: "Limonlu Cheesecake",
          category: 'Tatlı',
          calories: 380,
          imageUrl: "/yemekgorselleri/gun25/dessert.webp",
          prepTime: '120 dk (+dinlenme)',
          ingredients: [
            "Tabanı için: 2 paket yulaflı bisküvi, 100gr tereyağı",
            "Kreması için: 600gr labne, 1 paket krema, 3 yumurta, 1 su bardağı şeker, 2 yemek kaşığı nişasta, limon kabuğu rendesi",
            "Sosu için: 2 limonun suyu, 1 su bardağı su, yarım su bardağı şeker"
          ],
          instructions: [
            "Bisküvileri un haline getirip erimiş yağla karıştırın ve kalıba bastırın.",
            "Krema malzemelerini tek tek ekleyerek çırpıp kalıba boşaltın.",
            "Fırında düşük ısıda (160 derece) 1 saat pişirip soğumaya bırakın.",
            "Limon sosunu pişirip üzerine dökün ve en az 6-8 saat buzdolabında dinlendirin."
          ]
        }
      ]
    };
  }

  // DİĞER GÜNLER İÇİN OTOMATİK OLUŞTURMA
  return {
    day: dayNumber,
    date: dateStr,
    recipes: [
      {
        id: `s-${i}`,
        name: SOUP_POOL[i % SOUP_POOL.length].name,
        category: 'Çorba',
        calories: SOUP_POOL[i % SOUP_POOL.length].cal,
        imageUrl: SOUP_POOL[i % SOUP_POOL.length].img,
        prepTime: '20 dk',
        ingredients: ["Mercimek/Yoğurt", "Su", "Tuz", "Nane", "Yağ"],
        instructions: ["Malzemeleri haşlayın.", "Terbiyesini yapın.", "Kısık ateşte pişirin."]
      },
      {
        id: `m-${i}`,
        name: MAIN_POOL[i % MAIN_POOL.length].name,
        category: 'Ana Yemek',
        calories: MAIN_POOL[i % MAIN_POOL.length].cal,
        imageUrl: MAIN_POOL[i % MAIN_POOL.length].img,
        prepTime: '45 dk',
        ingredients: ["Et/Tavuk", "Sebze", "Salça", "Baharatlar"],
        instructions: ["Etleri soteleyin.", "Sebzeleri ekleyin.", "Suyu çekene kadar pişirin."]
      },
      {
        id: `y-${i}`,
        name: i % 2 === 0 ? "Pirinç Pilavı" : "Bulgur Pilavı",
        category: 'Yardımcı Yemek',
        calories: 280,
        imageUrl: IMAGES.yardımcı,
        prepTime: '25 dk',
        ingredients: ["Pirinç/Bulgur", "Tereyağı", "Sıcak Su"],
        instructions: ["Pirinci kavurun.", "Suyu ekleyip demlendirin."]
      },
      {
        id: `t-${i}`,
        name: i % 3 === 0 ? "Güllaç" : i % 3 === 1 ? "Fırın Sütlaç" : "Kadayıf",
        category: 'Tatlı',
        calories: 310,
        imageUrl: IMAGES.tatlı,
        prepTime: '30 dk',
        ingredients: ["Süt/Şerbet", "Şeker", "Tatlı temeli"],
        instructions: ["Sütü ısıtın.", "Tatlıyla buluşturun.", "Soğumaya bırakın."]
      }
    ] as Recipe[]
  };
});
