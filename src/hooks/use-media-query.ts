import { useState, useEffect } from "react";

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    // 초기 설정
    setMatches(mediaQuery.matches);

    // 화면 크기 변경 시 호출될 함수
    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // 컴포넌트가 마운트되면 미디어 쿼리 리스너를 추가
    mediaQuery.addEventListener("change", handleChange);

    // 컴포넌트가 언마운트되면 리스너를 제거
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
}
