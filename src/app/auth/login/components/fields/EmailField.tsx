'use client';

interface EmailFieldProps {
  value: string;
  onChange: (value: string) => void;
}

export default function EmailField({ value, onChange }: EmailFieldProps) {
  return (
    <>
      <label htmlFor="email">Email</label>
      <div className="input-group">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Masukkan email"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required
        />
      </div>
    </>
  );
}
