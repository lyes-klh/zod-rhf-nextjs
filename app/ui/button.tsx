type ButtonProps = {
  children: React.ReactNode;
  loading: boolean;
};

export default function Button({ children, loading }: ButtonProps) {
  return (
    <button
      disabled={loading}
      className={
        "mt-6 w-full h-10 rounded bg-cyan-600 font-bold text-lg hover:bg-cyan-400 disabled:bg-slate-400 disabled:cursor-not-allowed"
      }
    >
      {children}
    </button>
  );
}
