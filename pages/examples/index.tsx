import React, { useContext } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Container from '@mui/material/Container';
import classes from '../.././styles/pages/examplesPage/examplesPage.module.css'
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { ContextStore } from '../../contextStore/contextStore'



const Examples = () => {

  const ctx = useContext(ContextStore)
  console.log("ctx.examples", ctx.examples)

  return (
    <div>
      <Head>
        <title>Examples Page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="title" />
      </Head>
      <Container maxWidth="sm" className={classes.examplesContainer}>



        <ImageList sx={{ width: 500, height: 1000 }} className={classes.imgList} >
          {ctx.examples.map((item) => (

            <ImageListItem key={item.img} >
              <Link href={`examples/${item.title}`} >
                <>
                  <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    title={item.title}
                    subtitle={<span>by: {item.author}</span>}
                    position="below"
                  />
                </>
              </Link>
            </ImageListItem>

          ))}
        </ImageList>
      </Container>
    </div>
  )
}

export default Examples