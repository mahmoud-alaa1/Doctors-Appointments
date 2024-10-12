function ErrorInputFieldMassage({ children }) {
  return typeof children === "string" && children.length > 0 ? (
    <h3>{children}</h3>
  ) : null;
}

export default ErrorInputFieldMassage;
