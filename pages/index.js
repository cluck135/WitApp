import Head from "next/head";
import Image from "next/image";
import classes from "../classes.ts";
import Link from "next/link";
export default function Home() {
  
  return (
    <div >
      <Head>
        <title>WITApp</title>
        <meta name="description"  />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <header className="flex justify-between">
          <h1 className="bg-indigo-700 text-white rounded p-2 m-2">WITappa</h1>
          <nav className=" text-white m-2">
            <ul className="flex flex-row ">
              <li className="bg-indigo-700 rounded p-2 m-2">
                Login
              </li>
              <li className="bg-indigo-700 rounded p-2 m-2">
                About
              </li>
            </ul>
          </nav>
        </header>
        <section className="bg-slate-400 w-screen h-100">
          {classes.map((item) => {
                return (
                  <ul>
                    <Link href={`/classes/${item.id}`}>
                      {item.courseTitle}
                    </Link>
                      Prof: {item.faculty[0] ? item.faculty[0].displayName : ''}
                  </ul>
                );
              })}
        </section>
      </main>
    </div>
  )
}
