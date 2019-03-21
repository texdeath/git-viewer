# Git-Viewer

## How to Development
```shell
yarn install # or npm install
yarn dev # or npm dev
```

### Structure
```shell
├── devtools # webpackやSSR用のexpressの設定
│   ├── development
│   └── production
├── dist
└── src
    ├── __tests__ # テストディレクトリ
    ├── assets # 静的ファイル
    ├── components # Viewコンポーネント(Stateless)
    ├── containers # Reduxとの連携コンポーネント
    ├── pages # Routerにつなぎ、実際にページに表示するコンポーネント
    ├── reducers # Reduxによるstate管理
    ├── sagas # Redux-sagaによる非同期管理
    └── services # 外部エンドポイントの管理
```
## Use Tool & Liblary
### Base
- TypeScript
### View
- React
    - React-router
### State Manager
- Redux
    - Redux-saga
- immer
### Style
- styled-components
### Module Bundle
- webpack
### Lint
- eslint
### Architecture
- SSR (Server-Side Rendering)
### Design Pattern
- ducks
### Fetch
- axios
- express
### Package Manager
- yarn