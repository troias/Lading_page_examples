import React, { useContext, useEffect, useState, useCallback } from 'react'
import router, { useRouter } from 'next/router'
import classes from './example.module.css'
import { ContextStore } from '../../../contextStore/contextStore'

const Example = (props) => {
    const [example, setExample] = useState([])
    const { examples } = useContext(ContextStore)
    const router = useRouter()

    console.log("example", example)
    const getExample = useCallback(() => {
        const exampleTite = router.query.slug
        const fetchedExample = examples.filter(example => example.title === exampleTite)
        setExample(fetchedExample)

    }, [examples, router.query.slug])

    useEffect(() => {
        getExample()
    }, [getExample])

    return (
        <>

            <div className={classes.content}>
                {example.map(x => {
                    return (
                        <>
                            <h3 key={x.title}> {x.title} </h3>

                            <img
                                src={`${x.img}?w=248&fit=crop&auto=format`}
                                srcSet={`${x.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={x.title}
                                loading="lazy"
                            />
                        </>
                    )
                })}

            </div>
        </>
    )
}

export const getStaticPaths = async () => {



    return {
        fallback: "blocking",
        paths: [
            { params: { slug: "Breakfast" } },
            { params: { slug: "Burger" } }
        ]

    }
}

export const getStaticProps = async (ctx) => {

    const exampleTite = ctx.params.slug
    //need api

    return {
        props: {
            example: {
                // title: example.title,
                // image: example.image,
                // author: example.author,
            }

        },
        revalidate: 36000,
    }
}


export default Example
