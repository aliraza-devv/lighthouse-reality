import React from 'react'

type FormErrorProps = {
    msg: string | undefined
}

const FormError: React.FC<FormErrorProps> = ({ msg }) => {
  return (
    <div className='form__error'>
        <p className='form__error--text'>{msg}</p>
    </div>
  )
}

export default FormError