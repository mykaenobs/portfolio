const Footer = () => {
  return (
    <footer className="mt-40 bg-grey-100">
      <div className="max-w-container ml-auto mr-auto flex items-center justify-between pt-8 pb-8">
        <div className="w-8 h-8 bg-grey-200"><span></span></div>
        <p className="font-light text-grey-900 text-sm">&copy; 2021 Myka Enobs. All rights reserved.</p>
        <div className="flex gap-8">
          <span className="w-10 h-10 bg-red-100 rounded-md"></span>
          <span className="w-10 h-10 bg-red-100 rounded-md"></span>
          <span className="w-10 h-10 bg-red-100 rounded-md"></span>
          <span className="w-10 h-10 bg-red-100 rounded-md"></span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;