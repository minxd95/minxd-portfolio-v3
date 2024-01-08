interface PageDescriptionProps {
  children: React.ReactNode;
}

export function PageDescription({ children }: PageDescriptionProps) {
  return (
    <p className="p-4 mt-4 font-light bg-secondary rounded-md text-center leading-relaxed">
      {children}
    </p>
  );
}
