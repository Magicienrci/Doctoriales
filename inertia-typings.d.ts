// inertia-typings.d.ts
import { Inertia } from '@inertiajs/inertia';

declare module '@inertiajs/inertia' {
  interface Inertia {
    off(event: string, callback: () => void): void;
  }
}
