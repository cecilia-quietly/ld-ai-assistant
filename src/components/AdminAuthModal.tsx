/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lock, Unlock, Eye, EyeOff, Shield, X, AlertCircle, CheckCircle2, KeyRound } from 'lucide-react';

interface AdminAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const ADMIN_PASSCODE = 'ldadmin808';

export const AdminAuthModal: React.FC<AdminAuthModalProps> = ({
  isOpen,
  onClose,
  onSuccess
}) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setPassword('');
      setError(null);
      setIsSuccess(false);
      setShowPassword(false);
      // Autofocus input
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password.trim() === ADMIN_PASSCODE) {
      setIsSuccess(true);
      setTimeout(() => {
        onSuccess();
        onClose();
      }, 400);
    } else {
      setError('Incorrect passcode. Access is restricted to Quietly administrators.');
      inputRef.current?.select();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-[600] flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.15 }}
            className="w-full max-w-md bg-white rounded-2xl border border-brand-line shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-brand-bg px-6 py-5 border-b border-brand-line flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-100 border border-amber-300/80 flex items-center justify-center text-amber-900 shadow-xs">
                  <Shield size={18} className="text-amber-800" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-brand-ink leading-tight">Admin Authentication</h3>
                  <p className="text-xs text-brand-muted font-light">Quietly L&D Portal Management</p>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 rounded-lg border border-brand-line/60 text-brand-muted hover:text-brand-ink hover:bg-white transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X size={16} />
              </button>
            </div>

            {/* Form Content */}
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              <p className="text-xs text-brand-ink/80 leading-relaxed font-light">
                Enter the administrator passcode to unlock draft module previews, edit lesson details, and manage curriculum publishing.
              </p>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-brand-ink mb-1.5">
                  Administrator Passcode
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-brand-muted">
                    <KeyRound size={15} />
                  </div>
                  <input
                    ref={inputRef}
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (error) setError(null);
                    }}
                    placeholder="Enter passcode"
                    className="w-full pl-9 pr-10 py-2.5 bg-slate-50 border border-brand-line rounded-xl text-sm text-brand-ink placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-ink/20 focus:border-brand-ink focus:bg-white transition-all font-mono"
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-brand-muted hover:text-brand-ink cursor-pointer"
                    tabIndex={-1}
                  >
                    {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
              </div>

              {error && (
                <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-800 animate-fade-in">
                  <AlertCircle size={15} className="shrink-0 mt-0.5 text-red-600" />
                  <span>{error}</span>
                </div>
              )}

              {isSuccess && (
                <div className="flex items-center gap-2 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 animate-fade-in">
                  <CheckCircle2 size={15} className="shrink-0 text-emerald-600" />
                  <span>Passcode verified. Unlocking admin mode...</span>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex items-center justify-between gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-brand-ink/70 hover:text-brand-ink rounded-xl border border-brand-line hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!password.trim() || isSuccess}
                  className="px-5 py-2 text-xs font-bold uppercase tracking-wider bg-brand-ink text-brand-bg hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed rounded-xl transition-all shadow-md flex items-center gap-2 cursor-pointer"
                >
                  {isSuccess ? (
                    <>
                      <Unlock size={14} />
                      <span>Unlocked</span>
                    </>
                  ) : (
                    <>
                      <Lock size={14} />
                      <span>Unlock Admin</span>
                    </>
                  )}
                </button>
              </div>

              <div className="border-t border-brand-line/40 pt-3 mt-1">
                <p className="text-[11px] text-brand-muted leading-relaxed">
                  <strong className="font-semibold text-brand-ink/70">Tip:</strong> You can also append <code className="bg-slate-100 text-slate-700 px-1 py-0.5 rounded text-[10px] font-mono">?admin=ldadmin808</code> to the page URL or press <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-200 rounded text-[10px] font-mono">Ctrl+Shift+A</kbd> to unlock automatically.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
