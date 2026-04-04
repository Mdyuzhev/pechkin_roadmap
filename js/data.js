// ── FEATURES ─────────────────────────────────────────────────────────────
export const featureGroups = [
  {
    label: 'Генерация тестов',
    items: [
      { name: 'OpenAPI Parser', desc: 'Разбор спецификаций OpenAPI 3.x и Swagger 2.0 в форматах JSON и YAML' },
      { name: 'Schema-Aware Assertions', desc: 'Автовыбор проверки по типу поля, формату (uuid, email, date-time), enum-значениям и числовым ограничениям' },
      { name: 'Позитивные тесты', desc: 'Генерация happy-path тестов с корректными данными запроса для каждого эндпоинта' },
      { name: 'Негативные тесты', desc: 'Автогенерация на нарушение ограничений: enum, min/max, minLength/maxLength, неверный тип, 401/404' },
      { name: 'Вывод в pytest', desc: 'Python-тесты с requests, поддержка функций и классов' },
      { name: 'Вывод в REST Assured', desc: 'Java-тесты с JUnit 5 и Hamcrest-матчерами' },
      { name: 'Вывод в Postman', desc: 'Postman Collection v2.1 с pm.test() скриптами и переменными окружения' },
      { name: 'Выборочная генерация', desc: 'Выбор эндпоинтов через дерево с чекбоксами и быстрый выбор всех сразу' },
      { name: 'Загрузка по URL', desc: 'Загрузка спека по ссылке с авторизацией и авто-обнаружением пути (Swagger UI, /v3/api-docs)' },
      { name: 'ZIP-архив', desc: 'Автоматическая упаковка всех сгенерированных файлов в ZIP' },
      { name: 'Производительность', desc: '9 000 тестов в секунду — генерация большой спецификации мгновенно' },
    ]
  },
  {
    label: 'HTTP Клиент',
    items: [
      { name: 'Отправка запросов', desc: 'Полный HTTP-клиент: GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS' },
      { name: 'Параметры запроса', desc: 'Редактирование path params, query params, заголовков и тела в табличном виде' },
      { name: 'Просмотр ответа', desc: 'Pretty (JSON с подсветкой), Raw, Headers — с временем и размером ответа' },
      { name: 'Pre-request скрипты', desc: 'JavaScript-код до отправки запроса — для подготовки данных и токенов' },
      { name: 'Test-скрипты', desc: 'JavaScript после ответа: test(name, cond) и полный pm.test / pm.expect API' },
      { name: 'QuickJS движок', desc: 'Встроенный JS-движок в Desktop — без Python и Node.js' },
    ]
  },
  {
    label: 'Коллекции и переменные',
    items: [
      { name: 'Коллекции запросов', desc: 'Создание, редактирование и организация сохранённых HTTP-запросов' },
      { name: 'Переменные коллекции', desc: '{{baseUrl}}, {{token}} и любые другие с областью видимости коллекции' },
      { name: 'Глобальные переменные', desc: 'Переменные доступные одновременно во всех коллекциях' },
      { name: 'JSONPath-извлечение', desc: 'Извлечение $.data.id из ответа и сохранение в переменные для цепочек запросов' },
      { name: 'Библиотека сниппетов', desc: 'Готовые JS-сниппеты для типовых проверок — вставка одним кликом' },
      { name: 'Экспорт коллекций', desc: 'Конвертация коллекции в готовый pytest или REST Assured файл' },
    ]
  },
  {
    label: 'Collection Runner',
    items: [
      { name: 'Последовательный запуск', desc: 'Выполнение всех запросов коллекции по порядку в автоматическом режиме' },
      { name: 'Прогресс и результаты', desc: 'Прогресс-бар и таблица: метод, статус, время, pass/fail по каждому запросу' },
      { name: 'Передача переменных', desc: 'Значения из JSONPath в одном запросе доступны в следующих — цепочки' },
    ]
  },
  {
    label: 'EVA — Анализ качества тестов',
    items: [
      { name: 'Oracle Depth L0–L6', desc: 'Шкала глубины проверок: от «нет assertions» (L0) до «бизнес-логика» (L6)' },
      { name: 'Грейд качества S–F', desc: 'Итоговая оценка набора тестов: S (90+), A, B, C, D, F' },
      { name: 'Анализ файла / папки', desc: 'Разбор .py или .java файла или целой папки с агрегированным результатом' },
      { name: 'Детектирование anti-patterns', desc: 'Thread.sleep, пустые catch-блоки, захардкоженные credentials, copy-paste тесты' },
      { name: 'Рекомендации', desc: 'Конкретные советы по улучшению assertions на основе найденных проблем' },
      { name: 'Статический анализ', desc: 'Анализ без запуска тестов — только по исходному коду' },
    ]
  },
]

