import { createContext, useContext, useState, ReactNode } from 'react';
import type { Course } from '@types';

type FileField = 'thumbnail' | 'trailer';

type CourseContextType = {
  course: Course | null;
  setCourse: (course: Course) => void;
  files: Partial<Record<FileField, File>>;
  setFile: (field: FileField, file: File) => void;
};

const CourseContext = createContext<CourseContextType | undefined>(undefined);

export const CourseProvider = ({ children }: { children: ReactNode }) => {
  const [course, setCourse] = useState<Course | null>(null);
  const [files, setFiles] = useState<Partial<Record<FileField, File>>>({});

  const setFile = (field: FileField, file: File) => {
    setFiles((prev) => ({ ...prev, [field]: file }));
  };

  return (
    <CourseContext.Provider value={{ course, setCourse, files, setFile }}>
      {children}
    </CourseContext.Provider>
  );
};

export const useCourse = (): CourseContextType => {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error('useCourse must be used within a CourseProvider');
  }
  return context;
};
