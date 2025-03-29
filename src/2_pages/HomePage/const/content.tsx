export const events = [
  {
    id: 1,
    title: "Собираю женское сообщество для общения",
    image: "https://files.inparty.app/storage/user/photos/93168/small_image_picker_C0F65899-7F79-4755-BEDE-2D76738A0164-406-0000006E4DA909C8.jpg",
    categories: ["Сообщества", "Дружба"],
    date: "2025-04-15",
    location: "Москва",
    creator: { name: "Anna", avatar: "https://files.inparty.app/storage/user/photos/93168/avatar.jpg" },
    participants: [
      { id: 101, name: "Fox_fyr", avatar: "https://files.inparty.app/storage/user/photos/5/small_IMG_3672-1713866265024.jpg" },
      { id: 102, name: "Diana_10", avatar: "https://files.inparty.app/storage/user/photos/22860/small_image_picker_A1FE1461-DE48-4B6C-8007-FA0DF3F90B78-1452-000000965276878B-compressed.jpg" },
      { id: 103, name: "EmilyJay", avatar: "https://files.inparty.app/storage/user/photos/56734/small_IMG_20240927_151525_948.jpg" },
    ],
  },
  {
    id: 2,
    title: "Настольные игры в центре города",
    image: "https://files.inparty.app/storage/user/photos/68138/small_IMG_2376-1702214117915.jpg",
    categories: ["Игры", "Развлечения"],
    date: "2025-04-20",
    location: "Санкт-Петербург",
    creator: { name: "Ivan", avatar: "https://files.inparty.app/storage/user/photos/68138/avatar.jpg" },
    participants: [],
  },
  {
    id: 3,
    title: "Фотопрогулка по парку",
    image: "https://files.inparty.app/storage/user/photos/27938/small_IMG-20230112-WA0002-2.jpg",
    categories: ["Прогулки", "Фотография"],
    date: "2025-04-25",
    location: "Казань",
    creator: { name: "Oleg", avatar: "https://files.inparty.app/storage/user/photos/27938/avatar.jpg" },
    participants: [
      { id: 301, name: "Finding_nemo", avatar: "https://files.inparty.app/storage/user/photos/117229/small_image_picker_7C175743-21CC-4CC8-9898-81251053B559-414-00000008277604A6jpg.jpg" },
    ],
  },
  {
    id: 4,
    title: "Кулинарный мастер-класс",
    image: "",
    categories: ["Кулинария", "Обучение"],
    date: "2025-04-30",
    location: "Новосибирск",
    creator: { name: "ChefMaster", avatar: "https://files.inparty.app/storage/user/photos/chef/avatar.jpg" },
    participants: [{ id: 401, name: "ChefMaster", avatar: "" }],
  },
  {
    id: 5,
    title: "",
    image: "https://files.inparty.app/storage/user/photos/76808/small_Tezza-1472-1719671354030.jpg",
    categories: ["Без категории"],
    date: "2025-05-01",
    location: "",
    creator: { name: "Unknown", avatar: "" },
    participants: [{ id: 501, name: "Anonymous", avatar: "https://files.inparty.app/storage/user/photos/52911/small_IMG_4702-1716794387335.jpg" }],
  },
  {
    id: 6,
    title: "Тестовое событие с очень длинным названием, чтобы проверить перенос строк и рендеринг карточки в различных разрешениях",
    image: "https://files.inparty.app/storage/user/photos/3426/small_image_picker_AD58B27B-C019-441F-BB2A-C90D79FE820D-616-0000000AAFB7FA77.jpg",
    categories: ["Тестирование", "Разработка"],
    date: "2025-05-05",
    location: "Тестоград",
    creator: { name: "QA Tester", avatar: "https://files.inparty.app/storage/user/photos/3426/avatar.jpg" },
    participants: [],
  },
  {
    id: 7,
    title: "Выходные в горах",
    image: "https://files.inparty.app/storage/user/photos/52911/small_IMG_4702-1716794387335.jpg",
    categories: ["Путешествия", "Активный отдых"],
    date: "2025-02-30", // Некорректная дата
    location: "Алтай",
    creator: { name: "Traveler", avatar: "https://files.inparty.app/storage/user/photos/52911/avatar.jpg" },
    participants: [{ id: 701, name: "MountainLover", avatar: "https://files.inparty.app/storage/user/photos/90696/small_A0490B73-F3E8-475D-A751-309DF3273286-1712130481189.jpg" }],
  },
  {
    id: 8,
    title: "Марафон программирования",
    image: "https://files.inparty.app/storage/user/photos/30139/small_1000051071.jpg",
    categories: ["IT", "Разработка", "Хакатон"],
    date: "2025-06-10",
    location: "Онлайн",
    creator: { name: "CodeMaster", avatar: "https://files.inparty.app/storage/user/photos/30139/avatar.jpg" },
    participants: Array(100)
      .fill(null)
      .map((_, index) => ({
        id: 800 + index,
        name: `Dev${index + 1}`,
        avatar: `https://api.dicebear.com/7.x/pixel-art/svg?seed=Dev${index + 1}`,
      })),
  },
  {
    id: 9,
    title: "Йога на свежем воздухе",
    image: "https://files.inparty.app/storage/user/photos/76808/small_Tezza-1472-1719671354030.jpg",
    categories: ["Здоровье", "Фитнес"],
    date: "2025-04-18",
    location: "Парк Горького",
    creator: { name: "YogaInstructor", avatar: "https://files.inparty.app/storage/user/photos/yoga/avatar.jpg" },
    participants: [{ id: 901, name: "YogaFan", avatar: "https://files.inparty.app/storage/user/photos/5/small_IMG_3672-1713866265024.jpg" }],
  },
  {
    id: 10,
    title: "Киноночь: ретроспектива Тарантино",
    image: "https://files.inparty.app/storage/user/photos/117229/small_image_picker_7C175743-21CC-4CC8-9898-81251053B559-414-00000008277604A6jpg.jpg",
    categories: ["Кино", "Клуб"],
    date: "2025-07-01",
    location: "Кинотеатр Синема XXI",
    creator: { name: "MovieBuff", avatar: "https://files.inparty.app/storage/user/photos/117229/avatar.jpg" },
    participants: [
      { id: 1001, name: "MovieLover", avatar: "https://files.inparty.app/storage/user/photos/90696/small_A0490B73-F3E8-475D-A751-309DF3273286-1712130481189.jpg" },
      { id: 1002, name: "CinemaFan", avatar: "https://files.inparty.app/storage/user/photos/30139/small_1000051071.jpg" },
    ],
  },
];
