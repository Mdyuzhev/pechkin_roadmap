# downloads/

Папка для установщиков Pe4King. Файлы кладутся вручную при обновлении версий.

## Структура файлов

```
downloads/
├── Pe4King-X.X.XX.vsix              ← VS Code Extension
├── Pe4King-IDEA-X.X.XX.zip          ← IntelliJ IDEA Plugin
├── Pe4King_X.X.X_x64-setup.exe      ← Windows Desktop (NSIS)
└── Pe4King_X.X.X_x64_en-US.msi     ← Windows Desktop (MSI)
```

## Где взять файлы

| Файл | Источник |
|------|----------|
| `.vsix` | `E:\Pe4King\vscode\distr\` после `/release` |
| `.zip` (IDEA) | `E:\Pe4King\idea\build\distributions\` после `.\gradlew buildPlugin` |
| `.exe` / `.msi` | `E:\Pe4King\desktop\src-tauri\target\release\bundle\` после `npm run tauri build` |

## Обновление ссылок

После добавления файлов с новыми версиями — обновить версии в `js/data.js`:
```js
const VSIX_VERSION  = '1.0.87'   // ← обновить
const IDEA_VERSION  = '1.0.77'   // ← обновить
const WIN_VERSION   = '0.1.0'    // ← обновить
```
