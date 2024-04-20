import React from 'react'
import InputSearch from '@/features/ui/inputSearch/inputSearch'

const SearchModal = () => {
    return (
        <div className="searchModal">
            <div className="searchModal__overlay">
                <div className={'searchModal__wrapper'}>
                    <div className="searchModal__block">
                        <InputSearch/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchModal
