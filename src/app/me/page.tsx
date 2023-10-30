import View from "../view"

export default function Page() {
    return (
        <View heading='About Me'>
            <section className='flex flex-col gap-4 bg-wm-light py-1 px-2 rounded-lg border border-primary'>
                <p>For over 25 years I have worked in the Information Systems field as both a full-time employee and an independent contractor for a variety of companies.</p>
                <p>I have extensive professional experience with numerous programming languages and technologies including C#, JavaScript (including related libraries like React, Vue, and jQuery), SQL, VB.NET, and ASP.NET as well as a working knowledge of a great variety of others. I also have an advanced understanding of the concepts behind these technologies including Object-Oriented Programming, Relational Data, Functional Programming, MVC, and MVVM.</p>
                <p>I also have extensive professional experience using various database technologies, including SQL Server and mySQL, and have developed advanced skills in database design as well as SQL programming.</p>
                <p>For the past 4 or 5 years I have chosen to work primarily in front-end roles and to concentrate on learning technologies specific to the front-end. In my most recent professional role, I converted an existing Angular front-end application (SPA) to React using the latest recommendations including functional components and hooks. Prior to that, I was heavily involved in developing a webinar-like application using Vue and Nuxt.js.</p>
                <p>In nearly all of the work I have been involved with in the past 15 years I have played a lead role in the design as well as the development of the work.</p>
            </section>
        </View>
    )
}
