import { useEffect } from 'react';

const DEFAULT_TITLE = 'Finmat Sacco | Be financially independent';

export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} | Finmat Sacco` : DEFAULT_TITLE;
  }, [title]);
}
