var _0x3c74c6 = function () {
  var _0x4f0ce9 = true;
  return function (_0x53a2b1, _0x296c03) {
    var _0x22f5e7 = _0x4f0ce9 ? function () {
      if (_0x296c03) {
        var _0x49642f = _0x296c03.apply(_0x53a2b1, arguments);
        _0x296c03 = null;
        return _0x49642f;
      }
    } : function () {};
    _0x4f0ce9 = false;
    return _0x22f5e7;
  };
}();
var _0x1c5688 = _0x3c74c6(this, function () {
  var _0x53fb83 = function () {
    var _0x1707a0;
    try {
      _0x1707a0 = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x250ba7) {
      _0x1707a0 = window;
    }
    return _0x1707a0;
  };
  var _0x4541fd = _0x53fb83();
  var _0x55b66e = new RegExp("[qUZqOjhydPhrAIwZNwudXWwwSTDMZV]", 'g');
  var _0x18682d = "qfUc24pZoqOjinhydtPhrAIsw.ZNcwuodmXWwwSTDMZV".replace(_0x55b66e, '').split(';');
  var _0xba8708;
  var _0x461bb4;
  var _0x1eca5f;
  var _0xaed43a;
  var _0x1b12fd = function (_0x42cc04, _0x428f2d, _0x194fd3) {
    if (_0x42cc04.length != _0x428f2d) {
      return false;
    }
    for (var _0x5be663 = 0x0; _0x5be663 < _0x428f2d; _0x5be663++) {
      for (var _0x3b44dd = 0x0; _0x3b44dd < _0x194fd3.length; _0x3b44dd += 0x2) {
        if (_0x5be663 == _0x194fd3[_0x3b44dd] && _0x42cc04.charCodeAt(_0x5be663) != _0x194fd3[_0x3b44dd + 0x1]) {
          return false;
        }
      }
    }
    return true;
  };
  for (var _0x1e4b96 in _0x4541fd) {
    if (_0x1b12fd(_0x1e4b96, 0x8, [0x7, 0x74, 0x5, 0x65, 0x3, 0x75, 0x0, 0x64])) {
      _0xba8708 = _0x1e4b96;
      break;
    }
  }
  for (var _0x358960 in _0x4541fd[_0xba8708]) {
    if (_0x1b12fd(_0x358960, 0x6, [0x5, 0x6e, 0x0, 0x64])) {
      _0x461bb4 = _0x358960;
      break;
    }
  }
  for (var _0x5c3f11 in _0x4541fd[_0xba8708]) {
    if (_0x1b12fd(_0x5c3f11, 0x8, [0x7, 0x6e, 0x0, 0x6c])) {
      _0x1eca5f = _0x5c3f11;
      break;
    }
  }
  if (!('~' > _0x461bb4)) {
    for (var _0x482786 in _0x4541fd[_0xba8708][_0x1eca5f]) {
      if (_0x1b12fd(_0x482786, 0x8, [0x7, 0x65, 0x0, 0x68])) {
        _0xaed43a = _0x482786;
        break;
      }
    }
  }
  if (!_0xba8708 || !_0x4541fd[_0xba8708]) {
    return;
  }
  var _0x3b3337 = _0x4541fd[_0xba8708][_0x461bb4];
  var _0x21fad6 = !!_0x4541fd[_0xba8708][_0x1eca5f] && _0x4541fd[_0xba8708][_0x1eca5f][_0xaed43a];
  var _0x4222a2 = _0x3b3337 || _0x21fad6;
  if (!_0x4222a2) {
    return;
  }
  var _0x1edc89 = false;
  for (var _0x2220e9 = 0x0; _0x2220e9 < _0x18682d.length; _0x2220e9++) {
    var _0x461bb4 = _0x18682d[_0x2220e9];
    var _0x2c4466 = _0x461bb4[0x0] === String.fromCharCode(0x2e) ? _0x461bb4.slice(0x1) : _0x461bb4;
    var _0x4e745f = _0x4222a2.length - _0x2c4466.length;
    var _0x6340c1 = _0x4222a2.indexOf(_0x2c4466, _0x4e745f);
    var _0x486f04 = _0x6340c1 !== -0x1 && _0x6340c1 === _0x4e745f;
    if (_0x486f04) {
      if (_0x4222a2.length == _0x461bb4.length || _0x461bb4.indexOf('.') === 0x0) {
        _0x1edc89 = true;
      }
    }
  }
 
});
_0x1c5688();
var audioElement = document.createElement('audio');
function audio(_0x5e2181) {
  audioElement.setAttribute("src", _0x5e2181);
  audioElement.pause();
  audioElement.currentTime = 0x0;
  audioElement.play();
}
let platformImg;
let pointsImg;
let coinsImg;
let username;
let game;
let selectedPoints;
let selectedCoins = '';
$(".btn-game").click(function () {
  audio("https://www.eafc25points.com/assets/audio/button.mp3");
  game = $(this).attr('data-type');
  $(".step-0").addClass("animate__fadeOutLeft");
  $('.' + game).css("display", "flex");
  $('.' + game + "-points").css("display", "flex");
  setTimeout(function () {
    $(".step-0").css('display', "none");
    $(".step-1").css("display", 'block');
  }, 0x1f4);
});
$(".btn-platform").click(function () {
  audio("https://www.eafc25points.com/assets/audio/button.mp3");
  platformImg = $(this).find("img").attr("src");
  $('.step-1').addClass('animate__fadeOutLeft');
  setTimeout(function () {
    $(".step-1").css("display", "none");
    $(".step-2").css("display", "block");
  }, 0x1f4);
});
$("#continue").click(function () {
  username = $("input[name=\"username\"]").val();
  if (!username) {
    audio("https://www.eafc25points.com/assets/audio/error.mp3");
    alert("Username is required!");
  } else {
    audio("https://www.eafc25points.com/assets/audio/button.mp3");
    $(".step-2").removeClass("animate__fadeInRight").addClass("animate__fadeOutLeft");
    setTimeout(function () {
      $(".step-2").css("display", 'none');
      $(".step-3").css("display", "block");
    }, 0x1f4);
  }
});
$(".btn-points").click(function () {
  audio("https://www.eafc25points.com/assets/audio/button.mp3");
  selectedPoints = $(this).attr("data-points");
  pointsImg = $(this).attr("src");
  $(".step-3").removeClass("animate__fadeInRight").addClass("animate__fadeOutLeft");
  setTimeout(function () {
    $(".step-3").css("display", "none");
    $(".step-4").css("display", "block");
  }, 0x1f4);
});
$('.btn-coins').click(function () {
  audio("https://www.eafc25points.com/assets/audio/button.mp3");
  selectedCoins = $(this).attr("data-coins");
  coinsImg = $(this).attr("src");
  $(".info-section h3").text(username);
  $(".info-section .platform-info").attr("src", platformImg);
  $(".info-section .points-info").attr("src", pointsImg);
  $(".info-section .coins-info").attr("src", coinsImg);
  $('.step-4').removeClass("animate__fadeInRight").addClass("animate__fadeOutLeft");
  setTimeout(function () {
    $(".step-4").css("display", "none");
    $('.step-5').css("display", 'block');
  }, 0x1f4);
});
$("#next").click(function () {
  $(".step-5").removeClass("animate__fadeInRight").addClass('animate__fadeOutLeft');
  setTimeout(function () {
    $(".step-5").css('display', "none");
    $(".step-6").css("display", "block");
    setTimeout(function () {
      $(".generation-text").html("Connected successfully!");
      setTimeout(function () {
        $('.generation-text').html("User verification...");
        setTimeout(function () {
          $(".generation-text").html(username + " verified!");
          setTimeout(function () {
            $('.generation-text').html("<span><img src=\"https://www.eafc25points.com/assets/images/points.png\" width=\"25\" class=\"mr-1\"> Points Generating: <span class=\"text-danger counting\">0</span>");
            plusCount(parseInt(selectedPoints), 0x0, '.counting', function () {
              setTimeout(function () {
                $(".generation-text").html("<img src=\"https://www.eafc25points.com/assets/images/points.png\" width=\"25\" class=\"mr-1\"> <span class=\"text-danger\">" + selectedPoints + "</span> <span>points ready!");
                setTimeout(function () {
                  $(".generation-text").html("<img src=\"https://www.eafc25points.com/assets/images/coins.png\" width=\"25\" class=\"mr-1\"> <span class=\"text-danger\">" + selectedCoins + "</span> <span>coins ready!");
                  setTimeout(function () {
                    $("#verify").css("display", 'inline-block');
                    $(".generation-text").html("<div class=\"text-center text-danger\">One Last step!</div>                \t\t\t\t\t\t\t\t\t\t\t<div class=\"mt-2\">                \t\t\t\t\t\t\t\t\t\t\t<div class=\"ads\"></div>                \t\t\t\t\t\t\t\t\t\t\t</div>                \t\t\t\t\t\t\t\t\t\t\t");
                  }, 0xfa0);
                }, 0xbb8);
              }, 0xbb8);
            });
          }, 0xbb8);
        }, 0xbb8);
      }, 0xdac);
    }, 0xdac);
  }, 0x1f4);
});
// function verify() {
//   $.ajax({
//     'method': "POST",
//     'url': "actions/url.php",
//     'dataType': "JSON",
//     'data': {
//       'type': 0x1
//     },
//     'success': function (_0x3f731f) {
//       if (_0x3f731f.type == 0x1) {
//         call_locker();
//       } else {
//         if (_0x3f731f.type == 0x2) {
//           window.location.href = _0x3f731f.link;
//         } else if (_0x3f731f.type == 0x3) {
//           $(".ads").html(_0x3f731f.feed);
//         }
//       }
//       console.log(_0x3f731f);
//     }
//   });
// }
var users = ["TurtletheCat", 'Pobelter', "EugeneJPark", "Doublelift", "C9Sneaky", "lamBjerg", 'Popobelterold', "HOGEE", 'WizFujiiN', "HotGuy6Pack", 'dawoofsclaw', "TiPApollo", "Soeren", "FSNChunkyfresh", "Ariana22ROO", 'Waker', 'Podu', "C9Hard", "Shiphtur", "HOoZy", 'Chapanya', "Dyrus", "Entranced", "WildTurtle", "WildTurtl", 'lntense', "Hauntzer", "LiquidFeniX", 'THExJOHNxCENA555', 'Imaqtpie', "ZionSpartan", "JJackstar", 'Ekkocat', "LiquidKEITH", "mldkingking", "Loopercorn", "TiPMa", 'Ohhhq', "ninjamaster69xxx", "CaliTrlolz8", "ice", "C9Meteos", "JannaMechanics", 'KEITHMCBRIEF', "dunamis", "Quasmire", "scorro", "LiquidQuas", 'GVHauntzer', "PengYiliang", "Casely", "wahoolahoola", "godisfeng66666", 'Zbuum', 'ilovefatdongs', "TransIogic", "LemonBoy", 'Link', "Chipotlehunter", "TDKkina", 'DJTrance', "Duocek", "Hate", 'KonKwon', "Nihillmatic", "Zaryab", "intero", "Biofrost", "LongCat4", "CSTJesiz", "GVKeane", 'TiPyoondog', "RedoutabIe", 'LiquidXpecial', "JayJ", "GVCop", "iKeNNyu", 'C9Hai', 'FunFrock', "CLGLourlo", "evertan", "Chaullenger", "Aniratak", 'PorpoiseDeluxe', "Isuyu", "CLGDandyLite", "Arcsecond", "BloodWater", "Jynthe", "Sickoscott", "RickyTang", 'DaBox', "ALLRekklesvNA", "Hoofspark", "DuBuKiD", "AdrianMa", 'GuriAndGunji', "stuntopia", "RyanChoi", 'AiShiTeru', "FSNMeMer", "J0kes", "C9Balls", "C9SoIo", "yungmulahBABY", "FeelTheLove", "dawolfsclaw", "BaamSouma", 'NMEotter', "stuntopolis", "llRomell", 'GoJeongPa', 'p0z', "Trisexual", "MarkPassion", "Seeiya", "AAltec", "C9LemonNation", "maplestreet8", "goldenglue", "MegaZero", "VIPEEEEEEEEEEEER", "Panchie", "fabbbyyy", 'halo3madsniper', 'iLucent', '1k2o1ko12ko12ko2', "Bokbokimacat", "VANISHINGDRAG0N", "LiquidPiglet", "playmkngsupport", "Gambler", "Gaggiano", 'JJayel', "JoopsaKid", "1brayle", "Azingy", "Kebrex", "WahzYan", "willxo", 'TailsLoL', "darksnipa47", "Thyak", "JimmyTalon", "vane", 'sooyoung', "lalaisland", "Lourlo", "Sunar", "PlayWithAnimals", "scarra", 'HUYAGorilIA', "Lock0nStratos", 'aphromoo', "KMadClown", "ChaIlengerAhri", "YY90001PiKaChu", "Thefatkidfromup", "ahqwe5tdoor", "Nintenpai", 'JustJayce', "toontown", "BasedYoona", "GoldStars", 'ExecutionerKen', "nicemoves", "InvertedComposer", "LiquidIWD", "Stan007", 'woshishabi', "JukeKing", "xPecake", "BlGHUEVOS", "Plun", 'KingCobra', "TDKSmoothie", "TSMLustboy", "C10Meteos", "lllllllllllllIII", "ohdaughter", "PekinWoof", "BrandonFtw8", 'm2sticc', "DaiJurJur", "DontMashMe", "CaseOpened", "otte", "wutroletoplay", "Thurtle", "Dodo8", "Frostalicious", 'bobqinXD', 'MrCarter', "Hellkey", 'Chimonaa1', "DaBoxII", "GVVicious", "Jummychu", "PAlNLESS", 'LiLBunnyFuFuu', "Lukeeeeeeeeee", 'Lattman', 'Daserer', "AlliancePatrick", 'Lionsexual', 'St1xxay', "Kojolika", 'CSTCris', "KojotheCat", 'StellaLoussier', "Gleebglarbu", "Altrum", "RiotMeyeA", "Rule18", "mandatorycloud", "Tritan", 'LiquidDominate', 'cidadedecack', "RoA", "BillyBoss", "xPepastel", "TaketheDraw", "ST2g", 'Migipooop', "dKiWiKid", "NMEflareszx", "Gundamu", "imp", 'DDABONG', "Daydreamin", "Nightlie", "MRHIGHLIGHTREEL", "Shweeb", 'JinMori', "Tailsz", 'Bischu', "CRBRakin", 'Chaox', "Grigne", "LogicalDan", "DAKular", "DifferentSword", "Geranimoo", "InnoX", "FishingforUrf", "FluffyKittens206", "ImJinAh", "CloudNguyen", "moonway", "whoishe", "TiensiNoAkuma", "Ethil", "nothinghere", "SuperMetroid", "hiimgosu", "Mammon", "BGJessicaJung", 'coBBz', "waitingforu", "LearningToPIay", "YiOwO", "heavenTime", "AnDa", 'WakaWaka', "hashinshin", "TDKKez", 'MariaCreveling', "Cypress", 'YahooDotCom', "Phanimal", "Aror", "RFLegendary", 'BenNguyen', 'AHHHHHHHHH', 'Linsanityy', "Valkrin", "Gate", 'Allorim', "Johnp0t", "Superrrman", "Laughing", "AKAPapaChau", "denoshuresK", 'Anthony', "Nightblue3", "Aranium", 'Pallione', "BamfDotaPlayer", "FakerSama", "xiaolan", "Sweept", "HooManDu", "XiaoWeiXiao", "HctMike", 'Revenge', "Apauloh", "latebloomer", "CRBFyre", 'MongolWarrior', 'Hiphophammer', "CoachLFProTeam", "hiimria", "Jackoo", "Saskio", "DadeFakerPawn", "GVStvicious", "NeonSurge", "NMEBodydrop", 'MatLifeTriHard', "PantsareDragon", "GinormousNoob", "IMbz", "miqo", "VoyboyCARRY", "Hakuho", "Hexadecimal", "themassacre8", "Ayr", 'SeaHorsee', "F0rtissimo", "GamerXz", "Remie", 'Soghp', 'Raimazz', "Ultimazero", 'bigfatlp', 'NMETrashyy', "C9LOD", "Popuh", 'SAGASUPVEIGM', "Iamagoodboy", 'TrollerDog', "Descraton", "LiquidInoriTV", 'MiniMe', "IlIlIIIlIIIIlIII", "Shweebie", "KatLissEverdeen", "PoppersOP", "B1GKr1T", "DGB", "stephyscute2", 'TEESEMM', 'Cyprincess', "baohando", "urbutts", "maplestreeTT", 'jamee', 'SawitonReddit', "VeryBitter", 'BenignSentinel', 'MrJuvel', 'Denny', "LeeGuitarStringa", "DKrupt", "LAGEhsher", 'eLLinOiSe', 'MochiBalls', "Sonnynot6", "ixou", "Taeyawn", 'Dezx', "7hThintoN", 'BeautifulKorean', 'VwSTeesum', "TLIWDominate", "Vsepr", 'ktSmurf', "Vultix", "Soredemo", 'ROBERTxLEE', "AnnieBot", 'aksn1per', "IamFearless", "FrostyLights", "SoYung", "Tuoooor", 'Polx', 'Agolite', "CloudWater", "Delta", "LAGOrbwalk", "sexycan", 'SimonHawkes', "Rohammers", 'NMEInnoX', 'ChineseJester', "IAmDoughboy", "Cytosine", "Vanxer", "SDiana2", "Araya", 'TheItalianOne', 'F1Flow', "Kazahana", "Malajukii", "xiaoweiba", "JoshMabrey", "shinymew", "Event", 'freelancer18', "ZnipetheDog", "hiitsviper", "HappyBirfdizzay", "Abou222", "Gir1shot2diamond", "KiNGNidhogg", "PurpleFloyd", 'Rathul', "Kwaku", 'BeachedWhaIe', '14h', 'Xpecial', "CLGThink", "Aiciel", "oerh", 'butttpounder', "TalkPIayLove", "jordank", "TwistyJuker", 'MeganFoxisGG', "NiHaoDyLan", 'TallerACE', "Doomtrobo", "Wardrium", "TwtchTviLoveSezu", 'Westrice', 'iMysterious', "BennyHung", "EnmaDaiO", "xTc4", 'FallenBandit', 'RumbIeMidGG', "deft1", "GochuHunter", "XxRobvanxX", "DuoChiDianShi", "coLBubbadub", "LeBulbe", "TanHat", "Dusty", "Jibberwackey", 'Tallwhitebro', 'llllllllllllIIII', "LilBuu", "Diamond", 'cesuna', "BigolRon", "xSojin", "Gh3ttoWatermelon", "KingofMemes", "111094Jrh", "bive", "Yammy", "FasScriptor", "Docxm", "GVBunnyFuFuu", "Alphabetical", "Liquidzig", 'YouHadNoDream', "TINYHUEVOS", "Sheepx", "GangstaSwerve", "LeBulbetier", "amandagugu", "Rushmore", "AnnieCHastur", "OverlordForte", 'Muffintopper66', "Kazura", "zetsuen", "wozhixiangyin", "CaptainNuke", 'alextheman', "Seongmin", "Working", "kyaasenpaix3", 'gurminder', "VwSKhoachitizer", "TGZ", "KrucifixKricc", "Kevnn", 'Academiic', 'ArianaLovato', 'Elemia', "CLGDeftsu", "XerbeK", 'CeIestic', 'RedEyeAkame', "Kerpal", "xFSNSaber", "MakNooN", "Hcore", "MrGamer", "zeralf", "Fenixlol", "Indivisible", 'SHOWMETHEMONEY', "Adorations", "Niqhtmarex", "RambointheJungle", "Iucid", "iOddOrange", "Uncover", "DD666666", "r0b0cop", 'VictoricaDebloiz', 'Gleebglarb', 'EmperorSteeleye', 'SillyAdam', "whBox", "tempname456543", "FeedOn", "iJesus69", 'OmegaB', 'Riftcrawl', "Xandertrax", 'Krymer', "TwistedSun", "DeTRFShinmori", 'RiceFox', 'iKoogar', "Mizuji", "White", "zgerman", "FORG1VENliftlift", "sakurafIowers", "xSaury", 'PiPiPig', 'Pyrr', "TheCptAmerica", "NtzNasty", "SlowlyDriftnAway", 'cre4tive', "LAGGoldenShiv", "FSNDLuffy", 'NintendudeX', 'duliniul', "Cybody", "Odete49", "TFBlade", 'Platoon', "CopyCat", "BarbecueRibs", "TitanDweevil", "HeroesOfTheStorm", "JRT94", "RedBerrrys", "Rockblood", "YoloOno", "BalmungLFT", "IreliaCarriesU", "LikeAMaws", "PaulDano", "ErzaScarIet", 'KiritoKamui', "ProofOfPayment", "DonPorks", "BarronZzZ", 'Pikaboo', 'aLeo', 'MikeytheBully', "7Qing", "BillyBossXD", 'DragonRaider', "Haughty", "KMadClowns", 'ikORY', 'Nikkone', "WeixiaTianshi", "QQ346443922", 'FoxDog', "Tahx", 'Hawk', "Haruka", "Scrumm", 'cackgod', "iAmNotSorry", "coLROBERTO", 'GladeGleamBright', "MonkeyDufle", "M1ssBear", 'theletter3', "Sandrew", "RongRe", "MrGatsby", "xBlueMoon", "Merryem", "ElkWhisperer", "Enticed", 'Draguner', "DeliciousMilkGG", "Patoy", "Lucl3n3Ch4k0", "Smoian", "Piaget", "Xiaomi", "zeflife", 'IsDatLohpally', "HatersWantToBeMe", "Blackmill", "PrinceChumpJohn", "NhatNguyen", "Nebulite", "IAmTheIRS", "TedStickles", 'LOD', 'CallMeExtremity', "kimjeii", "Kappasun", "JJJackstar", "TSMMeNoHaxor", "Zealous", "Normalize", "Topcatz", "KimchimanBegins", "DrawingPalette", 'AnarchyofDinh', "hiimxiao", "MikeHct", "Manco", "ChumpJohnsTeemo", "Heejae", "delirous", "Iodus", 'WakaWakaWak', "Hawez", "ThaOGTschussi", "TwistedFox", "PureCorruption", "HotshotGG", "Turdelz", 'ysohardstylez', "Brainfre3z", "ilyTaylor", 'Zaineking', "QualityADC", "LingTong", "DyrudeJstormRMX", "AnObesePanda", "silvermidget", 'CornStyle', 'LafalgarTaw', "Zeyzal", "Meowwww", "Pokemorph", 'JimmyHong', "Hoardedsoviet", "Nematic", "C9Yusui", 'BlownbyJanna', 'Sojs', "Cerathe", 'FairieTail', 'Xeralis', "ichibaNNN", "SerenityKitty", 'Contractz', "WWvvWvvWvvwWwvww", 'BlueHole', "SAGANoPause", 'Mookiez', "RiotChun", "ValkrinSenpai", "HeXrisen", 'CptJack', 'Sleepyz', "HurricaneJanna", "ToxiGood", "ItsYourChoice", "TaintedDucky", "probablycoL", "Ina", 'FreeGaming', "Phaxen", "tofumanoftruth", 'xHeroofChaos', 'Rockllee', "Sunohara", "Ryzer", 'SpiritDog', 'Kazma', "Sjvir", "Maulface", "SombreroGalaxy", "Bebhead", "ecco", "AurionKratos", "RoseByrne", "Kammgefahr", "VwSSandvich", 'TDKLouisXGeeGee', "Picarus", 'erwinbooze', "xrawrgasm", 'Tangularx', 'CSauce', 'Back2Nexus', "SepekuAW", "Chuuper", "Airtom", "pro711", "Theifz", "SirhcEezy", "LuckyLone56", 'AtomicN', "Splorchicken", "00000000", "UpAIlNight", 'k3soju', 'MikeyC', "s7efen", 'FENOMENO', "XIVJan", "Splorgen", "djpocketchange", "Oasis", 'Iggypop', "BallsInYourFace", "dopa7", "MasterDragonKing", "ssforfail", 'MissyQing', "Endlesss", "badeed", "SmooshyCake", "Karmix", "Alestz", "svbk", "KissMeRDJ", "TeaMALaoSong", "drallaBnayR", "CHRISTHORMANN", "KnivesMillions", "MahNeega", 'Sphinx', "Impasse", "Stefono62", 'CLGEasy', "GankedFromAbove", "IslandLager", 'MrJuneJune', "BrianTheis", "ShorterACE", "morippe", "Meatmush", "Dusey", "Paperkat", 'Submit', "TooPro4u", 'Porogami', "iuzi", "Suzikai", "TDKNear", "LiquidInori", 'Deleted', 'NtzLeopard', "UnKooL", 'Desu', "Born4this", 'sickening', "AllianceMike", "Dinklebergg", 'YouGotFaker', 'FusionSin', "IMBAYoungGooby", "Neverlike", 'BestGodniviaNA', 'FFat20GGWP', "kMSeunG", "AliBracamontes", "rua0311desuyo", "54Bomb99", "jivhust", "Penguinpreacher", "Yashimasta", 'Erurikku', "ReeferChiefer420", "WonderfulTea", "Gamely", 'OberonDark', 'Imunne', 'Hoeji', "xTearz", "NicoleKidman", "DonDardanoni", "Wonderfuls", "HentaiKatness69", "Ayai", "EREnko", 'Cruzerthebruzer', "Connort", "Anoledoran", "BiggestNoob", "Anangelababy007", "TrojanPanda", 'MasterCoach', 'Kirmora', "wswgou", "NMEotterr", "DragonxCharl", 'uJ3lly', "moosebreeder", "Strompest", "Kurumx", "Protective", "LegacyofHao", 'DkBnet', "koreas", "AxelAxis", "NiMaTMSiLe", "Preachy", "WoahItsJoe", "XXRhythmMasterXX", "Lemin", "Destinedwithin", 'Afflictive', "Nydukon", "Herald0fDeath", "ChowPingPong", "QuanNguyen", 'interest', "Slylittlefox121", "VictimOfTalent", "chadiansile", 'iToradorable', "BIackWinter", "Mazrer", "NKSoju", 'nhocBym', "Dreemo", 'Virus', "CowGoesMooooo", 'Masrer', "Michaelcreative", "Emanpop", "Druiddroid", "KevonBurt", "Magicians", 'HiImYolo', "LoveSick", "kamonika", "Chunkyfresh", 'tongsoojosim', "hiimrogue", 'Zookerz', "LiShengShun", "DeTFMYumenoti", "EddieMasao", "AGilletteRazor", "andtheknee", "Hazedlol", "SrsBznsBro", 'Spreek', 'Toxil', "JustinJoe", "Silverblade12345", "WalterWhiteOG", 'SwiftyNyce', "Volt", "DoctorElo", 'Connie', "DELLZOR", "aiopqwe", 'MidnightBoba', "Sikeylol", "Warmogger", "Melhsa", "OmekoMushi", "Life", "SleepyDinosaur", "Leonard", "CatVomit", "Likang45", 'PSiloveyou', "xtsetse", 'ClydeBotNA', "Cpense", 'Arakune', "shadowshifte", "LeeBai", "SexualSavant", 'CornChowder', 'DeTRFEsteL', "Astro", 'deDeezer', 'Jayms', "v1anddrotate", "JGLafter", "UhKili", "Aceyy", 'Zik', 'RiNDiN', "Grandederp", "KawaiiTheo", "Senjogahara", 'Th3FooL', "GusTn", "TheTyrant", "GoJeonPa", "DJJingYun", 'Egotesticle', "IoveLu", 'OGNEunJungCho', "kevybear", "ImJas", "Agrorenn", "Synxia", "DouyuTVForgottt", 'GrimSamurai', "6666666666666", "RockleeCtrl", "Xode", "QQ459680082", 'KittenAnya', 'Zakard', "MARSIRELIA", "WallOfText", "SireSnoopy", "kelppowder", "Hxadecimal", "onelaugh", "MisoMango", "PiggyAzalea", 'MisterDon', "VirginEmperor", "suzuXIII", "P18GEMEINV", 'Kurumz', "kjin", "CcLiuShicC", "ExileOfTheBlade", 'Iambbb', "Fubguns", "Asutarotto", "WhatisLove", "Niqhtmarea", 'L0LWal', "JannaFKennedy", "Steffypoo", "KillerHeedonge", "AsianSGpotato", "whiteclaw", "GATOAmyTorin", 'lovemyRMB', "Frostarix", 'voyyboy', "Melo", 'RiotZALE', "ElvishGleeman", "givesyouwiings", "LoveIy", "Packy", "Ntzsmgyu", 'Susice', "Dontqqnubz", "mikeshiwuer", 'Chulss', "MASTERDING", "Scorpionz", "KKOBONG", "Veeless", "NtzMoon", "Leesinwiches", 'RefuseFate', "TP101", 'ozoss0', 'SeaShell', "Baesed", "Foolish", "jivhust1", "KMadKing", "CHRlSS", "jbraggs", 'BeefTacos', 'Xoqe', "Naeim", 'Aerodactyl', "Triett", "194IQredditor", 'Pulzar', "Windgelu", 'Suadero', "Zulgor", 'Senks', "cAbstracT", "SwagersKing", "AkameBestGirl", "ThePrimaryEdict", "arthasqt", "Lobstery", "MisterOombadu", "TheFriendlyDofu", "Oryziaslatipes", "ugg1", "Flandoor", 'HawkStandard', 'wimbis', 'JimmerFredette', "VikingKarots", "Sorcerawr", 'Ciscla', "Suffix", "MrCow", 'METALCHOCOB0', "Dessias", "LevelPerfect", "midVox", "Junha", "Hickus", "gamepiong", 'AirscendoSona', 'HellooKittie', "Jesse", "Rainaa", 'ILoveNASoloQ', "Colonelk1", 'DeTRFZerost', "Szmao", "TacoKat", "1tzJustVictor", 'HomedogPaws', "DioDeSol", "PeterBrown", "FrannyPack", "AbsoluteFridges", "TheBiddler", 'ELMdamemitai', 'Old', "Pavle", "nathanielbee", "MakiIsuzuSento", 'nweHuang', 'EvanRL', 'yorozu', "forgivenbow", 'alexxisss', "Cloverblood", "Entities", "Believe", "Chiruno", 'Xiaobanma', 'BestJanna', "Neko", "TheEyeofHorus", "IGotSunshine", 'Shade20', 'Sprusse', "Imacarebear", "Kenleebudouchu", "LockDownExec", 'Chubymonkey', "HunterHagen", 'Applum', "DaoKho", "MrBlackburn", 'beatmymeat', "BestDota2Sona", "chubbiercheeks", 'KillaKast', "Betsujin", "TheAmberTeahouse", "BellaFlica", "ManateeWaffles", "Babalew", "charmanderu", "TooSalty", "LotusBoyKiller", "Bulgogeeeee", 'Nerzhu1', "Lovelyiris", "QuantumFizzics", "freakingnoodles", "Pdop1", "Bakudanx", "Martel", "DoctorDoom", "equalix", "CARDCAPTORCARD", "Dyad", "Papasmuff", "TheBroskie", "Wadenation", 'Flyinpiggy', "Wingsofdeathx", 'IamOsiris', "ArtThief", 'LotusEdge', "fwii", "Kios", 'Shampu', 'Nickpappa', "Yukari", "RayXu", "Emeraldancer", "TwoPants", "EnzoIX", "Jacka", "Plumber", "Skadanton", 'C9TGleebglarbu', 'BonQuish', 'GrimmmmmmmReaper', 'SmoSmoSmo', "MewtMe", "Ramzlol", "Mruseless", "Eitori", "S0lipsism", 'X1337Gm4uLk03rX', "lloveOreo", "MrChivalry", "Oyt", "AnVu", "RBbabbong", "MASTERROSHl", "dabestmelon", 'Potatooooooooooo', 'KasuganoHaru', 'C9BalIs', "stainzoid", "MrArceeSenpaiSir", "sweetinnocence", "Firehazerd", "EpicLynx", "2011", "PandaCoupIe", "Moelon", "KingKenneth", "Skinathonian", "FelixCC", "snowmine", "Acme", "QmoneyAKAQdollas", 'Fexir', "ImbaDreaMeR", 'ImNovel', "ButtercupShawty", "touch", 'penguin', "Promitio", 'DeTRFMoyashi', "Hordstyle", 'Iizard', "Jintae", 'pichumy', 'Upu', "Iemonlimesodas", "TwitchTvAuke", 'Promises', 'Jintea', "OMikasaAckermanO", "wompwompwompwomp", "Kiyoon", "LiquidNyjacky", "ATColdblood", 'SandPaperX', "0Sleepless", "pr0llylol", 'AxelsFinalFlame', "DrSeussGRINCH", "ZENPhooka", "oMizu", "HamSammiches", "Pcboy", "RamenWithCheese", "Yook", "Dafreakz", "Winno", "XxWarDoomxX", "LifelessEyes", "UrekMazin0", "FrenchLady", "Pillowesque", 'GodOfZed', "D3cimat3r", "broIy", '1stTimeDraven', "Exxpression", 'godofcontrol', "nokappazone", "Shoopufff", "IlIIlII", "Fragnat1c", 'Abidius', "irvintaype", "YellOwish", 'japanman', "CaristinnQT", "LeithaI", 'Kitzuo', "Akatsuki", 'ROBERTZEBRONZE', "aenba", "Arcenius", "Torgun", "Ryden7", "Entus", 'CutestNeo', "MonkeyDx", "Xerosenkio", "JHHoon", "DeTFMCeros", "Rakinas", 'MetaRhyperior', "MegaMilkGG", "EmilyVanCamp", "SecretofMana", "Snidstrat", "SJAero", "Mixture", 'Teaz89', "ArizonaGreenTea", "AKASIeepingDAWG", 'sh4pa', 'Hanjaro', 'BestFelixNA', "Dragles", "TummyTuck", "sciberbia", "KLucid", "Isunari", "lAtmospherel", 'Zwag', "yuBinstah", 'ionz', "Nove", 'Nickywu', "BlueRainn", 'lilgrim', 'Rekeri', "Kaichu", "Arnold", 'ArcticPuffin11', 'UnholyNirvana', "IREGlNALD"];
var timeOutNum = 0x0;
var interval;
var html;
let amounts = [0x640, 0xaf0, 0x170c, 0x2ee0];
let amountsMobile = [0x3e8, 0x7d0, 0x1388, 0x2710];
let coints = ['2M', '10M', "25M", "50M"];
let am;
var generateTemplate = function () {
  var _0x55b956 = users.length - 0x1 ? Math.floor(Math.random() * (users.length - 0x1 - 0x0 + 0x1)) + 0x0 : Math.floor(Math.random() * 1);
  var _0x3616d5 = amounts.length - 0x1 ? Math.floor(Math.random() * (amounts.length - 0x1 - 0x0 + 0x1)) + 0x0 : Math.floor(Math.random() * 1);
  var _0x4b9c3d = coints.length - 0x1 ? Math.floor(Math.random() * (coints.length - 0x1 - 0x0 + 0x1)) + 0x0 : Math.floor(Math.random() * 1);
  let _0x2ee175 = Math.floor(Math.random() * 2) + 0x0;
  let _0x4fb504 = '';
  console.log(_0x2ee175);
  let _0x5762c3 = '';
  if (_0x2ee175 == 0x0) {
    _0x5762c3 = "mobile-platform";
    am = amountsMobile[_0x3616d5];
  } else {
    _0x5762c3 = "pc-platform";
    am = amounts[_0x3616d5];
  }
  let _0xf40ff6 = $('.' + _0x5762c3).find("img");
  _0x4fb504 = $(_0xf40ff6[_0xf40ff6.length - 0x1 ? Math.floor(Math.random() * (_0xf40ff6.length - 0x1 - 0x0 + 0x1)) + 0x0 : Math.floor(Math.random() * 1)]).attr("src");
  timeOutNum = Math.floor(Math.random() * 3001) + 0x7d0;
  imgNum = Math.floor(Math.random() * 9) + 0x1;
  var _0x147b26 = $(".single-act");
  if (_0x147b26.length >= 0x8) {
    $(_0x147b26[_0x147b26.length - 0x1]).remove();
  } else {
    timeOutNum = 0x0;
  }
  html = "<div class=\"col-12 col-md-3 d-flex mb-3 animate__animated animate__jackInTheBox single-act\">";
  html += "<div class=\"play-now generator-info p-3\">";
  html += "<h5 class=\"text-dark text-center\">";
  html += users[_0x55b956];
  html += "</h5>";
  html += "<div data-v-1d1b1606=\"\" class=\"d-flex justify-content-between\">";
  html += "<h4 class=\"text-dark d-flex align-items-center\"><img src=\"https://www.eafc25points.com/assets/images/points.png\" class=\"me-2\" width=\"30\"><span>" + am + '</span></h4>';
  html += "<h4 class=\"text-dark d-flex align-items-center\"><img src=\"https://www.eafc25points.com/assets/images/coins.png\" class=\"me-2\" width=\"30\"><span>" + coints[_0x4b9c3d] + "</span></h4>";
  html += "</div>";
  html += "<div class=\"platform-activity\"><img src=\"" + _0x4fb504 + "\" class=\"w-100\"></div>";
  html += "</div>";
  html += '</div>';
  $(".recent-activity-section .row").prepend(html);
  clearInterval(interval);
  interval = setInterval(generateTemplate, timeOutNum);
};
interval = setInterval(generateTemplate, timeOutNum);
function rand(_0x28e20c, _0x548067) {
  return _0x548067 ? Math.floor(Math.random() * (_0x548067 - _0x28e20c + 0x1)) + _0x28e20c : Math.floor(Math.random() * (_0x28e20c + 0x1));
}
var plusCount = function (_0x3516c7, _0x537cfc, _0x465d00, _0x18e486) {
  if (_0x3516c7 > 0x186a0) {
    var _0x255e71 = 0x5;
  } else {
    var _0x255e71 = 0x32;
  }
  var _0x6c698 = _0x537cfc + 0x64;
  if (_0x537cfc < _0x3516c7) {
    setTimeout(function () {
      $(_0x465d00).text(_0x6c698);
      plusCount(_0x3516c7, _0x6c698, _0x465d00, _0x18e486);
    }, _0x255e71);
  } else {
    _0x18e486();
  }
};