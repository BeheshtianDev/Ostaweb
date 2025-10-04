import './style.modules.css'
const DesktopCardSlider=()=>{
    return(
        <div dir={'ltr'} className={'relative lg:flex flex justify-center items-center'}>

            <div className="container">
                <div className="card">
                    <h3 className="title">وبسایت شماره 4</h3>
                    <div className="bar">
                        <div className="emptybar"></div>
                        <div className="filledbar"></div>
                    </div>
                    <div className="circle">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <circle className="stroke" cx="60" cy="60" r="50"/>
                        </svg>
                    </div>
                </div>
                <div className="card">
                    <h3 className="title">وبسایت شماره3</h3>
                    <div className="bar">
                        <div className="emptybar"></div>
                        <div className="filledbar"></div>
                    </div>
                    <div className="circle">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <circle className="stroke" cx="60" cy="60" r="50"/>
                        </svg>
                    </div>
                </div>
                <div className="card">
                    <h3 className="title">وب سایت شماره 4</h3>
                    <div className="bar">
                        <div className="emptybar"></div>
                        <div className="filledbar"></div>
                    </div>
                    <div className="circle">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <circle className="stroke" cx="60" cy="60" r="50"/>
                        </svg>
                    </div>
                </div>
                <div className="card">
                    <h3 className="title">وب سایت شماره 5</h3>
                    <div className="bar">
                        <div className="emptybar"></div>
                        <div className="filledbar"></div>
                    </div>
                    <div className="circle">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <circle className="stroke" cx="60" cy="60" r="50"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DesktopCardSlider