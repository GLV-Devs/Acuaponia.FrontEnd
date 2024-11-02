import { Button, Modal } from "antd"

export const IndividualPeripheral = ({info, onCancel, open}) => {

    console.log(info)

    let configValues = []
    let i = 0

    info.values.forEach(item => {
        configValues.push({
            value: item,
            name: info.fields[i].name
        })
        console.log(configValues)
        i = i + 1
    })

    const styles = {
        margin: '0px'
    }

    return(
        <Modal
            destroyOnClose
            onCancel={onCancel}
            // title='Informacion de periferico'
            open={open}
            footer={[
                <Button type="primary" onClick={onCancel}>Cerrar</Button>
            ]}
        >
            <h3 style={styles}>Nombre: {info.name}</h3>
            <h3 style={styles}>ActionTypeName: {info.actionTypeName}</h3>
            <h2 style={{margin: '20px 0px 0px 0px'}}>Valores configurados:</h2>
            { configValues.map((item) => (
                <h3 style={styles}>{item.name}: {item.value}</h3>
            )) }
        </Modal>
    )
}