// ── COMPARE ───────────────────────────────────────────────────────────────
export const compareRows = [
  { key: 'gen-openapi',       label: 'Генерация тестов из OpenAPI',    pe4: { type:'yes', text:'Ключевая функция' },               post: { type:'par', text:'Базовая, без assertions' }, pe4only: true },
  { key: 'schema-assertions', label: 'Schema-aware assertions',        pe4: { type:'yes', text:'Тип, формат, enum, constraints' }, post: { type:'no' }, pe4only: true },
  { key: 'negative-tests',    label: 'Негативные тесты (авто)',        pe4: { type:'yes', text:'Из schema constraints' },          post: { type:'no' }, pe4only: true },
  { key: 'pytest',            label: 'Вывод pytest (Python)',           pe4: { type:'yes' },                                       post: { type:'no' }, pe4only: true },
  { key: 'rest-assured',      label: 'Вывод REST Assured (Java)',       pe4: { type:'yes' },                                       post: { type:'no' }, pe4only: true },
  { key: 'postman-collection',label: 'Вывод Postman Collection',       pe4: { type:'yes' },                                       post: { type:'yes' } },
  { key: 'eva',               label: 'EVA / анализ качества тестов',   pe4: { type:'yes', text:'Oracle Depth L0–L6' },            post: { type:'no' }, pe4only: true },
  { key: 'ide',               label: 'Встроен в IDE',                  pe4: { type:'yes', text:'VS Code + IntelliJ' },            post: { type:'no' }, pe4only: true },
  { key: 'http-client',       label: 'HTTP клиент',                    pe4: { type:'yes' },                                       post: { type:'yes' } },
  { key: 'collections',       label: 'Коллекции запросов',             pe4: { type:'yes' },                                       post: { type:'yes' } },
  { key: 'variables',         label: 'Переменные окружения',           pe4: { type:'yes' },                                       post: { type:'yes' } },
  { key: 'scripts',           label: 'Pre-request / Test скрипты',     pe4: { type:'yes' },                                       post: { type:'yes' } },
  { key: 'runner',            label: 'Collection Runner',              pe4: { type:'yes' },                                       post: { type:'yes' } },
  { key: 'jsonpath',          label: 'JSONPath извлечение',            pe4: { type:'yes' },                                       post: { type:'yes' } },
  { key: 'swagger-detect',    label: 'Swagger UI авто-обнаружение',    pe4: { type:'yes' },                                       post: { type:'par', text:'Ручной импорт' }, pe4only: true },
  { key: 'zip',               label: 'ZIP-экспорт тестов',             pe4: { type:'yes' },                                       post: { type:'no' }, pe4only: true },
  { key: 'offline',           label: 'Работа без интернета',           pe4: { type:'yes', text:'Полностью offline' },             post: { type:'par', text:'Требует аккаунт' }, pe4only: true },
  { key: 'free',              label: 'Бесплатно',                      pe4: { type:'yes' },                                       post: { type:'par', text:'Freemium' }, pe4only: true },
  { key: 'teamwork',          label: 'Командная работа / Cloud sync',  pe4: { type:'soon' },                                      post: { type:'yes' } },
  { key: 'mock',              label: 'Mock-серверы',                   pe4: { type:'soon' },                                      post: { type:'yes' } },
  { key: 'desktop',           label: 'Desktop-приложение',             pe4: { type:'yes', text:'Windows' },                       post: { type:'yes', text:'Win/Mac/Linux' } },
  { key: 'mac-linux',         label: 'Mac / Linux',                    pe4: { type:'mixed', yes:'Extension + Plugin', soon:'Desktop' }, post: { type:'yes' } },
]

