import Link from 'next/link';
import Image from 'next/image';

const Portfolio = ({ reversed }) => {
  return (
    <section className={"max-w-wrapper ml-auto mr-auto flex justify-between " + reversed + " items-center gap-32 mt-20"}>
      <div className="bg-grey-100 flex-1 h-80 relative">
        <div className="transform rotate-6 w-full h-full">
          <Image src="/images/project-01.png" className="transform" alt="Project one" layout="fill" />
        </div>
      </div>
      <div className="flex-1">
        <small className="flex items-center gap-2 text-red-100">
          <hr className="border-red-100 w-4" />
          <span>Project 1</span>
        </small>
        <h1 className="text-grey-900 text-2xl font-semibold mt-2 mb-2">Branding Nice Studio</h1>
        <p className="text-sm text-grey-200 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nemo dicta quidem labore, repudiandae voluptas laboriosam reprehenderit sunt nihil, expedita numquam, veritatis facilis a atque.</p>
        <Link href="#"><a className="text-red-200 text-xs inline-block mt-2">Checkout Project</a></Link>
      </div>
    </section>
  );
}

export default Portfolio;