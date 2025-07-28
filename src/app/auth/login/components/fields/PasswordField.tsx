'use client';

import { useState } from 'react';

interface PasswordFieldProps {
  value: string;
  onChange: (value: string) => void;
}

export default function PasswordField({ value, onChange }: PasswordFieldProps) {
  const [show, setShow] = useState(false);

  return (
    <>
      <label htmlFor="password">Kata Sandi</label>
      <div className="input-group password-group">
        <input
          type={show ? 'text' : 'password'}
          id="password"
          name="password"
          placeholder="Masukkan kata sandi"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required
        />
        <span
          className="toggle-password"
          onClick={() => setShow((prev) => !prev)}
        >
          {show ? 'Hide' : 'Show'}
        </span>
      </div>
    </>
  );
}
