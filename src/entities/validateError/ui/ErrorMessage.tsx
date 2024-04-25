import React from 'react'
import danger from '@/shared/image/validate/validate.svg'
import '../style/style.scss'

const ErrorMessage = ({parametr}: { parametr: string }) => {
    return (
        <div className="errorMessage">
            <img src={danger} alt="danger"/>
            {parametr}
        </div>
    )
}

export default ErrorMessage
