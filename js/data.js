// ── FEATURES ─────────────────────────────────────────────────────────────
export const featureGroups = [
  {
    label: 'Генерация тестов',
    items: [
      { key:'gen-openapi',        name: 'OpenAPI Parser',            desc: 'Разбор спецификаций OpenAPI 3.x и Swagger 2.0 в форматах JSON и YAML' },
      { key:'schema-assertions',  name: 'Schema-Aware Assertions',   desc: 'Автовыбор проверки по типу поля, формату (uuid, email, date-time), enum-значениям и числовым ограничениям' },
      { key:'positive-tests',     name: 'Позитивные тесты',          desc: 'Генерация happy-path тестов с корректными данными запроса для каждого эндпоинта' },
      { key:'negative-tests',     name: 'Негативные тесты',          desc: 'Автогенерация на нарушение ограничений: enum, min/max, minLength/maxLength, неверный тип, 401/404' },
      { key:'pytest',             name: 'Вывод в pytest',             desc: 'Python-тесты с requests, поддержка функций и классов' },
      { key:'rest-assured',       name: 'Вывод в REST Assured',       desc: 'Java-тесты с JUnit 5 и Hamcrest-матчерами' },
      { key:'postman-collection', name: 'Вывод в Postman',            desc: 'Postman Collection v2.1 с pm.test() скриптами и переменными окружения' },
      { key:'selective-gen',      name: 'Выборочная генерация',       desc: 'Выбор эндпоинтов через дерево с чекбоксами и быстрый выбор всех сразу' },
      { key:'swagger-detect',     name: 'Загрузка по URL',            desc: 'Загрузка спека по ссылке с авторизацией и авто-обнаружением пути (Swagger UI, /v3/api-docs)' },
      { key:'zip',                name: 'ZIP-архив',                  desc: 'Автоматическая упаковка всех сгенерированных файлов в ZIP' },
      { key:'performance',        name: 'Производительность',         desc: '9 000 тестов в секунду — генерация большой спецификации мгновенно' },
    ]
  },
  {
    label: 'HTTP Клиент',
    items: [
      { key:'http-client',  name: 'Отправка запросов',    desc: 'Полный HTTP-клиент: GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS' },
      { key:'req-params',   name: 'Параметры запроса',    desc: 'Редактирование path params, query params, заголовков и тела в табличном виде' },
      { key:'resp-viewer',  name: 'Просмотр ответа',      desc: 'Pretty (JSON с подсветкой), Raw, Headers — с временем и размером ответа' },
      { key:'prerequest',   name: 'Pre-request скрипты',  desc: 'JavaScript-код до отправки запроса — для подготовки данных и токенов' },
      { key:'scripts',      name: 'Test-скрипты',          desc: 'JavaScript после ответа: test(name, cond) и полный pm.test / pm.expect API' },
      { key:'quickjs',      name: 'QuickJS движок',        desc: 'Встроенный JS-движок в Desktop — без Python и Node.js' },
    ]
  },
  {
    label: 'Коллекции и переменные',
    items: [
      { key:'collections', name: 'Коллекции запросов',       desc: 'Создание, редактирование и организация сохранённых HTTP-запросов' },
      { key:'variables',   name: 'Переменные коллекции',     desc: '{{baseUrl}}, {{token}} и любые другие с областью видимости коллекции' },
      { key:'global-vars', name: 'Глобальные переменные',    desc: 'Переменные доступные одновременно во всех коллекциях' },
      { key:'jsonpath',    name: 'JSONPath-извлечение',       desc: 'Извлечение $.data.id из ответа и сохранение в переменные для цепочек запросов' },
      { key:'snippets',    name: 'Библиотека сниппетов',      desc: 'Готовые JS-сниппеты для типовых проверок — вставка одним кликом' },
      { key:'export-col',  name: 'Экспорт коллекций',        desc: 'Конвертация коллекции в готовый pytest или REST Assured файл' },
      { key:'import-col',  name: 'Импорт из Postman',        desc: 'Импорт Postman Collection v2.1 с сохранением запросов, папок и test-скриптов' },
    ]
  },
  {
    label: 'Collection Runner',
    items: [
      { key:'runner',      name: 'Последовательный запуск',  desc: 'Выполнение всех запросов коллекции по порядку в автоматическом режиме' },
      { key:'run-results', name: 'Прогресс и результаты',    desc: 'Прогресс-бар и таблица: метод, статус, время, pass/fail по каждому запросу' },
      { key:'run-vars',    name: 'Передача переменных',      desc: 'Значения из JSONPath в одном запросе доступны в следующих — цепочки' },
    ]
  },
  {
    label: 'EVA — Анализ качества тестов',
    items: [
      { key:'eva',           name: 'Oracle Depth L0–L6',           desc: 'Шкала глубины проверок: от «нет assertions» (L0) до «бизнес-логика» (L6)' },
      { key:'eva-grade',     name: 'Грейд качества S–F',           desc: 'Итоговая оценка набора тестов: S (90+), A, B, C, D, F' },
      { key:'eva-file',      name: 'Анализ файла / папки',         desc: 'Разбор .py или .java файла или целой папки с агрегированным результатом' },
      { key:'eva-antipattern',name: 'Детектирование anti-patterns',desc: 'Thread.sleep, пустые catch-блоки, захардкоженные credentials, copy-paste тесты' },
      { key:'eva-recs',      name: 'Рекомендации',                 desc: 'Конкретные советы по улучшению assertions на основе найденных проблем' },
      { key:'eva-static',    name: 'Статический анализ',           desc: 'Анализ без запуска тестов — только по исходному коду' },
    ]
  },
]

