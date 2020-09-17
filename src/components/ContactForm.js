import React, { useState } from 'react';

const url = 'https://formcarry.com/s/s8LKiVs3g3xJ';
const successMessage = 'Thanks! I\'ll get back to you as soon as I can!';
const errorMessage = 'Uh oh...looks like something went wrong. Maybe try contacting me on social media?';

const extractFormData = form => {
  const data = new URLSearchParams();

  for (const [key, value] of new FormData(form)) {
    data.append(key, value);
  }

  return data;
};

const sendEmail = async (url, body) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: { Accept: 'application/json' },
    body
  });

  if (!response.ok) {
    throw new Error('Mail sending failed');
  }
};

const Contact = () => {
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async evt => {
    evt.preventDefault();
    evt.persist();
    setSending(true);

    try {
      await sendEmail(url, extractFormData(evt.target));
      evt.target.reset();
      setMessage(successMessage);
    } catch (error) {
      console.error(error);
      setMessage(errorMessage);
    } finally {
      setSending(false);
    }
  };

  return (
    <form
      acceptCharset="UTF-8"
      className="max-w-screen-sm mx-auto px-4 text-xl"
      onSubmit={handleSubmit}
    >
      <div className="text-left">
        <label
          htmlFor="email"
          className="text-xs uppercase tracking-wide text-gray-400"
        >
          Your email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          disabled={sending}
          required
          className="block w-full p-2 text-gray-900 bg-gray-200 shadow-inner disabled:bg-gray-500"
        />
      </div>

      <div className="text-left mt-4">
        <label
          htmlFor="contact-message"
          className="text-xs uppercase tracking-wide text-gray-400"
        >
          Your message
        </label>
        <textarea
          id="contact-message"
          name="message"
          disabled={sending}
          required
          className="block w-full p-2 text-gray-900 h-40 bg-gray-200 shadow-inner disabled:bg-gray-500"
        ></textarea>
      </div>

      <input
        type="text"
        name="_gotcha"
        className="opacity-0"
        aria-hidden
        tabIndex="-1"
      />

      <p
        className={`text-yellow-400 transition-transform duration-200 ease-in-out transform ${message === '' ? 'scale-y-0' : 'scale-y-100'}`}
      >
        {message}
      </p>

      <div className="flex justify-center mt-6">
        <button
          className={`bg-indigo-600 text-gray-100 uppercase tracking-wide font-display py-2 px-8 mt-4 transition-transform duration-200 ease-in-out transform ${sending ? 'cursor-default' : 'hover:scale-110'}`}
          disabled={sending}
          type="submit"
        >
          {sending
            ? <svg className="animate-spin fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 16 16"><path d="M3 8c0-.19.011-.378.032-.563l-2.89-.939A8.085 8.085 0 00.001 8c0 2.3.971 4.374 2.526 5.833l1.786-2.458A4.982 4.982 0 013.001 8zm10 0a4.978 4.978 0 01-1.312 3.375l1.786 2.458A7.975 7.975 0 0016 8c0-.513-.049-1.015-.141-1.502l-2.89.939c.021.185.032.373.032.563zM9 3.1a5.01 5.01 0 013.351 2.435l2.89-.939A8.01 8.01 0 009 .062V3.1zM3.649 5.535A5.007 5.007 0 017 3.1V.062A8.005 8.005 0 00.759 4.596l2.89.939zm6.422 7.017C9.44 12.84 8.739 13 8 13s-1.44-.16-2.071-.448L4.143 15.01C5.287 15.641 6.601 16 8 16s2.713-.359 3.857-.99l-1.786-2.458z"/><path fill="rgba(0, 0, 0, 0)" d="M0 0h16v16H0z"/></svg>
            : 'Send'
          }
        </button>
      </div>
    </form>
  );
};

export default Contact;
