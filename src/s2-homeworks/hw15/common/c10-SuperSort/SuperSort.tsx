import React from 'react'

import arrowDown from './img/arrowDown.svg'
import arrowUp from './img/arrowUp.svg'
import arrow from './img/arrow.svg'

const downIcon = arrowDown
const upIcon = arrowUp
const noneIcon = arrow

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    /*return sort === up ? "" : sort === down ? up : down*/
    switch (sort){
        case '':{
            return down
        }
        case up:{
            return ''
        }
        case down:{
            return up
        }
        default:
            return down
    }
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            <img
              id={id + '-icon-' + sort}
              style={{width: '13px', marginLeft:'10px', marginTop:'10px'}}
              src={icon} alt={''}

            />

        </span>
    )
}

export default SuperSort