// ── COMPARE ───────────────────────────────────────────────────────────────
// Поля: pe4, post, apidog
// type: 'yes' | 'no' | 'par' (частично) | 'soon' (roadmap) | 'mixed'
export const compareRows = [
  { key:'gen-openapi',        label:'Генерация тестов из OpenAPI',
    pe4:    { type:'yes', text:'Ключевая функция' },
    post:   { type:'par', text:'Только заготовки запросов, без assertions' },
    apidog: { type:'par', text:'AI-генерация, платно' },
    pe4only:true },

  { key:'schema-assertions',  label:'Schema-aware assertions',
    pe4:    { type:'yes', text:'Тип, формат, enum, constraints' },
    post:   { type:'no' },
    apidog: { type:'no' },
    pe4only:true },

  { key:'negative-tests',     label:'Негативные тесты (авто)',
    pe4:    { type:'yes', text:'Из schema constraints' },
    post:   { type:'no' },
    apidog: { type:'no' },
    pe4only:true },

  { key:'pytest',             label:'Вывод pytest (Python)',
    pe4:    { type:'yes' },
    post:   { type:'no' },
    apidog: { type:'no' },
    pe4only:true },

  { key:'rest-assured',       label:'Вывод REST Assured (Java)',
    pe4:    { type:'yes' },
    post:   { type:'no' },
    apidog: { type:'no' },
    pe4only:true },

  { key:'postman-collection', label:'Вывод Postman Collection',
    pe4:    { type:'yes' },
    post:   { type:'yes' },
    apidog: { type:'yes' } },

  { key:'eva',                label:'EVA / анализ качества тестов',
    pe4:    { type:'yes', text:'Oracle Depth L0–L6' },
    post:   { type:'no' },
    apidog: { type:'no' },
    pe4only:true },

  { key:'ide',                label:'Встроен в IDE',
    pe4:    { type:'yes', text:'VS Code + IntelliJ' },
    post:   { type:'no' },
    apidog: { type:'no' },
    pe4only:true },

  { key:'http-client',        label:'HTTP клиент',
    pe4:    { type:'yes' },
    post:   { type:'yes' },
    apidog: { type:'yes' } },

  { key:'collections',        label:'Коллекции запросов',
    pe4:    { type:'yes' },
    post:   { type:'yes' },
    apidog: { type:'yes' } },

  { key:'variables',          label:'Переменные окружения',
    pe4:    { type:'yes' },
    post:   { type:'yes' },
    apidog: { type:'yes' } },

  { key:'scripts',            label:'Pre-request / Test скрипты',
    pe4:    { type:'yes' },
    post:   { type:'yes' },
    apidog: { type:'yes' } },

  { key:'runner',             label:'Collection Runner',
    pe4:    { type:'yes' },
    post:   { type:'yes' },
    apidog: { type:'yes' } },

  { key:'jsonpath',           label:'JSONPath извлечение',
    pe4:    { type:'yes' },
    post:   { type:'yes' },
    apidog: { type:'yes' } },

  { key:'swagger-detect',     label:'Swagger UI авто-обнаружение',
    pe4:    { type:'yes' },
    post:   { type:'par', text:'Ручной импорт' },
    apidog: { type:'yes' },
    pe4only:true },

  { key:'zip',                label:'ZIP-экспорт тестов',
    pe4:    { type:'yes' },
    post:   { type:'no' },
    apidog: { type:'no' },
    pe4only:true },

  { key:'offline',            label:'Работа без интернета',
    pe4:    { type:'yes', text:'Полностью offline' },
    post:   { type:'par', text:'Требует аккаунт' },
    apidog: { type:'par', text:'Требует аккаунт' },
    pe4only:true },

  { key:'free',               label:'Бесплатно',
    pe4:    { type:'yes' },
    post:   { type:'par', text:'Freemium' },
    apidog: { type:'par', text:'Freemium, AI платно' },
    pe4only:true },

  { key:'teamwork',           label:'Командная работа / Cloud sync',
    pe4:    { type:'soon' },
    post:   { type:'yes' },
    apidog: { type:'yes' } },

  { key:'mock',               label:'Mock-серверы',
    pe4:    { type:'soon' },
    post:   { type:'yes' },
    apidog: { type:'yes' } },

  { key:'desktop',            label:'Desktop-приложение',
    pe4:    { type:'yes', text:'Windows' },
    post:   { type:'yes', text:'Win/Mac/Linux' },
    apidog: { type:'yes', text:'Win/Mac/Linux' } },

  { key:'mac-linux',          label:'Mac / Linux',
    pe4:    { type:'mixed', yes:'Extension + Plugin', soon:'Desktop' },
    post:   { type:'yes' },
    apidog: { type:'yes' } },
]

