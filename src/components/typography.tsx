export interface H1Props {
  children: React.ReactNode;
}

export function H1({ children }: H1Props) {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {children}
    </h1>
  );
}

export interface H2Props {
  children: React.ReactNode;
}

export function H2({ children }: H2Props) {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {children}
    </h2>
  );
}

export interface H3Props {
  children: React.ReactNode;
}

export function H3({ children }: H3Props) {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {children}
    </h3>
  );
}

export interface H4Props {
  children: React.ReactNode;
}

export function H4({ children }: H4Props) {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {children}
    </h4>
  );
}

export interface PProps {
  children: React.ReactNode;
}

export function P({ children }: PProps) {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>;
}

export interface BlockQuoteProps {
  children: React.ReactNode;
}

export function BlockQuote({ children }: BlockQuoteProps) {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">{children}</blockquote>
  );
}

/**
 * Table은 추후 추가
 */

export interface ListProps {
  children: React.ReactNode;
}

export function List({ children }: ListProps) {
  return <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>;
}

export interface InlineCodeProps {
  children: React.ReactNode;
}

export function InlineCode({ children }: InlineCodeProps) {
  return (
    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
      {children}
    </code>
  );
}

export interface LeadProps {
  children: React.ReactNode;
}

export function Lead({ children }: LeadProps) {
  return <p className="text-xl text-muted-foreground">{children}</p>;
}

export interface LargeProps {
  children: React.ReactNode;
}

export function Large({ children }: LargeProps) {
  return <div className="text-lg font-semibold">{children}</div>;
}

export interface SmallProps {
  children: React.ReactNode;
}

export function Small({ children }: SmallProps) {
  return <small className="text-sm font-medium leading-none">{children}</small>;
}

export interface MutedProps {
  children: React.ReactNode;
}

export function Muted({ children }: MutedProps) {
  return <p className="text-sm text-muted-foreground">{children}</p>;
}
