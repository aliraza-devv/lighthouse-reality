import React from 'react'

type FormHeaderProps = {
    heading: string,
    subHeading: string
}

const FormHeader: React.FC<FormHeaderProps> = ({ heading, subHeading }) => {
  return (
    <>
    <p className="heading-big">{heading}</p>
        <p className="paragraph-medium u-margin-bottom-small">{subHeading}</p>
    </>
  )
}

export default FormHeader