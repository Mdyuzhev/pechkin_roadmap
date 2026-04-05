export default {
  name: 'HeroSection',
  template: `
    <div class="wrap">
      <div class="hero">
        <div class="badge"><span class="dot"></span>API Test Generator · v1.0.87</div>
        <h1>Генерация тестов из<br/><em>OpenAPI-спецификации</em></h1>
        <p>Детерминированный генератор скелетных API-тестов. Schema-aware assertions, негативные сценарии, анализ качества тестов. Встроен в VS Code, IntelliJ IDEA и доступен как Desktop-приложение.</p>
        <div class="stats">
          <div class="stat"><div class="sval">9<b>K</b></div><div class="slbl">тестов / сек</div></div>
          <div class="stat"><div class="sval"><b>3</b></div><div class="slbl">платформы</div></div>
          <div class="stat"><div class="sval"><b>3</b></div><div class="slbl">формата вывода</div></div>
          <div class="stat"><div class="sval">L<b>0–6</b></div><div class="slbl">Oracle Depth</div></div>
        </div>
      </div>

      <!-- Текущее состояние продукта -->
      <div class="current-state fi">
        <div class="cs-label">Текущее состояние · апрель 2026</div>
        <div class="cs-grid">

          <div class="cs-platform">
            <div class="cs-platform-name">🧩 VS Code Extension</div>
            <div class="cs-platform-version">v1.0.87 · Win / Mac / Linux</div>
            <ul class="cs-features">
              <li>Генерация pytest, REST Assured, Postman</li>
              <li>HTTP-клиент с Collection Runner</li>
              <li>Импорт Postman v2.1 коллекций</li>
              <li>EVA — анализ качества тестов</li>
              <li>Test-скрипты на Python</li>
            </ul>
          </div>

          <div class="cs-platform">
            <div class="cs-platform-name">🔌 IntelliJ IDEA Plugin</div>
            <div class="cs-platform-version">v1.0.77 · Win / Mac / Linux</div>
            <ul class="cs-features">
              <li>Генерация pytest, REST Assured, Postman</li>
              <li>Kotlin-реализация на GraalJS</li>
              <li>Полный паритет матчеров с VS Code</li>
              <li>TestCase-style renderer</li>
            </ul>
          </div>

          <div class="cs-platform">
            <div class="cs-platform-name">🖥 Desktop App</div>
            <div class="cs-platform-version">v0.1.0 beta · Windows</div>
            <ul class="cs-features">
              <li>Полноценный HTTP-клиент (Postman-стиль)</li>
              <li>Collection Runner с pm.* JavaScript API</li>
              <li>ENV-вкладка для переменных</li>
              <li>Импорт + переменные из Postman коллекций</li>
              <li>Встроенный QuickJS — без зависимостей</li>
            </ul>
          </div>

        </div>

        <div class="cs-gap">
          <div class="cs-gap-label">⚠ Известное ограничение</div>
          <div class="cs-gap-text">
            Desktop и IDEA Plugin используют JavaScript (pm.test / pm.expect) для тест-скриптов,
            VS Code Extension — Python. Одна Postman-коллекция не запустится одинаково на всех трёх платформах.
            <strong>Унификация на JavaScript запланирована в roadmap.</strong>
          </div>
        </div>
      </div>
    </div>
  `
}
