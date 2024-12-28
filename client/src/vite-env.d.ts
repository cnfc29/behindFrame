/// <reference types="vite/client" />

// Почему интерфейсы в конфиге env vite?
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
