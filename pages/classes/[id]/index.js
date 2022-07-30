import Head from "next/head";
import Image from "next/image";
import { useRouter } from 'next/router'
import Link from "next/link";


export default function Home() {
  const router = useRouter()
  const { id } = router.query

  console.log(router.query)
  return (
    <>
      <div className="bg-indigo-700 text-white rounded w-fit h-fit p-2 m-2">
        <Link href='/' className="w-fit">
          Back to Home
        </Link>
      </div>
      <div>
        <h1>
          {id ? `Class ${id}` : 'Classes'}

        </h1>
      </div>
    </>
  )
}
