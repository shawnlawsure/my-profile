import { Fragment } from 'react'

type ViewProps = {
    heading: string,
    children: React.ReactNode
}

export default function View(props:ViewProps) {
    return (
        <div className='p-8 flex flex-col gap-8'>
            <h2 className='w-full text-center'>{props.heading}</h2>
            <Fragment>
                {props.children}
            </Fragment>
        </div>
    )
}