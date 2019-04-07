adWidth = 150;//廣告寬度
  nowX = 0;//目前位置(left)
  nowY = 100;//目前位置(top)
  fad_style = document.getElementById('ad_float').style;

  function fadIni()
  {
      innerWidth = document.body.clientWidth;
      innerHeight = document.body.clientHeight;
  
      edge = (innerWidth-1000)/2;
  
      if( edge > adWidth )
      {
          posX = edge + 1000;
      }
      else
      {
          posX = innerWidth-adWidth;
      }
  
      posY = 100;
  }
  function fadRefresh()
  {
      offsetX = posX + document.body.scrollLeft - nowX;
      offsetY = posY + document.body.scrollTop - nowY;
      nowX += offsetX / 5;
      nowY += offsetY / 5;
      fad_style.left = nowX;
      fad_style.top = nowY;
  
      floatID = setTimeout('fadRefresh()', 20 );//Refresh時間
  }
  
  function fadStart()
  {
      fadIni();
      window.onresize=fadIni;
      fadRefresh();
  }
  fadStart();