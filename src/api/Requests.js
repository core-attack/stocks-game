export default {
  
  getAll(){
    let getCards = function (){
      var array = [
        { image: "/img/front.png", imageOpen: "/img/back.png", imageChild: "what3.jpeg", type: 1, amount: 100},
        { image: "/img/front.png", imageOpen: "/img/back.png", imageChild: "what4.jpg", type: 1, amount: 200},
        { image: "/img/front.png", imageOpen: "/img/back.png", title: "Its figma time!", type: 3, amount: 300},
        { image: "/img/front.png", imageOpen: "/img/back.png", title: "Its figma time!", type: 3, amount: 400}
      ];
      let i = 1;
      array.map(item => item.id = i++);
    
      return { id: 1, title: "Малярные работы", items: array };
    };
    
    let getCards2 = function (){
      var array = [
        { image: "/img/front.png", imageOpen: "/img/back.png", text: "Какое слово здесь лишнее?", options: ["Гипс", "Цемент", "Бидон", "Известь"], type: 0, amount: 100},
        { image: "/img/front.png", imageOpen: "/img/back.png", text: "Как называется выравнивающий слой, основа покрытия пола?", options: ["Скрутка", "Сцепка", "Скрепка", "Стяжка"], type: 0, amount: 200},
        { image: "/img/front.png", imageOpen: "/img/back.png", text: "Чем уплотняют бетонную сместь?", options: ["Дрыном", "Лопатой", "Вибратором", "Катком"], type: 0, amount: 300},
        { image: "/img/front.png", imageOpen: "/img/back.png", text: "Что делать, если пошла трещина по стене?", options: ["Паниковать", "Не паниковать", "Изолента", "Звонить в полицию"], type: 0, amount: 400}
      ];
      let i = 1;
      array.map(item => item.id = i++);
    
      return { id: 2, title: "Черновая отделка", items: array };
    }
    
    let getCards3 = function (){
      var array = [
        { image: "/img/front.png", imageOpen: "/img/back.png", text: "Выбери ещё одного человека из команды, если отгадает - вы победили", type: 2, amount: 100}, //кабельный наконечник
        { image: "/img/front.png", imageOpen: "/img/back.png", text: "Выбери ещё одного человека из команды, если отгадает - вы победили", type: 2, amount: 200}, //гильза
        { image: "/img/front.png", imageOpen: "/img/back.png", text: "Выбери ещё одного человека из команды, если отгадает - вы победили", type: 2, amount: 300}, //обжимка
        { image: "/img/front.png", imageOpen: "/img/back.png", text: "Выбери ещё одного человека из команды, если отгадает - вы победили", type: 2, amount: 400} //клемник
      ];
      let i = 1;
      array.map(item => item.id = i++);
    
      return { id: 3, title: "Электрика", items: array };
    }
    
    let getCards4 = function (){
      var array = [
        { image: "/img/front.png", imageOpen: "/img/back.png", imageChild: "what1.png", type: 1, amount: 100},
        { image: "/img/front.png", imageOpen: "/img/back.png", text: "Чтобы гвоздь легче забить в дерево, нужно:", options: ["Натереть мылом", "Нагреть", "Потереть шкуркой", "Ударить молотком посильнее"], type: 0, amount: 200},
        { image: "/img/front.png", imageOpen: "/img/back.png", imageChild: "what2.jpg", type: 1, amount: 300},
        { image: "/img/front.png", imageOpen: "/img/back.png", text: "В чём отличие болта, шурупа, винта друг от друга?", options: [], type: 0, amount: 400}
      ];
      let i = 1;
      array.map(item => item.id = i++);
    
      return { id: 4, title: "Крепеж", items: array };
    }
    
    let getCards5 = function (){
      var array = [
        { image: "/img/front.png", imageOpen: "/img/back.png", text: "Какого ремонтно-строительного термина не существует?", options: ["Жидкие обои", "Мокрый фасад", "Тёплый пол", "Перфорированная крыша"], type: 0, amount: 100},
        { image: "/img/front.png", imageOpen: "/img/back.png", text: "Шпатлюют шпателем, а шпаклюют?", options: [], type: 0, amount: 200},
        { image: "/img/front.png", imageOpen: "/img/back.png", text: "Как называется должность руководителя среднего звена на стройке?", options: ["Рабовладелец", "Помещик", "Прораб", "Барин"], type: 0, amount: 300},
        { image: "/img/front.png", imageOpen: "/img/back.png", text: "Как называют керамическую плитку, напоминающую боковую сторону кирпича?", options: ["Хрюшка", "Поросёнок", "Кабанчик", "Свинюшонок"], type: 0, amount: 400}
      ];
      let i = 1;
      array.map(item => item.id = i++);
    
      return { id: 5, title: "2 секунды на ответ", items: array };
    }
    
    let getCards6 = function (){
      var array = [
        { image: "/img/front.png", imageOpen: "/img/back.png", text: "Над какой цифрой на клавиатуре компьютера расположен значок «крыша»?", options: ["5", "6", "7", "8"], type: 0, amount: 100},
        { image: "/img/front.png", imageOpen: "/img/back.png", text: "Как называется деревянное сооружение, собранное из обработанных брёвен?", options: ["Спил", "Скол", "Срез", "Сруб"], type: 0, amount: 200},
        { image: "/img/front.png", imageOpen: "/img/back.png", text: "Как называется гребень крыши?", options: ["Конёк", "Телок", "Барашек", "Щенок"], type: 0, amount: 300},
        { image: "/img/front.png", imageOpen: "/img/back.png", text: "Как называется один из видов подъёмных кранов? ", options: ["Овечий", "Бычий", "Козловой", "Свиной"], type: 0, amount: 400}
      ];
      let i = 1;
      array.map(item => item.id = i++);
    
      return { id: 6, title: "Стройка", items: array };
    }
    
    let getCards7 = function (){
      var array = [
        { image: "/img/front.png", imageOpen: "/img/back.png", text: "Как называются конструкции, используемые в строительстве мостов?", options: ["Ферма", "Ранчо", "Фазенда", "Хутор"], type: 0, amount: 100},
        { image: "/img/front.png", imageOpen: "/img/back.png", text: "Как называются брусья, служащие основой крыши?", options: ["Сваи", "Колонны", "Стропила", "Перила"], type: 0, amount: 200},
        { image: "/img/front.png", imageOpen: "/img/back.png", text: "Как называется верхний брус дверного проёма?", options: ["Сутолока", "Притолока", "Поволока", "Вотолока"], type: 0, amount: 300},
        { image: "/img/front.png", imageOpen: "/img/back.png", text: "Как назывались окна, которые существовали В России с XIV века?", options: ["Красные", "Синие", "Зелёные", "Черные"], type: 0, amount: 400}
      ];
      let i = 1;
      array.map(item => item.id = i++);
    
      return { id: 7, title: "Определения", items: array };
    }
    
    
    return [getCards(), getCards2(), getCards3(), getCards4(), getCards5(), getCards6(), getCards7()];
  }
}
