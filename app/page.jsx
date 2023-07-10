import Feed from '@components/Feed'

export default function Home () {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">
                Discover & Share
                <br className="min-md:hidden"/>
                <span className="orange_gradient text-center">AI-Powred Promts</span>
            </h1>
            <p className="desc text-center">
                Promptopia is a OpenSource AI prompting tool for moder 
                world to discover, create and share creative prompts.
            </p>
            <Feed></Feed>
        </section>
    )
}