// ── ROADMAP ───────────────────────────────────────────────────────────────
export const roadmapItems = [
  { status:'on', statusLabel:'В работе',     cat:'Отчётность',      title:'Allure-подобный отчёт о тестировании',  desc:'HTML-отчёт по результатам Collection Runner: сводная статистика, детализация по каждому запросу, тренды по времени, экспорт в PDF. Совместимость с Allure TestOps.',                                                               tags:['HTML report','PDF export','Allure TestOps'] },
  { status:'pl', statusLabel:'Запланировано',cat:'Интеграции',      title:'Интеграция с TestIT',                   desc:'Двусторонняя синхронизация: экспорт тест-кейсов в TestIT с маппингом на тест-планы, импорт результатов прогона, привязка API-тестов к ручным тест-кейсам.',                                                                  tags:['TestIT','TMS','двусторонняя синхронизация'] },
  { status:'pl', statusLabel:'Запланировано',cat:'Генерация',       title:'Мануальные тестовые сценарии',          desc:'Генерация описаний тест-кейсов для ручного тестирования на основе OpenAPI: шаги, ожидаемые результаты, предусловия. Экспорт в TestIT, Confluence, Markdown.',                                                               tags:['test cases','manual QA','Confluence'] },
  { status:'pl', statusLabel:'Запланировано',cat:'Нагрузочное',     title:'Нагрузочное тестирование',              desc:'Генерация сценариев из OpenAPI: k6 (JavaScript), Gatling (Scala/Java), Apache JMeter (XML). Ramp-up сценарии, виртуальные пользователи, assertions на время ответа.',                                                        tags:['k6','Gatling','JMeter','performance'] },
  { status:'pl', statusLabel:'Запланировано',cat:'CI/CD',           title:'Встраивание в CI/CD',                   desc:'Готовые шаблоны пайплайнов для автоматической генерации и запуска тестов при изменении OpenAPI-спецификации. GitLab CI, GitHub Actions, Jenkins. CLI без GUI.',                                                              tags:['GitLab CI','GitHub Actions','Jenkins','CLI'] },
  { status:'pl', statusLabel:'Запланировано',cat:'Git-платформы',   title:'Интеграция с репозиториями',            desc:'GitLab: EVA-отчёт комментарием в merge request. GitHub: Action при изменении OpenAPI. Gitflic: аналогичная интеграция для российской платформы.',                                                                           tags:['GitLab','GitHub','Gitflic','MR review'] },
  { status:'pl', statusLabel:'Запланировано',cat:'Командная работа',title:'Командная работа / Cloud Sync',         desc:'Синхронизация коллекций, переменных и настроек через Git-репозиторий или облако. Разграничение доступа, история изменений. Self-hosted вариант для корпоративных сред.',                                                      tags:['shared workspace','self-hosted','Git sync'] },
  { status:'pl', statusLabel:'Запланировано',cat:'Инфраструктура',  title:'Mock-серверы',                          desc:'Создание mock-сервера на основе OpenAPI для разработки без реального бэкенда. Статические и динамические ответы, задержки, сценарии ошибок. Локально или в Docker.',                                                          tags:['mock server','Docker','offline dev'] },
  { status:'pl', statusLabel:'Запланировано',cat:'AI',              title:'Интеграция с Василисой',               desc:'Использование корпоративной AI-платформы для обогащения тестов: точные тестовые данные, описания тест-кейсов и рекомендации на основе бизнес-контекста.',                                                                   tags:['Василиса','AI-ассистент','LLM'] },
  { status:'pl', statusLabel:'Запланировано',cat:'AI',              title:'Интеграция с Ягой',                     desc:'Синхронизация тест-кейсов с платформой Яга, передача результатов прогонов, трассировка покрытия требований тестами.',                                                                                                          tags:['Яга','QA automation','трассировка'] },
  { status:'pl', statusLabel:'Запланировано',cat:'Платформы',       title:'Mac / Linux — Desktop-приложение',      desc:'VS Code Extension и IntelliJ Plugin уже кроссплатформенные. Следующий шаг — Desktop для macOS (DMG) и Linux (AppImage, .deb). Приоритет: macOS Apple Silicon.',                                                              tags:['macOS','Linux','Apple Silicon'] },
  { status:'pl', statusLabel:'Запланировано',cat:'Совместимость',   title:'Расширение совместимости с Postman',    desc:'Реализация недостающих возможностей: environments с быстрым переключением, история запросов, cookies-менеджер, документация коллекций.',                                                                                     tags:['environments','history','cookies'] },
  { status:'pl', statusLabel:'Запланировано',cat:'Расширяемость',   title:'Система расширений',                    desc:'Открытый API для плагинов: новые форматы вывода (Karate DSL, Cypress, Playwright, Robot Framework), кастомные assertion-маперы, интеграции с внутренними системами.',                                                         tags:['Karate DSL','Playwright','Cypress','plugins API'] },
]

