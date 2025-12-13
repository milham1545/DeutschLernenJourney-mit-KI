// Progress management utilities using localStorage

export const saveProgress = (level: string, subBab: string): void => {
  const key = `progress_${level}_${subBab}`;
  localStorage.setItem(key, "done");
};

export const loadProgress = (level: string): Record<string, string> => {
  const progress: Record<string, string> = {};
  const prefix = `progress_${level}_`;
  
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith(prefix)) {
      const subBab = key.replace(prefix, "");
      progress[subBab] = localStorage.getItem(key) || "incomplete";
    }
  }
  
  return progress;
};

export const isSubSectionComplete = (level: string, subBab: string): boolean => {
  const key = `progress_${level}_${subBab}`;
  return localStorage.getItem(key) === "done";
};

export const clearProgress = (): void => {
  const keysToRemove: string[] = [];
  
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith("progress_")) {
      keysToRemove.push(key);
    }
  }
  
  keysToRemove.forEach((key) => localStorage.removeItem(key));
};

export const clearLevelProgress = (level: string): void => {
  const keysToRemove: string[] = [];
  const prefix = `progress_${level}_`;
  
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith(prefix)) {
      keysToRemove.push(key);
    }
  }
  
  keysToRemove.forEach((key) => localStorage.removeItem(key));
};

export const getOverallProgress = (): { completed: number; total: number } => {
  let completed = 0;
  let total = 0;
  
  // Count all progress keys
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith("progress_")) {
      total++;
      if (localStorage.getItem(key) === "done") {
        completed++;
      }
    }
  }
  
  return { completed, total };
};

// Flashcard position utilities
export const saveLastCardPosition = (level: string, index: number): void => {
  const key = `lastCard_${level}`;
  localStorage.setItem(key, index.toString());
};

export const loadLastCardPosition = (level: string): number => {
  const key = `lastCard_${level}`;
  const saved = localStorage.getItem(key);
  return saved ? parseInt(saved, 10) : 0;
};
