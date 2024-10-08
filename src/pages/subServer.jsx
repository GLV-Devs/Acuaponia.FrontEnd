import { LeftOutlined, LaptopOutlined, MobileOutlined } from "@ant-design/icons"

const SubServer = () => {
    return(
        <div className="SubServer">
            <div className="section1">
                <div>
                    <LeftOutlined/>
                    <h1>Titulo</h1>
                </div>
                <div className="Buttons">
                    <div className="Button1">
                        <h1>Title</h1>
                        <MobileOutlined/>
                    </div>
                    <div className="Button2">
                        <h2>Title</h2>
                    </div>
                    <div className="Button3">
                        <LaptopOutlined/>
                        <h1>Title</h1>
                    </div>
                </div>
            </div>

            <div className="section2">
                {/* Inserte codigo de un grafico aqui */}
                <div>
                    {/* Inserte codigo de un grafico aqui otra vez, pero de otro grafico */}
                    
                </div>
            </div>

            <div className='section3'>

            </div>

            <div className="section4">

            </div>
        </div>
    )
}

export default SubServer