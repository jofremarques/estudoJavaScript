import Head from "next/head";
import { MetaTags } from "./type";

export function DOMHead({description,title,keyWords,robots}:MetaTags){


    return (
        <Head>
            <title> {title} </title>
            <meta name="description" content={ description }/>
            <meta name="robots" content={robots}/>
            <meta name="keyWords" content={keyWords}/>
            <meta name="author" content="Jofre Marques" />
        </Head>
    )
}