import { Form, InputNumber, Input, Select } from "antd"

const DynamicFields = ({selectedActionType, setSelectedInput, setSelectedSecondsDelay, setSelectedIsAnalog, setSelectedSignal, setSelectedInterruptType, setSelectedReadType, setSelectedReadTypeParameter, setSelectedDelayToActivate, setSelectedDelayToDeactivate, setSelectedOutput, setSelectedInterval, setSelectedEcho, setSelectedTrigger}) => {
    if(selectedActionType == 1){
        return(
            <>
                <Form.Item label='Input:'>
                    <Input onChange={(e) => setSelectedInput(e.target.value)}/>
                </Form.Item>
                <Form.Item label='Seconds delay:'>
                    <Input placeholder='Seconds Delay' onChange={(e) => setSelectedSecondsDelay(e.target.value)}/>
                </Form.Item>
                <Form.Item label='Analogo: '>
                    <Select 
                        options={[{value: 1, label: 'Si'}, {value: 0, label: 'No'}]}
                        onChange={(e) => setSelectedIsAnalog(e)}
                    />
                </Form.Item>
            </>
        )
    }else if(selectedActionType == 2){
        return(
            <>
                <Form.Item label='Señal:'>
                    <InputNumber onChange={(e) => setSelectedSignal(e.target.value)}/>
                </Form.Item>
                <Form.Item label='Tipo de interruptor:'>
                    <Select 
                        options={[{value: 0, label: 'Rising'}, {value: 1, label: 'Falling'}, {value: 2, label: 'High'}, {value: 3, label: 'Low'}]}
                        onChange={(e) => setSelectedInterruptType(e)}
                    />
                </Form.Item>
                <Form.Item label='Tipo de lectura'>
                    <Input onChange={(e) => setSelectedReadType(e.target.value)}/>
                </Form.Item>
                <Form.Item label='Parametro del tipo de lectura'>
                    <Input onChange={(e) => setSelectedReadTypeParameter(e.target.value)}/>
                </Form.Item>
            </>
        )
    }else if(selectedActionType == 3 || selectedActionType == 4){
        return(
            <>
                <Form.Item label='Salida:'>
                    <InputNumber onChange={(e) => setSelectedOutput(e.target.value)}/>
                </Form.Item>
                <Form.Item label='Delay to activate:'>
                    <InputNumber placeholder='Delay to activate' onChange={(e) => setSelectedDelayToActivate(e.target.value)}/>
                </Form.Item>
                <Form.Item label='Delay to deactivate:'>
                    <InputNumber placeholder='Delay to deactivate' onChange={(e) => setSelectedDelayToDeactivate(e.target.value)}/>
                </Form.Item>
            </>
        )
    }else if(selectedActionType == 5 || selectedActionType == 6){
        return(
            <>
                <Form.Item label='Salida:'>
                    <InputNumber onChange={(e) => setSelectedOutput(e.target.value)}/>
                </Form.Item>
                <Form.Item label='Señal:'>
                    <InputNumber onChange={(e) => setSelectedSignal(e.target.value)}/>
                </Form.Item>
                <Form.Item label='Tipo de interruptor:'>
                    <Select 
                        options={[{value: 0, label: 'Rising'}, {value: 1, label: 'Falling'}, {value: 2, label: 'High'}, {value: 3, label: 'Low'}]}
                        onChange={(e) => setSelectedInterruptType(e)}
                    />
                </Form.Item>
            </>
        )
    }else if(selectedActionType == 7){
        return(
            <>
                <Form.Item label='Trigger:'>
                    <InputNumber onChange={(e) => setSelectedTrigger(e.target.value)}/>
                </Form.Item>
                <Form.Item label='Echo:'>
                    <InputNumber onChange={(e) => setSelectedEcho(e.target.value)}/>
                </Form.Item>
                <Form.Item label='Interval:'>
                    <InputNumber placeholder='interval' onChange={(e) => setSelectedInterval(e.target.value)}/>
                </Form.Item>
            </>
        )
    }
}

export default DynamicFields