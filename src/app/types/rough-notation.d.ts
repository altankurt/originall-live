import 'rough-notation';

declare module 'rough-notation/lib/model' {
  export interface RoughAnnotationConfig {
    roughness?: number;
    bowing?: number;
    roughOptions?: {
      roughness?: number;
      bowing?: number;
    };
    animationDuration?: number;
  }
}
