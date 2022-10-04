# Курс [OTUS JavaScript Developer. Basic](https://otus.ru/lessons/javascript-basic/)

[![Actions Status](https://github.com/alexey-sidorov-dev/otus-typescript-game-of-life/workflows/PR%20Sanity%20Check/badge.svg)](https://github.com/alexey-sidorov-dev/otus-typescript-game-of-life/actions)
[![Actions Status](https://github.com/alexey-sidorov-dev/otus-typescript-game-of-life/workflows/Coverage/badge.svg)](https://github.com/alexey-sidorov-dev/otus-typescript-game-of-life/actions)
[![Actions Status](https://github.com/alexey-sidorov-dev/otus-typescript-game-of-life/workflows/Add%20CodeSandbox%20link/badge.svg)](https://github.com/alexey-sidorov-dev/otus-typescript-game-of-life/actions)
[![Actions Status](https://github.com/alexey-sidorov-dev/otus-typescript-game-of-life/workflows/Deploy%20to%20Github%20Pages/badge.svg)](https://alexey-sidorov-dev.github.io/otus-typescript-game-of-life/)
[![LICENSE](https://img.shields.io/badge/license-ISC-brightgreen.svg)](ISC)

## Домашнее задание "Игра Жизнь"

Настроить Webpack для работы с Typescript, добавить конфигурацию к Eslint, реализовать приложение "Игра Жизнь".

### Цель

Создать базовый скелет для дальнейшей разработки, который будет включать в себя настройки Babel, Webpack, Typescript.

В задании тренируются навыки:

- настройки окружения;
- создания проекта с 0.

### Необходимо

- создать новый репозиторий;
- инициализировать его файлом .gitignore;
- создать новую ветку;
- настроить линтинг и actions, настроить автодеплой из PR;
- сконфигурировать Webpack;
- добавить поддержку Typescript;
- добавить поддержку импорта CSS файлов;
- реализовать приложение "Игра Жизнь" на языке Typescript;
- ссылку на задеплоенную страницу и на пуллреквест сбросить в чат с преподавателем;
- настроить Jest и написать тесты на приложение.

### Критерии оценки

- игра должна поддерживать отображение нескольких независимых полей на странице;
- настроена поддержка Typescript через Babel - 5 баллов;
- реализовано приложение "Игра Жизнь" - 5 баллов;
- реализовано взаимодействие с полем (клик по ячейке меняет ее состояние) - 2 балла;
- реализован автостоп игры, когда все клетки умерли - 2 балла;
- реализован механизм изменения размеров поля (два input поля типа number), в т. ч. на лету (при увеличении - заполнение мертвыми клетками, при уменьшении - просто уничтожение ячеек) - 2 балла;
- реализован механизм изменения скорости игры (input типа range) - 2 балла;
- реализована подсветка клеток, которые, являясь живыми, должны умереть в следующем поколении (например, мертвые - белый цвет, живые - черный, обреченные на смерть - синий) - 2 балла.

Задание считается принятым от 16 баллов.

Задание не принимается:

- без тестов
- без настроенного линтинга, хуков, деплоя приложения через github actions