// ── DOWNLOADS ─────────────────────────────────────────────────────────────
// Файлы хранятся прямо в репозитории в папке downloads/.
// Обновляйте имена файлов при выходе новых версий.
// Репозиторий: https://github.com/Mdyuzhev/pechkin_roadmap
// Pages URL:   https://mdyuzhev.github.io/pechkin_roadmap/

// ← ОБНОВЛЯТЬ ПРИ НОВЫХ ВЕРСИЯХ:
const VSIX_FILE  = 'Pe4King-1.0.87.vsix'
const IDEA_FILE  = 'Pe4King-IDEA-1.0.77.zip'
const WIN_EXE    = 'Pe4King_0.1.0_x64-setup.exe'
const WIN_MSI    = 'Pe4King_0.1.0_x64_en-US.msi'

export const downloads = [
  {
    icon: '🧩',
    name: 'VS Code Extension',
    version: '1.0.87',
    platforms: [
      { label: 'Windows', ok: true },
      { label: 'macOS',   ok: true },
      { label: 'Linux',   ok: true },
    ],
    buttons: [
      {
        label: 'Скачать .vsix',
        sub: VSIX_FILE,
        href: `downloads/${VSIX_FILE}`,
        primary: true,
      },
    ],
    note: 'Установка: Extensions → ··· → Install from VSIX',
  },
  {
    icon: '🔌',
    name: 'IntelliJ IDEA Plugin',
    version: '1.0.77',
    platforms: [
      { label: 'Windows', ok: true },
      { label: 'macOS',   ok: true },
      { label: 'Linux',   ok: true },
    ],
    buttons: [
      {
        label: 'Скачать .zip',
        sub: IDEA_FILE,
        href: `downloads/${IDEA_FILE}`,
        primary: true,
      },
    ],
    note: 'Установка: Settings → Plugins → ⚙ → Install Plugin from Disk',
  },
  {
    icon: '🖥',
    name: 'Desktop (Windows)',
    version: '0.1.0',
    platforms: [
      { label: 'Windows 10/11', ok: true },
      { label: 'macOS',  ok: false },
      { label: 'Linux',  ok: false },
    ],
    buttons: [
      {
        label: 'Скачать .exe',
        sub: `${WIN_EXE} · ~160 MB`,
        href: `downloads/${WIN_EXE}`,
        primary: true,
      },
      {
        label: 'Скачать .msi',
        sub: `${WIN_MSI} · ~160 MB`,
        href: `downloads/${WIN_MSI}`,
        primary: false,
      },
    ],
    note: 'Включает WebView2 — не требует интернета при установке',
  },
]

