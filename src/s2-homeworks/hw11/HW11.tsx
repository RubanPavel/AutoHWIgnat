import React, {useEffect, useState} from 'react'
import s from './HW11.module.css'
import s2 from '../../s1-main/App.module.css'
import {restoreState} from '../hw06/localStorage/localStorage'
import SuperRange from './common/c7-SuperRange/SuperRange'

/*
* 1 - передать значения в оба слайдера
* 2 - дописать типы и логику функции change
* 3 - сделать стили в соответствии с дизайном
* */

function HW11() {
    // for autotests // не менять // можно подсунуть в локалСторэдж нужные числа, чтоб увидеть как они отображаются


    const [value1, setValue1] = useState(restoreState<number>('hw11-value1', 10))
    console.log(value1 + 'value1')
    const [value2, setValue2] = useState(restoreState<number[]>('hw11-value2', [value1, 100]))

    console.log(value2 + 'value2')


    const change = (event: Event, newValue: number | number[]) => {

        if (Array.isArray(newValue)) {
            setValue2([newValue[0], newValue[1]])
            setValue1(newValue[0])
        } else {
            setValue1(newValue)

        }
        // пишет студент // если пришёл массив - сохранить значения в оба useState, иначе в первый
    }


    return (

        <div id={'hw11'}>
            <div className={s2.hwTitle}>Homework #11</div>

            <div className={s2.hw}>
                <div className={s.container}>
                    <div className={s.wrapper}>
                        <span id={'hw11-value'} className={s.number}>{value1}</span>
                        <SuperRange
                            id={'hw11-single-slider'}
                            onChange={change}
                            onClick={(event) => setValue1(value1)}
                            color="primary"
                            value={value1}
                            valueLabelDisplay="on"


                            // сделать так чтоб value1 изменялось // пишет студент

                        />
                    </div>
                    <div className={s.wrapper}>
                        <span id={'hw11-value-1'} className={s.number}>{value1}</span>
                        <SuperRange
                            id={'hw11-double-slider'}
                            onChange={change}
                            value={value2}
                            onClick={(event) => setValue2([value2[0], value2[1]])}
                            color="secondary"
                            valueLabelDisplay="on"


                            // сделать так чтоб value1/2 изменялось // пишет студент

                        />

                        <span id={'hw11-value-3'} className={s.number}>{value2[1]}</span>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HW11
