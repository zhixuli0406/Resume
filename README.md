# 李力智栩 個人履歷網站

這是一個使用 React + TypeScript + Tailwind CSS 建立的現代化響應式個人履歷網站。

## 專案特色

### 🎨 設計特點
- **響應式設計**: 完美適應各種螢幕尺寸，從手機到桌面電腦
- **現代化 UI**: 使用 Tailwind CSS 打造簡潔優雅的設計
- **流暢動畫**: 包含淡入、滑動等過渡動畫效果
- **漸層背景**: 精美的漸層色彩搭配

### 🛠️ 技術棧
- **前端框架**: React 18 + TypeScript
- **樣式框架**: Tailwind CSS 3.x
- **圖示庫**: React Icons (Feather Icons)
- **郵件服務**: EmailJS（聯絡表單功能）
- **建置工具**: Create React App

### 📱 功能模組

#### 1. 個人資訊區塊
- 個人照片展示
- 基本聯絡資訊
- 專業簡介
- 個人哲學座右銘

#### 2. 工作經驗
- 時間軸式展示
- 詳細職責描述
- 現職標示
- 公司與職位資訊

#### 3. 核心技能
- 技能分類展示
- 圖示化技能組
- 持續學習項目

#### 4. 教學經驗
- 學術界合作經驗
- 企業培訓記錄
- 教學理念闡述

#### 5. 響應式導航
- 桌面版側邊欄導航
- 手機版可收合選單
- 平滑捲動錨點定位

## 安裝與執行

### 前置需求
- Node.js 14.x 或以上版本
- npm 或 yarn 包管理器

### 安裝依賴
```bash
# 使用 npm
npm install

# 或使用 yarn
yarn install
```

### 開發模式執行
```bash
# 使用 npm
npm start

# 或使用 yarn
yarn start
```
在瀏覽器中開啟 [http://localhost:3000](http://localhost:3000) 即可預覽網站。

### 建置生產版本
```bash
# 使用 npm
npm run build

# 或使用 yarn
yarn build
```
建置完成的檔案將會在 `build` 資料夾中。

### 執行測試
```bash
# 使用 npm
npm test

# 或使用 yarn
yarn test
```

## 專案結構

```
src/
├── components/          # React 元件
│   ├── Navigation.tsx   # 導航元件
│   ├── Header.tsx       # 個人資訊標題
│   ├── Experience.tsx   # 工作經驗
│   ├── Skills.tsx       # 核心技能
│   └── Teaching.tsx     # 教學經驗
├── Layout/             # 版面配置
│   └── IndexLayout.tsx # 主要版面配置
├── index.css          # 全域樣式 (Tailwind CSS)
└── index.tsx          # 應用程式進入點
```

## 自訂修改

### 更新個人資訊
1. 修改 `src/components/Header.tsx` 中的個人基本資訊
2. 更新 `src/components/Experience.tsx` 中的工作經驗內容
3. 調整 `src/components/Skills.tsx` 中的技能清單
4. 編輯 `src/components/Teaching.tsx` 中的教學經驗

### 更換個人照片
將個人照片放置在 `public/image/` 資料夾中，並更新對應的檔案路徑。

### 修改色彩主題
在 `tailwind.config.js` 中調整色彩設定，或在 `src/index.css` 中修改自訂樣式。

### 聯絡表單整合
使用 EmailJS 服務整合聯絡表單功能：
1. 註冊 EmailJS 帳號
2. 設定環境變數
3. 在對應元件中實作表單邏輯

## 部署說明

### Vercel 部署
1. 將專案推送至 GitHub
2. 連接 Vercel 帳號
3. 匯入 GitHub 專案
4. 自動部署完成

### Netlify 部署
1. 執行 `npm run build` 建置專案
2. 將 `build` 資料夾上傳至 Netlify
3. 設定自訂網域名稱（可選）

## 瀏覽器支援
- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

## 授權條款
本專案採用 MIT 授權條款。

## 聯絡資訊
- **姓名**: 李力智栩 (Zhi-Xu Li)
- **電話**: 0971753062
- **信箱**: zhixuli0406@gmail.com
- **LinkedIn**: [https://www.linkedin.com/in/zhixuli0406/](https://www.linkedin.com/in/zhixuli0406/)

---

*「Be determined. Instead of intending to just try, do it.」— Yoda, STAR WARS*