// ── EXPLANATIONS ──────────────────────────────────────────────────────────
export const explanations = {
  'gen-openapi':      { title:'Генерация тестов из OpenAPI',    text:'<p>Вы загружаете файл с описанием вашего API (OpenAPI или Swagger), а Pe4King сам пишет готовые тесты для каждого эндпоинта — вам не нужно ничего делать вручную.</p><p>Postman тоже умеет импортировать OpenAPI, но создаёт только заготовки запросов без каких-либо проверок: он не знает что именно нужно проверять в ответе.</p><p>Pe4King читает структуру схемы — типы полей, форматы, ограничения — и сразу генерирует тесты с осмысленными assertions, готовые к запуску.</p>' },
  'schema-assertions':{ title:'Schema-aware assertions',        text:'<p>Assertion — это проверка, которая подтверждает что ответ сервера правильный. Например: «поле id не пустое» или «статус 200».</p><p>Pe4King смотрит на тип каждого поля в схеме и сам выбирает подходящую проверку: для email добавит проверку наличия «@», для UUID — проверку формата, для числа — что значение в допустимых пределах.</p><p>Postman при импорте OpenAPI вообще не добавляет assertions — тестировщик должен прописывать все проверки вручную.</p>' },
  'negative-tests':   { title:'Негативные тесты (авто)',        text:'<p>Негативные тесты проверяют как система реагирует на некорректные данные — правильно ли она отклоняет их с ошибкой, а не падает или возвращает непредсказуемый результат.</p><p>Pe4King смотрит в описание API: если поле имеет минимальное значение 1, инструмент автоматически создаёт тест с значением 0 и проверяет что сервер вернул ошибку 400.</p><p>Postman такие тесты не генерирует вообще — их нужно создавать полностью вручную, что занимает много времени и часто пропускается.</p>' },
  'pytest':           { title:'Вывод в pytest (Python)',         text:'<p>pytest — самый популярный фреймворк для тестирования на Python, используется в большинстве Python-проектов.</p><p>Pe4King генерирует готовые .py файлы которые можно запустить командой pytest прямо из терминала — никаких дополнительных настроек не нужно.</p><p>Это стандартный выбор для команд которые пишут на Python или уже используют pytest для других видов тестирования в проекте.</p>' },
  'rest-assured':     { title:'Вывод REST Assured (Java)',       text:'<p>REST Assured — библиотека для тестирования API на Java, де-факто стандарт в Java-проектах, особенно в enterprise-разработке.</p><p>Pe4King генерирует Java-классы с JUnit 5 тестами и Hamcrest-матчерами, которые можно сразу добавить в Maven или Gradle проект без дополнительной настройки.</p><p>Это правильный выбор если ваша команда работает на Java или Kotlin, или если нужно интегрировать API-тесты в существующий Java-проект.</p>' },
  'postman-collection':{ title:'Вывод в Postman Collection',    text:'<p>Postman Collection — это JSON-файл со всеми запросами, тестами и переменными, который открывается в Postman или запускается через Newman в командной строке.</p><p>Pe4King генерирует такой файл с уже написанными тест-скриптами на JavaScript — не просто заготовки запросов, а полноценные проверки ответов.</p><p>Готовый файл можно импортировать в Postman одним кликом или запустить в CI/CD через Newman без установки Postman.</p>' },
  'eva':              { title:'EVA — анализ качества тестов',   text:'<p>EVA оценивает насколько хорошо написаны ваши тесты — без их запуска, просто анализируя исходный код.</p><p>Инструмент определяет «глубину» проверок по шкале от L0 (тесты есть, но они ничего не проверяют) до L6 (тесты проверяют бизнес-логику и форматы данных).</p><p>По итогу вы получаете оценку как в школе — S, A, B, C, D или F — и конкретные рекомендации что улучшить. В Postman такого инструмента нет.</p>' },
  'ide':              { title:'Встроен в IDE',                  text:'<p>Pe4King работает прямо внутри вашего редактора — VS Code или IntelliJ IDEA — в виде боковой панели.</p><p>Не нужно переключаться между окнами: открыли файл спецификации, нажали кнопку в панели Pe4King — получили готовые тесты, не выходя из редактора.</p><p>Postman — это отдельное приложение, никак не интегрированное с IDE, поэтому при работе нужно постоянно переключаться между окнами.</p>' },
  'http-client':      { title:'HTTP клиент',                    text:'<p>Встроенный HTTP-клиент позволяет отправлять запросы к API прямо из Pe4King — точно так же как в Postman, но не выходя из IDE.</p><p>Вы видите ответ сервера, заголовки, время выполнения и размер ответа. Запросы можно сохранять в коллекции для повторного использования.</p><p>Это удобно для быстрой проверки что API отвечает корректно перед тем как генерировать тесты.</p>' },
  'collections':      { title:'Коллекции запросов',             text:'<p>Коллекции — это папки с сохранёнными HTTP-запросами, похожие на закладки в браузере, только для API.</p><p>Вы сохраняете часто используемые запросы и можете запускать их в один клик, не вбивая URL и параметры каждый раз заново.</p><p>Запросы можно группировать по проектам или функциям API, а также экспортировать в pytest или REST Assured файлы.</p>' },
  'variables':        { title:'Переменные окружения',           text:'<p>Переменные позволяют хранить значения которые часто меняются — адрес сервера, токен авторизации, ID тестового пользователя.</p><p>Вместо того чтобы вписывать https://api.example.com в каждый запрос, вы пишете {{baseUrl}} и задаёте значение один раз.</p><p>Переменные могут быть глобальными (для всех коллекций) или привязанными к конкретной коллекции.</p>' },
  'scripts':          { title:'Pre-request и Test скрипты',     text:'<p>Pre-request скрипт — это JavaScript-код который выполняется до отправки запроса: например для получения свежего токена авторизации или генерации данных.</p><p>Test-скрипт выполняется после получения ответа и содержит проверки: правильный ли статус, нужные ли поля, корректный ли формат.</p><p>Оба типа скриптов дают полный программный контроль над тем что происходит до и после запроса.</p>' },
  'runner':           { title:'Collection Runner',              text:'<p>Collection Runner запускает все запросы из коллекции автоматически, один за другим — как конвейер на заводе.</p><p>Он передаёт данные между запросами: например сохраняет ID пользователя из ответа на запрос создания, и использует его в следующем запросе.</p><p>В конце вы видите сводную таблицу: какие тесты прошли, какие упали, сколько времени занял каждый запрос.</p>' },
  'jsonpath':         { title:'JSONPath извлечение',            text:'<p>JSONPath — это язык запросов к JSON-данным. Например $.data.users[0].id извлечёт ID первого пользователя из ответа.</p><p>Pe4King использует JSONPath чтобы вытащить нужные значения из ответа сервера и сохранить их как переменные для следующих запросов.</p><p>Это основа для «цепочек» запросов: создал запись — получил её ID — использовал ID в следующем запросе.</p>' },
  'swagger-detect':   { title:'Swagger UI авто-обнаружение',   text:'<p>Многие серверы публикуют страницу с документацией API (Swagger UI). Pe4King умеет найти файл спецификации автоматически, даже если вы указали только главный адрес сервера.</p><p>Инструмент перебирает стандартные пути (/api/swagger.json, /v3/api-docs и т.д.) и сам находит спецификацию без вашего участия.</p><p>В Postman нужно самому найти прямую ссылку на JSON-файл спецификации и вставить её вручную.</p>' },
  'zip':              { title:'ZIP-экспорт тестов',            text:'<p>Когда Pe4King генерирует тесты, их может быть несколько файлов: основной тест-файл, конфигурация, вспомогательные модули.</p><p>Все файлы автоматически упаковываются в ZIP-архив — вы скачиваете один файл, распаковываете и тесты готовы к запуску.</p><p>В Postman нет механизма экспорта тестов в форматы pytest или REST Assured.</p>' },
  'offline':          { title:'Работа без интернета',          text:'<p>Pe4King работает полностью локально — он не отправляет данные на внешние серверы и не требует подключения к интернету.</p><p>Это критично для корпоративных сред где API-спецификации содержат конфиденциальную бизнес-логику — данные не покидают вашу сеть.</p><p>Postman требует аккаунт и синхронизирует коллекции через облако Postman Inc.</p>' },
  'free':             { title:'Бесплатность',                  text:'<p>Pe4King полностью бесплатен без скрытых ограничений — нет лимитов на количество запросов, коллекций, пользователей или проектов.</p><p>Нет подписки, нет «бесплатного плана с ограничениями» — просто установил и пользуешься всем функционалом.</p><p>Postman бесплатен для базового использования, но командные функции, история запросов и Mock-серверы требуют платной подписки.</p>' },
  'teamwork':         { title:'Командная работа / Cloud sync', text:'<p>Это возможность работать над одними коллекциями и настройками вместе с командой — все видят актуальную версию и изменения синхронизируются автоматически.</p><p>Как Google Docs, только для API-тестов: один тестировщик добавил запрос, остальные сразу видят его в своём Pe4King.</p><p>В Pe4King эта функция в roadmap, в Postman уже реализована.</p>' },
  'mock':             { title:'Mock-серверы',                  text:'<p>Mock-сервер имитирует настоящий API: вы обращаетесь к нему как к реальному серверу, а он возвращает заранее настроенные ответы.</p><p>Это нужно когда бэкенд ещё не готов, но фронтенд или тесты уже нужно разрабатывать — mock позволяет работать параллельно.</p><p>Pe4King планирует создавать mock-серверы автоматически из OpenAPI-спецификации.</p>' },
  'desktop':          { title:'Desktop-приложение',            text:'<p>Desktop Pe4King — обычная программа для Windows: скачал установщик, запустил, пользуешься — никакого VS Code или IntelliJ не нужно.</p><p>Приложение полностью автономно: не требует Rust, Python, Node.js или любых других дополнительных инструментов.</p><p>Postman Desktop доступен для Windows, Mac и Linux. Pe4King Desktop пока поддерживает только Windows.</p>' },
  'mac-linux':        { title:'Поддержка Mac и Linux',         text:'<p>VS Code Extension и IntelliJ IDEA Plugin Pe4King уже работают на Mac и Linux — устанавливаете из маркетплейса как обычно.</p><p>Standalone Desktop-приложение пока собирается только для Windows. Сборки для macOS и Linux запланированы, приоритет — macOS Apple Silicon.</p><p>Если ваша команда работает на Mac или Linux — уже сейчас можно пользоваться Pe4King через VS Code или IntelliJ.</p>' },
}