// ── ROADMAP ───────────────────────────────────────────────────────────────
export const roadmapItems = [
  { status:'on', statusLabel:'В работе',     cat:'Отчётность',      title:'Allure-подобный отчёт о тестировании',
    desc:'HTML-отчёт по результатам Collection Runner: сводная статистика, детализация по каждому запросу, тренды по времени, экспорт в PDF. Совместимость с Allure TestOps.',
    tags:['HTML report','PDF export','Allure TestOps'] },

  { status:'pl', statusLabel:'Запланировано',cat:'Платформы',       title:'Унификация движка скриптов (JS на всех платформах)',
    desc:'Сейчас Desktop и IDEA Plugin используют JavaScript (QuickJS / GraalJS) для тест-скриптов, а VS Code Extension — Python. Это означает что одна Postman-коллекция не запустится одинаково во всех трёх продуктах. Решение: заменить Python-runner в VS Code Extension на Node.js vm-движок — единый JavaScript-API pm.test / pm.expect на всех платформах.',
    tags:['JavaScript унификация','pm.test / pm.expect','кросс-платформа','platform parity'] },

  { status:'pl', statusLabel:'Запланировано',cat:'Интеграции',      title:'Интеграция с TestIT',
    desc:'Двусторонняя синхронизация: экспорт тест-кейсов в TestIT с маппингом на тест-планы, импорт результатов прогона, привязка API-тестов к ручным тест-кейсам.',
    tags:['TestIT','TMS','двусторонняя синхронизация'] },

  { status:'pl', statusLabel:'Запланировано',cat:'Генерация',       title:'Мануальные тестовые сценарии',
    desc:'Генерация описаний тест-кейсов для ручного тестирования на основе OpenAPI: шаги, ожидаемые результаты, предусловия. Экспорт в TestIT, Confluence, Markdown.',
    tags:['test cases','manual QA','Confluence'] },

  { status:'pl', statusLabel:'Запланировано',cat:'Нагрузочное',     title:'Нагрузочное тестирование',
    desc:'Генерация сценариев из OpenAPI: k6 (JavaScript), Gatling (Scala/Java), Apache JMeter (XML). Ramp-up сценарии, виртуальные пользователи, assertions на время ответа.',
    tags:['k6','Gatling','JMeter','performance'] },

  { status:'pl', statusLabel:'Запланировано',cat:'CI/CD',           title:'Встраивание в CI/CD',
    desc:'Готовые шаблоны пайплайнов для автоматической генерации и запуска тестов при изменении OpenAPI-спецификации. GitLab CI, GitHub Actions, Jenkins. CLI без GUI.',
    tags:['GitLab CI','GitHub Actions','Jenkins','CLI'] },

  { status:'pl', statusLabel:'Запланировано',cat:'Git-платформы',   title:'Интеграция с репозиториями',
    desc:'GitLab: EVA-отчёт комментарием в merge request. GitHub: Action при изменении OpenAPI. Gitflic: аналогичная интеграция для российской платформы.',
    tags:['GitLab','GitHub','Gitflic','MR review'] },

  { status:'pl', statusLabel:'Запланировано',cat:'Командная работа',title:'Командная работа / Cloud Sync',
    desc:'Синхронизация коллекций, переменных и настроек через Git-репозиторий или облако. Разграничение доступа, история изменений. Self-hosted вариант для корпоративных сред.',
    tags:['shared workspace','self-hosted','Git sync'] },

  { status:'pl', statusLabel:'Запланировано',cat:'Инфраструктура',  title:'Mock-серверы',
    desc:'Создание mock-сервера на основе OpenAPI для разработки без реального бэкенда. Статические и динамические ответы, задержки, сценарии ошибок. Локально или в Docker.',
    tags:['mock server','Docker','offline dev'] },

  { status:'pl', statusLabel:'Запланировано',cat:'AI',              title:'Интеграция с Василисой',
    desc:'Использование корпоративной AI-платформы для обогащения тестов: точные тестовые данные, описания тест-кейсов и рекомендации на основе бизнес-контекста.',
    tags:['Василиса','AI-ассистент','LLM'] },

  { status:'pl', statusLabel:'Запланировано',cat:'AI',              title:'Интеграция с Ягой',
    desc:'Синхронизация тест-кейсов с платформой Яга, передача результатов прогонов, трассировка покрытия требований тестами.',
    tags:['Яга','QA automation','трассировка'] },

  { status:'pl', statusLabel:'Запланировано',cat:'Платформы',       title:'Mac / Linux — Desktop-приложение',
    desc:'VS Code Extension и IntelliJ Plugin уже кроссплатформенные. Следующий шаг — Desktop для macOS (DMG) и Linux (AppImage, .deb). Приоритет: macOS Apple Silicon.',
    tags:['macOS','Linux','Apple Silicon'] },

  { status:'pl', statusLabel:'Запланировано',cat:'Совместимость',   title:'Расширение совместимости с Postman',
    desc:'Реализация недостающих возможностей: environments с быстрым переключением, история запросов, cookies-менеджер, документация коллекций.',
    tags:['environments','history','cookies'] },

  { status:'pl', statusLabel:'Запланировано',cat:'Расширяемость',   title:'Система расширений',
    desc:'Открытый API для плагинов: новые форматы вывода (Karate DSL, Cypress, Playwright, Robot Framework), кастомные assertion-маперы, интеграции с внутренними системами.',
    tags:['Karate DSL','Playwright','Cypress','plugins API'] },
]

