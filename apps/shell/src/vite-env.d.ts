/// <reference types="vite/client" />

declare module 'remoteApp/App';

interface ImportMetaEnv {
	readonly VITE_APP_TITLE: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
