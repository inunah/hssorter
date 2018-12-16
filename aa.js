// 2008/7/3 Scripted by K-Factory@migiwa
// 2009/1/27 Modified by K-Factory@migiwa

// *****************************************************************************
str_CenterT = 'Tie!';
str_CenterB = 'Undo last choice';

str_ImgPath = 'http://i.imgur.com/';
var bln_ResultMode = 1;
var int_ResultImg = 2;
var int_ResultRank = 3;

var bln_ResultStyle = 0;

var bln_ProgessBar = 1;

var int_Colspan = 3;
var ary_TitleData = [
   "Homestuck Humans",
   "Homestuck Trolls",
   "Homestuck Misc",
   "Hiveswap Humans",
   "Hiveswap Trolls",
   "Hiveswap Misc",
];

var ary_CharacterData = [
   [1, "John Egbert",			[1,0,0,0,0,0], "wCCmlzM.png"],
   [1, "Jane Crocker",			[1,0,0,0,0,0], "E2Y1z8D.png"],
   [1, "Rose Lalonde",		[1,0,0,0,0,0], "UoebLtt.png"],
   [1, "Roxy Lalonde",		[1,0,0,0,0,0], "c9fyb4h.png"],
   [1, "Dave Strider",			[1,0,0,0,0,0], "hdw1Nch.png"],
   [1, "Dirk Strider",			[1,0,0,0,0,0], "t0HIM2L.png"],
   [1, "Jade Harley",			[1,0,0,0,0,0], "Ov8Ephv.gif"],
   [1, "Jake English",			[1,0,0,0,0,0], "8vbyLio.png"],
   [1, "Dad Egbert",			[1,0,0,0,0,0], "LgpjCi1.png"],
   [1, "Nanna Egbert",		[1,0,0,0,0,0], "BH2FyGK.png"],
   [1, "Dad Crocker",			[1,0,0,0,0,0], "LgpjCi1.png"],
   [1, "Poppop Crocker",		[1,0,0,0,0,0], "BI4IBwb.png"],
   [1, "Beta Mom Lalonde",		[1,0,0,1,0,0], "94K7VWO.png"],
   [1, "Alpha Mom Lalonde",		[1,0,0,0,0,0], "WpQmYtV.png"],
   [1, "Beta Bro Strider",		[1,0,0,0,0,0], "kmhjJAH.png"],
   [1, "Alpha Bro Strider",		[1,0,0,0,0,0], "XCXErrA.png"],
   [1, "Grandpa Harley",		[1,0,0,1,0,0], "IDh8nTt.png"],
   [1, "Grandma English",		[1,0,0,0,0,0], "bJcdFRT.png"],
   [1, "Becquerel",			[0,0,1,0,0,0], "A6QonIA.png"],
   [1, "God Cat",			[0,0,1,0,0,0], "N19sayA.png"],
   [1, "Jaspers / Frigglish",		[0,0,1,0,0,0], "hCRMG7q.png"],
   [1, "Vodka Mutini / Dr. Meowgon Spengler",	[0,0,1,0,0,0], "S1otVDc.png"],
   [1, "Lil Cal",			[0,0,1,0,0,0], "wuwsm1b.png"],
   [1, "Lil Hal",			[0,0,1,0,0,0], "glWPDCL.png"],
   [1, "Lil Sebastian",			[0,0,1,0,0,0], "f1r2kp1.png"],
   [1, "Colonel Sassacre",		[1,0,0,0,0,0], "GvxlOlg.png"],
   [1, "Andrew Hussie",		[1,0,0,0,0,0], "drkcZap.png"],
   [1, "MSPA Reader",		[1,0,0,1,0,0], "LhpE2YP.gif"],
   [1, "Aradia Megido",		[0,1,0,0,0,0], "OdO5ZE8.png"],
   [1, "Damara Megido",		[0,1,0,0,0,0], "8tCzTVy.png"],
   [1, "The Handmaid",		[0,1,0,0,0,0], "dlfwUXn.gif"],
   [1, "Tavros Nitram",		[0,1,0,0,0,0], "Vs2oT2x.png"],
   [1, "Rufioh Nitram",		[0,1,0,0,0,0], "lKhXfnN.png"],
   [1, "The Summoner",		[0,1,0,0,0,0], "lQ1SF7O.png"],
   [1, "Sollux Captor",			[0,1,0,0,0,0], "oa06DAI.png"],
   [1, "Mituna Captor",		[0,1,0,0,0,0], "3oowsap.png"],
   [1, "The ?iioniic / The Helmsman",	[0,1,0,0,0,0], "LZ0SAaa.gif"],
   [1, "Karkat Vantas",		[0,1,0,0,0,0], "6ObfOrQ.png"],
   [1, "Kankri Vantas",		[0,1,0,0,0,0], "o82QXoX.png"],
   [1, "The Signless / The Sufferer",	[0,1,0,0,0,0], "SZ6tiY1.gif"],
   [1, "Nepeta Leijon",		[0,1,0,0,0,0], "eq1kD8J.png"],
   [1, "Meulin Leijon",		[0,1,0,0,0,0], "2s0Xq5N.png"],
   [1, "The Disciple",			[0,1,0,0,0,0], "vzzYnt5.gif"],
   [1, "Kanaya Maryam",		[0,1,0,0,0,0], "Rmfuvic.png"],
   [1, "Porrim Maryam",		[0,1,0,0,0,0], "HfPIW8n.png"],
   [1, "The Dolorosa",		[0,1,0,0,0,0], "uFq90HN.gif"],
   [1, "Terezi Pyrope",		[0,1,0,0,0,0], "9P7ho53.png"],
   [1, "Latula Pyrope",		[0,1,0,0,0,0], "HXpKznx.png"],
   [1, "Neophyte Redglare",		[0,1,0,0,0,0], "Z7zQA2r.gif"],
   [1, "Vriska Serket",			[0,1,0,0,0,0], "ahV4mZk.png"],
   [1, "Aranea Serket",		[0,1,0,0,0,0], "GrcuVFO.png"],
   [1, "Marquise Spinneret Mindfang",	[0,1,0,0,0,0], "4yiDtiB.gif"],
   [1, "Equius Zahhak",		[0,1,0,0,0,0], "pDcXehu.png"],
   [1, "Horuss Zahhak",		[0,1,0,0,0,0], "EcgN8zb.png"],
   [1, "E%ecutor Darkleer / The Expatri8",	[0,1,0,0,0,0], "3evPS0p.gif"],
   [1, "Gamzee Makara",		[0,1,0,0,0,0], "2Y8pSWP.png"],
   [1, "Kurloz Makara",		[0,1,0,0,0,0], "IW66QZR.png"],
   [1, "The Grand Highblood",		[0,1,0,0,0,0], "U63d17U.gif"],
   [1, "Eridan Ampora",		[0,1,0,0,0,0], "cLu3ssH.png"],
   [1, "Cronus Ampora",		[0,1,0,0,0,0], "XDndQQR.png"],
   [1, "Orphaner Dualscar",		[0,1,0,0,0,0], "ql41l14.gif"],
   [1, "Feferi Peixes",			[0,1,0,0,0,0], "DWojq7v.png"],
   [1, "Meenah Peixes",		[0,1,0,0,0,0], "LSrw9YN.png"],
   [1, "Her Imperious Condescension",	[0,1,0,0,0,0], "y8bZrGn.gif"],
   [1, "Aradia's Lusus",		[0,0,1,0,0,0], "wlVkD8C.png"],
   [1, "Tinkerbull",			[0,0,1,0,0,0], "P6aOSuW.png"],
   [1, "Bicyclops",			[0,0,1,0,0,0], "fOivsTz.png"],
   [1, "Karkat's Lusus",		[0,0,1,0,0,0], "pT89yIz.png"],
   [1, "Pounce de Leon",		[0,0,1,0,0,0], "tzq8tEh.png"],
   [1, "Virgin Mother Grub",		[0,0,1,0,0,0], "PqlaHL3.png"],
   [1, "Terezi's Lusus",		[0,0,1,0,0,0], "xUHlsUn.png"],
   [1, "Spidermom",			[0,0,1,0,0,0], "fwd7yAk.png"],
   [1, "Aurthour",			[0,0,1,0,0,0], "uAmjttn.png"],
   [1, "Gamzee's Lusus",		[0,0,1,0,0,0], "nrXBrV4.png"],
   [1, "Eridan's Lusus",		[0,0,1,0,0,0], "mqGpQWc.png"],
   [1, "Gl'bgolyb",			[0,0,1,0,0,0], "7tbMi4N.png"],
   [1, "Doc Scratch",			[0,0,1,0,0,1], "5c8KHEY.gif"],
   [1, "Nannasprite",			[0,0,1,0,0,0], "aMuWfCN.png"],
   [1, "Jaspersprite",			[0,0,1,0,0,0], "ykJlA7B.png"],
   [1, "Davesprite",			[0,0,1,0,0,0], "dA86I7U.png"],
   [1, "Calsprite",			[0,0,1,0,0,0], "onzapnR.png"],
   [1, "Jadesprite",			[0,0,1,0,0,0], "fkKt7xX.png"],
   [1, "Tavrisprite",			[0,0,1,0,0,0], "UUIbqws.png"],
   [1, "Gcatavrosprite",		[0,0,1,0,0,0], "xo0qO8P.png"],
   [1, "Fefetasprite",			[0,0,1,0,0,0], "3amXoeX.png"],
   [1, "Jasprosesprite^2",		[0,0,1,0,0,0], "irIDvKe.gif"],
   [1, "ARquiusprite",		[0,0,1,0,0,0], "7Oivqq9.png"],
   [1, "Erisolsprite",			[0,0,1,0,0,0], "yHh4dAJ.png"],
   [1, "Davepetasprite^2",		[0,0,1,0,0,0], "XfG9Acn.gif"],
   [1, "Wayward Vagabond / The Mayor",	[0,0,1,0,0,0], "8SD8S2K.png"],
   [1, "Peregrine Mendicant",		[0,0,1,0,0,0], "3TC3Zmd.png"],
   [1, "Aimless Renegade",		[0,0,1,0,0,0], "PBcIhth.png"],
   [1, "Windswept Questant",		[0,0,1,0,0,0], "ZG515ei.png"],
   [1, "Writ Keeper",			[0,0,1,0,0,0], "SeBvYMd.png"],
   [1, "Jack Noir",			[0,0,1,0,0,0], "nJfiMzM.png"],
   [1, "Draconian Dignitary",		[0,0,1,0,0,0], "UQnsufH.png"],
   [1, "Hearts Boxcars",		[0,0,1,0,0,0], "DQ0Oxuo.png"],
   [1, "Courtyard Droll",		[0,0,1,0,0,0], "UxarFXf.png"],
   [1, "Spades Slick",			[0,0,1,0,0,0], "s2tTQyB.png"],
   [1, "Diamonds Droog",		[0,0,1,0,0,0], "EctZh8n.png"],
   [1, "Clubs Deuce",			[0,0,1,0,0,0], "51616uN.png"],
   [1, "Lord English",			[0,0,1,0,0,0], "0JTNXJZ.gif"],
   [1, "Snowman",			[0,0,1,0,0,0], "nVaCAxv.png"],
   [1, "Black King",			[0,0,1,0,0,0], "kN9L15H.png"],
   [1, "Black Queen",			[0,0,1,0,0,0], "woN7Rko.png"],
   [1, "Genesis Frog",			[0,0,1,0,0,0], "rmRbttj.png"],
   [1, "Casey / Viceroy Bubbles",	[0,0,1,0,0,0], "GkDtPIO.png"],
   [1, "Guy Fieri",			[0,0,1,0,0,0], "yGNPjvC.png"],
   [1, "Violent J",			[0,0,1,0,0,0], "kYcT9FD.png"],
   [1, "Shaggy 2 Dope",		[0,0,1,0,0,0], "jXYnxt6.png"],
   [1, "Maplehoof",			[0,0,1,0,0,0], "YNbmydo.png"],
   [1, "Rambunctious Crow",		[0,0,1,0,0,0], "LFemaPC.png"],
   [1, "Halley",			[0,0,1,0,0,0], "QE53ubR.png"],
   [1, "Serenity",			[0,0,1,0,0,0], "UTussYN.gif"],
   [1, "Ms. Paint",			[0,0,1,0,0,0], "fzs7j6T.png"],
   [1, "Sawtooth",			[0,0,1,0,0,0], "h7k9mCN.png"],
   [1, "Squarewave",			[0,0,1,0,0,0], "bZkBqlZ.png"],
   [1, "His Honorable Tyranny",		[0,0,1,0,0,0], "fMlMa2J.gif"],
   [1, "Calliope",			[0,0,1,0,0,0], "3XDXo6w.png"],
   [1, "Caliborn",			[0,0,1,0,0,0], "kKoMGYA.png"],
   [1, "Calliope & Caliborn's Mother",	[0,0,1,0,0,0], "R0x2ebh.png"],
   [1, "Calliope & Caliborn's Father",	[0,0,1,0,0,0], "iPJTQSD.png"],
   [1, "Joey Claire",			[0,0,0,1,0,0], "FEXxXT8.png"],
   [1, "Jude Harley",			[0,0,0,1,0,0], "3WFNyDv.png"],
   [1, "A Claire",			[0,0,0,1,0,0], "BQ8JsG0.png"],
   [1, "Tetrarch Dammek",		[0,0,0,0,1,0], "GTt0e4A.png"],
   [1, "Xefros Tritoh",		[0,0,0,0,1,0], "f1VeBC4.png"],
   [1, "Trizza Tethis",			[0,0,0,0,1,0], "DrTBYlz.png"],
   [1, "Ardata Carmia",		[0,0,0,0,1,0], "IfMPquA.png"],
   [1, "Diemen Xicali",		[0,0,0,0,1,0], "4NRFiGF.png"],
   [1, "Cirava Hermod",		[0,0,0,0,1,0], "nr6iP81.png"],
   [1, "Amisia Erdehn",		[0,0,0,0,1,0], "nebthEv.png"],
   [1, "Bronya Ursama",		[0,0,0,0,1,0], "0sc3pqD.png"],
   [1, "Skylla Koriga",			[0,0,0,0,1,0], "9FH24Xw.png"],
   [1, "Tagora Gorjek",		[0,0,0,0,1,0], "YfUsgng.png"],
   [1, "Vikare Ratite",			[0,0,0,0,1,0], "ulFrK4U.png"],
   [1, "Polypa Goezee",		[0,0,0,0,1,0], "cfMHXHe.png"],
   [1, "Zebruh Codakk",		[0,0,0,0,1,0], "qboc7xV.png"],
   [1, "??? Elwurd",			[0,0,0,0,1,0], "09ERfX7.png"],
   [1, "Folykl Darane",		[0,0,0,0,1,0], "Gpugqt1.png"],
   [1, "Kuprum Maxlol",		[0,0,0,0,1,0], "S6M0S10.png"],
   [1, "Remele Namaaq",		[0,0,0,0,1,0], "mKyWrbS.png"],
   [1, "Konyll Okimaw",		[0,0,0,0,1,0], "5iooL49.png"],
   [1, "Chixie Roixmr",			[0,0,0,0,1,0], "9pDlgby.png"],
   [1, "Tyzias Entykk",		[0,0,0,0,1,0], "fT5rtli.png"],
   [1, "Chahut Maenad",		[0,0,0,0,1,0], "7zNEPZS.png"],
   [1, "Azdaja Knelax",		[0,0,0,0,1,0], "HQchsX7.png"],
   [1, "Zebede Tongva",		[0,0,0,0,1,0], "nRzITzS.png"],
   [1, "Tegiri Kalbur",			[0,0,0,0,1,0], "zOmqWKO.png"],
   [1, "Mallek Adalov",		[0,0,0,0,1,0], "3RAGIvo.png"],
   [1, "Lynera Skalbi",			[0,0,0,0,1,0], "885p2ma.png"],
   [1, "Galekh Xigisi",			[0,0,0,0,1,0], "7YWB9nH.png"],
   [1, "Tirona Kasund",		[0,0,0,0,1,0], "vClP2ys.png"],
   [1, "Boldir Lamati",			[0,0,0,0,1,0], "VQzKDXZ.png"],
   [1, "Stelsa Sezyat",			[0,0,0,0,1,0], "yVH2VE4.png"],
   [1, "Karako Pierot",		[0,0,0,0,1,0], "12nseeF.png"],
   [1, "Marsti Houtek",		[0,0,0,0,1,0], "R2WurX7.png"],
   [1, "Charun Krojib",		[0,0,0,0,1,0], "mITtiPY.png"],
   [1, "Wanshi Adyata",		[0,0,0,0,1,0], "UbdiujZ.png"],
   [1, "Fozzer Velyes",		[0,0,0,0,1,0], "pohLfZ1.png"],
   [1, "Marvus Xoloto",		[0,0,0,0,1,0], "vuk7r97.png"],
   [1, "Daraya Jonjet",		[0,0,0,0,1,0], "0Nyfycn.png"],
   [1, "Nihkee Moolah",		[0,0,0,0,1,0], "27UgqsX.png"],
   [1, "Lanque Bombyx",		[0,0,0,0,1,0], "4awxbxO.png"],
   [1, "Barzum Soleil",			[0,0,0,0,1,0], "8UZ9WAP.png"],
   [1, "Baizli Soleil",			[0,0,0,0,1,0], "AT7mRkf.png"],
];
