import Image from "next/image"
import Link from "next/link"
import { projects } from "../../data"
import Head from 'next/head'

const Products = ({ product }) => {
    return (
        <>
        <Head>
        <title>Comma Technologies - {product.title}</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
    <section className="text-gray-200 body-font bg-black">
  <div className="max-w-7xl md:h-[80vh] align-middle mx-auto flex px-5 pt-24 pb-14 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full text-center items-center md:w-1/2 w-full mb-10 md:mb-0 relative">
    <Image src={`/projects/${product.img}`} className="object-cover object-center rounded" width={1200} height={2000}
      alt="" />
      </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start text-left items-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#FE5B7C]">{product.title}</h1>
      <p className="mb-8 leading-relaxed">{product.longDesc}</p>
     
      <p className="text-sm mt-2 text-gray-300 mb-8 w-full">{product.description}</p>
      <Link className="rounded-sm bg-red-500  py-3 hover:bg-red-600 px-7" href={product.web}>
        Have A Look
      </Link>
    </div>
  </div>
</section>
    </>
    )
}

export const getStaticPaths = async () => {
    const products = projects;
    const paths = products.map(item => {
        return {
            params: { name: item.name }
        };
    });
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (ctx) => {
    const name = ctx.params.name;
    const product = projects.filter((item) => item.name == name)[0];
    return {
        props: { product },
    }
}

export default Products