import React from 'react';
import { TeacherLectureData, LessonData } from '../../types/lesson';
import { LiveTeacherStudio } from './LiveTeacherStudio';

interface TeacherAudioPlayerProps {
  lecture: TeacherLectureData;
  lesson?: LessonData;
}

export const TeacherAudioPlayer: React.FC<TeacherAudioPlayerProps> = ({ lecture, lesson }) => {
  return <LiveTeacherStudio lecture={lecture} lesson={lesson} />;
};
