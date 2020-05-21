import { Observable } from 'rxjs';

export const onEmit = <T>(source$: Observable<T>, nextFn: (value: T) => void) =>
  source$.subscribe(nextFn, console.error);
