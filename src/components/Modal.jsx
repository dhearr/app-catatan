export default function Modal({ isVisible, children }) {
  if (!isVisible) return null;
  return (
    <div className="fixed inset-0 bg-black backdrop-blur-sm flex justify-center">
      {children}
    </div>
  );
}
