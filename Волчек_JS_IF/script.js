//Лаба IF
/*.otvet.value="Год крысы";
        var im = document.createElement('img');
        im.setAttribute('src', 'https://3.404content.com/1/D5/4C/454408817946920017/fullsize.jpg');
        document.body.appendChild(im);
         break;
     }
     case 2001:
     {
        var im = document.createElement('img');
        im.setAttribute('src', 'https://mtdata.ru/u15/photo86E5/20565325664-0/original.jpg');
        document.body.appendChild(im);
        document.form3.otvet.value="Год Быка";
         break;
     }
     case 2002:
     {
        var im = document.createElement('img');
        im.setAttribute('src', 'https://cs-msk-fd-4.ykt2.ru/media/upload/photo/2016/01/29/normal/6704305.jpeg');
        document.body.appendChild(im);
        document.form3.otvet.value="Год Тигра";
         break;
     }
     case 2003:
     {
        var im = document.createElement('img');
        im.setAttribute('src', 'https://avatars.mds.yandex.net/i?id=38f8b314a1916ba1afc75590cc3aed0d-5087276-images-thumbs&n=13');
        document.body.appendChild(im);
        document.form3.otvet.value="Год Кота";
         break;
     }
     case 2004:
     {
        
        var im = document.createElement('div');
        im.setAttribute('src', 'https://i.playground.ru/p/Nj5LgaGF1IrX7FSGdrAlqw.jpeg');
        document.body.appendChild(im);
        document.form3.otvet.value="Год Дракона";
         break;
     }
     case 2005:
     {
        document.form3.otvet.value="Год Змеи";
         break;
     }
     case 2006:
     {
        document.form3.otvet.value="Год Лошади";
         break;
     }
     case 2007:
     {
        document.form3.otvet.value="Год Козы";
         break;
     }
     case 2008:
     {
        document.form3.otvet.value="Год Обезъяна";
         break;
     }
     case 2009:
     {
        document.form3.otvet.value="Год Петух";
         break;
     }
     case 2010:
     {
        document.form3.otvet.value="Год Собаки";
         break;
     }
     case 2011:
     {
        document.form3.otvet.value="Год Свиньи";
         break;
     }
     case 2012:
         {
            document.form3.otvet.value="Год крысы";
             break;
         }
         case 2013:
         {
            document.form3.otvet.value="Год Быка";
             break;
         }
         case 2014:
         {
            document.form3.otvet.value="Год Тигра";
             break;
         }
         case 2015:
         {
            document.form3.otvet.value="Год Кота";
             break;
         }
         case 2016:
         {
            document.form3.otvet.value="Год Дракона";
             break;
         }
         case 2017:
         {
            document.form3.otvet.value="Год Змеи";
             break;
         }
         case 2018:
         {
            document.form3.otvet.value="Год Лошади";
             break;
         }
         case 2019:
         {
            document.form3.otvet.value="Год Козы";
             break;
         }
         case 2020:
         {
            document.form3.otvet.value="Год Обезъяна";
             break;
         }
         case 2021:
         {
            document.form3.otvet.value="Год Петух";
             break;
         }
         case 2022:
         {
            document.form3.otvet.value="Год Собаки";
             break;
         }
         case 2023:
         {
            document.form3.otvet.value="Год Свиньи";
             break;
         } 
      
     default: document.form3.otvet.value="Число введено не в нужном диапазоне";
 }
 }
 function Zadanie2(){
    var first=1*(document.form2.first_people.value);
    var second=1*(document.form2.second_people.value);
    var third=1*(document.form2.third_people.value);
    if(first<second)
    {
        if(first<third)
        {
            document.form2.otvet.value="Первый";
        }
        else{
            document.form2.otvet.value="Третий";
        }
    }else{
        if(second<third)
        {
            document.form2.otvet.value="Второй";
        }else{
            document.form2.otvet.value="Третий";
        }
    }
}
function Zadanie1(){
        var first=1*(document.form1.sazh.value);
        var second=1*(document.form1.fut.value);
        first=first*14.28;
        if(first>second)
        {
            document.form1.otvet.value="Футы";
        }
        else{
            document.form1.otvet.value="саженцы";
        }

}*/
function Zadanie1(){
    let w = this.closest('.form'), br = w.nextElementSibling;
  
  if(br.nodeType === 1 && br.nodeName === 'text')
    br.remove();
  
  w.remove();
}