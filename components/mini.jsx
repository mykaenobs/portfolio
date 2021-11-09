import Link from 'next/link'

const Mini = () => {
  return (
    <section className="bg-purple-900">
      <div className="pb-8 pt-8 max-w-container mr-auto ml-auto flex justify-between text-white text-opacity-50 text-sm font-light">
        <div>
          <Link href="#"><a className="flex items-center gap-4"><span className="inline-block w-6 h-6 bg-red-200"></span> <span>Web App Development</span></a></Link>
        </div>
        <div>
          <Link href="#"><a className="flex items-center gap-4"><span className="inline-block w-6 h-6 bg-red-200"></span> <span>UI/UX Design</span></a></Link>
        </div>
        <div>
          <Link href="#"><a className="flex items-center gap-4"><span className="inline-block w-6 h-6 bg-red-200"></span> <span>Applications</span></a></Link>
        </div>
        <div>
          <Link href="#"><a className="flex items-center gap-4"><span className="inline-block w-6 h-6 bg-red-200"></span> <span>Problem Solving</span></a></Link>
        </div>
        <div>
          <Link href="#"><a className="flex items-center gap-4"><span className="inline-block w-6 h-6 bg-red-200"></span> <span>SEO system</span></a></Link>
        </div>
      </div>
    </section>
  );
}
export default Mini;