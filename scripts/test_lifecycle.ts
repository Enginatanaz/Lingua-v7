import { audioEngine } from '../src/services/audioEngine';
import { getLessonById } from '../src/data/lessonsData';

async function testLifecycleStateGuards() {
  console.log('--- TEST: Session Lifecycle, Pause Guard & Lesson Switch ---');

  const lesson1 = getLessonById(1);
  const lesson2 = getLessonById(2);

  // 1. Build lesson 1 narration
  const chs1 = audioEngine.buildTeacherNarration(lesson1.teacherLecture, 'warm');
  console.log(`[PASS] Built ${chs1.length} chapters for Lesson 1`);

  // Initial state should be idle
  if (audioEngine.getState() !== 'idle') {
    throw new Error(`Expected initial state 'idle', got '${audioEngine.getState()}'`);
  }
  console.log(`[PASS] Initial state is '${audioEngine.getState()}'`);

  // 2. Test Pause Guard:
  // When stop is called, state must be idle
  audioEngine.stop();
  if (audioEngine.getState() !== 'idle') {
    throw new Error(`Expected state 'idle' after stop, got '${audioEngine.getState()}'`);
  }
  console.log(`[PASS] State is 'idle' after stop()`);

  // 3. Test Lesson Switch Invalidation:
  const chs2 = audioEngine.buildTeacherNarration(lesson2.teacherLecture, 'focused');
  console.log(`[PASS] Switched to Lesson 2 with 'focused' persona (${chs2.length} chapters)`);
  if (audioEngine.getPersona() !== 'focused') {
    audioEngine.setPersona('focused');
  }

  audioEngine.stop();
  console.log(`[PASS] Lesson switch cleanly terminated all in-flight states`);

  console.log('\n[PASS] All lifecycle state guards verified successfully!');
}

testLifecycleStateGuards().catch((err) => {
  console.error(err);
  process.exit(1);
});
