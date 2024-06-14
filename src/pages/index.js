import Head from "next/head";
import Image from "next/image";
import { Poppins } from "next/font/google";
import styles from "@/styles/Home.module.css";
import {Header} from "../components/Header"
import {ListagemDeMotos} from "../components/tabela"

const poppins = Poppins({ subsets: ["latin"], weight:"400" });

export default function Home() {
return (
  <main 
  className={`${poppins.className}`}
  style={{
    backgroundColor:"#2a233c"

  }}>
<Header></Header>
<ListagemDeMotos/>
  </main>
)
}
