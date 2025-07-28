type SubmitButtonProps = {
  text?: string;
  onClick?: () => void;
};

export default function SubmitButton({ text = 'MASUK SEKARANG', onClick }: SubmitButtonProps) {
  return (
    <button type="button" className="login-button" onClick={onClick}>
      {text}
    </button>
  );
}
