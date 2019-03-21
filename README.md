# Git-Viewer

## How to Development
```
yarn install # or npm install
yarn dev # or npm dev
```

### Structure
```
├── devtools // webpackやSSR用のexpressの設定
│   ├── development
│   └── production
├── dist
└── src
    ├── __tests__ // テストディレクトリ
    ├── assets // 静的ファイル
    ├── components // Viewコンポーネント(Stateless)
    ├── containers // Reduxとの連携コンポーネント
    ├── pages // Routerにつなぎ、実際にページに表示するコンポーネント
    ├── reducers // Reduxによるstate管理
    ├── sagas // Redux-sagaによる非同期管理
    └── services // 外部エンドポイントの管理
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
### Testing
- jest & enzyme
### Lint
- eslint
### Architecture
- SSR (Server-Side Rendering)
### Design Pattern
- ducks (a modern and optimized way to work with redux structure)
### Fetch
- axios
- express
### Package Manager
yarn