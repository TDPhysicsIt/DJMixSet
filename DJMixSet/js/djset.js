/*
this feature is a HTML5-DJMixSet-Plugin
this Set contains a lot of Play- & Track-Functions
© 2024 Thomas Dittmar
*/

(function($) {
  $.fn.djPlayer = function(options) {
    var settings = $.extend({
      "path": "file:///C:/Users/sonvt/Music/",
      "tracks": ["Bernhard Brink - Blondes Wunder", "Thomas Anders - Heißkalter Engel", "David Brandes - Ich Hab Mir Geschworn2", "Andrea Jürgens - Nach so einer Nacht"],
      "extension": ".mp3",
      "pitch": false,
      "pitchrate1": 1,
      "pitchrate2": 1,
      "pitchrate3": 1,
      "pitchrate4": 1,
      "volume1": 1,
      "volume2": 1,
      "volume3": 1,
      "volume4": 1,
      "controls": false,
      "autoplay": false,
      "loop": false,
      "muted": false,
      "pitchlimit": 2.5,
      "skiptime": 10,
      "pitchTime": 120,
      "tracklistBackground": "#303030",
      "fxboxBackground": "#303030",
      "fxSounds": [
        {
          "name": "vbge1.ogg",
          "label": "vbge1"
        },
        
        {
          "name": "vbge2.ogg",
          "label": "vbge2"
        },
        
        {
          "name": "vbge3.ogg",
          "label": "vbge3"
        },
        
        {
          "name": "vbge4.ogg",
          "label": "vbge4"
        },
        
        {
          "name": "vbge5.ogg",
          "label": "vbge5"
        },
        
        {
          "name": "vbge6.ogg",
          "label": "vbge6"
        },
        
        {
          "name": "vbge7.ogg",
          "label": "vbge7"
        },
        
        {
          "name": "vbge8.ogg",
          "label": "vbge8"
        },
        
        {
          "name": "vbge9.ogg",
          "label": "vbge9"
        },
        
        {
          "name": "vbge10.ogg",
          "label": "vbge10"
        }
      ],
      "fxPath": "file:///C:/Users/sonvt/Music/"
    }, options);
    
    var element = this;
    
    var main = $("<div/>");
    main.css({
      "width": "98%",
      "height": "96%",
      "background": "#151515",
      "border": "4px outset grey",
      "padding": "12px",
      "overflow": "auto"
    });
    
    element.html(main);
    
    var titleBar = $("<div/>");
    titleBar.css({
      "width": "98.2%",
      "height": "30px",
      "background": "#151515",
      "border": "2px outset grey",
      "padding": "4px",
      "font-size": "25px",
      "font-weight": "bold",
      "color": "white"
    }).text("HTML5 DJMixSet - Pro");
    
    titleBar.appendTo(main);
    
    var djArea1 = $("<div/>");
    djArea1.css({
      "width": "99%",
      "background": "#212121",
      "display": "flex",
      "flex-direction": "row",
      "text-align": "left",
      "margin-bottom": "6px"
    });
    
    djArea1.appendTo(main);
    
    var playerArea1 = $("<div/>");
    playerArea1.css({
      "width": "42%",
      "height": "210px",
      "background": "#303030",
    });
    
    playerArea1.appendTo(djArea1);
    
    var djTools1 = $("<div/>");
    djTools1.css({
      "width": "16%",
      "height": "210px",
      "background": "#202020",
    });
    
    djTools1.appendTo(djArea1);
    
    var playerArea2 = $("<div/>");
    playerArea2.css({
      "width": "42%",
      "height": "210px",
      "background": "#303030",
      "text-align": "center"
    });
    
    playerArea2.appendTo(djArea1);
    
    
    
    var djArea2 = $("<div/>");
    djArea2.css({
      "width": "99%",
      "background": "#212121",
      "display": "flex",
      "flex-direction": "row",
      "text-align": "left"
    });
    
    djArea2.appendTo(main);
    
    var playerArea3 = $("<div/>");
    playerArea3.css({
      "width": "42%",
      "height": "210px",
      "background": "#303030",
    });
    
    playerArea3.appendTo(djArea2);
    
    var djTools2 = $("<div/>");
    djTools2.css({
      "width": "16%",
      "height": "210px",
      "background": "#202020",
      "text-align": "center"
    });
    
    djTools2.appendTo(djArea2);
    
    var playerArea4 = $("<div/>");
    playerArea4.css({
      "width": "42%",
      "height": "210px",
      "background": "#303030",
    });
    
    playerArea4.appendTo(djArea2);
    
    var player1 = $("<audio id='player1' style='width:100%;'></audio>");
    player1.appendTo(playerArea1);
    player1.attr({
      "autoplay": false,
      "loop": false,
      "src": settings.path+settings.tracks[0]+settings.extension,
      "controls": settings.controls
    })
      .prop({
      "preservesPitch": settings.pitch,
      "playbackRate": settings.pitchrate1,
      "volume": settings.volume,
      "muted": settings.muted
    });
    
    var player2 = $("<audio id='player2' style='width:100%;'></audio>");
    player2.appendTo(playerArea2);
    player2.attr({
      "autoplay": false,
      "loop": false,
      "src": settings.path+settings.tracks[1]+settings.extension,
      "controls": settings.controls
    })
      .prop({
      "preservesPitch": settings.pitch,
      "playbackRate": settings.pitchrate2,
      "volume": settings.volume,
      "muted": settings.muted
    });
    
    var player3 = $("<audio id='player3' style='width:100%;'></audio>");
    player3.appendTo(playerArea3);
    player3.attr({
      "autoplay": false,
      "loop": false,
      "src": settings.path+settings.tracks[2]+settings.extension,
      "controls": settings.controls
    })
      .prop({
      "preservesPitch": settings.pitch,
      "playbackRate": settings.pitchrate3,
      "volume": settings.volume,
      "muted": settings.muted
    });
    
    var player4 = $("<audio id='player4' style='width:100%;'></audio>");
    player4.appendTo(playerArea4);
    player4.attr({
      "autoplay": false,
      "loop": false,
      "src": settings.path+settings.tracks[3]+settings.extension,
      "controls": settings.controls
    })
      .prop({
      "preservesPitch": settings.pitch,
      "playbackRate": settings.pitchrate4,
      "volume": settings.volume,
      "muted": settings.muted
    });
    
    var currentTrack = 0;
    
    var playerDisplay1 = $("<div/>");
    playerDisplay1.css({
      "width": "99%",
      "height": "90px",
      "background": "#151515",
      "border": "2px outset rgba(255, 255, 255, 0.8)",
      "display": "flex",
      "flex-direction": "row"
    });
    
    playerDisplay1.appendTo(playerArea1);
    
    var trackNumber1 = $("<div id='trackNumber1'></div>");
    trackNumber1.css({
      "width": "5%",
      "height": "50px",
      "margin-top": "12px",
      "font-size": "20px",
      "font-weight": "bold",
      "font-family": "impact",
      "color": "#00ffff",
      "padding-top": "20px",
      "text-align": "center",
    });
    
    trackNumber1.appendTo(playerDisplay1).text(currentTrack + 1);
    
    var artist1 = $("<div id='artist1'></div>");
    artist1.css({
      "width": "60%",
      "height": "50px",
      "margin-top": "12px",
      "font-size": "20px",
      "font-weight": "bold",
      "font-family": "impact",
      "color": "#00ffff",
      "padding-top": "20px",
      "text-align": "left",
    });
    
    artist1.appendTo(playerDisplay1).text(settings.tracks[0]);
    
    var equalizer = $("<div class='player1 equalizer' style='margin-top: 6px;'>");
    equalizer.css({
      "width": "20%",
      "height": "60px",
      "margin-top": "12px",
      "padding-top": "4px",
      "text-align": "center",
    });
    
    equalizer.appendTo(playerDisplay1);
    
    function setEq(player) {
      var scWi = element.width();
      
      if (scWi > 1600) {
        $("#"+player).equalizer({
    	color: "#7affff",
    	color1: '#00ffff',
    	color2: '#007dff',
		width: 140,
		height: 60,
		bars: 16,
		components: 20
         });
      } else {
        $("#"+player).equalizer({
    	color: "#7affff",
    	color1: '#00ffff',
    	color2: '#007dff',
		width: 70,
		height: 50,
		bars: 6,
		components: 20
         });
      }
    }
    
    setEq("player1");
    
    var tracktime1 = $("<div id='tracktime1'></div>");
    tracktime1.css({
      "width": "15%",
      "height": "50px",
      "margin-top": "12px",
      "font-size": "20px",
      "font-weight": "bold",
      "font-family": "impact",
      "color": "#00ffff",
      "padding-top": "20px",
      "text-align": "center",
    });
    
    tracktime1.appendTo(playerDisplay1).text("00:00");
    
    var timebox1 = $("<div id='timebox1'></div>");
    timebox1.css({
      "width": "99%",
      "height": "30px",
      "background": "#202020",
      "text-align": "left",
      "padding-top": "16px",
      "border": "2px outset rgba(255, 255, 255, 0.8)",
      "cursor": "pointer"
    });
    
    timebox1.appendTo(playerArea1);
    
    var timeProgress1 = $("<div id='timeProgress1'></div>");
    timeProgress1.css({
      "width": "100%",
      "height": "12px",
      "background": "lime",
    });
    
    timeProgress1.appendTo(timebox1);
    
    var playerTools1 = $("<div/>");
    playerTools1.css({
      "width": "99%",
      "height": "50px",
      "background": "#151515",
      "border": "2px outset rgba(255, 255, 255, 0.8)",
      "padding-top": "12px",
      "display": "flex",
      "flex-direction": "row",
      "text-align": "left"
    });
    
    playerTools1.appendTo(playerArea1);
    
    var playBtn1 = $("<button class='toolbuttons'>&#9654;</button>");
    playBtn1.appendTo(playerTools1);
    
    var stopBtn1 = $("<button class='toolbuttons3'>&#9632;</button>");
    stopBtn1.appendTo(playerTools1);
    
    var rewBtn1 = $("<button class='toolbuttons4'>&laquo;</button>");
    rewBtn1.appendTo(playerTools1);
    
    var forwBtn1 = $("<button class='toolbuttons4'>&raquo;</button>");
    forwBtn1.appendTo(playerTools1);
    
    var skiprewBtn1 = $("<button class='toolbuttons2'><small>|</small>&laquo;</button>");
    skiprewBtn1.appendTo(playerTools1);
    
    var skipforwBtn1 = $("<button class='toolbuttons2'>&raquo;<small>|</small></button>");
    skipforwBtn1.appendTo(playerTools1);
    
    var pitchbend1 = $("<button class='toolbuttons4' style='width:100px; background:#2a002a; border-color:#2a002a;'>Bend</button>");
    pitchbend1.appendTo(playerTools1);
    
    var squish1 = $("<button class='toolbuttons3'>Sq</button>");
    squish1.appendTo(playerTools1);
    
    var pitchArea1 = $("<div/>");
    pitchArea1.css({
      "width": "100px",
      "height": "36px",
      "margin-left": "9px",
    });
    
    pitchArea1.appendTo(playerTools1);
    
    var pitchRange1 = $("<input type='range' class='slider' id='pitchRange1' style='width: 90px; height: 20px; margin-top: 9px; background:#00a3ff;'/>");
    pitchRange1.attr({
      "max": 4,
      "min": 0.25,
      "step": 0.01,
      "value": 1
    });
    
    pitchRange1.appendTo(pitchArea1);
    
    var playRev1 = $("<button class='toolbuttons4'>Rw</button>");
    playRev1.appendTo(playerTools1);
    
    var chgPlayer1 = $("<button class='toolbuttons'>&#8660;</button>");
    chgPlayer1.appendTo(playerTools1);
    
    
    
    var playerDisplay2 = $("<div/>");
    playerDisplay2.css({
      "width": "99%",
      "height": "90px",
      "background": "#151515",
      "border": "2px outset rgba(255, 255, 255, 0.8)",
      "display": "flex",
      "flex-direction": "row"
    });
    
    playerDisplay2.appendTo(playerArea2);
    
    var trackNumber2 = $("<div id='trackNumber2'></div>");
    trackNumber2.css({
      "width": "5%",
      "height": "50px",
      "margin-top": "10px",
      "font-size": "20px",
      "font-weight": "bold",
      "font-family": "impact",
      "color": "#00ffff",
      "padding-top": "20px",
      "text-align": "center",
    });
    
    trackNumber2.appendTo(playerDisplay2).text(currentTrack + 2);
    
    var artist2 = $("<div id='artist2'></div>");
    artist2.css({
      "width": "60%",
      "height": "50px",
      "margin-top": "10px",
      "font-size": "20px",
      "font-weight": "bold",
      "font-family": "impact",
      "color": "#00ffff",
      "padding-top": "20px",
      "text-align": "left",
    });
    
    artist2.appendTo(playerDisplay2).text(settings.tracks[1]);
    
    var equalizer2 = $("<div class='player2 equalizer' style='margin-top: 6px;'>");
    equalizer2.css({
      "width": "20%",
      "height": "50px",
      "margin-top": "10px",
      "padding-top": "4px",
      "text-align": "center",
    });
    
    equalizer2.appendTo(playerDisplay2);
    
    setEq("player2");
    
    var tracktime2 = $("<div id='tracktime2'></div>");
    tracktime2.css({
      "width": "15%",
      "height": "50px",
      "margin-top": "10px",
      "font-size": "20px",
      "font-weight": "bold",
      "font-family": "impact",
      "color": "#00ffff",
      "padding-top": "20px",
      "text-align": "center",
    });
    
    tracktime2.appendTo(playerDisplay2).text("00:00");
    
    var timebox2 = $("<div id='timebox2'></div>");
    timebox2.css({
      "width": "99%",
      "height": "30px",
      "background": "#202020",
      "text-align": "left",
      "padding-top": "16px",
      "border": "2px outset rgba(255, 255, 255, 0.8)",
      "cursor": "pointer"
    });
    
    timebox2.appendTo(playerArea2);
    
    var timeProgress2 = $("<div id='timeProgress2'></div>");
    timeProgress2.css({
      "width": "100%",
      "height": "12px",
      "background": "lime",
    });
    
    timeProgress2.appendTo(timebox2);
    
    var playerTools2 = $("<div/>");
    playerTools2.css({
      "width": "99%",
      "height": "50px",
      "background": "#151515",
      "border": "2px outset rgba(255, 255, 255, 0.8)",
      "padding-top": "12px",
      "display": "flex",
      "flex-direction": "row",
      "text-align": "left"
    });
    
    playerTools2.appendTo(playerArea2);
    
    var playBtn2 = $("<button class='toolbuttons'>&#9654;</button>");
    playBtn2.appendTo(playerTools2);
    
    var stopBtn2 = $("<button class='toolbuttons3'>&#9632;</button>");
    stopBtn2.appendTo(playerTools2);
    
    var rewBtn2 = $("<button class='toolbuttons4'>&laquo;</button>");
    rewBtn2.appendTo(playerTools2);
    
    var forwBtn2 = $("<button class='toolbuttons4'>&raquo;</button>");
    forwBtn2.appendTo(playerTools2);
    
    var skiprewBtn2 = $("<button class='toolbuttons2'><small>|</small>&laquo;</button>");
    skiprewBtn2.appendTo(playerTools2);
    
    var skipforwBtn2 = $("<button class='toolbuttons2'>&raquo;<small>|</small></button>");
    skipforwBtn2.appendTo(playerTools2);
    
    var pitchbend2 = $("<button class='toolbuttons4' style='width:100px; background:#2a002a; border-color:#2a002a;'>Bend</button>");
    pitchbend2.appendTo(playerTools2);
    
    var squish2 = $("<button class='toolbuttons3'>Sq</button>");
    squish2.appendTo(playerTools2);
    
    var pitchArea2 = $("<div/>");
    pitchArea2.css({
      "width": "100px",
      "height": "36px",
      "margin-left": "9px",
    });
    
    pitchArea2.appendTo(playerTools2);
    
    var pitchRange2 = $("<input type='range' class='slider' id='pitchRange2' style='width: 90px; height: 20px; margin-top: 9px; background:#00a3ff;'/>");
    pitchRange2.attr({
      "max": 4,
      "min": 0.25,
      "step": 0.01,
      "value": 1
    });
    
    pitchRange2.appendTo(pitchArea2);
    
    var playRev2 = $("<button class='toolbuttons4'>Rw</button>");
    playRev2.appendTo(playerTools2);
    
    var chgPlayer2 = $("<button class='toolbuttons'>&#8660;</button>");
    chgPlayer2.appendTo(playerTools2);
    
    
    
    var playerDisplay3 = $("<div/>");
    playerDisplay3.css({
      "width": "99%",
      "height": "90px",
      "background": "#151515",
      "border": "2px outset rgba(255, 255, 255, 0.8)",
      "display": "flex",
      "flex-direction": "row"
    });
    
    playerDisplay3.appendTo(playerArea3);
    
    var trackNumber3 = $("<div id='trackNumber3'></div>");
    trackNumber3.css({
      "width": "5%",
      "height": "50px",
      "margin-top": "12px",
      "font-size": "20px",
      "font-weight": "bold",
      "font-family": "impact",
      "color": "#00ffff",
      "padding-top": "20px",
      "text-align": "center",
    });
    
    trackNumber3.appendTo(playerDisplay3).text(currentTrack + 3);
    
    var artist3 = $("<div id='artist3'></div>");
    artist3.css({
      "width": "60%",
      "height": "50px",
      "margin-top": "12px",
      "font-size": "20px",
      "font-weight": "bold",
      "font-family": "impact",
      "color": "#00ffff",
      "padding-top": "20px",
      "text-align": "left",
    });
    
    artist3.appendTo(playerDisplay3).text(settings.tracks[2]);
    
    var equalizer3 = $("<div class='player3 equalizer' style='margin-top: 6px;'>");
    equalizer3.css({
      "width": "20%",
      "height": "50px",
      "margin-top": "10px",
      "padding-top": "4px",
      "text-align": "center",
    });
    
    equalizer3.appendTo(playerDisplay3);
    
    setEq("player3");
    
    var tracktime3 = $("<div id='tracktime3'></div>");
    tracktime3.css({
      "width": "15%",
      "height": "50px",
      "margin-top": "10px",
      "font-size": "20px",
      "font-weight": "bold",
      "font-family": "impact",
      "color": "#00ffff",
      "padding-top": "20px",
      "text-align": "center",
    });
    
    tracktime3.appendTo(playerDisplay3).text("00:00");
    
    var timebox3 = $("<div id='timebox3'></div>");
    timebox3.css({
      "width": "99%",
      "height": "30px",
      "background": "#202020",
      "text-align": "left",
      "padding-top": "16px",
      "border": "2px outset rgba(255, 255, 255, 0.8)",
      "cursor": "pointer"
    });
    
    timebox3.appendTo(playerArea3);
    
    var timeProgress3 = $("<div id='timeProgress3'></div>");
    timeProgress3.css({
      "width": "100%",
      "height": "12px",
      "background": "lime",
    });
    
    timeProgress3.appendTo(timebox3);
    
    var playerTools3 = $("<div/>");
    playerTools3.css({
      "width": "99%",
      "height": "50px",
      "background": "#151515",
      "border": "2px outset rgba(255, 255, 255, 0.8)",
      "padding-top": "12px",
      "display": "flex",
      "flex-direction": "row",
      "text-align": "left"
    });
    
    playerTools3.appendTo(playerArea3);
    
    var playBtn3 = $("<button class='toolbuttons'>&#9654;</button>");
    playBtn3.appendTo(playerTools3);
    
    var stopBtn3 = $("<button class='toolbuttons3'>&#9632;</button>");
    stopBtn3.appendTo(playerTools3);
    
    var rewBtn3 = $("<button class='toolbuttons4'>&laquo;</button>");
    rewBtn3.appendTo(playerTools3);
    
    var forwBtn3 = $("<button class='toolbuttons4'>&raquo;</button>");
    forwBtn3.appendTo(playerTools3);
    
    var skiprewBtn3 = $("<button class='toolbuttons2'><small>|</small>&laquo;</button>");
    skiprewBtn3.appendTo(playerTools3);
    
    var skipforwBtn3 = $("<button class='toolbuttons2'>&raquo;<small>|</small></button>");
    skipforwBtn3.appendTo(playerTools3);
    
    var pitchbend3 = $("<button class='toolbuttons4' style='width:100px; background:#2a002a; border-color:#2a002a;'>Bend</button>");
    pitchbend3.appendTo(playerTools3);
    
    var squish3 = $("<button class='toolbuttons3'>Sq</button>");
    squish3.appendTo(playerTools3);
    
    var pitchArea3 = $("<div/>");
    pitchArea3.css({
      "width": "100px",
      "height": "36px",
      "margin-left": "9px",
    });
    
    pitchArea3.appendTo(playerTools3);
    
    var pitchRange3 = $("<input type='range' class='slider' id='pitchRange3' style='width: 90px; height: 20px; margin-top: 9px; background:#00a3ff;'/>");
    pitchRange3.attr({
      "max": 4,
      "min": 0.25,
      "step": 0.01,
      "value": 1
    });
    
    pitchRange3.appendTo(pitchArea3);
    
    var playRev3 = $("<button class='toolbuttons4'>Rw</button>");
    playRev3.appendTo(playerTools3);
    
    var chgPlayer3 = $("<button class='toolbuttons'>&#8660;</button>");
    chgPlayer3.appendTo(playerTools3);
    
    
    
    var playerDisplay4 = $("<div/>");
    playerDisplay4.css({
      "width": "99%",
      "height": "90px",
      "background": "#151515",
      "border": "2px outset rgba(255, 255, 255, 0.8)",
      "display": "flex",
      "flex-direction": "row"
    });
    
    playerDisplay4.appendTo(playerArea4);
    
    var trackNumber4 = $("<div id='trackNumber4'></div>");
    trackNumber4.css({
      "width": "5%",
      "height": "50px",
      "margin-top": "10px",
      "font-size": "20px",
      "font-weight": "bold",
      "font-family": "impact",
      "color": "#00ffff",
      "padding-top": "20px",
      "text-align": "center",
    });
    
    trackNumber4.appendTo(playerDisplay4).text(currentTrack + 4);
    
    var artist4 = $("<div id='artist4'></div>");
    artist4.css({
      "width": "60%",
      "height": "50px",
      "margin-top": "10px",
      "font-size": "20px",
      "font-weight": "bold",
      "font-family": "impact",
      "color": "#00ffff",
      "padding-top": "20px",
      "text-align": "left",
    });
    
    artist4.appendTo(playerDisplay4).text(settings.tracks[3]);
    
    var equalizer4 = $("<div class='player4 equalizer' style='margin-top: 6px;'>");
    equalizer4.css({
      "width": "20%",
      "height": "50px",
      "margin-top": "10px",
      "padding-top": "4px",
      "text-align": "center",
    });
    
    equalizer4.appendTo(playerDisplay4);
    
    setEq("player4");
    
    var tracktime4 = $("<div id='tracktime4'></div>");
    tracktime4.css({
      "width": "15%",
      "height": "50px",
      "margin-top": "10px",
      "font-size": "20px",
      "font-weight": "bold",
      "font-family": "impact",
      "color": "#00ffff",
      "padding-top": "20px",
      "text-align": "center",
    });
    
    tracktime4.appendTo(playerDisplay4).text("00:00");
    
    var timebox4 = $("<div id='timebox4'></div>");
    timebox4.css({
      "width": "99%",
      "height": "30px",
      "background": "#202020",
      "text-align": "left",
      "padding-top": "16px",
      "border": "2px outset rgba(255, 255, 255, 0.8)",
      "cursor": "pointer"
    });
    
    timebox4.appendTo(playerArea4);
    
    var timeProgress4 = $("<div id='timeProgress4'></div>");
    timeProgress4.css({
      "width": "100%",
      "height": "12px",
      "background": "lime",
    });
    
    timeProgress4.appendTo(timebox4);
    
    var playerTools4 = $("<div/>");
    playerTools4.css({
      "width": "99%",
      "height": "50px",
      "background": "#151515",
      "border": "2px outset rgba(255, 255, 255, 0.8)",
      "padding-top": "12px",
      "display": "flex",
      "flex-direction": "row",
      "text-align": "left"
    });
    
    playerTools4.appendTo(playerArea4);
    
    var playBtn4 = $("<button class='toolbuttons'>&#9654;</button>");
    playBtn4.appendTo(playerTools4);
    
    var stopBtn4 = $("<button class='toolbuttons3'>&#9632;</button>");
    stopBtn4.appendTo(playerTools4);
    
    var rewBtn4 = $("<button class='toolbuttons4'>&laquo;</button>");
    rewBtn4.appendTo(playerTools4);
    
    var forwBtn4 = $("<button class='toolbuttons4'>&raquo;</button>");
    forwBtn4.appendTo(playerTools4);
    
    var skiprewBtn4 = $("<button class='toolbuttons2'><small>|</small>&laquo;</button>");
    skiprewBtn4.appendTo(playerTools4);
    
    var skipforwBtn4 = $("<button class='toolbuttons2'>&raquo;<small>|</small></button>");
    skipforwBtn4.appendTo(playerTools4);
    
    var pitchbend4 = $("<button class='toolbuttons4' style='width:100px; background:#2a002a; border-color:#2a002a;'>Bend</button>");
    pitchbend4.appendTo(playerTools4);
    
    var squish4 = $("<button class='toolbuttons3'>Sq</button>");
    squish4.appendTo(playerTools4);
    
    var pitchArea4 = $("<div/>");
    pitchArea4.css({
      "width": "100px",
      "height": "36px",
      "margin-left": "9px",
    });
    
    pitchArea4.appendTo(playerTools4);
    
    var pitchRange4 = $("<input type='range' class='slider' id='pitchRange4' style='width: 90px; height: 20px; margin-top: 9px; background:#00a3ff;'/>");
    pitchRange4.attr({
      "max": 4,
      "min": 0.25,
      "step": 0.01,
      "value": 1
    });
    
    pitchRange4.appendTo(pitchArea4);
    
    var playRev4 = $("<button class='toolbuttons4'>Rw</button>");
    playRev4.appendTo(playerTools4);
    
    var chgPlayer4 = $("<button class='toolbuttons'>&#8660;</button>");
    chgPlayer4.appendTo(playerTools4);
    
    var crossfadeBox = $("<div/>");
    crossfadeBox.css({
      "width": "100%",
      "text-align": "center",
    });
    
    crossfadeBox.appendTo(djTools1);
    
    var crossfadeImg = $("<img/>");
    crossfadeImg.css({
      "width": "200px",
      "height": "80px"
    })
      .attr("src", "Symbole/Fade.png");
    
    crossfadeImg.appendTo(crossfadeBox);
    
    var crfadeBox1 = $("<div/>");
    crfadeBox1.css({
      "width": "100%",
      "text-align": "center",
      "margin-top": "6px"
    });
    
    crfadeBox1.appendTo(djTools1);
    
    var fader1 = $("<input type='range' class='slider' style='width:240px; height:20px; background:#00a3ff;'/>");
    fader1.attr({
      "max": 1,
      "min": 0,
      "step": 0.01,
      "value": 1
    });
    
    fader1.appendTo(crfadeBox1);
    
    var crfadeBox2 = $("<div/>");
    crfadeBox2.css({
      "width": "100%",
      "text-align": "center",
      "margin-top": "6px"
    });
    
    crfadeBox2.appendTo(djTools1);
    
    var fader2 = $("<input type='range' class='slider' style='width:240px; height:20px; background:#00a3ff;'/>");
    fader2.attr({
      "max": 1,
      "min": 0,
      "step": 0.01,
      "value": 0
    });
    
    fader2.appendTo(crfadeBox2);
    
    var crfadeAttr1 = $("<div/>");
    crfadeAttr1.css({
      "width": "100%",
      "text-align": "center",
      "margin-top": "6px"
    });
    
    crfadeAttr1.appendTo(djTools1);
    
    var crossFadeMode = $("<select style='width:150px; height:40px; font-weight:bold; font-size: 16px; color:white; background: #212121; border: 4px outset grey; border-radius:6px;'><option value='Fade'>Fade</option><option value='FadeOut'>FadeOut</option><option value='FadeIn'>FadeIn</option><option value='FadeInFast'>FadeInFast</option><option value='FadeTO'>FadeTimeOut</option><option value='FadeInOut'>FadeInOut</option><option value='FadeOutTO'>FadeOutTO</option><option value='FadeInTO'>FadeInTO</option><option value='FadeInOutFast'>FadeInOutFast</option></select>");
    crossFadeMode.appendTo(crfadeAttr1);
    
    var crossFadeTime = $("<input type='number' style='width:80px; height:30px; font-weight:bold; font-size: 16px; color:white; background: #212121; border: 4px outset grey; margin-left:6px; border-radius:6px;'>");
    crossFadeTime.attr({
      "max": 30,
      "min": 0.1,
      "step": 0.1,
      "value": 10
    });
    
    crossFadeTime.appendTo(crfadeAttr1);
    
    
    var autoPlayArea = $("<div/>");
    autoPlayArea.css({
      "width": "100%",
      "text-align": "center",
      "margin-top": "6px"
    });
    
    autoPlayArea.appendTo(djTools2);
    
    var autoplayBtn = $("<button class='toolbuttons5'>Autoplay</button>");
    autoplayBtn.appendTo(autoPlayArea);
    
    var autoPlayModeArea = $("<div/>");
    autoPlayModeArea.css({
      "width": "100%",
      "text-align": "center",
      "margin-top": "6px"
    });
    
    autoPlayModeArea.appendTo(djTools2);
    
    var autoplayFullBtn = $("<button class='toolbuttons7' style='background: linear-gradient(to right, #292900, yellow, #292900); border-color:yellow;'>Full</button>");
    autoplayFullBtn.appendTo(autoPlayModeArea);
    
    var autoplayPartBtn = $("<button class='toolbuttons7'>Part</button>");
    autoplayPartBtn.appendTo(autoPlayModeArea);
    
    var partTrack = $("<select style='width:70px; height:30px; font-weight:bold; font-size: 16px; color:white; background: #212121; border: 2px outset grey; border-radius: 6px; margin-left: 9px;'></select>");
    partTrack.appendTo(autoPlayModeArea);
    
    var partTimes = $("<option value='0'>Track-Time</option><option value='30'>0:30</option><option value='35'>0:35</option><option value='40'>0:40</option><option value='45'>0:45</option><option value='50'>0:50</option><option value='55'>0:55</option><option value='65'>1:00</option><option value='60'>1:05</option><option value='70'>1:10</option><option value='75'>1:15</option><option value='80'>1:20</option><option value='85'>1:25</option><option value='90'>1:30</option><option value='95'>1:35</option><option value='100'>1:40</option><option value='105'>1:45</option><option value='110'>1:50</option><option value='115'>1:55</option><option value='120'>2:00</option><option value='125'>2:05</option><option value='130'>2:10</option><option value='135'>2:15</option><option value='140'>2:20</option><option value='145'>2:25</option><option value='150'>2:30</option><option value='155'>2:35</option><option value='160'>2:40</option><option value='165'>2:45</option><option value='170'>2:50</option><option value='175'>2:55</option><option value='180'>3:00</option><option value='185'>3:05</option><option value='190'>3:10</option><option value='195'>3:15</option><option value='200'>3:20</option><option value='205'>3:35</option><option value='210'>3:30</option>");
    partTimes.appendTo(partTrack);
    
    var trackChangeModeArea = $("<div/>");
    trackChangeModeArea.css({
      "width": "100%",
      "text-align": "center",
      "margin-top": "6px"
    });
    
    trackChangeModeArea.appendTo(djTools2);
    
    var trackChangeBtn = $("<button class='toolbuttons6' style='background: linear-gradient(to right, darkred, red, darkred); border-color:red;'>Auto-Trackchange</button>");
    trackChangeBtn.appendTo(trackChangeModeArea);
    
    var playlistModeArea = $("<div/>");
    playlistModeArea.css({
      "width": "100%",
      "text-align": "center",
      "margin-top": "6px"
    });
    
    playlistModeArea.appendTo(djTools2);
    
    var playListForwBtn = $("<button class='toolbuttons8' style='background: linear-gradient(to right, navy, skyblue, navy); border-color:skyblue;'>Forw</button>");
    playListForwBtn.appendTo(playlistModeArea);
    
    var playListRevBtn = $("<button class='toolbuttons8'>Rew</button>");
    playListRevBtn.appendTo(playlistModeArea);
    
    var playListRandomBtn = $("<button class='toolbuttons8'>Random</button>");
    playListRandomBtn.appendTo(playlistModeArea);
    
    var mediaLib = $("<div/>");
    mediaLib.css({
      "width": "98.6%",
      "display": "flex",
      "flex-direction": "row",
      "border": "2px solid rgba(255, 255, 255, 0.6)"
    });
    
    mediaLib.appendTo(main);
    
    var trackLibTxt = $("<div/>");
    trackLibTxt.css({
      "width": "60%",
      "height": "30px",
      "font-size": "18px",
      "margin-top": "6px",
      "font-weight": "bold",
      "color": "white",
      "text-align": "center"
    })
      .text("Track-Library");
    
    trackLibTxt.appendTo(mediaLib);
    
    var bgLibTxt = $("<div/>");
    bgLibTxt.css({
      "width": "40%",
      "height": "30px",
      "font-size": "18px",
      "margin-top": "6px",
      "font-weight": "bold",
      "color": "white",
      "text-align": "center"
    })
      .text("Background-Sounds");
    
    bgLibTxt.appendTo(mediaLib);
    
    var mediaLibArea = $("<div/>");
    mediaLibArea.css({
      "width": "98.6%",
      "display": "flex",
      "flex-direction": "row",
      "border": "2px solid rgba(255, 255, 255, 0.6)"
    });
    
    mediaLibArea.appendTo(main);
    
    var trackLib = $("<div/>");
    trackLib.css({
      "width": "60%",
      "height": "220px",
      "border": "2px outset rgba(255, 255, 255, 0.8)",
      "overflow": "auto",
      "background": settings.tracklistBackground
    });
    
    trackLib.appendTo(mediaLibArea);
    
    var trackLibList = $("<ul id='tracklist'></ul>");
    trackLibList.css({
      "width": "99%",
      "padding": "1px",
      "margin": "1px",
      "list-style": "none",
      "font-size": "16px",
      "font-weight": "bold",
      "color": "white",
      "text-align": "left",
      "cursor": "pointer"
    });
    
    trackLibList.appendTo(trackLib);
    
    var mediaTracks = [];
    for (var i=0; i<settings.tracks.length; i++) {
      mediaTracks.push("<li style='padding-top:4px; padding-bottom:4px;'>"+settings.tracks[i]+"</li>");
    }
    
    trackLibList.html(mediaTracks.join(""));
    
    var fxLib = $("<div/>");
    fxLib.css({
      "width": "40%",
      "height": "220px",
      "border": "2px outset rgba(255, 255, 255, 0.8)",
      "overflow": "auto",
      "background": settings.fxboxBackground
    });
    
    fxLib.appendTo(mediaLibArea);
    
    var fxLibList = $("<ul id='fxList'></ul>");
    fxLibList.css({
      "width": "99%",
      "padding": "1px",
      "margin": "1px",
      "list-style": "none",
      "font-size": "16px",
      "font-weight": "bold",
      "color": "white",
      "text-align": "left",
      "cursor": "pointer"
    });
    
    fxLibList.appendTo(fxLib);
    
    var mediaFxTracks = [];
    for (var j=0; j<settings.fxSounds.length; j++) {
      mediaFxTracks.push("<li name='"+settings.fxSounds[j].name+"' style='padding-top:4px; padding-bottom:4px;'>"+settings.fxSounds[j].label+"</li>");
    }
    
    fxLibList.html(mediaFxTracks.join(""));
    
    $("#tracklist li:eq("+currentTrack+")").addClass("selTrack");
    
    var mixerBox = $("<div/>");
    mixerBox.css({
      "width": "98.6%",
      "height": "220px",
      "overflow": "auto",
      "background": "#151515",
      "display": "none",
      "border": "2px solid rgba(255, 255, 255, 0.6)"
    });
    
    mixerBox.appendTo(main);
    
    var mixerArea = $("<div/>");
    mixerArea.css({
      "width": "99%",
      "background": "#151515",
      "display": "flex",
      "flex-direction": "row",
    });
    
    mixerArea.appendTo(mixerBox);
    
    var mixTxt1 = $("<div/>");
    mixTxt1.css({
      "width": "15%",
      "height": "60px",
      "text-align": "right",
      "font-size": "20px",
      "font-weight": "bold",
      "color": "white",
      "font-family": "Century Gothic",
      "padding-top": "15px"
    })
      .text("Volume Player 1");
    
    mixTxt1.appendTo(mixerArea);
    
    var volBox1 = $("<div/>");
    volBox1.css({
      "width": "30%",
      "height": "60px",
      "text-align": "center",
      "padding-top": "15px"
    });
    
    volBox1.appendTo(mixerArea);
    
    var volMixer1 = $("<input type='range' class='slider'>");
    volMixer1.css({
      "width": "96%",
      "height": "26px",
      "background": "linear-gradient(to right, #151515, silver, #151515)",
      "border": "6px outset silver"
    })
      .attr({
      "max": 1,
      "min": 0,
      "step": 0.01,
      "value": 1
    });
    
    volMixer1.appendTo(volBox1);
    
    var volToggleBox1 = $("<div/>");
    volToggleBox1.css({
      "width": "5%",
      "height": "60px",
      "text-align": "center",
      "padding-top": "15px",
    });
    
    volToggleBox1.appendTo(mixerArea);
    
    var volMixBtn = $("<button class='toolbuttons' style='margin-left:1px;'><img src='Symbole/volume.png' style='filter:invert(100%);'></button>");
    volMixBtn.appendTo(volToggleBox1);
    
    
   
    var mixTxt2 = $("<div/>");
    mixTxt2.css({
      "width": "15%",
      "height": "50px",
      "text-align": "right",
      "font-size": "20px",
      "font-weight": "bold",
      "color": "white",
      "font-family": "Century Gothic",
      "padding-top": "15px"
    })
      .text("Volume Player 2");
    
    mixTxt2.appendTo(mixerArea);
    
    var volBox2 = $("<div/>");
    volBox2.css({
      "width": "30%",
      "height": "50px",
      "text-align": "center",
      "padding-top": "15px"
    });
    
    volBox2.appendTo(mixerArea);
    
    var volMixer2 = $("<input type='range' class='slider'>");
    volMixer2.css({
      "width": "96%",
      "height": "26px",
      "background": "linear-gradient(to right, #151515, silver, #151515)",
      "border": "6px outset silver"
    })
      .attr({
      "max": 1,
      "min": 0,
      "step": 0.01,
      "value": 1
    });
    
    volMixer2.appendTo(volBox2);
    
    var volToggleBox2 = $("<div/>");
    volToggleBox2.css({
      "width": "5%",
      "height": "50px",
      "text-align": "center",
      "padding-top": "15px",
    });
    
    volToggleBox2.appendTo(mixerArea);
    
    var volMixBtn2 = $("<button class='toolbuttons' style='margin-left:1px;'><img src='Symbole/volume.png' style='filter:invert(100%);'></button>");
    volMixBtn2.appendTo(volToggleBox2);
    
    
    var mixerArea2 = $("<div/>");
    mixerArea2.css({
      "width": "99%",
      "background": "#151515",
      "display": "flex",
      "flex-direction": "row",
    });
    
    mixerArea2.appendTo(mixerBox);
    
    var mixTxt3 = $("<div/>");
    mixTxt3.css({
      "width": "15%",
      "height": "50px",
      "text-align": "right",
      "font-size": "20px",
      "font-weight": "bold",
      "color": "white",
      "font-family": "Century Gothic",
      "padding-top": "15px"
    })
      .text("Volume Player 3");
    
    mixTxt3.appendTo(mixerArea2);
    
    var volBox3 = $("<div/>");
    volBox3.css({
      "width": "30%",
      "height": "50px",
      "text-align": "center",
      "padding-top": "15px"
    });
    
    volBox3.appendTo(mixerArea2);
    
    var volMixer3 = $("<input type='range' class='slider'>");
    volMixer3.css({
      "width": "96%",
      "height": "26px",
      "background": "linear-gradient(to right, #151515, silver, #151515)",
      "border": "6px outset silver"
    })
      .attr({
      "max": 1,
      "min": 0,
      "step": 0.01,
      "value": 1
    });
    
    volMixer3.appendTo(volBox3);
    
    var volToggleBox3 = $("<div/>");
    volToggleBox3.css({
      "width": "5%",
      "height": "50px",
      "text-align": "center",
      "padding-top": "15px",
    });
    
    volToggleBox3.appendTo(mixerArea2);
    
    var volMixBtn3 = $("<button class='toolbuttons' style='margin-left:1px;'><img src='Symbole/volume.png' style='filter:invert(100%);'></button>");
    volMixBtn3.appendTo(volToggleBox3);
    
    
    var mixTxt4 = $("<div/>");
    mixTxt4.css({
      "width": "15%",
      "height": "50px",
      "text-align": "right",
      "font-size": "20px",
      "font-weight": "bold",
      "color": "white",
      "font-family": "Century Gothic",
      "padding-top": "15px"
    })
      .text("Volume Player 4");
    
    mixTxt4.appendTo(mixerArea2);
    
    var volBox4 = $("<div/>");
    volBox4.css({
      "width": "30%",
      "height": "50px",
      "text-align": "center",
      "padding-top": "15px"
    });
    
    volBox4.appendTo(mixerArea2);
    
    var volMixer4 = $("<input type='range' class='slider'>");
    volMixer4.css({
      "width": "96%",
      "height": "26px",
      "background": "linear-gradient(to right, #151515, silver, #151515)",
      "border": "6px outset silver"
    })
      .attr({
      "max": 1,
      "min": 0,
      "step": 0.01,
      "value": 1
    });
    
    volMixer4.appendTo(volBox4);
    
    var volToggleBox4 = $("<div/>");
    volToggleBox4.css({
      "width": "5%",
      "height": "50px",
      "text-align": "center",
      "padding-top": "15px",
    });
    
    volToggleBox4.appendTo(mixerArea2);
    
    var volMixBtn4 = $("<button class='toolbuttons' style='margin-left:1px;'><img src='Symbole/volume.png' style='filter:invert(100%);'></button>");
    volMixBtn4.appendTo(volToggleBox4);
    
    
    
    var mixerArea3 = $("<div/>");
    mixerArea3.css({
      "width": "99%",
      "background": "#151515",
      "display": "flex",
      "flex-direction": "row",
    });
    
    mixerArea3.appendTo(mixerBox);
    
    var mixTxt5 = $("<div/>");
    mixTxt5.css({
      "width": "15%",
      "height": "50px",
      "text-align": "right",
      "font-size": "20px",
      "font-weight": "bold",
      "color": "white",
      "font-family": "Century Gothic",
      "padding-top": "15px"
    })
      .text("Volume FX-Player");
    
    mixTxt5.appendTo(mixerArea3);
    
    var volBox5 = $("<div/>");
    volBox5.css({
      "width": "30%",
      "height": "50px",
      "text-align": "center",
      "padding-top": "15px"
    });
    
    volBox5.appendTo(mixerArea3);
    
    var volFxMixer = $("<input type='range' class='slider'>");
    volFxMixer.css({
      "width": "96%",
      "height": "26px",
      "background": "linear-gradient(to right, #151515, silver, #151515)",
      "border": "6px outset silver"
    })
      .attr({
      "max": 1,
      "min": 0,
      "step": 0.01,
      "value": 0.6
    });
    
    volFxMixer.appendTo(volBox5);
    
    var volToggleBox5 = $("<div/>");
    volToggleBox5.css({
      "width": "5%",
      "height": "50px",
      "text-align": "center",
      "padding-top": "15px",
    });
    
    volToggleBox5.appendTo(mixerArea3);
    
    var volMixBtn5 = $("<button class='toolbuttons' style='margin-left:1px;'><img src='Symbole/volume.png' style='filter:invert(100%);'></button>");
    volMixBtn5.appendTo(volToggleBox5);
    
    var mixTxt6 = $("<div/>");
    mixTxt6.css({
      "width": "15%",
      "height": "50px",
      "text-align": "right",
      "font-size": "20px",
      "font-weight": "bold",
      "color": "white",
      "font-family": "Century Gothic",
      "padding-top": "15px"
    })
      .text("Pitch FX-Player");
    
    mixTxt6.appendTo(mixerArea3);
    
    var volBox6 = $("<div/>");
    volBox6.css({
      "width": "35%",
      "height": "50px",
      "text-align": "left",
      "padding-top": "15px"
    });
    
    volBox6.appendTo(mixerArea3);
    
    var pitchFxMixer = $("<input type='range' class='slider'>");
    pitchFxMixer.css({
      "width": "84%",
      "height": "26px",
      "background": "linear-gradient(to right, #151515, silver, #151515)",
      "border": "6px outset silver",
      "margin-left": "12px"
    })
      .attr({
      "max": 4,
      "min": 0.25,
      "step": 0.01,
      "value": 1
    });
    
    pitchFxMixer.appendTo(volBox6);
    
    var toolbarArea = $("<div/>");
    toolbarArea.css({
      "width": "98.6%",
      "height": "80px",
      "background": "#303030",
      "border": "2px solid rgba(255, 255, 255, 0.8)",
      "display": "flex",
      "flex-direction": "row",
      "text-align": "left"
    });
    
    toolbarArea.appendTo(main);
    
    var trackToolbar = $("<div/>");
    trackToolbar.css({
      "width": "60%",
      "height": "60px",
      "background": "#202020",
      "border": "1px solid rgba(255, 255, 255, 0.8)",
      "text-align": "left",
      "padding-top": "18px",
    });
    
    trackToolbar.appendTo(toolbarArea);
    
    var fxToolbar = $("<div/>");
    fxToolbar.css({
      "width": "40%",
      "height": "60px",
      "background": "#202020",
      "border": "1px solid rgba(255, 255, 255, 0.8)",
      "padding-top": "18px"
    });
        
    fxToolbar.appendTo(toolbarArea);
    
    var trackToolbar2 = $("<div/>");
    trackToolbar2.css({
      "width": "98.6%",
      "height": "60px",
      "background": "#202020",
      "border": "1px solid rgba(255, 255, 255, 0.8)",
      "text-align": "left",
      "padding-top": "18px"
    });
    
    trackToolbar2.appendTo(main);
    
    var fxPlayer = $("<audio/>");
    fxPlayer.css({
      "position": "absolute",
      "display": "none"
    })
      .attr({
      "autoplay": false,
      "loop": false,
      "controls": false
    })
      .prop("preservesPitch", false);
    
    fxPlayer.appendTo(element);
    
    var playerNumber = $("<select style='width:120px; height:50px; font-weight:bold; font-size: 20px; color:white; background: #212121; border: 4px outset silver; border-radius:6px; margin-left:9px;'></select>");
    playerNumber.appendTo(trackToolbar);
    
    var playerOptions = $("<option value='player1'>Player 1</option><option value='player2'>Player 2</option><option value='player3'>Player 3</option><option value='player4'>Player 4</option>");
    playerOptions.appendTo(playerNumber);
    
    var remainTracks = $("<input type='text'/>");
    remainTracks.css({
      "width": "55px",
      "height": "50px",
      "font-size": "20px",
      "font-weight": "bold",
      "color": "white",
      "margin-left": "9px",
      "background": "#000029",
      "border-radius": "6px"
    }).val($("#tracklist li").length);
    
    remainTracks.appendTo(trackToolbar);
    
    var trackLoadBtn = $("<button class='toolbuttons5'><img src='Symbole/open.png' style='width:16px; height:16px;'>&nbsp;Load Track</button>");
    trackLoadBtn.css({
      "width": "200px",
      "height": "50px",
      "font-size": "20px",
      "margin-left": "9px",
      "background": "#000029",
      "border": "4px outset silver"
    });
    
    trackLoadBtn.appendTo(trackToolbar);
    
    var trackFile = $("<input type='file' style='display:none;' accept='audio/mp3'/>");
    trackFile.appendTo(trackToolbar);
    
    var trackName = $("<input type='text' placeholder='Trackname'>");
    trackName.css({
      "width": "150px",
      "height": "50px",
      "font-size": "20px",
      "font-weight": "bold",
      "color": "white",
      "margin-left": "9px",
      "background": "#212121",
      "border-radius": "6px",
    });
    
    trackName.appendTo(trackToolbar);
    
    var addTrackBtn = $("<button class='toolbuttons'>+</button>");
    addTrackBtn.css({
      "width": "50px",
      "height": "50px",
      "font-size": "20px",
      "margin-left": "9px",
      "background": "#002929",
      "border-radius": "50%",
      "border": "4px outset silver"
    });
    
    addTrackBtn.appendTo(trackToolbar);
    
    var trackMultiFile = $("<input type='file' style='display:none;' accept='audio/mp3' multiple/>");
    trackMultiFile.appendTo(trackToolbar);
    
    var addTrackMultiBtn = $("<button class='toolbuttons'><img src='Symbole/plist2.png' style='width:16px; height:16px;'></button>");
    addTrackMultiBtn.css({
      "width": "50px",
      "height": "50px",
      "font-size": "20px",
      "margin-left": "9px",
      "background": "#000029",
      "border-radius": "50%",
      "border": "4px outset silver"
    });
    
    addTrackMultiBtn.appendTo(trackToolbar);
    
    var trackListFile = $("<input type='file' style='display:none;' id='trackListFile' accept='.html, .htm'/>");
    trackListFile.appendTo(trackToolbar2);
    
    var trackListCode = $("<input type='text' id='trackListCode' style='display:none;'/>");
    trackListCode.appendTo(trackToolbar2);
    
    var trackListLoadBtn = $("<button class='toolbuttons5'><img src='Symbole/open.png' style='width:16px; height:16px;'>&nbsp;Load Tracklist</button>");
    trackListLoadBtn.css({
      "width": "200px",
      "height": "50px",
      "font-size": "20px",
      "margin-left": "9px",
      "background": "#000029",
      "border": "4px outset silver"
    });
    
    trackListLoadBtn.appendTo(trackToolbar2);
    
    var addTrackListBtn = $("<button class='toolbuttons'>+</button>");
    addTrackListBtn.css({
      "width": "50px",
      "height": "50px",
      "font-size": "20px",
      "margin-left": "9px",
      "background": "#000029",
      "border-radius": "50%",
      "border": "4px outset silver"
    });
    
    addTrackListBtn.appendTo(trackToolbar2);
    
    var trackCountUpBtn = $("<button class='toolbuttons'>&laquo;</button>");
    trackCountUpBtn.css({
      "width": "50px",
      "height": "50px",
      "font-size": "20px",
      "margin-left": "9px",
      "background": "#292900",
      "border-radius": "50%",
      "border": "4px outset silver"
    });
    
    trackCountUpBtn.appendTo(trackToolbar);
    
    var trackCountDownBtn = $("<button class='toolbuttons'>&raquo;</button>");
    trackCountDownBtn.css({
      "width": "50px",
      "height": "50px",
      "font-size": "20px",
      "margin-left": "9px",
      "background": "#292900",
      "border-radius": "50%",
      "border": "4px outset silver"
    });
    
    trackCountDownBtn.appendTo(trackToolbar);
    
    var trackUpBtn = $("<button class='toolbuttons'>&uArr;</button>");
    trackUpBtn.css({
      "width": "50px",
      "height": "50px",
      "font-size": "16px",
      "margin-left": "9px",
      "background": "#290000",
      "border-radius": "50%",
      "border": "4px outset silver"
    });
    
    trackUpBtn.appendTo(trackToolbar);
    
    var trackDownBtn = $("<button class='toolbuttons'>&dArr;</button>");
    trackDownBtn.css({
      "width": "50px",
      "height": "50px",
      "font-size": "20px",
      "margin-left": "9px",
      "background": "#290000",
      "border-radius": "50%",
      "border": "4px outset silver"
    });
    
    trackDownBtn.appendTo(trackToolbar);
    
    var trackSaveTxt = $("<input type='text' id='trackSaveTxt' placeholder='Trackname' value='4playersDJSet'/>");
    trackSaveTxt.css({
      "width": "350px",
      "height": "50px",
      "font-size": "20px",
      "font-weight": "bold",
      "color": "white",
      "margin-left": "9px",
      "background": "#212121",
      "border-radius": "6px",
    });
    
    trackSaveTxt.appendTo(trackToolbar2);
    
    var trackSaveBtn = $("<button class='toolbuttons5'><img src='Symbole/export.png' style='width:16px; height:16px;'>&nbsp;Save Tracklist</button>");
    trackSaveBtn.css({
      "width": "250px",
      "height": "50px",
      "font-size": "20px",
      "margin-left": "9px",
      "background": "#000029",
      "border": "4px outset silver"
    });
    
    trackSaveBtn.appendTo(trackToolbar2);
    
    var trackDelBtn = $("<button class='toolbuttons'><img src='Symbole/delete.png' style='width:20px; height:20px;'></button>");
    trackDelBtn.css({
      "width": "50px",
      "height": "50px",
      "font-size": "16px",
      "margin-left": "9px",
      "background": "#290000",
      "border-radius": "50%",
      "border": "4px outset silver"
    });
    
    trackDelBtn.appendTo(trackToolbar2);
    
    var squishFreq = $("<select style='width:100px; height:50px; font-weight:bold; font-size: 20px; color:white; background: #212121; border: 4px outset silver; border-radius:6px; margin-left:9px;'></select>");
    squishFreq.appendTo(trackToolbar);
    
    var squishOptions = $("<option value='0.25'>4 Hz</option><option value='0.5'>2 Hz</option><option value='0.75'>1.33 Hz</option><option value='1' selected>1 Hz</option><option value='2'>0.5 Hz</option><option value='4'>0.25 Hz</option>");
    squishOptions.appendTo(squishFreq);
    
    var fxLoadBtn = $("<button class='toolbuttons5'><img src='Symbole/open.png' style='width:16px; height:16px;'>&nbsp;Load FX-Sound</button>");
    fxLoadBtn.css({
      "width": "170px",
      "height": "50px",
      "font-size": "16px",
      "margin-left": "9px",
      "background": "#000029",
      "border": "4px outset silver"
    });
    
    fxLoadBtn.appendTo(fxToolbar);
    
    var fxFile = $("<input type='file' style='display:none;'/>");
    fxFile.appendTo(fxToolbar);
    
    var fxFileName = $("<input type='text' placeholder='FX-Filename'/>");
    fxFileName.css({
      "width": "180px",
      "height": "50px",
      "margin-left": "9px",
      "font-size": "16px",
      "font-weight": "bold",
      "color": "white",
      "background": "#212121",
      "border-radius": "6px"
    });
    
    fxFileName.appendTo(fxToolbar);
    
    var fxFileLabel = $("<input type='text'/ placeholder='FX-Filename'>");
    fxFileLabel.css({
      "width": "180px",
      "height": "50px",
      "margin-left": "9px",
      "font-size": "16px",
      "font-weight": "bold",
      "color": "white",
      "background": "#212121",
      "border-radius": "6px"
    });
    
    fxFileLabel.appendTo(fxToolbar);
    
    var addFxBtn = $("<button class='toolbuttons'>+</button>");
    addFxBtn.css({
      "width": "50px",
      "height": "50px",
      "font-size": "16px",
      "margin-left": "9px",
      "background": "#002929",
      "border-radius": "50%",
      "border": "4px outset silver"
    });
    
    addFxBtn.appendTo(fxToolbar);
    
    var playFxBtn = $("<button class='toolbuttons'>FX</button>");
    playFxBtn.css({
      "width": "50px",
      "height": "50px",
      "font-size": "16px",
      "margin-left": "9px",
      "background": "#002929",
      "border-radius": "50%",
      "border": "4px outset silver"
    });
    
    playFxBtn.appendTo(fxToolbar);
    
    var bottomMain = $("<div/>");
    bottomMain.css({
      "width": "98.6%",
      "height": "80px",
      "border": "1px solid rgba(255, 255, 255, 0.8)",
      "background": "#212121",
      "padding-top": "16px"
    });
    
    bottomMain.appendTo(main);
    
    var mixToggle = $("<button class='toolbuttons5'>Mixer</button>");
    mixToggle.css({
      "height": "50px",
      "font-size": "20px",
      "border": "2px outset silver",
      "margin-top": "6px"
    });
    
    mixToggle.appendTo(bottomMain);
    
    mixToggle.on("click", function() {
      mediaLibArea.toggle();
      mixerBox.toggle();
    });
    
    var infoBox = $("<div/>");
    infoBox.css({
      "width": "180px",
      "height": "20px",
      "background": "rgba(15, 15, 15, 0.6)",
      "border": "4px solid white",
      "padding": "4px",
      "font-size": "16px",
      "font-weight": "bold",
      "color": "white",
      "text-align": "center",
      "position": "absolute",
      "left": "12px",
      "top": "12px",
      "border-radius": "6px",
      "display": "none"
    });
    
    infoBox.appendTo(element);
    
    var trackBox = $("<div/>");
    trackBox.css({
      "width": "160px",
      "height": "16px",
      "background": "rgba(15, 15, 15, 0.6)",
      "border": "4px solid white",
      "padding": "2px",
      "font-size": "12px",
      "font-weight": "bold",
      "color": "white",
      "text-align": "center",
      "position": "absolute",
      "left": "12px",
      "top": "12px",
      "border-radius": "6px",
      "display": "none"
    });
    
    trackBox.appendTo(element);
    
    function showTitle(info) {
    infoBox.text(info);
    }
    
    playBtn1.on("mouseenter", function() {
      infoBox.text("Play/Pause");
    });
    
    playBtn1.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
    
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
      playBtn1.on("mouseleave", function() {
      infoBox.hide();
    });
    
    playBtn2.on("mouseenter", function() {
      infoBox.text("Play/Pause");
    });
    
    playBtn2.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
    
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
      playBtn2.on("mouseleave", function() {
      infoBox.hide();
    });
    
    playBtn3.on("mouseenter", function() {
      infoBox.text("Play/Pause");
    });
    
    playBtn3.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
    
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
      playBtn3.on("mouseleave", function() {
      infoBox.hide();
    });
    
    playBtn4.on("mouseenter", function() {
      infoBox.text("Play/Pause");
    });
    
    playBtn4.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
    
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
      playBtn4.on("mouseleave", function() {
      infoBox.hide();
    });
    
    
    stopBtn1.on("mouseenter", function() {
      infoBox.text("Stop");
    });
    
    stopBtn1.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
    
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    stopBtn1.on("mouseleave", function() {
      infoBox.hide();
    });
    
    stopBtn2.on("mouseenter", function() {
      infoBox.text("Stop");
    });
    
    stopBtn2.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
    
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    stopBtn2.on("mouseleave", function() {
      infoBox.hide();
    });
    
    stopBtn3.on("mouseenter", function() {
      infoBox.text("Stop");
    });
    
    stopBtn3.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
    
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    stopBtn3.on("mouseleave", function() {
      infoBox.hide();
    });
    
    stopBtn4.on("mouseenter", function() {
      infoBox.text("Stop");
    });
    
    stopBtn4.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
    
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    stopBtn4.on("mouseleave", function() {
      infoBox.hide();
    });
    
    rewBtn1.on("mouseenter", function() {
      infoBox.text("Rewind - 10s");
    });
    
    rewBtn1.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
    
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    rewBtn1.on("mouseleave", function() {
      infoBox.hide();
    });
    
    rewBtn2.on("mouseenter", function() {
      infoBox.text("Rewind - 10s");
    });
    
    rewBtn2.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
    
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    rewBtn2.on("mouseleave", function() {
      infoBox.hide();
    });
    
    rewBtn3.on("mouseenter", function() {
      infoBox.text("Rewind - 10s");
    });
    
    rewBtn3.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
    
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    rewBtn3.on("mouseleave", function() {
      infoBox.hide();
    });
    
    rewBtn4.on("mouseenter", function() {
      infoBox.text("Rewind - 10s");
    });
    
    rewBtn4.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
    
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    rewBtn4.on("mouseleave", function() {
      infoBox.hide();
    });
    
    forwBtn1.on("mouseenter", function() {
      infoBox.text("Forward - 10s");
    });
    
    forwBtn1.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
    
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    forwBtn1.on("mouseleave", function() {
      infoBox.hide();
    });
    
    forwBtn2.on("mouseenter", function() {
      infoBox.text("Forward - 10s");
    });
    
    forwBtn2.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
    
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    forwBtn2.on("mouseleave", function() {
      infoBox.hide();
    });
    
    forwBtn3.on("mouseenter", function() {
      infoBox.text("Forward - 10s");
    });
    
    forwBtn3.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
    
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    forwBtn3.on("mouseleave", function() {
      infoBox.hide();
    });
    
    forwBtn4.on("mouseenter", function() {
      infoBox.text("Forward - 10s");
    });
    
    forwBtn4.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
    
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    forwBtn4.on("mouseleave", function() {
      infoBox.hide();
    });
    
    skiprewBtn1.on("mouseenter", function() {
      var rdCtrl = playListRandomBtn.attr("style");
      
      if (rdCtrl) {
        infoBox.text("Random-Mode");
      } else {
        infoBox.text("Previous-Track");
      }
    });
    
    skiprewBtn1.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
    
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    skiprewBtn1.on("mouseleave", function() {
      infoBox.hide();
    });
    
    skiprewBtn2.on("mouseenter", function() {
      var rdCtrl = playListRandomBtn.attr("style");
      
      if (rdCtrl) {
        infoBox.text("Random-Mode");
      } else {
        infoBox.text("Previous-Track");
      }
    });
    
    skiprewBtn2.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
    
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    skiprewBtn2.on("mouseleave", function() {
      infoBox.hide();
    });
    
    skiprewBtn3.on("mouseenter", function() {
      var rdCtrl = playListRandomBtn.attr("style");
      
      if (rdCtrl) {
        infoBox.text("Random-Mode");
      } else {
        infoBox.text("Previous-Track");
      }
    });
    
    skiprewBtn3.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
    
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    skiprewBtn3.on("mouseleave", function() {
      infoBox.hide();
    });
    
    skiprewBtn4.on("mouseenter", function() {
      var rdCtrl = playListRandomBtn.attr("style");
      
      if (rdCtrl) {
        infoBox.text("Random-Mode");
      } else {
        infoBox.text("Previous-Track");
      }
    });
    
    skiprewBtn4.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
    
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    skiprewBtn4.on("mouseleave", function() {
      infoBox.hide();
    });
    
    skipforwBtn1.on("mouseenter", function() {
      var rdCtrl = playListRandomBtn.attr("style");
      
      if (rdCtrl) {
        infoBox.text("Random-Mode");
      } else {
        infoBox.text("Next Track");
      }
    });
    
    skipforwBtn1.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
    
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    skipforwBtn1.on("mouseleave", function() {
      infoBox.hide();
    });
    
    skipforwBtn2.on("mouseenter", function() {
      var rdCtrl = playListRandomBtn.attr("style");
      
      if (rdCtrl) {
        infoBox.text("Random-Mode");
      } else {
        infoBox.text("Next Track");
      }
    });
    
    skipforwBtn2.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
    
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    skipforwBtn2.on("mouseleave", function() {
      infoBox.hide();
    });
    
    skipforwBtn3.on("mouseenter", function() {
      var rdCtrl = playListRandomBtn.attr("style");
      
      if (rdCtrl) {
        infoBox.text("Random-Mode");
      } else {
        infoBox.text("Next Track");
      }
    });
    
    skipforwBtn3.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
    
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    skipforwBtn3.on("mouseleave", function() {
      infoBox.hide();
    });
    
    skipforwBtn4.on("mouseenter", function() {
      var rdCtrl = playListRandomBtn.attr("style");
      
      if (rdCtrl) {
        infoBox.text("Random-Mode");
      } else {
        infoBox.text("Next Track");
      }
    });
    
    skipforwBtn4.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
    
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    skipforwBtn4.on("mouseleave", function() {
      infoBox.hide();
    });
    
    pitchbend1.on("mouseenter", function() {
      infoBox.text("Pitch-Bending");
    });
    
    pitchbend1.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
    
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    pitchbend1.on("mouseleave", function() {
      infoBox.hide();
    });
    
    pitchbend2.on("mouseenter", function() {
      infoBox.text("Pitch-Bending");
    });
    
    pitchbend2.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
    
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    pitchbend2.on("mouseleave", function() {
      infoBox.hide();
    });
    
    pitchbend3.on("mouseenter", function() {
      infoBox.text("Pitch-Bending");
    });
    
    pitchbend3.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
    
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    pitchbend3.on("mouseleave", function() {
      infoBox.hide();
    });
    
    pitchbend4.on("mouseenter", function() {
      infoBox.text("Pitch-Bending");
    });
    
    pitchbend4.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
    
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    pitchbend4.on("mouseleave", function() {
      infoBox.hide();
    });
    
    squish1.on("mouseenter", function() {
      infoBox.text("Squish");
    });
    
    squish1.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
    
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    squish1.on("mouseleave", function() {
      infoBox.hide();
    });
    
    squish2.on("mouseenter", function() {
      infoBox.text("Squish");
    });
    
    squish2.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
    
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    squish2.on("mouseleave", function() {
      infoBox.hide();
    });
    
    squish3.on("mouseenter", function() {
      infoBox.text("Squish");
    });
    
    squish3.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
    
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    squish3.on("mouseleave", function() {
      infoBox.hide();
    });
    
    squish4.on("mouseenter", function() {
      infoBox.text("Squish");
    });
    
    squish4.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
    
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    squish4.on("mouseleave", function() {
      infoBox.hide();
    });
    
    playRev1.on("mouseenter", function() {
      infoBox.text("Play Track Reverse");
    });
    
    playRev1.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
    
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    playRev1.on("mouseleave", function() {
      infoBox.hide();
    });
    
    playRev2.on("mouseenter", function() {
      infoBox.text("Play Track Reverse");
    });
    
    playRev2.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
    
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    playRev2.on("mouseleave", function() {
      infoBox.hide();
    });
    
    playRev3.on("mouseenter", function() {
      infoBox.text("Play Track Reverse");
    });
    
    playRev3.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
    
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    playRev3.on("mouseleave", function() {
      infoBox.hide();
    });
    
    playRev4.on("mouseenter", function() {
      infoBox.text("Play Track Reverse");
    });
    
    playRev4.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
    
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    playRev4.on("mouseleave", function() {
      infoBox.hide();
    });
    
    chgPlayer1.on("mouseenter", function() {
      infoBox.text("Change To Player2");
    });
    
    chgPlayer1.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
    
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    chgPlayer1.on("mouseleave", function() {
      infoBox.hide();
    });
    
    chgPlayer2.on("mouseenter", function() {
      infoBox.text("Change To Player3");
    });
    
    chgPlayer2.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
    
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    chgPlayer2.on("mouseleave", function() {
      infoBox.hide();
    });
    
    chgPlayer3.on("mouseenter", function() {
      infoBox.text("Change To Player4");
    });
    
    chgPlayer3.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
    
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    chgPlayer3.on("mouseleave", function() {
      infoBox.hide();
    });
    
    chgPlayer4.on("mouseenter", function() {
      infoBox.text("Change To Player1");
    });
    
    chgPlayer4.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
    
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    chgPlayer4.on("mouseleave", function() {
      infoBox.hide();
    });
    
    crossFadeMode.on("mouseenter", function() {
      infoBox.text("Crossfade-Mode");
    });
    
    crossFadeMode.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
    
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    crossFadeMode.on("mouseleave", function() {
      infoBox.hide();
    });
    
    crossFadeTime.on("mouseenter", function() {
      infoBox.text("Crossfade-Time");
    });
    
    crossFadeTime.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
    
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    crossFadeTime.on("mouseleave", function() {
      infoBox.hide();
    });
    
    partTrack.on("mouseenter", function() {
      infoBox.text("Parttrack-Time");
    });
    
    partTrack.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
    
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    partTrack.on("mouseleave", function() {
      infoBox.hide();
    });
    
    playListForwBtn.on("mouseenter", function() {
      infoBox.text("Playlist Forward");
    });
    
    playListForwBtn.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
    
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    playListForwBtn.on("mouseleave", function() {
      infoBox.hide();
    });
    
    playListRevBtn.on("mouseenter", function() {
      infoBox.text("Playlist Reverse");
    });
    
    playListRevBtn.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
    
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    playListRevBtn.on("mouseleave", function() {
      infoBox.hide();
    });
    
    playListRandomBtn.on("mouseenter", function() {
      infoBox.text("Playlist Random");
    });
    
    playListRandomBtn.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
    
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    playListRandomBtn.on("mouseleave", function() {
      infoBox.hide();
    });
    
    addTrackBtn.on("mouseenter", function() {
      infoBox.text("Add Track in Library");
    });
    
    addTrackBtn.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
    
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    addTrackBtn.on("mouseleave", function() {
      infoBox.hide();
    });
    
    addTrackMultiBtn.on("mouseenter", function() {
      infoBox.text("Load Tracks");
    });
    
    addTrackMultiBtn.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
    
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    addTrackMultiBtn.on("mouseleave", function() {
      infoBox.hide();
    });
    
    addTrackListBtn.on("mouseenter", function() {
      infoBox.text("Load Tracklist");
    });
    
    addTrackListBtn.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
    
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    addTrackListBtn.on("mouseleave", function() {
      infoBox.hide();
    });
    
    trackCountUpBtn.on("mouseenter", function() {
      infoBox.text("Previous Track");
    });
    
    trackCountUpBtn.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
    
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    trackCountUpBtn.on("mouseleave", function() {
      infoBox.hide();
    });
    
    trackCountDownBtn.on("mouseenter", function() {
      infoBox.text("Next Track");
    });
    
    trackCountDownBtn.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
    
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    trackCountUpBtn.on("mouseleave", function() {
      infoBox.hide();
    });
    
    trackUpBtn.on("mouseenter", function() {
      infoBox.text("Move Track Up");
    });
    
    trackUpBtn.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
    
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    trackUpBtn.on("mouseleave", function() {
      infoBox.hide();
    });
    
    trackDownBtn.on("mouseenter", function() {
      infoBox.text("Move Track Down");
    });
    
    trackDownBtn.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
    
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    trackDownBtn.on("mouseleave", function() {
      infoBox.hide();
    });
    
    trackDelBtn.on("mouseenter", function() {
      infoBox.text("Delete Track");
    });
    
    trackDelBtn.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
    
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    trackDelBtn.on("mouseleave", function() {
      infoBox.hide();
    });
    
    addFxBtn.on("mouseenter", function() {
      infoBox.text("Add FX-Sound");
    });
    
    addFxBtn.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
    
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    addFxBtn.on("mouseleave", function() {
      infoBox.hide();
    });
    
    playFxBtn.on("mouseenter", function() {
      infoBox.text("Play FX-Sound");
    });
    
    playFxBtn.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
    
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    playFxBtn.on("mouseleave", function() {
      infoBox.hide();
    });
    
    remainTracks.on("mouseenter", function() {
      infoBox.text("Remaining-Tracks");
    });
    
    remainTracks.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
    
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    remainTracks.on("mouseleave", function() {
      infoBox.hide();
    });
    
    playBtn1.on("click", function() {
      var fullTime1 = player1.prop("duration");
      var status1 = $(this).attr("style");
      
      if (fullTime1 > 0) {
        if (!status1) {
          player1.trigger("play");
          $(this).css({
            "background": "linear-gradient(to right, navy, skyblue, navy)",
            "border-style": "inset",
            "border-color": "skyblue"
          });
        } else {
          player1.trigger("pause");
          $(this).removeAttr("style");
        }
      }
    });
    
    playBtn2.on("click", function() {
      var fullTime2 = player2.prop("duration");
      var status2 = $(this).attr("style");
      
      if (fullTime2 > 0) {
        if (!status2) {
          player2.trigger("play");
          $(this).css({
            "background": "linear-gradient(to right, navy, skyblue, navy)",
            "border-style": "inset",
            "border-color": "skyblue"
          });
        } else {
          player2.trigger("pause");
          $(this).removeAttr("style");
        }
      }
    });
    
    playBtn3.on("click", function() {
      var fullTime3 = player3.prop("duration");
      var status3 = $(this).attr("style");
      
      if (fullTime3 > 0) {
        if (!status3) {
          player3.trigger("play");
          $(this).css({
            "background": "linear-gradient(to right, navy, skyblue, navy)",
            "border-style": "inset",
            "border-color": "skyblue"
          });
        } else {
          player3.trigger("pause");
          $(this).removeAttr("style");
        }
      }
    });
    
    playBtn4.on("click", function() {
      var fullTime4 = player4.prop("duration");
      var status4 = $(this).attr("style");
      
      if (fullTime4 > 0) {
        if (!status4) {
          player4.trigger("play");
          $(this).css({
            "background": "linear-gradient(to right, navy, skyblue, navy)",
            "border-style": "inset",
            "border-color": "skyblue"
          });
        } else {
          player4.trigger("pause");
          $(this).removeAttr("style");
        }
      }
    });
    
    function setTime(djplayer, time, progress) {
      var fulltime = $("#"+djplayer).prop("duration");
      var timepos = $("#"+djplayer).prop("currentTime");
      var timeDelta = fulltime - timepos;
      var milliSec = Math.floor((timeDelta - Math.floor(timeDelta))*10);
      var deltaMin = parseInt(timeDelta/60 % 60);
      var deltaSec = parseInt(timeDelta % 60);
      
      deltaMin = (deltaMin < 10 ? "0"+deltaMin : deltaMin);
      deltaSec = (deltaSec < 10 ? "0"+deltaSec : deltaSec);
      
      if (fulltime > 0) {
        $("#"+time).text(deltaMin + ":" + deltaSec + "." + milliSec);
        $("#"+progress).css("width", timepos/fulltime*100 + "%");
        if (timeDelta < 20) {
          $("#"+progress).css("background","red");
        } else {
          $("#"+progress).css("background","lime");
        }
      } else {
        $("#"+time).text("00:00");
        $("#"+progress).css("width","100%");
      }
    }
    
    player1.on("timeupdate", function() {
      setTime("player1", "tracktime1", "timeProgress1");
    });
    
    player2.on("timeupdate", function() {
      setTime("player2", "tracktime2", "timeProgress2");
    });
    
    player3.on("timeupdate", function() {
      setTime("player3", "tracktime3", "timeProgress3");
    });
    
    player4.on("timeupdate", function() {
      setTime("player4", "tracktime4", "timeProgress4");
    });
    
    player1.on("durationchange", function() {
      setTime("player1", "tracktime1", "timeProgress1");
    });
    
    player2.on("durationchange", function() {
      setTime("player2", "tracktime2", "timeProgress2");
    });
    
    player3.on("durationchange", function() {
      setTime("player3", "tracktime3", "timeProgress3");
    });
    
    player4.on("durationchange", function() {
      setTime("player4", "tracktime4", "timeProgress4");
    });
    
    var autoPlayer1, autoPlayer2, autoPlayer3, autoPlayer4;
    
    function searchTime1(e) {
      clearTimeout(autoPlayer1);
      var fulltime1 = player1.prop("duration");
      var timeposX = e.offsetX;
      var searchSize1 = timebox1.width();
      var currTime1 = timeposX/searchSize1*fulltime1;
      
      if (fulltime1 > 0) {
        player1.prop("currentTime", currTime1);
      }
    }
    
    timebox1.on("click", searchTime1);
    
    function searchTime2(e) {
      clearTimeout(autoPlayer2);
      var fulltime2 = player2.prop("duration");
      var timeposX = e.offsetX;
      var searchSize2 = timebox2.width();
      var currTime2 = timeposX/searchSize2*fulltime2;
      
      if (fulltime2 > 0) {
        player2.prop("currentTime", currTime2);
      }
    }
    
    timebox2.on("click", searchTime2);
    
    function searchTime3(e) {
      clearTimeout(autoPlayer3);
      var fulltime3 = player3.prop("duration");
      var timeposX = e.offsetX;
      var searchSize3 = timebox3.width();
      var currTime3 = timeposX/searchSize3*fulltime3;
      
      if (fulltime3 > 0) {
        player3.prop("currentTime", currTime3);
      }
    }
    
    timebox3.on("click", searchTime3);
    
    function searchTime4(e) {
      clearTimeout(autoPlayer4);
      var fulltime4 = player4.prop("duration");
      var timeposX = e.offsetX;
      var searchSize4 = timebox4.width();
      var currTime4 = timeposX/searchSize4*fulltime4;
      
      if (fulltime4 > 0) {
        player4.prop("currentTime", currTime4);
      }
    }
    
    timebox4.on("click", searchTime4);
    
    function lookTime1(e) {
      var fulltime1 = player1.prop("duration");
      var timepos1 = player1.prop("currentTime");
      var xPos = e.pageX;
      var yPos = e.pageY;
      var timeposX = e.offsetX;
      var searchSize1 = timebox1.width();
      var boxdelta1 = searchSize1 - timeposX;
      var currTime1 = timeposX/searchSize1*fulltime1;
      var currTime11 = boxdelta1/searchSize1*fulltime1;
      
      var tDmin = parseInt(currTime1/60 % 60);
      var tDsec = parseInt(currTime1 % 60);
      var tbDmin = parseInt(currTime11/60 % 60);
      var tbSec = parseInt(currTime11 % 60);
      
      if (fulltime1 > 0) {
        tDmin = (tDmin < 10 ? "0"+tDmin : tDmin);
        tDsec = (tDsec < 10 ? "0"+tDsec : tDsec);
        tbDmin = (tbDmin < 10 ? "0"+tbDmin : tbDmin);
        tbSec = (tbSec < 10 ? "0"+tbSec : tbSec);
      
        trackBox.text(tDmin+":"+tDsec+ " / "+tbDmin+":"+tbSec);
      } else {
        trackBox.text("No Track loaded!");
      }
      
      trackBox.animate({left: xPos-trackBox.width()/2+"px", top: yPos-trackBox.height() - 30+"px"},1);
    }
    
    function lookTime2(e) {
      var fulltime2 = player2.prop("duration");
      var timepos2 = player2.prop("currentTime");
      var xPos = e.pageX;
      var yPos = e.pageY;
      var timeposX = e.offsetX;
      var searchSize2 = timebox2.width();
      var boxdelta2 = searchSize2 - timeposX;
      var currTime2 = timeposX/searchSize2*fulltime2;
      var currTime22 = boxdelta2/searchSize2*fulltime2;
      
      var tDmin = parseInt(currTime2/60 % 60);
      var tDsec = parseInt(currTime2 % 60);
      var tbDmin = parseInt(currTime22/60 % 60);
      var tbSec = parseInt(currTime22 % 60);
      
      if (fulltime2 > 0) {
        tDmin = (tDmin < 10 ? "0"+tDmin : tDmin);
        tDsec = (tDsec < 10 ? "0"+tDsec : tDsec);
        tbDmin = (tbDmin < 10 ? "0"+tbDmin : tbDmin);
        tbSec = (tbSec < 10 ? "0"+tbSec : tbSec);
      
        trackBox.text(tDmin+":"+tDsec+ " / "+tbDmin+":"+tbSec);
      } else {
        trackBox.text("No Track loaded!");
      }
      
      trackBox.animate({"left": xPos-trackBox.width()/2+"px", "top": yPos-trackBox.height() - 30+"px"},1);
    }
    
    function lookTime3(e) {
      var fulltime3 = player3.prop("duration");
      var timepos3 = player3.prop("currentTime");
      var xPos = e.pageX;
      var yPos = e.pageY;
      var timeposX = e.offsetX;
      var searchSize3 = timebox3.width();
      var boxdelta3 = searchSize3 - timeposX;
      var currTime3 = timeposX/searchSize3*fulltime3;
      var currTime33 = boxdelta3/searchSize3*fulltime3;
      
      var tDmin = parseInt(currTime3/60 % 60);
      var tDsec = parseInt(currTime3 % 60);
      var tbDmin = parseInt(currTime33/60 % 60);
      var tbSec = parseInt(currTime33 % 60);
      
      if (fulltime3 > 0) {
        tDmin = (tDmin < 10 ? "0"+tDmin : tDmin);
        tDsec = (tDsec < 10 ? "0"+tDsec : tDsec);
        tbDmin = (tbDmin < 10 ? "0"+tbDmin : tbDmin);
        tbSec = (tbSec < 10 ? "0"+tbSec : tbSec);
      
        trackBox.text(tDmin+":"+tDsec+ " / "+tbDmin+":"+tbSec);
      } else {
        trackBox.text("No Track loaded!");
      }
      
      trackBox.animate({"left": xPos-trackBox.width()/2+"px", "top": yPos-trackBox.height() - 30+"px"},1);
    }
    
    function lookTime4(e) {
      var fulltime4 = player4.prop("duration");
      var timepos4 = player4.prop("currentTime");
      var xPos = e.pageX;
      var yPos = e.pageY;
      var timeposX = e.offsetX;
      var searchSize4 = timebox4.width();
      var boxdelta4 = searchSize4 - timeposX;
      var currTime4 = timeposX/searchSize4*fulltime4;
      var currTime44 = boxdelta4/searchSize4*fulltime4;
      
      var tDmin = parseInt(currTime4/60 % 60);
      var tDsec = parseInt(currTime4 % 60);
      var tbDmin = parseInt(currTime44/60 % 60);
      var tbSec = parseInt(currTime44 % 60);
      
      if (fulltime4 > 0) {
        tDmin = (tDmin < 10 ? "0"+tDmin : tDmin);
        tDsec = (tDsec < 10 ? "0"+tDsec : tDsec);
        tbDmin = (tbDmin < 10 ? "0"+tbDmin : tbDmin);
        tbSec = (tbSec < 10 ? "0"+tbSec : tbSec);
      
        trackBox.text(tDmin+":"+tDsec+ " / "+tbDmin+":"+tbSec);
      } else {
        trackBox.text("No Track loaded!");
      }
      
      trackBox.animate({"left": xPos-trackBox.width()/2+"px", "top": yPos-trackBox.height() - 30+"px"},1);
    }
    
    timebox1.on("mouseenter", function(e) {
      var xPos = e.pageX;
      trackBox.show();
    });
    
    timebox1.on("mouseleave", function() {
      trackBox.hide();
    });
    
    timebox2.on("mouseenter", function(e) {
      var xPos = e.pageX;
      trackBox.show();
    });
    
    timebox2.on("mouseleave", function() {
      trackBox.hide();
    });
    
    timebox3.on("mouseenter", function(e) {
      var xPos = e.pageX;
      trackBox.show();
    });
    
    timebox3.on("mouseleave", function() {
      trackBox.hide();
    });
    
    timebox4.on("mouseenter", function(e) {
      var xPos = e.pageX;
      trackBox.animate({left: xPos - trackBox.width()/2+"px", top: timebox4.offset().top - trackBox.height() - 12+"px"},1).show();
    });
    
    timebox4.on("mouseleave", function() {
      trackBox.hide();
    });
    
    timebox1.on("mousemove", lookTime1);
    timebox2.on("mousemove", lookTime2);
    timebox3.on("mousemove", lookTime3);
    timebox4.on("mousemove", lookTime4);
    
    timebox1.on("mousedown", function() {
      $(this).on("mousemove", searchTime1);
    });
    
    timebox1.on("mouseup", function() {
      $(this).off("mousemove").on("mousemove", lookTime1);
    });
    
    timebox2.on("mousedown", function() {
      $(this).on("mousemove", searchTime2);
    });
    
    timebox2.on("mouseup", function() {
      $(this).off("mousemove").on("mousemove", lookTime2);
    });
    
    timebox3.on("mousedown", function() {
      $(this).on("mousemove", searchTime3);
    });
    
    timebox3.on("mouseup", function() {
      $(this).off("mousemove").on("mousemove", lookTime3);
    });
    
    timebox4.on("mousedown", function() {
      $(this).on("mousemove", searchTime4);
    });
    
    timebox4.on("mouseup", function() {
      $(this).off("mousemove").on("mousemove", lookTime4);
    });
    
    var fxControlMode = $("<div/>");
    fxControlMode.css({
      "background": "rgba(15, 15, 15, 0.8)",
      "width": "200px",
      "height": "50px",
      "text-align": "center",
      "padding": "12px",
      "position": "absolute",
      "left": "20px",
      "top": "40px",
      "transform": "rotate(-90deg)",
      "display": "none"
    });
    
    fxControlMode.appendTo(element);
    
    var fxVolController = $("<input type='range' class='slider'>");
    fxVolController.css({
      "width": "170px",
      "height": "16px",
      "margin-top": "16px"
    })
      .attr({
      "max": 1,
      "min": 0,
      "step": 0.01,
      "value": 0.2
    });
    
    playFxBtn.on("contextmenu", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      
      fxControlMode.animate({left: xPos-fxControlMode.width()/2 + "px", top: yPos-3*fxControlMode.height() - 20 + "px"},1).show();
      return false;
    });
    
    var closeFxMode;
    
    fxControlMode.on("mouseenter", function() {
      clearTimeout(closeFxMode);
    });
    
    fxControlMode.on("mouseleave", function() {
      closeFxMode = setTimeout(function() {
        fxControlMode.hide();
      },1600);
    });
    
    fxVolController.appendTo(fxControlMode);
    
    fader1.on("change", function() {
      var volMix1 = volMixer1.val();
      var volMix3 = volMixer3.val();
      var fadeVal1 = $(this).val();
      
      player1.prop("volume", volMix1*fadeVal1);
      player3.prop("volume", volMix3*fadeVal1);
    });
    
    fader1.on("mousemove", function() {
      $(this).trigger("change");
    });
    
    fader2.on("change", function() {
      var volMix2 = volMixer2.val();
      var volMix4 = volMixer4.val();
      var fadeVal2 = $(this).val();
      
      player2.prop("volume", volMix2*fadeVal2);
      player4.prop("volume", volMix4*fadeVal2);
    });
    
    fader2.on("mousemove", function() {
      $(this).trigger("change");
    });
    
    function crossfade121() {
      var fadeVal2 = parseFloat(fader2.val());
      var crossTime = crossFadeTime.val();
      fader2.val(fadeVal2 + 0.01).trigger("change");
      
      if (fadeVal2 < 1) {
        setTimeout(crossfade121, crossTime*10);
      }
    }
    
    function crossfade122() {
      var fadeVal1 = fader1.val();
      var crossTime = crossFadeTime.val();
      fader1.val(fadeVal1 - 0.01).trigger("change");
      
      if (fadeVal1 > 0) {
        setTimeout(crossfade122, crossTime*10);
      }
    }
    
    function crossfade123() {
      var fadeVal2 = parseFloat(fader2.val());
      var crossTime = crossFadeTime.val();
      fader2.val(fadeVal2 + 0.01).trigger("change");
      
      if (fadeVal2 < 1) {
        setTimeout(crossfade123, crossTime*5);
      }
    }
    
    function crossfade124() {
      var fadeVal1 = fader1.val();
      var crossTime = crossFadeTime.val();
      fader1.val(fadeVal1 - 0.01).trigger("change");
      
      if (fadeVal1 > 0) {
        setTimeout(crossfade124, crossTime*5);
      }
    }
    
    function crossfade125() {
      var fadeVal2 = parseFloat(fader2.val());
      var crossTime = crossFadeTime.val();
      fader2.val(fadeVal2 + 0.01).trigger("change");
      
      if (fadeVal2 < 1) {
        setTimeout(crossfade123, crossTime*5/2);
      }
    }
    
    function crossfade126() {
      var fadeVal1 = fader1.val();
      var crossTime = crossFadeTime.val();
      fader1.val(fadeVal1 - 0.01).trigger("change");
      
      if (fadeVal1 > 0) {
        setTimeout(crossfade124, crossTime*5/2);
      }
    }
    
    function crossfade231() {
      var fadeVal1 = parseFloat(fader1.val());
      var crossTime = crossFadeTime.val();
      fader1.val(fadeVal1 + 0.01).trigger("change");
      
      if (fadeVal1 < 1) {
        setTimeout(crossfade231, crossTime*10);
      }
    }
    
    function crossfade232() {
      var fadeVal2 = fader2.val();
      var crossTime = crossFadeTime.val();
      fader2.val(fadeVal2 - 0.01).trigger("change");
      
      if (fadeVal2 > 0) {
        setTimeout(crossfade232, crossTime*10);
      }
    }
    
    function crossfade233() {
      var fadeVal1 = parseFloat(fader1.val());
      var crossTime = crossFadeTime.val();
      fader1.val(fadeVal1 + 0.01).trigger("change");
      
      if (fadeVal1 < 1) {
        setTimeout(crossfade233, crossTime*5);
      }
    }
    
    function crossfade234() {
      var fadeVal2 = fader2.val();
      var crossTime = crossFadeTime.val();
      fader2.val(fadeVal2 - 0.01).trigger("change");
      
      if (fadeVal2 > 0) {
        setTimeout(crossfade234, crossTime*5);
      }
    }
    
    function crossfade235() {
      var fadeVal1 = parseFloat(fader1.val());
      var crossTime = crossFadeTime.val();
      fader1.val(fadeVal1 + 0.01).trigger("change");
      
      if (fadeVal1 < 1) {
        setTimeout(crossfade233, crossTime*5/2);
      }
    }
    
    function crossfade236() {
      var fadeVal2 = fader2.val();
      var crossTime = crossFadeTime.val();
      fader2.val(fadeVal2 - 0.01).trigger("change");
      
      if (fadeVal2 > 0) {
        setTimeout(crossfade234, crossTime*5/2);
      }
    }
    
    function fadeOut1(djplayer) {
      fader2.val(1).trigger("change");
      $("#"+djplayer).trigger("play");
    }
    
    function fadeOut2(djplayer) {
      fader1.val(1).trigger("change");
      $("#"+djplayer).trigger("play");
    }
    
    function fadeIn1(djplayer) {
      var crossTime = crossFadeTime.val();
      setTimeout(function() {
        fader1.val(0).trigger("change");
      }, crossTime*1000);
      
      $("#"+djplayer).trigger("play");
    }
    
    function fadeIn2(djplayer) {
      var crossTime = crossFadeTime.val();
      setTimeout(function() {
        fader2.val(0).trigger("change");
      }, crossTime*1000);
      
      $("#"+djplayer).trigger("play");
    }
    
    function setCrossFade1() {
      var crMode = crossFadeMode.val();
      var crossTime = crossFadeTime.val();
      
      if (crMode === "Fade") {
        crossfade121();
        crossfade122();
        player2.trigger("play");
      } else if (crMode === "FadeOut") {
        fadeOut1("player2");
        crossfade122();
      } else if (crMode === "FadeIn") {
        crossfade121();
        fadeIn1("player2");
      } else if (crMode === "FadeInFast") {
        crossfade123();
        crossfade122();
        player2.trigger("play");
      } else if (crMode === "FadeTO") {
        crossfade121();
        setTimeout(crossfade124, crossTime*500);
        player2.trigger("play");
      } else if (crMode === "FadeInOut") {
        crossfade123();
        setTimeout(crossfade124, crossTime*500);
        player2.trigger("play");
      } else if (crMode === "FadeOutTO") {
        fadeOut1("player2");
        setTimeout(crossfade124, crossTime*500);
      } else if (crMode === "FadeInTO") {
        crossfade123();
        fadeIn1("player2");
      } else if (crMode === "FadeInOutFast") {
        crossfade125();
        setTimeout(crossfade126, crossTime*750);
        player2.trigger("play");
      }
    }
    
    chgPlayer1.on("click", function() {
      clearTimeout(autoPlayer1);
      fader2.val(1).trigger("change");
      fader1.val(0).trigger("change");
      player2.trigger("play");
    });
    
    chgPlayer1.on("contextmenu", function() {
      clearTimeout(autoPlayer1);
      setCrossFade1();
      return false;
    });
    
    function setCrossFade2() {
      var crMode = crossFadeMode.val();
      var crossTime = crossFadeTime.val();
      
      if (crMode === "Fade") {
        crossfade231();
        crossfade232();
        player3.trigger("play");
        console.log(fader2.val());
      } else if (crMode === "FadeOut") {
        fadeOut2("player3");
        crossfade232();
      } else if (crMode === "FadeIn") {
        crossfade231();
        fadeIn2("player3");
      } else if (crMode === "FadeInFast") {
        crossfade233();
        crossfade232();
        player3.trigger("play");
      } else if (crMode === "FadeTO") {
        crossfade231();
        setTimeout(crossfade234, crossTime*500);
        player3.trigger("play");
      } else if (crMode === "FadeInOut") {
        crossfade233();
        setTimeout(crossfade234, crossTime*500);
        player3.trigger("play");
      } else if (crMode === "FadeOutTO") {
        fadeOut2("player3");
        setTimeout(crossfade234, crossTime*500);
      } else if (crMode === "FadeInTO") {
        crossfade233();
        fadeIn2("player3");
      } else if (crMode === "FadeInOutFast") {
        crossfade235();
        setTimeout(crossfade236, crossTime*750);
        player3.trigger("play");
      }
    }
    
    chgPlayer2.on("click", function() {
      clearTimeout(autoPlayer2);
      fader2.val(0).trigger("change");
      fader1.val(1).trigger("change");
      player3.trigger("play");
    });
    
    chgPlayer2.on("contextmenu", function() {
      clearTimeout(autoPlayer2);
      setCrossFade2();
      return false;
    });
    
    function setCrossFade3() {
      var crMode = crossFadeMode.val();
      var crossTime = crossFadeTime.val();
      
      if (crMode === "Fade") {
        crossfade121();
        crossfade122();
        player4.trigger("play");
        console.log(fader2.val());
      } else if (crMode === "FadeOut") {
        fadeOut1("player4");
        crossfade122();
      } else if (crMode === "FadeIn") {
        crossfade121();
        fadeIn1("player4");
      } else if (crMode === "FadeInFast") {
        crossfade123();
        crossfade122();
        player4.trigger("play");
      } else if (crMode === "FadeTO") {
        crossfade121();
        setTimeout(crossfade124, crossTime*500);
        player4.trigger("play");
      } else if (crMode === "FadeInOut") {
        crossfade123();
        setTimeout(crossfade124, crossTime*500);
        player4.trigger("play");
      } else if (crMode === "FadeOutTO") {
        fadeOut1("player4");
        setTimeout(crossfade124, crossTime*500);
      } else if (crMode === "FadeInTO") {
        crossfade123();
        fadeIn1("player4");
      } else if (crMode === "FadeInOutFast") {
        crossfade125();
        setTimeout(crossfade126, crossTime*750);
        player4.trigger("play");
      }
    }
    
    chgPlayer3.on("click", function() {
      clearTimeout(autoPlayer3);
      fader1.val(0).trigger("change");
      fader2.val(1).trigger("change");
      player4.trigger("play");
    });
    
    chgPlayer3.on("contextmenu", function() {
      clearTimeout(autoPlayer3);
      setCrossFade3();
      return false;
    });
    
    function setCrossFade4() {
      var crMode = crossFadeMode.val();
      var crossTime = crossFadeTime.val();
      
      if (crMode === "Fade") {
        crossfade231();
        crossfade232();
        player1.trigger("play");
        console.log(fader2.val());
      } else if (crMode === "FadeOut") {
        fadeOut2("player1");
        crossfade232();
      } else if (crMode === "FadeIn") {
        crossfade231();
        fadeIn2("player1");
      } else if (crMode === "FadeInFast") {
        crossfade233();
        crossfade232();
        player1.trigger("play");
      } else if (crMode === "FadeTO") {
        crossfade231();
        setTimeout(crossfade234, crossTime*500);
        player1.trigger("play");
      } else if (crMode === "FadeInOut") {
        crossfade233();
        setTimeout(crossfade234, crossTime*500);
        player1.trigger("play");
      } else if (crMode === "FadeOutTO") {
        fadeOut2("player1");
        setTimeout(crossfade234, crossTime*500);
      } else if (crMode === "FadeInTO") {
        crossfade233();
        fadeIn2("player1");
      } else if (crMode === "FadeInOutFast") {
        crossfade235();
        setTimeout(crossfade236, crossTime*750);
        player1.trigger("play");
      }
    }
    
    chgPlayer4.on("click", function() {
      clearTimeout(autoPlayer4);
      fader1.val(1).trigger("change");
      fader2.val(0).trigger("change");
      player1.trigger("play");
    });
    
    chgPlayer4.on("contextmenu", function() {
      clearTimeout(autoPlayer4);
      setCrossFade4();
      return false;
    });
    
    function autoPlay1() {
      var fulltime1 = player1.prop("duration");
      var timepos1 = player1.prop("currentTime");
      var playRate1 = player1.prop("playbackRate");
      var aplayCtrl = autoplayBtn.attr("style");
      var apMode1 = autoplayFullBtn.attr("style");
      var apMode2 = autoplayPartBtn.attr("style");
      var crossTime = crossFadeTime.val();
      var partCross = partTrack.val();
      var apTimeFull = ((fulltime1 - timepos1)/playRate1 - crossTime)*1000;
      var apTimePart = ((fulltime1 - timepos1 - partCross)/playRate1)*1000;
      
      if (apMode1) {
        autoPlayer1 = setTimeout(setCrossFade1, apTimeFull);
      } else if (apMode2) {
        autoPlayer1 = setTimeout(setCrossFade1, apTimePart);
      }
    }
    
    function autoPlay2() {
      var fulltime2 = player2.prop("duration");
      var timepos2 = player2.prop("currentTime");
      var playRate2 = player2.prop("playbackRate");
      var aplayCtrl = autoplayBtn.attr("style");
      var apMode1 = autoplayFullBtn.attr("style");
      var apMode2 = autoplayPartBtn.attr("style");
      var crossTime = crossFadeTime.val();
      var partCross = partTrack.val();
      var apTimeFull = ((fulltime2 - timepos2)/playRate2 - crossTime)*1000;
      var apTimePart = ((fulltime2 - timepos2 - partCross)/playRate2)*1000;
      
      if (apMode1) {
        autoPlayer2 = setTimeout(setCrossFade2, apTimeFull);
      } else if (apMode2) {
        autoPlayer2 = setTimeout(setCrossFade2, apTimePart);
      }
    }
    
    function autoPlay3() {
      var fulltime3 = player3.prop("duration");
      var timepos3 = player3.prop("currentTime");
      var playRate3 = player3.prop("playbackRate");
      var aplayCtrl = autoplayBtn.attr("style");
      var apMode1 = autoplayFullBtn.attr("style");
      var apMode2 = autoplayPartBtn.attr("style");
      var crossTime = crossFadeTime.val();
      var partCross = partTrack.val();
      var apTimeFull = ((fulltime3 - timepos3)/playRate3 - crossTime)*1000;
      var apTimePart = ((fulltime3 - timepos3 - partCross)/playRate3)*1000;
      
      if (apMode1) {
        autoPlayer3 = setTimeout(setCrossFade3, apTimeFull);
      } else if (apMode2) {
        autoPlayer3 = setTimeout(setCrossFade3, apTimePart);
      }
    }
    
    function autoPlay4() {
      var fulltime4 = player4.prop("duration");
      var timepos4 = player4.prop("currentTime");
      var playRate4 = player4.prop("playbackRate");
      var aplayCtrl = autoplayBtn.attr("style");
      var apMode1 = autoplayFullBtn.attr("style");
      var apMode2 = autoplayPartBtn.attr("style");
      var crossTime = crossFadeTime.val();
      var partCross = partTrack.val();
      var apTimeFull = ((fulltime4 - timepos4)/playRate4 - crossTime)*1000;
      var apTimePart = ((fulltime4 - timepos4 - partCross)/playRate4)*1000;
      
      if (apMode1) {
        autoPlayer4 = setTimeout(setCrossFade4, apTimeFull);
      } else if (apMode2) {
        autoPlayer4 = setTimeout(setCrossFade4, apTimePart);
      }
    }
    
    autoplayBtn.on("click", function() {
      var aplayCtrl = autoplayBtn.attr("style");
      var status1 = playBtn1.attr("style");
      var status2 = playBtn2.attr("style");
      var status3 = playBtn3.attr("style");
      var status4 = playBtn4.attr("style");
      
      if(!aplayCtrl) {
        if (status1) {
          autoPlay1();
        } else if (status2) {
          autoPlay2();
        } else if (status3) {
          autoPlay3();
        } else if (status4) {
          autoPlay4();
        }
        
        autoplayBtn.css({
          "background": "linear-gradient(to right, green, lime, green)",
          "border-style": "inset",
          "border-color": "lime"
        });
      } else {
        clearTimeout(autoPlayer1);
        clearTimeout(autoPlayer2);
        clearTimeout(autoPlayer3);
        clearTimeout(autoPlayer4);
        $(this).removeAttr("style");
      }
    });
    
    player1.on("playing", function() {
      var fulltime1 = player1.prop("duration");
      var timepos1 = player1.prop("currentTime");
      var playRate1 = player1.prop("playbackRate");
      var partCross = partTrack.val();
      var aplayCtrl = autoplayBtn.attr("style");
      var aplimit1 = (fulltime1-timepos1)/playRate1;
      clearTimeout(autoPlayer1);
      
      if (aplayCtrl && aplimit1>partCross && fulltime1>=60) {
        autoPlay1();
      } else {
        clearTimeout(autoPlayer1);
        clearTimeout(autoPlayer2);
        clearTimeout(autoPlayer3);
        clearTimeout(autoPlayer4);
        autoplayBtn.removeAttr("style");
      }
      
      playBtn1.css({
        "background": "linear-gradient(to right, navy, skyblue, navy)",
        "border-style": "inset",
        "border-color": "skyblue"
      });
    });
    
    player1.on("pause", function() {
      clearTimeout(autoPlayer1);
      playBtn1.removeAttr("style");
    });
    
    player2.on("playing", function() {
      var fulltime2 = player2.prop("duration");
      var timepos2 = player2.prop("currentTime");
      var playRate2 = player2.prop("playbackRate");
      var partCross = partTrack.val();
      var aplayCtrl = autoplayBtn.attr("style");
      var aplimit2 = (fulltime2-timepos2)/playRate2;
      clearTimeout(autoPlayer2);
      
      if (aplayCtrl && aplimit2>partCross && fulltime2>=60) {
        autoPlay2();
      } else {
        clearTimeout(autoPlayer1);
        clearTimeout(autoPlayer2);
        clearTimeout(autoPlayer3);
        clearTimeout(autoPlayer4);
        autoplayBtn.removeAttr("style");
      }
      
      playBtn2.css({
        "background": "linear-gradient(to right, navy, skyblue, navy)",
        "border-style": "inset",
        "border-color": "skyblue"
      });
    });
    
    player2.on("pause", function() {
      clearTimeout(autoPlayer2);
      playBtn2.removeAttr("style");
    });
    
    player3.on("playing", function() {
      var fulltime3 = player3.prop("duration");
      var timepos3 = player3.prop("currentTime");
      var playRate3 = player3.prop("playbackRate");
      var partCross = partTrack.val();
      var aplayCtrl = autoplayBtn.attr("style");
      var aplimit3 = (fulltime3-timepos3)/playRate3;
      clearTimeout(autoPlayer3);
      
      if (aplayCtrl && aplimit3>partCross && fulltime3>=60) {
        autoPlay3();
      } else {
        clearTimeout(autoPlayer1);
        clearTimeout(autoPlayer2);
        clearTimeout(autoPlayer3);
        clearTimeout(autoPlayer4);
        autoplayBtn.removeAttr("style");
      }
      
      playBtn3.css({
        "background": "linear-gradient(to right, navy, skyblue, navy)",
        "border-style": "inset",
        "border-color": "skyblue"
      });
    });
    
    player3.on("pause", function() {
      clearTimeout(autoPlayer3);
      playBtn3.removeAttr("style");
    });
    
    player4.on("playing", function() {
      var fulltime4 = player4.prop("duration");
      var timepos4 = player4.prop("currentTime");
      var playRate4 = player4.prop("playbackRate");
      var partCross = partTrack.val();
      var aplayCtrl = autoplayBtn.attr("style");
      var aplimit4 = (fulltime4-timepos4)/playRate4;
      clearTimeout(autoPlayer4);
      
      if (aplayCtrl && aplimit4>partCross && fulltime4>=60) {
        autoPlay4();
      } else {
        clearTimeout(autoPlayer1);
        clearTimeout(autoPlayer2);
        clearTimeout(autoPlayer3);
        clearTimeout(autoPlayer4);
        autoplayBtn.removeAttr("style");
      }
      
      playBtn4.css({
        "background": "linear-gradient(to right, navy, skyblue, navy)",
        "border-style": "inset",
        "border-color": "skyblue"
      });
    });
    
    player4.on("pause", function() {
      clearTimeout(autoPlayer4);
      playBtn4.removeAttr("style");
    });
    
    crossFadeMode.on("change", function() {
      var crMode = crossFadeMode.val();
      var aplayCtrl = autoplayBtn.attr("style");
      var status1 = playBtn1.attr("style");
      var status2 = playBtn2.attr("style");
      var status3 = playBtn3.attr("style");
      var status4 = playBtn4.attr("style");
      
      if (status1 && aplayCtrl) {
        clearTimeout(autoPlayer1);
        autoPlay1();
      } else if (status2 && aplayCtrl) {
        clearTimeout(autoPlayer2);
        autoPlay2();
      } else if (status3 && aplayCtrl) {
        clearTimeout(autoPlayer3);
        autoPlay3();
      } else if (status4 && aplayCtrl) {
        clearTimeout(autoPlayer4);
        autoPlay4();
      }
      
      crossfadeImg.attr("src","symbole/"+crMode+".png");
      saveCrossfadeSettings();
    });
    
    autoplayFullBtn.on("click", function() {
      var apMode1 = autoplayFullBtn.attr("style");
      var aplayCtrl = autoplayBtn.attr("style");
      var status1 = playBtn1.attr("style");
      var status2 = playBtn2.attr("style");
      var status3 = playBtn3.attr("style");
      var status4 = playBtn4.attr("style");
      
      if (!apMode1) {
        autoplayPartBtn.removeAttr("style");
        partTrack.attr("disabled","disabled").val("0");
        $(this).css({
          "background": "linear-gradient(to right, #808000, yellow, #808000)",
          "border-style": "inset",
          "border-color": "yellow"
        });
      }
      
      if (status1 && aplayCtrl) {
    	clearTimeout(autoPlayer1);
    	autoPlay1();
     	} else if (status2 && aplayCtrl) {
    	clearTimeout(autoPlayer2);
    	autoPlay2();
     	} else if (status3 && aplayCtrl) {
    	clearTimeout(autoPlayer3);
    	autoPlay3();
     	} else if (status4 && aplayCtrl) {
    	clearTimeout(autoPlayer4);
    	autoPlay4();
     	}
    });
    
    autoplayPartBtn.on("click", function() {
      var apMode2 = autoplayPartBtn.attr("style");
      var aplayCtrl = autoplayBtn.attr("style");
      var status1 = playBtn1.attr("style");
      var status2 = playBtn2.attr("style");
      var status3 = playBtn3.attr("style");
      var status4 = playBtn4.attr("style");
      
      if (!apMode2) {
        autoplayFullBtn.removeAttr("style");
        partTrack.removeAttr("disabled").val("30");
        $(this).css({
          "background": "linear-gradient(to right, #808000, yellow, #808000)",
          "border-style": "inset",
          "border-color": "yellow"
        });
      }
      
      if (status1 && aplayCtrl) {
    	clearTimeout(autoPlayer1);
    	autoPlay1();
     	} else if (status2 && aplayCtrl) {
    	clearTimeout(autoPlayer2);
    	autoPlay2();
     	} else if (status3 && aplayCtrl) {
    	clearTimeout(autoPlayer3);
    	autoPlay3();
     	} else if (status4 && aplayCtrl) {
    	clearTimeout(autoPlayer4);
    	autoPlay4();
     	}
    });
    
    partTrack.on("change", function() {
      var aplayCtrl = autoplayBtn.attr("style");
      var status1 = playBtn1.attr("style");
      var status2 = playBtn2.attr("style");
      var status3 = playBtn3.attr("style");
      var status4 = playBtn4.attr("style");
      
      if (status1 && aplayCtrl) {
    	clearTimeout(autoPlayer1);
    	autoPlay1();
     	} else if (status2 && aplayCtrl) {
    	clearTimeout(autoPlayer2);
    	autoPlay2();
     	} else if (status3 && aplayCtrl) {
    	clearTimeout(autoPlayer3);
    	autoPlay3();
     	} else if (status4 && aplayCtrl) {
    	clearTimeout(autoPlayer4);
    	autoPlay4();
     	}
    });
    
    crossFadeTime.on("change", function() {
      var aplayCtrl = autoplayBtn.attr("style");
      var status1 = playBtn1.attr("style");
      var status2 = playBtn2.attr("style");
      var status3 = playBtn3.attr("style");
      var status4 = playBtn4.attr("style");
      
      if (status1 && aplayCtrl) {
    	clearTimeout(autoPlayer1);
    	autoPlay1();
     	} else if (status2 && aplayCtrl) {
    	clearTimeout(autoPlayer2);
    	autoPlay2();
     	} else if (status3 && aplayCtrl) {
    	clearTimeout(autoPlayer3);
    	autoPlay3();
     	} else if (status4 && aplayCtrl) {
    	clearTimeout(autoPlayer4);
    	autoPlay4();
     	}
      
      saveCrossfadeSettings();
    });
    
    var pitchPlay1, pitchPlay2, pitchPlay3, pitchPlay4;
    
    function stopBend1() {
      clearInterval(pitchPlay1);
    }
    
    function setBend(djplayer) {
      var playRate = $("#"+djplayer).prop("playbackRate");
      
      if (playRate >= settings.pitchlimit) {
        clearInterval(pitchPlay1);
      } else {
        $("#"+djplayer).prop("playbackRate", playRate + 0.01);
      }
    }
    
    function startBend() {
      pitchPlay1 = setInterval(function() {
        setBend("player1");
      },20);
    }
    
    function stopBendRew1() {
      clearInterval(pitchPlay2);
    }
    
    function setBendRew1(djplayer) {
      var playRate = $("#"+djplayer).prop("playbackRate");
      
      if (playRate < 1.01) {
        clearInterval(pitchPlay2);
      } else {
        $("#"+djplayer).prop("playbackRate", playRate - 0.01);
      }
    }
    
    function startBendRew() {
      pitchPlay2 = setInterval(function() {
        setBendRew1("player1");
      },10);
    }
    
    pitchbend1.on("mousedown", function(evt) {
      if (evt.which === 1) {
        stopBendRew1();
        startBend();
        $(this).css({
          "background": "linear-gradient(to right, #520054, #9800c6, #520054)",
          "border-style": "inset",
          "border-color": "#9800c6"
        });
      }
    });
        
    pitchbend1.on("mouseup", function(evt) {
      if (evt.which === 1) {
        stopBend1();
        startBendRew();
        $(this).css({
          "background": "#290029",
          "border-style": "outset",
          "border-color": "#290029"
        });
      }
    });
    
    player1.on("ratechange", function() {
      var aplayCtrl = autoplayBtn.attr("style");
      var status1 = playBtn1.attr("style");
      clearTimeout(autoPlayer1);
      
      if (aplayCtrl && status1) {
        autoPlay1();
      }
    });
    
    
    
    function startBend2() {
      pitchPlay1 = setInterval(function() {
        setBend("player2");
      },20);
    }
    
    function startBendRew2() {
      pitchPlay2 = setInterval(function() {
        setBendRew1("player2");
      },10);
    }
    
    pitchbend2.on("mousedown", function(evt) {
      if (evt.which === 1) {
        stopBendRew1();
        startBend2();
        $(this).css({
          "background": "linear-gradient(to right, #520054, #9800c6, #520054)",
          "border-style": "inset",
          "border-color": "#9800c6"
        });
      }
    });
        
    pitchbend2.on("mouseup", function(evt) {
      if (evt.which === 1) {
        stopBend1();
        startBendRew2();
        $(this).css({
          "background": "#290029",
          "border-style": "outset",
          "border-color": "#290029"
        });
      }
    });
    
    player2.on("ratechange", function() {
      var aplayCtrl = autoplayBtn.attr("style");
      var status2 = playBtn2.attr("style");
      clearTimeout(autoPlayer2);
      
      if (aplayCtrl && status2) {
        autoPlay2();
      }
    });
    
    
    
    function startBend3() {
      pitchPlay1 = setInterval(function() {
        setBend("player3");
      },20);
    }
    
    function startBendRew3() {
      pitchPlay2 = setInterval(function() {
        setBendRew1("player3");
      },10);
    }
    
    pitchbend3.on("mousedown", function(evt) {
      if (evt.which === 1) {
        stopBendRew1();
        startBend3();
        $(this).css({
          "background": "linear-gradient(to right, #520054, #9800c6, #520054)",
          "border-style": "inset",
          "border-color": "#9800c6"
        });
      }
    });
        
    pitchbend3.on("mouseup", function(evt) {
      if (evt.which === 1) {
        stopBend1();
        startBendRew3();
        $(this).css({
          "background": "#290029",
          "border-style": "outset",
          "border-color": "#290029"
        });
      }
    });
    
    player3.on("ratechange", function() {
      var aplayCtrl = autoplayBtn.attr("style");
      var status3 = playBtn3.attr("style");
      clearTimeout(autoPlayer3);
      
      if (aplayCtrl && status3) {
        autoPlay3();
      }
    });
    
    
    
    function startBend4() {
      pitchPlay1 = setInterval(function() {
        setBend("player4");
      },20);
    }
    
    function startBendRew4() {
      pitchPlay2 = setInterval(function() {
        setBendRew1("player4");
      },10);
    }
    
    pitchbend4.on("mousedown", function(evt) {
      if (evt.which === 1) {
        stopBendRew1();
        startBend4();
        $(this).css({
          "background": "linear-gradient(to right, #520054, #9800c6, #520054)",
          "border-style": "inset",
          "border-color": "#9800c6"
        });
      }
    });
        
    pitchbend4.on("mouseup", function(evt) {
      if (evt.which === 1) {
        stopBend1();
        startBendRew4();
        $(this).css({
          "background": "#290029",
          "border-style": "outset",
          "border-color": "#290029"
        });
      }
    });
    
    player4.on("ratechange", function() {
      var aplayCtrl = autoplayBtn.attr("style");
      var status4 = playBtn4.attr("style");
      clearTimeout(autoPlayer4);
      
      if (aplayCtrl && status4) {
        autoPlay4();
      }
    });
    
    var pitchMenuMod1 = $("<div/>");
    pitchMenuMod1.css({
      "width": "90px",
      "height": "200px",
      "overflow": "auto",
      "padding": "6px",
      "background": "rgba(15, 15, 15, 0.8)",
      "border": "2px outset rgba(255, 255, 255, 0.6)",
      "position": "absolute",
      "left": "20px",
      "top": "20px",
      "z-index": 200,
      "display": "none"
    }).appendTo(element);
    
    var pitchList1 = $("<ul id='pitchList1'></ul>");
    pitchList1.css({
      "padding": "1px",
      "margin": "1px",
      "font-size": "16px",
      "font-weight": "bold",
      "color": "white"
    }).appendTo(pitchMenuMod1);
    
    var pitchVals1 = $("<li style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>0.25</li><li style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>0.50</li><li style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>0.75</li><li style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>1.00</li><li style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>1.10</li><li style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>1.25</li><li style='padding-top:6px; padding-bottom:6px; cursor:pointer;'>1.50</li>");
    pitchVals1.appendTo(pitchList1);
    
    var pitchMenuMod2 = $("<div/>");
    pitchMenuMod2.css({
      "width": "90px",
      "height": "200px",
      "overflow": "auto",
      "padding": "6px",
      "background": "rgba(15, 15, 15, 0.8)",
      "border": "2px outset rgba(255, 255, 255, 0.6)",
      "position": "absolute",
      "left": "20px",
      "top": "20px",
      "z-index": 200,
      "display": "none"
    }).appendTo(element);
    
    var pitchList2 = $("<ul id='pitchList2'></ul>");
    pitchList2.css({
      "padding": "1px",
      "margin": "1px",
      "font-size": "16px",
      "font-weight": "bold",
      "color": "white"
    }).appendTo(pitchMenuMod2);
    
    var pitchVals2 = $("<li style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>0.25</li><li style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>0.50</li><li style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>0.75</li><li style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>1.00</li><li style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>1.10</li><li style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>1.25</li><li style='padding-top:6px; padding-bottom:6px; cursor:pointer;'>1.50</li>");
    pitchVals2.appendTo(pitchList2);
    
    var pitchMenuMod3 = $("<div/>");
    pitchMenuMod3.css({
      "width": "90px",
      "height": "200px",
      "overflow": "auto",
      "padding": "6px",
      "background": "rgba(15, 15, 15, 0.8)",
      "border": "2px outset rgba(255, 255, 255, 0.6)",
      "position": "absolute",
      "left": "20px",
      "top": "20px",
      "z-index": 200,
      "display": "none"
    }).appendTo(element);
    
    var pitchList3 = $("<ul id='pitchList3'></ul>");
    pitchList3.css({
      "padding": "1px",
      "margin": "1px",
      "font-size": "16px",
      "font-weight": "bold",
      "color": "white"
    }).appendTo(pitchMenuMod3);
    
    var pitchVals3 = $("<li style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>0.25</li><li style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>0.50</li><li style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>0.75</li><li style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>1.00</li><li style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>1.10</li><li style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>1.25</li><li style='padding-top:6px; padding-bottom:6px; cursor:pointer;'>1.50</li>");
    pitchVals3.appendTo(pitchList3);
    
    var pitchMenuMod4 = $("<div/>");
    pitchMenuMod4.css({
      "width": "90px",
      "height": "200px",
      "overflow": "auto",
      "padding": "6px",
      "background": "rgba(15, 15, 15, 0.8)",
      "border": "2px outset rgba(255, 255, 255, 0.6)",
      "position": "absolute",
      "left": "20px",
      "top": "20px",
      "z-index": 200,
      "display": "none"
    }).appendTo(element);
    
    var pitchList4 = $("<ul id='pitchList4'></ul>");
    pitchList4.css({
      "padding": "1px",
      "margin": "1px",
      "font-size": "16px",
      "font-weight": "bold",
      "color": "white"
    }).appendTo(pitchMenuMod4);
    
    var pitchVals4 = $("<li style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>0.25</li><li style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>0.50</li><li style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>0.75</li><li style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>1.00</li><li style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>1.10</li><li style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>1.25</li><li style='padding-top:6px; padding-bottom:6px; cursor:pointer;'>1.50</li>");
    pitchVals4.appendTo(pitchList4);
    
    pitchRange1.on("change", function() {
      var ptVal1 = $(this).val();
      player1.prop("playbackRate", ptVal1);
    });
    
    pitchRange1.on("mouseenter", function() {
      var playRate1 = player1.prop("playbackRate");
      infoBox.text("Pitch Player 1: " + Math.round(playRate1*100)/100);
    });
    
    pitchRange1.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
      var playRate1 = player1.prop("playbackRate");
    
      $(this).trigger("change");
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show().text("Pitch Player 1: " + Math.round(playRate1*100)/100);
    });
    
    pitchRange1.on("mouseleave", function() {
      infoBox.hide();
    });
    
    pitchRange2.on("change", function() {
      var ptVal2 = $(this).val();
      player2.prop("playbackRate", ptVal2);
    });
    
    pitchRange2.on("mouseenter", function() {
      var playRate2 = player2.prop("playbackRate");
      infoBox.text("Pitch Player 2: " + Math.round(playRate2*100)/100);
    });
    
    pitchRange2.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
      var playRate2 = player2.prop("playbackRate");
    
      $(this).trigger("change");
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show().text("Pitch Player 2: " + Math.round(playRate2*100)/100);
    });
    
    pitchRange2.on("mouseleave", function() {
      infoBox.hide();
    });
    
    pitchRange3.on("change", function() {
      var ptVal3 = $(this).val();
      player3.prop("playbackRate", ptVal3);
    });
    
    pitchRange3.on("mouseenter", function() {
      var playRate3 = player3.prop("playbackRate");
      infoBox.text("Pitch Player 3: " + Math.round(playRate3*100)/100);
    });
    
    pitchRange3.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
      var playRate3 = player3.prop("playbackRate");
    
      $(this).trigger("change");
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show().text("Pitch Player 3: " + Math.round(playRate3*100)/100);
    });
    
    pitchRange3.on("mouseleave", function() {
      infoBox.hide();
    });
    
    pitchRange4.on("change", function() {
      var ptVal4 = $(this).val();
      player4.prop("playbackRate", ptVal4);
    });
    
    pitchRange4.on("mouseenter", function() {
      var playRate4 = player4.prop("playbackRate");
      infoBox.text("Pitch Player 4: " + Math.round(playRate4*100)/100);
    });
    
    pitchRange4.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
      var playRate4 = player4.prop("playbackRate");
    
      $(this).trigger("change");
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show().text("Pitch Player 4: " + Math.round(playRate4*100)/100);
    });
    
    pitchRange4.on("mouseleave", function() {
      infoBox.hide();
    });
    
    pitchRange1.on("contextmenu", function() {
      $(this).val(1).trigger("change");
      return false;
    });
    
    pitchRange2.on("contextmenu", function() {
      $(this).val(1).trigger("change");
      return false;
    });
    
    pitchRange3.on("contextmenu", function() {
      $(this).val(1).trigger("change");
      return false;
    });
    
    pitchRange4.on("contextmenu", function() {
      $(this).val(1).trigger("change");
      return false;
    });
    
    pitchbend1.on("contextmenu", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      
      pitchMenuMod1.animate({left:xPos - pitchMenuMod1.width()/2+"px", top:yPos + pitchRange1.height() + 10},1).show();
      return false;
    });
    
    var closePitch1;
    
    pitchMenuMod1.on("mouseleave", function() {
      closePitch1 = setTimeout(function() {
        pitchMenuMod1.hide();
      },1500);
    });
    
    pitchMenuMod1.on("mouseenter", function() {
      clearTimeout(closePitch1);
    });
    
    pitchbend2.on("contextmenu", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      
      pitchMenuMod2.animate({left:xPos - pitchMenuMod2.width()/2+"px", top:yPos + pitchRange2.height() + 10},1).show();
      return false;
    });
    
    var closePitch2;
    
    pitchMenuMod2.on("mouseleave", function() {
      closePitch2 = setTimeout(function() {
        pitchMenuMod2.hide();
      },1500);
    });
    
    pitchMenuMod2.on("mouseenter", function() {
      clearTimeout(closePitch2);
    });
    
    pitchbend3.on("contextmenu", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      
      pitchMenuMod3.animate({left:xPos - pitchMenuMod3.width()/2+"px", top:yPos + pitchRange3.height() + 10},1).show();
      return false;
    });
    
    var closePitch3;
    
    pitchMenuMod3.on("mouseleave", function() {
      closePitch3 = setTimeout(function() {
        pitchMenuMod3.hide();
      },1500);
    });
    
    pitchMenuMod3.on("mouseenter", function() {
      clearTimeout(closePitch3);
    });
    
    pitchbend4.on("contextmenu", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      
      pitchMenuMod4.animate({left:xPos - pitchMenuMod4.width()/2+"px", top:yPos + pitchRange4.height() + 10},1).show();
      return false;
    });
    
    var closePitch4;
    
    pitchMenuMod4.on("mouseleave", function() {
      closePitch4 = setTimeout(function() {
        pitchMenuMod4.hide();
      },1500);
    });
    
    pitchMenuMod4.on("mouseenter", function() {
      clearTimeout(closePitch4);
    });
    
    pitchList1.on("mouseenter", function() {
      $("#pitchList1 li").on("mouseenter", function() {
        $(this).css("background", "#00b9ff");
      });
      
      $("#pitchList1 li").on("mouseleave", function() {
        $(this).css("background", "none");
      });
      
      $("#pitchList1 li").on("click", function() {
        pitchRange1.val($(this).text()).trigger("change");
        pitchMenuMod1.hide();
      });
      
      $("#pitchList1 li").on("contextmenu", function() {
        $(this).click();
        return false;
      });
    });
    
    pitchList1.on("mouseleave", function() {
      $("#pitchList1 li").off("mouseenter").off("mouseleave").off("click").off("contextmenu");
    });
    
    
    pitchList2.on("mouseenter", function() {
      $("#pitchList2 li").on("mouseenter", function() {
        $(this).css("background", "#00b9ff");
      });
      
      $("#pitchList2 li").on("mouseleave", function() {
        $(this).css("background", "none");
      });
      
      $("#pitchList2 li").on("click", function() {
        pitchRange2.val($(this).text()).trigger("change");
        pitchMenuMod2.hide();
      });
      
      $("#pitchList2 li").on("contextmenu", function() {
        $(this).click();
        return false;
      });
    });
    
    pitchList2.on("mouseleave", function() {
      $("#pitchList2 li").off("mouseenter").off("mouseleave").off("click").off("contextmenu");
    });
    
    
    pitchList3.on("mouseenter", function() {
      $("#pitchList3 li").on("mouseenter", function() {
        $(this).css("background", "#00b9ff");
      });
      
      $("#pitchList3 li").on("mouseleave", function() {
        $(this).css("background", "none");
      });
      
      $("#pitchList3 li").on("click", function() {
        pitchRange3.val($(this).text()).trigger("change");
        pitchMenuMod3.hide();
      });
      
      $("#pitchList3 li").on("contextmenu", function() {
        $(this).click();
        return false;
      });
    });
    
    pitchList3.on("mouseleave", function() {
      $("#pitchList3 li").off("mouseenter").off("mouseleave").off("click").off("contextmenu");
    });
    
    
    pitchList4.on("mouseenter", function() {
      $("#pitchList4 li").on("mouseenter", function() {
        $(this).css("background", "#00b9ff");
      });
      
      $("#pitchList4 li").on("mouseleave", function() {
        $(this).css("background", "none");
      });
      
      $("#pitchList4 li").on("click", function() {
        pitchRange4.val($(this).text()).trigger("change");
        pitchMenuMod4.hide();
      });
      
      $("#pitchList4 li").on("contextmenu", function() {
        $(this).click();
        return false;
      });
    });
    
    pitchList4.on("mouseleave", function() {
      $("#pitchList4 li").off("mouseenter").off("mouseleave").off("click").off("contextmenu");
    });
    
    stopBtn1.on("click", function() {
      player1.prop("currentTime", 0).trigger("pause");
    });
    
    stopBtn2.on("click", function() {
      player2.prop("currentTime", 0).trigger("pause");
    });
    
    stopBtn3.on("click", function() {
      player3.prop("currentTime", 0).trigger("pause");
    });
    
    stopBtn4.on("click", function() {
      player4.prop("currentTime", 0).trigger("pause");
    });
    
    rewBtn1.on("click", function() {
      clearTimeout(autoPlayer1);
      player1.prop("currentTime", player1.prop("currentTime") - settings.skiptime);
    });
    
    rewBtn2.on("click", function() {
      clearTimeout(autoPlayer2);
      player2.prop("currentTime", player2.prop("currentTime") - settings.skiptime);
    });
    
    rewBtn3.on("click", function() {
      clearTimeout(autoPlayer3);
      player3.prop("currentTime", player3.prop("currentTime") - settings.skiptime);
    });
    
    rewBtn4.on("click", function() {
      clearTimeout(autoPlayer4);
      player4.prop("currentTime", player4.prop("currentTime") - settings.skiptime);
    });
    
    forwBtn1.on("click", function() {
      clearTimeout(autoPlayer1);
      player1.prop("currentTime", player1.prop("currentTime") + settings.skiptime);
    });
    
    forwBtn2.on("click", function() {
      clearTimeout(autoPlayer2);
      player2.prop("currentTime", player2.prop("currentTime") + settings.skiptime);
    });
    
    forwBtn3.on("click", function() {
      clearTimeout(autoPlayer3);
      player3.prop("currentTime", player3.prop("currentTime") + settings.skiptime);
    });
    
    forwBtn4.on("click", function() {
      clearTimeout(autoPlayer4);
      player4.prop("currentTime", player4.prop("currentTime") + settings.skiptime);
    });
    
    function loadTrack(pitchnumber, number, djplayer, artist) {
      var track = $("#tracklist li:eq("+currentTrack+")").text();
      var pitchVals = $("#"+pitchnumber).val();
      $("#"+number).text(currentTrack+1);
      $("#"+djplayer).attr("src", settings.path+track+settings.extension);
      $("#"+artist).html("<marquee direction='left' scrollamount='6' behavior='alternate'>"+track+"</marquee>");
      $("#"+djplayer).prop("playbackRate", pitchVals);
    }
    
    trackLibList.on("mouseenter", function() {
      $("#tracklist li").on("click", function() {
        $("#tracklist li").removeClass("selTrack");
        currentTrack = $(this).index();
        $(this).addClass("selTrack");
      });
      
      $("#tracklist li").on("dblclick", function() {
        var pitchVals1 = pitchRange1.val();
        var pitchVals2 = pitchRange2.val();
        var pitchVals3 = pitchRange3.val();
        var pitchVals4 = pitchRange4.val();
        var plNumb = playerNumber.val();
        
        if (plNumb === "player1") {
          player1.attr("src", settings.path+$(this).text()+settings.extension);
          artist1.html("<marquee direction='left' scrollamount='6' behavior='alternate'>"+$(this).text()+"</marquee>");
          trackNumber1.text(currentTrack+1);
          player1.prop("playbackRate", pitchVals1);
          
        } else if (plNumb === "player2") {
          player2.attr("src", settings.path+$(this).text()+settings.extension);
          artist2.html("<marquee direction='left' scrollamount='6' behavior='alternate'>"+$(this).text()+"</marquee>");
          trackNumber2.text(currentTrack+1);
          player2.prop("playbackRate", pitchVals2);
          
        } else if (plNumb === "player3") {
          player3.attr("src", settings.path+$(this).text()+settings.extension);
          artist3.html("<marquee direction='left' scrollamount='6' behavior='alternate'>"+$(this).text()+"</marquee>");
          trackNumber3.text(currentTrack+1);
          player3.prop("playbackRate", pitchVals3);
          
        } else if (plNumb === "player4") {
          player4.attr("src", settings.path+$(this).text()+settings.extension);
          artist4.html("<marquee direction='left' scrollamount='6' behavior='alternate'>"+$(this).text()+"</marquee>");
          trackNumber4.html(currentTrack+1);
          player4.prop("playbackRate", pitchVals4);
        }
        
      });
      
      $("#tracklist li").on("mouseenter", function() {
        $(this).css("background", "#00b7ff");
      });
      
      $("#tracklist li").on("mouseleave", function() {
        $(this).css("background", "none");
      });
    });
    
    trackLibList.on("mouseleave", function() {
      $("#tracklist li").off("click").off("mouseenter").off("mouseleave").off("dblclick");
    });
    
    function trackForward() {
      $("#tracklist li").removeClass("selTrack");
      currentTrack++;
      
      if (currentTrack == $("#tracklist li").length) {
        currentTrack = 0;
      }
      
      $("#tracklist li:eq("+currentTrack+")").addClass("selTrack");
      remainTracks.val($("#tracklist li").length - currentTrack - 1);
    }
    
    function trackReverse() {
      $("#tracklist li").removeClass("selTrack");
      currentTrack--;
      
      if (currentTrack == -1) {
        currentTrack = $("#tracklist li").length - 1;
      }
      
      $("#tracklist li:eq("+currentTrack+")").addClass("selTrack");
      remainTracks.val($("#tracklist li").length - $("#tracklist li").length + currentTrack);
    }
    
    trackCountDownBtn.on("click", function() {
      var plNumb = playerNumber.val();
      var loadedTracks = trackLibList.html();
      
      if (loadedTracks !== "") {
        trackForward();
      	setPosition();
      
      	if (plNumb === "player1") {
          loadTrack("pitchRange1", "trackNumber1", "player1", "artist1");
      	} else if (plNumb === "player2") {
          loadTrack("pitchRange2", "trackNumber2", "player2", "artist2");
      	} else if (plNumb === "player3") {
          loadTrack("pitchRange3", "trackNumber3", "player3", "artist3");
      	} else if (plNumb === "player4") {
          loadTrack("pitchRange4", "trackNumber4", "player4", "artist4");
        }
      }
    });
    
    trackCountUpBtn.on("click", function() {
      var plNumb = playerNumber.val();
      var loadedTracks = trackLibList.html();
      
      if (loadedTracks !== "") {
        trackReverse();
      	setPosition();
      
      	if (plNumb === "player1") {
      	  loadTrack("pitchRange1", "trackNumber1", "player1", "artist1");
      	} else if (plNumb === "player2") {
       	  loadTrack("pitchRange2", "trackNumber2", "player2", "artist2");
      	} else if (plNumb === "player3") {
          loadTrack("pitchRange3", "trackNumber3", "player3", "artist3");
      	} else if (plNumb === "player4") {
          loadTrack("pitchRange4", "trackNumber4", "player4", "artist4");
      	}
      }
    });
    
    var random;
    
    function setRandom() {
      random = [];
      var trackNumbs = $("#tracklist li");
      for (var x = 0; x < trackNumbs.length; x++) {
        random.push($("#tracklist li:eq("+x+")").text());
      }
    }
    
    function playRandom(pitchnumber, number, djplayer, artist) {
      var pitchVals = $("#"+pitchnumber).val();
      var randomSize = random.length;
      var randomNumber = Math.floor(Math.random()*randomSize);
      $("#tracklist li").removeClass("selTrack");
      $("#"+djplayer).attr("src", settings.path+random[randomNumber]+settings.extension);
      $("#tracklist li:contains("+random[randomNumber]+")").addClass("selTrack");
      
      $(".selTrack:eq(0)").each(function() {
        currentTrack = $(this).index();
      });
      
      $("#"+number).text(currentTrack+1);
      $("#"+artist).html("<marquee direction='left' scrollamount='6' behavior='alternate'>"+random[randomNumber]+"</marquee>");
      random.splice(randomNumber,1);
      $("#"+djplayer).prop("playbackRate", pitchVals);
      remainTracks.val(randomSize - 1);
      
      if (randomSize < 2) {
        setRandom();
      }
    }
    
    playListForwBtn.on("click", function() {
      var plStatusForw = $(this).attr("style");
      
      if (!plStatusForw) {
        playListRevBtn.removeAttr("style");
        playListRandomBtn.removeAttr("style");
        $(this).css({
          "background": "linear-gradient(to right, navy, skyblue, navy)",
          "border-style": "inset",
          "border-color": "skyblue"
        });
      }
    });
    
    playListRevBtn.on("click", function() {
      var plStatusRev = $(this).attr("style");
      
      if (!plStatusRev) {
        playListForwBtn.removeAttr("style");
        playListRandomBtn.removeAttr("style");
        $(this).css({
          "background": "linear-gradient(to right, navy, skyblue, navy)",
          "border-style": "inset",
          "border-color": "skyblue"
        });
      }
    });
    
    playListRandomBtn.on("click", function() {
      var plStatusRd = $(this).attr("style");
      
      if (!plStatusRd) {
        playListForwBtn.removeAttr("style");
        playListRevBtn.removeAttr("style");
        $(this).css({
          "background": "linear-gradient(to right, navy, skyblue, navy)",
          "border-style": "inset",
          "border-color": "skyblue"
        });
        setRandom();
      }
    });
    
    function setPosition() {
    var trArea = trackLib.height();
    var trHead = $("#tracklist li").outerHeight();
    var trTrack = $("#tracklist li").outerHeight();
    var trPos = currentTrack * trTrack + trHead;
    var trScroll = trPos - trArea + 30;
    var plStatusRd = playListRandomBtn.attr("style");

    if (plStatusRd) {
      trackLib.animate({ scrollTop: trPos + "px" }, 10);
    } else {
      if (trPos > trArea) {
        trackLib.animate({ scrollTop: trScroll + "px" }, 10);
      } else if (currentTrack === 0) {
        trackLib.animate({ scrollTop: "-100px" }, 10);
      }
    }
  }
    
    skipforwBtn1.on("click", function() {
      var plStatusRd = playListRandomBtn.attr("style");
      var loadedTracks = trackLibList.html();
      
      if (loadedTracks !== "") {
          if (plStatusRd) {
          playRandom("pitchRange1", "trackNumber1", "player1", "artist1");
      	} else {
          trackForward();
          loadTrack("pitchRange1", "trackNumber1", "player1", "artist1");
      	}
        setPosition();
      }
    });
    
    skiprewBtn1.on("click", function() {
      var plStatusRd = playListRandomBtn.attr("style");
      var loadedTracks = trackLibList.html();
      
      if (loadedTracks !== "") {
          if (plStatusRd) {
          playRandom("pitchRange1", "trackNumber1", "player1", "artist1");
      	} else {
          trackReverse();
          loadTrack("pitchRange1", "trackNumber1", "player1", "artist1");
      	}
      setPosition();
      }
    });
    
    
    skipforwBtn2.on("click", function() {
      var plStatusRd = playListRandomBtn.attr("style");
      var loadedTracks = trackLibList.html();
      
      if (loadedTracks !== "") {
        if (plStatusRd) {
          playRandom("pitchRange2", "trackNumber2", "player2", "artist2");
      	} else {
          trackForward();
          loadTrack("pitchRange2", "trackNumber2", "player2", "artist2");
      	}
        setPosition();
      }
    });
    
    skiprewBtn2.on("click", function() {
      var plStatusRd = playListRandomBtn.attr("style");
      var loadedTracks = trackLibList.html();
      
     if (loadedTracks !== "") {
       if (plStatusRd) {
          playRandom("pitchRange2", "trackNumber2", "player2", "artist2");
      	} else {
          trackReverse();
          loadTrack("pitchRange2", "trackNumber2", "player2", "artist2");
      	}
        setPosition();
     } 
    });
    
    
    skipforwBtn3.on("click", function() {
      var plStatusRd = playListRandomBtn.attr("style");
      var loadedTracks = trackLibList.html();
      
      if (loadedTracks !== "") {
        if (plStatusRd) {
          playRandom("pitchRange3", "trackNumber3", "player3", "artist3");
      	} else {
          trackForward();
          loadTrack("pitchRange3", "trackNumber3", "player3", "artist3");
      	}
      setPosition();
      }
    });
    
    skiprewBtn3.on("click", function() {
      var plStatusRd = playListRandomBtn.attr("style");
      var loadedTracks = trackLibList.html();
      
      
      if (loadedTracks !== "") {
        if (plStatusRd) {
          playRandom("pitchRange3", "trackNumber3", "player3", "artist3");
      	} else {
          trackReverse();
          loadTrack("pitchRange3", "trackNumber3", "player3", "artist3");
      	}
      setPosition();
      }
    });
    
    
    skipforwBtn4.on("click", function() {
      var plStatusRd = playListRandomBtn.attr("style");
      var loadedTracks = trackLibList.html();
      
      if (loadedTracks !== "") {
        if (plStatusRd) {
          playRandom("pitchRange4", "trackNumber4", "player4", "artist4");
      	} else {
          trackForward();
          loadTrack("pitchRange4", "trackNumber4", "player4", "artist4");
      	}
      setPosition();
      }
    });
    
    skiprewBtn4.on("click", function() {
      var plStatusRd = playListRandomBtn.attr("style");
      var loadedTracks = trackLibList.html();
      
      if (loadedTracks !== "") {
        if (plStatusRd) {
          playRandom("pitchRange4", "trackNumber4", "player4", "artist4");
      	} else {
          trackReverse();
          loadTrack("pitchRange4", "trackNumber4", "player4", "artist4");
      	}
      setPosition();
      }
    });
    
    trackChangeBtn.on("click", function() {
      var trCstatus = $(this).attr("style");
      
      if (!trCstatus) {
        $(this).css({
          "background": "linear-gradient(to right, darkred, red, darkred)",
          "border-style": "inset",
          "border-color": "red"
        });
      } else {
        $(this).removeAttr("style");
      }
    });
    
    player1.on("ended", function() {
      var plStatusForw = playListForwBtn.attr("style");
      var plStatusRev = playListRevBtn.attr("style");
      var plStatusRd = playListRandomBtn.attr("style");
      var trCstatus = trackChangeBtn.attr("style");
      var loadedTracks = trackLibList.html();
      
      if (trCstatus && loadedTracks !== "") {
        if (plStatusForw) {
          trackForward();
          loadTrack("pitchRange1", "trackNumber1", "player1", "artist1");
        } else if (plStatusRev) {
          trackReverse();
          loadTrack("pitchRange1", "trackNumber1", "player1", "artist1");
        } else if (plStatusRd) {
          playRandom("pitchRange1", "trackNumber1", "player1", "artist1");
        }
      }
    });
    
    player2.on("ended", function() {
      var plStatusForw = playListForwBtn.attr("style");
      var plStatusRev = playListRevBtn.attr("style");
      var plStatusRd = playListRandomBtn.attr("style");
      var trCstatus = trackChangeBtn.attr("style");
      var loadedTracks = trackLibList.html();
      
      if (trCstatus && loadedTracks !== "") {
        if (plStatusForw) {
          trackForward();
          loadTrack("pitchRange2", "trackNumber2", "player2", "artist2");
        } else if (plStatusRev) {
          trackReverse();
          loadTrack("pitchRange2", "trackNumber2", "player2", "artist2");
        } else if (plStatusRd) {
          playRandom("pitchRange2", "trackNumber2", "player2", "artist2");
        }
      }
    });
    
    player3.on("ended", function() {
      var plStatusForw = playListForwBtn.attr("style");
      var plStatusRev = playListRevBtn.attr("style");
      var plStatusRd = playListRandomBtn.attr("style");
      var trCstatus = trackChangeBtn.attr("style");
      var loadedTracks = trackLibList.html();
      
      if (trCstatus && loadedTracks !== "") {
        if (plStatusForw) {
          trackForward();
          loadTrack("pitchRange3", "trackNumber3", "player3", "artist3");
        } else if (plStatusRev) {
          trackReverse();
          loadTrack("pitchRange3", "trackNumber3", "player3", "artist3");
        } else if (plStatusRd) {
          playRandom("pitchRange3", "trackNumber3", "player3", "artist3");
        }
      }
    });
    
    player4.on("ended", function() {
      var plStatusForw = playListForwBtn.attr("style");
      var plStatusRev = playListRevBtn.attr("style");
      var plStatusRd = playListRandomBtn.attr("style");
      var trCstatus = trackChangeBtn.attr("style");
      var loadedTracks = trackLibList.html();
      
      if (trCstatus && loadedTracks !== "") {
        if (plStatusForw) {
          trackForward();
          loadTrack("pitchRange4", "trackNumber4", "player4", "artist4");
        } else if (plStatusRev) {
          trackReverse();
          loadTrack("pitchRange4", "trackNumber4", "player4", "artist4");
        } else if (plStatusRd) {
          playRandom("pitchRange4", "trackNumber4", "player4", "artist4");
        }
      }
    });
    
    var onePlay = $("<button class='toolbuttons9'>Standard-Playlist</button>");
    onePlay.appendTo(bottomMain);
    
    var playLoop = $("<button class='toolbuttons10'>Loop Tracks</button>");
    playLoop.appendTo(bottomMain);
    
    onePlay.on("click", function() {
      var opCtrl = $(this).attr("style");
      var plNumb = playerNumber.val();
      
      if (!opCtrl) {
        clearTimeout(autoPlayer1);
        clearTimeout(autoPlayer2);
        clearTimeout(autoPlayer3);
        clearTimeout(autoPlayer4);
        autoplayBtn.removeAttr("style").attr("disabled", "disabled").text("One-Play!");
        trackChangeBtn.removeAttr("disabled").text("Auto-Trackchange");
        trackChangeBtn.css({
          "background": "linear-gradient(to right, darkred, red, darkred)",
          "border-style": "inset",
          "border-color": "red"
        });
        playLoop.removeAttr("style");
        if (plNumb === 'player1') {
          $("#player1").attr("autoplay", true).removeAttr("loop");
        } else if (plNumb === 'player2') {
          $("#player2").attr("autoplay", true).removeAttr("loop");
        } else if (plNumb === 'player3') {
          $("#player3").attr("autoplay", true).removeAttr("loop");
        } else if (plNumb === 'player4') {
          $("#player4").attr("autoplay", true).removeAttr("loop");
        }
        
        $(this).css({
          "background": "linear-gradient(to right, darkred, red, darkred)",
          "border-style": "inset",
          "border-color": "red"
        });
      } else {
        autoplayBtn.removeAttr("disabled").text("Autoplay");
        $("#player1").removeAttr("autoplay");
        $("#player2").removeAttr("autoplay");
        $("#player3").removeAttr("autoplay");
        $("#player4").removeAttr("autoplay");
        $(this).removeAttr("style");
      }
    });
    
    playLoop.on("click", function() {
      var lpCtrl = $(this).attr("style");
      var plNumb = playerNumber.val();
      
      if (!lpCtrl) {
        clearTimeout(autoPlayer1);
        clearTimeout(autoPlayer2);
        clearTimeout(autoPlayer3);
        clearTimeout(autoPlayer4);
        autoplayBtn.removeAttr("style").attr("disabled", "disabled").text("Loop-Mode!");
        trackChangeBtn.removeAttr("style").attr("disabled", "disabled").text("Loop-Mode On!");
        onePlay.removeAttr("style");
        if (plNumb === 'player1') {
          $("#player1").attr("loop", true).removeAttr("autoplay");
        } else if (plNumb === 'player2') {
          $("#player2").attr("loop", true).removeAttr("autoplay");
        } else if (plNumb === 'player3') {
          $("#player3").attr("loop", true).removeAttr("autoplay");
        } else if (plNumb === 'player4') {
          $("#player4").attr("loop", true).removeAttr("autoplay");
        }
        
        $(this).css({
          "background": "linear-gradient(to right, #404000, yellow, #404000)",
          "border-style": "inset",
          "border-color": "yellow"
        });
      } else {
        autoplayBtn.removeAttr("disabled").text("Autoplay");
        trackChangeBtn.removeAttr("disabled").text("Auto-Trackchange");
        trackChangeBtn.css({
          "background": "linear-gradient(to right, darkred, red, darkred)",
          "border-style": "inset",
          "border-color": "red"
        });
        $("#player1").removeAttr("loop");
        $("#player2").removeAttr("loop");
        $("#player3").removeAttr("loop");
        $("#player4").removeAttr("loop");
        $(this).removeAttr("style");
      }
    });
    
    
    var infoMod = $("<div/>");
    infoMod.css({
      "background": "212121",
      "border": "2px outset rgba(255, 255, 255, 0.8)",
      "width": "600px",
      "position": "fixed",
      "left": "20px",
      "top": "20px",
      "z-index": "250",
      "display": "none"
    }).appendTo(element);
    
    var infoHead = $("<div/>");
    infoHead.css({
      "width": "98.6%",
      "height": "30px",
      "font-size": "20px",
      "background": "#292929",
      "font-weight": "bold",
      "color": "white",
      "text-align": "left",
      "padding": "4px"
    }).text("Modal-Message").appendTo(infoMod);
    
    var infoCloseBtn = $("<button class='closeBtn'>X</button>");
    infoCloseBtn.appendTo(infoHead);
    
    var infoMain = $("<div/>");
    infoMain.css({
      "width": "100%",
      "height": "140px",
      "text-align": "left",
      "background": "#151515",
      "display": "flex",
      "flext-direction": "row"
    }).appendTo(infoMod);
    
    var infoImgBox = $("<div/>");
    infoImgBox.css({
      "width": "30%",
      "height": "140px",
      "text-align": "center"
    }).appendTo(infoMain);
    
    var infoSymbol = $("<img src='Symbole/info.png'/>");
    infoSymbol.css({
      "margin-top": "20px"
    });
    infoSymbol.appendTo(infoImgBox);
    
    var infoTextBox = $("<div/>");
    infoTextBox.css({
      "width": "70%",
      "height": "140px",
      "text-align": "left",
      "font-weight": "bold",
      "color": "white",
      "font-size": "25px",
      "padding-top": "20px"
    }).html("Info-Text!").appendTo(infoMain);
    
    var infoFoot = $("<div/>");
    infoFoot.css({
      "width": "98.6%",
      "height": "30px",
      "font-size": "20px",
      "background": "#151515",
      "font-weight": "bold",
      "color": "white",
      "text-align": "center",
      "padding": "4px",
      "border-top": "1px solid rgba(255, 255, 255, 0.8)"
    }).appendTo(infoMod);
    
    var infoFootBtn = $("<button class='toolbuttons9'>Close</button>");
    infoFootBtn.css({
      "width": "120px",
      "height": "26px",
      "font-size": "16px",
      "background": "#303030",
      "border": "2px outset grey"
    });
    infoFootBtn.appendTo(infoFoot);
    
    infoCloseBtn.on("click", function() {
      infoMod.hide();
    });
    
    infoFootBtn.on("click", function() {
      infoMod.hide();
    });
    
    function addTracks(evt) {
    var multiaudiofiles = evt.target.files;
    var maudioext = $(this)[0].value;
    var plStatusRd = playListRandomBtn.attr("style");
    var output = [];

    if (maudioext.substring(maudioext.lastIndexOf(".")) === ".mp3") {
      for (var i = 0, f; f = multiaudiofiles[i]; i++) {
        output.push("<li style='padding-top:4px; padding-bottom:4px;'>" + f.name.substring(0, f.name.lastIndexOf(".")) + "</li>");
        if (plStatusRd) {
          random.push(f.name.substring(0, f.name.lastIndexOf(".")));
        }
      }
      trackLibList.append(output.join(""));
      infoTextBox.html("Trackload successfull!<br>"+i+ " Tracks loaded!<br>"+$("#tracklist li").length+" Tracks in Tracklist!");
      infoMod.animate({left: element.width()/2 - infoMod.width()/2 + "px", top: element.height()/2 - infoMod.height()/2 + "px"},1).show();
      remainTracks.val($("#tracklist li").length);
    }
  }

    trackMultiFile.on("change", addTracks);
    addTrackMultiBtn.on("click", function() {
      trackMultiFile.click();
    });
    
    function toggleFullScreen() {
  	if (!document.fullscreenElement &&    // alternative standard method
      !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    	} else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    	} else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    	} else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    	}
  	} else {
    	if (document.exitFullscreen) {
      	document.exitFullscreen();
    	} else if (document.msExitFullscreen) {
      	document.msExitFullscreen();
    	} else if (document.mozCancelFullScreen) {
      	document.mozCancelFullScreen();
    	} else if (document.webkitExitFullscreen) {
      	document.webkitExitFullscreen();
    	}
  	  }
	}
    
    var fullScreen = $("<button class='toolbuttons11'>Fullscreen</button>");
    fullScreen.appendTo(bottomMain);
    
    fullScreen.on("click", function() {
      var fscControl = $(this).attr("style"); 
      toggleFullScreen();
      
      if (!fscControl) {
        element.addClass("fullScreen");
        $(this).css({
          "background":"linear-gradient(to right, navy, skyblue, navy)", 
          "border-style":"inset", 
          "border-color":"skyblue"
        });
      } else {
        element.removeClass("fullScreen");
        $(this).removeAttr("style");
      }
    });
    
    var pitchin, pitchout;
    
    function pitchIn() {
      var playRate1 = player1.prop("playbackRate");
      clearTimeout(autoPlayer1);
      clearTimeout(autoPlayer2);
      clearTimeout(autoPlayer3);
      clearTimeout(autoPlayer4);
      player1.prop("playbackRate", playRate1 + 0.01);
      
      if (playRate1 > 1) {
        clearInterval(pitchin);
        playBtn1.removeAttr("disabled");
        pitchbend1.removeAttr("disabled");
      }
    }
    
    function pitchOut() {
      var playRate1 = player1.prop("playbackRate");
      clearTimeout(autoPlayer1);
      clearTimeout(autoPlayer2);
      clearTimeout(autoPlayer3);
      clearTimeout(autoPlayer4);
      player1.prop("playbackRate", playRate1 - 0.01);
      playBtn1.attr("disabled", "disabled").css({
          "background": "linear-gradient(to right, #363636, yellow, #363636)",
          "border-color": "yellow"
        });
      
      if (playRate1 < 0.26) {
        clearInterval(pitchout);
        playBtn1.removeAttr("disabled").css({
          "background": "linear-gradient(to right, navy, skyblue, navy)",
          "border-color": "skyblue"
        });
        pitchbend1.removeAttr("disabled");
        player1.trigger("pause");
      }
    }
    
    function startPitchIn1() {
      pitchbend1.attr("disabled", "disabled");
      player1.trigger("play").prop("playbackRate", 0.25);
      playBtn1.attr("disabled", "disabled").css({
          "background": "linear-gradient(to right, #363636, yellow, #363636)",
          "border-color": "yellow"
        });
	  pitchin = setInterval(pitchIn, settings.pitchTime);
    }
    
    function startPitchOut1() {
      playBtn1.attr("disabled", "disabled");
      pitchbend1.attr("disabled", "disabled");
	  pitchout = setInterval(pitchOut, settings.pitchTime);
    }
    
    playBtn1.on("contextmenu", function() {
      var status1 = $(this).attr("style");
      
      if (!status1) {
        startPitchIn1();
      } else {
        startPitchOut1();
      }
      
      return false;
    });
    
    
    function pitchIn2() {
      var playRate2 = player2.prop("playbackRate");
      clearTimeout(autoPlayer1);
      clearTimeout(autoPlayer2);
      clearTimeout(autoPlayer3);
      clearTimeout(autoPlayer4);
      player2.prop("playbackRate", playRate2 + 0.01);
      
      if (playRate2 > 1) {
        clearInterval(pitchin);
        playBtn2.removeAttr("disabled");
        pitchbend2.removeAttr("disabled");
      }
    }
    
    function pitchOut2() {
      var playRate2 = player2.prop("playbackRate");
      clearTimeout(autoPlayer1);
      clearTimeout(autoPlayer2);
      clearTimeout(autoPlayer3);
      clearTimeout(autoPlayer4);
      player2.prop("playbackRate", playRate2 - 0.01);
      playBtn2.attr("disabled", "disabled").css({
          "background": "linear-gradient(to right, #363636, yellow, #363636)",
          "border-color": "yellow"
        });
      
      if (playRate2 < 0.26) {
        clearInterval(pitchout);
        playBtn2.removeAttr("disabled").css({
          "background": "linear-gradient(to right, navy, skyblue, navy)",
          "border-color": "skyblue"
        });
        pitchbend2.removeAttr("disabled");
        player2.trigger("pause");
      }
    }
    
    function startPitchIn2() {
      pitchbend2.attr("disabled", "disabled");
      player2.trigger("play").prop("playbackRate", 0.25);
      playBtn2.attr("disabled", "disabled").css({
          "background": "linear-gradient(to right, #363636, yellow, #363636)",
          "border-color": "yellow"
        });
	  pitchin = setInterval(pitchIn2, settings.pitchTime);
    }
    
    function startPitchOut2() {
      playBtn2.attr("disabled", "disabled");
      pitchbend2.attr("disabled", "disabled");
	  pitchout = setInterval(pitchOut2, settings.pitchTime);
    }
    
    playBtn2.on("contextmenu", function() {
      var status2 = $(this).attr("style");
      
      if (!status2) {
        startPitchIn2();
      } else {
        startPitchOut2();
      }
      
      return false;
    });
    
    
    function pitchIn3() {
      var playRate3 = player3.prop("playbackRate");
      clearTimeout(autoPlayer1);
      clearTimeout(autoPlayer2);
      clearTimeout(autoPlayer3);
      clearTimeout(autoPlayer4);
      player3.prop("playbackRate", playRate3 + 0.01);
      
      if (playRate3 > 1) {
        clearInterval(pitchin);
        playBtn3.removeAttr("disabled");
        pitchbend3.removeAttr("disabled");
      }
    }
    
    function pitchOut3() {
      var playRate3 = player3.prop("playbackRate");
      clearTimeout(autoPlayer1);
      clearTimeout(autoPlayer2);
      clearTimeout(autoPlayer3);
      clearTimeout(autoPlayer4);
      player3.prop("playbackRate", playRate3 - 0.01);
      playBtn3.attr("disabled", "disabled").css({
          "background": "linear-gradient(to right, #363636, yellow, #363636)",
          "border-color": "yellow"
        });
      
      if (playRate3 < 0.26) {
        clearInterval(pitchout);
        playBtn3.removeAttr("disabled").css({
          "background": "linear-gradient(to right, navy, skyblue, navy)",
          "border-color": "skyblue"
        });
        pitchbend3.removeAttr("disabled");
        player3.trigger("pause");
      }
    }
    
    function startPitchIn3() {
      pitchbend3.attr("disabled", "disabled");
      player3.trigger("play").prop("playbackRate", 0.25);
      playBtn3.attr("disabled", "disabled").css({
          "background": "linear-gradient(to right, #363636, yellow, #363636)",
          "border-color": "yellow"
        });
	  pitchin = setInterval(pitchIn3, settings.pitchTime);
    }
    
    function startPitchOut3() {
      playBtn3.attr("disabled", "disabled");
      pitchbend3.attr("disabled", "disabled");
	  pitchout = setInterval(pitchOut3, settings.pitchTime);
    }
    
    playBtn3.on("contextmenu", function() {
      var status3 = $(this).attr("style");
      
      if (!status3) {
        startPitchIn3();
      } else {
        startPitchOut3();
      }
      
      return false;
    });
    
    
    function pitchIn4() {
      var playRate4 = player4.prop("playbackRate");
      clearTimeout(autoPlayer1);
      clearTimeout(autoPlayer2);
      clearTimeout(autoPlayer3);
      clearTimeout(autoPlayer4);
      player4.prop("playbackRate", playRate4 + 0.01);
      
      if (playRate4 > 1) {
        clearInterval(pitchin);
        playBtn4.removeAttr("disabled");
        pitchbend4.removeAttr("disabled");
      }
    }
    
    function pitchOut4() {
      var playRate4 = player4.prop("playbackRate");
      clearTimeout(autoPlayer1);
      clearTimeout(autoPlayer2);
      clearTimeout(autoPlayer3);
      clearTimeout(autoPlayer4);
      player4.prop("playbackRate", playRate4 - 0.01);
      playBtn4.attr("disabled", "disabled").css({
          "background": "linear-gradient(to right, #363636, yellow, #363636)",
          "border-color": "yellow"
        });
      
      if (playRate4 < 0.26) {
        clearInterval(pitchout);
        playBtn4.removeAttr("disabled").css({
          "background": "linear-gradient(to right, navy, skyblue, navy)",
          "border-color": "skyblue"
        });
        pitchbend4.removeAttr("disabled");
        player4.trigger("pause");
      }
    }
    
    function startPitchIn4() {
      pitchbend4.attr("disabled", "disabled");
      player4.trigger("play").prop("playbackRate", 0.25);
      playBtn4.attr("disabled", "disabled").css({
          "background": "linear-gradient(to right, #363636, yellow, #363636)",
          "border-color": "yellow"
        });
	  pitchin = setInterval(pitchIn4, settings.pitchTime);
    }
    
    function startPitchOut4() {
      playBtn4.attr("disabled", "disabled");
      pitchbend4.attr("disabled", "disabled");
	  pitchout = setInterval(pitchOut4, settings.pitchTime);
    }
    
    playBtn4.on("contextmenu", function() {
      var status4 = $(this).attr("style");
      
      if (!status4) {
        startPitchIn4();
      } else {
        startPitchOut4();
      }
      
      return false;
    });
    
    var squisher1, reverser1, squisher2, reverser2, squisher3, reverser3, squisher4, reverser4;
    
    function playSquish(djplayer) {
      var timepos = $("#"+djplayer).prop("currentTime");
      var sqFreq = squishFreq.val();
      clearTimeout(autoPlayer1);
      clearTimeout(autoPlayer2);
      clearTimeout(autoPlayer3);
      clearTimeout(autoPlayer4);
	  $("#"+djplayer).prop("currentTime", timepos - sqFreq);
    }
    
    function setSquish1() {
      var sqFreq = squishFreq.val();
      squisher1 = setInterval(function() {
        playSquish("player1");
      }, sqFreq*1000);
    }
    
    function setSquish2() {
      var sqFreq = squishFreq.val();
      squisher2 = setInterval(function() {
        playSquish("player2");
      }, sqFreq*1000);
    }
    
    function setSquish3() {
      var sqFreq = squishFreq.val();
      squisher3 = setInterval(function() {
        playSquish("player3");
      }, sqFreq*1000);
    }
    
    function setSquish4() {
      var sqFreq = squishFreq.val();
      squisher4 = setInterval(function() {
        playSquish("player4");
      }, sqFreq*1000);
    }
    
    squish1.on("click", function() {
      var sqStatus1 = $(this).attr("style");
      
      if (!sqStatus1) {
        clearTimeout(reverser1);
        playRev1.removeAttr("style");
        setSquish1();
        $(this).css({
          "background": "linear-gradient(to right, darkred, red, darkred)",
          "border-style": "inset",
          "border-color": "red"
        });
      } else {
        clearInterval(squisher1);
        $(this).removeAttr("style");
      }
    });
    
    squish2.on("click", function() {
      var sqStatus2 = $(this).attr("style");
      
      if (!sqStatus2) {
        clearTimeout(reverser2);
        playRev2.removeAttr("style");
        setSquish2();
        $(this).css({
          "background": "linear-gradient(to right, darkred, red, darkred)",
          "border-style": "inset",
          "border-color": "red"
        });
      } else {
        clearInterval(squisher2);
        $(this).removeAttr("style");
      }
    });
    
    squish3.on("click", function() {
      var sqStatus3 = $(this).attr("style");
      
      if (!sqStatus3) {
        clearTimeout(reverser3);
        playRev3.removeAttr("style");
        setSquish3();
        $(this).css({
          "background": "linear-gradient(to right, darkred, red, darkred)",
          "border-style": "inset",
          "border-color": "red"
        });
      } else {
        clearInterval(squisher3);
        $(this).removeAttr("style");
      }
    });
    
    squish4.on("click", function() {
      var sqStatus4 = $(this).attr("style");
      
      if (!sqStatus4) {
        clearTimeout(reverser4);
        playRev4.removeAttr("style");
        setSquish4();
        $(this).css({
          "background": "linear-gradient(to right, darkred, red, darkred)",
          "border-style": "inset",
          "border-color": "red"
        });
      } else {
        clearInterval(squisher4);
        $(this).removeAttr("style");
      }
    });
    
    var squishMenuMod1 = $("<div/>");
    squishMenuMod1.css({
      "width": "90px",
      "height": "200px",
      "overflow": "auto",
      "padding": "6px",
      "background": "rgba(15, 15, 15, 0.8)",
      "border": "2px outset rgba(255, 255, 255, 0.6)",
      "position": "absolute",
      "left": "20px",
      "top": "20px",
      "z-index": 200,
      "display": "none"
    }).appendTo(element);
    
    var squishList1 = $("<ul id='squishList1'></ul>");
    squishList1.css({
      "padding": "1px",
      "margin": "1px",
      "font-size": "16px",
      "font-weight": "bold",
      "color": "white"
    }).appendTo(squishMenuMod1);
    
    var squishVals1 = $("<li style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>0.25</li><li style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>0.50</li><li style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>0.75</li><li style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>1.00</li><li style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>2.00</li><li style='padding-top:6px; padding-bottom:6px; cursor:pointer;'>4.00</li>");
    squishVals1.appendTo(squishList1);
    
    
    var squishMenuMod2 = $("<div/>");
    squishMenuMod2.css({
      "width": "90px",
      "height": "200px",
      "overflow": "auto",
      "padding": "6px",
      "background": "rgba(15, 15, 15, 0.8)",
      "border": "2px outset rgba(255, 255, 255, 0.6)",
      "position": "absolute",
      "left": "20px",
      "top": "20px",
      "z-index": 200,
      "display": "none"
    }).appendTo(element);
    
    var squishList2 = $("<ul id='squishList2'></ul>");
    squishList2.css({
      "padding": "1px",
      "margin": "1px",
      "font-size": "16px",
      "font-weight": "bold",
      "color": "white"
    }).appendTo(squishMenuMod2);
    
    var squishVals2 = $("<li style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>0.25</li><li style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>0.50</li><li style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>0.75</li><li style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>1.00</li><li style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>2.00</li><li style='padding-top:6px; padding-bottom:6px; cursor:pointer;'>4.00</li>");
    squishVals2.appendTo(squishList2);
    
    
    var squishMenuMod3 = $("<div/>");
    squishMenuMod3.css({
      "width": "90px",
      "height": "200px",
      "overflow": "auto",
      "padding": "6px",
      "background": "rgba(15, 15, 15, 0.8)",
      "border": "2px outset rgba(255, 255, 255, 0.6)",
      "position": "absolute",
      "left": "20px",
      "top": "20px",
      "z-index": 200,
      "display": "none"
    }).appendTo(element);
    
    var squishList3 = $("<ul id='squishList3'></ul>");
    squishList3.css({
      "padding": "1px",
      "margin": "1px",
      "font-size": "16px",
      "font-weight": "bold",
      "color": "white"
    }).appendTo(squishMenuMod3);
    
    var squishVals3 = $("<li style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>0.25</li><li style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>0.50</li><li style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>0.75</li><li style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>1.00</li><li style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>2.00</li><li style='padding-top:6px; padding-bottom:6px; cursor:pointer;'>4.00</li>");
    squishVals3.appendTo(squishList3);
    
    
    var squishMenuMod4 = $("<div/>");
    squishMenuMod4.css({
      "width": "90px",
      "height": "200px",
      "overflow": "auto",
      "padding": "6px",
      "background": "rgba(15, 15, 15, 0.8)",
      "border": "2px outset rgba(255, 255, 255, 0.6)",
      "position": "absolute",
      "left": "20px",
      "top": "20px",
      "z-index": 200,
      "display": "none"
    }).appendTo(element);
    
    var squishList4 = $("<ul id='squishList4'></ul>");
    squishList4.css({
      "padding": "1px",
      "margin": "1px",
      "font-size": "16px",
      "font-weight": "bold",
      "color": "white"
    }).appendTo(squishMenuMod4);
    
    var squishVals4 = $("<li style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>0.25</li><li style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>0.50</li><li style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>0.75</li><li style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>1.00</li><li style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>2.00</li><li style='padding-top:6px; padding-bottom:6px; cursor:pointer;'>4.00</li>");
    squishVals4.appendTo(squishList4);
    
    
    squish1.on("contextmenu", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      
      squishMenuMod1.animate({left:xPos - squishMenuMod1.width()/2+"px", top:yPos + squish1.height() + 10},1).show();
      return false;
    });
    
    var closeSquish1;
    
    squishMenuMod1.on("mouseleave", function() {
      closeSquish1 = setTimeout(function() {
        squishMenuMod1.hide();
      },1500);
    });
    
    squishMenuMod1.on("mouseenter", function() {
      clearTimeout(closeSquish1);
    });
    
    squishList1.on("mouseenter", function() {
      $("#squishList1 li").on("mouseenter", function() {
        $(this).css("background", "#00b9ff");
      });
      
      $("#squishList1 li").on("mouseleave", function() {
        $(this).css("background", "none");
      });
      
      $("#squishList1 li").on("click", function() {
        var sqVals = parseFloat($(this).text());
        clearTimeout(reverser1);
        clearTimeout(squisher1);
        playRev1.removeAttr("style");
        squisher1 = setInterval(function() {
        player1.prop("currentTime", player1.prop("currentTime") - sqVals);
        }, sqVals*1000);
        squish1.css({
          "background": "linear-gradient(to right, darkred, red, darkred)",
          "border-style": "inset",
          "border-color": "red"
        });
        
        squishMenuMod1.hide();
      });
      
      $("#squishList1 li").on("contextmenu", function() {
        $(this).click();
        return false;
      });
    });
    
    squishList1.on("mouseleave", function() {
      $("#squishList1 li").off("mouseenter").off("mouseleave").off("click").off("contextmenu");
    });
    
    
    squish2.on("contextmenu", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      
      squishMenuMod2.animate({left:xPos - squishMenuMod2.width()/2+"px", top:yPos + squish2.height() + 10},1).show();
      return false;
    });
    
    var closeSquish2;
    
    squishMenuMod2.on("mouseleave", function() {
      closeSquish2 = setTimeout(function() {
        squishMenuMod2.hide();
      },1500);
    });
    
    squishMenuMod2.on("mouseenter", function() {
      clearTimeout(closeSquish2);
    });
    
    squishList2.on("mouseenter", function() {
      $("#squishList2 li").on("mouseenter", function() {
        $(this).css("background", "#00b9ff");
      });
      
      $("#squishList2 li").on("mouseleave", function() {
        $(this).css("background", "none");
      });
      
      $("#squishList2 li").on("click", function() {
        var sqVals2 = parseFloat($(this).text());
        clearTimeout(reverser2);
        clearTimeout(squisher2);
        playRev2.removeAttr("style");
        squisher2 = setInterval(function() {
        player2.prop("currentTime", player2.prop("currentTime") - sqVals2);
        }, sqVals2*1000);
        squish2.css({
          "background": "linear-gradient(to right, darkred, red, darkred)",
          "border-style": "inset",
          "border-color": "red"
        });
        
        squishMenuMod2.hide();
      });
      
      $("#squishList2 li").on("contextmenu", function() {
        $(this).click();
        return false;
      });
    });
    
    squishList2.on("mouseleave", function() {
      $("#squishList2 li").off("mouseenter").off("mouseleave").off("click").off("contextmenu");
    });
    
    
    squish3.on("contextmenu", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      
      squishMenuMod3.animate({left:xPos - squishMenuMod3.width()/2+"px", top:yPos + squish3.height() + 10},1).show();
      return false;
    });
    
    var closeSquish3;
    
    squishMenuMod3.on("mouseleave", function() {
      closeSquish3 = setTimeout(function() {
        squishMenuMod3.hide();
      },1500);
    });
    
    squishMenuMod3.on("mouseenter", function() {
      clearTimeout(closeSquish3);
    });
    
    squishList3.on("mouseenter", function() {
      $("#squishList3 li").on("mouseenter", function() {
        $(this).css("background", "#00b9ff");
      });
      
      $("#squishList3 li").on("mouseleave", function() {
        $(this).css("background", "none");
      });
      
      $("#squishList3 li").on("click", function() {
        var sqVals3 = parseFloat($(this).text());
        clearTimeout(reverser3);
        clearTimeout(squisher3);
        playRev3.removeAttr("style");
        squisher3 = setInterval(function() {
        player3.prop("currentTime", player3.prop("currentTime") - sqVals3);
        }, sqVals3*1000);
        squish3.css({
          "background": "linear-gradient(to right, darkred, red, darkred)",
          "border-style": "inset",
          "border-color": "red"
        });
        
        squishMenuMod3.hide();
      });
      
      $("#squishList3 li").on("contextmenu", function() {
        $(this).click();
        return false;
      });
    });
    
    squishList3.on("mouseleave", function() {
      $("#squishList3 li").off("mouseenter").off("mouseleave").off("click").off("contextmenu");
    });
    
    
    squish4.on("contextmenu", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      
      squishMenuMod4.animate({left:xPos - squishMenuMod1.width()/2+"px", top:yPos + squish1.height() + 10},1).show();
      return false;
    });
    
    var closeSquish4;
    
    squishMenuMod4.on("mouseleave", function() {
      closeSquish4 = setTimeout(function() {
        squishMenuMod4.hide();
      },1500);
    });
    
    squishMenuMod4.on("mouseenter", function() {
      clearTimeout(closeSquish4);
    });
    
    squishList4.on("mouseenter", function() {
      $("#squishList4 li").on("mouseenter", function() {
        $(this).css("background", "#00b9ff");
      });
      
      $("#squishList4 li").on("mouseleave", function() {
        $(this).css("background", "none");
      });
      
      $("#squishList4 li").on("click", function() {
        var sqVals4 = parseFloat($(this).text());
        clearTimeout(reverser4);
        clearTimeout(squisher4);
        playRev4.removeAttr("style");
        squisher4 = setInterval(function() {
        player4.prop("currentTime", player4.prop("currentTime") - sqVals4);
        }, sqVals4*1000);
        squish4.css({
          "background": "linear-gradient(to right, darkred, red, darkred)",
          "border-style": "inset",
          "border-color": "red"
        });
        
        squishMenuMod4.hide();
      });
      
      $("#squishList4 li").on("contextmenu", function() {
        $(this).click();
        return false;
      });
    });
    
    squishList4.on("mouseleave", function() {
      $("#squishList4 li").off("mouseenter").off("mouseleave").off("click").off("contextmenu");
    });
    
    
  	function playReverse(djplayer) {
      var timepos = $("#"+djplayer).prop("currentTime");
      var playRate = $("#"+djplayer).prop("playbackRate");
      clearTimeout(autoPlayer1);
      clearTimeout(autoPlayer2);
      clearTimeout(autoPlayer3);
      clearTimeout(autoPlayer4);
      $("#"+djplayer).prop("currentTime", timepos - 0.125 * playRate);
  	}

  	function setReverse1() {
      var playRate1 = player1.prop("playbackRate");
      reverser1 = setInterval(function() {
      playReverse("player1");
      }, 90 / playRate1);
  	}
    
  	function setReverse2() {
      var playRate2 = player2.prop("playbackRate");
      reverser2 = setInterval(function() {
      playReverse("player2");
      }, 90 / playRate2);
    }
    
    function setReverse3() {
      var playRate3 = player3.prop("playbackRate");
      reverser3 = setInterval(function() {
      playReverse("player3");
      }, 90 / playRate3);
    }
    
    function setReverse4() {
      var playRate4 = player4.prop("playbackRate");
      reverser4 = setInterval(function() {
      playReverse("player4");
      }, 90 / playRate4);
    }
    
    playRev1.on("click", function() {
      var revStatus1 = $(this).attr("style");
      
      if (!revStatus1) {
        clearTimeout(squisher1);
        squish1.removeAttr("style");
        setReverse1();
        $(this).css({
          "background": "linear-gradient(to right, #363600, yellow, #363600)",
          "border-style": "inset",
          "border-color": "yellow"
        });
      } else {
        clearInterval(reverser1);
        $(this).removeAttr("style");
      }
    });
    
    playRev2.on("click", function() {
      var revStatus2 = $(this).attr("style");
      
      if (!revStatus2) {
        clearTimeout(squisher2);
        squish2.removeAttr("style");
        setReverse2();
        $(this).css({
          "background": "linear-gradient(to right, #363600, yellow, #363600)",
          "border-style": "inset",
          "border-color": "yellow"
        });
      } else {
        clearInterval(reverser2);
        $(this).removeAttr("style");
      }
    });
    
    playRev3.on("click", function() {
      var revStatus3 = $(this).attr("style");
      
      if (!revStatus3) {
        clearTimeout(squisher3);
        squish3.removeAttr("style");
        setReverse3();
        $(this).css({
          "background": "linear-gradient(to right, #363600, yellow, #363600)",
          "border-style": "inset",
          "border-color": "yellow"
        });
      } else {
        clearInterval(reverser3);
        $(this).removeAttr("style");
      }
    });
    
    playRev4.on("click", function() {
      var revStatus4 = $(this).attr("style");
      
      if (!revStatus4) {
        clearTimeout(squisher4);
        squish4.removeAttr("style");
        setReverse4();
        $(this).css({
          "background": "linear-gradient(to right, #363600, yellow, #363600)",
          "border-style": "inset",
          "border-color": "yellow"
        });
      } else {
        clearInterval(reverser4);
        $(this).removeAttr("style");
      }
    });
    
    stopBtn1.on("mousedown", function() {
      $(this).css({
        "background": "linear-gradient(to right, darkred, red, darkred)",
        "border-style": "inset",
        "border-color": "red"
      });
    });
    
    stopBtn1.on("mouseup mouseleave", function() {
      $(this).css({
        "background": "#290000",
        "border-style": "outset",
        "border-color": "#290000"
      });
    });
    
    stopBtn2.on("mousedown", function() {
      $(this).css({
        "background": "linear-gradient(to right, darkred, red, darkred)",
        "border-style": "inset",
        "border-color": "red"
      });
    });
    
    stopBtn2.on("mouseup mouseleave", function() {
      $(this).css({
        "background": "#290000",
        "border-style": "outset",
        "border-color": "#290000"
      });
    });
    
    stopBtn3.on("mousedown", function() {
      $(this).css({
        "background": "linear-gradient(to right, darkred, red, darkred)",
        "border-style": "inset",
        "border-color": "red"
      });
    });
    
    stopBtn3.on("mouseup mouseleave", function() {
      $(this).css({
        "background": "#290000",
        "border-style": "outset",
        "border-color": "#290000"
      });
    });
    
    stopBtn4.on("mousedown", function() {
      $(this).css({
        "background": "linear-gradient(to right, darkred, red, darkred)",
        "border-style": "inset",
        "border-color": "red"
      });
    });
    
    stopBtn4.on("mouseup mouseleave", function() {
      $(this).css({
        "background": "#290000",
        "border-style": "outset",
        "border-color": "#290000"
      });
    });
    
    
    forwBtn1.on("mousedown", function() {
      $(this).css({
        "background": "linear-gradient(to right, #363636, yellow, #363600)",
        "border-style": "inset",
        "border-color": "yellow"
      });
    });
    
    forwBtn1.on("mouseup mouseleave", function() {
      $(this).css({
        "background": "#292900",
        "border-style": "outset",
        "border-color": "#292900"
      });
    });
    
    forwBtn2.on("mousedown", function() {
      $(this).css({
        "background": "linear-gradient(to right, #363636, yellow, #363600)",
        "border-style": "inset",
        "border-color": "yellow"
      });
    });
    
    forwBtn2.on("mouseup mouseleave", function() {
      $(this).css({
        "background": "#292900",
        "border-style": "outset",
        "border-color": "#292900"
      });
    });
    
    forwBtn3.on("mousedown", function() {
      $(this).css({
        "background": "linear-gradient(to right, #363636, yellow, #363600)",
        "border-style": "inset",
        "border-color": "yellow"
      });
    });
    
    forwBtn3.on("mouseup mouseleave", function() {
      $(this).css({
        "background": "#292900",
        "border-style": "outset",
        "border-color": "#292900"
      });
    });
    
    forwBtn4.on("mousedown", function() {
      $(this).css({
        "background": "linear-gradient(to right, #363636, yellow, #363600)",
        "border-style": "inset",
        "border-color": "yellow"
      });
    });
    
    forwBtn4.on("mouseup mouseleave", function() {
      $(this).css({
        "background": "#292900",
        "border-style": "outset",
        "border-color": "#292900"
      });
    });
    
    
    rewBtn1.on("mousedown", function() {
      $(this).css({
        "background": "linear-gradient(to right, #363636, yellow, #363600)",
        "border-style": "inset",
        "border-color": "yellow"
      });
    });
    
    rewBtn1.on("mouseup mouseleave", function() {
      $(this).css({
        "background": "#292900",
        "border-style": "outset",
        "border-color": "#292900"
      });
    });
    
    rewBtn2.on("mousedown", function() {
      $(this).css({
        "background": "linear-gradient(to right, #363636, yellow, #363600)",
        "border-style": "inset",
        "border-color": "yellow"
      });
    });
    
    rewBtn2.on("mouseup mouseleave", function() {
      $(this).css({
        "background": "#292900",
        "border-style": "outset",
        "border-color": "#292900"
      });
    });
    
    rewBtn3.on("mousedown", function() {
      $(this).css({
        "background": "linear-gradient(to right, #363636, yellow, #363600)",
        "border-style": "inset",
        "border-color": "yellow"
      });
    });
    
    rewBtn3.on("mouseup mouseleave", function() {
      $(this).css({
        "background": "#292900",
        "border-style": "outset",
        "border-color": "#292900"
      });
    });
    
    rewBtn4.on("mousedown", function() {
      $(this).css({
        "background": "linear-gradient(to right, #363636, yellow, #363600)",
        "border-style": "inset",
        "border-color": "yellow"
      });
    });
    
    rewBtn4.on("mouseup mouseleave", function() {
      $(this).css({
        "background": "#292900",
        "border-style": "outset",
        "border-color": "#292900"
      });
    });
    
    
    skipforwBtn1.on("mousedown", function() {
      $(this).css({
        "background": "linear-gradient(to right, green, lime, green)",
        "border-style": "inset",
        "border-color": "lime"
      });
    });
    
    skipforwBtn1.on("mouseup mouseleave", function() {
      $(this).css({
        "background": "#002900",
        "border-style": "outset",
        "border-color": "#002900"
      });
    });
    
    skipforwBtn2.on("mousedown", function() {
      $(this).css({
        "background": "linear-gradient(to right, green, lime, green)",
        "border-style": "inset",
        "border-color": "lime"
      });
    });
    
    skipforwBtn2.on("mouseup mouseleave", function() {
      $(this).css({
        "background": "#002900",
        "border-style": "outset",
        "border-color": "#002900"
      });
    });
    
    skipforwBtn3.on("mousedown", function() {
      $(this).css({
        "background": "linear-gradient(to right, green, lime, green)",
        "border-style": "inset",
        "border-color": "lime"
      });
    });
    
    skipforwBtn3.on("mouseup mouseleave", function() {
      $(this).css({
        "background": "#002900",
        "border-style": "outset",
        "border-color": "#002900"
      });
    });
    
    skipforwBtn4.on("mousedown", function() {
      $(this).css({
        "background": "linear-gradient(to right, green, lime, green)",
        "border-style": "inset",
        "border-color": "lime"
      });
    });
    
    skipforwBtn4.on("mouseup mouseleave", function() {
      $(this).css({
        "background": "#002900",
        "border-style": "outset",
        "border-color": "#002900"
      });
    });
    
    
    skiprewBtn1.on("mousedown", function() {
      $(this).css({
        "background": "linear-gradient(to right, green, lime, green)",
        "border-style": "inset",
        "border-color": "lime"
      });
    });
    
    skiprewBtn1.on("mouseup mouseleave", function() {
      $(this).css({
        "background": "#002900",
        "border-style": "outset",
        "border-color": "#002900"
      });
    });
    
    skiprewBtn2.on("mousedown", function() {
      $(this).css({
        "background": "linear-gradient(to right, green, lime, green)",
        "border-style": "inset",
        "border-color": "lime"
      });
    });
    
    skiprewBtn2.on("mouseup mouseleave", function() {
      $(this).css({
        "background": "#002900",
        "border-style": "outset",
        "border-color": "#002900"
      });
    });
    
    skiprewBtn3.on("mousedown", function() {
      $(this).css({
        "background": "linear-gradient(to right, green, lime, green)",
        "border-style": "inset",
        "border-color": "lime"
      });
    });
    
    skiprewBtn3.on("mouseup mouseleave", function() {
      $(this).css({
        "background": "#002900",
        "border-style": "outset",
        "border-color": "#002900"
      });
    });
    
    skiprewBtn4.on("mousedown", function() {
      $(this).css({
        "background": "linear-gradient(to right, green, lime, green)",
        "border-style": "inset",
        "border-color": "lime"
      });
    });
    
    skiprewBtn4.on("mouseup mouseleave", function() {
      $(this).css({
        "background": "#002900",
        "border-style": "outset",
        "border-color": "#002900"
      });
    });
    
    
    chgPlayer1.on("mousedown", function() {
      $(this).css({
        "background": "linear-gradient(to right, navy, skyblue, navy)",
        "border-style": "inset",
        "border-color": "skyblue"
      });
    });
    
    chgPlayer1.on("mouseup mouseleave", function() {
      $(this).css({
        "background": "#000029",
        "border-style": "outset",
        "border-color": "#000029"
      });
    });
    
    chgPlayer2.on("mousedown", function() {
      $(this).css({
        "background": "linear-gradient(to right, navy, skyblue, navy)",
        "border-style": "inset",
        "border-color": "skyblue"
      });
    });
    
    chgPlayer2.on("mouseup mouseleave", function() {
      $(this).css({
        "background": "#000029",
        "border-style": "outset",
        "border-color": "#000029"
      });
    });
    
    chgPlayer3.on("mousedown", function() {
      $(this).css({
        "background": "linear-gradient(to right, navy, skyblue, navy)",
        "border-style": "inset",
        "border-color": "skyblue"
      });
    });
    
    chgPlayer3.on("mouseup mouseleave", function() {
      $(this).css({
        "background": "#000029",
        "border-style": "outset",
        "border-color": "#000029"
      });
    });
    
    chgPlayer4.on("mousedown", function() {
      $(this).css({
        "background": "linear-gradient(to right, navy, skyblue, navy)",
        "border-style": "inset",
        "border-color": "skyblue"
      });
    });
    
    chgPlayer4.on("mouseup mouseleave", function() {
      $(this).css({
        "background": "#000029",
        "border-style": "outset",
        "border-color": "#000029"
      });
    });
    
    function importFile(filefield, targetfield, storefield) {
	  var asText = document.getElementById(filefield);
	  var textbox = document.getElementById(targetfield);

        var file = asText.files[0];
        var textType = /text.*/;

        if (file.type.match(textType)) {
            var reader = new FileReader();

            reader.onload = function(e) {
                textbox.value = reader.result;
                document.getElementById(storefield).value = file.name.substring(0,file.name.lastIndexOf("."));
            };

            reader.readAsText(file);    
        	} else {
            textbox.value = "Dateityp nicht unterstützt";
        	}
	  }
    
    trackListFile.on("change", function() {
      importFile("trackListFile","trackListCode","trackSaveTxt");
      addTrackListBtn.css({
        "background":"linear-gradient(to right, navy, skyblue, navy)"
      });
    });
    
    trackListLoadBtn.on("click", function() {
      trackListFile.click();
    });
    
    var alertMod = $("<div/>");
    alertMod.css({
      "background": "212121",
      "border": "2px outset rgba(255, 255, 255, 0.8)",
      "width": "600px",
      "position": "fixed",
      "left": "20px",
      "top": "20px",
      "z-index": "250",
      "display": "none"
    }).appendTo(element);
    
    var alertHead = $("<div/>");
    alertHead.css({
      "width": "98.6%",
      "height": "30px",
      "font-size": "20px",
      "background": "#292929",
      "font-weight": "bold",
      "color": "white",
      "text-align": "left",
      "padding": "4px",
    }).text("Modal-Message").appendTo(alertMod);
    
    var alertClosBtn = $("<button class='closeBtn'>X</button>");
    alertClosBtn.appendTo(alertHead);
    
    var alertMain = $("<div/>");
    alertMain.css({
      "width": "100%",
      "height": "140px",
      "text-align": "left",
      "background": "#151515",
      "display": "flex",
      "flext-direction": "row"
    }).appendTo(alertMod);
    
    var alertImgBox = $("<div/>");
    alertImgBox.css({
      "width": "30%",
      "height": "140px",
      "text-align": "center"
    }).appendTo(alertMain);
    
    var alertSymbol = $("<img src='Symbole/alert.png'/>");
    alertSymbol.css({
      "margin-top": "20px"
    });
    alertSymbol.appendTo(alertImgBox);
    
    var alertTextBox = $("<div/>");
    alertTextBox.css({
      "width": "70%",
      "height": "140px",
      "text-align": "left",
      "font-weight": "bold",
      "color": "white",
      "font-size": "25px",
      "padding-top": "20px"
    }).html("Alert-Warning!").appendTo(alertMain);
    
    var alertFoot = $("<div/>");
    alertFoot.css({
      "width": "98.6%",
      "height": "30px",
      "font-size": "20px",
      "background": "#151515",
      "font-weight": "bold",
      "color": "white",
      "text-align": "center",
      "padding": "4px",
      "border-top": "1px solid rgba(255, 255, 255, 0.8)"
    }).appendTo(alertMod);
    
    var alertFootBtn = $("<button class='toolbuttons9'>Close</button>");
    alertFootBtn.css({
      "width": "120px",
      "height": "26px",
      "font-size": "16px",
      "background": "#303030",
      "border": "2px outset grey"
    });
    alertFootBtn.appendTo(alertFoot);
    
    addTrackListBtn.click(function(evt) {
	  var listcode = trackListCode.val();
	  var rdCtrl = playListRandomBtn.attr("style");
  
	  if (listcode.substring(1, 4) !== "li ") {
    	alertMod.animate({left: element.width()/2 - alertMod.width()/2 + "px", top: element.height()/2 - alertMod.height()/2 + "px"},1).show();
		alertTextBox.html("This File is no Playlist!");  
		} else {
          if (evt.ctrlKey) {
            $("#tracklist li").removeClass("selTrack");
            trackLibList.append(listcode);
          } else if (evt.shiftKey) {
            $("#tracklist li").removeClass("selTrack");
            trackLibList.prepend(listcode);
          } else {
            trackLibList.html(listcode);
          }
	
    	  $(".selTrack").each(function() {
      		currentTrack = $(this).index();
    		});
          
          infoMod.animate({left: element.width()/2 - infoMod.width()/2 + "px", top: element.height()/2 - infoMod.height()/2 + "px"},1).show();
		  infoTextBox.html("Fileload succesfull!<br>"+$("#tracklist li").length+ " Tracks are in this Playlist!");
          remainTracks.val($("#tracklist li").length);
          
          if (rdCtrl) {
            setRandom();
          }
    	}
    });
    
    alertClosBtn.on("click", function() {
      alertMod.hide();
    });
    
    alertFootBtn.on("click", function() {
      alertMod.hide();
    });
    
    function exp2htm(filename, elId, mimeType) {
      var elHtml = document.getElementById(elId).innerHTML;
      var link = document.createElement('a');
      mimeType = mimeType || 'text/html';

      link.setAttribute('download', filename);
      link.setAttribute('href', 'data:' + mimeType  +  ';charset=utf-8,' + encodeURIComponent(elHtml));
      link.click(); 
	}
    
    trackSaveBtn.click(function(evt) {
	  var savename = trackSaveTxt.val();
	  
    if (evt.ctrlKey) {
      saveTracklist();
      $(this).animate({borderColor: "lime"},100).delay(2000).animate({borderColor: "silver"},100);
  		} else {
      exp2htm(savename+'.html','tracklist','text/html');
        }
      });
    
    trackUpBtn.click(function(){
    $(".selTrack").each( function(i,x) {
        var newPos = $("#tracklist li").index(this) - 1;
        if (newPos > -1) {
          $("#tracklist li").eq(newPos).before("<li style='"+$(this).attr("style")+"' class='selTrack'>"+$(this).text()+"</li>");
          currentTrack = newPos;
          $(this).remove();
        	}
    	});
	 });
    
    trackDownBtn.click(function(){
    var countOptions = $("#tracklist li").length;
    $(".selTrack").each( function() {
        var newPos = $("#tracklist li").index(this) + 1;
        if (newPos < countOptions) {
          $("#tracklist li").eq(newPos).after("<li style='"+$(this).attr("style")+"' class='selTrack'>"+$(this).text()+"</li>");
          currentTrack = newPos;
          $(this).remove();
        	}
    	});
	});
    
      trackDelBtn.click(function() {
	    $(".selTrack").each(function() {
	    $(this).remove();
        });
      });
    
    trackFile.change(function(evt) {
	  var file = evt.currentTarget.files[0];
	  var objectUrl = URL.createObjectURL(file);
	  var plNumb = playerNumber.val();
      var pitchVals1 = pitchRange1.val();
      var pitchVals2 = pitchRange2.val();
      var pitchVals3 = pitchRange3.val();
      var pitchVals4 = pitchRange4.val();

	  if (plNumb === "player1") {
  	      player1.attr("src",objectUrl);
  		  artist1.html("<marquee>"+file.name.substring(0, file.name.lastIndexOf("."))+"</marquee>");
          player1.prop("playbackRate", pitchVals1);
		} else if (plNumb === "player2") {
  		  player2.attr("src",objectUrl);
  		  artist2.html("<marquee>"+file.name.substring(0, file.name.lastIndexOf("."))+"</marquee>");
          player2.prop("playbackRate", pitchVals2);
        } else if (plNumb === "player3") {
  		  player3.attr("src",objectUrl);
  		  artist3.html("<marquee>"+file.name.substring(0, file.name.lastIndexOf("."))+"</marquee>");
          player3.prop("playbackRate", pitchVals3);
        } else if (plNumb === "player4") {
  		  player4.attr("src",objectUrl);
  		  artist4.html("<marquee>"+file.name.substring(0, file.name.lastIndexOf("."))+"</marquee>");
          player4.prop("playbackRate", pitchVals4);
        }
	  trackName.val(file.name);
    });
    
    trackLoadBtn.click(function() {
	  trackFile.click();
    });
    
    addTrackBtn.click(function() {
  	  var trname = trackName.val();
  	  var ttrname = trname.substring(0, trname.lastIndexOf("."));
  
  	if (trname.substring(trname.lastIndexOf(".") + 1) !== "mp3") {
      alertMod.animate({left: element.width()/2 - alertMod.width()/2, top: element.height()/2 - alertMod.height()/2},1).show();
	  alertTextBox.html("Please import A mp3-File.<br>Playlists only with this File-Extension!");
  		} else {
      $("#tracklist li").removeClass("selTrack");
      trackLibList.append("<li style='padding-top:4px; padding-bottom:4px;'>"+ttrname+"</li>");
  	  $("#tracklist li:eq(0)").addClass("selTrack");
    	}
	});
    
    trackLoadBtn.on("mousedown", function() {
      $(this).css({
        "background": "linear-gradient(to right, navy, skyblue, navy)",
        "border-style": "inset",
        "border-color": "white"
      });
    });
    
    trackLoadBtn.on("mouseup mouseleave", function() {
      $(this).css({
        "background": "#000029",
        "border-style": "outset",
        "border-color": "silver"
      });
    });
    
    addTrackMultiBtn.on("mousedown", function() {
      $(this).css({
        "background": "linear-gradient(to right, navy, skyblue, navy)",
        "border-style": "inset",
        "border-color": "white"
      });
    });
    
    addTrackMultiBtn.on("mouseup mouseleave", function() {
      $(this).css({
        "background": "#000029",
        "border-style": "outset",
        "border-color": "silver"
      });
    });
    
    addTrackBtn.on("mousedown", function() {
      $(this).css({
        "background": "linear-gradient(to right, green, lime, green)",
        "border-style": "inset",
        "border-color": "white"
      });
    });
    
    addTrackBtn.on("mouseup mouseleave", function() {
      $(this).css({
        "background": "#002900",
        "border-style": "outset",
        "border-color": "silver"
      });
    });
    
    trackUpBtn.on("mousedown", function() {
      $(this).css({
        "background": "linear-gradient(to right, darkred, red, darkred)",
        "border-style": "inset",
        "border-color": "white"
      });
    });
    
    trackUpBtn.on("mouseup mouseleave", function() {
      $(this).css({
        "background": "#290000",
        "border-style": "outset",
        "border-color": "silver"
      });
    });
    
    trackDownBtn.on("mousedown", function() {
      $(this).css({
        "background": "linear-gradient(to right, darkred, red, darkred)",
        "border-style": "inset",
        "border-color": "white"
      });
    });
    
    trackDownBtn.on("mouseup mouseleave", function() {
      $(this).css({
        "background": "#290000",
        "border-style": "outset",
        "border-color": "silver"
      });
    });
    
    trackCountUpBtn.on("mousedown", function() {
      $(this).css({
        "background": "linear-gradient(to right, #363600, yellow, #363600)",
        "border-style": "inset",
        "border-color": "white"
      });
    });
    
    trackCountUpBtn.on("mouseup mouseleave", function() {
      $(this).css({
        "background": "#292900",
        "border-style": "outset",
        "border-color": "silver"
      });
    });
    
    trackCountDownBtn.on("mousedown", function() {
      $(this).css({
        "background": "linear-gradient(to right, #363600, yellow, #363600)",
        "border-style": "inset",
        "border-color": "white"
      });
    });
    
    trackCountDownBtn.on("mouseup mouseleave", function() {
      $(this).css({
        "background": "#292900",
        "border-style": "outset",
        "border-color": "silver"
      });
    });
    
    trackListLoadBtn.on("mousedown", function() {
      $(this).css({
        "background": "linear-gradient(to right, navy, skyblue, navy)",
        "border-style": "inset",
        "border-color": "white"
      });
    });
    
    trackListLoadBtn.on("mouseup mouseleave", function() {
      $(this).css({
        "background": "#000029",
        "border-style": "outset",
        "border-color": "silver"
      });
    });
    
    addTrackListBtn.on("mousedown", function() {
      $(this).css({
        "background": "linear-gradient(to right, navy, skyblue, navy)",
        "border-style": "inset",
        "border-color": "white"
      });
    });
    
    addTrackListBtn.on("mouseup mouseleave", function() {
      $(this).css({
        "background": "#000029",
        "border-style": "outset",
        "border-color": "silver"
      });
    });
    
    trackSaveBtn.on("mousedown", function() {
      $(this).css({
        "background": "linear-gradient(to right, navy, skyblue, navy)",
        "border-style": "inset",
        "border-color": "white"
      });
    });
    
    trackSaveBtn.on("mouseup mouseleave", function() {
      $(this).css({
        "background": "#000029",
        "border-style": "outset",
        "border-color": "silver"
      });
    });
    
    trackDelBtn.on("mouseup mouseleave", function() {
      $(this).css({
        "background": "#290000",
        "border-style": "outset",
        "border-color": "silver"
      });
    });
    
    trackDelBtn.on("mousedown", function() {
      $(this).css({
        "background": "linear-gradient(to right, darkred, red, darkred)",
        "border-style": "inset",
        "border-color": "white"
      });
    });
    
    mixToggle.on("mousedown", function() {
      $(this).css({
        "background": "linear-gradient(to right, green, lime, green)",
        "border-style": "inset",
        "border-color": "white"
      });
    });
    
    mixToggle.on("mouseup mouseleave", function() {
      $(this).css({
        "background": "#002900",
        "border-style": "outset",
        "border-color": "silver"
      });
    });
    
    infoFootBtn.on("mousedown", function() {
      $(this).css({
        "background": "linear-gradient(to right, grey, silver, grey)",
        "border-style": "inset",
        "border-color": "white"
      });
    });
    
    infoFootBtn.on("mouseup mouseleave", function() {
      $(this).css({
        "background": "#303030",
        "border-style": "outset",
        "border-color": "silver"
      });
    });
    
    alertFootBtn.on("mousedown", function() {
      $(this).css({
        "background": "linear-gradient(to right, grey, silver, grey)",
        "border-style": "inset",
        "border-color": "white"
      });
    });
    
    alertFootBtn.on("mouseup mouseleave", function() {
      $(this).css({
        "background": "#303030",
        "border-style": "outset",
        "border-color": "silver"
      });
    });
    
    fxFile.on("change", function(e) {
      var fxFn = e.currentTarget.files[0];
      fxFileName.val(fxFn.name);
    });
    
    fxLoadBtn.on("click", function() {
      fxFile.click();
    });
    
    addFxBtn.on("click", function() {
      var fxName = fxFileName.val();
      var fxLabel = fxFileLabel.val();
      fxLibList.prepend("<li name='"+fxName+"' style='padding-top:4px; padding-bottom:4px;'>"+fxLabel+"</li>");
    });
    
    fxLibList.on("mouseenter", function() {
      $("#fxList li").on("mouseenter", function() {
        $(this).css("background", "#00aaff");
      });
      
      $("#fxList li").on("mouseleave", function() {
        $(this).css("background", "none");
      });
      
      $("#fxList li").on("click", function() {
        $("#fxList li").removeClass("selFx");
        var fxVolume = volFxMixer.val();
        var fxPitch = pitchFxMixer.val();
        
        $(this).addClass("selFx");
        fxPlayer.attr("src", settings.fxPath+$(this).attr("name")).prop({"volume": fxVolume, "playbackRate": fxPitch});
      });
    });
    
    fxLibList.on("mouseleave", function() {
        $("#fxList li").off("click").off("mouseenter").off("mouseleave");
      });
    
    playFxBtn.on("click", function() {
      var volMix1 = volMixer1.val();
      var volMix2 = volMixer2.val();
      var volMix3 = volMixer3.val();
      var volMix4 = volMixer4.val();
      var fadeVal1 = fader1.val();
      var fadeVal2 = fader2.val();
      var fxCtrl = fxVolController.val();
      
      player1.prop("volume",volMix1*fadeVal1*fxCtrl);
      player2.prop("volume",volMix2*fadeVal2*fxCtrl);
      player3.prop("volume",volMix3*fadeVal1*fxCtrl);
      player4.prop("volume",volMix4*fadeVal2*fxCtrl);
      fxPlayer.trigger("play");
    });
    
    fxPlayer.on("playing", function() {
      playFxBtn.css({
        "background": "linear-gradient(to right, green, lime, green)",
        "border-style": "inset",
        "border-color": "lime"
      });
    });
    
    fxPlayer.on("ended", function() {
      playFxBtn.css({
        "background": "#002900",
        "border-style": "outset",
        "border-color": "silver"
      });
      
      player1.prop("volume",volMixer1.val()*fader1.val());
      player2.prop("volume",volMixer2.val()*fader2.val());
      player3.prop("volume",volMixer3.val()*fader1.val());
      player4.prop("volume",volMixer4.val()*fader2.val());
    });
    
    volMixer1.on("change", function() {
      player1.prop("volume", $(this).val()*fader1.val());
    });
    
    volMixer1.on("mouseenter", function() {
      infoBox.text("Volume Player1: ");
    });
    
    volMixer1.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
    
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
      infoBox.text("Volume Player 1: "+ Math.round($(this).val()*100) + "%");
      $(this).trigger("change");
    });
    
    volMixer1.on("mouseleave", function() {
      infoBox.hide();
    });
    
    volMixer2.on("change", function() {
      player2.prop("volume", $(this).val()*fader2.val());
    });
    
    volMixer2.on("mouseenter", function() {
      infoBox.text("Volume Player 2: ");
    });
    
    volMixer2.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
    
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
      infoBox.text("Volume Player 2: "+ Math.round($(this).val()*100) + "%");
      $(this).trigger("change");
    });
    
    volMixer2.on("mouseleave", function() {
      infoBox.hide();
    });
    
    volMixer3.on("change", function() {
      player3.prop("volume", $(this).val()*fader1.val());
    });
    
    volMixer3.on("mouseenter", function() {
      infoBox.text("Volume Player 3: ");
    });
    
    volMixer3.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
    
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
      infoBox.text("Volume Player 3: "+ Math.round($(this).val()*100) + "%");
      $(this).trigger("change");
    });
    
    volMixer3.on("mouseleave", function() {
      infoBox.hide();
    });
    
    volMixer4.on("change", function() {
      player4.prop("volume", $(this).val()*fader2.val());
    });
    
    volMixer4.on("mouseenter", function() {
      infoBox.text("Volume Player 4: ");
    });
    
    volMixer4.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
    
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
      infoBox.text("Volume Player 4: "+ Math.round($(this).val()*100) + "%");
      $(this).trigger("change");
    });
    
    volMixer4.on("mouseleave", function() {
      infoBox.hide();
    });
    
    volFxMixer.on("change", function() {
      fxPlayer.prop("volume", volFxMixer.val());
    });
    
    volFxMixer.on("mouseenter", function() {
      infoBox.text("Volume FX: ");
    });
    
    volFxMixer.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
    
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
      infoBox.text("Volume FX: "+ Math.round($(this).val()*100) + "%");
      $(this).trigger("change");
    });
    
    volFxMixer.on("mouseleave", function() {
      infoBox.hide();
    });
    
    pitchFxMixer.on("change", function() {
      fxPlayer.prop("playbackRate", pitchFxMixer.val());
    });
    
    pitchFxMixer.on("mouseenter", function() {
      infoBox.text("Pitch FX: ");
    });
    
    pitchFxMixer.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = infoBox.width();
      var infoPos = infoWidth/2;
    
      infoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
      infoBox.text("Pitch FX: "+ Math.round($(this).val()*100)/100);
      $(this).trigger("change");
    });
    
    pitchFxMixer.on("mouseleave", function() {
      infoBox.hide();
    });
    
    pitchFxMixer.on("contextmenu", function() {
      $(this).val(1);
      return false;
    });
    
    volMixBtn.on("click", function() {
      if (volMixer1.val() < 0.25) {
        volMixer1.val(1).trigger("change");
      } else {
        volMixer1.val(0).trigger("change");
      }
    });
    
    volMixBtn2.on("click", function() {
      if (volMixer2.val() < 0.25) {
        volMixer2.val(1).trigger("change");
      } else {
        volMixer2.val(0).trigger("change");
      }
    });
    
    volMixBtn3.on("click", function() {
      if (volMixer3.val() < 0.25) {
        volMixer3.val(1).trigger("change");
      } else {
        volMixer3.val(0).trigger("change");
      }
    });
    
    volMixBtn4.on("click", function() {
      if (volMixer4.val() < 0.25) {
        volMixer4.val(1).trigger("change");
      } else {
        volMixer4.val(0).trigger("change");
      }
    });
    
    volMixBtn5.on("click", function() {
      if (volFxMixer.val() < 0.25) {
        volFxMixer.val(1).trigger("change");
      } else {
        volFxMixer.val(0).trigger("change");
      }
    });
    
    fxLoadBtn.on("mousedown", function() {
      $(this).css({
        "background": "linear-gradient(to right, navy, skyblue, navy)",
        "border-style": "inset",
        "border-color": "white"
      });
    });
    
    fxLoadBtn.on("mouseup mouseleave", function() {
      $(this).css({
        "background": "#000029",
        "border-style": "outset",
        "border-color": "silver"
      });
    });
    
    volMixBtn.on("mousedown", function() {
      $(this).css({
        "background": "linear-gradient(to right, navy, skyblue, navy)",
        "border-style": "inset",
        "border-color": "skyblue"
      });
    });
    
    volMixBtn.on("mouseup mouseleave", function() {
      $(this).css({
        "background": "#000029",
        "border-style": "outset",
        "border-color": "#000029"
      });
    });
    
    volMixBtn2.on("mousedown", function() {
      $(this).css({
        "background": "linear-gradient(to right, navy, skyblue, navy)",
        "border-style": "inset",
        "border-color": "skyblue"
      });
    });
    
    volMixBtn2.on("mouseup mouseleave", function() {
      $(this).css({
        "background": "#000029",
        "border-style": "outset",
        "border-color": "#000029"
      });
    });
    
    volMixBtn3.on("mousedown", function() {
      $(this).css({
        "background": "linear-gradient(to right, navy, skyblue, navy)",
        "border-style": "inset",
        "border-color": "skyblue"
      });
    });
    
    volMixBtn3.on("mouseup mouseleave", function() {
      $(this).css({
        "background": "#000029",
        "border-style": "outset",
        "border-color": "#000029"
      });
    });
    
    volMixBtn4.on("mousedown", function() {
      $(this).css({
        "background": "linear-gradient(to right, navy, skyblue, navy)",
        "border-style": "inset",
        "border-color": "skyblue"
      });
    });
    
    volMixBtn4.on("mouseup mouseleave", function() {
      $(this).css({
        "background": "#000029",
        "border-style": "outset",
        "border-color": "#000029"
      });
    });
    
    volMixBtn5.on("mousedown", function() {
      $(this).css({
        "background": "linear-gradient(to right, navy, skyblue, navy)",
        "border-style": "inset",
        "border-color": "skyblue"
      });
    });
    
    volMixBtn5.on("mouseup mouseleave", function() {
      $(this).css({
        "background": "#000029",
        "border-style": "outset",
        "border-color": "#000029"
      });
    });
    
    addFxBtn.on("mousedown", function() {
      $(this).css({
        "background": "linear-gradient(to right, green, lime, green)",
        "border-style": "inset",
        "border-color": "white"
      });
    });
    
    addFxBtn.on("mouseup mouseleave", function() {
      $(this).css({
        "background": "#002900",
        "border-style": "outset",
        "border-color": "silver"
      });
    });
    
    var tracklistDelBtn = $("<button class='toolbuttons'><img src='Symbole/delete2.png' style='width:20px; height:20px; filter:invert(100%);'></button>");
    tracklistDelBtn.css({
      "width": "50px",
      "height": "50px",
      "font-size": "16px",
      "margin-left": "9px",
      "background": "#290000",
      "border-radius": "50%",
      "border": "4px outset silver"
    });
    
    tracklistDelBtn.appendTo(trackToolbar2);
    
    var confirmMod = $("<div/>");
    confirmMod.css({
      "background": "212121",
      "border": "2px outset rgba(255, 255, 255, 0.8)",
      "width": "600px",
      "position": "fixed",
      "left": "20px",
      "top": "20px",
      "z-index": "250",
      "display": "none"
    }).appendTo(element);
    
    var confirmHead = $("<div/>");
    confirmHead.css({
      "width": "98.6%",
      "height": "30px",
      "font-size": "20px",
      "background": "#292929",
      "font-weight": "bold",
      "color": "white",
      "text-align": "left",
      "padding": "4px",
    }).text("Modal-Message").appendTo(confirmMod);
    
    var confirmClosBtn = $("<button class='closeBtn'>X</button>");
    confirmClosBtn.appendTo(confirmHead);
    
    var confirmMain = $("<div/>");
    confirmMain.css({
      "width": "100%",
      "height": "140px",
      "text-align": "left",
      "background": "#151515",
      "display": "flex",
      "flext-direction": "row"
    }).appendTo(confirmMod);
    
    var confirmImgBox = $("<div/>");
    confirmImgBox.css({
      "width": "30%",
      "height": "140px",
      "text-align": "center"
    }).appendTo(confirmMain);
    
    var confirmSymbol = $("<img src='Symbole/confirm.png'/>");
    confirmSymbol.css({
      "margin-top": "20px"
    });
    confirmSymbol.appendTo(confirmImgBox);
    
    var confirmTextBox = $("<div/>");
    confirmTextBox.css({
      "width": "70%",
      "height": "140px",
      "text-align": "left",
      "font-weight": "bold",
      "color": "white",
      "font-size": "25px",
      "padding-top": "20px"
    }).html("Alert-Warning!").appendTo(confirmMain);
    
    var confirmFoot = $("<div/>");
    confirmFoot.css({
      "width": "98.6%",
      "height": "30px",
      "font-size": "20px",
      "background": "#151515",
      "font-weight": "bold",
      "color": "white",
      "text-align": "center",
      "padding": "4px",
      "border-top": "1px solid rgba(255, 255, 255, 0.8)"
    }).appendTo(confirmMod);
    
    var confirmFootBtn1 = $("<button class='toolbuttons9'>OK</button>");
    confirmFootBtn1.css({
      "width": "120px",
      "height": "26px",
      "font-size": "16px",
      "background": "#303030",
      "border": "2px outset grey"
    });
    confirmFootBtn1.appendTo(confirmFoot);
    
    var confirmFootBtn2 = $("<button class='toolbuttons9'>Abort</button>");
    confirmFootBtn2.css({
      "width": "120px",
      "height": "26px",
      "font-size": "16px",
      "background": "#303030",
      "border": "2px outset grey",
      "margin-left": "4px"
    });
    confirmFootBtn2.appendTo(confirmFoot);
    
    tracklistDelBtn.on("click", function() {
      confirmMod.animate({left: element.width()/2 - confirmMod.width()/2 + "px", top: element.height()/2 - confirmMod.height()/2 + "px"},1).show();
      confirmTextBox.html("Will You Delete<br>the complete Tracklist?");
      confirmFootBtn1.one("click", function() {
        trackLibList.html("");
        confirmMod.hide();
      });
    });
    
    confirmClosBtn.on("click", function() {
      confirmMod.hide();
    });
    
    confirmFootBtn2.on("click", function() {
      confirmMod.hide();
    });
    
    tracklistDelBtn.on("mouseup mouseleave", function() {
      $(this).css({
        "background": "#290000",
        "border-style": "outset",
        "border-color": "silver"
      });
    });
    
    tracklistDelBtn.on("mousedown", function() {
      $(this).css({
        "background": "linear-gradient(to right, darkred, red, darkred)",
        "border-style": "inset",
        "border-color": "white"
      });
    });
    
    confirmFootBtn1.on("mousedown", function() {
      $(this).css({
        "background": "linear-gradient(to right, grey, silver, grey)",
        "border-style": "inset",
        "border-color": "white"
      });
    });
    
    confirmFootBtn1.on("mouseup mouseleave", function() {
      $(this).css({
        "background": "#303030",
        "border-style": "outset",
        "border-color": "silver"
      });
    });
    
    confirmFootBtn2.on("mousedown", function() {
      $(this).css({
        "background": "linear-gradient(to right, grey, silver, grey)",
        "border-style": "inset",
        "border-color": "white"
      });
    });
    
    confirmFootBtn2.on("mouseup mouseleave", function() {
      $(this).css({
        "background": "#303030",
        "border-style": "outset",
        "border-color": "silver"
      });
    });
    
    var newTrackPosMod = $("<div/>");
    newTrackPosMod.css({
      "width": "350px",
      "position": "absolute",
      "left": "30px",
      "top": "30px",
      "background": "rgba(15, 15, 15, 0.8)",
      "border": "4px outset white",
      "border-radius": "6px",
      "display": "none",
      "z-index": 250
    }).appendTo(element);
    
    var newPosArea = $("<div/>");
    newPosArea.css({
      "width": "100%",
      "height": "40px",
      "padding": "4px",
      "text-align": "left"
    }).appendTo(newTrackPosMod);
    
    var trackNewpos = $("<input type='number'>");
    trackNewpos.css({
      "width": "80px",
      "height": "40px",
      "font-size": "20px",
      "font-weight": "bold",
      "color": "white",
      "background": "#212121",
      "border": "2px outset silver",
      "border-radius": "6px"
    }).appendTo(newPosArea);
    
    var newBtn = $("<button/>");
    newBtn.css({
      "width": "80px",
      "height": "40px",
      "font-size": "20px",
      "font-weight": "bold",
      "color": "white",
      "background": "#212121",
      "border": "2px outset silver",
      "border-radius": "6px",
      "margin-left": "6px",
      "cursor": "pointer"
    }).text("Set").appendTo(newPosArea);
    
    var newFirstBtn = $("<button/>");
    newFirstBtn.css({
      "width": "80px",
      "height": "40px",
      "font-size": "20px",
      "font-weight": "bold",
      "color": "white",
      "background": "#212121",
      "border": "2px outset silver",
      "border-radius": "6px",
      "margin-left": "6px",
      "cursor": "pointer"
    }).text("First").appendTo(newPosArea);
    
    var newLastBtn = $("<button/>");
    newLastBtn.css({
      "width": "80px",
      "height": "40px",
      "font-size": "20px",
      "font-weight": "bold",
      "color": "white",
      "background": "#212121",
      "border": "2px outset silver",
      "border-radius": "6px",
      "margin-left": "6px",
      "cursor": "pointer"
    }).text("Last").appendTo(newPosArea);
    
    newBtn.on("mousedown", function() {
      $(this).css({
        "background": "linear-gradient(to right, grey, silver, grey)",
        "border-style": "inset",
        "border-color": "white"
      });
    });
    
    newBtn.on("mouseup mouseleave", function() {
      $(this).css({
        "background": "#212121",
        "border-style": "outset",
        "border-color": "silver"
      });
    });
    
    newFirstBtn.on("mousedown", function() {
      $(this).css({
        "background": "linear-gradient(to right, grey, silver, grey)",
        "border-style": "inset",
        "border-color": "white"
      });
    });
    
    newFirstBtn.on("mouseup mouseleave", function() {
      $(this).css({
        "background": "#212121",
        "border-style": "outset",
        "border-color": "silver"
      });
    });
    
    newLastBtn.on("mousedown", function() {
      $(this).css({
        "background": "linear-gradient(to right, grey, silver, grey)",
        "border-style": "inset",
        "border-color": "white"
      });
    });
    
    newLastBtn.on("mouseup mouseleave", function() {
      $(this).css({
        "background": "#212121",
        "border-style": "outset",
        "border-color": "silver"
      });
    });
    
    trackUpBtn.on("contextmenu", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      newTrackPosMod.animate({left: xPos - newTrackPosMod.width()/2, top: yPos - newTrackPosMod.height() - 16},1).show();
      return false;
    });
    
    trackDownBtn.on("contextmenu", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      newTrackPosMod.animate({left: xPos - newTrackPosMod.width()/2, top: yPos - newTrackPosMod.height() - 16},1).show();
      return false;
    });
    
    trackNewpos.on("focus", function() {
      $(this).val($("#tracklist li").length);
      $(this).attr({
        "min": 1,
        "max": $("#tracklist li").length
    	});
    });
    
    var closeNewTrack;
    
    newTrackPosMod.on("mouseenter", function() {
      clearTimeout(closeNewTrack);
    });
    
    newTrackPosMod.on("mouseleave", function() {
      closeNewTrack = setTimeout(function() {
        newTrackPosMod.hide();
      },1600);
    });
    
    newBtn.on("click", function() {
      var trNew = trackNewpos.val() - 1;
      $(".selTrack").each(function() {
        $("#tracklist li").removeClass("selTrack");
        $("#tracklist li:eq("+trNew+")").before("<li style='"+$(this).attr("style")+"'>"+$(this).text()+"</li>");
        $("#tracklist li:eq("+trNew+")").addClass("selTrack");
        currentTrack = trNew;
        $(this).remove();
      });
      
      newTrackPosMod.hide();
      setPosition();
    });
    
    newFirstBtn.on("click", function() {
      $(".selTrack").each(function() {
        $("#tracklist li").removeClass("selTrack");
        trackLibList.prepend("<li style='"+$(this).attr("style")+"'>"+$(this).text()+"</li>");
        $("#tracklist li:eq(0)").addClass("selTrack");
        currentTrack = 0;
        $(this).remove();
      });
      
      newTrackPosMod.hide();
      setPosition();
    });
    
    newLastBtn.on("click", function() {
      $(".selTrack").each(function() {
        $("#tracklist li").removeClass("selTrack");
        trackLibList.append("<li style='"+$(this).attr("style")+"'>"+$(this).text()+"</li>");
        $("#tracklist li:eq(-1)").addClass("selTrack");
        currentTrack = $("#tracklist li").length - 2;
        $(this).remove();
      });
      
      newTrackPosMod.hide();
      setPosition();
    });
    
    var trZoomBtn = $("<button class='toolbuttons5'>Zoom Tracklist</button>");
    trZoomBtn.css({
      "border": "2px outset silver"
    }).appendTo(bottomMain);
    
    var bigTrackMod = $("<div/>");
    bigTrackMod.css({
      "width": "70%",
      "background": "#212121",
      "border": "4px outset white",
      "position": "absolute",
      "left": "20px",
      "top": "20px",
      "z-index": 250,
      "display": "none"
    }).appendTo(element);
    
    var bigTrackHead = $("<div/>");
    bigTrackHead.css({
      "width": "100%",
      "height": "25px",
      "background": "#151515",
      "padding-top": "6px",
      "font-size": "20px",
      "font-weight": "bold",
      "color": "white",
      "text-align": "left"
    }).text("Zoom Tracklist").appendTo(bigTrackMod);
    
    var bigCloseBtn = $("<button class='closeBtn'>X</button>");
    bigCloseBtn.css({
      "margin-right": "6px",
      "margin-bottom": "4px"
    });
    bigCloseBtn.appendTo(bigTrackHead);
    
    var bigTrackArea = $("<div/>");
    bigTrackArea.css({
      "width": "100%",
      "height": "600px",
      "border-top": "4px solid rgba(255, 255, 255, 0.8)",
      "border-bottom": "4px solid rgba(255, 255, 255, 0.8)",
      "display": "flex",
      "flex-direction": "row"
    }).appendTo(bigTrackMod);
    
    var bigTrackBox = $("<div/>");
    bigTrackBox.css({
      "width": "65%",
      "height": "584px",
      "margin": "4px",
      "border": "4px solid rgba(255, 255, 255, 0.6)",
      "overflow": "auto"
    }).appendTo(bigTrackArea);
    
    var bigFxBox = $("<div/>");
    bigFxBox.css({
      "width": "34%",
      "height": "584px",
      "margin": "4px",
      "border": "4px solid rgba(255, 255, 255, 0.6)",
      "overflow": "auto"
    }).appendTo(bigTrackArea);
    
    var bigTrackfoot = $("<div/>");
    bigTrackfoot.css({
      "width": "100%",
      "height": "35px",
      "background": "#151515",
      "padding-top": "6px",
      "font-size": "20px",
      "font-weight": "bold",
      "color": "white",
      "text-align": "center",
      "cursor": "pointer"
    }).appendTo(bigTrackMod);
    
    var trackBigList = $("<ul id='trackBigList'></ul>");
    trackBigList.css({
      "padding": "1px",
      "margin": "1px",
      "font-size": "20px",
      "font-weight": "bold",
      "color": "white",
      "list-style": "none",
      "text-align": "left",
      "cursor": "pointer",
    }).appendTo(bigTrackBox);
    
    var fxBigList = $("<ul id='fxBigList'></ul>");
    fxBigList.css({
      "padding": "1px",
      "margin": "1px",
      "font-size": "20px",
      "font-weight": "bold",
      "color": "white",
      "list-style": "none",
      "text-align": "left",
      "cursor": "pointer"
    }).appendTo(bigFxBox);
    
    var sortBtn1 = $("<button/>");
    sortBtn1.css({
      "width": "180px",
      "height": "30px",
      "font-size": "20px",
      "font-weight": "bold",
      "color": "white",
      "background": "#212121",
      "border": "2px outset silver",
      "border-radius": "6px",
      "margin-left": "6px",
      "cursor": "pointer"
    }).text("Sort A-Z").appendTo(bigTrackfoot);
    
    var sortBtn2 = $("<button/>");
    sortBtn2.css({
      "width": "180px",
      "height": "30px",
      "font-size": "20px",
      "font-weight": "bold",
      "color": "white",
      "background": "#212121",
      "border": "2px outset silver",
      "border-radius": "6px",
      "margin-left": "6px",
      "cursor": "pointer"
    }).text("Sort Z-A").appendTo(bigTrackfoot);
    
    var playFxBtn2 = $("<button/>");
    playFxBtn2.css({
      "width": "180px",
      "height": "30px",
      "font-size": "20px",
      "font-weight": "bold",
      "color": "white",
      "background": "#212121",
      "border": "2px outset silver",
      "border-radius": "6px",
      "margin-left": "6px",
      "cursor": "pointer"
    }).text("Play FX").appendTo(bigTrackfoot);
    
    var closeBigTrack = $("<button/>");
    closeBigTrack.css({
      "width": "180px",
      "height": "30px",
      "font-size": "20px",
      "font-weight": "bold",
      "color": "white",
      "background": "#212121",
      "border": "2px outset silver",
      "border-radius": "6px",
      "margin-left": "6px",
      "cursor": "pointer"
    }).text("Close Trackbox").appendTo(bigTrackfoot);
    
    trZoomBtn.on("click", function() {
      trackBigList.html(trackLibList.html());
      fxBigList.html(fxLibList.html());
      bigTrackMod.animate({left: element.width()/2 - bigTrackMod.width()/2, top: element.height()/2 - bigTrackMod.height()/2},1).show();
    });
    
    closeBigTrack.on("click", function() {
      bigTrackMod.hide();
    });
    
    bigCloseBtn.on("click", function() {
      bigTrackMod.hide();
    });
    
    bigTrackBox.on("mouseenter", function() {
      $("#trackBigList li").on("mouseenter", function() {
        $(this).css("background", "#00b2ff");
      });
      
      $("#trackBigList li").on("mouseleave", function() {
        $(this).css("background", "none");
      });
      
      $("#trackBigList li").on("click", function() {
        $("#tracklist li").removeClass("selTrack");
        currentTrack = $(this).index();
        $("#tracklist li:eq("+currentTrack+")").addClass("selTrack");
        
        if (playerNumber.val() === "player1") {
          loadTrack("pitchRange1", "trackNumber1", "player1", "artist1");
        } else if (playerNumber.val() === "player2") {
          loadTrack("pitchRange2", "trackNumber2", "player2", "artist2");
        } else if (playerNumber.val() === "player3") {
          loadTrack("pitchRange3", "trackNumber3", "player3", "artist3");
        } else if (playerNumber.val() === "player4") {
          loadTrack("pitchRange4", "trackNumber4", "player4", "artist4");
        }
        
        bigTrackMod.hide();
      });
    });
    
    bigFxBox.on("mouseenter", function() {
      $("#fxBigList li").on("mouseenter", function() {
        $(this).css("background", "#00b2ff");
      });
      
      $("#fxBigList li").on("mouseleave", function() {
        $(this).css("background", "none");
      });
      
      $("#fxBigList li").on("click", function() {
        var fxVolume = volFxMixer.val();
        var fxPitch = pitchFxMixer.val();
        
        $("#fxList li").removeClass("selFx");
        $("#fxList li:eq("+$(this).index()+")").addClass("selFx");
        fxPlayer.attr("src", settings.fxPath+$(this).attr("name")).prop({"volume": fxVolume, "playbackRate": fxPitch});
      });
    });
    
    bigTrackBox.on("mouseleave", function() {
      $("#trackBigList li").off("mouseenter").off("mouseleave").off("click");
    });
    
    bigFxBox.on("mouseleave", function() {
      $("#fxBigList li").off("mouseenter").off("mouseleave").off("click");
    });
    
    playFxBtn2.on("click", function() {
      fxPlayer.trigger("play");
    });
    
    sortBtn1.on("click", function() {
      var sortArr = [];
      var sortArr2 = [];
      
      for (var y=0; y<$("#tracklist li").length; y++) {
        sortArr.push($("#tracklist li:eq("+y+")").text());
      }
      
      sortArr.sort();
      for (var z=0; z<sortArr.length; z++) {
        sortArr2.push("<li style='padding-top:4px; padding-bottom:4px;'>"+sortArr[z]+"</li>");
      }
      
      trackLibList.html(sortArr2.join(""));
      $("#tracklist li:eq(0)").addClass("selTrack");
      trZoomBtn.click();
    });
    
    sortBtn2.on("click", function() {
      var sortrevArr = [];
      var sortrevArr2 = [];
      
      for (var y=0; y<$("#tracklist li").length; y++) {
        sortrevArr.push($("#tracklist li:eq("+y+")").text());
      }
      
      sortrevArr.sort().reverse();
      for (var z=0; z<sortrevArr.length; z++) {
        sortrevArr2.push("<li style='padding-top:4px; padding-bottom:4px;'>"+sortrevArr[z]+"</li>");
      }
      
      trackLibList.html(sortrevArr2.join(""));
      $("#tracklist li:eq(0)").addClass("selTrack");
      trZoomBtn.click();
    });
    
    sortBtn1.on("mousedown", function() {
      $(this).css({
        "background": "linear-gradient(to right, grey, silver, grey)",
        "border-style": "inset",
        "border-color": "white"
      });
    });
    
    sortBtn1.on("mouseup mouseleave", function() {
      $(this).css({
        "background": "#212121",
        "border-style": "outset",
        "border-color": "silver"
      });
    });
    
    sortBtn2.on("mousedown", function() {
      $(this).css({
        "background": "linear-gradient(to right, grey, silver, grey)",
        "border-style": "inset",
        "border-color": "white"
      });
    });
    
    sortBtn2.on("mouseup mouseleave", function() {
      $(this).css({
        "background": "#212121",
        "border-style": "outset",
        "border-color": "silver"
      });
    });
    
    playFxBtn2.on("mousedown", function() {
      $(this).css({
        "background": "linear-gradient(to right, grey, silver, grey)",
        "border-style": "inset",
        "border-color": "white"
      });
    });
    
    playFxBtn2.on("mouseup mouseleave", function() {
      $(this).css({
        "background": "#212121",
        "border-style": "outset",
        "border-color": "silver"
      });
    });
    
    closeBigTrack.on("mousedown", function() {
      $(this).css({
        "background": "linear-gradient(to right, grey, silver, grey)",
        "border-style": "inset",
        "border-color": "white"
      });
    });
    
    closeBigTrack.on("mouseup mouseleave", function() {
      $(this).css({
        "background": "#212121",
        "border-style": "outset",
        "border-color": "silver"
      });
    });
    
    trZoomBtn.on("mousedown", function() {
      $(this).css({
        "background": "linear-gradient(to right, green, lime, green)",
        "border-style": "inset",
        "border-color": "white"
      });
    });
    
    trZoomBtn.on("mouseup mouseleave", function() {
      $(this).css({
        "background": "#002900",
        "border-style": "outset",
        "border-color": "silver"
      });
    });
    
    var conMenu = $("<div id='menu'></div>");
    conMenu.css({
      "width": "250px",
      "background": "rgba(21, 21, 21, 0.8)",
      "position": "absolute",
      "left": "10px",
      "top": "10px",
      "z-index": 100,
      "border": "2px outset #303030",
      "display": "none"
    });
    
    conMenu.appendTo(element);
    
    var menuList = $("<ul/>");
    menuList.css({
      "margin": "1px",
      "padding": "1px",
      "list-style": "none",
      "font-size": "20px",
      "font-weight": "bold",
      "color": "white",
      "text-align": "left",
    });
    
    menuList.appendTo(conMenu);
    
    var listPoint1 = $("<li style='border-bottom: 1px solid rgba(255, 255, 255, 0.6)'>Open Mixer</li>");
    listPoint1.css({
      "padding-top": "6px",
      "padding-bottom": "6px",
      "cursor": "pointer"
    }).appendTo(menuList);
    
    var listPoint2 = $("<li style='border-bottom: 1px solid rgba(255, 255, 255, 0.6)'>Autoplay On</li>");
    listPoint2.css({
      "padding-top": "6px",
      "padding-bottom": "6px",
      "cursor": "pointer"
    }).appendTo(menuList);
    
    var listPoint3 = $("<li style='border-bottom: 1px solid rgba(255, 255, 255, 0.6)'>Trackchange Off</li>");
    listPoint3.css({
      "padding-top": "6px",
      "padding-bottom": "6px",
      "cursor": "pointer"
    }).appendTo(menuList);
    
    var listPoint4 = $("<li style='border-bottom: 1px solid rgba(255, 255, 255, 0.6)'>Standard-Playlist</li>");
    listPoint4.css({
      "padding-top": "6px",
      "padding-bottom": "6px",
      "cursor": "pointer"
    }).appendTo(menuList);
    
    var listPoint5 = $("<li style='border-bottom: 1px solid rgba(255, 255, 255, 0.6)'>Loop</li>");
    listPoint5.css({
      "padding-top": "6px",
      "padding-bottom": "6px",
      "cursor": "pointer"
    }).appendTo(menuList);
    
    var listPoint6 = $("<li style='border-bottom: 1px solid rgba(255, 255, 255, 0.6)'>Zoom Tracklist</li>");
    listPoint6.css({
      "padding-top": "6px",
      "padding-bottom": "6px",
      "cursor": "pointer"
    }).appendTo(menuList);
    
    var listPoint7 = $("<li style='border-bottom: 1px solid rgba(255, 255, 255, 0.6)'><img src='Symbole/plist2.png' style='width:16px; height:16px;'>&nbsp;Load Tracks</li>");
    listPoint7.css({
      "padding-top": "6px",
      "padding-bottom": "6px",
      "cursor": "pointer"
    }).appendTo(menuList);
    
    var listPoint8 = $("<li style='border-bottom: 1px solid rgba(255, 255, 255, 0.6)'><img src='Symbole/open.png' style='width:16px; height:16px;'>&nbsp;Load Tracklist</li>");
    listPoint8.css({
      "padding-top": "6px",
      "padding-bottom": "6px",
      "cursor": "pointer"
    }).appendTo(menuList);
    
    var listPoint9 = $("<li style='border-bottom: 1px solid rgba(255, 255, 255, 0.6)'><img src='Symbole/export.png' style='width:16px; height:16px;'>&nbsp;Save Playlist</li>");
    listPoint9.css({
      "padding-top": "6px",
      "padding-bottom": "6px",
      "cursor": "pointer"
    }).appendTo(menuList);
    
    var listPoint10 = $("<li><img src='Symbole/fullscreen.png' style='width:16px; height:16px;'>&nbsp;Toogle Fullscreen</li>");
    listPoint10.css({
      "padding-top": "6px",
      "padding-bottom": "6px",
      "cursor": "pointer"
    }).appendTo(menuList);
    
    element.on("contextmenu", function(e) {
      var scW = window.screen.availWidth;
      var scH = window.screen.availHeight;
      var menuX = e.pageX;
      var menuY = e.pageY;
      var menSizeX = conMenu.width();
      var menSizeY = conMenu.height();
      var menuPoxX = menuX + menSizeX;
      var menuPosY = menuY + menSizeY;
      
      if (menuPoxX > scW && menuPosY < scH) {
        conMenu.animate({left: menuX - menSizeX, top: menuY},6).show();
      } else if (menuPosY > scH && menuPoxX < scW) {
        conMenu.animate({left: menuX, top: menuY - menSizeY},6).show();
      } else if (menuPosY > scH && menuPoxX > scW) {
        conMenu.animate({left: menuX - menSizeX, top: menuY - menSizeY},6).show();
      } else {
        conMenu.animate({left: menuX, top: menuY},6).show();
      }
      
      return false;
    });
    
    var closeMenu;

    conMenu.on("mouseenter", function() {
	clearTimeout(closeMenu);
    });

    conMenu.on("mouseleave", function() {
	closeMenu = setTimeout(function() {
	   conMenu.hide();
	},1600);	
    });
    
    listPoint1.on("click", function() {
      mixToggle.click();
      conMenu.hide();
    });
    
    listPoint2.on("click", function() {
      autoplayBtn.click();
      if (autoplayBtn.attr("style")) {
        $(this).html("Autoplay Off");
      } else {
        $(this).html("Autoplay On");
      }
      conMenu.hide();
    });
    
    listPoint3.on("click", function() {
      trackChangeBtn.click();
      if (trackChangeBtn.attr("style")) {
        $(this).html("Trackchange Off");
      } else {
        $(this).html("Trackchange On");
      }
      conMenu.hide();
    });
    
    listPoint4.on("click", function() {
      onePlay.click();
      if (onePlay.attr("style")) {
        $(this).html("Crossfade-Mode");
      } else {
        $(this).html("Standard-Playlist");
      }
      conMenu.hide();
    });
    
    listPoint5.on("click", function() {
      playLoop.click();
      if (onePlay.attr("style")) {
        $(this).html("Crossfade-Mode");
      } else {
        $(this).html("Standard-Playlist");
      }
      conMenu.hide();
    });
    
    listPoint6.on("click", function() {
      trZoomBtn.click();
      conMenu.hide();
    });
    
    listPoint7.on("click", function() {
      addTrackMultiBtn.click();
      conMenu.hide();
    });
    
    listPoint8.on("click", function() {
      trackListLoadBtn.click();
      conMenu.hide();
    });
    
    listPoint9.on("click", function() {
      trackSaveBtn.click();
      conMenu.hide();
    });
    
    listPoint10.on("click", function() {
      fullScreen.click();
      if (fullScreen.attr("style")) {
        $(this).html("<img src='Symbole/fullscreenoff.png' style='width: 16px; height: 16px;'>&nbsp;Exit Fullscreen");
      } else {
        $(this).html("<img src='Symbole/fullscreen.png' style='width: 16px; height: 16px;'>&nbsp;Fullscreen");
      }
      conMenu.hide();
    });
    
    $("#menu li").on("mouseenter", function() {
      $(this).css("background","#009aff");
    });
    
    $("#menu li").on("mouseleave", function() {
      $(this).css("background","none");
    });
    
    $("#menu li").on("contextmenu", function(e) {
      $(this).click();
      return false;
    });
    
    var playerMenu = $("<div id='plmenu'></div>");
    playerMenu.css({
      "width": "250px",
      "background": "rgba(21, 21, 21, 0.8)",
      "position": "absolute",
      "left": "10px",
      "top": "10px",
      "z-index": 100,
      "border": "2px outset #303030",
      "display": "none"
    });
    
    playerMenu.appendTo(element);
    
    var playerList = $("<ul/>");
    playerList.css({
      "margin": "1px",
      "padding": "1px",
      "list-style": "none",
      "font-size": "20px",
      "font-weight": "bold",
      "color": "white",
      "text-align": "left",
    });
    
    playerList.appendTo(playerMenu);
    
    var pllistPoint1 = $("<li style='border-bottom: 1px solid rgba(255, 255, 255, 0.6)'>&#9654;/|| Play/Pause</li>");
    pllistPoint1.css({
      "padding-top": "9px",
      "padding-bottom": "9px",
      "cursor": "pointer"
    }).appendTo(playerList);
    
    var pllistPoint2 = $("<li style='border-bottom: 1px solid rgba(255, 255, 255, 0.6)'>&laquo; Rewind</li>");
    pllistPoint2.css({
      "padding-top": "9px",
      "padding-bottom": "9px",
      "cursor": "pointer"
    }).appendTo(playerList);
    
    var pllistPoint3 = $("<li style='border-bottom: 1px solid rgba(255, 255, 255, 0.6)'>&raquo; Forward</li>");
    pllistPoint3.css({
      "padding-top": "9px",
      "padding-bottom": "9px",
      "cursor": "pointer"
    }).appendTo(playerList);
    
    var pllistPoint4 = $("<li style='border-bottom: 1px solid rgba(255, 255, 255, 0.6)'>|&laquo; Previous Track</li>");
    pllistPoint4.css({
      "padding-top": "9px",
      "padding-bottom": "9px",
      "cursor": "pointer"
    }).appendTo(playerList);
    
    var pllistPoint5 = $("<li style='border-bottom: 1px solid rgba(255, 255, 255, 0.6)'>|&raquo; Next Track</li>");
    pllistPoint5.css({
      "padding-top": "9px",
      "padding-bottom": "9px",
      "cursor": "pointer"
    }).appendTo(playerList);
    
    var pllistPoint6 = $("<li><img src='Symbole/open.png' style='width:16px; height:16px;'>&nbsp;Load Track</li>");
    pllistPoint6.css({
      "padding-top": "6px",
      "padding-bottom": "6px",
      "cursor": "pointer"
    }).appendTo(playerList);
    
    artist1.on("contextmenu", function(e) {
      var scW = window.screen.availWidth;
      var scH = window.screen.availHeight;
      var menuX = e.pageX;
      var menuY = e.pageY;
      var pmenSizeX = playerMenu.width();
      var pmenSizeY = playerMenu.height();
      var pmenuPoxX = menuX + pmenSizeX;
      var pmenuPosY = menuY + pmenSizeY;
      
      playerNumber.val("player1");
      if (pmenuPoxX > scW && pmenuPosY < scH) {
        playerMenu.animate({left: menuX - pmenSizeX, top: menuY},6).show();
      } else if (pmenuPosY > scH && pmenuPoxX < scW) {
        playerMenu.animate({left: menuX, top: menuY - pmenSizeY},6).show();
      } else if (pmenuPosY > scH && pmenuPoxX > scW) {
        playerMenu.animate({left: menuX - pmenSizeX, top: menuY - pmenSizeY},6).show();
      } else {
        playerMenu.animate({left: menuX, top: menuY},6).show();
      }
      
      return false;
    });
    
    artist2.on("contextmenu", function(e) {
      var scW = window.screen.availWidth;
      var scH = window.screen.availHeight;
      var menuX = e.pageX;
      var menuY = e.pageY;
      var pmenSizeX = playerMenu.width();
      var pmenSizeY = playerMenu.height();
      var pmenuPoxX = menuX + pmenSizeX;
      var pmenuPosY = menuY + pmenSizeY;
      
      playerNumber.val("player2");
      if (pmenuPoxX > scW && pmenuPosY < scH) {
        playerMenu.animate({left: menuX - pmenSizeX, top: menuY},6).show();
      } else if (pmenuPosY > scH && pmenuPoxX < scW) {
        playerMenu.animate({left: menuX, top: menuY - pmenSizeY},6).show();
      } else if (pmenuPosY > scH && pmenuPoxX > scW) {
        playerMenu.animate({left: menuX - pmenSizeX, top: menuY - pmenSizeY},6).show();
      } else {
        playerMenu.animate({left: menuX, top: menuY},6).show();
      }
      
      return false;
    });
    
    artist3.on("contextmenu", function(e) {
      var scW = window.screen.availWidth;
      var scH = window.screen.availHeight;
      var menuX = e.pageX;
      var menuY = e.pageY;
      var pmenSizeX = playerMenu.width();
      var pmenSizeY = playerMenu.height();
      var pmenuPoxX = menuX + pmenSizeX;
      var pmenuPosY = menuY + pmenSizeY;
      
      playerNumber.val("player3");
      if (pmenuPoxX > scW && pmenuPosY < scH) {
        playerMenu.animate({left: menuX - pmenSizeX, top: menuY},6).show();
      } else if (pmenuPosY > scH && pmenuPoxX < scW) {
        playerMenu.animate({left: menuX, top: menuY - pmenSizeY},6).show();
      } else if (pmenuPosY > scH && pmenuPoxX > scW) {
        playerMenu.animate({left: menuX - pmenSizeX, top: menuY - pmenSizeY},6).show();
      } else {
        playerMenu.animate({left: menuX, top: menuY},6).show();
      }
      
      return false;
    });
    
    artist4.on("contextmenu", function(e) {
      var scW = window.screen.availWidth;
      var scH = window.screen.availHeight;
      var menuX = e.pageX;
      var menuY = e.pageY;
      var pmenSizeX = playerMenu.width();
      var pmenSizeY = playerMenu.height();
      var pmenuPoxX = menuX + pmenSizeX;
      var pmenuPosY = menuY + pmenSizeY;
      
      playerNumber.val("player4");
      if (pmenuPoxX > scW && pmenuPosY < scH) {
        playerMenu.animate({left: menuX - pmenSizeX, top: menuY},6).show();
      } else if (pmenuPosY > scH && pmenuPoxX < scW) {
        playerMenu.animate({left: menuX, top: menuY - pmenSizeY},6).show();
      } else if (pmenuPosY > scH && pmenuPoxX > scW) {
        playerMenu.animate({left: menuX - pmenSizeX, top: menuY - pmenSizeY},6).show();
      } else {
        playerMenu.animate({left: menuX, top: menuY},6).show();
      }
      
      return false;
    });
    
    var closePlMenu;

    playerMenu.on("mouseenter", function() {
	clearTimeout(closePlMenu);
    });

    playerMenu.on("mouseleave", function() {
	closePlMenu = setTimeout(function() {
	   playerMenu.hide();
	},1600);	
    });
    
    pllistPoint1.on("click", function() {
      if (playerNumber.val() === "player1") {
        playBtn1.click();
      } else if (playerNumber.val() === "player2") {
        playBtn2.click();
      } else if (playerNumber.val() === "player3") {
        playBtn3.click();
      } else if (playerNumber.val() === "player4") {
        playBtn4.click();
      }
      
      playerMenu.hide();
    });
    
    pllistPoint2.on("click", function() {
      if (playerNumber.val() === "player1") {
        rewBtn1.click();
      } else if (playerNumber.val() === "player2") {
        rewBtn2.click();
      } else if (playerNumber.val() === "player3") {
        rewBtn3.click();
      } else if (playerNumber.val() === "player4") {
        rewBtn4.click();
      }
      
      playerMenu.hide();
    });
    
    pllistPoint3.on("click", function() {
      if (playerNumber.val() === "player1") {
        forwBtn1.click();
      } else if (playerNumber.val() === "player2") {
        forwBtn2.click();
      } else if (playerNumber.val() === "player3") {
        forwBtn3.click();
      } else if (playerNumber.val() === "player4") {
        forwBtn4.click();
      }
      
      playerMenu.hide();
    });
    
    pllistPoint4.on("click", function() {
      if (playerNumber.val() === "player1") {
        skiprewBtn1.click();
      } else if (playerNumber.val() === "player2") {
        skiprewBtn2.click();
      } else if (playerNumber.val() === "player3") {
        skiprewBtn3.click();
      } else if (playerNumber.val() === "player4") {
        skiprewBtn4.click();
      }
      
      playerMenu.hide();
    });
    
    pllistPoint5.on("click", function() {
      if (playerNumber.val() === "player1") {
        skipforwBtn1.click();
      } else if (playerNumber.val() === "player2") {
        skipforwBtn2.click();
      } else if (playerNumber.val() === "player3") {
        skipforwBtn3.click();
      } else if (playerNumber.val() === "player4") {
        skipforwBtn4.click();
      }
      
      playerMenu.hide();
    });
    
    pllistPoint6.on("click", function() {
      trackLoadBtn.click();
      playerMenu.hide();
    });
    
    $("#plmenu li").on("mouseenter", function() {
      $(this).css("background","#009aff");
    });
    
    $("#plmenu li").on("mouseleave", function() {
      $(this).css("background","none");
    });
    
    $("#plmenu li").on("contextmenu", function(e) {
      $(this).click();
      return false;
    });
    
    
    function setPlaySettings() {
      if (settings.autoplay === true && settings.loop === false) {
        onePlay.click();
      } else if (settings.autoplay === false && settings.loop === true) {
        playLoop.click();
      }
    }
    
    setPlaySettings();
    
    function setAreaSize() {
      if (element.width() < 1600) {
        titleBar.css({
          "height": "20px",
          "font-size": "16px"
        });
        
        playerArea1.css("height", "150px");
        playerArea2.css("height", "150px");
        playerArea3.css("height", "150px");
        playerArea4.css("height", "150px");
        djTools1.css("height", "150px");
        djTools2.css("height", "150px");
        playerDisplay1.css("height", "60px");
        playerDisplay2.css("height", "60px");
        playerDisplay3.css("height", "60px");
        playerDisplay4.css("height", "60px");
        
        trackNumber1.css({
          "height": "40px",
          "font-size": "16px",
          "margin-top": "6px",
          "padding-top": "12px"
        });
        
        trackNumber2.css({
          "height": "40px",
          "font-size": "16px",
          "margin-top": "6px",
          "padding-top": "12px"
        });
        
        trackNumber3.css({
          "height": "40px",
          "font-size": "16px",
          "margin-top": "6px",
          "padding-top": "12px"
        });
        
        trackNumber4.css({
          "height": "40px",
          "font-size": "16px",
          "margin-top": "6px",
          "padding-top": "12px"
        });
        
        artist1.css({
          "height": "40px",
          "font-size": "16px",
          "margin-top": "6px",
          "padding-top": "12px"
        });
        
        artist2.css({
          "height": "40px",
          "font-size": "16px",
          "margin-top": "6px",
          "padding-top": "12px"
        });
        
        artist3.css({
          "height": "40px",
          "font-size": "16px",
          "margin-top": "6px",
          "padding-top": "12px"
        });
        
        artist4.css({
          "height": "40px",
          "font-size": "16px",
          "margin-top": "6px",
          "padding-top": "12px"
        });
        
        equalizer.css({
          "height": "50px",
          "margin-top": "6px",
          "padding-top": "2px",
    	});
        
        equalizer2.css({
          "height": "50px",
          "margin-top": "6px",
          "padding-top": "2px",
    	});
        
        equalizer3.css({
          "height": "50px",
          "margin-top": "6px",
          "padding-top": "2px",
    	});
        
        equalizer4.css({
          "height": "50px",
          "margin-top": "6px",
          "padding-top": "2px",
    	});
        
        tracktime1.css({
          "height": "40px",
          "font-size": "16px",
          "margin-top": "6px",
          "padding-top": "12px"
        });
        
        tracktime2.css({
          "height": "40px",
          "font-size": "16px",
          "margin-top": "6px",
          "padding-top": "12px"
        });
        
        tracktime3.css({
          "height": "40px",
          "font-size": "16px",
          "margin-top": "6px",
          "padding-top": "12px"
        });
        
        tracktime4.css({
          "height": "40px",
          "font-size": "16px",
          "margin-top": "6px",
          "padding-top": "12px"
        });
        
        timebox1.css({
         "height": "20px",
         "padding-top": "11px",
    	});
        
        timebox2.css({
         "height": "20px",
         "padding-top": "11px",
    	});
        
        timebox3.css({
         "height": "20px",
         "padding-top": "11px",
    	});
        
        timebox4.css({
         "height": "20px",
         "padding-top": "11px",
    	});
        
        playerTools1.css({
      	 "height": "40px",
      	 "padding-top": "9px",
    	});
        
        pitchArea1.css({
         "width": "80px",
      	 "height": "26px",
      	 "margin-left": "4px",
    	});
        
        pitchRange1.css({
         "width": "70px",
      	 "height": "15px",
      	 "margin-left": "2px",
    	});
        
        playerTools2.css({
      	 "height": "40px",
      	 "padding-top": "9px",
    	});
        
        pitchArea2.css({
         "width": "80px",
      	 "height": "26px",
      	 "margin-left": "4px",
    	});
        
        pitchRange2.css({
         "width": "70px",
      	 "height": "15px",
      	 "margin-left": "2px",
    	});
        
        playerTools3.css({
      	 "height": "40px",
      	 "padding-top": "9px",
    	});
        
        pitchArea3.css({
         "width": "80px",
      	 "height": "26px",
      	 "margin-left": "4px",
    	});
        
         pitchRange3.css({
          "width": "70px",
      	  "height": "15px",
      	  "margin-left": "2px",
    	});
        
         playerTools4.css({
      	  "height": "40px",
      	  "padding-top": "9px",
    	});
        
         pitchArea4.css({
          "width": "80px",
      	  "height": "26px",
      	  "margin-left": "4px",
    	});
        
         pitchRange4.css({
          "width": "70px",
      	  "height": "15px",
      	  "margin-left": "2px",
    	});
        
         playListRandomBtn.text("Rand");
        
         crossfadeImg.css({
      	  "width": "130px",
      	  "height": "60px"
    	});
        
         fader1.css({
      	  "width": "160px",
      	  "height": "15px"
    	});
        
         fader2.css({
      	  "width": "160px",
      	  "height": "15px"
    	});
        
        crossFadeMode.css({
      	 "width": "90px",
      	 "height": "30px",
         "font-size": "12px"
    	});
        
         crossFadeTime.css({
      	  "width": "70px",
      	  "height": "30px",
          "font-size": "12px"
    	});
        
         partTrack.css({
      	  "width": "60px",
      	  "height": "25px",
          "font-size": "12px"
    	});
        
        trackLibTxt.css({
      	  "height": "20px",
      	  "font-size": "12px",
      	  "margin-top": "2px",
    	});
        
        bgLibTxt.css({
      	  "height": "20px",
      	  "font-size": "12px",
      	  "margin-top": "2px",
    	});
        
        trackLib.css({
          "height": "170px",
    	});
        
        trackLibList.css({
          "font-size": "14px",
    	});
        
        fxLib.css({
          "height": "170px",
    	});
        
        fxLibList.css({
          "font-size": "14px",
    	});
        
        mixerBox.css({
      	  "height": "170px",
    	});
        
        mixTxt1.css({
      	  "height": "40px",
      	  "font-size": "16px",
      	  "padding-top": "10px"
    	});
        
        volBox1.css({
      	  "height": "40px",
      	  "padding-top": "10px"
    	});
        
        volMixer1.css({
      	  "height": "20px",
      	  "border": "4px outset silver"
    	});
        
        volToggleBox1.css({
      	  "height": "40px",
      	  "padding-top": "10px",
    	});
        
        mixTxt2.css({
      	  "height": "40px",
      	  "font-size": "16px",
      	  "padding-top": "10px"
    	});
        
        volBox2.css({
      	  "height": "40px",
      	  "padding-top": "10px"
    	});
        
        volMixer2.css({
      	  "height": "20px",
      	  "border": "4px outset silver"
    	});
        
        volToggleBox2.css({
      	  "height": "40px",
      	  "padding-top": "10px",
    	});
        
        mixTxt3.css({
      	  "height": "40px",
      	  "font-size": "16px",
      	  "padding-top": "10px"
    	});
        
        volBox3.css({
      	  "height": "40px",
      	  "padding-top": "10px"
    	});
        
        volMixer3.css({
      	  "height": "20px",
      	  "border": "4px outset silver"
    	});
        
        volToggleBox3.css({
      	  "height": "40px",
      	  "padding-top": "10px",
    	});
        
        mixTxt4.css({
      	  "height": "40px",
      	  "font-size": "16px",
      	  "padding-top": "10px"
    	});
        
        volBox4.css({
      	  "height": "40px",
      	  "padding-top": "10px"
    	});
        
        volMixer4.css({
      	  "height": "20px",
      	  "border": "4px outset silver"
    	});
        
        volToggleBox4.css({
      	  "height": "40px",
      	  "padding-top": "10px",
    	});
        
        mixTxt5.css({
      	  "height": "40px",
      	  "font-size": "16px",
      	  "padding-top": "10px"
    	});
        
        volBox5.css({
      	  "height": "40px",
      	  "padding-top": "10px"
    	});
        
        volFxMixer.css({
      	  "height": "20px",
      	  "border": "4px outset silver"
    	});
        
        volToggleBox5.css({
      	  "height": "40px",
      	  "padding-top": "10px",
    	});
        
        mixTxt6.css({
      	  "height": "40px",
      	  "font-size": "16px",
      	  "padding-top": "10px"
    	});
        
        volBox6.css({
      	  "height": "40px",
      	  "padding-top": "10px"
    	});
        
        pitchFxMixer.css({
      	  "height": "20px",
      	  "border": "4px outset silver"
    	});
        
        toolbarArea.css({
      	  "height": "auto",
    	});
        
        trackToolbar.css({
      	  "height": "auto",
          "padding": "4px"
    	});
        
        fxToolbar.css({
      	  "height": "auto",
          "padding": "4px"
    	});
        
        trackToolbar2.css({
      	  "height": "auto",
          "padding": "4px"
    	});
        
        playerNumber.css({
          "width": "80px",
      	  "height": "35px",
      	  "font-size": "14px",
          "border-width": "2px",
      	  "margin-left": "6px"
    	});
        
        remainTracks.css({
      	  "height": "35px",
          "width": "45px",
      	  "font-size": "16px",
      	  "margin-left": "6px",
      	  "border-radius": "6px"
    	});
        
        trackLoadBtn.css({
      	  "width": "130px",
      	  "height": "35px",
      	  "font-size": "16px",
      	  "margin-left": "6px",
      	  "border": "2px outset silver"
    	});
        
        trackName.css({
      	  "width": "120px",
      	  "height": "35px",
      	  "font-size": "16px",
      	  "margin-left": "6px",
      	  "border": "2px outset silver"
    	});
        
        addTrackBtn.css({
      	  "width": "35px",
          "height": "35px",
          "font-size": "16px",
          "margin-left": "6px",
      	  "border": "4px outset silver"
    	});
        
        addTrackMultiBtn.css({
      	  "width": "35px",
          "height": "35px",
          "font-size": "16px",
          "margin-left": "6px",
      	  "border": "4px outset silver"
    	});
        
        trackCountUpBtn.css({
      	  "width": "35px",
          "height": "35px",
          "font-size": "16px",
          "margin-left": "6px",
      	  "border": "4px outset silver"
    	});
        
        trackCountDownBtn.css({
      	  "width": "35px",
          "height": "35px",
          "font-size": "16px",
          "margin-left": "6px",
      	  "border": "4px outset silver"
    	});
        
        trackUpBtn.css({
      	  "width": "35px",
          "height": "35px",
          "font-size": "16px",
          "margin-left": "6px",
      	  "border": "4px outset silver"
    	});
        
        trackDownBtn.css({
      	  "width": "35px",
          "height": "35px",
          "font-size": "16px",
          "margin-left": "6px",
      	  "border": "4px outset silver"
    	});
        
        squishFreq.css({
      	  "width": "80px",
          "height": "35px",
          "font-size": "16px",
          "margin-left": "6px",
      	  "border": "4px outset silver"
    	});
        
        trackListLoadBtn.css({
      	  "width": "160px",
      	  "height": "35px",
      	  "font-size": "16px",
      	  "margin-left": "6px",
      	  "border": "4px outset silver"
    	});
        
        addTrackListBtn.css({
      	  "width": "35px",
      	  "height": "35px",
      	  "font-size": "16px",
      	  "margin-left": "6px",
      	  "border": "4px outset silver"
    	});
        
        trackDelBtn.css({
      	  "width": "35px",
          "height": "35px",
          "font-size": "16px",
          "margin-left": "6px",
      	  "border": "4px outset silver"
    	});
        
        tracklistDelBtn.css({
      	  "width": "35px",
          "height": "35px",
          "font-size": "16px",
          "margin-left": "6px",
      	  "border": "4px outset silver"
    	});
        
        trackSaveTxt.css({
      	  "width": "290px",
      	  "height": "35px",
      	  "font-size": "16px",
      	  "margin-left": "6px",
      	  "border": "4px outset silver"
    	});
        
        trackSaveBtn.css({
      	  "width": "160px",
      	  "height": "35px",
      	  "font-size": "16px",
      	  "margin-left": "6px",
      	  "border": "4px outset silver"
    	});
        
        fxLoadBtn.css({
      	  "width": "160px",
          "height": "35px",
          "font-size": "16px",
          "margin-left": "6px",
      	  "border": "4px outset silver"
    	});
        
        fxFileName.css({
      	  "width": "120px",
      	  "height": "35px",
      	  "font-size": "16px",
      	  "margin-left": "6px",
      	  "border": "4px outset silver"
    	});
        
        fxFileLabel.css({
      	  "width": "120px",
      	  "height": "35px",
      	  "font-size": "16px",
      	  "margin-left": "6px",
      	  "border": "4px outset silver"
    	});
        
        addFxBtn.css({
      	  "width": "35px",
          "height": "35px",
          "font-size": "16px",
          "margin-left": "6px",
      	  "border": "4px outset silver"
    	});
        
        playFxBtn.css({
      	  "width": "35px",
          "height": "35px",
          "font-size": "16px",
          "margin-left": "6px",
      	  "border": "4px outset silver"
    	});
        
        mixToggle.css({
          "width": "150px",
          "height": "35px",
          "font-size": "16px"
        });
        
        bottomMain.css({
          "height": "50px"
        });
      }
    }
    
    setAreaSize();
    
    function saveTracklist() {
	  localStorage.setItem("djtracks", trackLibList.html());
	  setTracklist();
	}

	function setTracklist() {
	  var currentHtml1 = localStorage.getItem("djtracks");
	  var rdCtrl = playListRandomBtn.attr("style");
	  trackLibList.html(currentHtml1);
      remainTracks.val($("#tracklist li").length);
  
	  if (rdCtrl) {
  	    setRandom();
		}
	  }

	  if(!localStorage.getItem("djtracks")) {
      saveTracklist();
    	} else {
      setTracklist();
    }
    
    function saveCrossfadeSettings() {
      localStorage.setItem("crfImg", crossfadeImg.attr("src"));
      localStorage.setItem("crfMode", crossFadeMode.val());
      localStorage.setItem("crfTime", crossFadeTime.val());
      setCrossfadeSettings();
    }
    
    function setCrossfadeSettings() {
      var newCrfImg = localStorage.getItem("crfImg");
      var newCrfMode = localStorage.getItem("crfMode");
      var newCrfTime = localStorage.getItem("crfTime");
      
      crossfadeImg.attr("src", newCrfImg);
      crossFadeMode.val(newCrfMode);
      crossFadeTime.val(newCrfTime);
    }
    
    if (!localStorage.getItem("crfImg") && !localStorage.getItem("crfMode") && !localStorage.getItem("crfTime")) {
      saveCrossfadeSettings();
    } else {
      setCrossfadeSettings();
    }
    
    return element;
  };
}(jQuery));
