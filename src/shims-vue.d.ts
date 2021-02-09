/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}


// declaration.d.ts
declare module '*.module.scss' {
  const content: Record<string, string>;
  export default content;
}

// declaration.d.ts
declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

declare module "*.png";
declare module "*.svg";
