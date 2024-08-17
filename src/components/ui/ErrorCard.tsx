type ErrorCardProps = { message: string };

export const ErrorCard = ({ message }: ErrorCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-semibold">Something went wrong!</h1>
      <p className="text-lg">{message}</p>
    </div>
  );
};
