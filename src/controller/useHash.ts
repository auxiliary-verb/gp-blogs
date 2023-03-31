import { useCallback } from 'react'
import { useRouter } from 'next/router'

/**
 * URL のハッシュフラグメント部分を扱うためのフックです。
 *
 * 次のようにすると、`hash` 変数に URL の `#` 以降の値が格納されます。
 * URL の `#` 以降の値を変更したいときは、`setHash` 関数を使用します。
 *
 * ```
 * const [hash, setHash] = useHash()
 * ```
 */
export function useHash(): [string, (newHash: string) => void] {
  const router = useRouter();
  const hash = extractHash(router.asPath);
  const setHash = useCallback((newHash: string) => {
    // ブラウザの履歴に残すなら、ここを router.push に変えれば OK
    router.push({ hash: newHash }, undefined, { shallow: true });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return [hash, setHash];
}

// URL の # 以降の文字列を取り出すユーティリティ
function extractHash(url: string): string {
  return url.split('#')[1] ?? '';
}
