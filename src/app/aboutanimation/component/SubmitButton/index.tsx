interface Props {
    children: string;
    width?: string;
    height?: string;

}

const SubmitButton = ({...items}: Props) => {
    const {
        children,
        width = '214px',
        height = '57px'
    } = items;
    return (
        // <button
        //     style={{
        //         backgroundColor: color,
        //         width: width,
        //         height: height
        //     }}
        //     type="button"
        //     className={`justify-center px-5 py-3 text-base font-medium
        //                 inline-flex items-center text-white rounded-lg focus:ring-4
        //                 focus:outline-none focus:ring-[${color}a6]`}
        // >
        //     {/*<div className="w-[40px] h-[40px] bg-black rounded-4xl left-[-22] absolute"></div>*/}
        //     {children}
        // </button>
        <button
            style={{
                // backgroundColor: color,
                width: width,
                height: height
            }}
            className="hover:bg-white
            hover:text-black
             rounded-lg text-white font-bold py-2 px-4 rounded inline-flex items-center border border-white">
            <span className={'mx-auto'}>{children}</span>

            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
            </svg>

        </button>
    );
};

export default SubmitButton;
