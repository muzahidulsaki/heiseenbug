import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { SocialLinks } from '../ui/SocialLinks';
import { RingButton } from '../ui/RingButton';
import { Caterpillar } from '../brand/Caterpillar';
import { useContactForm } from '../../hooks/useContactForm';
import { contactDetails } from '../../data/navigation';
import { EASE } from '../../utils/motion';

const SERVICE_OPTIONS = [
  'AI & Automation',
  'EdTech',
  'FinTech',
  'Retail',
  'E-Commerce',
  'Pharma',
  'Startups',
  'Not sure yet',
];

const INPUT =
'w-full rounded-2xl border bg-bg px-4 py-3.5 text-[15px] placeholder:text-muted transition-[border-color,box-shadow] duration-150 focus:border-fg focus:outline-none focus:ring-4 focus:ring-accent/40';

export function Contact() {
  const { values, errors, status, setField, handleSubmit, reset } = useContactForm();
  const border = (field: keyof typeof errors) => errors[field] ? 'border-danger' : 'border-fg/25';

  return (
    <section id="contact" aria-labelledby="contact-title" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading id="contact-title" label="// contact" title="Got a bug? Let’s squash it together." />
          <p className="mt-6 max-w-md text-lg text-muted">
            Tell us what’s slowing your team down. A real engineer replies within one working day — no sales script.
          </p>

          <ul className="mt-10 space-y-5">
            <li>
              <a href={`mailto:${contactDetails.email}`} className="group flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-fg/25 transition-colors duration-150 group-hover:border-fg group-hover:bg-accent group-hover:text-accent-fg">
                  <MailIcon className="h-[18px] w-[18px]" strokeWidth={2} />
                </span>
                <span className="font-medium">{contactDetails.email}</span>
              </a>
            </li>
            <li>
              <a href={`tel:${contactDetails.phone.replace(/\s/g, '')}`} className="group flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-fg/25 transition-colors duration-150 group-hover:border-fg group-hover:bg-accent group-hover:text-accent-fg">
                  <PhoneIcon className="h-[18px] w-[18px]" strokeWidth={2} />
                </span>
                <span className="font-medium">{contactDetails.phone}</span>
              </a>
            </li>
            <li className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-fg/25">
                <MapPinIcon className="h-[18px] w-[18px]" strokeWidth={2} />
              </span>
              <span className="font-medium">{contactDetails.location}</span>
            </li>
          </ul>

          <p className="mt-10 font-mono text-xs text-muted">// elsewhere</p>
          <SocialLinks className="mt-3" />
        </div>

        <div className="rounded-[28px] border border-fg p-6 sm:p-10 lg:col-span-7">
          <AnimatePresence mode="wait" initial={false}>
            {status === 'success' ?
            <motion.div
              key="success"
              role="status"
              className="flex min-h-[520px] flex-col items-start justify-center"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: EASE }}>
              
                <Caterpillar className="h-12 w-[106px] text-fg" />
                <h3 className="mt-8 font-display text-3xl font-bold tracking-tight">Message received, {values.name.split(' ')[0]}.</h3>
                <p className="mt-3 max-w-md text-muted">
                  We’ll read it properly and reply to <span className="font-medium text-fg">{values.email}</span> within one working
                  day.
                </p>
                <RingButton variant="outline" onClick={reset} className="mt-8">
                  Send another message
                </RingButton>
              </motion.div> :

            <motion.form
              key="form"
              noValidate
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: EASE }}>
              
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                    id="contact-name"
                    type="text"
                    autoComplete="name"
                    value={values.name}
                    onChange={(e) => setField('name', e.target.value)}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'contact-name-error' : undefined}
                    placeholder="Ada Lovelace"
                    className={`${INPUT} mt-2 ${border('name')}`} />
                  
                    {errors.name &&
                  <p id="contact-name-error" className="mt-2 text-sm text-danger">
                        {errors.name}
                      </p>
                  }
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="text-sm font-medium">
                      Work email
                    </label>
                    <input
                    id="contact-email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={(e) => setField('email', e.target.value)}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'contact-email-error' : undefined}
                    placeholder="ada@company.com"
                    className={`${INPUT} mt-2 ${border('email')}`} />
                  
                    {errors.email &&
                  <p id="contact-email-error" className="mt-2 text-sm text-danger">
                        {errors.email}
                      </p>
                  }
                  </div>
                </div>

                <fieldset aria-describedby={errors.service ? 'contact-service-error' : undefined}>
                  <legend className="text-sm font-medium">Service you’re interested in</legend>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {SERVICE_OPTIONS.map((opt, i) => {
                    const checked = values.service === opt;
                    return (
                      <label key={opt} className="cursor-pointer">
                          <input
                          id={i === 0 ? 'contact-service' : undefined}
                          type="radio"
                          name="service"
                          value={opt}
                          checked={checked}
                          onChange={() => setField('service', opt)}
                          className="peer sr-only" />
                        
                          <span
                          className={`flex h-11 items-center rounded-full border px-5 text-sm font-medium transition-[background-color,color,border-color] duration-150 peer-focus-visible:ring-2 peer-focus-visible:ring-fg peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-bg ${
                          checked ?
                          'border-fg bg-accent text-accent-fg' :
                          errors.service ?
                          'border-danger hover:border-fg' :
                          'border-fg/25 hover:border-fg'}`
                          }>
                          
                            {opt}
                          </span>
                        </label>);

                  })}
                  </div>
                  {errors.service &&
                <p id="contact-service-error" className="mt-2 text-sm text-danger">
                      {errors.service}
                    </p>
                }
                </fieldset>

                <div>
                  <label htmlFor="contact-message" className="text-sm font-medium">
                    What’s bugging you?
                  </label>
                  <textarea
                  id="contact-message"
                  rows={5}
                  value={values.message}
                  onChange={(e) => setField('message', e.target.value)}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'contact-message-error' : undefined}
                  placeholder="Our approvals live in email and nobody knows what’s pending…"
                  className={`${INPUT} mt-2 resize-y ${border('message')}`} />
                
                  {errors.message &&
                <p id="contact-message-error" className="mt-2 text-sm text-danger">
                      {errors.message}
                    </p>
                }
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-muted">We never share your details.</p>
                  <RingButton type="submit" variant="solid" loading={status === 'submitting'}>
                    {status === 'submitting' ? 'Sending…' : 'Send message'}
                  </RingButton>
                </div>
              </motion.form>
            }
          </AnimatePresence>
        </div>
      </div>
    </section>);

}