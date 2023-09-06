export type ProjectDataType = {
  id: string;
  image: string[];
  en: {
    id: string;
    title: string;
    description: string;
    languages: string[];
    stacks: string[];
    links: {
      github: string;
      codeSandBox: string;
      github1s: string;
      online: string;
    };
  };
  fa: {
    id: string;
    title: string;
    description: string;
    languages: string[];
    stacks: string[];
    links: {
      github: string;
      codeSandBox: string;
      github1s: string;
      online: string;
    };
  };
};

export type ProjectsDataType = ProjectDataType[];

export const projectsData = [
  {
    id: "1",
    image: [
      "https://user-images.githubusercontent.com/118107025/261360543-726eaead-185b-4cad-921f-84e2ac89fbfe.png",
      "https://user-images.githubusercontent.com/118107025/261360664-c0adace7-4081-42b8-8692-aec7710f6676.png",
      "https://user-images.githubusercontent.com/118107025/261361799-c2a71f8c-394b-440a-ad34-95d6ca600550.png",
      "https://user-images.githubusercontent.com/118107025/261362086-d9bc3d7e-0230-481f-b0e2-9f6181cebcb4.png",
    ],
    en: {
      id: "1",
      title: "Admin Panel",
      description:
        "An admin panel with Ant Design styling is provided for viewing, editing, and deleting members, products, and blogs. This panel uses Supabase for authentication and data storage. Highcharts is used for viewing reports, and responsive and dark mode are also supported. Lazy loading is used for image display.",
      languages: ["javascript", "typescript"],
      stacks: ["Next.js", "Supabase", "Auth", "Antd"],
      links: {
        github: "https://github.com/aliseyedi01/Admin-Panel",
        codeSandBox: "https://githubbox.com/aliseyedi01/Admin-Panel",
        github1s: "https://github1s.com/aliseyedi01/Admin-Panel",
        online: "https://aliseyedi01.github.io/Admin-Panel/",
      },
    },
    fa: {
      id: "1",
      title: "پنل مدیریت",
      description:
        "پنل ادمین با طراحی انت دیزاین برای مشاهده، ویرایش و حذف اعضا، محصولات و بلاگ ارائه شده است. این پنل از سوپابیس برای احراز هویت و ذخیره اطلاعات استفاده می‌کند. برای مشاهده گزارش‌ها از کتابخانه‌ Highchart استفاده شده است و حالت ریسپانسیو و دارک مود و بارگیری تنبل برای مشاهده عکس ها نیز در نظر گرفته شده است .",
      languages: ["جاوااسکریپت", "تایپ‌اسکریپت"],
      stacks: ["Next.js", "Supabase", "Auth", "Antd"],
      links: {
        github: "https://github.com/aliseyedi01/Admin-Panel",
        codeSandBox: "https://githubbox.com/aliseyedi01/Admin-Panel",
        github1s: "https://github1s.com/aliseyedi01/Admin-Panel",
        online: "https://aliseyedi01.github.io/Admin-Panel/",
      },
    },
  },
  {
    id: "2",
    image: [
      "https://user-images.githubusercontent.com/118107025/233779746-6a7c2b7b-cee4-4f17-a250-4e1ca27550b7.png",
      "https://user-images.githubusercontent.com/118107025/233779819-d083604a-f9fe-4772-9a2d-dd30497444f5.png",
      "https://user-images.githubusercontent.com/118107025/233779908-377c7935-2a05-4fca-8aad-260d1281c71a.png",
      "https://user-images.githubusercontent.com/118107025/233779963-a06cab86-d27e-4a22-9afb-6cf364d1fb3a.png",
    ],
    en: {
      id: "2",
      title: "ToDo List App",
      description:
        "A task management app with a modern and user-friendly visual design is provided for creating, editing, deleting, and categorizing tasks into completed, incomplete, in progress, and important. This app uses Firebase for authentication, and it also supports filtering and viewing tasks by date, priority, and other criteria. Tasks are stored in a local database, and responsive and dark mode are also supported. If an important task is not yet completed, an alarm will be triggered for the user.",
      languages: ["JavaScript", "TypeScript"],
      stacks: ["React", "Firebase", "Tailwind", "Auth"],
      links: {
        github: "https://github.com/aliseyedi01/ToDo-List-App",
        codeSandBox: "https://githubbox.com/aliseyedi01/ToDo-List-App",
        github1s: "https://github1s.com/aliseyedi01/ToDo-List-App",
        online: "https://aliseyedi01.github.io/ToDo-List-App/",
      },
    },
    fa: {
      id: "2",
      title: "اپلیکیشن لیست وظایف",
      description:
        "اپلیکیشن مدیریت وظایف با طراحی بصری مدرن و کاربرپسند، برای ایجاد، ویرایش، حذف و دسته‌بندی وظایف به انجام شده، انجام نشده، در حال انجام و مهم ارائه شده است. این اپلیکیشن از Firebase برای احراز هویت استفاده می‌کند و امکان فیلترکردن و مشاهده وظایف بر اساس تاریخ، اولویت و سایر معیارها نیز وجود دارد. ذخیره وظایف در لوکال استوریج انجام می‌شود و حالت ریسپانسیو و دارک مود نیز برای آن در نظر گرفته شده است. در صورتی که کاری مهم باشد و هنوز انجام نشده باشد، آلارم برای کاربر فعال خواهد شد.",
      languages: ["جاوااسکریپت", "تایپ‌اسکریپت"],
      stacks: ["React", "Firebase", "Tailwind", "Auth"],
      links: {
        github: "https://github.com/aliseyedi01/ToDo-List-App",
        codeSandBox: "https://githubbox.com/aliseyedi01/ToDo-List-App",
        github1s: "https://github1s.com/aliseyedi01/ToDo-List-App",
        online: "https://aliseyedi01.github.io/ToDo-List-App/",
      },
    },
  },
  {
    id: "3",
    image: [
      "https://user-images.githubusercontent.com/118107025/244468357-548cb364-83c6-48cc-a194-375ff67499e7.png",
      "https://user-images.githubusercontent.com/118107025/244469720-63881e27-65a6-42f4-a9b2-9fd26c73019e.png",
      "https://user-images.githubusercontent.com/118107025/244469999-7519ac7e-d6c6-41ef-89c6-93c1ecd0362e.png",
      "https://user-images.githubusercontent.com/118107025/244470062-02a8b6ba-2c6f-454a-9fe8-9f4ef8fddd45.png",
    ],
    en: {
      id: "3",
      title: "Movie App",
      description:
        "A movie app that provides information about each movie in a separate page. The app also has a paginated home page and an infinite scroll search page. Movies are also categorized by genre, with the ability to search across all movies. Users can save their favorite movies to a dedicated page. The app is designed using Material UI and Tailwind, and it also includes responsive and dark mode for a better user experience.",
      languages: ["JavaScript", "TypeScript"],
      stacks: ["Next.js", "Rest APi", "Tailwind", "MUI"],
      links: {
        github: "https://github.com/aliseyedi01/Movie-App",
        codeSandBox: "https://githubbox.com/aliseyedi01/Movie-App",
        github1s: "https://github1s.com/aliseyedi01/Movie-App",
        online: "https://movie-ewnghnf97-aliseyedi01.vercel.app/",
      },
    },
    fa: {
      id: "3",
      title: "اپلیکیشن فیلم",
      description:
        "اپلیکیشن برای اگاهی از اطلاعات فیلم ها که برای هر کدام صفحه ای مجزا ایجاد شده همچین  در صفحه اصلی فیلم صفحه بندی شده و در صفحه جستجو از قابلیت اسکرول بی نهایت برای مشاهده فیلم ها استفاده شده است همچین  فیلم ها بر اساس ژانرهایشان تقسیم بندی شده که امکان جستجو از بین کل فیلم ها امکان پذیر است . با نشانه دار کردن فیلم های مورد علاقه  در صفحه مربوطه به خودش میتوان به آنها دسترسی داشت . برای طراحی از  متریال یوآی و تیلویند استفاده شده و همچنین از ریسپانسیو و دارک مود برای تجربه بهتر کاربری در نظر گرفته شده است.",
      languages: ["جاوااسکریپت", "تایپ‌اسکریپت"],
      stacks: ["Next.js", "Rest Api", "Tailwind", "MUI"],
      links: {
        github: "https://github.com/aliseyedi01/Movie-App",
        codeSandBox: "https://githubbox.com/aliseyedi01/Movie-App",
        github1s: "https://github1s.com/aliseyedi01/Movie-App",
        online: "https://movie-ewnghnf97-aliseyedi01.vercel.app/",
      },
    },
  },
  {
    id: "4",
    image: [
      "https://user-images.githubusercontent.com/118107025/230769335-06665f4e-7194-492a-bce2-84a576a76d9a.png",
      "https://user-images.githubusercontent.com/118107025/230769256-1be45913-4243-46ad-b04a-51169aaa909d.png",
      "https://user-images.githubusercontent.com/118107025/230769282-742bd826-2c8c-4d49-ac65-4965e1b3e4ef.png",
      "https://user-images.githubusercontent.com/118107025/230769300-fc4c4310-5dba-48e4-8a93-2a04956051f8.png",
    ],
    en: {
      id: "4",
      title: "Music App",
      description:
        "A music app that is categorized by genre, with the ability to search across all songs. Users can also view a dedicated page with information about top artists and their music, as well as access lyrics and related music. The app also includes responsive mode, dark mode, and lazy loading for a better user experience.",
      languages: ["JavaScript"],
      stacks: ["React", "Tailwind", "ReduxToolkit", "RTK Query"],
      links: {
        github: "https://github.com/aliseyedi01/Music-App-React",
        codeSandBox: "https://githubbox.com/aliseyedi01/Music-App-React",
        github1s: "https://github1s.com/aliseyedi01/Music-App-React",
        online: "https://aliseyedi01.github.io/Music-App-React/",
      },
    },
    fa: {
      id: "4",
      title: "اپلیکیشن موزیک",
      description:
        "اپلیکیشن برای گوش دادن به اهنگ ها ، که بر اساس سبک دسته بندی شده و همچین قابلیت جستجو از بین تمامی اهنگ ها امکان پذیر است ، در صفحه ای مجزا میتوان از برترین خواننده ها و موزیک هایشان آگاهی پیدا کرد و همچنین به متن اهنگ ها و موزیک ها مرتبط با آن اهنگ دسترسی داشت ، برای تجربه بهتر کاربری  ، حالت ریسپانسیو ،  دارک مورد و بارگیری تنبل در نظر گرفته شده است .",
      languages: ["جاوااسکریپت"],
      stacks: ["React", "Tailwind", "Redux", "RTK Query"],
      links: {
        github: "https://github.com/aliseyedi01/Music-App-React",
        codeSandBox: "https://githubbox.com/aliseyedi01/Music-App-React",
        github1s: "https://github1s.com/aliseyedi01/Music-App-React",
        online: "https://aliseyedi01.github.io/Music-App-React/",
      },
    },
  },
  {
    id: "5",
    image: [
      "https://user-images.githubusercontent.com/118107025/246163823-82dd186d-4ae7-4ad5-8745-7a8ba2accd19.png",
      "https://user-images.githubusercontent.com/118107025/246164859-0ddaaf1b-7e32-473c-a6ec-ef569f7af5a6.png",
    ],
    en: {
      id: "5",
      title: "Video Player",
      description:
        "A user-friendly video player is created with JavaScript that allows you to preview a screenshot of that time by hovering over the video progress bar. You can also take a screenshot at any point in the video and save it to your clipboard or device. This video player also supports features such as subtitles and video speed change, and it uses keyboard shortcuts, responsive mode, and dark mode for a better user experience.",
      languages: ["JavaScript"],
      stacks: ["Tailwind", "Subtitle", "DarkMode", "Thumbnail"],
      links: {
        github: "https://github.com/aliseyedi01/Music-App-React",
        codeSandBox: "https://githubbox.com/aliseyedi01/Music-App-React",
        github1s: "https://github1s.com/aliseyedi01/Music-App-React",
        online: "https://aliseyedi01.github.io/Music-App-React/",
      },
    },
    fa: {
      id: "5",
      title: "پخش ویدیو",
      description:
        "ویدیو پلیر کاربری با جاوا اسکریپت ایجاد شده که به شما این امکان را می‌دهد که با هاور کردن روی نوار پیشرفت ویدیو، عکس پیشنمایش از آن زمان را مشاهده کنید. همچنین، شما می‌توانید در هر نقطه از ویدیو عکس بگیرید و آن را در کلیپ بورد یا دستگاه خود ذخیره کنید. این ویدیو پلیر همچنین از ویژگی‌هایی مانند قابلیت زیرنویس و تغییر سرعت ویدیو پشتیبانی می‌کند و برای تجربه بهتر کاربری از کلیدهای ترکیبی، حالت ریسپانسیو و دارک مود نیز بهره می‌برد.",
      languages: ["جاوااسکریپت"],
      stacks: ["Tailwind", "Subtitle", "DarkMode", "Thumbnail"],
      links: {
        github: "https://github.com/aliseyedi01/Music-App-React",
        codeSandBox: "https://githubbox.com/aliseyedi01/Music-App-React",
        github1s: "https://github1s.com/aliseyedi01/Music-App-React",
        online: "https://aliseyedi01.github.io/Music-App-React/",
      },
    },
  },
  {
    id: "6",
    image: [
      "https://user-images.githubusercontent.com/118107025/250600375-7e753c4e-6802-4553-a1a9-bf9d6a7fb1de.png",
      "https://user-images.githubusercontent.com/118107025/250600601-50cba93c-1379-4f6a-9819-e093f085998d.png",
      "https://user-images.githubusercontent.com/118107025/250600830-3c6a09c0-f40b-4430-b525-371768b6639c.png",
      "https://user-images.githubusercontent.com/118107025/250600979-17b54baf-5e58-4bae-89ad-701dfd5398f6.png",
    ],
    en: {
      id: "6",
      title: "Weather App",
      description:
        "A  JavaScript weather app provides current weather conditions and a seven-day forecast. Each section of the app changes visually to match the weather.In addition to weather data, a photo of the city is also displayed. For a better user experience, the app has a responsive mode and dark and light themes that change automatically based on the time of day",
      languages: ["JavaScript"],
      stacks: ["Tailwind", "Rest Api", "Responsive", "Forecast"],
      links: {
        github: "https://github.com/aliseyedi01/weather-app",
        codeSandBox: "https://githubbox.com/aliseyedi01/weather-app",
        github1s: "https://github1s.com/aliseyedi01/weather-app",
        online: "https://aliseyedi01.github.io/weather-app/",
      },
    },
    fa: {
      id: "6",
      title: "اپلیکیشن پیش‌بینی هوا",
      description:
        "یک اپلیکیشن هواشناسی ساده با جاوا اسکریپت ایجاد شده است که وضعیت آب و هوای امروز و پیش بینی هفت روزه را ارائه می دهد. هر بخش از اپلیکیشن بر اساس اطلاعات آب و هوایی به صورت بصری تغییر می کند. علاوه بر اطلاعات آب و هوایی، یک تصویر از شهر مورد نظر نیز نمایش داده می شود. برای تجربه بهتر کاربری، حالت واکنشگرا و تم تاریک ، روشن در نظر گرفته شده است که به طور خودکار بر اساس زمان روز تغییر می کند.",
      languages: ["جاوااسکریپت"],
      stacks: ["Tailwind", "Rest Api", "Responsive", "Forecast"],
      links: {
        github: "https://github.com/aliseyedi01/weather-app",
        codeSandBox: "https://githubbox.com/aliseyedi01/weather-app",
        github1s: "https://github1s.com/aliseyedi01/weather-app",
        online: "https://aliseyedi01.github.io/weather-app/",
      },
    },
  },
];
