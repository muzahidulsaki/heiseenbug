import { FormEvent, useState } from 'react';
import { router } from '@inertiajs/react';

export type ContactValues = {
  name: string;
  email: string;
  service: string;
  message: string;
};

type ContactErrors = Partial<Record<keyof ContactValues, string>>;
type ContactStatus = 'idle' | 'submitting' | 'success';

const INITIAL: ContactValues = { name: '', email: '', service: '', message: '' };

export function useContactForm() {
  const [values, setValues] = useState<ContactValues>(INITIAL);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<ContactStatus>('idle');

  const setField = (field: keyof ContactValues, value: string) => {
    setValues((v) => ({ ...v, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const next = validate(values);
    setErrors(next);
    const firstError = Object.keys(next)[0] as keyof ContactValues | undefined;
    if (firstError) {
      document.getElementById(`contact-${firstError}`)?.focus();
      return;
    }

    setStatus('submitting');

    router.post('/contact', values, {
      preserveScroll: true,
      onSuccess: () => {
        setStatus('success');
      },
      onError: (serverErrors) => {
        setErrors(serverErrors as ContactErrors);
        setStatus('idle');
      },
    });
  };

  const reset = () => {
    setValues(INITIAL);
    setErrors({});
    setStatus('idle');
  };

  return { values, errors, status, setField, handleSubmit, reset };
}

function validate(v: ContactValues): ContactErrors {
  const errors: ContactErrors = {};
  if (!v.name.trim()) errors.name = 'Tell us what to call you.';
  if (!v.email.trim()) errors.email = 'We need an email to reply to.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) errors.email = 'That email looks off — check for typos.';
  if (!v.service) errors.service = 'Pick the closest fit — “Not sure yet” is fine.';
  if (v.message.trim().length < 10) errors.message = 'A sentence or two about the problem helps us prepare.';
  return errors;
}