import { useContext, useState } from 'react'
import { createNewPeripheral } from '../client/ClientePrueba'
import { Select, Input, Form } from 'antd'
import { appContext } from '../context/appContext'

const PeriphericCreation = () => {

    let i = 0
    const { reportValueKind } = useContext(appContext)
    const [reportValueKindList, setReportValueKindList] = useState(reportValueKind.map(item => {
        let current = {value: i, label: item}
        i++
        return current
    }))
    console.log(reportValueKindList)
    // const submitPeripheral = () => {

    // }

    return(
        <div className="periphericCreation">
            <Form>
                <Form.Item name='name'>
                    <Input placeholder='Nombre'/>
                </Form.Item>
                <Form.Item>
                    <Select
                        options={reportValueKindList}
                    />
                </Form.Item>
            </Form>
        </div>
    )
}

export default PeriphericCreation