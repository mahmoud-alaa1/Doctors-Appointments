function FormUi({ children }) {
  return (
    <form className="p-6 shadow-form flex flex-col gap-4 m-auto max-w-[450px]  border border-[#D4D4D4] rounded-xl">
      {children}
    </form>
  );
}

function Header({ children }) {
  return <div>{children}</div>;
}
function Title({ children }) {
  return (
    <p className="text-2xl font-semibold mb-1 text-[#4B5563]">{children}</p>
  );
}
function Subtitle({ children }) {
  return <p className="text-lg ">{children}</p>;
}

function Body({ children }) {
  return <div className="flex flex-col gap-4">{children}</div>;
}

function Footer({ children }) {
  return <div>{children}</div>;
}

FormUi.Header = Header;
FormUi.Title = Title;
FormUi.Subtitle = Subtitle;
FormUi.Body = Body;
FormUi.Footer = Footer;

export default FormUi;
