const restaurants = {
    "Indonesia Food": [{
            name: "Rumah Makan Garuda",
            rating: 4,
            location: "Medan Baru",
            description: "Serves various Padang dishes, a favorite for rendang and gulai lovers.",
            Url: "https://maps.app.goo.gl/FSDpMf8R1fPYyz3M7",
            image: "rumahmakangaruda.jpeg"
        },
        {
            name: "Sederhana Restaurant",
            rating: 4,
            location: "Medan Selayang",
            description: "A legendary Padang restaurant with a variety of Indonesian dishes.",
            Url: "https://www.bing.com/maps?osid=c2adc1b9-afa7-4e0d-a909-b7141ac02e2b&cp=3.563815~98.623677&lvl=17&pi=0&imgid=a24ec861-d6f2-4e76-85cd-dc7429f55ae4&v=2&sV=2&form=S00027",
            image: "sederhanarestoran.jpeg"
        },
        {
            name: "Mie Aceh Titi Bobrok",
            rating: 4,
            location: "Medan Sunggal",
            description: "Offers delicious Aceh seafood noodles.",
            Url: "https://www.bing.com/maps?osid=0c82ccd3-cff9-4c17-a1ed-3244395200f6&cp=3.583782~98.590053&lvl=12.59&pi=0&imgid=4c4ce082-3b0a-443d-abbf-31d98dec62bb&v=2&sV=2&form=S00027",
            image: "mieaceh.jpeg"
        },
        {
            name: "Rumah Makan Sipirok",
            rating: 4,
            location: "Medan Sunggal",
            description: "Known for its delicious and authentic 'sop sum-sum'.",
            Url: "https://www.bing.com/maps?osid=cb8fd72a-bef8-4e86-b36f-885725fea55c&cp=3.584683~98.587156&lvl=12.62&pi=0&imgid=3fad5142-0846-4865-a0ed-e883ccc03083&v=2&sV=2&form=S00027",
            image: "RMsipirok.jpeg"
        },
        {
            name: "Bebek Ubud Medan",
            rating: 4,
            location: "Medan Baru",
            description: "Serves typical Balinese dishes, especially fried duck.",
            Url: "https://maps.app.goo.gl/jBHCNZAyzH6taCH17",
            image: "bebekubud.jpeg"
        },
        {
            name: "Ayam Penyet Ria Medan",
            rating: 4,
            location: "Medan Barat",
            description: "Serves various types of fried chicken and lalapan (vegetables).",
            Url: "https://maps.app.goo.gl/JbxUdVafkSmDWeXs7",
            image: "ayampenyetria.png"
        },
        {
            name: "Restoran Bintang Seru Medan",
            rating: 4,
            location: "Medan Petisah",
            description: "Halal restaurant with traditional Malay and Indonesian dishes.",
            Url: "https://g.co/kgs/HKw8oN",
            image: "RBS.jpeg"
        },
        {
            name: "Koki Sunda",
            rating: 4,
            location: "Medan Baru",
            description: "Offers a variety of Sundanese dishes, perfect for family dining.",
            Url: "https://maps.app.goo.gl/1NG8Yg841HSSKX1B9",
            image: "KS.jpeg"
        },
        {
            name: "Merdeka Walk",
            rating: 4,
            location: "Medan Barat",
            description: "An outdoor culinary area with a variety of Indonesian food options.",
            Url: "https://maps.app.goo.gl/MQemRtyMmHXKRhXD6",
            image: "MW.jpeg"
        },
        {
            name: "Bihun Bebek Kumango",
            rating: 4,
            location: "Medan Barat",
            description: "Specializes in bihun (rice vermicelli) with duck, offering a unique taste.",
            Url: "https://maps.app.goo.gl/KD8LWczTJxsSCw7V7",
            image: "BBK.jpeg"
        },
        {
            name: "Wajir Seafood",
            rating: 4,
            location: "Medan Maimun",
            description: "Offers various seafood dishes with a unique Indonesian flavor.",
            Url: "https://maps.app.goo.gl/s5SrHF3oJhzHtfcD6",
            image: "wajirseafood.jpeg"
        },
        {
            name: "Soto Kesawan",
            rating: 4,
            location: "Medan Barat",
            description: "Famous for its delicious Soto Medan (a traditional soup).",
            Url: "https://maps.app.goo.gl/tSPRiWtaQ1cvbPUDA",
            image: "SK.jpeg"
        },
        {
            name: "Rumah Makan Sipirok Cabang Timur",
            rating: 4,
            location: "Medan Timur",
            description: "Another branch of the famous 'sop sum-sum' restaurant from Medan.",
            Url: "https://maps.app.goo.gl/ASHp7eep8JV7xFgk9",
            image: "RMsipirok.jpeg"
        },
        {
            name: "Ayam Goreng Kalasan",
            rating: 4,
            location: "Medan Petisah",
            description: "Serves fried chicken and other Indonesian dishes.",
            Url: "https://maps.app.goo.gl/jC7QLic3rkFvgah26",
            image: "AGK.jpeg"
        },
        {
            name: "Café Ulos",
            rating: 4,
            location: "Medan Petisah",
            description: "A Batak-themed café serving halal food from North Sumatra.",
            Url: "https://maps.app.goo.gl/zWAQQVvwccMv6Ywz9",
            image: "kafeulos.png"
        },
        {
            name: "RM Minang Saiyo",
            rating: 4,
            location: "Medan Sunggal",
            description: "Another Padang restaurant serving authentic Minang dishes.",
            Url: "https://g.co/kgs/NRH4Zw",
            image: "RMS.jpeg"
        },
        {
            name: "Lontong Kak Lin",
            rating: 4,
            location: "Medan Polonia",
            description: "Popular for breakfast with various lontong (rice cake) options from Medan.",
            Url: "https://maps.app.goo.gl/mBZNT71oTWsBT2xw7",
            image: "LKL.jpeg"
        },
        {
            name: "Soto Sinar Pagi",
            rating: 4,
            location: "Medan Maimun",
            description: "Known for its Soto Medan with tender beef and rich spices.",
            Url: "https://maps.app.goo.gl/TNmfvniK2e98ZEJ96",
            image: "SSP.jpeg"
        },
        {
            name: "BAKSO RAJA & ES CAMPUR NITA",
            rating: 4,
            location: "Medan Amplas",
            description: "Serves bakso (meatballs) with a distinctive Indonesian taste.",
            Url: "https://maps.app.goo.gl/q76wh3mEmB2VU5Lm9",
            image: "BR.jpeg"
        },
        {
            name: "RM Garuda Helvetia",
            rating: 4,
            location: "Medan Petisah",
            description: "Serves various halal Padang dishes.",
            Url: "https://maps.app.goo.gl/WdD7GuS75vK5GwaY7",
            image: "RG.jpeg"
        },
        {
            name: "Dapoer Ciragil Medan",
            rating: 4,
            location: "Medan Petisah",
            description: "Halal Sundanese and other Indonesian dishes.",
            Url: "https://maps.app.goo.gl/xJXeCeLSY94RtECQ9",
            image: "DCM.jpeg"
        }
    ],
    "Asian Food": [{
            name: "Mie Tiong Sim Selat Panjang",
            rating: 4,
            location: "Medan Kota",
            description: "Famous for its delicious noodles and rich, flavorful broth.",
            Url: "https://www.bing.com/maps?osid=d2fb8ffc-b60d-4c59-8bc8-52e86b273eb9&cp=3.583582~98.679414&lvl=16&pi=0&imgid=e6201888-82d7-4706-aa4a-b6d99a79270c&v=2&sV=2&form=S00027",
            image: "MTS.jpeg"
        },
        {
            name: "Tip Top Restaurant",
            rating: 4,
            location: "Medan Barat",
            description: "A legendary restaurant offering Medan specialties such as fried rice and soto.",
            Url: "https://maps.app.goo.gl/dXRP89LkcWe45mRC9",
            image: "TTR.jpeg"
        },
        {
            name: "SOTO MEDAN 1930",
            rating: 4,
            location: "Medan Timur",
            description: "Authentic Soto Medan with bold flavors and tender meat.",
            Url: "https://maps.app.goo.gl/ZCntyCzEJ16skXgs9",
            image: "SM1930.jpeg"
        },
        {
            name: "Restoran Garuda",
            rating: 4,
            location: "Medan Kota",
            description: "A restaurant serving Padang cuisine, famous for its rendang and gulai.",
            Url: "https://www.bing.com/maps?osid=02824c2c-af56-41f3-a82e-2e9145baddec&cp=3.595253~98.663986&lvl=16&pi=0&imgid=a8f0997c-0506-4c0d-8683-95071d9d3eb0&v=2&sV=2&form=S00027",
            image: "RG.jpeg"
        },
        {
            name: "Chinese Food Tilak",
            rating: 4,
            location: "Medan Kota",
            description: "A Chinese restaurant with a complete menu at affordable prices.",
            Url: "https://maps.app.goo.gl/xL4YAT55Egb8iNoh9",
            image: "CFT.jpeg"
        },
        {
            name: "Omma Recipe",
            rating: 4,
            location: "Medan Kota",
            description: "A Korean restaurant popular for its BBQ dishes and banchan.",
            Url: "https://maps.app.goo.gl/sAuiTmrwrKKX7bQ99",
            image: "OR.jpeg"
        }, // 6 data
        {
            name: "Ji Long Chinese Restaurant",
            rating: 4,
            location: "Medan Barat",
            description: "Restoran dengan berbagai hidangan Chinese, terutama dim sum yang lezat.",
            Url: "https://maps.app.goo.gl/UE3ydpCYcbhoMLqG7",
            image: "JLC.jpeg"
        },
        {
            name: "Restoran Sederhana",
            rating: 4,
            location: "Medan Barat",
            description: "Menyajikan hidangan Padang yang populer seperti nasi rendang, sambal ijo, dan sate Padang.",
            Url: "https://maps.app.goo.gl/VsqKw5FcncnHVEoR8",
            image: "RS.jpeg"
        },
        {
            name: "Paradise Dynasty",
            rating: 4,
            location: "Medan Petisah",
            description: "Restoran Chinese yang terkenal dengan dim sum dan berbagai hidangan khas dari berbagai daerah.",
            Url: "https://maps.app.goo.gl/H55L1dF4QUwqWjkBA",
            image: "PD.jpeg"
        },
        {
            name: "DaeBak Korean BBQ Restaurant",
            rating: 4,
            location: "Medan Timur",
            description: "Restoran Korea BBQ yang menyajikan daging premium dan banchan yang melimpah.",
            Url: "https://maps.app.goo.gl/7Q2c8D5a64zF6gpZA",
            image: "DK.jpeg"
        },
        {
            name: "Jade Chinese Restaurant",
            rating: 4,
            location: "Medan Perjuangan",
            description: "Restoran Chinese dengan menu dim sum dan hidangan ala Kanton.",
            Url: "https://maps.app.goo.gl/7L31aSjRcymzNmiw6",
            image: "JCR.jpeg"
        },
        {
            name: "Dimsum Berjaya",
            rating: 4,
            location: "Medan Kota",
            description: "Dimsum dengan berbagai variasi dan rasa yang enak, pilihan populer untuk sarapan.",
            Url: "https://maps.app.goo.gl/LAzkBt8Y7hZgTriRA",
            image: "DB.jpeg"
        },
        {
            name: "Seafood 99",
            rating: 4,
            location: "Medan Sunggal",
            description: "Restoran seafood dengan menu hidangan laut yang segar dan lezat.",
            Url: "https://maps.app.goo.gl/6YNvKXX8NrXZgt5bA",
            image: "S99.jpeg"
        },
        {
            name: "Sate Padang Ajo",
            rating: 4,
            location: "Medan Kota",
            description: "Sate Padang dengan bumbu kacang khas Padang, nikmat dan pedas.",
            Url: "https://maps.app.goo.gl/C7TNE3wL9ZqqgB5s5",
            image: "SPA.jpeg"
        },
        {
            name: "Waroeng Mekar Ikan Bakar",
            rating: 4,
            location: "Medan Johor",
            description: "Restoran seafood dengan menu ikan bakar dan udang, suasana santai dekat pantai.",
            Url: "https://maps.app.goo.gl/2cGSWQH9Zrh3zMhUA",
            image: "WMIB.jpeg"
        },
        {
            name: "Dapoer Biduk",
            rating: 4,
            location: "Medan Petisah",
            description: "A cozy restaurant offering a variety of Indonesian dishes, known for its flavorful and authentic recipes",
            Url: "https://maps.app.goo.gl/MgUX2yWSjRWpCm2V6",
            image: "DBK.jpeg"
        },
        {
            name: "Restoran Sederhana",
            rating: 4,
            location: "Medan Selayang",
            description: "A popular spot for Padang cuisine, offering a variety of dishes with rich flavors and authentic recipes.",
            Url: "https://maps.app.goo.gl/CEWQusgF31KwAPVCA",
            image: "RS.jpeg"
        },
        {
            name: "Chachago",
            rating: 4,
            location: "Medan Kota",
            description: "A trendy bubble tea spot offering a variety of refreshing drinks and snacks, perfect for a casual hangout.",
            Url: "https://maps.app.goo.gl/CenW8N7SShEgENP27",
            image: "chachago.jpeg"
        },
        {
            name: "Nelayan Kafe",
            rating: 4,
            location: "Medan Timur",
            description: "A family-friendly cafe serving a variety of seafood dishes and traditional Indonesian favorites.",
            Url: "https://maps.app.goo.gl/TbdvLPjzwE7CrHj46",
            image: "NK.jpeg"
        },
        {
            name: "Sate Padang Andesra",
            rating: 4,
            location: "Medan Petisah",
            description: "A must-visit for authentic Sate Padang, featuring flavorful satay with a signature spicy curry sauce.",
            Url: "https://maps.app.goo.gl/JTRkn2a3fZVidY4R7",
            image: "SPA.jpeg"
        },
        {
            name: "Athing Chinese Food",
            rating: 4,
            location: "Medan Timur",
            description: "A cozy spot for Chinese cuisine, offering a wide selection of classic and fusion dishes.",
            Url: "https://maps.app.goo.gl/6VdfbtBcYHFd3tT97",
            image: "ACF.jpeg"
        },
        {
            name: "Taipan Restaurant",
            rating: 4,
            location: "Medan Barat",
            description: "A sophisticated restaurant serving premium Chinese cuisine in an elegant setting.",
            Url: "https://maps.app.goo.gl/8e76gh2NzawmPQz87",
            image: "TR.jpeg"
        }
    ],
    "Western Food": [{
            name: "Dovers Cafe & Lounge",
            rating: 4,
            location: "Medan Polonia",
            description: "Serves a variety of Western dishes with an outdoor atmosphere.",
            Url: "https://g.co/kgs/KJCc97S",
            image: "DCL.jpeg"
        },
        {
            name: "The Thirty-Six Café",
            rating: 4,
            location: "Medan Maimun",
            description: "Various halal pasta and steak dishes.",
            Url: "https://maps.app.goo.gl/19ty4sY9xDNsjEFV6",
            image: "TTR.jpeg"
        },
        {
            name: "The Edge Restaurant & Bar",
            rating: 4,
            location: "Medan Petisah",
            description: "A rooftop restaurant with burgers and steak on the menu.",
            Url: "https://maps.app.goo.gl/J4GgKVxqkoM8NR2X9",
            image: "TR.jpeg"
        },
        {
            name: "Burger Bangor Iskandar Muda",
            rating: 4,
            location: "Medan Petisah",
            description: "Serves halal fast-food-style burgers.",
            Url: "https://g.co/kgs/fMyt9u",
            image: "BB.jpeg"
        },
        {
            name: "Unboss Coffee",
            rating: 4,
            location: "Medan Helvetia",
            description: "A café with modern and innovative Western dishes.",
            Url: "https://maps.app.goo.gl/TTTCS41PqkPLnFAV9",
            image: "UC.jpeg"
        },
        {
            name: "The Cups & Co",
            rating: 4,
            location: "Medan Helvetia",
            description: "Western dishes like pizza and pasta in a cozy atmosphere.",
            Url: "https://maps.app.goo.gl/6P2nXGDbiH72nURL9",
            image: "TC.jpeg"
        },
        {
            name: "DIMIGO",
            rating: 4,
            location: "Medan Sunggal",
            description: "Offers a variety of steaks and burgers.",
            Url: "https://g.co/kgs/jFUvooB",
            image: "DIMIGO.jpeg"
        },
        {
            name: "Roemah Kopi Wak Noer",
            rating: 4,
            location: "Medan Polonia",
            description: "Popular for its Western dishes with an outdoor setting.",
            Url: "https://maps.app.goo.gl/1NHpZGaadcjacca76",
            image: "RKW.jpeg"
        },
        {
            name: "Holycow! Steakhouse by Chef Afit Medan",
            rating: 4,
            location: "Medan Petisah",
            description: "Specializes in high-quality steaks, famous for its tender meat.",
            Url: "https://maps.app.goo.gl/9fwRtRbHKdsnooXBA",
            image: "HS.jpeg"
        },
        {
            name: "L'Tropico by Haban",
            rating: 4,
            location: "Medan Sunggal",
            description: "Western dishes with a full range of halal options.",
            Url: "https://maps.app.goo.gl/inXPamEGz52ZoYq57",
            image: "LKL.jpeg"
        },
        {
            name: "Junction Café",
            rating: 4,
            location: "Medan Polonia",
            description: "Menu includes pasta, pizza, and steak with a modern interior concept.",
            Url: "https://maps.app.goo.gl/YJqBvhGkpDKkjxV76",
            image: "JLC.jpeg"
        },
        {
            name: "Carnivor Sky Lounge",
            rating: 4,
            location: "Medan Helvetia",
            description: "A rooftop restaurant serving steaks and other Western dishes.",
            Url: "https://g.co/kgs/7rPcXz",
            image: "CSL.jpeg"
        },
        {
            name: "Wajir Seafood Medan",
            rating: 4,
            location: "Medan Helvetia",
            description: "Serves seafood and Western halal cuisine.",
            Url: "https://g.co/kgs/XQq8Yo",
            image: "wajirseafood.jpeg"
        },
        {
            name: "Ludoo Eatery",
            rating: 4,
            location: "Medan Helvetia",
            description: "Serves Western dishes such as burgers and pizza.",
            Url: "https://g.co/kgs/7Kmm1yY",
            image: "LE.jpeg"
        },
        {
            name: "Moscot - Beans and Dine",
            rating: 4,
            location: "Medan Maimun",
            description: "A cozy cafe offering a mix of aromatic coffee, delightful desserts, and hearty meals, perfect for coffee enthusiasts and food lovers alike.",
            Url: "https://g.co/kgs/3Dx8Yi",
            image: "moscotbeans.png"
        },
        {
            name: "BISTRO",
            rating: 4,
            location: "Medan Barat",
            description: "Casual dining concept with a variety of Western dishes.",
            Url: "https://maps.app.goo.gl/Qfvhomthg3xnc6aRA",
            image: "bistro.jpeg"
        },
        {
            name: "O'Flaherty",
            rating: 4,
            location: "Medan Polonia",
            description: "Offers Western dishes like fish & chips in a classic setting.",
            Url: "https://maps.app.goo.gl/bD53T1LLgNgure3b8",
            image: "oflahertys.png"
        }
    ],
    "Mediterranean Food": [{
            name: "Ola Coffee and Eatery Medan",
            rating: 4,
            description: "",
            location: "Medan Johor",
            Url: "https://maps.app.goo.gl/2aZqSAWs3VGZsTuo7",
            image: "OC.jpeg"
        },
        {
            name: "Petite Terrasse",
            rating: 4,
            description: "A cozy and charming café offering a delightful selection of European and Mediterranean dishes. The perfect spot for a relaxing meal.",
            location: "Medan Petisah",
            Url: "https://g.co/kgs/VysNfXu",
            image: "PT.jpeg"
        },
        {
            name: "Al Jazeerah Restaurant & Cafe",
            rating: 4,
            description: "A Middle Eastern restaurant offering an array of authentic dishes, including kebabs, hummus, and delicious Arabic sweets.",
            location: "Medan Baru",
            Url: "https://g.co/kgs/8gAmYF9",
            image: "ALJ.jpeg"
        },
        {
            name: "Lebanon Restaurant",
            rating: 4,
            description: "Experience the rich flavors of Lebanon with traditional dishes like shawarma, falafel, and tabbouleh. A great place for Mediterranean cuisine lovers.",
            location: "Medan Petisah",
            Url: "https://g.co/kgs/tqHNHBZ",
            image: ""
        },
        {
            name: "Bel Mondo Cafe Lt.3",
            rating: 4,
            description: "An elegant cafe offering a variety of Italian and Western dishes, perfect for casual dining or a romantic evening out.",
            location: "Medan Timur",
            Url: "https://g.co/kgs/zVL5Uda",
            image: "BMC.jpeg"
        },
        {
            name: "Almasqa Resto | Kuliner Timur Tengah",
            rating: 4,
            description: "Savor the tastes of the Middle East with dishes such as mandi, kebab, and a variety of mezze options in a warm and inviting setting.",
            location: "Medan Area",
            Url: "https://g.co/kgs/2ikxejt",
            image: "AR.jpeg"
        },
        {
            name: "Dovers cafe & lounge",
            rating: 4,
            description: "A stylish café and lounge offering a selection of gourmet coffee, snacks, and an elegant ambiance for both work and relaxation.",
            location: "Medan Polonia",
            Url: "https://g.co/kgs/XowzMDa",
            image: "DCL.jpeg"
        },
        {
            name: "Basnul Cafe",
            rating: 4,
            description: "A local café serving a mix of Indonesian and Western meals, perfect for a casual hangout or enjoying a cup of coffee.",
            location: "Medan Selayang",
            Url: "https://g.co/kgs/EXfdJ6C",
            image: "BC.jpeg"
        },
        {
            name: "MEDAN SELERA - Nasi Briyani, Nasi Mandhi, Nasi Kebuli, Teh Tarik, Roti Canai - MEDAN",
            rating: 4,
            description: "A must-visit for fans of Southeast Asian cuisine, offering flavorful dishes like nasi briyani, nasi kebuli, and refreshing teh tarik.",
            location: "Medan Johor",
            Url: "https://g.co/kgs/Gt6B1jg",
            image: "MS.jpeg"
        },
        {
            name: "Ozara Dining",
            rating: 4,
            description: "A modern dining experience with a fusion of international and Asian flavors. Known for its innovative dishes and chic ambiance.",
            location: "Medan Timur",
            Url: "https://g.co/kgs/k5knpRC",
            image: "OD.png"
        },
        {
            name: "Dovers cafe & lounge",
            rating: 4,
            description: "A relaxed café and lounge offering an extensive menu of snacks, coffee, and light meals, ideal for socializing and unwinding.",
            location: "Medan Polonia",
            Url: "https://g.co/kgs/SZidF8L",
            image: "DCL.jpeg"
        },
        {
            name: "LKKR (Lekker Urban Food House Putri Hijau)",
            rating: 4,
            description: "A trendy eatery offering a mix of Western and local dishes, ideal for food lovers seeking unique and flavorful meals.",
            location: "Medan Barat",
            Url: "https://g.co/kgs/DMnS8MK",
            image: "LKKR.jpeg"
        },
        {
            name: "Jade Restaurant",
            rating: 4,
            description: "A fine dining experience serving authentic Chinese cuisine, including dim sum, Peking duck, and a variety of Cantonese dishes.",
            location: "Medan Barat",
            Url: "https://g.co/kgs/Q25ejHw",
            image: "JR.jpeg"
        },
        {
            name: "The Edge Restaurant",
            rating: 4,
            description: "A high-end restaurant offering a sophisticated menu of steaks, seafood, and international favorites, complemented by a scenic view.",
            location: "Medan Petisah",
            Url: "https://g.co/kgs/VRuxchG",
            image: "TER.jpeg"
        },
        {
            name: "BISTRONOMIX",
            rating: 4,
            description: "A modern bistro offering a unique blend of culinary styles, with a menu featuring seasonal ingredients and gourmet dishes.",
            location: "Medan Barat",
            Url: "https://g.co/kgs/uansLZw",
            image: "BISTRONOMIX.jpeg"
        },
        {
            name: "Marriott Cafe",
            rating: 4,
            description: "A luxurious cafe offering an international buffet and a selection of delicacies from around the world, perfect for any occasion.",
            location: "Medan Barat",
            Url: "https://g.co/kgs/sbjLY5y",
            image: "marriotcafe.png"
        },
        {
            name: "Prime Steakhouse",
            rating: 4,
            description: "An upscale steakhouse specializing in premium cuts of meat, offering a refined dining experience in a stylish, modern setting.",
            location: "Medan Barat",
            Url: "https://g.co/kgs/8sntWVy",
            image: "primesteakhouse.jpeg"
        }
    ],
    "Vegetarian Food": [{
            name: "Medan Vegeta",
            rating: 4,
            description: "Vegetarian restaurant in Medan",
            location: "Medan Polonia",
            Url: "https://g.co/kgs/sJGVT6t",
            image: "MV.jpeg"
        },
        {
            name: "Green Bean Vegetarian",
            rating: 4,
            description: "Vegetarian dining option",
            location: "Medan Kota",
            Url: "https://g.co/kgs/zCmsyVG",
            image: "GBV.jpeg"
        },
        {
            name: "VOI Vegan Restaurant And Pastry Shop",
            rating: 4,
            description: "Vegan restaurant with pastry options",
            location: "Medan Petisah",
            Url: "https://g.co/kgs/d4ihx7a",
            image: "VOI.jpeg"
        },
        {
            name: "Loving Kitchen",
            rating: 4,
            description: "Plant-based kitchen",
            location: "Medan Petisah",
            Url: "https://g.co/kgs/xbFbm9V",
            image: "LK2.jpeg"
        },
        {
            name: "LovingHut Wajir",
            rating: 4,
            description: "Vegetarian restaurant chain",
            location: "Medan Maimun",
            Url: "https://g.co/kgs/PmCsRZB",
            image: "LW.jpeg"
        },
        {
            name: "Socrates Vegan",
            rating: 4,
            description: "Vegan dining establishment",
            location: "Medan Petisah",
            Url: "https://g.co/kgs/umyhxu1",
            image: "SV.jpeg"
        },
        {
            name: "SIEN SIEN VEGETARIAN",
            rating: 5,
            description: "Local vegetarian restaurant",
            location: "Medan Area",
            Url: "https://g.co/kgs/PWPbci7",
            image: "SSV.jpeg"
        },
        {
            name: "ODETTE Resto & Cafe Vegan Vegetarian",
            rating: 4,
            description: "Vegan and vegetarian cafe",
            location: "Medan Area",
            Url: "https://g.co/kgs/Duzg5HL",
            image: "ORD.jpeg"
        },
        {
            name: "Waringin Vegetarian",
            rating: 4,
            description: "Vegetarian dining spot",
            location: "Medan Petisah",
            Url: "https://g.co/kgs/eee9u31",
            image: "WV.jpeg"
        },
        {
            name: "Lotus Vegan Food",
            rating: 4,
            description: "Vegan food restaurant",
            location: "Medan Area",
            Url: "https://g.co/kgs/DWxyV2p",
            image: "LVF.jpeg"
        },
        {
            name: "OUJI Vegan & Vegetarian Food",
            rating: 5,
            description: "Diverse vegan and vegetarian menu",
            location: "Medan Kota",
            Url: "https://g.co/kgs/AVVpGwE",
            image: "OUJI.jpeg"
        },
        {
            name: "Happy Vegan",
            rating: 4,
            description: "Cheerful vegan restaurant",
            location: "Medan Petisah",
            Url: "https://g.co/kgs/xwek4oz",
            image: "HV.jpeg"
        },
        {
            name: "GOLDEN BELLS Vegetarian Cafe & Resto",
            rating: 4,
            description: "Cozy vegetarian cafe and restaurant",
            location: "Medan Timur",
            Url: "https://g.co/kgs/kdg48FM",
            image: "GB.jpeg"
        },
        {
            name: "Indonesia Vegan Restoran",
            rating: 4,
            description: "Authentic Indonesian vegan cuisine",
            location: "Medan Kota",
            Url: "https://g.co/kgs/TUW2TSm",
            image: "IVR.jpeg"
        },
        {
            name: "TAI WOK StreetFood Vegetarian / Vegan",
            rating: 4,
            description: "Street food style vegetarian and vegan dishes",
            location: "Medan Area",
            Url: "https://g.co/kgs/hKquJYb",
            image: "TAI.jpeg"
        },
        {
            name: "Vegelicious",
            rating: 4,
            description: "Delicious vegetarian offerings",
            location: "Medaan Kota",
            Url: "https://g.co/kgs/yJttT6h",
            image: "VG.jpeg"
        },
        {
            name: "Green Village",
            rating: 4,
            description: "Vegetarian restaurant in a green setting",
            location: "Medan Timur",
            Url: "https://g.co/kgs/giyyNAN",
            image: "GV.jpeg"
        },
        {
            name: "Syukur Vegetarian",
            rating: 4,
            description: "Vegetarian dining with gratitude",
            location: "Medan Timur",
            Url: "https://g.co/kgs/nUdhhR8",
            image: "SV2.png"
        },
        {
            name: "Love Vegetarian Kitchen",
            rating: 4,
            description: "Cooking with love for vegetarians",
            location: "Medan Helvetia",
            Url: "https://g.co/kgs/2vFknVB",
            image: "LVK.jpeg"
        },
        {
            name: "Mawar Vegetarian",
            rating: 4,
            description: "Traditional vegetarian restaurant",
            location: "Medan Petisah",
            Url: "https://g.co/kgs/oeabqZq",
            image: "MV2.jpeg"
        },
        {
            name: "Dapur Vegetarian",
            rating: 4,
            description: "Vegetarian kitchen specialties",
            location: "Medan Maimun",
            Url: "https://g.co/kgs/yEZEX7d",
            image: "DV.jpeg"
        },
        {
            name: "Biduk Vegetarian",
            rating: 4,
            description: "Vegetarian restaurant with unique offerings",
            location: "Medan Petisah",
            Url: "https://g.co/kgs/sbsKg2E",
            image: "BV.jpeg"
        },
        {
            name: "RM Shen Yan Vegetarian",
            rating: 4,
            description: "Vegetarian restaurant with Asian influences",
            location: "Medan Timur",
            Url: "https://g.co/kgs/ZNfizLQ",
            image: "RMSY.jpeg"
        },
        {
            name: "Warung Vege Ahin",
            rating: 4,
            description: "Local vegetarian warung",
            location: "Medan Area",
            Url: "https://g.co/kgs/ejKdPzS",
            image: "WVA.jpeg"
        },
        {
            name: "My Grandma Vegetarian Restaurant",
            rating: 4,
            description: "Home-style vegetarian cooking",
            location: "Medan Timur",
            Url: "https://g.co/kgs/tuJ3ji8",
            image: "MGV.jpeg"
        },
        {
            name: "Gan En Vegetarian",
            rating: 4,
            description: "Vegetarian dining experience",
            location: "Medan Petisah",
            Url: "https://g.co/kgs/LcJ7W8K",
            image: "GEV.jpeg"
        },
        {
            name: "Veggie house",
            rating: 4,
            description: "Casual vegetarian restaurant",
            location: "Medan Maimun",
            Url: "https://g.co/kgs/v16ZpBz",
            image: "VH.jpeg"
        },
        {
            name: "Vinaya Vegetarian",
            rating: 4,
            description: "Vegetarian cuisine with mindful approach",
            location: "Medan Area ",
            Url: "https://g.co/kgs/jDwfcxS",
            image: "VV.jpeg"
        },
        {
            name: "Vegetarian Food",
            rating: 4,
            description: "General vegetarian dining",
            location: "Medan Sunggal ",
            Url: "https://g.co/kgs/QoLrfqk",
            image: "VF.jpeg"
        },
        {
            name: "Nie Nie Vegetarian Food",
            rating: 4,
            description: "Vegetarian food specialist",
            location: "Medan Timur",
            Url: "https://g.co/kgs/HiHQskC",
            image: "NNV.jpeg"
        },

        {
            name: "Agek Vegetarian",
            rating: 4,
            description: "Local vegetarian restaurant",
            location: "Medan Area",
            Url: "https://g.co/kgs/r7hKbb9",
            image: "AV.jpeg"
        },
        {
            name: "Biduk Vegetarian",
            rating: 4,
            description: "Another branch of Biduk Vegetarian",
            location: "Medan Kota",
            Url: "https://g.co/kgs/xrxrn2L",
            image: "BV.jpeg"
        },
        {
            name: "Loving Hut (Express)",
            rating: 4,
            description: "Quick service vegetarian restaurant",
            location: "Medan Kota",
            Url: "https://g.co/kgs/wMTHf9Q",
            image: "LHE.jpeg"
        },
        {
            name: "Meranti Vegetarian",
            rating: 4,
            description: "Vegetarian restaurant",
            location: "Medan Petisah",
            Url: "https://g.co/kgs/FN8kSFR",
            image: "MV3.jpeg"
        },
        {
            name: "Padang Syukur Vegetarian Sunggal",
            rating: 4,
            description: "Padang-style vegetarian cuisine",
            location: "Medan Sunggal",
            Url: "https://g.co/kgs/u18JRGA",
            image: "PSV.jpeg"
        },
        {
            name: "Satu Nusantara Vegetarian",
            rating: 4,
            description: "Vegetarian restaurant representing Indonesian cuisine",
            location: "Medan Kota",
            Url: "https://g.co/kgs/YS81GF2",
            image: "SNV.jpeg"
        }
    ],
    "Seafood": [{
            name: "Wajir Seafood",
            rating: 4,
            location: "Medan Maimum",
            description: "A local seafood restaurant known for its fresh and flavorful dishes, perfect for seafood lovers.",
            Url: "https://g.co/kgs/jC8gqsr",
            image: "WS.jpeg"
        },
        {
            name: "Jambul Seafood",
            rating: 4,
            location: "Medan Polonia",
            description: "Offering a variety of seafood dishes in a cozy setting, this place is a popular choice for families.",
            Url: "https://g.co/kgs/z7XAktt",
            image: "JS.jpeg"
        },
        {
            name: "Radja Laoet Seafood",
            rating: 4,
            location: "Medan Maimum",
            description: "A renowned seafood restaurant that delivers authentic and tasty seafood meals in the heart of Medan.",
            Url: "https://g.co/kgs/cYUQemd",
            image: "RLS.jpeg"
        },
        {
            name: "Hawwi Sari Laut",
            rating: 4,
            location: "Medan Petisah",
            description: "A seafood haven that specializes in freshly prepared seafood, offering an inviting atmosphere.",
            Url: "https://g.co/kgs/aXQaFQo",
            image: "SLH.jpeg"
        },
        {
            name: "Happy Seafood Medan",
            rating: 4,
            location: "Medan Area",
            description: "Known for its delightful seafood dishes and friendly service, Happy Seafood is a great spot for a hearty meal.",
            Url: "https://g.co/kgs/ZswUHwd",
            image: "HSM.jpeg"
        },
        {
            name: "Sari Laut Nelayan",
            rating: 4,
            location: "Medan Barat",
            description: "Offering a variety of seafood delicacies, this place is favored by locals for its quality and taste.",
            Url: "https://g.co/kgs/bVGdydS",
            image: "SLN.jpeg"
        },
        {
            name: "Umi Seafood",
            rating: 4,
            location: "Medan Polonia",
            description: "A great spot for seafood lovers, offering a wide selection of dishes in a casual and welcoming environment.",
            Url: "https://g.co/kgs/pwksQTF",
            image: "US.jpeg"
        },

        {
            name: "Lembur Kuring",
            rating: 4,
            location: "Medan Helvetia",
            description: "An excellent choice for fresh seafood, with a great selection of Indonesian flavors and dishes.",
            Url: "https://g.co/kgs/nGz7WDo",
            image: "LK2.jpeg"
        },
        {
            name: "Seafood Mak Judes",
            rating: 5,
            location: "Medan Sunggal",
            description: "Famous for its top-notch seafood and amazing flavors, Seafood Mak Judes is a must-visit for seafood enthusiasts.",
            Url: "https://g.co/kgs/b13Ujjg",
            image: "SMJ.jpeg"
        },
        {
            name: "Jumbo Sea Food Restaurant",
            rating: 4,
            location: "Medan Barat",
            description: "A spacious seafood restaurant known for its wide variety of fresh dishes and excellent customer service.",
            Url: "https://g.co/kgs/xJ6uRkT",
            image: "JS2.jpeg"
        },
        {
            name: "Rumah Makan Bintang Bawal",
            rating: 4,
            location: "Medan Petisah",
            description: "Specializing in fresh fish and seafood, Rumah Makan Bintang Bawal is a favorite among seafood lovers.",
            Url: "https://g.co/kgs/n5wxCMh",
            image: "RMB.jpeg"
        },
        {
            name: "KAMPOENG NELAYAN SEAFOOD",
            rating: 4,
            location: "Medan Timur",
            description: "Serving a mix of traditional seafood dishes with a modern twist, this place is popular for both locals and visitors.",
            Url: "https://g.co/kgs/mpjvAAA",
            image: "RMN.jpeg"
        },
        {
            name: "Steamboat Corner Medan",
            rating: 5,
            location: "Medan Petisah",
            description: "Known for its steamboat style seafood, this restaurant offers a fun and interactive dining experience.",
            Url: "https://g.co/kgs/tK2zMit",
            image: "SCM.jpeg"
        },
        {
            name: "Seafood Bang Joe",
            rating: 4,
            location: "Medan Helvetia",
            description: "Bang Joe serves up delicious, high-quality seafood in a laid-back atmosphere, perfect for casual dining.",
            Url: "https://g.co/kgs/WURQ7xR",
            image: "SBJ.jpeg"
        },
        {
            name: "Rumah Seafood 99",
            rating: 4,
            location: "Medan Sunggal",
            description: "A go-to place for fresh seafood with a variety of options and great flavor.",
            Url: "https://g.co/kgs/jaEN5Bd",
            image: "S99.jpeg"
        },
        {
            name: "UNCLE SEAFOOD MEDAN",
            rating: 4,
            location: "Medan Johor",
            description: "Uncle Seafood offers a wide range of dishes, making it a top choice for a variety of tastes.",
            Url: "https://g.co/kgs/u8mwf9t",
            image: "US2.jpeg"
        },
        {
            name: "Petisah Seafood",
            rating: 4,
            location: "Medan Petisah",
            description: "Located in Medan Petisah, this seafood joint serves up fresh and flavorful dishes at affordable prices.",
            Url: "https://g.co/kgs/bJ2eb9i",
            image: "PS.jpeg"
        },

        {
            name: "Family Seafood",
            rating: 4,
            location: "Medan Barat",
            description: "A family-friendly seafood restaurant that offers a variety of fresh dishes and hearty portions.",
            Url: "https://g.co/kgs/Xp8tYAG",
            image: "FS.jpeg"
        },
        {
            name: "Sondoro Seafood Singapore Station",
            rating: 4,
            location: "Medan Maimun",
            description: "A well-known spot for tasty seafood, offering dishes with a Singaporean twist.",
            Url: "https://g.co/kgs/StmZNYh",
            image: "SSSS.jpeg"
        },
        {
            name: "Golden Seafood",
            rating: 4,
            location: "Medan Denai",
            description: "Golden Seafood is famous for its fresh ingredients and diverse menu that caters to all seafood tastes.",
            Url: "https://g.co/kgs/xRoLnUX",
            image: "GS.jpeg"
        },
        {
            name: "SeaFood Romance Ratu Hapis",
            rating: 4,
            location: "Medan Barat",
            description: "Offering a romantic atmosphere along with delicious seafood, this restaurant is perfect for a special evening.",
            Url: "https://g.co/kgs/bnvqWCu",
            image: "SR.jpeg"
        },
        {
            name: "Asoka Corner",
            rating: 4,
            location: "Medan Selayang",
            description: "A hidden gem in Medan Selayang, serving a great selection of seafood dishes in a cozy corner.",
            Url: "https://g.co/kgs/ibJvwZ3",
            image: "AC.jpeg"
        },
        {
            name: "Sop Ikan Istimewa Khas Batam",
            rating: 4,
            location: "Medan Petisah",
            description: "Specializing in fish soup, this restaurant offers a unique seafood experience.",
            Url: "https://g.co/kgs/cYBJ1NS",
            image: "SII.jpeg"
        },
        {
            name: "Java Cafe & Seafood Medan",
            rating: 4,
            location: "Medan Maimun",
            description: "Java Cafe serves delicious seafood dishes with a variety of Indonesian flavors, offering a great ambiance.",
            Url: "https://g.co/kgs/H9KTzY9",
            image: "JC2.jpeg"
        },
        {
            name: "PAK TIAM SEAFOOD",
            rating: 4,
            location: "Medan Perjuangan",
            description: "Pak Tiam Seafood offers a simple yet flavorful seafood menu with an emphasis on local taste.",
            Url: "https://g.co/kgs/KkW6eJn",
            image: "PTS.jpeg"
        },
        {
            name: "Toke Seafood",
            rating: 5,
            location: "Medan Selayang",
            description: "A must-try for seafood lovers, Toke Seafood serves up top-quality dishes with exceptional taste.",
            Url: "https://g.co/kgs/xcghHU9",
            image: "TS.png"
        },
        {
            name: "RM. A Doe A",
            rating: 4,
            location: "Medan Petisah",
            description: "Known for its seafood platters and exceptional quality, RM. A Doe A is a great place for seafood lovers.",
            Url: "https://g.co/kgs/sAeUhB1",
            image: "RMA.jpeg"
        },
        {
            name: "Yoserizal Seafood",
            rating: 4,
            location: "Medan Kota",
            description: "A local favorite for fresh seafood, Yoserizal Seafood offers a great selection of dishes.",
            Url: "https://g.co/kgs/dPfcz11",
            image: "yozeri.jpg"
        },
        {
            name: "Seafood 2000",
            rating: 4,
            location: "Medan Sunggal",
            description: "Seafood 2000 is known for its variety and great-tasting dishes, perfect for seafood enthusiasts.",
            Url: "https://g.co/kgs/BPAjLkn",
            image: "S2000.jpeg"
        },
        {
            name: "Perintis SeaFood",
            rating: 4,
            location: "Medan Timur",
            description: "A popular spot for seafood lovers, offering a mix of traditional and modern seafood dishes.",
            Url: "https://g.co/kgs/9jUUSrW",
            image: "PS2.jpeg"
        },
        {
            name: "MY WAY Seafood",
            rating: 4,
            location: "Medan Helvetia",
            description: "A hidden gem for seafood lovers, offering fresh and flavorful dishes at reasonable prices.",
            Url: "https://g.co/kgs/aYmT2wb",
            image: "MWS.jpeg"
        },
        {
            name: "Grand Maximum Seafood Restaurant",
            rating: 4,
            location: "Medan Barat",
            description: "Grand Maximum offers a great selection of seafood dishes with a focus on quality and freshness.",
            Url: "https://g.co/kgs/we1rJk2",
            image: "GMS.jpeg"
        },
        {
            name: "Palm Beach Seafood Medan",
            rating: 4,
            location: "Medan Polonia",
            description: "Known for its beachside-style seafood, Palm Beach offers a relaxing atmosphere and delicious dishes.",
            Url: "https://g.co/kgs/4fC6VbW",
            image: "PBS.jpeg"
        },
        {
            name: "RM Mei Seafood",
            rating: 4,
            location: "Medan Area",
            description: "A family favorite for delicious seafood meals and excellent customer service.",
            Url: "https://g.co/kgs/jT8x24G",
            image: "RMSM.jpeg"
        },
        {
            name: "Saung Kabayan Seafood",
            rating: 4,
            location: "Medan Selayang",
            description: "Saung Kabayan is known for its flavorful seafood dishes served in a cozy, traditional setting.",
            Url: "https://g.co/kgs/N6yRGd9",
            image: "SKS.jpeg"
        },
        {
            name: "Dazam Raya Seafood",
            rating: 4,
            location: "Medan Petisah",
            description: "A popular choice for seafood lovers, Dazam Raya serves up a variety of delicious seafood meals.",
            Url: "https://g.co/kgs/YuaQaPp",
            image: "DRS.jpeg"
        },
        {
            name: "Seafood LAMONGAN 2",
            rating: 4,
            location: "Medan Baru",
            description: "A great place to enjoy fresh seafood with an Indonesian flair, Seafood Lamongan is a popular destination.",
            Url: "https://g.co/kgs/BppiMni",
            image: "SL.jpeg"
        },
        {
            name: "MULYA JAYA SEAFOOD",
            rating: 4,
            location: "Medan Petisah",
            description: "Mulya Jaya is known for its variety of seafood dishes and consistently good quality.",
            Url: "https://g.co/kgs/t6mrwrS",
            image: "MJS.jpeg"
        },
        {
            name: "SEAFOOD ABANG",
            rating: 4,
            location: "Medan Barat",
            description: "A casual seafood restaurant offering fresh dishes in a laid-back atmosphere.",
            Url: "https://g.co/kgs/XXPXMSQ",
            image: "SA.jpeg"
        },
        {
            name: "Sea Food Nasi Uduk 21 Sambel Pecak Mas Fikhan",
            rating: 4,
            location: "Medan Baru",
            description: "A unique spot that combines seafood with nasi uduk and sambel pecak, offering a delicious mix of flavors.",
            Url: "https://g.co/kgs/AH3CsgJ",
            image: "SN21.jpeg"
        },
        {
            name: "Nuansa Indonesian Seafood & Restaurant",
            rating: 4,
            location: "Medan Area",
            description: "Serving a wide range of Indonesian seafood dishes, Nuansa is known for its authenticity and great taste.",
            Url: "https://g.co/kgs/oiQTpm4",
            image: "NIS.jpeg"
        },
        {
            name: "Jempol Seafood by Amei Kepiting",
            rating: 4,
            location: "Medan Timur",
            description: "A well-regarded restaurant specializing in crab dishes and other seafood options.",
            Url: "https://g.co/kgs/UQZQ14s",
            image: "JSA.jpeg"
        },
        {
            name: "Duck 45 Seafood",
            rating: 4,
            location: "Medan Timur",
            description: "Known for its wide variety of seafood options and a popular choice among locals for fresh dishes.",
            Url: "https://g.co/kgs/kG4BEUe",
            image: "D45S.jpeg"
        },
        {
            name: "Kepiting geger medan",
            rating: 4,
            location: "Medan Petisah",
            description: "A crab-focused seafood restaurant that serves up flavorful dishes with a variety of sauces.",
            Url: "https://g.co/kgs/6LP1soo",
            image: "KGM.jpeg"
        },
        {
            name: "Wisma Benteng Restaurant",
            rating: 4,
            location: "Medan Sunggal",
            description: "Wisma Benteng is a great place for fresh seafood, offering a variety of options to satisfy any craving.",
            Url: "https://g.co/kgs/8Xpr2yr",
            image: "WBR.jpeg"
        },
        {
            name: "Mukbang seafood rajawali",
            rating: 4,
            location: "Medan Timur",
            description: "Mukbang Seafood offers a fun dining experience, serving up a wide variety of seafood dishes.",
            Url: "https://g.co/kgs/zkzW6Vp",
            image: "MSR.jpeg"
        },
        {
            name: "Medan Kerang",
            rating: 3,
            location: "Medan Belawan",
            description: "A popular seafood spot that specializes in clams, offering a unique seafood dining experience.",
            Url: "https://g.co/kgs/xEp4y6h",
            image: "MK.jpeg"
        },
        {
            name: "Muara Seafood Belawan",
            rating: 4,
            location: "Medan Baru",
            description: "Muara Seafood serves a variety of dishes, known for its fresh and tasty seafood options.",
            Url: "https://g.co/kgs/5cLJn7J",
            image: "MS2.jpeg"
        },
        {
            name: "KINGS KERANG - MEDAN BARU",
            rating: 4,
            location: "Medan Baru",
            description: "Specializing in clams, Kings Kerang offers a unique seafood experience.",
            Url: "https://g.co/kgs/xZhEuoc",
            image: "KK.jpeg"
        },
        {
            name: "NELAYAN",
            rating: 5,
            location: "Medan Baru",
            description: "Known for its exceptional seafood offerings and great service, Nelayan is a top choice for seafood lovers.",
            Url: "https://g.co/kgs/2VJWiAQ",
            image: "nelayankafe.jpeg"
        }
    ],
    "Desserts": [{

            name: "Luigi Gelato - S Parman",
            rating: 4,
            location: "Medan Petisah",
            description: "Luigi Gelato is a cozy ice cream parlor located in Medan Petisah, offering a delightful selection of authentic Italian gelato. With its vibrant ambiance and premium quality desserts, this spot is perfect for families, friends, or anyone seeking a sweet escape. The rich flavors and creamy texture of their gelato make it a favorite among locals and tourists alike.",
            Url: "https://maps.app.goo.gl/4tCvCJwDrZz5Ujo28",
            image: "LG.jpeg"
        },
        {
            name: "Dessert Kekinian",
            rating: 5,
            location: "Medan Kota",
            description: "Situated in Medan Kota, Dessert Kekinian is a must-visit for anyone with a sweet tooth. Known for its modern and trendy desserts, the café offers innovative creations that not only taste amazing but also look Instagram-worthy. The warm atmosphere and friendly service make it an excellent place for a relaxing dessert break.",
            Url: "https://g.co/kgs/k2NDfXv",
            image: "DK2.jpeg"
        },
        {
            name: "Local Dessert Medan",
            rating: 5,
            location: "Medan Selayang",
            description: "Nestled in Medan Selayang, Local Dessert Medan celebrates traditional flavors with a contemporary twist. This dessert haven serves an array of local specialties, perfect for those who want to experience authentic tastes with a modern presentation. A true gem for dessert enthusiasts.",
            Url: "https://www.google.com/maps/place/Dessert+kekinian/@3.559298,98.696039,17z/data=!3m1!4b1!4m6!3m5!1s0x3031312116f0a7f9:0x1199a14ef6ac95e!8m2!3d3.559298!4d98.6986139!16s%2Fg%2F11fk419lw7?hl=in-ID&entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoJLDEwMjExMjMzSAFQAw%3D%3D",
            image: "LDM.jpeg"
        },
        {
            name: "Es Krim Ria",
            rating: 4,
            location: "Medan Kota",
            description: "Located in Medan Kota, Es Krim Ria is a classic ice cream shop that has been delighting customers for years. Offering a variety of flavors, from traditional favorites to unique creations, this spot is a nostalgic journey for anyone who loves ice cream. A perfect place for all ages to enjoy.",
            Url: "https://g.co/kgs/eKq8dcz",
            image: "EKR.jpeg"
        },
        {
            name: "Velltya Dessert and Fluffy Pancake",
            rating: 5,
            location: "Medan Polonia",
            description: "Velltya, situated in Medan Polonia, is renowned for its heavenly desserts and signature fluffy pancakes. The café combines a charming ambiance with a menu full of delightful treats, making it an ideal location for brunch or a sweet indulgence. Their attention to detail and high-quality ingredients set them apart.",
            Url: "https://g.co/kgs/XAygARW",
            image: "VD.jpeg"
        },

        {
            name: "Umegashi",
            rating: 4,
            location: "Medan Polonia",
            description: "Umegashi, located in Medan Polonia, brings a touch of Japanese dessert artistry to the city. Specializing in delicately crafted sweets and a range of light refreshments, this spot is known for its serene atmosphere and impeccable presentation. A perfect place for a peaceful dessert experience.",
            Url: "https://g.co/kgs/1oPLaJ3",
            image: "UMG.jpeg"
        },
        {
            name: "Jners Mille Crepe & Cakes",
            rating: 4,
            location: "Medan Barat",
            description: "Jners, located in Medan Barat, is famous for its exquisite mille crepe cakes. Each slice is a masterpiece of thin, layered crepes filled with creamy goodness. The café exudes elegance and is ideal for those who enjoy sophisticated desserts in a relaxed setting.",
            Url: "https://g.co/kgs/cmn3gDS",
            image: "JMC.jpeg"
        },
        {
            name: "La Maison",
            rating: 4,
            location: "Medan Petisah",
            description: "La Maison in Medan Petisah is a premium patisserie that serves high-end desserts and pastries. Known for their refined craftsmanship and luxurious flavors, this dessert spot is a haven for connoisseurs. The ambiance is equally delightful, making it a great choice for special occasions or casual indulgences.",
            Url: "https://g.co/kgs/6e9EVVW",
            image: "LM.jpeg"
        },
        {
            name: "Fountain Ice Cream Café",
            rating: 3,
            location: "Medan Polonia",
            description: "Located in Medan Polonia, Fountain Ice Cream Café offers a variety of classic and modern ice cream flavors. Although it has a simpler ambiance, the café is a cozy place to enjoy a refreshing treat with friends or family. It’s a good option for a casual outing in the area.",
            Url: "https://g.co/kgs/beasV1b",
            image: "FIC.jpeg"
        }, //10data
        {
            name: "City Ice Cream",
            rating: 4,
            location: "Medan Petisah",
            description: "City Ice Cream in Medan Petisah offers a variety of refreshing ice cream flavors perfect for a sunny day. Known for its friendly service and relaxing ambiance, it’s a go-to spot for families and ice cream enthusiasts. The wide range of flavors ensures something for everyone.",
            Url: "https://g.co/kgs/nzFkhnS",
            image: "CIC.png"
        },
        {
            name: "Le Chic Bakehouse",
            rating: 4,
            location: "Medan Petisah",
            description: "Le Chic Bakehouse is a charming bakery in Medan Petisah, famous for its exquisite cakes and pastries. Combining classic recipes with modern techniques, this bakehouse offers a delightful experience for dessert lovers. Its cozy interior makes it a great spot for gatherings or a peaceful treat.",
            Url: "https://g.co/kgs/FqvUvMJ",
            image: "LCB.jpeg"
        },
        {
            name: "City Ice Cream",
            rating: 4,
            location: "Medan Timur",
            description: "Located in Medan Timur, City Ice Cream serves premium-quality ice creams in a variety of delicious flavors. The inviting atmosphere and vibrant decor make it a great place for both kids and adults to enjoy their favorite frozen treats.",
            Url: "https://g.co/kgs/E7Jt3Mu",
            image: "CIC.jpeg"
        },
        {
            name: "ICE CREAM APO",
            rating: 4,
            location: "Medan Barat",
            description: "ICE CREAM APO in Medan Barat is a local favorite for its creamy and rich ice cream. With a range of classic and innovative flavors, this place provides a delightful experience for anyone looking to beat the heat with a cold treat.",
            Url: "https://g.co/kgs/VKKwrhG",
            image: "APO.jpeg"
        },
        {
            name: "Baskin Robbins",
            rating: 4,
            location: "Medan Barat",
            description: "Baskin Robbins, a global ice cream brand, is a hotspot in Medan Barat for its iconic 31 flavors and seasonal specials. Known for its high-quality ingredients and diverse options, it's an excellent choice for dessert lovers of all ages.",
            Url: "https://g.co/kgs/wMMazKR",
            image: "BR2.jpeg"
        },
        {
            name: "City Ice Cream",
            rating: 4,
            location: "Medan Petisah",
            description: "Another location of City Ice Cream in Medan Petisah, this branch continues the tradition of serving delightful frozen treats in a welcoming environment. Perfect for casual meetups or a quick dessert fix.",
            Url: "https://g.co/kgs/SKKmWzw",
            image: "CIC.jpeg"
        },
        {
            name: "Bake With Mae",
            rating: 3,
            location: "Medan Petisah",
            description: "Bake With Mae is a cozy bakery in Medan Petisah, known for its homemade-style cakes and cookies. Though simple in ambiance, the warm service and affordable prices make it a hidden gem for dessert enthusiasts.",
            Url: "https://g.co/kgs/7rY3h3j",
            image: "BWM.jpeg"
        },
        {
            name: "HOWEY PATISSIER",
            rating: 4,
            location: "Medan Baru",
            description: "HOWEY PATISSIER in Medan Baru specializes in artisanal desserts and pastries crafted with precision. Its elegant setting and beautifully presented creations make it a popular spot for those seeking high-end sweet treats.",
            Url: "https://g.co/kgs/jsLLHwg",
            image: "HP.jpeg"
        },
        {
            name: "Silmarils Cookies Dessert",
            rating: 4,
            location: "Medan Sunggal",
            description: "Silmarils Cookies Dessert, located in Medan Sunggal, is a paradise for cookie lovers. Offering a wide array of handmade cookies and desserts, this place is ideal for gifting or indulging in premium-quality sweets.",
            Url: "https://g.co/kgs/wP8M3E7",
            image: "SCD.jpeg"
        },
        {
            name: "The Harvest",
            rating: 4,
            location: "Medan Polonia",
            description: "The Harvest is a renowned dessert destination in Medan Polonia, offering a luxurious array of cakes, pastries, and chocolates. Known for its elegant presentation and premium quality, it's a favorite spot for celebrations or a touch of indulgence.",
            Url: "https://g.co/kgs/m4dacj8",
            image: "harvest.jpg"
        }, //20 data
        {
            name: "City Ice Cream",
            rating: 4,
            location: "Medan Kota",
            description: "City Ice Cream in Medan Kota offers a delightful array of frozen treats with vibrant flavors. This branch maintains the same high-quality standards, making it a favorite destination for ice cream lovers seeking a cool escape in the bustling city.",
            Url: "https://g.co/kgs/oH9A2zD",
            image: "CIC.png"
        },
        {
            name: "Urbans Dessert",
            rating: 4,
            location: "Medan Petisah",
            description: "Urbans Dessert is a trendy spot in Medan Petisah, serving a variety of beautifully crafted desserts that are both delicious and visually stunning. A perfect place to enjoy modern sweet treats in a cozy and stylish ambiance.",
            Url: "https://g.co/kgs/Zwkba7i",
            image: "UD.jpeg"
        },
        {
            name: "Bellouva Dessert",
            rating: 5,
            location: "Medan Tuntungan",
            description: "Bellouva Dessert in Medan Tuntungan is known for its elegant presentation and innovative flavors. The serene atmosphere makes it an ideal spot to enjoy a quiet and indulgent dessert experience.",
            Url: "https://g.co/kgs/5H2BhLr",
            image: "BD.jpeg"
        },
        {
            name: "Sam's Pattiserie, Boulangerie, and Desserts",
            rating: 4,
            location: "Medan Polonia",
            description: "Sam's Pattiserie in Medan Polonia offers a luxurious range of pastries, bread, and desserts. With its sophisticated ambiance and high-quality creations, it’s a must-visit for those who appreciate artisanal baking.",
            Url: "https://g.co/kgs/hkcB8Xj",
            image: "SP.jpeg"
        },
        {
            name: "Delicious",
            rating: 3,
            location: "Medan Petisah",
            description: "Delicious, located in Medan Petisah, lives up to its name by offering a wide variety of delightful desserts. A great spot to satisfy your cravings with affordable yet high-quality sweets.",
            Url: "https://g.co/kgs/fUa3xj8",
            image: "D.jpeg"
        },
        {
            name: "Hachi Bar",
            rating: 4,
            location: "Medan Timur",
            description: "Hachi Bar in Medan Timur combines modern aesthetics with a menu full of delicious desserts and beverages. A fantastic place to unwind with friends while enjoying creative and flavorful treats.",
            Url: "https://g.co/kgs/ikVi5nY",
            image: "HB.jpeg"
        },
        {
            name: "La Maison Sun Plaza",
            rating: 3,
            location: "Medan Polonia",
            description: "La Maison Sun Plaza is an upscale patisserie offering premium cakes and pastries. Known for its meticulous craftsmanship and luxurious flavors, it’s a popular choice for special occasions and everyday indulgence.",
            Url: "https://g.co/kgs/pECYyYq",
            image: "LM2.jpeg"
        },
        {
            name: "Nsweets",
            rating: 5,
            location: "Medan Barat",
            description: "Nsweets in Medan Barat offers a delectable selection of desserts, perfect for those seeking a mix of traditional and modern flavors. The cozy setting and delicious offerings make it a great dessert spot.",
            Url: "https://g.co/kgs/aYGoHXN",
            image: "NS.jpeg"
        },
        {
            name: "Fountain Ice Cream Cafe & Restaurant",
            rating: 4,
            location: "Medan Polonia",
            description: "Fountain Ice Cream Cafe & Restaurant in Medan Polonia serves classic ice cream delights alongside hearty meals. With its nostalgic charm and warm service, it’s a great spot for a family outing or a casual dessert fix.",
            Url: "https://g.co/kgs/TUoG8dd",
            image: "FIC2.jpeg"
        },
        {
            name: "Ninety Six Bakery",
            rating: 4,
            location: "Medan Maimun",
            description: "Ninety Six Bakery in Medan Maimun offers a wide array of fresh bread, pastries, and desserts. The friendly ambiance and affordable prices make it a neighborhood favorite for baked goods and sweet treats.",
            Url: "https://g.co/kgs/jNtcpsF",
            image: "NSB.jpeg "
        }, //30 data
        {
            name: "Patbingsoo Korean Dessert House",
            rating: 4,
            location: "Medan Maimun",
            description: "Patbingsoo Korean Dessert House brings a taste of Korea to Medan. Known for its delicious bingsu and other Korean-style desserts, it’s a great spot for those looking for a refreshing and unique sweet treat.",
            Url: "https://g.co/kgs/cGtrS4D",
            image: "PKD.jpeg"
        },
        {
            name: "Two Bouche",
            rating: 4,
            location: "Medan Baru",
            description: "Two Bouche offers an elegant selection of French-inspired pastries and desserts. Its cozy ambiance and premium offerings make it a favorite among dessert connoisseurs.",
            Url: "https://g.co/kgs/qUDvNPo",
            image: "TB.jpeg"
        },
        {
            name: "TheBites Brownies",
            rating: 5,
            location: "Medan Maimun",
            description: "TheBites Brownies is a haven for brownie lovers, offering a variety of rich and indulgent flavors. Perfect for gifting or satisfying a chocolate craving.",
            Url: "https://g.co/kgs/NvP9wcg",
            image: "TB2.jpeg"
        },
        {
            name: "The Three Carrari",
            rating: 4,
            location: "Medan Maimun",
            description: "The Three Carrari is a chic dessert spot in Medan Maimun, offering a mix of local and international flavors in a stylish setting.",
            Url: "https://g.co/kgs/huRFRSw",
            image: "TTC.jpeg"
        },
        {
            name: "Choco Bakery",
            rating: 4,
            location: "Medan Selayang",
            description: "Choco Bakery specializes in chocolate-based pastries and cakes. Its warm ambiance and sweet creations are perfect for any chocolate enthusiast.",
            Url: "https://g.co/kgs/6RgtUp9",
            image: "CB.jpeg"
        },
        {
            name: "pan & co",
            rating: 3,
            location: "Medan Polonia",
            description: "Pan & Co is known for its Japanese-style fluffy pancakes and unique dessert combinations. A great place for casual hangouts with friends.",
            Url: "https://g.co/kgs/gw3rq5F",
            image: "PC.jpeg"
        },
        {
            name: "Doux Patisserie",
            rating: 4,
            location: "Medan Helvetia",
            description: "Doux Patisserie offers beautifully crafted pastries and cakes, combining traditional baking techniques with modern flavors.",
            Url: "https://g.co/kgs/ZdS3Wm7",
            image: "DP.jpeg"
        },
        {
            name: "Mamavie Cafe - Ring Road",
            rating: 4,
            location: "Medan Sunggal",
            description: "Mamavie Cafe - Ring Road serves a variety of delicious desserts and beverages in a relaxed atmosphere. A popular spot for families and friends.",
            Url: "https://www.google.com/search?q=Mamavie%20Cafe%20-%20Ring%20road",
            image: "MC2.jpeg"
        },
        {
            name: "Louise Boulangerie & Patisserie",
            rating: 4,
            location: "Medan Maimun",
            description: "Louise Boulangerie & Patisserie delivers an authentic French bakery experience with a range of high-quality breads, pastries, and desserts.",
            Url: "https://g.co/kgs/8p1rGts",
            image: "LB.jpeg"
        },

        //40data
        {
            name: "Medan Napoleon",
            rating: 4,
            description: "Medan Napoleon is famous for its signature layered cakes filled with rich flavors and a hint of local heritage. A must-try dessert spot in Medan Baru for those seeking unique and premium sweets.",
            location: "Medan Baru",
            Url: "https://g.co/kgs/65zqQHy",
            image: "MN.jpeg"
        },
        {
            name: "The Harvest Cakes - Medan Amir Hamzah",
            rating: 4,
            description: "The Harvest Cakes is renowned for its elegant and indulgent desserts. From creamy cakes to delightful pastries, this branch upholds the brand's reputation for quality and sophistication.",
            location: "Medan Helvetia",
            Url: "https://g.co/kgs/xcw6841",
            image: "THC.jpeg"
        },
        {
            name: "D'Crepes",
            rating: 4,
            description: "D'Crepes offers a wide variety of sweet and savory crepes, perfect for a light snack or a satisfying dessert. A casual spot to enjoy freshly made crepes with a range of flavorful fillings.",
            location: "Medan Sunggal",
            Url: "https://g.co/kgs/A9cmt8w",
            image: "DC.jpeg"
        },
        {
            name: "Zeribowl",
            rating: 4,
            description: "Zeribowl serves delicious and creative dessert bowls with a focus on fresh ingredients and vibrant presentation. A delightful destination for dessert enthusiasts.",
            location: "Medan Area",
            Url: "https://g.co/kgs/ZiZFtim",
            image: "Z.jpeg"
        },
        {
            name: "Istpatisserie",
            rating: 3,
            description: "Istpatisserie delivers a luxurious dessert experience with its array of handcrafted cakes and pastries. The perfect choice for those who appreciate meticulous baking and elegant flavors.",
            location: "Medan Petisah",
            Url: "https://g.co/kgs/seLpLdn",
            image: "IS.jpeg"
        },

        {
            name: "Dear Butter - Medan Cemara Asri",
            rating: 3,
            description: "Dear Butter specializes in buttery, flaky pastries and desserts that melt in your mouth. This charming spot is loved for its quality and friendly service.",
            location: "Medan Barat",
            Url: "https://maps.app.goo.gl/tRCfPbfV8a44hWuY8",
            image: "DB2.jpeg"
        },
        {
            name: "Baker’s Table",
            rating: 4,
            description: "Baker’s Table offers an array of freshly baked breads, cakes, and desserts, with a focus on using quality ingredients. A delightful bakery that caters to both sweet and savory cravings.",
            location: "Medan Petisah",
            Url: "https://g.co/kgs/QBRt53Q",
            image: "BT.jpeg"
        },
        {
            name: "Centra Pie",
            rating: 4,
            description: "Centra Pie is the go-to spot for pie lovers in Medan Sunggal. Offering a range of delicious pies with both sweet and savory fillings, it's a treat for all occasions.",
            location: "Medan Sunggal",
            Url: "https://g.co/kgs/SWcV581",
            image: "CP.jpeg"
        },
        {
            name: "Annie Bakery and Cake",
            rating: 4,
            description: "Annie Bakery and Cake is a local favorite for fresh and delightful baked goods. Known for its friendly atmosphere and variety of cakes, it’s a reliable choice for any dessert need.",
            location: "Medan Timur",
            Url: "https://g.co/kgs/dQWRU8t",
            image: "AB.jpeg"
        }, //50data
        {
            name: "Lonar Éclairs",
            rating: 4,
            description: "Lonar Éclairs specializes in luxurious éclairs with a wide variety of flavors, each crafted with precision and passion. A perfect destination for pastry lovers in Medan Timur.",
            location: "Medan Timur",
            Url: "https://g.co/kgs/XHygnNb",
            image: "LE.jpeg"
        },
        {
            name: "Es Campur Amo",
            rating: 4,
            description: "Es Campur Amo is a local favorite offering refreshing traditional Indonesian shaved ice desserts with generous toppings. Ideal for beating the heat in Medan Perjuangan.",
            location: "Medan Perjuangan",
            Url: "https://g.co/kgs/tnfJwBT",
            image: "AMO.jpeg"
        },
        {
            name: "DOFFEE - Dough & Coffee",
            rating: 5,
            description: "DOFFEE combines artisanal doughnuts and expertly brewed coffee in a cozy atmosphere. A trendy spot in Medan Maimun for dessert and caffeine enthusiasts alike.",
            location: "Medan Maimun",
            Url: "https://g.co/kgs/SuYpKzt",
            image: "DDC.jpeg"
        },
        {
            name: "Jawara Roti dan Kue Gatsu",
            rating: 4,
            description: "Jawara Roti dan Kue Gatsu serves a variety of freshly baked bread and cakes. Known for its affordability and great quality, it’s a gem in Medan Helvetia.",
            location: "Medan Helvetia",
            Url: "https://g.co/kgs/wyMY7Yw",
            image: "JRK.jpeg"
        },
        {
            name: "JCO Coffee & Donuts Cambridge Medan",
            rating: 4,
            description: "JCO offers a blend of premium coffee and soft, delicious donuts. This Cambridge Medan branch is a reliable spot for quick indulgence and a caffeine fix.",
            location: "Medan Petisah",
            Url: "https://g.co/kgs/k5GK8By",
            image: "JCO.jpeg"
        },
        {
            name: "The Thirty-Six",
            rating: 4,
            description: "The Thirty-Six is a stylish dessert cafe offering a mix of delectable cakes, pastries, and beverages. A must-visit in Medan Maimun for a memorable dessert experience.",
            location: "Medan Maimun",
            Url: "https://g.co/kgs/s53rrsk",
            image: "THS.jpeg"
        },
        {
            name: "96 Bakery",
            rating: 4,
            description: "96 Bakery is a charming bakery offering fresh bread, cakes, and traditional treats. Its long-standing reputation makes it a go-to spot in Medan Maimun.",
            location: "Medan Maimun",
            Url: "https://g.co/kgs/hGCesHa",
            image: "96.jpeg"
        },
        {
            name: "Anyong Cafe Studio",
            rating: 4,
            description: "Anyong Cafe Studio combines great coffee and dessert in a cozy, artistic space. This cafe is a great hangout spot in Medan Selayang.",
            location: "Medan Selayang",
            Url: "https://g.co/kgs/BaBq8GD",
            image: "ACS.jpeg"
        },
        {
            name: "Bolen Quemami Bakery",
            rating: 4,
            description: "Bolen Quemami Bakery is known for its signature bolen pastries, featuring buttery layers and flavorful fillings. A local gem in Medan Baru.",
            location: "Medan Baru",
            Url: "https://g.co/kgs/d9SmjBg",
            image: "BQ.jpeg"
        },
        {
            name: "Bolu Meranti",
            rating: 4,
            description: "Bolu Meranti is a Medan icon, famous for its soft and flavorful rolled cakes. Perfect as a souvenir or a treat for yourself.",
            location: "Medan Kota",
            Url: "https://www.google.com/search?q=Bolu+Meranti",
            image: "BM.jpeg"
        }, //60 data
        {
            name: "PEOPLE'S PLACE CAFE Medan",
            rating: 4,
            description: "PEOPLE'S PLACE CAFE Medan is a lively spot offering delicious desserts and a great coffee selection. Known for its vibrant atmosphere, it's a perfect place for casual hangouts.",
            location: "Medan Polonia",
            Url: "https://g.co/kgs/Dn7hwrH",
            image: "PPC.jpeg"
        },
        {
            name: "Jawara Roti dan Kue Kesawan",
            rating: 4,
            description: "Jawara Roti dan Kue Kesawan provides freshly baked bread and pastries, blending traditional flavors with modern twists. A must-visit for bakery lovers in Medan Baru.",
            location: "Medan Baru",
            Url: "https://g.co/kgs/n44cqXL",
            image: "JRK.jpeg"
        },
        {
            name: "Macehat Coffee",
            rating: 4,
            description: "Macehat Coffee is a cozy coffee shop in Medan Petisah, famous for its signature avocado coffee and welcoming vibe. Perfect for coffee enthusiasts.",
            location: "Medan Petisah",
            Url: "https://g.co/kgs/pkQjo4T",
            image: "MC4.jpeg"
        },
        {
            name: "Si Bolang Durian",
            rating: 4,
            description: "Si Bolang Durian is the go-to spot for durian lovers, offering fresh and high-quality durians in a cozy environment. A must-visit in Medan Baru.",
            location: "Medan Baru",
            Url: "https://g.co/kgs/7brjTZt",
            image: "SBD.jpeg"
        },
        {
            name: "Grama Sphere Coffee",
            rating: 4,
            description: "Grama Sphere Coffee in Medan Sunggal serves a variety of specialty coffee and light bites in a relaxed setting. Ideal for casual coffee breaks.",
            location: "Medan Sunggal",
            Url: "https://g.co/kgs/BjTKo7W",
            image: "GSC.jpeg"
        },
        {
            name: "Coffeenatics",
            rating: 4,
            description: "Coffeenatics in Medan Polonia combines modern decor with expertly crafted coffee. A popular spot for professionals and casual coffee drinkers alike.",
            location: "Medan Polonia",
            Url: "https://g.co/kgs/JSxHUAF",
            image: "CN.jpeg"
        },
        {
            name: "Dominico Garden",
            rating: 4,
            description: "Dominico Garden offers a serene ambiance with delicious desserts and beverages. Perfect for relaxing or meeting friends in Medan Petisah.",
            location: "Medan Petisah",
            Url: "https://g.co/kgs/7rTd9MF",
            image: "DG.jpeg"
        },
        {
            name: "J.CO",
            rating: 4,
            description: "J.CO in Medan Petisah offers a combination of soft, delicious donuts and premium coffee. A great choice for quick indulgences.",
            location: "Medan Petisah",
            Url: "https://g.co/kgs/qNbuocb",
            image: "JCO.jpeg"
        },
        {
            name: "Makecents Coffee Space",
            rating: 4,
            description: "Makecents Coffee Space in Medan Baru provides a cozy environment for coffee lovers, featuring a great selection of beverages and desserts.",
            location: "Medan Baru",
            Url: "https://g.co/kgs/BaMqzTJ",
            image: "MCP.jpeg"
        },
        {
            name: "J.CO Donuts & Coffee Centre Point",
            rating: 4,
            description: "J.CO at Centre Point Mall is a convenient spot for enjoying fresh donuts and coffee while shopping or relaxing.",
            location: "Medan Timur",
            Url: "https://g.co/kgs/XXDRmZH",
            image: "JCO.jpeg"
        },
        {
            name: "You_Nine Cafe & Lounge",
            rating: 4,
            description: "You_Nine Cafe & Lounge in Medan Baru offers a sophisticated dining and dessert experience. Perfect for a relaxing night out.",
            location: "Medan Baru",
            Url: "https://g.co/kgs/Qwy7Pmj",
            image: "YN.jpeg"
        },
        {
            name: "Cold 'N Brew Medan",
            rating: 4,
            description: "Cold 'N Brew in Medan Baru serves specialty coffee and refreshing cold brews, making it a popular choice for coffee aficionados.",
            location: "Medan Baru",
            Url: "https://g.co/kgs/mh4dgTA",
            image: "CBM.jpeg"
        },
        {
            name: "Kok Tong",
            rating: 5,
            description: "Kok Tong is a legendary coffee shop in Medan Petisah, known for its aromatic coffee and nostalgic ambiance. A true local favorite.",
            location: "Medan Petisah",
            Url: "https://g.co/kgs/67nJBiS",
            image: "KT.jpeg"
        },
        {
            name: "Maxx Coffee",
            rating: 4,
            description: "Maxx Coffee offers a modern coffee experience with a focus on quality and sustainability. A popular spot for coffee enthusiasts in Medan Petisah.",
            location: "Medan Petisah",
            Url: "https://www.google.com/search?q=Maxx+Coffee",
            image: "MC3.jpg"
        } //74data
    ],
    "Regional Typical Food": [{
            name: "Waroeng Triboy",
            rating: 4,
            description: "Waroeng Triboy is a local favorite offering a variety of traditional Indonesian dishes with a cozy atmosphere. Great for casual dining.",
            location: "Medan Selayang",
            Url: "https://g.co/kgs/RGCa8J1",
            image: "WT.jpg"
        },
        {
            name: "Warung Yoga",
            rating: 4,
            description: "Warung Yoga is a popular spot known for its delicious, authentic Indonesian food and welcoming environment in Medan Polonia.",
            location: "Medan Polonia",
            Url: "https://g.co/kgs/HQoTW7P",
            image: "WY.jpg"
        },
        {
            name: "RM Daun Jeruk",
            rating: 4,
            description: "RM Daun Jeruk offers flavorful traditional Indonesian cuisine, particularly known for its delicious and aromatic dishes.",
            location: "Medan Selayang",
            Url: "https://g.co/kgs/qDEccmx",
            image: "RMD2.jpg"
        },
        {
            name: "Rumah Makan Tabona",
            rating: 4,
            description: "Rumah Makan Tabona is famous for its authentic Padang food with rich flavors and high-quality ingredients. A must-visit for Indonesian food lovers.",
            location: "Medan Maimun",
            Url: "https://g.co/kgs/ZF1985A",
            image: "RMT.jpg"
        },
        {
            name: "Rumah Makan Karina",
            rating: 4,
            description: "Rumah Makan Karina offers a variety of Indonesian specialties in a friendly and comfortable setting. Great for family gatherings.",
            location: "Medan Selayang",
            Url: "https://g.co/kgs/nDWicTp",
            image: "RMK.jpg"
        },
        {
            name: "Rumah Makan Siagian br. Tobing",
            rating: 4,
            description: "Rumah Makan Siagian br. Tobing is known for its hearty and flavorful traditional dishes. A great place to experience local Medan cuisine.",
            location: "Medan Baru",
            Url: "https://g.co/kgs/yVooiyW",
            image: "RMS2.jpg"
        },
        {
            name: "Mie Aceh Titi Bobrok",
            rating: 4,
            description: "Mie Aceh Titi Bobrok is a famous spot in Medan for its flavorful and spicy Acehnese noodles, offering a true taste of Aceh cuisine.",
            location: "Medan Sunggal",
            Url: "https://g.co/kgs/vfmoUo9",
            image: "MAT.jpg"
        },
        {
            name: "Rumah makan bukittinggi beras solok",
            rating: 4,
            description: "Rumah makan Bukittinggi Beras Solok serves traditional Padang food with a unique twist. A great place for authentic regional dishes.",
            location: "Medan Area",
            Url: "https://g.co/kgs/A47N3UX",
            image: "RMBB.jpeg"
        },
        {
            name: "Warung Ijo Excellence",
            rating: 4,
            description: "Warung Ijo Excellence is a popular local restaurant offering a variety of Indonesian dishes, known for its fresh ingredients and excellent service.",
            location: "Medan Baru",
            Url: "https://g.co/kgs/twpFWZ1",
            image: "WIE.png"
        }, // 9 data
        {
            name: "Warung Spesial",
            rating: 4,
            description: "Warung Spesial offers a variety of traditional dishes with a special twist, making it a popular spot for local food enthusiasts.",
            location: "Medan Baru",
            Url: "https://g.co/kgs/xX6ekNs",
            image: "WS2.jpeg"
        },
        {
            name: "Tengah People & Place - Medan",
            rating: 4,
            description: "Tengah People & Place offers a modern and stylish atmosphere with delicious local dishes and fusion options.",
            location: "Medan Timur",
            Url: "https://g.co/kgs/bwCaAC1",
            image: "TPM.jpeg"
        },
        {
            name: "Biduk Vegetarian",
            rating: 5,
            description: "Biduk Vegetarian is a haven for plant-based food lovers, serving a variety of delicious and healthy vegetarian dishes.",
            location: "Medan Petisah",
            Url: "https://g.co/kgs/v3AmiG3",
            image: "BV.jpeg"
        },
        {
            name: "Bingo Street Food",
            rating: 4,
            description: "Bingo Street Food offers an array of street food favorites, known for their affordable prices and tasty options.",
            location: "Medan Baru",
            Url: "https://g.co/kgs/gdnx92h",
            image: "BSF.jpeg"
        },

        {
            name: "Sea Food Nasi Uduk 21 Sambel Pecak 'Mas Fikhan'",
            rating: 4,
            description: "Sea Food Nasi Uduk 21 Sambel Pecak 'Mas Fikhan' serves flavorful seafood with sambel pecak, a favorite dish for seafood lovers.",
            location: "Medan Barat",
            Url: "https://g.co/kgs/5SwJzgJ",
            image: "SN21.jpeg"
        },
        {
            name: "LALAPAN POJOK RAYA",
            rating: 4,
            description: "Lalapan Pojok Raya serves a variety of traditional Indonesian lalapan dishes, featuring fresh ingredients and bold flavors.",
            location: "Medan Petisah",
            Url: "https://g.co/kgs/YX4kKb6",
            image: "LPR.jpeg"
        },
        {
            name: "Restoran Koki Sunda",
            rating: 5,
            description: "Restoran Koki Sunda is famous for its authentic Sundanese cuisine, offering a variety of traditional dishes that are full of flavor.",
            location: "Medan Baru",
            Url: "https://g.co/kgs/zuSRL3x",
            image: "KS.jpeg"
        },
        {
            name: "TONG TJI TEAHOUSE",
            rating: 4,
            description: "Tong Tji Teahouse is a cozy spot known for its premium tea selections and a selection of traditional snacks.",
            location: "Medan Sunggal",
            Url: "https://g.co/kgs/NPxxEBy",
            image: "TTH.jpeg"
        },
        {
            name: "RM. Dainang Medan - Makanan Khas Batak",
            rating: 5,
            description: "RM. Dainang Medan offers traditional Batak dishes, known for their unique flavors and delicious taste. A must-try for anyone looking to explore Medan's local cuisine.",
            location: "Medan Sunggal",
            Url: "https://g.co/kgs/D2T2qRi",
            image: "RMD.jpeg"
        }, //19 data
        {
            name: "Istana Koki Restaurant & Grand Ballroom",
            rating: 4,
            description: "Istana Koki offers an elegant dining experience with a variety of delicious Indonesian dishes, perfect for both casual meals and grand events.",
            location: "Medan Polonia",
            Url: "https://g.co/kgs/MQ3idXN",
            image: "IKR.jpeg"
        },
        {
            name: "Ayam Penyet Cinde Laras Teladan",
            rating: 4,
            description: "Ayam Penyet Cinde Laras is known for its signature ayam penyet, a delicious fried chicken served with sambal and rice.",
            location: "Medan Kota",
            Url: "https://g.co/kgs/V8hgByG",
            image: "APC2.jpeg"
        },
        {
            name: "Sajian Bhinneka",
            rating: 5,
            description: "Sajian Bhinneka offers a diverse range of Indonesian dishes, serving authentic flavors with a focus on quality and presentation.",
            location: "Medan Baru",
            Url: "https://g.co/kgs/B3y9Pyg",
            image: "SB.jpeg"
        },
        {
            name: "Almasqa Resto | Kuliner Timur Tengah",
            rating: 4,
            description: "Almasqa Resto serves Middle Eastern cuisine with a variety of flavorful dishes, from kebabs to falafel, offering a rich dining experience.",
            location: "Medan Area",
            Url: "https://g.co/kgs/mzLf41k",
            image: "AR2.jpeg"
        },
        {
            name: "Ayam Penyet Cindelaras Ring Road",
            rating: 4,
            description: "Ayam Penyet Cindelaras Ring Road is another branch of the popular ayam penyet chain, serving the same crispy chicken and flavorful sambal.",
            location: "Medan Sunggal",
            Url: "https://g.co/kgs/VMYHZxL",
            image: "APC.jpeg"
        },
        {
            name: "Dazam Raya Seafood",
            rating: 5,
            description: "Dazam Raya Seafood specializes in fresh seafood, offering a wide variety of fish, shrimp, and crabs prepared with traditional spices.",
            location: "Medan Petisah",
            Url: "https://g.co/kgs/2XBCxSq",
            image: "DRS2.jpeg"
        },
        {
            name: "Killiney DI Panjaitan",
            rating: 4,
            description: "Killiney DI Panjaitan is a famous spot for its classic Singaporean coffee and toast, offering a cozy environment for casual dining.",
            location: "Medan Baru",
            Url: "https://g.co/kgs/FjKtNby",
            image: "KDI.jpeg"
        },
        {
            name: "LKKR (Lekker Urban Food House)",
            rating: 4,
            description: "Lekker Urban Food House offers a trendy, relaxed atmosphere with a variety of delicious food options, including their famous lekkers (Dutch pancakes).",
            location: "Medan Petisah",
            Url: "https://g.co/kgs/WTkatYk",
            image: "LKKR.jpeg"
        },
        {
            name: "Pondok Jimbaran",
            rating: 4,
            description: "Pondok Jimbaran specializes in seafood dishes, offering fresh fish and other seafood grilled to perfection, served with traditional Indonesian sides.",
            location: "Medan Baru",
            Url: "https://g.co/kgs/WxotNfr",
            image: "PJ.jpeg"
        },
        {
            name: "WOWRUNG",
            rating: 4,
            description: "WOWRUNG is a popular spot for traditional Indonesian snacks and dishes, offering a variety of delicious options at affordable prices.",
            location: "Medan Barat",
            Url: "https://g.co/kgs/pvwWfm4",
            image: "WR.jpeg"
        }, //29 data
        {
            name: "Tong's Cafe",
            rating: 4,
            description: "Tong's Cafe offers a wide range of Western and Asian fusion dishes, perfect for casual dining with friends and family.",
            location: "Medan Petisah",
            Url: "https://g.co/kgs/7Jka579",
            image: "TC.jpeg"
        },
        {
            name: "Resto Ayam Penyet Cabe Hijau Sunggal",
            rating: 4,
            description: "Famous for its spicy ayam penyet with green chili, this restaurant is a favorite for those who enjoy Indonesian comfort food with a spicy twist.",
            location: "Medan Sunggal",
            Url: "https://g.co/kgs/QyE9cwx",
            image: "RAP.jpeg"
        },
        {
            name: "Cafe Kebun Rajawali",
            rating: 4,
            description: "Cafe Kebun Rajawali offers a cozy ambiance with a variety of Indonesian dishes, including traditional snacks and comfort meals.",
            location: "Medan Sunggal",
            Url: "https://g.co/kgs/pvEVLPi",
            image: "CKR.jpeg"
        },
        {
            name: "Garpoo Cafe",
            rating: 4,
            description: "Garpoo Cafe serves delicious food and drinks with a relaxed atmosphere, ideal for hanging out with friends or enjoying a quiet meal.",
            location: "Medan Petisah",
            Url: "https://g.co/kgs/5ewUur9",
            image: "GC.jpeg"
        },
        {
            name: "Siok Bihun Ikan",
            rating: 5,
            description: "Siok Bihun Ikan specializes in fish noodle soup, offering a comforting and flavorful dish that combines fresh fish and savory broth.",
            location: "Medan Area",
            Url: "https://g.co/kgs/uE6asxQ",
            image: "SBI.jpeg"
        },
        {
            name: "Warbek",
            rating: 4,
            description: "Warbek is known for its Indonesian dishes, particularly its sate and traditional rice-based meals, offering an authentic local dining experience.",
            location: "Medan Sunggal",
            Url: "https://g.co/kgs/yYhjXeP",
            image: "WB.jpeg"
        },
        {
            name: "Kaleo Rendang Bistro",
            rating: 4,
            description: "Kaleo Rendang Bistro offers a variety of rendang and other Indonesian dishes with a modern twist, ideal for both casual and special occasions.",
            location: "Medan Polonia",
            Url: "https://g.co/kgs/uJduwwK",
            image: "KRB.jpeg"
        },
        {
            name: "Sondoro Seafood Singapore Station",
            rating: 5,
            description: "Sondoro Seafood serves fresh seafood dishes with a Singaporean influence, offering a delightful variety of seafood prepared with rich, flavorful spices.",
            location: "Medan Maimun",
            Url: "https://g.co/kgs/LJrCoZx",
            image: "SSSM.jpeg"
        },
        {
            name: "Rumah Makan Padang Raya, Medan Johor",
            rating: 4,
            description: "Known for its authentic Padang food, Rumah Makan Padang Raya offers a wide selection of spicy and savory dishes, perfect for fans of Indonesian cuisine.",
            location: "Medan Johor",
            Url: "https://g.co/kgs/AjHyf71",
            image: "RMP.jpeg"
        } //38 data
    ],
    "Healthy Food": [{
            name: "Teko Healthy Food",
            rating: 4,
            description: "Teko Healthy Food offers a variety of nutritious meals, focusing on fresh ingredients and healthy choices for a balanced diet.",
            location: "Medan Polonia",
            Url: "https://g.co/kgs/bBJyBnn",
            image: "HR.jpeg"
        },
        {
            name: "GreenSmoothie Factory",
            rating: 4,
            description: "A place dedicated to healthy smoothies and fresh ingredients, perfect for those looking to boost their energy with nutritious options.",
            location: "Medan Sunggal",
            Url: "https://g.co/kgs/Xte3nLN",
            image: "GSF.png"
        },
        {
            name: "Myndful Indonesia",
            rating: 4,
            description: "Myndful Indonesia offers healthy food options focused on clean eating, providing meals that are both nourishing and satisfying.",
            location: "Medan Petisah",
            Url: "https://g.co/kgs/TLQVWzR",
            image: "MF.png"
        },

        {
            name: "iTera Healthy House",
            rating: 4,
            description: "iTera Healthy House is known for its healthy, home-cooked meals, offering a variety of dishes that promote wellness and healthy living.",
            location: "Medan Petisah",
            Url: "https://g.co/kgs/icPv3HF",
            image: "IHH.jpeg"
        },
        {
            name: "Miss.Healthy",
            rating: 4,
            description: "A health-focused cafe offering light and nutritious meals, with options for those following a healthy diet or vegan lifestyle.",
            location: "Medan Sunggal",
            Url: "https://g.co/kgs/hFEV16Q",
            image: "MH.png"
        },
        {
            name: "Dapur Sehat Kasturi",
            rating: 5,
            description: "Dapur Sehat Kasturi serves a variety of healthy dishes that cater to health-conscious individuals, focusing on fresh and organic ingredients.",
            location: "Medan Petisah",
            Url: "https://g.co/kgs/rUzcwZa",
            image: "DSK.png"
        },
        {
            name: "Happy Vegan",
            rating: 5,
            description: "Happy Vegan offers delicious vegan meals that are both nutritious and satisfying, perfect for those embracing a plant-based lifestyle.",
            location: "Medan Petisah",
            Url: "https://g.co/kgs/xQA4cDw",
            image: "HV.jpeg"
        },
        {
            name: "Healthy Food and Vegetarian, Bread",
            rating: 4,
            description: "This place offers a selection of vegetarian and healthy food options, with a focus on nutritious bread and meal combinations.",
            location: "Medan Petisah",
            Url: "https://g.co/kgs/YXoJdmq",
            image: "HF.jpeg"
        },
        {
            name: "TAI WOK StreetFood Vegetarian/Vegan",
            rating: 4,
            description: "Tai Wok serves a variety of vegetarian and vegan street food, offering a healthy twist on traditional street food dishes.",
            location: "Medan Sunggal",
            Url: "https://g.co/kgs/nyjmaED",
            image: "TAI.jpeg"
        },
        {
            name: "Localeaf Eatery",
            rating: 4,
            description: "Localeaf Eatery offers a selection of wholesome meals with a focus on fresh, locally sourced ingredients for a healthier dining experience.",
            location: "Medan Petisah",
            Url: "https://g.co/kgs/1LUdhHz",
            image: "LE3.jpeg"
        },
        {
            name: "ODETTE Resto & Cafe Vegan Vegetarian",
            rating: 5,
            description: "Odette offers a vegan and vegetarian menu focused on healthy ingredients, providing a delightful experience for those looking for clean, wholesome meals.",
            location: "Medan Tuntungan",
            Url: "https://g.co/kgs/1My7UWG",
            image: "ODE.jpeg"
        },
        {
            name: "Medan Vegetarian",
            rating: 4,
            description: "Medan Vegetarian serves healthy, plant-based dishes that are rich in flavor, making it a popular spot for vegetarian and health-conscious diners.",
            location: "Medan Petisah",
            Url: "https://g.co/kgs/XKVbp6J",
            image: "MV4.jpeg"
        },
        {
            name: "Cafe Rumah Pohon",
            rating: 4,
            description: "Cafe Rumah Pohon offers healthy food options in a cozy setting, with a focus on fresh ingredients and nutritious meals.",
            location: "Medan Baru",
            Url: "https://g.co/kgs/cejUvL2",
            image: "CRP.jpeg"
        },
        {
            name: "Eatsy Kitchen Healthy Catering Medan",
            rating: 5,
            description: "Eatsy Kitchen provides healthy catering options, offering a variety of meals that are perfect for those seeking nutritious and delicious food in Medan.",
            location: "Medan Johor",
            Url: "https://g.co/kgs/js4hehH",
            image: "EKH.jpeg"
        },
        {
            name: "Green Bean Vegetarian",
            rating: 4,
            description: "Green Bean Vegetarian offers plant-based meals that are nutritious and satisfying, with a variety of fresh ingredients in every dish.",
            location: "Medan Timur",
            Url: "https://g.co/kgs/64xjNrH",
            image: "GBV.jpeg"
        },
        {
            name: "Loving Kitchen",
            rating: 5,
            description: "Loving Kitchen serves healthy vegan meals with a focus on plant-based ingredients and wholesome, delicious recipes.",
            location: "Medan Sunggal",
            Url: "https://g.co/kgs/KWg5Rcq",
            image: "LV.jpeg"
        },
        {
            name: "Socrates Vegan",
            rating: 5,
            description: "Socrates Vegan offers a wide variety of healthy vegan dishes, ideal for anyone seeking a plant-based dining experience in Medan.",
            location: "Medan Helvetia",
            Url: "https://g.co/kgs/jxJ1qS1",
            image: "SV3.jpeg"
        },
        {
            name: "Fortunate Coffee Medan Cemara Asri",
            rating: 4,
            description: "Fortunate Coffee specializes in organic coffee and healthy snacks, perfect for a relaxing yet health-conscious coffee break.",
            location: "Medan Timur",
            Url: "https://g.co/kgs/kWoiWjS",
            image: "FCM.jpeg"
        },
        {
            name: "VOI Vegan Restaurant And Pastry Shop",
            rating: 5,
            description: "VOI Vegan offers delicious vegan pastries and meals, providing healthy and satisfying options for vegan food enthusiasts.",
            location: "Medan Polonia",
            Url: "https://g.co/kgs/SjVS6CA",
            image: "VOI.jpeg"
        },
        {
            name: "Kito Art Cafe & Resto",
            rating: 4,
            description: "Kito Art Cafe & Resto offers a combination of healthy food and art in a cozy cafe atmosphere, ideal for enjoying nutritious meals with a creative twist.",
            location: "Medan Baru",
            Url: "https://g.co/kgs/d4Q67j8",
            image: "KAC.jpeg"
        },
        {
            name: "CIS Culinary",
            rating: 4,
            description: "CIS Culinary serves a variety of healthy meals made from fresh, high-quality ingredients, focusing on wholesome and nutritious food.",
            location: "Medan Selayang",
            Url: "https://g.co/kgs/UG2NuCq",
            image: "CIS.jpeg"
        },
        {
            name: "KIDDOS HEALTHY FOOD",
            rating: 4,
            description: "Kiddos Healthy Food offers nutritious meals for kids, providing healthy and delicious options that parents can trust.",
            location: "Medan Baru",
            Url: "https://g.co/kgs/p2pPLms",
            image: "KHF.jpeg"
        },
        {
            name: "Salad Bar by Hadi Kitchen Medan",
            rating: 4,
            description: "Salad Bar offers fresh salads made with a variety of vegetables and healthy toppings, perfect for a light, nutritious meal.",
            location: "Medan Helvetia",
            Url: "https://g.co/kgs/7vrHhPs",
            image: "SBB.jpeg"
        },
        {
            name: "Vegelicious",
            rating: 4,
            description: "Vegelicious serves delicious vegetarian meals that are both healthy and flavorful, offering a variety of fresh options.",
            location: "Medan Johor",
            Url: "https://g.co/kgs/sQgYi8M",
            image: "v.jpeg"
        } //25
    ],
    "Fast Food": [{
            name: "KFC Walikota",
            rating: 4,
            description: "A well-known fast food chain serving fried chicken, burgers, and a variety of side dishes.",
            location: "Medan Polonia",
            Url: "https://g.co/kgs/y6dBS2u",
            image: "KFCW.jpeg"
        },
        {
            name: "Burger King Gajah Mada Medan",
            rating: 4,
            description: "Famous for flame-grilled burgers, including the Whopper, along with fries and other fast food options.",
            location: "Medan Petisah",
            Url: "https://g.co/kgs/qzt76ni",
            image: "BK.jpeg"
        },
        {
            name: "Richeese Factory",
            rating: 3,
            description: "A fast food spot specializing in crispy fried chicken served with a variety of cheese dips.",
            location: "Medan Baru",
            Url: "https://g.co/kgs/gK4Tf16",
            image: "RF.jpeg"
        },
        {
            name: "Burger & Kebab Gembonk",
            rating: 3,
            description: "Serving delicious burgers and kebabs with a range of toppings and sauces.",
            location: "Medan Sunggal",
            Url: "https://g.co/kgs/UiZoTWL",
            image: "BKG.png"
        },
        {
            name: "McDonald's - Medan Tasbi",
            rating: 4,
            description: "McDonald's offers its famous burgers, fries, and beverages, a go-to for a quick meal.",
            location: "Medan Sunggal",
            Url: "https://g.co/kgs/qAH2vb4",
            image: "MDMT.jpeg"
        },

        {
            name: "Burger King",
            rating: 4,
            description: "A fast food chain offering flame-grilled burgers, crispy fries, and other menu items.",
            location: "Medan Selayang",
            Url: "https://g.co/kgs/WgxVESK",
            image: "BK.jpeg"
        },
        {
            name: "Richeese Factory Setiabudi Medan",
            rating: 3,
            description: "Fast food featuring crispy fried chicken with a unique cheese dip selection.",
            location: "Medan Selayang",
            Url: "https://g.co/kgs/ezwNW1m",
            image: "RFS.jpeg"
        },
        {
            name: "KFC Adam Malik Medan",
            rating: 4,
            description: "A KFC location known for its quality fried chicken and side dishes.",
            location: "Medan Petisah",
            Url: "https://g.co/kgs/tuUnN5Y",
            image: "KFCA.jpeg"
        },
        {
            name: "KFC Simpang Mataram Medan",
            rating: 4,
            description: "Enjoy the classic KFC fried chicken and other popular fast food items.",
            location: "Medan Petisah",
            Url: "https://g.co/kgs/7xxbcyi",
            image: "KFCS.jpeg"
        },
        {
            name: "McDonald's Medan Polonia",
            rating: 4,
            description: "McDonald's offering its famous menu of burgers, fries, and beverages.",
            location: "Medan Polonia",
            Url: "https://g.co/kgs/9pkWESq",
            image: "MDM.jpeg"
        },
        {
            name: "KFC Medan Mall",
            rating: 4,
            description: "KFC Medan Mall provides the classic fried chicken meals alongside various side dishes.",
            location: "Medan Kota",
            Url: "https://g.co/kgs/m86xxw2",
            image: "KFCM.jpeg"
        },
        {
            name: "McDonald's - Plaza Millenium Medan",
            rating: 4,
            description: "Serving McDonald's best-known meals including burgers, fries, and their signature desserts.",
            location: "Medan Helvetia",
            Url: "https://g.co/kgs/WUaZNyj",
            image: "MDP.jpeg"
        },
        {
            name: "KFC Home Centra Setiabudi",
            rating: 4,
            description: "Another KFC location known for its crispy fried chicken and wide range of fast food options.",
            location: "Medan Selayang",
            Url: "https://g.co/kgs/S2c4Dvv",
            image: "kfch.jpeg"
        },
        {
            name: "HokBen Ring Road Medan",
            rating: 4,
            description: "Offering a variety of Japanese fast food including bento meals, fried chicken, and tasty sides.",
            location: "Medan Selayang",
            Url: "https://g.co/kgs/QUsdX72",
            image: "hbr.jpeg"
        }, // 15 data
        {
            name: "Wendy's",
            rating: 4,
            description: "Wendy's serves fast food with a focus on quality, including their famous square burgers, fries, and frosties.",
            location: "Medan Polonia",
            Url: "https://g.co/kgs/bV4bihb",
            image: "W.png"
        },
        {
            name: "A&W Restoran - Dr. Mansyur",
            rating: 4,
            description: "A&W offers a variety of fast food including their signature root beer, hot dogs, and burgers.",
            location: "Medan Selayang",
            Url: "https://g.co/kgs/2x2Enp5",
            image: "AWD.jpeg"
        },
        {
            name: "Burger King Sun Plaza Medan",
            rating: 5,
            description: "Known for its flame-grilled burgers, Burger King serves a range of meals including Whoppers and crispy fries.",
            location: "Medan Polonia",
            Url: "https://g.co/kgs/3HVcQkR",
            image: "BK.jpeg"
        },
        {
            name: "4 FINGERS",
            rating: 5,
            description: "4 FINGERS specializes in crispy fried chicken and offers a variety of side dishes, perfect for fast food lovers.",
            location: "Medan Polonia",
            Url: "https://g.co/kgs/51hx6fy",
            image: "4.jpeg"
        },
        {
            name: "Texas Chicken Medan Mall",
            rating: 4,
            description: "Texas Chicken is known for its crispy chicken and wide selection of sides, including mashed potatoes and biscuits.",
            location: "Medan Kota",
            Url: "https://g.co/kgs/hmuptB6",
            image: "TCM.jpeg"
        },
        {
            name: "KFC Centre Point Medan",
            rating: 4,
            description: "KFC is famous for its secret recipe fried chicken, available with various sides like coleslaw and fries.",
            location: "Medan Timur",
            Url: "https://g.co/kgs/AVD4qeN",
            image: "KFC.jpeg"
        },
        {
            name: "Richeese Factory Adam Malik",
            rating: 3,
            description: "Richeese Factory offers a unique twist on fast food with crispy fried chicken served with a variety of cheese dips.",
            location: "Medan Barat",
            Url: "https://g.co/kgs/hi4VDRi",
            image: "RFA.jpeg"
        },
        {
            name: "Store Quick Chicken Indonesia",
            rating: 4,
            description: "Quick Chicken serves fast and delicious chicken meals, with a focus on tasty and convenient fried chicken dishes.",
            location: "Medan Sunggal",
            Url: "https://g.co/kgs/hH76THZ",
            image: "SQC.jpeg"
        },
        {
            name: "Recheese Factory",
            rating: 4,
            description: "Known for its cheese-laden fried chicken dishes, Recheese Factory offers a bold and savory fast food experience.",
            location: "Medan Timur",
            Url: "https://g.co/kgs/H2roFej",
            image: "RF.jpeg"
        },
        {
            name: "McDonald's Pancing",
            rating: 4,
            description: "McDonald's is a global fast food chain offering burgers, fries, and chicken nuggets, along with a variety of beverages.",
            location: "Medan Tembung",
            Url: "https://g.co/kgs/C7pbL3u",
            image: "MCD.jpeg"
        },
        {
            name: "HEAVY",
            rating: 3,
            description: "HEAVY offers hearty meals with a focus on satisfying fast food options for those craving a filling meal.",
            location: "Medan Petisah",
            Url: "https://g.co/kgs/dHrRWse",
            image: "HEAVY.png "
        },
        {
            name: "Wendy's Focal Point Medan",
            rating: 4,
            description: "Wendy's Focal Point provides a variety of fresh, fast food options including their classic square burgers and crispy fries.",
            location: "Medan Selayang",
            Url: "https://g.co/kgs/YtTQrYk",
            image: "WM.jpeg"
        },
        {
            name: "A&W Restoran - Brastagi Gatot Subroto",
            rating: 3,
            description: "A&W in Brastagi offers fast food with a variety of beverages like their famous root beer, along with hearty meals.",
            location: "Medan Petisah",
            Url: "https://g.co/kgs/rFQm6EY",
            image: "AW.jpeg"
        },
        {
            name: "QUALITY FRIED CHICKEN",
            rating: 4,
            description: "QUALITY FRIED CHICKEN specializes in crispy fried chicken, served with a variety of sides and sauces.",
            location: "Medan Barat",
            Url: "https://g.co/kgs/Y1JyZUS9",
            image: "QFC.jpeg"
        },
        {
            name: "CFC",
            rating: 4,
            description: "CFC offers crispy fried chicken with a selection of dips, fries, and side dishes for a satisfying meal.",
            location: "Medan Barat",
            Url: "https://g.co/kgs/3D4Zmx8",
            image: "CFC.png"
        },
        {
            name: "Burger Bangor Gaharu",
            rating: 5,
            description: "Burger Bangor Gaharu serves delicious burgers with quality ingredients and flavorful options for fast food fans.",
            location: "Medan Timur",
            Url: "https://g.co/kgs/uRwjKo7",
            image: "BBG.jpeg"
        } //31 data
    ],
    "Fusion Food": [{
            name: "Dovers Cafe & Lounge",
            rating: 5,
            description: "A trendy spot offering a relaxing atmosphere with great coffee and food.",
            location: "Medan Baru",
            Url: "https://g.co/kgs/KJCc97S",
            image: "DCL.jpeg"
        },
        {
            name: "Tengah People & Place",
            rating: 4,
            description: "A cozy café with a unique ambiance, serving both local and international dishes.",
            location: "Medan Baru",
            Url: "https://g.co/kgs/1VLvrZv",
            image: "TPP.jpeg"
        },
        {
            name: "The Cups & Co",
            rating: 4,
            description: "A coffee shop offering a variety of drinks and light meals, perfect for casual hangouts.",
            location: "Medan Baru",
            Url: "https://g.co/kgs/wqZmtQd",
            image: "tcc.jpeg"
        },
        {
            name: "DIMIGO",
            rating: 5,
            description: "Known for its high-quality coffee and delicious snacks, DIMIGO is a must-visit for coffee lovers.",
            location: "Medan Petisah",
            Url: "https://g.co/kgs/jFUvooB",
            image: "dimigo.jpeg"
        },
        {
            name: "Unboss Coffee",
            rating: 5,
            description: "A modern coffee shop offering excellent brewed coffee and a selection of pastries.",
            location: "Medan Petisah",
            Url: "https://g.co/kgs/B6sejh3",
            image: "UC.jpeg"
        },
        {
            name: "Junction Café",
            rating: 5,
            description: "A lively café serving hearty meals, specialty coffees, and delicious desserts.",
            location: "Medan Selayang",
            Url: "https://g.co/kgs/rYfmcnc",
            image: "JC.jpeg"
        },
        {
            name: "L'Tropico by Haban",
            rating: 4,
            description: "A chic café offering tropical-themed dishes and drinks, perfect for a casual hangout.",
            location: "Medan Selayang",
            Url: "https://g.co/kgs/3yKQfVu",
            image: "LT.jpeg"
        },
        {
            name: "Ludoo Eatery",
            rating: 4,
            description: "A casual eatery serving comfort food with a modern twist in a relaxed atmosphere.",
            location: "Medan Sunggal",
            Url: "https://g.co/kgs/7Kmm1yY",
            image: "LE.jpeg"
        },
        {
            name: "Jinjit Coffee and Bistro",
            rating: 4,
            description: "A coffee shop and bistro known for its cozy ambiance and delicious food options.",
            location: "Medan Kota",
            Url: "https://g.co/kgs/kK86V3R",
            image: "JCB.jpeg"
        },
        {
            name: "Nusantara Healing & Chill",
            rating: 4,
            description: "A chill spot that combines great food with relaxation, offering a peaceful environment.",
            location: "Medan Kota",
            Url: "https://g.co/kgs/gRn36gq",
            image: "NH.jpeg"
        }
    ],
    "Street Food": [{
            name: "Night Street Food Court",
            rating: 4,
            description: "A lively street food court offering a variety of local and international street food.",
            location: "Medan Kota",
            Url: "https://g.co/kgs/SooLuPF",
            image: "NSF.jpeg"
        },
        {
            name: "KOREAN STREET FOOD MEDAN",
            rating: 4,
            description: "Specializing in Korean street food like tteokbokki, fried chicken, and more.",
            location: "Medan Marelan",
            Url: "https://g.co/kgs/f1vshci",
            image: "KSS.jpeg"
        },
        {
            name: "Teras76 Street Food",
            rating: 4,
            description: "Known for a variety of street food options and snacks in a relaxed environment.",
            location: "Medan Baru",
            Url: "https://g.co/kgs/BYUySor",
            image: "T76.jpeg"
        },
        {
            name: "Bayak Streetfood",
            rating: 4,
            description: "A vibrant street food stall with a variety of Indonesian dishes.",
            location: "Medan Sunggal",
            Url: "https://g.co/kgs/Q1rktMm",
            image: "BS.jpeg"
        },

        {
            name: "Semarang Medan",
            rating: 4,
            description: "Bringing the flavors of Semarang with traditional street food offerings.",
            location: "Medan Kota",
            Url: "https://g.co/kgs/nfkw7f8",
            image: "SM2.jpeg"
        },

        {
            name: "Street burger",
            rating: 4,
            description: "Specializing in delicious burgers served street food style.",
            location: "Medan Petisah",
            Url: "https://g.co/kgs/w6qFjPe",
            image: "SB2.jpeg"
        },

        {
            name: "XiJi Street Snack",
            rating: 3,
            description: "Serving a variety of tasty snacks and street food items.",
            location: "Medan Petisah",
            Url: "https://g.co/kgs/HmtQvm5",
            image: "XSS.jpeg"
        },
        {
            name: "SATE NASIONAL",
            rating: 5,
            description: "Serving delicious satay and other grilled meats, a must-visit for fans of traditional Indonesian flavors.",
            location: "Medan Baru",
            Url: "https://g.co/kgs/fjXYDL2",
            image: "SN.jpeg"
        },
        {
            name: "Martabak Gapa",
            rating: 5,
            description: "Known for its delicious martabak, a savory Indonesian dish filled with various toppings.",
            location: "Medan Baru",
            Url: "https://g.co/kgs/qhM1V1J",
            image: "M.jpeg"
        },

        {
            name: "Nasi Goreng Pemuda",
            rating: 5,
            description: "Specializes in fried rice dishes with a variety of toppings and side options.",
            location: "Medan Maimun",
            Url: "https://g.co/kgs/a8HBDzG",
            image: "NGP2.jpeg"
        }, // 15 data
        {
            name: "Kaw Kaw (Thai Food)",
            rating: 4,
            description: "Serving authentic Thai street food with a variety of spicy and flavorful dishes.",
            location: "Medan Petisah",
            Url: "https://g.co/kgs/3YvvYeC",
            image: "KTF.jpeg"
        },
        {
            name: "Sate Madura Cinta Rasa",
            rating: 4,
            description: "Famous for serving delicious and tender satay with a special peanut sauce.",
            location: "Medan Denai",
            Url: "https://g.co/kgs/1KFZSGA",
            image: "SMC.jpeg"
        },
        {
            name: "Sate Memeng",
            rating: 4,
            description: "Known for its tender and flavorful satay dishes, served with a variety of sides.",
            location: "Medan Timur",
            Url: "https://g.co/kgs/cQDfwjb",
            image: "SM.jpeg"
        },
        {
            name: "Hock Seng Noodle",
            rating: 5,
            description: "Offering a variety of noodle dishes, including special noodle soups and fried noodles.",
            location: "Medan Baru",
            Url: "https://g.co/kgs/6rphQFJ",
            image: "HSN.jpeg"
        },
        {
            name: "Es Campur Amo",
            rating: 4,
            description: "Serving refreshing es campur (shaved ice) with a wide variety of toppings and syrups.",
            location: "Medan Perjuangan",
            Url: "https://g.co/kgs/96fH1YF",
            image: "ECA.jpeg"
        },

        {
            name: "Mie Balap Wahidin",
            rating: 4,
            description: "A favorite for spicy noodle lovers, serving the famous Mie Balap with a variety of toppings.",
            location: "Medan Perjuangan",
            Url: "https://g.co/kgs/DCxBPfS",
            image: "MBW.jpeg"
        },
        {
            name: "Selat Panjang",
            rating: 3,
            description: "Serving a variety of Indonesian street food, including grilled meats and satay.",
            location: "Medan Kota",
            Url: "https://g.co/kgs/PsPz3Er",
            image: "SP2.jpeg"
        },
        {
            name: "Papa Kerang Rebus",
            rating: 5,
            description: "A popular seafood spot known for its delicious steamed shellfish served with dipping sauces.",
            location: "Medan Timur",
            Url: "https://g.co/kgs/BzWNdSy",
            image: "PKR.jpeg"
        },
        {
            name: "Ucok Durian Medan",
            rating: 5,
            description: "Famous for its durian offerings, a must-visit for durian lovers.",
            location: "Medan",
            Url: "https://g.co/kgs/CeJzH8L",
            image: "UDM.jpeg"
        },
        {
            name: "Lontong Kak Lin",
            rating: 4,
            description: "Serving traditional lontong (rice cake) with various savory toppings and sambal.",
            location: "Medan Polonia",
            Url: "https://g.co/kgs/N41kYAe",
            image: "LKL.jpeg"
        },
        {
            name: "Mie Aceh Titi Bobrok",
            rating: 4,
            description: "A local favorite for spicy Mie Aceh, served with rich, flavorful curry and fresh ingredients.",
            location: "Medan Sunggal",
            Url: "https://g.co/kgs/tpByhBx",
            image: "MAT.jpeg"
        },
        {
            name: "Bakso & Miesop Methodist",
            rating: 3,
            description: "Known for serving delicious meatball soup (bakso) and mie sop with various condiments.",
            location: "Medan Polonia",
            Url: "https://g.co/kgs/aq3xsWv",
            image: "BMM.jpeg"
        },
        {
            name: "Mie Balap Jalan Darat",
            rating: 3,
            description: "Serving the famous Mie Balap, a spicy noodle dish with a local Medan twist.",
            location: "Medan Baru",
            Url: "https://g.co/kgs/1DSVT7d",
            image: "MJB.jpeg"
        }, //30 data

        {
            name: "Es Campur Nana",
            rating: 3,
            description: "Offering a variety of refreshing shaved ice with fruit and sweet toppings.",
            location: "Medan Maimun",
            Url: "https://g.co/kgs/fguWVHM",
            image: "ECN.jpeg"
        },
        {
            name: "Soto Kesawan",
            rating: 5,
            description: "A must-try for soto lovers, serving the traditional Indonesian soup with a variety of meats.",
            location: "Medan Baru",
            Url: "https://g.co/kgs/JjFrVVW",
            image: "SK2.jpeg"
        },
        {
            name: "Kuliner Pagaruyung",
            rating: 4,
            description: "A popular spot offering a variety of Indonesian traditional dishes with a local touch.",
            location: "Medan Petisah",
            Url: "https://g.co/kgs/wunBsR2",
            image: "KP.jpeg"
        },
        {
            name: "Pajus Kuliner",
            rating: 4,
            description: "Serving various street food snacks with local flavors and fresh ingredients.",
            location: "Medan Baru",
            Url: "https://g.co/kgs/Rf1fFot",
            image: "PK.jpeg"
        },
        {
            name: "Kwetiau Ateng - Sumatera",
            rating: 4,
            description: "Famous for its stir-fried kwetiau (flat noodles), served with a variety of meats and vegetables.",
            location: "Medan Kota",
            Url: "https://g.co/kgs/pnPMVTW",
            image: "KA.jpeg"
        },
        {
            name: "Mie Balap Seafood Putra Denai",
            rating: 4,
            description: "Known for its seafood-packed Mie Balap, a local noodle dish with a delicious broth.",
            location: "Medan Denai",
            Url: "https://g.co/kgs/exdBgHZ",
            image: "MBS.jpeg"
        },
        {
            name: "Pokat Kocok Buk Iyah Simpang Glugur",
            rating: 4,
            description: "Offering a unique variety of street snacks, with a special focus on fried foods.",
            location: "Medan Baru",
            Url: "https://g.co/kgs/GcrWiEX",
            image: "PKB.jpeg"
        },
        {
            name: "Mie Tiong Sim",
            rating: 4,
            description: "Serving authentic Tiong Sim noodles, known for its rich flavor and tender meat.",
            location: "",
            Url: "https://g.co/kgs/hwg87Aj",
            image: "MTS.jpeg"
        },
        {
            name: "Rm Acuan Pek Cam Kee",
            rating: 3,
            description: "Serving authentic Chinese Indonesian cuisine with a variety of noodle and rice dishes.",
            location: "Medan Area",
            Url: "https://g.co/kgs/Qhnk1f6",
            image: "RMAP.jpeg"
        },
        {
            name: "Nasi Goreng Komdak",
            rating: 4,
            description: "Famous for its fried rice, often served with additional protein options like chicken or beef.",
            location: "Medan Polonia",
            Url: "https://g.co/kgs/SyVgzPi",
            image: "NGK.jpeg"
        },
        {
            name: "Sate Padang Kupak",
            rating: 4,
            description: "Offering delicious Sate Padang with flavorful beef skewers and spicy peanut sauce.",
            location: "Medan Area",
            Url: "https://g.co/kgs/y7vNU6z",
            image: "SPK.jpeg"
        },
        {
            name: "Bakso Solo Pak Kumis",
            rating: 5,
            description: "Known for its rich and tender bakso (meatball soup), a favorite for many in Medan.",
            location: "Medan Area",
            Url: "https://g.co/kgs/kxTcivj",
            image: "BBA.jpeg"
        },
        {
            name: "Bihun Bebek Atak",
            rating: 5,
            description: "Serving bihun (rice vermicelli) and tender duck in a flavorful soup, a local specialty.",
            location: "Medan Kota",
            Url: "https://g.co/kgs/dQgQjtV",
            image: "BBA.jpeg"
        }, // 45 data
        {
            name: "Juadah Mamboria",
            rating: 4,
            description: "Known for its authentic Indonesian street food, offering a variety of flavorful dishes.",
            location: "Medan Petisah",
            Url: "https://g.co/kgs/N8J33NR",
            image: "JM.jpeg"
        },
        {
            name: "Nasi Goreng Pandu Julia Sari",
            rating: 4,
            description: "Famous for its delicious fried rice served with a variety of toppings like chicken or beef.",
            location: "Medan Kota",
            Url: "https://g.co/kgs/zgrpwru",
            image: "NGP.jpeg"
        },

        {
            name: "Murni Martabak Piring",
            rating: 5,
            description: "Specializes in Martabak Piring, a variation of martabak served on a plate with delicious fillings.",
            location: "Medan Kota",
            Url: "https://g.co/kgs/azSkDnN",
            image: "MMP.jpeg"
        },
        {
            name: "Mie Wak M",
            rating: 4,
            description: "Offering a range of traditional Indonesian noodle dishes with a strong local flavor.",
            location: "Medan Petisah",
            Url: "https://g.co/kgs/1vMYCHv",
            image: "MWM.jpeg"
        },
        {
            name: "Martabak Bangka Terang",
            rating: 4,
            description: "Famous for its sweet and savory Martabak Bangka, a popular street food choice in Medan.",
            location: "Medan Tembung",
            Url: "https://maps.app.goo.gl/Aw6KWSZHubqvBfxM6",
            image: "MBT.jpeg"
        },
        {
            name: "Bakso Lava Rawit",
            rating: 5,
            description: "Known for its spicy bakso (meatball soup), served with a flavorful broth and a fiery kick.",
            location: "Medan Tembung",
            Url: "https://maps.app.goo.gl/Z38qTXvPS9GrPZXQ6",
            image: "BLR.jpeg"
        },
        {
            name: "Batong Chasio",
            rating: 4,
            description: "Offering delicious Chasio (roast pork) served with rice or noodles, a Medan favorite.",
            location: "Medan Tembung",
            Url: "https://maps.app.goo.gl/drGLjJQT4CX1GPsq9",
            image: "BC2.jpeg"
        },
        {
            name: "Mie Balap UBB (Udangnya Besar-Besar)",
            rating: 4,
            description: "Specializing in seafood noodles with big shrimp, a hit among noodle lovers.",
            location: "Medan Tembung",
            Url: "https://maps.app.goo.gl/eRnPpEsUVwFXGWj2A",
            image: "MB.jpeg"
        },
        {
            name: "Juno Kebab and Burger",
            rating: 4,
            description: "Known for their delicious kebabs and juicy burgers, perfect for a quick meal.",
            location: "Medan Tembung",
            Url: "https://maps.app.goo.gl/yTNNwb55HcGPsHc67",
            image: "IMP.jpeg"
        },
        {
            name: "Ikcen Mie Pangsit Siantar",
            rating: 4,
            description: "A popular spot for mie pangsit (noodles and dumplings), a comforting street food dish.",
            location: "Medan Tembung",
            Url: "https://maps.app.goo.gl/TKj2acq4hoq9hsBq7",
            image: ".jpeg"
        },
        {
            name: "Mie Pangsit Wendo",
            rating: 4,
            description: "Famous for their mie pangsit with a choice of meat, offering a satisfying meal.",
            location: "Medan Tembung",
            Url: "https://maps.app.goo.gl/poenVHTvw65iHhXo8",
            image: "MPW.jpeg"
        },
        {
            name: "Kwetiau Cong Mei",
            rating: 4,
            description: "Serving stir-fried kwetiau (flat noodles) with a delicious mix of meats and vegetables.",
            location: "Medan Baru",
            Url: "https://g.co/kgs/Gc7ZnV5",
            image: "KCM.jpeg"
        },
        {
            name: "Martabak Royal Jumbo Cab Mandala",
            rating: 5,
            description: "Famous for its jumbo-sized martabak, offering a variety of fillings and served with special condiments.",
            location: "Medan Tembung",
            Url: "https://maps.app.goo.gl/PaGBsowJYAWJZoYk8",
            image: "MRJ.jpeg"
        },
        {
            name: "Mie Pangsit Aho",
            rating: 4,
            description: "Specializes in mie pangsit, known for its fresh ingredients and delicious broth.",
            location: "Medan Tembung",
            Url: "https://maps.app.goo.gl/hQCNvLgmjXwdnvSL6",
            image: "MPA.jpeg"
        }, //60 data
        {
            name: "Apau Mie Pangsit",
            rating: 4,
            description: "Known for its savory mie pangsit, served with fresh ingredients and a rich broth.",
            location: "Medan Tembung",
            Url: "https://maps.app.goo.gl/QcPutTYP8EzTmSsS9",
            image: "AMP2.jpeg"
        },
        {
            name: "Ahue Mie Pangsit",
            rating: 4,
            description: "Specializing in mie pangsit, a delicious noodle dish topped with flavorful meat and broth.",
            location: "Medan Tembung",
            Url: "https://maps.app.goo.gl/s6r9sZM5B4AZiFpi9",
            image: "AMP.jpeg"
        },
        {
            name: "Sate Padang Al'fresco",
            rating: 4,
            description: "Famous for serving sate padang, a spicy beef skewered dish served with rich and flavorful gravy.",
            location: "Medan Sunggal",
            Url: "https://maps.app.goo.gl/TdRSdvfR5q3jHdrP7",
            image: "SPA2.jpeg"
        },
        {
            name: "Egg Waffle Streetfood Mabar",
            rating: 4,
            description: "Serving delicious egg waffles, a crunchy and sweet street food favorite with a variety of toppings.",
            location: "Medan Deli",
            Url: "https://maps.app.goo.gl/xE7mJhc5h7XDdbk27",
            image: "EW.jpeg"
        },
        {
            name: "Pondok Zam-Zam",
            rating: 4,
            description: "Popular for its traditional Indonesian street food, offering a variety of tasty dishes.",
            location: "Medan Baru",
            Url: "https://maps.app.goo.gl/7xEYoXDP2S5BeyJ69",
            image: "PZZ.jpeg"
        }, //65 data
    ],
};
document.querySelector("button").addEventListener("click", function() {
    const foodType = document.getElementById("food-type").value; // Tipe makanan
    const rating = parseInt(document.getElementById("rating").value); // Rating
    const location = document.getElementById("location").value; // Lokasi
    const trendingSection = document.getElementById("trending-restaurants"); // Bagian Trending Restaurants

    if (!foodType || !rating) {
        alert("Please select the restaurant criteria!");
        return;
    }

    // Sembunyikan Trending Restaurants (tanpa memengaruhi Back to Home)
    if (trendingSection) {
        trendingSection.style.display = "none";
    }

    // Ambil data restoran berdasarkan tipe makanan
    const filteredRestaurants = restaurants[foodType].filter(
        (restaurant) =>
        restaurant.rating === rating &&
        restaurant.location === location
    );

    // Tampilkan hasilnya
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // Hapus hasil sebelumnya

    if (filteredRestaurants.length > 0) {
        filteredRestaurants.forEach((restaurant) => {
            const card = document.createElement("div");
            card.classList.add("restaurant-card");
            card.innerHTML = `
                <div class="restaurant-item">
                    <img src="${restaurant.image}" alt="${restaurant.name}" class="restaurant-image" />
                    <div class="restaurant-info">
                        <a href="${restaurant.Url}" target="_blank">
                            <h3>${restaurant.name}</h3>
                        </a>
                        <p><strong>Rating:</strong> ${restaurant.rating}/5</p>
                        <p><strong>Location:</strong> ${restaurant.location}</p>
                        <p>${restaurant.description}</p>
                        <p><em>Click the restaurant name to visit the official Website.</em></p>
                    </div>
            `;
            resultsDiv.appendChild(card);
        });
    } else {
        resultsDiv.innerHTML = "<p>There are no restaurants that fit the criteria.</p>";
    }
});