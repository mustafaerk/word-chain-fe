import React from "react";

import { WordItem } from "components";

const WordList = () => {
  return (
    <div className="h-2/3 overflow-y-auto">
      <WordItem englishWord="Apple" nativeWord="Elma" />
      <WordItem englishWord="Enemy" nativeWord="Düşman" />
      <WordItem englishWord="Yourself" nativeWord="Kendine" />
      <WordItem englishWord="Found" nativeWord="Bulundu" />
      <WordItem englishWord="Door" nativeWord="Kapı" />
      <WordItem englishWord="Door" nativeWord="Kapı" />
      <WordItem englishWord="Door" nativeWord="Kapı" />
      <WordItem englishWord="Door" nativeWord="Kapı" />
      <WordItem englishWord="Door" nativeWord="Kapı" />
      <WordItem englishWord="Door" nativeWord="Kapı" />
      <WordItem englishWord="Door" nativeWord="Kapı" />
    </div>
  );
};

export default WordList;
