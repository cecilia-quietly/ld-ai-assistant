/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Save, 
  RotateCcw, 
  Plus, 
  Trash2, 
  Lock, 
  Unlock, 
  Clock, 
  FileText, 
  Layers, 
  HelpCircle,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { Module, Course, Discipline } from '../data';

interface AdminEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetType: 'module' | 'chapter';
  targetModule: Module | null;
  targetCourse: Course | null;
  onSaveModule: (updatedModule: Module) => void;
  onSaveCourse: (moduleId: string, updatedCourse: Course) => void;
  onResetToDefault?: () => void;
}

export const AdminEditorModal: React.FC<AdminEditorModalProps> = ({
  isOpen,
  onClose,
  targetType,
  targetModule,
  targetCourse,
  onSaveModule,
  onSaveCourse,
  onResetToDefault,
}) => {
  // Module Form State
  const [modTitle, setModTitle] = useState('');
  const [modSubtitle, setModSubtitle] = useState('');
  const [modDuration, setModDuration] = useState('');
  const [modPurpose, setModPurpose] = useState('');
  const [modOutcome, setModOutcome] = useState('');
  const [modIsLocked, setModIsLocked] = useState(false);
  const [modIsOptional, setModIsOptional] = useState(false);
  const [modImageUrl, setModImageUrl] = useState('');

  // Course / Chapter Form State
  const [courseTitle, setCourseTitle] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [courseDuration, setCourseDuration] = useState('');
  const [courseFormat, setCourseFormat] = useState<'interactive' | 'video' | 'podcast' | 'quiz' | 'document'>('interactive');
  const [courseSlideDeckUrl, setCourseSlideDeckUrl] = useState('');
  const [courseOutcome, setCourseOutcome] = useState('');
  const [courseQuestions, setCourseQuestions] = useState<string[]>([]);
  const [courseDisciplines, setCourseDisciplines] = useState<Discipline[]>([]);

  // Active Tab for Chapter Editing
  const [activeTab, setActiveTab] = useState<'general' | 'questions' | 'playbooks'>('general');
  const [savedToast, setSavedToast] = useState(false);

  useEffect(() => {
    if (targetType === 'module' && targetModule) {
      setModTitle(targetModule.title || '');
      setModSubtitle(targetModule.subtitle || '');
      setModDuration(targetModule.duration || '');
      setModPurpose(targetModule.purpose || '');
      setModOutcome(targetModule.outcome || '');
      setModIsLocked(targetModule.isLocked !== undefined ? targetModule.isLocked : targetModule.number >= 2);
      setModIsOptional(!!targetModule.isOptional);
      setModImageUrl(targetModule.imageUrl || '');
    } else if (targetType === 'chapter' && targetCourse) {
      setCourseTitle(targetCourse.title || '');
      setCourseDescription(targetCourse.description || '');
      setCourseDuration(targetCourse.duration || '');
      setCourseFormat(targetCourse.format || 'interactive');
      setCourseSlideDeckUrl(targetCourse.slideDeckUrl || '');
      setCourseOutcome(targetCourse.outcome || '');
      setCourseQuestions(targetCourse.discussionQuestions ? [...targetCourse.discussionQuestions] : []);
      setCourseDisciplines(
        targetCourse.disciplines
          ? targetCourse.disciplines.map(d => ({ ...d }))
          : []
      );
      setActiveTab('general');
    }
  }, [isOpen, targetType, targetModule, targetCourse]);

  if (!isOpen) return null;

  const handleSave = () => {
    if (targetType === 'module' && targetModule) {
      const updated: Module = {
        ...targetModule,
        title: modTitle.trim() || targetModule.title,
        subtitle: modSubtitle.trim() || targetModule.subtitle,
        duration: modDuration.trim() || undefined,
        purpose: modPurpose.trim() || targetModule.purpose,
        outcome: modOutcome.trim() || undefined,
        isLocked: modIsLocked,
        isOptional: modIsOptional,
        imageUrl: modImageUrl.trim() || targetModule.imageUrl,
      };
      onSaveModule(updated);
      setSavedToast(true);
      setTimeout(() => {
        setSavedToast(false);
        onClose();
      }, 700);
    } else if (targetType === 'chapter' && targetCourse) {
      const updated: Course = {
        ...targetCourse,
        title: courseTitle.trim() || targetCourse.title,
        description: courseDescription.trim() || targetCourse.description,
        duration: courseDuration.trim() || undefined,
        format: courseFormat,
        slideDeckUrl: courseSlideDeckUrl.trim() || undefined,
        outcome: courseOutcome.trim() || undefined,
        discussionQuestions: courseQuestions.filter(q => q.trim().length > 0),
        disciplines: courseDisciplines.filter(d => d.title.trim().length > 0),
      };
      const resolvedModuleId = targetModule?.id || (targetCourse as any).moduleId || '';
      onSaveCourse(resolvedModuleId, updated);
      setSavedToast(true);
      setTimeout(() => {
        setSavedToast(false);
        onClose();
      }, 700);
    }
  };

  // Question helpers
  const handleAddQuestion = () => {
    setCourseQuestions(prev => [...prev, '']);
  };

  const handleUpdateQuestion = (index: number, val: string) => {
    setCourseQuestions(prev => {
      const next = [...prev];
      next[index] = val;
      return next;
    });
  };

  const handleDeleteQuestion = (index: number) => {
    setCourseQuestions(prev => prev.filter((_, i) => i !== index));
  };

  // Playbook / Discipline helpers
  const handleAddDiscipline = () => {
    const newId = `discipline-${Date.now()}`;
    setCourseDisciplines(prev => [
      ...prev,
      {
        id: newId,
        title: 'New Playbook Topic',
        description: 'Provide an operational playbook or workflow instructions for this topic.'
      }
    ]);
  };

  const handleUpdateDiscipline = (index: number, field: 'title' | 'description', val: string) => {
    setCourseDisciplines(prev => {
      const next = [...prev];
      next[index] = { ...next[index], [field]: val };
      return next;
    });
  };

  const handleDeleteDiscipline = (index: number) => {
    setCourseDisciplines(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[500] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/70 backdrop-blur-sm">
        <motion.div 
          initial={{ opacity: 0, scale: 0.96, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 10 }}
          className="bg-white rounded-2xl shadow-2xl border border-brand-line w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden text-brand-ink"
        >
          {/* Header */}
          <div className="px-6 py-4 border-b border-brand-line flex items-center justify-between bg-brand-bg/60">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-900 rounded-md text-[10px] font-bold uppercase tracking-wider">
                Admin Editor
              </span>
              <h2 className="text-lg font-serif font-bold truncate max-w-md">
                {targetType === 'module' 
                  ? `Edit Module: ${targetModule?.title || ''}`
                  : `Edit Chapter: ${targetCourse?.title || ''}`}
              </h2>
            </div>
            <button 
              onClick={onClose}
              className="p-1.5 rounded-lg text-brand-muted hover:text-brand-ink hover:bg-black/5 transition-colors"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 overflow-y-auto flex-1 space-y-6 text-sm">
            {targetType === 'module' ? (
              <div className="space-y-5">
                {/* Publishing status */}
                <div className="p-4 rounded-xl border border-brand-line bg-brand-bg/40 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-brand-ink">Publish Status</span>
                      {modIsLocked ? (
                        <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-medium">
                          <Lock size={11} /> Locked / Draft
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 font-medium">
                          <Unlock size={11} /> Published
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-brand-muted">
                      {modIsLocked 
                        ? 'Only administrators can view and interact with this module. Regular learners will see the Coming Soon lock.'
                        : 'Active and available to all Quietly team members in the curriculum.'}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setModIsLocked(prev => !prev)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                      modIsLocked
                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm'
                        : 'bg-amber-600 hover:bg-amber-700 text-white shadow-sm'
                    }`}
                  >
                    {modIsLocked ? (
                      <>
                        <Unlock size={13} />
                        <span>Publish Now</span>
                      </>
                    ) : (
                      <>
                        <Lock size={13} />
                        <span>Lock as Draft</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-muted mb-1.5">
                      Module Title
                    </label>
                    <input 
                      type="text"
                      value={modTitle}
                      onChange={e => setModTitle(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-lg border border-brand-line bg-white focus:outline-none focus:ring-2 focus:ring-brand-ink/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-muted mb-1.5">
                      Subtitle / Tagline
                    </label>
                    <input 
                      type="text"
                      value={modSubtitle}
                      onChange={e => setModSubtitle(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-lg border border-brand-line bg-white focus:outline-none focus:ring-2 focus:ring-brand-ink/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-muted mb-1.5">
                      Duration
                    </label>
                    <input 
                      type="text"
                      value={modDuration}
                      onChange={e => setModDuration(e.target.value)}
                      placeholder="e.g. Approx. 1.5 hours"
                      className="w-full px-3.5 py-2 rounded-lg border border-brand-line bg-white focus:outline-none focus:ring-2 focus:ring-brand-ink/20"
                    />
                  </div>

                  <div className="flex items-center pt-6">
                    <label className="flex items-center gap-2 cursor-pointer select-none">
                      <input 
                        type="checkbox"
                        checked={modIsOptional}
                        onChange={e => setModIsOptional(e.target.checked)}
                        className="rounded border-brand-line text-brand-ink focus:ring-brand-ink h-4 w-4"
                      />
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-ink">
                        Mark as Optional Module
                      </span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-muted mb-1.5">
                    Purpose / Executive Summary
                  </label>
                  <textarea 
                    rows={3}
                    value={modPurpose}
                    onChange={e => setModPurpose(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-lg border border-brand-line bg-white focus:outline-none focus:ring-2 focus:ring-brand-ink/20 text-xs leading-relaxed"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-muted mb-1.5">
                    Learning Outcomes (Bullet points)
                  </label>
                  <textarea 
                    rows={4}
                    value={modOutcome}
                    onChange={e => setModOutcome(e.target.value)}
                    placeholder="• Outcome 1&#10;• Outcome 2&#10;• Outcome 3"
                    className="w-full px-3.5 py-2 rounded-lg border border-brand-line bg-white focus:outline-none focus:ring-2 focus:ring-brand-ink/20 text-xs leading-relaxed"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-muted mb-1.5">
                    Banner Image URL
                  </label>
                  <input 
                    type="text"
                    value={modImageUrl}
                    onChange={e => setModImageUrl(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-lg border border-brand-line bg-white focus:outline-none focus:ring-2 focus:ring-brand-ink/20 text-xs font-mono"
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-5">
                {/* Navigation Tabs for Chapter */}
                <div className="flex border-b border-brand-line gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveTab('general')}
                    className={`pb-2 px-3 text-xs font-bold uppercase tracking-wider border-b-2 transition-all flex items-center gap-1.5 ${
                      activeTab === 'general'
                        ? 'border-brand-ink text-brand-ink'
                        : 'border-transparent text-brand-muted hover:text-brand-ink'
                    }`}
                  >
                    <FileText size={13} />
                    <span>Overview & Info</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab('questions')}
                    className={`pb-2 px-3 text-xs font-bold uppercase tracking-wider border-b-2 transition-all flex items-center gap-1.5 ${
                      activeTab === 'questions'
                        ? 'border-brand-ink text-brand-ink'
                        : 'border-transparent text-brand-muted hover:text-brand-ink'
                    }`}
                  >
                    <HelpCircle size={13} />
                    <span>Questions ({courseQuestions.length})</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab('playbooks')}
                    className={`pb-2 px-3 text-xs font-bold uppercase tracking-wider border-b-2 transition-all flex items-center gap-1.5 ${
                      activeTab === 'playbooks'
                        ? 'border-brand-ink text-brand-ink'
                        : 'border-transparent text-brand-muted hover:text-brand-ink'
                    }`}
                  >
                    <Layers size={13} />
                    <span>Playbooks ({courseDisciplines.length})</span>
                  </button>
                </div>

                {activeTab === 'general' && (
                  <div className="space-y-4 pt-1">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-brand-muted mb-1.5">
                        Chapter Title
                      </label>
                      <input 
                        type="text"
                        value={courseTitle}
                        onChange={e => setCourseTitle(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-lg border border-brand-line bg-white focus:outline-none focus:ring-2 focus:ring-brand-ink/20"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-brand-muted mb-1.5">
                          Duration
                        </label>
                        <input 
                          type="text"
                          value={courseDuration}
                          onChange={e => setCourseDuration(e.target.value)}
                          placeholder="e.g. 30 mins"
                          className="w-full px-3.5 py-2 rounded-lg border border-brand-line bg-white focus:outline-none focus:ring-2 focus:ring-brand-ink/20"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-brand-muted mb-1.5">
                          Format
                        </label>
                        <select 
                          value={courseFormat}
                          onChange={e => setCourseFormat(e.target.value as any)}
                          className="w-full px-3.5 py-2 rounded-lg border border-brand-line bg-white focus:outline-none focus:ring-2 focus:ring-brand-ink/20"
                        >
                          <option value="interactive">Interactive Playbook</option>
                          <option value="video">Video Presentation</option>
                          <option value="podcast">Podcast / Audio</option>
                          <option value="quiz">Interactive Assessment</option>
                          <option value="document">Document / Reading</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-brand-muted mb-1.5">
                        Slide Deck / Document URL (Optional)
                      </label>
                      <input 
                        type="text"
                        value={courseSlideDeckUrl}
                        onChange={e => setCourseSlideDeckUrl(e.target.value)}
                        placeholder="e.g. /Quietly_LD_Module_1_4_How_Other_Agencies_Do_It.pdf"
                        className="w-full px-3.5 py-2 rounded-lg border border-brand-line bg-white focus:outline-none focus:ring-2 focus:ring-brand-ink/20 font-mono text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-brand-muted mb-1.5">
                        Chapter Description / Summary
                      </label>
                      <textarea 
                        rows={3}
                        value={courseDescription}
                        onChange={e => setCourseDescription(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-lg border border-brand-line bg-white focus:outline-none focus:ring-2 focus:ring-brand-ink/20 text-xs leading-relaxed"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-brand-muted mb-1.5">
                        Learning Outcomes (Bullet points)
                      </label>
                      <textarea 
                        rows={4}
                        value={courseOutcome}
                        onChange={e => setCourseOutcome(e.target.value)}
                        placeholder="• Outcome 1&#10;• Outcome 2"
                        className="w-full px-3.5 py-2 rounded-lg border border-brand-line bg-white focus:outline-none focus:ring-2 focus:ring-brand-ink/20 text-xs leading-relaxed"
                      />
                    </div>
                  </div>
                )}

                {activeTab === 'questions' && (
                  <div className="space-y-4 pt-1">
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-brand-muted">
                        "To Consider As You Learn" discussion prompts shown to learners.
                      </p>
                      <button
                        type="button"
                        onClick={handleAddQuestion}
                        className="px-2.5 py-1 bg-brand-ink text-brand-bg rounded-lg text-xs font-semibold flex items-center gap-1 hover:opacity-90"
                      >
                        <Plus size={12} />
                        <span>Add Question</span>
                      </button>
                    </div>

                    {courseQuestions.length === 0 ? (
                      <div className="p-8 text-center border border-dashed border-brand-line rounded-xl text-brand-muted text-xs">
                        No discussion questions added yet. Click "Add Question" above.
                      </div>
                    ) : (
                      <div className="space-y-2.5 max-h-[350px] overflow-y-auto pr-1">
                        {courseQuestions.map((q, idx) => (
                          <div key={idx} className="flex items-start gap-2 p-2.5 rounded-lg border border-brand-line bg-white">
                            <span className="text-xs font-mono font-bold text-brand-muted mt-2 w-5">
                              {idx + 1}.
                            </span>
                            <textarea
                              rows={2}
                              value={q}
                              onChange={e => handleUpdateQuestion(idx, e.target.value)}
                              placeholder="Enter reflection prompt..."
                              className="flex-1 px-2.5 py-1.5 text-xs rounded border border-brand-line/60 focus:outline-none focus:ring-1 focus:ring-brand-ink leading-relaxed"
                            />
                            <button
                              type="button"
                              onClick={() => handleDeleteQuestion(idx)}
                              className="p-1.5 text-red-500 hover:bg-red-50 rounded transition-colors"
                              title="Delete question"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'playbooks' && (
                  <div className="space-y-4 pt-1">
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-brand-muted">
                        Tactical playbooks and content pillars rendered for this chapter.
                      </p>
                      <button
                        type="button"
                        onClick={handleAddDiscipline}
                        className="px-2.5 py-1 bg-brand-ink text-brand-bg rounded-lg text-xs font-semibold flex items-center gap-1 hover:opacity-90"
                      >
                        <Plus size={12} />
                        <span>Add Playbook</span>
                      </button>
                    </div>

                    {courseDisciplines.length === 0 ? (
                      <div className="p-8 text-center border border-dashed border-brand-line rounded-xl text-brand-muted text-xs">
                        No playbooks configured. Click "Add Playbook" to create one.
                      </div>
                    ) : (
                      <div className="space-y-4 max-h-[360px] overflow-y-auto pr-1">
                        {courseDisciplines.map((d, idx) => (
                          <div key={d.id || idx} className="p-3.5 rounded-xl border border-brand-line bg-brand-bg/30 space-y-2.5">
                            <div className="flex items-center justify-between gap-2">
                              <div className="flex items-center gap-2 flex-1">
                                <span className="text-xs font-mono font-bold text-brand-muted">
                                  #{idx + 1}
                                </span>
                                <input 
                                  type="text"
                                  value={d.title}
                                  onChange={e => handleUpdateDiscipline(idx, 'title', e.target.value)}
                                  placeholder="Playbook Title"
                                  className="flex-1 px-2.5 py-1.5 text-xs font-bold rounded border border-brand-line bg-white focus:outline-none focus:ring-1 focus:ring-brand-ink"
                                />
                              </div>
                              <button
                                type="button"
                                onClick={() => handleDeleteDiscipline(idx)}
                                className="p-1.5 text-red-500 hover:bg-red-50 rounded transition-colors"
                                title="Delete playbook"
                              >
                                <Trash2 size={14} />
                              </button>
                            </div>

                            <textarea
                              rows={4}
                              value={d.description}
                              onChange={e => handleUpdateDiscipline(idx, 'description', e.target.value)}
                              placeholder="Detailed guidance, workflows, pro-tips, and examples..."
                              className="w-full px-2.5 py-2 text-xs rounded border border-brand-line bg-white focus:outline-none focus:ring-1 focus:ring-brand-ink leading-relaxed"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-brand-line flex items-center justify-between bg-brand-bg/40">
            <div>
              {onResetToDefault && (
                <button
                  type="button"
                  onClick={() => {
                    if (window.confirm('Reset all custom curriculum edits back to original default?')) {
                      onResetToDefault();
                      onClose();
                    }
                  }}
                  className="text-xs text-brand-muted hover:text-red-600 flex items-center gap-1.5 transition-colors"
                >
                  <RotateCcw size={12} />
                  <span>Reset to Defaults</span>
                </button>
              )}
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-semibold border border-brand-line text-brand-ink hover:bg-black/5 transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSave}
                className="px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-brand-ink text-brand-bg hover:opacity-90 transition-opacity flex items-center gap-1.5 shadow-sm"
              >
                {savedToast ? (
                  <>
                    <CheckCircle2 size={14} className="text-emerald-400" />
                    <span>Saved!</span>
                  </>
                ) : (
                  <>
                    <Save size={14} />
                    <span>Save Changes</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