// ── DOWNLOADS ─────────────────────────────────────────────────────────────
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
      { label: 'Скачать .vsix', sub: VSIX_FILE, href: `downloads/${VSIX_FILE}`, primary: true },
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
      { label: 'Скачать .zip', sub: IDEA_FILE, href: `downloads/${IDEA_FILE}`, primary: true },
    ],
    note: 'Установка: Settings → Plugins → ⚙ → Install Plugin from Disk',
  },
  {
    icon: '🖥',
    name: 'Desktop (Windows)',
    version: '0.1.0 beta',
    platforms: [
      { label: 'Windows 10/11', ok: true },
      { label: 'macOS',  ok: false },
      { label: 'Linux',  ok: false },
    ],
    buttons: [
      { label: 'Скачать .exe', sub: `${WIN_EXE} · ~160 MB`, href: `downloads/${WIN_EXE}`, primary: true },
      { label: 'Скачать .msi', sub: `${WIN_MSI} · ~160 MB`, href: `downloads/${WIN_MSI}`, primary: false },
    ],
    note: 'Включает WebView2 — не требует интернета при установке',
  },
]

// ── EXPLANATIONS ──────────────────────────────────────────────────────────
export const explanations = {
  'gen-openapi':       { title:'Генерация тестов из OpenAPI',    text:'<p>Вы загружаете файл с описанием вашего API (OpenAPI или Swagger), а Pe4King сам пишет готовые тесты для каждого эндпоинта — вам не нужно ничего делать вручную.</p><p>Postman тоже умеет импортировать OpenAPI, но создаёт только заготовки запросов без каких-либо проверок: он не знает что именно нужно проверять в ответе. APIDog предлагает AI-генерацию тестов, но она платная и непредсказуемая.</p><p>Pe4King читает структуру схемы — типы полей, форматы, ограничения — и сразу генерирует тесты с осмысленными assertions, готовые к запуску.</p>' },
  'schema-assertions': { title:'Schema-aware assertions',        text:'<p>Assertion — это проверка, которая подтверждает что ответ сервера правильный. Например: «поле id не пустое» или «статус 200».</p><p>Pe4King смотрит на тип каждого поля в схеме и сам выбирает подходящую проверку: для email добавит проверку наличия «@», для UUID — проверку формата, для числа — что значение в допустимых пределах.</p><p>Ни Postman, ни APIDog при импорте OpenAPI не добавляют assertions — тестировщик должен прописывать все проверки вручную.</p>' },
  'negative-tests':    { title:'Негативные тесты (авто)',        text:'<p>Негативные тесты проверяют как система реагирует на некорректные данные — правильно ли она отклоняет их с ошибкой, а не падает или возвращает непредсказуемый результат.</p><p>Pe4King смотрит в описание API: если поле имеет минимальное значение 1, инструмент автоматически создаёт тест с значением 0 и проверяет что сервер вернул ошибку 400.</p><p>Postman и APIDog такие тесты не генерируют автоматически — их нужно создавать полностью вручную.</p>' },
  'pytest':            { title:'Вывод в pytest (Python)',         text:'<p>pytest — самый популярный фреймворк для тестирования на Python, используется в большинстве Python-проектов.</p><p>Pe4King генерирует готовые .py файлы которые можно запустить командой pytest прямо из терминала — никаких дополнительных настроек не нужно.</p><p>Postman и APIDog не генерируют pytest-тесты.</p>' },
  'rest-assured':      { title:'Вывод REST Assured (Java)',       text:'<p>REST Assured — библиотека для тестирования API на Java, де-факто стандарт в Java-проектах, особенно в enterprise-разработке.</p><p>Pe4King генерирует Java-классы с JUnit 5 тестами и Hamcrest-матчерами, которые можно сразу добавить в Maven или Gradle проект без дополнительной настройки.</p><p>Это правильный выбор если ваша команда работает на Java или Kotlin, или если нужно интегрировать API-тесты в существующий Java-проект.</p>' },
  'postman-collection':{ title:'Вывод в Postman Collection',     text:'<p>Postman Collection — это JSON-файл со всеми запросами, тестами и переменными, который открывается в Postman или запускается через Newman в командной строке.</p><p>Pe4King генерирует такой файл с уже написанными тест-скриптами на JavaScript — не просто заготовки запросов, а полноценные проверки ответов.</p><p>Готовый файл можно импортировать в Postman одним кликом или запустить в CI/CD через Newman без установки Postman.</p>' },
  'selective-gen':     { title:'Выборочная генерация',           text:'<p>Не всегда нужно генерировать тесты для всех эндпоинтов сразу. Pe4King показывает дерево всех эндпоинтов из спецификации с чекбоксами — вы выбираете только нужные.</p><p>Есть кнопки «Выбрать все» и «Снять выбор» для быстрого управления. Выборочная генерация позволяет создавать тесты инкрементально, добавляя новые эндпоинты по мере их реализации.</p>' },
  'performance':       { title:'Производительность',             text:'<p>Pe4King генерирует 9 000 тестов в секунду. Это означает что даже очень большая API-спецификация с сотнями эндпоинтов обрабатывается мгновенно — вы не ждёте.</p><p>Генератор детерминированный: один и тот же input всегда даёт одинаковый output. Это важно для воспроизводимости в CI/CD.</p>' },
  'eva':               { title:'EVA — анализ качества тестов',   text:'<p>EVA оценивает насколько хорошо написаны ваши тесты — без их запуска, просто анализируя исходный код.</p><p>Инструмент определяет «глубину» проверок по шкале от L0 (тесты есть, но они ничего не проверяют) до L6 (тесты проверяют бизнес-логику и форматы данных).</p><p>По итогу вы получаете оценку как в школе — S, A, B, C, D или F — и конкретные рекомендации что улучшить. Ни в Postman, ни в APIDog такого инструмента нет.</p>' },
  'eva-grade':         { title:'Грейд качества S–F',             text:'<p>EVA подводит итог анализа в виде одной буквы: S (90+ баллов), A, B, C, D или F. Это быстрый ответ на вопрос «насколько качественные мои тесты?».</p><p>За каждой оценкой стоят конкретные метрики: глубина assertions, покрытие типов ответов, наличие негативных сценариев, отсутствие anti-patterns.</p>' },
  'eva-antipattern':   { title:'Детектирование anti-patterns',   text:'<p>Anti-patterns — это паттерны в коде которые выглядят как тесты, но не тестируют ничего реального.</p><p>EVA находит: Thread.sleep (нестабильные тесты), пустые catch-блоки (скрытые ошибки), захардкоженные credentials (уязвимость), copy-paste тесты (иллюзия покрытия).</p><p>Обнаружение этих проблем статически — без запуска тестов — экономит время и предотвращает проблемы в CI/CD.</p>' },
  'eva-static':        { title:'Статический анализ',             text:'<p>Статический анализ означает что EVA читает исходный код тестов, а не запускает их. Это важно по нескольким причинам.</p><p>Во-первых, анализ работает без доступа к тестируемому серверу — можно проверить качество тестов в изоляции. Во-вторых, это быстро — секунды, а не минуты. В-третьих, анализ воспроизводим и может быть частью CI-пайплайна.</p>' },
  'ide':               { title:'Встроен в IDE',                  text:'<p>Pe4King работает прямо внутри вашего редактора — VS Code или IntelliJ IDEA — в виде боковой панели.</p><p>Не нужно переключаться между окнами: открыли файл спецификации, нажали кнопку в панели Pe4King — получили готовые тесты, не выходя из редактора.</p><p>Postman и APIDog — это отдельные приложения, никак не интегрированные с IDE.</p>' },
  'http-client':       { title:'HTTP клиент',                    text:'<p>Встроенный HTTP-клиент позволяет отправлять запросы к API прямо из Pe4King — точно так же как в Postman или APIDog, но не выходя из IDE.</p><p>Вы видите ответ сервера, заголовки, время выполнения и размер ответа. Запросы можно сохранять в коллекции для повторного использования.</p>' },
  'collections':       { title:'Коллекции запросов',             text:'<p>Коллекции — это папки с сохранёнными HTTP-запросами, похожие на закладки в браузере, только для API.</p><p>Вы сохраняете часто используемые запросы и можете запускать их в один клик, не вбивая URL и параметры каждый раз заново.</p><p>Запросы можно группировать по проектам или функциям API, а также экспортировать в pytest или REST Assured файлы.</p>' },
  'variables':         { title:'Переменные окружения',           text:'<p>Переменные позволяют хранить значения которые часто меняются — адрес сервера, токен авторизации, ID тестового пользователя.</p><p>Вместо того чтобы вписывать https://api.example.com в каждый запрос, вы пишете {{baseUrl}} и задаёте значение один раз.</p><p>Переменные могут быть глобальными (для всех коллекций) или привязанными к конкретной коллекции. Pe4King также импортирует переменные из Postman-коллекций автоматически.</p>' },
  'global-vars':       { title:'Глобальные переменные',          text:'<p>Глобальные переменные видны во всех коллекциях одновременно. Удобно для настроек которые не меняются между проектами — например базовый URL рабочего окружения или токен администратора.</p><p>Pe4King Desktop имеет отдельную вкладку ENV для управления глобальными и коллекционными переменными в одном месте.</p>' },
  'scripts':           { title:'Pre-request и Test скрипты',     text:'<p>Pre-request скрипт — это код который выполняется до отправки запроса: например для получения свежего токена авторизации или генерации данных.</p><p>Test-скрипт выполняется после получения ответа и содержит проверки: правильный ли статус, нужные ли поля, корректный ли формат.</p><p>Desktop и IDEA Plugin используют JavaScript (pm.test / pm.expect API). VS Code Extension — Python. Унификация на JavaScript запланирована в roadmap.</p>' },
  'runner':            { title:'Collection Runner',              text:'<p>Collection Runner запускает все запросы из коллекции автоматически, один за другим — как конвейер на заводе.</p><p>Он передаёт данные между запросами: например сохраняет ID пользователя из ответа на запрос создания, и использует его в следующем запросе.</p><p>В конце вы видите сводную таблицу: какие тесты прошли, какие упали, сколько времени занял каждый запрос.</p>' },
  'jsonpath':          { title:'JSONPath извлечение',            text:'<p>JSONPath — это язык запросов к JSON-данным. Например $.data.users[0].id извлечёт ID первого пользователя из ответа.</p><p>Pe4King использует JSONPath чтобы вытащить нужные значения из ответа сервера и сохранить их как переменные для следующих запросов.</p><p>Это основа для «цепочек» запросов: создал запись — получил её ID — использовал ID в следующем запросе.</p>' },
  'import-col':        { title:'Импорт из Postman',              text:'<p>Pe4King умеет импортировать готовые Postman Collection v2.1 файлы — со всеми папками, запросами, переменными и тест-скриптами.</p><p>После импорта коллекция сразу появляется в интерфейсе. Переменные из Postman ({{baseUrl}}, {{petId}} и т.д.) автоматически становятся переменными коллекции в Pe4King.</p><p>Это позволяет перенести существующие Postman-коллекции в Pe4King без ручного перенабора.</p>' },
  'req-params':        { title:'Параметры запроса',              text:'<p>Pe4King предоставляет табличный редактор для всех типов параметров: path params (части URL), query params (?key=value), заголовки и тело запроса.</p><p>Переключение между вкладками Params, Headers, Body, Scripts — всё в одном месте. Значения с {{переменными}} подставляются автоматически.</p>' },
  'resp-viewer':       { title:'Просмотр ответа',                text:'<p>Ответ сервера отображается в трёх режимах: Pretty (JSON с цветовой подсветкой и форматированием), Raw (сырой текст ответа) и Headers (все заголовки ответа).</p><p>Внизу показывается HTTP-статус, время выполнения в миллисекундах и размер ответа в байтах — всё необходимое для диагностики.</p>' },
  'prerequest':        { title:'Pre-request скрипты',            text:'<p>Pre-request скрипт выполняется до отправки HTTP-запроса. Типичные применения: получение OAuth-токена, генерация UUID для тестовых данных, подстановка timestamp, вычисление HMAC-подписи.</p><p>В Desktop используется JavaScript с pm.environment API. В VS Code Extension — Python. Унификация на JavaScript запланирована.</p>' },
  'quickjs':           { title:'QuickJS движок',                 text:'<p>QuickJS — это компактный JavaScript-интерпретатор написанный на C, встроенный прямо в Desktop-приложение Pe4King через Rust-биндинги (rquickjs).</p><p>Это означает что Desktop работает без Node.js, Python или любых других внешних зависимостей. Скрипты исполняются в изолированной sandbox-среде без доступа к файловой системе и сети.</p>' },
  'snippets':          { title:'Библиотека сниппетов',           text:'<p>Библиотека содержит готовые тест-сниппеты для типовых проверок: статус код, поле не пустое, поле равно значению, время ответа в пределах нормы и т.д.</p><p>Вставка одним кликом — не нужно вспоминать синтаксис. Сниппеты работают как строительные блоки: комбинируете нужные и получаете полноценный тест-скрипт.</p>' },
  'export-col':        { title:'Экспорт коллекций',              text:'<p>Собранную коллекцию запросов можно экспортировать как готовый тест-файл: pytest (.py) или REST Assured (.java).</p><p>Pe4King анализирует сохранённые запросы, test-сниппеты и JSONPath-извлечения и собирает из них полноценный тест-класс или тест-модуль, готовый к запуску в CI/CD.</p>' },
  'run-results':       { title:'Прогресс и результаты',          text:'<p>Во время прогона Collection Runner обновляет результаты в реальном времени: прогресс-бар, счётчик pass/fail и таблица с детализацией по каждому запросу.</p><p>По каждому запросу видно: метод, URL, HTTP-статус, время выполнения, количество прошедших и упавших тестов, и детализация каждого теста с сообщением об ошибке.</p>' },
  'run-vars':          { title:'Передача переменных между запросами', text:'<p>После каждого запроса Pe4King может извлечь значения из ответа (через JSONPath или из заголовков) и сохранить их как переменные для следующих запросов в цепочке.</p><p>Классический сценарий: POST /users → извлечь userId из ответа → GET /users/{{userId}} → проверить созданного пользователя → DELETE /users/{{userId}} → очистка.</p>' },
  'swagger-detect':    { title:'Swagger UI авто-обнаружение',    text:'<p>Многие серверы публикуют страницу с документацией API (Swagger UI). Pe4King умеет найти файл спецификации автоматически, даже если вы указали только главный адрес сервера.</p><p>Инструмент перебирает стандартные пути (/api/swagger.json, /v3/api-docs и т.д.) и сам находит спецификацию без вашего участия.</p><p>В Postman нужно самому найти прямую ссылку на JSON-файл спецификации. APIDog тоже поддерживает автообнаружение.</p>' },
  'zip':               { title:'ZIP-экспорт тестов',             text:'<p>Когда Pe4King генерирует тесты для REST Assured, их несколько файлов: основной тест-класс, BaseTest, build.gradle, конфигурация. Все файлы автоматически упаковываются в ZIP-архив.</p><p>Вы скачиваете один файл, распаковываете, открываете в IDE — и проект готов к запуску. Ни Postman, ни APIDog не предоставляют экспорт в pytest или REST Assured формат.</p>' },
  'offline':           { title:'Работа без интернета',           text:'<p>Pe4King работает полностью локально — он не отправляет данные на внешние серверы и не требует подключения к интернету.</p><p>Это критично для корпоративных сред где API-спецификации содержат конфиденциальную бизнес-логику — данные не покидают вашу сеть.</p><p>Postman требует аккаунт и синхронизирует коллекции через облако Postman Inc. APIDog — облачный сервис.</p>' },
  'free':              { title:'Бесплатность',                   text:'<p>Pe4King полностью бесплатен без скрытых ограничений — нет лимитов на количество запросов, коллекций, пользователей или проектов.</p><p>Нет подписки, нет «бесплатного плана с ограничениями» — просто установил и пользуешься всем функционалом.</p><p>Postman бесплатен для базового использования, но командные функции требуют платной подписки. APIDog предлагает freemium модель, AI-генерация тестов — платная функция.</p>' },
  'teamwork':          { title:'Командная работа / Cloud sync',  text:'<p>Это возможность работать над одними коллекциями и настройками вместе с командой — все видят актуальную версию и изменения синхронизируются автоматически.</p><p>Как Google Docs, только для API-тестов: один тестировщик добавил запрос, остальные сразу видят его в своём Pe4King.</p><p>В Pe4King эта функция в roadmap, в Postman и APIDog уже реализована.</p>' },
  'mock':              { title:'Mock-серверы',                   text:'<p>Mock-сервер имитирует настоящий API: вы обращаетесь к нему как к реальному серверу, а он возвращает заранее настроенные ответы.</p><p>Это нужно когда бэкенд ещё не готов, но фронтенд или тесты уже нужно разрабатывать — mock позволяет работать параллельно.</p><p>Pe4King планирует создавать mock-серверы автоматически из OpenAPI-спецификации. Postman и APIDog уже поддерживают mock-серверы.</p>' },
  'desktop':           { title:'Desktop-приложение',             text:'<p>Desktop Pe4King — обычная программа для Windows: скачал установщик, запустил, пользуешься — никакого VS Code или IntelliJ не нужно.</p><p>Приложение полностью автономно: не требует Rust, Python, Node.js или любых других дополнительных инструментов.</p><p>Postman Desktop доступен для Windows, Mac и Linux. APIDog тоже кроссплатформенный. Pe4King Desktop пока поддерживает только Windows.</p>' },
  'mac-linux':         { title:'Поддержка Mac и Linux',          text:'<p>VS Code Extension и IntelliJ IDEA Plugin Pe4King уже работают на Mac и Linux — устанавливаете из маркетплейса как обычно.</p><p>Standalone Desktop-приложение пока собирается только для Windows. Сборки для macOS и Linux запланированы, приоритет — macOS Apple Silicon.</p><p>Если ваша команда работает на Mac или Linux — уже сейчас можно пользоваться Pe4King через VS Code или IntelliJ.</p>' },
}
