import { Modal } from "antd"

export const IndividualPeripheral = ({info, onCancel, open}) => {

    let configValues = []

    info.values.forEach(item => {
        let i = 0
        configValues.push({
            value: item,
            name: info.fields[i].name
        })
        i++
    })

    return(
        <Modal destroyOnClose onCancel={onCancel} title='Informacion de periferico' open={open}>
            <h3>Nombre: {info.name}</h3>
            <h3>ActionTypeName: {info.actionTypeName}</h3>
            <h3>Config values:</h3>
            { configValues.map((item) => (
                <h3>{item.name}: {item.value}</h3>
            )) }
        </Modal>
    )
}